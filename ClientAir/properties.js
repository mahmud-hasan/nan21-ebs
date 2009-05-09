



//Global settings
CFG_PRODUCT_VERSION = 'TRUNK';
CFG_IS_ADOBEAIR = true;

CFG_CLIENT_SERVER_PROTOCOL = 'http';
CFG_CLIENT_SERVER_NAME = 'localhost';
CFG_CLIENT_SERVER_PORT = '';
CFG_CLIENT_SERVER_PATH = '/n21eBSClientAir';
CFG_DEFAULT_LANGUAGE = 'ro';

CFG_PATH_EXTJS = '/lib/Extjs/2.2';  //default lib    http://localhost/_lib/Extjs/2.2
CFG_PATH_JSLIB = '/lib/n21ExtjsLib';  //default lib     //http://localhost/_lib/n21ExtjsLib

CFG_AUTHSERVER_URL = 'http://localhost/n21eBusinessSuite/product/src/frmMain.php';
CFG_BACKENDSERVER_URL = 'http://localhost/n21eBusinessSuite/product/src/frmMain.php';

CFG_CLIENT_URL =  CFG_CLIENT_SERVER_PROTOCOL + '://'+CFG_CLIENT_SERVER_NAME+((CFG_CLIENT_SERVER_PORT)?':'+CFG_CLIENT_SERVER_PORT:'')+ CFG_CLIENT_SERVER_PATH;
CFG_PATH_ICONS = CFG_CLIENT_URL+'/resource/icon';  //default lib    http://localhost/_lib/Extjs/2.2



// alert(CFG_CLIENT_URL);


