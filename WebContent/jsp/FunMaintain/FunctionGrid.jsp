<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:GridTag gridBean="${FunMaintain_funGrid}" gridName="FunMaintain_funGrid" pageBtnCount="3" 
		castValue="type" castValueAddCol="catalogId=目錄名稱" key="functionId"
		btn="edit,remove" colIn="functionId,functionName,catalogId,type,startDate">
</cust:GridTag>
				