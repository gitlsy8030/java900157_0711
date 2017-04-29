package LSY.service_interface;

import java.util.List;

import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;

public interface ISimpleGridService<T> {
	SimpleGrid<T> FindAll(SimpleGrid<T> grid);
	SimpleGrid<T> FindBySearch(OnSiteSearchForm searchFormBean,SimpleGrid<T> gridBean);
}
