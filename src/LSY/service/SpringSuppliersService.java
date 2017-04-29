package LSY.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import LSY.annotation.S2Service;
import LSY.dao_interface.ISuppliersDao;
import LSY.domain.Suppliers;
import LSY.service_interface.ISuppliersService;
@Service
public class SpringSuppliersService implements ISuppliersService {
	@Autowired
	ISuppliersDao suppliersDao;
	@Override
	public void Add(Suppliers suppliers) throws Exception {
		suppliersDao.Add(suppliers);
	}
	@Override
	public List<Suppliers> GetAll() throws Exception {
		List<Suppliers> suppliersList=suppliersDao.GetAll();
		return suppliersList;
	}
	@Transactional
	@Override
	public int[] BatchUpdate(List<Suppliers> suppliersList) throws Exception {
		int [] updateCounts=suppliersDao.BatchUpdate(suppliersList);
		return updateCounts;
	}

}
