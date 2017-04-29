<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>戶用登入</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/LSY/LsyStyle.css">
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery/jquery-2.1.4.js"></script>
<script	src="${pageContext.request.contextPath}/js/bootstrap/bootstrap.min.js"	type="/text/javascript"></script>
<script type="text/javascript"	src="${pageContext.request.contextPath}/js/jquery-easyui/jquery.easyui.min.js"></script>
<script type="text/javascript">
	$(function(){
		$('#authNumBtn').on('click',function(){			
			var newSrc=$('#authNumImg').attr('src');
			var ran=Math.random() * 100000;			
			newSrc +=ran;
			$('#authNumImg').attr('src',newSrc);			
		});
		$('#authNumImg').on('load',function(){			
			var ser=Math.random() * 100000;	
			$.ajax({
				url:"/LSYMain/AuthoringNumberServlet?time="+ser,
				type:"get",
                dataType:'text',
				async:true,
				success:function(data){
					$('#loginForm input[name=authNum]').val(data);					
				}
			})
		});
		var first=Math.random() * 100000;	
		$('#authNumImg').attr('src','/LSYMain/AuthoringImageServlet?time='+first);	
		$('#updatePassword').text('變更密碼');
		$('.updatePasswordGroup').hide();		
		$('#updatePassword').on('click',function(){
			if($('.updatePasswordGroup').is(':visible')){
				$('.updatePasswordGroup').hide();
				$('#updatePassword').text('變更密碼');
			}
			else{
				$('.updatePasswordGroup').show();
				$('input[name^=newPassword]').val('');
				$('#updatePassword').text('取消變更');
			}					
		});
		
		$('#lostPassword').on('click',function(){
			$('#loginForm').submit();
		});
		//$('div.panel-heading').hide();
		$('input[name=userId]').val('e102');
		$('input[name=password]').val('p102');
	});
</script>
</head>
<body style="opacity:1">
<div class="container">  
	<div id="Login1" class="panel panel-primary col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3"  style="padding:0;margin-top:6em;"> 
		<div class="panel-heading text-center">		
		<h4>系統登錄</h4>
		</div>
		<div class="panel-body" style="padding:1.5em 0;background-color:#fafafa;">
			<form role="form" id="loginForm" class="form-horizontal" action="${pageContext.request.contextPath}/LoginServlet" method="post">
				<div class="form-group ${loginForm.errors.userIdWarning}">
				  <label class="col-lg-4 col-md-4 control-label" style="padding-right:0">帳號</label>
				  <div class="col-lg-5 col-md-5" style="padding-left:0.5em">
				    <input type="text" name="userId" class="form-control input-sm" value="${loginForm.userId}">
				  </div>
				  <span class="err">${loginForm.errors.userId }</span> 
				</div>
				<div class="form-group ${loginForm.errors.passwordWarning}">
				  <label class="col-lg-4  col-md-4 control-label" style="padding-right:0;">密碼</label>  
				  <div class="col-lg-5  col-md-5" style="padding-left:0.5em;">
				    <input type="password" name="password" class="form-control input-sm" value="${loginForm.password}" >
				  </div>
				  <span class="err">${loginForm.errors.password }</span> 
				 </div>
				 <div class="form-group ${loginForm.errors.passwordWarning}">
				  <label class="col-lg-4  col-md-4 control-label" style="padding-right:0;">驗證碼</label>  
				  <div class="col-lg-2  col-md-2" style="padding-left:0.5em;">
				    <input type="text" name="authNum" class="form-control input-sm" value="${loginForm.authNum}" >
				  </div>
				  <div class="col-lg-3  col-md-3">	
				    <a href="#" id="authNumBtn" title="點擊厚重新生驗證碼"><img id="authNumImg" src="" width="120" height="30"></a>
				  </div>
				  <span class="err">${loginForm.errors.authNum }</span> 
				 </div>
				<div class="form-group">
					<div class=" col-lg-offset-4 col-md-offset-4 col-lg-6 col-md-6" style="padding-left:0.5em;">					
						<label class="checkbox-inline" >							
							<c:choose>
								<c:when test="${loginForm.isRememberPassword == '1'}">								
									<input type="checkbox" name="isRememberPassword" checked=checked" value="1">記住密碼
								</c:when>
								<c:otherwise>
									<input type="checkbox" name="isRememberPassword" value="1">記住密碼
								</c:otherwise>								
							</c:choose>
							<a id="updatePassword" href="#" style="margin-left:1em;">變更密碼</a>
							<a id="lostPassword" href="#" style="margin-left:0.3em;">忘記密碼</a>
						</label>											
					</div>				
				</div>
				<div class="form-group updatePasswordGroup ${loginForm.errors.newPassword1Warning}">
				  <label class="col-lg-4  col-md-4 control-label" style="padding-right:0;">變更新密碼</label>  
				  <div class="col-lg-5  col-md-5" style="padding-left:0.5em;">
				    <input type="password" name="newPassword1" placeholder="第一次輸入密碼" class="form-control input-sm" value="${loginForm.password}" style="margin-bottom:0.5em" >
				    <input type="password" name="newPassword2" placeholder="第二次輸入密碼" class="form-control input-sm" value="${loginForm.password}" >
				  </div>
				  <span class="err">${loginForm.errors.newPassword1 }</span> 
				 </div>
				<div class="form-group">
					<div class="col-lg-offset-4 col-md-offset-4 col-lg-7 col-md-7" style="padding-left:0.5em;">				    
					    <p class="info_message">${loginForm.message}</p>					
					</div>
				</div>				
				<div class="form-group ">
					<div class="col-lg-offset-4 col-md-offset-4 col-lg-8 col-md-8" style="padding-left:0.5em;">				    
					    <button type="submit" name="submitType" class="btn btn-primary btn-sm"  value="login"><span class="glyphicon glyphicon-log-in"></span> 登入</button>
					    <a href="#" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-search"></span> 取消</a>
					    <a href="${pageContext.request.contextPath}/RegisterServlet" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-user"></span> 註冊</a>						
						<button type="submit" name="submitType" class="btn btn-primary btn-sm updatePasswordGroup" value="changePassword"><span class="glyphicon glyphicon-edit"></span> 變更密碼</button>
					</div>
				</div>				
			</form>
		</div>
	</div>
</div>
</body>
</html>