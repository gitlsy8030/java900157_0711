package LSY.utils;
import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.HttpCookie;
import java.net.URL;
import java.net.URLConnection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletContext;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.beanutils.Converter;

import com.solidfire.gson.Gson;
import com.solidfire.gson.JsonObject;

import LSY.domain.FunctionInfo;
import LSY.domain.LoginInfo;
import LSY.domain.TreeMenuNode;
import LSY.domain.UserInfo;
import LSY.web_formbean.LoginForm;
import LSY.web_formbean.SimpleGrid;
public class WebUtils {
	private static ThreadLocal<ServletContext> _currentContext=new ThreadLocal<ServletContext>();
	private static ThreadLocal<HttpServletRequest> _currentRequest=new ThreadLocal<HttpServletRequest>();
	private static ThreadLocal<HttpServletResponse> _currentResponse=new ThreadLocal<HttpServletResponse>();
	private static ThreadLocal<HttpSession> _currentSession=new ThreadLocal<HttpSession>();	
	//Method of CurrentContext
	public static ServletContext GetCurrentContext(){
		return _currentContext.get(); 
	}
	public static void SetCurrentContext(ServletContext _context){
		_currentContext.set(_context);
	}
	//Method of CurrentRequest
	public static HttpServletRequest GetCurrentRequest(){
		return _currentRequest.get();
	}	
	public static void SetCurrentRequest(HttpServletRequest _request){
		_currentRequest.set(_request);
	}
	public static void RemoveCurrentRequest(){
		_currentRequest.remove();
	}
	
	//Method of CurrentResponse
	public static HttpServletResponse GetCurrentResponse(){
		return _currentResponse.get();
	}	
	public static void SetCurrentResponse(HttpServletResponse _response){
		_currentResponse.set(_response);
	}
	public static void RemoveCurrentResponse(){
		_currentResponse.remove();
	}
	
	//Method of CurrentSession
	public static HttpSession GetCurrentSession(){
		return _currentSession.get();
	}	
	public static void SetCurrentSession(HttpSession _session){
		_currentSession.set(_session);
	}
	public static void RemoveCurrentSession(){
		_currentSession.remove();
	}
	
