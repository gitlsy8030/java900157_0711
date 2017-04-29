<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout title="HttpHandler式映射"> 
 <div style="margin:20px 0;">     
 </div>
 <div id="dlg" class="easyui-dialog" title="${Impl_HttpRequestHandler}" data-options="iconCls:'icon-save'" style="width:600px;height:280px;padding:20px 10px">
     <a href="/LSYMain/SpringMvcHome.spring" class="easyui-linkbutton" data-options="iconCls:'icon-back'">返回SpringMvcHome</a>
 	<h4>${aspectData }</h4>
 </div>
</cust:EasyuiLayout>