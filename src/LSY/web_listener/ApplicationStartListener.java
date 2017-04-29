package LSY.web_listener;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import LSY.dao_interface.IFunctionInfoDao;
import LSY.domain.Categories;
import LSY.domain.FunctionInfo;
import LSY.domain.LoginInfo;
import LSY.domain.LoginKey;
import LSY.domain.Products;
import LSY.domain.UserAuthentication;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;
import LSY.web_controller.AutoLogin;
import LSY.web_controller.TimerRunner;

@WebListener
public class ApplicationStartListener implements ServletContextListener {

    public ApplicationStartListener() {        
    }

    public void contextInitialized(ServletContextEvent eventArgs)  {    	
    	CommUtils.setContext(eventArgs.getServletContext());
    	Integer passwordErrorTimes=Integer.parseInt(eventArgs.getServletContext().getInitParameter("passwordErrorTimes"));
    	CommUtils.setPasswordErrorTime(passwordErrorTimes);
    	Integer passwordExpired=Integer.parseInt(eventArgs.getServletContext().getInitParameter("passwordExpired"));
    	CommUtils.setPasswordExpired(passwordExpired);
    	CommUtils.setConfigDataPath(eventArgs.getServletContext().getInitParameter("configDataPath"));
    	CommUtils.setDbType(eventArgs.getServletContext().getInitParameter("DBType"));
    	List<FunctionInfo> functions;
    	List<Class> allServiceClass;		
		List<Class> allDaoClass;
		try {
			functions = GetAllFunctions();
			//取得LSY.service及LSY.dao兩個包的所有class後設定給全域commUtil變數以便使用
			allServiceClass=GetClassesByPackage("LSY.service");	
			allDaoClass=GetClassesByPackage("LSY.dao");
			CommUtils.setServiceClasses(allServiceClass);
			CommUtils.setDaoClasses(allDaoClass);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
    	CommUtils.setFunctions(functions);
    	CommUtils.getContext().setAttribute(NameUtils.CatalogAndFunctionDataExisted, true);
    	Map<String,LoginInfo> loginMap=new HashMap<String,LoginInfo>();
    	ServletContext application=eventArgs.getServletContext();
    	CreateProductsMap(application);
    	CreateAutnenticationMap();
    	application.setAttribute(NameUtils.LoginMap, loginMap);
    	Map<String,LoginInfo> resultMap=(Map<String,LoginInfo>)application.getAttribute(NameUtils.LoginMap);  
    	
    	System.out.println("*************************************************************");
    	System.out.println("LoginMap has been Initialized count="+resultMap.size());
    	System.out.println("*************************************************************");
    	StartAutoLoginTimer(200,application);
    	ApplicationContext springContext=new ClassPathXmlApplicationContext("springmvc.xml");
    	ApplicationContext ac1= WebApplicationContextUtils.getWebApplicationContext(eventArgs.getServletContext()); 
    	DataSource commDataSource=(DataSource)springContext.getBean("oracleDataSource1");
    	JdbcTemplate commJdbc=(JdbcTemplate)ac1.getBean("oracleJdbcTemplate1");
    	NamedParameterJdbcTemplate commNamedJdbc=(NamedParameterJdbcTemplate)ac1.getBean("oracleNamedParameterJdbcTemplate1");
    	String categoryId="C5";
    	String sql="select * from Categories where categoryId = ?";		
		Categories categories=commJdbc.queryForObject(sql,new Object []{categoryId},new BeanPropertyRowMapper(Categories.class));
		System.out.println("categories name="+categories.getCategoryName());
		CommUtils.setJdbc(commJdbc);
		CommUtils.setDataSource(commDataSource);
		CommUtils.setNamedJdbc(commNamedJdbc);
//    	System.out.println("commDataSource ok,"+commDataSource);	
//    	System.out.println("commJdbc ok,"+commJdbc+","+commNamedJdbc);
    }
    
    public void contextDestroyed(ServletContextEvent arg0)  { 
    	System.out.println("#####  contextDestroyed");
    	
    }  
    private void StartAutoLoginTimer(int sec,ServletContext application){
    	Timer timer=new Timer();    	
    	timer.schedule(new TimerRunner(),2000,sec); 
    	application.setAttribute(NameUtils.AutoLoginTimer, timer);    	
    	application.setAttribute(NameUtils.AutoLoginMaxTimes, 10);    
    	application.setAttribute(NameUtils.AutoLoginTimesCounter, 0);    
    }
    private List<FunctionInfo> GetAllFunctions() throws Exception{
    	IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();
		List<FunctionInfo> list;
		try {
			list=dao.GetAll();
			return list;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
    }
    private void CreateProductsMap(ServletContext application){
    	Map<String, Products> map=new HashMap<String, Products>();
    	List<Products> list=new ArrayList<Products>();
    	Products product=new Products();
    	product.setProductId("p01");
    	product.setProductName("小米4手機");
    	product.setProductDesc("小米新一代高階手機");
    	product.setPrice(4510.50);
    	product.setCategoryId("1");
    	map.put("p01", product);    	
    	product=new Products();
    	product.setProductId("p02");
    	product.setProductName("Spring Mvc入門");
    	product.setProductDesc("詳盡介紹Spring Mvc框架的書籍");
    	product.setPrice(85.45);
    	product.setCategoryId("2");
    	map.put("p02", product);
    	product=new Products();
    	product.setProductId("p03");
    	product.setProductName("Spring Mvc入門");
    	product.setProductDesc("詳盡介紹Spring Mvc框架的書籍");
    	product.setPrice(85.45);
    	product.setCategoryId("2");
    	map.put("p03", product);
    	//application.setAttribute(NameUtils.ProductsMap, map);
    	CommUtils.setProductsMap(map);    	
    }
    private void CreateAutnenticationMap(){
    	Map<String,Map<String,UserAuthentication>> authenticationMap=new HashMap<String,Map<String,UserAuthentication>>();
    	Map<String,UserAuthentication> userAuth1=new HashMap<String,UserAuthentication>();
    	UserAuthentication fun;
    	fun=new UserAuthentication();
    	fun.setFunctionId("F1001");
    	fun.setIsAuth(true);
    	userAuth1.put("F1001", fun);
    	fun=new UserAuthentication();
    	fun.setFunctionId("F1002");
    	fun.setIsAuth(true);
    	userAuth1.put("F1002", fun);
    	authenticationMap.put("Admin", userAuth1);
    	CommUtils.setAuthenticationMap(authenticationMap);
    	System.out.println("AuthenticationMap size="+CommUtils.getAuthenticationMap().size());
    }
    //給struts2的@S2AutowiredInterceptor自動裝配注入sercice及daoService之實現類時，需取得兩個包內的所有class，以便比對之用 
    private static List<Class> GetClassesByPackage(String packageName) throws IOException, ClassNotFoundException{		
		String path=packageName.replace(".", "/");
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		Enumeration<URL> resources = classLoader.getResources(path);
	    List<File> dirs = new ArrayList<File>();
	    while (resources.hasMoreElements()) {
	        URL resource = resources.nextElement();
	        dirs.add(new File(resource.getFile()));
	    }
	    List<Class> classes = new ArrayList<Class>();
	    for (File directory : dirs) {
	        classes.addAll(FindClasses(directory, packageName));
	    }		
		return classes;
	}
	private static List<Class> FindClasses(File directory, String packageName) throws ClassNotFoundException {
	    List<Class> classes = new ArrayList<Class>();
	    if (!directory.exists()) {
	        return classes;
	    }
	    File[] files = directory.listFiles();
	    for (File file : files) {
	        if (file.isDirectory()) {
	            assert !file.getName().contains(".");
	            classes.addAll(FindClasses(file, packageName + "." + file.getName()));
	        } else if (file.getName().endsWith(".class")) {
	            classes.add(Class.forName(packageName + '.' + file.getName().substring(0, file.getName().length() - 6)));
	        }
	    }
	    return classes;
	}
}
