package LSY.dao;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.MessageFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.Element;

import LSY.annotation.S2Service;
import LSY.dao_interface.IUserInfoDao;
import LSY.domain.UserInfo;
import LSY.utils.XmlUtils;
import LSY.utils.XmlUtils_Junit;
@S2Service
public class UserInfo_XmlDao implements IUserInfoDao {	
	// 以反射操作bean=>userInfo	
	@Override
	public void Add(UserInfo userInfo,boolean isBatchAdd) throws IOException{
		try {
			Document doc;
			if(isBatchAdd){
				doc=XmlUtils_Junit.GetDocument();
			}
			else{
				doc=XmlUtils.GetDocument();
			}
			Element root=doc.getRootElement();
			Element userInfoEle=root.addElement("UserInfo");
			Class c1=Class.forName("LSY.domain.UserInfo");
			//getDeclaredFields()是取得private property，亦可以getter或setter方式存取資料，則需使用getMethods()=>取得public getter setter方法
			Field [] fields=c1.getDeclaredFields();			
			for(Field field : fields){
				String type=field.getType().getSimpleName();
				String fieldName=(field.getName() == null)?	"":field.getName();
				field.setAccessible(true);
				Object fieldValue=field.get(userInfo);	
				String stringValue="";
				switch(type){
					case "String":
						stringValue=(fieldValue == null)? "":fieldValue.toString();
						userInfoEle.addAttribute(fieldName, stringValue);
						break;
					case "Integer":
						stringValue=(fieldValue == null)? "":fieldValue.toString();
						userInfoEle.addAttribute(fieldName, stringValue);
						break;
					case "Date":
						SimpleDateFormat df=(fieldName.equals("birthday"))?
								new SimpleDateFormat("yyyy/MM/dd"):
								new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
						stringValue=(fieldValue == null)? "":df.format(fieldValue);
						userInfoEle.addAttribute(fieldName,	stringValue);
						break;					
				}				
			}
			if(isBatchAdd){
				XmlUtils_Junit.WriteDocument(doc);
			}
			else{
				XmlUtils.WriteDocument(doc);
			}	
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
	}
	//以 Introspector操作javeBean	
	@Override
	public UserInfo Find(String userId,String password){
		try{
			String [] inputData=new String[]{userId};
			String searchNodeStr=MessageFormat.format("//UserInfo[@userId=''{0}'']",inputData);
			Document doc=XmlUtils.GetDocument();
			Element e =(Element)doc.selectSingleNode(searchNodeStr);
			if(e == null){
				return null;
			}
			UserInfo userInfo=new UserInfo();			
			List<Attribute> attrs=e.attributes();
			for(Attribute attr : attrs){
				String attrName=attr.getName();
				String value=attr.getValue();
				PropertyDescriptor pd=new PropertyDescriptor(attrName,UserInfo.class);
				String propertyType=pd.getPropertyType().getSimpleName();
				Method method=pd.getWriteMethod();
				if(propertyType.equals("Date")){
					SimpleDateFormat df=(attrName.equals("birthday") )?
							new SimpleDateFormat("yyyy/MM/dd"):new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
					method.invoke(userInfo, value.equals("") ? null:
						df.parse(value));	
				}else if(propertyType.equals("Integer")){
					method.invoke(userInfo, value.equals("") ? null:Integer.parseInt(value));
				}
				else{
					method.invoke(userInfo, value.equals("") ? null:value);
				}							
			}
			return userInfo;
		}
		catch(Exception e){
			throw new RuntimeException(e);			
		}		
	}	
	
	@Override
	public boolean Find(UserInfo userInfo){
		try{
			String [] inputData=new String[]{userInfo.getUserId()};
			String searchNodeStr=MessageFormat.format("//UserInfo[@userId=''{0}'']",inputData);
			Document doc=XmlUtils.GetDocument();
			Element e =(Element)doc.selectSingleNode(searchNodeStr);			
			if(e == null){
				return false;
			}
			else{
				return true;
			}
		}
		catch(Exception e){
			throw new RuntimeException(e);			
		}
	}
	
	@Override
	public void Update(UserInfo userInfo,String [] params){
		try {
			Document doc=XmlUtils.GetDocument();
			Element root=doc.getRootElement();
			String [] inputData=new String []{userInfo.getUserId()};
			String searchStr=MessageFormat.format("//UserInfo[@userId=''{0}'']", inputData);
			Element updateEle=(Element)root.selectSingleNode(searchStr);
			for(String attrName:params){
				Attribute attr= updateEle.attribute(attrName);
				Class c1=Class.forName("LSY.domain.UserInfo");
				Field field=c1.getDeclaredField(attrName);
				String fieldType=field.getType().getSimpleName();
				field.setAccessible(true);
				Object fieldValue=field.get(userInfo);				
				if(fieldType.equals("Date") && attrName.equals("birthday") ){
					String strValue=(fieldValue == null) ? "":
						new SimpleDateFormat("yyyy/MM/dd").format(fieldValue);
					attr.setValue(strValue);					
				}else if(fieldType.equals("Integer") || fieldType.equals("String")){
					String strValue=(fieldValue == null) ? "":fieldValue.toString();						
					attr.setValue(strValue);					
				}
				else{   //birthday以外的Date
					String strValue=(fieldValue == null) ? "":
						new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(fieldValue);
					attr.setValue(strValue);								
				}			
			}
			XmlUtils.WriteDocument(doc);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
	}
}
