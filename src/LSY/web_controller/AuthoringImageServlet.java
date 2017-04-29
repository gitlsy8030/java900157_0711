package LSY.web_controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import LSY.annotation.NamingAnnotation;
import LSY.utils.CommUtils;
import LSY.utils.NameUtils;

@WebServlet("/AuthoringImageServlet")
@NamingAnnotation(FunName="圖形驗證碼",IsAjax=true)
public class AuthoringImageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
    public AuthoringImageServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String drawNum="";
		//System.out.println("into AuthoringImageServlet");
		for(int i=0;i<4;i++){
			drawNum +=Integer.toString(new Random().nextInt(10));			
		}
		BufferedImage bi=CommUtils.CreateAuthoringImage(120, 30, 14, drawNum);
		OutputStream out=response.getOutputStream();
		response.setContentType("image/jpeg");
		request.getSession().setAttribute(NameUtils.CurrentAuthNum, drawNum);
		//System.out.println("seted num="+(String)request.getSession().getAttribute(NameUtils.CurrentAuthNum)+
		//		"      session id ="+request.getSession().getId());
		ImageIO.write(bi, "jpeg", out);
		out.flush();
		out.close();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
