package LSY.web_formbean;

import java.util.HashMap;
import java.util.Map;

import LSY.utils.MessageUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;

public class LoginForm {
	private Map<String,String> errors=new HashMap<String,String>();
	private String userId;
	private String password;
	private String authNum;	
	private String isRememberPassword;
	private String submitType;
	private String newPassword1;
	private String newPassword2;
	private String message;
	public boolean Validate(){
		boolean isOk=true;
		if(this.userId == null || this.userId.trim().equals("")){
			this.errors.put("userId", MessageUtils.RequiredUserId);
			this.errors.put("userIdWarning", "has-warningr");
		}
		else if(!this.userId.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("userId", MessageUtils.UserIdMissLength);
			this.errors.put("userIdWarning", "has-warning");
		}
		if(this.password == null || this.password.trim().equals("")){
			isOk=false;
			this.errors.put("password", MessageUtils.RequiredPassword);
			this.errors.put("passwordWarning", "has-warningr");
		}
		else if(!this.password.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("password", MessageUtils.PasswordMissLength);
			this.errors.put("passwordWarning", "has-warningr");
		}
		String currentAuthNum=WebUtils.GetCurrentSession().getAttribute(NameUtils.CurrentAuthNum).toString();
		System.out.println("session authNum="+currentAuthNum+"  input autnNum="+this.authNum);
		if(this.authNum == null || this.authNum.trim().equals("")){
			isOk=false;
			this.errors.put("authNum", MessageUtils.ErrorAuthNum);
			this.errors.put("authNumWarning", "has-warningr");
		}
		else if(!this.authNum.equals(currentAuthNum)){
			isOk=false;
			this.errors.put("authNum", MessageUtils.ErrorAuthNum);
			this.errors.put("authNumWarning", "has-warningr");
		}
		if(this.submitType.equals("login")){
			return isOk;
		}
		if(this.newPassword1 == null || this.newPassword1.trim().equals("")){
			isOk=false;
			this.errors.put("newPassword1", MessageUtils.RequiredPassword);
			this.errors.put("newPassword1Warning", "has-warningr");
		}
		else if(!this.newPassword1.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("newPassword1", MessageUtils.PasswordMissLength);
			this.errors.put("newPassword1Warning", "has-warningr");
		}
		if(this.newPassword2 == null || this.newPassword2.trim().equals("")){
			isOk=false;
			this.errors.put("newPassword1", MessageUtils.RequiredPassword);
			this.errors.put("newPassword1Warning", "has-warningr");
		}
		else if(!this.newPassword2.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("newPassword1", MessageUtils.PasswordMissLength);
			this.errors.put("newPassword1Warning", "has-warningr");
		}
		if(!this.newPassword1.equals(this.newPassword2)){
			isOk=false;
			this.errors.put("newPassword1", MessageUtils.RequiredPasswordSame);
			this.errors.put("newPassword1Warning", "has-warningr");
		}
		if(this.newPassword1.equals(this.password)){
			isOk=false;
			this.errors.put("newPassword1", MessageUtils.ChangedPasswordSame);
			this.errors.put("newPassword1Warning", "has-warningr");
		}		
		return isOk;
	}

	public String getAuthNum() {
		return authNum;
	}
	public void setAuthNum(String authNum) {
		this.authNum = authNum;
	}
	public String getIsRememberPassword() {
		return isRememberPassword;
	}

	public void setIsRememberPassword(String isRememberPassword) {
		this.isRememberPassword = isRememberPassword;
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Map<String, String> getErrors() {
		return errors;
	}
	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSubmitType() {
		return submitType;
	}

	public void setSubmitType(String submitType) {
		this.submitType = submitType;
	}

	public String getNewPassword1() {
		return newPassword1;
	}

	public void setNewPassword1(String newPassword1) {
		this.newPassword1 = newPassword1;
	}

	public String getNewPassword2() {
		return newPassword2;
	}

	public void setNewPassword2(String newPassword2) {
		this.newPassword2 = newPassword2;
	}
}
