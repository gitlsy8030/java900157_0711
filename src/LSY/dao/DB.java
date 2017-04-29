package LSY.dao;
import java.io.InputStream;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;
import javax.naming.Context;
import javax.naming.InitialContext;

import LSY.utils.CommUtils;

import java.sql.*;
public class DB  {
	private static String filePath;
	public static Connection  GetConnection_Properties() throws Exception{	
		ClassLoader classLoader =DB.class.getClassLoader();
		filePath = CommUtils.getConfigDataPath();
		InputStream in=classLoader.getResourceAsStream(filePath+"ConfigData.properties");			
		Properties properties=new Properties();	
		properties.load(in);
		String oracleDriver=properties.getProperty("oracleDriverName");
		String oracleUrl=properties.getProperty("oracleUrl_localhost");
		String oracleUserName=properties.getProperty("oracleUserName_localhost");
		String oraclePassword=properties.getProperty("oraclePassword_localhost");  		    
		return CreateConnection(oracleDriver,oracleUrl,oracleUserName,oraclePassword);			
		//String rootPath=classLoader.getResource("/").getPath();
		//InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("Resource/JdbcConnection.properties");		
	}
	public static Connection  GetConnection_EnvEntry() throws Exception{
		Context env= (Context)new InitialContext().lookup("java:comp/env");			
		String oracleDriver=env.lookup("oracleDriver1").toString();
		String oracleUrl=env.lookup("oracleUrl1").toString();
		String oracleUserName=env.lookup("oracleUserName1").toString();
		String oraclePassword=env.lookup("oraclePassword1").toString();	
		return CreateConnection(oracleDriver,oracleUrl,oracleUserName,oraclePassword);	
	}	
	private static Connection CreateConnection(String driver,String url,String userName,String password) throws Exception{		
		Class.forName(driver);
		Connection conn=DriverManager.getConnection(url,userName,password);	
		return conn;
	}
}
