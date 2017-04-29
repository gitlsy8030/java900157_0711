<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2Mapping2頁面">  
 <div id="dlg" class="easyui-dialog" title="S2Mapping2" data-options="iconCls:'icon-save'" style="width:800px;height:340px;padding:20px 10px">
     <a href="${pageContext.request.contextPath }/S2Home.action" class="easyui-linkbutton" data-options="iconCls:'icon-back'">返回S2Home</a>
     <hr/> 	 	 
 	 <table class="table table-bordered table-condense table-striped">
 	 	<thead>
 	 		<tr>
 	 			<th>項次</th>
				<th>產品編號</th>
				<th>產品名稱</th>
				<th>產品名稱</th>
				<th>規格</th> 	 				
 			</tr>
 	 	</thead>
 	 	<tbody>
 	 		<s2:iterator value="productsList1" var="item" status="st">
 	 			<tr>
 	 				<td><s2:property value="#st.getIndex()"/></td>
 	 				<td><s2:property value="productId"/></td>
 	 				<td><s2:property value="productName"/></td>
 	 				<td>${item.productName }</td>
 	 				<td><s2:property value="productDesc"/></td> 	 				
 	 			</tr>
 	 		</s2:iterator>
 	 	</tbody>
 	 </table>
 	 
 	 ValueStack<s2:debug />	
 	 <br>
 	 <s2:property value="a1" /><br>
 	 EL取a1屬性:${a1 }<br>
 	 EL取productName屬性:${a1 }<br>
 	 <hr/>
 	 <s2:property value="a2" /><br>
 	 <s2:property value="'java'.length()" /><br>
 	 <s2:property value="categories1.categoryId" /><s2:property value="categories1.categoryName" /><br>
 	 <s2:property value="suppliers1.supplierId" /><s2:property value="suppliers1.supplierName" />
 	 <hr/>
 	 ognl request1=<s2:property value="#request.request1"/><br>
 	 ognl session1=<s2:property value="#session.session1"/><br>
 	 ognl application1=<s2:property value="#application.application1"/><br>
 	 ognl attr=<s2:property value="#attr.request2"/><br>
 	 <hr/>
 	 EL request1=${request1 }<br>
 	 EL session1=${session1 }<br>
 	 EL application1=${application1 }<br>
 	 <hr/>
 	 <s2:set var="name1" value="my name is fred"/>
 	 name1=<s2:property value="name1"/>
 	  <hr/>
 	 <s2:set var="list1" value="{'台北市','桃園市','高雄市','台南市'}"></s2:set>
 	 <s2:iterator value="#list1">
 	 	<s2:property />
 	 </s2:iterator>
 	 <hr/> 	  
 	 <s2:set var="map1" value="#{'Sales':'業務部','Acct':'財務部','IT':'資訊部','Hr':'人力資源部'}"></s2:set>
 	 <s2:iterator value="#map1">
 	 	<s2:property value="key" />-<s2:property value="value"/><br>
 	 </s2:iterator>
 	 
 </div>
</cust:EasyuiLayout>