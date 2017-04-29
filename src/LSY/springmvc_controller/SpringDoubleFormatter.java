package LSY.springmvc_controller;

import java.text.ParseException;
import java.util.Locale;

import org.springframework.format.Formatter;

public class SpringDoubleFormatter implements Formatter<Double> {

	@Override
	public String print(Double arg0, Locale arg1) {
		String resultStr=Double.toString(arg0);
		return resultStr;
	}

	@Override
	public Double parse(String arg0, Locale arg1) throws ParseException {
		Double resultDouble=Double.parseDouble(arg0);
		return resultDouble;
	}

}
