package LSY.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.opensymphony.xwork2.inject.Inject;

import LSY.annotation.S2Service;
import LSY.dao_interface.ICategoriesDao;
import LSY.domain.Categories;
import LSY.utils.CommUtils;
import LSY.utils.WebUtils;

@Service
//@S2Service
public class CategoriesDao_SpringJdbc implements ICategoriesDao {
	@Autowired
	//@Inject(value="jdbcTemplate1")
	private JdbcTemplate autoJdbc;  //直接注入已指定應參考的dataSource的JdbcTemplate，就無需在於類別內設定dateSource
	
	private DataSource dataSource;	
	@Autowired
	public void SetDataSource(@Qualifier("myDataSource1") DataSource dataSource){
		this.dataSource=dataSource;
	}
	
	@SuppressWarnings("unchecked")
	@Override 
	public List<Categories> GetAll() throws Exception {
		String sql="select * from Categories";
		JdbcTemplate jdbc=new JdbcTemplate();
		if(dataSource == null){
			System.out.println("dataSource null and assinged commUtil.dataSource");
			//dataSource=CommUtils.getDataSource();
		}
		jdbc.setDataSource(dataSource);		
		List<Categories> result=(List<Categories>)jdbc.queryForObject(sql, new RowMapper(){
			@Override
			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				List<Categories> list;
				try {
					list=WebUtils.ResultSetToBeanLsit(rs, Categories.class);
				} catch (Exception e) {
					throw new RuntimeException(e);
				}
				return list;
			}			
		});
		//result=(List<Categories>)jdbc.queryForObject(sql, Categories.class);
		return result;
	}

	@Override
	public void Add(Categories categories) throws Exception {
		String sql="insert into Categories(categoryId,categoryName) values(?,?)";
		JdbcTemplate jdbc=new JdbcTemplate();
		jdbc.setDataSource(dataSource);
		jdbc.update(sql,new Object []{ categories.getCategoryId(),categories.getCategoryName() });
	}

	@Override
	public void Update(Categories categories) throws Exception {
		String sql="update Categories set categoryName= ? where categoryId = ?";		
		autoJdbc.update(sql,new Object []{ categories.getCategoryName(),categories.getCategoryId() });
	}

	@Override
	public void Delete(String categoryId) throws Exception {
		// TODO Auto-generated method stub
	}

	@SuppressWarnings("unchecked")
	@Override
	public Categories GetByCategoryId(String categoryId) throws Exception {
		String sql="select * from Categories where categoryId = ?";		
		Categories categories=autoJdbc.queryForObject(sql,new Object []{categoryId},new BeanPropertyRowMapper(Categories.class));
		return categories;
	}

}
