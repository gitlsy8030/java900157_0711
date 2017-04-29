package LSY.web_controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletContext;

import LSY.domain.LoginInfo;
import LSY.utils.CommUtils;
import LSY.utils.NameUtils;

public class AutoLogin extends Thread {

	@Override
	public void run() {
		String result=postRequest();		
	}
	private String postRequest(){
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
}
