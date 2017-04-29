package LSY.domain;

import java.util.Date;

import LSY.annotation.NamingAnnotation;

public class FunctionInfo {	
	@NamingAnnotation(DBCol="FUNCTIONID",FieldDesc="功能編號")
	private String functionId;
	@NamingAnnotation(DBCol="FUNCTIONNAME",FieldDesc="功能名稱")
	private String functionName;
	@NamingAnnotation(DBCol="CATALOGID",FieldDesc="目錄編號")
	private String catalogId;
	@NamingAnnotation(DBCol="URL",FieldDesc="網址")
	private String url;
	@NamingAnnotation(DBCol="TYPE",FieldDesc="類別")
	private String type;
	@NamingAnnotation(DBCol="SEQ",FieldDesc="順序")
	private int	seq;
	@NamingAnnotation(DBCol="STARTDATE",FieldDesc="啟用日期")
	private Date startDate;
	
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}	
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
	public String getCatalogId() {
		return catalogId;
	}
	public void setCatalogId(String catalogId) {
		this.catalogId = catalogId;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	

}
