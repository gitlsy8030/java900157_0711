package LSY.web_controller;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BaseServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String actionName=request.getParameter("action");
		Method method=null;
		try {
			method=this.getClass().getMethod(actionName, HttpServletRequest.class,HttpServletResponse.class);
		} catch (Exception e) {
			throw new RuntimeException("",e);
		}
		try {
			method.invoke(this, request,response);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
	}	
}
