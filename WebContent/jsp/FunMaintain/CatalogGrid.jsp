<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:GridTag gridBean="${FunMaintain_catGrid}" gridName="FunMaintain_catGrid" pageBtnCount="3" key="catalogId"
	btn="edit,remove" castValue="type" colIn="functionId,functionName,type,startDate">
</cust:GridTag>
					