<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0040 Controller: Accounting doc.
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0040 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCPERIOD_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.ACCPERIOD_NAME like :ACCPERIOD_NAME";
      $params["ACCPERIOD_NAME"] = $_REQUEST["QRY_ACCPERIOD_NAME"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.BASEDOC_DATE like :BASEDOC_DATE";
      $params["BASEDOC_DATE"] = $_REQUEST["QRY_BASEDOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.BASEDOC_ID like :BASEDOC_ID";
      $params["BASEDOC_ID"] = $_REQUEST["QRY_BASEDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.BASEDOC_NO like :BASEDOC_NO";
      $params["BASEDOC_NO"] = $_REQUEST["QRY_BASEDOC_NO"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.BASEDOC_TYPE like :BASEDOC_TYPE";
      $params["BASEDOC_TYPE"] = $_REQUEST["QRY_BASEDOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_IS_INSERTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.IS_INSERTED like :IS_INSERTED";
      $params["IS_INSERTED"] = $_REQUEST["QRY_IS_INSERTED"];
    }
    if (!empty($_REQUEST["QRY_IS_POSTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.IS_POSTED like :IS_POSTED";
      $params["IS_POSTED"] = $_REQUEST["QRY_IS_POSTED"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_POSTEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.POSTEDBY like :POSTEDBY";
      $params["POSTEDBY"] = $_REQUEST["QRY_POSTEDBY"];
    }
    if (!empty($_REQUEST["QRY_POSTEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "accdoc.POSTEDON like :POSTEDON";
      $params["POSTEDON"] = $_REQUEST["QRY_POSTEDON"];
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
                accdoc.ACCPERIOD_NAME
                ,accdoc.BASEDOC_DATE
                ,accdoc.BASEDOC_ID
                ,accdoc.BASEDOC_NO
                ,accdoc.BASEDOC_TYPE
                ,accdoc.CLIENT_ID
                ,(select t.code from client t where t.id=accdoc.client_id ) CLIENT_NAME
                ,accdoc.CREATEDBY
                ,accdoc.CREATEDON
                ,(select sum(t.cr_amount) cr_amount from accounting_doc_line t where t.accdoc_id = accdoc.id) CR_AMOUNT
                ,(select sum(t.db_amount) db_amount from accounting_doc_line t where t.accdoc_id = accdoc.id) DB_AMOUNT
                ,accdoc.DOC_DATE
                ,accdoc.DOC_NO
                ,accdoc.ID
                ,accdoc.IS_GENERATED
                ,accdoc.IS_INSERTED
                ,accdoc.IS_POSTED
                ,accdoc.MODIFIEDBY
                ,accdoc.MODIFIEDON
                ,accdoc.NOTES
                ,accdoc.POSTEDBY
                ,accdoc.POSTEDON
            from ACCOUNTING_DOC accdoc $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCPERIOD_NAME"
      ,"BASEDOC_DATE"
      ,"BASEDOC_ID"
      ,"BASEDOC_NO"
      ,"BASEDOC_TYPE"
      ,"CLIENT_ID"
      ,"CLIENT_NAME"
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
                accdoc.ID
                ,accdoc.CLIENT_ID
                ,(select t.code from client t where t.id=accdoc.client_id ) CLIENT_NAME
                ,accdoc.ACCPERIOD_NAME
                ,(select sum(t.db_amount) db_amount from accounting_doc_line t where t.accdoc_id = accdoc.id) DB_AMOUNT
                ,(select sum(t.cr_amount) cr_amount from accounting_doc_line t where t.accdoc_id = accdoc.id) CR_AMOUNT
                ,accdoc.DOC_NO
                ,accdoc.DOC_DATE
                ,accdoc.BASEDOC_TYPE
                ,accdoc.BASEDOC_NO
                ,accdoc.BASEDOC_DATE
                ,accdoc.BASEDOC_ID
                ,accdoc.NOTES
                ,accdoc.IS_GENERATED
                ,accdoc.IS_INSERTED
                ,accdoc.IS_POSTED
                ,accdoc.CREATEDON
                ,accdoc.CREATEDBY
                ,accdoc.MODIFIEDON
                ,accdoc.MODIFIEDBY
                ,accdoc.POSTEDON
                ,accdoc.POSTEDBY
            from ACCOUNTING_DOC accdoc $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_NAME"
     ,"ACCPERIOD_NAME"
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
    $RECORD["ACCPERIOD_NAME"] = $this->getRequestParam("ACCPERIOD_NAME");
    $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE");
    $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID");
    $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO");
    $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
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
    $sql = "insert into ACCOUNTING_DOC(
                 ACCPERIOD_NAME
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
                 :ACCPERIOD_NAME
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
    $RECORD["ACCPERIOD_NAME"] = $this->getRequestParam("ACCPERIOD_NAME");
    $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE");
    $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID");
    $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO");
    $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
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
    $sql = "update ACCOUNTING_DOC set 
                 ACCPERIOD_NAME=:ACCPERIOD_NAME
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
    $sql = "delete from ACCOUNTING_DOC where 
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
    $RECORD["ACCPERIOD_NAME"] = $this->getRequestParam("ACCPERIOD_NAME");
    $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE");
    $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID");
    $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO");
    $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
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
                accdoc.ACCPERIOD_NAME
                ,accdoc.BASEDOC_DATE
                ,accdoc.BASEDOC_ID
                ,accdoc.BASEDOC_NO
                ,accdoc.BASEDOC_TYPE
                ,accdoc.CLIENT_ID
                ,(select t.code from client t where t.id=accdoc.client_id ) CLIENT_NAME
                ,accdoc.CREATEDBY
                ,accdoc.CREATEDON
                ,(select sum(t.cr_amount) cr_amount from accounting_doc_line t where t.accdoc_id = accdoc.id) CR_AMOUNT
                ,(select sum(t.db_amount) db_amount from accounting_doc_line t where t.accdoc_id = accdoc.id) DB_AMOUNT
                ,accdoc.DOC_DATE
                ,accdoc.DOC_NO
                ,accdoc.ID
                ,accdoc.IS_GENERATED
                ,accdoc.IS_INSERTED
                ,accdoc.IS_POSTED
                ,accdoc.MODIFIEDBY
                ,accdoc.MODIFIEDON
                ,accdoc.NOTES
                ,accdoc.POSTEDBY
                ,accdoc.POSTEDON
            from ACCOUNTING_DOC accdoc
         where 
           accdoc.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCPERIOD_NAME" => array("DATA_TYPE" => "STRING")
  ,"BASEDOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"BASEDOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BASEDOC_NO" => array("DATA_TYPE" => "STRING")
  ,"BASEDOC_TYPE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
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
     if (isset($_REQUEST["ACCPERIOD_NAME"] )) { $RECORD["ACCPERIOD_NAME"] = $this->getRequestParam("ACCPERIOD_NAME"); }
     if (isset($_REQUEST["BASEDOC_DATE"] )) { $RECORD["BASEDOC_DATE"] = $this->getRequestParam("BASEDOC_DATE"); }
     if (isset($_REQUEST["BASEDOC_ID"] )) { $RECORD["BASEDOC_ID"] = $this->getRequestParam("BASEDOC_ID"); }
     if (isset($_REQUEST["BASEDOC_NO"] )) { $RECORD["BASEDOC_NO"] = $this->getRequestParam("BASEDOC_NO"); }
     if (isset($_REQUEST["BASEDOC_TYPE"] )) { $RECORD["BASEDOC_TYPE"] = $this->getRequestParam("BASEDOC_TYPE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
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
