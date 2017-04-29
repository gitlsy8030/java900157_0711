package LSY.dao_interface;

import java.util.List;

import LSY.domain.FunctionInfo;

public interface IFunctionInfoDao {
	List<FunctionInfo> GetAll()  throws Exception;
	List<FunctionInfo>	GetAllCatalogs(int startRow,int endRow) throws Exception;
	List<FunctionInfo>	GetAllFunctonsByCatalog(int startRow,int endRow,String catalogId) throws Exception;
	List<FunctionInfo>	GetAllFunctons(int startRow,int endRow) throws Exception;
	int GetAllFunctionCount(String catalogId) throws Exception;
	int GetAllCatalogCount() throws Exception;
	int GetAllFunctonsByCatalogCount(String catalogId) throws Exception;
	FunctionInfo	GetCatalogById(String functionId) throws Exception;
	FunctionInfo	GetFunctionById(String catalogId) throws Exception;
	void Update(FunctionInfo functionInfo) throws Exception;
	void Add(FunctionInfo functionInfo) throws Exception;
	void Remove(String functionId) throws Exception;
}
