package LSY.dao;

import java.io.IOException;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import LSY.annotation.NamingAnnotation;
import LSY.dao_interface.IDB;
import LSY.dao_interface.IFunctionInfoDao;
import LSY.domain.FunctionInfo;
import LSY.utils.FactoryUitls;
import LSY.utils.WebUtils;

public class FunctionInfoDao_Oracle implements IFunctionInfoDao {
	private Connection _conn;
	private NamedParameterJdbcTemplate template;
	public FunctionInfoDao_Oracle() throws  Exception{
		IDB db=FactoryUitls.CreateDB();
		_conn=db.GetConncetion();		
	}
	@Override
	public List<FunctionInfo> GetAll() throws Exception {
		List<FunctionInfo> list=new ArrayList<FunctionInfo>();
		FunctionInfo funInfo;
		IDB db=FactoryUitls.CreateDB();
		Connection conn=db.GetConncetion();
		Statement stmt = conn.createStatement(); 
		//String sql="select * from Functions order by catalogId,functionId";
		String sql="select f.* from functions f join functions c on f.catalogId = c.functionId  order by to_char(c.seq)  || f.type || to_char(f.seq)";
    	ResultSet result = stmt.executeQuery(sql);     	
    	int colCount=result.getMetaData().getColumnCount();
    	list=WebUtils.ResultSetToBeanLsit(result, FunctionInfo.class);
    	conn.close();
    	stmt.close();
    	result.close();
		return list;
	}	
		
	@Override
	public List<FunctionInfo> GetAllFunctons(int startRow,int endRow) throws Exception {		
		return GetAllByType("1",startRow+1,endRow+1,null);
	}
	@Override
	public List<FunctionInfo> GetAllFunctonsByCatalog(int startRow,int endRow,String catalogId) throws Exception {
		return GetAllByType("1",startRow+1,endRow+1,catalogId);
	}
	@Override
	public List<FunctionInfo> GetAllCatalogs(int startRow,int endRow) throws Exception {
		return GetAllByType("0",startRow+1,endRow+1,null);
	}
	
	@Override
	public int GetAllFunctionCount(String catalogId) throws Exception {		
		return GetAllByTypeCount("1",null);
	}
	@Override
	public int GetAllFunctonsByCatalogCount(String catalogId) throws Exception {
		return GetAllByTypeCount("1",catalogId);
	}

	@Override
	public int GetAllCatalogCount() throws Exception {
		return GetAllByTypeCount("0",null);
	}
	
	@Override
	public FunctionInfo GetCatalogById(String catalogId) throws Exception {		
		return GetOneById("0",catalogId);
	}

	@Override
	public FunctionInfo GetFunctionById(String functionId) throws Exception {
		return GetOneById("1",functionId);
	}
	@Override
	public void Update(FunctionInfo functionInfo) throws Exception {
		String sql="update Functions set functionName=?,catalogId=?,url=?,type=?,seq=?,startDate=? where functionId=?";
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();			
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, functionInfo.getFunctionName());
			stmt.setString(2, functionInfo.getCatalogId());
			stmt.setString(3, functionInfo.getUrl());
			stmt.setString(4, functionInfo.getType());
			stmt.setInt(5, functionInfo.getSeq());
			stmt.setDate(6, new java.sql.Date(functionInfo.getStartDate().getTime()));
			stmt.setString(7, functionInfo.getFunctionId());
			stmt.executeUpdate();  
			conn.close();
	    	stmt.close();	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}		
	}
	
	@Override
	public void Add(FunctionInfo functionInfo) throws Exception {
		String sql="insert into Functions(functionId,functionName,catalogId,url,type,seq,startDate) values(?,?,?,?,?,?,?)";
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, functionInfo.getFunctionId());
			stmt.setString(2, functionInfo.getFunctionName());
			stmt.setString(3, functionInfo.getCatalogId());
			stmt.setString(4, functionInfo.getUrl());
			stmt.setString(5, functionInfo.getType());
			stmt.setInt(6, functionInfo.getSeq());
			stmt.setDate(7, new java.sql.Date(functionInfo.getStartDate().getTime()));			
			stmt.executeUpdate();  
			conn.close();
	    	stmt.close();	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}
	}
	@Override
	public void Remove(String functionId) throws Exception {
		String sql="delete Functions where functionId=?";
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, functionId);				
			stmt.executeUpdate();  
			conn.close();
	    	stmt.close();	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}		
	}
	private FunctionInfo GetOneById(String type,String id){
		String sql="select * from Functions where type = ? and functionId = ? ";
		FunctionInfo fun=new FunctionInfo();
		PreparedStatement stmt;
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn= db.GetConncetion();			
			stmt = _conn.prepareStatement(sql);
			stmt.setString(1, type);
			stmt.setString(2, id);
			ResultSet result = stmt.executeQuery();   
			List<FunctionInfo> list=WebUtils.ResultSetToBeanLsit(result, FunctionInfo.class);
			if(list.size() == 0 || list == null){				
			}
			else{
				fun=list.get(0);
			}
	    	//fun=(list == null || list.size() == 0)? null:list.get(0);
			conn.close();
	    	stmt.close();
	    	result.close();
	    	
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}		
		return fun;
	}
	private List<FunctionInfo> GetAllByType(String type,int startRow,int endRow,String catalogId){
		List<FunctionInfo> list=new ArrayList<FunctionInfo>();
		String sqlReal;
		String sql;
		String sqlPager="with temp1 as (%s), "+
			    "temp2 as (select temp1.*,rownum as num from temp1) "+
			    "select * from temp2 where num >= %d and num <= %d ";	
		PreparedStatement stmt;				
		try {
			IDB db=FactoryUitls.CreateDB();
			Connection conn=db.GetConncetion();
			if(catalogId == null){
				sqlReal="select * from Functions where type = ? order by catalogid,functionid";
				sql=String.format(sqlPager, sqlReal,startRow,endRow);		
				stmt=conn.prepareStatement(sql);
				stmt.setString(1, type);
			}
			else{
				sqlReal="select * from Functions where type = ? and catalogId = ? order by catalogId,functionId";				
				sql=String.format(sqlPager, sqlReal,startRow,endRow);
				
				stmt=conn.prepareStatement(sql);
				stmt.setString(1, type);
				stmt.setString(2, catalogId);
			}
	    	ResultSet result = stmt.executeQuery();     	
	    	int colCount=result.getMetaData().getColumnCount();    	
			list=WebUtils.ResultSetToBeanLsit(result, FunctionInfo.class);
			conn.close();
	    	stmt.close();
	    	result.close();
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}    	
		return list;		
	}
	private int GetAllByTypeCount(String type,String catalogId){
		List<FunctionInfo> list=new ArrayList<FunctionInfo>();
		String sql;	
		PreparedStatement stmt;	
		int count;
		try {
			if(catalogId == null){
				sql="select count(*) from Functions where type = ?";
				stmt=_conn.prepareStatement(sql);
				stmt.setString(1, type);
			}
			else{
				sql="select count(*) from Functions where type = ? and catalogId = ? ";
				stmt=_conn.prepareStatement(sql);
				stmt.setString(1, type);
				stmt.setString(2, catalogId);
			}			
	    	ResultSet result = stmt.executeQuery();  
	    	result.next();
	    	count=result.getInt(1);  
			_conn.close();
	    	stmt.close();
	    	result.close();
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}    	
		return count;		
	}
	}
