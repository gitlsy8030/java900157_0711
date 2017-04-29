package LSY.domain;

public class MailData {
	private String sendAddress;
	private String receiveAddresses;
	private String ccAddresses;
	private String secureAddresses;
	private String mailSubject;
	private String mailBody;
	public String getSendAddress() {
		return sendAddress;
	}
	public void setSendAddress(String sendAddress) {
		this.sendAddress = sendAddress;
	}
	public String getReceiveAddresses() {
		return receiveAddresses;
	}
	public void setReceiveAddresses(String receiveAddresses) {
		this.receiveAddresses = receiveAddresses;
	}
	public String getCcAddresses() {
		return ccAddresses;
	}
	public void setCcAddresses(String ccAddresses) {
		this.ccAddresses = ccAddresses;
	}
	public String getSecureAddresses() {
		return secureAddresses;
	}
	public void setSecureAddresses(String secureAddresses) {
		this.secureAddresses = secureAddresses;
	}
	public String getMailSubject() {
		return mailSubject;
	}
	public void setMailSubject(String mailSubject) {
		this.mailSubject = mailSubject;
	}
	public String getMailBody() {
		return mailBody;
	}
	public void setMailBody(String mailBody) {
		this.mailBody = mailBody;
	}
	
}
