package LSY.web_controller;


import java.io.IOException;
import java.lang.reflect.Field;
import java.util.AbstractMap.SimpleEntry;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jaxen.Function;

import com.solidfire.gson.Gson;
import com.solidfire.gson.JsonElement;
import com.solidfire.gson.JsonObject;
import com.solidfire.gson.stream.JsonReader;

import LSY.annotation.NamingAnnotation;
import LSY.domain.FunctionInfo;
import LSY.domain.LoginInfo;
import LSY.domain.UserInfo;
import LSY.service_interface.IFunctionInfoService;
import LSY.service_interface.ISimpleGridService;
import LSY.utils.CommUtils;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.FunMaintainForm;
import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;

@WebServlet("/FunMaintainServlet")
@NamingAnnotation(FunName="目錄及功能維護",IsAjax=false)
public class FunMaintainServlet extends BaseServlet {	

	public void Index(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		IFunctionInfoService service;
		List<FunctionInfo> list;
		SimpleGrid<FunctionInfo> funGridBean =new SimpleGrid<FunctionInfo>();	
		SimpleGrid<FunctionInfo> catGridBean =new SimpleGrid<FunctionInfo>();
		FunMaintainForm catForm;
		FunMaintainForm funForm;
		try {
			service = FactoryUitls.CreateFunctionInfoService();
			String className=FunctionInfo.class.getName();	
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);
			
			catGridBean.setAttachData(attachData);
			catGridBean.setCalssName(className);
			catGridBean.setUrl("FunMaintainServlet?action=GetCatPageByNumber_Ajax");
			catGridBean.setPageNum(1);
			catGridBean.setPageSize(999);
			catGridBean.setCurrentPage(1);
			service.GetAllCatalogs(catGridBean);
			String firstCatalogId=catGridBean.getPageList().get(0).getCatalogId();
			catForm=GetSingleCatalog(firstCatalogId);
			catForm.setFormType("view");
			
			funGridBean.setAttachData(attachData);
			funGridBean.setCalssName(className);
			funGridBean.setUrl("FunMaintainServlet?action=GetFunPageByNumber_Ajax");
			funGridBean.setPageNum(1);
			funGridBean.setPageSize(10);
			funGridBean.setCurrentPage(1);
			//funForm.setAttachData(attachData);			
			
			String catalogId=catGridBean.getPageList().get(0).getCatalogId();
			service.GetAllFunctonsByCatalog(funGridBean, catalogId);			
			String firstFunctionId=funGridBean.getPageList().get(0).getFunctionId();
			funForm=GetSingleFunction(firstFunctionId);
			funForm.setCatalogId(catalogId);
			funForm.setFormType("view");
			Gson gson=new Gson();
			JsonObject searchData=new JsonObject();
			searchData.addProperty("catalogId", catalogId);			
			String conditionStr=CommUtils.ToBase64(gson.toJson(searchData));		
			funGridBean.setSearchCondition(conditionStr);
		} catch (Exception e) {
			throw new RuntimeException();
		}
		request.setAttribute("FunMaintain_catGrid", catGridBean);
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_cat", catForm);
		request.setAttribute("form_fun", funForm);
		request.getRequestDispatcher("/jsp/FunMaintain/Index.jsp").forward(request, response);		
	}
	@NamingAnnotation(FunName="目錄及功能維護",IsAjax=true)
	public void GetFunPageByNumber_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		SimpleGrid<FunctionInfo> gridBean=WebUtils.RequestToGridBean(request,FunctionInfo.class);
		FunMaintainForm form_fun=null;
		try {
			IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();
			String conditionStr=gridBean.getSearchCondition();
			gridBean.setIsIncludeJs(false);
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);			
			if(conditionStr == null || conditionStr.trim().equals("")){			
				gridBean.setAttachData(attachData);	
				service.GetAllFunctons(gridBean);						
			}
			else{
				Gson gson=new Gson();
				String conditionStr_org=CommUtils.FromBase64(conditionStr);
				JsonObject obj=gson.fromJson(conditionStr_org,JsonObject.class);				
				JsonElement ele=obj.get("catalogId");
				String catalogId=ele.getAsString();
				service.GetAllFunctonsByCatalog(gridBean, catalogId);
				gridBean.setAttachData(attachData);
			}
			String functionId=(gridBean.getPageList().size() > 0)? gridBean.getPageList().get(0).getFunctionId():null;
			form_fun=GetSingleFunction(functionId);
			form_fun.setFormType("view");
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_funGrid", gridBean);
		request.setAttribute("form_fun", form_fun);
