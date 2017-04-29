package LSY.web_tags;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import LSY.service_interface.ILoginInfoService;
import LSY.utils.FactoryUitls;
import LSY.utils.WebUtils;

public class LoginData extends TagSupport {
	private String type;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public int doStartTag() throws JspException {
		ILoginInfoService service=FactoryUitls.CreateLoginInfoService();
		String result;
		switch(type){
			case "userid":
				result=service.GetLoginUserId();
				break;
			case "username":
				result=service.GetLoginUnserName();
				break;
			case "ip":
				result=WebUtils.GetCurrentRequest().getLocalAddr()+"   "+WebUtils.GetCurrentRequest().getRemoteAddr();
				break;
			case "logintime":
				result=service.GetLoginTimeToString();
				break;
				default :
					result="";
				break;
					
		}			
		JspWriter out = this.pageContext.getOut();		
		try {
			out.print(result);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}		
		return super.doStartTag();
	}

}
