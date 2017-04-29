// A=>(全域相關)
// A01:Csoa_Namespace_Caps20140610 namespace 命名空間function
var Csoa_Namespace_Caps20140610 = Csoa_Namespace_Caps20140610 || {};
(function () {
    Csoa_Namespace_Caps20140610.namespace = function (ns_string) {
        var nsArray = ns_string.split('.');
        var rootParent = Csoa_Namespace_Caps20140610;
        if (nsArray[0] == 'Csoa_Namespace_Caps20140610') {
            nsArray = nsArray.slice(1);
        }
        for (var i = 0; i < nsArray.length; i++) {
            if (typeof rootParent[nsArray[i]] == 'undefined') {
                rootParent[nsArray[i]] = {};
            }
            rootParent = rootParent[nsArray[i]];
        }
        return rootParent;
    };
    Csoa_Namespace_Caps20140610.setGlobals = function () {
        var globals_child = {
            obj: Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.Csoa_GlobalObject'),
            fun: Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.Csoa_GlobalFunction'),
            utl: Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.Csoa_GlobalUtility'),
            app: Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.Csoa_GlobalAdditionalApp')
        };
        return globals_child;
    };
    var globals_child = Csoa_Namespace_Caps20140610.setGlobals();
    var obj = globals_child.obj, fun = globals_child.fun, utl = globals_child.utl, app = globals_child.app;
    
})();

// All global object
(function () {
    var globals_child = Csoa_Namespace_Caps20140610.setGlobals();
    var obj = globals_child.obj, fun = globals_child.fun, utl = globals_child.utl, app = globals_child.app;    
    //obj.initType={
    //    resizeItem : {
    //        toolbar: '.csoa_toolbar ul',
    //        confirmbar: '.csoa_confirmbar ul',
    //        PanelToolBar:'#PanelToolBar'
    //    },
    //    toolbarHover: {
    //        PanelToolBar: '#PanelToolBar div'
    //    }
    //};   
 
    obj.com = {
        styleTitleName: 'CsoaMainStyle',
        bordHandler: '../Csoa_Handler/Csoa_BordHandler.ashx',
        logoutHandler: '../Csoa_Handler/Csoa_LogoutHandler.ashx',
        asyncErrorHandler: '../Csoa_Handler/Csoa_AsyncErrorHandler.ashx',
        ImageHandler: '/Csoa_Handler/Csoa_ImageHandler.ashx',
        bordRequestObject: null,
        isInSessionExpired:false,
        post: 'post',
        get: 'get',
        text: 'text',      
        dpiX:null,
        dpiY:null,        
        baseDpi: null,
        baseFontSize: null,  //計算基礎的fontsize=>如base1920:16px，base1024:12px
        currentFontSize: null, // 目前解析度應使用之fontsize
        baseBtnImg: null,
        currentBtnImg: null,
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
        sidebarOuterWidth:null,
        sidebarMenuHeight: null,
        defaultToolbarBackground: null,
        disabledBtnMapUrl: null,
        disabledIconUrl: null,
        menuTextColor: '#333',
        menuTextColorDisabled: '#aaa',
        menuTextColorHover:'white',
        catalogLiBackground:'#eaeaea',
        functionLiBackground: '#fafafa',
        enabledLiBackgroundHover: '#df0000',
        disabledLiBackgroundHover: '#ccc',        
        mustSetDpi: 'defaultValue',
        oneDpiOnly:'fixedValue',
        caculateIEDpi: 'deviceX',
        caculateffDpi: '',
        caculateGecko: 'screenWidth',
        alertShow: false,
        confirmShow: false,
        originalFocusObj:null,
        keyQuit: 79, //  shift+"o"         
        passwordMinLen: 4,
        btnFirst: 'CsStandardToolBar_BtnFirst',
        btnPrev: 'CsStandardToolBar_BtnPrev',
        btnNext: 'CsStandardToolBar_BtnNext',
        btnLast: 'CsStandardToolBar_BtnLast',
        btnInquiry: 'CsStandardToolBar_BtnInquiry',
        btnInsert: 'CsStandardToolBar_BtnInsert',
        btnUpdate: 'CsStandardToolBar_BtnUpdate',
        btnDelete: 'CsStandardToolBar_BtnDelete',
        btnConfirm: 'CsStandardToolBar_BtnConfirm',
        btnWord: 'CsStandardToolBar_BtnWord',
        btnExcel: 'CsStandardToolBar_BtnExcel',
        btnExport: 'CsStandardToolBar_BtnExport',
        btnClear: 'BtnClear',
        btnImport: 'CsStandardToolBar_BtnImport',
        toolbarDisabledColor: '#111',
        toolbarDisableImage: '&disabled=true',        
        serverForm: 'form1',
        catalogOpenMode: 'multi',   //multi or single
        sidebarOpenMode: 'prevPage',   //  prevPage or initOpen
        layoutType: 'shift',  // 'shift':position setted by header & sidebar open/close,'original':permenent occupy full body
        layoutOriginalPadding:{left: 0.002,right:0.006,top:0.001,bottom:0.025} ,  // mean padding % from body   
        //layoutShiftPadding: { left: 0.2, right: 0.2, top: 0.2, bottom: 0.2 },   // mean padding % from body
        originalBodyWidth: null,
        originalBodyHeight: null,
        floatHead_ser: 0,
        //formFocusSelector: 'ul :input:not(:button,:submit,:reset,:image),ul select',
        formFocusSelector: 'ul :input:not(:button,:submit,:reset,:image),ul select',
        formFocusTextSelector:'ul :input:not(:button,:submit,:reset,:image,:checkbox,:radio,select)', 
        inputEnabledSelector: ':input:not(:button,:submit,:reset,:image):enabled,select:enabled',
        inputDisabledSelector: ':input:not(:button,:submit,:reset,:image):disabled,select:disabled',
        inputSelector: ':input:not(:button,:submit,:reset,:image),select',
        nonTextInputSelector: 'select,:checkbox,:radio',
        tabWContainer: '.csoa_tabWContainer,.csoa_tabWContainer_first,.csoa_tabWContainer_border,.csoa_tabWContainer_first_border',
        tabHContainer: '.csoa_tabHContainer,.csoa_tabHContainer_first,.csoa_tabHContainer_border,.csoa_tabHContainer_first_border',
        allContainer:'.csoa_holderContainer_border,.csoa_holderContainer,' +
                            '.csoa_placeContainer_border,.csoa_placeContainer,' +
                            '.csoa_realContainer_border,.csoa_realContainer,' +
                            '.csoa_realContainer_border,.csoa_realContainer,' +
                            '.csoa_pageContainer_border,.csoa_pageContainer,' +
                            '.csoa_tabWContainer,.csoa_tabWContainer_first,.csoa_tabWContainer_border,.csoa_tabWContainer_first_border,' +
                            '.csoa_tabHContainer,.csoa_tabHContainer_first,.csoa_tabHContainer_border,.csoa_tabHContainer_first_border',
        and: 'and',
        or:'or',
        eq: '=',
        noteq: '!=',
        gt: '>',
        lt: '<',
        gteq: '>=',
        lteq: '<=',
        space: '',
        left: '(',
        right:')',
        isnull: 'isnull',
        notnull:'notnull',
        stringnull:'null',
        skipCondition: 'Csoa_skipCondition',
        parentFirst:'Csoa_parentFirst',
        customer_page: {
            f2101: {
                container_height:'5.5,5.5,16,65'               
            },
            f2102: {
                container_height: '5.5,5.5,16,65'                
            },
            f2103: {
                container_height: '5.5,5.5,26,55'               
            },
            common: {
                container_height: '5.5,5.5,16,65'            
            }
        },
        setChildrenToCentralArray: [],
        ucProperytName: 'UCPropertyName',
        gridview_std_para: {
            addHeadBody: false,
        },       
        sortable_std_para: {
            childTag: 'li',
            orderAttr: 'value/asc/string',
            data: null
        },
        select_std_para: {
            childTag: 'option',
            orderAttr: 'value/asc/string',
            data: null
        },
        panel_viewer_class:{},
        end: {}
    };  
    obj.cookie = {
        dpiName: 'csoa_usercookie_DPI',
        dpiValue: '1920*1080*' + obj.com.mustSetDpi,   //if can not be caculated give this default
        oneDpiValue:'1920*1080*'+obj.com.oneDpiOnly,
        dpiExpires: '2018/12/31 12:00:00',
        autoDpi: true,
        end:{}
    };
    //obj.keyPress = {
    //    enter: 'ok',
    //    escape:'cancle'
    //},
    obj.key = {
        enter: function(which){if (which == 13) {return true; } else { return false;}},
        escape: function (which) { if (which == 27) { return true; } else { return false; } },
        numeric: function (which) { if (which >= 48 && which <= 57) { return true; } else { return false; } },
        alphabet: function (which) { if ((which >= 97 && which <= 122) || (which >= 65 && which <= 90)) { return true; } else { return false; } },
        altDown: function (which) { },
        altUp: function (which) { },
        altRight: function (which) { },
        altLeft: function (which) { },
        altEsc: function (which,e) { if (which == 27 && e.altKey) { return true; } else { return false; } },
        getKeyName: function (which,e) {           
            switch(which){
                case 13:
                    if (!e.shiftKey && !e.altKey && !e.ctrlKey) {
                        return 'enter';
                    }
                    else {
                        return 'noDefinedButton';
                    }                    
                    break;
                case 27:
                    if (!e.shiftKey && !e.altKey && !ctrlKey) {
                        return 'escape';
                    }
                    else {
                        return 'noDefinedButton';
                    }
                    break;
                    break;
                //case 16:
                //    return 'shift';
                //    break;
                //case 17:
                //    return 'ctrl';
                //    break;
                //case 18:
                //    return 'alt';
                //    break;
                case 37:
                    if (e.shiftKey) { return 'shiftLeft'; break; } else { return 'left'; break; }                   
                case 38:
                    if (e.shiftKey) { return 'shiftUp'; break; } else { return 'up'; break; }
                case 39:
                    if (e.shiftKey) { return 'shiftRight'; break; } else { return 'right'; break; }
                case 40:
                    if (e.shiftKey) { return 'shiftDown'; break; } else { return 'down'; break; }
                case 33:
                    if (e.shiftKey) { return 'shiftPageUp'; break; } else { return 'pageUp'; break; }
                case 14:
                    if (e.shiftKey) { return 'shiftPageDown'; break; } else { return 'pageDown'; break; }
                case obj.com.keyQuit:
                    if (e.shiftKey)  { return 'logout'; break; } else { return ''; break; }
                case 9:
                    return 'tab';
                    break;               
                default:
                    return 'noDefinedButton'
                    break;
            }
        },
        end: {}
    };
    obj.event = {
        gdUnselect:'csoa_gridview_unSelect',
        gdChange_before: 'csoa_gridview_selectedChange_before',
        gdChange_after: 'csoa_gridview_selectedChange_after',
        cascading_delete: 'csoa_cascading_delete',
        cascading_update: 'csoa_cascading_update',
        cascading_selected: 'csoa_cascading_selected',
        end: {}
    };
    obj.msg = {
        noRight: '你的權限不足',
        existed: '資料已存在',
        noPasswordData: '未輸入帳號或密碼!',
        errLoginHandler: '登入作業有誤，請聯絡系統管理員!',
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        errPasswordTimes: '密碼錯誤次數超過，請洽系統管理員!',
        errPasswordExpired: '密碼已過期，請變更密碼!',
        errPasswordLength: '密碼長度不符，請至少輸入',
        errPasswordLength_e: '碼!',
        errPasswordFormat:'密碼格式不符，需有大小寫及數字!',
        reLogin: '密碼變更成功，請以新密碼重新登入系統!',
        expiredNotify_s: '您的密碼即將在',
        expiredNotify_e: '天後到期，請速變更密碼!',
        errPasswordSame: '輸入之新密碼不可與原密碼相同!',
        errResetPassword:'重設密碼長度小於4碼',
        errUserId: '帳號錯誤，請查核!',
        errHasLoginNo: '帳號已在其他電腦(或此電腦之不同連線Session)登入，無法重複登入!',
        errHasLoginYes: '帳號在其他電腦(或此電腦之不同連線Session)登入後尚未登出，系統已為您強制登出，請繼續!',
        errHasLoginDouble: '提醒您~帳號在其他電腦(或此電腦之不同連線Session)登入中，系統設定允許同一帳號同時可在多不電腦上分別作業!',
        sameSessionProhibit: '您已在此電腦登入本系統，無法再次登入!',
        sameSessionLogoutPrev: '你曾在此電腦登入本網站，系統已為您強制登出，請繼續作業!',
        sessionExpired: '閒置時間超過，系統已離線，請重新登入!',
        forceLogout:'因閒置過久或使用者在他處重複登入，此連線已被中斷，請關閉後重新登入!',
        errUserQuit:'使用者已離職，無法登入!',
        noDPI: '您尚未設定執行本系統之解析度，請選擇!',
        hasDPI: '目前解析度：',
        firstDpiSetup: '通知：未能取得此部電腦解析度，請選擇解析度一次!',
        ieFirstDpiSetup: '通知：IE未能取得此部電腦解析度，請選擇解析度一次!',
        ffFirstDpiSetup: '通知：首次以firefox在此部電腦執行本系統，或在您刪除過firefox cookie後，請務必選擇解析度一次!',
        ffWindowClose: '登出作業已完成，視窗需自行關閉(Chrome、FireFox瀏覽器)!',
        windowClose: '登出作業已完成，視窗將由系統自動關閉!',
        sortableChanged:'排序項目已異動，請以重整過之最新項目重新排序!',
        submitReConfirm: '請按[確認]後送出執行!',
        dbError:'資料庫有誤，請聯絡系統管理員！',
        ok: '作業處理成功，請繼續!',
        ok_sort: '排序已儲存完畢，請繼續!',
        ok_add: '新增作業成功，請繼續!',
        ok_update: '異動作業成功，請繼續!',
        ok_delete: '刪除作業成功，請繼續!',
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        requiredSelect:'欄位為必要選項，請選擇!',
        required: '欄位不得為空白，請查核!',
        mustNumeric: '欄位必須為數字，請查核!',
        formatError: '輸入資料之格式有誤，請查核!',
        intError: '資料應為數字，請查核!',
        doubleError: '資料應為帶小數點格式，請查核!',
        dateError: '資料應為日期，請查核!',
        datetimeError: '資料應日期時間格式，請查核!',
        dataHasError:'資料檢核有誤，請將滑鼠移至有*欄位，查看說明!',
        end: {}       
    };

    obj.tag = {
        p: '<p></p>',
        div: '<div></div>',
        table: '<table></table>',
        thead: '<thead></thead>',
        tbody: '<tbody></tbody>',        
        tr: '<tr></tr>',
        th:'<th></th>',
        td: '<td></td>',
        li: '<li></li>',
        span:'<span></span>',
        option: '<option></option>',
        get: function (tagString, tagInner) {
            var tag = obj.tag[tagString];
            $(tag).html(tagInner);
            var tagStart = tag.match(/^<[^<>]+>/);
            var tagEnd = tag.match(/<\/[^<>]+>$/);
            var fullTag = tagStart + tagInner + tagEnd;
            return fullTag;
        },
        getWithAttr: function (tagString, tagInner,attrObj) {  
            var attrString=''
            for (var o in attrObj) {                
                if (attrObj.hasOwnProperty(o)) {                    
                    attrString +=' '+o+'="'+attrObj[o]+'"';                   
                }
            }
            var fullTag = '<' + tagString + ' ' + $.trim(attrString) + '>' + tagInner + '</' + tagString + '>';
            return fullTag;
        }
    };
    obj.tableProcess = {
        newcreateTable:0,
        recreateExistTable: 1,
        newcreateThead: 2,
        recreateExistThead: 3,
        newcreateTbody: 4,
        recreateExistTbody: 5,
        addOneTr: 6,
        updateOneTr:7,
        deleteOneTr: 8
    }
    obj.attr = {
        
    };

    obj.layout = {
        ww: { value: 'width', type: 'w' },
        hh: {value: 'height', type: 'h' },
        ma: { value: 'margin', type: 'no' },
        ml: {  value: 'margin-left', type: 'w' },
        mr: { value: 'margin-right', type: 'w' },
        mt: { value: 'margin-top', type: 'h' },
        mb: { value: 'margin-bottom', type: 'h' },
        pl: {  value: 'padding-left', type: 'w' },
        pr: { value: 'padding-right', type: 'w' },
        pt: { value: 'padding-top', type: 'h' },
        pb: {  value: 'padding-bottom', type: 'h' },
        //
        tx: {value: 'text-align', type: 'no' },
        em: {  value: 'em', type: 'no' },
        pc: {  value: '%', type: 'no' },
        px: {  value: 'px', type: 'no' },
        auto: { value: '0 auto', type: 'no' },
        hundred: { value: '100', type: 'no' },
        autoLayout: { value: 'layout', type: 'no' },
        ownTag: {  value: 'own', type: 'no' },
        childTag: { value: 'child', type: 'no' },
        center: { value: 'center', type: 'no' }        
    };

    // 1600*900 w=0.833  h=0.833
    //  鈺豐
    // 1920*1080(16:9) w=1 h=1
    // 1440*900(16:10) w=0.75, h=0.833
    // 1024*768(4:3)  w=0.533 h=0.711
    obj.frm1600={
        fontSize:'16px',
        labelWidth: '6em',  //欄位label所占em數
        minResizeiField: '6',  // 需重算li寬度之input text、 textare之最小size值(tag的size值)
        textWidth: '8em',// em input text的標準寬度
        inputExtend:'2em', //需重算li之每一input text textarea寬度extend em數(讓寬度比可輸入自數稍寬一些)
        fieldWidth: '15em',  //form內一個li欄位之標準寬度
        fieldWidthDouble: '30.5em',  //form內2倍寬度li欄位寬度
        fieldHeight: '1.4em', // em form內一個li欄位的高度 
        fieldMarginBottom: '0.5em', //em
        fieldMarginRight: '0.5em',  //em
        markUpPaddingLeft: '0.2em', //em
        markUpPaddingTop: '0',  //em
        multiFieldMarginRight: '0.2em' //em   
    };
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    //        fieldMarginBottom: '0.5em', //em
    //        fieldMarginRight: '0.5em',  //em
    //        markUpPaddingLeft: '0.2em', //em
    //        markUpPaddingTop: '0',  //em
    //        multiFieldMarginRight: '0.2em' //em   
    //};
    obj.reg = {
        colon: ':',
        semicolon: ';',
        comma: ',',
        slashPart: /[^\/]+(?=\/)|[^\/]+$/g,
        underPart: /[^_]+(?=_)|[^_]+$/g,
        commonPart: /[^,]+(?=,)|[^,]+$/g,
        spaceStartEnd: /^\s+|\s+$/g,
        spaceOther: /\s+/g,
        alphNumeric: /\w+/g,
        noUpdateStyle: /[0-9.]+%/gi,
        pxem: /^\s*-?[0-9.]+(?=(em|px)\s*$)/gi,
        px: /^\s*-?[0-9.]+(?=(px)\s*$)/gi,
        em: /^\s*-?[0-9.]+(?=(em)\s*$)/gi,
        urlImage: /(\S+Csoa_ImageHandler.ashx\S+dpi=)(\d{3,4})(\S+)/i,
        inputSource: /(\S+Csoa_ImageHandler.ashx\S+dpi=)(\d{4})(\S*)/i,
        isLogin: /Login.aspx/gi,
        isPasswordFormat: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,8}$/,
        //
        //isBtnStyle: /(\s*.csoa_toolbar\s+ul\s+li\s+span\s*|\s*.csoa_confirmbar\s+ul\s+li\s+span\s*|\s*#PanelToolBar\s+div\s+div\s+span\s*|\s*.gridview_border\s+ul.gridview_header_operation\s+li.pageButton\s+span\s*|\s*.floatHead\s+ul.gridview_header_operation\s+li.pageButton\s+span\s*|\s*#header\s+#header_browsed\s+li\s+a\s*)/gi,
        isBtnStyle: /(\s*.csoa_toolbar\s+ul\s+li\s+span\s*|\s*.csoa_confirmbar\s+ul\s+li\s+span\s*|\s*.csoa_opbar\s+ul\s+li\s+a(\s|\S)+span\s*|\s*#PanelToolBar\s+div\s+div\s+span\s*|\s*.gridview_border\s+ul.gridview_header_operation\s+li.pageButton\s+span\s*|\s*.floatHead\s+ul.gridview_header_operation\s+li.pageButton\s+span\s*|\s*#header\s+#header_browsed\s+li\s+a\s*)/gi,
        isBtnStyle_table: /(\s*.gridview_border\s+ul.gridview_header_operation\s+li.pageButton\s+span\s*|\s*.floatHead\s+ul.gridview_header_operation\s+li.pageButton\s+span\s*)/gi,
        isIconStyle: /\s*#sidebar\s+ul#csoa_menu\s+li\s+span\s*/gi,
        isToolbar: /(\s*.csoa_toolbar\s+ul\s+li\s+a\s*|\s*.csoa_confirmbar\s+ul\s+li\s+a\s*|\s*#PanelToolBar\s+div\s+div\s+input\s*)/gi,
        isConfirmbar: /\s*csoa_confirmbar\s*/gi,
        isTextbar: /\s*csoa_textbar\s*/gi,
        isOpbar: /\s*csoa_opbar\s*/gi,
        isSideBarAndLogoWidth: /(\s*#sidebar\s*|\s*#sidebar\s+#csoa_logo\s*|\s*#csoa_dialog_login\s+#csoa_logo\s*)/gi,
        isSideBarAndLogoHeight: /(\s*#sidebar\s+#csoa_logo\s*|\s*#csoa_dialog_login\s+#csoa_logo\s*)/gi,
        //isNoChangeStyle: /(\s*#content\s+table\s+(th[,\s+]|th$)|\s*#content\s+table\s+(td[,\s+]|td$)|\s*div.floatHead\s+table\s+(th[,\s+]|th$)|\s*div.floatHead\s+table\s+(td[,\s+]|td$)|\s*.otherBrowser_tdth_padding\s*|\s*#content\s+input\[type\=(text|"text")\]\s*|\s*#content\s+input\[type\=(password|"password")\]\s*|\s*#content\s+input\[type\=(text|"text")\].serverDate\s*|\s*#content\s+.csoa_field_name_div\s*)/gi,
        isNoChangeStyle: /(\s*#content\s+table\s+(th[,\s+]|th$)|\s*#content\s+table\s+(td[,\s+]|td$)|\s*div.floatHead\s+table\s+(th[,\s+]|th$)|\s*div.floatHead\s+table\s+(td[,\s+]|td$)|\s*.otherBrowser_tdth_padding\s*|\s*#content\s+input.w[0-9]{1,2}\s*|\s*#content\s+input\[type\=(text|"text")\]\s*|\s*#content\s+input\[type\=(checkbox|"checkbox")\]\s*|\s*#content\s+input\[type\=(password|"password")\]\s*|\s*#content\s+input\[type\=(text|"text")\].serverDate\s*|\s*#content\s+.csoa_field_name_div\s*)/gi,
        isNoChangeProperty: /height|width|padding-right|padding-left|padding-top|padding-bottom|margin-right|margin-left|margin-top|margin-bottom|margin|padding|letter-spacing|line-height|background-position|background-image/gi,
        isSidebarCollapase: /(\s*#sidebar_close\s*|\s*#sidebar_open\s*)/gi,
        isHeadbarCollapase: /(\s*#header_close\s*|\s*#header_open\s*)/gi,
        isCorrectLayout1: /^ww|hh|ma|ml|mr|mt|mb|pl|pr|pt|pb|tx$/gi,
        isCorrectLayout2: /^px|em|pc|auto|center$/gi,
        isCorrectLayout3: /^(own|child|parent)\/[a-zA-Z]{1,10}$/gi,
        isCorrectLayout4: /^\d{4}$/gi,
        isPxEmPc: /^px|em|pc$/gi,
        isCustomersPage: /\s*CustomersPage.aspx/gi,
        tag_a_style: /tag_a_style_\S*/gi,
        fileName: /.+(?=\.\w+$)/gi,
        fileExtension: /\.\w+$/gi,
        cardNo: /^[4-5][0-9]{3}[- ]?[0-9]{4}[- ]?[0-9]{4}[- ]?[0-9]{4}$/gi,
        date: /^(?:19|20)[0-9]{2}[-/.](?:0[1-9]|1[0-2]|[1-9])[-/.](?:0[1-9]|[12][0-9]|[3][01]|[1-9])$/,//日期並符合大小月
        numFormating: function (numeric) {
            return numeric.replace(/(\d)(?=(\d\d\d)+(?!\d))/gi, '$1,');  //跟著1~多組3個數字且後面不能跟數字
        },
        selectMatch: function (prefix, matchData) { //取得 'catalogName=xxxx' 形式的字串
            var regString = prefix + '=\\w+(?=\\,?)';
            var reg = new RegExp(regString, 'gi');
            var selectPair = matchData.match(reg)[0].split('=');
            return selectPair;
        },
        getFile_name: function (fullName) {
            return fullName.match(/.+(?=\.\w+$)/gi)[0];
        },
        getFile_ext: function (fullName) {
            return fullName.match(/\.\w+$/gi)[0];
        },
        getWidth: function (str) {   //2014/12/24
            var result = str.match(/\s*\S*w(\d{1,2})/i);
            if (result === null) {
                return null;
            }
            else {
                return result[1];
            }
        },
        getWidth_w: function (str) {
            var result = str.match(/(^|\s+)w\d{1,2}(\s+|$)/i);
            if (result === null) {
                return null;
            }
            else {
                return $.trim(result[0]);
            }
        },
        getCustomerPageFun: function (str) {
            var result = str.match(/\s*\S*CustomersPage.aspx\?fun=(\d{4})/i);
            if (result === null) {
                return null;
            }
            else {
                return result[1];
            }
        },
        getLength: function (para) {
            var arr = para.match(/[^\x00-\xff]/ig);
            return arr == null ? para.length : para.length + arr.length;
        },
        isMatchReg: function (matchString, regString) {
            regString = '\s*\S*' + regString + '\s*\S*';
            var reg = new RegExp(regString, 'gi');
            if (matchString.match(reg) === null) {
                return false;
            }
            else {
                return true;
            }
        },
        getPrefixString: function (inputString, prefixString) {
            var regStr = prefixString + '\\S*';
            var reg = new RegExp(regStr, 'gi');
            if (inputString.match(reg) === null) {
                return null;
            }
            else {
                return inputString.match(reg)[0];
            }
        },
        changeStyle: function (matchProperty) {
            var spaceChar1 = '(?:^|;)\\s*';
            var checkWord = matchProperty;
            var spaceChar2 = '\\s*';
            var noIncludeChar = '[^;]+';
            var endChrar = '(?=;?)';  // ?=表示前面比對條件成立後仍需後面"跟隨";"0~1次          
            var regString = spaceChar1 + checkWord + spaceChar2 + ':' + noIncludeChar + endChrar;
            var reg = new RegExp(regString, 'gi');
            return reg;
        },
        getStyle: function (rule, matchProperty) {
            var result = { full: null, prefix: null, name: null, value: null };
            var spaceChar1 = '(?:^|(;))\\s*';
            var checkWord = '((' + matchProperty + ')';
            var spaceChar2 = '\\s*';
            var noIncludeChar = '([^;]+))';
            var endChrar = '(?=;?)';  // ?=表示前面比對條件成立後仍需後面"跟隨";"0~1次          
            var regString = spaceChar1 + checkWord + spaceChar2 + ':' + noIncludeChar + endChrar;
            var reg = new RegExp(regString, 'i'); //需要分組時就不能有g，否則match後的結果就會無法分辨找到多個或是分組造成的陣列資料增加 
            var match = rule.style.cssText.match(reg);
            if (match === null) {
                return null;
            }
            else {
                result.full = $.trim(match[2]);    //結果必定會有，就在[0]。若將需要多分組部分多加一個括號就會產生[1]、[2].....
                result.prefix = (match[1] == undefined) ? '' : match[1];
                result.name = $.trim(match[3]);
                result.value = $.trim(match[4]);
                if (result.prefix == '') {
                    //alert('     full=' + result.full + '    prefix=' + result.prefix + '       name= ' + result.name + '    value=' + result.value);
                }
                return result;
            }
        }
    };
    obj.pair = function (key, value) {
        this.key = key;
        this.value = value;
    }

    obj.frm = {
        // 1920*1080
        f1920: {
            labelWidth: 6,  //欄位label所占em數
            minResizeiField: 6,  // 需重算li寬度之input text、 textare之最小size值(tag的size值)
            textWidth: 8,// em input text的標準寬度
            inputExtend: 2, //需重算li之每一input text textarea寬度extend em數(讓寬度比可輸入自數稍寬一些)
            fieldWidth: 15,  //form內一個li欄位之標準寬度
            fieldWidthDouble: 30.5,  //form內2倍寬度li欄位寬度
            fieldHeight: 1.4, // em form內一個li欄位的高度 
            fieldMarginBottom: 0.5, //em
            fieldMarginRight: 0.5,  //em
            markUpPaddingLeft: 0.2, //em
            markUpPaddingTop: 0,  //em
            multiFieldMarginRight: 0.2 //em        
        },
        // 1440*900
        f1440: {
        },
        // 1024*768
        f1024: {
        },
        end: {} // end of frm

    };
    
    
})();
// end All global object

/////
// All global additional App
(function () {
    var globals_child = Csoa_Namespace_Caps20140610.setGlobals();
    var obj = globals_child.obj, fun = globals_child.fun, utl = globals_child.utl, app = globals_child.app;
    // for dpi use parameter  and app's object =====================================================
    app.style = {
        type: [
                    { key: 'width', type: 'w' },
                    { key: 'height', type: 'h' },
                    { key: 'padding-right', type: 'w' },
                    { key: 'padding-left', type: 'w' },
                    { key: 'padding-top', type: 'h' },
                    { key: 'padding-bottom', type: 'h' },
                    { key: 'margin-right', type: 'w' },
                    { key: 'margin-left', type: 'w' },
                    { key: 'margin-top', type: 'h' },
                    { key: 'margin-bottom', type: 'h' },

//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                     { key: 'padding', type: 'w' },
                     { key: 'font-size', type: 'body' },
                     { key: 'letter-spacing', type: 'w' },


                     //{key:'background-position',type:'no'},
                     { key: 'font-weight', type: 'no' },
                     { key: 'line-height', type: 'h' },
                     { key: 'list-style-type', type: 'no' },
                      { key: 'list-style-image', type: 'no' },

                      { key: '-webket-border-radius', type: 'w' },
                      { key: '-moz-border-radius', type: 'w' },
                      { key: '-ms-border-radius', type: 'w' },
                      { key: '-o-border-radius', type: 'w' },

                      { key: 'background-position', type: 'pos' },
                      { key: 'background-image', type: 'img' }
        ],
        font: {
            f1920: '16px',
            f1680: '14.92px',
            f1600: '14.57px',
            f1440: '13.85px',
            f1400: '13.67px',
            f1366: '13.52px',
            f1360: '13.5px',
            f1280: '13.14px',
            f1152: '12.57px',
            f1024: '12px'
        },

        logo: {
            f1920: { w: '240px', h: '120px' },
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            f1280: { w: '160px', h: '80px' },
            f1152: { w: '144px', h: '72px' },
            f1024: { w: '128px', h: '64px' }
        },

        openClose: {
            f1920: { w: '108px', h: '14px' },
            f1680: { w: '100px', h: '13px' },
            f1600: { w: '100px', h: '13px' },
            f1440: { w: '92px', h: '12px' },
            f1400: { w: '92px', h: '12px' },
            f1366: { w: '92px', h: '12px' },
            f1360: { w: '92px', h: '12px' },
            f1280: { w: '85px', h: '11px' },
            f1152: { w: '85px', h: '11px' },
            f1024: { w: '77px', h: '10px' },
        },

        btnImg: {  // 依字型px比例換算出之btnImg(confirmbar、toolbar)之大小。20px/160=>單顆/整圖 
            f1920: '20px',    //160*160
            f1680: '18.75px',  //150
            f1600: '18.25px',  //146
            f1440: '17px',       //136
            f1400: '17px',        //136
            f1366: '17px',       //136
            f1360: '17px',        //136
            f1280: '16.5px',      //132
            f1152: '15.5px',      //124
            f1024: '15px'      // 120

        },

        icon: {  // 依字型px比例換算出之icon(除了confirmbar、toolbar以外之小icon)大小
            f1920: '16px',    //256*240(此為jQuer UI之整張圖檔size)
            f1680: '15px',  //240
            f1600: '15px',  //232
            f1440: '14px',    //220
            f1400: '14px',        //220
            f1366: '14px',       //220
            f1360: '14px',        //220
            f1280: '13px',      //208
            f1152: '13px',      //200
            f1024: '12px'      // 192
        },

        iedpi: {
            d96: { w: 1, h: 1 },
            d100: { w: 0.952604167, h: 0.952777778 },
            d101: { w: 0.952604167, h: 0.952777778 },
            d105: { w: 0.908854167, h: 0.909259259 },
            d106: { w: 0.908854167, h: 0.909259259 },
            d110: { w: 0.869791667, h: 0.869444444 },
            d111: { w: 0.869791667, h: 0.869444444 },
            d115: { w: 0.833333333, h: 0.833333333 },
            d116: { w: 0.833333333, h: 0.833333333 },
            d120: { w: 0.8, h: 0.8 },
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            d140: { w: 0.689583333, h: 0.689814815 },
            d144: { w: 0.666666667, h: 0.666666667 },
            d145: { w: 0.666666667, h: 0.666666667 },
            d148: { w: 0.6453125, h: 0.64537037 },
            d153: { w: 0.625, h: 0.625 },
            d158: { w: 0.60625, h: 0.606481481 },
            d163: { w: 0.588020833, h: 0.587962963 },
            d168: { w: 0.571354167, h: 0.571296296 },
            d172: { w: 0.555729167, h: 0.555555556 },
            d177: { w: 0.540625, h: 0.540740741 },
            d182: { w: 0.5265625, h: 0.525925926 },
            d187: { w: 0.513020833, h: 0.512962963 },
            d192: { w: 0.5, h: 0.5 },
            d91: { w: 1.052604167, h: 1.052777778 },
            d86: { w: 1.1109375, h: 1.111111111 },
            d81: { w: 1.1765625, h: 1.176851852 },
            d76: { w: 1.25, h: 1.25 },
            d72: { w: 1.333333333, h: 1.333333333 },
            d67: { w: 1.428645833, h: 1.428703704 },
            d62: { w: 1.538541667, h: 1.538888889 },
            d57: { w: 1.666666667, h: 1.666666667 },
            d52: { w: 1.818229167, h: 1.818518519 },
            d48: { w: 2, h: 2.092592593 }
        },

        base1024: {
            w1920: 1.875,
            w1680: 1.640,
            w1600: 1.562,
            w1440: 1.406,
            w1400: 1.367,
            w1366: 1.333,
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            h1024: 1.333,
            h960: 1.25,
            h900: 1.171,
            h864: 1.125,
            h800: 1.041,
            h768: 1,
        },
      
        base1920: {
            w1920: 1,
            w1680: 0.875,
            w1600: 0.833,
            w1440: 0.75,
            w1400: 0.729,
            w1366: 0.711,
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            h800: 0.74,
            h768: 0.711,
            h720:0.666,
            h600:0.555
        }        
    };
    // end for dpi parameter  ===============================================
    app.authMapServerToolbar = {  //以PanelToolBar的 div div 的 input的name來mapping權限
        CsStandardToolBar_BtnInquiry: 'isInq',
        CsStandardToolBar_BtnInsert: 'isAdd',
        CsStandardToolBar_BtnUpdate: 'isEdit',
        CsStandardToolBar_BtnDelete: 'isDelete',
        CsStandardToolBar_BtnWord: 'isMailMerge',
        CsStandardToolBar_BtnExcel: 'isExport',
        CsStandardToolBar_BtnImport: 'isImport',
        CsStandardToolBar_XXXXXX: 'isBatch'
    };
    app.authMapClientToolbar = {
        class_inquiry: 'isInq',
        class_add: 'isAdd',
        class_update: 'isEdit',
        class_delete: 'isDelete',
        class_word: 'isMailMerge',
        class_excel: 'isExport',
        class_import: 'isImport',
        class_xxxxxx: 'isBatch'
    };
    app.com = {
        //obj.com.customer_page: { f2101: { container_height:'5.5,5.5,16,65'  }}
        //在該物件裡定義toolbar、selection、detail、gridview的高度比例
        //xml裏<function functionId="2103"  entityName="Csoa_Users" parameter1="3,0,0,0,0,0">
        //==>parameter1之第一個參數3，定義該功能每個row放幾個欄位 
        //default   label=>5em，input=>9em， 總寬度26em(預留低解析度之擴充空間，必須比label+input寬度大許多
        //customerPage之四個containre之比例，設定於obj.com內
        customer_page: {
            f2101: {
                //container_height: '5.5,5.5,16,65', 
                thtd_width: '0=w3,2=w12,5=w15',  //gridview李那些td要訂定default以外的寬度class
                field_width: 'initFun=w40w20' // selection & detail 畫面，那些欄位(名稱)要訂定defaule的總欄寬/值欄位的寬度
            },
            f2102: {
                //container_height: '5.5,5.5,16,65',
                thtd_width: '0=w8,1=w10,2=w15',
                field_width: 'departmentName=w40/w20'
            },
            f2103: {
                //container_height: '5.5,5.5,23,58',
                thtd_width: '0=w3,2=w8,5=w8,8=w8,13=w8,15=w10,16=w10,17=w10',
                field_width: 'initAssignTime=w26/w10,initChangeTime=w26/w10'
            },
            common: {
                //container_height: '5.5,5.5,16,65',
                thtd_width: ''
            }
        },
        end: {}
    };

  
      
    // end app's object ========================================================

    // app function ============================================================
   
    app.cookie = function () {

    }
    //app-01  auto get  dpi
    // 此function 系由utl.initCookieDpi 呼叫 ，若屬initial執行，userDpi不會傳值進來內。若是從login.aspx處選擇解析度，則會傳入所選之解析度
    // 執行完後，在hidden欄位裡已有dpi資料(可能計算取得、cookie取得、或使用預設值)
    app.autoGetDpi = function (userDpi) {
        var comeFrom = (userDpi === null) ? 'init' : 'userSetting';
        switch (comeFrom) {
            case 'init':
                var resultDpi = dpiCaculate();
                //if (resultDpi === null || resultDpi.w == undefined || resultDpi.h == undefined ||
                //   !app.style.base1920['w'+resultDpi.w]) {   //計算後無法取得
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../                     }
                        else {                            
                            setDpiToPageHidden(cookieDpi);       // cookie找到就以cookie裡的值來使用  
                            //alert('resultDpi 計算後無法取得=>cookie Enable=>cookie找到，使用cookie的值');
                        }
                    }
                    else {  // 計算無法取得，且cookie not Enabled 就僅能給''強迫跳出下拉選單讓user設定
                        setDpiToPageHidden(obj.cookie.dpiValue);
                        //alert('resultDpi 計算後無法取得=>cookie disabled，強迫跳出下拉選單讓user設定');
                    }
                }
                else {   //計算可以取得                    
                    var caculateDpiValue = resultDpi.w + '*' + resultDpi.h + '*' + resultDpi.source;
                    if (navigator.cookieEnabled) {
                        utl.cookie.setCookie(obj.cookie.dpiName, caculateDpiValue, obj.cookie.dpiExpires);
                    }
                    setDpiToPageHidden(caculateDpiValue);
                    //alert('resultDpi 計算後可以取得，設定cookie的dpi值');
                }
                break;
            case 'userSetting':
                var dpiValue = caculateDpiValue = userDpi + '*' + 'userSetting';
                if (navigator.cookieEnabled) {
                    utl.cookie.setCookie(obj.cookie.dpiName, dpiValue, obj.cookie.dpiExpires);
                }
                setDpiToPageHidden(dpiValue);
                break;
        }
        function dpiCaculate() {
            var dpi = { w: null, h: null, source: null };
            var deviceX = screen.deviceXDPI;
            var deviceY = screen.deviceYDPI;
            var w = screen.width;
            var h = screen.height;
            // if chrome opera safari 
            dpi.w = w;
            dpi.h = h;
            dpi.source = 'screenWidth';
            // end if chrome opera safari 
            var browser = utl.Browser.getBrowser();
            //alert(browser);
            switch (browser) {
                case 'msie':
                    dpi = getIEDpi();
                    break;
                case 'firefox':
                    dpi = null;
                    break;
                default:  //other browser
                    break;
            }
      //      alert('x=' + screen.deviceXDPI +'\r\n'
      //          + '     y=' + screen.deviceYDPI + '\r\n' 
      //          + '    width=' + screen.width + '\r\n' 
      //          + '    height=' + screen.height + '\r\n' 
      //          + '    availWidth=' + screen.availWidth + '\r\n' 
      //          + '      systemXDPI=' + screen.systemXDPI + '\r\n' 
      //          + '      logicalXDPI=' + screen.logicalXDPI + '\r\n' 
      //          + '      pixelDepth=' + screen.pixelDepth + '\r\n'
      //          + '      browser=' + browser + '\r\n'
      //          + '     $(window).width=' + $(window).width() + '\r\n'
      //          + '     $(window).height=' + $(window).height() + '\r\n'
      //          + '     browser=' + browser + '\r\n'
      //);
            return dpi;
        }
        // end dpi caculate
        function dpiFromCookie() {
            var cookieDpi = utl.cookie.getCookieByName(obj.cookie.dpiName);
            if (cookieDpi === null) {
                return null
            }
            else {
                return cookieDpi.value;
            }
        }

        function getIEDpi() {
            var dpi = { w: null, h: null, source: null };
            var deviceX = screen.deviceXDPI;
            var deviceY = screen.deviceYDPI;
            var w = screen.width;
            var h = screen.height;
            var p = 'd' + screen.deviceXDPI;
            if (app.style.iedpi[p] == undefined) {
                dpi = null;
            }
            else {
                w = checkRounded('w', Math.round(w / app.style.iedpi[p].w));
                h = checkRounded('h', Math.round(h / app.style.iedpi[p].h));
                dpi.w = w;
                dpi.h = h;
                dpi.source = 'deviceX';
            }
            return dpi;
        }
        function checkRounded(type, num) {
            var collectNum;
            if (app.style.base1920[type + num] != undefined) {
                collectNum = num;
            }
            else if (app.style.base1920[type + (num + 1)] != undefined) {
                collectNum = num + 1;
            }
            else if (app.style.base1920[type + (num - 1)] != undefined) {
                collectNum = num - 1;
            }
            return collectNum;
        }
        function setDpiToPageHidden(dpiString) {
            $('#' + obj.cookie.dpiName).attr('value', dpiString);
        }
    };
    //  01-end app.autoGetDpi

    // 02 app.setInitStyles    
    app.setInitStyles = function (styleTitle) {
        var sheets = document.styleSheets;
        var dpi = $('#csoa_usercookie_DPI').attr('value').split('*');
        dpiX = dpi[0];
        dpiY = dpi[1];
        var basedpi = $('#styleBase').attr('value').substr(4, 4);
        var baseFontSize = app.style.font['f' + basedpi];  //計算基礎的fontsize=>如base1920:16px，base1024:12px
        var currentFontSize = app.style.font['f' + dpiX]; // 目前解析度應使用之fontsize
        var baseBtnImg = app.style.btnImg['f' + basedpi];
        var currentBtnImg = app.style.btnImg['f' + dpiX];
        var baseIcon = app.style.icon['f' + basedpi];
        var currentIcon = app.style.icon['f' + dpiX];
        //5/24
        if (app.style.font['f' + dpiX] == undefined) {
            return;
        }
        var ruleArray = utl.css.getOrginalRulesBySheetTitle(styleTitle);  //取得title="CsoaMainStyle"的所有css屬性準備更改
        var mustUpdate = app.style.type;  //mustUpdate 是一個的陣列物件，在其內紀錄哪寫css屬性必須被修改，修改類行為'w'、'h'、'no'、'pos'

        //拿掉rule內無需修改屬性者
        //for (var i = 0; i < ruleArray.length; i++) {
            

        //}        
        for (var i = 0; i < ruleArray.length; i++) {  //巡覽每一個cssRules[i]
            var r = ruleArray[i];
            var isUpdate = false;
            var selectorText = ruleArray[i].selectorText;          
            if (r.style.cssText.match(obj.reg.isNoChangeProperty) === null) {
                continue;
            }
            //if(selectorText.toLowerCase().substr(0,19) =='#content input[type'){
            //    alert(selectorText);
            //}
            if (selectorText.match(obj.reg.isNoChangeStyle) != null) {
                //alert(selectorText);
                continue;
            }
            for (var j = 0; j < mustUpdate.length; j++) {  //巡覽每一個app.style.type[j]，並透過obj.reg.getStyle去比對這個cssRules[i]內容中，是否有需有變更的css屬性

                if (mustUpdate[j].type == 'no') {
                    continue;
                }
                var result = obj.reg.getStyle(ruleArray[i], mustUpdate[j].key);  //getStyle 是一個根據cssRules和屬性名稱new RegExp並match此 regexp回傳result物件
                if (result == null) {
                    continue;
                }
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../                        continue;
                    }
                    var newValue;
                    if (ruleArray[i].selectorText == '.csoa_opbar ul li a[href] span' ||
                        ruleArray[i].selectorText == '.csoa_opbar ul li a span')
                    {

                        var a = 12;
                    }
                    
                    switch (mustUpdate[j].type) {
                        case 'w':
                            if (p[k].match(obj.reg.em) != null) {
                                newValue = parseFloat(p[k].match(obj.reg.em)) * theBase[mustUpdate[j].type + dpiX] *
                                    parseFloat(baseFontSize) / parseFloat(currentFontSize);
                            }
                            else if (p[k].match(obj.reg.px) != null && (mustUpdate[j].key).toLowerCase() == 'width' && ruleArray[i].selectorText.match(obj.reg.isBtnStyle) != null) {
                                newValue = parseFloat(app.style.btnImg['f' + dpiX]);
                            }
                            else if (p[k].match(obj.reg.px) != null && (mustUpdate[j].key).toLowerCase() == 'width' && ruleArray[i].selectorText.match(obj.reg.isIconStyle) != null) {
                                newValue = parseFloat(app.style.icon['f' + dpiX]);
                            }
                            else if (p[k].match(obj.reg.px) != null && (mustUpdate[j].key).toLowerCase() == 'width' && ruleArray[i].selectorText.match(obj.reg.isSideBarAndLogoWidth) != null) {
                                newValue = parseFloat(app.style.logo['f' + dpiX].w);
                            }
                            else {
                                newValue = parseFloat(p[k].match(obj.reg.px)) * theBase[mustUpdate[j].type + dpiX];
                            }
                            pStr += p[k].replace(obj.reg.pxem, newValue) + ' ';
                            isUpdate = true;
                            break;
                        case 'h':
                            if (p[k].match(obj.reg.em) != null) {
                                newValue = parseFloat(p[k].match(obj.reg.em)) * theBase[mustUpdate[j].type + dpiY] *
                                    parseFloat(baseFontSize) / parseFloat(currentFontSize);
                            }
                            else if (p[k].match(obj.reg.px) != null && (mustUpdate[j].key).toLowerCase() == 'height' && ruleArray[i].selectorText.match(obj.reg.isBtnStyle) != null) {
                                newValue = parseFloat(app.style.btnImg['f' + dpiX]);
                            }
                            else if (p[k].match(obj.reg.px) != null && (mustUpdate[j].key).toLowerCase() == 'height' && ruleArray[i].selectorText.match(obj.reg.isIconStyle) != null) {
                                newValue = parseFloat(app.style.icon['f' + dpiX]);
                            }
                            else if (p[k].match(obj.reg.px) != null && (mustUpdate[j].key).toLowerCase() == 'height' && ruleArray[i].selectorText.match(obj.reg.isSideBarAndLogoWidth) != null) {
                                newValue = parseFloat(app.style.logo['f' + dpiX].h);
                            }
                            else {
                                newValue = parseFloat(p[k].match(obj.reg.px)) * theBase[mustUpdate[j].type + dpiY];
                            }
                            pStr += p[k].replace(obj.reg.pxem, newValue) + ' ';
                            isUpdate = true;
                            break;
                        case 'body':
                            if (ruleArray[i].selectorText.toLowerCase() == 'body') {
                                newValue = app.style.font['f' + dpiX];
                                pStr += newValue + ' ';
                                isUpdate = true;
                            }
                            break;
              
                        case 'img':   //background-image =>凡通過 isBtnStyle 或 isIconStyle regexp檢查者即為有url(.....) style需變更
                            if (ruleArray[i].selectorText.match(obj.reg.isBtnStyle) != null || ruleArray[i].selectorText.match(obj.reg.isIconStyle) != null ||
                                ruleArray[i].selectorText.match(obj.reg.isHeadbarCollapase) != null || ruleArray[i].selectorText.match(obj.reg.isSidebarCollapase) != null ||
                                ruleArray[i].selectorText.match(obj.reg.isSideBarAndLogoWidth) != null) {
                                var sp = p[k].match(obj.reg.urlImage);
                                newValue = sp[1] + dpiX + sp[3];
                                //console.log('img style===> p=' + p[k] + '   sp-1=' + sp[1] + '   sp-3=' + sp[3] + '               newValue=' + newValue);
                                pStr += newValue + ' ';
                                isUpdate = true;
                            }
                            break;
                        case 'pos':   //background-position
                            if (p[k].match(obj.reg.px) != null) {
                                newValue = parseFloat(p[k].match(obj.reg.px)) / parseFloat(baseBtnImg) * parseFloat(currentBtnImg) + 'px';
                                //newValue = app.style.font['f' + dpiX];
                                pStr += newValue + ' ';
                                isUpdate = true;
                            }
                            break;
                    }
                }
                // end 一個屬性內多個值得處理迴圈
                if (isUpdate == true) {
                    var updateValue = result.prefix + result.name + ':' + $.trim(pStr);
                    ruleArray[i].style.cssText = ruleArray[i].style.cssText.replace(obj.reg.changeStyle(mustUpdate[j].key), updateValue);
                    isUpdate = false;
                    //if (ruleArray[i].selectorText == '.csoa_toolbar_nonHover') {
                    //    alert(ruleArray[i].style.cssText);
                    //}
                }
            }
        }
        //alert(ruleArray.length + '       ' + cc);
        setToolbarText();     //縮小toolbar字數較多者之字體大小，以便塞得進去button的小空間內
        setImageSource();  //搜尋table 內input[type=image]者，將其src改成正確解析度=>專為CustoersPage之gridview內1st選擇欄位為此種元素 
        function setToolbarText() {
            $('.csoa_toolbar ul li a,.csoa_confirmbar ul li a,.csoa_opbar ul li a,#PanelToolBar div div input').each(function () {
                var theParent = $(this).parent();
                var parentName = theParent.prop('nodeName').toLowerCase();
                var parentTagWidth = theParent.css('width');
                var measureLen;
                var totalLength;

                if (parentName == 'li') {   // toolbar && confirmbar
                    measureLen = $('#wideMeasure').text($(this).text()).css('width');
                    totalLength = (isNaN(parseFloat(measureLen)) ? 0 : parseFloat(measureLen)) +
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../              else {   // PanelToolBar
                    measureLen = $('#wideMeasure').text($(this).attr('value')).css('width');
                    totalLength = (isNaN(parseFloat(measureLen)) ? 0 : parseFloat(measureLen)) +
                    (isNaN(parseFloat(theParent.css('padding-left'))) ? 0 : parseFloat(theParent.css('padding-left'))) +
                    (isNaN(parseFloat(theParent.css('padding-right'))) ? 0 : parseFloat(theParent.css('padding-right'))) +
                    (isNaN(parseFloat($(this).siblings().filter('span').css('width'))) ? 0 : parseFloat($(this).siblings().filter('span').css('width'))) +
                    (isNaN(parseFloat($(this).siblings().filter('span').css('margin-left'))) ? 0 : parseFloat($(this).siblings().filter('span').css('margin-left'))) +
                    (isNaN(parseFloat($(this).siblings().filter('span').css('margin-right'))) ? 0 : parseFloat($(this).siblings().filter('span').css('margin-right'))) +
                    12;                    
                }
                var fontZoom = 1;
                var totalWidth = totalLength;
                while ((totalWidth * fontZoom) > parseFloat(parentTagWidth)) {
                    fontZoom -= 0.05;
                    if (fontZoom <= 0.4) {
                        break;
                    }
                }
                var newFont = parseFloat($(this).css('font-size')) * fontZoom;
                $(this).css('font-size', newFont + 'px');
            });
        }
        function setImageSource() {
            //alert('into' + $('table input[type=image]').length);
            $('table input[type=image]').each(function () {                
                var result = $(this).attr('src').match(obj.reg.inputSource);
                //alert('src=' + $(this).attr('src'));
                if (result != null) {
                    newValue = result[1] + obj.com.dpiX + result[3];
                    //alert(newValue);
                    $(this).attr('src', newValue);
                }
            });
        }
        var str = '======after====after=====after========\r\n';
        for (var a = 0; a < ruleArray.length; a++) {
            str += ruleArray[a].cssText + '\r\n';
        }
        //console.log(str);
    };
    //02  end app.setInitStyles 

    //03  app.setLayoutStyles    
    app.setLayoutStyles = function () {
        var tag = arguments[0];
        var styleResult = arguments[1];
        var styleSub = arguments[2];
        var styleNum = arguments[3];
        var theType = arguments[4];
        switch (theType) {
            case 'w':
                if (tag.sub == obj.layout.em.value) {  // em                                   
                    styleNum = parseFloat(styleNum) * obj.com.theBase['w' + obj.com.dpiX] *
                      parseFloat(obj.com.baseFontSize) / parseFloat(obj.com.currentFontSize);
                }
                else if (tag.sub == obj.layout.px.value) {  //px
                    styleNum = parseFloat(styleNum) * obj.com.theBase['w' + obj.com.dpiX];
                }
                else {   // %
                    styleNum = parseFloat(styleNum);
                }
                break;
            case 'h':
                if (tag.sub == obj.layout.em.value) {  // em                                   
                    styleNum = parseFloat(styleNum) * obj.com.theBase['h' + obj.com.dpiY] *
                      parseFloat(obj.com.baseFontSize) / parseFloat(obj.com.currentFontSize);
                }
                else if (tag.sub == obj.layout.px.value) {  //px
                    styleNum = parseFloat(styleNum) * obj.com.theBase['h' + obj.com.dpiY];
                }
                else {   // %
                    styleNum = parseFloat(styleNum);
                }
                break;
        }
        return styleNum.toString() + styleSub        
    };
    //03  end app.setLayoutStyle    

    //04  app.setSidebarStyles
    app.setSidebarStyles = function () {
        var body_height = parseFloat($('body').css('height')) + parseFloat($('body').css('padding-top')) + parseFloat($('body').css('padding-bottom'));
        var sidebar_bottom = body_height * 0.005;
        var sidebar_height = body_height
            - parseFloat($('#sidebar').css('top'))
            - sidebar_bottom
            - parseFloat($('#sidebar').css('margin-top'))
            - parseFloat($('#sidebar').css('margin-bottom'))
            - parseFloat($('#sidebar').css('border-top-width')) - 1;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../      $('#cosa_menu').css('height', sidebar_menu);
    };
    //04  end app.setSidebarStyles

    //05 app.getAuth (get function authenticaton by userId from DB
    app.getAuth = (function () {
        var isNoAuth = /Login.aspx|Error.aspx/gi;
        var isCustomersPage = /^\?fun=\w{1,6}$/gi;
        var result = {};
        var requestPage;
        var requestTemp = location.search.match(isCustomersPage);
        if (requestTemp != null) {
            requestPage = location.pathname + requestTemp;
        }
        else {
            requestPage = location.pathname;
        }
        var post = {
            url: '../Csoa_Handler/Csoa_hiddenHandler.ashx',
            async: false,
            data: { 'path': requestPage },
            type: 'post',
            success: successRtn,
            error: 'errorProcess',
            dataType: 'text'
        }
        if (!isNoAuth.test(location.pathname)) {
            var date = new Date();
            $.ajax(post);
            return result;
        }
        function successRtn(data) {
            var dataArray = data.split(',');
            for (var x = 0; x < dataArray.length; x++) {
                var property = $.trim(dataArray[x].split('=')[0]);
                if (property == 'userId' || property == 'authSourceId' || property == 'functionId' ||
                    property == 'functionName' || property == 'authFunLevel') {
                    var value = $.trim(dataArray[x].split('=')[1]);
                }
                else {
                    var value = new Boolean(($.trim(dataArray[x].split('=')[1]) == 'True') ? 1 : 0);
                }
                result[property] = value;
            }
            //obj.com.auth = result;
            var date = new Date();
        }
    })();
    //05 end app.getAuth (get function authenticaton by userId from DB

    //06   app.setAth (set toolbar's button style base the app.getAuth
    app.setAuth = function (toolbarType, toolbarLi) {
        //alert(toolbarType);
        switch (toolbarType) {
            case 'PanelToolBar':               
                toolbarLi.each(function () {
                    var elem = $(this).find(':input');
                    var inputTagId = elem.attr('id');
                    var authName = (app.authMapServerToolbar[inputTagId] == undefined) ? '' : app.authMapServerToolbar[inputTagId];                    
                    if (authName != '' &&  app.getAuth[authName] == false) {
                        elem.prop('disabled', true);
                    }
                });
                break;
            case 'opbar':                
                toolbarLi.each(function () {
                    var elem = $(this).find('a>span');
                    var spanTagClass = 'class_' + elem.prop('class');
                    var authName = (app.authMapClientToolbar[spanTagClass] == undefined) ? '' : app.authMapClientToolbar[spanTagClass];
                    var isAuth = (app.getAuth[authName] == undefined) ? true : app.getAuth[authName];                    
                    if (isAuth == false) {
                        elem.parent('a').removeAttr('href');
                        //2014#/01/06
                        elem.parent('a').attr('disabled','disabled');
                    }
                });
                break;
            case 'textbar':
                toolbarLi.each(function () {
                    var elem = $(this).find('a');
                    var aTagClass = 'class_' + elem.prop('class');
                    var authName = (app.authMapClientToolbar[aTagClass] == undefined) ? '' : app.authMapClientToolbar[aTagClass];
                    var isAuth = (app.getAuth[authName] == undefined) ? true : app.getAuth[authName];                   
                    if (isAuth == false) {
                        elem.removeAttr('href');
                        //2014#/01/06
                        elem.attr('disabled', 'disabled');
                    }                   
                });
                break;
            case 'toolbar':
                break;
        }
      
    };
    //06   end app.setAth (set toolbar's button style base the user authentication

    //07  set gridview 固定表頭及可拖曳欄寬  
    app.setGridviewHeader = function (gridviewElement) {
        var gridviewParent = gridviewElement.parent('div.gridview_border');
        gridviewParent.unbind('scroll');
        gridviewParent[0].scrollLeft = 0;
        gridviewParent[0].scrollTop = 0;
        var tableWidth;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        var toolbarElement;
        var original_ul;
        gridviewParent.bind('scroll', function (e) {    //移動scrollbar時，讓表頭跟著移動
            var newMarginLeft = $(this).scrollLeft() * -1;            
            var headTable = cloneTable;
            headTable.css('margin-left', newMarginLeft);
            prevScrollLeft = $(this).scrollLeft();
            //$('#result').text($(this).scrollLeft() + '     ' + $('#floatHead-1').css('width') + '     ' + $('#floatHead-1').outerWidth() + '     ' + $('#cloneTable-1').css('width') + '    ' + $('#cloneTable-1').outerWidth());
        });
        cloneTable();
        //執行完cloneTable後已產生toolbar，再設定首次toolbar ul的寬度
        toolbarElement = $('.floatHead ul');
        original_ul = gridviewParent.children('ul');
        $('.floatHead ul li').each(function () {
            originalToolbarWidth += $(this).outerWidth() + parseFloat($(this).css('margin-right'));
        });
        if (gridviewElement.outerWidth() < originalToolbarWidth) {
            toolbarElement.css('width', gridviewElement.outerWidth());
            gridviewParent.children('ul').css('width', gridviewElement.outerWidth());
        }
       
        // 加入個別欄位寬度class，此處站不用執行了，但勿移除
        //var col_width_array = $('.csoa_gridview').attr('col_width').split(',');
        //for (var i = 0; i < col_width_array.length; i++) {
        //    var col_index = parseInt(col_width_array[i].split('=')[0]);
        //    var width_class = col_width_array[i].split('=')[1];
        //    $('table.csoa_gridview thead tr th:eq(' + col_index + ')').addClass(width_class);
        //}
        ///////////
        tableWidth = gridviewElement.css('width');
        function cloneTable() {            
            var floatSer = (obj.com.floatHead_ser + 1).toString();
            obj.com.floatHead_ser += 1;
            var cloneTableId = gridviewElement.attr('id')+'-cloneTable-' + floatSer;
            var floatHeadId = gridviewElement.attr('id') + '-floatHead-' + floatSer;
            gridviewElement.attr('floatHeadId',floatHeadId);
            cloneTable = gridviewElement.clone(true);
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                //gridviewElement.find('th,td').addClass('otherBrowser_tdth_padding');
                cloneTable.find('th,td').addClass('otherBrowser_tdth_padding');
            }           
            var originalTableWidth = parseFloat(gridviewElement.css('width'));
            //var contianerClientWidth = parseFloat(gridviewParent[0].clientWidth);  //0815
            var contianerClientWidth = parseFloat(gridviewParent[0].clientWidth) - parseFloat(gridviewParent.css('padding-left'));
            var floatHeadWidth =  contianerClientWidth;
            $('body').append($('<div id="' + floatHeadId + '" class="floatHead"></div>').append(cloneTable));
            //此處的div不可以給height，否則在IE會產生約0.6px的誤差
            $('#'+floatHeadId).css({ 'overflow': 'hidden', 'position': 'absolute', 'z-index': 10, 'left': offset.left, 'top': offset.top, 'width': floatHeadWidth, 'opacity': 1 }); // 'height': originalHeadHeight

            cloneTable.find('thead th:eq(0)').attr('id', 'first-th');
            var firstTh = cloneTable.find('thead tr th').first();
            var lastTh = cloneTable.find('thead tr th').last();
            var str = '';
            cloneTable.find('thead th').bind('mousemove', function (e) {
                if (isHeadMoveStart_key) {
                    return;
                }
                target.top = $(this).offset().top;
                target.bottom = $(this).offset().top + $(this).outerHeight();
                target.left = $(this).offset().left + $(this).innerWidth() - (font_size / 10 * 4);
                target.right = target.left + (font_size / 10 * 5);
                if (this == firstTh[0]) {
                    target.prevLeft = 0;
                    target.prevRight = 0;
                }
                else {
                    target.prevLeft = $(this).offset().left;
                    target.prevRight = $(this).offset().left + (font_size / 10 * 5);
                }
               
                if ((e.pageY >= target.top && e.pageY <= target.bottom) && (e.pageX >= target.left && e.pageX <= target.right)) {
                    if (this != lastTh[0]) {
                        $(this).css('cursor', 'col-resize');
                    }                  
                }
                else if ((e.pageY >= target.top && e.pageY <= target.bottom) && (e.pageX >= target.prevLeft && e.pageX <= target.prevRight) && this != lastTh[0]) {
                    $(this).css('cursor', 'col-resize');                  
                    
                }
                else {
                    $(this).css('cursor', 'auto');
                }               
                changeHeadWidth(original_ul,originalToolbarWidth, toolbarElement, e);
            }).bind('mousedown', function (e) {
                if ((e.pageY >= target.top && e.pageY <= target.bottom) && (e.pageX >= target.left && e.pageX <= target.right)) {  //mouse按在本th的右變界附近
                    e.preventDefault();
                    if (this != lastTh[0]) {
                        setStartMoving($(this), 'move', e);
                        setThIndex(moveElement);
                    }
                }
                else if ((e.pageY >= target.top && e.pageY <= target.bottom) && (e.pageX >= target.prevLeft && e.pageX <= target.prevRight)) { //mouse按在下一th的左界附近(應視為要移動前一個th
                    e.preventDefault();
                    setStartMoving($(this).prev(), 'move',e);
                    setThIndex(moveElement);
                }
                else {   // mouse按在中間(非左右兩邊界，此為給keyup 左右鍵來每次放寬一固定寬度欄寬，特別對於最後一個th好用
                    e.preventDefault();
                    setStartMoving($(this), 'key',e);
                    setThIndex(moveElement_key);
                }
            }).bind('mouseup', function (e) {             
                setEndMoving($(this));                
            }).bind('mouseout', function (e) {               
                if (!isHeadMoveStart) {
                    return;
                }
                if (e.pageY < target.top || e.pageY > target.bottom) {
                    setEndMoving($(this));
                }
                $(this).css('cursor', 'auto');
            });
            $('body').bind('keyup', function (e) {
                if (!isHeadMoveStart_key) {
                    return;
                }
                var x;
                if (e.which == 39) {   // right key
                    x = parseFloat(obj.com.currentFontSize) * 2;
                    changeHeadWidth(original_ul,originalToolbarWidth, toolbarElement, e, x);
                }
                else if (e.which == 37) {   //left key
                    x = (parseFloat(obj.com.currentFontSize) * -2);
                    changeHeadWidth(original_ul, originalToolbarWidth, toolbarElement, e, x);
                }
            });
            cloneTableToolbar();
            function cloneTableToolbar() {
                var tableToolbar = gridviewParent.children('ul');
                if (tableToolbar.length == 0) {
                    return;
                }
                var cloneTableToolbar = tableToolbar.clone(true);
                $('#' + floatHeadId).prepend(cloneTableToolbar);                
            }
            
        }   // end cloneTable function
        
        gridviewParent.bind('mouseleave', function (e) {
            //alert('gridviewParent mouseleave');
            moveElement = null;
            moveStartPosition.X = 0;
            moveStartPosition.Y = 0;
            isHeadMoveStart = false;
            thIndex = 0;
        });
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                moveElement_key.css('width', newWidth);
                gridviewElement.find('thead th:eq(' + thIndex + ')').css('width', newWidth);
                moveStartPosition.width = newWidth;
            }
            if (gridviewElement.outerWidth() <= originalToolbarWidth) {
                toolbarElement.css('width', gridviewElement.outerWidth());
                original_ul.css('width', gridviewElement.outerWidth());
            }
            else {
                toolbarElement.css('width', originalToolbarWidth);
                original_ul.css('width', originalToolbarWidth);
            }           
        }

        function setStartMoving(elem,para,e) {
            if (para == 'key') {
                moveElement_key = elem;
                moveStartPosition.X = e.pageX;
                moveStartPosition.Y = e.pageY;
                moveStartPosition.width = parseFloat(elem.css('width'));
                isHeadMoveStart_key = true;
            }
            else {
                elem.addClass('currentMovehead');   // 'currentMovehead無樣式，只是將此class加入/remove正在被拖曳欄寬的th元素，測試完可考慮拿掉
                moveElement = elem;
                moveStartPosition.X = e.pageX;
                moveStartPosition.Y = e.pageY;
                moveStartPosition.width = parseFloat(elem.css('width'));
                isHeadMoveStart = true;
            }
        }
        function setEndMoving(elem) {
            elem.removeClass('currentMovehead');
            moveElement = null;
            moveStartPosition.X = 0;
            moveStartPosition.Y = 0;
            isHeadMoveStart = false;
            thIndex = 0;
            moveElement_key = null;
            isHeadMoveStart_key = false;
        }
        function setThIndex(elem) {
            elem.parent().children().each(function (index) {
                if (this == elem[0]) {
                    thIndex = index;
                }
            });
        }
        
    };
    //07 end set  gridview 固定表頭及可拖曳欄寬 

    //08 set gridview additionWidth(定CsutomersPage及其他功能gridview之附加寬度設定 '0=w3,2=w12,5=w15'.....而不要只依css的th td寬度
    app.setThTdAdditionWidth = function (type, table, gridviewSetting) {
        switch (type) {
            case 'customer_page':
                var fun = obj.reg.getCustomerPageFun(location.href);
                if (fun === null) {
                    return;
                }
                var thtd_width_array = [];
                var funPara = app.com.customer_page['f' + fun];
                var commonPara = app.com.customer_page.common;
                //var funPara = obj.com.customer_page['f' + fun];
                //var commonPara = obj.com.customer_page.common;
                if (funPara) {
                    if (funPara.thtd_width && funPara.thtd_width != '') {
                        thtd_width_array = funPara.thtd_width.split(',');
                    }
                }
                for (var i = 0; i < thtd_width_array.length; i++) {
                    var th_index = thtd_width_array[i].split('=')[0];
                    var th_width = obj.reg.getWidth(thtd_width_array[i].split('=')[1]);
                    if (th_width != null) {
                        th_width = th_width * parseFloat(obj.com.currentFontSize);
                        table.find('thead th:eq(' + th_index + ')').css('width', th_width);
                    }
                }
                break;
            case 'general_page':
                var fun = obj.reg.getCustomerPageFun(location.href);
                if (fun != null) {
                    return;
                }
                var thtd_width_array = [];                
                var funPara = gridviewSetting.thPropertyMapping.thtd_width;

                var commonPara = gridviewSetting.thPropertyMapping.std_width;
                var std_width = obj.reg.getWidth(commonPara);
                std_width = std_width * parseFloat(obj.com.currentFontSize);                
                if (funPara) {
                    if (funPara && funPara != '') {
                        thtd_width_array = funPara.split(',');
                    }
                }
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                break;
        }
    };
    //08 end set gridview additionWidth(定CsutomersPage及其他功能gridview之附加寬度設定 '0=w3,2=w12,5=w15'.....而不要只依css的th td寬度

    //09 set fieldAdditionWidth
    app.setFieldAdditionWidth = function (type, formElement) {
        switch (type) {
            case 'customer_page':
                var fun = obj.reg.getCustomerPageFun(location.href);
                if (fun === null) {
                    return;
                }
                var field_width_array = [];
                //var funPara = obj.com.customer_page['f' + fun];
                //var commonPara = obj.com.customer_page.common;
                var funPara = app.com.customer_page['f' + fun];
                var commonPara = app.com.customer_page.common;
                if (funPara) {
                    if (funPara.field_width && funPara.field_width != '') {
                        field_width_array = funPara.field_width.split(',');
                    }
                }
                for (var i = 0; i < field_width_array.length; i++) {
                    var fieldName = field_width_array[i].split('=')[0];
                    var fieldParentWidth = field_width_array[i].split('=')[1].split('/')[0];
                    var fieldWidth = field_width_array[i].split('=')[1].split('/')[1];
                    var hiddenElement = formElement.find('input[type=hidden]').filter('input[id$="' + obj.com.ucProperytName + '"]').filter('input[value="' + fieldName + '"]');
                    hiddenElement.each(function () {
                        $(this).siblings('div.csoa_field_value_div').children('input[type=text]').addClass(fieldWidth);
                        $(this).parent('div.csoa_field_div').addClass(fieldParentWidth);
                    });
                }
                break;
        }
    };
    // //end 09 set fieldAdditionWidth
})();
//  end All App
//  end app function ============================================================


