<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout title="基於Annotation映射">
	<input id="funsData" type="hidden" value='${QueryFuns}' >
	<div id="#tableContainer" class="simpleGridContainer" style="padding:5px;">
		<table id="funTable" class="easyui-datagrid" style="height:250px;"></table>
	</div>
	<h4>${aspectData }</h4>
</cust:EasyuiLayout> 
<script type="text/javascript">
	$(function(){		
		var funsData=JSON.parse($('#funsData').val());
		$('#funTable').datagrid({
		    //url:'datagrid_data.json',
		    data:funsData,
		    fitColumns:true,
		    resizeHandle:'both',
		    toolbar:[{
		    	iconCls:'icon-back',
		    	handler:function(){		    		
		    		location.href='/LSYMain/SpringMvcHome.spring';
		    	}
		    }],		    
		    singleSelect:true,
		    remoteFilter: false,
		    pagination:true,
		    pageNumber:1,
		    pageSize:8,
		    pageList:[4,6,8,10],		    
		    columns:[[
		        {field:'functionId',title:'功能代號',width:80},
		        {field:'functionName',title:'功能名稱',width:140},
		        {field:'catalogId',title:'目路代號',width:80},
		        {field:'type',title:'類別',width:40},
		        {field:'startDate',title:'類別',width:40},
		        {field:'url',title:'網址',width:120}
		    ]]
		});
		$('#funTable').datagrid('enableFilter');
		//$('#funTable').datagrid('loadData', funsData);
	});
</script>	