package LSY.springmvc_controller;

import java.io.Writer;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.solidfire.gson.Gson;
import com.solidfire.gson.GsonBuilder;

import LSY.annotation.AuthEnum;
import LSY.annotation.SpringAuthorization;
import LSY.dao_interface.ICategoriesDao;
import LSY.domain.Categories;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;
import LSY.service_interface.ISpringProductService;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.ProductForm;

@Controller
public class ProductController {
	@Autowired
	@Qualifier("SpringProductServiceReal")
	//當在springmvc.xml定義要去哪個包掃描實作ISpringProductService的類，而該包內確有兩個以上(或完全沒有)實作ISpringProductService的類時就會拋出異常
	//此時要指定名稱來決定使用哪個類就要用搭配使用@Qualifier，他是以名稱來掃描，
	//重點：在SpringProductServiceReal類，定的註釋必需@Service("SpringProductServiceReal")，不可僅為@Service	
	private ISpringProductService productService;
	
	@Autowired
	private ICategoriesDao categoriesDao;
	
	@RequestMapping(value="/Product_Index.spring",method=RequestMethod.GET)
	@SpringAuthorization(type=AuthEnum.auth)
	public String Index(ProductsSearch productsSearch ,Model model) throws Exception{
		SearchProductData(productsSearch ,model);
		return "ProductViews/Index";		
	}							
	@RequestMapping(value="/Product_Search.spring",method=RequestMethod.POST)							
	public String SearchProduct(ProductsSearch productsSearch ,Model model) throws Exception{	
		List<Products> list=productService.GetProductsByCondition(productsSearch);
		List<Categories> categories=productService.GetAllCategories();
		List<Suppliers> suppliers=productService.GetAllSuppliers();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		String productStr=gson.toJson(list);
		String categoriesStr=gson.toJson(categories);
		String suppliersStr=gson.toJson(suppliers);
		model.addAttribute("productSearch", productsSearch);
		model.addAttribute("productsTableData", productStr);
		model.addAttribute("productsCategoriesDDL", categoriesStr);
		model.addAttribute("productsSuppliersDDL", suppliersStr);
		return "ProductViews/Index";		
	}
	private void SearchProductData(ProductsSearch productsSearch ,Model model) throws Exception{
		List<Products> list=productService.GetProductsByCondition(productsSearch);
		List<Categories> categories=productService.GetAllCategories();
		List<Suppliers> suppliers=productService.GetAllSuppliers();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		String productStr=gson.toJson(list);
		String categoriesStr=gson.toJson(categories);
		String suppliersStr=gson.toJson(suppliers);
		model.addAttribute("productSearch", productsSearch);
		model.addAttribute("productsTableData", productStr);
		model.addAttribute("productsCategoriesDDL", categoriesStr);
		model.addAttribute("productsSuppliersDDL", suppliersStr);
	}
	
