<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<nav class="navbar navbar-inverse navbar-collapse">
  <div class="container-fluid">
    <ul id="navMenu" class="nav navbar-nav">
      	<li class="active"><a href="/LSYMain/HomeServlet?action=Index">首頁</a></li>
		<c:forEach var="cat" items="${navMenu}">	
			<c:if test="${cat.type == '0'}">
				<li class="dropdown">					
					<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">${cat.functionName }<span class="caret"></span></a>
					<ul id="" class="dropdown-menu">
			        	<c:forEach var="fun" items="${navMenu}">
			        		<c:if test="${fun.type == '1' && fun.catalogId  == cat.functionId}">
			        			<c:choose>
			        				<c:when test="${empty fun.url}">
			        					<li><a href="#">${fun.functionName }</a></li>
			        				</c:when>
			        				<c:when test="${fn:endsWith(fun.url,'.spring') }">
			        					<li><a href="/LSYMain/${ fun.url }">${fun.functionName }</a></li>
			        				</c:when>
			        				<c:when test="${fn:endsWith(fun.url,'.action') }">
			        					<li><a href="/LSYMain/${ fun.url }">${fun.functionName }</a></li>
			        				</c:when>
			        				<c:when test="${fn:startsWith(fun.url,'Spring/') }">
			        					<li><a href="${ fun.url }">${fun.functionName }</a></li>
			        				</c:when>
			        				<c:otherwise>
			        					<li><a href="/LSYMain/${ fun.url }?action=Index">${fun.functionName }</a></li>
			        				</c:otherwise>			        			
			        			</c:choose>
			        		</c:if>
			        	</c:forEach>			        	
			        </ul>
		        </li>
			</c:if>
		</c:forEach>
	</ul>
  </div>
</nav>