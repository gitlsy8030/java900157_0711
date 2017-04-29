package LSY.junit_test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import LSY.dao.UserInfo_XmlDao;
import LSY.dao_interface.ICategoriesDao;
import LSY.dao_interface.IDB;
import LSY.dao_interface.IFunctionInfoDao;
import LSY.dao_interface.IUserInfoDao;
import LSY.domain.Categories;
import LSY.domain.FunctionInfo;
import LSY.domain.MailData;
import LSY.domain.UserInfo;
import LSY.exception.MailFailedException;
import LSY.service_interface.IFunctionInfoService;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.ServiceUtils;
import LSY.web_controller.AutoLogin;



public class TestUserInfoDao {	
	@Autowired
	ICategoriesDao categoriesDao;
	
	public void TestAdd() throws IOException{
		UserInfo user=new UserInfo();
		user.setBirthday(new Date());
		user.setDepartment("Adm");
		user.setEngName("Sharon Ding");
		user.setGroup("4");
		user.setPassword("p104");
		user.setMail("ding@gmail.com");
		user.setTel("02-5321-7780");
		user.setUserId("e104");
		user.setUserName("丁敏華");
		IUserInfoDao dao=FactoryUitls.CreateRegisterDao();
		dao.Add(user,true);
	}
	
	@Test
	public void TestCategories() throws Exception{
		List<Categories> result=categoriesDao.GetAll();
		int a=1;
		
	}
	public void TestFunctionInfo() throws Exception{
		CommUtils.setConfigDataPath("D:/JavaWorkspace/Main01/LSYMain/LSY.resource/");
		IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();
		//IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();
		List<FunctionInfo> list;
		FunctionInfo fun;
		try {
//			List<FunctionInfo> listCat=service.GetAllCatalogs();
//			List<FunctionInfo> listFun=service.GetAllFunctons();
//			List<FunctionInfo> listFun1=service.GetAllFunctonsByCatalog("C001");
//			FunctionInfo cat1=service.GetCatalogById("C002");
//			FunctionInfo fun1=service.GetFunctionById("F1001");			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void TestCreateDbConncetion(){
		CommUtils.setConfigDataPath("D:/JavaWorkspace/Main01/LSYMain/LSY.resource/");
		IDB db =FactoryUitls.CreateDB();
		try {
			Connection conn=db.GetConncetion();		
		} catch (Exception e) {			
			e.printStackTrace();
		}		
	}
	
	
	public void TestAutoLogin(){
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
            // set connection
            URLConnection conn = realUrl.openConnection();
            // set request header  useragent=>chrome
            conn.setRequestProperty("accept", "*/*");            
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent",  
                    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36");
            //conn.setRequestProperty("Host", "localhost:8083");
            // post must be set
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // get output stream
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            out.print(param);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
            String line; 
            System.out.println("http POST success！ url="+url+ "  param="+param);
        } catch (Exception e) {
            System.out.println("发送 POST 请求出现异常！"+e);
            e.printStackTrace();
        }
        //使用finally块来关闭输出流、输入流
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
        
	}
	
	public void TestAutoLogin_Thread(){
		//LoginThread autoLogin=new LoginThread();
    	//autoLogin.start();
	}
	
