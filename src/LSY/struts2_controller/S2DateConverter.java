package LSY.struts2_controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import com.opensymphony.xwork2.conversion.impl.DefaultTypeConverter;

public class S2DateConverter extends DefaultTypeConverter {

	@Override
	public Object convertValue(Map<String, Object> context, Object value, Class toType) {
		SimpleDateFormat df=new SimpleDateFormat("yyyy/MM/dd");
		try{
			if(toType == Date.class){  //String=> Date 
				String [] params=(String [])value;
				System.out.println("S2 Converter: String => Date");
				return df.parse(params [0]);				
			}else{  //Date => String
				Date date=(Date)value; 
				System.out.println("S2 Converter: Date => String");
				return df.format(date);
			}
			
		}catch(ParseException e ){
			return null;
		}
		
	}

}
