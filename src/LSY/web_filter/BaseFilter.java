package LSY.web_filter;

import java.awt.List;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Date;
import java.util.Calendar;
import java.util.Collection;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;

import LSY.annotation.NamingAnnotation;
import LSY.domain.LoginInfo;
import LSY.service_interface.IUserInfoService;
import LSY.utils.FactoryUitls;
import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.LoginForm;

public class BaseFilter implements Filter {
	private ServletContext application;
	@Override
	public void destroy() {		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {	
		request.setCharacterEncoding("UTF-8");
		String addr=request.getRemoteAddr();
		HttpServletRequest req=(HttpServletRequest)request;		
		HttpServletResponse res=(HttpServletResponse)response;		
		String uri=req.getRequestURI();	
		String requestType=request.getDispatcherType().name();		
		String contextPath=req.getContextPath();
		String funName="";
		String funId="";
		Boolean isFunAjax=false;
		if(req.getServletPath().contains("Servlet")){
			try {
				String fullName="LSY.web_controller"+req.getServletPath().replace("/", ".");				
				String type=req.getHeader("x-requested-with");
				if(type == null){
					System.out.println("x-requested-with=null");
				}
				else{
					if(type.equals("XMLHttpRequest")){
						isFunAjax=true;
					}
				}
				Class cls=Class.forName(fullName);
				NamingAnnotation annotation=(NamingAnnotation)cls.getAnnotation(NamingAnnotation.class);
				if(annotation !=null){
					funName=annotation.FunName();
				}
			} catch (ClassNotFoundException e) {
				
			}
		}
		//放行網頁所需css及js之request 
		if(uri.contains("/css/") || uri.contains("/js/") || uri.contains("/images/") || 
				uri.contains("GetTreeMenu") ||
				uri.contains("NoAuthorization") ||
				uri.contains("AuthoringImageServlet") ||
				uri.contains("AuthoringNumberServlet")){
			chain.doFilter(request,	response);
			System.out.println(uri);
			return;
		}		
		if(!uri.equals(contextPath+"/jsp_open/Login.jsp") &&
			!uri.equals(contextPath+"/jsp/NoAuthorization.jsp") &&
			!uri.equals(contextPath+"/jsp/ChangePassword.jsp") &&
			!uri.equals(contextPath+"/jsp/Register.jsp") &&			
			!uri.equals(contextPath+"/LoginServlet") &&
			!uri.contains(contextPath+"/ChangePasswordServlet") &&
			!uri.equals(contextPath+"/RegisterServlet")){
			IUserInfoService service=FactoryUitls.CreateUserInfoService();			
			if(!service.IsLogin()){ //not login or session expired
				if(!isFunAjax){  // not ajax request					
					LoginForm loginForm=new LoginForm();
					loginForm.setMessage(MessageUtils.LoginFirst);
					req.getSession().setAttribute("loginForm", loginForm);
					res.sendRedirect(contextPath+"/LoginServlet");					
				}
				else{ // ajax request
					String url=contextPath+"/LoginServlet";
					JSONObject obj = new JSONObject();
					obj.put("code", NameUtils.AjaxSessionExpired);
					obj.put("url",url);
					String out=obj.toJSONString();
					System.out.println(out);
					res.getWriter().write(out);
				}
				return;
			}			
		}		
		UpdateSessionAndLoginMap();
		
		if(!uri.contains("Spring/")){
			
		}
		else{
			System.out.println("uri="+uri);
		}
		chain.doFilter(request,	response);	
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		filterConfig.getServletContext();
	}
	private void UpdateSessionAndLoginMap(){
		ServletContext application=WebUtils.GetCurrentContext();
		HttpSession session=WebUtils.GetCurrentSession();
		HttpServletRequest request=WebUtils.GetCurrentRequest();
		String url=request.getRequestURI();
		Date dt=new Date(System.currentTimeMillis());		
		LoginInfo loginInfo=(LoginInfo)session.getAttribute(NameUtils.LoginFlag);
		if(loginInfo != null){
			loginInfo.setLastUrl(url);
			loginInfo.setLastAccessTime(dt);
			loginInfo.setLastAjaxAccessTime(dt);
			loginInfo.setLastFunName(url);
			Map<String,LoginInfo> loginMap=(Map<String,LoginInfo>)application.getAttribute(NameUtils.LoginMap);
			LoginInfo ap_LoginInfo=loginMap.get(loginInfo.getKey());
			ap_LoginInfo.setLastUrl(url);
			ap_LoginInfo.setLastAjaxUrl(url);
			ap_LoginInfo.setLastAccessTime(dt);
			ap_LoginInfo.setLastAjaxAccessTime(dt);
			ap_LoginInfo.setLastFunName(url);
			ap_LoginInfo.setLastAjaxFunName(url);
		}
	}
}
