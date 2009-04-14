<?php


  $_n21_tns_ = array();

  $_n21_tns_["NAN21"] = array(
                       "DB_TNS" => "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=toshiba2)(PORT=1521))(CONNECT_DATA=(SID=XE)))"
                      ,"DB_USER" => "NAN21"
                      ,"DB_PASSWORD" => "NAN21");

  if (isset($_REQUEST["_p_action"]) && $_REQUEST["_p_action"] == "login" && isset($_REQUEST["_p_sid"])  ) {
    $_SESSION["DB_SID"] = $_REQUEST["_p_sid"];
    if (!array_key_exists($_SESSION["DB_SID"], $_n21_tns_)) {
      print "INVALID_SERVICE_NAME";
      exit;
    }
  }

  //define('DB_SCHEMA','XE');
  //define('DB_URL','toshiba2');
  if (!empty($_SESSION["DB_SID"])) {
    define('DB_USER',$_n21_tns_[$_SESSION["DB_SID"]]["DB_USER"]);
    define('DB_PASSWORD',$_n21_tns_[$_SESSION["DB_SID"]]["DB_PASSWORD"]);
    define('DB_TNS',$_n21_tns_[$_SESSION["DB_SID"]]["DB_TNS"]);

  }


?>