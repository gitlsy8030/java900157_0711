<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2產品新增" bodyclass="spring_easyui">
	<div id="searchContainer" class="content-fluid" style="heigth:25%;width:45%;margin:5px 5px 0 5px;border:1px solid #ccc;background-color:#f8f8f8"> 
		<h5 class="text-right" style="margin:5px 5px;">Struts2產品新增</h5>
		<div class="S2Layout1">
			<s2:form action="S2Product_ProductAddSave.action" method="post" namespace="/" >
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
		$('#btnBack').on('click',function(){			
			location.href="/LSYMain/S2Product.action";			
		});
		var success=$('input[name="actionResult.success"]').val();
		var code=$('input[name="actionResult.code"]').val();
		var message=$('input[name="actionResult.message"]').val();
		var result='';
		if(code == undefined){	result +='code undefined,';	}
		else if(code === null ) {result +='code null,';}
		else if(code == ''){ result +='code space,';   }
		else{  result +='code=' + code+","; }
		if(success == undefined){	result +='success undefined,';	}
		else if(success === null ) {result +='success null,';}
		else if(success == ''){ result +='success space,';   }
		else if(success == true){ result +='success true,';   }
		else if(success == false){ result +='success false,';   }
		else{  result +='success=' + success+","; }
		//alert(result);
		
	});
</script>