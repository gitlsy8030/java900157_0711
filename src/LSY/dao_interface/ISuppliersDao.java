package LSY.dao_interface;

import java.util.List;

import LSY.domain.Suppliers;

public interface ISuppliersDao {
	void Add(Suppliers suppliers) throws Exception; 
	List<Suppliers> GetAll() throws Exception; 
	int [] BatchUpdate(List<Suppliers> suppliersList) throws Exception;
}
