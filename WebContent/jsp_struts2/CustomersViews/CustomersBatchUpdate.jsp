<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2商品&供應商BatchUpdate" bodyclass="spring_easyui">	
	<s2:form id="batchUpdateForm" action="S2Customers_UpdateSaveCustomers.action" method="post" theme="simple" namespace="/" >
		<div id="customerTableContainer" class="simpleGridContainer" 
			style="padding:5px;height:325px;width:100%;overflow:auto;border-bottom:1px solid #ccc;">		
			<table id="S2CustomerTable1" class="table table-bordered table-condensed table-striped table-hover" style="table-layout:fixed;">
				<thead>
					<tr><th colspan="10">客戶資料整批修改
						<s2:submit type="button" theme="simple" id="saveCustomers" value="客戶批次異動：提交"/>
						<s2:submit type="button" theme="simple" id="saveAll" value="客戶+供應商批次異動：提交"/>
					</th></tr>			
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
					<s2:iterator value="bindingData.customersList" id="item" status="st">
						<tr>
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].customerId"  value="%{#item.customerId}" style="width:98%"></s2:textfield>		
							</td>
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].customerName"  value="%{#item.customerName}" style="width:98%"></s2:textfield>		
							</td>
							<td>
								<s2:select name="bindingData.customersList[%{#st.index}].customerType" list="#{'V1':'VIP客戶','P1':'一般客戶','P2':'自來客','C1':'公司戶','C2':'經銷商'}"  
										listKey="key" listValue="value"
										value="%{#item.customerType}"></s2:select>	
							</td>
							<td>
								<s2:radio name="bindingData.customersList[%{#st.index}].gender" list="#{'M':'男','F':'女'}"  listKey="key" listValue="value"
										value="%{#item.gender}" emptyOption="true" label="性別" theme="simple"></s2:radio>		
							</td>
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].tel" value="%{#item.tel}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].addr"   value="%{#item.addr}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].email"   value="%{#item.email}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].birthDate"  value="%{#item.birthDate}" style="width:98%"></s2:textfield>		
							</td>							
							<td>
								<s2:textfield name="bindingData.customersList[%{#st.index}].totalAmount"   value="%{#item.totalAmount}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textarea name="bindingData.customersList[%{#st.index}].habit" cols="20" rows="3" value="%{#item.habit}" style="width:98%"></s2:textarea>	
							</td>										
						</tr>
					</s2:iterator>					
				</tbody>
			</table>
		</div>
		<div id="supplierTableContainer" class="simpleGridContainer" 
			style="margin-top:10px;padding:5px;height:325px;width:85%;overflow:auto;border-bottom:1px solid #ccc;">		
			<table id="S2SupplierTable1" class="table table-bordered table-condensed table-striped table-hover" style="table-layout:fixed;">
				<thead>
					<tr><th colspan="10">供應商資料整批修改
						<s2:submit type="button" theme="simple" id="saveSuppliers" value="供應商批次異動：提交"/>
					</th></tr>			
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
					<s2:iterator value="bindingData.suppliersList"  status="st">
						<tr>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].supplierId"  value="%{supplierId}" style="width:98%"></s2:textfield>		
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].supplierName"  value="%{supplierName}" style="width:98%"></s2:textfield>		
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].contactName"  value="%{contactName}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].contactTel"  value="%{contactTel}" style="width:98%"></s2:textfield>	
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].contactAddr"  value="%{contactAddr}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].contractDate"  value="%{contractDate}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].uniformNo"  value="%{uniformNo}" style="width:98%"></s2:textfield>
							</td>
							<td>
								<s2:textfield name="bindingData.suppliersList[%{#st.index}].creditLine"  value="%{creditLine}" style="width:98%"></s2:textfield>		
							</td>								
						</tr>
					</s2:iterator>					
				</tbody>
			</table>
		</div>
 	</s2:form>		 
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
		$('#saveCustomers,#saveSuppliers,#saveAll').on('click',function(){
			//$('#saveType').val($(this).attr('id'));	
			if($(this).attr('id') == 'saveCustomers'){
				$('#batchUpdateForm').attr('action','/LSYMain/S2Customers_UpdateSaveCustomers.action')
			}
			else if($(this).attr('id') == 'saveSuppliers'){
				$('#batchUpdateForm').attr('action','/LSYMain/S2Customers_UpdateSaveSuppliers.action')
			}
			else{
				$('#batchUpdateForm').attr('action','/LSYMain/S2Customers_UpdateSaveAll.action')
			}
			$('#batchUpdateForm').submit();
		});			

	});
</script>