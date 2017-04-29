package LSY.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import LSY.annotation.S2Service;
import LSY.domain.Categories;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;
import LSY.service_interface.ISpringProductService;
import LSY.utils.CommUtils;

@Service
public class SpringProductService implements ISpringProductService {
	private Map<String,Products> _map=CommUtils.getProductsMap();
	@Override
	public void Add(Products product) {
		_map.put(product.getProductId(), product);
	}

	@Override
	public void Update(Products product) {		
		_map.put(product.getProductId(), product);
	}

	@Override
	public void Delete(String productId) {
		_map.remove(productId);
	}

	@Override
	public Products View(String productId) {		
		return _map.get(productId);
	}

	@Override
	public List<Products> GetProductsByCondition(ProductsSearch productsSearch) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Categories> GetAllCategories() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Suppliers> GetAllSuppliers() {
		// TODO Auto-generated method stub
		return null;
	}

}
