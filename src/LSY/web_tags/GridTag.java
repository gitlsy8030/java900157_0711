package LSY.web_tags;

import java.io.IOException;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.AbstractMap.SimpleEntry;

import javax.servlet.ServletException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.Tag;
import javax.servlet.jsp.tagext.TagSupport;

import LSY.annotation.NamingAnnotation;
import LSY.web_formbean.SimpleGrid;

public class GridTag<T> extends TagSupport {
	private int colCount;	
	private String btn;	
	private String colIn;
	private String castValue;
	private String castValueAddCol;
	private SimpleGrid<T> gridBean;	
	private String gridName;
	private String pageBtnCount;
	private String key;
	public String getBtn() {
		return btn;
	}
	
	public void setBtn(String btn) {
		this.btn = btn;
	}
	public String getColIn() {
		return colIn;
	}
	public void setColIn(String colIn) {
		this.colIn = colIn;
	}	
	public SimpleGrid<T> getGridBean() {
		return gridBean;
	}

	public void setGridBean(SimpleGrid<T> gridBean) {
		this.gridBean = gridBean;
	}
	public int getColCount() {
		return colCount;
	}

	public void setColCount(int colCount) {
		this.colCount = colCount;
	}
	public String getCastValue() {
		return castValue;
	}
	public void setCastValue(String castValue) {
		this.castValue = castValue;
	}
	public String getCastValueAddCol() {
		return castValueAddCol;
	}

	public void setCastValueAddCol(String castValueAddCol) {
		this.castValueAddCol = castValueAddCol;
	}

