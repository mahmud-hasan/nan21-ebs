<?php

  define("N21_APPLICATION","1"); 
  session_start();
  require_once("properties.php");
  require_once(PATH_CTRL_FRMWK."/System.php");
  require_once(PATH_LOGGER."/Logger.php");
  require_once(PATH_ADODB."/adodb.inc.php");
  require_once(PATH_ADODB."/adodb-exceptions.inc.php");
  require_once(PATH_CTRL_FRMWK."/MainServlet.php");
  //require_once(INCLUDES."/UserContext.php");
  
  if (!empty($_REQUEST["_p_client"]) && $_REQUEST["_p_client"] == "flex")  {
   // session_id($_REQUEST["PHPSESSID"]);
    session_id($_REQUEST["_p_sessionid"]);
  }


  

  $log = Logger::getInstance();
  $db = null;
  $action = (!empty($_REQUEST["_p_action"]))? $_REQUEST["_p_action"]:"loadGUI";
  if ($action == "loadGUI") {
    $guiId =  (!empty($_REQUEST["guiID"])) ? $_REQUEST["guiID"] : APPLICATION_ENTRY_UI;
  }

  $log->debug($log->map2string($_REQUEST));
  try {

    $db=null;

    $mainServlet = new MainServlet();
    $mainServlet->setDbConnection($db);
    $mainServlet->setLogger($log);
    $mainServlet->setAction($action);
    $mainServlet->setGuiId($guiId);

    $mainServlet->run();

    if ($log!=null) {$log->close();}
    if ($db!=null) {$db->close();}

  } catch(Exception $e) {
    if ($log!=null) {$log->close();}
    if ($db!=null) {$db->close();}
    throw new Exception($e);
  }



  function nvl($v, $a) {
    return ($v!=null)?$v:$a;
  }



  /*  @param: $className: simple class name ( ex Foo )
              or including namespace ( ex model.entity.Foo)
   */
  function n21ClassLoader($className) {
    //TODO: check namespace
    // if no namespace, try this order:
    $paths = array();
    $paths[0] = "model/entity/";
    $paths[1] = "model/util/";

    if(file_exists(dirname(__FILE__). "/".$paths[0]."{$className}.php") && include_once(dirname(__FILE__).  "/".$paths[0]."{$className}.php")) {
        return true;
      } else {
        if(file_exists(dirname(__FILE__). "/".$paths[1]."{$className}.php") && include_once(dirname(__FILE__).  "/".$paths[1]."{$className}.php")) {
          return true;
          } else {
            trigger_error("Could not load class '{$className}' from file '{$className}.php'", E_USER_ERROR);
            return false;
          }
      }
  }

  spl_autoload_register("n21ClassLoader");
?>
