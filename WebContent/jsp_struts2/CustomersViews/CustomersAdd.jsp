<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2客戶新增" bodyclass="spring_easyui">
	<div id="searchContainer" class="content-fluid" style="heigth:25%;width:45%;margin:5px 5px 0 5px;border:1px solid #ccc;background-color:#f8f8f8"> 
		<h5 class="text-right" style="margin:5px 5px;">Struts2客戶新增</h5>
		<div class="S2Layout1">
			<!-- 因此form的action中採用ModelDriven<T>模型封裝方式綁定上傳數據，因此名稱一律不可加customers1.customerId，需直接寫customerId即可	 -->
			<s2:form action="S2Customers_AddSave.action" method="post" namespace="/" >
				<s:fielderror />			
				<s2:textfield name="customerId" label="客戶編號" value="%{customerId}"></s2:textfield>				
				<s2:textfield name="customerName" label="客戶姓名" value="%{customerName}"></s2:textfield>				
				<s2:select name="customerType" list="#{'V1':'VIP客戶','P1':'一般客戶','P2':'自來客','C1':'公司戶','C2':'經銷商'}"  
							listKey="key" listValue="value"
							value="%{customerType}" emptyOption="true" label="客戶類別"></s2:select>	
				<s2:radio name="gender" list="#{'M':'男','F':'女'}"  listKey="key" listValue="value"
							value="%{gender}" emptyOption="true" label="性別"></s2:radio>					
				<s2:textfield name="tel" label="電話" value="%{tel}"></s2:textfield>
				<s2:textfield name="addr" label="地址" value="%{addr}"></s2:textfield>
				<s2:textfield name="email" label="郵件信箱" value="%{email}"></s2:textfield>				
				<s2:textfield name="birthDate" label="生日" value="%{birthDate}"></s2:textfield>				
				<s2:textarea name="habit" label="嗜好" cols="35" rows="5" value="%{habit}"></s2:textarea>	
				<s2:textfield name="totalAmount" label="累積消費" value="%{totalAmount}"></s2:textfield>					
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
		if(message != ''){
			$.messager.show({
                title:'LSYMain提示訊息',
                msg:message,							                
                style:{
                    right:'',
                    bottom:''
                },
                width:300,
                height:140,
                timeout:0
            });	
		}
	});
</script>