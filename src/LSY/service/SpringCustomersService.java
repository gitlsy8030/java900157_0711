package LSY.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import LSY.annotation.S2Service;
import LSY.dao_interface.ICustomerDao;
import LSY.dao_interface.ISuppliersDao;
import LSY.domain.Customers;
import LSY.domain.Suppliers;
import LSY.service_interface.ICustomersService;
@Service
public class SpringCustomersService implements ICustomersService {	
	
	@Autowired	
	ICustomerDao customersDao;
	
	@Autowired
	ISuppliersDao suppliersDao;
	
	@Override
	public void Add(Customers customers) throws Exception {
		customersDao.Add(customers);
	}
	@Override
	public List<Customers> GetAll() throws Exception {
		List<Customers> result=customersDao.GetAll();
		return result;
	}
	
	@Override
	public int[] BatchUpdate(List<Customers> customersList) throws Exception {
		int [] updateCounts=customersDao.BatchUpdate(customersList);
		return updateCounts;
	}
	@Override
	@Transactional
	public void BatchUpdate_Transactional(List<Customers> customersList, List<Suppliers> suppliersList)
			throws Exception {
		int [] updateCounts_customers=customersDao.BatchUpdate(customersList);
		int [] updateCounts_suppliers=suppliersDao.BatchUpdate(suppliersList);		
	}
}
