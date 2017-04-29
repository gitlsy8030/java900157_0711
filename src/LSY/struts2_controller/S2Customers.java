package LSY.struts2_controller;


import java.util.Collection;
import java.util.EnumSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpSession;

import java.util.Set;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.solidfire.gson.Gson;

import LSY.annotation.SpringAuthorization;
import LSY.domain.ActionResult;
import LSY.domain.Customers;
import LSY.domain.ModelBindingObject;
import LSY.domain.Suppliers;
import LSY.service_interface.ICustomersService;
import LSY.service_interface.ISuppliersService;
import LSY.utils.MessageUtils;

public class S2Customers extends ActionSupport implements ModelDriven<Customers> {
	@Autowired
	private ICustomersService customersService;
	@Autowired
	private ISuppliersService suppliersService;
	
	private Customers customers1 =new Customers();
	
	private ModelBindingObject bindingData;

	private ActionResult actionResult=new ActionResult();
	//採用ModelDriven<T>方式，只能有一個@Override的getModel，無需set方法就可綁定數據，
	//在jsp中的name及value屬性均直接給customerId，而不能給customers1.customerId，否則反而無法綁定也無法在jsp中回顯
	//此法與在類別定私有成員，在加上getter setter梢有不同
	@Override
	public Customers getModel() {	
		return customers1;
	}
	public ModelBindingObject getBindingData() {
		return bindingData;
	}
	public void setBindingData(ModelBindingObject bindingData) {
		this.bindingData = bindingData;
	}

	public ActionResult getActionResult() {
		return actionResult;
	}


	public void setActionResult(ActionResult actionResult) {
		this.actionResult = actionResult;
	}


	public String Add(){
		return "CustomersAdd";
	}
	
	
	public String AddSave(){
		try {
			if(actionResult.getSuccess() == null || actionResult.getSuccess() == true ){
				customersService.Add(customers1);
				actionResult.setSuccess(true);
				actionResult.setCode("00");
				actionResult.setMessage(MessageUtils.AddSuccess);
			}			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "CustomersAdd";
	}	
	
	public String BatchUpdate(){
		try {
			List<Customers> customersList =customersService.GetAll();
			List<Suppliers> suppliersList =suppliersService.GetAll();
			bindingData=new ModelBindingObject();
			bindingData.setCustomersList(customersList);
			bindingData.setSuppliersList(suppliersList);
			System.out.println("###### BatchUpdate");
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "CustomersBatchUpdate";
	}			  
	public String UpdateSaveCustomers(){
		int [] updateCounts=null;
		try {
			updateCounts=customersService.BatchUpdate(bindingData.getCustomersList());
			System.out.println("###### UpdateSaveCustomers");
			actionResult.setSuccess(true);
			actionResult.setCode("00");
			actionResult.setMessage(MessageUtils.EditSuccess);
		} catch (Exception e) {
						
		}
		return "CustomersBatchUpdate";
	}

	public String UpdateSaveSuppliers(){
		int [] updateCounts=null;
		try {
			updateCounts=suppliersService.BatchUpdate(bindingData.getSuppliersList());
			System.out.println("###### UpdateSaveSuppliers");
			actionResult.setSuccess(true);
			actionResult.setCode("00");
			actionResult.setMessage(MessageUtils.EditSuccess);
		} catch (Exception e) {
						
		}
		return "CustomersBatchUpdate";
	}
	//@Transactional
	//@Transaction必須設再會拋出異常之處，在此Controller處若設定try catch捕捉異常，以便顯示message，
	//則因Exception已被捕獲，將導致所有update一半的資料仍被update， 無法全部roll back，
	//所以另在CustomerService這個service處設立一個UpdateBatch_Transactional將事務管理設於此方法，
	//因該servicec會拋異常給Controller，故可達成全部roll back之目的。
	
	public String UpdateSaveAll(){
		int [] updateCustomersCounts=null;
		int [] updateSuppliersCounts=null;
		try {
			updateCustomersCounts=customersService.BatchUpdate(bindingData.getCustomersList());
			updateSuppliersCounts=suppliersService.BatchUpdate(bindingData.getSuppliersList());
			System.out.println("###### UpdateSaveAll");
			actionResult.setSuccess(true);
			actionResult.setCode("00");
			actionResult.setMessage(MessageUtils.EditSuccess);
		} catch (Exception e) {
						
		}
		return "CustomersBatchUpdate";
	}
	
	
	
	public void validateAddSave(){
		if(customers1.getCustomerId().equals("")){
			this.addFieldError("customerId", "客戶編號不得為空");
			this.addFieldError("customerId", "外加錯誤訊息");
		}
		if(customers1.getCustomerId().length() > 10 ){
			this.addFieldError("customerId", "客戶編號長度不得大於10碼");
		}
		if(customers1.getCustomerName().equals("")){
			this.addFieldError("customerName", "客戶姓名不得為空");
		}
		if(customers1.getCustomerName().length() > 15 ){
			this.addFieldError("customerName", "客戶姓名不得大於15碼");
		}
		if(customers1.getTotalAmount() < 0){
			this.addFieldError("totalAmount", "累積消費額不得小於0");
		}
		String errorMessages="";
		Map<String,List<String>> errorMap=this.getFieldErrors();
		for(Entry<String,List<String>> e:errorMap.entrySet()){
			errorMessages +=e.getKey()+":\r\n";
			List<String> msgs=e.getValue();
			for(String m:msgs){
				errorMessages +=m+"\r\n";
			}
		}
		if(!errorMessages.equals("")){
			actionResult.setSuccess(false);
			actionResult.setCode("99");
			actionResult.setMessage(errorMessages);
			this.clearFieldErrors();
		}
	}
	
}
