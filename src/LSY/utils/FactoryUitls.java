package LSY.utils;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import LSY.dao.FunctionInfoDao_Oracle;
import LSY.dao.OracleDB;
import LSY.dao.SimpleGridDao_Oracle;
import LSY.dao.UserInfo_XmlDao;
import LSY.dao_interface.IDB;
import LSY.dao_interface.IFunctionInfoDao;
import LSY.dao_interface.ISimpleGridDao;
import LSY.dao_interface.IUserInfoDao;
import LSY.service.FunctionInfoService;
import LSY.service.LoginInfoService;
import LSY.service.SimpleGridService;
import LSY.service.UserInfoService;
import LSY.service_interface.IFunctionInfoService;
import LSY.service_interface.ILoginInfoService;
import LSY.service_interface.ISimpleGridService;
import LSY.service_interface.IUserInfoService;

public class FactoryUitls {
	public static IUserInfoDao CreateRegisterDao() {
		try{
			Context env= (Context)new InitialContext().lookup("java:comp/env");	
			String dataSourceName=env.lookup("registerDataSourceType").toString();
			//String dataSourceName="LSY.resource/UserInfo.xml";
			if(dataSourceName.equals("xml")){
				return new UserInfo_XmlDao();
			}
			else if(dataSourceName.equals("oracle")){
				return new UserInfo_XmlDao();
			}
			else{
				return null;
			}		
		}		
		catch(Exception e){
			throw new RuntimeException();
		}		
	}
	public static IUserInfoService CreateUserInfoService(){		
		return new UserInfoService();
	}
	public static ILoginInfoService CreateLoginInfoService(){		
		return new LoginInfoService();
	}
	
	
	public static ISimpleGridService CreateSimpleGridService(){		
		return new SimpleGridService();
	}
	
	public static IDB CreateDB(){	
		String type=CommUtils.getDbType();
		if(type == "Oracle"){
			return new OracleDB();
		}
		else{
			return new OracleDB();
		}		
	}
	public static IFunctionInfoDao CreateFunctionInfoDao() throws Exception{	
		String type=CommUtils.getDbType();
		if(type == "Oracle"){
			return new FunctionInfoDao_Oracle();
		}
		else{
			return new FunctionInfoDao_Oracle();
		}		
	}
	public static <T> ISimpleGridDao<T> CreateSimpleGridDao(){
		String type=CommUtils.getDbType();
		if(type == "Oracle"){
			return new SimpleGridDao_Oracle<T>();
		}
		else{
			return new SimpleGridDao_Oracle<T>();
		}		
	}
	
	public static IFunctionInfoService CreateFunctionInfoService() throws Exception{
		String type=CommUtils.getDbType();
		if(type == "Oracle"){
			return new FunctionInfoService();
		}
		else{
			return new FunctionInfoService();
		}	
	}
}
