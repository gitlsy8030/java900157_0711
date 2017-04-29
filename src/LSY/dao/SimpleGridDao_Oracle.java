package LSY.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import LSY.dao_interface.ISimpleGridDao;
import LSY.domain.LoginInfo;
import LSY.service_interface.ILoginInfoService;
import LSY.utils.FactoryUitls;
import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;

public class SimpleGridDao_Oracle<T> implements ISimpleGridDao<T> {

	@Override
	public SimpleGrid<T> FindBySearch(OnSiteSearchForm searchFormBean,SimpleGrid<T> gridBean) {
		ILoginInfoService loginService=FactoryUitls.CreateLoginInfoService(); 
		Map<String,LoginInfo> loginMap=loginService.GetAllLogins();
		Map<String,LoginInfo> filteredLoginMap=FilterLoginMap(loginMap,searchFormBean);		
		List<String> keyList=new ArrayList(filteredLoginMap.keySet());
		int totalCount=filteredLoginMap.size();
		gridBean.setTotalCount(totalCount);
		gridBean.setTotalPage((totalCount / gridBean.getPageSize()) +1);
		CaculatePage(gridBean);		
		int startRow= (gridBean.getCurrentPage() - 1) * gridBean.getPageSize();
		int endRow=((startRow + gridBean.getPageSize() - 1) >= filteredLoginMap.size())? 
				filteredLoginMap.size() -1: startRow + gridBean.getPageSize() - 1 ;
		List<T> result=new ArrayList<T>();
		for(int i=startRow;i <= endRow;i++){
			String key=keyList.get(i);
			T item =(T)filteredLoginMap.get(key);			
			result.add(item);			
		}
		SimpleGrid<T> grid=gridBean;
		grid.setPageList(result);
		grid.setRowStart(startRow+1);
		grid.setRowEnd(endRow+1);		
		return grid;		
	}
	@Override
	public SimpleGrid<T> FindAll(SimpleGrid<T> gridBean) {
		ILoginInfoService loginService=FactoryUitls.CreateLoginInfoService(); 
		Map<String,LoginInfo> loginMap=loginService.GetAllLogins();			
		List<String> keyList=new ArrayList(loginMap.keySet());
		int totalCount=loginService.GetLoginCount();
		gridBean.setTotalCount(totalCount);
		gridBean.setTotalPage((totalCount / gridBean.getPageSize()) +1);
		CaculatePage(gridBean);		
		int startRow= (gridBean.getCurrentPage() - 1) * gridBean.getPageSize();
		int endRow=((startRow + gridBean.getPageSize() - 1) >= loginMap.size())? 
				loginMap.size() -1: startRow + gridBean.getPageSize() - 1 ;
		List<T> result=new ArrayList<T>();
		for(int i=startRow;i <= endRow;i++){
			String key=keyList.get(i);
			T item =(T)loginMap.get(key);			
			result.add(item);			
		}
		SimpleGrid<T> grid=gridBean;
		grid.setPageList(result);
		grid.setRowStart(startRow+1);
		grid.setRowEnd(endRow+1);		
		return grid;
	}
	private void CaculatePage(SimpleGrid<T> gridBean){		
		if(gridBean.getPageNum() == -1){
			if(gridBean.getCurrentPage() == 1 ){
				gridBean.setPageNum(1);
			}
			else{
				gridBean.setPageNum(gridBean.getCurrentPage() -1);
			}
		}		
		if(gridBean.getPageNum() == -9){
			if(gridBean.getCurrentPage() == gridBean.getTotalPage()){
				gridBean.setPageNum(gridBean.getTotalPage());
			}
			else{
				gridBean.setPageNum(gridBean.getCurrentPage()+ 1);
			}
		}
		if(gridBean.getPageNum() == -100){			
			gridBean.setPageNum(1);			
		}
		if(gridBean.getPageNum() == -900){			
			gridBean.setPageNum(gridBean.getTotalPage());			
		}
		gridBean.setCurrentPage(gridBean.getPageNum());
	}
	private Map<String,LoginInfo> FilterLoginMap(Map<String,LoginInfo> loginMap,OnSiteSearchForm searchFormBean){
		Map<String,LoginInfo> filteredLoginMap=new HashMap<String,LoginInfo>();
		for(Map.Entry<String, LoginInfo> entry : loginMap.entrySet()){
			if(searchFormBean.getDepartment() != null && !searchFormBean.getDepartment().trim().equals("")){
				if(!((LoginInfo)entry.getValue()).getUserInfo().getDepartment()
						.equals(searchFormBean.getDepartment())){
					continue;
				}
			}
			if(searchFormBean.getGroup() != null && !searchFormBean.getGroup().trim().equals("")){
				if(!((LoginInfo)entry.getValue()).getUserInfo().getGroup()
						.equals(searchFormBean.getGroup())){
					continue;
				}
			}
			if(searchFormBean.getName() != null && !searchFormBean.getName().trim().equals("")){
				if(!((LoginInfo)entry.getValue()).getUserInfo().getUserName()
						.startsWith(searchFormBean.getName())){
					continue;
				}
			}
			if(searchFormBean.getUserId() != null && !searchFormBean.getUserId().trim().equals("")){
				if(!((LoginInfo)entry.getValue()).getUserInfo().getUserId()
						.startsWith(searchFormBean.getUserId())){
					continue;
				}
			}	
			filteredLoginMap.put(entry.getKey(), entry.getValue());
		}
		return	filteredLoginMap; 
	}
}
