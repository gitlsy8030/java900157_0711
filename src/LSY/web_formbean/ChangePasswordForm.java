package LSY.web_formbean;

import java.util.HashMap;
import java.util.Map;

import LSY.utils.MessageUtils;

public class ChangePasswordForm {	
		private Map<String,String> errors=new HashMap<String,String>();
		private String mail;
		private String password;		
		private String password2;
		private String message;
		private String submitType;		
		public boolean Validate(String type,String originalMail){
			boolean isOk=true;
			if(type.equals("changePassword")){
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
				if(this.password2 == null || this.password2.trim().equals("")){
					isOk=false;
					this.errors.put("password2", MessageUtils.RequiredPassword);
					this.errors.put("passwordWarning", "has-warningr");
				}
				else if(!this.password2.matches("[A-Za-z0-9]{4,8}")){
					isOk=false;
					this.errors.put("password2", MessageUtils.PasswordMissLength);
					this.errors.put("passwordWarning", "has-warningr");
				}
				if(!this.password.equals(this.password2)){
					isOk=false;
					this.errors.put("password2", MessageUtils.RequiredPasswordSame);
					this.errors.put("password2Warning", "has-warningr");
				}
			}
			else{
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
				if(!originalMail.trim().equals("") && !this.mail.equals(originalMail)){
					isOk=false;
					this.errors.put("mail", MessageUtils.MailNotMatch);
					this.errors.put("mailWarning", "has-warning");
				}
			}			
			return isOk;
		}
		public Map<String, String> getErrors() {
			return errors;
		}
		public void setErrors(Map<String, String> errors) {
			this.errors = errors;
		}
		public String getMail() {
			return mail;
		}
		public void setMail(String mail) {
			this.mail = mail;
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
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}	
		public String getSubmitType() {
			return submitType;
		}
		public void setSubmitType(String submitType) {
			this.submitType = submitType;
		}
}
