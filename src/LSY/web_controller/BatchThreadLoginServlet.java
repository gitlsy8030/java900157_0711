package LSY.web_controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Timer;
import java.util.UUID;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.mail.imap.protocol.UID;

import LSY.domain.LoginInfo;
import LSY.domain.UserInfo;
import LSY.service_interface.ISimpleGridService;
import LSY.service_interface.IUserInfoService;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;
import LSY.utils.ServiceUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;


@WebServlet("/BatchThreadLoginServlet")
public class BatchThreadLoginServlet extends BaseServlet {
	public void Index(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/jsp/BatchThreadLogin.jsp").forward(request, response);		
	}
	public void AutoLogin_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		final String uid=UUID.randomUUID().toString();
		String uuid=UUID.randomUUID().toString();
		final String sid=request.getSession().getId();
		ExecutorService executor = Executors.newSingleThreadExecutor();
	    Callable<LoginInfo> callable = new Callable<LoginInfo>() {	    	
	        @Override
	        public LoginInfo call() {
	        	Random r=new Random();
				int ser=r.nextInt(199)+1;
				String val=String.format("b5"+String.format("%3s", Integer.toString(ser)).replace(' ', '0'));
				IUserInfoService userService=FactoryUitls.CreateUserInfoService();
				UserInfo userInfo=userService.GetUserInfo(val);
				LoginInfo loginInfo=userService.Login(userInfo, sid);
				return loginInfo;				
	        }
	    };
	    Future<LoginInfo> future = executor.submit(callable);
	    try {
	    	LoginInfo thisLogin=future.get();
			SimpleGrid<LoginInfo> gridBean=new SimpleGrid<LoginInfo>();
			List<LoginInfo> list=new ArrayList<LoginInfo>();
			list.add(thisLogin);
			gridBean.setPageList(list);
			WebUtils.GetCurrentRequest().setAttribute(NameUtils.SimpleGrid,gridBean );
			request.getRequestDispatcher("/jsp/LoginInfoRow.jsp").forward(request, response);
			return;
	    } catch (Exception e) {
			
		}
	    executor.shutdown();		
	}

}
