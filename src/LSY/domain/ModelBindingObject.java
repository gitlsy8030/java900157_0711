package LSY.domain;

import java.util.List;
import java.util.Map;

public class ModelBindingObject {
	private List<Customers> customersList;
	private List<Suppliers> suppliersList;
	private Map<String,Object> commMapModel;
	
	public Map<String, Object> getCommMapModel() {
		return commMapModel;
	}

	public void setCommMapModel(Map<String, Object> commMapModel) {
		this.commMapModel = commMapModel;
	}

	public List<Customers> getCustomersList() {
		return customersList;
	}

	public void setCustomersList(List<Customers> customersList) {
		this.customersList = customersList;
	}

	public List<Suppliers> getSuppliersList() {
		return suppliersList;
	}

	public void setSuppliersList(List<Suppliers> suppliersList) {
		this.suppliersList = suppliersList;
	}
	
}
