<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout title="Controller式映射">  
 <div id="dlg" class="easyui-dialog" title="${Impl_Controller}" data-options="iconCls:'icon-save'" style="width:600px;height:280px;padding:20px 10px">
     <a href="/LSYMain/SpringMvcHome.spring" class="easyui-linkbutton" data-options="iconCls:'icon-back'">返回SpringMvcHome</a>
 	<h4>${aspectData }</h4>
 	<p>此方法與原生servlet寫法幾乎相近，可用於欲返回json數據之ajax請求</p>	
 </div>
</cust:EasyuiLayout>