package LSY.service_interface;

import java.util.List;

import LSY.domain.Customers;
import LSY.domain.Suppliers;

public interface ICustomersService {
	void Add(Customers customers) throws Exception;
	List<Customers> GetAll() throws Exception;
	int [] BatchUpdate(List<Customers> customersList) throws Exception;
	//此service用於測試@Transactional，通過他一次update兩個table，兩個update社為同一個@Transactional
	void BatchUpdate_Transactional(List<Customers> customersList,List<Suppliers> suppliersList) throws Exception;
}
