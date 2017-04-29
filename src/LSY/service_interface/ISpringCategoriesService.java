package LSY.service_interface;

import java.util.List;

import LSY.domain.Categories;

public interface ISpringCategoriesService {
	List<Categories> GetAll() throws Exception;
	Categories GetByCategoryId(String categoryId) throws Exception;
	void Add(Categories categories) throws Exception;
	void Update(Categories categories) throws Exception;
	void Delete(String categoryId) throws Exception;
}
