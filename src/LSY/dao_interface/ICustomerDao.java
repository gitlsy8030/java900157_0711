package LSY.dao_interface;

import java.util.List;

import LSY.domain.Customers;

public interface ICustomerDao {
	void Add(Customers customers) throws Exception; 
	List<Customers> GetAll() throws Exception;
	int [] BatchUpdate(List<Customers> customersList) throws Exception;
	
}
