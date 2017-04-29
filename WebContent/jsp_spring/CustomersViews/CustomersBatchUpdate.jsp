<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<cust:EasyuiLayout title="客戶/供應商批次修改">
	<div class="easyui-panel" style="padding:3px;background-color:#f5f5f5;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;">                
        <a href="#" id="saveCustomers" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-save'">客戶批次修改送出</a>
        <a href="#" id="saveAll" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-save'">客戶+供應商批次送出</a>        
    </div>
    <form id="batchUpdateForm"	style=""	
				action="${pageContext.request.contextPath}/Customers_BatchUpdateSave.spring" method="post">	
	<div id="customersTableContainer" class="simpleGridContainer" 
			style="padding:5px;height:300px;overflow:auto;border-bottom:1px solid #ccc;">
			<table id="customersTable" class="table table-bordered table-condensed table-hover" style="">
				<thead>
					<tr><th colspan="5">客戶資料修改</th></tr>			
					<tr>
						<th style="width:60px;">客戶編號</th>
						<th style="width:90px;">客戶名稱</th>
						<th style="width:90px;">客戶類別</th>
						<th style="width:50px;">性別</th>
						<th style="width:100px;">電話</th>
						<th style="width:230px;">地址</th>
						<th style="width:130px;">email</th>
						<th style="width:100px;">生日</th>
						<th style="width:70px;">總消費</th>
						<th style="width:190px;">嗜好</th>					
					</tr>				
				</thead>						
				<tbody>			
					<c:forEach var="list" items="${modelBindingObject.customersList }" varStatus="curr">
						<tr>
							<td><input type="text" name="customersList[${curr.index }].customerId" value="${list.customerId }" style="width:90%;"/></td>
							<td><input type="text" name="customersList[${curr.index }].customerName" value="${list.customerName }" style="width:90%;" /></td>
							<td><input type="text" name="customersList[${curr.index }].customerType" value="${list.customerType }"  style="width:100px;"/></td>
							<td><input type="text" name="customersList[${curr.index }].gender" value="${list.gender }" style="width:60px;" /></td>
							<td><input type="text" name="customersList[${curr.index }].tel" value="${list.tel }"  style="width:95%;"/></td>
							<td><input type="text" name="customersList[${curr.index }].addr" value="${list.addr }" style="width:98%;"/></td>
							<td><input type="text" name="customersList[${curr.index }].email" value="${list.email }"  style="width:98%;"/></td>
							<td><input type="text" name="customersList[${curr.index }].birthDate" value="${list.birthDate }" class="easyui-datebox" style="width:90px;"/></td>
							<td><input type="text" name="customersList[${curr.index }].totalAmount" value="${list.totalAmount }" style="width:90%;" /></td>							
							<td><textarea cols="30" rows="3" name="customersList[${curr.index }].habit" style="width:98%;" >${list.habit }</textarea></td>
						</tr>						
					</c:forEach>				
				</tbody>				
			</table>			
 	</div><hr style="margin:8px 0;border-top-color:#aaa;"> 
 	<div class="easyui-panel" style="padding:3px;background-color:#f5f5f5;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;"> 
        <a href="#" id="saveSuppliers" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-save'">供應商批次修改送出</a>  
    </div>
	<div id="suppliersTableContainer" class="simpleGridContainer" 
			style="padding:5px;width:85%;height:280px;overflow:auto;border-bottom:1px solid #ccc;">			
			<table id="suppliersTable" class="table table-bordered table-condensed table-hover" style="">
				<thead>	
					<tr><th colspan="5">供應商資料修改</th></tr>			
					<tr>
						<th style="width:80px;">供應商編號</th>
						<th style="width:200px;">供應商名稱</th>
						<th style="width:90px;">聯絡人</th>						
						<th style="width:100px;">電話</th>
						<th style="width:200px;">地址</th>
						<th style="width:90px;">簽約日</th>	
						<th style="width:90px;">統編</th>							
						<th style="width:100px;">信用額度</th>									
					</tr>				
				</thead>						
				<tbody>			
					<c:forEach var="list" items="${modelBindingObject.suppliersList }" varStatus="curr">
						<!-- 
						${list.creditLine }#
						 -->
						<tr>
							<td><input type="text" name="suppliersList[${curr.index }].supplierId" readonly="readonly"  value="${list.supplierId }" style="width:90%;"/></td>
							<td><input type="text" name="suppliersList[${curr.index }].supplierName" value="${list.supplierName }" style="width:90%;" /></td>
							<td><input type="text" name="suppliersList[${curr.index }].contactName" value="${list.contactName }"  style="width:100px;"/></td>							
							<td><input type="text" name="suppliersList[${curr.index }].contactTel" value="${list.contactTel }"  style="width:95%;"/></td>
							<td><input type="text" name="suppliersList[${curr.index }].contactAddr" value="${list.contactAddr }" style="width:98%;"/></td>							
							<td><input type="text" name="suppliersList[${curr.index }].contractDate" value="${list.contractDate }" class="easyui-datebox" style="width:90px;"/></td>
							<td><input type="text" name="suppliersList[${curr.index }].uniformNo" value="${list.uniformNo }" style="width:90%;" /></td>
							<td><input type="text" name="suppliersList[${curr.index }].creditLine" value="${list.creditLine }" style="width:90%;" /></td>
						</tr>						
					</c:forEach>				
				</tbody>				
			</table>			
 	</div>	
 	</form>		
 	<input id="customerTypeDDL" type="hidden" value='${ customerTypeDDL }'>
 	<input id="genderDDL" type="hidden" value='${ genderDDL }'>
</cust:EasyuiLayout> 
<script type="text/javascript">
	$(function(){
		$('#saveCustomers,#saveSuppliers,#saveAll').on('click',function(){
			//$('#saveType').val($(this).attr('id'));	
			if($(this).attr('id') == 'saveCustomers'){
				$('#batchUpdateForm').attr('action','/LSYMain/Customers_BatchUpdateSave.spring')
			}
			else if($(this).attr('id') == 'saveSuppliers'){
				$('#batchUpdateForm').attr('action','/LSYMain/Suppliers_BatchUpdateSave.spring')
			}
			else{
				$('#batchUpdateForm').attr('action','/LSYMain/All_BatchUpdateSave.spring')
			}
			$('#batchUpdateForm').submit();
		});			
		var customerTypeDDL=JSON.parse($('#customerTypeDDL').val());
		var genderDDL=JSON.parse($('#genderDDL').val());
		$('#customersTable input[name$="\].customerType"]').combobox({
			valueField: 'value',
            textField: 'text',
            data:customerTypeDDL,
            formatter: function(row){
        		var opts = $(this).combobox('options');
        		return row[opts.valueField]+'-'+row[opts.textField];
        	}
		});
		$('#customersTable input[name$="\].gender"]').combobox({
			valueField: 'value',
            textField: 'text',
            data:genderDDL,
            formatter: function(row){
        		var opts = $(this).combobox('options');
        		return row[opts.valueField]+'-'+row[opts.textField];
        	}
		});
	});
</script>