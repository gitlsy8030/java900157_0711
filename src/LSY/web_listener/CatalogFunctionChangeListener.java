package LSY.web_listener;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.annotation.WebListener;

import LSY.dao_interface.IFunctionInfoDao;
import LSY.domain.FunctionInfo;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;

@WebListener
public class CatalogFunctionChangeListener implements ServletContextAttributeListener {
   
    public void attributeAdded(ServletContextAttributeEvent arg0)  { 
         // TODO Auto-generated method stub
    }

    public void attributeReplaced(ServletContextAttributeEvent arg0)  { 
         // TODO Auto-generated method stub
    }

	
    public void attributeRemoved(ServletContextAttributeEvent arg0)  { 
         String attrName=arg0.getName();
         System.out.println("attributeRemoved=========>"+attrName);
         if(attrName.equals(NameUtils.CatalogAndFunctionDataExisted)){
        	 List<FunctionInfo> functions;
     		try {
     			functions = GetAllFunctions();
     		} catch (Exception e) {
     			throw new RuntimeException(e);
     		}
         	CommUtils.setFunctions(functions); 
         	ServletContext application=CommUtils.getContext();
         	application.setAttribute(NameUtils.CatalogAndFunctionDataExisted, true);
         }
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
	
}
