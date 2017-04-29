package LSY.aop;

import javax.servlet.http.HttpServletRequest;

import org.aopalliance.intercept.Joinpoint;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.validation.support.BindingAwareModelMap;
import org.springframework.web.servlet.ModelAndView;

@Component
@Aspect
public class AopImpl1 {
	
	@Pointcut(  "execution( public * LSY.springmvc_controller.Impl_HttpRequestHandler.*(..)) || "
				+ "execution( public * LSY.springmvc_controller.Impl_Controller.*(..)) || "
				+ "execution( public * LSY.springmvc_controller.Anno_Controller1.*(..)) || "
				+ "execution( public * LSY.springmvc_controller.ProductController.*(..))"
			)
	private void anyMethod(){};
	
	@Before("anyMethod()")
	public void BeforeMethod(JoinPoint joinPoint){
		String className1=joinPoint.getClass().getSimpleName();
		String className2=joinPoint.getSignature().getClass().getSimpleName();
		String className=joinPoint.getTarget().getClass().getSimpleName();
		String methodName=joinPoint.getSignature().getName();
		Object [] args=joinPoint.getArgs();
		String argsName="";
		for(Object obj:args){			
			argsName +=obj.getClass().getSimpleName()+",";			
		}
		if(methodName.equals("EditProduct")){
			BindingAwareModelMap model_1= (BindingAwareModelMap)args[1];
			BindingAwareModelMap map_1= (BindingAwareModelMap)args[2];
			String id=args[0].toString();
			if(id.equals("P1001")){
				model_1.addAttribute("aspectData", id);
			}
			else{
				map_1.addAttribute("aspectData", id);
			}
		}
		if(className.equals("Impl_Controller")){
			HttpServletRequest request=(HttpServletRequest)args[0];
			request.setAttribute("aspectData","這是從Aop類別AopImpl1之@Before設定給Impl_Controller的資料");
			
		}
		else if(className.equals("Impl_HttpRequestHandler")){
			HttpServletRequest request=(HttpServletRequest)args[0];
			request.setAttribute("aspectData","這是從Aop類別AopImpl1之@Before設定給Impl_HttpRequestHandler的資料");
		}
		
		System.out.println("aop method BeforeMethod into=>"+methodName);
		System.out.println("aop method BeforeMethod getArgs()=>"+argsName);
	}
	@AfterReturning(value="anyMethod()",returning="result")
	public void AfterReturningMethod(JoinPoint joinPoint,Object result){
		String methodName=joinPoint.getSignature().getName();
		if(methodName.equals("QueryFuns")){
			String resultClass=result.getClass().getSimpleName();
			ModelAndView mv=(ModelAndView)result;
			mv.addObject("aspectData", "這是從Aop類別AopImpl1之@AfterReturning方法中，設定給Anno_Controller1的資料");
		}
		System.out.println("aop method AfterReturningMethod out=>"+methodName+", result="+result);
	}
	@After("anyMethod()")
	public void AfterMethod(JoinPoint joinPoint){
		String methodName=joinPoint.getSignature().getName();
		System.out.println("aop method AfterMethod out=>"+methodName);
	}
	@AfterThrowing(value="anyMethod()",throwing="e")
	public void AfterThrowingMethod(JoinPoint joinPoint,Exception e){
		String methodName=joinPoint.getSignature().getName();
		System.out.println("aop method AfterThrowingMethod out=>"+methodName+"e="+e);
	}

}
