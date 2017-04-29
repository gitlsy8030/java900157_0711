package LSY.web_formbean;

public class OnSiteSearchForm {
	private String department;
	private String group;
	private String birthday;
	private String loginTimeStart;
	private String loginTimeEnd;
	private String name;
	private String userId;
	
	public void setBirthday(String birthday) {
		this.birthday = birthday;
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
	public String getDepartment() {
		return department;
	}
	public String getBirthday() {
		return birthday;
	}
	public String getLoginTimeStart() {
		return loginTimeStart;
	}
	public void setLoginTimeStart(String loginTimeStart) {
		this.loginTimeStart = loginTimeStart;
	}
	public String getLoginTimeEnd() {
		return loginTimeEnd;
	}
	public void setLoginTimeEnd(String loginTimeEnd) {
		this.loginTimeEnd = loginTimeEnd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}
