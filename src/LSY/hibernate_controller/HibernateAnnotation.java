package LSY.hibernate_controller;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import LSY.domain_hbm.Categories;
import LSY.domain_hbm.Products;
import LSY.domain_hbm.Staff;
import LSY.web_filter.HibernateLazyloadingFilter;

@Controller
public class HibernateAnnotation {
	@RequestMapping(value="/Hiber/AnnotationMapping.spring",method=RequestMethod.GET)
	public String Index(Model model){
		return "HibernateAnnotation";		
	}
	@RequestMapping(value="/Hiber/Annotation_StaffQuery.spring",method=RequestMethod.GET)
	public String StaffQuery(Model model){
		Session session=HibernateLazyloadingFilter.GetSession();
		Transaction tx=session.beginTransaction();
		Staff s1=(Staff) session.load(Staff.class, 55);			
		tx.commit();		
		model.addAttribute("result", "StaffQuery Method");
		model.addAttribute("Staff",s1.toString());	
		return "HibernateAnnotation";		
	}
}
