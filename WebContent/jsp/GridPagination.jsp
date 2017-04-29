<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>	
<c:set var="gridName" value="${param.gridName}" />
<c:set var="pageBtnCount" value="${param.pageBtnCount}" />
<c:set var="pageHelf" value="${param.pageBtnCount/2  }" />
<c:set var="simpleGrid" value="${requestScope[gridName]}" />
<form role="form" id="${gridName}${'_Form'}" class="simpleGridForm" action="${pageContext.request.contextPath}/${simpleGrid.url}" method="post">		                    
  <c:if test="${ simpleGrid.totalCount > 0}">	
       <div class="container-fluid">
              	<div class="row">
              		<div class="col-lg-3 col-md-3 col-sm-3">
					  	<div id="searchPage" class="input-group simpleGridSearchPage">
		               		<input class="form-control input-sm" type="text" value="">		                  
							<a href="#" class="input-group-addon">Go</span></a>							
	             		</div>
             		</div>		                		
              		<div class="col-lg-9 col-md-9 col-sm-9">
               			<ul class="pagination" style="margin:0;">			                    	
					    <li><a href="#" value="-100">第一頁</a></li>
					    <li><a href="#" value="-1">上一頁</a></li>
					    <c:choose>
					    	<c:when test="${simpleGrid.totalPage <=pageBtnCount }">
					    		<c:set var="beginPage" value="1"/>
					    		<c:set var="endPage" value="${simpleGrid.totalPage}"/>
					    	</c:when>
					    	<c:otherwise>
					    		<c:set var="beginPage" value="${simpleGrid.currentPage-pageHelf}"/>
					    		<c:set var="endPage" value="${simpleGrid.currentPage+(pageHelf -1)}"/>
					    		<c:if test="${ beginPage < 1 }">
					    			<c:set var="beginPage" value="1"/>
					    			<c:set var="endPage" value="${pageBtnCount}"/>
					    		</c:if>
					    		<c:if test="${ endPage > simpleGrid.totalPage }">	
					    			<c:set var="beginPage" value="${simpleGrid.totalPage-(pageBtnCount-1)}"/>							    			
					    			<c:set var="endPage" value="${simpleGrid.totalPage}"/>
					    		</c:if>
					    	</c:otherwise>  
					    </c:choose>
					    <c:forEach var="i" begin="${ beginPage }" end="${ endPage }">	
				    		<c:choose >
				    			<c:when test="${i == simpleGrid.currentPage}">					    
						   			<li class="active"><a href="#">${i}</a></li>
					   			</c:when>
					   			<c:otherwise>
					   				<li><a href="#">${i}</a></li>
					   			</c:otherwise>
						   	</c:choose>									   
					    </c:forEach>
					    <li><a href="#" value="-9">下一頁</a></li>
					    <li><a href="#" value="-900">最後頁</a></li>
				  	</ul>				  	
              		</div>              			                    		
              	</div>
          </div>			                    
  	</c:if>
  <input type="hidden" value="${ simpleGrid.pageNum }" name="pageNum" >
  <input type="hidden" value="${ simpleGrid.totalCount }" name="totalCount">
  <input type="hidden" value="${ simpleGrid.currentPage }" name="currentPage">
  <input type="hidden" value="${ simpleGrid.pageSize }" name="pageSize">
  <input type="hidden" value="${ simpleGrid.totalPage }" name="totalPage">
  <input type="hidden" value="${ simpleGrid.className }" name="className">
  <input type="hidden" value="${ simpleGrid.url }" name="url">
  <input type="hidden" value="${ simpleGrid.searchCondition }" name="searchCondition">
</form>	                

		