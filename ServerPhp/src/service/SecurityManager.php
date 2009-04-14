<?php

 class SecurityManager {

   public static function authenticateUserFromDb(&$db, $pUserName, $pUserPassword) {
      try {
        $stmt = $db->PrepareSP("BEGIN pk_session.do_user_login(:usr, :pswd, :ip); END;");
        $db->InParameter($stmt, $pUserName, 'usr');
        $db->InParameter($stmt, $pUserPassword, 'pswd');
        $db->InParameter($stmt, $_SERVER['REMOTE_ADDR'], 'ip');
        $db->Execute($stmt);
        return true;
      } catch (Exception $e) {
        return false;
      }
   }

   public static function authenticateUserFromLdap($pUserName, $pUserPassword) {
      return true;
   }

   public static function confirmAuthenticatedRequest() {
   	  return true;
   }
 }
?>