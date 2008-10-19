<?php

 class SecurityManager {



   public static function authenticateUserFromDb(&$db, $pUserName, $pUserPassword) {

      $sql = "select * from sys_user where login_code = :lc and login_password = :lp";
      $params = array("lc"=>$pUserName,"lp"=>$pUserPassword);
      $rs = $db->Execute($sql, $params);
      if ($row = $rs->FetchRow()) {
         return true; 
      } else { 
         return false; 
      }

   }


   public static function authenticateUserFromLdap($pUserName, $pUserPassword) {

      return true;

   }
 
 }
?>