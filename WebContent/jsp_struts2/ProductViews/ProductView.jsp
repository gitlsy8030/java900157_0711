<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2產品檢視" bodyclass="spring_easyui">
	<div id="searchContainer" class="content-fluid" style="heigth:25%;width:45%;margin:5px 5px 0 5px;border:1px solid #ccc;background-color:#f8f8f8"> 
		<h5 class="text-right" style="margin:5px 5px;">Struts2產品檢視</h5>
		<div class="S2Layout1">
			<s2:form action="S2Product_ProductEditSave.action" method="post" namespace="/" >
				<s2:textfield name="products1.productId" label="商品編號" value="%{products1.productId}"></s2:textfield>
				<s2:textfield name="products1.productName" label="商品名稱" value="%{products1.productName}"></s2:textfield>
				<s2:textarea name="products1.productDesc" label="商品規格" cols="35" rows="5" value="%{products1.productDesc}"></s2:textarea>
				
				<s2:select name="products1.categoryId" list="categoriesDDL" listKey="categoryId" listValue="categoryName" 
							value="%{products1.categoryId}" label="商品類別"></s2:select>	
				<s2:select name="products1.supplierId" list="suppliersDDL" listKey="supplierId" listValue="supplierName"
							value="%{products1.supplierId}" lebel="供應商"> </s2:select>
				<s2:textfield name="products1.price" label="價格" value="%{products1.price}" style="width:45%;"></s2:textfield>	
				<s2:textfield name="products1.onlineDate" label="上架日期" value="%{products1.onlineDate}"></s2:textfield>	
				<td colspan="2" class="text-right">									
					<input  id="btnBack" type="button" value="返回"/>
					<input  id="btnAdd" type="button" value="新增"/>
				<td>	
			</s2:form>
			
		</div>
	</div>
</cust:EasyuiLayout>
<script type="text/javascript">
	$(function(){	
		$('#btnBack').on('click',function(){			
			location.href="/LSYMain/S2Product.action";			
		});
		$('#btnAdd').on('click',function(){			
			location.href="/LSYMain/S2Product_ProductAdd.action";			
		});
	});
</script>