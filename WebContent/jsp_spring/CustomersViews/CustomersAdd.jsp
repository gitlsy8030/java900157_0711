<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<cust:EasyuiLayout title="商品類別新增">	
	<div id="searchContainer" class="content-fluid" style="heigth:50%;margin:5px;border:1px solid #ccc;"> 
		<form:form id="customerAddForm" commandName="customers1" action="${pageContext.request.contextPath}/Customers_AddSave.spring" method="post" style="padding:30px 30px;width:60%;">
			<div style="margin-top:20px;margin-right:20%;"> 
				<div style="width:120px;height:150px;border:1px solid #fff;float:right;">
				</div>
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="customerId" style="width:80px;text-align:right;">客戶編號</form:label>
				<form:input path="customerId"/>
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="customerName" style="width:80px;text-align:right;">客戶姓名</form:label>
				<form:input path="customerName"/>
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="customerType" style="width:80px;text-align:right;">客戶類別</form:label>
				<form:select path="customerType">
					<form:options items="${typeList}" itemValue="value" itemLabel="text"/>					
				</form:select>
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="gender" style="width:80px;text-align:right;">性別</form:label>
				<form:radiobutton path="gender" value="M"/>男
				<form:radiobutton path="gender" value="F"/>女
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="tel" style="width:80px;text-align:right;">電話</form:label>
				<form:input path="tel" />
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="addr" style="width:80px;text-align:right;">地址</form:label>
				<form:input path="addr" style="width:30em;"/>
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="email" style="width:80px;text-align:right;">email</form:label>
				<form:input path="email" style="width:30em;" />
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="birthDate" style="width:80px;text-align:right;">生日</form:label>
				<form:input class="easyui-datebox" path="birthDate" />
			</div>
			<div style="margin-bottom:20px"> 
				<form:label path="habit" style="width:80px;text-align:right;vertical-align:top;">嗜好</form:label>
				<form:textarea path="habit"  cols="55" rows="6" />
			</div>			
			<div style="margin-bottom:20px">  
				<a href="#" id="btnSave" class="easyui-linkbutton" data-options="iconCls:'icon-save'">儲存</a>				
			</div>	
		</form:form>
	</div> 
</cust:EasyuiLayout> 
<script type="text/javascript">
	$(function(){
		$('#btnSave').on('click',function(){
			$('#customerAddForm').submit();
		})		
	});
</script>	