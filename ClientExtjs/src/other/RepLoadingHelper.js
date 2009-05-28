
  var NEW_LINE = '\n';


  function buildHtmlRep(pLang, repCode, pDcArray) {
     var out = '';
     out += '<html>'+NEW_LINE;
     out += buildHtmlHeadRep(pLang, repCode, pDcArray);
     out += buildHtmlBodyRep(pLang, repCode, pDcArray);
     out += '</html>'+NEW_LINE;
     out += '';
     return out;
  }

  function buildHtmlHeadRep(pLang, repCode, pDcArray) {
     var out = '';
     out += '<head>'+NEW_LINE;
     out += ' 	<META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=UTF-8">'+NEW_LINE;
     out += ' 	<META NAME="AUTHOR" CONTENT="Nan21 Electronics srl">'+NEW_LINE;
     out += ' 	<META NAME="COPYRIGHT" CONTENT="&copy; Nan21 Electronics srl">'+NEW_LINE;
     if (CFG_DEPLOYMENT_TYPE == 'DEV') {
       out += ' 	<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">'+NEW_LINE;
       //out += ' 	<META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">'+NEW_LINE;
     }  else {
       out += ' 	<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="PRIVATE">'+NEW_LINE;
     }
     out += copyGlobalsRep();
     out += buildImportExtjsRep(pLang);
     out += buildImportN21BaseRep(pLang);
     out += buildImportDcRep(pLang, repCode, pDcArray);
     out += '</head>'+NEW_LINE;
     out += '';
     return out;
  }

  function buildHtmlBodyRep(pLang, repCode, pDcArray) {
     var out = '';
     out += '<body >'+NEW_LINE;     // onLoad="javascript:alert(11111);"
     out += '  <div id="north"></div>'+NEW_LINE;
     out += '</body>'+NEW_LINE;
     out += '';
     out += buildViewRep(repCode);
     return out;
  }

  // -------------------------------------------
  
    function buildImportExtjsRep(pLang) {
     var out = '';
     out += '  <link rel="stylesheet" type="text/css" href="'+CFG_PATH_EXTJS+'/resources/css/ext-all.css"/>'+NEW_LINE;
     out += '  <link rel="stylesheet" type="text/css" href="'+CFG_CLIENT_URL+'/resource/css/n21ebs.css"/>'+NEW_LINE;
     //out += '  <link rel="stylesheet" type="text/css" href="'+CFG_PATH_EXTJS+'/resources/css/xtheme-nbs.css"/>'+NEW_LINE;

     out += '  <script type="text/javascript" src="'+CFG_PATH_EXTJS+'/adapter/ext/ext-base.js" ><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_EXTJS+'/ext-all.js" ><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_EXTJS+'/build/locale/ext-lang-'+pLang+'.js"><\/script>'+NEW_LINE;

     out += '';
     return out;
  }

  function buildImportN21BaseRep(pLang) {
     var out = '';
     var ts = '';
     if (CFG_DEPLOYMENT_TYPE == 'DEV') {
       ts = '?_t_='+(new Date()).getTime();
     }
     //alert(ts);

     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.Combo.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.Lov.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.ReportParamForm.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/lib.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/globals.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/extjs-extend.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_EXTJS+'/custom/Ext.ux.form.XCheckbox.js"><\/script>'+NEW_LINE;
     out += '';
     return out;
  }

  function buildImportDcRep(pLang,repCode,pDcArray) {
     var out = '';
     var ts = '';
     if (CFG_DEPLOYMENT_TYPE == 'DEV') {
       ts = '?_t_='+new Date().getTime();
     }
     if (!Ext.isEmpty(pDcArray) ) {
       for (var j=0; j<pDcArray.length; j++) {
         out += '<script type="text/javascript" src="'+CFG_CLIENT_URL+'/src/dc/'+pDcArray[j]+'.js'+ts+'"><\/script>'+NEW_LINE;
         out += '<script type="text/javascript" src="'+CFG_CLIENT_URL+'/trl/'+pDcArray[j]+'_'+pLang+'.js'+ts+'"><\/script>'+NEW_LINE;
       }
     }
     out += '  <script type="text/javascript" src="'+CFG_CLIENT_URL+'/src/dc/'+repCode+'.js'+ts+'"><\/script>'+NEW_LINE;
     return out;
  }


  function copyGlobalsRep() {
     var out = '';
     out += '<script>'+NEW_LINE;
     out += 'CFG_PRODUCT_VERSION = "'+CFG_PRODUCT_VERSION+'";'+NEW_LINE;
     out += 'CFG_IS_ADOBEAIR = '+CFG_IS_ADOBEAIR+';'+NEW_LINE;
     out += 'CFG_AUTHSERVER_URL = "'+CFG_AUTHSERVER_URL+'";'+NEW_LINE;
     out += 'CFG_BACKENDSERVER_URL = "'+CFG_BACKENDSERVER_URL+'";'+NEW_LINE;
     out += 'CFG_REPORTSERVER_URL = "'+CFG_REPORTSERVER_URL+'";'+NEW_LINE;
     out += 'CFG_CLIENT_URL = "'+CFG_CLIENT_URL+'";'+NEW_LINE;
     out += 'CFG_PATH_EXTJS = "'+CFG_PATH_EXTJS+'";'+NEW_LINE;
     out += 'CFG_PATH_JSLIB = "'+CFG_PATH_JSLIB+'";'+NEW_LINE;
     out += 'CFG_PATH_ICONS = "'+CFG_PATH_ICONS+'";'+NEW_LINE;
     out += '</script>'+NEW_LINE;
     out += '';
     return out;
  }
  

  function buildViewRep(repCode) {
    var out = '';
    out += '<script><!--'+NEW_LINE;
   // out += '  var '+repCode+NEW_LINE;
    out += '  Ext.onReady(function(){'+NEW_LINE;
    out += '  var '+repCode+' = new N21.DataComp.'+repCode+'();'+NEW_LINE;
    out += '    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";'+NEW_LINE;
    out += '    Ext.QuickTips.init();'+NEW_LINE;
    out += '  var  bodyStyle = "background:#efeff3;";'+NEW_LINE;
    out += '  var gui = new Ext.Viewport({'+NEW_LINE;
    out += '     layout:"border"'+NEW_LINE;
    out += '    ,style:bodyStyle'+NEW_LINE;
    out += '    ,items:['+NEW_LINE;
    out += '      new Ext.Panel({'+NEW_LINE;
    out += '         id: "mainPanel"'+NEW_LINE;
    out += '        ,region:"center"'+NEW_LINE;
    out += '        ,layout:"fit"'+NEW_LINE;
    out += '        ,border: false'+NEW_LINE;
    out += '        ,split: true'+NEW_LINE;
    out += '        ,bodyStyle:bodyStyle'+NEW_LINE;
    out += '        ,items: ['+repCode+']'+NEW_LINE;
    out += '       })'+NEW_LINE;
    out += '    ,{ region: "south",border: false, bodyStyle:bodyStyle,split: true,height:200}'+NEW_LINE;
    out += '    ,{ region: "east" ,border: false, bodyStyle:bodyStyle,split: true,width:200}'+NEW_LINE;
    out += '    ,{ region: "north",border: false, html:"<div class=\'gui_title\'>"+'+repCode+'.reportName+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;'+repCode+'&gt;</div>"}'+NEW_LINE;
    out += '   ]'+NEW_LINE;
    out += '});'+NEW_LINE;
    out += '  });'+NEW_LINE;
    out += '--></script>'+NEW_LINE;
    return out;
  }

  
  
