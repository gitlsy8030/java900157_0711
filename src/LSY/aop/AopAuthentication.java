package LSY.aop;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import LSY.annotation.AuthEnum;
import LSY.annotation.NamingAnnotation;
import LSY.annotation.SpringAuthorization;
import LSY.service_interface.ILoginInfoService;
import LSY.service_interface.IUserInfoService;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;

@Component
@Aspect
public class AopAuthentication {
	private static final String SpringAuthentication = null;
	private static final String AutnEnum = null;
	@Autowired
	private IUserInfoService userInfoService;
	@Autowired
	private ILoginInfoService loginInfoService;
//	@Pointcut(  "execution( public * LSY.springmvc_controller.*.*(..)) && "
//			+ "!execution( public * LSY.springmvc_controller.*Formatter.*(..)) && "			
//			+ "!execution( public * LSY.springmvc_controller.*.JdbcTemplateGetCategoriesAll(..)) && "
//			+ "!execution( public * LSY.springmvc_controller.*.GetCombobox(..))"
//		)
	@Pointcut("execution( public * LSY.springmvc_controller.*.*(..)) && @annotation(LSY.annotation.SpringAuthorization) ")
	private void PointcutMethod(){}
	
	@Before("PointcutMethod()")
	public void BeforeMethod(JoinPoint joinPoint) throws ServletException, IOException{
		System.out.println("AopAuthentication @Before");
		//HttpServletRequest request=WebUtils.GetCurrentRequest();
		HttpServletResponse response=WebUtils.GetCurrentResponse();	
		HttpServletRequest request= ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		String url=request.getRequestURI();	
		String requestType=request.getHeader("x-requested-with");
		Boolean isAjax=(requestType != null && requestType.equals("XMLHttpRequest"))? true:false;		
		try {
			String loginUserId=loginInfoService.GetLoginUserId();
			String methodName=joinPoint.getSignature().getName();
			String className=joinPoint.getClass().getSimpleName();
			MethodSignature signature = (MethodSignature) joinPoint.getSignature();
			Method method = signature.getMethod();
			
			SpringAuthorization anno=(SpringAuthorization)method.getAnnotation(SpringAuthorization.class);
			String parentUrl= anno.ParentUrl();
			if(!parentUrl.equals("")){
				url ="/LSYMain/"+parentUrl;
			}			
			System.out.println("parentUrl=>"+parentUrl+",url="+url+",type="+anno.type());
			if(method.getName().equals("DeleteSaveProduct") ){
				System.out.println("userInfoService methodName=>"+method.getName());
			}
			Boolean isAuth=userInfoService.IsUserAuthFun(loginUserId, url,anno.type());			
			if(!isAuth && !isAjax){
				response.sendRedirect(request.getContextPath()+"/NoAuthorizationServlet?action=Index");	
			}
			if(!isAuth && isAjax){
				JSONObject obj = new JSONObject();
				obj.put("code", NameUtils.NoAuthentication);
				obj.put("url",request.getContextPath()+"/NoAuthorizationServlet?action=Index");
				String out=obj.toJSONString();				
				response.getWriter().write(out);				
				return;
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}			
	}
}
