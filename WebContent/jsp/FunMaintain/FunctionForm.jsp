<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<form role="form" id="form_fun" class="form-horizontal" 
	<c:if test="${ form_fun.formType == 'edit' || form_fun.formType == 'remove' || form_fun.formType == 'add' }">style="padding:1.5em 0 0.5em 2em;"</c:if>
	action="${pageContext.request.contextPath}/HomeServlet?action=GetPageDataBySearch" method="post">		
	<div class="row">
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">功能代號</label>
				<div class="col-lg-6 col-md-6">
					<input type="text"  class="form-control input-sm" name="functionId" 
					<c:if test="${ form_fun.formType == 'view' || form_fun.formType == 'remove' || form_fun.formType == 'edit' }">disabled</c:if>
					value="${form_fun.functionId}" />
				</div>
			</div>
		</div>
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">功能名稱</label>
				<div class="col-lg-6 col-md-6">
					<input type="text"  class="form-control input-sm" name="functionName" 
					<c:if test="${ form_fun.formType == 'view' || form_fun.formType == 'remove' }">disabled</c:if>
					value="${form_fun.functionName}" />
				</div>
			</div>
		</div>				
	</div>
	<div class="row">
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">歸屬目錄</label>
				<div class="col-lg-6 col-md-6">
					<select class="form-control input-sm" disabled	name="catalogId">
						<c:forEach var="catalog" items="${ form_fun.attachData.get('catalogId') }">
							<option value="${catalog.key }" <c:if test="${ form_fun.catalogId == catalog.key }">selected</c:if>>${catalog.value}</option>
						</c:forEach>														
			        </select>
				</div>
			</div>
		</div> 
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
                <label class="col-lg-3 col-md-3 control-label">啟用日期</label>
                <div class="col-lg-9 col-md-9 form-inline">
	                <div class="input-group date form_date" data-date-format="yyyy/mm/dd" style="width:80%">
	                    <input class="form-control input-sm" type="text" name="startDate" 
	                    <c:if test="${ form_fun.formType == 'view' || form_fun.formType == 'remove' }">disabled</c:if>
	                    value="${form_fun.startDate }">		                  
						<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>							
	                </div>
                </div>			                						
            </div>
		</div> 
									 					                		
	</div>	
	<div class="row">		
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">Url</label>
				<div class="col-lg-9 col-md-9">
					<input type="text"  class="form-control input-sm" name="url" 
					<c:if test="${ form_fun.formType == 'view' || form_fun.formType == 'remove' }">disabled</c:if>
					value="${form_fun.url}" />
				</div>
			</div>
		</div>
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">順序</label>
				<div class="col-lg-6 col-md-6">
					<input type="text"  class="form-control input-sm" name="seq"
					<c:if test="${ form_fun.formType == 'view' || form_fun.formType == 'remove' }">disabled</c:if> 
					value="${form_fun.seq}" />
				</div>
			</div>
		</div>		
	</div>
	<c:if test="${ form_fun.formType == 'show' || form_fun.formType == 'view' }">	
		<div class="navbar-static-bottom text-right" id="footer_btnGroup" >
			<div class="btn btn-group">			
				<a id="fun_add" class="btn btn-default btn-sm" href="#"><span class="glyphicon glyphicon-plus"></span> 新增</a>
			</div>
		</div>
	</c:if>										
</form>