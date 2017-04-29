package LSY.utils;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import javax.mail.internet.MimeMultipart;

import LSY.domain.MailData;
import LSY.exception.MailFailedException;
import LSY.web_formbean.SimpleGrid;
import sun.misc.*;
public class ServiceUtils {

	public ServiceUtils() {
		// TODO Auto-generated constructor stub
	}
	@SuppressWarnings("restriction")
	public static  String MD5(String message) {
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("md5");
		} catch (Exception e) {
			throw new RuntimeException();
		}
		byte [] md5=md.digest(message.getBytes());		
		BASE64Encoder encoder=new BASE64Encoder();
		return encoder.encode(md5);
	}
	
	public static void SendMail(MailData mailData) throws MailFailedException{
		try{
			String host = "smtp.gmail.com"; 	        
			final String mailUserId="fred733524@gmail.com";			
			final String mailPassword="1234";			
			Properties mailProps=new Properties();
			//SSL			
			int port = 465; 
			mailProps.put("mail.smtp.host", host);  
			mailProps.put("mail.smtp.socketFactory.port",port) ;  
			mailProps.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");  
			mailProps.put("mail.smtp.auth", "true");  
			mailProps.put("mail.smtp.port", port);
			
			//TSL
//			int port = 587; 
//			mailProps.put("mail.smtp.auth", "true");
//			mailProps.put("mail.smtp.starttls.enable", "true");
//			mailProps.put("mail.smtp.host", host);
//			mailProps.put("mail.smtp.port", port);
			
			Session mailSession =Session.getInstance(mailProps,new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(mailUserId,mailPassword);
				}
			});			
			mailSession.setDebug(true);
			MimeMessage msg=new MimeMessage(mailSession);		
			InternetAddress sender=new InternetAddress(mailData.getSendAddress());
			InternetAddress [] receivers=InternetAddress.parse(mailData.getReceiveAddresses());
			msg.setFrom(sender);
			msg.setRecipients(RecipientType.TO, receivers);
			msg.setSubject(mailData.getMailSubject(),"utf-8");			
			msg.setContent(mailData.getMailBody(), "text/html;charset=utf-8");			
			//Transport.send(msg);
			
		}catch(Exception e){			
			throw new MailFailedException(e);			
		}		
	}
	//此method只負責計算所按button的pageNum(欲前往之頁碼)與目前頁碼(currentPage)是否何理，並設置成正確之currentPage
	public static <T> void CaculateGridPage(SimpleGrid<T> gridBean){
		if(gridBean.getPageNum() == -1){
			if(gridBean.getCurrentPage() == 1 ){
				gridBean.setPageNum(1);
			}
			else{
				gridBean.setPageNum(gridBean.getCurrentPage() -1);
			}
		}		
		if(gridBean.getPageNum() == -9){
			if(gridBean.getCurrentPage() == gridBean.getTotalPage()){
				gridBean.setPageNum(gridBean.getTotalPage());
			}
			else{
				gridBean.setPageNum(gridBean.getCurrentPage()+ 1);
			}
		}
		if(gridBean.getPageNum() == -100){			
			gridBean.setPageNum(1);			
		}
		if(gridBean.getPageNum() == -900){			
			gridBean.setPageNum(gridBean.getTotalPage());			
		}
		gridBean.setCurrentPage(gridBean.getPageNum());
	}
	//此methodt傳入已定pageSize,currentPage,pageNum,totalCount給之SimpleGrid，
	//負責計算startRow,endRow,totalPage等其他所需欄位
	public static <T> void CaculateGridRowRange(SimpleGrid<T> gridBean){
		int totalCount=gridBean.getTotalCount();	
		int startRow= (gridBean.getCurrentPage() - 1) * gridBean.getPageSize();
		int endRow=((startRow + gridBean.getPageSize() - 1) >= totalCount)? 
				totalCount -1: startRow + gridBean.getPageSize() - 1 ;
		gridBean.setRowStart(startRow);
		gridBean.setRowEnd(endRow);
	}
}
