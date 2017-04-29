<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:BaseLayout title="批次自動登入">	
	<div id="searchContainer" class="content-fluid" style="heigth:20%;margin:5px;border:1px solid #ccc">
		<form role="form" id="BatchThreadLoginForm" class="form-horizontal">		
			
			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">批次次數</label>
						<div class="col-lg-9 col-md-9">
							<label class="radio-inline"><input type="radio" name="count" value="5" checked>5</label> 
						    <label class="radio-inline"><input type="radio" name="count" value="10">10</label>
						    <label class="radio-inline"><input type="radio" name="count" value="20">20</label>
						    <label class="radio-inline"><input type="radio" name="count" value="30">30</label>
						    <label class="radio-inline"><input type="radio" name="count" value="50">50</label>
						    <label class="radio-inline"><input type="radio" name="count" value="100">100</label>
						</div>
					</div>	 
				</div>  	
				<div class="col-lg-4 col-md-4">					
	                <div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">批次間隔</label>
						<div class="col-lg-4 col-md-4">
							<select class="form-control input-sm" name="time">
								<option value="0.5" selected>0.5秒</option>
								<option value="1">1秒</option>	
								<option value="2">2秒</option>	
								<option value="5">5秒</option>	
								<option value="10">10秒</option>
								<option value="20">20秒</option>
								<option value="30">30秒</option>															
					        </select>
						</div>
					</div>	                	                						
	            </div>	
				<div class="col-lg-4 col-md-4">	
					<div class="form-group">
						<div class="col-lg-offset-3 col-md-offset-3 col-lg-9 col-md-9">	
							<button id="batchLogin" type="button" class="btn btn-sm btn-default">
								<span class="glyphicon glyphicon-log-in"></span> 執行批次自動登入
							</button>	
							<button id="batchLoginStop" type="button" class="btn btn-sm btn-default">
								<span class="glyphicon glyphicon-log-in"></span> Stop批次登入
							</button>						
						</div>		
					</div>
				</div>
			</div>							
		</form>
	</div>
	<div id="tableContainer" class="content-fluid" style="heigth:80%;margin:5px;border:1px solid #ccc">		
		<table class="table table-striped table-bordered table-hover table-condensed" style="margin-bottom:0;">
			<thead>
				<tr>
	                <th colspan="13" class="text-left">
	               		 自動登入總筆數：<label id="totalCount">0</label>&nbsp;&nbsp;
	               		目前筆數：<label id="currentCount">0</label>
	                </th>
	            </tr>
				<tr>
					<th>帳號</th>
					<th>姓名</th>
					<th>英文姓名</th>
					<th>生日</th>
					<th>電話</th>
					<th>email</th>
					<th>部門</th>
					<th>群組</th>
					<th>登入時間</th>					
					<th>目前網頁</th>
					<th>目前網址</th>
					<th>最近瀏覽</th>
					<th>session</th>			
				</tr>
			</thead>
			<tbody>		
			</tbody>
		</table>			
	</div>	
</cust:BaseLayout>
<script type="text/javascript">
	$(function(){
		var processor;
		var counter=0;
		var times=0;
		var count=0;
		var startLoginAjax=function(){				
			$.ajax({
				url:"${pageContext.request.contextPath}/BatchThreadLoginServlet?action=AutoLogin_Ajax",
				type:"post",
                dataType:'html',                
                data:{
                	
                },
				async:true,
				success:function(rowHtml){					
					try{
						var obj=JSON.parse(rowHtml);
						if(obj.code == 'ajaxSessionExpired'){
							location.href='${pageContext.request.contextPath}/LoginServlet';
						}						
					}
					catch(e){
						$('#tableContainer table tbody').prepend(rowHtml);
						counter +=1;
						$('#totalCount').text(count);
						$('#currentCount').text(counter);
						if(counter >= count){
							endLoginAjax();
							return;
						}
					}
					
				}
			});
		};
		var endLoginAjax=function(){
			times=0;
			count=0;
			counter=0;
			processor =clearInterval(processor);
		};
		$('#batchLogin').on('click',function(){
			times=$('#BatchThreadLoginForm select[name=time]').val();
			count=$('#BatchThreadLoginForm input[name=count]:checked').val();
			$('#tableContainer table tbody').empty();
			processor =setInterval(startLoginAjax,parseFloat(times) * 1000);
		});
		$('#batchLoginStop').on('click',function(){
			endLoginAjax();
		});		
	});
</script>