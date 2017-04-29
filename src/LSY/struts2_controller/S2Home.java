package LSY.struts2_controller;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.ActionSupport;

import LSY.domain.ModelBindingObject;
import LSY.domain.UserAuthentication;
import LSY.service_interface.ILoginInfoService;
import LSY.service_interface.IUserInfoService;
import LSY.utils.CommUtils;

public class S2Home extends ActionSupport {	
	@Autowired
	private ILoginInfoService loginInfoService;	
	@Autowired
	private IUserInfoService service;
	
	private ModelBindingObject data1;
	
	private List<UserAuthentication> resultList;
	
	private UserAuthentication auth_SpringHome1;
	private UserAuthentication auth_Products1;	
	private UserAuthentication auth_Categories1;
	private UserAuthentication auth_CategoriesAdd1;
	private UserAuthentication auth_CategoriesList1;
	private UserAuthentication auth_Customers1;
	private UserAuthentication auth_CustomersBatch1;
	private UserAuthentication auth_SuppliersAdd1;	
	
	private UserAuthentication decline_SpringHome1;
	private UserAuthentication decline_Products1;	
	private UserAuthentication decline_Categories1;
	private UserAuthentication decline_CategoriesAdd1;
	private UserAuthentication decline_CategoriesList1;
	private UserAuthentication decline_Customers1;
	private UserAuthentication decline_CustomersBatch1;
	private UserAuthentication decline_SuppliersAdd1;

	public ModelBindingObject getData1() {
		return data1;
	}
	public void setData1(ModelBindingObject model) {
		this.data1 = model;
	}
	
	public List<UserAuthentication> getResultList() {
		return resultList;
	}
//	public void setResultList(List<UserAuthentication> resultList) {
//		this.resultList = resultList;
//	}
	@Override
	public String execute() throws Exception {
		String loginUserId=loginInfoService.GetLoginUserId();
		data1=new ModelBindingObject();		
		Map<String,Object> model=new HashMap<String,Object>();
		model.put("userId", loginUserId);
		data1.setCommMapModel(model);		
		System.out.println("into Home");
		return "Home";
	}
	public String AuthSet() throws Exception{
		System.out.println("into S2Home_AuthSet");
		Map<String,Object> formData=data1.getCommMapModel();
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
		UserAuthentication userAuth;
		List<UserAuthentication> authList=new ArrayList<UserAuthentication>();
		for(String beanId:auths){
			Field field =this.getClass().getDeclaredField(beanId);
			field.setAccessible(true);
			userAuth=(UserAuthentication)field.get(this);
			try {
				authList.add(userAuth);
			} catch (Exception e) {
				throw new RuntimeException(); 
			}
		}
		service.UpdateFunAuthById(userId, authList);		
		Map<String,Map<String,UserAuthentication>> map=CommUtils.getAuthenticationMap();		
		
		resultList=new ArrayList<UserAuthentication>();
		for(Entry<String,UserAuthentication> entry:map.get(userId).entrySet()){
			resultList.add(entry.getValue());
		}		
		return "Home";
	}
	//==================================================
	public UserAuthentication getAuth_SpringHome1() {		
		return auth_SpringHome1;
	}
	public void setAuth_SpringHome1(UserAuthentication auth_SpringHome1) {
		this.auth_SpringHome1 = auth_SpringHome1;
	}
	public UserAuthentication getAuth_Products1() {
		return auth_Products1;
	}
	public void setAuth_Products1(UserAuthentication auth_Products1) {
		this.auth_Products1 = auth_Products1;
	}
	public UserAuthentication getAuth_Categories1() {
		return auth_Categories1;
	}
	public void setAuth_Categories1(UserAuthentication auth_Categories1) {
		this.auth_Categories1 = auth_Categories1;
	}
	public UserAuthentication getAuth_CategoriesAdd1() {
		return auth_CategoriesAdd1;
	}
	public void setAuth_CategoriesAdd1(UserAuthentication auth_CategoriesAdd1) {
		this.auth_CategoriesAdd1 = auth_CategoriesAdd1;
	}
	public UserAuthentication getAuth_CategoriesList1() {
		return auth_CategoriesList1;
	}
	public void setAuth_CategoriesList1(UserAuthentication auth_CategoriesList1) {
		this.auth_CategoriesList1 = auth_CategoriesList1;
	}
	public UserAuthentication getAuth_Customers1() {
		return auth_Customers1;
	}
	public void setAuth_Customers1(UserAuthentication auth_Customers1) {
		this.auth_Customers1 = auth_Customers1;
	}
	public UserAuthentication getAuth_CustomersBatch1() {
		return auth_CustomersBatch1;
	}
	public void setAuth_CustomersBatch1(UserAuthentication auth_CustomersBatch1) {
		this.auth_CustomersBatch1 = auth_CustomersBatch1;
	}
	public UserAuthentication getAuth_SuppliersAdd1() {
		return auth_SuppliersAdd1;
	}
	public void setAuth_SuppliersAdd1(UserAuthentication auth_SuppliersAdd1) {
		this.auth_SuppliersAdd1 = auth_SuppliersAdd1;
	}
	public UserAuthentication getDecline_SpringHome1() {
		return decline_SpringHome1;
	}
	public void setDecline_SpringHome1(UserAuthentication decline_SpringHome1) {
		this.decline_SpringHome1 = decline_SpringHome1;
	}
	public UserAuthentication getDecline_Products1() {
		return decline_Products1;
	}
	public void setDecline_Products1(UserAuthentication decline_Products1) {
		this.decline_Products1 = decline_Products1;
	}
	public UserAuthentication getDecline_Categories1() {
		return decline_Categories1;
	}
	public void setDecline_Categories1(UserAuthentication decline_Categories1) {
		this.decline_Categories1 = decline_Categories1;
	}
	public UserAuthentication getDecline_CategoriesAdd1() {
		return decline_CategoriesAdd1;
	}
	public void setDecline_CategoriesAdd1(UserAuthentication decline_CategoriesAdd1) {
		this.decline_CategoriesAdd1 = decline_CategoriesAdd1;
	}
	public UserAuthentication getDecline_CategoriesList1() {
		return decline_CategoriesList1;
	}
	public void setDecline_CategoriesList1(UserAuthentication decline_CategoriesList1) {
		this.decline_CategoriesList1 = decline_CategoriesList1;
	}
	public UserAuthentication getDecline_Customers1() {
		return decline_Customers1;
	}
	public void setDecline_Customers1(UserAuthentication decline_Customers1) {
		this.decline_Customers1 = decline_Customers1;
	}
	public UserAuthentication getDecline_CustomersBatch1() {
		return decline_CustomersBatch1;
	}
	public void setDecline_CustomersBatch1(UserAuthentication decline_CustomersBatch1) {
		this.decline_CustomersBatch1 = decline_CustomersBatch1;
	}
	public UserAuthentication getDecline_SuppliersAdd1() {
		return decline_SuppliersAdd1;
	}
	public void setDecline_SuppliersAdd1(UserAuthentication decline_SuppliersAdd1) {
		this.decline_SuppliersAdd1 = decline_SuppliersAdd1;
	}
	
}
