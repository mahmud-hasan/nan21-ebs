<?php


class Servlet {

  protected $db;
  protected $logger;

  public function setDbConnection(&$dbConnection) {
    $this->db = $dbConnection;
  }
  public function getRequest() {
    return $_REQUEST;
  }
  public function getRequestParam($p) {
    return isset($_REQUEST[$p])?$_REQUEST[$p]:null;
  }
  function getRequestParamBoolean($attr) {
    return (isset($_REQUEST[$attr]) &&  ($_REQUEST[$attr]=='on'||strtoupper($_REQUEST[$attr])=='Y'||strtoupper($_REQUEST[$attr])=='TRUE'||$_REQUEST[$attr]=='1')  )?'Y':'N';
  }

  public function getSession() {
    return $_SESSION;
  }
  public function getSessionParam($p) {
    return isset($_SESSION[$p])?$_SESSION[$p]:null;
  }

  public function setSessionParam($p, $v) {
    $_SESSION[$p] = $v;
  }
  public function setSessionAttr($p, &$v) {
    $_SESSION[$p] = $v;
  }

  public function setLogger(&$l) {
    $this->logger = $l;
  }

}




?>