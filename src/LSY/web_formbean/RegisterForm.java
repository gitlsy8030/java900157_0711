package LSY.web_formbean;

import java.util.HashMap;
import java.util.Map;

import LSY.utils.CommUtils;
import LSY.utils.MessageUtils;

public class RegisterForm {
	private Map<String,String> errors=new HashMap<String,String>();	
	private String messages;	
	private String userId;
	private String userName;
	private String engName;
	private String password;
	private String password2;
	private String mail;
	private String birthday;
	private String department;
	private String group;
	private String tel;
	private String authNum;
	
	
	
	public boolean Validate(){
		boolean isOk=true;
		if(this.userId == null || this.userId.trim().equals("")){
			isOk=false;
			this.errors.put("userId", MessageUtils.RequiredUserId);
			this.errors.put("userIdWarning", "has-danger");
		}
		else if(!this.userId.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("userId", MessageUtils.UserIdMissLength);
			this.errors.put("userIdWarning", "has-danger");
		}
		
		if(this.userName == null || this.userName.trim().equals("")){
			isOk=false;
			this.errors.put("userName", MessageUtils.RequiredUserName);
			this.errors.put("userNameWarning", "has-danger");
		}
		
		if(this.engName == null || this.engName.trim().equals("")){
			isOk=false;
			this.errors.put("engName", MessageUtils.RequiredEngName);
			this.errors.put("engNameWarning", "has-danger");
		}
		
		
		if(this.password == null || this.password.trim().equals("")){
			isOk=false;
			this.errors.put("password", MessageUtils.RequiredPassword);
			this.errors.put("passwordWarning", "has-warning");
		}
		else if(!this.password.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("password", MessageUtils.PasswordMissLength);
			this.errors.put("passwordWarning", "has-warning");
		}
		
		if(this.password2 == null || this.password2.trim().equals("")){
			isOk=false;
			this.errors.put("password2", MessageUtils.RequiredPassword);
			this.errors.put("password2Warning", "has-warning");
		}
		else if(!this.password2.matches("[A-Za-z0-9]{4,8}")){
			isOk=false;
			this.errors.put("password2", MessageUtils.PasswordMissLength);
			this.errors.put("password2Warning", "has-warning");
		}
		
		if(this.password != null && !this.password.trim().equals("") &&
				this.password2 != null && !this.password2.trim().equals("") &&
				!this.password.equals(this.password2) 
		){
			isOk=false;
			this.errors.put("password2", MessageUtils.RequiredPasswordSame);
			this.errors.put("password2Warning", "has-warning");
		}
		
		if(this.mail == null || this.mail.trim().equals("")){
			isOk=false;
			this.errors.put("mail", MessageUtils.RequiredEmail);
			this.errors.put("mailWarning", "has-warning");
		}
		else if(!this.mail.matches("\\w+@\\w+\\.\\w+")){
			isOk=false;
			this.errors.put("mail", MessageUtils.EmailMissFormat);
			this.errors.put("mailWarning", "has-warning");
		}
		
		if((this.birthday != null && !this.birthday.trim().equals("")) &&
			!CommUtils.DateFormat(this.birthday)
		){
			isOk=false;
			this.errors.put("birthday", MessageUtils.DateMissFormat);
			this.errors.put("birthdayWarning", "has-warning");
		}		
		if(this.tel == null || this.tel.trim().equals("")){
			isOk=false;
			this.errors.put("tel", MessageUtils.RequiredTel);
			this.errors.put("telWarning", "has-warning");
		}
		else if(!this.tel.matches("[0-9\\-\\(\\)\\s]{7,15}")){
			isOk=false;
			this.errors.put("tel", MessageUtils.RequiredTel);
			this.errors.put("telWarning", "has-warning");
		}
		return isOk;
	}
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEngName() {
		return engName;
	}

	public void setEngName(String engName) {
		this.engName = engName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword2() {
		return password2;
	}

	public void setPassword2(String password2) {
		this.password2 = password2;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}
	
	public String getAuthNum() {
		return authNum;
	}
	public void setAuthNum(String authNum) {
		this.authNum = authNum;
	}

	public Map getErrors() {
		return errors;
	}
	public void setErrors(Map errors) {
		this.errors = errors;
	}
	public String getMessages() {
		return messages;
	}
	public void setMessages(String messages) {
		this.messages = messages;
	}
	

}
