package LSY.springmvc_controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import LSY.domain.Suppliers;
import LSY.service_interface.ISuppliersService;
@Controller
public class SuppliersController {
	@Autowired
	private ISuppliersService suppliersService;
	@RequestMapping("/Suppliers_Add.spring")
	public String Supplers_Add(Model model){
		return "SuppliersViews/SuppliersAdd";
	}
	//利用Spring驗證實，需再傳入pojo的=>前：加上@Validated(後面不跟，號)；及後：加上BinderResult bindeResult(這樣型成一組配對出現)
	@RequestMapping("/Suppliers_AddSave.spring")
	public String Suppliers_AddSave(@Validated Suppliers suppliers, BindingResult binderResult, Model model){
		try {
			Map<String,String> springError=new HashMap<String,String>();			
			if(binderResult.hasErrors()){
				List<FieldError> errors=binderResult.getFieldErrors();
				for(FieldError err:errors){					
					String key=err.getField();
					String value=err.getDefaultMessage();
					springError.put(key, value);
				}
				model.addAttribute("springError", springError);				
			}
			else{
				suppliersService.Add(suppliers);
				model.addAttribute("addMessage", "新增供應商：編號"+suppliers.getSupplierId()+"，成功!" );	
			}			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "SuppliersViews/SuppliersAdd";
	}	
}
