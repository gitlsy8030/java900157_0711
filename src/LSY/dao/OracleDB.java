package LSY.dao;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

import LSY.dao_interface.IDB;
import LSY.utils.CommUtils;

public class OracleDB implements IDB {
	private static String filePath;
	private Connection CreateConnection(String driver,String url,String userName,String password) throws Exception{		
		Class.forName(driver);
		Connection conn=DriverManager.getConnection(url,userName,password);	
		return conn;
	}
	@Override
	public Connection GetConncetion() throws Exception  {		
		filePath = CommUtils.getConfigDataPath();															
		InputStream in=new FileInputStream(filePath+"ConfigData.properties");		
		Properties properties=new Properties();	
		properties.load(in);
		String oracleDriver=properties.getProperty("oracleDriverName");
		String oracleUrl=properties.getProperty("oracleUrl_localhost");
		String oracleUserName=properties.getProperty("oracleUserName_localhost");
		String oraclePassword=properties.getProperty("oraclePassword_localhost");  		    
		return CreateConnection(oracleDriver,oracleUrl,oracleUserName,oraclePassword);			
	}
}
