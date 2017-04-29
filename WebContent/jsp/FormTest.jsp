<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:BaseLayout>
	<div style="opacity:0.7" class="container-fluid" style="height:30%">
		<form class="form-horizontal" role="form">
			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">部門</label>
						<div class="col-lg-6 col-md-6">
							<select class="form-control input-sm" id="department">							
								<option value="Adm">管理部</option>
								<option value="Inter">國外業務部</option>
								<option value="Domanstic">國內業務部</option>
								<option value="Oper">作業中心</option>
								<option value="Acc">財務部</option>
								<option value="Sal">產品部</option>
								<option value="Tec">研發部</option>
								<option value="HR">人力資源部</option>								
					        </select>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">群組</label>
						<div class="col-lg-6 col-md-6">
							<select class="form-control input-sm" id="group">							
								<option value="0">一般帳戶</option>
								<option value="1">作業</option>
								<option value="2">業務</option>
								<option value="3">駐點</option>
								<option value="4">主管</option>
								<option value="5">系統管理</option>														
					        </select>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
		                <label for="dtp_input2" class="col-lg-3 col-md-3 control-label">生日</label>
		                <div class="input-group date form_date col-lg-6 col-md-6" data-date-format="yyyy-mm-dd" >
		                    <input class="form-control input-sm" type="text" value="">		                  
							<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>							
		                </div>		                						
		            </div>
				</div> 				
			</div>
			<div class="row">				
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
		                <label class="col-lg-3 col-md-3 control-label">登入時間</label>
		                <div class="col-lg-9 col-md-9 form-inline">
			                <div class="input-group date form_date" data-date-format="yyyy-mm-dd" style="width:45%">
			                    <input class="form-control input-sm" type="text" value="">		                  
								<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>							
			                </div>至
			                <div class="input-group date form_date " data-date-format="yyyy-mm-dd" style="width:45%" >
			                    <input class="form-control input-sm" type="text" value="">		                  
								<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>							
			                </div>
		                </div>			                						
		            </div>
				</div> 
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label"">姓名</label>
						<div class="col-lg-6 col-md-6" >
							<input type="text" value="" class="form-control input-sm" />
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<div class="col-lg-offset-3 col-md-offset-3 col-lg-9 col-md-9">	
			                <button type="submit" class="btn btn-sm btn-default">
									<span class="glyphicon glyphicon-search"></span> 查詢目前上線帳戶
							</button>
						</div>
	                </div>	
				</div>  	 					                		
			</div>			
			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">批次次數</label>
						<div class="col-lg-9 col-md-9">
							<label class="radio-inline"><input type="radio">5</label> 
						    <label class="radio-inline"><input type="radio">10</label>
						    <label class="radio-inline"><input type="radio">20</label>
						    <label class="radio-inline"><input type="radio">30</label>
						    <label class="radio-inline"><input type="radio">50</label>
						</div>
					</div>	 
				</div>  	
				<div class="col-lg-4 col-md-4">					
	                <div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">批次間隔</label>
						<div class="col-lg-9 col-md-9">
							<label class="checkbox-inline"><input type="checkbox">2秒</label> 
						    <label class="checkbox-inline"><input type="checkbox">5秒</label>
						    <label class="checkbox-inline"><input type="checkbox">10秒</label>
						    <label class="checkbox-inline"><input type="checkbox">30秒</label>
						</div>
					</div>	                	                						
	            </div>	
				<div class="col-lg-4 col-md-4">	
					<div class="form-group">
						<div class="col-lg-offset-3 col-md-offset-3 col-lg-9 col-md-9">	
							<button type="submit" class="btn btn-sm btn-default">
								<span class="glyphicon glyphicon-log-in"></span> 執行批次自動登入
							</button>							
						</div>		
					</div>
				</div>
			</div>							
		</form>		
	</div>
	<!-- <div class="form-group">
      <label for="dtp_input2" class="col-lg-3 col-md-3 control-label">UID序號</label>
      <div class="col-lg-9 col-md-9 form-inline">			                
          <input class="form-control input-sm" type="text" value="" style="width:20%">	
          <input class="form-control input-sm" type="text" value="" style="width:20%">
          <input class="form-control input-sm" type="text" value="" style="width:20%">
          <input class="form-control input-sm" type="text" value="" style="width:20%"> 
      </div>
   </div> -->
  <!-- <ul class="pagination">
    <li><a href="#"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
  </ul> -->
</cust:BaseLayout>
<script type="text/javascript">
	$(function(){
		$('.form_date').datetimepicker({
	        language:  'zh-TW',
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: true,			
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			pickerPosition: 'bottom-left'
	    });
		$('#datetimepicker2').datetimepicker({
			pickDate:true,
			pickTime: true,
			useMinutes: false, 
			format:'yyyy-mm-dd',
	        weekStart: 7,
	        todayBtn:  1,
			autoclose: true,			
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			startDate: "2013-02-14 10:00",
			pickerPosition: 'bottom-left'
		});
		$(".form_datetime").datetimepicker({
	        format: "dd MM yyyy - hh:ii",
	        autoclose: true,
	        todayBtn: true,
	        startDate: "2013-02-14 10:00",
	        minuteStep: 10
	    });

	});
</script>


