<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:BaseLayout title="目錄及功能維護" isPartialJsp="${isPartialJsp}">	
	<div class="row" style="height:99%;">
		<div id="container_cat" class="col-lg-6 col-md-6" style="height:99%;padding-right:0;">
			<div id="searchContainer_cat" class="content-fluid" style="heigth:30%;margin:5px;border:1px solid #ccc">				
				<jsp:include page="/jsp/FunMaintain/CatalogForm.jsp" flush="true" />				
			</div>
			<div id="tableContainer_cat" class="content-fluid simpleGridContainer" style="heigth:70%;margin:5px;border:1px solid #ccc">
				<cust:GridTag gridBean="${FunMaintain_catGrid}" gridName="FunMaintain_catGrid" pageBtnCount="3" 
					btn="edit,remove" castValue="type" key="catalogId" colIn="functionId,functionName,type,startDate"></cust:GridTag>
			</div>
		</div>
		<div id="container_fun" class="col-lg-6 col-md-6" style="height:99%;padding-left:0;">
			<div id="searchContainer_fun" class="content-fluid" style="heigth:30%;margin:5px;border:1px solid #ccc">
				<jsp:include page="/jsp/FunMaintain/FunctionForm.jsp" />
			</div>
			<div id="tableContainer_fun" class="content-fluid simpleGridContainer" style="heigth:70%;margin:5px;border:1px solid #ccc">
				<cust:GridTag gridBean="${FunMaintain_funGrid}" gridName="FunMaintain_funGrid" pageBtnCount="3" 
					btn="edit,remove" castValue="type" castValueAddCol="catalogId=目錄名稱" key="functionId"
					colIn="functionId,functionName,catalogId,type,startDate"></cust:GridTag>
			</div>
		</div>
	</div>
	<div id="funcat_dialog" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> 
					<h3 id="funcat_dialog_title" class="modal-title">目錄新增</h3>
				</div>
				<div id="funcat_dialog_content" class="modal-body" style="padding:0;">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">關閉</button>
					<button id="funcat_dialog_save" type="button" class="btn btn-default btn-sm" data-dismiss="modal">確定</button>
				</div> 
			</div>
		<input id="dialog_type" type="hidden" value=""/>
		</div>
	</div>
