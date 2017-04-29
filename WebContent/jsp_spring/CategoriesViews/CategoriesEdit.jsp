<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<cust:EasyuiLayout title="商品類別修改">
	<div id="searchContainer" class="content-fluid" style="heigth:40%;margin:5px;border:1px solid #ccc;"> 
		<form:form id="categoriedForm" commandName="categories2" style="padding:30px 50px;border-right: 1px solid #ccc"
				action="${pageContext.request.contextPath}/Categories_EditSave.spring" method="post" >
			<div style="margin-bottom:20px">  
				<!-- <form:label path="categoryId">商品類別代號</form:label> -->
				<form:input cssClass="easyui-textbox"  style="width:20%" path="categoryId" 
					data-options="readonly:true,label:'商品類別代號&nbsp',labelWidth:80,labelAlign:'right'"/>
			</div>
			<!-- <form:label path="categoryName">商品類別名稱</form:label> -->
			<div style="margin-bottom:20px">   
				<form:input class="easyui-textbox" style="width:40%" path="categoryName" 
					data-options="label:'商品類別名稱&nbsp',labelWidth:80,labelAlign:'right',required:true,validType:'minLength[3]'"/>
			</div>
			<div style="margin-bottom:20px">  
				<a href="#" id="btnSave" class="easyui-linkbutton" data-options="iconCls:'icon-save'">儲存</a>
				<a href="${pageContext.request.contextPath}/Categories_List.spring" class="easyui-linkbutton" data-options="iconCls:'icon-back'">返回</a>
			</div>			
		</form:form>
	</div> 
</cust:EasyuiLayout> 
<script type="text/javascript">
	$(function(){
		$('#btnSave').on('click',function(){
			$('#categoriedForm').submit();
		})	
	});
</script>	