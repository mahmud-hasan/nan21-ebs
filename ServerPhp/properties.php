<?php
  if (!defined("N21_APPLICATION")) { exit; }

  define('PRODUCT_VERSION','TRUNK');
  
  # Database connection settings

  define('DB_ENGINE','oracle');
  define('DB_DRIVER','oci8');
  include("properties_oracle.php");

  #file system

  define('PATH'                , dirname(__FILE__));                 //path to application root on file system
  define('PATH_SERVICE'        , dirname(__FILE__)."/src/service"); //path to custom business logic classes
  define('PATH_LIB'            , 'D:\work\php\_lib');               //path to libraries /lib
  define('PATH_N21LIB'     	   , 'D:\work\php\n21PhpLib');
  define('PATH_ADODB'          , PATH_LIB.'/adodb/5.04a');

  #web
  define('SERVER_NAME'         , $_SERVER['SERVER_NAME']);

  #authentication

  define('USER_AUTH_MODE', 'DB' );  // possible values: 'DB' users stored in database table, 'LDAP'
  define('DO_DC_PERMISSION_CHECK', 'Y' );  // possible values: 'Y','N' -> execute the data-control permission check in MainServlet

  #miscellaneous
  date_default_timezone_set("Europe/Bucharest");
  define('LOG_LEVEL', 3 ); //0:NONE, 1:ERROR, 2:INFO, 3:DEBUG

?>