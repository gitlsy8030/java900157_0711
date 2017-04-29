package LSY.web_controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Timer;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.json.simple.JSONObject;

import com.solidfire.gson.Gson;

import LSY.annotation.NamingAnnotation;
import LSY.domain.LoginInfo;
import LSY.service_interface.ISimpleGridService;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;

@WebServlet("/HomeServlet")
@NamingAnnotation(FunName="網站主頁-全站用戶登入資訊查詢",IsAjax=false)
public class HomeServlet extends BaseServlet {
	
	public void Index(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		SimpleGrid<LoginInfo> gridBean=WebUtils.RequestToGridBean(request,LoginInfo.class);
		ISimpleGridService<LoginInfo> gridService=FactoryUitls.CreateSimpleGridService();
		OnSiteSearchForm form=new OnSiteSearchForm();
		gridBean.setPageNum(1);
		gridBean.setCurrentPage(1);		
		gridBean.setPageSize(10);
		SimpleGrid<LoginInfo> grid=gridService.FindAll(gridBean);
		request.setAttribute("form", form);
		request.setAttribute(NameUtils.SimpleGrid, grid);
		request.getRequestDispatcher("/jsp/Home.jsp").forward(request, response);		
	}
	public void GetPageDataByNumber(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		SimpleGrid<LoginInfo> gridBean=WebUtils.RequestToGridBean(request,LoginInfo.class);			
		ISimpleGridService<LoginInfo> gridService=FactoryUitls.CreateSimpleGridService();		
		SimpleGrid<LoginInfo> grid=gridService.FindAll(gridBean);				
		request.setAttribute(NameUtils.SimpleGrid, grid);
		request.getRequestDispatcher("/jsp/Home.jsp").forward(request, response);		
	}
	@NamingAnnotation(FunName="網站主頁-全站用戶登入資訊查詢",IsAjax=true)
	public void GetPageDataByNumber_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		SimpleGrid<LoginInfo> gridBean=WebUtils.RequestToGridBean(request,LoginInfo.class);
		System.out.println("!!!!!!!request.getParameter searchCondition"+request.getParameter("searchCondition"));
		System.out.println("!!!!!!!gridBean.getSearchCondition="+gridBean.getSearchCondition());		
		ISimpleGridService<LoginInfo> gridService=FactoryUitls.CreateSimpleGridService();
		String conditionStr=gridBean.getSearchCondition();
		SimpleGrid<LoginInfo> grid=null;
		if(conditionStr == null || conditionStr.trim().equals("")){
			grid=gridService.FindAll(gridBean);	
		}
		else{
			Gson gson=new Gson();
			OnSiteSearchForm form =gson.fromJson(CommUtils.FromBase64(conditionStr), OnSiteSearchForm.class);
			System.out.println("now request GetPageDataByNumber_Ajax  +++  and FindBySearch");
			grid=gridService.FindBySearch(form,gridBean);
		}		
		request.setAttribute(NameUtils.SimpleGrid, grid);
		request.getRequestDispatcher("/jsp/OnSiteUserGrid.jsp").forward(request, response);		
	}
	public void GetPageDataBySearch(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		request.setCharacterEncoding("UTF-8");
		OnSiteSearchForm form=WebUtils.RequestToFormBean(request, OnSiteSearchForm.class);		
		SimpleGrid<LoginInfo> gridBean=new SimpleGrid<LoginInfo>();
		gridBean.setPageNum(1);
		gridBean.setCurrentPage(1);		
		gridBean.setPageSize(10);
		ISimpleGridService<LoginInfo> gridService=FactoryUitls.CreateSimpleGridService();		
		SimpleGrid<LoginInfo> grid=gridService.FindBySearch(form,gridBean);			
		Gson gson=new Gson();
		String conditionStr=CommUtils.ToBase64(gson.toJson(form));		
		grid.setSearchCondition(conditionStr);
		request.setAttribute("form", form);
		request.setAttribute(NameUtils.SimpleGrid, grid);
		request.getRequestDispatcher("/jsp/Home.jsp").forward(request, response);		
	}
	
	public void AutoLogin(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Integer times=Integer.parseInt(request.getParameter("times"));		
		//查詢
		if(times == 0){
			Map<String,LoginInfo> map=(Map<String,LoginInfo>)WebUtils.GetCurrentContext().getAttribute(NameUtils.LoginMap);					

			System.out.println("current login count="+map.size());			
		}
		//自動登入n次
		else{
			ServletContext application=request.getServletContext();
			Timer timer=(Timer)application.getAttribute(NameUtils.AutoLoginTimer);
			if(timer == null){
				timer=new Timer();
			}
			else{
				timer.cancel();	
				timer=new Timer();
			} 
			application.setAttribute(NameUtils.AutoLoginTimer, timer);    	
	    	application.setAttribute(NameUtils.AutoLoginMaxTimes, times);    
	    	application.setAttribute(NameUtils.AutoLoginTimesCounter, 0);
	    	timer.schedule(new TimerRunner(),2000,10000); 	    	
		}
		request.getRequestDispatcher("/jsp/Home.jsp").forward(request, response);
	}
}
