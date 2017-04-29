<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<cust:EasyuiLayout title="Hibernate延遲加載">
	<div class="easyui-accordion" style="width:100%;height:98%;">
	    <div title="Hibernate 延遲加載連結" data-options="iconCls:'icon-search',collapsed:false,collapsible:false" style="height:60%;padding:10px;">
	     	<div style="padding:5px 0;">
			     <a href="/LSYMain/Hiber/HibernateQuery1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Get Country-175</a>
			     <a href="/LSYMain/Hiber/HibernateQuery2.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Insert Country-501</a>
			     <a href="/LSYMain/Hiber/HibernateQuery3.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Update Country-30</a>
			     <a href="/LSYMain/Hiber/HibernateQuery4.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Delete Country-501</a>
			 </div> 
			 <div style="padding:5px 0;">
			     <a href="/LSYMain/Hiber/HibernateCity0.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Get City0-5314</a>
			     <a href="/LSYMain/Hiber/HibernateCity1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Get City1-5314</a>
			     <a href="/LSYMain/Hiber/HibernateCity2.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Insert City-501</a>
			     <a href="/LSYMain/Hiber/HibernateCity3.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Update City-30</a>
			     <a href="/LSYMain/Hiber/HibernateCity4.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Delete City-4254</a>
			 </div>
			 <div style="padding:5px 0;">
			 	<h4>inverse參數</h4>	
			     <a href="/LSYMain/Hiber/HibernateProduct1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Insert Q5</a>
			     <a href="/LSYMain/Hiber/HibernateRemoveRelation_Prod.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Remove關聯 from Products</a>
			     <a href="/LSYMain/Hiber/HibernateRemoveRelation_Cate.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Remove關聯 from Categories</a>
			     <a href="/LSYMain/Hiber/HibernateAddRelation_Cate.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Add關聯 from Categories</a>
			     <a href="/LSYMain/Hiber/HibernateChangeRelation_Cate.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Change關聯 from Categories</a>
			     <a href="/LSYMain/Hiber/HibernateChangeRelation_Prod.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Change關聯 from Products</a>
			     <a href="/LSYMain/Hiber/HibernateProductQuery1.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-clipart',size:'small',iconAlign:'left'">Product Query1</a>
			    
			 </div>
			 <div style="padding:5px 0;">
			 <h4>Delete測試</h4>
			     <a href="/LSYMain/Hiber/HibernateDeleteCategories_Inverse_True.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">
			     	delete categories 情境1：<br>該項下仍有關聯的Products + Categories inverse=true(不能維護)
		     	</a>
			    <a href="/LSYMain/Hiber/HibernateDeleteCategories_Inverse_True.spring" class="easyui-linkbutton" data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">
			     	delete categories 情境2：<br>該項下仍有關聯的Products + Categories inverse=true(不能維護)
		     	</a>			    
			 </div>
			 <div style="padding:5px 0;">
			 	<h4>cascade參數</h4>	
			     <a href="/LSYMain/Hiber/HibernateCascade_save-update_Cate.spring" class="easyui-linkbutton" 
			     	data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Insert Q6 (Cascade_save-update_Cate)</a>
			     <a href="/LSYMain/Hiber/HibernateCascade_save-update_Prod.spring" class="easyui-linkbutton" 
			     	data-options="iconCls:'icon-large-picture',size:'small',iconAlign:'left'">Insert Q6 (Cascade_save-update_Prod)</a>			    
			 </div>			 
	    </div>	    
	    <div title="HibernateLazyLoading延遲加載AA" data-options="selected:true" style="height:38%;padding:10px;">
	    <% System.out.println("into jsp"); 
	    System.out.println("jsp request result="+request.getAttribute("result"));
	    System.out.println("jsp request result1="+request.getAttribute("result1"));
	    System.out.println("jsp request c1="+request.getAttribute("c1"));
	    System.out.println("jsp request c2="+request.getAttribute("c2"));
	    %>
	    <h4>(now is LazyHome.jsp),${initHome } </h4>
	    here is c1:${c1 }<br>
	    here is c2:${c2 }
	       <div>result=${result}<br>
	       Categories=${Categories }<br>
	       Porducts=${Products }
	       </div>
	       <div>result1=${result1}</div>
	       <div>
	    	<form class="easyui-form" id="citySearchForm" action="${pageContext.request.contextPath}/Hiber/HibernateCity1.spring" method="post">
	    		<input class="easyui-textbox" name="city_Nbr"  
	    		data-options="label:'城市編號',labelWidth:'60px'" />
	    		<input class="easyui-textbox" name="city_Ename" data-options="readonly:true" value="${city.city_Ename }"/>
	    		<input class="easyui-textbox" name="city_Cname" data-options="disabled:true" value="${city.city_Cname }"/>
	    		<!-- 
	    		<a id="btnSearch" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'">搜尋</a>
	    		 -->
	    		 <input type="submit" value="搜尋" />
	    		<c:out value="${City.hashCode() }" />
	    	</form>
	    	<p>${cc }</p>
	    </div> 
	       <div>國家別 CTY_CNAME=${Country.cty_Cname},CTY_ENAME=${Country.cty_Ename},
	      
		       <c:if test="${!empty Country.cityList }">
		        <div style="height:200px;width:500px;border:1px solid #ccc;overflow:auto;">
		        	<table class="table table-bordered table-condensed">
		        		<c:forEach var="item" items="${Country.cityList}" >
		        			<tr>
		        				<td>${item.city_Nbr}</td>
		        				<td>${item.city_Ename}</td>
		        				<td>${item.city_Cname}</td>
		        			</tr>
		        		</c:forEach>
		        	</table>		        	
		        </div>
	       	   </c:if>	
	       	    ${c1 }	  
	       	</div>
	       
	       <div>城市別 CITY_CNAME=${City.city_Cname},CITY_ENAME=${City.city_Ename}
	       	(country=${City.country.cty_Nbr},${City.country.cty_Cname },${City.country.cty_Ename })
	       	</div>	       	
	    </div>	      
	</div>
	<input id="errorMessage" type="hidden" value="${constrainError}">
</cust:EasyuiLayout>
<script type="text/javascript">
//alert('now is LazyHome.jsp=>'+'${c1}');
$(function(){
	$('#btnSearch').on('click',function(e){
		alert('will submit');
		$('#citySearchForm').submit();
	});
	//alert('now is LazyHome.jsp=>'+'${c1}');	
	if($('#errorMessage').val() !=''){
		alert($('#errorMessage').val());
	}
	
});
</script>