<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
	<c:set var="loginInfo" value="${simpleGrid.pageList[0]}"/>	
		<tr>
			<td>${loginInfo.userInfo.userId }</td>
			<td>${loginInfo.userInfo.userName }</td>	
			<td>${loginInfo.userInfo.engName }</td>	
			<td><fmt:formatDate value="${loginInfo.userInfo.birthday}" pattern="yyyy/MM/dd"/></td>						<td>${loginInfo.userInfo.tel }</td>
			<td>${loginInfo.userInfo.mail }</td>
			<td>
				<c:choose>
					<c:when test="${loginInfo.userInfo.department == 'Adm' }">管理部</c:when>
					<c:when test="${loginInfo.userInfo.department == 'HR' }">人力資源部</c:when>
					<c:when test="${loginInfo.userInfo.department == 'Inter' }">國外業務部</c:when>
					<c:when test="${loginInfo.userInfo.department == 'Domanstic' }">國內業務部</c:when>
					<c:when test="${loginInfo.userInfo.department == 'Oper' }">作業中心</c:when>
					<c:when test="${loginInfo.userInfo.department == 'Acc' }">財務部</c:when>
					<c:when test="${loginInfo.userInfo.department == 'Sal' }">產品部</c:when>
					<c:when test="${loginInfo.userInfo.department == 'Tec' }">研發部</c:when>
					<c:otherwise>其他</c:otherwise>
				</c:choose>
			
			</td>
			<td>
				<c:choose>
					<c:when test="${loginInfo.userInfo.group == '0' }">一般帳戶</c:when>
					<c:when test="${loginInfo.userInfo.group == '1' }">作業</c:when>
					<c:when test="${loginInfo.userInfo.group == '2' }">業務</c:when>
					<c:when test="${loginInfo.userInfo.group == '3' }">駐點</c:when>
					<c:when test="${loginInfo.userInfo.group == '4' }">主管</c:when>
					<c:when test="${loginInfo.userInfo.group == '5' }">系統管理</c:when>
					<c:otherwise>其他</c:otherwise>
				</c:choose>
			
			</td>
			<td><fmt:formatDate value="${loginInfo.loginTime}" pattern="yyyy/MM/dd hh:mm:ss"/></td>						
			<td>${loginInfo.lastFunName}</td>	
			<td>${loginInfo.lastUrl}</td>
			<td><fmt:formatDate value="${loginInfo.lastAccessTime}" pattern="yyyy/MM/dd hh:mm:ss"/></td>		
			<td>${loginInfo.sessionId }</td>				
		</tr>		