<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="Home頁面" bodyclass="spring_easyui">
	<div class="easyui-accordion" style="width:100%;height:95%;">
	    <div title="Struts2各種映射聯結" data-options="iconCls:'icon-search',collapsed:false,collapsible:false" style="padding:10px;">
	     	<div style="padding:5px 0;">
			     <a href="${pageContext.request.contextPath}/S2Mapping1.action" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'large',iconAlign:'top'">向值栈賦值三種方式(S2Mapping1)</a>
			     <a href="${pageContext.request.contextPath}/S2Mapping2.action" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'top'">向值栈賦POJO(S2Mapping2)</a>
			     <a href="${pageContext.request.contextPath}/S2Home_execute.action" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'large',iconAlign:'top'">QueryFuns(註解式映射)+Aop</a>
			     <!--  <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-large-chart',size:'large',iconAlign:'top'">Chart</a>-->
			 </div> 
	    </div>
	    <div title="Struts2-權限設定" data-options="selected:true" style="padding:10px;">
	    	<s2:form action="S2Home_AuthSet.action" method="post" namespace="/LSY/" theme="simple">
	    		<div style="padding-bottom:5px;">
	    			設定授權帳號：<s2:textfield name="data1.commMapModel.userId" value="%{data1.commMapModel['userId']}"/>
	    			<!-- ['userId'] or .userId皆可
	    				<s2:textfield name="data1.commMapModel.userId" value="%{data1.commMapModel.userId}"/>
	    			-->
	    			<s2:debug/>
	    		</div>
	    		<fieldset style="width:27%;height:250px;float:left;border:1px solid #f5f5f5;">
					<legend style="font-size:12px;font-weight:bold;">賦與權限</legend>
					<!-- theme=simple就不會 生tr td lable就無效了 。此處name就是綁定action裏的Map<String,Object> -->
					<!-- 若用name="data1.commMapModel['authIoc']" ，則第一個authIoc綁定，第二個以後就不見了-->
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_SpringHome1"  tooltip="賦予授權"/>授權F2001~Mvc各種Url映射+IoC權限注入+Aop<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_Products1"  tooltip="賦予授權"/>授權F2002~產品維護(Mvc+Aop+Easyui綜合)<br>
		    		&nbsp&nbsp(進入:Y,新增:Y,修改:Y,刪除:Y)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_Categories1"  tooltip="賦予授權"/>授權F2003~商品類別多筆查詢(JdbcTemplate)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_CategoriesAdd1"  tooltip="賦予授權"/>授權F2004~商品類別新增(Form標籤+JdbcTemplate)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_CategoriesList1"  tooltip="賦予授權"/>授權F2005~商品類別修改(Form標籤+JdbcTemplate)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_Customers1"  tooltip="賦予授權"/>授權F2006~客戶新增(Form標籤+NamedJdbc)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_CustomersBatch1"  tooltip="賦予授權"/>授權F2007~JDBC批次修改(集合綁定+事務管理)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="auth_SuppliersAdd1"  tooltip="賦予授權"/>授權F2008~供應商新增(Spring Validation)<br>
		    		<!-- 
		    			f1:<s2:textfield name="data1.commMapModel.f1" />
		    		 -->
		    	</fieldset>	
	    		
	    		<fieldset style="width:27%;height:250px;float:left;border:1px solid #f5f5f5;">
					<legend style="font-size:12px;font-weight:bold;">取消權限</legend>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_SpringHome1"  tooltip="取消授權"/>取消F2001~Mvc各種Url映射+IoC權限注入+Aop<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_Products1"  tooltip="取消授權"/>取消F2002~產品維護(Mvc+Aop+Easyui綜合)<br>
		    			&nbsp&nbsp(進入:Y,新增:N,修改:N,刪除:N)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_Categories1"  tooltip="取消授權"/>取消F2003~商品類別多筆查詢(JdbcTemplate)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_CategoriesAdd1"  tooltip="取消授權"/>取消F2004~商品類別新增(Form標籤+JdbcTemplate)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_CategoriesList1"  tooltip="取消授權"/>取消F2005~商品類別修改(Form標籤+JdbcTemplate)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_Customers1"  tooltip="取消授權"/>取消F2006~客戶新增(Form標籤+NamedJdbc)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_CustomersBatch1"  tooltip="取消授權"/>取消F2007~JDBC批次修改(集合綁定+事務管理)<br>
		    		<s2:checkbox name="data1.commMapModel.authIoc" label="" fieldValue="decline_SuppliersAdd1"  tooltip="取消授權"/>取消F2008~供應商新增(Spring Validation)<br>
		    	</fieldset>	
	    		<fieldset style="width:44%;height:250px;float:left;border:1px solid #f5f5f5;">
					<legend style="font-size:12px;font-weight:bold;">目前權限(未設定視為授權)權限</legend>
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
							<s2:iterator value="resultList">
								<tr>
									<td><s2:property value="functionId"/></td>
									<td><s2:property value="text"/></td>
									<td><s2:property value="isAuth"/></td>
									<td><s2:property value="isAdd"/></td>
									<td><s2:property value="isUpdate"/></td>
									<td><s2:property value="isDelete"/></td>
									<td><s2:property value="isView"/></td>
								</tr>
							</s2:iterator>	 
						</tbody>	
					</table>
		    	</fieldset>	
		    	<div style="clear:both;">
		    		<s2:submit value="提交&查詢" />
		    	</div> 		
	    	</s2:form> 
	    </div>
</cust:EasyuiLayout>

<!--<s2:form class="wwFormTable p1 size1" action="Home.action" namespace="/LSYMain"> 
	   <s2:textfield label="Username" name="username" />
	   <s2:textfield name="name" label="姓名" />
	   <s2:textfield name="email" label="電子郵件" />
	   <s2:submit name="getUserInf" value="送出" />
</s2:form>-->