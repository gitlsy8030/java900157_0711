package LSY.utils;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;
public class XmlUtils_Junit {
	private static String filePath;	
	static{	
		
		filePath="D:/JavaWorkspace/Main01/LSYMain/LSY.resource/UserInfo.xml";			
		File file=new File(filePath);
		
		try {
			if(!file.exists()){
				System.out.println("##########  xml file not found");
				CreateDocument();
			}			
		} catch (IOException e) {
			throw new RuntimeException();
		}

	}
	public static Document GetDocument() throws DocumentException{
		SAXReader reader=new SAXReader();
		Document doc=reader.read(new File(filePath));
		return doc;
	}
	public static void WriteDocument(Document doc) throws IOException{
		OutputFormat format=OutputFormat.createPrettyPrint();
		format.setEncoding("utf-8");
		XMLWriter writer=new XMLWriter(new FileOutputStream(filePath),format);
		writer.write(doc);	
		writer.close();
	}
	private static void CreateDocument() throws IOException{
		Document doc=DocumentHelper.createDocument();			
		doc.addElement("UserInfos");
		
		OutputFormat format=OutputFormat.createPrettyPrint();
		format.setEncoding("utf-8");		
		XMLWriter writer=new XMLWriter(new FileOutputStream(filePath),format);
		writer.write(doc);	
		writer.close();
	}
}
