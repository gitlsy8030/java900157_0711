package LSY.web_controller;

import java.io.IOException;
import java.sql.Date;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import LSY.annotation.NamingAnnotation;
import LSY.domain.LoginInfo;
import LSY.domain.LoginKey;
import LSY.domain.ResultInfo;
import LSY.domain.UserInfo;
import LSY.exception.MailFailedException;
import LSY.service_interface.IUserInfoService;
import LSY.utils.FactoryUitls;
import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.utils.ServiceUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.LoginForm;

@WebServlet("/LoginServlet")
@NamingAnnotation(FunName="系統登入")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		if(request.getSession().getAttribute(NameUtils.RegisterComplete) != null){
			request.getSession().removeAttribute(NameUtils.RegisterComplete);
			request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);	
			return;
		}
		LoginForm loginForm=new LoginForm();		
		WebUtils.SetRememberLoginInfo(loginForm);
//		loginForm.setUserId("e102");
//		loginForm.setUserId("p102");
		request.setAttribute("loginForm", loginForm);
		request.setAttribute(NameUtils.PageHeaderTitle, "登入get");
		request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setAttribute(NameUtils.PageHeaderTitle, "登入post");
		System.out.println("Login doPost--------");
		LoginForm loginForm =WebUtils.RequestToFormBean(request, LoginForm.class);	
		String submitType=loginForm.getSubmitType();
		IUserInfoService service=FactoryUitls.CreateUserInfoService();			
		ResultInfo<UserInfo> result;
		if(loginForm.getIsRememberPassword() == null){
			loginForm.setIsRememberPassword("0");
		}
		loginForm.setMessage("");	
		//忘記密碼=======================================================
		if(submitType == null){  		
			result=service.UserIdValidate(loginForm.getUserId());			
			if(result.isSuccess()){
				request.getSession().setAttribute(NameUtils.ChangePasswordMode, "initStep");
				request.getSession().setAttribute(NameUtils.LostPasswordInfo, result.getData());
				System.out.println("on loginServlet sessionId="+request.getSession().getId()+ "   ChangePasswordMode= "+
						request.getSession().getAttribute(NameUtils.ChangePasswordMode)+ "   LostPasswordInfo="+
						request.getSession().getAttribute(NameUtils.LostPasswordInfo) == null);				
				response.sendRedirect(request.getContextPath()+"/ChangePasswordServlet");
				return;
			}
			else{
				loginForm.setMessage(result.getMessage());
				request.setAttribute("loginForm", loginForm);
				request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);
				return;
			}
		}
		//除了忘記密碼外都往下處理
		boolean isValidateOk;	
		if(!submitType.equals("autoLogin")){
			isValidateOk =loginForm.Validate();	
		}
		else{
			isValidateOk = true;
		}		
		//基本驗證失敗
		if(!isValidateOk && submitType != null){
			request.setAttribute("loginForm", loginForm);
			request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);
			return;
		}
		//基本驗證成功				
		result=service.AdvancedValidate(loginForm.getUserId(), loginForm.getPassword());
		//userId不存在
		if(result.getMessage().equals(MessageUtils.UserIdNotFound)){
			loginForm.getErrors().put("userId", MessageUtils.UserIdNotFound);
			loginForm.getErrors().put("userIdWarning", "has-warning");
			request.setAttribute("loginForm", loginForm);
			request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);
			return;
		}
		//非密碼錯誤之其他不能通過(過期、鎖定、錯誤次數...)
		if(!result.isSuccess() && !result.getMessage().equals(MessageUtils.PasswordError)){
			loginForm.setMessage(result.getMessage());
			request.setAttribute("loginForm", loginForm);
			request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);
			return;
		}	
		//password錯誤
		String md5Password=ServiceUtils.MD5(loginForm.getPassword());		
		if(result.getMessage().equals(MessageUtils.PasswordError)){
			request.getSession().setAttribute(NameUtils.PassrordErrorFlag,loginForm.getUserId());
			loginForm.getErrors().put("password", MessageUtils.PasswordError);
			loginForm.getErrors().put("passwordWarning", "has-warning");
			request.setAttribute("loginForm", loginForm);
			request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);
			return;
		}		
		switch(submitType){
			case "login":
				LoginInfo loginInfo=service.Login(result.getData());
				//加入cookie
				if(loginForm.getIsRememberPassword().equals("1")){			
					WebUtils.SetLoginCookie(loginForm.getUserId(), loginForm.getPassword(), 24*60*60);
				}
				//移除cookie setMaxAge = 0
				else{
					WebUtils.SetLoginCookie(loginForm.getUserId(), loginForm.getPassword(), 0);
				}	
				response.sendRedirect(request.getContextPath()+"/HomeServlet?action=Index");				
				break;
			case "autoLogin":
				LoginInfo loginInfoAuto=service.Login(result.getData());
				Map<String,LoginInfo> map=(Map<String,LoginInfo>)WebUtils.GetCurrentContext().getAttribute(NameUtils.LoginMap);
				System.out.println("=====autoLogin success=> in LoginServlet doPost Method=======count="+map.size());
				break;
			case "changePassword":				
				service.ChangePassword(result.getData(), loginForm.getNewPassword1());				
				loginForm.setPassword("");				
				loginForm.setMessage(MessageUtils.PasswordChangedReLogin);
				request.setAttribute("loginForm", loginForm);
				request.getRequestDispatcher("/jsp_open/Login.jsp").forward(request, response);
				break;
		}
	}
}
