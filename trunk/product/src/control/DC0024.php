<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0024 Controller: Accounting period
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0024 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCYEAR_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCYEAR_CODE like :ACCYEAR_CODE";
      $params["ACCYEAR_CODE"] = $_REQUEST["QRY_ACCYEAR_CODE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CLOSED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLOSED like :CLOSED";
      $params["CLOSED"] = $_REQUEST["QRY_CLOSED"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
}

public function doQuery() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
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
                t.ACCYEAR_CODE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_PERIOD
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.NOTES
                ,t.OPENED
                ,t.PERIODTYPE
                ,t.PREV_PERIOD_NAME
                ,t.PROCESSING
                ,t.STARTDATE
            from AC_ACC_PERIOD t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCYEAR_CODE"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CLOSED"
      ,"CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"ENDDATE"
      ,"ID"
      ,"IS_FIRST_PERIOD"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NAME"
      ,"NOTES"
      ,"OPENED"
      ,"PERIODTYPE"
      ,"PREV_PERIOD_NAME"
      ,"PROCESSING"
      ,"STARTDATE"
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
    $limit = nvl($this->getRequestParam("limit"),20);
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
                t.ID
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.ACCYEAR_CODE
                ,t.CODE
                ,t.NAME
                ,t.STARTDATE
                ,t.ENDDATE
                ,t.PREV_PERIOD_NAME
                ,t.OPENED
                ,t.CLOSED
                ,t.NOTES
                ,t.IS_FIRST_PERIOD
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.PERIODTYPE
                ,t.PROCESSING
            from AC_ACC_PERIOD t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_CODE"
     ,"ACCYEAR_CODE"
     ,"CODE"
     ,"NAME"
     ,"STARTDATE"
     ,"ENDDATE"
     ,"PREV_PERIOD_NAME"
     ,"OPENED"
     ,"CLOSED"
     ,"NOTES"
     ,"IS_FIRST_PERIOD"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"PERIODTYPE"
     ,"PROCESSING"
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
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.fetchRecord().");}
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */


public function doInsert() {
  $this->logger->debug("start: ".$this->dcName.".doInsert");
  try {
    $RECORD = array();
    $RECORD["ACCYEAR_CODE"] = $this->getRequestParam("ACCYEAR_CODE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = strtoupper($this->getRequestParam("CODE"));
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_FIRST_PERIOD"] = $this->getRequestParamBoolean("IS_FIRST_PERIOD");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PERIODTYPE"] = $this->getRequestParam("PERIODTYPE");
    $RECORD["PREV_PERIOD_NAME"] = $this->getRequestParam("PREV_PERIOD_NAME");
    $RECORD["PROCESSING"] = $this->getRequestParam("PROCESSING");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $sql = "insert into AC_ACC_PERIOD(
                 ACCYEAR_CODE
                ,CLIENT_ID
                ,CODE
                ,CREATEDBY
                ,ENDDATE
                ,ID
                ,IS_FIRST_PERIOD
                ,MODIFIEDBY
                ,NOTES
                ,PERIODTYPE
                ,PREV_PERIOD_NAME
                ,PROCESSING
                ,STARTDATE
            ) values ( 
                 :ACCYEAR_CODE
                ,:CLIENT_ID
                ,:CODE
                ,:CREATEDBY
                ,:ENDDATE
                ,:ID
                ,:IS_FIRST_PERIOD
                ,:MODIFIEDBY
                ,:NOTES
                ,:PERIODTYPE
                ,:PREV_PERIOD_NAME
                ,:PROCESSING
                ,:STARTDATE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_accperiod_id.nextval seq_val from dual")->fetchRow();
    $RECORD["ID"] = $_seq["SEQ_VAL"];
    $this->logger->debug("insert of RECORD: ".$this->logger->map2string($RECORD) );
    $this->db->Execute($stmt, $RECORD);
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("end: ".$this->dcName.".doInsert");
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doInsert */


public function doUpdate() {
  $this->logger->debug("Start: ".$this->dcName.".doUpdate");
  try {
    $RECORD = array();
    $RECORD["CODE"] = strtoupper($this->getRequestParam("CODE"));
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_FIRST_PERIOD"] = $this->getRequestParamBoolean("IS_FIRST_PERIOD");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PREV_PERIOD_NAME"] = $this->getRequestParam("PREV_PERIOD_NAME");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.doUpdate().");}
    $sql = "update AC_ACC_PERIOD set 
                 CODE=:CODE
                ,ENDDATE=:ENDDATE
                ,ID=:ID
                ,IS_FIRST_PERIOD=:IS_FIRST_PERIOD
                ,NOTES=:NOTES
                ,PREV_PERIOD_NAME=:PREV_PERIOD_NAME
                ,STARTDATE=:STARTDATE
    where 
           ID= :ID
    ";
    $stmt = $this->db->prepare($sql);
    $this->logger->debug("update of RECORD: ".$this->logger->map2string($RECORD) );
    $this->db->Execute($stmt, $RECORD);
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".doUpdate");
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doUpdate */


public function doDelete() {
  $this->logger->debug("Start: ".$this->dcName.".doDelete");
  try {
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.doDelete().");}
    $sql = "delete from AC_ACC_PERIOD where 
           ID= :ID
    ";
    $stmt = $this->db->prepare($sql);
    $this->db->Execute($stmt, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".doDelete");
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doDelete */


public function initNewRecord() {
  try {
    $RECORD["ACCYEAR_CODE"] = $this->getRequestParam("ACCYEAR_CODE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLOSED"] = $this->getRequestParam("CLOSED");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_FIRST_PERIOD"] = $this->getRequestParam("IS_FIRST_PERIOD");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["OPENED"] = $this->getRequestParam("OPENED");
    $RECORD["PERIODTYPE"] = $this->getRequestParam("PERIODTYPE");
    $RECORD["PREV_PERIOD_NAME"] = $this->getRequestParam("PREV_PERIOD_NAME");
    $RECORD["PROCESSING"] = $this->getRequestParam("PROCESSING");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0024");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCYEAR_CODE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_PERIOD
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.NOTES
                ,t.OPENED
                ,t.PERIODTYPE
                ,t.PREV_PERIOD_NAME
                ,t.PROCESSING
                ,t.STARTDATE
            from AC_ACC_PERIOD t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCYEAR_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLOSED" => array("DATA_TYPE" => "BOOLEAN")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ENDDATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_FIRST_PERIOD" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"OPENED" => array("DATA_TYPE" => "BOOLEAN")
  ,"PERIODTYPE" => array("DATA_TYPE" => "STRING")
  ,"PREV_PERIOD_NAME" => array("DATA_TYPE" => "STRING")
  ,"PROCESSING" => array("DATA_TYPE" => "STRING")
  ,"STARTDATE" => array("DATA_TYPE" => "DATE")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCYEAR_CODE"] )) { $RECORD["ACCYEAR_CODE"] = $this->getRequestParam("ACCYEAR_CODE"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ENDDATE"] )) { $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_FIRST_PERIOD"] = $this->getRequestParamBoolean("IS_FIRST_PERIOD");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
    $RECORD["OPENED"] = $this->getRequestParamBoolean("OPENED");
     if (isset($_REQUEST["PERIODTYPE"] )) { $RECORD["PERIODTYPE"] = $this->getRequestParam("PERIODTYPE"); }
     if (isset($_REQUEST["PREV_PERIOD_NAME"] )) { $RECORD["PREV_PERIOD_NAME"] = $this->getRequestParam("PREV_PERIOD_NAME"); }
     if (isset($_REQUEST["PROCESSING"] )) { $RECORD["PROCESSING"] = $this->getRequestParam("PROCESSING"); }
     if (isset($_REQUEST["STARTDATE"] )) { $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE"); }
} /* end function readRequest  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
  try {
    $RECORD = array();
    $this->readRequest($RECORD);
    if ($pName == "OpenAccPeriod") { $this->callProc_OpenAccPeriod($RECORD); }
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
  }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
  }
} /* end function callProcedure */


private function callProc_OpenAccPeriod(&$RECORD) {
  $this->logger->debug("Start: ".$this->dcName.".callProc_OpenAccPeriod");


  $stmt = $this->db->PrepareSP("BEGIN ps_acc.open_accperiod(p_accperiod_id => :p_accperiod_id); END;");
  $this->db->InParameter($stmt,$RECORD["ID"] ,"p_accperiod_id");
  $this->logger->debug("In-Parameters: ".$this->logger->map2string($RECORD) );
  $this->db->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".$this->logger->map2string($RECORD) );

  $this->logger->debug("End: ".$this->dcName.".callProc_OpenAccPeriod");
} /* end function callProc_OpenAccPeriod  */

}
?>
