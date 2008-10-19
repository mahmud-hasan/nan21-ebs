<?php

require_once(dirname(__FILE__)."/Servlet.php");

class MainServlet extends Servlet{


  private $action;
  private $guiId;



  public function setAction(&$a) {
    $this->action = $a;
  }
  public function setGuiId(&$g) {
    $this->guiId = $g;
  }



  public function run() {
    try {
      $this->doDbConnection();
      $this->logger->debug("MainServlet.run" ) ;
      if ($this->getSessionParam("user") == null ) {   // no active session
        $this->logger->debug( "session[user] is null" ) ;
        if ($this->getRequestParam("_p_usr") == null || $this->getRequestParam("_p_psw") == null ) {  // and request is not a login request
          throw new Exception("NO_ACTIVE_SESSION");
        } else {

           $this->logger->debug("before authenticateUser") ;
           $this->authenticateUser($this->getRequestParam("_p_usr"), $this->getRequestParam("_p_psw"));
           $this->logger->debug("after authenticateUser") ;
           $usr = array();
           $usr["userName"] = $this->getRequestParam("_p_usr");
           $usr["language"] = "en";
           $this->setSessionParam("user",$usr);

           $this->logger->debug($this->logger->map2string($usr)) ;
            // if login comes from extjs client send a confirm message to close the loginWindow
            // if it comes from the main html login form the action is flogin to differentiate. Is no need to send this confirm

           if ($this->getRequestParam("_p_action") == "login") {
               print '{ success: true, message: "OK"}' ;
               exit;
           }
        }
      }

      $this->prepareDbSession();
      $this->loadUserPreferences();
      $this->processRequest();
    }
    catch(Exception $e) {
       if ($e->getMessage() == "AUTH_INVALID_CREDENTIALS" && $this->action != "login") {throw new Exception("AUTH_INVALID_CREDENTIALS");}
       else {
         if ($this->action == "loadGUI") {
            print "<br><br><center><div style='font-family:tahoma;color:red;'>".$e->getMessage()."</div></center>";
         } else {
            System::sendActionErrorJson($e->getMessage() );
         }
       
       }

    }
  }




  // establish database connection
  private function doDbConnection() {
    if ($this->db == null) {
      $this->db = ADONewConnection(DB_DRIVER);
      $this->db->NLS_DATE_FORMAT = "DD.MM.YYYY";
      $this->db->debug = false;
      if (defined('DB_TNS')) {
        $this->db->Connect(DB_TNS, DB_USER, DB_PASSWORD) ;
      }else {
        $this->db->Connect(DB_URL,DB_USER, DB_PASSWORD,DB_SCHEMA) ;
      }
      $ADODB_FETCH_MODE = ADODB_FETCH_ASSOC;
    }
  }




  private function authenticateUser($pUserName, $pPassword) {
    if (empty($pUserName) || empty($pPassword) ) {
      throw new Exception("AUTH_INVALID_CREDENTIALS");
    } else {
      require_once(SERVICE."/SecurityManager.php");
      if (USER_AUTH_MODE=="DB") {
        if (!SecurityManager::authenticateUserFromDb($this->db, $pUserName, $pPassword)) {
            throw new Exception("AUTH_INVALID_CREDENTIALS");
        };
      } else {
        if (SecurityManager::authenticateUserFromLdap($pUserName, $pPassword)) {
           throw new Exception("AUTH_INVALID_CREDENTIALS");
        };
      }
    }
  }




  private function loadUserPreferences() {
     if (  $this->getSession("user") == null  ) {
           throw new Exception("NO_ACTIVE_SESSION");
         }

    // fetch preferences
    $this->setSessionParam("DATE_FORMAT", "d.m.Y");
    //$this->session["user"]["language"] = "en";
    define('DATE_FORMAT', "d.m.Y");
    define('ORCL_DATE_FORMAT', "DD.MM.YYYY");
  }





  private function prepareDbSession() {
    $sUser = $this->getSessionParam("user");
    

    if (  $sUser == null || empty($sUser["userName"])) { throw new Exception("NO_ACTIVE_SESSION"); }
    else {
      $this->logger->debug("prepareDbSession, user:".$sUser["userName"]." language:".$sUser["language"]);
      $stmt = $this->db->PrepareSP("BEGIN pk_session.setUser(:usr); pk_session.setLang(:lang); END;");
      $this->db->InParameter($stmt, $sUser["userName"], 'usr');
      $this->db->InParameter($stmt, $sUser["language"], 'lang');
      $this->db->Execute($stmt);
    }
  }




  private function processRequest() {
    if ($this->action == "loadGUI") {
      require_once(PATH."/view/".$this->guiId.".php");
    } else {
      $this->processDataRequest();
    }
  }





  private function processDataRequest() {
    $action = $this->action;
    if ( $this->getRequestParam("_p_form") != null ) {
      require_once(PATH."/control/".$this->getRequestParam("_p_form").".php");
      $class = new ReflectionClass( $this->getRequestParam("_p_form") );
      $frm = $class->newInstance();
      $frm->setDbConnection($this->db);

      $frm->setLogger($this->logger);
      $frm->setDcName ($this->getRequestParam("_p_form"));
      if ($action == "fetch" ) {
        $frm->setQueryDataFormat($this->getRequestParam("_p_data_format") );
        $frm->doQuery();
      }elseif($action == "insert" ) {
        $frm->doInsert();
      }elseif($action == "update" ) {
        $frm->doUpdate();
      }elseif($action == "fetchRecord" ) {
        $frm->fetchRecord();
      }elseif($action == "call_proc" ) {
        $frm->callProcedure( $this->getRequestParam("_p_proc") );
      }elseif($action == "delete" ) {
        $frm->doDelete();
      }elseif($action == "export" ) {
        $frm->setExpFormat(( $this->getRequestParam("_p_exp_format") != null )?$this->getRequestParam("_p_exp_format"):"html");
        $frm->doExport();
      }elseif($action == "initRec" ) {
        $frm->initNewRecord();
      }elseif($action == "custom" ) {
        $frm->doCustomAction(( $this->getRequestParam("_p_custom_action") != null )?$this->getRequestParam("_p_custom_action"):"");
      }
    }

  }



}
?>