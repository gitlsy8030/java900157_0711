package LSY.domain;

public class UserAuthentication {
	private String functionId;
	private String functionUrl;
	private String text;
	private Boolean isAuth;
	private Boolean isAdd;
	private Boolean isUpdate;
	private Boolean isDelete;
	private Boolean isView;
	private Boolean isBatchUpdate;
	private Boolean isPrint;
	private Boolean isExport;
	public String getFunctionId() {
		return functionId;
	}
	public void setFunctionId(String functionId) {
		this.functionId = functionId;
	}
	
	public String getFunctionUrl() {
		return functionUrl;
	}
	public void setFunctionUrl(String functionUrl) {
		this.functionUrl = functionUrl;
	}
	
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Boolean getIsAuth() {
		return isAuth;
	}
	public void setIsAuth(Boolean isAuth) {
		this.isAuth = isAuth;
	}
	public Boolean getIsAdd() {
		return isAdd;
	}
	public void setIsAdd(Boolean isAdd) {
		this.isAdd = isAdd;
	}
	public Boolean getIsUpdate() {
		return isUpdate;
	}
	public void setIsUpdate(Boolean isUpdate) {
		this.isUpdate = isUpdate;
	}
	public Boolean getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(Boolean isDelete) {
		this.isDelete = isDelete;
	}
	public Boolean getIsView() {
		return isView;
	}
	public void setIsView(Boolean isView) {
		this.isView = isView;
	}
	public Boolean getIsBatchUpdate() {
		return isBatchUpdate;
	}
	public void setIsBatchUpdate(Boolean isBatchUpdate) {
		this.isBatchUpdate = isBatchUpdate;
	}
	public Boolean getIsPrint() {
		return isPrint;
	}
	public void setIsPrint(Boolean isPrint) {
		this.isPrint = isPrint;
	}
	public Boolean getIsExport() {
		return isExport;
	}
	public void setIsExport(Boolean isExport) {
		this.isExport = isExport;
	}	
}
