package LSY.hibernate_controller;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Date;
import java.util.HashSet;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.exception.ConstraintViolationException;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;

import LSY.domain_hbm.Categories;
import LSY.domain_hbm.City;
import LSY.domain_hbm.Country;
import LSY.domain_hbm.Products;
import LSY.web_filter.HibernateLazyloadingFilter;

@Controller
public class HibernateLazyHome {
	@RequestMapping(value="/Hiber/HibernateLazyHome.spring",method=RequestMethod.GET)
	public ModelAndView Index(){
		ModelAndView mv=new ModelAndView();
		String cname="";
    	String ename="";
		try {
			//測試以一般 Jdbc access MySql 
			InputStream stream=this.getClass().getClassLoader().getResourceAsStream("/ConfigData.properties");
			Properties properties=new Properties();
			properties.load(stream);
			String driverName=properties.getProperty("mysqlDriverName");
			String urlName=properties.getProperty("mysqlUrl_localhost");
			String userName=properties.getProperty("mysqlUserName_localhost");
			String password=properties.getProperty("mysqlPassword_localhost");	
			Class.forName(driverName);	
			String url=String.format("%s?user=%s&password=%s", urlName,userName,password);
			Connection conn=DriverManager.getConnection(url);
			String sql="select * from country where cty_code = ?";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setString(1, "AE");
	    	ResultSet result = stmt.executeQuery(); 	    	
	    	while(result.next()){
	    		cname=result.getString("CTY_CNAME");
	    		ename=result.getString("CTY_ENAME");
	    	}
			
		} catch (Exception e) {			
			throw new RuntimeException(e);
		}
		mv.addObject("result","cname="+cname+", ename="+ename);
		mv.addObject("initHome","initHome");		
		mv.setViewName("HibernateLazyHome");
		return mv;
	}
	//====================================================================================================
	@RequestMapping(value="/Hiber/HibernateProduct1.spring",method=RequestMethod.GET)
	public String Product1(Model model){
		Categories c1=new Categories();
		Products p1=new Products();
		Products p2=new Products();
		c1.setCategoryId("Q5");
		c1.setCategoryName("類別名稱-Q5");
		p1.setProductId("Q5P01");
		p1.setProductName("產品名稱-Q5P01");
		p1.setProductDesc("產品規格說明-Q5P01");
		p1.setPrice(760.1);
		p1.setOnlineDate(new Date());
		p1.setSupplierId("S01");
		p2.setProductId("Q5P02");
		p2.setProductName("產品名稱-Q5P02");
		p2.setProductDesc("產品規格說明-Q5P02");
		p2.setPrice(158.50);
		p2.setOnlineDate(new Date());
		p2.setSupplierId("S02");
		//關聯起來====================================================
		p1.setCategories(c1);
		p2.setCategories(c1);
		//==========================================================-
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		
		try{
			//若categories再products後才save，則hibernate會再發出2個sql update products之categories欄位
			//但因一般productid的categories係參考到categories的categoryId(pk)，所以必須先新增categories，否則會拋異常
			session.save(c1);
			session.save(p1);
			session.save(p2);			
			tx.commit();
		}catch(ConstraintViolationException e){
			String e1=e.getMessage();		
			String e2=e.getSQLException().toString();
			model.addAttribute("constrainError", "e1="+e1+ ",  e2="+e2);
		}
				
		model.addAttribute("result", "Product1 Method");
		//model.addAttribute("Country",country);
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateProductQuery1.spring",method=RequestMethod.GET)
	public String ProductQuery1(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();
		Categories c1=(Categories) session.load(Categories.class, "Q2");	
		Products p1=(Products) session.load(Products.class, "Q2P01");
		tx.commit();		
		model.addAttribute("result", "Product1 Method");
		model.addAttribute("Categories",c1.toString());
		model.addAttribute("Products",p1.toString());
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateRemoveRelation_Prod.spring",method=RequestMethod.GET)
	public String RemoveRelation_Prod(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		//==解除關聯，從Products方。前提是Products table內的categoryId為允許null ===
		//此方法當已被設為null後再執行，會正確但Hibernate不會發出sql
		Products p1=(Products) session.load(Products.class, "Q4P03");
		p1.setCategories(null);
		//===============================================================		
		tx.commit();		
		model.addAttribute("result", "RemoveRelation_Prod method");		
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateRemoveRelation_Cate.spring",method=RequestMethod.GET)
	public String RemoveRelation_Cate(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		//==解除關聯，從Categories 方============================================
		//重點：此方法前提必須categories =>inverse="false"，否則不會exception，但Hibernate也不會發出update的sq;
		//(即表示categories可維護觀連關係~可設置或改變products table categoryId欄位的值)
		Categories c1=(Categories) session.load(Categories.class, "Q1");
		Products p1=(Products) session.load(Products.class, "Q1P01");
		Products p3=(Products) session.load(Products.class, "Q4P03");
		c1.getProductList().remove(p1);//解除一筆關連
		c1.getProductList().clear(); //全部解除關係
		//===============================================================		
		tx.commit();		
		model.addAttribute("result", "RemoveRelation_Cate method");		
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateAddRelation_Cate.spring",method=RequestMethod.GET)
	public String AddRelation_Cate(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		//==加入關聯，從Categories 方============================================
		//重點：此方法前提必須categories =>inverse="false"，否則不會exception，但Hibernate也不會發出update的sq;
		//(即表示categories可維護觀連關係~可設置或改變products table categoryId欄位的值)
		Categories c4=(Categories) session.load(Categories.class, "Q4");		
		Products p3=(Products) session.load(Products.class, "Q4P03");
		c4.getProductList().add(p3);//將比筆Products "Q4P03" 加入 "Q4" 關連
		//===============================================================		
		tx.commit();		
		model.addAttribute("result", "AddRelation_Cate method");		
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateChangeRelation_Cate.spring",method=RequestMethod.GET)
	public String ChangeRelation_Cate(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		//==change關聯，從Categories 方============================================
		//重點：此方法前提必須categories =>inverse="false"，否則不會exception，但Hibernate也不會發出update的sq;
		//(即表示categories可維護觀連關係~可設置或改變products table categoryId欄位的值)
		Categories c1=(Categories) session.load(Categories.class, "Q1");		
		Products p3=(Products) session.load(Products.class, "Q4P03");
		c1.getProductList().add(p3);//將比筆Products "Q4P03" 直接加入 "Q1"即可(原為Q4) 
		//===============================================================		
		tx.commit();		
		model.addAttribute("result", "ChangeRelation_Cate method");		
		return "HibernateLazyHome";
	}	
	@RequestMapping(value="/Hiber/HibernateChangeRelation_Prod.spring",method=RequestMethod.GET)
	public String ChangeRelation_Prod(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		//==change關聯，從Products 方============================================	
		Products p3=(Products) session.load(Products.class, "Q4P03");
		Categories c1=(Categories) session.load(Categories.class, "Q1");		
		p3.setCategories(c1);;//設置此筆Products "Q4P03"之categories屬性 
		//===============================================================		
		tx.commit();		
		model.addAttribute("result", "ChangeRelation_Prod method");		
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateDeleteCategories_Inverse_True.spring",method=RequestMethod.GET)
	public String HibernateDeleteCategories_Inverse_True(Model model){		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		//==delete categories 
		//情境1：該項下仍有關聯的Products + Categories inverse=true(不能維護)======
		//由於不能維護，所以當categories值接被刪除後，就會造成後續關連的異常(???)
		//情境2：項下仍有關連的Products資料 +  inverse=false：先update Produtes的CategoryId為null，再刪除掉我方Categories資料
		//以上情境1、2係指資料庫未設定關連時，當資料庫已設定關連，則依從資料庫設定，只要項下有資料，就發生ConstraintViolationException
		try{
			Categories c5=(Categories) session.load(Categories.class, "Q5");		
			session.delete(c5);				
			tx.commit();
		}catch(ConstraintViolationException e){
			int code=e.getSQLException().getErrorCode();
			if(code == 1451){
				model.addAttribute("constrainError","尚有產品之類別屬於此產品類別項下，無法刪除!");
			}
			else{
				model.addAttribute("constrainError","錯誤碼："+ e.getSQLException().getErrorCode()+"。訊息："+e.getSQLException().toString());
			}			
		}
		//===============================================================			
		model.addAttribute("result", "HibernateDeleteCategories_Inverse_True method");		
		return "HibernateLazyHome";
	}
	//==== cascade =================================================================================
	@RequestMapping(value="/Hiber/HibernateCascade_save-update_Cate.spring",method=RequestMethod.GET)
	public String Cascade_saveUpdate_Cate(Model model){
		String prefixQ="Q6";
		String prod="";		
		Products p;
		Categories c1=new Categories();	
		c1.setCategoryId(prefixQ);
		c1.setCategoryName("類別名稱"+prefixQ);
		c1.setProductList(new HashSet<Products>());
		for(int i=1;i<10;i++){
			prod=prefixQ+"P0"+Integer.toString(i);
			p=new Products();
			p.setProductId(prod);
			p.setProductName("產品名稱-"+prod);
			p.setProductDesc("產品規格說明-"+prod);
			Double dd=(Math.ceil(Math.random() * 80000)+ 3000) / 100 ;
			p.setPrice(dd);
			p.setOnlineDate(new Date());
			p.setSupplierId("S01");
			//p.setCategories(c1);
			c1.getProductList().add(p);
		}		
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();
		try{			
			session.save(c1);			
			tx.commit();
		}catch(ConstraintViolationException e){
			String e1=e.getMessage();		
			String e2=e.getSQLException().toString();
			model.addAttribute("constrainError", "e1="+e1+ ",  e2="+e2);
		}				
		model.addAttribute("result", "Cascade_saveUpdate Method");		
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateCascade_save-update_Prod.spring",method=RequestMethod.GET)
	public String Cascade_saveUpdate_Prod(Model model){
		String prefixQ="Q6";
		String prod="";		
		Products p;
		Categories c1=new Categories();	
		c1.setCategoryId(prefixQ);
		c1.setCategoryName("類別名稱"+prefixQ);
		//c1.setProductList(new HashSet<Products>());
		try{
			Session session=HibernateLazyloadingFilter.GetSession();
			Transaction tx=session.beginTransaction();		
			for(int i=1;i<4;i++){
				prod=prefixQ+"P0"+Integer.toString(i);
				p=new Products();
				p.setProductId(prod);
				p.setProductName("產品名稱-"+prod);
				p.setProductDesc("產品規格說明-"+prod);
				Double dd=(Math.ceil(Math.random() * 50000)+ 1000) / 1000 ;
				p.setPrice(dd);
				p.setOnlineDate(new Date());
				p.setSupplierId("S01");
				p.setCategories(c1);
				//c1.getProductList().add(p);
				session.save(p);	
			}	
			tx.commit();
		}catch(ConstraintViolationException e){
			String e1=e.getMessage();		
			String e2=e.getSQLException().toString();
			model.addAttribute("constrainError", "e1="+e1+ ",  e2="+e2);
		}				
		model.addAttribute("result", "Cascade_saveUpdate Method");		
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateQuery1.spring",method=RequestMethod.GET)
	public String Query1(Model model){
		//Country country1=(Country) session.get(Country.class, 177);
		//.load方法la係採用layze loading，故此方法值到jsp使用到country物件時才向db發出sql語法，此時因session已關閉，導致exception,
		//可採用：(1)Hibernate.initialize強制發sql(2)使用filter產出session(如本例)以便黨此servlet+jsp處理完(doFilter後)，再由filter關閉session
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();
		Country country=(Country) session.load(Country.class, 102);
		tx.commit();		
		model.addAttribute("result", "Get Method Return city count="+country.getCityList().size());
		model.addAttribute("Country",country);
		model.addAttribute("c1",new Date().toString());
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateQuery2.spring",method=RequestMethod.GET)
	public String Query2(Model model){
		Country country=new Country();
		country.setCty_Nbr(501);
		country.setCty_Cname("格林威治AB");
		country.setCty_Ename("GREENWICH AB");
		country.setCty_Code("ZUC");
		country.setRegion_Nbr(5);
		country.setCreateUser("88888");
		country.setCreateStamp(new Date());
		country.setModifyUser("88888");
		country.setModifyStamp(new Date());
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		session.save(country);
		tx.commit();		
		model.addAttribute("result", "Insert Method Return");
		model.addAttribute("Country",country);
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateQuery3.spring",method=RequestMethod.GET)
	public String Query3(Model model){
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();			
		Country country=(Country) session.load(Country.class, 30);	
		country.setCty_Cname(country.getCty_Cname()+"CD");
		country.setModifyUser("88888");
		country.setModifyStamp(new Date());
		tx.commit();		
		model.addAttribute("result", "Update Method Return");
		model.addAttribute("Country",country);
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateQuery4.spring",method=RequestMethod.GET)
	public String Query4(Model model){
		Session session=HibernateLazyloadingFilter.GetSession();
		Country country=null;
		try{
			Transaction tx=session.beginTransaction();			
			country=(Country) session.load(Country.class, 501);	
			session.delete(country);
			tx.commit();		
		}catch(ConstraintViolationException e){
			String msg=e.getMessage();		
			model.addAttribute("constrainError", "尚有City資料之國家代號為：501，無法刪除"+msg);
			
		}		
		model.addAttribute("result", "Delete Method Return");
		model.addAttribute("Country",country);
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateCity0.spring",method={RequestMethod.GET})
	public String City0(Model model){
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();
		City cityResult=(City)session.load(City.class, 435);
		
		tx.commit();		
		model.addAttribute("result","City0 method");
		model.addAttribute("City",cityResult);
		model.addAttribute("c1","city0 date:"+new Date().toString());
		return "HibernateLazyHome";
	}
	
	@RequestMapping(value="/Hiber/HibernateCity1.spring",method={RequestMethod.GET,RequestMethod.POST})
	public String City1(Model model,HttpServletRequest request){
		String reqAjax=request.getHeader("x-requested-with");
		if(reqAjax == null){
			System.out.println("@@@@@@@@ x-requested-with=null");
		}
		else{
			if(reqAjax.equals("XMLHttpRequest")){
				System.out.println("%%%%%% x-requested-with=XMLHttpRequest");
			}
		}
		String type=request.getMethod();
		model.addAttribute("result1","City1 method");		
		model.addAttribute("c1","city1 date:"+new Date().toString()+"     "+type);
		model.addAttribute("initHome","initHome1");
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateCity2.spring",method={RequestMethod.GET})
	public String City2(Model model,HttpServletRequest request){
		City city=new City();
		Country country=new Country();
		country.setCty_Nbr(501);
		city.setCity_Nbr(5601);
		city.setCountry(country);		
		city.setCity_Cname("格林5601城市");
		city.setCity_Ename("GREENWICH CITY 5601");
		city.setCity_Code("QKQ");
		city.setRegion_Nbr(5);
		city.setCreateUser("88888");
		city.setCreateStamp(new Date());
		city.setModifyUser("88888");
		city.setModifyStamp(new Date());
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();		
		session.save(city);
		tx.commit();		
		model.addAttribute("result", "Insert city Method");
		model.addAttribute("City",city);
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateCity11.spring",method={RequestMethod.GET,RequestMethod.POST})
	public String City11(Model model,HttpServletRequest request){
		String type=request.getMethod();
		model.addAttribute("result1","City1 method");		
		model.addAttribute("c1","city1 date:"+new Date().toString()+"     "+type);
		model.addAttribute("initHome","initHome1");
		return "HibernateLazyHome";
	}
	@RequestMapping(value="/Hiber/HibernateCity4.spring",method=RequestMethod.GET)
	public String City4(Model model){
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();			
		City city=(City) session.load(City.class, 5601);		
		session.delete(city);
		tx.commit();
		model.addAttribute("result", "Delete Method Return"); 
		model.addAttribute("City",city);
		return "HibernateLazyHome";
	}
}
