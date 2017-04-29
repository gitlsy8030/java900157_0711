<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<cust:BaseLayout title="線上用戶查詢">	
	<div id="searchContainer" class="content-fluid" style="heigth:20%;margin:5px;border:1px solid #ccc">
		<form role="form" id="homeForm" class="form-horizontal" action="${pageContext.request.contextPath}/HomeServlet?action=GetPageDataBySearch" method="post">		
			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">部門</label>
						<div class="col-lg-6 col-md-6">
							<select class="form-control input-sm" name="department">	
								<option value="">請選擇</option>						
								<option value="Adm" <c:if test="${ form.department == 'Adm' }">selected</c:if>>管理部</option>
								<option value="Inter"  <c:if test="${ form.department == 'Inter' }">selected</c:if>>國外業務部</option>
								<option value="Domanstic"  <c:if test="${ form.department == 'Domanstic' }">selected</c:if>>國內業務部</option>
								<option value="Oper"  <c:if test="${ form.department == 'Oper' }">selected</c:if>>作業中心</option>
								<option value="Acc" <c:if test="${ form.department == 'Acc' }">selected</c:if>>財務部</option>
								<option value="Sal" <c:if test="${ form.department == 'Sal' }">selected</c:if>>產品部</option>
								<option value="Tec" <c:if test="${ form.department == 'Tec' }">selected</c:if>>研發部</option>
								<option value="HR" <c:if test="${ form.department == 'HR' }">selected</c:if>>人力資源部</option>								
					        </select>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label">群組</label>
						<div class="col-lg-6 col-md-6">
							<select class="form-control input-sm" name="group">	
								<option value="">請選擇</option>						
								<option value="0" <c:if test="${ form.group == '0' }">selected</c:if>>一般帳戶</option>
								<option value="1" <c:if test="${ form.group == '1' }">selected</c:if>>作業</option>
								<option value="2" <c:if test="${ form.group == '2' }">selected</c:if>>業務</option>
								<option value="3" <c:if test="${ form.group == '3' }">selected</c:if>>駐點</option>
								<option value="4" <c:if test="${ form.group == '4' }">selected</c:if>>主管</option>
								<option value="5" <c:if test="${ form.group == '5' }">selected</c:if>>系統管理</option>														
					        </select>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
		                <label for="dtp_input2" class="col-lg-3 col-md-3 control-label">生日</label>
		                <div class="input-group date form_date col-lg-6 col-md-6" data-date-format="yyyy/mm/dd" >
		                    <input class="form-control input-sm" type="text" name="birthday" value="${form.birthday }">		                  
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
			                <div class="input-group date form_datetime" data-date-format="yyyy/mm/dd hh:ss:mm" style="width:45%">
			                    <input class="form-control input-sm" type="text" name="loginTimeStart" value="${form.loginTimeStart }">		                  
								<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>							
			                </div>至
			                <div class="input-group date form_datetime" data-date-format="yyyy/mm/dd hh:ss:mm" style="width:45%" >
			                    <input class="form-control input-sm" type="text" name="loginTimeEnd"  value="${form.loginTimeEnd}">		                  
								<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>							
			                </div>
		                </div>			                						
		            </div>
				</div> 
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label"">姓名</label>
						<div class="col-lg-6 col-md-6" >
							<input type="text"  class="form-control input-sm" name="name" value="${form.name}" />
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="form-group">
						<label class="col-lg-3 col-md-3 control-label"">帳號</label>
						<div class="col-lg-6 col-md-6" >
							<input type="text"  class="form-control input-sm" name="userId" value="${form.userId}" />
						</div>
					</div>	
				</div>  	 					                		
			</div>	
			<div class="row">
				<div class="col-lg-8 col-md-8"></div>
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
							
		</form>
	</div>
	<div id="tableContainer" class="content-fluid" style="heigth:80%;margin:5px;border:1px solid #ccc">		
		<table class="table table-striped table-bordered table-hover table-condensed" style="margin-bottom:0;">
			<thead>
				<tr>
	                <th colspan="13" class="text-left">
	               		 第${simpleGrid.rowStart}~${simpleGrid.rowEnd}筆/共${simpleGrid.totalCount}筆&nbsp;&nbsp;
	               		[第${simpleGrid.currentPage}頁/共${simpleGrid.totalPage}頁]
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
				<c:forEach var="pageList" items="${ simpleGrid.pageList }">
					<tr>
						<td>${pageList.userInfo.userId }</td>
						<td>${pageList.userInfo.userName }</td>	
						<td>${pageList.userInfo.engName }</td>										
						<td><fmt:formatDate value="${pageList.userInfo.birthday}" pattern="yyyy/MM/dd"/></td>
						<td>${pageList.userInfo.tel }</td>
						<td>${pageList.userInfo.mail }</td>
						<td>
							<c:choose>
								<c:when test="${pageList.userInfo.department == 'Adm' }">管理部</c:when>
								<c:when test="${pageList.userInfo.department == 'HR' }">人力資源部</c:when>
								<c:when test="${pageList.userInfo.department == 'Inter' }">國外業務部</c:when>
								<c:when test="${pageList.userInfo.department == 'Domanstic' }">國內業務部</c:when>
								<c:when test="${pageList.userInfo.department == 'Oper' }">作業中心</c:when>
								<c:when test="${pageList.userInfo.department == 'Acc' }">財務部</c:when>
								<c:when test="${pageList.userInfo.department == 'Sal' }">產品部</c:when>
								<c:when test="${pageList.userInfo.department == 'Tec' }">研發部</c:when>
								<c:otherwise>其他</c:otherwise>
							</c:choose>
						
						</td>
						<td>
							<c:choose>
								<c:when test="${pageList.userInfo.group == '0' }">一般帳戶</c:when>
								<c:when test="${pageList.userInfo.group == '1' }">作業</c:when>
								<c:when test="${pageList.userInfo.group == '2' }">業務</c:when>
								<c:when test="${pageList.userInfo.group == '3' }">駐點</c:when>
								<c:when test="${pageList.userInfo.group == '4' }">主管</c:when>
								<c:when test="${pageList.userInfo.group == '5' }">系統管理</c:when>
								<c:otherwise>其他</c:otherwise>
							</c:choose>
						
						</td>
						<td><fmt:formatDate value="${pageList.loginTime}" pattern="yyyy/MM/dd hh:mm:ss"/></td>						
						<td>${pageList.lastFunName}</td>	
						<td>${pageList.lastUrl}</td>
						<td><fmt:formatDate value="${pageList.lastAccessTime}" pattern="yyyy/MM/dd hh:mm:ss"/></td>		
						<td>${pageList.sessionId }</td>				
					</tr>
				</c:forEach>		
			</tbody>
			<tfoot>							
	            <tr>
	                <td colspan="13" class="text-left">
	                	<form role="form" id="gridForm" action="${pageContext.request.contextPath}/HomeServlet?action=GetPageDataByNumber" method="post">		                    
		                    <c:if test="${ simpleGrid.totalCount > 0}">	
		                    <div class="container-fluid">
		                    	<div class="row">
		                    		<div class="col-lg-1 col-md-1 col-lg-offset-3 col-md-offset-3">
	                    				<div id="searchPage" class="input-group">
					                		<input class="form-control input-sm" type="text" value="">		                  
											<a href="#" class="input-group-addon">Go</span></a>							
					              		</div>
		                    		</div>
		                    		<div class="col-lg-8 col-md-8">
			                    		<ul class="pagination" style="margin:0;">			                    	
										    <li><a href="#" value="-100">第一頁</a></li>
										    <li><a href="#" value="-1">上一頁</a></li>
										    <c:choose>
										    	<c:when test="${simpleGrid.totalPage <=10 }">
										    		<c:set var="beginPage" value="1"/>
										    		<c:set var="endPage" value="${simpleGrid.totalPage}"/>
										    	</c:when>
										    	<c:otherwise>
										    		<c:set var="beginPage" value="${simpleGrid.currentPage-5}"/>
										    		<c:set var="endPage" value="${simpleGrid.currentPage+4}"/>
										    		<c:if test="${ beginPage < 1 }">
										    			<c:set var="beginPage" value="1"/>
										    			<c:set var="endPage" value="10"/>
										    		</c:if>
										    		<c:if test="${ endPage > simpleGrid.totalPage }">	
										    			<c:set var="beginPage" value="${simpleGrid.totalPage-9}"/>							    			
										    			<c:set var="endPage" value="${simpleGrid.totalPage}"/>
										    		</c:if>
										    	</c:otherwise>  
										    </c:choose>
										    <c:forEach var="i" begin="${ beginPage }" end="${ endPage }">	
									    		<c:choose >
									    			<c:when test="${i == simpleGrid.currentPage}">					    
											   			<li class="active"><a href="#">${i}</a></li>
										   			</c:when>
										   			<c:otherwise>
										   				<li><a href="#">${i}</a></li>
										   			</c:otherwise>
											   	</c:choose>									   
										    </c:forEach>
										    <li><a href="#" value="-9">下一頁</a></li>
										    <li><a href="#" value="-900">最後頁</a></li>
									  </ul>	
		                    		</div>		                    		
		                    	</div>
		                    </div>			                    
						  </c:if>
						  <input type="hidden" value="${ simpleGrid.pageNum }" name="pageNum" >
		                  <input type="hidden" value="${ simpleGrid.totalCount }" name="totalCount">
		                  <input type="hidden" value="${ simpleGrid.currentPage }" name="currentPage">
		                  <input type="hidden" value="${ simpleGrid.pageSize }" name="pageSize">
		                  <input type="hidden" value="${ simpleGrid.totalPage }" name="totalPage">
		                  <input type="hidden" value="${ simpleGrid.searchCondition }" name="searchCondition">
					  </form>
	                </td>
	            </tr>        
			</tfoot>
		</table>			
	</div>	
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
			pickTime: false,
			forceParse: 0,
			pickerPosition: 'bottom-left'
	    });
		$('.form_datetime').datetimepicker({
	        language:  'zh-TW',
	        weekStart: 0,
	        todayBtn:  1,
	        pickDate:false,
			/* autoclose: true,			
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			minuteStep:5,
			pickDate: true,
			pickTime:true, */
			pickerPosition: 'bottom-left'
	    });
		setGridEvent();		
		$('#le-alert .close').click(function () {
			  $(this).parent().removeClass('in'); 
			});
		
		function setGridEvent(){
			$('#gridForm ul li a').on('click',function(){
				
				var atr=$(this).attr('value');
				var pageNum;
				if(atr == undefined){
					pageNum=$.trim($(this).text());
				}
				else{
					pageNum=$(this).attr('value');
				}
				$('#gridForm input[name="pageNum"]').val(pageNum);
				getNewPageByAjax();				
			});
			$('#searchPage a').on('click',function(){
				var page=$(this).prev('input').val();
				var reg = /^[0-9]+$/;
			    var result=reg.test(page);			
				if(result == false 	|| 
					page == 0  		|| 
					page > parseInt( $('input[name=totalPage]').val() )){
					alert('頁碼錯誤，請輸入正確頁碼!');
					/* $('#le-alert p').text('頁碼錯誤，請輸入正確頁碼!');
					$('#le-alert').addClass('in'); */
				}
				else{				
					$('#gridForm input[name="pageNum"]').val(page);				
					getNewPageByAjax();	
				}		
			});
		};
		var getNewPageByAjax=function(){
			$.ajax({
				url:"${pageContext.request.contextPath}/HomeServlet?action=GetPageDataByNumber_Ajax",
				type:"post",
                dataType:'html',                
                data:{
                	pageNum:$('#gridForm input[name=pageNum]').val(),
                	totalCount:$('#gridForm input[name=totalCount]').val(),
                	currentPage:$('#gridForm input[name=currentPage]').val(),
                	pageSize:$('#gridForm input[name=pageSize]').val(),
                	totalPage:$('#gridForm input[name=totalPage]').val(),
                	searchCondition:$('#gridForm input[name=searchCondition]').val()
                },
				async:true,
				success:function(gridHtml){	
					try{
						var obj=JSON.parse(gridHtml);
						if(obj.code == 'ajaxSessionExpired'){
							location.href='${pageContext.request.contextPath}/LoginServlet';
						}						
					}
					catch(e){
						$('#tableContainer').empty().append(gridHtml);
						setGridEvent();	
					}									
				}
			});
		};
		var getNewPageByPost=function(){
			$('#gridForm').submit();
		};
	});
</script>
