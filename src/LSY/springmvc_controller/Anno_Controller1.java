package LSY.springmvc_controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.codec.Encoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.solidfire.gson.Gson;

import LSY.domain.FunctionInfo;
import LSY.domain.ModelBindingObject;
import LSY.domain.UserAuthentication;
import LSY.service_interface.IUserInfoService;
import LSY.utils.CommUtils;

@Controller
public class Anno_Controller1 {	
	@Autowired
	private IUserInfoService service;
	
	@RequestMapping("/QueryFuns.spring")
	public ModelAndView QueryFuns(){
		System.out.println("into QueryFun()");
		ModelAndView mv=new ModelAndView();
		Gson gson=new Gson();
		String jsonStr=null;	
		jsonStr=GetAllFuns();
		mv.addObject("QueryFuns",jsonStr);
		mv.setViewName("Anno_Controller1/QueryFuns");		
		return mv;		
	}
	@RequestMapping(value="/AuthIocInjection.spring",method=RequestMethod.POST)
	public String AuthIocInjection(@ModelAttribute("inputModel") ModelBindingObject inputModel,Model model){		
		model.addAttribute("springMvcHome", "springMvcHome");		
		Map<String,Object> formData=inputModel.getCommMapModel();
		String userId=formData.get("userId").toString();
		Object obj=formData.get("authIoc");
		String [] auths;
		if(obj instanceof String []){
			auths=(String [])formData.get("authIoc");
		}
		else if(obj instanceof String){
			auths=formData.get("authIoc").toString().split(",");
		}
		else{
			auths=new String [0];
		}
		ApplicationContext context=new ClassPathXmlApplicationContext("springmvc.xml");		
		UserAuthentication userAuth;
		List<UserAuthentication> authList=new ArrayList<UserAuthentication>();
		System.out.println("1 AuthenticationMap size="+CommUtils.getAuthenticationMap().size());
		for(String beanId:auths){
			userAuth=(UserAuthentication)context.getBean(beanId);
			try {
				authList.add(userAuth);
			} catch (Exception e) {
				throw new RuntimeException(); 
			}
		}
		service.UpdateFunAuthById(userId, authList);		
		Map<String,Map<String,UserAuthentication>> map=CommUtils.getAuthenticationMap();		
		for(Entry<String,Map<String,UserAuthentication>> user:map.entrySet()){
			if(!user.getKey().equals("e102")){
				continue;
			}
			System.out.println(user.getKey());
			Map<String,UserAuthentication> value=user.getValue();
			for(Entry<String,UserAuthentication> fun:value.entrySet()){
				System.out.println(fun.getKey()+"  "+fun.getValue().getText()+"=>權限 auth="+
						fun.getValue().getIsAuth()+",add="+fun.getValue().getIsAdd() +
						",update="+fun.getValue().getIsUpdate() +
						",delete="+fun.getValue().getIsDelete());				
			}
		}
		List<UserAuthentication> authList1=new ArrayList<UserAuthentication>();
		for(Entry<String,UserAuthentication> entry:map.get(userId).entrySet()){
			authList1.add(entry.getValue());
		}
		model.addAttribute("authList", authList1);
		return "SpringMvcHome";
	}
	
	private String GetAllFuns(){
		List<FunctionInfo> funs=CommUtils.getFunctions();
		ModelAndView mv=new ModelAndView();
		Gson gson=new Gson();
		String jsonStr=null;
		try {
			jsonStr = URLEncoder.encode(gson.toJson(funs),"UTF-8");
			jsonStr = gson.toJson(funs);
			
		} catch (UnsupportedEncodingException e) {			
			e.printStackTrace();
		}	
		return jsonStr;
	}

}
