package LSY.utils;

import java.lang.reflect.Field;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;

public class CommRowMapper<T> implements RowMapper {
	private Class<T> cls;
	public CommRowMapper(Class<T> cls){
		this.cls=cls;
	}
	@Override
	//此自訂RowMapper有幾筆就進來執行幾次
	public T mapRow(ResultSet resultSet, int arg1) throws SQLException {
		T rec;
		try{
			rec=cls.newInstance();
			Field [] fields=rec.getClass().getDeclaredFields();
			for(Field field : fields){
				String fieldName=field.getName();    			
				String fieldType=field.getType().getSimpleName();
				field.setAccessible(true);			
				switch(fieldType){
					case "String":
						String ss=resultSet.getString(fieldName);
						if(ss != null){
							field.set(rec, ss);													   
						} 	    					
						break;
					case "int":
						int ii=resultSet.getInt(fieldName);    					
						field.set(rec, ii);
						break;
					case "Integer":
						Integer integer=resultSet.getInt(fieldName);  					
						field.set(rec, integer);
						break;
					case "Double":
						Double double1=resultSet.getDouble(fieldName);  					
						field.set(rec, double1);
						break;
					case "double":
						double double2=resultSet.getDouble(fieldName);  					
						field.set(rec, double2);
						break;
					case "Date":
						Date dd=resultSet.getDate(fieldName);
						if(dd != null){
							field.set(rec, dd);
						}
						break;    					
				}
			}
			}catch(Exception e){    				
				throw new RuntimeException(e);
			}   				
				
		return rec;
	}

}
