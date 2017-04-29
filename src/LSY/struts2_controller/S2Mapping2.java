package LSY.struts2_controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.util.Supplier;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.opensymphony.xwork2.util.ValueStack;

import LSY.annotation.S2Autowired;
import LSY.domain.Categories;
import LSY.domain.Customers;
import LSY.domain.LoginInfo;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;
import LSY.domain.UserAuthentication;
import LSY.domain.UserInfo;
import LSY.service.LoginInfoService;
import LSY.service.SpringSuppliersService;
import LSY.service_interface.ICategoriesService;
import LSY.service_interface.ICustomersService;
import LSY.service_interface.ILoginInfoService;
import LSY.service_interface.ISpringCategoriesService;
import LSY.service_interface.ISpringProductService;
import LSY.service_interface.ISuppliersService;
import LSY.service_interface.IUserInfoService;
//此S2Mapping2 Action，因struts.xml內定義action之class係指定springmvc.xml的bean id，再由spring bean指定class全類名，
//因此，此action之實體係由spring new出來，如此，在此處指定的@Autowire,....等spring註釋就通通有效，否則就需要使用自定意的@S2Autowired.....。 
public class S2Mapping2 extends ActionSupport {
	@S2Autowired(type="service")
	private ILoginInfoService loginInfoService1;	
	//@S2Autowired(type="service")
	@Autowired
	@Qualifier("SpringProductServiceReal")
	//因有兩個類都時做了ISpringProductService，所以須指定名稱裝配
	private ISpringProductService productService1;
	@S2Autowired(type="service")
	private IUserInfoService userInfoService1;
	//@S2Autowired(type="service")
	@Autowired
	private ISpringCategoriesService categoriesService1;
	
	private Map<String,LoginInfo> loginData;
	//此action指定由spring 創建，而spring bean 內又定義一個<property name="prop1" value="....">，故此處一定要有setter方法否則報錯 
	private String prop1;	
	private Categories categories1=new Categories();
	private Suppliers suppliers1=new Suppliers();	
	private List<Products> productsList1;
	private UserInfo userInfo1;
	private List<Categories> categoriesList1;
	private UserAuthentication auth_SpringHome1;
	private UserAuthentication decline_SpringHome1;
	private UserAuthentication auth_Products1;
	private UserAuthentication decline_Products1;
	
	//設定了getter方法，struts2就自動將此private物件放入StackValue(值棧)內
	public String getProp1(){
		return prop1;
	}
	//設定了setter方法，struts2才能將prop1注入
	public void setProp1(String value){
		prop1=value;
	}
	
	public UserAuthentication getAuth_SpringHome1() {
		return auth_SpringHome1;
	}
	public void setAuth_SpringHome1(UserAuthentication auth_SpringHome1) {
		this.auth_SpringHome1 = auth_SpringHome1;
	}
	public UserAuthentication getDecline_SpringHome1() {
		return decline_SpringHome1;
	}
	public void setDecline_SpringHome1(UserAuthentication decline_SpringHome1) {
		this.decline_SpringHome1 = decline_SpringHome1;
	}
	public UserAuthentication getAuth_Products1() {
		return auth_Products1;
	}
	public void setAuth_Products1(UserAuthentication auth_Products1) {
		this.auth_Products1 = auth_Products1;
	}
	public UserAuthentication getDecline_Products1() {
		return decline_Products1;
	}
	public void setDecline_Products1(UserAuthentication decline_Products1) {
		this.decline_Products1 = decline_Products1;
	}
	public Map<String,LoginInfo> getLoginData(){
		return loginData;
	}	
	public List<Products> getProductsList1(){
		return productsList1;
	}
	public UserInfo getUserInfo1(){
		return userInfo1;
	}
	public List<Categories> getCategoriesList1(){
		return categoriesList1;
	}
	public Suppliers getSuppliers1(){
		return suppliers1;
	}
	
	@Override
	public String execute() throws Exception {
		categories1.setCategoryId("C901");
		categories1.setCategoryName("男女服飾用品");
		suppliers1.setSupplierId("S802");
		suppliers1.setSupplierName("三洋電器公司");
		suppliers1.setUniformNo("22784512");
		suppliers1.setContactName("john wu");
		ActionContext context=ActionContext.getContext();
		ValueStack vs=context.getValueStack();
		//以set方法放入值，就成為棧頂原素(set是放一個Map)，而原先棧頂原素就在stack的下面了
		vs.set("a1", "a1a1a1");
		vs.set("a2", "a2a2a2");
		vs.set("categories1", categories1);
		vs.set("suppliers1_set", suppliers1);
		//push就是單獨一個成為棧頂原素
		vs.push("a3a3a3");
		vs.push(55);
		//ValueStack內主要有以下兩個對象：root:[debug]標籤的上半部Value Stack Contents。context:[debug]標籤的下半部Stack Context一般主要操作的root對項:
		//(1)context(是Map)：存放了application、session、request、parameter、attr
		//(2)root(是List)對項：在未對值棧做任何操作前，栈頂原素為action本身這個實體的參考，所以可以藉由此對項存取action本身的屬性
		//
		HttpServletRequest request=ServletActionContext.getRequest();
		HttpSession session=ServletActionContext.getRequest().getSession();
		ServletContext application=ServletActionContext.getServletContext();
		request.setAttribute("request1", "value setted by request.setAttrubute()");		
		session.setAttribute("session1", "value setted by session.setAttrubute()");
		application.setAttribute("application1", "value setted by servletContext.setAttrubute()");
		//測試#attr
		//request.setAttribute("request2", "value request2 in request.setAttrubute()");
		session.setAttribute("request2", "value request2 in session.setAttrubute()");
		application.setAttribute("request2", "value request2 in servletContext.setAttrubute()");
		
		loginData=loginInfoService1.GetAllLogins();	
		productsList1=productService1.GetProductsByCondition(new ProductsSearch());		
		userInfo1=userInfoService1.GetUserInfo("b5021");
		categoriesList1=categoriesService1.GetAll();
		System.out.println("prop1="+prop1);
		return "S2Mapping2";
	}
	

}
