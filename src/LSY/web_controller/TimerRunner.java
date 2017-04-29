package LSY.web_controller;

import java.util.Map;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import LSY.domain.LoginInfo;
import LSY.utils.CommUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;

public class TimerRunner extends TimerTask {

	@Override
	public void run() {
		Timer timer=(Timer)CommUtils.getContext().getAttribute(NameUtils.AutoLoginTimer);
		Integer maxTimes=(Integer)CommUtils.getContext().getAttribute(NameUtils.AutoLoginMaxTimes);
		Integer count=(Integer)CommUtils.getContext().getAttribute(NameUtils.AutoLoginTimesCounter);
		Map<String,LoginInfo> map=(Map<String,LoginInfo>)CommUtils.getContext().getAttribute(NameUtils.LoginMap);
		count +=1;
		//System.out.println("$$$$$$$$$$$$$$$$ maxTimes="+maxTimes+"    current Count="+count+"   $$$$$$$$$$$");
		if(count > maxTimes){	
			timer.cancel();	
			CommUtils.getContext().removeAttribute(NameUtils.AutoLoginTimer);
	    	return;
		}
		AutoLogin autoLogin=new AutoLogin();
    	autoLogin.start();    	
    	CommUtils.getContext().setAttribute(NameUtils.AutoLoginTimesCounter,count);    	
	}
}
