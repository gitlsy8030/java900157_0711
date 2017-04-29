<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout title="供應商新增"> 
<div id="searchContainer" class="content-fluid" style="heigth:25%;margin:5px;border:1px solid #ccc;">  
 	  <div class="easyui-panel" style="width:60%;">   
 	     <div class="easyui-panel" style="padding:3px;background-color:#f5f5f5;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;">
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-cancel'">清除</a>
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-reload'">重整</a>
	        <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'">搜尋</a>	           
	        <a href="#" id="btnSave" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-save'">儲存</a>
	        <a href="${pageContext.request.contextPath}/Suppliers_Index.spring" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-back'">返回</a>
	    	<span class="formDesc">供應商新增(驗證)</span>
	    </div>	   
	     <form id="suppliersForm" action="${pageContext.request.contextPath}/Suppliers_AddSave.spring" method="post" style="padding:30px 50px;border-right: 1px solid #ccc">
	         
	         <div style="margin-bottom:20px">       		
	             <input class="easyui-textbox" name="supplierId" style="width:50%" value="${suppliers.supplierId }"
	             data-options="label:'供應商編號&nbsp',labelWidth:80,labelAlign:'right',required:true">
	             <span style="color:red;">${springError['supplierId'] }</span>
	             <div style="margin-left:80px;">驗證設定：@Size(min=5,max=8)</div>	             
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="supplierName" style="width:70%"  value="${suppliers.supplierName }"
	             data-options="label:'供應商名稱&nbsp',labelWidth:80,labelAlign:'right'">
	             <span style="color:red;">${springError['supplierName']}</span>
	             <div style="margin-left:80px;">驗證設定：@NotNull</div>	 
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="contactName" style="width:50%" value="${suppliers.contactName }"
	             data-options="label:'聯絡人&nbsp',labelWidth:80,labelAlign:'right',required:true">
	             <span style="color:red;">${springError['contactName']}</span>
	             <div style="margin-left:80px;">驗證設定：@Size(min=2,max=10)</div>	 
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="contactTel" style="width:50%" value="${suppliers.contactTel }"
	             data-options="label:'電話&nbsp',labelWidth:80,labelAlign:'right'">
	             <span style="color:red;">${springError['contactTel']}</span>
	             <div style="margin-left:80px;">驗證設定：@Size(min=6,max=20)</div>	 
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="contactAddr" style="width:70%" value="${suppliers.contactAddr }"
	             data-options="label:'地址&nbsp',labelWidth:80,labelAlign:'right'">
	             <span style="color:red;">${springError['contactAddr']}</span>
	             <div style="margin-left:80px;">驗證設定：無</div>	 
	         </div>
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="uniformNo" style="width:50%" value="${suppliers.uniformNo }"
	             data-options="label:'統一編號&nbsp',labelWidth:80,labelAlign:'right'">
	             <span style="color:red;">${springError['uniformNo']}</span>
	             <div style="margin-left:80px;">驗證設定：@NotNull</div>	 
	         </div>
	         
	         <div style="margin-bottom:20px">
	             <input class="easyui-textbox" name="creditLine" style="width:50%" value="${suppliers.creditLine }"
	             data-options="label:'信用額度&nbsp',labelWidth:80,labelAlign:'right'">
	             <span style="color:red;">${springError['creditLine']}</span>
	             <div style="margin-left:80px;">驗證設定：@Range(min=100,max=3000)</div>	 
	         </div>
	         
	         <div style="margin-bottom:20px">
	         	<input name="contractDate" class="easyui-datebox" style="width:50%;" value="${ suppliers.contractDate}"
				 data-options="label:'簽約日期&nbsp',labelWidth:80,labelAlign:'right'">
				 <span style="color:red;">${springError['contractDate']}</span>
				 <div style="margin-left:80px;">驗證設定：@NotNull @Past</div>	 
					 		
	         </div>
	     </form>
	     
	 </div>
</div>
<input id="addMessage" type="hidden" value="${ addMessage }" />

</cust:EasyuiLayout>
<script>
	$(function(){
		$('#btnSave').on('click',function(){
			$.messager.confirm('LSYMain提示訊息','請確認是否新增 ！',function(yes){				
				if(yes){
					$('#suppliersForm').submit();
				}				
			}); 
		});	
		if($('#addMessage').val() != ''){
			$.messager.show({
                title:'LSYMain提示訊息',
                msg:$('#addMessage').val(),
                showType:'show',
                style:{
                    right:'',
                    bottom:''
                }
            });	
			$('#addMessage').val('');
		} 
	});
</script>