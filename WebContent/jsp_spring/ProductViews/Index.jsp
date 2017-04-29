<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:EasyuiLayout title="Spring產品維護Index" bodyclass="spring_easyui">
 <div id="searchContainer" class="content-fluid" style="heigth:25%;padding-top:1em;margin:5px 5px 0 5px;border:1px solid #ccc;background-color:#f8f8f8"> 
     <form id="productForm" calss="form-horizontal1" action="${pageContext.request.contextPath}/Product_Search.spring"  method="post" style="">	 
		<div class="row">				
			<div class="col-lg-4 col-md-4">
				<div class="form-group">
					<input class="easyui-textbox" name="productId" style="width:60%" value="${productSearch.productId}"
	             		data-options="label:'產品編號&nbsp',labelWidth:80,labelAlign:'right',required:false,validType:'minLength[3]'">
				</div>
			</div>
			<div class="col-lg-4 col-md-4">
				<div class="form-group">
					<input class="easyui-textbox" name="productName" style="width:60%"  value="${productSearch.productName}"
	             		data-options="label:'產品名稱&nbsp',labelWidth:80,labelAlign:'right',required:false,validType:'minLength[3]'">
				</div>
			</div>
			<div class="col-lg-4 col-md-4">
				<div class="form-group">					
					<%-- <input id="categoriesDDL" name="categoryId" value="${productSearch.categoryId}"> --%>
					<input id="categoriesDDL" class="easyui-combobox" name="categoryId" style="width:60%;"  value="${productSearch.categoryId }">
	             </div>
			</div>        		
		</div>
		<div class="row">				
			<div class="col-lg-4 col-md-4">				
				<div class="form-group">
					<input id="supplierDDL" class="easyui-combobox" name="supplierId" style="width:60%;" value="${productSearch.supplierId }" 
					data-options="
                    valueField: 'supplierId',
                    textField: 'supplierName',
                    url:'Product_GetDDL.spring?ddlName=suppliers',
                    label: '供應商&nbsp',
                    labelAlign: 'right',
                    labelWidth:80
                    ">
				</div>	 
			</div>
			<div class="col-lg-4 col-md-4">				
				<div class="form-group">
					<input name="onlineDateStart" class="easyui-datebox" value="${ productSearch.onlineDateStart}"
					 		label="上架日期&nbsp" labelWidth="80" labelAlign="right", style="width:58%;">~				
					<input name="onlineDateEnd" class="easyui-datebox" value="${ productSearch.onlineDateEnd}" style="width:34%;">
			    </div> 
			</div>	
			<div class="col-lg-4 col-md-4">				
				<div class="form-group" >
					<input class="easyui-textbox" name="priceMin" style="width:56%" value="${productSearch.priceMin }"
             		data-options="label:'價格&nbsp',labelWidth:80,labelAlign:'right',required:false,min:0,precision:2">~				
					<input class="easyui-textbox" name="priceMax" style="width:32%;" value="${productSearch.priceMax }"
             		data-options="required:false,min:0,precision:2">
			    </div> 
			</div>	                		
		</div>
		
		<div class="row">				
			<div class="col-lg-8 col-md-8">
			</div>	 
			<div class="col-lg-4 col-md-4">
				<div class="form-group">
					<div class="text-right" style="padding:5px 15px;">						 
				         <a  id="btnSearch" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search',iconAlign:'left'" 
				         onclick="$('#productForm').submit()" style="width:80px;margin-right:5px;">查詢</a>				         
				     </div>
			    </div> 
			</div>	                		
		</div>
     </form>         
 </div>
 <input id="productsTableData" type="hidden" value='${productsTableData}' >
 <input id="productsCategoriesDDL" type="hidden" value='${productsCategoriesDDL}' >
 <input id="productsSuppliersDDL" type="hidden" value='${productsSuppliersDDL}' > 
 <div id="productsTableContainer" class="simpleGridContainer" style="padding:5px;">
	<table id="productsTable" class="easyui-datagrid" style="width:100%;height:450px;"></table>
 </div> 
