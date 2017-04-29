package LSY.service_interface;

import java.util.List;

import LSY.domain.FunctionInfo;
import LSY.web_formbean.SimpleGrid;

public interface IFunctionInfoService {
	List<FunctionInfo>	GetCatalogKeyValue() throws Exception;
	void  GetAllFunctonsByCatalog(SimpleGrid<FunctionInfo> gridBean,String catalogId) throws Exception;
	void  GetAllFunctons(SimpleGrid<FunctionInfo> gridBean) throws Exception;
	void  GetAllCatalogs(SimpleGrid<FunctionInfo> gridBean) throws Exception;
	FunctionInfo	GetCatalogById(String catalogId) throws Exception;
	FunctionInfo	GetFunctionById(String functionId) throws Exception;
	void UpdateFunction(FunctionInfo functionInfo) throws Exception;
	void AddFunction(FunctionInfo functionInfo) throws Exception;
	void RemoveFunction(String functionIId) throws Exception;
}
