<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0023 Controller: Accounting year
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0023 extends Controller {


private function preQuery(&$params, &$where) {
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
    if (!empty($_REQUEST["QRY_OPENED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.OPENED like :OPENED";
      $params["OPENED"] = $_REQUEST["QRY_OPENED"];
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
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_YEAR
                ,t.NOTES
                ,t.OPENED
                ,t.PREV_YEAR_CODE
                ,t.STARTDATE
            from AC_ACC_YEAR t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CLOSED"
      ,"CODE"
      ,"ENDDATE"
      ,"ID"
      ,"IS_FIRST_YEAR"
      ,"NOTES"
      ,"OPENED"
      ,"PREV_YEAR_CODE"
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
                ,t.CODE
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.STARTDATE
                ,t.ENDDATE
                ,t.PREV_YEAR_CODE
                ,t.OPENED
                ,t.CLOSED
                ,t.NOTES
                ,t.IS_FIRST_YEAR
            from AC_ACC_YEAR t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CODE"
     ,"CLIENT_ID"
     ,"CLIENT_CODE"
     ,"STARTDATE"
     ,"ENDDATE"
     ,"PREV_YEAR_CODE"
     ,"OPENED"
     ,"CLOSED"
     ,"NOTES"
     ,"IS_FIRST_YEAR"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0023.fetchRecord().");}
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
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_FIRST_YEAR"] = $this->getRequestParamBoolean("IS_FIRST_YEAR");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PREV_YEAR_CODE"] = $this->getRequestParam("PREV_YEAR_CODE");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $sql = "insert into AC_ACC_YEAR(
                 CLIENT_ID
                ,CODE
                ,ENDDATE
                ,ID
                ,IS_FIRST_YEAR
                ,NOTES
                ,PREV_YEAR_CODE
                ,STARTDATE
            ) values ( 
                 :CLIENT_ID
                ,:CODE
                ,:ENDDATE
                ,:ID
                ,:IS_FIRST_YEAR
                ,:NOTES
                ,:PREV_YEAR_CODE
                ,:STARTDATE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_ACCYEAR_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_FIRST_YEAR"] = $this->getRequestParamBoolean("IS_FIRST_YEAR");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PREV_YEAR_CODE"] = $this->getRequestParam("PREV_YEAR_CODE");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0023.doUpdate().");}
    $sql = "update AC_ACC_YEAR set 
                 CLIENT_ID=:CLIENT_ID
                ,CODE=:CODE
                ,ENDDATE=:ENDDATE
                ,ID=:ID
                ,IS_FIRST_YEAR=:IS_FIRST_YEAR
                ,NOTES=:NOTES
                ,PREV_YEAR_CODE=:PREV_YEAR_CODE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0023.doDelete().");}
    $sql = "delete from AC_ACC_YEAR where 
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
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLOSED"] = $this->getRequestParam("CLOSED");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_FIRST_YEAR"] = $this->getRequestParam("IS_FIRST_YEAR");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["OPENED"] = $this->getRequestParam("OPENED");
    $RECORD["PREV_YEAR_CODE"] = $this->getRequestParam("PREV_YEAR_CODE");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0023");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_YEAR
                ,t.NOTES
                ,t.OPENED
                ,t.PREV_YEAR_CODE
                ,t.STARTDATE
            from AC_ACC_YEAR t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLOSED" => array("DATA_TYPE" => "BOOLEAN")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"ENDDATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_FIRST_YEAR" => array("DATA_TYPE" => "BOOLEAN")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"OPENED" => array("DATA_TYPE" => "BOOLEAN")
  ,"PREV_YEAR_CODE" => array("DATA_TYPE" => "STRING")
  ,"STARTDATE" => array("DATA_TYPE" => "DATE")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["ENDDATE"] )) { $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_FIRST_YEAR"] = $this->getRequestParamBoolean("IS_FIRST_YEAR");
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
    $RECORD["OPENED"] = $this->getRequestParamBoolean("OPENED");
     if (isset($_REQUEST["PREV_YEAR_CODE"] )) { $RECORD["PREV_YEAR_CODE"] = $this->getRequestParam("PREV_YEAR_CODE"); }
     if (isset($_REQUEST["STARTDATE"] )) { $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE"); }
} /* end function readRequest  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
  try {
    $RECORD = array();
    $this->readRequest($RECORD);
    if ($pName == "OpenYear") { $this->callProc_OpenYear($RECORD); }
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
  }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
  }
} /* end function callProcedure */


private function callProc_OpenYear(&$RECORD) {
  $this->logger->debug("Start: ".$this->dcName.".callProc_OpenYear");


  $stmt = $this->db->PrepareSP("BEGIN ps_acc.open_accyear(p_accyear_id => :p_accyear_id); END;");
  $this->db->InParameter($stmt,$RECORD["ID"] ,"p_accyear_id");
  $this->logger->debug("In-Parameters: ".$this->logger->map2string($RECORD) );
  $this->db->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".$this->logger->map2string($RECORD) );

  $this->logger->debug("End: ".$this->dcName.".callProc_OpenYear");
} /* end function callProc_OpenYear  */

}
?>
