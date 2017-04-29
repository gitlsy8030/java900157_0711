<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
		<table class="table table-striped table-bordered table-hover table-condensed" style="margin-bottom:0;">
			<thead>
				<tr>
	                <th colspan="13" class="text-left">
	               		 第${simpleGrid.rowStart}~${simpleGrid.rowEnd}筆/共${simpleGrid.totalCount}筆&nbsp;&nbsp;
	               		[第${simpleGrid.currentPage}頁/共${simpleGrid.totalPage}頁]
	                </th>
	            </tr>
				<tr>
					<th>帳號</th>
					<th>姓名</th>
					<th>英文姓名</th>
					<th>生日</th>
					<th>電話</th>
					<th>email</th>
					<th>部門</th>
					<th>群組</th>
					<th>登入時間</th>					
					<th>目前網頁</th>
					<th>目前網址</th>
					<th>最近瀏覽</th>
					<th>session</th>			
				</tr>
			</thead>
			<tbody>
				<c:forEach var="pageList" items="${ simpleGrid.pageList }">
					<tr>
						<td>${pageList.userInfo.userId }</td>
						<td>${pageList.userInfo.userName }</td>	
						<td>${pageList.userInfo.engName }</td>	
						<td><fmt:formatDate value="${pageList.userInfo.birthday}" pattern="yyyy/MM/dd"/></td>						<td>${pageList.userInfo.tel }</td>
						<td>${pageList.userInfo.mail }</td>
						<td>
							<c:choose>
								<c:when test="${pageList.userInfo.department == 'Adm' }">管理部</c:when>
								<c:when test="${pageList.userInfo.department == 'HR' }">人力資源部</c:when>
								<c:when test="${pageList.userInfo.department == 'Inter' }">國外業務部</c:when>
								<c:when test="${pageList.userInfo.department == 'Domanstic' }">國內業務部</c:when>
								<c:when test="${pageList.userInfo.department == 'Oper' }">作業中心</c:when>
								<c:when test="${pageList.userInfo.department == 'Acc' }">財務部</c:when>
								<c:when test="${pageList.userInfo.department == 'Sal' }">產品部</c:when>
								<c:when test="${pageList.userInfo.department == 'Tec' }">研發部</c:when>
								<c:otherwise>其他</c:otherwise>
							</c:choose>
						
						</td>
						<td>
							<c:choose>
								<c:when test="${pageList.userInfo.group == '0' }">一般帳戶</c:when>
								<c:when test="${pageList.userInfo.group == '1' }">作業</c:when>
								<c:when test="${pageList.userInfo.group == '2' }">業務</c:when>
								<c:when test="${pageList.userInfo.group == '3' }">駐點</c:when>
								<c:when test="${pageList.userInfo.group == '4' }">主管</c:when>
								<c:when test="${pageList.userInfo.group == '5' }">系統管理</c:when>
								<c:otherwise>其他</c:otherwise>
							</c:choose>
						
						</td>
						<td><fmt:formatDate value="${pageList.loginTime}" pattern="yyyy/MM/dd hh:mm:ss"/></td>						
						<td>${pageList.lastFunName}</td>	
						<td>${pageList.lastUrl}</td>
						<td><fmt:formatDate value="${pageList.lastAccessTime}" pattern="yyyy/MM/dd hh:mm:ss"/></td>		
						<td>${pageList.sessionId }</td>				
					</tr>
				</c:forEach>		
			</tbody>
			<tfoot>							
	            <tr>
	                <td colspan="13" class="text-left">
	                	<form role="form" id="gridForm" action="${pageContext.request.contextPath}/HomeServlet?action=GetPageDataByNumber" method="post">		                    
		                    <c:if test="${ simpleGrid.totalCount > 0}">	
		                    <div class="container-fluid">
		                    	<div class="row">
		                    		<div class="col-lg-1 col-md-1 col-lg-offset-3 col-md-offset-3">
	                    				<div id="searchPage" class="input-group">
					                		<input class="form-control input-sm" type="text" value="">		                  
											<a href="#" class="input-group-addon">Go</span></a>							
					              		</div>
		                    		</div>
		                    		<div class="col-lg-8 col-md-8">
			                    		<ul class="pagination" style="margin:0;">			                    	
										    <li><a href="#" value="-100">第一頁</a></li>
										    <li><a href="#" value="-1">上一頁</a></li>
										    <c:choose>
										    	<c:when test="${simpleGrid.totalPage <=10 }">
										    		<c:set var="beginPage" value="1"/>
										    		<c:set var="endPage" value="${simpleGrid.totalPage}"/>
										    	</c:when>
										    	<c:otherwise>
										    		<c:set var="beginPage" value="${simpleGrid.currentPage-5}"/>
										    		<c:set var="endPage" value="${simpleGrid.currentPage+4}"/>
										    		<c:if test="${ beginPage < 1 }">
										    			<c:set var="beginPage" value="1"/>
										    			<c:set var="endPage" value="10"/>
										    		</c:if>
										    		<c:if test="${ endPage > simpleGrid.totalPage }">	
										    			<c:set var="beginPage" value="${simpleGrid.totalPage-9}"/>							    			
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
		                  <input type="hidden" value="${ simpleGrid.searchCondition }" name="searchCondition">
					  </form>
	                </td>
	            </tr>        
			</tfoot>
		</table>