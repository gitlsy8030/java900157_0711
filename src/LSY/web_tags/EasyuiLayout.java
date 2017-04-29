package LSY.web_tags;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.Tag;
import javax.servlet.jsp.tagext.TagSupport;

import LSY.domain.FunctionInfo;
import LSY.utils.CommUtils;
import LSY.utils.NameUtils;
import LSY.utils.WebUtils;

public class EasyuiLayout extends TagSupport {
	private String bodyid;
	private String bodyname;
	private String bodyclass;
	private Boolean isPartialJsp;
	private String title;
	
	public String getTitle() {
		if(this.title == null){
			return "LSYMain網頁";
		}
		else{
			return title;
		}		
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBodyid() {
		return bodyid;
	}

	public void setBodyid(String bodyid) {
		this.bodyid = bodyid;
	}

	public String getBodyname() {
		return bodyname;
	}
	
	public void setBodyname(String bodyname) {
		this.bodyname = bodyname;
	}

	public String getBodyclass() {
		return bodyclass;
	}

	public void setBodyclass(String bodyclass) {
		this.bodyclass = bodyclass;
	}
	
	public Boolean getIsPartialJsp() {
		return isPartialJsp;
	}

	public void setIsPartialJsp(Boolean isPartialJsp) {
		this.isPartialJsp = isPartialJsp;
	}

	@Override
	public int doStartTag() throws JspException {
		HttpServletRequest request =(HttpServletRequest)this.pageContext.getRequest();
		JspWriter out = this.pageContext.getOut();		
		try {
			if(this.isPartialJsp == null || !this.isPartialJsp){
				List<FunctionInfo> functions=CommUtils.getFunctions();
				WebUtils.GetCurrentRequest().setAttribute(NameUtils.NavMenu, functions);
				WebUtils.GetCurrentRequest().setAttribute(NameUtils.PageHeaderTitle, this.getTitle());
				if(this.bodyid != null){
					request.setAttribute(NameUtils.LayoutBodyId, "id=\""+this.bodyid+"\"");
				}
				if(this.bodyclass != null){
					request.setAttribute(NameUtils.LayoutBodyClass, "class=\""+this.bodyclass+"\"");
				}
				pageContext.include("/jsp/HtmlHeaderEasyui.jsp");				
				pageContext.include("/jsp/HeaderEasyUI.jsp");			
			}
			
		} catch (ServletException | IOException e) {
			throw new RuntimeException(e);
		}		
		return Tag.EVAL_BODY_INCLUDE;
	}
	
	@Override
	public int doEndTag() throws JspException {
		HttpServletRequest request =(HttpServletRequest)this.pageContext.getRequest();
		JspWriter out = this.pageContext.getOut();		
		try {	
			if(this.isPartialJsp == null || !this.isPartialJsp){
				pageContext.include("/jsp/Footer.jsp");
			}			
		} catch (ServletException | IOException e) {
			throw new RuntimeException(e);
		}
		return super.doEndTag();
	}

}
