package LSY.web_controller;

import java.io.IOException;
import java.util.Date;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import LSY.annotation.NamingAnnotation;
import LSY.domain.LoginInfo;
import LSY.domain.UserInfo;
import LSY.exception.MailFailedException;
import LSY.service_interface.IUserInfoService;
import LSY.utils.FactoryUitls;
import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.ChangePasswordForm;
import LSY.web_formbean.LoginForm;

@WebServlet("/ChangePasswordServlet")
@NamingAnnotation(FunName="密碼遺失尋回作業",IsAjax=false)
public class ChangePasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L; 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String userId=request.getParameter("id");		
		String token=request.getParameter("token");
		System.out.println(userId+ "    "+ token);
		UserInfo userInfo= null;
		HttpSession session= request.getSession();
		IUserInfoService service=FactoryUitls.CreateUserInfoService();	
		if(userId != null && token !=null){
			userInfo=service.GetUserInfo(userId);
			System.out.println("userId="+userId);
			if(userInfo == null){
				request.setAttribute(NameUtils.ChangePasswordMode, "tokenError");
				request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);
				return;
			}
			else if (userInfo.getChangeToken() == null || userInfo.getTokenExpiredTime() == null){					
				request.setAttribute(NameUtils.ChangePasswordMode, "tokenError");
				request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);
				return;
			}
			else{
				if(!userInfo.getChangeToken().equals(token)){					
					request.setAttribute(NameUtils.ChangePasswordMode, "tokenError");
					request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);
					return;
				}				
				if(userInfo.getTokenExpiredTime().compareTo(new java.util.Date()) < 0 ){
					request.setAttribute(NameUtils.ChangePasswordMode, "tokenExpired");
					request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);
					return;
				}
			}
			session.setAttribute(NameUtils.LostPasswordInfo, userInfo);
		}
		//session.setAttribute(NameUtils.LostPasswordInfo, userInfo);
		request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ChangePasswordForm form=WebUtils.RequestToFormBean(request,ChangePasswordForm.class );
		HttpSession session =request.getSession();
		form.setMessage("");
		String submitType=form.getSubmitType();
		IUserInfoService service=FactoryUitls.CreateUserInfoService();
		boolean isValidateOk;
		UserInfo lostUserInfo;
		LoginForm loginForm=new LoginForm();
		switch(submitType){
			case "sendLinkMail":
				System.out.println("sendLinkMail sessionId="+request.getSession().getId());
				Enumeration<String> mm=request.getSession().getAttributeNames();
				lostUserInfo=(UserInfo)request.getSession().getAttribute(NameUtils.LostPasswordInfo);
				isValidateOk= form.Validate(submitType,lostUserInfo.getMail());
				if(!isValidateOk){
					request.setAttribute("form", form);
					request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);					
					return;
				}				
				try {
					service.LostPassword(lostUserInfo);	
					form.setMessage(MessageUtils.GoMailToChangePassword);
					request.setAttribute("form", form);
					request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);	
					return;	
				} catch (MailFailedException e) {
					form.setMessage(MessageUtils.SendMailFaild);
					request.setAttribute("form", form);
					request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);
					return;
				}				
			case "changePassword":
				lostUserInfo=(UserInfo)request.getSession().getAttribute(NameUtils.LostPasswordInfo);
				isValidateOk= form.Validate(submitType,null);
				if(!isValidateOk){
					request.setAttribute("form", form);
					request.getRequestDispatcher("/jsp/ChangePassword.jsp").forward(request, response);					
					return;
				}
				service.ChangePassword(lostUserInfo, form.getPassword());
				loginForm.setMessage(MessageUtils.PasswordChangedReLogin);
				loginForm.setUserId(lostUserInfo.getUserId());
				session.setAttribute("loginForm", loginForm);				
				response.sendRedirect(request.getContextPath()+"/jsp_open/Login.jsp");
				break;
		}		
	}

}
