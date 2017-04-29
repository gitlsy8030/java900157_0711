<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<cust:EasyuiLayout title="Hibernate主畫面">
	<div class="easyui-accordion" style="width:100%;height:95%;">
	    <div title="Hibernate MySQL查詢連結" data-options="iconCls:'icon-search',collapsed:false,collapsible:false" style="padding:10px;">
	     	<div style="padding:5px 0;">
			     <a href="/LSYMain/HibernateQuery1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'large',iconAlign:'left'">Get-175</a>
			     <a href="/LSYMain/HibernateQuery2.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'left'">Insert-501</a>
			     <a href="/LSYMain/HibernateQuery3.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'left'">Update-30</a>
			     <a href="/LSYMain/HibernateQuery4.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'left'">Delete-501</a>
			 </div> 
	    </div>
	    <div title="Hibernate MySQL查詢結果集" data-options="selected:true" style="padding:10px;">
	       <div>${result}</div>
	       <div>CTY_CNAME=${Country.cty_Cname},CTY_ENAME=${Country.cty_Ename}</div>
	    </div>
	      
	</div>
</cust:EasyuiLayout>
<script type="text/javascript">
$(function(){
		
});
</script>