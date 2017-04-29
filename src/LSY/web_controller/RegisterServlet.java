package LSY.web_controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Date;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.BeanUtils;

import LSY.annotation.NamingAnnotation;
import LSY.domain.UserInfo;
import LSY.exception.UserExistException;
import LSY.service.UserInfoService;
import LSY.service_interface.IUserInfoService;
import LSY.utils.ServiceUtils;
import LSY.utils.WebUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.web_formbean.LoginForm;
import LSY.web_formbean.RegisterForm;

@WebServlet("/RegisterServlet")
@NamingAnnotation(FunName="用戶註冊",IsAjax=false)
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public RegisterServlet() {
        super();        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String url="http://localhost:8083/LSYMain/LoginServlet";
		Random r=new Random();
		int ser=r.nextInt(199)+1;
		String val=String.format("b5"+String.format("%3s", Integer.toString(ser)).replace(' ', '0'));
		String param="userId="+val+"&password="+val+"&submitType=autoLogin";
		PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try {
            URL realUrl = new URL(url);           
            URLConnection conn = realUrl.openConnection();
            // set request header  useragent=>chrome
            conn.setRequestProperty("accept", "*/*");            
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent",  
                    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36");
            //conn.setRequestProperty("Host", "localhost:8083");
            // post must be set
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // get output stream
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            out.print(param);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
            String line;            
//            while ((line = in.readLine()) != null) {
//                result += line;
//            }
            System.out.println("http POST success！ url="+url+ "  param="+param);
        } catch (Exception e) {
            System.out.println("发送 POST 请求出现异常！"+e);
            e.printStackTrace();
        }
        //使用finally块来关闭输出流、输入流
        finally{
            try{
                if(out!=null){
                    out.close();
                }
                if(in!=null){
                    in.close();
                }
            }
            catch(IOException ex){
                ex.printStackTrace();
            }
        }
		
		
		request.getRequestDispatcher("/jsp/Register.jsp").forward(request, response);
	}	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		request.setCharacterEncoding("utf-8");		
		RegisterForm registerForm=WebUtils.RequestToFormBean(request ,RegisterForm.class);
		registerForm.setDepartment("0");
		registerForm.setGroup("0");
		boolean isValidateOk=registerForm.Validate();
		//驗證失敗
		if(!isValidateOk){
			request.setAttribute("form", registerForm);			
			request.getRequestDispatcher("/jsp/Register.jsp").forward(request, response);
			return;
		}
		//驗鄭成功		
		UserInfo userInfo= new UserInfo();
		WebUtils.CopyBean(registerForm, userInfo);		
		IUserInfoService userInfoService=FactoryUitls.CreateUserInfoService();
		try {
			userInfo.setReAssignPasswordFlag("0");	
			userInfo.setPasswordErrorTimes(0);	
			userInfo.setLastAlterPasswordTime(new Date(System.currentTimeMillis()));
			userInfoService.Register(userInfo);
			LoginForm loginForm=new LoginForm();
			loginForm.setUserId(userInfo.getUserId());
			loginForm.setPassword("");
			loginForm.setMessage(MessageUtils.LoginAfterRegister);
			HttpSession session=request.getSession();
			session.setAttribute("loginForm", loginForm);
			session.setAttribute(NameUtils.RegisterComplete, true);
			response.sendRedirect(request.getContextPath()+"/LoginServlet");
			return;
		} catch (UserExistException e) {
			System.out.print("catch UserExistException");
			registerForm.getErrors().put("userId", MessageUtils.UserIdExist);
			request.setAttribute("form", registerForm);
			request.getRequestDispatcher("/jsp/Register.jsp").forward(request, response);
			return;
		} catch(Exception e){
			e.printStackTrace();			
			registerForm.setMessages(MessageUtils.ContextAdmin);
			request.getRequestDispatcher("/jsp/Error.jsp").forward(request, response);
			return;
		}
		
		
			
		
	}

}
