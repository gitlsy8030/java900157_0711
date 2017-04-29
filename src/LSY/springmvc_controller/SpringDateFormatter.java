package LSY.springmvc_controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.format.Formatter;

public class SpringDateFormatter implements Formatter<Date> {	
	
	private String customPattern=null;
	private SimpleDateFormat df;
	
	public SpringDateFormatter(){
		this.customPattern="yyyy/MM/dd";
		df=new SimpleDateFormat(this.customPattern);
	}
	public SpringDateFormatter(String datePattern){
		this.customPattern=datePattern;
		df=new SimpleDateFormat(this.customPattern);
	}
	@Override
	public String print(Date date, Locale local) {
		String resultStr=df.format(date);
		System.out.println("spring DateConverter Date => String ="+resultStr);
		return resultStr;
	}

	@Override
	public Date parse(String dateStr, Locale local) throws ParseException {
		Date resultDate=df.parse(dateStr);
		System.out.println("spring DateConverter String => Date ="+resultDate);
		return resultDate;
	}

}
