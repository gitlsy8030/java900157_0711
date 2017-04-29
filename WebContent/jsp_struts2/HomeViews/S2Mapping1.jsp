<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<%@ taglib uri="/struts-tags" prefix="s2" %>
<%@ taglib uri="/struts-dojo-tags" prefix="s2x" %>
<cust:EasyuiLayout title="S2Mapping1頁面">  
 <div id="dlg" class="easyui-dialog" title="S2Mapping1" data-options="iconCls:'icon-save'" style="width:800px;height:340px;padding:20px 10px">
     <a href="${pageContext.request.contextPath }/S2Home.action" class="easyui-linkbutton" data-options="iconCls:'icon-back'">返回S2Home</a>
 	 <s2:debug />	
 </div>
</cust:EasyuiLayout>