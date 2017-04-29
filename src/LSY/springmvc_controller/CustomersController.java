package LSY.springmvc_controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.solidfire.gson.Gson;

import LSY.annotation.SpringAuthorization;
import LSY.domain.Customers;
import LSY.domain.ModelBindingObject;
import LSY.domain.SelectedItem;
import LSY.domain.Suppliers;
import LSY.service_interface.ICustomersService;
import LSY.service_interface.ISuppliersService;

@Controller
public class CustomersController {
	@Autowired
	private ICustomersService customersService;
	@Autowired
	private ISuppliersService suppliersService;
	@SpringAuthorization
	@RequestMapping("/Customers_Add.spring")
	public String Customers_Add(Model model){		
		model.addAttribute("typeList", GetCustomerTypeList());
		model.addAttribute("customers1",new Customers());
		return "CustomersViews/CustomersAdd";
	}
	
	@RequestMapping("/Customers_AddSave.spring")
	public String Customers_AddSave(@ModelAttribute("customers1") Customers customers1, Model model){
		try {
			model.addAttribute("typeList",GetCustomerTypeList());
			customersService.Add(customers1);				
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "CustomersViews/CustomersAdd";
	}
	@SpringAuthorization
	@RequestMapping("/CustomersAndSuppliers_BatchQuery.spring")
	public String CustomersAndSuppliers_BatchQuery(Model model){
		try {
			List<Customers> customersList =customersService.GetAll();
			List<Suppliers> suppliersList =suppliersService.GetAll();
			model.addAttribute("customerTypeDDL",new Gson().toJson(GetCustomerTypeList()));
			model.addAttribute("genderDDL", new Gson().toJson(GetGenderList()));
			ModelBindingObject bindingData=new ModelBindingObject();
			bindingData.setCustomersList(customersList);
			bindingData.setSuppliersList(suppliersList);
			model.addAttribute("modelBindingObject",bindingData);		
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "CustomersViews/CustomersBatchUpdate";
	}
	@SpringAuthorization
	@RequestMapping(value="/Customers_BatchUpdateSave.spring",method=RequestMethod.POST)
	public String Customers_BatchUpdateSave
	(@ModelAttribute("modelBindingObject")
	ModelBindingObject modelBindingObject,Model model){
		int [] updateCounts=null;
		try {
			updateCounts=customersService.BatchUpdate(modelBindingObject.getCustomersList());			
			model.addAttribute("customerTypeDDL",new Gson().toJson(GetCustomerTypeList()));
			model.addAttribute("genderDDL", new Gson().toJson(GetGenderList()));
			model.addAttribute("updateMessage", "批次異動成功!");
		} catch (Exception e) {
			System.out.println("###### Customers update="+updateCounts);			
		}
		return "CustomersViews/CustomersBatchUpdate";
	}
	@SpringAuthorization
	@RequestMapping(value="/Suppliers_BatchUpdateSave.spring",method=RequestMethod.POST)
	public String Suppliers_BatchUpdateSave
	(@ModelAttribute("modelBindingObject")
	ModelBindingObject modelBindingObject,Model model){
		int [] updateCounts;
		try {
			updateCounts=suppliersService.BatchUpdate(modelBindingObject.getSuppliersList());			
			model.addAttribute("customerTypeDDL",new Gson().toJson(GetCustomerTypeList()));
			model.addAttribute("genderDDL", new Gson().toJson(GetGenderList()));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return "CustomersViews/CustomersBatchUpdate";
	}
	//@Transactional
	//@Transaction必須設再會拋出異常之處，在此Controller處若設定try catch捕捉異常，以便顯示message，
	//則因Exception已被捕獲，將導致所有update一半的資料仍被update， 無法全部roll back，
	//所以另在CustomerService這個service處設立一個UpdateBatch_Transactional將事務管理設於此方法，
	//因該servicec會拋異常給Controller，故可達成全部roll back之目的。
	@SpringAuthorization
	@RequestMapping(value="/All_BatchUpdateSave.spring",method=RequestMethod.POST)
	public String All_BatchUpdateSave
	(@ModelAttribute("modelBindingObject")
	ModelBindingObject modelBindingObject,Model model){
		int [] updateCounts_customers=null;
		int [] updateCounts_suppliers=null;
		try {
			customersService.BatchUpdate_Transactional(
					modelBindingObject.getCustomersList(),modelBindingObject.getSuppliersList());			
			model.addAttribute("customerTypeDDL",new Gson().toJson(GetCustomerTypeList()));
			model.addAttribute("genderDDL", new Gson().toJson(GetGenderList()));
			model.addAttribute("updateMessage", "批次異動成功!");
		} catch (Exception e) {
			System.out.println("###### Customers update="+updateCounts_customers);	
			//throw new RuntimeException(e);
		}
		return "CustomersViews/CustomersBatchUpdate";
	}
	
	private List<SelectedItem> GetCustomerTypeList(){
		List<SelectedItem> typeList=new ArrayList<SelectedItem>();
		SelectedItem item=null;
		item=new SelectedItem();
		item.setValue("V1");
		item.setText("VIP客戶");
		typeList.add(item);
		item=new SelectedItem();
		item.setValue("P1");
		item.setText("一般客戶");
		typeList.add(item);
		item=new SelectedItem();
		item.setValue("P2");
		item.setText("自來客");
		typeList.add(item);
		item=new SelectedItem();
		item.setValue("C1");
		item.setText("公司戶");
		typeList.add(item);
		item=new SelectedItem();
		item.setValue("C2");
		item.setText("經銷商");
		typeList.add(item);		
		return typeList;
	}
	private List<SelectedItem> GetGenderList(){
		List<SelectedItem> genderList=new ArrayList<SelectedItem>();
		SelectedItem item=null;
		item=new SelectedItem();
		item.setValue("M");
		item.setText("男");
		genderList.add(item);		
		item=new SelectedItem();
		item.setValue("F");
		item.setText("女");
		genderList.add(item);		
		return genderList;		
	}	
}
