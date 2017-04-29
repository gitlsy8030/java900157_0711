<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<cust:EasyuiLayout title="SpringMvc綜合">
	<div class="easyui-accordion" style="width:100%;height:95%;">
	    <div title="Spring各種映射聯結" data-options="iconCls:'icon-search',collapsed:false,collapsible:false" style="padding:10px;">
	     	<div style="padding:5px 0;">
			     <a href="/LSYMain/impl_httpHandler1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'large',iconAlign:'top'">Impl_HttpRequestHandler.spring+Aop</a>
			     <a href="/LSYMain/impl_controller1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'top'">Impl_Controller.spring+Aop</a>
			     <a href="/LSYMain/QueryFuns.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'top'">QueryFuns(註解式映射)+Aop</a>
			     <!--  <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-large-chart',size:'large',iconAlign:'top'">Chart</a>-->
			 </div> 
	    </div>
	    <div title="Spring IoC注入-權限設定" data-options="selected:true" style="padding:10px;">
	        <div id="searchContainer" class="content-fluid" style="heigth:50%;margin:5px;border:1px solid #ccc;">
	        	<form:form id="authIocInjectionForm" commandName="inputModel" action="${pageContext.request.contextPath}/AuthIocInjection.spring" method="post">
	        		<div style="margin-bottom:20px"> 
						<form:label path="commMapModel['userId']" style="width:80px;text-align:right;">設定權限帳號</form:label>
						<form:input path="commMapModel['userId']"/>
					</div>
					<div style="margin-bottom:20px;">
						<fieldset style="float:left;">
							<legend style="font-size:12px;font-weight:bold;">賦與權限</legend>
							<form:checkbox path="commMapModel['authIoc']" value="auth_SpringHome"/>授權F2001~Mvc各種Url映射+IoC權限注入+Aop<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_Products"/>授權F2002~產品維護(Mvc+Aop+Easyui綜合)<br>&nbsp&nbsp(進入:Y,新增:Y,修改:Y,刪除:Y)<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_Categories"/>授權F2003~商品類別多筆查詢(JdbcTemplate)<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_CategoriesAdd"/>授權F2004~商品類別新增(Form標籤+JdbcTemplate)<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_CategoriesList"/>授權F2005~商品類別修改(Form標籤+JdbcTemplate)<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_Customers"/>授權F2006~客戶新增(Form標籤+NamedJdbc)<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_CustomersBatch"/>授權F2007~JDBC批次修改(集合綁定+事務管理)<br>
							<form:checkbox path="commMapModel['authIoc']" value="auth_SuppliersAdd"/>授權F2008~供應商新增(Spring Validation)<br>
						</fieldset>
						<fieldset style="margin-left:20px;float:left;">
							<legend style="font-size:12px;font-weight:bold;">取消權限</legend>
							<form:checkbox path="commMapModel['authIoc']" value="decline_SpringHome"/>取消F2001~Mvc各種Url映射+IoC權限注入+Aop<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_Products"/>取消F2002~產品維護(Mvc+Aop+Easyui綜合)<br>&nbsp&nbsp(進入:Y,新增:N,修改:N,刪除:N)<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_Categories"/>取消F2003~商品類別多筆查詢(JdbcTemplate)<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_CategoriesAdd"/>取消F2004~商品類別新增(Form標籤+JdbcTemplate)<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_CategoriesList"/>取消F2005~商品類別修改(Form標籤+JdbcTemplate)<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_Customers"/>取消F2006~客戶新增(Form標籤+NamedJdbc)<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_CustomersBatch"/>取消F2007~JDBC批次修改(集合綁定+事務管理)<br>
							<form:checkbox path="commMapModel['authIoc']" value="decline_SuppliersAdd"/>取消F2008~供應商新增(Spring Validation)<br>
						</fieldset>
						<fieldset style="margin-left:20px;float:left;">
							<legend style="font-size:12px;font-weight:bold;">目前權限(未設定視為授權)</legend>	
							<c:if test="${ !empty authList }">	
								<table class="table table-bordered table-condensed">
									<thead>
										<tr>
											<th>功能代號</th>
											<th>功能名稱</th>
											<th>auth</th>
											<th>新增</th>
											<th>修改</th>
											<th>刪除</th>
											<th>檢視</th>
										</tr>
									</thead>
									<tbody>								
										<c:forEach items="${ authList }" var="item" >
											<tr>
												<td>${item.functionId }</td>
												<td>${item.text }</td>
												<td>${item.isAuth }</td>
												<td>${item.isAdd }</td>
												<td>${item.isUpdate }</td>
												<td>${item.isDelete }</td>
												<td>${item.isView }</td>
											</tr>
										</c:forEach>
									</tbody>	
								</table>
							</c:if>	
						</fieldset>
					</div>
					<div style="clear:both;padding-top:20px;">
						<a href="#" id="btnIoCSave" class="easyui-linkbutton" data-options="iconCls:'icon-save'">提交&查詢</a>
					</div>
	        	</form:form>
	        </div>
	    </div>
	    <div title="Title1" style="padding:10px">
	        <p>Content1</p>
	    </div>	    
	</div>
</cust:EasyuiLayout>
<script type="text/javascript">
$(function(){
		$('#btnIoCSave').on('click',function(){
			$.messager.confirm('LSYMain提示訊息','請確認是否變更 '+$('input[name=userId]').val()+' 之權限 ！',function(yes){				
				if(yes){
					$('#authIocInjectionForm').submit();
				}				
			}); 
		});	
});
</script>