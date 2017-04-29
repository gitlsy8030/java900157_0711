package LSY.service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import LSY.annotation.AuthEnum;
import LSY.annotation.S2Autowired;
import LSY.annotation.S2Service;
import LSY.dao_interface.IUserInfoDao;
import LSY.domain.LoginInfo;
import LSY.domain.MailData;
import LSY.domain.ResultInfo;
import LSY.domain.UserAuthentication;
import LSY.domain.UserInfo;
import LSY.exception.MailFailedException;
import LSY.exception.UserExistException;
import LSY.service_interface.IUserInfoService;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.utils.ServiceUtils;
import LSY.utils.WebUtils;
@Service
@S2Service
public class UserInfoService implements IUserInfoService {
	@S2Autowired(type="dao")
	private IUserInfoDao dao = FactoryUitls.CreateRegisterDao();	
	@Override
	public void Register(UserInfo userInfo) throws IOException, UserExistException{
		if(dao.Find(userInfo)){
			throw new UserExistException();
		}
		else{
			userInfo.setPassword(ServiceUtils.MD5(userInfo.getPassword()));
			dao.Add(userInfo,false);
		}		
	}	
	@Override
	public ResultInfo<UserInfo> AdvancedValidate(String userId,String password){
		String psw=ServiceUtils.MD5(password);
		UserInfo userInfo=dao.Find(userId,psw);
		ResultInfo<UserInfo> result=new ResultInfo<UserInfo>();
		//userId不存在
		if(userInfo == null){
			result.setSuccess(false);			
			result.setMessage(MessageUtils.UserIdNotFound);
			return result;
		}	
		//密碼 重設須變更密碼
		if(userInfo.getReAssignPasswordFlag().equals("1") && userInfo.getLastAlterPasswordTime() == null ){			
			result.setSuccess(false);			
			result.setMessage(MessageUtils.PasswordReAssign);
			return result;						
		}	
		//密碼錯誤次數超過
		if(userInfo.getPasswordErrorTimes() > CommUtils.getPasswordErrorTime()){
			result.setSuccess(false);			
			result.setMessage(MessageUtils.PasswordLocked);
			return result;
		}
		//密碼已到期須變更密碼
		Date compareDate=userInfo.getLastAlterPasswordTime();
		Date dd=new Date();		
		SimpleDateFormat df=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");		
		if(compareDate != null ){
			Integer sec=1000 * 60 *60 * 24;
			Integer diff=(int)((dd.getTime() - compareDate.getTime()) / sec);			
			if(diff > CommUtils.getPasswordExpired()){
				result.setSuccess(false);			
				result.setMessage(MessageUtils.PasswordExpired);
				return result;
			}			
		}
		//password錯誤
		String md5Password=ServiceUtils.MD5(password);		
		if(!md5Password.equals(userInfo.getPassword())){
			result.setSuccess(false);			
			result.setMessage(MessageUtils.PasswordError);
			return result;			
		}
		result.setSuccess(true);
		result.setMessage(MessageUtils.LoginSuccess);
		result.setData(userInfo);
		return result;
	}
	
	@Override
	public UserInfo GetUserInfo(String userId){
		UserInfo userInfo=dao.Find(userId,null);		
		return userInfo;
	}
	
	@Override
	public ResultInfo UserIdValidate(String userId){
		UserInfo userInfo=dao.Find(userId,null);
		ResultInfo<UserInfo> result=new ResultInfo<UserInfo>();
		//userId不存在
		if(userInfo == null){
			result.setSuccess(false);			
			result.setMessage(MessageUtils.UserIdNotFound);
			return result;
		}
		result.setSuccess(true);
		result.setMessage("");
		result.setData(userInfo);
		return result;
	}
	
	@Override
	public LoginInfo Login(UserInfo userInfo){
		LoginInfo loginInfo=AddToLoginMap(userInfo,null);		
		return loginInfo;		
	}
	@Override
	public LoginInfo Login(UserInfo userInfo, String sessionId) {
		LoginInfo loginInfo=AddToLoginMap(userInfo,sessionId);		
		return loginInfo;
	}
	
