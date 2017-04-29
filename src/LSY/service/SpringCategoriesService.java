package LSY.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import LSY.annotation.S2Autowired;
import LSY.annotation.S2Service;
import LSY.dao_interface.ICategoriesDao;
import LSY.domain.Categories;
import LSY.service_interface.ISpringCategoriesService;

@Service
//@S2Service
public class SpringCategoriesService implements ISpringCategoriesService {
	@Autowired
	//@S2Autowired(type="dao")
	ICategoriesDao categoriesDao;
	
	@Override
	public List<Categories> GetAll() throws Exception {
		List<Categories> result=categoriesDao.GetAll();
		return result;
	}

	@Override
	public void Add(Categories categories) throws Exception {
		categoriesDao.Add(categories);
	}

	@Override
	public void Update(Categories categories) throws Exception {
		categoriesDao.Update(categories);

	}

	@Override
	public void Delete(String categoryId) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public Categories GetByCategoryId(String categoryId) throws Exception {
		Categories result=categoriesDao.GetByCategoryId(categoryId);
		return result;
	}

}
