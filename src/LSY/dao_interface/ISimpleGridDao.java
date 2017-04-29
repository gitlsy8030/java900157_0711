package LSY.dao_interface;

import java.util.List;

import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;

public interface ISimpleGridDao<T> {
	SimpleGrid<T> FindAll(SimpleGrid<T> gridBean);
	SimpleGrid<T> FindBySearch(OnSiteSearchForm searchFormBean,SimpleGrid<T> gridBean);
}
