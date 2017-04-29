package LSY.springmvc_controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class Impl_Controller implements Controller {
	//static Logger logger = Logger.getLogger(Impl_Controller.class);
	Logger logger=LogManager.getLogger(Impl_Controller.class);  // log4j2.x 以上已改為LogManager，無Logger.getLogger方法了
	public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		
		logger.info("into log4j-Impl_Controller");
		ModelAndView modelView=new ModelAndView();
		modelView.addObject("Impl_Controller", "實作Spring的Controller的映射器");
		modelView.setViewName("Impl_Controller");
		return modelView;
		
	}

}
