package LSY.web_controller;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import LSY.annotation.NamingAnnotation;
import LSY.utils.NameUtils;

@WebServlet("/AuthoringNumberServlet")
@NamingAnnotation(FunName="圖形驗證數字",IsAjax=true)
public class AuthoringNumberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public AuthoringNumberServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String authNum=(String)request.getSession().getAttribute(NameUtils.CurrentAuthNum);
		System.out.println("into get authNum="+authNum+ "      session id  ="+request.getSession().getId());
		byte [] buf=authNum.getBytes();
		OutputStream out=response.getOutputStream();
		out.write(buf);
		out.flush();
		out.close();		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