	public void BatchRegister() throws IOException{
		UserInfo_XmlDao dao=new UserInfo_XmlDao();
		String firstNames="趙孫李林王張陳劉丁蕭彭鄭廖洪江安";
		String lastNames="台北自動化工業大展將在明日於南港展覽館揭幕工業電腦龍頭研華將攜手鼎新電腦自動化建佳科技晟福科技昱冠資訊銳鼎科技等夥伴攜手展出工業行業六大應用並舉辦工業論壇相關議題新典範研華科技工業物聯網大中華區副總經理蔡奇男表示研華此次提出智能設備自動化設備聯網與效益可視化生產檢測與設備監診廠務環境監控廠務能源管理與生產履歷等應用服務房市續探積根網路銷售平台統計排除在不同管道銷售的相同待售房屋以及不計入建商的預售建案供給量目前光是成屋便有將近萬戶在網路平台出都中又以台中市賣壓最沉重高達萬戶待售房屋推估台中市全年買賣移轉棟數萬戶年才";
		String [] engName=new String [] {"Ben",	"Benjamin","Bert","Benson","Brent","Brian","Brown",
				"Charles",	"Arabela","Ethan","Hayden","Ken","Kennedy","Lawrence",
				"Patrick",	"Samuel","Sean","Spark","Vernon","Amber","April",
				"Charlotte","Frederica","Jean","Katherine","Octavia","Maureen","Pauline"};
		String [] departments=new String [] {"Adm","Tec","HR","Acc","Sal","Domanstic","Inter","Oper","Manu"};
		String [] telArea=new String [] {"02","02","03","04","04","03","07","07","03","06"}; 
		int firstNamesLen=firstNames.length() -1;
		int lastNamesLen=lastNames.length() -1;
		int engNameLen=engName.length -1;
		int depratmentLen=departments.length -1;
		int telAreaLen=telArea.length -1;
		UserInfo user;
		Random r=new Random();
		for(int i=0;i< 200;i++){
			 user=new UserInfo();			 
			 user.setBirthday(new Date(r.nextInt(30)+70,r.nextInt(11)+1,r.nextInt(27)+1));
			 user.setDepartment(departments[r.nextInt(depratmentLen)]);
			 String eng=engName[r.nextInt(engNameLen)];
			 user.setEngName(eng);
			 user.setGroup(Integer.toString(r.nextInt(5)+1));
			 user.setUserId("b5"+String.format("%3s", Integer.toString(i+1)).replace(' ', '0'));
			 String psw="b5"+String.format("%3s", Integer.toString(i+1)).replace(' ', '0');
			 user.setPassword(ServiceUtils.MD5(psw));
			 user.setMail(eng+Integer.toString(r.nextInt(800)+100)+"@gmail.com");
			 user.setTel(telArea[r.nextInt(telAreaLen)]+"-"+ Integer.toString(8-r.nextInt(5))+Integer.toString(8-r.nextInt(200000)+300000));
			 int nfirst=r.nextInt(firstNamesLen);
			 int l1=r.nextInt(lastNamesLen);
			 int l2=r.nextInt(lastNamesLen);
			 user.setUserName(firstNames.substring(nfirst, nfirst+1)+
					 lastNames.substring(l1, l1+1)+
					 lastNames.substring(l2, l2+1));
			 user.setPasswordErrorTimes(0);
			 user.setReAssignPasswordFlag("0");
			 user.setLastAlterPasswordTime(new Date());
			 dao.Add(user,true);
		}		
	}
	
	public void TestFind(){
		IUserInfoDao dao=new UserInfo_XmlDao();
		UserInfo userInfo=dao.Find("e101","p101");
		if(userInfo == null){
			System.out.println("data null");
		}else{
			System.out.println("userId="+userInfo.getUserId()+"   userName="+userInfo.getUserName()+"  birthday="+
			userInfo.getBirthday() == null? new SimpleDateFormat("yyyy/MM/dd").format(userInfo.getBirthday()):"");
		}		
	}
	
	
	public void TestMail(){
		String userName="fred";
		String userId="e102";
		String uid=UUID.randomUUID().toString();
		String servletUrl="http://localhost:8083/LSYMain/ChangePasswordServlet";
		String linkUrl=servletUrl+"?token="+uid;
		System.out.println(linkUrl);
		String body="<p>"+ userName +"先生/小姐：</p><p></p>" +
					"<p>您的密碼遺失重設已被接受，請於30分鐘內從下列網址聯結，進行密碼變更：</p><p></p>" +
					"<p>"+linkUrl+"</p><p></p><p></p><p>網站管理小組 敬上</p>";		
		
		MailData mailData=new MailData();
		mailData.setSendAddress("fred733524@gmail.com");
		mailData.setReceiveAddresses("fred733524@gmail.com");		
		mailData.setMailSubject("LSY Site 密碼尋回聯結!");
		mailData.setMailBody(body);
		try {
			ServiceUtils.SendMail(mailData);
		} catch (MailFailedException e) {
			System.out.println("send mail faild");
		}
	}
	
}