	@RequestMapping(value="/Product_Input.spring",method=RequestMethod.GET)
	public String ProductInput(){
		return "ProductViews/ProductForm";		
	}
	@RequestMapping(value="/Product_Add1.spring",method=RequestMethod.POST)
	public String AddProduct1(ProductForm productForm,RedirectAttributes redirectAttributes) throws Exception{
		Products product=new Products();
		WebUtils.CopyBeanToBean(productForm, product);
		productService.Add(product);
		redirectAttributes.addFlashAttribute("message","產品編號："+product.getProductId()+"新增成功");		
		return "redirect:Product_View.spring?productId="+product.getProductId();	
	}
	@RequestMapping(value="/Product_View.spring",method=RequestMethod.GET)
	@SpringAuthorization(ParentUrl="Product_Index.spring",type=AuthEnum.view)
	public String ViewProduct(@RequestParam String productId,Model model) throws Exception{		
		Products product=productService.View(productId);		
		model.addAttribute("product",product);
		return "ProductViews/ProductView";		
	}
	@RequestMapping(value="/Product_Add.spring",method=RequestMethod.GET)
	@SpringAuthorization(ParentUrl="Product_Index.spring",type=AuthEnum.add)
	public String AddProduct(Model model,RedirectAttributes redirectAttributes) throws Exception{	
		Object flashData=model.asMap().get("showMessage");
		if(flashData != null){
			model.addAttribute("addMessage",flashData);
			model.asMap().remove("showMessage");			
		}		
		List<Categories> categories=productService.GetAllCategories();
		String firstCategoryId=categories.get(0).getCategoryId();
		List<Suppliers> suppliers=productService.GetAllSuppliers();
		String firstSupplierId=suppliers.get(0).getSupplierId();
		Products product=new Products();
		product.setOnlineDate(new Date());
		product.setCategoryId(firstCategoryId);
		product.setSupplierId(firstSupplierId);
		model.addAttribute("product",product);
		return "ProductViews/ProductAdd";		
	}
	@RequestMapping(value="/Product_AddSave.spring",method=RequestMethod.POST)
	@SpringAuthorization(ParentUrl="Product_Index.spring",type=AuthEnum.add)
	public String AddSaveProduct(Products product1,Model model,RedirectAttributes redirectAttributes) throws Exception{			
		productService.Add(product1);	
		model.addAttribute("product",product1);
		redirectAttributes.addFlashAttribute("showMessage","產品編號："+product1.getProductId()+"新增成功!");		
		return "redirect:Product_Edit.spring?productId="+product1.getProductId();
	}
	@RequestMapping(value="/Product_Edit.spring",method=RequestMethod.GET)
	@SpringAuthorization(ParentUrl="Product_Index.spring",type=AuthEnum.update)
	public String EditProduct(@RequestParam String productId,Model model,Map<String,Object> map) throws Exception{	
		Object flashData=model.asMap().get("showMessage");
		if(flashData != null){
			model.addAttribute("updateMessage",flashData);
			model.asMap().remove("showMessage");			
		}		
		Products product=productService.View(productId);		
		model.addAttribute("product",product);
		return "ProductViews/ProductEdit";		
	}	
	@RequestMapping(value="/Product_EditSave.spring",method=RequestMethod.POST)
	@SpringAuthorization(ParentUrl="Product_Index.spring",type=AuthEnum.update)
	public String EditSaveProduct(Products product,Model model,RedirectAttributes redirectAttributes) throws Exception{			
		productService.Update(product);	
		model.addAttribute("product",product);
		redirectAttributes.addFlashAttribute("showMessage","產品編號："+product.getProductId()+"修改成功!");		
		return "redirect:Product_Edit.spring?productId="+product.getProductId();
	}
	@RequestMapping(value="/Product_Remove.spring",method=RequestMethod.GET)
	@SpringAuthorization(ParentUrl="Product_Index.spring",type=AuthEnum.delete)
	public void DeleteSaveProduct(@RequestParam String productId,Model model,Writer writer) throws Exception{	
		System.out.println("into DeleteSaveProduct");
		productService.Delete(productId);		
		//redirectAttributes.addFlashAttribute("showMessage","產品編號："+productId+"刪除成功!");	
		JSONObject obj = new JSONObject();		
		obj.put("code", "ok");
		obj.put("deleteMessage","產品編號："+productId+"刪除成功，訊息關閉後將重新載入資料!");
		String out=obj.toJSONString();
		writer.write(out);	
		writer.flush();
	}
	@RequestMapping(value="/Product_GetDDL.spring",method=RequestMethod.POST)
	public void GetCombobox(@RequestParam(value="ddlName") String ddlName ,Writer writer) throws Exception{		
		Gson gson=new Gson();
		String jsonStr="";
		if(ddlName.equals("categories")){
			List<Categories> categories=productService.GetAllCategories();
			jsonStr=gson.toJson(categories);
		}
		else if(ddlName.equals("suppliers")){
			List<Suppliers> suppliers=productService.GetAllSuppliers();
			jsonStr=gson.toJson(suppliers);
		}
		writer.write(jsonStr);	
		writer.flush();
	}
	@RequestMapping(value="/Categories_GetOld.spring",method=RequestMethod.GET)
	@ResponseBody
	public  List<Categories> JdbcTemplateGetCategoriesAll(Model model) throws Exception{			
		List<Categories> result=categoriesDao.GetAll();
		return result;
	}
	
}
//String resultStr=new Gson().toJson(result);
//writer.write(resultStr);	
//writer.flush();