<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>LSY Main.jsp</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/jquery-easyui/easyui.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/LSY/LsyStyle.css">
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery/jquery-2.1.4.js"></script>
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery-easyui/jquery.easyui.min.js"></script>
</head>
<body id="mainBody">
<h3>Main.jsp</h3>
<p><cust:logindata type="userid"/></p>
<p><cust:logindata type="username"/></p>
<p><cust:logindata type="logintime"/></p>

<div style="display:none">
<form role="form" class="form-horizontal" action="${pageContext.request.contextPath}/MainServlet" method="post">
	<a href="${pageContext.request.contextPath}/HomeServlet?action=AutoLogin&times=1" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 單次登入</a>	
	<a href="${pageContext.request.contextPath}/HomeServlet?action=AutoLogin&times=5" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 登入5次</a>
	<a href="${pageContext.request.contextPath}/HomeServlet?action=AutoLogin&times=10" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 登入10次</a>	
	<a href="${pageContext.request.contextPath}/HomeServlet?action=AutoLogin&times=20" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 登入20次</a>	
	<a href="${pageContext.request.contextPath}/HomeServlet?action=AutoLogin&times=50" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 登入50次</a>	
	<a href="${pageContext.request.contextPath}/HomeServlet?action=AutoLogin&times=0" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 查詢</a>	
	<button type="submit" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-plus-sign"></span> 登出</button>				
</form>
</div>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
        <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 2 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 2-1</a></li>
          <li><a href="#">Page 2-2</a></li>
          <li><a href="#">Page 2-3</a></li>
          <li><a href="#">Page 2-4</a></li>
        </ul>
      </li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 3 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 3-1</a></li>
          <li><a href="#">Page 3-2</a></li>
          <li><a href="#">Page 3-3</a></li>
          <li><a href="#">Page 3-4</a></li>
        </ul>
      </li>

      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 4 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 4-1</a></li>
          <li><a href="#">Page 4-2</a></li>
          <li><a href="#">Page 4-3</a></li>
          <li><a href="#">Page 4-4</a></li>
        </ul>
      </li>


    </ul>
  </div>
</nav>

</body>
</html>