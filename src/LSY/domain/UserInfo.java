package LSY.domain;
import java.util.*;

public class UserInfo {
	private String userId;
	private String userName;
	private String password;
	private String mail;
	private Date birthday;
	private String tel;
	private String department;
	private String group;
	private String engName;
	private Date lastAlterPasswordTime;
	private Date lastLoginTime;
	private Date lastLogoutTime;
	private String lastLogoutType;
	private String changeToken;
	private Date tokenExpiredTime;
	
	public String getLastLogoutType() {
		return lastLogoutType;
	}
	public void setLastLogoutType(String lastLogoutType) {
		this.lastLogoutType = lastLogoutType;
	}
	private Integer passwordErrorTimes;
	private String reAssignPasswordFlag;
	
	public String getReAssignPasswordFlag() {
		return reAssignPasswordFlag;
	}
	public void setReAssignPasswordFlag(String reAssignPasswordFlag) {
		this.reAssignPasswordFlag = reAssignPasswordFlag;
	}
	public Date getLastAlterPasswordTime() {
		return lastAlterPasswordTime;
	}
	public void setLastAlterPasswordTime(Date lastAlterPasswordTime) {
		this.lastAlterPasswordTime = lastAlterPasswordTime;
	}
	public Date getLastLoginTime() {
		return lastLoginTime;
	}
	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}
	public Date getLastLogoutTime() {
		return lastLogoutTime;
	}
	public void setLastLogoutTime(Date lastLogoutTime) {
		this.lastLogoutTime = lastLogoutTime;
	}
	public Integer getPasswordErrorTimes() {
		return passwordErrorTimes;
	}
	public void setPasswordErrorTimes(Integer passwordErrorTimes) {
		this.passwordErrorTimes = passwordErrorTimes;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	public String getEngName() {
		return engName;
	}
	public void setEngName(String engName) {
		this.engName = engName;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getChangeToken() {
		return changeToken;
	}
	public void setChangeToken(String changeToken) {
		this.changeToken = changeToken;
	}
	public Date getTokenExpiredTime() {
		return tokenExpiredTime;
	}
	public void setTokenExpiredTime(Date tokenExpiredTime) {
		this.tokenExpiredTime = tokenExpiredTime;
	}
}
