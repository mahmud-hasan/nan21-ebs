<?php

class System {

  public static function sendBeanJson($bean,$prefix="") {
    print "{ success: true, data: ".json_encode($bean)."}" ;
  }

  public static function sendSuccess() {
    print "{ success: true}";
  }

  public static function dbSafe($value) {
    return mysql_real_escape_string($value);
  }

  public static function sendActionErrorJson($error) {
    global $log;

    if (is_array($error)) {
       print "{ success: false, message: \"".urlencode($error["text"])."\"}" ;
       $log->error($error["text"]);
    }
    else {
       print "{ success: false, message: \"".urlencode($error)."\"}" ;
       $log->error($error);
    }
  }




}
?>