</cust:EasyuiLayout>
<script type="text/javascript">
	$(function(){		
		$('#categoriesDDL').combobox({
			valueField: 'categoryId',
            textField: 'categoryName',
            url:'Product_GetDDL.spring?ddlName=categories',            
            label: '商品分類&nbsp',
            labelAlign: 'right',
            labelWidth:80
		});
		var productsData=JSON.parse($('#productsTableData').val());	
		var categoriesDDL=JSON.parse($('#productsCategoriesDDL').val());
		var suppliersDDL=JSON.parse($('#productsSuppliersDDL').val());	
		if($('#productsTableData').val() != '' ){
			$('#productsTable').datagrid({		    
				data:productsData,
			    fitColumns:true,
			    resizeHandle:'both',
			    toolbar:[{
			    	iconCls:'icon-add',
			    	text:'新增',
			    	handler:function(){		    		
			    		location.href='/LSYMain/Product_Add.spring';
			    	}
			    }],		    
			    singleSelect:true,
			    remoteFilter: false,
			    pagination:true,
			    pageNumber:1,
			    pageSize:8,
			    pageList:[4,6,8,10],			    		    
			    columns:[[
					{field:'opfield',title:'選擇',width:60,halign:'center',
						 formatter:function(value,row,index){
							    var url_view='/LSYMain/Product_View.spring?productId='+row.productId;
							    var url_edit='/LSYMain/Product_Edit.spring?productId='+row.productId;
							    var url_remove='/LSYMain/Product_Remove.spring?productId='+row.productId;
							 	return '<div id="tb" class="text-center">'+
						 				'<a href="'+url_view+'\"'+' style="margin-right:3px;" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-search\',size:\'small\'"></a>'+
						 				'<a href="'+url_edit+'\"'+' style="margin-right:3px;" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-edit\',size:\'small\'"></a>'+
						 				'<a href="#" removeUrl="'+url_remove+'\"'+' style="margin-right:3px;" class="easyui-linkbutton btnRemove" data-options="plain:true,iconCls:\'icon-cut\',size:\'small\'"></a>'+
							    		'</div>';
						 }			        
					},
			        {field:'productId',title:'商品編號',width:60,align:'center'},
			        {field:'productName',title:'商品名稱',width:110,halign:'center'},
			        {field:'productDesc',title:'商品說明',width:200,halign:'center'},
			        {field:'categoryId',title:'商品分類',width:80,halign:'center',
		        	 formatter:function(value,row,index){
		        		 for(var i=0;i< categoriesDDL.length;i++){
		        			if(value == categoriesDDL[i].categoryId){
		        				return categoriesDDL[i].categoryId+'-'+categoriesDDL[i].categoryName;
		        			} 
		        		 }
		        	 }	
			        },
			        {field:'supplierId',title:'供應商',width:130,halign:'center',
		        	 formatter:function(value,row,index){
		        		 for(var i=0;i< suppliersDDL.length;i++){
		        			if(value == suppliersDDL[i].supplierId){
		        				return suppliersDDL[i].supplierId+'-'+suppliersDDL[i].supplierName;
		        			} 
		        		 }
		        	  }		
			        },
			        {field:'price',title:'價格',width:60,align:'right',halign:'center',
		        	 formatter:function(value,row,index){return value.getFormatString();},		
			        },
			        {field:'onlineDate',title:'上架日',width:80,align:'center',halign:'center',
			         formatter:function(value,row,index){return value.fromISOToString();},	
			        }			        
			    ]],
			    onLoadSuccess:function(){			    	
			    	$(this).datagrid('getPanel').find('a.easyui-linkbutton').linkbutton();
			    	$(this).datagrid('getPanel').find('a.btnRemove').on('click',function(e){
			    		var href=$(this).attr('removeUrl');			    		
			    		$.messager.confirm('LSYMain提示訊息','請確認是否刪除！',function(yes){				
							if(yes){
								$.ajax({
									url:href,	
									type:"get",
						            dataType:'text',
									async:true,
									success:function(data){
										Lsy.ajaxRedirectFilter(data);
										var jsonData=JSON.parse(data);
										$.messager.show({
							                title:'LSYMain提示訊息',
							                msg:jsonData.deleteMessage,							                
							                style:{
							                    right:'',
							                    bottom:''
							                },
							                width:300,
							                height:140,
							                timeout:0,
							                onClose:function(){
							                	$('#btnSearch').trigger('click');
							                }
							            });	
									}
								});
							}				
						}); 
			    	})
			    }
			});
		}		
	});
</script>

