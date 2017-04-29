package LSY.utils;
import org.apache.commons.beanutils.locale.converters.*;
import org.apache.commons.codec.binary.Base64;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import LSY.annotation.S2Service;
import LSY.domain.FunctionInfo;
import LSY.domain.Products;
import LSY.domain.UserAuthentication;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletContext;
import javax.sql.DataSource;;

public class CommUtils {
	private static ServletContext context;
	private static String configDataPath;
	private static Integer PasswordErrorTime;
	private static Integer PasswordExpired;	
	private static String dbType;
	private static List<FunctionInfo> functions;
	private static Map<String,Products> productsMap;
	private static Map<String,Map<String,UserAuthentication>> authenticationMap;
	private static List<Class> serviceClasses;
	private static List<Class> daoClasses;
	private static JdbcTemplate jdbc;
	private static NamedParameterJdbcTemplate namedJdbc;
	private static DataSource dataSource;
	
	
	public static JdbcTemplate getJdbc() {
		return jdbc;
	}
	public static void setJdbc(JdbcTemplate jdbc) {
		CommUtils.jdbc = jdbc;
	}
	public static NamedParameterJdbcTemplate getNamedJdbc() {
		return namedJdbc;
	}
	public static void setNamedJdbc(NamedParameterJdbcTemplate namedJdbc) {
		CommUtils.namedJdbc = namedJdbc;
	}
	public static DataSource getDataSource() {
		return dataSource;
	}
	public static void setDataSource(DataSource dataSource) {
		CommUtils.dataSource = dataSource;
	}
	public static List<Class> getServiceClasses() {
		return serviceClasses;
	}
	public static void setServiceClasses(List<Class> serviceClasses) {
		CommUtils.serviceClasses = serviceClasses;
	}
	public static List<Class> getDaoClasses() {
		return daoClasses;
	}
	public static void setDaoClasses(List<Class> daoClasses) {
		CommUtils.daoClasses = daoClasses;
	}
	public static Map<String, Map<String, UserAuthentication>> getAuthenticationMap() {
		return authenticationMap;
	}
	public static void setAuthenticationMap(Map<String, Map<String, UserAuthentication>> authenticationMap) {
		CommUtils.authenticationMap = authenticationMap;
	}
	public static Map<String, Products> getProductsMap() {
		return productsMap;
	}
	
	public static void setProductsMap(Map<String, Products> productsMap) {
		CommUtils.productsMap = productsMap;
	}
	public static List<FunctionInfo> getFunctions() {
		return functions;
	}
	public static void setFunctions(List<FunctionInfo> functions) {
		CommUtils.functions = functions;
	}
	public static ServletContext getContext() {
		return context;
	}
	public static void setContext(ServletContext context) {
		CommUtils.context = context;
	}
	public static String getDbType() {
		return dbType;
	}
	public static void setDbType(String dbType) {
		CommUtils.dbType = dbType;
	}
	public static String getConfigDataPath() {
		return configDataPath;
	}
	public static void setConfigDataPath(String configDataPath) {
		CommUtils.configDataPath = configDataPath;
	}
	public static Integer getPasswordErrorTime() {
		return PasswordErrorTime;
	}
	public static void setPasswordErrorTime(Integer passwordErrorTime) {
		PasswordErrorTime = passwordErrorTime;
	}
	public static Integer getPasswordExpired() {
		return PasswordExpired;
	}
	public static void setPasswordExpired(Integer passwordExpired) {
		PasswordExpired = passwordExpired;
	}
	public static String ToBase64(String originalStr){
		if(originalStr == null){
			return null;
		}
		Base64 base64Encoder=new Base64();
		byte [] text=originalStr.getBytes();
		String base64Str=base64Encoder.encodeToString(text);
		return base64Str;
	}
	public static String FromBase64(String base64Str){
		if(base64Str == null){
			return null;
		}
		Base64 base64Decoder=new Base64();
		byte[] decodedBytes = base64Decoder.decode(base64Str);		
		String originalStr=new String(decodedBytes);
		return originalStr;
	}
	public static boolean DateFormat(String dd){
		try{
			DateLocaleConverter dc=new DateLocaleConverter();
			System.out.print("new convertert");
			dc.convert(dd, "yyyy/MM/dd");
			return true;
		}
		catch(Exception e){
			return false;
		}
	}
	public static BufferedImage CreateAuthoringImage(int width,int height ,int fontSize ,String authoringNum){		
		int fontLength=authoringNum.length();
		int startX=(int)(width * 0.1);
		int startY=(int)((height - fontSize)/2);
		int fontWidth=(int)(width * 0.9 / fontLength);		
		BufferedImage image=new BufferedImage(width,height,BufferedImage.TYPE_INT_BGR);
		Graphics2D g=(Graphics2D)image.getGraphics();
		g.setColor(Color.WHITE);
		g.fillRect(0,0, width, height);		
		//畫干擾線
		g.setColor(Color.CYAN);
		for(int i=0;i<10;i++){
			int x1=new Random().nextInt(width-2)+2;
			int y1=new Random().nextInt(height)+2;
			int x2=new Random().nextInt(width-2);
			int y2=new Random().nextInt(height);			
			g.drawLine(x1,y1,x2,y2);
		}
		g.setColor(Color.YELLOW);
		for(int i=0;i<10;i++){
			int x1=new Random().nextInt(width-2)+2;
			int y1=new Random().nextInt(height)+2;
			int x2=new Random().nextInt(width-2);
			int y2=new Random().nextInt(height);
			g.drawLine(x1,y1,x2,y2);
		}
		g.setColor(Color.PINK);
		for(int i=0;i<10;i++){
			int x1=new Random().nextInt(width-2)+2;
			int y1=new Random().nextInt(height)+2;
			int x2=new Random().nextInt(width-2);
			int y2=new Random().nextInt(height);
			g.drawLine(x1,y1,x2,y2);
		}		
		//化外框
		g.setColor(Color.GRAY);
		g.drawRect(0, 0, width-1, height-1);
		//化驗證碼+旋轉
		g.setColor(Color.RED);		
		g.setFont(new Font(Font.SANS_SERIF,Font.BOLD,fontSize));
		int x=startX;
		String s="";
		for(int i=0;i< 4;i++){
			if(authoringNum != null && authoringNum.length() >= i+1){
				s =authoringNum.substring(i,i+1);				
			}
			else{
				s =Integer.toString(new Random().nextInt(10));
			}					
			int y=startY + (new Random().nextInt(5)+10); 		
			int degree=new Random().nextInt(45);
			g.rotate(degree*Math.PI/180,x,y);
			g.drawString(s,x, y); 
			g.rotate(-degree*Math.PI/180,x,y);
			x +=fontWidth;
		}
		return image;		
	}
	public static List<Class> GetImplment_S2Sercice_ByPackage(String packageName,Class interfaceClass){
		List<Class> allClass=null;
		if(packageName.equals("LSY.service")){
			allClass=CommUtils.serviceClasses;
		}
		else if(packageName.equals("LSY.dao")){
			allClass=CommUtils.daoClasses;
		}
		List<Class> implList=new ArrayList<Class>();
		for(Class cls:allClass){
			Annotation anno=cls.getAnnotation(S2Service.class);			
			if(anno != null){
				Class [] allInterface=cls.getInterfaces();
				if(allInterface == null){
					continue;
				}
				for(Class inter:allInterface){
					if(inter.getSimpleName().equals(interfaceClass.getSimpleName())){
						implList.add(cls);
					}
				}				
			}
		}
		return implList;
	}
}
