<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout>  
 <div class="easyui-panel" title="ProductForm" style="width:100%;max-width:400px;padding:30px 60px;">
     <form id="productForm" action="${pageContext.request.contextPath}/Product_Add.spring" method="post">
         <div style="margin-bottom:20px">       		
             <input class="easyui-textbox" name="productId" style="width:70%" 
             data-options="label:'產品編號&nbsp',labelWidth:80,labelAlign:'right',required:true,validType:'minLength[3]'">
         </div>
         <div style="margin-bottom:20px">
             <input class="easyui-textbox" name="productName" style="width:70%" 
             data-options="label:'產品名稱&nbsp',labelWidth:80,labelAlign:'right',required:true">
         </div>
         <div style="margin-bottom:20px">
             <input class="easyui-textbox" name="productDesc" style="width:100%" 
             data-options="label:'說明&nbsp',labelWidth:80,labelAlign:'right',required:true">
         </div>
         <div style="margin-bottom:20px">         	 
             <input class="easyui-textbox" name="price" style="width:70%" 
             data-options="label:'價格&nbsp',labelWidth:80,labelAlign:'right',required:true,min:0,precision:2">
         </div>
         <div style="margin-bottom:20px">
             <select class="easyui-combobox" name="catalog" label="商品類別&nbsp" labelWidth="80" labelAlign="right" style="width:70%">
	             <option value="1">3C產品</option>
	             <option value="2">書籍</option>
	             <option value="3">家電</option>
	             <option value="4">日常用品</option>
	             <option value="5">生鮮</option>
	             <option value="6" selected="selected">酒類</option>
             </select>
         </div>         
     </form>
     <div style="text-align:center;padding:5px 0">
         <a href="#" class="easyui-linkbutton" onclick="$('#productForm').submit()" style="width:80px">提交</a>
         <a href="#" class="easyui-linkbutton" onclick="clearForm()" style="width:80px">清除</a>
     </div>
 </div> 
</cust:EasyuiLayout>