<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<form role="form" id="form_cat" class="form-horizontal" 
	<c:if test="${ form_cat.formType == 'edit' || form_cat.formType == 'remove' || form_cat.formType == 'add' }">style="padding:1.5em 0 0.5em 2em;"</c:if>
	action="${pageContext.request.contextPath}/HomeServlet?action=GetPageDataBySearch" 
	method="post">		
	<div class="row">
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">目錄代號</label>
				<div class="col-lg-6 col-md-6">
					<input type="text" class="form-control input-sm" name="functionId" 
					<c:if test="${ form_cat.formType == 'view' || form_cat.formType == 'remove' || form_cat.formType == 'edit'}">disabled</c:if>
					value="${form_cat.functionId}" />
				</div>
			</div>
		</div>
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">目錄名稱</label>
				<div class="col-lg-6 col-md-6">
					<input type="text"  class="form-control input-sm" name="functionName" 
					<c:if test="${ form_cat.formType == 'view' || form_cat.formType == 'remove' }">disabled</c:if>
					value="${form_cat.functionName}" />
				</div>
			</div>
		</div>				
	</div>
	<div class="row">
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
                <label class="col-lg-3 col-md-3 control-label">啟用日期</label>
                <div class="col-lg-9 col-md-9 form-inline">
	                <div class="input-group date form_date" data-date-format="yyyy/mm/dd" style="with:45%;">
	                    <input class="form-control input-sm" type="text" name="startDate"
	                    <c:if test="${ form_cat.formType == 'view' || form_cat.formType == 'remove' }">disabled</c:if> 
	                    value="${form_cat.startDate }">	
                    	<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
	                </div>
                </div>			                						
            </div>
		</div> 
		<div class="col-lg-6 col-md-6">
			<div class="form-group">
				<label class="col-lg-3 col-md-3 control-label">順序</label>
				<div class="col-lg-6 col-md-6">
					<input type="text"  class="form-control input-sm" name="seq" 
					<c:if test="${ form_cat.formType == 'view' || form_cat.formType == 'remove' }">disabled</c:if>
					value="${form_cat.seq}" />
				</div>
			</div>
		</div>										 					                		
	</div>
	<c:if test="${ form_cat.formType == 'show' || form_cat.formType == 'view' }">
		<div class="navbar-static-bottom text-right" id="footer_btnGroup" >		
			<div class="btn btn-group">			
				<a id="cat_add" class="btn btn-default btn-sm" href="#"><span class="glyphicon glyphicon-plus"></span> 新增</a>
			</div>
		</div>	
	</c:if> 					
</form>