<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2產品維護Index" bodyclass="spring_easyui">
	<div id="searchContainer" class="content-fluid" style="heigth:25%;padding-top:1em;margin:5px 5px 0 5px;border:1px solid #ccc;background-color:#f8f8f8"> 
		<s2:form action="S2Product_SearchProduct.action" method="post" namespace="/LSY/" theme="simple"  calss="form-horizontal1">
			<div class="row">				
				<div class="col-lg-4 col-md-4">
					<div class="form-group" style="padding-bottom:2em;">
						<label class="col-lg-3 col-md-3 control-label">產品編號</label>
						<div class="col-lg-6 col-md-6">
							<s2:textfield name="productsSearch.productId" value="%{productsSearch.productId}"></s2:textfield>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group" style="padding-bottom:2em;">
						<label class="col-lg-3 col-md-3 control-label">產品名稱</label>
						<div class="col-lg-6 col-md-6">
							<s2:textfield name="productsSearch.productName" value="%{productsSearch.productName}"></s2:textfield>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group" style="padding-bottom:2em;">
						<label class="col-lg-3 col-md-3 control-label">產品類別</label>
						<div class="col-lg-6 col-md-6">        
							<s2:select name="productsSearch.categoryId" list="categoriesDDL" listKey="categoryId" listValue="categoryName"
										headerKey="" headerValue="請選擇" >
							</s2:select>								   
						</div>
					</div>
				</div>      		
			</div>
			<div class="row">				
				<div class="col-lg-4 col-md-4" style="padding-bottom:2em;">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">供應商</label>
						<div class="col-lg-6 col-md-6">
							<s2:select name="productsSearch.supplierId" list="suppliersDDL" listKey="supplierId" listValue="supplierName" 
										headerKey="" headerValue="請選擇" >
							</s2:select>
						</div>
					</div>
				</div>    
				<div class="col-lg-4 col-md-4">
					<div class="form-group" style="padding-bottom:2em;">
						<label class="col-lg-3 col-md-3 control-label">上架日期</label>
						<div class="col-lg-9 col-md-9">
						<input name="productsSearch.onlineDateStart" class="easyui-datebox" value="${productsSearch.onlineDateStart}" style="width:45%;">~
						<input name="productsSearch.onlineDateEnd" class="easyui-datebox" value="${productsSearch.onlineDateEnd}" style="width:45%;">
						<!-- 
							<s2x:datetimepicker name="onlineDateStart" displayFormat="yyyy/MM/dd" />~
							<s2x:datetimepicker name="onlineDateEnd" displayFormat="yyyy/MM/dd" />
					 	-->
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group" style="padding-bottom:2em;">
						<label class="col-lg-3 col-md-3 control-label">價格</label>
						<div class="col-lg-6 col-md-6">
							<s2:textfield name="productsSearch.priceMin" value="%{productsSearch.priceMin}" style="width:45%;"></s2:textfield>~
							<s2:textfield name="productsSearch.priceMax" value="%{productsSearch.priceMax}" style="width:45%;"></s2:textfield>
						</div>
					</div>
				</div>       		
			</div>
			<div class="row">				
				<div class="col-lg-1 col-md-1 col-lg-offset-10 col-lg-offset-10" >
					<div class="form-group">
						<s2:submit id="btnSearch" value="查詢"/>
					</div>
				</div>
			</div>    
		</s2:form>
	</div>
	<div id="productsTableContainer" class="simpleGridContainer" style="padding:5px;">
		<table id="S2ProductTable1" class="table table-bordered table-condensed table-striped table-hover">
			<thead>
				<tr>
					<td colspan="7">
						<s2:url action="S2Product_ProductAdd.action" var="addUrl"></s2:url>
						<s2:a href="%{addUrl}">新增</s2:a>
					</td>
					
				</tr>
				<tr>				
					<td>選擇</td>
					<td>商品編號</td>
					<td>商品名稱</td>
					<td>商品說明</td>
					<td>商品分類</td>
					<td>供應商</td>
					<td>上架日期</td>					
				</tr>
			</thead>
			<tbody>
				<s2:iterator value="list">
					<s2:set value="productId" var="idValue" /> 
					<s2:url action="S2Product_ProductView.action" var="viewUrl">
						<s2:param name="productId" ><s2:property value="%{idValue}"/></s2:param>
					</s2:url>
					<s2:url action="S2Product_ProductEdit.action" var="updateUrl">
						<s2:param name="productId" ><s2:property value="%{idValue}"/></s2:param>
					</s2:url>					
					<s2:url action="S2Product_ProductDeleteSave.action" var="deleteUrl">
						<s2:param name="productId" ><s2:property value="%{idValue}"/></s2:param>
					</s2:url>	
							
					<tr>
						<td>
							<s2:a href="%{viewUrl}" >檢視</s2:a>&nbsp
							<s2:a href="%{updateUrl}" >編輯</s2:a>&nbsp
							<s2:a class="btnRemove" removeUrl="%{deleteUrl}" href="#" >刪除</s2:a>
						</td>
						<td><s2:property value="productId" /></td>
						<td><s2:property value="productName" /></td>
						<td><s2:property value="productDesc" /></td>					
						<td><s2:property value="categoryId" /></td>
						<td><s2:property value="supplierId" /></td>
						<td><s2:property value="onlineDate" /></td>						
					</tr>
				</s2:iterator>
			</tbody>
		</table>		
 	</div> 
 	<s2:hidden name="actionResult.success" value="%{actionResult.success}" />
	<s2:hidden name="actionResult.code" value="%{actionResult.code}" />
	<s2:hidden name="actionResult.message" value="%{actionResult.message}" />
</cust:EasyuiLayout>
<script type="text/javascript">
	$(function(){	
		var success=$('input[name="actionResult.success"]').val();
		var code=$('input[name="actionResult.code"]').val();
		var message=$('input[name="actionResult.message"]').val();		
		if(message != ''){
			$.messager.show({
                title:'LSYMain提示訊息',
                msg:message,
                showType:'show',
                style:{
                    right:'',
                    bottom:''
                }
            });	
		}
    	$('#S2ProductTable1').find('a.btnRemove').on('click',function(e){
    		var href=$(this).attr('removeUrl');			    		
    		$.messager.confirm('LSYMain提示訊息','請確認是否刪除！',function(yes){				
				if(yes){
					$.ajax({
						url:href,	
						type:"get",
			            dataType:'json',
						async:true,
						success:function(jsonData){
							//alert(jsonData);
							Lsy.ajaxRedirectFilter(jsonData);							
							$.messager.show({
				                title:'LSYMain提示訊息',
				                msg:'商品編號：'+jsonData.actionResult.keyValue+' '+jsonData.actionResult.message,							                
				                style:{
				                    right:'',
				                    bottom:''
				                },
				                width:300,
				                height:140,
				                timeout:0,
				                onClose:function(){
				                	$('#btnSearch').trigger('click');
				                }
				            });	
						}
					});
				}				
			}); 
    	});
	});
</script>