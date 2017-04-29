<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2商品類別新增" bodyclass="spring_easyui">
	<div id="searchContainer" class="content-fluid" style="heigth:25%;width:45%;margin:5px 5px 0 5px;border:1px solid #ccc;background-color:#f8f8f8"> 
		<h5 class="text-right" style="margin:5px 5px;">Struts2商品類別新增</h5>		
		<div class="S2Layout1">			
			<s2:form action="S2Categories_AddSave.action" method="post" namespace="/" >	
				<s2:fielderror />				
				<s2:textfield name="categories1.categoryId" label="商品類別編號" value="%{categories1.categoryId}"></s2:textfield>
				<s2:textfield name="categories1.categoryName" label="商品類別名稱" value="%{categories1.categoryName}"></s2:textfield>
				<td colspan="2" class="text-right">
					<s2:submit value="儲存" theme="simple" />					
					<input  id="btnBack" type="button" value="返回"/>
				<td>	
			</s2:form>			
		</div>
	</div>
	<s2:debug />
	<s2:hidden name="actionResult.success" value="%{actionResult.success}" />
	<s2:hidden name="actionResult.code" value="%{actionResult.code}" />
	<s2:hidden name="actionResult.message" value="%{actionResult.message}" />
</cust:EasyuiLayout>
<script type="text/javascript">
	$(function(){	
		
	});
</script>