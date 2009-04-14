<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0091 Controller: Oracle sessions
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0091 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_SQL_TEXT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.SQL_TEXT like :SQL_TEXT";
      $params["SQL_TEXT"] = $_REQUEST["QRY_SQL_TEXT"];
    }
}

public function doQuery() {
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
    $rs = $this->getDbConn()->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
    $rs = $this->getDbConn()->Execute($sql, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    } else {
      $columns = array_keys($this->fields);
    }
    if ($this->getDataFormatExport() == "csv" ) {
      $dataOut = $this->serializeCursor($rs,$columns,"csv");
    } else {
      $dataOut = $this->serializeCursor($rs,$columns,"xml");
      $dataOut = "<records>".$dataOut."</records>";
      $dataOut = "<queryParams>".$this->serializeMap($params,"xml")."</queryParams>".$dataOut;
      $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fields,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fields,false)."</columnDef>".$dataOut;
      $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
      $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
      $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    }
    $this->beginExport();
    print $dataOut;
    $this->endExport();
} /* end function doExport  */

public function fetchRecord() {
    $this->record["SERIAL_"] = $this->getRequestParam("SERIAL_");
    if (empty($this->record["SERIAL_"])) { throw new Exception("Missing value for primary key field SERIAL_ in DC0091.fetchRecord().");}
    $this->record["SID"] = $this->getRequestParam("SID");
    if (empty($this->record["SID"])) { throw new Exception("Missing value for primary key field SID in DC0091.fetchRecord().");}
    $pkArray = array("SERIAL_" => $this->record["SERIAL_"],"SID" => $this->record["SID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
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
    $rs = $this->getDbConn()->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    CollectionUtils::copyMapValues($record, $row);
} /* end function findByPk  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
    $this->populateRecordFromRequest();
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function _initFields() {
  $this->fields = array(
  "CLIENT_INFO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"LOGON_TIME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MACHINE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODULE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"OSUSER" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROCESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROGRAM" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SADDR" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SCHEMANAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SERIAL_" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SERVER" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SERVICE_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SID" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SQL_ADDRESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SQL_ID" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SQL_TEXT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STATE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STATUS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TERMINAL" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"USERNAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
