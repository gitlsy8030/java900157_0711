<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>密碼尋回</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/LSY/LsyStyle.css">
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery/jquery-2.1.4.js"></script>
<script	src="${pageContext.request.contextPath}/js/bootstrap/bootstrap.min.js"	type="/text/javascript"></script>
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery-easyui/jquery.easyui.min.js"></script>
</head>
<body id="changePasswordBody">
	<div id="changePasswordContainer" class="container">
		<div class="row" style="margin-top:6em;">
			<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
				<div class="panel panel-default">				
					<div class="panel-heading text-center">						
						<h4>忘記密碼(變更)</h4>
					</div>
					<c:set var="currentMode" scope="request" value="1" ></c:set>					
					<div class="panel-body">
						<form id="changePasswordForm" role="form" action="${pageContext.request.contextPath}/ChangePasswordServlet" method="post" class="form-horizontal">
							<c:choose>
								<c:when test="${ ChangePasswordMode == 'initStep'}">								
									<div class="form-group ${form.errors.mailWarning}">
										<label class="col-lg-4 col-md-4 control-label">註冊電子郵件</label>
										<div class="col-lg-5 col-md-5"><input type="text" name="mail" placeholder="請輸入註冊時之郵件信箱" value="${form.mail}" class="form-control"></div>
										<span class="err">${form.errors.mail}</span>
									</div>
									<div class="form-group">
										<div class="col-lg-offset-3 col-md-offset-3 col-lg-8 col-md-8" style="padding-left:0.5em;">				    
										    <p class="info_message">${form.message}</p>					
										</div>
									</div>	
									<div class="form-group">
										<div class="col-lg-offset-5 col-md-offset-5 col-lg-6 col-md-6" >				    
							    		<button type="submit" name="submitType" class="btn btn-default btn-sm" value="sendLinkMail" style="margin-right:1em;"><span class="glyphicon glyphicon-plus-sign"></span> 送出</button>
							    	</div>
								</c:when>
								<c:when test="${ ChangePasswordMode == 'tokenError'}">
									<div class=" form-group text-center">
										<label>這個連結不正確，請以正確方式重新取得聯結!</label>
									</div>
								</c:when>
								<c:when test="${ ChangePasswordMode == 'tokenExpired'}">
									<div class=" form-group text-center">
										<label>這個連結已經逾時，請重新取得新的聯結!</label>
									</div>
								</c:when>
								<c:otherwise>
									<div class="form-group ${form.errors.passwordWarning}">
										<label class="col-lg-4 col-md-4 control-label">新密碼</label>
										<div class="col-lg-5 col-md-5"><input type="text" name="password" placeholder="請輸入新密碼" value="${form.password}" class="form-control"></div>
										<span class="err">${form.errors.password}</span>
									</div>
									<div class="form-group ${form.errors.password2Warning}">
										<label class="col-lg-4 col-md-4 control-label">確認密碼</label>
										<div class="col-lg-5 col-md-5"><input type="text" name="password2" placeholder="請再次輸入新密碼" value="${form.password2}" class="form-control"></div>
										<span class="err">${form.errors.password2}</span> 
									</div>	
									<div class="form-group">
										<div class="col-lg-offset-4 col-md-offset-4 col-lg-8 col-md-8" style="padding-left:0.5em;">				    
										    <p class="info_message">${form.message}</p>					
										</div>
									</div>	
									<div class="form-group">
										<div class="col-lg-offset-5 col-md-offset-5 col-lg-6 col-md-6" >				    
							    		<button type="submit" name="submitType" class="btn btn-default btn-sm" value="changePassword" style="margin-right:1em;"><span class="glyphicon glyphicon-plus-sign"></span> 送出</button>
							    	</div>								
								</c:otherwise>								
							</c:choose>								
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>