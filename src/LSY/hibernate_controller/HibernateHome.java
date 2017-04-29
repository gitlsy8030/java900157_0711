package LSY.hibernate_controller;

import java.io.InputStream;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.Properties;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import LSY.domain_hbm.Country;

@Controller
public class HibernateHome {
	@RequestMapping(value="/HibernateHome.spring",method=RequestMethod.GET)
	public ModelAndView Index(){
		ModelAndView mv=new ModelAndView();
		String cname="";
    	String ename="";
		try {			
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
		mv.setViewName("HibernateHome");
		return mv;
	}
	@RequestMapping(value="/HibernateQuery1.spring",method=RequestMethod.GET)
	public String Query1(Model model){
		Configuration config=new Configuration().configure();
		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties()).buildServiceRegistry();
		SessionFactory sessionFectory=config.buildSessionFactory(serviceRegistry);		
		Session session=sessionFectory.openSession();	
		Transaction tx=session.beginTransaction();	
		//Country country1=(Country) session.get(Country.class, 177);
		//.load方法la係採用layze loading，故此方法值到jsp使用到country物件時才向db發出sql語法，此時因session已關閉，導致exception,
		//可採用Hibernate.initialize強制發sql
		Country country=(Country) session.load(Country.class, 177);
		System.out.println("before Hibernate.initialize");
		Hibernate.initialize(country);
		System.out.println("after Hibernate.initialize");
		session.close();
		model.addAttribute("result", "Get Method Return");
		model.addAttribute("Country",country);
		return "HibernateHome";
	}
	@RequestMapping(value="/HibernateQuery2.spring",method=RequestMethod.GET)
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
		Configuration config=new Configuration().configure();
		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties()).buildServiceRegistry();
		SessionFactory sessionFectory=config.buildSessionFactory(serviceRegistry);
		Session session=sessionFectory.openSession();
		Transaction tx=session.beginTransaction();		
		session.save(country);
		tx.commit();
		session.close();
		model.addAttribute("result", "Insert Method Return");
		model.addAttribute("Country",country);
		return "HibernateHome";
	}
	@RequestMapping(value="/HibernateQuery3.spring",method=RequestMethod.GET)
	public String Query3(Model model){
		Configuration config=new Configuration().configure();
		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties()).buildServiceRegistry();
		SessionFactory sessionFectory=config.buildSessionFactory(serviceRegistry);
		Session session=sessionFectory.openSession();
		Transaction tx=session.beginTransaction();
		Country country=(Country) session.load(Country.class, 30);	
		country.setCty_Cname(country.getCty_Cname()+"CD");
		country.setModifyUser("88888");
		country.setModifyStamp(new Date());
		tx.commit();
		session.close();
		model.addAttribute("result", "Update Method Return");
		model.addAttribute("Country",country);
		return "HibernateHome";
	}
	@RequestMapping(value="/HibernateQuery4.spring",method=RequestMethod.GET)
	public String Query4(Model model){
		Configuration config=new Configuration().configure();
		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties()).buildServiceRegistry();
		SessionFactory sessionFectory=config.buildSessionFactory(serviceRegistry);
		Session session=sessionFectory.openSession();
		Transaction tx=session.beginTransaction();
		Country country=(Country) session.load(Country.class, 501);	
		session.delete(country);
		tx.commit();
		session.close();
		model.addAttribute("result", "Delete Method Return");
		model.addAttribute("Country",country);
		return "HibernateHome";
	}
}
