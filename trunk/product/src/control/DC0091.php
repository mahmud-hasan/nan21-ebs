<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0091 Controller: Oracle sessions
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0091 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_SQL_TEXT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.SQL_TEXT like :SQL_TEXT";
      $params["SQL_TEXT"] = $_REQUEST["QRY_SQL_TEXT"];
    }
}

public function doQuery() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),40);
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "type='USER'";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                t.CLIENT_INFO
                ,t.LOGON_TIME
                ,t.MACHINE
                ,t.MODULE
                ,t.OSUSER
                ,t.PROCESS
                ,t.PROGRAM
                ,t.SADDR
                ,t.SCHEMANAME
                ,t.SERIAL_
                ,t.SERVER
                ,t.SERVICE_NAME
                ,t.SID
                ,t.SQL_ADDRESS
                ,t.SQL_ID
                ,t.SQL_TEXT
                ,t.STATE
                ,t.STATUS
                ,t.TERMINAL
                ,t.TYPE
                ,t.USERNAME
            from V_ORCL_SESSION t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLIENT_INFO"
      ,"LOGON_TIME"
      ,"MACHINE"
      ,"MODULE"
      ,"OSUSER"
      ,"PROCESS"
      ,"PROGRAM"
      ,"SADDR"
      ,"SCHEMANAME"
      ,"SERIAL_"
      ,"SERVER"
      ,"SERVICE_NAME"
      ,"SID"
      ,"SQL_ADDRESS"
      ,"SQL_ID"
      ,"SQL_TEXT"
      ,"STATE"
      ,"STATUS"
      ,"TERMINAL"
      ,"TYPE"
      ,"USERNAME"
      );
    $dataOut = $this->serializeCursor($rs,$columns, $this->query_data_format);
    if ($this->query_data_format == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doQuery  */


public function doExport() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),40);
    $groupBy = (!empty($_REQUEST["groupBy"]))?$_REQUEST["groupBy"]:"";
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                t.SID
                ,t.SERIAL_
                ,t.USERNAME
                ,t.STATUS
                ,t.MACHINE
                ,t.TERMINAL
                ,t.OSUSER
                ,t.PROGRAM
                ,t.TYPE
                ,t.LOGON_TIME
                ,t.SADDR
                ,t.SERVER
                ,t.SCHEMANAME
                ,t.PROCESS
                ,t.SQL_ADDRESS
                ,t.SQL_ID
                ,t.MODULE
                ,t.CLIENT_INFO
                ,t.STATE
                ,t.SERVICE_NAME
                ,t.SQL_TEXT
            from V_ORCL_SESSION t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "SID"
     ,"SERIAL_"
     ,"USERNAME"
     ,"STATUS"
     ,"MACHINE"
     ,"TERMINAL"
     ,"OSUSER"
     ,"PROGRAM"
     ,"TYPE"
     ,"LOGON_TIME"
     ,"SADDR"
     ,"SERVER"
     ,"SCHEMANAME"
     ,"PROCESS"
     ,"SQL_ADDRESS"
     ,"SQL_ID"
     ,"MODULE"
     ,"CLIENT_INFO"
     ,"STATE"
     ,"SERVICE_NAME"
     ,"SQL_TEXT"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    if ($this->getExpFormat() == "csv" ) {
      $dataOut = $this->serializeCursor($rs,$columns,"csv");
    } else {
      $dataOut = $this->serializeCursor($rs,$columns,"xml");
      $dataOut = "<records>".$dataOut."</records>";
      $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
      $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
      $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
      $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
      $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    }
    $this->beginExport();
    print $dataOut;
    $this->endExport();
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doExport  */


