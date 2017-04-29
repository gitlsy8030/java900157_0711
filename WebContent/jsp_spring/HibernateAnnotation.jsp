<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<cust:EasyuiLayout title="Hibernate註釋">
	<h3>HibernateAnnotation.jsp</h3>
	<div class="easyui-accordion" style="width:100%;height:98%;">
	    <div title="Hibernate註釋" data-options="iconCls:'icon-search',collapsed:false,collapsible:false" style="height:60%;padding:10px;">
	     	<div style="padding:5px 0;">
			     <a href="/LSYMain/Hiber/Annotation_StaffQuery.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Staff-55</a>			    
			</div>	 
	    </div>
	</div>
	staff=${Staff }
	<input id="errorMessage" type="hidden" value="${constrainError}">
</cust:EasyuiLayout>
<script type="text/javascript">
//alert('now is LazyHome.jsp=>'+'${c1}');
$(function(){
	$('#btnSearch').on('click',function(e){
		alert('will submit');
		$('#citySearchForm').submit();
	});
	//alert('now is LazyHome.jsp=>'+'${c1}');	
	if($('#errorMessage').val() !=''){
		alert($('#errorMessage').val());
	}
	
});
</script>