</cust:BaseLayout>
<script type="text/javascript">
	$(function(){
		//Lsy.init();
		var initFlag=true;
		$('#searchContainer_cat,#searchContainer_fun').on('ajaxFormLoad',function(){
			Lsy.ajaxFormLoad($(this));			
			if($(this).attr('id') == 'searchContainer_cat'){
				$('#cat_add').on('click',function(){
					operate.cat(null,'add');
				});
			}
			else if($(this).attr('id') == 'searchContainer_fun'){
				$('#fun_add').on('click',function(){
					operate.fun(null,'add');
				});
			}
			
		})		
		$('.simpleGridContainer').on('simpleGridLoad',function(e,type){			
			var jForm=$(this).find('form');
			var jTable=$(this).find('table');		
			Lsy.simpleGrid($(this).find('.simpleGridForm'));
			if(jTable.attr('id') == 'FunMaintain_catGrid'){
				initFlag=false;
			}
			jTable.on('rowSelected',function(e,jSelectedRow,jForm){
				if(jTable.attr('id') == 'FunMaintain_funGrid'){
					selected.fun(jSelectedRow,jForm);
				}
				else{
					selected.cat(jSelectedRow,jForm);
				}				
			});
			jTable.on('rowOperate',function(e,jSelectedRow,type){
				if(jTable.attr('id') == 'FunMaintain_funGrid'){
					operate.fun(jSelectedRow,type);
				}
				else{
					operate.cat(jSelectedRow,type);
				}	
			});			
			if(jTable.attr('id') == 'FunMaintain_catGrid' && type != 'catGrid_init'){ //若非catGrid首次Load，觸發catalog第一筆selected
				if(jTable.find('tbody tr').length > 0){
					jTable.find('tbody tr:eq(0) td:eq(0)').trigger('click');
				}
			}			
		});	
		$('#funcat_dialog_save').on('click',function(){
			var formType=$('div.modal-dialog #dialog_type').val();
			var jForm=$(this).closest('div.modal-dialog').find('div.modal-body form');
			var formId=jForm.attr('id')
			if(formId == 'form_cat'){
				switch(formType){
					case 'add':						
						catSave.add(jForm);
						break;				
					case 'edit':
						catSave.edit(jForm);
						break;
					case 'remove':
						catSave.remove(jForm);
						break;
				}
			}
			else{
				switch(formType){
					case 'add':
						funSave.add(jForm);
						break;				
					case 'edit':
						funSave.edit(jForm);
						break;
					case 'remove':
						funSave.remove(jForm);
						break;
				}
			}			
			
		});	
		var selected={
			fun:function(row,jForm){
				var functionId=row.find('span.key_functionId').text();				
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=GetFunctionById_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:{
		            	formType:'view',
		            	functionId:functionId		            	
		            },				
					async:true,
					success:function(funForm){
						Lsy.ajaxRedirectFilter(funForm);
						var container_form=$('#searchContainer_fun');
						container_form.empty().append(funForm);	
						container_form.trigger('ajaxFormLoad');
					}
				});
			},
			cat:function(row){
				var catalogId=row.find('span.key_catalogId').text();
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=CatalogChanged_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:{
		            	catalogId:catalogId		            	
		            },				
					async:true,
					success:function(funContent){	
						Lsy.ajaxRedirectFilter(funContent);														
						var table_reg=/<table[^>]*>[\s\S]*?<\/table>/;
						var form_reg=/<form role="form" id="form_fun"[^>]*>[\s\S]*?<\/form>/gi;
						var tb=table_reg.exec(funContent);
						var fm=form_reg.exec(funContent);							
						var container_grid=$('#tableContainer_fun');
						var container_form=$('#searchContainer_fun');
						container_grid.empty().append(tb);
						container_form.empty().append(fm);
						container_grid.trigger('simpleGridLoad');	
						container_form.trigger('ajaxFormLoad');	
					}
				});
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=GetCatalogById_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:{
		            	formType:'view',
		            	catalogId:catalogId		            	
		            },				
					async:true,
					success:function(catForm){
						Lsy.ajaxRedirectFilter(catForm);
						var container_form=$('#searchContainer_cat');
						container_form.empty().append(catForm);	
						container_form.trigger('ajaxFormLoad');
					}
				});
			}
		}
		var operate={
			fun:function(jRow,type){
				var functionId=(jRow === null) ? null:jRow.find('span.key_functionId').text();	
				var catalogId=$('#searchContainer_cat form input[name=functionId]').val();				
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=GetFunctionById_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:{		            	
		            	formType:type,
		            	functionId:functionId,
		            	catalogId:catalogId
		            },				
					async:true,
					success:function(funForm){
						Lsy.ajaxRedirectFilter(funForm);
						var dialog_body=$('#funcat_dialog .modal-body');
						var title='功能維護視窗-';
						if(type == 'add'){
							title +='新增';
						}
						else if(type == 'edit'){
							title +='編輯';
						}
						else{
							title +='刪除';
						}
						$('#funcat_dialog .modal-title').text(title);
						$('div.modal-dialog #dialog_type').val(type);
						dialog_body.empty().append(funForm);
						$('#funcat_dialog').appendTo('body').modal('show');										
					}
				});
				
			},
			cat:function(jRow,type){
				var catalogId=(jRow === null) ? null:jRow.find('span.key_catalogId').text();							
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=GetCatalogById_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:{
		            	formType:type,
		            	catalogId:catalogId		            	
		            },				
					async:true,
					success:function(catForm){	
						Lsy.ajaxRedirectFilter(catForm);						
						var dialog_body=$('#funcat_dialog .modal-body');
						var title='目錄維護視窗-';
						if(type == 'add'){
							title +='新增';
						}
						else if(type == 'edit'){
							title +='編輯';
						}
						else{
							title +='刪除';
						}
						$('#funcat_dialog .modal-title').text(title);
						$('div.modal-dialog #dialog_type').val(type);
						dialog_body.empty().append(catForm);
						$('#funcat_dialog').appendTo('body').modal('show');
					}
				});
			}
		};		
		var catSave={
			add:function(jForm){
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=AddCatalog_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:getData.formData(jForm),				
					async:true,
					success:function(htmlContent){
						Lsy.ajaxRedirectFilter(htmlContent);						
						setData.catForm(htmlContent);
						setData.catTable(htmlContent);
						setData.funForm(htmlContent);
						setData.funTable(htmlContent);
						$('#tableContainer_cat').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_cat').trigger('ajaxFormLoad');	
						$('#tableContainer_fun').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_fun').trigger('ajaxFormLoad');	
					}
				});
			},
			edit:function(jForm){				
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=EditCatalog_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:getData.formData(jForm),				
					async:true,
					success:function(htmlContent){
						Lsy.ajaxRedirectFilter(htmlContent);
						setData.catForm(htmlContent);
						setData.catTable(htmlContent);
						setData.funForm(htmlContent);
						setData.funTable(htmlContent);
						$('#tableContainer_cat').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_cat').trigger('ajaxFormLoad');	
						$('#tableContainer_fun').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_fun').trigger('ajaxFormLoad');
					}
				});
			},
			remove:function(jForm){
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=RemoveCatalog_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:getData.formData(jForm),				
					async:true,
					success:function(htmlContent){
						Lsy.ajaxRedirectFilter(htmlContent);						
						setData.catForm(htmlContent);
						setData.catTable(htmlContent);
						setData.funForm(htmlContent);
						setData.funTable(htmlContent);
						$('#tableContainer_cat').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_cat').trigger('ajaxFormLoad');	
						$('#tableContainer_fun').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_fun').trigger('ajaxFormLoad');	
					}
				});
			}
		};
		var funSave={
			add:function(jForm){
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=AddFunction_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:getData.formData(jForm),				
					async:true,
					success:function(htmlContent){
						Lsy.ajaxRedirectFilter(htmlContent);
						setData.funForm(htmlContent);
						setData.funTable(htmlContent);								
						$('#tableContainer_fun').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_fun').trigger('ajaxFormLoad');	
					}
				});
			},
			edit:function(jForm){
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=EditFunction_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:getData.formData(jForm),				
					async:true,
					success:function(htmlContent){
						Lsy.ajaxRedirectFilter(htmlContent);
						setData.funForm(htmlContent);
						setData.funTable(htmlContent);								
						$('#tableContainer_fun').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_fun').trigger('ajaxFormLoad');	
					}
				});
			},
			remove:function(jForm){
				$.ajax({
					url:'/LSYMain/FunMaintainServlet?action=RemoveFunction_Ajax',	
					type:"post",
		            dataType:'html',                
		            data:getData.formData(jForm),				
					async:true,
					success:function(htmlContent){
						Lsy.ajaxRedirectFilter(htmlContent);
						setData.funForm(htmlContent);
						setData.funTable(htmlContent);								
						$('#tableContainer_fun').trigger('simpleGridLoad',['catGrid_init']);	
						$('#searchContainer_fun').trigger('ajaxFormLoad');
					}
				});
			}
		};
		var getData={
			formData:function(jForm){
				var result={};
				jForm.find('input,select').each(function(index){
					var name=$(this).attr('name');
					var val=$(this).val();
					result[name]=val;				
				});
				return result;
			}
		};
		var setData={
			funForm:function(htmlContent){
				var form_reg_fun=/<form role="form" id="form_fun"[^>]*>[\s\S]*?<\/form>/gi;				
				var fm_fun=form_reg_fun.exec(htmlContent);
				var container_form_fun=$('#searchContainer_fun');
				container_form_fun.empty().append(fm_fun);	
			},
			catForm:function(htmlContent){
				var form_reg_cat=/<form role="form" id="form_cat"[^>]*>[\s\S]*?<\/form>/gi;				
				var fm_cat=form_reg_cat.exec(htmlContent);
				var container_form_cat=$('#searchContainer_cat');
				container_form_cat.empty().append(fm_cat);
				
			},
			funTable:function(htmlContent){				
				var table_reg_fun=/<table id="FunMaintain_funGrid"[^>]*>[\s\S]*?<\/table>/;				
				var tb_fun=table_reg_fun.exec(htmlContent);										
				var container_grid_fun=$('#tableContainer_fun');				
				container_grid_fun.empty().append(tb_fun);
			},
			catTable:function(htmlContent){
				var table_reg_cat=/<table id="FunMaintain_catGrid"[^>]*>[\s\S]*?<\/table>/;				
				var tb_cat=table_reg_cat.exec(htmlContent);										
				var container_grid_cat=$('#tableContainer_cat');
				container_grid_cat.empty().append(tb_cat);				
			}
		};		
		$('#searchContainer_cat').trigger('ajaxFormLoad');
		$('#searchContainer_fun').trigger('ajaxFormLoad');
		$('#tableContainer_cat').trigger('simpleGridLoad',['catGrid_init']);		
		$('#tableContainer_fun').trigger('simpleGridLoad');	
	});
</script>