	@Override
	public void LostPassword(UserInfo userInfo) throws MailFailedException  {		
		String userId=userInfo.getUserId();
		String userName=userInfo.getUserName();
		String uid=UUID.randomUUID().toString();
		uid="5179c9df-d6eb-45a0-ac7d-cdb86b2e1fcd";
		String servletUrl=WebUtils.GetCurrentRequest().getRequestURL().toString();
		servletUrl=servletUrl.replace("LoginServlet","ChangePasswordServlet");		
		String linkUrl=servletUrl+"?id="+userId+"&token="+uid;
		System.out.println(linkUrl);
		String body="<p>"+ userName +"先生/小姐：</p><p></p>" +
					"<p>您的密碼遺失重設已被接受，請於30分鐘內從下列網址聯結，進行密碼變更：</p><p></p>" +
					"<p>"+linkUrl+"</p><p></p><p></p><p>網站管理小組 敬上</p>";	
		MailData mailData=new MailData();
		mailData.setSendAddress("fred733524@gmail.com");
		mailData.setReceiveAddresses("fred733524@gmail.com");		
		mailData.setMailSubject("LSY Site 密碼尋回聯結!");
		mailData.setMailBody(body);	
		ServiceUtils.SendMail(mailData);
		String [] updateParams=new String [] {"changeToken","tokenExpiredTime"}; 	
		IUserInfoDao dao = FactoryUitls.CreateRegisterDao();
		userInfo.setChangeToken(uid);
		//Date expiredTime=new java.util.Date();
		Calendar expiredTime=Calendar.getInstance();
		expiredTime.setTime(new java.util.Date());
		expiredTime.add(Calendar.MINUTE, 30);
		userInfo.setTokenExpiredTime(expiredTime.getTime());
		dao.Update(userInfo, updateParams);
	}
	@Override
	public void ChangePassword(UserInfo userInfo,String newPassword){
		String newPasswordMd5=ServiceUtils.MD5(newPassword);
		userInfo.setPassword(newPasswordMd5);	
		userInfo.setLastAlterPasswordTime(new Date());
		userInfo.setTokenExpiredTime(null);
		userInfo.setChangeToken(null); 
		String [] updateParams=new String [] {"password","lastAlterPasswordTime","changeToken","tokenExpiredTime"}; 	
		IUserInfoDao dao = FactoryUitls.CreateRegisterDao();
		dao.Update(userInfo, updateParams);
	}
	@Override
	public ResultInfo ResetPassword(String userId,String registerMail){
		ResultInfo result=new ResultInfo();
		UserInfo userInfo=dao.Find(userId,null);
		if(userInfo == null){
			result.setSuccess(false);
			result.setMessage(MessageUtils.UserIdNotFound);
			return result;
		}
		if(!userInfo.getMail().equals(registerMail)){
			result.setSuccess(false);
			result.setMessage(MessageUtils.MailNotMatch);
			return result;
		}
		MailData mailData=new MailData();
		// TODO
		
		try {
			ServiceUtils.SendMail(mailData);
			result.setSuccess(true);
			result.setMessage(MessageUtils.GoMailToChangePassword);
			return result;
		} 
		catch (MailFailedException e) {
			result.setSuccess(false);
			result.setMessage(MessageUtils.SendMailFaild);
			return result;
		}
	}
	
	@Override
	public boolean IsLogin(){
		ServletContext application=WebUtils.GetCurrentContext();
		HttpSession session=WebUtils.GetCurrentSession();		
		String loginKey=(session.getAttribute(NameUtils.LoginFlag) == null)? 
				null:((LoginInfo)session.getAttribute(NameUtils.LoginFlag)).getKey();
		if(loginKey == null || loginKey.trim().equals("")){
			return false;
		}		
		Map<String,LoginInfo> loginData=(Map<String,LoginInfo>)application.getAttribute(NameUtils.LoginMap);
		if(loginData.get(loginKey) != null){
			return true;
		}
		else{
			return false;
		}		
	}
	
