package LSY.web_formbean;

import java.util.List;
import java.util.Map;
import java.util.AbstractMap.SimpleEntry;

public class FunMaintainForm {
	private Map<String,List<SimpleEntry<String,String>>> attachData;
	private String functionId;
	private String functionName;
	private String type;
	private String catalogId;
	private String seq;
	private String url;
	private String startDate;
	private String formType;
	public String getFunctionId() {
		return functionId;
	}
	public void setFunctionId(String functionId) {
		this.functionId = functionId;
	}
	public String getFunctionName() {
		return functionName;
	}
	public void setFunctionName(String functionName) {
		this.functionName = functionName;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCatalogId() {
		return catalogId;
	}
	public void setCatalogId(String catalogId) {
		this.catalogId = catalogId;
	}
	public String getSeq() {
		return seq;
	}
	public void setSeq(String seq) {
		this.seq = seq;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public Map<String, List<SimpleEntry<String, String>>> getAttachData() {
		return attachData;
	}
	public void setAttachData(Map<String, List<SimpleEntry<String, String>>> attachData) {
		this.attachData = attachData;
	}
	public String getFormType() {
		return formType;
	}
	public void setFormType(String formType) {
		this.formType = formType;
	}
}
