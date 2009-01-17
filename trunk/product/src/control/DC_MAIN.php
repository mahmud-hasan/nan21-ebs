<?php

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC_MAIN extends Controller {

  public function doCustomAction($customAction) {
     if ($customAction == "loadMenu") {
        $this->loadMenu($this->getRequestParam("node"));
     }
     if ($customAction == "changeLanguage") {
        $this->changeLanguage();
     }
     if ($customAction == "logout") {
        $this->doLogout();
     }
     if ($customAction == "lockSession") {
        $this->doLockSession();
     }
     

  }

  private function loadMenu($node) {
    $user = $this->getSessionParam("user");
    $lang = $user["language"];
    $module = (!empty($_REQUEST["module"]))?$_REQUEST["module"]:'MAIN';
    if ($node == "root") {
      $sql = "select m.*, mt.translation menu_title
              from menuitem m , menuitem_trl mt
             where m.id = mt.menuitem_id
               and m.menubar_code = '".$module."'
               and m.menuitem_id is null
               and m.active = 'Y'
               and mt.lang = '".$lang."'
               and not exists (
                 select 1
                   from menuitem_role mr 
                  where mr. menuitem_id = m.id 
                    and mr.role_name not in (select ur.role_name 
                                               from sys_user_role ur 
                                              where ur.user_id = (select u.id from sys_user u where u.login_code ='".$user["userName"]."')  )
               )
             order by m.position";
    } else {
      $sql = "select m.*, mt.translation menu_title
              from menuitem m , menuitem_trl mt
             where m.id = mt.menuitem_id
               and m.menubar_code = '".$module."'
               and m.active = 'Y'
               and m.menuitem_id = '".$node."'
               and mt.lang = '".$lang."'
               and not exists (
                 select 1 
                   from menuitem_role mr 
                  where mr. menuitem_id = m.id 
                    and mr.role_name not in (select ur.role_name 
                                               from sys_user_role ur 
                                              where ur.user_id = (select u.id from sys_user u where u.login_code ='".$user["userName"]."')  )
               )
             order by m.position";
    }
    $rs = $this->db->Execute($sql);
    $out = "";
    while($row=$rs->FetchRow()) {
      $out .= ($out!="")?",":"";
      $leaf = ($row["LINK"]!="")?", \"leaf\":\"true\"":"";
      $out .= "{\"text\":\"".$row["MENU_TITLE"]."\",\"id\":\"".$row["ID"]."\",\"cls\":\"folder\"".$leaf.",\"guiID\":\"".$row["LINK"]."\"}";
    }
    print "[".$out."]";
  }

  
  private function changeLanguage() {
   if ($this->getRequestParam("_p_lang") != null) {
      $user = $this->getSessionParam("user");
      $user["language"] = $this->getRequestParam("_p_lang");
      $this->setSessionParam("user", $user);
      print '{ success: true, newLanguage:"'.$user["language"].'" , message: "OK"}' ;
       exit;
     }
  }

  private function doLogout() {
     unset($_SESSION['user']);
     print '{ success: true, message: "OK"}' ;
      // exit;
  }

  private function doLockSession() {
     unset($_SESSION['user']);
     print '{ success: true, message: "OK"}' ;
      // exit;
  }



}



?>