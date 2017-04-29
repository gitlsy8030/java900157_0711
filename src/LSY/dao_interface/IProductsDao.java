package LSY.dao_interface;

import java.util.List;

import LSY.domain.Categories;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;

public interface IProductsDao {
	Products View(String productId) throws Exception;
	void Add(Products product)  throws Exception;
	void Update(Products product)  throws Exception;
	void Delete(String productId)  throws Exception;
	List<Products> GetProductsByCondition(ProductsSearch productSearch) throws Exception;
	List<Categories> GetAllCategories() throws Exception;
	List<Suppliers> GetAllSuppliers() throws Exception;	
}
