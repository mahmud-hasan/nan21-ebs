
  var NEW_LINE = '\n';


  function buildHtml(pLang, pUi, pDcArray) {
     var out = '';
     out += '<html>'+NEW_LINE;
     out += buildHtmlHead(pLang, pUi, pDcArray);
     out += buildHtmlBody(pLang, pUi, pDcArray);
     out += '</html>'+NEW_LINE;
     out += '';
     return out;
  }

  function buildHtmlHead(pLang, pUi, pDcArray) {
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
     out += copyGlobals();
     out += buildImportExtjs(pLang);
     out += buildImportN21Base(pLang);
     out += buildImportDc(pLang, pUi, pDcArray);
     out += '</head>'+NEW_LINE;
     out += '';
     return out;
  }

  function buildHtmlBody(pLang, pUi, pDcArray) {
     var out = '';
     out += '<body >'+NEW_LINE;     // onLoad="javascript:alert(11111);"
     out += '  <div id="north"></div>'+NEW_LINE;
     out += '</body>'+NEW_LINE;
     out += '';
     return out;
  }

  // -------------------------------------------
  
    function buildImportExtjs(pLang) {
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

  function buildImportN21Base(pLang) {
     var out = '';
     var ts = '';
     if (CFG_DEPLOYMENT_TYPE == 'DEV') {
       ts = '?_t_='+(new Date()).getTime();
     }
     //alert(ts);
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.GridEdit.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.GridView.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.Combo.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.Lov.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.EditForm.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/N21.Base.GridEditForm.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/Ext.ux.PrintWindow.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/Ext.ux.CurrencyUnitSelector.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/Ext.ux.AdvancedFilter.js'+ts+'"><\/script>'+NEW_LINE;

     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/lib.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/globals.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_JSLIB+'/extjs-extend.js'+ts+'"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_EXTJS+'/custom/Ext.ux.form.XCheckbox.js"><\/script>'+NEW_LINE;
     out += '  <script type="text/javascript" src="'+CFG_PATH_EXTJS+'/custom/Ext.ux.grid.GridSummary.js'+ts+'"><\/script>'+NEW_LINE;
     out += '';
     return out;
  }

  function buildImportDc(pLang,pUi,pDcArray) {
     var out = '';
     var ts = '';
     if (CFG_DEPLOYMENT_TYPE == 'DEV') {
       ts = '?_t_='+new Date().getTime();
     }
     for (var j=0; j<pDcArray.length; j++) {
       out += '<script type="text/javascript" src="'+CFG_CLIENT_URL+'/src/dc/'+pDcArray[j]+'.js'+ts+'"><\/script>'+NEW_LINE;
       out += '<script type="text/javascript" src="'+CFG_CLIENT_URL+'/trl/'+pDcArray[j]+'_'+pLang+'.js'+ts+'"><\/script>'+NEW_LINE;
     }
     out += '  <script type="text/javascript" src="'+CFG_CLIENT_URL+'/src/ui/'+pUi+'.js'+ts+'"><\/script>'+NEW_LINE;
     return out;
  }
  

  function copyGlobals() {
     var out = '';
     out += '<script>'+NEW_LINE;
     out += 'CFG_PRODUCT_VERSION = "'+CFG_PRODUCT_VERSION+'";'+NEW_LINE;
     out += 'CFG_IS_ADOBEAIR = '+CFG_IS_ADOBEAIR+';'+NEW_LINE;
     out += 'CFG_AUTHSERVER_URL = "'+CFG_AUTHSERVER_URL+'";'+NEW_LINE;
     out += 'CFG_BACKENDSERVER_URL = "'+CFG_BACKENDSERVER_URL+'";'+NEW_LINE;
     out += 'CFG_CLIENT_URL = "'+CFG_CLIENT_URL+'";'+NEW_LINE;
     out += 'CFG_PATH_EXTJS = "'+CFG_PATH_EXTJS+'";'+NEW_LINE;
     out += 'CFG_PATH_JSLIB = "'+CFG_PATH_JSLIB+'";'+NEW_LINE;
     out += 'CFG_PATH_ICONS = "'+CFG_PATH_ICONS+'";'+NEW_LINE;
     out += '</script>'+NEW_LINE;
     out += '';
     return out;
  }