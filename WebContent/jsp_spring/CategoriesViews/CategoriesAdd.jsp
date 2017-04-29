<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<cust:EasyuiLayout title="商品類別新增">	
	<div id="searchContainer" class="content-fluid" style="heigth:40%;margin:5px;border:1px solid #ccc;"> 
		<form:form id="categoriedForm" commandName="categories" action="${pageContext.request.contextPath}/Categories_AddSave.spring" method="post" style="padding:30px 50px;border-right: 1px solid #ccc">
			<form:label path="categoryId">商品類別代號</form:label>
			<form:input path="categoryId" /><br>
			<form:label path="categoryName">商品類別名稱</form:label>
			<form:input path="categoryName" />
			<input type="submit" value="儲存" />
		</form:form>
	</div> 
</cust:EasyuiLayout> 
<script type="text/javascript">
	$(function(){
			
	});
</script>	