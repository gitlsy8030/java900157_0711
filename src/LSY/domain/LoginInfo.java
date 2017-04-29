package LSY.domain;

import java.util.Date;

public class LoginInfo {
	private String key;
	private Date loginTime;
	private Date lastAccessTime;
	private Date lastAjaxAccessTime;
	private String lastUrl;
	private String lastAjaxUrl;
	private String lastFunName;
	private String lastAjaxFunName;
	private String sessionId;
	public String getLastAjaxUrl() {
		return lastAjaxUrl;
	}
	public void setLastAjaxUrl(String lastAjaxUrl) {
		this.lastAjaxUrl = lastAjaxUrl;
	}
	public String getLastAjaxFunName() {
		return lastAjaxFunName;
	}
	public void setLastAjaxFunName(String lastAjaxFunName) {
		this.lastAjaxFunName = lastAjaxFunName;
	}
	private UserInfo userInfo;
	
	public String getKey() {
		return key;
	}
	public Date getLastAccessTime() {
		return lastAccessTime;
	}
	public void setLastAccessTime(Date lastAccessTime) {
		this.lastAccessTime = lastAccessTime;
	}
	public Date getLastAjaxAccessTime() {
		return lastAjaxAccessTime;
	}
	public void setLastAjaxAccessTime(Date lastAjaxAccessTime) {
		this.lastAjaxAccessTime = lastAjaxAccessTime;
	}
	public String getLastUrl() {
		return lastUrl;
	}
	public void setLastUrl(String lastUrl) {
		this.lastUrl = lastUrl;
	}
	public String getLastFunName() {
		return lastFunName;
	}
	public void setLastFunName(String lastFunName) {
		this.lastFunName = lastFunName;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public Date getLoginTime() {
		return loginTime;
	}
	public void setLoginTime(Date loginTime) {
		this.loginTime = loginTime;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public UserInfo getUserInfo() {
		return userInfo;
	}
	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}
}
