package LSY.springmvc_controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import LSY.annotation.SpringAuthorization;
import LSY.domain.Categories;
import LSY.service_interface.ISpringCategoriesService;

@Controller
public class CategoriesController {
	@Autowired
	private ISpringCategoriesService categoriesService;
	@SpringAuthorization
	@RequestMapping(value="/Categories_List.spring",method=RequestMethod.GET)	
	public  String CategoriesList(Model model) throws Exception{
		return "CategoriesViews/CategoriesList";
	}
	@SpringAuthorization
	@RequestMapping(value="/Categories_Add.spring",method=RequestMethod.GET)	
	public  String CategoriesAdd(Model model) throws Exception{
		model.addAttribute("categories", new Categories());
		return "CategoriesViews/CategoriesAdd";
	}
	
	@RequestMapping(value="/Categories_AddSave.spring",method=RequestMethod.POST)	
	public  String CategoriesAddSave(@ModelAttribute("categories") Categories categories, Model model) throws Exception{
		categoriesService.Add(categories);		
		return "CategoriesViews/CategoriesAdd";
	}
	@SpringAuthorization
	@RequestMapping(value="/Categories_Edit.spring",method=RequestMethod.GET)	
	public  String CategoriesEdit(@RequestParam String categoryId, Map<String,Object> map) throws Exception{	
		Categories categories=categoriesService.GetByCategoryId(categoryId);
		map.put("categories2", categories);
		return "CategoriesViews/CategoriesEdit";
	}
	@RequestMapping(value="/Categories_EditSave.spring",method=RequestMethod.POST)	
	public  String CategoriesEditSave(@ModelAttribute("categories2") Categories categories2, Model model) throws Exception{
		categoriesService.Update(categories2);
		//使用了@ModelAttribute("categories2")就無需再將POJO "categories2" 加到model，spring會幫我們以指定名稱加入 
		//model.addAttribute("categories2", categories2);  
		return "CategoriesViews/CategoriesEdit";
	}
	 
	@RequestMapping(value="/Categories_Get.spring",method=RequestMethod.POST)
	@ResponseBody
	public  List<Categories> JdbcTemplateGetCategoriesAll(Model model) throws Exception{			
		List<Categories> result=categoriesService.GetAll();
		return result;
	}
}
