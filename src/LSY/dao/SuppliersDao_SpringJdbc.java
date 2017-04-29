package LSY.dao;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSourceUtils;
import org.springframework.stereotype.Service;

import LSY.dao_interface.ISuppliersDao;
import LSY.domain.Customers;
import LSY.domain.Suppliers;
import LSY.utils.CommRowMapper;
@Service
public class SuppliersDao_SpringJdbc implements ISuppliersDao {

	@Autowired
	private NamedParameterJdbcTemplate namedJdbc;
	@Autowired
	private JdbcTemplate jdbc;
	
	@Override
	public void Add(Suppliers suppliers) throws Exception {
		String colStr="";
		String valueStr="";		
		Map<String ,Object> params=new HashMap<String,Object>();
		Field [] fields=suppliers.getClass().getDeclaredFields();
		for(Field field:fields){
			field.setAccessible(true);
			String fieldName=field.getName();
			Object fieldValue=field.get(suppliers);
			if(fieldValue != null){
				params.put(fieldName, fieldValue);
				colStr +=(colStr.equals(""))? fieldName:","+fieldName;
				valueStr +=(valueStr.equals(""))? ":"+fieldName:",:"+fieldName;				
			}
		}
		String sql=String.format("insert into Suppliers(%s) values(%s)", colStr,valueStr);
		namedJdbc.update(sql, params);	

	}

	@Override
	public List<Suppliers> GetAll() throws Exception {
		String sql="select * from Suppliers";		
		//(方法1)此方式也可，但sql後不可直接給Customers.class，否則報錯
		List<Suppliers> result1=(List<Suppliers>)jdbc.query(sql, BeanPropertyRowMapper.newInstance(Suppliers.class));		
		//(方法2)jdbc.queryForObject使用CommRowMapper會報錯，大意為expect 1筆，卻得到多筆
		//在rowmapper內若直接拿resultSet作多筆轉換成List會少掉第一筆(因spring 係 resultSet.next()後再call我們自定義的romapper，pointer已下移)， 
		List<Suppliers> result=(List<Suppliers>)jdbc.query(sql, new CommRowMapper(Suppliers.class));
		return result;		
		//這是錯誤做法
		//List<Customers> result=jdbc.queryForList(sql,Customers.class);
		
	}

	@Override
	public int [] BatchUpdate(List<Suppliers> suppliersList) throws Exception {
		String sqlCols="";
		Field [] fields=Suppliers.class.getDeclaredFields();
		Boolean firstCol=true;
		for(Field field:fields){
			String fieldName=field.getName();
			if(fieldName.equals("supplierId")){
				continue;
			}
			if(firstCol){
				firstCol=false;
				sqlCols +=fieldName+"=:"+fieldName;
			}
			else{
				sqlCols +=","+fieldName+"=:"+fieldName;
			}			
		}
		String sql=String.format("update Suppliers set %s where supplierId=:supplierId",sqlCols);
		SqlParameterSource [] batchSouce=SqlParameterSourceUtils.createBatch(suppliersList.toArray());
		int [] updateCounts=namedJdbc.batchUpdate(sql, batchSouce);
		System.out.println(updateCounts);
		return updateCounts;		
	}

}
