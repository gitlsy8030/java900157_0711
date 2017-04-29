package LSY.domain;

public class ResultInfo<T> {
	private boolean Success;
	private String Code;
	private String Message;
	private T Data; 
	
	public boolean isSuccess() {
		return Success;
	}
	public void setSuccess(boolean success) {
		Success = success;
	}
	public String getCode() {
		return Code;
	}
	public void setCode(String code) {
		Code = code;
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String message) {
		Message = message;
	}
	public T getData() {
		return Data;
	}
	public void setData(T data) {
		Data = data;
	}

}