	//copy request to GridBean物件
	public static <T> SimpleGrid<T> RequestToGridBean(HttpServletRequest request,Class<T> listBean){		
		try {			
			List<T> pageList=new ArrayList<T>();
			SimpleGrid<T> grid=new SimpleGrid<T>();
			grid.setPageList(pageList);
			Field [] fields=grid.getClass().getDeclaredFields();
			for(Field field:fields){
				String propertyName=field.getName();
				String typeName=field.getType().getSimpleName();
				Object propertyValue=request.getParameter(propertyName);
				field.setAccessible(true);
				if(propertyValue !=null && !propertyValue.equals("")){
					if(typeName.equals("int")){
						field.set(grid, Integer.parseInt(propertyValue.toString()));
					}					
					else{
						field.set(grid, (String)propertyValue);
					}					
				}				
			}
			return grid;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
	}
	
	//copy request to formBean物件
	public static <T> T RequestToFormBean(HttpServletRequest request,Class<T> beanClass){		
		try {			
			T formBean=beanClass.newInstance();
			BeanInfo infos = Introspector.getBeanInfo(beanClass,Object.class);
			PropertyDescriptor [] pds=infos.getPropertyDescriptors();
			for(PropertyDescriptor pd:pds){
				String propertyName=pd.getName();				
				String paramValue=request.getParameter(propertyName);				
				if(paramValue != null && !paramValue.equals("")){
					Method m=pd.getWriteMethod();
					m.invoke(formBean,paramValue);
				}
			}
			return formBean;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
	}
	//不自訂，使用apach的beanUtils來做轉換(copy formBean to bean)
	public static void CopyBean(Object source,Object target) {
		//BeanUtils只能轉換基本型別，此處有string轉=>date需要，故必須為ConvertUtils註冊一個自定的轉換器
		ConvertUtils.register(new Converter(){
			@SuppressWarnings("unchecked")
			@Override
			public <T> T convert(Class<T> type, Object value) {
				if(value == null ){
					return null;
				}
				String str= (String)value;
				if(str.trim().equals("")){
					return null;
				}
				SimpleDateFormat df=new SimpleDateFormat("yyyy/MM/dd");				
				try {					
					T result=(T)df.parse(str);
					return result;
				} catch (ParseException e) {					
					throw new RuntimeException();
				}
			}}, Date.class);
		try{
			BeanUtils.copyProperties(target, source);	
			//System.out.println("BeanUtils copuProperties ok=>"+((UserInfo)target).getMail());
		}
		catch(Exception e){
			throw new RuntimeException();
			
		}
	}
	public static <S,T> void CopyBeanToBean(S source,T target){
		SimpleDateFormat df=new SimpleDateFormat("yyyy/MM/dd");	
		Field [] fields=source.getClass().getDeclaredFields();		
		for(Field field:fields){
			try{
				field.setAccessible(true);	
				String fieldName=field.getName();
				String fieldType=field.getType().getSimpleName();
				Object fieldValue=field.get(source);
				if(fieldValue == null){
					continue;
				}				
				Field targetField=target.getClass().getDeclaredField(fieldName);				
				if(targetField == null){
					continue;
				}
				String targetFieldType=targetField.getType().getSimpleName();
				targetField.setAccessible(true);
				switch(fieldType){
    				case "String":
    					String ss=(String)field.get(source); 
    					if(targetFieldType.equals("Date")){
    						targetField.set(target, df.parse(ss));
    					}
    					else if(targetFieldType.equals("int")){
    						targetField.set(target, Integer.parseInt(ss));
    					} 
    					else if(targetFieldType.equals("double")){
    						targetField.set(target, Double.parseDouble(ss));
    					}
    					else{
    						targetField.set(target, ss);  
    					}    					  					   					
    					break;
    				case "int":
    					int ii=field.getInt(source);    					
    					if(targetFieldType.equals("String")){
    						targetField.set(target, Integer.toString(ii));
    					}
    					else{
    						targetField.set(target, ii); 
    					}    					
    					break;
    				case "double":
    					Double dbl=field.getDouble(source);    					
    					if(targetFieldType.equals("String")){
    						targetField.set(target, Double.toString(dbl));
    					}
    					else{
    						targetField.set(target, dbl); 
    					}    					
    					break;
    				case "Date":
    					Date dd=(Date)field.get(source);    					
    					if(targetFieldType.equals("String")){
    						targetField.set(target, df.format(dd));
    					}
    					else{
    						targetField.set(target, dd); 
    					}    					
    					break;					
    			}
			}catch(Exception e){    				
				throw new RuntimeException();
			} 
		}			
	}
	//從DB的ResultSet copy to JavaBean
	public static <T> List<T> ResultSetToBeanLsit(ResultSet resultSet,Class<T> targetBean) throws InstantiationException, IllegalAccessException, SecurityException, IllegalArgumentException, SQLException {				
		List<T> targetList=new ArrayList<T>();		
    	while(resultSet.next()){    		
    		T rec=targetBean.newInstance();
    		Field [] fields=rec.getClass().getDeclaredFields();
    		for(Field field : fields){
    			String fieldName=field.getName();    			
    			String fieldType=field.getType().getSimpleName();
    			field.setAccessible(true);
    			try{
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
    			}catch(SQLException e){    				
    				continue;
    			}    					
    		}    		
			targetList.add(rec);    		
		} 
    	return targetList;
	}
	
	public static void SetRememberLoginInfo(LoginForm loginForm){
		loginForm.setIsRememberPassword("0");		
		Cookie [] cookies=WebUtils.GetCurrentRequest().getCookies();
		String cookieUserId=null;
		String cookiePassword=null;
		if(cookies != null){
			for(Cookie c : cookies){				
				if(c.getName().equals(NameUtils.CookieUserId)){
					cookieUserId=c.getValue();
				}
				if(c.getName().equals(NameUtils.CookiePassword)){
					cookiePassword=c.getValue();
				}
			}			
		}
		if(cookieUserId !=null && cookiePassword != null){
			loginForm.setIsRememberPassword("1");
			loginForm.setUserId(cookieUserId);
			loginForm.setPassword(cookiePassword);
		}		
	}
	
	public static void SetLoginCookie(String userId,String password,int sec){
		Cookie userIdCookie=new Cookie(NameUtils.CookieUserId,userId);
		userIdCookie.setMaxAge(sec);
		Cookie passwordCookie=new Cookie(NameUtils.CookiePassword,password);
		passwordCookie.setMaxAge(sec);
		WebUtils.GetCurrentResponse().addCookie(userIdCookie);
		WebUtils.GetCurrentResponse().addCookie(passwordCookie);
	}
	public static  String LoginRequest(){
		String url="http://localhost:8083/LSYMain/LoginServlet";
		Random r=new Random();
		int ser=r.nextInt(199)+1;
		String val=String.format("b5"+String.format("%3s", Integer.toString(ser)).replace(' ', '0'));
		String param="userId="+val+"&password="+val+"&submitType=autoLogin";
		PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try {
            URL realUrl = new URL(url);            
            URLConnection conn = realUrl.openConnection();
            // set request header  useragent=>chrome
            conn.setRequestProperty("accept", "*/*");            
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent",  
                    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36");
            conn.setDoOutput(true);
            conn.setDoInput(true);
            out = new PrintWriter(conn.getOutputStream());            
            out.print(param);           
            out.flush();           
            in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
            String line; 
            //System.out.println("http post success！ url="+url+ "  param="+param);
            ServletContext application=CommUtils.getContext();        	
        	Map<String,LoginInfo> resultMap=(Map<String,LoginInfo>)application.getAttribute(NameUtils.LoginMap);
        	System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@loginMap size="+resultMap.size());
        	
        } catch (Exception e) {
            System.out.println("htp post request error！"+e);
            e.printStackTrace();
        }       
        finally{
            try{
                if(out!=null){
                    out.close();
                }
                if(in!=null){
                    in.close();
                }
            }
            catch(IOException ex){
                ex.printStackTrace();
            }
        }
        return result;		
	}
	public static String GetTreeMenu(){
		List<TreeMenuNode> tree=new ArrayList<TreeMenuNode>(); 
		TreeMenuNode node;
		List<FunctionInfo> allList=CommUtils.getFunctions();
		List<FunctionInfo> catList=new ArrayList<FunctionInfo>();
		List<FunctionInfo> funList=new ArrayList<FunctionInfo>();
		for(FunctionInfo fun:allList){
			if(fun.getType().equals("0")){
				catList.add(fun);
			}
			else{
				funList.add(fun);
			}
		}
		String catalogId="";
		Boolean firstCat=true;
		int idCount=1;
		for(FunctionInfo cat:catList){
			node=new TreeMenuNode();
			Map<String,Object> nodeAttributes=new HashMap<String,Object>();
			node.setIconCls("save");
			node.setId(idCount);			
			node.setText(cat.getFunctionName());
			nodeAttributes.put("url","#");
			nodeAttributes.put("type", "0");
			nodeAttributes.put("functionId", cat.getFunctionId());
			node.setAttributes(nodeAttributes);
			if(firstCat){
				firstCat=false;
				node.setState("open");
			}
			else{
				node.setState("close");
			}
			List<TreeMenuNode> childs=new ArrayList<TreeMenuNode>();
			TreeMenuNode childNode=null;
			for(FunctionInfo fun:funList){
				if(fun.getCatalogId().equals(cat.getFunctionId())){
					childNode=new TreeMenuNode();
					childNode.setIconCls("save");
					childNode.setText(fun.getFunctionName());
					Map<String,Object> childAttributes=new HashMap<String,Object>();
					String url=null;
					if(fun.getUrl() == null){
						url="#";
					}
					else if(fun.getUrl().contains("Servlet")){
						url="/LSYMain/"+fun.getUrl()+"?action=Index";						
					}
					else if(fun.getUrl().endsWith(".spring")){
						url="/LSYMain/"+fun.getUrl();	
					}
					else if(fun.getUrl().endsWith(".action")){
						url="/LSYMain/"+fun.getUrl();	
					}		
					childAttributes.put("url",url);
					childAttributes.put("type", fun.getType());
					childAttributes.put("functionId", fun.getFunctionId());
					childNode.setAttributes(childAttributes);
					childs.add(childNode);
				}
			}
			if(childs.size() > 0){
				node.setChildren(childs);
			}
			tree.add(node);
			idCount +=1;			
		}
		Gson gson=new Gson();
		String jsonStr=gson.toJson(tree);
		return jsonStr;
	}
}