public function fetchRecord() {
  try {
    $RECORD = array();
    $RECORD["SERIAL_"] = $this->getRequestParam("SERIAL_");
    if (empty($RECORD["SERIAL_"])) { throw new Exception("Missing value for primary key field SERIAL_ in DC0091.fetchRecord().");}
    $RECORD["SID"] = $this->getRequestParam("SID");
    if (empty($RECORD["SID"])) { throw new Exception("Missing value for primary key field SID in DC0091.fetchRecord().");}
    $pkArray = array("SERIAL_" => $RECORD["SERIAL_"],"SID" => $RECORD["SID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.CLIENT_INFO
                ,t.LOGON_TIME
                ,t.MACHINE
                ,t.MODULE
                ,t.OSUSER
                ,t.PROCESS
                ,t.PROGRAM
                ,t.SADDR
                ,t.SCHEMANAME
                ,t.SERIAL_
                ,t.SERVER
                ,t.SERVICE_NAME
                ,t.SID
                ,t.SQL_ADDRESS
                ,t.SQL_ID
                ,t.SQL_TEXT
                ,t.STATE
                ,t.STATUS
                ,t.TERMINAL
                ,t.TYPE
                ,t.USERNAME
            from V_ORCL_SESSION t
         where 
           t.SERIAL_= :SERIAL_
           t.SID= :SID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CLIENT_INFO" => array("DATA_TYPE" => "STRING")
  ,"LOGON_TIME" => array("DATA_TYPE" => "STRING")
  ,"MACHINE" => array("DATA_TYPE" => "STRING")
  ,"MODULE" => array("DATA_TYPE" => "STRING")
  ,"OSUSER" => array("DATA_TYPE" => "STRING")
  ,"PROCESS" => array("DATA_TYPE" => "STRING")
  ,"PROGRAM" => array("DATA_TYPE" => "STRING")
  ,"SADDR" => array("DATA_TYPE" => "STRING")
  ,"SCHEMANAME" => array("DATA_TYPE" => "STRING")
  ,"SERIAL_" => array("DATA_TYPE" => "STRING")
  ,"SERVER" => array("DATA_TYPE" => "STRING")
  ,"SERVICE_NAME" => array("DATA_TYPE" => "STRING")
  ,"SID" => array("DATA_TYPE" => "STRING")
  ,"SQL_ADDRESS" => array("DATA_TYPE" => "STRING")
  ,"SQL_ID" => array("DATA_TYPE" => "STRING")
  ,"SQL_TEXT" => array("DATA_TYPE" => "STRING")
  ,"STATE" => array("DATA_TYPE" => "STRING")
  ,"STATUS" => array("DATA_TYPE" => "STRING")
  ,"TERMINAL" => array("DATA_TYPE" => "STRING")
  ,"TYPE" => array("DATA_TYPE" => "STRING")
  ,"USERNAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_INFO"] )) { $RECORD["CLIENT_INFO"] = $this->getRequestParam("CLIENT_INFO"); }
     if (isset($_REQUEST["LOGON_TIME"] )) { $RECORD["LOGON_TIME"] = $this->getRequestParam("LOGON_TIME"); }
     if (isset($_REQUEST["MACHINE"] )) { $RECORD["MACHINE"] = $this->getRequestParam("MACHINE"); }
     if (isset($_REQUEST["MODULE"] )) { $RECORD["MODULE"] = $this->getRequestParam("MODULE"); }
     if (isset($_REQUEST["OSUSER"] )) { $RECORD["OSUSER"] = $this->getRequestParam("OSUSER"); }
     if (isset($_REQUEST["PROCESS"] )) { $RECORD["PROCESS"] = $this->getRequestParam("PROCESS"); }
     if (isset($_REQUEST["PROGRAM"] )) { $RECORD["PROGRAM"] = $this->getRequestParam("PROGRAM"); }
     if (isset($_REQUEST["SADDR"] )) { $RECORD["SADDR"] = $this->getRequestParam("SADDR"); }
     if (isset($_REQUEST["SCHEMANAME"] )) { $RECORD["SCHEMANAME"] = $this->getRequestParam("SCHEMANAME"); }
     if (isset($_REQUEST["SERIAL_"] )) { $RECORD["SERIAL_"] = $this->getRequestParam("SERIAL_"); }
     if (isset($_REQUEST["SERVER"] )) { $RECORD["SERVER"] = $this->getRequestParam("SERVER"); }
     if (isset($_REQUEST["SERVICE_NAME"] )) { $RECORD["SERVICE_NAME"] = $this->getRequestParam("SERVICE_NAME"); }
     if (isset($_REQUEST["SID"] )) { $RECORD["SID"] = $this->getRequestParam("SID"); }
     if (isset($_REQUEST["SQL_ADDRESS"] )) { $RECORD["SQL_ADDRESS"] = $this->getRequestParam("SQL_ADDRESS"); }
     if (isset($_REQUEST["SQL_ID"] )) { $RECORD["SQL_ID"] = $this->getRequestParam("SQL_ID"); }
     if (isset($_REQUEST["SQL_TEXT"] )) { $RECORD["SQL_TEXT"] = $this->getRequestParam("SQL_TEXT"); }
     if (isset($_REQUEST["STATE"] )) { $RECORD["STATE"] = $this->getRequestParam("STATE"); }
     if (isset($_REQUEST["STATUS"] )) { $RECORD["STATUS"] = $this->getRequestParam("STATUS"); }
     if (isset($_REQUEST["TERMINAL"] )) { $RECORD["TERMINAL"] = $this->getRequestParam("TERMINAL"); }
     if (isset($_REQUEST["TYPE"] )) { $RECORD["TYPE"] = $this->getRequestParam("TYPE"); }
     if (isset($_REQUEST["USERNAME"] )) { $RECORD["USERNAME"] = $this->getRequestParam("USERNAME"); }
} /* end function readRequest  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
  try {
    $RECORD = array();
    $this->readRequest($RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
  }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
  }
} /* end function callProcedure */

}
?>
