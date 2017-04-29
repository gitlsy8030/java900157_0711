package LSY.struts2_controller;

import org.apache.struts2.interceptor.validation.SkipValidation;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;

import LSY.domain.Categories;
import LSY.service_interface.ICategoriesService;
import LSY.service_interface.ISpringCategoriesService;

public class S2Categories extends ActionSupport {
	@Autowired
	private ISpringCategoriesService categoriesService;
	
	private Categories categories1;
	
	
	public Categories getCategories1() {
		return categories1;
	}

	public void setCategories1(Categories categories1) {
		this.categories1 = categories1;
	}

	@SkipValidation
	public String Add(){
		return "CategoriesAdd";
	}
	
	
	public String AddSave(){
		try {
			System.out.println("add Categories before");
			categoriesService.Add(categories1);	
			System.out.println("add Categories ok");
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "CategoriesAdd";
	}

	@Override
	public void validate() {
		if(categories1.getCategoryId() == null || categories1.getCategoryId().equals("")){
			System.out.println("CategoryId 空");
			this.addFieldError("categories1.getegoryId", "類別代號不得為空");
		}
		if(categories1.getCategoryId().length() > 2){
			System.out.println("CategoryId 長度不能超過2碼");
			this.addFieldError("categories1.getegoryId", "長度不能超過2碼");
		}
		if(categories1.getCategoryName() == null || categories1.getCategoryName().equals("")){
			System.out.println("CategoryName 空");
			this.addFieldError("categories1.getegoryName", "類別名稱不得為空");
		}
	}	
}
