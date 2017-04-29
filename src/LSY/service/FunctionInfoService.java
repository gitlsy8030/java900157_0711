package LSY.service;

import java.util.ArrayList;
import java.util.List;

import LSY.dao_interface.IFunctionInfoDao;
import LSY.domain.FunctionInfo;
import LSY.service_interface.IFunctionInfoService;
import LSY.utils.FactoryUitls;
import LSY.utils.ServiceUtils;
import LSY.web_formbean.SimpleGrid;

public class FunctionInfoService implements IFunctionInfoService {

	@Override
	public List<FunctionInfo> GetCatalogKeyValue() throws Exception {	
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();		
		return dao.GetAllCatalogs(0,999);
	}

	@Override
	public void GetAllFunctonsByCatalog(SimpleGrid<FunctionInfo> gridBean,String catalogId) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();	
		int totalCount=dao.GetAllFunctonsByCatalogCount(catalogId);		
		gridBean.setTotalCount(totalCount);		
		gridBean.setTotalPage((totalCount / gridBean.getPageSize()) +1);
		ServiceUtils.CaculateGridPage(gridBean);
		ServiceUtils.CaculateGridRowRange(gridBean);		
		List<FunctionInfo> funs=dao.GetAllFunctonsByCatalog(gridBean.getRowStart(),gridBean.getRowEnd(), catalogId);
		gridBean.setPageList(funs);	
	}

	@Override
	public void GetAllFunctons(SimpleGrid<FunctionInfo> gridBean) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();	
		int totalCount=dao.GetAllFunctionCount(null);		
		gridBean.setTotalCount(totalCount);		
		gridBean.setTotalPage((totalCount / gridBean.getPageSize()) +1);
		ServiceUtils.CaculateGridPage(gridBean);
		ServiceUtils.CaculateGridRowRange(gridBean);
		List<FunctionInfo> funs=dao.GetAllFunctons(gridBean.getRowStart(),gridBean.getRowEnd());
		gridBean.setPageList(funs);		
	}
	@Override
	public void GetAllCatalogs(SimpleGrid<FunctionInfo> gridBean) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();	
		int totalCount=dao.GetAllCatalogCount();		
		gridBean.setTotalCount(totalCount);		
		gridBean.setTotalPage((totalCount / gridBean.getPageSize()) +1);
		ServiceUtils.CaculateGridPage(gridBean);
		ServiceUtils.CaculateGridRowRange(gridBean);
		List<FunctionInfo> cats=dao.GetAllCatalogs(gridBean.getRowStart(),gridBean.getRowEnd());
		gridBean.setPageList(cats);		
	}

	@Override
	public FunctionInfo GetCatalogById(String catalogId) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();		
		return dao.GetCatalogById(catalogId);
	}

	@Override
	public FunctionInfo GetFunctionById(String functionId) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();		
		return dao.GetFunctionById(functionId);
	}

	@Override
	public void UpdateFunction(FunctionInfo functionInfo) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();
		dao.Update(functionInfo);		
	}

	@Override
	public void AddFunction(FunctionInfo functionInfo) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();
		dao.Add(functionInfo);	
	}

	@Override
	public void RemoveFunction(String functionIId) throws Exception {
		IFunctionInfoDao dao=FactoryUitls.CreateFunctionInfoDao();
		dao.Remove(functionIId);	
	}
}
