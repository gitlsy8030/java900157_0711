<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout> 
<div id="searchContainer" class="content-fluid" style="heigth:25%;margin:5px;border:1px solid #ccc;">  
	 <div class="easyui-panel" style="width:50%;">
	     <div class="easyui-panel" style="padding:3px;background-color:#f5f5f5;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;">
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-cancel'">清除</a>
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-reload'">重整</a>
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'">搜尋</a>
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-print'">列印</a>        
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-save'">儲存</a>
	        <a href="${pageContext.request.contextPath}/Product_Index.spring" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-back'">返回</a>
	    </div>
	     <form id="productForm" method="post" style="padding:30px 50px;border-right: 1px solid #ccc">
	         <div style="margin-bottom:20px">       		
	             <input class="easyui-textbox" name="productId" style="width:70%" value="${product.productId }"
	             data-options="label:'產品編號&nbsp',labelWidth:80,labelAlign:'right',required:true,validType:'minLength[3]'">
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="productName" style="width:70%"  value="${product.productName }"
	             data-options="label:'產品名稱&nbsp',labelWidth:80,labelAlign:'right',required:true">
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="productDesc" style="width:100%" value="${product.productDesc }"
	             data-options="label:'說明&nbsp',labelWidth:80,labelAlign:'right',required:true">
	         </div>
	         <div style="margin-bottom:20px">         	 
	             <input class="easyui-textbox" name="price" style="width:70%" value="${product.price }"
	             data-options="label:'價格&nbsp',labelWidth:80,labelAlign:'right',required:true,min:0,precision:2">
	         </div>
	         <div style="margin-bottom:20px">
	             <input id="categoryDDL" class="easyui-combobox" name="categoryId" style="width:70%;" value="${product.categoryId }" 
						data-options="
	                    valueField: 'categoryId',
	                    textField: 'categoryName',
	                    url:'Product_GetDDL.spring?ddlName=categories',
	                    label: '商品類別&nbsp',
	                    labelAlign: 'right',
	                    labelWidth:80
	                    " />
	         </div>
	         <div style="margin-bottom:20px">
	         	<input id="supplierDDL" class="easyui-combobox" name="supplierId" style="width:70%;" value="${product.supplierId }" 
						data-options="
	                    valueField: 'supplierId',
	                    textField: 'supplierName',
	                    url:'Product_GetDDL.spring?ddlName=suppliers',
	                    label: '供應商&nbsp',
	                    labelAlign: 'right',
	                    labelWidth:80
	                    " />
	         </div>
	     </form>
	     
	 </div>
</div> 
</cust:EasyuiLayout>