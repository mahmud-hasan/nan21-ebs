<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0040 Controller: Accounting doc.
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0040 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCPERIOD_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCPERIOD_ID like :ACCPERIOD_ID";
      $params["ACCPERIOD_ID"] = $_REQUEST["QRY_ACCPERIOD_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_DATE like :BASEDOC_DATE";
      $params["BASEDOC_DATE"] = $_REQUEST["QRY_BASEDOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_ID like :BASEDOC_ID";
      $params["BASEDOC_ID"] = $_REQUEST["QRY_BASEDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_NO like :BASEDOC_NO";
      $params["BASEDOC_NO"] = $_REQUEST["QRY_BASEDOC_NO"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_TYPE like :BASEDOC_TYPE";
      $params["BASEDOC_TYPE"] = $_REQUEST["QRY_BASEDOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_IS_INSERTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_INSERTED like :IS_INSERTED";
      $params["IS_INSERTED"] = $_REQUEST["QRY_IS_INSERTED"];
    }
    if (!empty($_REQUEST["QRY_IS_POSTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_POSTED like :IS_POSTED";
      $params["IS_POSTED"] = $_REQUEST["QRY_IS_POSTED"];
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
                t.ACCPERIOD_ID
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.BASEDOC_DATE
                ,t.BASEDOC_ID
                ,t.BASEDOC_NO
                ,t.BASEDOC_TYPE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT
                ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.ID
                ,t.IS_GENERATED
                ,t.IS_INSERTED
                ,t.IS_POSTED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.POSTEDBY
                ,t.POSTEDON
            from AC_ACCDOC t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCPERIOD_ID"
      ,"ACCSCHEMA_ID"
      ,"ACCSCHEMA_NAME"
      ,"BASEDOC_DATE"
      ,"BASEDOC_ID"
      ,"BASEDOC_NO"
      ,"BASEDOC_TYPE"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CR_AMOUNT"
      ,"DB_AMOUNT"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"ID"
      ,"IS_GENERATED"
      ,"IS_INSERTED"
      ,"IS_POSTED"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NOTES"
      ,"POSTEDBY"
      ,"POSTEDON"
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
                ,t.ACCPERIOD_ID
                ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT
                ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT
                ,t.DOC_NO
                ,t.DOC_DATE
                ,t.BASEDOC_TYPE
                ,t.BASEDOC_NO
                ,t.BASEDOC_DATE
                ,t.BASEDOC_ID
                ,t.NOTES
                ,t.IS_GENERATED
                ,t.IS_INSERTED
                ,t.IS_POSTED
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.POSTEDON
                ,t.POSTEDBY
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
            from AC_ACCDOC t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_CODE"
     ,"ACCPERIOD_ID"
     ,"DB_AMOUNT"
     ,"CR_AMOUNT"
     ,"DOC_NO"
     ,"DOC_DATE"
     ,"BASEDOC_TYPE"
     ,"BASEDOC_NO"
     ,"BASEDOC_DATE"
     ,"BASEDOC_ID"
     ,"NOTES"
     ,"IS_GENERATED"
     ,"IS_INSERTED"
     ,"IS_POSTED"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"POSTEDON"
     ,"POSTEDBY"
     ,"ACCSCHEMA_ID"
     ,"ACCSCHEMA_NAME"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0040.fetchRecord().");}
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
    $RECORD["ACCPERIOD_ID"] = $this->getRequestParam("ACCPERIOD_ID");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE");
    $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID");
    $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO");
    $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT");
    $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY");
    $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON");
    $sql = "insert into AC_ACCDOC(
                 ACCPERIOD_ID
                ,ACCSCHEMA_ID
                ,BASEDOC_DATE
                ,BASEDOC_ID
                ,BASEDOC_NO
                ,BASEDOC_TYPE
                ,CLIENT_ID
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,IS_GENERATED
                ,IS_INSERTED
                ,IS_POSTED
                ,NOTES
            ) values ( 
                 :ACCPERIOD_ID
                ,:ACCSCHEMA_ID
                ,:BASEDOC_DATE
                ,:BASEDOC_ID
                ,:BASEDOC_NO
                ,:BASEDOC_TYPE
                ,:CLIENT_ID
                ,:DOC_DATE
                ,:DOC_NO
                ,:ID
                ,:IS_GENERATED
                ,:IS_INSERTED
                ,:IS_POSTED
                ,:NOTES
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_ACCDOC_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACCPERIOD_ID"] = $this->getRequestParam("ACCPERIOD_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE");
    $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID");
    $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO");
    $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT");
    $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY");
    $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0040.doUpdate().");}
    $sql = "update AC_ACCDOC set 
                 ACCPERIOD_ID=:ACCPERIOD_ID
                ,BASEDOC_DATE=:BASEDOC_DATE
                ,BASEDOC_ID=:BASEDOC_ID
                ,BASEDOC_NO=:BASEDOC_NO
                ,BASEDOC_TYPE=:BASEDOC_TYPE
                ,CLIENT_ID=:CLIENT_ID
                ,DOC_DATE=:DOC_DATE
                ,DOC_NO=:DOC_NO
                ,ID=:ID
                ,IS_GENERATED=:IS_GENERATED
                ,IS_INSERTED=:IS_INSERTED
                ,IS_POSTED=:IS_POSTED
                ,NOTES=:NOTES
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0040.doDelete().");}
    $sql = "delete from AC_ACCDOC where 
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
    $RECORD["ACCPERIOD_ID"] = $this->getRequestParam("ACCPERIOD_ID");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE");
    $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID");
    $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO");
    $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT");
    $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_GENERATED"] = $this->getRequestParam("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParam("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParam("IS_POSTED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY");
    $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0040");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCPERIOD_ID
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.BASEDOC_DATE
                ,t.BASEDOC_ID
                ,t.BASEDOC_NO
                ,t.BASEDOC_TYPE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT
                ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.ID
                ,t.IS_GENERATED
                ,t.IS_INSERTED
                ,t.IS_POSTED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.POSTEDBY
                ,t.POSTEDON
            from AC_ACCDOC t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCPERIOD_ID" => array("DATA_TYPE" => "STRING")
  ,"ACCSCHEMA_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCSCHEMA_NAME" => array("DATA_TYPE" => "STRING")
  ,"BASEDOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"BASEDOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BASEDOC_NO" => array("DATA_TYPE" => "STRING")
  ,"BASEDOC_TYPE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CR_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"DB_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_GENERATED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_INSERTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_POSTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"POSTEDBY" => array("DATA_TYPE" => "STRING")
  ,"POSTEDON" => array("DATA_TYPE" => "DATE")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCPERIOD_ID"] )) { $RECORD["ACCPERIOD_ID"] = $this->getRequestParam("ACCPERIOD_ID"); }
     if (isset($_REQUEST["ACCSCHEMA_ID"] )) { $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID"); }
     if (isset($_REQUEST["ACCSCHEMA_NAME"] )) { $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME"); }
     if (isset($_REQUEST["BASEDOC_DATE"] )) { $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE"); }
     if (isset($_REQUEST["BASEDOC_ID"] )) { $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID"); }
     if (isset($_REQUEST["BASEDOC_NO"] )) { $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO"); }
     if (isset($_REQUEST["BASEDOC_TYPE"] )) { $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CR_AMOUNT"] )) { $RECORD["CR_AMOUNT"] = $this->getRequestParam("CR_AMOUNT"); }
     if (isset($_REQUEST["DB_AMOUNT"] )) { $RECORD["DB_AMOUNT"] = $this->getRequestParam("DB_AMOUNT"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["POSTEDBY"] )) { $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY"); }
     if (isset($_REQUEST["POSTEDON"] )) { $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON"); }
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
