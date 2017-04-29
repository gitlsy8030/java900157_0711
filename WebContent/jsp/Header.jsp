<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@	taglib uri="/LSYMain" prefix="cust"  %>
<body style="opacity:1.0">
	<div id="main_container" class="easyui-layout" style="width:100%;height:100%; style="opacity:0.5"">
		<div id="Header1" data-options="region:'north',split:true" style="width:100%;height:8%">
			<div class="container-fluid" style="height:100%" >
				<div id="headerRow" class="row"  style="height:100%">
					<div id="headerLogo" class="col-lg-2 col-md-2" style="height:100%;border:1px solid #555;"></div>
					<div class="v_content col-lg-7 col-md-7" style="height:100%;text-align:left;color:#333;">
						<h3 class="v_content_cell" style="font-family:Arial,Helvetica,sans-serif;font-weight: bold;">Business電子商務網站
							<strong style="color:#999">E-Commerce Admin</strong>
						</h3>
					</div>
					<div class="col-lg-3 col-md-3" style="height:100%;">
						<div class="row"  style="height:100%">	
							<div class="v_content col-lg-9 col-md-9 text-right" style="height:100%;color:#333;">						
								<p class="v_content_cell">							
									歡迎~<cust:logindata type="username"/>&nbsp(<cust:logindata type="userid"/>)<br>													
									<cust:logindata type="logintime"/>							
								</p>				
							</div>
							<div class="v_content col-lg-3 col-md-3 text-right" style="height:100%;">						
								<p class="v_content_cell">
									<a sytle="color:#fff;" href="${pageContext.request.contextPath}/LogoutServlet"><span class="glyphicon glyphicon-log-out glyphicon-default"></span> 登出</a>
								</p>				
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
		<div id="Center1" data-options="region:'center',split:true" style="width:100%;height:87%;">
		
		