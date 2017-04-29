package LSY.struts2_controller;

import java.io.Writer;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.opensymphony.xwork2.ActionSupport;
import com.solidfire.gson.Gson;
import com.solidfire.gson.GsonBuilder;

import LSY.domain.ActionResult;
import LSY.domain.Categories;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;
import LSY.service_interface.ICategoriesService;
import LSY.service_interface.ISpringCategoriesService;
import LSY.service_interface.ISpringProductService;
import LSY.service_interface.ISuppliersService;
import LSY.utils.MessageUtils;

public class S2Product extends ActionSupport {
	@Autowired
	private ISpringCategoriesService categoriesService;
	@Autowired
	private ISuppliersService suppliersService;
	
	@Autowired
	@Qualifier("SpringProductServiceReal")
	//當在springmvc.xml定義要去哪個包掃描實作ISpringProductService的類，而該包內確有兩個以上(或完全沒有)實作ISpringProductService的類時就會拋出異常
	//此時要指定名稱來決定使用哪個類就要用搭配使用@Qualifier，他是以名稱來掃描，
	//重點：在SpringProductServiceReal類，定的註釋必需@Service("SpringProductServiceReal")，不可僅為@Service	
	private ISpringProductService productService;
	
	private ProductsSearch productsSearch;
	
	private List<Categories> categoriesDDL;
	private List<Suppliers> suppliersDDL;
	
	private List<Products> list;
	private Products products1;
	private String productId;
	private ActionResult actionResult=new ActionResult();
	
	public ISuppliersService getSuppliersService() {
		return suppliersService;
	}

	public void setSuppliersService(ISuppliersService suppliersService) {
		this.suppliersService = suppliersService;
	}

	public List<Categories> getCategoriesDDL() {
		return categoriesDDL;
	}

	public void setCategoriesDDL(List<Categories> categoriesDDL) {
		this.categoriesDDL = categoriesDDL;
	}

	public List<Suppliers> getSuppliersDDL() {
		return suppliersDDL;
	}

	public void setSuppliersDDL(List<Suppliers> suppliersDDL) {
		this.suppliersDDL = suppliersDDL;
	}
	

	public List<Products> getList() {
		return list;
	}

	public void setList(List<Products> list) {
		this.list = list;
	}

	public ProductsSearch getProductsSearch() {
		return productsSearch;
	}

	public void setProductsSearch(ProductsSearch productsSearch) {
		this.productsSearch = productsSearch;
	}

	public Products getProducts1() {
		return products1;
	}

	public void setProducts1(Products products1) {
		this.products1 = products1;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public ActionResult getActionResult() {
		return actionResult;
	}

	public void setActionResult(ActionResult actionResult) {
		this.actionResult = actionResult;
	}

	@Override
	public String execute() throws Exception{
		System.out.println("productEdit execute()");
		categoriesDDL =categoriesService.GetAll();		
		suppliersDDL=suppliersService.GetAll();		
		productsSearch=new ProductsSearch();
		list=productService.GetProductsByCondition(productsSearch);
		return "Index";		
	}
	public String SearchProduct() throws Exception{
		System.out.println(productsSearch.getOnlineDateStart()+","+productsSearch.getOnlineDateEnd());
		System.out.println(productsSearch.getPriceMin()+","+productsSearch.getPriceMax());
		categoriesDDL =categoriesService.GetAll();		
		suppliersDDL=suppliersService.GetAll();			
		list=productService.GetProductsByCondition(productsSearch);
		System.out.println(list.size());
		return "Index";
	}
	public String ProductAdd() throws Exception{	
		categoriesDDL =categoriesService.GetAll();		
		suppliersDDL=suppliersService.GetAll();	
		products1=new Products();
		actionResult.setSuccess(false); 
		actionResult.setCode("0"); 
		actionResult.setMessage("action message1"); 
		return "ProductAdd";		
	}
	public String ProductAddSave() throws Exception{	
		productService.Add(products1);	
		productId=products1.getProductId();
		actionResult=GetActionResult("add",productId);		
		ServletActionContext.getRequest().getSession().setAttribute("actionResult", actionResult);
		return "RedirectToEdit";		
	}
	public String ProductEdit() throws Exception{
		System.out.println("productEdit ProductEdit()");
		ActionResultSetting();
		categoriesDDL =categoriesService.GetAll();		
		suppliersDDL=suppliersService.GetAll();	
		products1=productService.View(productId);			
		return "ProductEdit";
	}
	public String ProductEditSave() throws Exception{	
		System.out.println("productEdit ProductEditSave()");
		actionResult=GetActionResult("edit",productId);		
		productService.Update(products1);	
		productId=products1.getProductId();
		return "RedirectToEdit";		
	}
	public String ProductView() throws Exception{	
		categoriesDDL =categoriesService.GetAll();		
		suppliersDDL=suppliersService.GetAll();	
		products1=productService.View(productId);			
		return "ProductView";
	}	
	//此action採用struts2 json-plugin，只在xml內定義<result name="ProductRemove" type="json"/>
	//<package name="s2Proj1" extends="struts-default,json-default" namespace="/">多定=>json-default
	public String ProductDeleteSave() throws Exception{	
		System.out.println("productEdit ProductEditSave()");
		productService.Delete(productId);		
		actionResult=GetActionResult("remove",productId);
		return "ProductRemove";
	}
	private ActionResult GetActionResult(String type,Object keyValue){
		ActionResult result=new ActionResult();
		String msg="";
		if(type.equals("add")){
			msg=MessageUtils.AddSuccess;
		}
		else if(type.equals("edit")){
			msg=MessageUtils.EditSuccess;
		}
		else if(type.equals("remove")){
			msg=MessageUtils.RemoveSuccess;
		}		
		result.setSuccess(true);
		result.setCode("0");
		result.setMessage(msg);
		if(keyValue != null){
			result.setKeyValue(keyValue);
		}
		return result;
	}
	private void ActionResultSetting(){
		HttpSession session=ServletActionContext.getRequest().getSession();
		ActionResult sessionResult=(ActionResult)session.getAttribute("actionResult");
		if(sessionResult != null){
			actionResult=sessionResult;
			session.removeAttribute("actionResult");			
		}
	}
	

}