	@Override
	public int doStartTag() throws JspException {
		JspWriter out = this.pageContext.getOut();		
		List<T> list=this.gridBean.getPageList();
		String className=this.gridBean.getClassName();
		String htmlTHead1="";
		String htmlTHead2="";
		String htmlTBody="";
		String htmlFooter="";
		String tableClass="table table-striped table-bordered table-hover table-condensed";
		String tableStyle="margin-bottom:0;";	
		String tableStr="";
		String iconTd=GetIconTd();
		Class clazz;
		try {			
			clazz = Class.forName(className);
			htmlTHead2=GetGridHeader2(clazz,iconTd);
			htmlTHead1=GetGridHeader1();
			htmlTBody=GetGridBody(list,iconTd);
			tableStr=String.format("<table id=\"%s\" class=\"%s\" style=\"%s\"><thead>%s %s</thead><tbody>%s</tbody>",
					this.gridName,tableClass,tableStyle,htmlTHead1,htmlTHead2,htmlTBody);
			out.print(tableStr);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return Tag.EVAL_BODY_INCLUDE;
	}
	
	@Override
	public int doEndTag() throws JspException {
		JspWriter out = this.pageContext.getOut();		
		try {
			String footer=String.format("<tfoot><tr><td colspan=\"%d\" class=\"text-left\">",colCount);
			out.print(footer);	
			System.out.println("this gridName="+this.gridName);
			pageContext.include("/jsp/GridPagination.jsp?gridName="+this.gridName+"&pageBtnCount="+this.pageBtnCount);			
			out.print("</td></tr></tfoot></table>");
		} catch (ServletException | IOException e) {
			throw new RuntimeException(e);
		}
		return super.doEndTag();
	}
	private String GetGridHeader1(){			
		String cntStr=String.format("第%d~%d筆/共%d筆    ",
				this.gridBean.getRowStart()+1,this.gridBean.getRowEnd()+1,this.gridBean.getTotalCount());
		String pageStr=String.format("[第%d頁/共%d頁]",
				this.gridBean.getCurrentPage(),this.gridBean.getTotalPage());
		String htmlTr=String.format("<tr><th colspan=\"%d\" class=\"text-left\">%s%s</th></tr>",
				this.colCount,cntStr,pageStr);
		return htmlTr;
	}
	private String GetGridHeader2(Class<T> type,String iconTd){
		int colCount=0;		
		String htmlTr="<tr>";
		if(!iconTd.equals("")){
			colCount +=1;
			htmlTr +="<th>選擇</th>";
		}
		String includeColStr=(this.colIn == null)? "":this.colIn.trim();		
		Field [] fields=type.getDeclaredFields();		
		for(Field field : fields){
			String fieldName=field.getName();
			NamingAnnotation anno=field.getAnnotation(NamingAnnotation.class);
			String fieldDesc=(anno == null)? "":anno.FieldDesc();
			if(includeColStr.contains(fieldName) || includeColStr.equals("")){
				String colHeadName=(fieldDesc == null || fieldDesc.equals(""))? fieldName:fieldDesc;
				htmlTr +="<th>"+colHeadName+"</th>";
				colCount +=1;
				String addHeader=AddCastValueHeader(fieldName);
				if(addHeader != null){
					htmlTr +="<th>"+addHeader+"</th>";
					colCount +=1;
				}
			}
		}
		htmlTr +="<td style=\"display:none;\"></td></tr>";
		this.colCount=colCount;
		return htmlTr;
	}
	private String AddCastValueHeader(String fieldName){
		String castValueAddCol=(this.castValueAddCol == null)? "":this.castValueAddCol.trim();
		if(!castValueAddCol.contains(fieldName)){
			return null;
		}
		String result=null;
		String [] colArray=this.castValueAddCol.split(",");
		for(int i=0;i< colArray.length;i++){
			String name=colArray[i].split("=")[0].trim();
			String val=colArray[i].split("=")[1].trim();
			if(name.equals(fieldName)){
				result=val;
				break;
			}
		}		
		return result;
	}
	private String GetGridBody(List<T> list,String iconTd){		
		int colCount=0;
		String tbody="";
		String includeColStr=(this.colIn == null)? "":this.colIn.trim();
		String keyColStr=(this.key == null)? "":this.key.trim();		
		tbody ="";
		for(T item :list){
			String keyValue="<td class=\"rowKey\" style=\"display:none;\">";
			tbody +="<tr>"+iconTd;
			Class type=item.getClass();
			Field [] fields=type.getDeclaredFields();			
			for(Field field : fields){
				String fieldName=field.getName();
				String fieldType=field.getType().getSimpleName();
				field.setAccessible(true);
				Object fieldValue;
				try {
					fieldValue = field.get(item);
				} catch (Exception e) {					
					throw new RuntimeException(e); 
				}	
				String strValue="";				
				if(includeColStr.contains(fieldName) || includeColStr.equals("")){
					tbody +="<td>";
					switch(fieldType){
						case "Date":
							strValue=(fieldValue == null) ? "":
								new SimpleDateFormat("yyyy/MM/dd").format(fieldValue);
							break;
						case "String": 							
							strValue=GetCastValue(fieldValue,fieldName);							
							break;
						case "Integer":
							strValue=(fieldValue == null) ? "":fieldValue.toString();
							break;						
					}
					tbody +=strValue.trim()+"</td>";	
					String addColValue=AddCastValueCol(fieldName,fieldValue);
					if(addColValue !=null){
						tbody +="<td>"+addColValue.trim()+"</td>";	
					}
				}
				if(keyColStr.contains(fieldName)){
					keyValue +="<span class=\""+"key_"+fieldName+"\">"+fieldValue.toString()+"</span>";
				}
			}
			tbody +=keyValue+"</td>"+"</tr>";
		}	
		return tbody;
	}
	private String GetIconTd(){
		String resultHtml="";
		String resultHtml_1="";
		String resultHtml_2="";
		String resultHtml_3="";
		String btnStr=(this.btn == null)? "":this.btn.trim();
		String [] btnArray=btnStr.split(",");	
		double baseWidth=3.5;
		double tdWidth=0;
		for(int i=0;i<btnArray.length;i++ ){
			String btnName=btnArray[i];	
			switch (btnName){
			case "view":
				resultHtml_2 +="<a iconType=\"view\" class=\"btn btn-default btn-sm gridIcon\" style=\"margin-right:0.2em;\" href=\"#\"><span class=\"glyphicon glyphicon-list\"></span></a>";
				tdWidth +=baseWidth;
				break;
			case "add":
				resultHtml_2 +="<a iconType=\"add\" class=\"btn btn-default btn-sm gridIcon\" style=\"margin-right:0.2em;\" href=\"#\"><span class=\"glyphicon glyphicon-plus\"></span></a>";
				tdWidth +=baseWidth;
				break;
			case "edit":
				resultHtml_2 +="<a iconType=\"edit\" class=\"btn btn-default btn-sm gridIcon\" style=\"margin-right:0.2em;\" href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span></a>";
				tdWidth +=baseWidth;
				break;
			case "remove":
				resultHtml_2 +="<a iconType=\"remove\" class=\"btn btn-default btn-sm gridIcon\" style=\"margin-right:0.2em;\" href=\"#\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
				tdWidth +=baseWidth;
				break;
			}
		}
		if(tdWidth > 0){
			String strWidth=Double.toString(tdWidth)+"em";
			resultHtml_1 =String.format("<td class=\"gridIcon\" style=\"width:%s;\">",strWidth);
			resultHtml_3 +="</td>";
			resultHtml=resultHtml_1+resultHtml_2+resultHtml_3;
		}		
		return resultHtml;
	}
	private String GetCastValue(Object fieldValue,String fieldName){		
		Map<String,List<SimpleEntry<String,String>>> attachData;
		String result="";		
		String castParam=this.getCastValue();
		if(castParam.contains(fieldName)){
			if(fieldValue == null){
				result="<span style=\"display:none;\"></span>";
				return result;
			}
			attachData=this.gridBean.getAttachData();
			List<SimpleEntry<String,String>> castList=attachData.get(fieldName);
			for(SimpleEntry<String,String> item : castList){
				if(item.getKey().equals(fieldValue.toString())){
					result=item.getValue()+"<span style=\"display:none;\">"+fieldValue.toString()+"</span>";
					return result;
				}				
			}			
			return "<span style=\"display:none;\"></span>";
		}
		else{
			if(fieldValue == null){
				result="";
				return result;
			}
			return fieldValue.toString();
		}		
	}
	private String AddCastValueCol(String fieldName,Object fieldValue){
		String castValueAddCol=(this.castValueAddCol == null)? "":this.castValueAddCol.trim();
		if(!castValueAddCol.contains(fieldName)){
			return null;
		}
		Map<String,List<SimpleEntry<String,String>>> attachData=this.gridBean.getAttachData();
		List<SimpleEntry<String,String>> castList=attachData.get(fieldName);
		String result=null;
		String [] colArray=this.castValueAddCol.split(",");
		for(int i=0;i< colArray.length;i++){
			String name=colArray[i].split("=")[0].trim();
			String val=colArray[i].split("=")[1].trim();			
			for(SimpleEntry<String,String> item : castList){
				if(item.getKey().equals(fieldValue.toString())){
					result=item.getValue()+"<span style=\"display:none;\">"+fieldValue.toString()+"</span>";
					return result;
				}				
			}
		}		
		return result;
	}

	public String getGridName() {
		return gridName;
	}

	public void setGridName(String gridName) {
		this.gridName = gridName;
	}

	public String getPageBtnCount() {
		return pageBtnCount;
	}

	public void setPageBtnCount(String pageBtnCount) {
		this.pageBtnCount = pageBtnCount;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}
}
