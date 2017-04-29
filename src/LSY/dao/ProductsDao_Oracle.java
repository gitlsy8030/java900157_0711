package LSY.dao;

import java.io.IOException;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import LSY.annotation.S2Service;
import LSY.dao_interface.IDB;
import LSY.dao_interface.IProductsDao;
import LSY.domain.Categories;
import LSY.domain.FunctionInfo;
import LSY.domain.Products;
import LSY.domain.ProductsSearch;
import LSY.domain.Suppliers;
import LSY.utils.FactoryUitls;
import LSY.utils.WebUtils;

@Service
@S2Service
public class ProductsDao_Oracle implements IProductsDao {

	@Override
	public Products View(String productId) throws Exception {
		Products product=null;
		IDB db=FactoryUitls.CreateDB();
		Connection conn=db.GetConncetion();	
		String sql="select * from Products where productId = ?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setString(1, productId);
    	ResultSet result = stmt.executeQuery();  
    	List<Products> list=WebUtils.ResultSetToBeanLsit(result, Products.class);
		if(list.size() == 0 || list == null){				
		}
		else{
			product=list.get(0);
		}
    	conn.close();
    	stmt.close();
    	result.close();
		return product;			
	}

	@Override
	public void Add(Products product) throws Exception {
		String sql="insert into Products(productId,productName,categoryId,supplierId,productDesc,price,onlineDate) values(?,?,?,?,?,?,?)";
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();			
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, product.getProductId());	
			stmt.setString(2, product.getProductName());
			stmt.setString(3, product.getCategoryId());
			stmt.setString(4, product.getSupplierId());
			stmt.setString(5, product.getProductDesc());
			stmt.setDouble(6, product.getPrice());
			stmt.setDate(7, new java.sql.Date(product.getOnlineDate().getTime()));					
			stmt.executeUpdate();  
			conn.close();
	    	stmt.close();	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void Update(Products product) throws Exception {
		String sql="update Products set productName=?,categoryId=?,supplierId=?,productDesc=?,price=?,onlineDate=? where productId=?";
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();			
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, product.getProductName());
			stmt.setString(2, product.getCategoryId());
			stmt.setString(3, product.getSupplierId());
			stmt.setString(4, product.getProductDesc());
			stmt.setDouble(5, product.getPrice());
			stmt.setDate(6, new java.sql.Date(product.getOnlineDate().getTime()));
			stmt.setString(7, product.getProductId());			
			stmt.executeUpdate();  
			conn.close();
	    	stmt.close();	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}		
	}

	@Override
	public void Delete(String productId) throws Exception {
		String sql="delete Products where productId=?";
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();			
			stmt = conn.prepareStatement(sql);			
			stmt.setString(1, productId);			
			stmt.executeUpdate();  
			conn.close();
	    	stmt.close();	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}		
	}

	@Override
	public List<Products> GetProductsByCondition(ProductsSearch productSearch)  {
		List<Products> list=new ArrayList<Products>();
		List<Object> parameters=new ArrayList<Object>();
		IDB db=FactoryUitls.CreateDB();
		Connection conn;
		try {
			conn = db.GetConncetion();
			int paramIndex=1;
			String whereStr="";
			String sql="select * from products where 1=1 ";
			System.out.println(sql);
			PreparedStatement stmt=null;
			if(productSearch.getProductId() != null && !productSearch.getProductId().trim().equals("")){
				sql +=" and productId like ? ";
				System.out.println(sql);
				System.out.println("productId="+productSearch.getProductId()+", paramIndex="+paramIndex);
				parameters.add(productSearch.getProductId()+"%");
			}
			if(productSearch.getProductName() != null && !productSearch.getProductName().trim().equals("")){
				sql +=" and productName like ? ";
				parameters.add(productSearch.getProductName()+"%");
			}
			if(productSearch.getCategoryId() != null && !productSearch.getCategoryId().trim().equals("")){
				sql +=" and categoryId = ? ";
				parameters.add(productSearch.getCategoryId());
			}
			if(productSearch.getSupplierId() != null && !productSearch.getSupplierId().trim().equals("")){
				sql +=" and supplierId = ? ";
				parameters.add(productSearch.getSupplierId());
			}
			if(productSearch.getPriceMin() != null){
				sql +=" and price >= ? ";
				parameters.add(productSearch.getPriceMin());
			}
			if(productSearch.getPriceMax() != null){
				sql +=" and price <= ? ";
				parameters.add(productSearch.getPriceMax());
			}
			if(productSearch.getOnlineDateStart() != null ){
				sql +=" and onlineDate >= ? ";
				parameters.add(new java.sql.Date(productSearch.getOnlineDateStart().getTime()));
			}
			if(productSearch.getOnlineDateEnd() != null ){
				sql +=" and onlineDate <= ? ";
				parameters.add(new java.sql.Date(productSearch.getOnlineDateEnd().getTime()));
			}
			System.out.println(sql);
			stmt=conn.prepareStatement(sql);
			for(Object param:parameters){
				stmt.setObject(paramIndex ++, param);
			}
			ResultSet result = stmt.executeQuery();     	
	    	int colCount=result.getMetaData().getColumnCount();    	
			list=WebUtils.ResultSetToBeanLsit(result, Products.class);
			conn.close();
	    	stmt.close();
	    	result.close();		
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;

	}
	
	@Override
	public List<Categories> GetAllCategories() throws Exception{
		List<Categories> list=new ArrayList<Categories>();
		FunctionInfo funInfo;
		IDB db=FactoryUitls.CreateDB();
		Connection conn=db.GetConncetion();;		
		Statement stmt = conn.createStatement(); 
		String sql="select * from Categories order by categoryId";
    	ResultSet result = stmt.executeQuery(sql);     	
    	int colCount=result.getMetaData().getColumnCount();
    	list=WebUtils.ResultSetToBeanLsit(result, Categories.class);
    	conn.close();
    	stmt.close();
    	result.close();
		return list;		
	}

	@Override
	public List<Suppliers> GetAllSuppliers() throws Exception {
		List<Suppliers> list=new ArrayList<Suppliers>();		
		IDB db=FactoryUitls.CreateDB();
		Connection conn=db.GetConncetion();;		
		Statement stmt = conn.createStatement(); 
		String sql="select * from Suppliers order by supplierId";
    	ResultSet result = stmt.executeQuery(sql);     	
    	int colCount=result.getMetaData().getColumnCount();
    	list=WebUtils.ResultSetToBeanLsit(result, Suppliers.class);
    	conn.close();
    	stmt.close();
    	result.close();
		return list;	
	}
}
