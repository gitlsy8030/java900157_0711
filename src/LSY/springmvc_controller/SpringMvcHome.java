package LSY.springmvc_controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import LSY.annotation.NamingAnnotation;
import LSY.domain.ModelBindingObject;
import LSY.service_interface.ILoginInfoService;

public class SpringMvcHome implements Controller {
	@Autowired
	private ILoginInfoService loginInfoService;
	@Override
	@NamingAnnotation(FunName="Mvc綜合練習",FunId="F2001",IsAjax=false)
	public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		String loginUserId=loginInfoService.GetLoginUserId();
		ModelAndView modelView=new ModelAndView();
		ModelBindingObject obj=new ModelBindingObject();		
		Map<String,Object> model=new HashMap<String,Object>();
		model.put("userId", loginUserId);
		obj.setCommMapModel(model);
		modelView.addObject("springMvcHome", "springMvcHome");
		modelView.addObject("inputModel", obj);
		modelView.setViewName("SpringMvcHome");		
		return modelView;
	}

}
