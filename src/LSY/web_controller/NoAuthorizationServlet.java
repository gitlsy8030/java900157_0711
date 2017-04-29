package LSY.web_controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import LSY.domain.LoginInfo;
import LSY.service_interface.ISimpleGridService;
import LSY.utils.FactoryUitls;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;
import LSY.web_formbean.OnSiteSearchForm;
import LSY.web_formbean.SimpleGrid;

@WebServlet("/NoAuthorizationServlet")
public class NoAuthorizationServlet extends BaseServlet {
	
	public void Index(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/jsp/NoAuthorization.jsp").forward(request, response);		
	}
}
