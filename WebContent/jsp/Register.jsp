<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新會員註冊</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/LSY/LsyStyle.css">
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery/jquery-2.1.4.js"></script>
<script	src="${pageContext.request.contextPath}/js/bootstrap/bootstrap.min.js"	type="/text/javascript"></script>
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery-easyui/jquery.easyui.min.js"></script>
</head>
<body id="registerBody">
<%System.out.println("Register.jsp"); %>
	<div id="registerContainer" class="container">
		<div class="row" style="margin-top:3.5em;">
			<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
				<div class="panel panel-default">				
					<div class="panel-heading text-center"><h4>新會員註冊</h4></div>
					<div class="panel-body">
						<form id="registerForm" role="form" action="${pageContext.request.contextPath}/RegisterServlet" method="post" class="form-horizontal">
							<div class="form-group ${form.errors.userIdWarning}">
								<label class="col-lg-3 col-md-3 control-label">帳號</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="userId" value="${form.userId}" class="form-control"></div>
								<span class="err">${form.errors.userId}</span>
							</div>							
							<div class="form-group ${form.errors.userNameWarning}">
								<label class="col-lg-3 col-md-3 control-label">中文姓名</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="userName" value="${form.userName}" class="form-control"></div>
								<span class="err">${form.errors.userName}</span>
							</div>
							<div class="form-group ${form.errors.engNameWarning}">
								<label class="col-lg-3 col-md-3 control-label">英文姓名</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="engName" value="${form.engName}" class="form-control"></div>
								<span class="err">${form.errors.engName}</span>
							</div>
							<div class="form-group ${form.errors.mailWarning}">
								<label class="col-lg-3 col-md-3 control-label">Mail</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="mail" value="${form.mail}" class="form-control"></div>
								<span class="err">${form.errors.mail}</span>
							</div>
							<div class="form-group ${form.errors.birthdayWarning}">
								<label class="col-lg-3 col-md-3 control-label">生日</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="birthday" value="${form.birthday}" class="form-control"></div>
								<span class="err">${form.errors.birthday}</span>
							</div>
							<div class="form-group ${form.errors.telWarning}">
								<label class="col-lg-3 col-md-3 control-label">電話</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="tel" value="${form.tel}" class="form-control"></div>
								<span class="err">${form.errors.tel}</span>						
							</div>
							<div class="form-group ${form.errors.passwordWarning}">
								<label class="col-lg-3 col-md-3 control-label">密碼</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="password" value="${form.password}" class="form-control"></div>
								<span class="err">${form.errors.password}</span>
							</div>
							<div class="form-group ${form.errors.password2Warning}">
								<label class="col-lg-3 col-md-3 control-label">密碼確認</label>
								<div class="col-lg-6 col-md-6"><input type="text" name="password2" value="${form.password2}" class="form-control"></div>
								<span class="err">${form.errors.password2}</span>
							</div>
							<div class="form-group">
								<div class="col-lg-offset-4 col-md-offset-4 col-lg-7 col-md-7" >				    
					    		<button type="submit" class="btn btn-default btn-sm" style="margin-right:1em;"><span class="glyphicon glyphicon-plus-sign"></span> 註冊</button>
					    		<a href="#" type="button" class="btn btn-default btn-sm"style="margin-right:1em;"><span class="glyphicon glyphicon-search"></span> 清除</a>				 	
								<a href="${pageContext.request.contextPath}/LoginServlet" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-backward"></span> 返回</a>
							</div>
				</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>