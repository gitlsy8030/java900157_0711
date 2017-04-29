package LSY.aop;

import java.io.File;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.MethodFilterInterceptor;

import LSY.annotation.S2Autowired;
import LSY.annotation.S2Service;
import LSY.utils.CommUtils;

public class S2AutowiredInterceptor extends MethodFilterInterceptor {
	@Override
	protected String doIntercept(ActionInvocation invocation) throws Exception {
		Object targetInstance=invocation.getAction();
		Field [] fields=invocation.getAction().getClass().getDeclaredFields();	
		for(Field field:fields){  //搜尋s2 的controller類別內每個private field	
			Object injectServiceObject=InjectInstanceByField(field,targetInstance);
			//返回的對象如為!=nll，表示有實現類，必需在從該實體內尋找是否有定@S2Autowired給dao層，若有需要注入dao實體
			if(injectServiceObject == null){
				continue;
			}
			Field [] daoFields=injectServiceObject.getClass().getDeclaredFields();
			for(Field daoField:daoFields){ 
				Object injectDaoObject=InjectInstanceByField(daoField,injectServiceObject);
			}
		}
		System.out.println("end interceptor");
		return invocation.invoke();
	}
	//傳入實體類及其reflect出來的一個 Field，若此Field(此處為LSY.service或LSY.dao的接口)有設定@S2Autowired註釋，
	//則為該Field注入其實現類，完成自動裝配任務
	private static Object InjectInstanceByField(Field field,Object classInstance) throws Exception{
		S2Autowired s2Autowired=field.getAnnotation(S2Autowired.class);
		field.setAccessible(true);
		String fieldName=field.getName();			
		Object injectObject=null;
		if(s2Autowired == null ){ //成員field上沒有定@S2Autowired continue，找下一個field
			return null;
		}		
		String annoType=s2Autowired.type(); //定@S2Autowired 則看齊 type=>"service" or "dao"
		Class interfaceType=field.getType(); //有定義@S2Autowired的接口類別如：IProductService、ISpringCategoriesService 
		if(annoType.equals("service")){  //service				
			List<Class> allImplServiceClass=CommUtils.GetImplment_S2Sercice_ByPackage("LSY.service",interfaceType);
			System.out.println(allImplServiceClass.size());
			if(allImplServiceClass.size() != 1){  //若此接口有超過一個或沒有實現類，則此Field不賦值，即表此接口無法被自動注入實體類
				return null;
			}			
			injectObject=allImplServiceClass.get(0).newInstance();
			field.set(classInstance, injectObject);			
		}
		else if(annoType.equals("dao")){ //dao
			List<Class> allImplDaoClass=CommUtils.GetImplment_S2Sercice_ByPackage("LSY.dao",interfaceType);
			if(allImplDaoClass.size() != 1){  //若此接口有超過一個或沒有實現類，則此Field不賦值，即表此接口無法被自動注入實體類
				return null;
			}
			injectObject=allImplDaoClass.get(0).newInstance();
			field.set(classInstance, injectObject);		
		}
		return injectObject;
	}
//	private static String GetImplementPackageName(Class<?> interfaceClass){
//		//Class<?> interClass=Class.forName(interfaceName);
//		String interfacePackage=interfaceClass.getPackage().getName();
//		String implPackage="";
//		if(interfacePackage.equals("LSY.service_interface")){
//			implPackage="LSY.service";
//		}
//		else if(interfacePackage.equals("LSY.dao_interface")){
//			implPackage="LSY.dao";
//		}
//		return implPackage;
//	}
	private static List<Class> GetImplS2Sercice(List<Class> allClass,Class interfaceClass){
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
	private static List<Class> GetClasses(String packageName) throws IOException, ClassNotFoundException{		
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
