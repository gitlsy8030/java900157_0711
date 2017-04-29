<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<META HTTP-EQUIV="Refresh" CONTENT="3; URL=${pageContext.request.contextPath}/LoginServlet" >
<title>403</title>
</head>
<body>
	<h4>訪問本網站請由首頁登入，系統將於3秒後自動導向網站登入頁面...</h4>	
	<%System.out.println("403.jsp"); %>	
</body>
</html>