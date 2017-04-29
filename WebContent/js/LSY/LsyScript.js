(function(window,jQuery){ 	
	$.fn.datebox.defaults.formatter = function(date){
		return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
	};
	$.fn.datebox.defaults.parser = function(date){ 
		if(date == ''){
			return new Date();
		}
		else{
			var result=Date.parse(date);			
			return new Date(Date.parse(date));
		}
	};
	String.prototype.fromISOToString=function(){
		var d=new Date(this);
    	var mm='0'+(d.getMonth()+1).toString();
    	var dd='0'+(d.getDate().toString());
    	var dateStr=d.getFullYear()+'/'+
    		mm.substring(mm.length -2)+'/'+
    		dd.substring(dd.length -2);			        	
    	return dateStr;
	};
	//alert(String.prototype.fromISOToString);
	Number.prototype.getFormatString=function(){
		var result=this.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		return result;
	};
	var Lsy={
			init:function(){				
				$('.form_date').datetimepicker({
			        language:  'zh-TW',
			        weekStart: 1,
			        todayBtn:  1,
					autoclose: true,			
					todayHighlight: 1,
					startView: 2,
					minView: 2,
					pickTime: false,
					forceParse: 0,
					pickerPosition: 'bottom-left'
			    });
			},
			simpleGrid:function(jSimpleGridForms){					 
				jSimpleGridForms.each(function(index){					
					setGridEvent($(this));					
				});
				var jSimpleGrids=jSimpleGridForms.closest('table');				
				jSimpleGrids.find('tbody a.gridIcon').on('click',function(e){
					e.stopPropagation();
					var jTr=$(this).closest('tr');
					var jTable=$(this).closest('table');
					var iconType=$(this).attr('iconType');
					jTable.trigger('rowOperate',[jTr,iconType])
										
				});
				jSimpleGrids.find('tbody tr td').on('click',function(){
					var jTr=$(this).closest('tr');
					var jTable=$(this).closest('table');
					jTable.trigger('rowSelected',[jTr]);					
				});
				
				function setGridEvent(thisForm){	//thisForm 指向simpleGrid內的form(保存頁訊息)				
					thisForm.find('ul li a').on('click',function(){	
						var jform=$(this).closest('form');
						var atr=$(this).attr('value');
						var pageNum;
						if(atr == undefined){
							pageNum=$.trim($(this).text());
						}
						else{
							pageNum=$(this).attr('value');
						}						
						thisForm.find('input[name="pageNum"]').val(pageNum);
						getNewPageByAjax(thisForm);				
					});
					thisForm.find('.simpleGridSearchPage a').on('click',function(){
						var page=$(this).prev('input').val();
						var reg = /^[0-9]+$/;
					    var result=reg.test(page);			
						if(result == false 	|| 
							page == 0  		|| 
							page > parseInt( $('input[name=totalPage]').val() )){
							alert('頁碼錯誤，請輸入正確頁碼!');							
						}
						else{				
							thisForm.find('input[name="pageNum"]').val(page);				
							getNewPageByAjax(thisForm);	
						}		
					});
				};
				var getNewPageByAjax=function(thisForm){	//thisForm 指向simpleGrid內的form(保存頁訊息)					
					$.ajax({
						url:'/LSYMain/'+thisForm.find('input[name="url"]').val(),	
						type:"post",
			            dataType:'html',                
			            data:{
			            	pageNum:thisForm.find('input[name=pageNum]').val(),
			            	totalCount:thisForm.find('input[name=totalCount]').val(),
			            	currentPage:thisForm.find('input[name=currentPage]').val(),
			            	pageSize:thisForm.find('input[name=pageSize]').val(),
			            	totalPage:thisForm.find('input[name=totalPage]').val(),
			            	className:thisForm.find('input[name=className]').val(),
							url:thisForm.find('input[name=url]').val(),
			            	searchCondition:thisForm.find('input[name=searchCondition]').val()
			            },				
						async:true,
						success:function(gridHtml){								
							try{								
								var obj=JSON.parse(gridHtml);
								if(obj.code == 'ajaxSessionExpired'){
									location.href='/LSYMain//LoginServlet';
								}						
							}
							catch(e){
								var container=thisForm.closest('div.simpleGridContainer');
								container.empty().append(gridHtml);	
								container.trigger('simpleGridLoad');
							}									
						}
					});
				};			
			},
		simpleGridSelected:function(jSimpleGrids){
			
		},
		ajaxFormLoad:function(jForms){
			jForms.each(function(){
				$(this).find('.form_date').datetimepicker({
			        language:  'zh-TW',
			        weekStart: 1,
			        todayBtn:  1,
					autoclose: true,			
					todayHighlight: 1,
					startView: 2,
					minView: 2,
					pickTime: false,
					forceParse: 0,
					pickerPosition: 'bottom-left'
			    });
			});
		},
		ajaxRedirectFilter:function(htmlContent){
			//alert(htmlContent);
			try{				
				var obj=JSON.parse(htmlContent);
				if(obj.code == 'ajaxSessionExpired'){
					location.href='/LSYMain//LoginServlet';
				}
				else if(obj.code == 'noAuthentication'){
					location.href=obj.url;
				}
			}
			catch(e){
				//alert('error');
			}
		},
		anotherFunxxx:function(){
			
		}
	};
	window.Lsy=Lsy;	
})(window,jQuery);