// All global function =============fun     fun      fun    fun===============================================
(function () {
    var globals_child = Csoa_Namespace_Caps20140610.setGlobals();
    var obj = globals_child.obj, fun = globals_child.fun, utl = globals_child.utl, app = globals_child.app;    
    fun.initSetting = function (option) {        
        if (option != undefined) {    // check 網頁為若有傳入layoutType屬性，就update obj.com.layoutType  shift or original
            for (var o in option) {
                if (option.hasOwnProperty(o) && obj.com[o]) {
                    obj.com[o] = option[o];
                }
            }           
        }
        if (!obj.reg.isLogin.test(location.href)) {            
            utl.setBord();            
        }
        else {
            // get initDpi ，此處為起始執行，不會傳入解析度資料到utl.initCookieDpi(option)內。若是從login.aspx處選擇解析度，則會傳入所選之解析度
            // 執行完utl.initCookieDpi後，在hidden欄位裡已有dpi資料(可能計算取得、cookie取得、或都娶不到資料時，使用預設值)            
            utl.initCookieDpi();
        }
        //utl.setAlertDialog();
        utl.setBaseInfo();       
        //utl.setHyperLink();
        $('#sidebar').csoa_sidebar();        
        utl.setLogout();
        utl.setCommonKeyEvent();
        // update document.styleshees =>title="CsoaMainStyle"
        console.log('start  setInitStyle css.....time=' + utl.date('minisecond'))
        if(app.setInitStyles && obj.cookie.autoDpi == true){
            app.setInitStyles(obj.com.styleTitleName);
        }
        console.log('end  setInitStyle css.....time=' + utl.date('minisecond'))
        if (app.setSidebarStyles && obj.cookie.autoDpi == true) {
            app.setSidebarStyles();            
        }
        if (location.href.match(obj.reg.isLogin) === null) {
            // 設定起始sidebar及header 開或關 
            utl.setInitSidebarAndHeader();           
            // 設定OpenClosebar 大小與位置 
            utl.setOpenClosebar();
            // 設定#content之 padding為原始靠左靠上或根據sidebar&header之open or close來調整位置
            obj.com.originalBodyWidth = parseFloat($('body').css('width'));
            obj.com.originalBodyHeight = parseFloat($('body').css('height'));
            utl.setContentPosition();
            // 設定 #content內之各個 div(具有class為.container帶頭者為container)之為平均置中於#content內             
            utl.setContainerPosition('init');
            // sidebar open/close  &&  headerbar open/close event 
            utl.setOpenCloseEvent();
            utl.setPlugin();
            utl.clonePanelviewerClass();
        }
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../

        //  執行其他的 initial程序，如 layout_ww_....帶頭的的class
        var initType={
            resizeItem: {
                toolbarDiv: 'div.csoa_toolbar',
                confirmbarDiv: 'div.csoa_confirmbar',
                PanelToolBarDiv:'div#PanelToolBar',
                toolbar: '.csoa_toolbar ul',
                confirmbar: '.csoa_confirmbar ul',
                PanelToolBar: '#PanelToolBar',
                opbar: 'div.csoa_opbar ul',
                textbar: 'div.csoa_textbar',
                textbar_ul: 'div.csoa_textbar ul',
                textbar_ul_li: 'div.csoa_textbar ul li',
                PanelToolBar: '#PanelToolBar',
                tabs: 'div.csoa_tabs',
                tabs_body: 'div.csoa_tabs_body',
                tabs_body_container: 'div.csoa_tabs_body div.csoa_tabs_body_container',
                formDiv: 'div.csoa_fieldset',   //the div of form(放置於dialog裡的form專用，如login.aspx) 
                formUl: 'div.csoa_fieldset form ul.csoa_form_ul',   //the ul of form(放置於dialog裡的form專用，如login.aspx)
                pageFormDiv: 'div.csoa_page_formset',   //the form外層的div (非dialog裡的form使用，其class名稱與dialog的div=>form=>ul組，不一樣) 
                //pageForm: 'div.csoa_page_formset form',   //外層div=>form(非dialog裡的form使用，其class名稱與dialog的div=>form=>ul組，不一樣) 
                pageFormUl: 'div.csoa_page_formset form ul.csoa_page_ul',   //外層div=>form=>ul(非dialog裡的form使用，其class名稱與dialog的div=>form=>ul組，不一樣) 
                pageFormUl_Li: 'div.csoa_page_formset form ul.csoa_page_ul li',   //ul裡的li 
                //pageFormUl_Ul: 'div.csoa_page_formset form ul.csoa_page_ul ul',   //ul裡的ul                
                dialogContent: 'div.csoa_dialog .csoa_dialog_content',
                dialogContainer: 'div.csoa_dialog',
                sortableContainer: 'div.csoa_sortable',
                sortableBody: 'ul.csoa_sort_body',
                panel: 'div.csoa_panel',
                panelHeader: 'div.csoa_panel_header',                                         
                panelBody: 'ul.csoa_panel_body',
                gridForm: 'div.csoa_gridform',
                gridFormHeader: 'div.csoa_gridform_header',
                photoPanel: 'ul.csoa_photo_panel',  //放置多筆小圖flowLayout的容器
                panelViewer: 'div.csoa_panel_viewer',
                hr: '#content hr',
                radioButtonSet: 'div.csoa_radio_buttonset',
                listbox:'.csoa_listbox',
                listbox_source: '.csoa_listbox_source',
                listbox_target: '.csoa_listbox_target',
                listbox_button: '.csoa_listbox_button',
                //因容器並非均為同向分割，可能跳階，故其階層數可能減少
                pageContainer: 'div.csoa_pageContainer,div.csoa_pageContainer_border',      //第1層容器
                realContainer: 'div.csoa_realContainer,div.csoa_realContainer_border',           //第2層容器
                detailContainer: 'div.csoa_detailContainer,div.csoa_detailContainer_border',     //第3層容器              
                placeContainer: 'div.csoa_placeContainer,div.csoa_placeContainer_border',     //第4層容器
                holderContainer: 'div.csoa_holderContainer,div.csoa_holderContainer_border',     //第5層容器                
                box1Container: 'div.csoa_box1Container,div.csoa_box1Container_border',     //第6層容器
                box2Container: 'div.csoa_box2Container,div.csoa_box2Container_border',     //第7層容器
                tabWContainer: 'div.csoa_tabWContainer_first,div.csoa_tabWContainer,div.csoa_tabWContainer_first_border,div.csoa_tabWContainer_border',     //專指置放於div.csoa_tabs_body_container內的橫向容器
                tabHContainer: 'div.csoa_tabHContainer_first,div.csoa_tabHContainer,div.csoa_tabHContainer_first_border,div.csoa_tabHContainer_border',     //專指置放於div.csoa_tabs_body_container內的縱向容器
                generalContainer: 'div.csoa_generalContainer,div.csoa_generalContainer_border'     //通用型，需設置Layout之容器
            },
            toolbarHover: {
                PanelToolBar:'div#PanelToolBar div.ul'    // server 端maintain程式 的toolbar ul
            },
            loginScreen: {
            },
            globalNamespace:'<input id="strGlobalNamespace" type="hidden" value="Csoa_Namespace_Caps20140610.setGlobals()" />'            
        }      

        //實際 set layout_ww_....帶頭的的class
        //console.log('start  set layout_ww.....time=' + utl.date('minisecond'));
        //alert($('#k1').css('height'));
        var a = 1;
        for (var o in initType.resizeItem) {     
            $(initType.resizeItem[o]).csoa_resizing();
        }
        //alert($('#k1').css('height'));
        //console.log('end  set layout_ww.....time=' + utl.date('minisecond'));
        //非CustomerPage時，執行，在utl.setPageContainer處再執行
        if (location.href.match(obj.reg.isCustomersPage) === null) {
            utl.setPageContainer();        
        }
        //for (var o in initType.toolbarHover) {            
        //    $(initType.toolbarHover[o]).csoa_toolbar('hover');
        //}
        console.log('end entile fun.InitStyle ...time=' + utl.date('minisecond'));
    },
    fun.end=function(){}   // all functio end
})();
//// All global fun function ==========end fun     end fun     end fun==================================================