//		request.setAttribute(NameUtils.IsPartialJsp,true);
//		request.setAttribute(NameUtils.PartialJsp,"functionGrid");
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").forward(request, response);		
	}
	@NamingAnnotation(FunName="目錄更換",IsAjax=true)
	public void CatalogChanged_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		SimpleGrid<FunctionInfo> funGridBean=WebUtils.RequestToGridBean(request,FunctionInfo.class);
		SimpleGrid<FunctionInfo> catGridBean=new SimpleGrid<FunctionInfo>();
		FunMaintainForm form_fun=null;
		FunMaintainForm form_cat=null;
		try {
			IFunctionInfoService service = FactoryUitls.CreateFunctionInfoService();
			String className=FunctionInfo.class.getName();	
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);
			funGridBean.setAttachData(attachData);
			funGridBean.setCalssName(className);
			funGridBean.setUrl("FunMaintainServlet?action=GetFunPageByNumber_Ajax");
			funGridBean.setPageNum(1);
			funGridBean.setPageSize(10);
			funGridBean.setCurrentPage(1);			
			String catalogId=request.getParameter("catalogId");			
			service.GetAllFunctonsByCatalog(funGridBean, catalogId);			
			List<FunctionInfo> funList=funGridBean.getPageList();
			if(catalogId != null){
				form_cat=GetSingleCatalog(catalogId);
				form_cat.setFormType("view");
			}			
			if(funList.size() > 0){
				String functionId=funList.get(0).getFunctionId();
				form_fun=GetSingleFunction(functionId);
				form_fun.setFormType("view");
			}	
			else{
				form_fun=new FunMaintainForm();
				form_fun.setFormType("view");
			}
			
			Gson gson=new Gson();
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));	
			String conditionStr_cat=CommUtils.ToBase64(gson.toJson(form_cat));		
			funGridBean.setSearchCondition(conditionStr_fun);
			catGridBean.setSearchCondition(conditionStr_cat);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);
		request.setAttribute("form_cat", form_cat);
		request.setAttribute(NameUtils.IsPartialJsp,true);
		request.setAttribute(NameUtils.PartialJsp,"functionGrid");
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogForm.jsp").include(request, response);	
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);		
	}
	@NamingAnnotation(FunName="功能更換",IsAjax=true)
	public void GetCatPageByNumber_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		SimpleGrid<FunctionInfo> catGridBean=WebUtils.RequestToGridBean(request,FunctionInfo.class);
		try {
			IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();
			String conditionStr=catGridBean.getSearchCondition();
			catGridBean.setIsIncludeJs(false);
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);
			if(conditionStr == null || conditionStr.trim().equals("")){			
				catGridBean.setAttachData(attachData);	
				service.GetAllCatalogs(catGridBean);						
			}
			else{
				Gson gson=new Gson();
				OnSiteSearchForm form =gson.fromJson(CommUtils.FromBase64(conditionStr), OnSiteSearchForm.class);
				System.out.println("now request GetPageDataByNumber_Ajax  +++  and FindBySearch");				
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_catGrid", catGridBean);
		request.setAttribute(NameUtils.IsPartialJsp,true);
		request.setAttribute(NameUtils.PartialJsp,"functionGrid");
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogGrid.jsp").forward(request, response);		
	}
	@NamingAnnotation(FunName="目錄及功能維護",IsAjax=true)
	public void GetCatalogById_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
				
		String catalogId=request.getParameter("catalogId");
		String formType=request.getParameter("formType");
		FunMaintainForm catForm=new FunMaintainForm();		
		try {
			if(!formType.equals("add")){
				IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();	
				FunctionInfo cat=service.GetCatalogById(catalogId);	
				WebUtils.CopyBeanToBean(cat, catForm);
			}
			catForm.setFormType(formType);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("form_cat", catForm);
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogForm.jsp").forward(request, response);		
	}
	@NamingAnnotation(FunName="目錄及功能維護",IsAjax=true)
	public void GetFunctionById_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
				
		String functionId=request.getParameter("functionId");
		String formType=request.getParameter("formType");		
		FunMaintainForm funForm=new FunMaintainForm();		
		try {
			IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();	
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);
			if(!formType.equals("add")){
				FunctionInfo fun=service.GetFunctionById(functionId);	
				WebUtils.CopyBeanToBean(fun, funForm);
			}
			else{
				String catalogId=request.getParameter("catalogId");
				funForm.setCatalogId(catalogId);
			}
			funForm.setFormType(formType);
			funForm.setAttachData(attachData);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("form_fun", funForm);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").forward(request, response);		
	}
	@NamingAnnotation(FunName="功能新增儲存",IsAjax=true)
	public void AddFunction_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		IFunctionInfoService service;	
		SimpleGrid<FunctionInfo> catGridBean;
		SimpleGrid<FunctionInfo> funGridBean;
		FunMaintainForm form_fun=null;
		
		try {			
			service =FactoryUitls.CreateFunctionInfoService();
			form_fun=WebUtils.RequestToFormBean(request, FunMaintainForm.class);
			FunctionInfo fun=new FunctionInfo();			
			WebUtils.CopyBeanToBean(form_fun, fun);
			
			fun.setType("1");
			service.AddFunction(fun);		
			String catalogId=fun.getCatalogId();
			String functionId=fun.getFunctionId();
			funGridBean=new SimpleGrid<FunctionInfo>();	
			SetInitFunction_All(funGridBean,catalogId);
			form_fun=GetSingleFunction(functionId);
			form_fun.setFormType("view");
			Gson gson=new Gson();
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));
			funGridBean.setSearchCondition(conditionStr_fun);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);		
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);
		CommUtils.getContext().removeAttribute(NameUtils.CatalogAndFunctionDataExisted);
	}
	@NamingAnnotation(FunName="功能編輯儲存",IsAjax=true)
	public void EditFunction_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		IFunctionInfoService service;	
		SimpleGrid<FunctionInfo> catGridBean;
		SimpleGrid<FunctionInfo> funGridBean;
		FunMaintainForm form_fun=null;
		
		try {			
			service =FactoryUitls.CreateFunctionInfoService();
			form_fun=WebUtils.RequestToFormBean(request, FunMaintainForm.class);
			FunctionInfo fun=new FunctionInfo();			
			WebUtils.CopyBeanToBean(form_fun, fun);			
			fun.setType("1");
			service.UpdateFunction(fun);		
			String catalogId=fun.getCatalogId();
			String functionId=fun.getFunctionId();
			funGridBean=new SimpleGrid<FunctionInfo>();	
			SetInitFunction_All(funGridBean,catalogId);
			form_fun=GetSingleFunction(functionId);
			form_fun.setFormType("view");
			Gson gson=new Gson();
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));
			funGridBean.setSearchCondition(conditionStr_fun);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);		
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);
		CommUtils.getContext().removeAttribute(NameUtils.CatalogAndFunctionDataExisted);
	}
	@NamingAnnotation(FunName="功能刪除",IsAjax=true)
	public void RemoveFunction_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		IFunctionInfoService service;	
		SimpleGrid<FunctionInfo> catGridBean;
		SimpleGrid<FunctionInfo> funGridBean;
		FunMaintainForm form_fun=null;
		
		try {	
			service =FactoryUitls.CreateFunctionInfoService();
			String functionId=request.getParameter("functionId");	
			String catalogId=request.getParameter("catalogId");	
			service.RemoveFunction(functionId);
			funGridBean=new SimpleGrid<FunctionInfo>();			
			SetInitFunction_All(funGridBean,catalogId);
			String firstFunctionId=(funGridBean.getPageList().size() == 0)? 
					null:funGridBean.getPageList().get(0).getFunctionId();
			form_fun=GetSingleFunction(firstFunctionId);			
			form_fun.setFormType("view");
			Gson gson=new Gson();
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));
			funGridBean.setSearchCondition(conditionStr_fun);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);		
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);
		CommUtils.getContext().removeAttribute(NameUtils.CatalogAndFunctionDataExisted);
	}
	@NamingAnnotation(FunName="目錄新增儲存",IsAjax=true)
	public void AddCatalog_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		IFunctionInfoService service;	
		SimpleGrid<FunctionInfo> catGridBean;
		SimpleGrid<FunctionInfo> funGridBean;
		FunMaintainForm form_fun=null;
		FunMaintainForm form_cat=null;
		try {			
			service =FactoryUitls.CreateFunctionInfoService();
			form_cat=WebUtils.RequestToFormBean(request, FunMaintainForm.class);
			FunctionInfo cat=new FunctionInfo();			
			WebUtils.CopyBeanToBean(form_cat, cat);
			cat.setCatalogId(cat.getFunctionId());
			cat.setType("0");
			service.AddFunction(cat);		
			String catalogId=cat.getFunctionId();	
			catGridBean=new SimpleGrid<FunctionInfo>();			
			SetInitCatalog_All(catGridBean);			
			form_cat=GetSingleCatalog(catalogId);
			form_cat.setFormType("view");
			
			funGridBean=new SimpleGrid<FunctionInfo>();
			SetInitFunction_All(funGridBean,catalogId);
			
			String functionId=(funGridBean.getPageList().size() == 0)? 
					null:funGridBean.getPageList().get(0).getFunctionId();
			form_fun=GetSingleFunction(functionId);			
			form_fun.setFormType("view");			
			
			Gson gson=new Gson();			
			String conditionStr_cat=CommUtils.ToBase64(gson.toJson(form_cat));
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));
			catGridBean.setSearchCondition(conditionStr_cat);
			funGridBean.setSearchCondition(conditionStr_fun);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_catGrid", catGridBean);
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);
		request.setAttribute("form_cat", form_cat);		
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);		
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogForm.jsp").include(request, response);
		CommUtils.getContext().removeAttribute(NameUtils.CatalogAndFunctionDataExisted);
	}
	@NamingAnnotation(FunName="目錄編輯儲存",IsAjax=true)
	public void EditCatalog_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		IFunctionInfoService service;	
		SimpleGrid<FunctionInfo> catGridBean;
		SimpleGrid<FunctionInfo> funGridBean;
		FunMaintainForm form_fun=null;
		FunMaintainForm form_cat=null;
		try {			
			service =FactoryUitls.CreateFunctionInfoService();
			form_cat=WebUtils.RequestToFormBean(request, FunMaintainForm.class);
			FunctionInfo cat=new FunctionInfo();
			WebUtils.CopyBeanToBean(form_cat, cat);
			cat.setCatalogId(cat.getFunctionId());
			cat.setType("0");
			service.UpdateFunction(cat);		
			String catalogId=cat.getFunctionId();	
			catGridBean=new SimpleGrid<FunctionInfo>();			
			SetInitCatalog_All(catGridBean);			
			form_cat=GetSingleCatalog(catalogId);
			form_cat.setFormType("view");
			
			funGridBean=new SimpleGrid<FunctionInfo>();
			SetInitFunction_All(funGridBean,catalogId);
			
			String functionId=(funGridBean.getPageList().size() == 0)? 
					null:funGridBean.getPageList().get(0).getFunctionId();
			form_fun=GetSingleFunction(functionId);			
			form_fun.setFormType("view");
			
			//form_fun.setCatalogId(catalogId);
			Gson gson=new Gson();			
			String conditionStr_cat=CommUtils.ToBase64(gson.toJson(form_cat));
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));
			catGridBean.setSearchCondition(conditionStr_cat);
			funGridBean.setSearchCondition(conditionStr_fun);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_catGrid", catGridBean);
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);
		request.setAttribute("form_cat", form_cat);		
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);		
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogForm.jsp").include(request, response);
		CommUtils.getContext().removeAttribute(NameUtils.CatalogAndFunctionDataExisted);
	}
	@NamingAnnotation(FunName="目錄刪除",IsAjax=true)
	public void RemoveCatalog_Ajax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setCharacterEncoding("UTF-8");
		IFunctionInfoService service;	
		SimpleGrid<FunctionInfo> catGridBean;
		SimpleGrid<FunctionInfo> funGridBean;
		FunMaintainForm form_fun=null;
		FunMaintainForm form_cat=null;
		try {			
			service =FactoryUitls.CreateFunctionInfoService();
			String functionId=request.getParameter("functionId");			
			service.RemoveFunction(functionId);
			
			
			catGridBean=new SimpleGrid<FunctionInfo>();			
			SetInitCatalog_All(catGridBean);
			String catalogId=(catGridBean.getPageList().size() == 0)? 
					null:catGridBean.getPageList().get(0).getFunctionId();	
			form_cat=GetSingleCatalog(catalogId);
			form_cat.setFormType("view");
			
			funGridBean=new SimpleGrid<FunctionInfo>();
			SetInitFunction_All(funGridBean,catalogId);
			
			String firstFunctionId=(funGridBean.getPageList().size() == 0)? 
					null:funGridBean.getPageList().get(0).getFunctionId();
			form_fun=GetSingleFunction(firstFunctionId);			
			form_fun.setFormType("view");
			
			Gson gson=new Gson();			
			String conditionStr_cat=CommUtils.ToBase64(gson.toJson(form_cat));
			String conditionStr_fun=CommUtils.ToBase64(gson.toJson(form_fun));
			catGridBean.setSearchCondition(conditionStr_cat);
			funGridBean.setSearchCondition(conditionStr_fun);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		request.setAttribute("FunMaintain_catGrid", catGridBean);
		request.setAttribute("FunMaintain_funGrid", funGridBean);
		request.setAttribute("form_fun", form_fun);
		request.setAttribute("form_cat", form_cat);		
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/FunctionForm.jsp").include(request, response);		
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogGrid.jsp").include(request, response);
		request.getRequestDispatcher("/jsp/FunMaintain/CatalogForm.jsp").include(request, response);
		CommUtils.getContext().removeAttribute(NameUtils.CatalogAndFunctionDataExisted);
	}
	
	private FunMaintainForm GetSingleFunction(String functionId){
		FunMaintainForm funForm=new FunMaintainForm();
		try {
			IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();			
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);			
			FunctionInfo fun=service.GetFunctionById(functionId);	
			WebUtils.CopyBeanToBean(fun, funForm);
			funForm.setAttachData(attachData);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return funForm;
	}
	private FunMaintainForm GetSingleCatalog(String catalogId){
		FunMaintainForm catForm=new FunMaintainForm();
		try {
			IFunctionInfoService service=FactoryUitls.CreateFunctionInfoService();
			FunctionInfo cat=service.GetCatalogById(catalogId);	
			WebUtils.CopyBeanToBean(cat, catForm);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return catForm;
	}
	private void SetInitCatalog_All(SimpleGrid<FunctionInfo> catGridBean){
		IFunctionInfoService service;
		try {
			service = FactoryUitls.CreateFunctionInfoService();
			String className=FunctionInfo.class.getName();	
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);			
			catGridBean.setAttachData(attachData);
			catGridBean.setCalssName(className);
			catGridBean.setUrl("FunMaintainServlet?action=GetCatPageByNumber_Ajax");
			catGridBean.setPageNum(1);
			catGridBean.setPageSize(999);
			catGridBean.setCurrentPage(1);
			service.GetAllCatalogs(catGridBean);
		} catch (Exception e) {
			throw new RuntimeException(e); 
		}		
	}
	private void SetInitFunction_All(SimpleGrid<FunctionInfo> funGridBean,String catalogId){
		IFunctionInfoService service;
		try {
			service = FactoryUitls.CreateFunctionInfoService();
			String className=FunctionInfo.class.getName();	
			Map<String,List<SimpleEntry<String,String>>> attachData=GetAttachedData(service);			
			funGridBean.setAttachData(attachData);
			funGridBean.setCalssName(className);
			funGridBean.setUrl("FunMaintainServlet?action=GetFunPageByNumber_Ajax");
			funGridBean.setPageNum(1);
			funGridBean.setPageSize(999);
			funGridBean.setCurrentPage(1);
			service.GetAllFunctonsByCatalog(funGridBean, catalogId);
		} catch (Exception e) {
			throw new RuntimeException(e); 
		}		
	}
	private Map<String,List<SimpleEntry<String,String>>> GetAttachedData(IFunctionInfoService service){
		Map<String,List<SimpleEntry<String,String>>> attachData=new HashMap <String,List<SimpleEntry<String,String>>>();
		List<SimpleEntry<String,String>> typeList=new ArrayList<SimpleEntry<String,String>>();
		typeList.add(new SimpleEntry<String,String>("0","目錄項"));
		typeList.add(new SimpleEntry<String,String>("1","功能項"));
		attachData.put("type", typeList);
		try {
			List<FunctionInfo> list=service.GetCatalogKeyValue();
			List<SimpleEntry<String,String>> catalogList=new ArrayList<SimpleEntry<String,String>>();
			for(FunctionInfo item:list){
				String key=item.getFunctionId();
				String value=item.getFunctionName();
				catalogList.add(new SimpleEntry<String,String>(key,value));
			}			
			attachData.put("catalogId", catalogList);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}		
		return attachData;
	}
}
