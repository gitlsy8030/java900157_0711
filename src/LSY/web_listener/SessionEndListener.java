package LSY.web_listener;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import LSY.dao_interface.IUserInfoDao;
import LSY.domain.LoginInfo;
import LSY.domain.UserInfo;
import LSY.utils.FactoryUitls;
import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;

@WebListener
public class SessionEndListener implements HttpSessionListener {

    public SessionEndListener() {
    }

    public void sessionCreated(HttpSessionEvent arg0)  { 
    	
    }
    //remove loginData from loginMap
    public void sessionDestroyed(HttpSessionEvent eventArgs)  {     	
    	HttpSession session=eventArgs.getSession();   
    	ServletContext application=session.getServletContext();     	
		if(session.getAttribute(NameUtils.LoginFlag) !=null){
			LoginInfo loginInfo=(LoginInfo)session.getAttribute(NameUtils.LoginFlag);
			Map<String,LoginInfo> loginData=(Map<String,LoginInfo>)application.getAttribute(NameUtils.LoginMap);
			String loginKey=loginInfo.getKey();
			loginData.remove(loginKey);				
			
			String userId=loginInfo.getUserInfo().getUserId();
	    	Date lastLogoutTime=new Date(System.currentTimeMillis());
	    	String lastLogoutType=(session.getAttribute(NameUtils.SessionEndType) == null)?
	    			"T":"U";
	    	String [] updateParams=new String [] {"lastLogoutTime","lastLogoutType"};
	    	UserInfo userInfo=new UserInfo(); 
	    	userInfo.setUserId(userId);
	    	userInfo.setLastLogoutTime(lastLogoutTime);
	    	userInfo.setLastLogoutType(lastLogoutType);			
			IUserInfoDao dao = FactoryUitls.CreateRegisterDao();
			System.out.println(updateParams[0]+"   "+updateParams[1]+"     "+ userInfo.getLastLogoutTime()+"    "+userInfo.getLastLogoutType());
    		dao.Update(userInfo, updateParams);
		}		
    }	
}
