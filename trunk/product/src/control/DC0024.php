<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0024 Controller: Accounting period
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0024 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCYEAR"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACCYEAR like :ACCYEAR";
      $params["ACCYEAR"] = $_REQUEST["QRY_ACCYEAR"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CLOSED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLOSED like :CLOSED";
      $params["CLOSED"] = $_REQUEST["QRY_CLOSED"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
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
                ACCYEAR
                ,CLIENT_ID
                ,(select code from client where id=client_id) CLIENT_NAME
                ,CLOSED
                ,CREATEDBY
                ,CREATEDON
                ,ENDDATE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NAME
                ,NOTES
                ,OPENED
                ,PERIODTYPE
                ,PREV_PERIOD_NAME
                ,PROCESSING
                ,STARTDATE
            from ACCOUNTING_PERIOD  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCYEAR"
      ,"CLIENT_ID"
      ,"CLIENT_NAME"
      ,"CLOSED"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"ENDDATE"
      ,"ID"
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
                CLIENT_ID
                ,(select code from client where id=client_id) CLIENT_NAME
                ,ACCYEAR
                ,NAME
                ,STARTDATE
                ,ENDDATE
                ,ID
                ,CLOSED
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,PREV_PERIOD_NAME
                ,NOTES
                ,PERIODTYPE
                ,PROCESSING
                ,OPENED
            from ACCOUNTING_PERIOD  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "CLIENT_ID"
     ,"CLIENT_NAME"
     ,"ACCYEAR"
     ,"NAME"
     ,"STARTDATE"
     ,"ENDDATE"
     ,"ID"
     ,"CLOSED"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"PREV_PERIOD_NAME"
     ,"NOTES"
     ,"PERIODTYPE"
     ,"PROCESSING"
     ,"OPENED"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    $dataOut = $this->serializeCursor($rs,$columns,"xml");
    $dataOut = "<records>".$dataOut."</records>";
    $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
    $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
    $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
    $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
    $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
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
    $RECORD["ACCYEAR"] = $this->getRequestParam("ACCYEAR");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["OPENED"] = $this->getRequestParamBoolean("OPENED");
    $RECORD["PERIODTYPE"] = $this->getRequestParam("PERIODTYPE");
    $RECORD["PREV_PERIOD_NAME"] = $this->getRequestParam("PREV_PERIOD_NAME");
    $RECORD["PROCESSING"] = $this->getRequestParam("PROCESSING");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $sql = "insert into ACCOUNTING_PERIOD(
                 ACCYEAR
                ,CLIENT_ID
                ,CLOSED
                ,CREATEDBY
                ,ENDDATE
                ,ID
                ,MODIFIEDBY
                ,NAME
                ,NOTES
                ,OPENED
                ,PERIODTYPE
                ,PREV_PERIOD_NAME
                ,PROCESSING
                ,STARTDATE
            ) values ( 
                 :ACCYEAR
                ,:CLIENT_ID
                ,:CLOSED
                ,:CREATEDBY
                ,:ENDDATE
                ,:ID
                ,:MODIFIEDBY
                ,:NAME
                ,:NOTES
                ,:OPENED
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
    $RECORD["ACCYEAR"] = $this->getRequestParam("ACCYEAR");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.doUpdate().");}
    $sql = "update ACCOUNTING_PERIOD set 
                 ACCYEAR=:ACCYEAR
                ,CLIENT_ID=:CLIENT_ID
                ,ENDDATE=:ENDDATE
                ,ID=:ID
                ,NAME=:NAME
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
    $sql = "delete from ACCOUNTING_PERIOD where 
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
    $RECORD["ACCYEAR"] = $this->getRequestParam("ACCYEAR");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CLOSED"] = $this->getRequestParam("CLOSED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
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
                ACCYEAR
                ,CLIENT_ID
                ,(select code from client where id=client_id) CLIENT_NAME
                ,CLOSED
                ,CREATEDBY
                ,CREATEDON
                ,ENDDATE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NAME
                ,NOTES
                ,OPENED
                ,PERIODTYPE
                ,PREV_PERIOD_NAME
                ,PROCESSING
                ,STARTDATE
            from ACCOUNTING_PERIOD 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCYEAR" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"CLOSED" => array("DATA_TYPE" => "BOOLEAN")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ENDDATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
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
     if (isset($_REQUEST["ACCYEAR"] )) { $RECORD["ACCYEAR"] = $this->getRequestParam("ACCYEAR"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ENDDATE"] )) { $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
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
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
  }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
  }
} /* end function callProcedure */

}
?>
