<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0042 Controller: Accounting doc. line
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0042 extends Controller {


private function preQuery(&$params, &$where) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACCDOC_ID like :ACCDOC_ID";
      $params["ACCDOC_ID"] = $_REQUEST["QRY_ACCDOC_ID"];
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_CR_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CR_ACCT like :CR_ACCT";
      $params["CR_ACCT"] = $_REQUEST["QRY_CR_ACCT"];
    }
    if (!empty($_REQUEST["QRY_CR_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CR_AMOUNT like :CR_AMOUNT";
      $params["CR_AMOUNT"] = $_REQUEST["QRY_CR_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_DB_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DB_ACCT like :DB_ACCT";
      $params["DB_ACCT"] = $_REQUEST["QRY_DB_ACCT"];
    }
    if (!empty($_REQUEST["QRY_DB_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DB_AMOUNT like :DB_AMOUNT";
      $params["DB_AMOUNT"] = $_REQUEST["QRY_DB_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_ORIG_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORIG_AMOUNT like :ORIG_AMOUNT";
      $params["ORIG_AMOUNT"] = $_REQUEST["QRY_ORIG_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_ORIG_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORIG_CURRENCY like :ORIG_CURRENCY";
      $params["ORIG_CURRENCY"] = $_REQUEST["QRY_ORIG_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_XRATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "XRATE like :XRATE";
      $params["XRATE"] = $_REQUEST["QRY_XRATE"];
    }
}

public function doQuery() {
  try {
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
                ACCDOC_ID
                ,(select t.doc_no||' / '||t.doc_date from accounting_doc t where t.id = accdoc_id ) ACCDOC_NAME
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CR_ACCT
                ,CR_AMOUNT
                ,CURRENCY
                ,DB_ACCT
                ,DB_AMOUNT
                ,ID
                ,IS_GENERATED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,ORIG_AMOUNT
                ,ORIG_CURRENCY
                ,XRATE
            from ACCOUNTING_DOC_LINE  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCDOC_ID"
      ,"ACCDOC_NAME"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CR_ACCT"
      ,"CR_AMOUNT"
      ,"CURRENCY"
      ,"DB_ACCT"
      ,"DB_AMOUNT"
      ,"ID"
      ,"IS_GENERATED"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NOTES"
      ,"ORIG_AMOUNT"
      ,"ORIG_CURRENCY"
      ,"XRATE"
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
    $limit = nvl($this->getRequestParam("limit"),-1);
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
                ID
                ,ACCDOC_ID
                ,(select t.doc_no||' / '||t.doc_date from accounting_doc t where t.id = accdoc_id ) ACCDOC_NAME
                ,CLIENT_ID
                ,NOTES
                ,DB_ACCT
                ,CR_ACCT
                ,DB_AMOUNT
                ,CR_AMOUNT
                ,CURRENCY
                ,XRATE
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,IS_GENERATED
                ,ORIG_AMOUNT
                ,ORIG_CURRENCY
            from ACCOUNTING_DOC_LINE  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"ACCDOC_ID"
     ,"ACCDOC_NAME"
     ,"CLIENT_ID"
     ,"NOTES"
     ,"DB_ACCT"
     ,"CR_ACCT"
     ,"DB_AMOUNT"
     ,"CR_AMOUNT"
     ,"CURRENCY"
     ,"XRATE"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"IS_GENERATED"
     ,"ORIG_AMOUNT"
     ,"ORIG_CURRENCY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0042.fetchRecord().");}
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
    $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID");
    $RECORD["ACCDOC_NAME"] = $this->getRequestParam("ACCDOC_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CR_ACCT"] = $this->getRequestParam("CR_ACCT");
    $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DB_ACCT"] = $this->getRequestParam("DB_ACCT");
    $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["XRATE"] = $this->getRequestParam("XRATE");
    $sql = "insert into ACCOUNTING_DOC_LINE(
                 ACCDOC_ID
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CR_ACCT
                ,CR_AMOUNT
                ,CURRENCY
                ,DB_ACCT
                ,DB_AMOUNT
                ,ID
                ,IS_GENERATED
                ,MODIFIEDBY
                ,NOTES
                ,ORIG_AMOUNT
                ,ORIG_CURRENCY
                ,XRATE
            ) values ( 
                 :ACCDOC_ID
                ,:CLIENT_ID
                ,:CREATEDBY
                ,:CREATEDON
                ,:CR_ACCT
                ,:CR_AMOUNT
                ,:CURRENCY
                ,:DB_ACCT
                ,:DB_AMOUNT
                ,:ID
                ,:IS_GENERATED
                ,:MODIFIEDBY
                ,:NOTES
                ,:ORIG_AMOUNT
                ,:ORIG_CURRENCY
                ,:XRATE
    )";
    $stmt = $this->db->prepare($sql);
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
    $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CR_ACCT"] = $this->getRequestParam("CR_ACCT");
    $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DB_ACCT"] = $this->getRequestParam("DB_ACCT");
    $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["XRATE"] = $this->getRequestParam("XRATE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0042.doUpdate().");}
    $sql = "update ACCOUNTING_DOC_LINE set 
                 ACCDOC_ID=:ACCDOC_ID
                ,CLIENT_ID=:CLIENT_ID
                ,CR_ACCT=:CR_ACCT
                ,CR_AMOUNT=:CR_AMOUNT
                ,CURRENCY=:CURRENCY
                ,DB_ACCT=:DB_ACCT
                ,DB_AMOUNT=:DB_AMOUNT
                ,ID=:ID
                ,NOTES=:NOTES
                ,XRATE=:XRATE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0042.doDelete().");}
    $sql = "delete from ACCOUNTING_DOC_LINE where 
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
    $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID");
    $RECORD["ACCDOC_NAME"] = $this->getRequestParam("ACCDOC_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CR_ACCT"] = $this->getRequestParam("CR_ACCT");
    $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DB_ACCT"] = $this->getRequestParam("DB_ACCT");
    $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_GENERATED"] = $this->getRequestParam("IS_GENERATED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["XRATE"] = $this->getRequestParam("XRATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0042");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACCDOC_ID
                ,(select t.doc_no||' / '||t.doc_date from accounting_doc t where t.id = accdoc_id ) ACCDOC_NAME
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CR_ACCT
                ,CR_AMOUNT
                ,CURRENCY
                ,DB_ACCT
                ,DB_AMOUNT
                ,ID
                ,IS_GENERATED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,ORIG_AMOUNT
                ,ORIG_CURRENCY
                ,XRATE
            from ACCOUNTING_DOC_LINE 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCDOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCDOC_NAME" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CR_ACCT" => array("DATA_TYPE" => "STRING")
  ,"CR_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"DB_ACCT" => array("DATA_TYPE" => "STRING")
  ,"DB_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_GENERATED" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"ORIG_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"ORIG_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"XRATE" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCDOC_ID"] )) { $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID"); }
     if (isset($_REQUEST["ACCDOC_NAME"] )) { $RECORD["ACCDOC_NAME"] = $this->getRequestParam("ACCDOC_NAME"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CR_ACCT"] )) { $RECORD["CR_ACCT"] = $this->getRequestParam("CR_ACCT"); }
     if (isset($_REQUEST["CR_AMOUNT"] )) { $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT"); }
     if (isset($_REQUEST["CURRENCY"] )) { $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY"); }
     if (isset($_REQUEST["DB_ACCT"] )) { $RECORD["DB_ACCT"] = $this->getRequestParam("DB_ACCT"); }
     if (isset($_REQUEST["DB_AMOUNT"] )) { $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["ORIG_AMOUNT"] )) { $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT"); }
     if (isset($_REQUEST["ORIG_CURRENCY"] )) { $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY"); }
     if (isset($_REQUEST["XRATE"] )) { $RECORD["XRATE"] = $this->getRequestParam("XRATE"); }
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
