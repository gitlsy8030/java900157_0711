package LSY.web_filter;

import java.io.IOException;
import java.net.HttpCookie;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import LSY.utils.WebUtils;

@WebFilter("/CurrentFilter")
public class CurrentContextFilter implements Filter {
	private ServletContext application;

    public CurrentContextFilter() {        
    }

	public void destroy() {		
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {		
		HttpServletRequest req=(HttpServletRequest)request;
		HttpServletResponse resp=(HttpServletResponse)response;
		String uri=req.getRequestURI();
		if(!uri.contains("/css/") && !uri.contains("/js/")){
			WebUtils.SetCurrentContext(application);
			WebUtils.SetCurrentRequest(req);
			WebUtils.SetCurrentResponse(resp);
			WebUtils.SetCurrentSession(req.getSession());
		}
		chain.doFilter(request, response);
	}

	public void init(FilterConfig filterConfig) throws ServletException {		
		application =filterConfig.getServletContext();
	}

}
