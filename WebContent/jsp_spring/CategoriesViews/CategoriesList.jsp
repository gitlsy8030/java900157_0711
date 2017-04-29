<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout title="商品類別List查詢">	
	<div id="categoriesTableContainer" class="simpleGridContainer" style="padding:5px;">
		<table id="categoriesTable" class="easyui-datagrid" style="width:50%;height:300px;"></table>
 	</div> 	
</cust:EasyuiLayout> 
<script type="text/javascript">
	$(function(){
		$('#categoriesTable').datagrid({
		    url:'Categories_Get.spring',
		    fitColumns:true,
		    toolbar:[{
		    	iconCls:'icon-add',
		    	text:'新增',
		    	handler:function(){		    		
		    		location.href='/LSYMain/Categories_Add.spring';
		    	}
		    }],		 
		    resizeHandle:'both',		    	    
		    singleSelect:true,
		    remoteFilter: false,
		    pagination:true,
		    pageNumber:1,
		    pageSize:8,
		    pageList:[4,6,8,10],		    
		    columns:[[
				{field:'opfield',title:'選擇',width:45,halign:'center',
						 formatter:function(value,row,index){							    
							    var url_edit='/LSYMain/Categories_Edit.spring?categoryId='+row.categoryId;
							    var url_remove='/LSYMain/Categories_Edit.spring?categoryId='+row.categoryId;
							 	return '<div id="tb" class="text-center">'+						 			
						 				'<a href="'+url_edit+'\"'+' style="margin-right:3px;" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-edit\',size:\'small\'"></a>'+
						 				'<a href="#" removeUrl="'+url_remove+'\"'+' style="margin-right:3px;" class="easyui-linkbutton btnRemove" data-options="plain:true,iconCls:\'icon-cut\',size:\'small\'"></a>'+
							    		'</div>';
						 }			        
					},     
		        {field:'categoryId',title:'商品類別代號',width:60},
		        {field:'categoryName',title:'商品類別名稱',width:120}		       
		    ]],
		    onLoadSuccess:function(){
		    	$(this).datagrid('getPanel').find('a.easyui-linkbutton').linkbutton();
		    }
		});
		$('#categoriesTable').datagrid('enableFilter');		
	});
</script>	