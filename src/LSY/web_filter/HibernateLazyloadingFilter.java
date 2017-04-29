package LSY.web_filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;

import LSY.domain_hbm.Staff;
import LSY.utils.WebUtils;

/**
 * Servlet Filter implementation class HibernateLazyloadingFilter
 */
@WebFilter("/HibernateLazyloadingFilter")
public class HibernateLazyloadingFilter implements Filter {
	private SessionFactory sessionFactory;
//	private SessionFactory annoSessionFactory;
	private FilterConfig config;
	public static ThreadLocal<Session> hbrSession=new ThreadLocal<Session>();
	public static Session GetSession(){
		return hbrSession.get();
	}
	public void init(FilterConfig fConfig) throws ServletException {
		this.config=fConfig;
		System.out.println("init of HibernateLazyloadingFilter");
		Configuration configuration=new Configuration().configure();		
		ServiceRegistry serviceRegistry=new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
		sessionFactory=configuration.buildSessionFactory(serviceRegistry);
		//====註釋類的Mapping必需此處加入=====================================
		AnnotationConfiguration annoConfig=new AnnotationConfiguration().configure();
		//configuration.addAnnotatedClass(Staff.class);
		//======================================================
	}	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		//chain.doFilter(request, response);
		String name=chain.getClass().getName();
		HttpServletRequest req=(HttpServletRequest)request;		
		String url=req.getRequestURI();
		System.out.println("doFilter of HibernateLazyloadingFilter-before  "+url);		
		Session session=null;
		Transaction tx=null;
		try{
			session=sessionFactory.openSession();
			hbrSession.set(session);
			//tx=session.beginTransaction();
			//tx=session.beginTransaction();
			chain.doFilter(request, response);
			  System.out.println("filter request result="+req.getAttribute("result"));
			    System.out.println("filter request result1="+req.getAttribute("result1"));
			    System.out.println("filter request c1="+req.getAttribute("c1"));
			    System.out.println("filter request c2="+req.getAttribute("c2"));
			//tx.commit();			
		}catch(Exception e){
			throw new RuntimeException(e);			
		}
		finally{			
			session.close();
		}				
		System.out.println("doFilter of HibernateLazyloadingFilter-after  "+url);	
		
	}
	public void destroy() {
		System.out.println("destroy of HibernateLazyloadingFilter");		
	}


}
