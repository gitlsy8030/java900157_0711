package LSY.domain;

public class ActionResult {
	private Boolean success;
	private String code;
	private String type;
	private String message;
	private String html;
	private Object keyValue;
	public Boolean getSuccess() {
		return success;
	}
	public void setSuccess(Boolean success) {
		this.success = success;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getHtml() {
		return html;
	}
	public void setHtml(String html) {
		this.html = html;
	}
	public Object getKeyValue() {
		return keyValue;
	}
	public void setKeyValue(Object keyValue) {
		this.keyValue = keyValue;
	}
	
	
}