	@Override
	public void Logout(){
		HttpSession session=WebUtils.GetCurrentSession();
		session.setAttribute(NameUtils.SessionEndType, MessageUtils.UserLogout);
		System.out.println("Logout ="+session.getId());
		session.invalidate();		
	}
	
	//login資料加入到loginMap  +  loginKey set to session attribute 
	private LoginInfo AddToLoginMap(UserInfo userInfo,String sessionId){		
		ServletContext application=CommUtils.getContext();
		String sid;
		HttpSession session;
		if(sessionId != null){
			session=null;
			sid=sessionId;
		}
		else{
			session=WebUtils.GetCurrentSession();
			sid=session.getId();
		}		
		String uid=UUID.randomUUID().toString();
		String loginKey=userInfo.getUserId()+"-"+uid;		
		LoginInfo loginInfo=new LoginInfo();
		loginInfo.setKey(loginKey);		
		loginInfo.setLoginTime(new java.util.Date());		
		loginInfo.setSessionId(sid);
		loginInfo.setUserInfo(userInfo);
		Map<String,LoginInfo> loginData=(Map<String,LoginInfo>)application.getAttribute(NameUtils.LoginMap);
		System.out.println("before add to login map count="+loginData.size());
		loginData.put(loginKey, loginInfo);
		System.out.println("after add to login map count="+loginData.size());
		if(sessionId == null){
			session.setAttribute(NameUtils.LoginFlag, loginInfo);
		}
		return loginInfo;
	}
	
	//從loginMap移除一筆登入資料  
	private void RemoveFromLoginMap(){		
		return;
	}
	@Override
	public Boolean IsUserAuthFun(String userId, String functionId,AuthEnum type) throws Exception {  //此處傳入functionId時計是functionUrl
		Map<String,Map<String,UserAuthentication>> authenticationMap=CommUtils.getAuthenticationMap();
		Boolean isAuth=false;
		Map<String,UserAuthentication> user1Auth=authenticationMap.get(userId);
		if(user1Auth == null){  //取不到或該function未被設定為false即視為有權限
			return true;
		}
		UserAuthentication fun1Auth=user1Auth.get(functionId);
		if(fun1Auth == null){
			return true;
		}
		if(type == AuthEnum.add && fun1Auth.getIsAdd() == false){
			return false;
		}
		else if(type == AuthEnum.auth && fun1Auth.getIsAuth() == false){
			return false;
		}
		else if(type == AuthEnum.batchUpdate && fun1Auth.getIsBatchUpdate() == false){
			return false;
		}
		else if(type == AuthEnum.delete && fun1Auth.getIsDelete() == false){
			return false;
		}
		else if(type == AuthEnum.export && fun1Auth.getIsExport() == false){
			return false;
		}
		else if(type == AuthEnum.print && fun1Auth.getIsPrint() == false){
			return false;
		}
		else if(type == AuthEnum.update && fun1Auth.getIsUpdate() == false){
			return false;
		}
		else if(type == AuthEnum.view && fun1Auth.getIsView() == false){
			return false;
		}		
		else{
			return true;
		}		
	}
	@Override
	public void UpdateFunAuthById(String userId, List<UserAuthentication> authFuns) {
		Map<String,Map<String,UserAuthentication>> authenticationMap=CommUtils.getAuthenticationMap();
		Map<String,UserAuthentication> authMap=authenticationMap.get(userId);
		if(authMap == null){
			authMap=new HashMap<String,UserAuthentication>();				
		}
		for(UserAuthentication fun:authFuns){
			String functionId=fun.getFunctionId();
			String functionUrl=fun.getFunctionUrl();
			if(authMap.containsKey(functionUrl)){
				
				authMap.put(functionUrl, fun);
			}
			else{
				authMap.put(functionUrl, fun);
			}				
		}	
		SortedSet<String> set=new TreeSet<String>(authMap.keySet());	
		List<String> sortedList=new ArrayList<String>(set);
		
		Map<String,UserAuthentication> authMapSorted=new HashMap<String,UserAuthentication>();
		for(String key:sortedList){
			authMapSorted.put(key, authMap.get(key));
		}		
		authenticationMap.put(userId, authMapSorted);
	}
}
