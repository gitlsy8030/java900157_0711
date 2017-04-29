### java_900157_0711
#####<br/>因考量目前駐點工作之開發環境係以使用自定義底層元件為主，fred 為兼顧原生Java開發模式及業界通用S2SH框架之技術運用，故利用工作餘暇實作模擬專案，以期能快速上手開發。誠摯歡迎您隨以下連結進入瀏覽，藉以了解我實作內容及技術，衷心期待您的指導與建議 (email:fred733524@gmail.com)，謝謝!
* [實作目標](https://github.com/gitlsy8030/java900157_0711/blob/master/%E5%8E%9F%E7%94%9FJavaWeb%E5%8F%8A%E9%80%9A%E7%94%A8%E6%A1%86%E6%9E%B6%E5%AF%A6%E4%BD%9C%E8%AA%AA%E6%98%8E/1.%E5%8E%9F%E7%94%9FJavaWeb%E5%8F%8A%E9%80%9A%E7%94%A8%E6%A1%86%E6%9E%B6%E5%AF%A6%E4%BD%9C%E7%9B%AE%E6%A8%99.pdf)</font>
* [作品之分層架構、套件(Package)說明](https://github.com/gitlsy8030/java900157_0711/blob/master/%E5%8E%9F%E7%94%9FJavaWeb%E5%8F%8A%E9%80%9A%E7%94%A8%E6%A1%86%E6%9E%B6%E5%AF%A6%E4%BD%9C%E8%AA%AA%E6%98%8E/2.JavaWeb%E4%BD%9C%E5%93%81%E4%B9%8B%E5%88%86%E5%B1%A4%E6%9E%B6%E6%A7%8B%E3%80%81%E5%A5%97%E4%BB%B6(Package)%E8%AA%AA%E6%98%8E.pdf)</font>
* [作品畫面示例-1](https://github.com/gitlsy8030/java900157_0711/blob/master/%E5%8E%9F%E7%94%9FJavaWeb%E5%8F%8A%E9%80%9A%E7%94%A8%E6%A1%86%E6%9E%B6%E5%AF%A6%E4%BD%9C%E8%AA%AA%E6%98%8E/3.JavaWeb%E4%BD%9C%E5%93%81%E7%95%AB%E9%9D%A2%E9%9D%A2%E7%A4%BA%E4%BE%8B-1.pdf)</font>
* [作品畫面示例-2](https://github.com/gitlsy8030/java900157_0711/blob/master/%E5%8E%9F%E7%94%9FJavaWeb%E5%8F%8A%E9%80%9A%E7%94%A8%E6%A1%86%E6%9E%B6%E5%AF%A6%E4%BD%9C%E8%AA%AA%E6%98%8E/4.JavaWeb%E4%BD%9C%E5%93%81%E7%95%AB%E9%9D%A2%E9%9D%A2%E7%A4%BA%E4%BE%8B-2.pdf)

***
#####前端 javascript & css 作品(此為2014~2015間，另一.NET專案期間由本人獨立撰寫)
* [個人獨立開發~小型js、jQuery外掛Framework](https://github.com/gitlsy8030/java900157_0711/blob/master/%E5%80%8B%E4%BA%BA%E9%96%8B%E7%99%BC%E4%B9%8B%E5%89%8D%E7%AB%AF%E4%BD%9C%E5%93%81/CsoaMainScript_SomeHidden.js)
* [個人獨立開發~全網站使用之css](https://github.com/gitlsy8030/java900157_0711/blob/master/%E5%80%8B%E4%BA%BA%E9%96%8B%E7%99%BC%E4%B9%8B%E5%89%8D%E7%AB%AF%E4%BD%9C%E5%93%81/CsoaMainStyle_SomeHidden.css)

***
#####一、原生Servlet+Jsp類(UI使用bootstrap)程式碼列舉說明

1. 各項Config xml檔及properties檔
<br/>[WEB-INF/web.xml](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/WEB-INF/web.xml)
<br/>[Spring之config xml](https://github.com/gitlsy8030/java900157_0711/blob/master/config/springmvc.xml)
<br/>[Struts2之config xml](https://github.com/gitlsy8030/java900157_0711/blob/master/config/struts.xml)
<br/>[Spring驗證Message之properties檔](https://github.com/gitlsy8030/java900157_0711/blob/master/config/springValidationMessages.properties)
<br/>[資料庫連線properties檔](https://github.com/gitlsy8030/java900157_0711/blob/master/config/ConfigData.properties)


2. 自定義jstl標籤-1~網站版型佈局標籤(bootstrap及EasyUI)：<br/>[BaseLayout Java程式](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_tags/BaseLayout.java)
<br/>[HtmlHead.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/HtmlHeader.jsp)
<br/>[版型-Header(bootstrap) jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/Header.jsp)
<br/>[版型-Header含側邊欄(EasyUI) jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/HeaderEasyUI.jsp)
<br/>[版型-導覽列(bootstrap) jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/NavMenu.jsp)
<br/>[版型-Footer jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/Footer.jsp)
<br/>[使用案例jsp(bootstrap)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/Index.jsp)
<br/>[使用案例jsp(EasyUI)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_spring/CustomersViews/CustomersAdd.jsp)
<br/>[自定義標籤之tld檔](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/WEB-INF/custom.tld)

3. 自定義jstl標籤-2~具後端分頁功能之泛型Grid(bootstrap table型)：<br/>[GradTag標籤 Java程式](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_tags/GridTag.java)
<br/>[Grid下方分頁按鈕 jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/GridPagination.jsp)
<br/>[Grid之Dao 功能](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/SimpleGridDao_Oracle.java)
<br/>[Grid之Service 功能](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service/SimpleGridService.java)
<br/>[使用案例 jsp(ajax partial grid only jsp)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/FunctionGrid.jsp)

4. 原生Servlet+Jsp開發範例-1(目錄功能維護)
<br/>[供原生Servlet繼承用之BaseServlet](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/BaseServlet.java)
<br/>[目錄功能維護Servlet(繼承BaseServlet)](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/FunMaintainServlet.java)
<br/>[service介面](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service_interface/IFunctionInfoService.java)
<br/>[service實作](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service/FunctionInfoService.java)
<br/>[Oracle DB連線](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/DB.java)
<br/>[Dao介面](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao_interface/IFunctionInfoDao.java)
<br/>[Dao實作](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/FunctionInfoDao_Oracle.java)
<br/>[目錄功能維護主Index.jsp(include以下4個partial Jsp)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/Index.jsp)
<br/>[1.目錄form Jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/CatalogForm.jsp)
<br/>[2.目錄Grid Jsp(使用自定義泛型Grid)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/CatalogGrid.jsp)
<br/>[3.功能form Jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/FunctionForm.jsp)
<br/>[4.功能Grid Jsp(使用自定義泛型Grid)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/FunMaintain/FunctionGrid.jsp)

5. 原生Servlet+Jsp開發範例-2(啟動、登入、註冊、驗證相關)
<br/>[登入Servlet](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/LoginServlet.java)
<br/>[註冊Servlet](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/RegisterServlet.java)
<br/>[尋回密碼Servlet](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/ChangePasswordServlet.java)
<br/>[登入驗證圖Servlet](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/AuthoringImageServlet.java)
<br/>[全站線上用戶查詢](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_controller/HomeServlet.java)
<br/>[Service介面](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service_interface/IUserInfoService.java)
<br/>[Service實作](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service/UserInfoService.java)
<br/>[Dao介面](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service_interface/IUserInfoService.java)
<br/>[Dao實作-以Dom4jXml操作](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/UserInfo_XmlDao.java)
<br/>[登入Jsp(標準EL表達示+Jstl+bootstrap)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_open/Login.jsp)
<br/>[註冊Jsp(標準EL表達示+Jstl+bootstrap)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/Register.jsp)
<br/>[全站線上用戶查詢Jsp(標準EL表達示+Jstl+bootstrap)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp/Home.jsp)

6. 其他運用
<br/>[多種反射實作(RequestToJavabaen、ResultSetToJavabean、JavabeanToJavabean](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/utils/WebUtils.java)
<br/>[Java Filter：紀錄線上用戶狀態)](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_filter/BaseFilter.java)
<br/>[Java Filter：取ThreadLocal內物件](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_filter/CurrentContextFilter.java)
<br/>[Java Listener：系統啟動Listener=>實作ServletContextListener](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_listener/ApplicationStartListener.java)
<br/>[Java Listener：session結束Listener=>實作HttpSessionListener](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_listener/SessionEndListener.java)
<br/>[Java Listener：登入Listener=>實作HttpSessionAttributeListener](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_listener/LoginListener.java)
<br/>[Java Listener：功能目錄變更Listener=>實作ServletContextAttributeListener](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_listener/CatalogFunctionChangeListener.java)

---
#####二、Spring框架類(UI使用jQuery EasyUI) )程式碼列舉說明
1. Spring Controller基本Url連結及IoC注入
<br/>[Url連結+IoC注入+Map型態資料綁定Java程式](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/springmvc_controller/Anno_Controller1.java)
<br/>[Jsp畫面(實現Spring Map資料綁定)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_spring/SpringMvcHome.jsp)
2. Spring各種Controller及Action技術運用示範~以產品維護功能
<br/>[實作@SpringAuthorization-自定義權限註釋,@Controller,@RequestMapping,@Autowired,@Qualifier,@RequestParam,@ResponseBody,RedirectAttribute..等](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/springmvc_controller/ProductController.java)
<br/>[Service介面](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service_interface/ISpringProductService.java)
<br/>[Service實作](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service/SpringProductServiceReal.java)
<br/>[Dao介面](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao_interface/IProductsDao.java)
<br/>[Dao實作(傳統Jdbc)](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/ProductsDao_Oracle.java)
<br/>[含有EasyUI DataGrid的主畫面Index.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_spring/ProductViews/Index.jsp)
<br/>[含有EasyUI Form+實現Spring POJO資料綁定的ProductAdd.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_spring/ProductViews/ProductAdd.jsp)
3. Spring JdbcTemplate及Transaction(交易)的運用
<br/>[JdbcTemplate+DataSource使用](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/CategoriesDao_SpringJdbc.java)
<br/>[NamedParameterJdbcTemplate+DataSource使用](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/CustomersDao_NamedJdbc.java)
<br/>[批次異動BaatchUpdate的Dao](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/dao/SuppliersDao_SpringJdbc.java)
<br/>[使用@Transactional註釋的service](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/service/SpringCustomersService.java)
4. Spring多集合資料綁定處理、Spring AOP相關 
<br/>[多個集合之資料綁定Controller](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/springmvc_controller/CustomersController.java)
<br/>[Spring多個Table之Jsp畫面](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_spring/CustomersViews/CustomersBatchUpdate.jsp)
<br/>[Spring攔截器~實作Aop權限管理](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/aop/AopAuthentication.java)

***
#####三、Struts2框架類(UI使用Struts2 Form標籤為主)程式碼列舉說明  *( 註：Struts2功能係引用Spring相同功能，重寫為Struts2之Action，以便重用 Service層及 Dao層)*
1. Struts2 Controller基本Url連結及IoC注入
<br/>[Url連結+IoC注入(整合Spring由Spring管理Bean)+Map型態資料綁定Java程式](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/struts2_controller/S2Home.java)
<br/>[使用Struts2 Form標籤之Jsp畫面(實現Struts2 Map資料綁定)](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_struts2/HomeViews/Home.jsp)
2. Struts2各種Controller及Action技術運用示範~以產品維護功能
<br/>[Struts2 Controller Java程式](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/struts2_controller/S2Product.java)
<br/>[含有各種Struts2表單標籤的Index.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_struts2/ProductViews/Index.jsp)
<br/>[含有表單標籤+Struts2 POJO資料綁定的ProductEdit.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_struts2/ProductViews/ProductEdit.jsp)
<br/>(Struts2的Service與Dao層均整合Spring由@AutoWired執行)
3. Strust2表單、Ognl語法運用、多集合資料綁定
<br/>[採Struts2標籤+Ognl語法的jsp-CustomerAdd.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_struts2/CustomersViews/CustomersAdd.jsp)
<br/>[採Struts2標籤+Ognl語法的jsp-CategoriesAdd.jsp.jsp](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_struts2/CategoriesViews/CategoriesAdd.jsp)
<br/>[多個集合之資料綁定+ModelDriven<T>資料綁定Controller](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/struts2_controller/S2Customers.java)
<br/>[Spring多個Table之Jsp畫面+Ognl語法](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_struts2/CustomersViews/CustomersBatchUpdate.jsp)
4. Struts2攔截器、驗證
<br/>[Struts2攔截器，模擬Spring之@AutoWired自動裝配功能](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/aop/S2AutowiredInterceptor.java)
<br/>[Struts2資料驗證(從Java程式方法執行驗證)](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/struts2_controller/S2Categories.java)
<br/>[Struts2資料驗證(從xml配置執行驗證](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/struts2_controller/S2Customers-validation1.xml)

***
#####四、Hibernate框架類程式碼列舉說明
1. Hibernate一組關聯物件(包含LazyLoading處理)實作(一對多+多對一，Hibernate使用MySql)
<br/>[主配置文件hibernate.cfg.xml](https://github.com/gitlsy8030/java900157_0711/blob/master/config/hibernate.cfg.xml)
<br/>[一方(Master)產品類別Mapping xml=>Categories.hbm.xml](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/domain_hbm/Categories.hbm.xml)
<br/>[多方(Detail)產品Mapping xml=>Products.hbm.xml](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/domain_hbm/Products.hbm.xml)
<br/>[一個統一獲取hibernate Session的Filter，處理關連屬性資料在Jsp始延遲加載](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/web_filter/HibernateLazyloadingFilter.java)
<br/>[Controller處理增/刪/查/改及inverse設定關連屬性維護、cascade連動新增、刪除](https://github.com/gitlsy8030/java900157_0711/blob/master/src/LSY/hibernate_controller/HibernateLazyHome.java)
<br/>[Jsp頁面](https://github.com/gitlsy8030/java900157_0711/blob/master/WebContent/jsp_spring/HibernateLazyHome.jsp)