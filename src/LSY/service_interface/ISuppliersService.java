package LSY.service_interface;

import java.util.List;

import LSY.domain.Customers;
import LSY.domain.Suppliers;

public interface ISuppliersService {
	void Add(Suppliers suppliers) throws Exception;
	List<Suppliers> GetAll() throws Exception; 
	int [] BatchUpdate(List<Suppliers> suppliersList) throws Exception;
}
