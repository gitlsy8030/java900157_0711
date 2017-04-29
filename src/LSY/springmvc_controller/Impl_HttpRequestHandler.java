package LSY.springmvc_controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.HttpRequestHandler;

public class Impl_HttpRequestHandler implements HttpRequestHandler{

	@Override
	public void handleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setAttribute("Impl_HttpRequestHandler", "實作Spring的HttpRequestHandler的映射器");
		request.getRequestDispatcher("/jsp_spring/Impl_HttpRequestHandler.jsp").forward(request, response);
		
	}
}