// All global utility function ==========utl   utl   utl   utl=====================================================================
(function () {
    var globals_child = Csoa_Namespace_Caps20140610.setGlobals();
    var obj = globals_child.obj, fun = globals_child.fun, utl = globals_child.utl, app = globals_child.app;
    // utl-01  
    (utl.cookie = function () {
        utl.cookie.setCookie=function(name, value, expires) {
            var cookie = name + '=' + escape(value) + ';' + 'expires=' + new Date(expires).toGMTString();
            document.cookie = cookie;            
        };
        utl.cookie.getAllCookie =function(){   // return obj.pari的Array
            var cookieStr = document.cookie.split('; ')
            var cookieArray = [];
            for (var i = 0; i < cookieStr.length; i++) {
                cookieArray=cookieArray.push(new obj.pair(cookieStr[i].split('=')[0], unescape(cookieStr[i].split('=')[1])));
            }
            return cookieArray;
        };
        utl.cookie.getCookieByName=function(name){
            var cookieStr = document.cookie.split('; ')
            var cookie = null;
            for (var i = 0; i < cookieStr.length; i++) {
                if (cookieStr[i].split('=')[0] == name) {
                    cookie = new obj.pair(cookieStr[i].split('=')[0], unescape(cookieStr[i].split('=')[1]));
                }
            }
            return cookie;
        };
    })();
    //utl-02
    (utl.Browser = function () {
        var bro = navigator.userAgent.toLowerCase();
        //alert(bro);
        utl.Browser.isIE = (bro.indexOf('msie') != -1 || bro.indexOf('rv:11.0') != -1) ? true : false;
        utl.Browser.isChrome = (bro.indexOf('chrome') != -1 && bro.indexOf('safari') != -1 && bro.indexOf('opr') == -1) ? true : false;
        utl.Browser.isFirefox = (bro.indexOf('firefox') != -1) ? true : false;
        utl.Browser.isOpera = (bro.indexOf('opera') != -1 || bro.indexOf('opr') != -1) ? true : false;
        utl.Browser.isSafari = (bro.indexOf('safari') != -1 && bro.indexOf('chrome') == -1) ? true : false;
        utl.Browser.getBrowser = function () {
            if (utl.Browser.isIE) return 'msie';
            if (utl.Browser.isChrome) return 'chrome';
            if (utl.Browser.isFirefox) return 'firefox';
            if (utl.Browser.isOpera) return 'opera';
            if (utl.Browser.isSafari) return 'safari';
        }
        utl.Browser.getBrowserName = function () {
            return navigator.appName;

        };
        utl.Browser.getBrowserVersion = function () {
            var reg1 = /MSIE 8.0/;
            if (reg1.test(navigator.appVersion)) {
                return 'MSIE 8.0';
            }
            else {
                return navigator.appVersion;
            }

        };
        utl.Browser.isIE8 = function () {
            var regIE8 = /MSIE 8.0/;
            if (regIE8.test(navigator.appVersion)) {
                return true;
            }
            else {
                return false;
            }
            //alert(navigator.appVersion + '               ' + regIE8.test(navigator.appVersion))
        };
        utl.Browser.isIE9 = function () {
            var regIE9 = /MSIE 9.0/;
            if (regIE9.test(navigator.appVersion)) {
                return true;
            }
            else {
                return false;
            }
        };
        utl.Browser.isIE11 = function () {
            var regIE11 = /MSIE 11.0/;
            if (regIE11.test(navigator.appVersion)) {
                return true;
            }
            else {
                return false;
            }
        };
        utl.Browser.width = screen.width;
        utl.Browser.height = screen.height;
    })();
    // utl-03
    utl.initCookieDpi = function (option) {
        //In Any Page must get dpi once
        // call此function有兩來源 ，一為initial 執行，不會傳入解析度資料到utl.initCookieDpi(option)內。若是從login.aspx處選擇解析度，則會傳入所選之解析度
        var opt = option || null;
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                // 若cookie not enable 則預設值(obj.cookie.oneDpiValue=>"9999*9999*fixedValue")只寫入 hidden欄位內
            else {
                $('#' + obj.cookie.dpiName).attr('value', obj.cookie.oneDpiValue);
            }
        }    
    }
    // utl-04
    utl.realChangeCss = function (para) {
        if (para.target == obj.layout.ownTag.value && para.updateElem == obj.layout.ownTag.value) {
            $(para.selectElem).css(para.property, para.value);
        }
        else if (para.target == obj.layout.childTag.value) {
            $(para.selectElem).children().filter(para.updateElem).each(function () {
                $(this).css(para.property, para.value);
            });
        }
    };
   
    // utl-05
    // 此function僅是將layout_ww_pc_own/own_0000這一類的class去obj.css物件中去找出對應應調整的css屬性為何，例如'ww'代表要調整'width'、'hh'代表要調整'height'
    utl.GetCssPropertyByKey = function (para) {
        for (var o in obj.css) {
            if (para == obj.css[o].key) {
                return obj.css[o].value;
            }
        }
        return null;
    };
    // utl-06
    (utl.css=function() {
        var sheets = document.styleSheets;       
      
        function changeStyleProperty(selector, property) {
        }
        function getStyleUpdateType(property) {
            var type = obj.sytle.type;
            for (var i = 0; o < type.length; i++) {
                if (type[i].key == property.key) {
                    return property.type;
                }
            }
            return null;
        }

        /// getStyleUpdateValue
        function getStyleUpdateValue(type, property) {
            var p=property.value.split(obj.reg.spaceOther);
            var pStr = '';
            var theBase = app.style[$('#styleBase').attr('value')];
            var dpiX=utl.Browser.width.toString();
            var dpiY=utl.Browser.height.toString();
            for (var i = 0; i < p.length; i++) {
                if (p[i] == '0' || p[i] == '0px' || p[i] == '0em' || p[i] == '0%' || p[i] == 'auto' || p[i].match(noUpdateStyle) != null) {
                    pStr = p[i] + ' ';
                }
                var newValue;
                switch (type) {
                    case 'w':
                        newValue = p[i].match(obj.ref.pxem);
                        newValue = parseFloat(newValue) * theBase[type + dpiX];
                        pStr += newValue + ' ';
                        
                        break;
                    case 'h':
                        newValue = p[i].match(obj.ref.pxem);
                        newValue = parseFloat(newValue) * theBase[type + dpiY];
                        pStr += newValue + ' ';
                        break;
                    case 'f':
                        break;
                }
            }
            return pStr;
        }
        //// end getStyleUpdateValue
      
        utl.css.getStylesheetIndex=function(){            
        };
        utl.css.getPropertyIndex=function(){
        }        
        utl.css.getPropertiesBySelector=function(selector){
        };
        utl.css.getAllPropertiesBySheetTitle = function (title) {
            return propertyFun(title);
        };
        utl.css.getAllRulesBySheetTitle = function (title) {
            return ruleFun(title);
        };

        ////  getOrginalRulesBySheetTitle
        utl.css.getOrginalRulesBySheetTitle = function (title) {
            var beforeResult = '';
            var afterResult = '';
            var rulesArray = [];
            var sheets = document.styleSheets;
            /// start for
            for (var i = 0; i < sheets.length; i++) {
                var titleName=(sheets[i].title == undefined)? '':sheets[i].title;
                if (title == undefined || (title != undefined && titleName == title)) {
                    // shttes[i].cssText=>整個style內的完整css字串(包含rule字串)，sheets[i].cssRules[i].cssText || sheets[i].rules[i].cssText=>單一個rule的css字串
                    var cloneCssText = sheets[i].cssText;

                    var rules = sheets[i].cssRules || sheets[i].rules;
                    //alert(sheets[i].title+'    '+rules);，
                    for (var j = 0; j < rules.length; j++) {
                        if (rules[j].cssText != undefined && rules[j].cssText.substr(0, 7) == '@import') {
                            continue;
                        }
                        beforeResult += rules[j].cssText + '\r\n';
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            utl.css.getProperty = function (selector, property) {
            };
            /////////////

            /////////   ruleFun
            function ruleFun(title) {
                var sheetsArray = [];
                for (var i = 0; i < sheets.length; i++) {
                    if (arguments.length == 1 && sheets[i].title != title) {  //arguments.length=代表 caller為utl.css.getAllPropertiesBySheetTitle(有傳title)
                        continue;
                    }
                    var rules = sheets[i].cssRules || sheets[i].rules;
                    var rulesArray = [];
                    for (var j = 0; j < rules.length; j++) {
                        var rule = new obj.pair(rules[j].selectorText, rules[j].style.cssText)
                        rulesArray.push(rule);
                    }
                    if (arguments.length == 1) {
                        return rulesArray;
                    }
                    sheetsArray.push(new obj.pair(sheets[i].title, rulesArray));
                }
                return sheetsArray;
            }
            ///////  end ruleFun

            /////   propertyFun
            function propertyFun(title) {
                var sheetsArray = [];
                for (var i = 0; i < sheets.length; i++) {
                    if (arguments.length == 1 && sheets[i].title != title) {  //arguments.length=代表 caller為utl.css.getAllPropertiesBySheetTitle(有傳title)
                        continue;
                    }
                    var rules = sheets[i].cssRules || sheets[i].rules;
                    var rulesArray = [];
                    for (var j = 0; j < rules.length; j++) {
                        var ruleKey = rules[j].selectorText;
                        var ruleValue = rules[j].style.cssText.split(';');                       
                        var propertiesArray = [];
                        for (var k = 0; k < ruleValue.length; k++) {
                            var property = new obj.pair(ruleValue[k].split(':')[0], ruleValue[k].split(':')[1]);
                            if (property.key.match(obj.reg.alphNumeric) != null) {
                                property.key = property.key.replace(obj.reg.spaceStartEnd, '');
                                property.value = property.value.replace(obj.reg.spaceStartEnd, '');
                                propertiesArray.push(property);
                            }
                        }
                        rulesArray.push(new obj.pair(ruleKey, propertiesArray));
                    }
                    if (arguments.length == 1) {
                        return rulesArray;
                    }
                    sheetsArray.push(new obj.pair(sheets[i].title, rulesArray));
                }
                return sheetsArray;
            }
            ////  end propertyFun            
        }
        //// end getOrginalRulesBySheetTitle
    })();


    //utl-07
    // set bord by web.config timeframe    
    utl.setBord = function () {       
        var time = parseInt($('#bordTimeFrame').attr('value')) * 1000;        
        var bordRequest = setInterval(changeBord, time);
        obj.com.bordRequestObject = bordRequest;        
        utl.bord
        var strDate = '';
        function changeBord() {            
            var fields = $('#csoa_hidden #csoa_form_hidden');
            var dataJson = utl.formToJson(fields);
            var d = new Date();
            var post = {
                url: obj.com.bordHandler,
                type: obj.com.post,
                data:dataJson,
                success: successRtn,
                error:errorRtn,
                dataType: obj.com.text
            }            
            $.ajax(post);            
        }
        function successRtn(data) {            
            var d = new Date();
            var ss = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();            
            var old = $('#bordContent').text();
            //2014/10/24
            //if (data == 'forceLogout') {
            //    clearInterval(bordRequest);                
            //    alert(ss+'    '+obj.msg.forceLogout);
            //    location.href = '../Csoa_Maintain/Csoa_Login.aspx';
            //}
            if (data == 'forceLogout') {
                clearInterval(bordRequest);
                var displayMessage = utl.date('datetime') + '    ' + obj.msg.forceLogout;
                var yesFun = function () {
                    location.href = '../Csoa_Maintain/Csoa_Login.aspx';
                }
                if (!obj.com.isInSessionExpired) {
                    obj.com.isInSessionExpired = true;
                    utl.alert(displayMessage, { yes: yesFun });
                }         
            }
            else if(data == 'error_bordHandler'){
                clearInterval(bordRequest);
                alert(obj.msg.errBordHandler);
            }           
            else if ($('#csoa_header_bordContent').text() != data) {
                $('#csoa_header_bordContent').text(data);              
            } 
        }
        function errorRtn(xhr, textStatue, errorThrown) {            
        }
    };
   
    //utl-08
    // set logout
    utl.setLogout = function () {        
        var isAjaxNow = false;
        $('#userinfo_logout a').bind('click', function () {
            if (isAjaxNow || obj.com.alertShow || obj.com.confirmShow) {
                return;
            }
            isAjaxNow = true;                
            utl.Logout();            
            isAjaxNow = false;
        });
    }
    
    //utl-09
    utl.setHyperLink = function () {
        $('#sidebar ul#csoa_menu li li a').filter('[href!="#"]').bind('click', function (e) {
            e.preventDefault();             
            var url = '/'+$(this).attr('href');
            $('form#csoa_form_hidden').attr('action', url);
            $('form#csoa_form_hidden').attr('method', 'post');
            $('form#csoa_form_hidden').trigger('submit');
        });
    }

    //utl-10
    utl.formToJson = function (frmOfjQuery, isIncludeDisable) {
        var disabledElem = frmOfjQuery.find(':disabled');
        if (isIncludeDisable == true) {            
            frmOfjQuery.find(':disabled').removeAttr('disabled');
        }
        var fieldsArray = frmOfjQuery.serializeArray();
        disabledElem.attr('disabled', 'disabled');
        return utl.arrayToJson(fieldsArray);
    }
    utl.partialFormToJson = function (frmOfjQuery, propertyArray, isIncludeDisable) {        
        var disabledElem = frmOfjQuery.find(':disabled');
        if (isIncludeDisable == true) {           
            frmOfjQuery.find(':disabled').removeAttr('disabled');
        }
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    utl.partialExcludeFormToJson = function (frmOfjQuery, propertyArray, isIncludeDisable) {
        var disabledElem = frmOfjQuery.find(':disabled');
        if (isIncludeDisable == true) {
            frmOfjQuery.find(':disabled').removeAttr('disabled');
        }
        var temp = frmOfjQuery.find(':input');
        //alert(temp.length + '   ' + temp.filter(':input').length + '    ' + temp.filter(':input[name=functionId]').attr('name') + '    ' + temp.filter(':input[name=catalogName]').attr('name') + '    ');
        
        //alert(temp.length);
        for (var i = 0; i < propertyArray.length; i++) {
            if (frmOfjQuery.find(':input[name=' + propertyArray[i] + ']')) {
                //frmOfjQuery.find(':input').not(':input[name=' + propertyArray[i] + ']');
                //temp.not(':input[name=' + propertyArray[i] + ']');
                temp = temp.not(':input[name=' + propertyArray[i] + ']');
            }
        }
        var fieldsArray =temp.serializeArray();
        disabledElem.attr('disabled', 'disabled');
        return utl.arrayToJson(fieldsArray);
    }

    //utl-11
    utl.arrayToJson = function (fieldsArray,propertyArray) {
        var v = {};
        for (var i in fieldsArray) {
            if (typeof (v[fieldsArray[i].name]) == 'undefined') v[fieldsArray[i].name] = fieldsArray[i].value;
            else v[fieldsArray[i].name] += "," + fieldsArray[i].value;
        }
        return v;
    }

    //utl-12
    utl.closeWindow = function () {
        var browser = utl.Browser.getBrowser();
        if (browser == 'firefox' || browser == 'chrome') {
            var yesFun = function () {
                utl.closeAlertConfirm('alert');
                window.close();
            };
            utl.alert(obj.msg.ffWindowClose, { yes: yesFun });
        }
        else {
            var yesFun = function () {
                utl.closeAlertConfirm('alert');
                var url = location.href;
                var tempWindow = window.open('', '_self', ''); //open the current window  firefox not work
                window.close();
            };
            utl.alert(obj.msg.windowClose, { yes: yesFun });
        }
    };

    utl.yes = function () {
        utl.closeAlertConfirm('alert');
        var url = location.href;
        var tempWindow = window.open('', '_self', ''); //open the current window  firefox not work
        window.close(url);
    };
   
    //utl-13   
    // performing logout
    utl.Logout = function () {
        //alert('no into logout');
        var post = {
            url: obj.com.logoutHandler,
            type: obj.com.post,
            success: successRtn,
            error: errorRtn,
            dataType: obj.com.text
        }
        $.ajax(post);
        function successRtn(data) {
            //alert('ajax logout success');
            isAjaxNow = false;           
            if (data == 'error_logoutHandler') {
                alert(obj.msg.errLogoutHandler);
            }            
            utl.closeWindow();
            clearInterval(obj.com.bordRequestObject);            
        }
        function errorRtn(xhr, textStatue, errorThrown) {
            var d = new Date();
            var ss = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            alert(ss + '   logoutHandler.ashx_error= ' + xhr.statue + '    ' + textStatue + '    ' + errorThrown);
            utl.closeWindow();
        }
    };

    // utl-14  

    // utl-15
    utl.setOpenCloseEvent = function () {        
        function sidebarPositionClose() {
            $('#sidebar').css('top', obj.com.headerTop);
            var newSidebarHeight = parseFloat(obj.com.sidebarHeight) + parseFloat(obj.com.sidebarTop) - parseFloat(obj.com.headerTop);
            var newSidebarMenuHeight = parseFloat(obj.com.sidebarMenuHeight) + parseFloat(obj.com.sidebarTop) - parseFloat(obj.com.headerTop);
            $('#sidebar').css('height', newSidebarHeight + 'px');
            $('#sidebar ul#csoa_menu').css('height', newSidebarMenuHeight + 'px');
        }
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            $('#csoa_sidebar_status').attr('value', 'close');
            if ($('#form1 input[name=csoa_sidebar_status]') != undefined) {
                $('#form1 input[name=csoa_sidebar_status]').attr('value', 'close');                                                
            }
            utl.setContentPosition();         
            //$('.csoa_tabs_body').csoa_tabs('setStyle', {});
        });
        $('#sidebar_open').bind('click', function (e) {
            if ($('#header').is(':hidden')) {
                $('#sidebar').css('top', obj.com.headerTop);               
            }
            else {
                $('#sidebar').css('top', obj.com.sidebarTop);
            }
            $('#sidebar_open').hide();
            $('#sidebar').fadeToggle('slow');
            if (app.setSidebarStyles && obj.cookie.autoDpi == true) {
                app.setSidebarStyles();
            }
            utl.openCurrentCatalog(false);   
            $('#csoa_sidebar_status').attr('value', 'open');
            if ($('#form1 input[name=csoa_sidebar_status]') != undefined) {
                $('#form1 input[name=csoa_sidebar_status]').attr('value', 'open');
            }
            utl.setContentPosition();
            //$('.csoa_tabs_body').csoa_tabs('setStyle', {});
        });
        $('#header_close').bind('click', function (e) {
            var headerLeft = $('#header_close').offset().left;
            $('#header').slideToggle('fast');
            $('#header_open').css('left', headerLeft);
            $('#header_open').fadeToggle('fast');   //0731   slow
            $('#csoa_header_status').attr('value', 'close');
            if($('#form1 input[name=csoa_header_status]') != undefined){
                $('#form1 input[name=csoa_header_status]').attr('value','close');
            }
            $('#csoa_header_status').attr('value', 'close');         
            setTimeout(utl.setSidebarPositionClose, 1);    // 0731    100
           
            if (app.setSidebarStyles && obj.cookie.autoDpi == true) {
                app.setSidebarStyles();
            }
            utl.setContentPosition();
            //$('.csoa_tabs_body').csoa_tabs('setStyle', {});          
        });
        $('#header_open').bind('click', function (e) {
            $('#header_open').hide();
            $('#header').slideToggle('fast', function () {
                utl.setContentPosition();
                utl.setSidebarPositionOpen();
            });
            $('#csoa_header_status').attr('value', 'open');
            if ($('#form1 input[name=csoa_header_status]') != undefined) {
                $('#form1 input[name=csoa_header_status]').attr('value', 'open');
            }    
            if (app.setSidebarStyles && obj.cookie.autoDpi == true) {
                app.setSidebarStyles();
            }
            //$('.csoa_tabs_body').csoa_tabs('setStyle', {});
        });
    };// end utl-15    
    
    // utl-16
    utl.setOpenClosebar = function () {
        $('#sidebar_open').css('width', (app.style == undefined)?'14px':app.style.openClose['f' + obj.com.dpiX].h);
        $('#sidebar_open').css('height', (app.style == undefined) ? '108px' : app.style.openClose['f' + obj.com.dpiX].w);
        $('#header_open').css('width', (app.style == undefined) ? '108px' : app.style.openClose['f' + obj.com.dpiX].w);
        $('#header_open').css('height', (app.style == undefined) ? '14px' : app.style.openClose['f' + obj.com.dpiX].h);
        $('#sidebar_close').css('width', (app.style == undefined) ? '14px' : app.style.openClose['f' + obj.com.dpiX].h);
        $('#sidebar_close').css('height', (app.style == undefined) ? '108px' : app.style.openClose['f' + obj.com.dpiX].w);
        $('#header_close').css('width', (app.style == undefined) ? '108px' : app.style.openClose['f' + obj.com.dpiX].w);
        $('#header_close').css('height', (app.style == undefined) ? '14px' : app.style.openClose['f' + obj.com.dpiX].h);
        $('#sidebar').css('border-right-width', (app.style == undefined) ? '14px' : app.style.openClose['f' + obj.com.dpiX].h);
        $('#sidebar').css('border-top-width', (app.style == undefined) ? '14px' : app.style.openClose['f' + obj.com.dpiX].h);
        $('#header').css('border-bottom-width', (app.style == undefined) ? '14px' : app.style.openClose['f' + obj.com.dpiX].h);
    };
    // utl-17
    utl.setBaseInfo = function () {
        obj.com.dpiX = $('#csoa_usercookie_DPI').attr('value').split('*')[0];
        obj.com.dpiY = $('#csoa_usercookie_DPI').attr('value').split('*')[1];
        obj.com.baseDpi = $('#styleBase').attr('value').substr(4, 4);
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    };
    // utl-18
    utl.setInitSidebarAndHeader = function () {        
        utl.setSidebarPositionInitSave();
        if ($('#csoa_header_status').attr('value') == 'close') {
            $('#header').hide();
            $('#header_open').show();       
            utl.setSidebarPositionClose();
        }
        else {
            $('#header_open').hide();          
            utl.setSidebarPositionOpen();
        }
        var isFromLogin = $('#csoa_comefrom_page').attr('value').split(',')[0].match(obj.reg.isLogin); //是否從login進入群組預設的1st功能
        if (obj.com.sidebarOpenMode != 'prevPage')  {  //若obj.com.sidebarOpenMode設定sidebar open與否不隨前一個頁面之狀態，且此頁面是從login進入群組預設的1st功能 ,目錄應關閉
            if(isFromLogin === null){
                $('#sidebar').hide();
                $('#sidebar_open').show();
            }
            else{
                $('#sidebar').show();
                $('#sidebar_open').hide();
            }
        }
        else {    //sidebar 顯示與否，由csoa_sidebar_status 為 open or close決定
            if ($('#csoa_sidebar_status').attr('value') == 'close') {  
                $('#sidebar').hide();
                $('#sidebar_open').show();
            }
            else {
                $('#sidebar').show();
                $('#sidebar_open').hide();
            }        
        }
    };
    // utl-19
    utl.copyHiddenToForm = function (formId,isExistUpdate) {      
        var parentForm = $('#' + formId);        
        $('#csoa_form_hidden input[name^=csoa]').each(function () {
            var hiddenName = $(this).attr('name');
            var isTagExist=parentForm.find('input[type=hidden]').is('[name="'+hiddenName+'"]')
            //var isTagExist = parentForm.is('input[name="' + hiddenName + '"]');
            if (isTagExist && !isExistUpdate) {
                return true;  //continue
            }
            else if (isTagExist && isExistUpdate) {
                parentForm.find('input[name="' + hiddenName + '"]').attr('value', $(this).attr('value'));
            }
            else{
                var copyTag = '<input type="hidden" name="' + $(this).attr('name') + '" value="' + $(this).attr('value') + '"/>'
                parentForm.append(copyTag);
            }            
        });
            
    };
    // end utl-19

    // utl-20
    //utl.copyHiddenBackHiddenForm = function (formId) {
    //    var parentForm = $('#csoa_form_hidden');
    //    console.log('before =' + $('#csoa_form_hidden input[name^=csoa]').length);
    //    $('#'+formId+ ' input[name^=csoa]').each(function () {
    //        var hiddenName = $(this).attr('name');
    //        if (parentForm.is('input[name="' + hiddenName + '"]')) {
    //            console.log('return true');
    //            return true;  //continue
    //        }           
    //        parentForm.append($(this));
    //        console.log('append csoa cnt=' + $('#csoa_form_hidden input[name^=csoa]').length);
    //    });

    //};
    // end utl-20

    // utl-21
    utl.openCurrentCatalog = function (isCloseAllCatalog) {
        var ulTags = $('#sidebar').find('ul#csoa_menu li ul');
        if (isCloseAllCatalog) {
            ulTags.hide();
            var openCatalogValue = $('#csoa_catalog_open').attr('value');
            if (openCatalogValue != '') {                
                ulTags.each(function () {
                    var matchData = $(this).parent().children('a').attr('funId');
                    if (obj.reg.isMatchReg(openCatalogValue, matchData)) {
                        $(this).show();
                    }
                });
            }           
        }

        if (!ulTags.is(':visible')) {         
            var fileName = location.pathname + location.search;
            var nameReg = new RegExp('\s*' + fileName + '\s*', 'gi');        
            ulTags.find('li>a[noright!=true]').each(function () {
                if (('/' + $(this).attr('href')) == fileName) {
                    $(this).parentsUntil('ul').parent().show();
                    return false;
                }
            });
        }
        
    };
    // end utl-21

    // utl-22
    utl.setAuth = function () {

    };
    // utl-22
    utl.setSidebarPositionOpen = function () {
        $('#sidebar').css('top', obj.com.sidebarTop);
        $('#sidebar').css('height', obj.com.sidebarHeight);
        $('#sidebar ul#csoa_menu').css('height', obj.com.sidebarMenuHeight);             
    };
    // end utl-22

    // utl-23
    utl.setSidebarPositionClose = function () {
        $('#sidebar').css('top', obj.com.headerTop);
        var newSidebarHeight = parseFloat(obj.com.sidebarHeight) + parseFloat(obj.com.sidebarTop) - parseFloat(obj.com.headerTop);
        var newSidebarMenuHeight = parseFloat(obj.com.sidebarMenuHeight) + parseFloat(obj.com.sidebarTop) - parseFloat(obj.com.headerTop);
        $('#sidebar').css('height', newSidebarHeight + 'px');
        $('#sidebar ul#csoa_menu').css('height', newSidebarMenuHeight + 'px');       
    };
    // end utl-23

    // utl-24
    utl.setSidebarPositionInitSave=function(){
        obj.com.headerLeft = $('#header').css('left');
        obj.com.headerTop = $('#header').css('top');
        obj.com.sidebarLeft = $('#sidebar').css('left');
        obj.com.sidebarTop = $('#sidebar').css('top');
        obj.com.sidebarHeight = $('#sidebar').css('height');
        obj.com.sidebarOuterWidth = $('#sidebar').outerWidth();
        obj.com.sidebarMenuHeight = $('#sidebar ul#csoa_menu').css('height');
    };
    // end utl-24
    // utl-25
    utl.getOneTag=function(tag,attr,text){  // attr是html屬性的物件
        var tagAttr='';
        var tagText='';
        if(attr !='' && attr !=undefined){
            for(o in attr){
                tagAttr +=' '+o+'="'+attr[o]+'"';
            }
        }
        if(text !='' && text !=undefined){
            tagText=text;
        }  
        var theTag='<'+tag+tagAttr+'>'+tagText+'</'+tag+'>';
        return theTag; 
    };
    // end utl-25
    // utl-26  create alert or confrim
    utl.createAlertConfirm = function (type) {
        switch (type) {
            case 'alert':
                var btn_yes = utl.getOneTag('a', { 'class': 'csoa_alert_confirm_yes','href':'#' }, '關閉');                
                var confirmbar = utl.getOneTag('div', { 'class': 'csoa_alert_confirm' }, btn_yes);
                var content = utl.getOneTag('div', { 'class': 'csoa_alert_content' }, '');
                //var img = utl.getOneTag('span', { 'class': 'img_information' }, '');
                var hidden =  '<input type="hidden" value="alert" />';
                var header = utl.getOneTag('div', { 'class': 'csoa_alert_header' }, '系統訊息通知' + hidden);                
                break;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        }       
        var dialog = utl.getOneTag('div', { 'class': 'csoa_alert',id:'csoa_alert' }, header + content + confirmbar);
        $('body').append(dialog);
          
        if (utl.Browser.isIE8()) {
            $('#csoa_alert').addClass('alert_border');             
        }
        $('#csoa_alert').bind('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    };
    // end utl-26   create alert or confrim
    // utl-27 alert and confirm
    utl.alert = function (message, option) {
        obj.com.originalFocusObj = $(':focus');       
        utl.createAlertConfirm('alert');
        //alert('before='+$(':focus').prop('class'));        
        var setting = $.extend({
            modalSelector:'body',  
            yes: function () {                
                utl.closeAlertConfirm('alert');               
            },
            afterYes: function () {               
            },
            end: {}
        }, option || {});
        //alert('setting.yes='+setting.yes);
        setting.top = $(setting.modalSelector).offset().top;
        setting.left = $(setting.modalSelector).offset().left;
        setting.outerwidth = $(setting.modalSelector).outerWidth();
        setting.outerheight = $(setting.modalSelector).outerHeight();
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        $('#csoa_alert').show().draggable().find('.csoa_alert_content').html(message);
        obj.com.alertShow = true;
        var confirm = $('#csoa_alert .csoa_alert_confirm');     
        confirm.bind('mouseenter', function (e) {
            $('#csoa_alert').draggable('option', 'disabled', true);
            $('#csoa_alert').removeClass('ui-state-disabled');
        }).bind('mouseleave', function (e) {
            $('#csoa_alert').draggable('option', 'disabled', false);
        });  
        $('#csoa_alert .csoa_alert_confirm .csoa_alert_confirm_yes').focus();      
        $('#csoa_alert .csoa_alert_confirm .csoa_alert_confirm_yes').bind('click', function (e) {          
            setting.yes();
            if (setting.afterYes) {
                setting.afterYes();
            }
        }); 
    };
    utl.confirm = function (message, option) {
        obj.com.originalFocusObj = $(':focus');
        utl.createAlertConfirm('confirm');        
        var setting = $.extend({
            modalSelector: 'body',
            yes: function () {              
                utl.closeAlertConfirm('confirm');
            },
            no: function () {
                utl.closeAlertConfirm('confirm');
            },
            afterYes: function () {
                //alert('confirm afterYes');
            },
            afterNo:function(){
            },
            end: {}
        }, option || {});
        setting.top = $(setting.modalSelector).offset().top;
        setting.left = $(setting.modalSelector).offset().left;
        setting.outerwidth = $(setting.modalSelector).outerWidth();
        setting.outerheight = $(setting.modalSelector).outerHeight();
        if (setting.modalSelector != false) {
            $('body').append('<div id="csoa_alert_background" class="csoa_alert_background"><div>');
            $('#csoa_alert_background').css('top', setting.top);
            $('#csoa_alert_background').css('left', setting.left);
            $('#csoa_alert_background').css('width', setting.outerwidth);
            $('#csoa_alert_background').css('height', setting.outerheight);
        }
        $('#csoa_alert').show().draggable().find('.csoa_alert_content').text(message);
        obj.com.confirmShow = true;
        var confirm = $('#csoa_alert .csoa_alert_confirm');
        confirm.bind('mouseenter', function (e) {
            $('#csoa_alert').draggable('option', 'disabled', true);
            $('#csoa_alert').removeClass('ui-state-disabled');
        }).bind('mouseleave', function (e) {
            $('#csoa_alert').draggable('option', 'disabled', false);
        });
        $('#csoa_alert .csoa_alert_confirm .csoa_alert_confirm_yes').bind('click', function (e) {
            setting.yes();
            setting.afterYes();
        });
        $('#csoa_alert .csoa_alert_confirm .csoa_alert_confirm_no').bind('click', function (e) {
            setting.no();
            setting.afterNo();
        });
    };
    utl.closeAlertConfirm = function (type) {
        $('#csoa_alert_background,#csoa_alert').remove();
        if (type == 'alert') {
            obj.com.alertShow = false;
        }
        if (type = 'confirm') {
            obj.com.confirmShow = false;
        };
        obj.com.originalFocusObj.focus();        
    };
    // end utl-27  alert and confirm

    // utl-28  set common key event
    utl.setCommonKeyEvent = function () {
        $(document).bind('keyup', function (e) {
            if (obj.com.alertShow || obj.com.confirmShow) {
                return;
            }
            var key = obj.key.getKeyName(e.which, e);
            switch (key) {
                case 'shiftLeft':
                    e.preventDefault();
                    if ($('#sidebar').is(':visible')) {
                        $('#sidebar_close').trigger('click');
                    }
                    break;
                case 'shiftRight':
                    e.preventDefault();
                    if ($('#sidebar').is(':hidden')) {
                        $('#sidebar_open').trigger('click');
                    }
                    break;
                case 'shiftUp':                    
                    if ($('#header').is(':visible')) {
                        $('#header_close').trigger('click');
                    }
                    break;
                case 'shiftDown':                  
                    if ($('#header').is(':hidden')) {
                        $('#header_open').trigger('click');
                    }
                    break;
                case 'logout':                  
                    utl.Logout();
                    break;
            }
        }).bind('keydown',function(e){
            if (obj.com.alertShow || obj.com.confirmShow) {
                return;
            }
            var key = obj.key.getKeyName(e.which, e);
            switch (key) {
                case 'shiftLeft':
                    e.preventDefault();                  
                    break;
                case 'shiftRight':
                    e.preventDefault();                   
                    break;
                case 'shiftUp':                   
                    e.preventDefault(); break;
                case 'shiftDown':
                    e.preventDefault();
                    break;              
            }
        });
    };
    // end utl-28 set common key event

    // utl-29 setContentPosition   1600*900 & 1024*768兩解析度出現 原始body width=1579，原因不得而知
    utl.setContentPosition = function () {        
        var paddingRight=obj.com.originalBodyWidth * obj.com.layoutOriginalPadding.right;
        var paddingBottom=obj.com.originalBodyHeight * obj.com.layoutOriginalPadding.bottom;
        var headerStatus = $('#csoa_header_status').attr('value');
        var sidebarStatus = $('#csoa_sidebar_status').attr('value');       
        var paddingTop = (headerStatus == 'open' && obj.com.layoutType == 'shift') ?
            parseFloat($('#header').outerHeight()) + parseFloat($('#header').css('top')) :
            parseFloat($('#header_open').outerHeight()) + parseFloat($('#header_open').css('top'));
        paddingTop += obj.com.originalBodyHeight * obj.com.layoutOriginalPadding.top;
        var newBodyHeight = obj.com.originalBodyHeight - paddingTop - paddingBottom;
        var paddingLeft = (sidebarStatus == 'open' && obj.com.layoutType == 'shift') ?
            parseFloat($('#sidebar').outerWidth()) + parseFloat($('#sidebar').css('left')) :
            parseFloat($('#sidebar_open').outerWidth()) + parseFloat($('#sidebar_open').css('left'));
        paddingLeft += obj.com.originalBodyWidth * obj.com.layoutOriginalPadding.left;
        var newBodyWidth = obj.com.originalBodyWidth - paddingLeft - paddingRight;       
        $('body').css({
            'width': newBodyWidth,
            'height': newBodyHeight,
            'paddingLeft': paddingLeft,
            'paddingTop': paddingTop,
            'paddingRight': paddingRight,
            'paddingBottom': paddingBottom
        });
        //計算#content下第一層container容器之高度分配，在首次及sidebar、header變更時都須重算 
        utl.setContainerPosition('reset');
        // 若不是CustomersPage則執行此設定conainer之功能
        //if (location.href.match(obj.reg.isCustomersPage) === null) {
        //    utl.setPageContainer();
        //} 
        //2014/08/26
        //$(':focus').blur();
        //$('.serverDate').datepicker('hide');
        //2014/08/26
        $('#content table').csoa_gridview('fixedHeaderPosition');
   
    };
    // utl-29 end setContentPosition

    // utl-30  set container position #content內多個div高度的分配，此function因父容器未定義border，故將在上下加入<div class="content_padding_h"></div>，
    // 以避免1st container設定margin-top時會被父容器吃掉問題，此function適用於#content下第一層級之container
    // CustomerPage專用
    utl.setContainerPosition = function (type) {
        if (location.href.match(obj.reg.isCustomersPage) === null) {
            return;            
        }       
        var fun = obj.reg.getCustomerPageFun(location.href);
        if (fun != null) {
            setContainerHeight();
        }
        if (type == 'init') {
            $('#content').append('<div class="content_padding_h"></div>').prepend('<div class="content_padding_h"></div>');
        }
        var sum_content_padding = $('#content .content_padding_h').outerHeight() * 2;
        var containers = $('#content div[class^=csoa_container]');
        var allContainerHeight = 0;        
        containers.each(function (index) {
            allContainerHeight += $(this).outerHeight();
        });
        var containersLen = containers.length;
        var margin_bottom_no = $('#content :has(.margin_bottom_no)').length;
        var margin_bottom = (parseFloat($('#content').innerHeight()) - sum_content_padding - allContainerHeight) / (containersLen - margin_bottom_no - 1);
        //2014#0407
        //containers.not(':last,.margin_bottom_no').css('margin-bottom', margin_bottom);
        containers.not(':last,.margin_bottom_no').css('margin-bottom', margin_bottom - 2);

        function setContainerHeight() {  // 以obj.com.customer_page之參數設定CustomersPage  #PanelXXXX各div的高度以便適當地置入#content內
            var containerLayout;
            var funPara = obj.com.customer_page['f' + fun];
            var commonPara = obj.com.customer_page.common;
            if (funPara) {
                if (funPara.container_height) {
                    containerLayout = funPara.container_height.split(',');
                }
                else {
                    containerLayout = commonPara.container_height.split(',');
                }
            }
            else {
                containerLayout = commonPara.container_height.split(',');
            }
            $('#content #PanelToolBar').css('height', containerLayout[0] + '%');
            $('#content #PanelSelection').css('height', containerLayout[1] + '%');
            $('#content #PanelDetail').css('height', containerLayout[2] + '%');
            $('#content #PanelGrid').css('height', containerLayout[3] + '%');
        }       
    };
    //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    //            var commonPara = obj.com.customer_page.common;
    //            if (funPara) {
    //                if (funPara.thtd_width && funPara.thtd_width != '') {
    //                    thtd_width_array = funPara.thtd_width.split(',');
    //                }
    //            }               
    //            for (var i = 0; i < thtd_width_array.length; i++) {
    //                var th_index = thtd_width_array[i].split('=')[0];                   
    //                var th_width = obj.reg.getWidth(thtd_width_array[i].split('=')[1]);
    //                if (th_width != null) {
    //                    th_width = th_width * parseFloat(obj.com.currentFontSize);
    //                    table.find('thead th:eq(' + th_index + ')').css('width', th_width);
    //                }
    //            }
    //            break;

    //        case 'general_page':
    //            var fun = obj.reg.getCustomerPageFun(location.href);
    //            if (fun === null) {
    //                return;
    //            }
    //            var thtd_width_array = [];
    //            var funPara = obj.com.customer_page['f' + fun];
    //            var commonPara = obj.com.customer_page.common;
    //            if (funPara) {
    //                if (funPara.thtd_width && funPara.thtd_width != '') {
    //                    thtd_width_array = funPara.thtd_width.split(',');
    //                }
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    //    }
    //};
    // utl-31 end
    // utl-32
    //(CustomersPage專用)--傳入1.parentElement、2.childrenElements(或null自動找)、type(w/h/both=>表欲設定寬/高/both)、
    //and 欲覆蓋預設值的物件參數，包含childrenType: 'div', base_w: 5, base_h: 5
    utl.setChildrenToCentral = function () {
        var parentElement;
        var childrenElements;
        var type;
        var marginObj;
        if (arguments.length > 1) {  // 若 > 1則表此function是因首次設定而call此function   
            parentElement=arguments[0];
            childrenElements = arguments[1];
            type = arguments[2];
            if (arguments[3]) {
                marginObj = arguments[3];
            }
        }
        else {  // 若 ==1則表此function是因sidebar、header切換從save在obj.com.setChildredToCentralArray 內的資料來call此function 
            parentElement = arguments[0].parentElement;
            childrenElements = arguments[0].childrenElements;
            type = arguments[0].type;
            marginObj = arguments[0].marginObj; 
        }
        var setting = $.extend({
            childrenType: 'div',  //子容器物件傳入null時，預設所應搜尋之子容器tag類別
            marginTop: '0.2em',  // 4個margin參數，已取消，因其係變更父元素之margin
            marginBottom: '0.2em',
            marginLeft: '0.2em',
            marginRight: '0.2em',
            base_w: 0.1,  //預設子容器間寬度間隔em
            base_h: 0.5   //預設子容器間高度間隔em           
        }, marginObj || {});
        if (arguments.length > 1) {
            obj.com.setChildrenToCentralArray.push({
                'parentElement': parentElement,
                'childrenElements': childrenElements,
                'type': type,
                'marginObj': setting
            });
        }
        //parentElement.css({
        //    'margin-top': setting.marginTop, 'margin-bottom': setting.marginBottom,
        //    'margin-left': setting.marginLeft, 'margin-right': setting.marginRight
        //});
        var parentWidth = parseFloat(parentElement.css('width'));
        var parentHeight = parseFloat(parentElement.css('height'));
        var totalWidth=0;
        var totalHeight = 0;
        var childrenCount = 0;
        var child;
        if (childrenElements === null) {
            child = parentElement.children(setting.childrenType);
        }
        else {
            child = childrenElements;
        }
        child.each(function () {
            totalWidth += parseFloat($(this).css('width')) + parseFloat($(this).css('padding-left')) +
                                parseFloat($(this).css('padding-right')) + parseFloat($(this).css('border-left-width')) +
                                parseFloat($(this).css('border-right-width'));
            totalHeight += parseFloat($(this).css('height')) + parseFloat($(this).css('padding-top')) +
                               parseFloat($(this).css('padding-bottom')) + parseFloat($(this).css('border-top-width')) +
                               parseFloat($(this).css('border-bottom-width'))
            childrenCount +=1;
        });       
        switch (type) {
            case 'w':
                set_w();
                break;
            case 'h':
                set_h();
                break;
            case 'both':
                set_w();
                set_h();
                break;
        }
        // 若只有一個子元素，則改變該子元素的w/h即可；若有2個以上，子元素寬/高+基礎間隔(base_w/h)的總和與父元素寬高差距在1px內，就不予調整
        function set_w() {
            var diff = parentWidth - (totalWidth + (setting.base_w*parseFloat(obj.com.currentFontSize)*(childrenCount -1))) ;
            if (diff  < 1 && diff > -1 ) {
                return;
            }
            var w_diff = diff / childrenCount;
            child.each(function (index) {
                var new_percent_w = ((parseFloat($(this).css('width')) + w_diff) / parentWidth *100).toString()+'%';
                var new_percent_marginRight = (setting.base_w * parseFloat(obj.com.currentFontSize) / parentWidth * 100).toString() + '%';
                $(this).css('width', new_percent_w);
                if ((childrenCount - 1) != index) {
                    $(this).css('margin-right', new_percent_marginRight);
                    $(this).css('margin-left', 0);                   
                }
            });   
        }

        function set_h() {            
            var diff = parentHeight - (totalHeight + (setting.base_h * parseFloat(obj.com.currentFontSize) * (childrenCount - 1)));  //多個容器合計應加減之px
            var a_marginBottom = setting.base_h * parseFloat(obj.com.currentFontSize);  // 每一個容器希望設定margin-bottom之 px
            if (diff < 1 && diff > -1) {
                return;
            }
            var h_diff = diff / childrenCount; //平均一個容器應分配加減之px
            child.each(function (index) {
                //var new_percent_h = parseFloat($(this).css('height')) + h_diff;
                //var new_percent_marginBottom = setting.base_h * parseFloat(obj.com.currentFontSize);
                var new_percent_h = ((parseFloat($(this).css('height')) + h_diff) / parentHeight *100).toString() + '%'; //每一容器加減後再換算回正確%
                var new_percent_marginBottom = (a_marginBottom / parentWidth * 100).toString() + '%';
                $(this).css('height', new_percent_h);
                if ((childrenCount - 1) != index) {
                    $(this).css('margin-bottom', new_percent_marginBottom);
                    $(this).css('margin-top', 0);                    
                }
            });
        }
    };

    // utl-32 end
    // utl-33
    //utl.setTableToolbar = function (type, table) {
    //    var tableToolbar = table.parent('.gridview_border').children('ul');
    //    var hasTableToolbar = table.parent('.gridview_border').childred().is('ul');
    //    var tableParent = table.parent('.gridview_border');
    //    if (!hasTableToolbar) {
    //        return;
    //    }
    //    var originalTableWidth = parseFloat(table.css('width'));
    //    var contianerClientWidth = parseFloat(tableParent[0].clientWidth);
    //    var tableWidth = table;

    //};
    // utl-33 end
    // utl-34
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    //            }
    //            for (var i = 0; i < field_width_array.length; i++) {
    //                var fieldName = field_width_array[i].split('=')[0];
    //                var fieldParentWidth = field_width_array[i].split('=')[1].split('/')[0];
    //                var fieldWidth = field_width_array[i].split('=')[1].split('/')[1];
    //                var hiddenElement=formElement.find('input[type=hidden]').filter('input[id$="'+obj.com.ucProperytName+'"]').filter('input[value="'+fieldName+'"]');
    //                hiddenElement.each(function () {
    //                    $(this).siblings('div.csoa_field_value_div').children('input[type=text]').addClass(fieldWidth);
    //                    $(this).parent('div.csoa_field_div').addClass(fieldParentWidth);
    //                });
    //            }
    //            break;
    //    }
    //};
    // utl-34 end
    // utl-35
    //(除了CustomersPage以外功能專用) 除CustomersPage以外其他功能使用(for pageContainer、realContainer..類使用)
    //由utl.setPageContainer調用此function，實際執行計算container容器之上下左右置中
    utl.setChildElemToCentral = function () {
        var parentElement;
        var childrenElements;
        var type;
        var marginObj;
        if (arguments.length > 1) {  // 若 > 1則表此function是因首次設定而call此function   
            parentElement = arguments[0];
            childrenElements = arguments[1];
            type = arguments[2];
            if (arguments[3]) {
                marginObj = arguments[3];
            }
        }
        else {  // 若 ==1則表此function是因sidebar、header切換從save在obj.com.setChildredToCentralArray 內的資料來call此function 
            parentElement = arguments[0].parentElement;
            childrenElements = arguments[0].childrenElements;
            type = arguments[0].type;
            marginObj = arguments[0].marginObj;
        }
        if (parentElement.attr('id') == 'detail1') {
            var a = 1;
        }
        var setting = $.extend({
            //子容器物件傳入null時，預設所應搜尋之子容器tag類別            
            childrenType: 'div.csoa_pageContainer,div.csoa_pageContainer_border,div.csoa_realContainer,div.csoa_realContainer_border,div.csoa_detailContainer,div.csoa_detailContainer_border,div.csoa_placeContainer,div.csoa_placeContainer_border,div.csoa_holderContainer,div.csoa_holderContainer_border,div.csoa_box1Container,div.csoa_box1Container_border,div.csoa_box2Container,div.csoa_box2Container_border,div.csoa_tabWContainer,div.csoa_tabWContainer_border,div.csoa_tabHContainer,div.csoa_tabHContainer_border',
            base_w: 0.5,  //預設子容器間的寬度間隔em   
            base_h: 0.5,   //預設子容器間的高度間隔em   
            base_parentPadding_w: 0,  //若父容器css未設定橫向padding時，預設應將子容器加入左右兩邊marin，以便保留間隔  0.1
            base_parentPadding_h: 0   //若父容器css未設定縱向padding時，預設應將子容器加入上下兩邊marin(實際上是insert此高度之div)，以便保留間隔  0.2
        }, marginObj || {});
        if (arguments.length > 1) {
            obj.com.setChildrenToCentralArray.push({
                'parentElement': parentElement,
                'childrenElements': childrenElements,
                'type': type,
                'marginObj': setting
            });
        }
        var elem_margin_left = (parseFloat(parentElement.css('padding-left')) == 0) ?
                setting.base_parentPadding_w * parseFloat(obj.com.currentFontSize) : 0;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                setting.base_parentPadding_h * parseFloat(obj.com.currentFontSize) : 0;
        var parentHasPadding_left = (parseFloat(parentElement.css('padding-left')) != 0) ? true : false;
        var parentHasPadding_right = (parseFloat(parentElement.css('padding-right')) != 0) ? true : false;
        var parentHasPadding_top = (parseFloat(parentElement.css('padding-top')) != 0) ? true : false;
        var parentHasPadding_bottom = (parseFloat(parentElement.css('padding-bottom')) != 0) ? true : false;
        var parentWidth = parseFloat(parentElement.css('width'));
        var parentHeight = parseFloat(parentElement.css('height'));
        var totalWidth = 0;
        var totalHeight = 0;
        var childrenCount = 0;
        var child;

        if (childrenElements === null) {
            child = parentElement.children(setting.childrenType);
        }
        else {
            child = childrenElements;
        }
        if (child.length == 0) {
            return;
        }
      
        switch (type) {
            case 'w':
                set_w();
                break;
            case 'h':
                set_h();
                break;          
        }
        // 若只有一個子元素，則改變該子元素的w/h即可；若有2個以上，子元素寬/高+基礎間隔(base_w/h)的總和與父元素寬高差距在1px內，就不予調整
        function set_w() {           
            childrenCount = 0;
            child.each(function () {    //須先把height設定好，才計算width，以免受scrollbar而影響
                set_single_h($(this));
            });
            child.each(function () {                
                totalWidth += parseFloat($(this).css('width')) + parseFloat($(this).css('padding-left')) +
                                parseFloat($(this).css('padding-right')) + parseFloat($(this).css('border-left-width')) +
                                parseFloat($(this).css('border-right-width'))+parseFloat($(this).css('margin-left'))+parseFloat($(this).css('margin-right'));                           
                childrenCount += 1;
            });
            
            var diff = parentWidth- elem_margin_left - elem_margin_right - (totalWidth + (setting.base_w * parseFloat(obj.com.currentFontSize) * (childrenCount - 1)));         
            //var w_diff = Math.floor(diff / childrenCount);       
            var w_diff = Math.floor((diff-1) / childrenCount);
            child.each(function (index) {                
                var new_percent_w = ((parseFloat($(this).css('width')) + w_diff) / parentWidth * 100).toString() + '%';
                var new_percent_marginRight = setting.base_w * parseFloat(obj.com.currentFontSize);  // px，因還要加總後再換算%                
                $(this).css('width', new_percent_w);
                if (childrenCount == 1) {
                    return false;
                }
                if (index == 0 && !parentHasPadding_left) {   //第一個元素且父元素之css未設定 padding-left，則第一個元素應給予margin-left以保留左邊少許間隔                    
                    $(this).css('margin-left', ((parseFloat($(this).css('margin-left')) + elem_margin_left)  / parentWidth * 100).toString() + '%');
                }               
                if ((childrenCount - 1) != index) { //除了最後一個以外都加上margin-rigth                    
                    $(this).css('margin-right', ((parseFloat($(this).css('margin-right')) + new_percent_marginRight) / parentWidth * 100).toString() + '%');
                }
                if ((childrenCount - 1) == index && !parentHasPadding_right) {   //最後一個元素且父元素之css未設定 padding-right，則最後一個元素應給予margin-right以保留右邊少許間隔                   
                    $(this).css('margin-right', ((parseFloat($(this).css('margin-right')) + elem_margin_right) / parentWidth * 100).toString() + '%');
                }               
            });
            insert_margin_h();        
        }
       
        function set_h() {
            childrenCount = 0;
            child.each(function () {                
                totalHeight += $(this).outerHeight();                
                childrenCount += 1;
            });
            var diff = parentHeight - elem_margin_top - elem_margin_bottom - (totalHeight + (setting.base_h * parseFloat(obj.com.currentFontSize) * (childrenCount - 1)));  //多個容器合計應加減之px
            var a_marginBottom = setting.base_h * parseFloat(obj.com.currentFontSize);  // 每一個容器希望設定之間隔margin-bottom之 px           
            //var h_diff = Math.floor(diff / childrenCount); //平均一個容器應分配加減之px
            var h_diff = Math.floor((diff - 1) / childrenCount); //平均一個容器應分配加減之px
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            insert_margin_h();
        }
        function set_single_w(elem) {
            var diff_w = Math.floor(parentWidth - elem_margin_left - elem_margin_right - elem.outerWidth());           
            elem.css('width', ((parseFloat(elem.css('width')) + diff_w) /  parentWidth * 100).toString() + '%');
        }

        function set_single_h(elem) {
            var diff_h = parentHeight - elem_margin_top - elem_margin_bottom - elem.outerHeight();           
            diff_h = Math.floor(diff_h);           
            elem.css('height', ((parseFloat(elem.css('height')) + diff_h) / parentHeight * 100).toString() + '%');
        } 
        function insert_margin_h() {
            //父元素之css未設定 padding-top，則在父元素最前插入一個<div>並給予height以製造上邊與父元素有少許間隔(用margin-top可能會被父元素吃掉)
            if (!parentHasPadding_top) {  
                //var mr_top = $('<div class="csoa_container_h"></div>'); 
                var mr_top = $('<div class="content_padding_h"></div>');
                mr_top.css('height', (elem_margin_top / parentHeight * 100).toString() + '%');
                parentElement.prepend(mr_top);
            }
            //父元素之css未設定 padding-bottom，則在父元素最後插入一個<div>並給予height以製造下邊與父元素有少許間隔(margin-bottom可能會下一個元素之margin-top交互影響)
            if (!parentHasPadding_bottom) {
                //var mr_bottom = $('<div class="csoa_container_h"></div>');  
                var mr_bottom = $('<div class="content_padding_h"></div>');
                mr_bottom.css('height', (elem_margin_bottom / parentHeight * 100).toString() + '%');
                parentElement.append(mr_bottom);
            }
        }

    };
    // 將若父元素內只有一個子元素，以此function將該子元素至於上下&左右中間
    utl.setSingleElementToCentral = function (type, parentElement, child) {      
        if (type == 'h') {
            var borderTop=parseFloat(child.css('border-top-width')) == 0? 0:parseFloat(child.css('border-top-width'));
            var borderBottom= parseFloat(child.css('bor-bottom-width')) == 0? 0:parseFloat(child.css('border-bottom-width'));
            var h = parseFloat(parentElement.css('height')) - borderTop - borderBottom;              
            child.css('height', h);
        }
        else {
        }
    };
    // utl-35 end

    // utl-36
    //設定各種container可垂直水平置中且平均分配於父容器內
    utl.setPageContainer = function () {
        //alert($('#place1').css('width') + '     ' + $('#place2').css('height'));
        var para_pageContainer ={
            parent:'#content',
            child:null,
            type:'w'
        };
        var para_realContainer ={           
            parent:'.csoa_pageContainer_border,.csoa_pageContainer',
            child:null,
            type:'h'           
        };
        var para_detailContainer = {
            parent: '.csoa_realContainer_border,.csoa_realContainer',
            child: null,
            type: 'w'
        };
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        var para_box1Container = {
            parent: '.csoa_holderContainer_border,.csoa_holderContainer',
            child: null,
            type: 'w'
        };
        var para_box2Container = {
            parent: '.csoa_box1Container_border,.csoa_box1Container',
            child: null,
            type: 'w'
        };
        var a = 1;
        var para_tabWContainer = {
            parent: '.csoa_holderContainer_border,.csoa_holderContainer,' +
                            '.csoa_placeContainer_border,.csoa_placeContainer,' +
                            '.csoa_realContainer_border,.csoa_realContainer,' +
                            '.csoa_realContainer_border,.csoa_realContainer,' +
                            '.csoa_pageContainer_border,.csoa_pageContainer,' +
                            '.csoa_tabWContainer,.csoa_tabWContainer_first,.csoa_tabWContainer_border,.csoa_tabWContainer_first_border,' +
                            '.csoa_tabHContainer,.csoa_tabHContainer_first,.csoa_tabHContainer_border,.csoa_tabHContainer_first_border',
            child: null,
            type: 'w'
        };
        var para_tabHContainer = {
            parent: '.csoa_holderContainer_border,.csoa_holderContainer,' +
                            '.csoa_placeContainer_border,.csoa_placeContainer,' +
                            '.csoa_realContainer_border,.csoa_realContainer,' +
                            '.csoa_realContainer_border,.csoa_realContainer,' +
                            '.csoa_pageContainer_border,.csoa_pageContainer,' +
                            '.csoa_tabWContainer,.csoa_tabWContainer_first,.csoa_tabWContainer_border,.csoa_tabWContainer_first_border,' +
                            '.csoa_tabHContainer,.csoa_tabHContainer_first,.csoa_tabHContainer_border,.csoa_tabHContainer_first_border',
            child: null,
            type: 'h'
        };
        var pageContainerObj = {};
        var realContainerObj = {};
        var detailContainerObj = {};
        var placeContainerObj = {};
        var holderContainerObj = {};
        var box1ContainerObj = {};
        var box2ContainerObj = {};
        var tabWContainerObj = {};
        var tabHContainerObj = {};
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        var tabWContainerData = $('#tabWContainer').attr('value');
        var tabHContainerData = $('#tabHContainer').attr('value');
        //個別網頁上若定義了input hidden 的 $('#pageContainer').attr('value')，則將其值解析後更改para_pageContainer物件的預設值，
        //以便作為真正執行 (utl-35)utl.setChildElemToCentral(真正改變容器配置位置及間隔的function)，傳入網頁想要的配置值
        //set pageContainer
        if (pageContainerData) {
            var obj=pageContainerData.split(',');
            for(var x=0; x< obj.length; x++){
                var key=obj[x].split('=')[0];
                var value=obj[x].split('=')[1];
                if(value != '#'){
                    if(key == 'parent' || key=='child' || key=='type'){
                        para_pageContainer[key] =value;
                    }
                    else{
                        pageContainerObj[key] = parseFloat(value);
                    }                 
                }
            }
        }        
        utl.setChildElemToCentral($(para_pageContainer.parent), para_pageContainer.child, para_pageContainer.type, pageContainerObj);    
        //set realContainer
        if (realContainerData) {
            var obj = realContainerData.split(',');
            for (var y = 0; y < obj.length; y++) {
                var key = obj[y].split('=')[0];
                var value = obj[y].split('=')[1];
                if (value != '#') {
                    if (key == 'parent' || key == 'child' || key == 'type') {
                        para_realContainer[key] = value;
                    }
                    else {
                        realContainerObj[key] = parseFloat(value);
                    }
                }
            }
        }      
        $(para_realContainer.parent).each(function () {
            utl.setChildElemToCentral($(this), para_realContainer.child, para_realContainer.type, realContainerObj);
        });
        //set detailContainer
        if (detailContainerData) {
            var obj = detailContainerData.split(',');
            for (var y = 0; y < obj.length; y++) {
                var key = obj[y].split('=')[0];
                var value = obj[y].split('=')[1];
                if (value != '#') {
                    if (key == 'parent' || key == 'child' || key == 'type') {
                        para_detailContainer[key] = value;
                    }
                    else {
                        detailContainerObj[key] = parseFloat(value);
                    }
                }
            }
        }
        $(para_detailContainer.parent).each(function () {
            utl.setChildElemToCentral($(this), para_detailContainer.child, para_detailContainer.type, detailContainerObj);
        });
        //set placeContainer
        if (placeContainerData) {
            var obj = placeContainerData.split(',');
            for (var y = 0; y < obj.length; y++) {
                var key = obj[y].split('=')[0];
                var value = obj[y].split('=')[1];
                if (value != '#') {
                    if (key == 'parent' || key == 'child' || key == 'type') {
                        para_placeContainer[key] = value;
                    }
                    else {
                        placeContainerObj[key] = parseFloat(value);
                    }
                }
            }
        }
        $(para_placeContainer.parent).each(function () {
            utl.setChildElemToCentral($(this), para_placeContainer.child, para_placeContainer.type, placeContainerObj);
        });
        //set holderContainer
        if (holderContainerData) {
            var obj = holderContainerData.split(',');
            for (var y = 0; y < obj.length; y++) {
                var key = obj[y].split('=')[0];
                var value = obj[y].split('=')[1];
                if (value != '#') {
                    if (key == 'parent' || key == 'child' || key == 'type') {
                        para_holderContainer[key] = value;
                    }
                    else {
                        holderContainerObj[key] = parseFloat(value);
                    }
                }
            }
        }
        $(para_holderContainer.parent).each(function () {
            utl.setChildElemToCentral($(this), para_holderContainer.child, para_holderContainer.type, holderContainerObj);
        });

        //set box1Container
        if (box1ContainerData) {
            var obj = box1ContainerData.split(',');
            for (var y = 0; y < obj.length; y++) {
                var key = obj[y].split('=')[0];
                var value = obj[y].split('=')[1];
                if (value != '#') {
                    if (key == 'parent' || key == 'child' || key == 'type') {
                        para_box1Container[key] = value;
                    }
                    else {
                        box1ContainerObj[key] = parseFloat(value);
                    }
                }
            }
        }
        $(para_box1Container.parent).each(function () {
            utl.setChildElemToCentral($(this), para_box1Container.child, para_box1Container.type, box1ContainerObj);
        });

        //set box2Container
        if (box2ContainerData) {
            var obj = box2ContainerData.split(',');
            for (var y = 0; y < obj.length; y++) {
                var key = obj[y].split('=')[0];
                var value = obj[y].split('=')[1];
                if (value != '#') {
                    if (key == 'parent' || key == 'child' || key == 'type') {
                        para_box2Container[key] = value;
                    }
                    else {
                        box2ContainerObj[key] = parseFloat(value);
                    }
                }
            }
        }
        $(para_box2Container.parent).each(function () {
            utl.setChildElemToCentral($(this), para_box2Container.child, para_box2Container.type, box2ContainerObj);
        });
     
        //$('#tab22,#k1,#k2').css('position', '');
        //set tabWContaine
        //if (tabWContainerData) {
        //    var obj = tabWContainerData.split(',');
        //    for (var y = 0; y < obj.length; y++) {
        //        var key = obj[y].split('=')[0];
        //        var value = obj[y].split('=')[1];
        //        if (value != '#') {
        //            if (key == 'parent' || key == 'child' || key == 'type') {
        //                para_tabWContainer[key] = value;
        //            }
        //            else {
        //                tabWContainerObj[key] = parseFloat(value);
        //            }
        //        }
        //    }
        //}
        //$(para_tabWContainer.parent).each(function () {
        //    //utl.setChildElemToCentral($(this), para_tabWContainer.child, para_tabWContainer.type, tabWContainerObj);
        //});
        //set tabHContainer
        //if (tabHContainerData) {
        //    var obj = tabHContainerData.split(',');
        //    for (var y = 0; y < obj.length; y++) {
        //        var key = obj[y].split('=')[0];
        //        var value = obj[y].split('=')[1];
        //        if (value != '#') {
        //            if (key == 'parent' || key == 'child' || key == 'type') {
        //                para_tabHContainer[key] = value;
        //            }
        //            else {
        //                tabHContainerObj[key] = parseFloat(value);
        //            }
        //        }
        //    }
        //}
        //$(para_tabHContainer.parent).has('.csoa_tabHContainer').each(function () {
        //    //utl.setChildElemToCentral($(this), para_tabHContainer.child, para_tabHContainer.type, tabHContainerObj);
        //});
        //alert('after pageContainer setting      '+$('#k1').css('height'));  
    };

    //將tabs元素重新計算，占滿並置於其父容器之中間位置      
    utl.setTabToParentCentral = function (elemTab) {
        var tabParent = elemTab.parent();
        var parentH = parseFloat(tabParent.innerHeight());
        var parentW = parseFloat(tabParent.innerWidth());     
        var h1 = 0;
        h1 = elemTab.outerHeight(true);
        //2014#0406
        //var add_h = (parentH - h1 - 3);
        var add_h = (parentH - h1 - 1);
        var new_percent_h = (((parseFloat(elemTab.height()) + add_h) / parentH) * 100).toString() + '%';
        var w1 = 0;
        w1 = elemTab.outerWidth(true);
        //2014#0406
        //var add_w = (parentW - w1 - 3);
        var add_w = (parentW - w1 - 1);
        var new_percent_w = (((parseFloat(elemTab.width()) + add_w) / parentW) * 100).toString() + '%';
        elemTab.css('height', new_percent_h);
        elemTab.css('width', new_percent_w);
    };

    //將tabs內之 .tabs_body_container置於tabs_body內之中間位置      
    utl.setTabBodyCentral = function (elemTabBody) {
        var parentH = parseFloat(elemTabBody.innerHeight());
        var parentW = parseFloat(elemTabBody.innerWidth());
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            var add_w = (parentW - w1 - 1);
            var new_percent_w = (((parseFloat($(this).width()) + add_w) / parentW) * 100).toString() + '%';
            $(this).css('height', new_percent_h);
            $(this).css('width', new_percent_w);
        });
    };
    //傳入tabs_container物件(jQ物件)將tabs_body_container內有tabH或tabW class之容器設置於上下左右置中(已遞迴處理，故tabH/tabW內還可再包tabH/tabW)
    utl.setTabContainer = function (elemTabContainer) {
        if (elemTabContainer.children(obj.com.tabWContainer + ',' + obj.com.tabHContainer).length > 0) {
            var type = (elemTabContainer.children(obj.com.tabWContainer).length > 0) ? 'w' : 'h';
            if (type == 'h') {
                var w1 = 0;
                var h1 = 0;
                var w_percent = 0;
                var h_percent = 0;
                var children_count = elemTabContainer.children().length;
                var parentW = parseFloat(elemTabContainer.innerWidth());
                elemTabContainer.children().each(function () {
                    w1 += parseFloat($(this).outerWidth(true));
                });
                var add_w = (parentW - w1 - 1) / children_count;
                elemTabContainer.children().each(function (index) {
                    var new_percent = (((parseFloat($(this).width()) + add_w) / parentW) * 100).toString() + '%';
                    $(this).css('width', new_percent);
                });
                var parentH = parseFloat(elemTabContainer.innerHeight());
                elemTabContainer.children().each(function (index) {
                    h1 = $(elemTabContainer.children()[index]).outerHeight(true);
                    var add_h = (parentH - h1 - 1);

                    var new_percent = (((parseFloat($(this).height()) + add_h) / parentH) * 100).toString() + '%';
                    $(this).css('height', new_percent);
                    if ($(this).children(obj.com.tabWContainer + ',' + obj.com.tabHContainer).length > 0) {
                        utl.setTabContainer($(this));
                    }
                });
            }
            else {
                var w1 = 0;
                var h1 = 0;
                var w_percent = 0;
                var h_percent = 0;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                });
                var parentW = parseFloat(elemTabContainer.innerWidth());
                elemTabContainer.children().each(function (index) {
                    w1 = $(elemTabContainer.children()[index]).outerWidth(true);
                    var add_w = (parentW - w1 - 1);
                    var new_percent = (((parseFloat($(this).width()) + add_w) / parentW) * 100).toString() + '%';
                    $(this).css('width', new_percent);
                    if ($(this).children(obj.com.tabWContainer + ',' + obj.com.tabHContainer).length > 0) {
                        utl.setTabContainer($(this));
                    }
                });
            }
        }
    };
    
    // utl-36 end


    // utl-37
    utl.isServiceSessionExpired = function (result) {
        if (result == "forceLogout") {
            if (obj.com.bordRequestObject != null) {
                clearInterval(obj.com.bordRequestObject);
            }
            if (!obj.com.isInSessionExpired) {
                obj.com.isInSessionExpired = true;
                utl.alert(utl.date('datetime')+'     '+obj.msg.forceLogout, { yes: function () { location.href = '../Csoa_Maintain/Csoa_Login.aspx'; } });
            }
            return true;
        }
        else {
            return false;
        }
    }
    // utl-37 end
    
    // utl-38
    utl.sort = function (property, transType, sortAsc) {
        var sortOrder =(sortAsc == 'asc')?1:-1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (transNum(a[property]) < transNum(b[property])) ? -1 : (transNum(a[property]) > transNum(b[property])) ? 1 : 0;
            return result * sortOrder;
        }
        function transNum(data) {
            if (transType == 'num') {
                return parseInt(data);
            }
            else {
                return data;
            }
        }
    }
    //utl.sort = function (property,transType,sortAsc) {       
    //    var sortOrder = 1;
    //    if (property[0] === "-") {
    //        sortOrder = -1;
    //        property = property.substr(1);
    //    }
    //    return function (a, b) {
    //        var result = (transNum(a[property]) < transNum(b[property])) ? -1 : (transNum(a[property]) > transNum(b[property])) ? 1 : 0;
    //        return result * sortOrder;
    //    }
    //    function transNum(data) {
    //        if (transType == 'num') {
    //            return parseInt(data);
    //        }
    //        else {
    //            return data;
    //        }
    //    }
    //}
    // utl-38 end
    // utl-39
    utl.ajax = function (option,isReConfirm) {
        //呼叫utl.ajax應傳進來方法物件。此function執行ajax時所上傳的資料中之csoa_form_hidden固定由此function產生，呼叫端無需處理，
        //而呼叫端則需傳入名為uploadData的"物件"近來，給此function JSON.stringify後再組合成完整上傳資料給service
        //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        var csoa_form_hidden = utl.formToJson($('#csoa_form_hidden'));  
        //上傳service固定有兩個屬性：1、csoa_form_hidden用以讓service判斷session之狀態/逾期...，2、真正要給service處理所需之參數
        var jsonData = {
            csoa_form_hidden: JSON.stringify(csoa_form_hidden),
            jsonObject: JSON.stringify(setting.uploadData)
        };
        var post= {
            async: true,
            cache: true,
            url: setting.url,
            type: 'post',
            dataType : 'text',        
            data : JSON.stringify(jsonData),
            contentType: (setting.contentType == '')?"application/json":setting.contentType,
            success: function (result) {
                // success時傳進來之result為一個CSOA.Business的Csoa_ServiceResponse.cs物件經serialize後的json字串，需在此以JSON.parse解析成物件。
                // 若 ResponseCode= '100'，會判斷有無傳進來extraProcess function，若有就執行此function，再判斷obj.msg內是否有service傳回的ResponseMessage屬性，
                //(因100是例外但非錯誤狀態，server端服務設定必須給ResponseMessage值) ，決定是否call utl.alert show message
                // 若 ResponseCode= '200'，會判斷有無傳進來afterSuccess function，若有就先執行此function，再判斷service傳回之ResponseMessage若非空白，
                // 就表示要show utl.alert()
                //(200為正常完成，非一定要show alert，例如initLoad完成並無alert之必要)，以ResopnseMessage決定是否call utl.alert show message
                //
                var o1 = JSON.parse(result);
                var jsonObject = (o1.d != undefined) ? o1.d : o1;
                //先utl.isServiceSessionExpired，在該處判斷若為'forceLogout'代表session timeout了，該function會執行location.href重導到login.aspx
                if (!utl.isServiceSessionExpired(jsonObject)) {
                    var resultJson=JSON.parse(jsonObject);
                    switch(resultJson.ResponseCode){
                        case '100':
                            $('#header_name').removeClass('header_color');
                            if(setting.extraProcess != {}){
                                setting.extraProcess(resultJson);
                            }
                            var alertMsg=(obj.msg[resultJson.ResponseMessage] == undefined) ? '':obj.msg[resultJson.ResponseMessage];
                            utl.alert(alertMsg) 
                            break;
                        case '110':
                            $('#header_name').removeClass('header_color');
                            if (setting.warningProcess != {}) {
                                setting.warningProcess(resultJson);
                            }
                            var alertMsg = (obj.msg[resultJson.ResponseMessage] == undefined) ? '' : obj.msg[resultJson.ResponseMessage];
                            utl.alert(alertMsg)
                            break;
                        case '200':
                            $('#header_name').removeClass('header_color');
                            if (setting.afterSuccess != {}) {
                                setting.afterSuccess(resultJson);
                            }
                            if(resultJson.ResponseMessage != ''){ 
                                var alertMsg=(obj.msg[resultJson.ResponseMessage] == undefined) ? '':obj.msg[resultJson.ResponseMessage];
                                utl.alert(alertMsg);
                            }
                            break;
                        default:
                            var alertMsg=(obj.msg[resultJson.ResponseMessage] == undefined) ? '':obj.msg[resultJson.ResponseMessage];
                            utl.alert(alertMsg) 
                            break;
                    }                  
                };
            }              
        };
        if (isReConfirm) {         
            utl.confirm(setting.reConfirmMessage,
                {
                    afterYes: function () {
                        $('#header_name').addClass('header_color');
                        $.ajax(post);
                    },
                    afterNo: setting.cancelSubmit,                    
                });
        }
        else {
            $.ajax(post);
        }        
    }           
    // utl-39 end
    // utl-40  transfer one tr data to object、get matched tr by matchKeyString、update tr inner by jsonObject
    utl.transfer_OneTrToObject = function (table, index) {
        var idx = (index == -1) ? 0 : index;
        var txt = '';
        var ii = table.find('tbody tr:eq(' + idx + ') td').length;
        var result = {};
        table.find('tbody tr:eq(' + idx + ') td').each(function () {
            var th_index = $(this).index();
            var propertyName = table.find('thead tr th:eq(' + th_index + ') span').text();
            var propertyValue = $(this).text();
            result[propertyName] = propertyValue;
        });
        return result;
    };  
    //傳入table+一筆資料的json物件+一個以逗點隔開的多個屬性名稱字串=>傳回在table內哪一筆tr之多個屬性均與json物件內的值相符 
    utl.gridview_getMatchedTr = function (table, jsonObject, propertyString) {
        var thArray = utl.gridview_getThIndexArray(table, propertyString);
        var result;
        table.find('tbody tr').each(function () {
            var isTrMatch = true;
            var trIndex = 0;
            for (var j = 0; j < thArray.length; j++) {
                var idx = parseInt(thArray[j].split(',')[0]);
                var propertyName = thArray[j].split(',')[1];
                var trText = $(this).children('td').filter(':eq(' + idx + ')').text();
                var jsonText = jsonObject[propertyName];
                if (trText != jsonText) {
                    return;
                }
            }
            if (isTrMatch) {
                result = $(this);
                return false;
            }
        });
        return result;
    };
    //(取得多筆Tr)傳入table+一筆資料的json物件+一個以逗點隔開的多個屬性名稱字串=>傳回在table內哪一筆tr之多個屬性均與json物件內的值相符 
    utl.gridview_getMatchedTr_multi= function (table, jsonObject, propertyString) {
        var thArray = utl.gridview_getThIndexArray(table, propertyString);
        var result;
        var resultArray = [];
        table.find('tbody tr').each(function () {
            var isTrMatch = true;
            var trIndex = 0;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        return resultArray;
    };

    //傳入一個Tr+一筆json物件，將json內每一屬性update tr內相對應位置(搜尋th內有屬性名稱可對照到)之td的值 
    utl.gridview_updateTrByJsonObject = function (tr, jsonObject) {
        var table = tr.parentsUntil('table').parent();
        for (var x in jsonObject) {
            if (jsonObject.hasOwnProperty(x)) {
                var i1 = table.find('thead th span:contains("' + x + '")').parent('th').index();
                tr.children('td').filter(':eq(' + i1 + ')').text(jsonObject[x]);
            }
        }
    };

    //傳入jQuery table物件and 屬性名稱字串(多個以,間隔)，取得在th之index array ['0,propertyName1','3,prpertyName2']
    utl.gridview_getThIndexArray=function(table,propertyString){
        var keyArray = propertyString.split(',');
        var thArray = [];
        for (var i = 0; i < keyArray.length; i++) {
            if (table.find('thead tr th span:contains("' + keyArray[i] + '")').length > 0) {
                thArray.push(table.find('thead th span:contains("' + keyArray[i] + '")').parent('th').index().toString() + ',' + keyArray[i]);
            }
        }
        return thArray;
    };   
    // utl-40 end
    
    // utl-41  
    utl.createOneElement = function (childTag, jsonObject, propertiesString, dash, attrsArray, grandChild) {
        var inner = '';
        //根據傳入的屬性字串(多個以,間隔)，到單筆json物件裡一屬性取出值，並加以組合出一個多屬性合成的元素innerText
        var properties = propertiesString.split(',');
        for (var j = 0; j < properties.length; j++) {
            if (jsonObject[properties[j]]) {
                inner += dash + jsonObject[properties[j]];
            }
        }
        if (inner != '') {
            inner = inner.substr(1, inner.length - 1);
        }
        //2014/12/29
        //if (childTag_innerTag != undefined && childTag_innerTag != null) {
        //    inner = $(innerTag).text(inner)[0];
        //}
        //
        if (grandChild != undefined && grandChild != null) {
            var grand = utl.getOneTag(grandChild.tag, grandChild.attr, inner);
            inner = grand;
        }
        // foreach 定義元素要產生哪些attribute的陣列 ，將該一個元素所需的attribute組成一個attrObj
        var attrObj = {};
        for (var k = 0; k < attrsArray.length; k++) {
            var propertyName = attrsArray[k].split('=')[0];
            var propertyValu = jsonObject[attrsArray[k].split('=')[1]];
            attrObj[propertyName] = propertyValu;
        }
        //
        //傳入html tag字串+元素innerText+attr物件，傳回完整html元素字串
        var tag = obj.tag.getWithAttr(childTag, inner, attrObj);
        return tag;
    };
    //傳入 original就是按原順序不sort，inner按元素的text值sort，都不是就已傳入的orderAttr(元素的某attr名稱)來sort
    utl.getElementForSort = function (tag, orderAttr) {    
        if ($.trim($(tag).text()) != '') {
            var sortKeyValue = '';
            switch (orderAttr) {
                case 'original':
                    sortKeyValue = '';
                    break;
                case 'inner':
                    sortKeyValue = $.trim($(tag).text());
                    break;
                default:
                    sortKeyValue = $(tag).attr(orderAttr);
                    break;
            }           
        };
        return { key: sortKeyValue, value: tag };
    };
    utl.getMatchElement = function (parentTag,childTag,matchKeyArray,jsonObject) {
        var attrObj = {};
        for (var k = 0; k < matchKeyArray.length; k++) {
            var propertyName = matchKeyArray[k].split('=')[0];
            var propertyValu = jsonObject[matchKeyArray[k].split('=')[1]];
            attrObj[propertyName] = propertyValu;
        }
        var result;
        parentTag.children(childTag).each(function () {
            var isMatch = true;
            for (var o in attrObj) {
                if (attrObj.hasOwnProperty(o)) {
                    if (o == 'inner') {
                        if ($(this).text() != attrObj[o]) {
                            return;
                        }
                    }
                    else {
                        if ($(this).attr(o) == undefined || $(this).attr(o) != attrObj[o]) {
                            return;
                        }
                    }
                }
            }
            if (isMatch) {
                result = $(this);
                return false;
            }
        });
        return result;
    };
    utl.assemblyInnerText = function (propertiesString,dash,jsonObject) {
        var inner = '';
        //根據傳入的屬性字串(多個以,間隔)，到單筆json物件裡一屬性取出值，並加以組合出一個多屬性合成的元素innerText
        var properties = propertiesString.split(',');
        for (var j = 0; j < properties.length; j++) {
            if (jsonObject[properties[j]]) {
                inner += dash + jsonObject[properties[j]];
            }
        }
        if (inner != '') {
            inner = inner.substr(1, inner.length - 1);
        }
        return inner;
    };
    // utl-41 end    
    
    // utl-42
    //傳入前後兩個tr index 判斷若改變觸發 gdChange_after
    utl.selectedChangeProcess = function (tr_selected_before, tr_selected_after, table) {
        if (tr_selected_before != tr_selected_after) {
            table.trigger(obj.event.gdChange_after, { index: tr_selected_after });
        }
    };
    // utl-42 end
    utl.textSelection = function (tag) {
        if (isMouseDownClick) {
            return;
        }
        if (tag[0].createRange) {            
            var r = tag[0].createTextRange();
            r.moveStart('character', 0);
            r.moveEnd('character', tag.length);
            r.collapse(true);
            r.select();
        }
        else if (tag[0].setSelectRange) {            
            var r = tag[0].setSelectionRange(0, tag.val().length);
        }
    };
    utl.textUnSelection = function (tag, isMouseDownClick) {       
        if (isMouseDownClick) {           
            return;
        }
        //console.log('now in textUnSelection    '+utl.date('minisecond_1'));
        if (tag[0].createTextRange) {         
            var r = tag[0].createTextRange();
            r.moveStart('character', 0);
            r.moveEnd('character', 0);
            r.collapse(true);
            r.select();
        }
        else if (tag[0].setSelectionRange) {           
            var r = tag[0].setSelectionRange(0,0);           
        }
    }
   
    // utl-43
    utl.date = function (type,timeType) {
        var dd = new Date();
        var MM = ('0' + (dd.getMonth() + 1).toString()).substr(('0' + (dd.getMonth() + 1).toString()).length - 2, 2);
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        var resultTime =(timeType)? hh+mm+ss: hh + ':' + mm + ':' + ss;
        var resultMinisecond = dd.getMilliseconds();      
        switch (type) {
            case 'date':
                return resultDate;
                break;
            case 'datetime':
                return resultDate+' '+resultTime
                break;          
            case 'time':
                return resultTime
                break;
            case 'minisecond':
                return resultTime + '(' + resultMinisecond+')';
                break;
            case 'minisecond_1':
                return (resultTime + '(' + resultMinisecond + ')').substr(3,(resultTime + '(' + resultMinisecond + ')').length - 3);
                break;
        }
    };
    // utl-43 end
    // utl-44     
    utl.conditionString = function (key, value,exp, logic, left, right) {
        this.type = 'string',
        this.key = key;
        this.exp = (exp) ? exp : obj.com.eq,
        this.value = value,
        this.logic = (logic) ? logic : obj.com.and
        this.left = (left) ? left : '',
        this.right = (right) ? right : ''
    };
    utl.conditionNull = function (key, value, logic, left, right) {  //不傳入exp，以value為 '=null'、'!=null' or 'null'('null'代表此條件不列入篩選)
        this.type = 'null',
        this.key = key;        
        this.exp = (value == obj.com.isnull) ? obj.com.eq : (value == obj.com.notnull) ? obj.com.noteq : obj.com.stringnull,
        this.value = '',
        this.logic = (logic) ? logic : obj.com.and,
        this.left = (left) ? left : '',
        this.right = (right) ? right : ''
    };
    //utl.conditionNull = function (key, value, exp, logic, left, right) {
    //    this.type = 'null',
    //    this.key = key;
    //    this.exp = (exp) ? exp : '=',
    //    this.value = '',
    //    this.logic = (logic) ? logic : 'and'
    //    this.left = (left) ? left : '',
    //    this.right = (right) ? right : ''
    //};
    var conditionNum = function (key, value, exp,logic, left, right) {
        this.type = 'num',
        this.key = key;
        this.exp = (exp) ? exp : obj.com.eq,
        this.value = value,
        this.logic = (logic) ? logic : obj.com.and,
        this.left = (left) ? left : '',
        this.right = (right) ? right : ''
    };
    utl.conditionInt = function (key, value,exp, logic, left, right) {
        this.type = 'int',
        this.key = key;
        this.exp = (exp) ? exp : obj.com.eq,
        this.value = value,
        this.logic = (logic) ? logic :obj.com.and,
        this.left = (left) ? left : '',
        this.right = (right) ? right : ''
    };
    utl.conditionDouble = function (key, value, exp,logic, left, right) {
        this.type = 'double',
        this.key = key;
        this.exp = (exp) ? exp : obj.com.eq,
        this.value = value,
        this.logic = (logic) ? logic : obj.com.and,
        this.left = (left) ? left : '',
        this.right = (right) ? right : ''
    };
    utl.conditionDate = function (key, value,exp, logic, left, right) {
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
        this.right = (right) ? right : ''
    };
    utl.getConditionObj = function (type, key, value, exp, logic, left, right) {
        var result;
        switch (type) {
            case 'string':
                result = new utl.conditionString(key, value, exp, logic, left, right);
                break;
            case 'int':
                result = new utl.conditionInt(key, value, exp, logic, left, right);
                break;
            case 'double':
                result = new utl.conditionDouble(key, value, exp, logic, left, right);
                break;
            case 'date':
                result = new utl.conditionDate(key, value, exp, logic, left, right);
                break;
            case 'null':
                result = new utl.conditionNull(key, value, logic, left, right);
                break;
        }
        return result;
    }

    utl.getEntityJson = function (conditionArray) {
        var init_post = {
            url: '../CSOA_Service/Svc_CommonMaintain.svc/FormData_Dropdown',
            uploadData: {
                dropdownData: JSON.stringify([utl.getFilterConditions('Csoa_Image', conditionArray)])
            },
            afterSuccess: function (resultJson) {
                var result = (JSON.parse(resultJson.ResponseJson));               
                var data = JSON.parse(result.Csoa_Image);
                return data;
            }
        }
        utl.ajax(init_post);
    };
    //傳入條件陣列，取得select(或是取得單一entity資料)的條件給server端處理
    utl.getFilterConditions = function (entityName, valueArray) {
        var whereArray = [];
        for (var i = 0; i < valueArray.length; i++) {
            var key = valueArray[i].key;
            var value = valueArray[i].value;
            var type = valueArray[i].type;
            var exp = (valueArray[i].exp) ? valueArray[i].exp : undefined;
            var logic = (valueArray[i].logic) ? valueArray[i].logic : undefined;
            var left = (valueArray[i].left) ? valueArray[i].left : undefined;
            var right = (valueArray[i].right) ? valueArray[i].right : undefined;
            if (value == obj.com.skipCondition || value == obj.com.stringnull || value == undefined) {
                continue;
            }
            //conditionObj = utl.getConditionObj(type, key, value);
            conditionObj = utl.getConditionObj(type, key, value, exp, logic, left, right);
            //if (type == 'null') {
            //    conditionObj = utl.getConditionObj(type, key, value, logic, left, right);
            //}
            //else {
            //    conditionObj = utl.getConditionObj(type, key, value, exp, logic, left, right);
            //}            
            if (conditionObj != null) {
                whereArray.push(conditionObj);
            }
        }
        return new utl.dropDown(entityName, utl.whereSet(whereArray));
    };
    //將傳入的where 條件array之最後一個的logic屬性值(即'and'或'or') 改成空白 
    utl.whereSet = function (whereArray) {
        if (whereArray.length == 0) {
            return whereArray;
        }
        else {
            var len = whereArray.length;
            whereArray[len - 1].logic = '';
            return whereArray;
        }
    };
    utl.dropDown = function (entName, whereArray, selectArray) {
        this.entity = entName,
        this.whereArray = (whereArray) ? JSON.stringify(whereArray) : JSON.stringify([]);
        this.selectArray = (selectArray) ? JSON.stringify(selectArray) : JSON.stringify([]);
    };
    // utl-44 end
    // utl-45
    utl.isEmptyObject = function (obj) {
        for (var o in obj) {
            if (obj.hasOwnProperty(o)) {
                return false;
            }
        }
        return true;
    };
    // utl-45 end
    // utl-46
    utl.setPlugin = function () {
        $('div.csoa_radio_buttonset').buttonset();        
    };
    // utl-46 end
    // utl-47
    utl.setSizeFlexable = function (type, containerTag, baseTagArray, flexableTag) {
        switch (type) {
            case 'w':
                var fixedTotal_outerW = 0;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            case 'h':
                var fixedTotal_outerH = 0;
                for (var i = 0; i < baseTagArray.length; i++) {
                    fixedTotal_outerH += parseFloat($(baseTagArray[i]).outerHeight(true));
                }
                var container_innerH = parseFloat($(containerTag).innerHeight());
                var flexableTag_h = container_innerH - fixedTotal_outerH - 2;
                var h = (flexableTag_h / container_innerH * 100).toString() + '%';
                $(flexableTag).css('height', h);
                break;
        }
    };
    utl.setSizeFlexableByIndex = function (type, containerTag, setChildIndex, excludeSelector,option) {
        var setting = $.extend({
            deduct_h: 0.8,
            deduct_w:0.8
        }, option || {});
        if ($(containerTag).attr('id') == 'tab3') {
            var a = 1;
        }
        switch (type) {
            case 'w':
                var fixedTotal_outerH = 0;
                var childTags;
                if (excludeSelector) {
                    childTags = $(containerTag).children().not(excludeSelector);
                }
                else {
                    childTags = $(containerTag).children();
                }
               
                var setChildTag;
                childTags.each(function (index) {
                    if (index != setChildIndex - 1) {
                        fixedTotal_outerW += parseFloat($(this).outerWidth(true));
                    }
                    else {
                        setChildTag = $(this);
                    }
                });
                var container_innerW = parseFloat($(containerTag).innerWidth());
                var flexableTag_w = container_innerW - fixedTotal_outerW - 2;
                var w = (flexableTag_w / container_innerW * 100).toString() + '%';
                setChildTag.css('width', w);
                break;
            case 'h':
                var fixedTotal_outerH = 0;
                var childTags;
                if (excludeSelector) {
                    childTags = $(containerTag).children().not(excludeSelector);
                    //alert($(containerTag).attr('id')+'   $()child-len= '+$(containerTag).children().length+'     childTags-len='+childTags.length)
                }
                else {
                    childTags = $(containerTag).children();
                }
                //var childTags = $(containerTag).children();
                var setChildTag;
                childTags.each(function (index) {
                    if (index != setChildIndex - 1) {
                        fixedTotal_outerH += parseFloat($(this).outerHeight(true));
                    }
                    else {
                        setChildTag = $(this);
                      //alert($(this).attr('id')+'    '+$(this).parent().attr('id')+'   '+fixedTotal_outerH);
                    }
                });
                
                var container_innerH = parseFloat($(containerTag).innerHeight());
                var flexableTag_h = container_innerH - fixedTotal_outerH - 2;
                //var flexableTag_h = container_innerH - fixedTotal_outerH  ;
                var h = ((flexableTag_h / container_innerH * 100) - setting.deduct_h).toString() + '%';
                setChildTag.css('height', h);
                break;
        }
    };
    // utl-47 end
    // utl-48
    //此物件提供：以json屬性作為result的屬性，以便以Json之屬性取得該屬性在header第幾格
    //gridview =>傳入 <thead>內有th的整個tr，gridform=>傳入csoa_gridform_header內的csoa_gridform_title
    utl.getHeaderProperty_jsonBase = function (headerTag,option) {  
        var setting = $.extend({          
            childTag: 'h5',
            nameTag:'span',
            matchKey: {
                // matchKey左邊的屬性為json資料的屬性，nameInHeader才是gridform或gridview之header內<span>內所放該欄位的屬性名稱
                functionId: {nameInHeader:'functionId',index:0}
            }        
        }, option || {});
        var result = {};      
        headerTag.find(setting.childTag + ' ' + setting.nameTag).each(function (index) {
            if ($(this).text() != '') {
                var propertyName = $(this).text();
                result[propertyName] = index;
                if (setting.matchKey) {
                    for (var o in setting.matchKey) {
                        if(setting.matchKey.hasOwnProperty(o)){
                            if (setting.matchKey[o].nameInHeader == $(this).text()) {
                                setting.matchKey[o].index = index;
                            }
                        }
                    }                 
                }
            }
        });        
        result.matchKey = setting.matchKey;
        return result;
    };
    //取得{1:'functionId'}=>header1st格存應放著json裡的functionId屬性
    //gridview =>傳入 <thead>內有th的整個tr，gridform=>傳入csoa_gridform_header內的csoa_gridform_title
    utl.getHeaderProperty_jQBase = function (headerTag, option) {
        var setting = $.extend({
            childTag: 'h5',
            nameTag: 'span',
            matchKey: {
               1:'functionId'            
            }
        }, option || {});
        var result = {};
        headerTag.find(setting.childTag + ' ' + setting.nameTag).each(function (index) {
            if ($(this).text() != '') {
                var propertyName = index
                result[propertyName] = $(this).text();               
            }
        });
        result.matchKey = setting.matchKey;
        return result;
    };
    // utl-48 end
    // utl-49
    //傳入單一筆Json物件+ult-48 getHeaderProperty_jsonBase+所有多筆jQ物件，以逐次次篩選取得單一li(jQuery物件)
    utl.getOneRow_jsonGetRows = function (data, headerInfo, all_rows,tag_child) {
        var filter_rows = all_rows;
        for (var o in data) {
            if (data.hasOwnProperty(o)) {
                if (headerInfo.matchKey) {
                    if (headerInfo.matchKey[o]) {
                        var key_index = headerInfo.matchKey[o].index;
                        filter_rows = filter_rows.find(tag_child+':eq(' + key_index + ')').filter(':contains("' + data[o] + '")').parent();
                    }
                }
            }
        }
        return filter_rows;
    };
    //傳入單一筆jQj物件(如gridforms內的li料)+經(48)utl.getHeaderProperty_jQBase解析表頭後取得的表投欄位物件+
    //多筆的Json陣列，取得比對後符合的單筆Json資料 
    utl.getOneJson_rowGetJsons = function (json_array, headerInfo, one_row,tag_child) {
        singleJson = null;
        for (var i = 0; i < json_array.length; i++) {
            var data = json_array[i];
            var isMatch = true;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            if (isMatch) {
                singleJson = data;
                break;
            }  
        }
        return singleJson;
    }; 
    utl.transfer_OneRowToObject = function (row, headerInfo, propertyInfo, child_tag) {
        //if (data.functionId == 'f1105') {
        //    var a = 1;
        //} 
        var oneRow = {};
        if (propertyInfo.addProperty) {
            var addition = propertyInfo.addProperty;
            for (var o in addition) {
                oneRow[o] = addition[o];
            }
        }
        row.children(child_tag).each(function (index) {   
            if (obj.reg.isMatchReg(propertyInfo.includeProperty, headerInfo[index]) || !obj.reg.isMatchReg(propertyInfo.excludeProperty, headerInfo[index])) {
                var col = $(this);
                if (col.children().length == 0) {
                    oneRow[headerInfo[index]] = col.text();                    
                }
                else {
                    if (col.children().is(':checkbox')) {
                        oneRow[headerInfo[index]] = col.children().prop('checked');                        
                    }
                    else if (col.children().is(':text')) {

                    }
                    else if (col.children().is(':radio')) {

                    }
                    else if (col.children().is('select')) {
                    }
                }
            }
        });
        //var result = JSON.stringify(oneRow);
        var result = oneRow;
        return result;
    };
    // utl-49 end
    // utl-50
    utl.putOneRowData_jsonBase = function (row, data, headerInfo, propertyInfo,child_tag) {
        //if (data.functionId == 'f1105') {
        //    var a = 1;
        //}
        for (var o in data) {
            if (data.hasOwnProperty(o)) {
                if (headerInfo[o] && (obj.reg.isMatchReg(propertyInfo.includeProperty, o) || !obj.reg.isMatchReg(propertyInfo.excludeProperty, o))) {
                    var col = row.find(child_tag+':nth-child(' + (parseInt(headerInfo[o]) + 1) + ')');
                    if(col.children().length == 0){
                        col.text(data[o]);
                    }
                    else{
                        if(col.children().is(':checkbox')){
                            col.children()[0].checked =data[o];
                        }
                        else if(col.children().is(':text')){

                        }
                        else if(col.children().is(':radio')){

                        }
                        else if(col.children().is('select')){

                        }
                    }
                }

            }

        }
    };
    utl.putOneRowData_jQBase = function (row, data, headerInfo, propertyInfo, child_tag) {
        //if (data.functionId == 'f1105') {
        //    var a = 1;
        //}        
        row.children(child_tag).each(function (index) {
            if (headerInfo[index] && (obj.reg.isMatchReg(propertyInfo.includeProperty, headerInfo[index]) || !obj.reg.isMatchReg(propertyInfo.excludeProperty, headerInfo[index]))) {
                var col = $(this);
                if (col.children().length == 0) {
                    col.text(data[headerInfo[index]]);
                }
                else {
                    if (col.children().is(':checkbox')) {
                        col.children()[0].checked = data[headerInfo[index]];
                    }
                    else if (col.children().is(':text')) {

                    }
                    else if (col.children().is(':radio')) {

                    }
                    else if (col.children().is('select')) {
                    }
                }
            }
        });
    };
    //根據傳入setting參數，取得須處理的多筆jQuery rows(給gridview或gridform使用)
    utl.getRows = function (inputParent,setting) {
        var allRows_parent;
        if (setting.type == 'gridform') {
            allRows_parent = inputParent.find('ul.csoa_gridform_ul'); //gridform 內的ul (處理對象為所有li)
            setting.selectedClass = '.ui-selected';
        }
        else if (setting.type == 'gridview') {
            allRows_parent = inputParent.find('tbody'); // gridview 內的 tbody(處理對象為所有tr)
            setting.selectedClass = '.gridview_tr_selected';
        }
        var rows = (setting.isSelectedOnly) ? allRows_parent.children(setting.level1Tag).filter(setting.selectedClass) : allRows_parent.children(setting.level1Tag);
        rows = rows.not(setting.noUpdateClass)
        return rows;
    };

    // utl-50 end
    // utl-51
    utl.getGridformTagByTagName = function (header_h5,setting,data) {
        var propertyName = header_h5.children('span').text();
        var tagName = header_h5.find('i').text().split('/')[0]; 
        var level1 = header_h5.find('i').text().split('/')[1];
        var level2 = header_h5.find('i').text().split('/')[2];
        var theTag = (data.tagLevel && data.tagLevel == '0') ? level1 : level2;
        var resultTag = '';
        if (tagName == 'text') {  //text表在setting.level2Tag(若為gridform，則level2Tag為h5)內置入text文字即可
            switch (theTag) {  //theTag只是代表level1或level2元素=>(var theTag = (data.tagLevel && data.tagLevel == '0') ? level1 : level2;)
                case 'text':
                    resultTag = utl.getOneTag(setting.level2Tag, '', setting.newCreate_para.text(data[propertyName]));
                    break;
                case 'textIndent':
                    resultTag = utl.getOneTag(setting.level2Tag, '', setting.newCreate_para.textIndent(data[propertyName]));
                    break;
            }
        }
        else {  //非text表在setting.level2Tag(若為gridform，則level2Tag為h5)內置入propertyInfo物件內屬性定好的html元素字串，如checkbox                                
            if (theTag != 'none') { 
                //var innerTag = setting.newCreate_para[tagName]();
                switch (tagName) {
                    case 'checkbox':
                        var innerTag = setting.newCreate_para[tagName]();
                        $(innerTag)[0].checked = new Boolean(data[propertyName]);
                        resultTag = utl.getOneTag(setting.level2Tag, '', innerTag);
                        break;
                    case 'input':
                        var innerTag = setting.newCreate_para[tagName](data[propertyName]);
                        resultTag = utl.getOneTag(setting.level2Tag, '', innerTag);
                        break;
                    case 'textarea':
                        var innerTag = setting.newCreate_para[tagName](data[propertyName]);
                        resultTag = utl.getOneTag(setting.level2Tag, '', innerTag);
                        break;
                }
            }
        }
        return resultTag;
    };
    // utl-51 end
    // utl-52
    utl.clonePanelviewerClass = function () {
        $('.csoa_panel_viewer_dialog').each(function () {
            var panelViewerId;
            if ($(this).attr('id')) {
                panelViewerId = $(this).attr('id');
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
    // utl-55 end
    // utl-56
    // utl-56 end

    utl.end = function () { };  //  all utility end
})();
// All global utility function ==========end utl      end utl     end utl  =============================================

//P=>(jQuery 外掛) ==============jQuer plugin     jQuery plugin==============================================
(function ($) {
    var globals_child = Csoa_Namespace_Caps20140610.setGlobals();
    var obj = globals_child.obj, fun = globals_child.fun, utl = globals_child.utl, app = globals_child.app;
    
    //P01 resizing 
    //----------------------------------------------------------------------------------------------------------------------------------------------
    var resizing_methods = {
        init: function (option) {
            return this.each(function () {
                var theClass = $(this).prop('class') || $(this).attr('class');
                //if ($(this).prop('nodeName').toLowerCase() == 'hr') {
                //    var a = 1;
                //}
               
                if (theClass == undefined) {
                    return true;                    
                }
                var classArray = theClass.replace(/^\s+|\s+$/g, '').match(/\S+/g);   //先去頭尾空白，再以match取非空白，產生class之陣列
                for (var i = 0; i < classArray.length; i++) {
                    var item = classArray[i].split('_');
                    // 檢核class格式，若不正確就不執行
                    if (item[0] != obj.layout.autoLayout.value || item[1].match(obj.reg.isCorrectLayout1) ==null ||
                        item[2].match(obj.reg.isCorrectLayout2) == null || item[3].match(obj.reg.isCorrectLayout3) ==null ||
                        item[4].match(obj.reg.isCorrectLayout4) == null) {
                        continue;
                    }                    
                    var tag = {
                        type: item[1],  //ww hh mr  ma   tx
                        sub: item[2],  // em px pc   auto center
                        target: item[3].split('/')[0],  // child/li的 child
                        elem: item[3].split('/')[1],    // child/li的 li
                        num: item[4]   //  0000表示99.99   整數2位.小數2位
                    }                   
                    var styleResult;     // 值+單位=>組出來的style結果
                    var styleSub = '';   //放style的單位
                    var styleNum = '';  //放style的數值99.99
                
                    if (tag.num == '0000') {  // (0000視為100)
                        styleNum = obj.layout.hundred.value;
                    }
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                        if (app.setLayoutStyles && obj.cookie.autoDpi == true) {                            
                            styleResult = app.setLayoutStyles(tag, styleResult, styleSub, styleNum, theType);
                        }
                        else {
                            styleResult = styleNum.toString() + styleSub;                            
                        }  
                    }
                    var para = {
                        selectElem: this,
                        target: tag.target,
                        updateElem: tag.elem,
                        property: obj.layout[tag.type].value,
                        value: styleResult
                    }                   
                    utl.realChangeCss(para);
                }
            });
        }, //end resizing.init method
        end: function () { }
    };   // end  resizing_methods

    $.fn.csoa_resizing = function (method) {
        if (resizing_methods[method]) {
            return resizing_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || resizing_methods[method] == undefined) {
            return resizing_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };  // end of resizing    


    // P02 confirmBar
    //------------------------------------------------------------------------------------------------------------------------------------------------
    var confirmbar_methods = {
        init: function (option) {  //option 傳入的方法及若為textbar時所給的css屬性
            var setting = $({              
            }, option || {});
            return this.each(function () {
                var elem = $(this).find('ul>li');                
                if (app.setAuth && obj.cookie.autoDpi) {                    
                    var type = $(this).prop('class');
                    authType=''
                    if (type.match(obj.reg.isConfirmbar) != null) {
                        authType = 'confirmbar';
                    }
                    else if(type.match(obj.reg.isOpbar) != null) {
                        authType = 'opbar';
                    }
                    else if (type.match(obj.reg.isTextbar) != null) {
                        authType = 'textbar';
                    }
                    else{
                        authType = 'xxxxxxxx';
                    }
                    app.setAuth(authType, elem);
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                // find confirmbar的父層的 #csoa_dialog_login(一個dialog div) 在這dialog內 keypress enter 且 不是在utl.alert或utl.confrim狀態(#csoa_alert_background透明遮罩不存在)           
                if (option.keyPress != undefined && definedKeyPress > 0) {
                    //alert('bind keyPress    =   ' + definedKeyPress);
                    var dialog = $(this).parents().filter('#csoa_dialog_login');
                    var bar = $(this);                    
                    dialog.bind('keyup', function (e) {
                        var keyName = obj.key.getKeyName(e.which, e); //若為13(enter)就返回'enter'字串
                        if (option.keyPress[keyName] != undefined && !obj.com.alertShow && !obj.com.confirmShow) {                           
                            var keyClassName = option.keyPress[keyName];  // 若option={ keyPress:{enter:'ok'}}}，則會返回 'ok'字串
                            bar.find('ul li a').trigger('click', keyClassName);  //
                        }
                    });
                }
                var barType = $(this).prop('class');                
                $(this).find('ul li a').bind('click', function (e, keyPressPara) {
                    if ($(this).attr('href') == undefined) {
                        return;
                    }
                    var btnName = ($.trim($(e.target).prop('class')) != '') ? $(e.target).prop('class') : $(e.target).children('span').prop('class');                    
                    if (keyPressPara != undefined) {
                        btnName = keyPressPara;
                    }
                    if (barType.match(obj.reg.isTextbar) != null) {
                        btnName = $.trim(btnName.replace(obj.reg.tag_a_style, ''));
                    }                    
                    if (option['click_' + btnName]) {
                        return confirmbar_methods.click.apply(this, [option['click_' + btnName]]);
                        //2014/11/25
                        //return confirmbar_methods.click.apply(this, [option['click_' + btnName]]);                       
                    }
                });
            });
        },   // end  csoa_confirmbar's init method

        disableEnable:function(option){
            return this.each(function () {
                if(option != null)  {
                    for (var o in option) {
                        var updateArray;
                        if(o == 'disabled'){
                            updateArray=option[o];
                            for (var e1=0;e1< updateArray.length;e1++){
                                $(this).find('ul li a.' + updateArray[e1]).attr(o, o);
                            }
                        }
                            //else if( o ==  'enabled'){
                        else {
                            updateArray = option[o];
                            for (var e1 = 0; e1 < updateArray.length; e1++) {
                                if($(this).find('ul li a.' + updateArray[e1]).attr('disabled') != undefined)
                                    $(this).find('ul li a.' + updateArray[e1]).removeAttr('disabled');
                            }
                        }
                    }
                }
            });
        },  // end csoa_confirmbar's disableEnable method
     
        click: function (option) {
            if ($(this).attr('disabled') != undefined) {
                return false;
            }
            option(this);
        },   // end csoa_confirmbar's click method
        end: function () { }
    };
    $.fn.csoa_confirmbar = function (method) {
        if (confirmbar_methods[method]) {           
            return confirmbar_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));          
        }
        else if (typeof method == 'object' || confirmbar_methods[method] == undefined) {
            return confirmbar_methods.init.apply(this,arguments);
        }
        else {
            return;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------
    
    // P03 htmltag
    //------------------------------------------------------------------------------------------------------------------------------------------------
    var htmltag_methods = {
        init: function (option) {
            return this.each(function () {
            });
        },
        setSelect:function(option){
            return this.each(function () {
                $(this).empty();
                for (var i = 0; i < option.length; i++) {
                    $(this).csoa_htmltag('addOneTag', { tag: obj.tag.option, inner: option[i] })
                }
            });
        },
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            });
        },        
        end: function () { }
    };
    $.fn.csoa_htmltag = function (method) {
        if (htmltag_methods[method]) {
            return htmltag_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || htmltag_methods[method] == undefined) {
            return htmltag_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------


    // P04 Form   --------------------------------------------------------------------------------------------------------------------------
    var form_methods = {        
        init: function (option) {
            var setting = $.extend({
                selectFun: function () { },
                radioChanged: function (e) {  },
                checkboxChanged: function () { },
                selectChanged: function () { }
            }, option || {})
            var tabindexCount = 0;
            
            return this.each(function(){
                if (location.pathname.match(obj.reg.isCustomersPage) != null) { 
                    if (app.setFieldAdditionWidth && obj.cookie.autoDpi == true) {
                        app.setFieldAdditionWidth('customer_page', $(this));     //obj.com.customer_page若對form 有標準欄寬以外的寬度設定(.wxx class)   
                    }
                    //utl.setFieldAdditionWidth('customer_page',$(this));    //obj.com.customer_page若對form 有標準欄寬以外的寬度設定(.wxx class)    
                    //2014#/04/07 ////////////////////////////////////////////////
                    
                    var isMouseDownClick = false;
                    var tagsInForm = $(this).find(obj.com.formFocusSelector);
                    var checkboxInForm = $(this).find(':checkbox');
                    var radioInForm = $(this).find(':radio');
                    var selectInForm = $(this).find('select');
                    var isFirst = tagsInForm.first();
                    var isLast = tagsInForm.last();
                    tagsInForm.unbind('keydown');
                    tagsInForm.unbind('focus');
                    tagsInForm.unbind('mousedown');
                    checkboxInForm.unbind('change');
                    radioInForm.unbind('change');
                    selectInForm.unbind('change');
                    radioInForm.bind('change', function (e) {
                        setting.radioChanged(e);
                    });
                    checkboxInForm.bind('change', function (e) {

                    });
                    selectInForm.bind('change', function (e) {

                    });
                    tagsInForm.bind('keydown', function (e) {
                        //console.log($(e.target).attr('name') + '     keydown    ' + utl.date('minisecond_1'));
                        var firstEnable = tagsInForm.filter(':enabled:first');
                        var lastEnable = tagsInForm.filter(':enabled:last');
                        if (e.which == 9) {
                            isBack = e.shiftKey;
                            e.preventDefault();
                            switch (isBack) {
                                case true:  //tab 倒退
                                    if (this === firstEnable[0]) {
                                        lastEnable.focus();
                                    }
                                    else {
                                        var prevTag = ($(this).prev(obj.com.inputEnabledSelector).length > 0) ?
                                            $(this).prev(obj.com.inputEnabledSelector) : $(this).parents('li').prevAll('li').find(obj.com.inputEnabledSelector).last();
                                        prevTag.focus();
                                    }
                                    break;
                                case false:  //tab 往前
                                    if (this === lastEnable[0]) {
                                        firstEnable.focus();
                                    }
                                    else {
                                        var nextTag = ($(this).next(obj.com.inputEnabledSelector).length > 0) ?
                                            $(this).next(obj.com.inputEnabledSelector) : $(this).parents('li').nextAll('li').find(obj.com.inputEnabledSelector).first();
                                        nextTag.focus();
                                    }
                                    break;
                            }
                        }
                    }).bind('focus', function (e) {
                        //focusCount += 1;
                        //console.log($(e.target).attr('name') + '    ' + $(e.target).parents('form').attr('id') + '     focus   ' + utl.date('minisecond_1') + '         cnt=' + focusCount);
                        if ($(e.target).filter(obj.com.nonTextInputSelector).length > 0) {
                            return;
                        }
                        utl.textUnSelection($(e.target), isMouseDownClick);
                        isMouseDownClick = false;
                    }).bind('mousedown', function (e) {
                        //console.log($(e.target).attr('name') + '     mousedown   ' + utl.date('minisecond_1'));
                        isMouseDownClick = true;
                    });
                    //2014#/04/07 ////////////////////////////////////////////////
               
                }  

                else {    //非CustomersPage
                    //2014/11/17//////////////////////////////////////////////////
                    var isMouseDownClick = false;
                    var tagsInForm = $(this).find(obj.com.formFocusSelector);
                    //alert('bdfored datepicker        '+$(this).attr('id')+'    '+tagsInForm.length);
                    var checkboxInForm = $(this).find(':checkbox');
                    var radioInForm = $(this).find(':radio');
                    var selectInForm = $(this).find('select');                    
                    var isFirst = tagsInForm.first();
                    var isLast = tagsInForm.last();
                    tagsInForm.unbind('keydown');
                    tagsInForm.unbind('focus');
                    tagsInForm.unbind('mousedown');
                    checkboxInForm.unbind('change');
                    radioInForm.unbind('change');
                    selectInForm.unbind('change');
                    $(this).find('.serverDate,.csoa_date').datepicker({
                        dateFormat:'yy/mm/dd' ,changeYear: true, changeMonth: true,
                            dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
                            monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']                            
                        });
                    $('#ui-datepicker-div').css('font-size', obj.com.currentFontSize);

                    $(this).find('.csoa_datetime').datetimepicker({
                        dateFormat: 'yy/mm/dd', timeFormat: 'HH:mm', changeYear: true, changeMonth: true,
                        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
                        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    });

                    $(this).find('.csoa_time').timepicker({
                        timeFormat: 'HH:mm'
                    });
                    $('#ui-datepicker-div').css('font-size', obj.com.currentFontSize);
                    
                    radioInForm.bind('change', function (e) {
                        setting.radioChanged(e);
                    });
                    checkboxInForm.bind('change', function (e) {

                    });
                    selectInForm.bind('change',function(e){

                    });
                    tagsInForm.bind('keydown', function (e) {
                        //console.log($(e.target).attr('name') + '     keydown    ' + utl.date('minisecond_1'));
                        var firstEnable = tagsInForm.filter(':enabled:first');
                        var lastEnable = tagsInForm.filter(':enabled:last');
                      
                        if (e.which == 9) {
                            isBack = e.shiftKey;
                            e.preventDefault();
                            switch (isBack) {
                                case true:  //tab 倒退
                                    if (this === firstEnable[0]) {
                                        lastEnable.focus();
                                    }
                                    else {                                   
                                        var prevTag = ($(this).prevAll(obj.com.inputEnabledSelector).length > 0) ?
                                           $(this).prevAll(obj.com.inputEnabledSelector).first() : $(this).parents('li').prevAll('li').find(obj.com.inputEnabledSelector).last();
                                        prevTag.focus();
                                    }
                                    break;
                                case false:  //tab 往前
                                    if (this === lastEnable[0]) {
                                        firstEnable.focus();
                                    }
                                    else {                                
                                        var nextTag = ($(this).nextAll(obj.com.inputEnabledSelector).length > 0) ?
                                           $(this).nextAll(obj.com.inputEnabledSelector).first() : $(this).parents('li').nextAll('li').find(obj.com.inputEnabledSelector).first();                                     
                                        nextTag.focus();
                                    }
                                    break;
                            }
                        }                        
                        //if (((e.which >= 32 && e.which < 48) || (e.which >= 59 && e.which < 128)) && $(this).hasClass('clientTime')) {
                        //    e.preventDefault();
                        //}
                        alert(e.which);
                        if (((e.which >= 32 && e.which < 48) || (e.which >= 59 && e.which < 128)) && $(this).hasClass('clientTime')) {
                            e.preventDefault();
                            
                        }

                    }).bind('focus', function (e) {
                        //focusCount += 1;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                    //$('.clientDate').datepicker({
                    //    dateFormat: "yy/mm/dd", changeYear: true, changeMonth: true,
                    //    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
                    //    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    //});
                    //$('#ui-datepicker-div').css('font-size', obj.com.currentFontSize);
                    //alert($('input[name=theDate]').prop('class'));


                    //2014/11/17////////////////////////////////////////////////////////
                }   
            });
        },
        load: function (option) {
            var setting = $.extend({
                loadData: null,
                //tag_select_match參數：專用於'load'方法中若欄位為select時，左邊(form內該下拉tag之name)=右邊(要取selected_tr_data物件哪個屬性名稱來帶入作為下拉選單的值)  
                //多個欄位以,分隔
                tag_select_match: null
            }, option || {});
            return this.each(function () {                
                for(var o in setting.loadData){
                    if (setting.loadData.hasOwnProperty(o)) {
                        //找出o(屬性在form內之nodeName為何，input(就再看type為何)、select、.....
                        var tag = ($(this).find('ul li :input[name=' + o + ']').length > 0) ? $(this).find('ul li :input[name=' + o + ']').prop('nodeName').toLowerCase():'';                        
                        if (tag == '') {
                            continue;
                        }
                        var tagType = '';
                        if(tag == 'input'){
                            tagType=$(this).find('ul li :input[name=' + o + ']').attr('type');
                        }
                        else if(tag='select'){
                            tagType='select';
                        }
                        switch (tagType) {
                            case 'text':
                                $(this).find('ul li input[name=' + o + ']').val(setting.loadData[o]);
                                break;
                            case 'select':
                                if (setting.tag_select_match != null) {                                    
                                    var selectPair = obj.reg.selectMatch(o, setting.tag_select_match);
                                    var optionValue = setting.loadData[selectPair[1]];
                                    $(this).find('ul li select[name=' + o + '] option[value=' + optionValue + ']').attr('selected', 'selected');
                                }
                                break;
                        }     
                    }
                }                
            });
        },
        validate:function(option){
            var setting = $.extend({
                validateFun: null,
                errorMessage:obj.msg.dataHasError,
            }, option || {});
            return this.each(function () {
                var errorData = null;
                if (setting.validateFun != null) {
                    var result = setting.validateFun.validate();
                    if (utl.isEmptyObject(result)) {
                        errorData= null;
                    }
                    else {
                        errorData= result;
                    }                   
                }
                if (errorData != null) {   //validate error
                    for (var o in errorData) {
                        if (errorData.hasOwnProperty(o)) {
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                }
            });             
        },
        error: function (option) {
            var setting = $.extend({
                errorData: null
            }, option || {});
            return this.each(function () {
                if (setting.errorData == '' || setting.errorData === null) {
                    return false;
                }
                for (var o in setting.errorData) {
                    if (setting.errorData.hasOwnProperty(o)) {
                        var message = obj.msg[setting.errorData[o]];                        
                        $(this).find('ul li :input[name=' + o + ']').tooltip({
                            tooltipClass: 'csoa_tooltip',
                            content:message                            
                        }).attr('title', '').addClass('csoa_inputText_error').next('span').text('*');
                    }                    
                }
            });
        },
        clearError: function (option) {            
            return this.each(function () {
                //$(this).find('ul li [title]').removeAttr('title').removeClass('csoa_inputText_error').end().find('ul li span').text('');
                $(this).find('ul li [title]').removeAttr('title').removeClass('csoa_inputText_error').end().find('ul li span[class=csoa_err]').text('');
            });
        },
        clearForm: function (option) {         
            return this.each(function () {
                $(this).find(':text').val('');
                $(this).find('select option:first').attr('selected', 'selected');
            });
        },
        setFormAdd:function(option){
          
        },
        setFormUpdate: function (option) {
            var setting = $.extend({
                defaultEnable: true,
                reverseArray:[]
            }, option || {});
            //console.log('in to  setFormUpdate function    this.length='+this.length);
            return this.each(function () {
                //console.log('in to setFormUpdate return this.each   '+$(this).prop('nodeName')+'     '+$(this).attr('id')); 
                if (setting.defaultEnable) {
                    if($(this).find(':disabled').length > 0){
                        //$(this).find(':disabled').removeAttr('disabled');
                        $(this).find(':disabled').not('.csoa_input_label').removeAttr('disabled');
                    }                    
                    for (var i = 0; i < setting.reverseArray.length; i++) {
                        $(this).find('ul li [name=' + setting.reverseArray[i] + ']').attr('disabled', 'disabled');
                    }
                }
                else {
                    if ($(this).find(':enabled').length > 0) {
                        $(this).find(':enabled').attr('disabled', 'disabled');
                    }
                    for (var i = 0; i < setting.reverseArray.length; i++) {
                        $(this).find('ul li [name=' + setting.reverseArray[i] + ']').removeArrt('disabled');
                    }
                }               
                //var tag = $(this).find(':enabled:first');                
                //tag.focus();   
            });
        },        
        setFirstFocus:function(option){
            return this.each(function () {
                $(this).find(obj.com.formFocusTextSelector).filter(':enabled').first().focus();
            });
        },
        //setFirstFocus:function(option){
        //    return this.each(function () {
        //        $(this).find(obj.com.formFocusSelector).filter(':enabled').first().focus();
        //    });
        //},
        show: function () {
        }
    };
    $.fn.csoa_form = function (method) {
        if (form_methods[method]) {
            return form_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || form_methods[method] == undefined) {
            return form_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------------------

    // P05 Gridview   --------------------------------------------------------------------------------------------------------------------------
    var gridview_methods = {
        //================= gridview 外掛共用function (只要是給table creat、addOneTr、updateOneTr)
        commFun: {
            createThead:function (tableJsonData,thPropertyMapping) {
                var theadInner = this.newTrth(tableJsonData, thPropertyMapping);
                return obj.tag.get('thead', theadInner);                    
            },          
            createTbody:function (tableJsonData) {
                var tbodyInner = '';
                for (var i = 0; i < tableJsonData.length; i++) {
                    tbodyInner += this.newTrtd(tableJsonData[i]);
                }
                return obj.tag.get('tbody', tbodyInner);
            },
            createEmptyTbody:function(){
            },
            newTrth:function (tableJsonData,thPropertyMapping) {
                var trInner = '';
                if (tableJsonData.length > 0) {
                    var row = tableJsonData[0];
                    for (var o in row) {
                        if (row.hasOwnProperty(o)) {                               
                            if (thPropertyMapping.name[o]) {
                                trInner += this.newTh(thPropertyMapping.name[o], o);
                            }
                            else {
                                trInner += this.newTh(o, o);
                            }
                        }
                    }
                }
                else {
                    for (var o in thPropertyMapping.name) {
                        if (thPropertyMapping.name.hasOwnProperty(o)) {
                            trInner += this.newTh(thPropertyMapping.name[o],o);
                        }
                    }
                }
                return obj.tag.get('tr', trInner);
            },
            newTrtd:function (perTrData) {
                var trInner = '';
                for (var o in perTrData) {
                    if (perTrData.hasOwnProperty(o)) {
                        trInner += this.newTd(perTrData[o]);
                    }
                }
                var tr = obj.tag.get('tr', trInner);
                return tr;
            },
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            newTh:function (innerData, propertyName) {
                var span_property = obj.tag.get('span', propertyName);
                return obj.tag.get('th', innerData + span_property);
            },
            newTd:function (innerData){
                return obj.tag.get('td', innerData);
            },
            bindTrEvent: function (setting, table,tr_data,tr_even) {                
                tr_data.bind('mouseenter', function (e) {
                    if ($(this).hasClass('gridview_tr_even')) {
                        isEven = true;
                    }
                    else {
                        isEven = false;
                    }

                    if (!$(this).hasClass('gridview_tr_selected') && !isEven) {
                        $(this).addClass('gridview_tr_hover');
                    }
                    else if (isEven) {
                        $(this).removeClass('gridview_tr_even').addClass('gridview_tr_hover');
                    }
                    else {
                        $(this).addClass('gridview_tr_hover');
                    }

                }).bind('mouseleave', function (e) {
                    if (!$(this).hasClass('gridview_tr_selected') && isEven) {
                        $(this).removeClass('gridview_tr_hover').addClass('gridview_tr_even');
                    }
                    else if (!$(this).hasClass('gridview_tr_selected')) {
                        $(this).removeClass('gridview_tr_hover');
                    }

                }).bind('mousedown', function (e) {
                    if (e.ctrlKey || e.shiftKey) {
                        e.preventDefault();
                    }
                }).bind('click', function (e) {
                    var tr_selected_before = $(this).parents('table').find('tr.gridview_tr_selected:first').index();                   
                    if (e.ctrlKey && e.shiftKey) {
                        return;
                    }
                    else if (!e.ctrlKey && !e.shiftKey) {   // 未按住 ctrl也未按shift，重設樣式(移除tr附加樣式 hover、selected，加入even樣式)                       
                        table.find('tbody tr').removeClass('gridview_tr_hover');
                        table.find('tbody tr').removeClass('gridview_tr_selected');
                        table.find('tbody tr:even').addClass('gridview_tr_even');
                        $(this).removeClass('gridview_tr_hover').addClass('gridview_tr_selected');                       
                    }
                    else if (e.ctrlKey) {
                        $(this).removeClass('gridview_tr_hover').addClass('gridview_tr_selected');
                    }
                    else if (e.shiftKey) {
                        var parent = $(this).parent();
                        var tr_first = parent.children(':first');
                        var tr_last = parent.children(':last');
                        var backward_1st_selected = $(this).prevAll('.gridview_tr_selected').first();
                        var forward_1st_selected = $(this).nextAll('.gridview_tr_selected').first();
                        if (backward_1st_selected.length > 0) {
                            $(this).prevUntil(backward_1st_selected).add($(this)).addClass('gridview_tr_selected');
                        }
                        else if (forward_1st_selected.length > 0) {
                            $(this).nextUntil(forward_1st_selected).add($(this)).addClass('gridview_tr_selected');
                        }
                        if (document.getSelection) {
                            document.getSelection().removeAllRanges();
                        }
                        else {
                            document.selection.empty();
                        }
                    } 
                    var tr_selected_after = $(this).parents('table').find('tr.gridview_tr_selected:first').index(); 
                    table.trigger(obj.event.gdChange_after, { index: tr_selected_after,isSetFocus:true });                               
                });
            },
            resetTrEvenClass: function (table) {
                var tr_data = table.find('tbody tr');
                var tr_even = table.find('tbody tr:even');
                tr_data.removeClass('gridview_tr_even');
                tr_even.addClass('gridview_tr_even');                
            },
            clearTrClassEvent: function (table) {
                table.find('tbody tr').removeClass('gridview_tr_selected,gridview_tr_hover,gridview_tr_even');                
            }
        },
        //================= end gridview 外掛共用function (只要是給table creat、addOneTr、updateOneTr)

        init: function (option) {
            var commFun = gridview_methods.commFun;
            return this.each(function () {
                var setting = $.extend({
                    fixedHeader: true,
                    isAddHeadBody: false,
                    isTableRowSelection: true,
                    isTablePageButton: true,
                    isTableCount: true,
                    isOnePage: false,
                    tablePrecessType: obj.tableProcess.newcreateTable,
                    matchKeyString: '',
                    tableJsonData: null,
                    thPropertyMapping: null,
                    objectMapping: null,
                    selectedChangeFun:null,
                    end: {}
                },option || {});  
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');               
                if ($(this).attr('id') == 'PanelGrid') {
                    table.find('tr').unwrap();
                }
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                var isTableCount = (setting != undefined && setting.isTableCount == true) ? true : false;                
                if (table.children().is('thead')) {    //table內已有thead與tbody(有thead就認定必定有tbody)
                    tr_data = table.find('tbody tr');
                    tr_even = table.find('tbody tr:even');
                }
                else {     //若table 無thead(同時也就認定必無tbody)
                    if (isAddHeadBody) {   //若傳入要添加thead&tbody參數，則加入<thead>與<tbody> 
                        tr_th.add(tr_gridviewHead).wrapAll('<thead>');
                        table.children('tr').wrapAll('<tbody>');
                        tr_data = table.find('tbody tr');
                        tr_even = table.find('tbody tr:odd');
                    }
                    else {
                        tr_data = table.find('tr').not(tr_head);
                        tr_even = table.find('tr').not(tr_head).filter(':even');
                    }                    
                }             

                //去除server端CustomersPage產生之table內之屬性，以便以css為主，並整理gridview remove的多餘div
                if (location.pathname.match(obj.reg.isCustomersPage) != null) {
                    table.removeAttr('cellspacing')
                    table.removeAttr('rules');
                    table.removeAttr('style');
                    table.removeAttr('border');
                    table.find('thead tr').removeAttr('style');
                    table.parent('div').prev('div').remove();
                    table.parent('div').addClass('gridview_border');
                    utl.setChildrenToCentral($('#PanelGrid'), $('#PanelGrid div.gridview_border'), 'both', { base_w: 0, base_h: 0 });
                    if (app.setThTdAdditionWidth && obj.cookie.autoDpi == true) {
                        app.setThTdAdditionWidth('customer_page', table)     //obj.com.customer_page若對gridview有標準欄寬以外的寬度設定(.wxx class)  
                    }                              
                }
                else {
                    if (app.setThTdAdditionWidth && obj.cookie.autoDpi == true) {
                        app.setThTdAdditionWidth('general_page', table,setting)
                    }                   
                }                
                var isEven;
                tr_even.addClass('gridview_tr_even');                
                //設定gridview(table)事件，此為tr被點選時的handler
                table.bind(obj.event.gdChange_after, function (e, triggerInput) {                   
                    var selectedChangeSetting = $.extend({
                        index: -1,
                        isSetFocus:false
                    }, triggerInput || {});                    
                    if (setting.selectedChangeFun != null) {
                        setting.selectedChangeFun(e, selectedChangeSetting.index);
                        if (selectedChangeSetting.isSetFocus) {  //須設定此 table tr被selected後是否要設定所屬form的first:enable欄位focus
                            $(setting.objectMapping.form).csoa_form('setFirstFocus');
                        }
                    }                                       
                });
                //設定gridview內對 tr mouse移入移出、click時、ctrl+click時、shift+click時、格行變色等標準功能             
                commFun.bindTrEvent(setting,table,tr_data,tr_even);  
                // end 設定gridview內對 tr mouse移入移出、click時、ctrl+click時、shift+click時、格行變色等標準功能
                //設定原始table的padding;
                if (!utl.Browser.isFirefox) {
                    table.find('th,td').addClass('otherBrowser_tdth_padding');                   
                }
                // 三個function建立表頭工具列 
                if (isTableRowSelection) {
                    gridview_methods.getTableRowSelection.apply(this, [table]);
                }
                if (isTablePageButton) {
                    gridview_methods.getTablePageButton.apply(this, [table]);
                }
                if (isTableCount) {
                    gridview_methods.getTableCount.apply(this, [table]);
                }
                //設定tableToolbar所有 event
                var tableToolbar = table.parent('.gridview_border').children('ul');
                if (tableToolbar.length > 0) {
                    gridview_methods.setToolbarEvent.apply(this, [table, tableToolbar,tr_data,tr_even]);
                }
                // 設定CustomersPage.aspx為不分頁(1頁)形式之gridview
                if (location.pathname.match(obj.reg.isCustomersPage) != null || setting.isOnePage) {
                    gridview_methods.setToOnePageStyle.apply(this, [table]);
                }
                //應先執行完產生原始gridview之toolbar建立、toolbarEvent設定後才執行建立浮動表頭
                //將表頭th(最後一個除外)之中間格線改為白色(上下不變) 
                table.find('thead th:not(:last)').css('border-right-color', 'white');
                //alert('after index=' + tr_selected_after.index());
                if (isFixedHeader) {
                    gridview_methods.initFixedHeader.apply(this, [table]);
                }
               
            });  // end return this.each
        },  //end init方法
        initFixedHeader: function (table) {
            var aaa = arguments;
            if (app.setGridviewHeader && obj.cookie.autoDpi == true) {
                app.setGridviewHeader($(table));
            }
        },
        recreateFixedHeader: function (option) {
            return this.each(function () {
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
                var floatHeadId = table.attr('floatHeadId');
                if (floatHeadId == undefined) {
                    return;
                }               
                if (app.setGridviewHeader && obj.cookie.autoDpi == true) {
                    var save_margin_left = $('#' + floatHeadId).children('table').css('margin-left');
                    $('#' + floatHeadId).remove();
                    app.setGridviewHeader($(table));
                    floatHeadId = table.attr('floatHeadId');
                    $('#' + floatHeadId).children('table').css('margin-left', save_margin_left);
                }
            });
        },
        fixedHeaderPosition: function (option) {         
            return this.each(function () {                
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
                var floatHeadId = table.attr('floatHeadId');
                if (floatHeadId == undefined) {
                    return;
                }
                var tableParent = table.parent('div.gridview_border');
                var scrollPos = table.parents('div.gridvew_border').parent().scrollLeft();                
                var offset = tableParent.offset();                     
                newContainerWidth= parseFloat(tableParent[0].clientWidth) - parseFloat(tableParent.css('padding-left'));
                $('#' + floatHeadId).css({ width: newContainerWidth, left: offset.left, top: offset.top });
               
            });
        },
        getTableRowSelection: function (table) {
            if (!table.siblings().is('ul.gridview_header_operation')) {
                var container = '<ul class="gridview_header_operation"></ul>';
                table.parent('.gridview_border').prepend(container);
            }
            var selectionButton = '<li class="selectionButton">' +
                                        '<div><a class="selectAll">全</a>' + '<a class="reverseSelectAll">反</a>' + '<a class="cancelSelect">取消</a></div>' + '</li>';
            table.siblings('ul.gridview_header_operation').append(selectionButton);
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../

        },
        getTablePageButton: function (table) {
            if (!table.siblings().is('ul.gridview_header_operation')) {
                var container = '<ul class="gridview_header_operation"></ul>';
                table.parent('.gridview_border').prepend(container);
            }
            var pageButton = '<li  class="pageButton">'
                                      + '<div><span class="first"></span><span class="prev"></span>'
                                      + '<h4 class="selectedPage">頁數：</h4>'
                                      + '<select><option>124</option><option>256</option><option>328</option><option>1234</option><option>5</option></select>'
                                      + '<span class="next"></span><span class="last"></span></div>'
                                      + '</li>';
            table.siblings('ul.gridview_header_operation').append(pageButton);
            //if (!$('.gridview_border').children().is('ul.gridview_header_operation')) {
            //    var container = '<ul class="gridview_header_operation"></ul>';
            //    $('.gridview_border').prepend(container);
            //}
            //var pageButton = '<li  class="pageButton">'
            //                          + '<div><span class="first"></span><span class="prev"></span>'
            //                          + '<h4 class="selectedPage">頁數：</h4>'
            //                          + '<select><option>124</option><option>256</option><option>328</option><option>1234</option><option>5</option></select>'
            //                          + '<span class="next"></span><span class="last"></span></div>'
            //                          + '</li>';
            //$('.gridview_border ul.gridview_header_operation').append(pageButton);
        },
        getTableCount: function (table) {
            if (!table.siblings().is('ul.gridview_header_operation')) {
                var container = '<ul class="gridview_header_operation"></ul>';
                table.parent('.gridview_border').prepend(container);
            }
            var tableCouneDesc = '<li class="tableCount">'
                                            + '<div><pre><label class="currentPage">1,234</label>/<label class="totalPage">1,234</label>頁  <label class="totalCount">555,238</label>筆</pre></div>'
                                            + '</li>'
            table.siblings('ul.gridview_header_operation').append(tableCouneDesc);
            //if (!$('.gridview_border').children().is('ul.gridview_header_operation')) {
            //    var container = '<ul class="gridview_header_operation"></ul>';
            //    $('.gridview_border').prepend(container);
            //}
            //var tableCouneDesc = '<li class="tableCount">'
            //                                + '<div><pre><label class="currentPage">1,234</label>/<label class="totalPage">1,234</label>頁  <label class="totalCount">555,238</label>筆</pre></div>'
            //                                + '</li>'
            //$('.gridview_border ul.gridview_header_operation').append(tableCouneDesc);
        },
        //設定全選、取消、反全選按鈕
        setToolbarEvent: function (table, tableToolbar,trData,trEven) {
            var selectionButton = tableToolbar.find('.selectionButton');
            var pageButton = tableToolbar.find('.pageButton');
            selectionButton.find('a.selectAll').bind('click', function (e) {
                var tr_selected_before = trData.filter('.gridview_tr_selected:first').index();
                trData.removeClass('gridview_tr_hover');               
                trData.not('.gridview_tr_selected').addClass('gridview_tr_selected');
                var tr_selected_after = trData.filter('.gridview_tr_selected:first').index();
                table.trigger(obj.event.gdChange_after, { index: tr_selected_after });
                //utl.selectedChangeProcess(tr_selected_before, tr_selected_after, table);
            });
            selectionButton.find('a.reverseSelectAll').bind('click', function (e) {
                var tr_selected_before = trData.filter('.gridview_tr_selected:first').index();
                table.find('tbody tr').removeClass('gridview_tr_hover');
                trEven.addClass('gridview_tr_even');
                table.find('tbody tr').toggleClass('gridview_tr_selected');
                var tr_selected_after = trData.filter('.gridview_tr_selected:first').index();
                table.trigger(obj.event.gdChange_after, { index: tr_selected_after });
                //utl.selectedChangeProcess(tr_selected_before, tr_selected_after, table);
            });
            selectionButton.find('a.cancelSelect').bind('click', function (e) {
                var tr_selected_before = trData.filter('.gridview_tr_selected:first').index();
                table.find('tbody tr').removeClass('gridview_tr_hover');                
                table.find('tbody tr').filter('.gridview_tr_selected').removeClass('gridview_tr_selected');
                trEven.addClass('gridview_tr_even');
                var tr_selected_after = trData.filter('.gridview_tr_selected:first').index();
                table.trigger(obj.event.gdChange_after, { index: tr_selected_after });
                //utl.selectedChangeProcess(tr_selected_before, tr_selected_after, table);
            });
            pageButton.find('span.first').bind('click', function (e) {
                alert('first');
            });
            pageButton.find('span.last').bind('click', function (e) {
                alert('last');
            });
            pageButton.find('span.prev').bind('click', function (e) {
                alert('prev');
            });
            pageButton.find('span.next').bind('click', function (e) {
                alert('next');
            });
        },
        setToOnePageStyle: function (table) {
            var toolbar = table.parent('.gridview_border').children('ul');
            if (toolbar.length == 0) {
                return;
            }
            var pageButton = toolbar.find('li.pageButton');
            if (pageButton.length > 0) {
                toolbar.find('.pageButton select').empty().append('<option>1</option>');
            }
            var tableCount = toolbar.find('li.tableCount');
            if (tableCount.length > 0) {
                toolbar.find('li.tableCount label.currentPage').text('1');
                toolbar.find('li.tableCount label.totalPage').text('1');
                toolbar.find('li.tableCount label.totalCount').text(table.find('tbody tr').length.toString());
            }
        },
        count: function (option) {
            return $(this).find('tbody tr').length;            
        },
        getFirstSelectedIndex:function(option){
            var index = ($(this).find('tbody tr.gridview_tr_selected:first').length > 0) ? $(this).find('tbody tr.gridview_tr_selected:first').index() : -1;
            return index;
        },
        getTrValueByProperty:function(option,trIndex){
            var thIndex = $(this).find('thead th span:contains("'+option+'")').parent('th').index()
            var value = $(this).find('tbody tr:eq(' + trIndex + ') td:eq(' + thIndex + ')').text();
            return value;
        },
        getSelectedTrs: function (option) {
            
        },
        create: function (option) {
            var commFun = gridview_methods.commFun;
            var setting = $.extend({
                fixedHeader: true,
                isAddHeadBody: false,
                isTableRowSelection: true,
                isTablePageButton: true,
                isTableCount: true,
                isOnePage:false,
                tableProcessType: obj.tableProcess.newcreateTable,
                matchKeyString: '',
                updatePropertiesString: '',
                tableJsonData: null,
                thPropertyMapping: null,
                objectMapping: null,
                selectedChangeFun: null,
                end: {}
            }, option || {});          
            return this.each(function () {
                switch (setting.tableProcessType) {
                    case obj.tableProcess.newcreateTable:
                        var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
                        var tableId = table.attr('id');
                        var floatHeadId = tableId + '-floatHead';                      
                        table.empty();
                        table.prev('ul.gridview_header_operation').remove();                        
                        $('div[id^=' + floatHeadId + ']').remove();
                        table.unbind(obj.event.gdChange_after);                       
                        table.append(commFun.createThead(setting.tableJsonData, setting.thPropertyMapping));
                        table.append(commFun.createTbody(setting.tableJsonData));                        
                        break;
                    case obj.tableProcess.updateOneTr:
                        break;
                    case obj.tableProcess.newcreateThead:
                        break;
                    case obj.tableProcess.newcreateTbody:
                        break;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                        break;
                    case obj.tableProcess.deleteOneTr:
                        break;
                    //2014/11/21

                    //gridview_methods.init.apply(this, arguments);
                }                
            });  
        },

        addOneTr: function (option) {
            var commFun = gridview_methods.commFun;
            var setting = $.extend({
                fixedHeader: true,
                isAddHeadBody: false,
                isTableRowSelection: true,
                isTablePageButton: true,
                isTableCount: true,
                isOnePage: false,
                tableProcessType: obj.tableProcess.newcreateTable,
                matchKeyString: '',
                updatePropertiesString: '',
                tableJsonData: null,
                thPropertyMapping: null,
                objectMapping: null,
                selectedChangeFun: null,
                end: {}
            }, option || {});
            return this.each(function () {                
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
                var tempTr = '';               
                if (table.find('tbody tr').length > 0) {
                    tempTr = table.find('tbody tr:first').clone(); //此處tempTr是jQuery物件
                    tempTr.appendTo(table.find('tbody'));                  
                }
                else {
                    var thCount = table.find('thead tr th').length;
                    tempTr = commFun.newEmptyTrtd(thCount); //此處tempTr是dom物件
                    //table.append('<tbody>' + tempTr + '</tbody>');
                    //table.children('tbody').append(tempTr);
                    $(tempTr).appendTo(table.find('tbody'));
                    tempTr = table.find('tbody tr:first');
                }               
                //tempTr = utl.gridview_updateTrByJsonObject($(tempTr), setting.tableJsonData);
                utl.gridview_updateTrByJsonObject($(tempTr), setting.tableJsonData);

                var cnt = gridview_methods.count.apply(this, [table]);                
                var toolbar = table.parent('.gridview_border').children('ul');
                toolbar.find('li.tableCount label.totalCount').text(cnt);
                $('div[id^=' + table.attr('id') + '-floatHead]').find('ul li.tableCount label.totalCount').text(cnt);
                commFun.resetTrEvenClass(table);
                commFun.bindTrEvent(setting, $(tempTr).parents('table'), $(tempTr), $(tempTr));
            });
        },

        updateOneTr: function (option) {
            var commFun = gridview_methods.commFun;
            var setting = $.extend({
                fixedHeader: true,
                isAddHeadBody: false,
                isTableRowSelection: true,
                isTablePageButton: true,
                isTableCount: true,
                isOnePage: false,
                tableProcessType: obj.tableProcess.newcreateTable,
                matchKeyString: '',
                updatePropertiesString: '',
                tableJsonData: null,
                thPropertyMapping: null,
                objectMapping: null,
                selectedChangeFun: null,
                end: {}
            }, option || {});
            return this.each(function () {                
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
                //取得根據matchKeyString所定義屬性(可多個)，以json物件搜尋該物件系table內的哪一tr
                var tr= utl.gridview_getMatchedTr(table, setting.tableJsonData, setting.matchKeyString);
                utl.gridview_updateTrByJsonObject(tr, setting.tableJsonData);                
                //gridview_methods.init.apply(this, arguments);               
            });
        },
        updateTrsByProperty: function (option) {
            var commFun = gridview_methods.commFun;
            var setting = $.extend({
                fixedHeader: true,
                isAddHeadBody: false,
                isTableRowSelection: true,
                isTablePageButton: true,
                isTableCount: true,
                isOnePage: false,
                tableProcessType: obj.tableProcess.newcreateTable,
                matchKeyString: '',
                updatePropertiesString:'',
                tableJsonData: null,
                thPropertyMapping: null,
                objectMapping: null,
                selectedChangeFun: null,
                end: {}
            }, option || {});
            return this.each(function () {
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                }
                for (var i = 0; i < jtrArray.length; i++) {
                    utl.gridview_updateTrByJsonObject(jtrArray[i], tempJson);
                }        
            });
        },

        deleteOneTr: function (option) {
            var commFun = gridview_methods.commFun;
            var setting = $.extend({
                fixedHeader: true,
                isAddHeadBody: false,
                isTableRowSelection: true,
                isTablePageButton: true,
                isTableCount: true,
                isOnePage: false,
                tableProcessType: obj.tableProcess.newcreateTable,
                matchKeyString: '',
                updatePropertiesString: '',
                tableJsonData: null,
                thPropertyMapping: null,
                objectMapping: null,
                selectedChangeFun: null,
                end: {}
            }, option || {});
            return this.each(function () {
                var table = ($(this).prop('nodeName').toLowerCase() == 'table') ? $(this) : $(this).find('table:first');
                //取得根據matchKeyString所定義屬性(可多個)，以json物件搜尋該物件系table內的哪一tr
                var tr = utl.gridview_getMatchedTr(table, setting.tableJsonData, setting.matchKeyString);
                tr = tr.remove();

                var cnt = gridview_methods.count.apply(this, [table]);
                var toolbar = table.parent('.gridview_border').children('ul');
                toolbar.find('li.tableCount label.totalCount').text(cnt);
                $('div[id^=' + table.attr('id') + '-floatHead]').find('ul li.tableCount label.totalCount').text(cnt);
                commFun.resetTrEvenClass(table);                                   
            });
        },
        show: function () {  
        }
    };
    $.fn.csoa_gridview = function (method) {
        if (gridview_methods[method]) {
            return gridview_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));           
        }
        else if (typeof method == 'object' || gridview_methods[method] == undefined) {
            return gridview_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------------------

    // P06 GridForm  -----------------------------------------------------------------------------------------------------------------------------
    var gridform_methods = {

        init: function (option) {
            var setting = $.extend({
             
                end: {}
            }, option || {});
            return this.each(function () {
                var tag = utl.createOneElement(setting.childTag, setting.data, setting.innerProperties, setting.innerSaparate, setting.attrs);
                $(this).append(tag);
            });
        },
        //根據JSON 資料 new create html元素，並置入資料 
        newCreate:function(option){
            return this.each(function () {          
                var setting = $.extend({
                    type: 'gridform',
                    resultJson: null,
                    updateCol_para: null,
                    header_para: null,
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../dform_formset form ul').empty();
                var info = [];
                var result = JSON.parse(setting.resultJson.ResponseJson);
                var fragment = document.createDocumentFragment();
                var detail_ul = $(this).find('div.csoa_gridform_formset form ul');
                for (var i = 0; i < result.length; i++) {
                    var data = result[i];
                    var l2 = '';
                    //若為第一階元素Json內有tagLevel且tagLevel == "0"
                    if (data.tagLevel && data.tagLevel == '0') {
                        $(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {                            
                            l2 +=utl.getGridformTagByTagName ($(this),setting,data);
                        });                       
                        var l1 = utl.getOneTag(setting.level1Tag, { class: setting.noUpdateClass.substr(1, setting.noUpdateClass.length - 1) }, l2);
                        detail_ul.append(l1);                     
                    }
                    //若為第二階level2元素
                    else {
                        $(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {                          
                            l2 +=utl.getGridformTagByTagName($(this), setting,data);
                        });
                        var l1 = utl.getOneTag(setting.level1Tag, '', l2);
                        detail_ul.append(l1);
                    }
                }
                //detail_ul.append(fragment);
                //找出 header 裡的h5中有無設定w99之class，若有，將些欄位的detail也加入相同class，以便以表投來設定個別欄位的額外寬度    
                $(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {              
                    var this_class = $(this).prop('class');
                    var className = obj.reg.getWidth_w(this_class); 
                    var textAlign = ($(this).find('i').text().split('/').length == 4) ? $(this).find('i').text().split('/')[3] : null;
                    if (className != null) {
                        $('div.csoa_gridform_formset form ul').children('li').each(function () {
                            $(this).find(setting.level2Tag+':eq(' + index + ')').addClass(className);
                        });                       
                    }
                    if (textAlign != null) {
                        $('div.csoa_gridform_formset form ul').children('li').each(function () {
                            $(this).find(setting.level2Tag + ':eq(' + index + ')').addClass(textAlign);
                        });
                    }
                    $('#gridform1').selectable({ filter: 'li' });
                });
            });   
        },
        //根據JSON 資料 new create html元素，並置入資料 
        addOneRow: function (option) {
            return this.each(function () {
                var elem = $(this);
                var setting = $.extend({
                    type: 'gridform',
                    resultJson: null,
                    updateCol_para: null,
                    header_para: null,
                    headerCol_parent: '.csoa_gridform_title',
                    level1Tag: 'li',
                    level2Tag: 'h5',
                    noUpdateClass: '.csoa_gridform_level1',
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                var detail_ul = $(this).find('div.csoa_gridform_formset form ul');
                var data = JSON.parse(setting.resultJson.ResponseJson);
                var l2 = '';
                //若為第一階元素Json內有tagLevel且tagLevel == "0"
                if (data.tagLevel && data.tagLevel == '0') {
                    //$(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {   
                    elem.find(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {
                        l2 += utl.getGridformTagByTagName($(this), setting, data);                          
                    });
                    var l1 = utl.getOneTag(setting.level1Tag, { class: setting.noUpdateClass.substr(1, setting.noUpdateClass.length - 1) }, l2);
                    elem.find('div.csoa_gridform_formset form ul').append(l1);
                    //$(this).find('div.csoa_gridform_formset form ul').append(l1);
                    //fragment.appendChild($(l1)[0]);
                }
                    //若為第二階level2元素
                else {
                    //$(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {   
                    elem.find(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {
                        l2 += utl.getGridformTagByTagName($(this), setting, data);                          
                    });
                    var l1 = utl.getOneTag(setting.level1Tag, '', l2);
                    elem.find('div.csoa_gridform_formset form ul').append(l1);
                    //$(this).find('div.csoa_gridform_formset form ul').append(l1);
                }               
                //detail_ul.append(fragment);
                //找出 header 裡的h5中有無設定w99之class，若有，將些欄位的detail也加入相同class，以便以表投來設定個別欄位的額外寬度    
                //$(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {
                elem.find(setting.headerCol_parent + ' ' + setting.level2Tag).each(function (index) {
                    var this_class = $(this).prop('class');
                    var className = obj.reg.getWidth_w(this_class);
                    var textAlign = ($(this).find('i').text().split('/').length == 4) ? $(this).find('i').text().split('/')[3] : null;
                    if (className != null) {
                        //$('div.csoa_gridform_formset form ul').children('li').each(function () {
                        elem.find('div.csoa_gridform_formset form ul').children('li').each(function () {
                            $(this).find(setting.level2Tag + ':eq(' + index + ')').addClass(className);
                        });
                    }
                    if (textAlign != null) {
                        //$('div.csoa_gridform_formset form ul').children('li').each(function () {
                        elem.find('div.csoa_gridform_formset form ul').children('li').each(function () {
                            $(this).find(setting.level2Tag + ':eq(' + index + ')').addClass(textAlign);
                        });
                    }
                    //$('#gridform1').selectable({ filter: 'li' });
                });
            });
        },

        //根據JSON 資料，僅將所有row資料，依據updateCol_para所定欄位置入row內。(不create html元素) 
        loadAll: function (option) {
            var setting = $.extend({
                type: 'gridform',
                resultJson: null,
                updateCol_para: null,
                header_para: null,
                headerCol_parent: '.csoa_gridform_title',
                level1Tag: 'li',
                level2Tag: 'h5',
                noUpdateClass: '.csoa_gridform_level1',
                isSelectedOnly: false,
                selectedClass: '',
                end: {}
            }, option || {});
            return this.each(function () {
                gridform_methods.realLoadData.apply(this, [setting]);               
            });
        },
        //根據JSON 資料，僅將被selected資料，依據updateCol_para所定欄位置入被selected row內。(不create html元素) 
        loadSelected: function (option) {         
            var setting = $.extend({
                type:'gridform',
                resultJson: null,
                updateCol_para: null,
                header_para: null,
                headerCol_parent:'.csoa_gridform_title',
                level1Tag: 'li',
                level2Tag: 'h5',
                noUpdateClass: '.csoa_gridform_level1',
                isSelectedOnly: true,
                selectedClass: '.ui-selected',
                end: {}
            }, option || {});
            return this.each(function () {
                gridform_methods.realLoadData.apply(this, [setting]);            
            });
        },
        //將所有row資料依updateCol_para內定義欄位，轉出JSON  
        getAllRowsToJson: function (option) {
            var setting = $.extend({
                type: 'gridform',
                resultJson: null,
                updateCol_para: null,
                header_para: null,
                headerCol_parent: '.csoa_gridform_title',
                level1Tag: 'li',
                level2Tag: 'h5',
                noUpdateClass: '.csoa_gridform_level1',
                isSelectedOnly: false,
                selectedClass: '',
                additionFilter:null,
                end: {}
            }, option || {});
            return gridform_methods.realGetData.apply(this, [setting]);
        },
        //將所selected資料依updateCol_para內定義欄位，轉出JSON  
        getSelectedToJson: function (option) {
            var setting = $.extend({
                type: 'gridform',
                resultJson: null,
                updateCol_para: null,
                header_para: null,
                headerCol_parent: '.csoa_gridform_title',
                level1Tag: 'li',
                level2Tag: 'h5',
                noUpdateClass: '.csoa_gridform_level1',
                isSelectedOnly: true,
                selectedClass: '.ui-selected',
                additionFilter:null,
                end: {}
            }, option || {});
            return gridform_methods.realGetData.apply(this, [setting]);
        },

        //傳入外掛來的的setting參數，實際執行取得Query多筆的rows並轉成陣列(陣列內為json物件)
        realGetData: function (setting) {
            var dataArray = [];
            var headerInfo_index = utl.getHeaderProperty_jQBase($(setting.headerCol_parent), setting.header_para);
            //var rows = gridform_methods.getRows.apply(this, [setting]);
            var rows = utl.getRows($(this),setting);          
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            var jsonResult = dataArray;
            return jsonResult;
        },

        //傳入外掛來的的setting參數，實際執行將多筆json資料置入jQuery多筆的rows中
        realLoadData: function (setting) {
            //var rows = gridform_methods.getRows.apply(this, [setting]); 
            var rows = utl.getRows($(this),setting);
            //alert(rows.length);
            var result = JSON.parse(setting.resultJson.ResponseJson);
            var headerInfo_index = utl.getHeaderProperty_jQBase($(setting.headerCol_parent), setting.header_para_index);
            rows.each(function (index) {               
                var match_jsonRow = utl.getOneJson_rowGetJsons(result, headerInfo_index, $(this), setting.level2Tag);  //一筆 jQuery row去json array中比對一筆json
                utl.putOneRowData_jQBase($(this), match_jsonRow, headerInfo_index, setting.updateCol_para, setting.level2Tag);  //以jQuery物件逐一 col index取比對json屬性
                //utl.putOneRowData_jsonBase($(this), match_jsonRow, headerInfo_name, setting.updateCol_para,setting.level2Tag); //以json屬性逐一比對出哪一個index
            });           
        },
        //根據傳入setting參數，取得須處理的多筆jQuery rows(給gridview或gridform使用)
        getRows:function(setting){
            var allRows_parent;
            if (setting.type == 'gridform') {
                allRows_parent = $(this).find('ul.csoa_gridform_ul'); //gridform 內的ul (處理對象為所有li)
                setting.selectedClass = '.ui-selected';
            }
            else if (setting.type == 'gridview') {
                allRows_parent = $(this).find('tbody'); // gridview 內的 tbody(處理對象為所有tr)
                setting.selectedClass = '.gridview_tr_selected';
            }
            var rows = (setting.isSelectedOnly) ? allRows_parent.children(setting.level1Tag).filter(setting.selectedClass) : allRows_parent.children(setting.level1Tag);
            rows = rows.not(setting.noUpdateClass)
            return rows;
        },
        end: function () { }
    };
    $.fn.csoa_gridform = function (method) {
        if (gridform_methods[method]) {
            return gridform_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || gridform_methods[method] == undefined) {
            return gridform_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    }

    //------------------------------------------------------------------------------------------------------------------------------------------


    // P07 Addable
    //------------------------------------------------------------------------------------------------------------------------------------------------
    var addable_methods = {
        init: function (option) {
            return this.each(function () {
            });
        },
        setSelect: function (option) {
            return this.each(function () {
               
            });
        },
        addOneChild:function(option){
            var setting = $.extend({
                childTag: 'select',
                grandChild: null,
                innerSaparate: '-',
                innerProperties: '',
                attrs: [],
                orderAttr: 'original/asc/string',       //從obj.com有定義了預設值for li 以 'value' attr為 sort key               
                data: null,
                end: {}
            }, option || {});
            return this.each(function () {
                    var tag = utl.createOneElement(setting.childTag, setting.data, setting.innerProperties, setting.innerSaparate, setting.attrs);                   
                    $(this).append(tag);                
            });
        },
        updateOneChild:function(option){
            var setting = $.extend({
                childTag: 'select',
                grandChild: null,
                innerSaparate: '-',
                innerProperties: '',
                attrs: [],
                matchKeyArray:[],
                orderAttr: 'original/asc/string',
                data: null,                
                end: {}
            }, option || {});          
            return this.each(function () {
                var elem = utl.getMatchElement($(this), setting.childTag, setting.matchKeyArray, setting.data);
                var innerText = utl.assemblyInnerText(setting.innerProperties, setting.innerSaparate, setting.data);
                elem.text(innerText);             
            });
        },
        deleteOneChild: function (option) {
            var setting = $.extend({
                childTag: 'select',
                grandChild: null,
                innerSaparate: '-',
                innerProperties: '',
                attrs: [],
                matchKeyArray: [],
                orderAttr: 'original/asc/string',
                data: null,
                end: {}
            }, option || {});
            return this.each(function () {
                var elem = utl.getMatchElement($(this), setting.childTag, setting.matchKeyArray, setting.data);                
                elem.remove();
            });
        },
        newAddChild: function (option) {
            var setting = $.extend({
                childTag: 'select',
                grandChild: null,
                innerSaparate: '-',
                innerProperties: '',
                attrs: [],
                orderAttr: 'original/asc/string',       //從obj.com有定義了預設值for li 以 'value' attr為 sort key 
                isAddOptionTag:false,
                data: null,                
                end: {}
            }, option || {});          
            return this.each(function () {
                $(this).empty();
                var childArray = [];
                sortPara = setting.orderAttr.split('/');
                for (var i = 0; i < setting.data.length; i++) {
                    var tag = utl.createOneElement(setting.childTag, setting.data[i], setting.innerProperties,
                        setting.innerSaparate, setting.attrs, setting.grandChild);
                    //var sortTag = utl.getElementForSort(tag, setting.orderAttr);   
                    var sortTag = utl.getElementForSort(tag, sortPara[0]);
                    childArray.push(sortTag);
                }             
                //childArray.sort(utl.sort('key')); //childArray是物件，有兩個屬性key及value，以key屬性來sort                

                //childArray.sort(utl.sort('key','num'))
                childArray.sort(utl.sort('key', sortPara[2],sortPara[1]))
                for (var k1 = 0; k1 < childArray.length; k1++) {
                    $(this).append(childArray[k1].value);
                }
                if (setting.isAddOptionTag && $(this).children().length > 0) {
                    var opt = utl.getOneTag(setting.childTag, { value: 'null' }, '請選擇');
                    $(this).prepend(opt);
                }
            });
        },
        setEvent:function(option){
            var setting = $.extend({
                childTag: 'select',
                grandChild: null,
                innerSaparate: '-',
                innerProperties: '',
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                end: {}
            }, option || {});          
            return this.each(function () {
                $(this).bind(obj.event.cascading_update, function (e, triggerInput) {
                    var cascading_update_setting = $.extend({
                        originalResultJson: {}
                    }, triggerInput || {});
                    if (setting.updateFun != null) {
                        setting.updateFun(cascading_update_setting.originalResultJson);
                    }
                });
                
                var nodeName = $(this).prop('nodeName').toLowerCase();
                var inputType =($(this).prop('nodeName').toLowerCase() == 'input')? $(this).attr('type') : ''; 
                if (nodeName == 'select'  || inputType == 'radio' ) {
                    //alert($(this).attr('name')+'   '+$(this).attr('value'));
                    $(this).bind('change', function (e, triggerInput) {
                        //alert($(e.target).attr('id') + '      ' + e.hasOwnProperty('originalEvent'));
                        var a = 1;
                        var cascading_update_setting = $.extend({
                            originalResultJson: {}
                        }, triggerInput || {});
                        if (setting.updateFun != null) {
                            setting.updateFun(cascading_update_setting.originalResultJson);
                        }
                    });
                }
            });
        },
        end: function () { }       
    };
    $.fn.csoa_addable = function (method) {
        if (addable_methods[method]) {
            return addable_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || addable_methods[method] == undefined) {
            return addable_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    // P08 toolBar (for server PanelToolBar)
    var toolbar_methods = {
        init: function (option) {  
            return this.each(function () {
                var elem = $(this).find('div>div');              
                if (app.setAuth && obj.cookie.autoDpi) {
                    app.setAuth('PanelToolBar', elem);
                }
                obj.com.defaultToolbarBackground = ($('#PanelToolBar div div').length > 0) ? $('#PanelToolBar div div').css('background-image') : null;
                var disabledImage = ($('#PanelToolBar div div').length > 0) ? $('#PanelToolBar div div').find('span').css('background-image').match(obj.reg.urlImage) : null;
                if (disabledImage != undefined && disabledImage != null) {
                    obj.com.disabledBtnMapUr = disabledImage[1] + disabledImage[2] + obj.com.toolbarDisableImage + disabledImage[3];
                }
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
               elem.bind('mouseover', function (e) {
                   $('#ttt').text('target=' + $(e.target).prop('nodeName') + '     relate target=' + $(e.relatedTarget).prop('nodeName') + $(e.relatedTarget).attr('id') + '     -enter enter');

               });
                elem.bind('mouseenter', function (e) {
                    if ($(this).children().is('input:enabled')) {  
                        $(this).find(':input').css({color: 'red',cursor:'pointer'})
                        $(this).css('cursor', 'pointer');
                    }
                    else {
                        $(this).find(':input').css('color', '#bbb');
                        $(this).css('cursor', 'auto');
                    }                    
                }).bind('mouseleave', function (e) {                   
                    $(this).find(':input').not(':disabled').css('color', obj.com.toolbarDisabledColor);                    
                }).bind('click', function (e) {                   
                    var btn;
                    var btnName;
                    var triggerClick;
                    var clickNode = $(e.target).prop('nodeName').toLowerCase();
                    switch (clickNode) {
                        case 'div':
                            btn = $(e.target).find(':input[type="submit"]');
                            triggerClick = true;
                            break;
                        case 'input':
                            btn = $(e.target);
                            triggerClick =false;
                            break;
                        case 'span':
                            btn = $(e.target).next();
                            triggerClick = true;
                            break;  
                    }
                    btnName = btn.attr('id');
                    if (btnName != obj.com.btnClear && btn.attr('disabled') == undefined) {  
                            return toolbar_methods.click.apply(this, [option,btnName,triggerClick,e]);                      
                    }                   
                });                    
            });
            
        }, //end toolBar.init method
        click: function (funPara, btnName, triggerClick, e) {
            if (funPara != undefined) {               
                if (btnName == obj.com.btnConfirm && funPara[btnName] != undefined && e.hasOwnProperty('originalEvent')) {
                    e.preventDefault();
                    if (e.clientX != 0 && e.clientY != 0 && !obj.com.alertShow && !obj.com.confirmShow) {                        
                        funPara[btnName](btnName);                       
                    }
                }
                else if (funPara[btnName] != undefined) {
                    funPara[btnName]();                    
                }
            }
            if (triggerClick) {               
                $('#' + btnName).trigger('click');
            } 
        },   // end csoa_toolbar's click method
        end:function(){}  
    };// end of toolBar methods
    $.fn.csoa_toolbar = function (method) {
        if (toolbar_methods[method]) {
            return toolbar_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || toolbar_methods[method] == undefined) {
            return toolbar_methods.init.apply(this,arguments);
        }
        else {
            return;
        }
    };  // end of toolBar
    //-----------------------------------------------------------------------------------------------------------------------------------

    // P09 sideBar 
    //-----------------------------------------------------------------------------------------------------------------------------------
    var sidebar_methods = {
        init: function (option) {  
            return this.each(function () {
                var sidebar = this;               
                $(this).find('ul#csoa_menu>li li a').bind('click', function (e) {
                    e.preventDefault();
                    if ($(this).href != '#' && $(this).attr('noright') != 'true') {
                        var url = '/' + $(this).attr('href');
                        $('form#csoa_form_hidden').attr('action', url);
                        $('form#csoa_form_hidden').attr('method', 'post');
                        $('form#csoa_form_hidden').trigger('submit');
                    }
                });
                var menuOpen=false;
                var sidebarHeader = $(this).children('h3');
                var allLiTag = $(this).find('ul#csoa_menu>li,ul#csoa_menu>li li');
                var catalogLi = $(this).find('ul#csoa_menu').children().filter('li');
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                utl.openCurrentCatalog(true); 
                disabledCatalogSpan.attr('noright', 'true');
                enabledFunctionLi.bind('mouseenter', function (e) {
                    $(this).css('background-color', obj.com.enabledLiBackgroundHover);
                    $(this).find('a').css('color',obj.com.menuTextColorHover);           
                }).bind('mouseleave', function (e) {                   
                    $(this).css('background-color', obj.com.functionLiBackground);
                    $(this).find('a').css('color', obj.com.menuTextColor);                    
                });               
                pointerATag.bind('mouseenter', function (e) {
                    $(this).css('cursor', 'pointer');
                }).bind('mouseleave', function (e) {
                    $(this).css('cursor', 'auto');
                });
                catalogATag.bind('click', function (e) {
                    if (obj.com.catalogOpenMode == 'single') {
                        catalogLi.find('ul').hide();
                    }
                    if ($(this).parent().filter('li').find('ul').is(':hidden')) {
                        $(this).parent().filter('li').find('ul').show();
                    }
                    else {
                        $(this).parent().filter('li').find('ul').hide();
                    }
                    updateOpenCatalogValue();
                    utl.copyHiddenToForm(obj.com.serverForm, true);
                });
                sidebarHeader.bind('click', function (e) {                 
                    if(menuOpen){
                        $(sidebar).find('ul#csoa_menu li ul').hide();
                        menuOpen = false;                        
                    }
                    else{
                        $(sidebar).find('ul#csoa_menu li ul').show();
                        menuOpen = true;                     
                    }
                    updateOpenCatalogValue();
                    utl.copyHiddenToForm(obj.com.serverForm, true);
                });
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
            });
        }, //end sideBar.init method
        end: function () { }
    };// end of sideBar methods
    $.fn.csoa_sidebar = function (method) {
        if (sidebar_methods[method]) {
            return sidebar_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || sidebar_methods[method] == undefined) {
            return sidebar_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };  // end of sideBar
    //------------------------------------------------------------------------------------------------------------------------------

    // P10 alert & confirm
    //----------------------------------------------------------------------------------------------------------------------------------
    var alert_methods = {
        init: function (option) {
            var alertObj = this; 
            return this.each(function () {                
                alertObj.draggable();                
                var confirm = $(this).find('.csoa_alert_confirm');
                confirm.bind('mouseenter', function (e) {
                    alertObj.draggable('disable');
                }).bind('mouseleave', function (e) {
                    alertObj.draggable('enable');
                });

            });
            
        },
        xxxxxxx1: function (option) {
            return this.each(function () {
                
            });
        },
        xxxxxxx2: function (option) {
            return this.each(function () {
               
            });
        },
        end: function () { }
    };

    $.fn.csoa_alert = function (method) {
        if (alert_methods[method]) {
            return alert_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || alert_methods[method] == undefined) {
            return alert_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------

    // P11 Tabs
    //------------------------------------------------------------------------------------------------------------------------------------------------
    var tabs_methods = {
        init: function (option) {
            var setting = $.extend({
                //initTabId:'tab1',
                tabInitFun: null,
                tabClickFun:null,
                end: {}
            }, option || {});           
            return this.each(function () {
                var thisElement = $(this);       //jQuery外掛的this是代表jQuery物件，應先以區域變數保留，以便click時可以使用
                //alert($(this).attr('id'));
                $(this).find('.csoa_tabs_body div.csoa_tabs_body_container').hide();
                utl.setSizeFlexableByIndex('h', '#' + thisElement.attr('id'), 2);  //20150326 設定tab_body之高度為扣除tabs_header後之剩餘高度
                //var tabContainer = thisElement.find('.csoa_tabs_body_container').each(function () {
                //    var tabHCount = $(this).children('.csoa_tabHContainer').length;
                //    if (tabHCount > 1) {
                //        utl.setSizeFlexableByIndex('h', '#' +$(this).attr('id'), tabHCount);
                //    }
                //});
              
                //alert($('#tab2').css('height'));
                //2014#0326
                //thisElement.find('.csoa_tabs_body_container').each(function () {
                //    utl.setSingleElementToCentral('h', $(this).parent(), $(this));
                //});
                //alert($('#tab2').css('height'));
                if (setting.tabInitFun != null) {
                    for (var o in setting.tabInitFun) {
                        setting.tabInitFun[o]();
                        //alert('o='+o);
                    }
                }
                $(this).find('.csoa_tabs_header a').bind('click', function (e) {
                    //$('.csoa_tabs_body div.csoa_tabs_body_container').hide();
                    //var currentTab=$('.csoa_tabs_body div.csoa_tabs_body_container').filter('div[id=' + $(this).attr('id').match(/\w+(?=\_)/gi)[0] + ']');
                    //currentTab.show();
                    //$('.csoa_tabs_header a').removeClass('csoa_tabs_selected');
                    //$(this).addClass('csoa_tabs_selected');
                    //if (setting.tabClickFun != null && setting.tabClickFun[currentTab.attr('id')]) {
                    //    setting.tabClickFun[currentTab.attr('id')]();
                    //}

                    thisElement.find('.csoa_tabs_body div.csoa_tabs_body_container').hide();
                    var currentTab=thisElement.find('.csoa_tabs_body div.csoa_tabs_body_container').filter('div[id=' + $(this).attr('id').match(/\w+(?=\_)/gi)[0] + ']');
                    currentTab.show();
                    utl.setTabContainer(currentTab);
                    

                    thisElement.find('.csoa_tabs_header a').removeClass('csoa_tabs_selected');
                    $(this).addClass('csoa_tabs_selected');
                    if (setting.tabClickFun != null && setting.tabClickFun[currentTab.attr('id')]) {
                        setting.tabClickFun[currentTab.attr('id')]();
                    } 
                });
        
                   //utl.setTabBodyCentral(thisElement.children('.csoa_tabs_body'));
                   //thisElement.find('.csoa_tabs_body_container').each(function () {
                   //     utl.setTabContainer($(this));
                   // });
           
                if (thisElement.find('.csoa_tabs_header a[id=' + setting.initTabId + ']').length > 0) {
                    thisElement.find('.csoa_tabs_header a[id=' + setting.initTabId + ']').click();
                }
                else {
                    thisElement.find('.csoa_tabs_header a:first').click();
                }                 
            });
        },
        setStyle: function (option) {
            var setting = $.extend({
                //是否把此csoa_tabs設置為佔滿其父容器，因若功能內以layout_hh_....方式設定大小後，
                //此處再設為true，就會把該大小覆蓋掉了
                isFullTab: true,
                end: {}
            }, option || {});
            return this.each(function () {
                var thisElement = $(this);     
                if (setting.isFullTab) {
                    utl.setTabToParentCentral(thisElement);
                }
                utl.setTabBodyCentral(thisElement.children('.csoa_tabs_body'));
                //thisElement.find('.csoa_tabs_body_container').each(function () {
                //    var temp = $(this).css('display');
                //    $(this).css('display', 'block');
                //    utl.setTabContainer($(this));
                //    $(this).css('display', temp);
                //});
            });
        },
        end: function () { }
    };
    $.fn.csoa_tabs = function (method) {
        if (tabs_methods[method]) {
            return tabs_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || tabs_methods[method] == undefined) {
            return tabs_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------
    // P12 fileUpload  
    var fileUpload_methods = {
        init: function (option) {
            var gridform_header_para_index = {
                childTag: 'h5',
                nameTag: 'span',
                matchKey: {
                    1: 'name'
                }
            };
            //參數=>單筆json資料要異動gridform單一個li內資料時，以includeProperty只有哪些屬性異動，或excludeProperty(那些屬性不異動)
            var gridform_updateCol_para = {
                includeProperty: '',
                excludeProperty: ''
            };          
            // 傳給'newCreate'方法之物件，由此參數搭配表投<i>元素內容，組出detail row內每一欄位的內容與屬性
            var gridform_newCreate_para = {
                input: function (value) {
                    if (value) {
                        return '<input type="text" value="' + value + '" />';
                    }
                    else {
                        return '<input type="text" />';
                    }
                },
                textarea: function (value) {
                    return '<textarea rows="4" ></textarea>';
                },
                text: function (text) {
                    return text;
                },
                textIndent: function (text) {
                    return '<pre>    ' + text + '</pre>';
                }
            };
            //gridform之總參數，需再給定updateCol_para、header_para、或additionFilter、resultJson
            var uploadGridform_data_para = {
                type: 'gridform',
                resultJson: null,
                updateCol_para: null,
                header_para: null,
                headerCol_parent: '.csoa_gridform_title',
                level1Tag: 'li',
                level2Tag: 'h5',
                noUpdateClass: '.csoa_gridform_level1',
                additionFilter: null,
                newCreate_para: null
            };
            var setting = $.extend({
                display: 'style="display:none"',
                ser:Math.round(Math.random()*10000).toString(),
                fileUpload_buttonSet: function () {
                    return '<div id="csoa_fileUpload_textbar' + setting.ser + '" class="csoa_textbar" ' + setting.display + ' >' + '<ul>'+                                                 
                                                    '<li><a href="#" id="csoa_addFile" class="inquiry csoa_addFile">選取檔案</a></li>' +
                                                    '<li><a href="#" id="csoa_removeFile" class="inquiry csoa_upload_removeFile">取消已選檔案</a></li>' +
                                                    '<li><a href="#" id="csoa_uploadDb" class="inquiry csoa_uploadDb">上傳資料庫</a></li>' +
                                                    '<li><a href="#" id="csoa_uploadFile" class="inquiry csoa_uploadFile">上傳為檔案</a></li>' +
                                                    '<li><a href="#" id="csoa_uploadDbAndFile" class="inquiry csoa_upload_DbAndFile">上傳資料庫及檔案</a></li></ul></div>';
                },
                fileUpload_gridform: function () {
                    return '<div id="csoa_fileUpload_gridform'+ setting.ser+'" class="csoa_gridform layout_hh_pc_own/own_8000" ' + setting.display + ' >' +
                      '<div class="csoa_gridform_header">' +
                        '<div class="csoa_gridform_title csoa_floatLeft">' +
                            '<h5 class="w12">檔名<span>name</span><i>text/text/text</i></h5>' +
                            '<h5 class="w6">大小(bytes)<span>size</span><i>text/text/text</i></h5>' +
                            '<h5 class="w5">副檔名<span>type</span><i>text/text/text</i></h5>' +
                            '<h5 class="w13">儲存檔名<span>saveName</span><i>input/none/text</i></h5>' +
                            '<h5 class="w15">檔案說明<span>description</span><i>textarea/none/text</i></h5>' +
                            '<h5 class="w00"><span>fileuploadName</span><i>text/text/text</i></h5>' +
                        '</div>' +
                    '</div>' +
  //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                uploadType: 'all', // db/file/all 
                isShowResponse:false,
                documentType: 'A02',
                id: 'a123456789',
                caseNo: '253-23-014252',
                customerId: 'STAND',
                subjectId: 'PLST',
                canOverrideFile: false,
                fileNameWithTime:false,
                successFun:null,
                preEmpty:false,
                afterEmpty:true
            }, option || {});
            return this.each(function () {
                if (setting.preEmpty) {
                    $(this).empty();
                }
                $(this).append(setting.fileUpload_buttonSet()).append(setting.fileUpload_gridform()).append(setting.fileTagContainer);
                if ($(this).attr('id') == 'tab3') {
                    //alert($(this).attr('id') + '    children len= ' + $(this).children().length);
                    //var setting = $.extend({
                    //    deduct_h: 1.5,
                    //    deduct_w: 1.5
                    //}, option || {});
                    //var a = 1;
                    //return this.each(function () {
                    //    utl.setSizeFlexableByIndex('h', '#' + $(this).attr('id'), 2, 'p.fileTagContainer', setting);
                    //});
                }
                //utl.setSizeFlexableByIndex(
                var elem = $(this);
                var fileIndex = 0;
                var uploadUrl = '';              
                elem.find('.csoa_textbar a[class*=csoa_addFile]').bind('click', function (e) {                  
                        addFile();
                });
                elem.find('.csoa_textbar a[class*=csoa_upload]').bind('click', function (e) {
                    var type = obj.reg.getPrefixString($(this).prop('class'), 'csoa_upload');            
                    switch (type) {
                        case 'csoa_uploadFile':
                            uploadUrl = '../Csoa_Handler/Csoa_FileUpload_edm.ashx?type=1'
                            uploadFile();
                            break;
                        case 'csoa_uploadDb':
                            uploadUrl = '../Csoa_Handler/Csoa_FileUpload_edm.ashx?type=2'
                            uploadFile();
                            break;
                        case 'csoa_upload_DbAndFile':
                            uploadUrl = '../Csoa_Handler/Csoa_FileUpload_edm.ashx?type=3'                          
                            uploadFile();
                            break;
                        case 'csoa_upload_removeFile':
                            removeFile();
                            break;
                    }
                });                
                elem.find('.csoa_gridform').selectable({ filter: 'li' });
                var a = 1;
                var addFile = function () {
                    fileIndex += 1;
                    var id = 'file' +setting.ser+ fileIndex;
                    var name = 'fileupload' + fileIndex;
                    var fileTag = '<input  id="' + id + '" name="' + name + '" type="file" style="display:none">';            
                    elem.find('p.fileTagContainer').append(fileTag);                  
                    $('#' + id).bind('change', function (e) {
                        var file = this.files[0];
                        var file_data = {
                            ResponseJson: JSON.stringify({
                                name: file.name,
                                size: file.size,
                                type: obj.reg.getFile_ext(file.name),
                                saveName: obj.reg.getFile_name(file.name),
                                description: '',
                                fileuploadName: name,
                                canOverrideFile: setting.canOverrideFile,
                                fileNameWithTime:setting.fileNameWithTime
                            })
                        };
                        uploadGridform_data_para.resultJson = file_data;
                        uploadGridform_data_para.updateCol_para = gridform_updateCol_para;
                        uploadGridform_data_para.header_para = gridform_header_para_index;
                        uploadGridform_data_para.newCreate_para = gridform_newCreate_para;
                        //elem.find('#csoa_fileUpload_gridform').csoa_gridform('addOneRow', uploadGridform_data_para);
                        elem.find('.csoa_gridform').csoa_gridform('addOneRow', uploadGridform_data_para);
                        if (setting.isSingle) {
                            switch (setting.uploadType) {
                                case 'file':
                                    setTimeout(function () { trigger_fun('.csoa_textbar a[class*=csoa_uploadFile]'); }, 0);
                                    break;
                                case 'db':
                                    setTimeout(function () { trigger_fun('.csoa_textbar a[class*=csoa_uploadDb]'); }, 0);
                                    break;
                                case 'all':  
                                    setTimeout(function () { trigger_fun('.csoa_textbar a[class*=csoa_upload_DbAndFile]'); }, 0);
                                    break;
                            }
                        }
                        function trigger_fun(selector) {
                            elem.find(selector).click();
                        }
                    });
                    $('#' + id).trigger('click');
                }
                var uploadFile = function () {
                    var hiddenData = {};
                    //多筆
                    //ajaxFileUpload  
                    var name_index = elem.find('.csoa_gridform .csoa_gridform_title h5 span:contains("fileuploadName")').parent('h5').index();
                    var desc_index = elem.find('.csoa_gridform .csoa_gridform_title h5 span:contains("description")').parent('h5').index();
                    var saveName_index = elem.find('.csoa_gridform .csoa_gridform_title h5 span:contains("saveName")').parent('h5').index();
                    var ext_index = elem.find('.csoa_gridform .csoa_gridform_title h5 span:contains("type")').parent('h5').index();
                    elem.find('.csoa_gridform .csoa_gridform_ul li').each(function (index) {
                        var property = $(this).find('h5:eq(' + name_index + ')').text();
                        var data = {};
                        //var description = $(this).find('h5:eq(' + desc_index + ') input[type=text]').val();
                        var description = $(this).find('h5:eq(' + desc_index + ') textarea').val();
                        var ext = $(this).find('h5:eq(' + ext_index + ')').text();
                        var saveNameTime = (setting.fileNameWithTime == true) ?
                            '_' + utl.date('datetime', true) + '_' + Math.round(Math.random() * 10000).toString() : '';
                        var saveName = $(this).find('h5:eq(' + saveName_index + ') input[type=text]').val() + saveNameTime + ext;
                        //var saveName = $(this).find('h5:eq(' + saveName_index + ') input[type=text]').val() + ext;
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                        data.folderName = setting.saveFolder;
                        data.canOverrideFile = setting.canOverrideFile;
                        hiddenData[property] = encodeURIComponent(JSON.stringify(data));
                    });
                    var csoa_form_hidden = utl.formToJson($('#csoa_form_hidden'));
                    //上傳service固定有兩個屬性：1、csoa_form_hidden用以讓service判斷session之狀態/逾期...，2、真正要給service處理所需之參數
                    //hiddenData["csoa_form_hidden"] = encodeURIComponent(JSON.stringify(csoa_form_hidden));
                    $.extend(hiddenData, csoa_form_hidden || {});
                    var a1 = 1;
                    
                    //這段是呼叫轉轉轉圖片
                    $("#loading").ajaxStart(function () {
                        $(this).show();
                    }).ajaxComplete(function () {
                        $(this).hide();
                    });
                    //這段是參數設定,而這裡我是用.ashx處理
                    $.ajaxFileUpload({
                        url: uploadUrl,
                        //url: '../CSOA_Service/Svc_CommonWebHttp.svc/Upload/utf-8',
                        secureuri: false,
                        fileElementId: elem.find('p.fileTagContainer :file'),
                        dataType: "json",
                        data: hiddenData,
                        success: function (data, status) {
                           
                            if (data.msg == 'forceLogout') {
                                if (obj.com.bordRequestObject) {
                                    clearInterval(obj.com.bordRequestObject);
                                }
                                alert(obj.com.bordRequestObject + '   data.msg=  ' + data.msg + '     ');
                                var displayMessage = utl.date('datetime') + '    ' + obj.msg.forceLogout;
                                var yesFun = function () {
                                    location.href = '../Csoa_Maintain/Csoa_Login.aspx';
                                }
                                if (!obj.com.isInSessionExpired) {
                                    obj.com.isInSessionExpired = true;
                                    utl.alert(displayMessage, { yes: yesFun });
                                }
                            }
                            else {
                                if (setting.successFun != null && setting.successFun != undefined) {
                                    setting.successFun();
                                }
                                if (setting.isShowResponse && data.msg != '') {
                                    if (obj.msg[data.msg]) {
                                        utl.alert(obj.msg[data.msg]);
                                    }
                                    else {
                                        utl.alert(data.msg);
                                    }
                                }
                                if (setting.afterEmpty) {
                                    elem.empty();
                                }
                            }
                            //alert('out');
                            //else if (data == 'error_bordHandler') {
                            //    clearInterval(bordRequest);
                            //    alert(obj.msg.errBordHandler);
                            //}
                            //else if ($('#csoa_header_bordContent').text() != data) {
                            //    $('#csoa_header_bordContent').text(data);
                            //}
                        },
                        error: function (data, status, e) {
                            alert("失敗");
                        }
                    });
                };
                var removeFile = function () {
                    var selectedLi = elem.find('.csoa_gridform_formset ul li.ui-selected').not('.csoa_gridform_level1');
                    //alert('li length='+selectedLi.length);
                    var idx = elem.find('.csoa_gridform_title span:contains("fileuploadName")').parent('h5').index();
                    selectedLi.each(function () {
                        var uploadFileName=$(this).find('h5:eq(' + idx + ')').text();
                        elem.find('input[name=' + uploadFileName + ']').remove();
                    });
                    selectedLi.remove();
                };
                if (setting.isSingle) {                   
                    $('#csoa_fileUpload_textbar' + setting.ser + ' a[class*=csoa_addFile]').click();
                }               
            });
        },
        setStyle: function (option) {
            var setting = $.extend({
                deduct_h: 0.5,
                deduct_w:0.5
            }, option || {});
            var a = 1;
            return this.each(function () {
                if ($(this).attr('id') == 'tab3') {
                    var a = 1;
                }
                utl.setSizeFlexableByIndex('h', '#' + $(this).attr('id'), 2, 'p.fileTagContainer', setting);               
            });
        },
        end: function () { }
    };
    $.fn.csoa_fileUpload = function (method) {
        if (fileUpload_methods[method]) {
            return fileUpload_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || fileUpload_methods[method] == undefined) {
            return fileUpload_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------
    // P13 fileDownload
    var fileDownload_methods = {
        init: function (option) {
            var setting = $.extend({              
                end: {}
            }, option || {});
            return this.each(function () {

            });
        },
        getFilesInfo: function (option) {
            var setting = $.extend({
             
                end: {}
            }, option || {});
            return this.each(function () {
             
            });
        },
        loadFileFromPath: function (option) {
            var setting = $.extend({
                fileDownload_iframe: '<iframe id="downloadIframe" name="downloadIframe" class="csoa_download_iframe"></iframe>',
                zipFolderName: '下載壓縮資料File',
                folderName: 'Download',
                fileName: '',
                isAddTime:true,
                conditionArray: [],
                end: {}
            }, option || {});
            return this.each(function () {
                var data = {
                    dropdownData: JSON.stringify([
                            utl.getFilterConditions('Csoa_Image', setting.conditionArray)])
                }
                var jsonData = JSON.stringify(data);
                $(this).append(setting.fileDownload_iframe);
                var srcUrl = '../Csoa_Handler/Csoa_FileDownload_edm.ashx?jsonObject=' + jsonData +
                    '&zipFolderName=' + setting.zipFolderName +
                    '&folderName=' + setting.folderName +
                    '&fileName=' + setting.fileName +
                    '&isAddTime=' + setting.isAddTime +
                    '&type=1';
                $(this).find('#downloadIframe').attr('src', srcUrl);
            });
        },
        loadFileFromDb: function (option) {
            var setting = $.extend({
                fileDownload_iframe: '<iframe id="downloadIframe" name="downloadIframe" class="csoa_download_iframe"></iframe>',
                zipFolderName:'下載壓縮資料Db',
                folderName: '',
                fileName: '',
                isAddTime: true,
                //conditionArray: [{ type: 'string', key: 'id', value: 'f120475874' },
                //                        { type: 'string', key: 'documentType', value: 'A01' },
                //                        { type: 'string', key: 'customerId', value: 'CC224' }                              
                //],
                end: {}
            }, option || {});
            return this.each(function () {
                var data = {
                    dropdownData: JSON.stringify([
                            utl.getFilterConditions('Csoa_Image', setting.conditionArray)])
                }
                var jsonData = JSON.stringify(data);
                $(this).append(setting.fileDownload_iframe);
                var srcUrl = '../Csoa_Handler/Csoa_FileDownload_edm.ashx?jsonObject=' + jsonData +
                    '&zipFolderName='+setting.zipFolderName+
                    '&folderName=' + setting.folderName +
                    '&fileName=' + setting.fileName +
                    '&isAddTime=' + setting.isAddTime +
                    '&type=2';
                $(this).find('#downloadIframe').attr('src',srcUrl );
            });
        },
        loadStreamFromDb: function (option) {
            var setting = $.extend({
                //conditionArray: [{ type: 'string', key: 'id', value: 'f120475874' },
                //                        { type: 'string', key: 'documentType', value: 'A01' },
                //                        { type: 'string', key: 'customerId', value: 'CC224' }],
                panelViewer: null,
                end: {}
            }, option || {});
            return this.each(function () {
                var elem = $(this);
                var init_post = {
                    url: '../CSOA_Service/Svc_CommonMaintain.svc/FormData_Dropdown',
                    uploadData: {
                        dropdownData: JSON.stringify([
                            utl.getFilterConditions('Csoa_Image',setting.conditionArray)])                             
                    },
                    afterSuccess: function (resultJson) {
                        var result = (JSON.parse(resultJson.ResponseJson));
                        var data = JSON.parse(result.Csoa_Image);                       
                        elem.empty();                  
                        for (var i = 0; i < data.length; i++) {  
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                                    downSelector: 'img',
                                    moveAndUpSelector: 'div.csoa_panel_viewer',
                                    movingElement: setting.panelViewer.find('img')
                                });
                            });
                        }                   
                    }
                }
                utl.ajax(init_post);
            });
        },
        end: function () { }
    };
    $.fn.csoa_fileDownload = function (method) {
        if (fileDownload_methods[method]) {
            return fileDownload_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || fileDownload_methods[method] == undefined) {
            return fileDownload_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

   
    // P14 panelViewer----------------------------------------------------------------------------------------------------------------
    var panelViewer_methods = {
        init: function (option) {
            var setting = $.extend({
                display:'none',
                containerDiv:'<div class="csoa_photo_viewer_container"></div>',            
                photo: null,
                isMovable: true,
                isFixInParent:false,//當此panelViewer不是浮動可拖曳形式，而是屬於置放於某容器內並固定不拖曳，應為true
                containerSelector:null,  //當isFixInParent=true，定義要置放的父容器selector
                nonDisplaySelector:null, //當isFixInParent=true，定義要將父容器下哪一個selector(通常display是block)之display設為none;
                type: 'photo',
                //customStyle:null,
                customStyle:{
                    width: '40%',
                    height: '40%',
                    left: '30%',
                    top: '25%',
                    borderColor: '#ffaeae',
                    backgroundColor: '#fefefe',
                    moveBorder: '#cacaca',
                    moveBg: '#eaeaea',
                },                
                type_photo: {                    
                    closeTag: '<h5 class="csoa_close">X</h5>',                 
                    moveTop: '<h5 class="csoa_move csoa_moveTop"></h5>',
                    moveBottom: '<h5 class="csoa_move csoa_moveBottom"></h5>',
                    moveLeft: '<h5 class="csoa_move csoa_moveLeft"></h5>',
                    moveRight: '<h5 class="csoa_move csoa_moveRight"></h5>',
                },
                type_panel: {                  
                    closeTag: '<div class="csoa_close">X</div>',
                    closeTagFixed: '<div class="csoa_close_fixed">X</div>',
                    moveTop: '<div class="csoa_move csoa_moveTop"></div>',
                    moveBottom: '<div class="csoa_move csoa_moveBottom"></div>',
                    moveLeft: '<div class="csoa_move csoa_moveLeft"></div>',
                    moveRight: '<div class="csoa_move csoa_moveRight"></div>',                    
                },
                end: {}
            }, option || {});
            return this.each(function () {
                //if (setting.type == 'panel') {
                //    var id = $(this).attr('id');
                //    $(this).contents().replaceWith(obj.com.panel_viewer_jQ[id]);
                //}
                var thisElement = $(this);       //jQuery外掛的this是代表jQuery物件，應先以區域變數保留，以便click時可以使用  
                var moveRight_right=0;
                var moveBottom_bottom = 0;
                var theClose;

                if (setting.type == 'photo') {
                    thisElement.children().remove().end().css('display', 'block').append(setting.containerDiv);
                    thisElement.find('.csoa_photo_viewer_container').append(setting.photo);
                    moveRight_right = thisElement.find('.csoa_photo_viewer_container').width() -
                    thisElement.find('.csoa_photo_viewer_container')[0].clientWidth;
                    moveBottom_bottom = thisElement.find('.csoa_photo_viewer_container').height() -
                        thisElement.find('.csoa_photo_viewer_container')[0].clientHeight;
                    theClose = $(setting.type_photo.closeTag);
                    theClose.appendTo(thisElement);
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                }              
                else {
                    thisElement.find('div.csoa_close_fixed,div.csoa_close,div.csoa_move').remove();
                    thisElement.removeAttr('style');
                    if (setting.isFixInParent) {
                        theClose = $(setting.type_panel.closeTagFixed);
                        $(setting.nonDisplaySelector).css('display', 'none');
                        thisElement
                            .css('display', 'block')
                            .removeClass('csoa_panel_viewer_size1 csoa_panel_viewer_size2 csoa_panel_viewer_size3 csoa_panel_viewer_size4')
                            .addClass('csoa_panel_viewer_fixed');
                            //.appendTo($(setting.containerSelector));                      
                    }
                    else {
                        theClose = $(setting.type_panel.closeTag);
                        $(setting.type_panel.moveTop).appendTo(thisElement);
                        $(setting.type_panel.moveBottom).appendTo(thisElement);
                        $(setting.type_panel.moveLeft).appendTo(thisElement);
                        $(setting.type_panel.moveRight).appendTo(thisElement);
                        thisElement.csoa_movable({ movingElement: thisElement });
                        thisElement.find('div.csoa_move').bind('mouseover', function () {
                            thisElement.find('div.csoa_move').css('background-color', '#eaeaea');
                            thisElement.css('border', '1px solid #ffaeae');
                            thisElement.css('cursor', 'move');
                        }).bind('mouseout', function () {
                            thisElement.find('div.csoa_move').css('background-color', '#f3f3f3');
                            thisElement.css('border', '1px solid #eaeaea');
                            thisElement.css('cursor', 'auto');
                        });
                    }            
                    thisElement.css('display', setting.display);                   
                     theClose.appendTo(thisElement);                       
                        if (setting.isMovable && !setting.isFixInParent) {                        
                        }                        
                               
                }
                thisElement.find('.csoa_moveBottom').css({ bottom: moveBottom_bottom });
                thisElement.find('.csoa_moveRight').css({ right: moveRight_right });
                if (setting.isFixInParent) {
                   
                }
                if (setting.customStyle  != null && setting.customStyle.width != undefined) {
                    thisElement.css('width', setting.customStyle.width);
                }
                if (setting.customStyle != null && setting.customStyle.height != undefined) {
                    thisElement.css('height', setting.customStyle.height);
                }
                if (setting.customStyle != null && setting.customStyle.left != undefined) {
                    thisElement.css('left', setting.customStyle.left);
                }
                if (setting.customStyle != null && setting.customStyle.top != undefined) {
                    thisElement.css('top', setting.customStyle.top);
                }
                if (setting.customStyle != null && setting.customStyle.backgroundColor != undefined) {
                    thisElement.css('background-color', setting.customStyle.backgroundColor);
                }
                if (setting.customStyle != null && setting.customStyle.borderColor != undefined) {
                    thisElement.css('border-color', setting.customStyle.borderColor);
                }
                if (setting.customStyle != null && setting.customStyle.moveBg != undefined) {
                    thisElement.find('.csoa_move').css('background-color', setting.customStyle.moveBg);
                }
                if (setting.customStyle != null && setting.customStyle.moveBorder != undefined) {
                    thisElement.find('.csoa_move').css('border-color', setting.customStyle.moveBorder);
                }

                //2014#/03/02
                //thisElement.csoa_movable({
                //    downSelector: 'img',
                //    moveAndUpSelector: 'div.csoa_panel_viewer',
                //    movingElement:thisElement.find('img')
                //});

                //thisElement.bind('dblclick', function (e) {
                //    thisElement.find('img').draggable({ refreshPositions: true });
                //});
                theClose.bind('click', function (e) {
                    if (setting.type == 'photo') {
                        thisElement.children().remove().end().css('display', 'none');
                    }
                    else {
                        thisElement.prop('class', obj.com.panel_viewer_class[thisElement.attr('id')]);
                        thisElement.css('display', 'none');
                    }
                    if (setting.isFixInParent) {
                        //thisElement.appendTo('#content');
                        $(setting.nonDisplaySelector).css('display', 'block');
                    }                    
                });
            });
        },
        end: function () { }
    };
    $.fn.csoa_panelViewer = function (method) {
        if (panelViewer_methods[method]) {
            return panelViewer_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || panelViewer_methods[method] == undefined) {
            return panelViewer_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------------------

    // P15 movable----------------------------------------------------------------------------------------------------------------
    var movable_methods = {
        init: function (option) {
            var setting = $.extend({               
                photo: null,
                downSelector: 'div.csoa_move',              
                moveAndUpSelector: 'body',
                movingElement:null,
                end: {}
            }, option || {});
           
            return this.each(function () {
                var thisElement = $(this);       //jQuery外掛的this是代表jQuery物件，應先以區域變數保留，以便click時可以使用             
                var x = 0;
                var y = 0;
                var pos_x;
                var pos_y;
                var isBeginMove = false;
                var boundary_left = (setting.moveAndUpSelector == 'body')? 0:parseInt($(setting.moveAndUpSelector).css('left'));
                var boundary_top = (setting.moveAndUpSelector == 'body') ? 0 : parseInt($(setting.moveAndUpSelector).css('top'));
                var boundary_right = (setting.moveAndUpSelector == 'body') ?
                    $(window).width() : parseInt($(setting.moveAndUpSelector).css('left')) +$(setting.moveAndUpSelector).outerWidth();
                var boundary_bottom = (setting.moveAndUpSelector == 'body') ?
                    $(window).height() : parseInt($(setting.moveAndUpSelector).css('top')) + $(setting.moveAndUpSelector).outerHeight();
                
                if (setting.moveAndUpSelector != 'body') {          
                    $(setting.moveAndUpSelector).bind('mouseout', function () {
                        isBeginMove = false;
                    });
                }
                thisElement.find(setting.downSelector).bind('mousedown', function (e) {                   
                    e.preventDefault();
                    x = e.pageX;
                    y = e.pageY;
                    pos_x = parseFloat(setting.movingElement.position().left);
                    pos_y = parseFloat(setting.movingElement.position().top);                   
                    isBeginMove = true;          
                });
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                        if ((e.pageX + 1) >= $(window).width() || (e.pageY + 1) >= $(window).height()) {
                            isBeginMove = false;
                        }
                        if (setting.moveAndUpSelector != 'body') {      //表示移動的是不是.csoa_panel_viewer，而是其內的img    
                            var moveRight_right = thisElement.find('.csoa_photo_viewer_container').width() -
                                thisElement.find('.csoa_photo_viewer_container')[0].clientWidth;
                            var moveBottom_bottom = thisElement.find('.csoa_photo_viewer_container').height() -
                                thisElement.find('.csoa_photo_viewer_container')[0].clientHeight;
                            if (moveRight_right == 0) {
                                $('h5.csoa_moveRight').css({ right: 0 });                           
                            }
                            else {
                                $('h5.csoa_moveRight').css({ right: moveRight_right });                              
                            }
                            if (moveBottom_bottom == 0) {
                                $('h5.csoa_moveBottom').css({ bottom: 0 });                           
                            }
                            else {
                                $('h5.csoa_moveBottom').css({ bottom: moveBottom_bottom });                              
                            }
                        }                   
                        setting.movingElement.css({ left: pos_x + (e.pageX - x), top: pos_y + (e.pageY - y) });
                    }
                });
            });
        },
        end: function () { }
    };
    $.fn.csoa_movable = function (method) {
        if (movable_methods[method]) {
            return movable_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || movable_methods[method] == undefined) {
            return movable_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };
    //------------------------------------------------------------------------------------------------------------------------------------------

    // P16  listbox------------------------------------------------------------------------------------------------
    var listbox_methods = {
        init: function (option) {
            var setting = $.extend({
                sourceInitAddFun: null,
                targetInitAddFun: null,
                end: {}
            }, option || {});

            return this.each(function () {
                var thisElement = $(this);       //jQuery外掛的this是代表jQuery物件，應先以區域變數保留，以便click時可以使用                
                thisElement.find('.csoa_listbox_button a').bind('click', function (e) {
                    var className = obj.reg.getPrefixString($(this).prop('class'), 'listbox_');
                    switch (className) {
                        case 'listbox_selectAll':
                            thisElement.find('ul.csoa_listbox_source li.listbox_item_selected')
                                .removeClass('listbox_item_selected')
                                .appendTo(thisElement.children('ul.csoa_listbox_target'));
                            break;
                        case 'listbox_selectOne':
                            thisElement.find('ul.csoa_listbox_source li.listbox_item_selected:first')
                                 .removeClass('listbox_item_selected')
                                 .appendTo(thisElement.children('ul.csoa_listbox_target'));
                            break;
                        case 'listbox_unSelectAll':
                            thisElement.find('ul.csoa_listbox_target li.listbox_item_selected')
                                  .removeClass('listbox_item_selected')
                                  .appendTo(thisElement.children('ul.csoa_listbox_source'));
                            break;
                        case 'listbox_unSelectOne':                           
                            thisElement.find('ul.csoa_listbox_target li.listbox_item_selected:first')
                                 .removeClass('listbox_item_selected')
                                 .appendTo(thisElement.children('ul.csoa_listbox_source'));
                            break;
                    }                   
                });             
                listbox_methods.setListboxUl.apply(this, [thisElement.children('.csoa_listbox_source')]);
                listbox_methods.setListboxUl.apply(this, [thisElement.children('.csoa_listbox_target')]);
            });
        },

        loadData: function (option) {
            var setting = $.extend({
                sourceInitAddFun: null,
                targetInitAddFun:null,
                end: {}
            }, option || {});
            return this.each(function () {
                var thisElement = $(this);
                var sourceEventFun = function () {
                    listbox_methods.setListboxUl.apply(this, [thisElement.children('.csoa_listbox_source')]);                  
                }
                var targetEventFun = function () {
                    listbox_methods.setListboxUl.apply(this, [thisElement.children('.csoa_listbox_target')]);
                }
                if (setting.sourceInitAddFun != null) {
                    setting.sourceInitAddFun(sourceEventFun);
                }
                if (setting.targetInitAddFun != null) {
                    setting.targetInitAddFun(targetEventFun);
                }                
            });
        },

        setListboxUl:function(currentUl){
            var li_all = currentUl.find('li');           
            li_all.bind('mousedown', function (e) {
                if (e.ctrlKey || e.shiftKey) {
                    e.preventDefault();
                }
            }).bind('click', function (e) {
                var li_selected = $(this).parent('ul').find('li.listbox_item_selected');
                if (e.ctrlKey) {
                    $(this).toggleClass('listbox_item_selected');
                }
                else if (e.shiftKey) {
                    var parent = $(this).parent();
                    var li_first = parent.children(':first');
                    var li_last = parent.children(':last');
                    var backward_1st_selected = $(this).prevAll('.listbox_item_selected').first();
                    var forward_1st_selected = $(this).nextAll('.listbox_item_selected').first();
                    if (backward_1st_selected.length > 0) {
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                else {
                    li_selected.removeClass('listbox_item_selected');
                    $(this).toggleClass('listbox_item_selected');
                }
            }).bind('dblclick', function (e) {
                $(this).removeClass('listbox_item_selected').appendTo($(this).parent('ul').siblings('ul'));    
            });
        },
        end: function () { }
    };
    $.fn.csoa_listbox = function (method) {
        if (listbox_methods[method]) {
            return listbox_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || listbox_methods[method] == undefined) {
            return listbox_methods.init.apply(this, arguments);
        }
        else {
            return;
        }
    };
    //-----------------------------------------------------------------------------------------------------------------

    // P17  --------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------

    // P18  --------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------

})(jQuery);
//end P=>(jQuery 外掛) =============end jQuer plugin       end jQuery plugin=================================


// Csoa 共用javascript function
// 共用css Class 
var cssCls = Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.CssClass');
cssCls = {
    multiField: 'csoa_multiField',
    newLine: 'csoa_newLine',
    fieldRequired: 'csoa_fieldRequired',
    fieldError: 'csoa_fieldError',
    fieleDate: 'csoa_fieldDate',
    fieldTime: 'csoa_fieldTime',
    fieldDatetime: 'csoa_fieldDatetime'
};
//selectorIndex = function (s, r) {
//    this.selector = s;
//    this.rule = r;
//},
//cssSelector = function (selectorName, propertyName, propertyValue) {
//    this.selectorName = selectorName;
//    this.propertyName = propertyName;
//    this.propertyValue = propertyValue;

//    this.prototype.getSelectorIndex = function (selectorName) {
//        var theSheets = document.styleSheets;
//        for (var i = 0; i < theSheets.length; i++) {
//            var theRules = theSheets[i].cssRules || theSheets[i].rules;
//            for (var j = 0; j < theRules.length; j++) {
//                if (theRules[j].selectorText == selectorName) {
//                    var theIndex = new index(i, j);
//                    return theIndex;
//                }
//            }
//        }
//    }
//    this.prototype.SetRule = function (index) {
//        if (document.styleSheets[index.selector].cssRules) {
//            document.styleSheets[index.selector].cssRules[index.rule].style.cssText =
//                document.styleSheets[index.selector].cssRules[jndex.rule].style.cssText.replace(/pink/g, 'yellow');  //適用於firefox
//        }
//        if (document.styleSheets[i].rules) {
//            document.styleSheets[i].rules[j].style['background-color'] = 'yellow';   //適用於：chrome                               
//        }
//    }
//};


// 共用form參數
var frm = Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.FormParameter');
frm = {
    // 1920*1080
    f1920: {
        labelWidth: 6,  //欄位label所占em數
        minResizeiField: 6,  // 需重算li寬度之input text、 textare之最小size值(tag的size值)
        textWidth: 8,// em input text的標準寬度
        inputExtend:2, //需重算li之每一input text textarea寬度extend em數(讓寬度比可輸入自數稍寬一些)
        fieldWidth: 15,  //form內一個li欄位之標準寬度
        fieldWidthDouble: 30.5,  //form內2倍寬度li欄位寬度
        fieldHeight: 1.4, // em form內一個li欄位的高度 
        fieldMarginBottom: 0.5, //em
        fieldMarginRight: 0.5,  //em
        markUpPaddingLeft: 0.2, //em
        markUpPaddingTop: 0,  //em
        multiFieldMarginRight: 0.2 //em        
    },
    // 1440*900
    f1440: {
    },
    // 1024*768
    f1024: {
    }
};
// css物件


//F=>(系統公用function)
// F01-操作陣列的物件  12/17   var mydic=new CsoaDictionary();
function CsoaDictionary() {
    this.keys = new Array();
    this.values = new Array();
    this.addSubvalue = function (key, subValue) {
        var idx = this.indexOfKeys(key);
        if (idx == null) {
            this.keys.push(key);
            this.values.push(new Array());
            idx = this.values.length - 1;
        }

        this.values[idx].push(subValue);
    }
    this.getValues = function (key) {
        for (var i = 0; i < this.keys.length; i++) {
            if (key == this.keys[i]) {
                return this.values[i];
            }
        }
        return null;
    }

    this.deleteValues = function (key) {
        var idx = this.indexOfKeys(key);
        if (idx == null) {
            return null;
        }
        this.values.splice(idx, 1);
        this.keys.splice(idx, 1);
    }

    this.deleteSubvalue = function (key, subValue) {
        var idxValues = this.indexOfKeys(key);
        var idxSubvalue = this.indexOfSubvalue(key, subValue);
        if (idxValues == null || idxSubvalue == null) {
            return null;
        }
        this.values[idxValues].splice(idxSubvalue, 1);
    }
    this.indexOfKeys = function (key) {
        for (var i = 0; i < this.keys.length; i++) {
            if (key == this.keys[i]) {
                return i;
            }
        }
        return null;
    }
    this.indexOfSubvalue = function (key, subValue) {
        var idx = this.indexOfKeys(key);
        if (idx == null) {
            return null;
        }
        if (this.values[idx].length == 0) {
            return null;
        }
        for (var i = 0; i < this.values[idx].length; i++) {
            if (this.values[idx][i] == subValue) {
                return i;
            }
        }
        return null;
    }
    this.clear = function (key) {
        alert(this.indexOfKeys(key) + '    ' + key);
        this.values[this.indexOfKeys(key)] = new Array();
    }
}

// 外掛空框架範例
//(function($){
//        // resizeing plugin
//        var resizing_methods = {
//            init: function () {
//                      return this.each(function(){
//                          code ........
//                          code ........
//                      });
//            },
//            show: function () {
//            }
//        };
//        $.fn.csoa_resizing = function () {
//        };

//        // tab plugin
//        var tab_methods = {
//            init: function () {
//            },
//            show: function () {
//            }
//        };
//        $.fn.csoa_tab = function () {
//        };

//        // sidebar plugin
//        var sidebar_methods = {
//            init: function () {
//            },
//            show: function () {
//            }
//        };
//        $.fn.csoa_sidebar = function () {
//        };
//})(jQuery);








// Csoa jQuery 共用外掛  //2/26暫時放著保留
// commInfo 物件 


//({
//    // 这里你可以定义常量，设置其它值
//    maxwidth: 600,
//    maxheight: 400,
//    //  当然也可以定义utility方法
//    gimmeMax: function () {
//        return this.maxwidth + "x" + this.maxheight;
//    },
//    // 初始化
//    init: function () {
//        alert('初始化' + this.gimmeMax());
//        // 更多代码...
//    },
//    second:function(){
//        alert('second' + this.gimmeMax());
//    }
//}).second();  // 这样就开始初始化
(function ($) {
    var commInfo = Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.PageCommFunction.CommInfo');
    $.fn.setSereenBaseInfo = function () {
        var infoTag = '<input id="base_client_width" type="hidden" value="1890" />' +
                            '<input id="base_client_height" type="hidden" value="900" />' +
                            '<input id="base_logo_width" type="hidden" value="200" />';
        this.append(infoTag);
    };
    // commSetting 物件
    var commSetting_methods = Csoa_Namespace_Caps20140610.namespace('Csoa_Namespace_Caps20140610.PageCommFunction.CommSetting');
    $.fn.csoa_commSetting = function (method) {
        if (csoa_commSetting_methods[method]) {
            return csoa_commSetting_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method == 'object' || !method) {
            return csoa_commSetting_methods.initSetting.apply(this, arguments);
        }
        else {
            $.error('呼叫方法錯誤! (' + method + '不存在commSetting_methods內!');
        }
    }
    csoa_commSetting_methods = {
        initSetting: function () {
            return this.each(function () {
                $('#csoa_screen_baseinfo').setSereenBaseInfo(); //加入原設定各項寬高之base解析度1890*900 之hidden tag  
                var logo_width = parseInt($('#sidebar #csoa_logo').css("width"));
                var logo_height = parseInt($('#sidebar #csoa_logo').css("height"));
                //alert('logo_width=' + logo_width);
                $('#sidebar #csoa_logo img').attr('width', logo_width).attr('height', logo_height); //將css內的寬高先設定給 img
                var base_width = parseFloat($('#base_client_width').attr('value'));
                var base_height = parseFloat($('#base_client_height').attr('value'));
                var pc_width = parseInt(document.body.clientWidth);
                var pc_height = parseInt(document.body.clientHeight);
                var body_fontsize = parseInt($('body').css('font-size').replace('px', '')); //取得body所定義的原始font-size
                var fontsize_multi = pc_width / base_width;  //目前的解析度 w 為 base 解析度 w 的%
                var pc_fontsize = body_fontsize * fontsize_multi; // 依據目前解析度w vs base解析度w重新計算 body之font-size
                $('body').css('font-size', pc_fontsize + 'px');  //更改 body之font-size 
                logo_width = logo_width * fontsize_multi;
                logo_height = logo_height * fontsize_multi;
 //......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......//
//......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication......Authentication....../
                alert(s);
            });
        }
    }

})(jQuery)


//thisElement.find('img').draggable({
//    refreshPosition: true,
//    snap: true,
//    snapMode: 'inner',
//    snapTolerance:40,
//    start:function(){
//        var child = $(this);
//        var parent = $(this).parent();                   
//        var parent_left_total = ((parent.css('border-left-width')) ? parseFloat(parent.css('border-left-width')) : 0) +
//            ((parent.css('padding-left')) ? parseFloat(parent.css('padding-left')) : 0) +
//            ( (child.css('margin-left')) ? parseFloat(child.css('margin-left')) : 0) +
//             parent.offset().left;
//        var parent_top_total = ((parent.css('border-top-width')) ? parseFloat(parent.css('border-top-width')) : 0) +
//             ((parent.css('padding-top')) ? parseFloat(parent.css('padding-top')) : 0) +
//             ((child.css('margin-top')) ? parseFloat(child.css('margin-top')) : 0) +
//             parent.offset().top;               
//    },
