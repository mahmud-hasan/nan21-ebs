<?php
  if (!defined("N21_APPLICATION")) { exit; }

  define('PRODUCT_VERSION','0.5');
  
  # Database connection settings

  define('DB_ENGINE','oracle');
  define('DB_DRIVER','oci8');

  include("properties_oracle.php");


  #file system

  define('PATH'                , dirname(__FILE__));                 //path to application root on file system
  define('INCLUDES'            , dirname(__FILE__)."/_inc" );        //path to include files on file system
  define('SERVICE'             , dirname(__FILE__)."/_inc/service"); //path to custom business logic classes
  define('PATH_PHPLIB'         , 'D:/work/php/_lib');                //path to libraries /lib
  //define('PATH_PHPLIB'         , PATH.'/_lib');                    //path to libraries /lib
  define('PATH_CTRL_FRMWK'     , PATH_PHPLIB.'/n21PhpCtrl');
  define('PATH_LOGGER'         , PATH_PHPLIB.'/n21Logger/0.1');
  define('PATH_ADODB'          , PATH_PHPLIB.'/adodb/5.04a');

  #web

  define('SERVER_NAME'         , $_SERVER['SERVER_NAME']);
  define('WWW'                 , '/n21eBusinessSuite/product/src');   //web path to application root
  //define('WWW'                 , '/n21eBusinessSuiteRelease/0.4/product/src');   //web path to application root
  define('PATH_JS'             , 'http://'.SERVER_NAME.'/'.WWW.'/_static/js');
  define('PATH_JSLIB'          , 'http://'.SERVER_NAME.'/_lib/n21ExtjsLib');
  define('PATH_EXTJS'          , 'http://'.SERVER_NAME.'/_lib/Extjs/2.2');
  define('PATH_EXTJS_UX'       , 'http://'.SERVER_NAME.'/_lib/Extjs/custom');  // custom components
  
  #authentication
  
  define('USER_AUTH_MODE', 'DB' );  // possible values: 'DB' users stored in database table, 'LDAP'
  define('DO_DC_PERMISSION_CHECK', 'Y' );  // possible values: 'Y','N' -> execute the data-control permission check in MainServlet

  #miscellaneous

  date_default_timezone_set("Europe/Bucharest");
  define('APPLICATION_ENTRY_UI','DC_MAIN');

  
  

?>