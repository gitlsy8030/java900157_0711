package LSY.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import LSY.annotation.S2Autowired;
import LSY.annotation.S2Service;
import LSY.dao_interface.IProductsDao;
import LSY.domain.Categories;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;
import LSY.service_interface.ISpringProductService;
import LSY.utils.CommUtils;
@Service("SpringProductServiceReal") 
//@S2Service
public class SpringProductServiceReal implements ISpringProductService {

	private Map<String,Products> _map=CommUtils.getProductsMap();
	@Autowired
	//@S2Autowired(type="dao")
	IProductsDao productDao;
	@Override
	public void Add(Products product) {
		try {
			productDao.Add(product);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}	
	}

	@Override
	public void Update(Products product) {	
		try {
			productDao.Update(product);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void Delete(String productId) {		
		try {
			productDao.Delete(productId);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}	
	}

	@Override
	public Products View(String productId) throws Exception {
		Products product=productDao.View(productId);
		return product;
	}

	@Override
	public List<Products> GetProductsByCondition(ProductsSearch productsSearch) throws Exception {
		List<Products> list=productDao.GetProductsByCondition(productsSearch);
		return list;
	}

	@Override
	public List<Categories> GetAllCategories() throws Exception {
		List<Categories> list=productDao.GetAllCategories();
		return list;
	}

	@Override
	public List<Suppliers> GetAllSuppliers() throws Exception{
		List<Suppliers> list=productDao.GetAllSuppliers();
		return list;
	}


}
