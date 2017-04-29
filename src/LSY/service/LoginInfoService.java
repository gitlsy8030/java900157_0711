package LSY.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.opensymphony.xwork2.inject.Inject;

import LSY.annotation.S2Service;
import LSY.domain.FunctionInfo;
import LSY.domain.LoginInfo;
import LSY.service_interface.ILoginInfoService;
import LSY.utils.CommUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;

@Service
@S2Service
public class LoginInfoService implements ILoginInfoService { 
	/*public void LoginInfoservice(){ 
		_loginMaps=(Map<String,LoginInfo>)context.getAttribute(NameUtils.LoginMap);
	}*/
	//@Inject(value="jdbcTemplate1")	 
//	private JdbcTemplate autoJdbc;
//	public  void setAutoJdbc(JdbcTemplate template){
//		autoJdbc=template;
//	}
//	@Inject(value="fun1")
//	private FunctionInfo functionInfo1;
//	public  void setFunctionInfo(FunctionInfo fun){
//		functionInfo1=fun;
//	}
	//private ServletContext context=CommUtils.getContext();
	//private HttpSession _session=WebUtils.GetCurrentSession();
	//private HttpServletRequest _request=WebUtils.GetCurrentRequest();
	//private LoginInfo _loginInfo= (LoginInfo)_session.getAttribute(NameUtils.LoginFlag);
	//private Map<String,LoginInfo> _loginMaps;
	@Override
	public Map<String, LoginInfo> GetAllLogins() {	
		Map<String,LoginInfo> loginMaps=(Map<String,LoginInfo>)CommUtils.getContext().getAttribute(NameUtils.LoginMap);
		return loginMaps;
	}
	@Override
	public int GetLoginCount() {
		Map<String,LoginInfo> loginMaps=(Map<String,LoginInfo>)CommUtils.getContext().getAttribute(NameUtils.LoginMap);
		return loginMaps.size();
	}	
	@Override
	public String GetLoginUserId() {
		LoginInfo loginInfo=(LoginInfo)WebUtils.GetCurrentSession().getAttribute(NameUtils.LoginFlag);
		return loginInfo.getUserInfo().getUserId();	
	}

	@Override
	public String GetLoginUnserName() {
		LoginInfo loginInfo=(LoginInfo)WebUtils.GetCurrentSession().getAttribute(NameUtils.LoginFlag);
		return loginInfo.getUserInfo().getUserName();
	}

	@Override
	public Date GetLoginTime() {
		LoginInfo loginInfo=(LoginInfo)WebUtils.GetCurrentSession().getAttribute(NameUtils.LoginFlag);
		return loginInfo.getLoginTime();
	}
	@Override
	public String GetLoginTimeToString() {
		SimpleDateFormat df=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		LoginInfo loginInfo=(LoginInfo)WebUtils.GetCurrentSession().getAttribute(NameUtils.LoginFlag);
		Date date=loginInfo.getLoginTime();
		String result=df.format(date);
		return result;
	}
	@Override
	public int GetCount() {	
		Map<String,LoginInfo> loginMaps=(Map<String,LoginInfo>)CommUtils.getContext().getAttribute(NameUtils.LoginMap);
		return loginMaps.size();
	}
//	public LoginInfoService() {
//		super();
//		_loginMaps=(Map<String,LoginInfo>)CommUtils.getContext().getAttribute(NameUtils.LoginMap);
//	}
	
	
}
