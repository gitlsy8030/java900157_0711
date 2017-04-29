package LSY.web_listener;

import java.sql.Date;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;

import LSY.dao_interface.IUserInfoDao;
import LSY.domain.LoginInfo;
import LSY.domain.UserInfo;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;

@WebListener
public class LoginListener implements HttpSessionAttributeListener {

    public LoginListener() {
        // TODO Auto-generated constructor stub
    }

    public void attributeRemoved(HttpSessionBindingEvent arg0)  { 
         // TODO Auto-generated method stub
    }
    
    public void attributeAdded(HttpSessionBindingEvent eventArgs)  { 
    	HttpSession session =eventArgs.getSession();
    	LoginInfo loginInfo=(LoginInfo)session.getAttribute(NameUtils.LoginFlag);
    	String userId;
    	String attributeName=eventArgs.getName();
    	UserInfo userInfo=new UserInfo();		
		String [] updateParam;
    	//login成功
    	if(attributeName.equals(NameUtils.LoginFlag)){
    		userId=loginInfo.getUserInfo().getUserId();
    		userInfo.setUserId(userId);
    		updateParam=new String [] {"lastLoginTime"};
    		userInfo.setLastLoginTime(new Date(System.currentTimeMillis()));
    		IUserInfoDao dao = FactoryUitls.CreateRegisterDao();
    		dao.Update(userInfo, updateParam);
    	}
    	//login 密碼錯誤
    	else if(attributeName.equals(NameUtils.PassrordErrorFlag)){
    		userId=session.getAttribute(NameUtils.PassrordErrorFlag).toString();
    		userInfo.setUserId(userId);
    		updateParam=new String [] {"passwordErrorTimes"};
    		IUserInfoDao dao = FactoryUitls.CreateRegisterDao();	
    		UserInfo userInfo_original=dao.Find(userId,null);
    		Integer errorTimes=userInfo_original.getPasswordErrorTimes() + 1;  	
    		userInfo.setPasswordErrorTimes(errorTimes);    		
    		dao.Update(userInfo, updateParam);
    		session.removeAttribute(NameUtils.PassrordErrorFlag);
    	}
    }

    public void attributeReplaced(HttpSessionBindingEvent arg0)  { 
         // TODO Auto-generated method stub
    }
	
}
