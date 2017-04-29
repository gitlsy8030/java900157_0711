package LSY.service;

import java.util.List;

import LSY.dao_interface.ISimpleGridDao;
import LSY.service_interface.ISimpleGridService;
import LSY.utils.FactoryUitls;
import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;


public class SimpleGridService<T> implements ISimpleGridService<T>{

	@Override
	public SimpleGrid<T> FindBySearch(OnSiteSearchForm searchFormBean,SimpleGrid<T> gridBean) {
		ISimpleGridDao<T> dao=FactoryUitls.CreateSimpleGridDao();
		SimpleGrid<T> grid=dao.FindBySearch(searchFormBean, gridBean);
		return grid;
	}

	@Override
	public SimpleGrid<T> FindAll(SimpleGrid<T> gridBean) {
		ISimpleGridDao<T> dao=FactoryUitls.CreateSimpleGridDao();
		SimpleGrid<T> grid=dao.FindAll(gridBean);
		return grid;
	}
}
