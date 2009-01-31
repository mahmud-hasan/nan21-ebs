<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0026 Controller: Received invoice
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0026 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_DOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.DOC_TYPE like :DOC_TYPE";
      $params["DOC_TYPE"] = $_REQUEST["QRY_DOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ISSUER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.ISSUER_ID like :ISSUER_ID";
      $params["ISSUER_ID"] = $_REQUEST["QRY_ISSUER_ID"];
    }
    if (!empty($_REQUEST["QRY_RECEIVER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.RECEIVER_ID like :RECEIVER_ID";
      $params["RECEIVER_ID"] = $_REQUEST["QRY_RECEIVER_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_RINVOICE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.REF_RINVOICE_ID like :REF_RINVOICE_ID";
      $params["REF_RINVOICE_ID"] = $_REQUEST["QRY_REF_RINVOICE_ID"];
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
                rinv.CLIENT_ID
                ,(select code from client where id=rinv.client_id) CLIENT_NAME
                ,rinv.CREATEDBY
                ,rinv.CREATEDON
                ,rinv.DOC_CURRENCY
                ,rinv.DOC_DATE
                ,rinv.DOC_NO
                ,rinv.DOC_TYPE
                ,rinv.DUE_DATE
                ,rinv.ID
                ,rinv.INSERTEDBY
                ,rinv.INSERTEDON
                ,rinv.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME
                ,rinv.IS_INSERTED
                ,rinv.IS_PAYABLE
                ,rinv.IS_PAYED
                ,rinv.MODIFIEDBY
                ,rinv.MODIFIEDON
                ,rinv.NOTES
                ,rinv.RECEIVER_ID
                ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME
                ,rinv.REF_RINVOICE_ID
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME
                ,rinv.TOTAL_AMOUNT
                ,rinv.TOTAL_NET_AMOUNT
                ,rinv.TOTAL_TAX_AMOUNT
            from RINVOICE rinv $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLIENT_ID"
      ,"CLIENT_NAME"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"DOC_CURRENCY"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"DOC_TYPE"
      ,"DUE_DATE"
      ,"ID"
      ,"INSERTEDBY"
      ,"INSERTEDON"
      ,"ISSUER_ID"
      ,"ISSUER_NAME"
      ,"IS_INSERTED"
      ,"IS_PAYABLE"
      ,"IS_PAYED"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NOTES"
      ,"RECEIVER_ID"
      ,"RECEIVER_NAME"
      ,"REF_RINVOICE_ID"
      ,"REF_RINVOICE_NAME"
      ,"TOTAL_AMOUNT"
      ,"TOTAL_NET_AMOUNT"
      ,"TOTAL_TAX_AMOUNT"
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
                rinv.ID
                ,rinv.CLIENT_ID
                ,(select code from client where id=rinv.client_id) CLIENT_NAME
                ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME
                ,rinv.RECEIVER_ID
                ,rinv.DOC_TYPE
                ,rinv.DOC_NO
                ,rinv.DOC_DATE
                ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME
                ,rinv.ISSUER_ID
                ,rinv.DOC_CURRENCY
                ,rinv.TOTAL_AMOUNT
                ,rinv.TOTAL_NET_AMOUNT
                ,rinv.TOTAL_TAX_AMOUNT
                ,rinv.DUE_DATE
                ,rinv.IS_INSERTED
                ,rinv.IS_PAYABLE
                ,rinv.IS_PAYED
                ,rinv.REF_RINVOICE_ID
                ,rinv.NOTES
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME
                ,rinv.INSERTEDBY
                ,rinv.INSERTEDON
                ,rinv.CREATEDON
                ,rinv.CREATEDBY
                ,rinv.MODIFIEDON
                ,rinv.MODIFIEDBY
            from RINVOICE rinv $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_NAME"
     ,"RECEIVER_NAME"
     ,"RECEIVER_ID"
     ,"DOC_TYPE"
     ,"DOC_NO"
     ,"DOC_DATE"
     ,"ISSUER_NAME"
     ,"ISSUER_ID"
     ,"DOC_CURRENCY"
     ,"TOTAL_AMOUNT"
     ,"TOTAL_NET_AMOUNT"
     ,"TOTAL_TAX_AMOUNT"
     ,"DUE_DATE"
     ,"IS_INSERTED"
     ,"IS_PAYABLE"
     ,"IS_PAYED"
     ,"REF_RINVOICE_ID"
     ,"NOTES"
     ,"REF_RINVOICE_NAME"
     ,"INSERTEDBY"
     ,"INSERTEDON"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0026.fetchRecord().");}
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
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSERTEDBY"] = $this->getRequestParam("INSERTEDBY");
    $RECORD["INSERTEDON"] = $this->getRequestParam("INSERTEDON");
    $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID");
    $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_PAYABLE"] = $this->getRequestParamBoolean("IS_PAYABLE");
    $RECORD["IS_PAYED"] = $this->getRequestParamBoolean("IS_PAYED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID");
    $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME");
    $RECORD["REF_RINVOICE_ID"] = $this->getRequestParam("REF_RINVOICE_ID");
    $RECORD["REF_RINVOICE_NAME"] = $this->getRequestParam("REF_RINVOICE_NAME");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT");
    $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT");
    $sql = "insert into RINVOICE(
                 CLIENT_ID
                ,DOC_CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,DOC_TYPE
                ,DUE_DATE
                ,ID
                ,ISSUER_ID
                ,IS_INSERTED
                ,IS_PAYABLE
                ,IS_PAYED
                ,NOTES
                ,RECEIVER_ID
                ,REF_RINVOICE_ID
                ,TOTAL_AMOUNT
                ,TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT
            ) values ( 
                 :CLIENT_ID
                ,:DOC_CURRENCY
                ,:DOC_DATE
                ,:DOC_NO
                ,:DOC_TYPE
                ,:DUE_DATE
                ,:ID
                ,:ISSUER_ID
                ,:IS_INSERTED
                ,:IS_PAYABLE
                ,:IS_PAYED
                ,:NOTES
                ,:RECEIVER_ID
                ,:REF_RINVOICE_ID
                ,:TOTAL_AMOUNT
                ,:TOTAL_NET_AMOUNT
                ,:TOTAL_TAX_AMOUNT
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_rinv_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSERTEDBY"] = $this->getRequestParam("INSERTEDBY");
    $RECORD["INSERTEDON"] = $this->getRequestParam("INSERTEDON");
    $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID");
    $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_PAYABLE"] = $this->getRequestParamBoolean("IS_PAYABLE");
    $RECORD["IS_PAYED"] = $this->getRequestParamBoolean("IS_PAYED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID");
    $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME");
    $RECORD["REF_RINVOICE_ID"] = $this->getRequestParam("REF_RINVOICE_ID");
    $RECORD["REF_RINVOICE_NAME"] = $this->getRequestParam("REF_RINVOICE_NAME");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT");
    $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0026.doUpdate().");}
    $sql = "update RINVOICE set 
                 CLIENT_ID=:CLIENT_ID
                ,DOC_CURRENCY=:DOC_CURRENCY
                ,DOC_DATE=:DOC_DATE
                ,DOC_NO=:DOC_NO
                ,DOC_TYPE=:DOC_TYPE
                ,DUE_DATE=:DUE_DATE
                ,ID=:ID
                ,ISSUER_ID=:ISSUER_ID
                ,IS_INSERTED=:IS_INSERTED
                ,IS_PAYABLE=:IS_PAYABLE
                ,IS_PAYED=:IS_PAYED
                ,NOTES=:NOTES
                ,RECEIVER_ID=:RECEIVER_ID
                ,REF_RINVOICE_ID=:REF_RINVOICE_ID
                ,TOTAL_AMOUNT=:TOTAL_AMOUNT
                ,TOTAL_NET_AMOUNT=:TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT=:TOTAL_TAX_AMOUNT
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0026.doDelete().");}
    $sql = "delete from RINVOICE where 
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
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSERTEDBY"] = $this->getRequestParam("INSERTEDBY");
    $RECORD["INSERTEDON"] = $this->getRequestParam("INSERTEDON");
    $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID");
    $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME");
    $RECORD["IS_INSERTED"] = $this->getRequestParam("IS_INSERTED");
    $RECORD["IS_PAYABLE"] = $this->getRequestParam("IS_PAYABLE");
    $RECORD["IS_PAYED"] = $this->getRequestParam("IS_PAYED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID");
    $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME");
    $RECORD["REF_RINVOICE_ID"] = $this->getRequestParam("REF_RINVOICE_ID");
    $RECORD["REF_RINVOICE_NAME"] = $this->getRequestParam("REF_RINVOICE_NAME");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT");
    $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0026");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                rinv.CLIENT_ID
                ,(select code from client where id=rinv.client_id) CLIENT_NAME
                ,rinv.CREATEDBY
                ,rinv.CREATEDON
                ,rinv.DOC_CURRENCY
                ,rinv.DOC_DATE
                ,rinv.DOC_NO
                ,rinv.DOC_TYPE
                ,rinv.DUE_DATE
                ,rinv.ID
                ,rinv.INSERTEDBY
                ,rinv.INSERTEDON
                ,rinv.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME
                ,rinv.IS_INSERTED
                ,rinv.IS_PAYABLE
                ,rinv.IS_PAYED
                ,rinv.MODIFIEDBY
                ,rinv.MODIFIEDON
                ,rinv.NOTES
                ,rinv.RECEIVER_ID
                ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME
                ,rinv.REF_RINVOICE_ID
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME
                ,rinv.TOTAL_AMOUNT
                ,rinv.TOTAL_NET_AMOUNT
                ,rinv.TOTAL_TAX_AMOUNT
            from RINVOICE rinv
         where 
           rinv.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"DOC_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"DOC_TYPE" => array("DATA_TYPE" => "STRING")
  ,"DUE_DATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"INSERTEDBY" => array("DATA_TYPE" => "STRING")
  ,"INSERTEDON" => array("DATA_TYPE" => "DATE")
  ,"ISSUER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ISSUER_NAME" => array("DATA_TYPE" => "STRING")
  ,"IS_INSERTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_PAYABLE" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_PAYED" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"RECEIVER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"RECEIVER_NAME" => array("DATA_TYPE" => "STRING")
  ,"REF_RINVOICE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"REF_RINVOICE_NAME" => array("DATA_TYPE" => "STRING")
  ,"TOTAL_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"TOTAL_NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"TOTAL_TAX_AMOUNT" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DOC_CURRENCY"] )) { $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["DOC_TYPE"] )) { $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE"); }
     if (isset($_REQUEST["DUE_DATE"] )) { $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["INSERTEDBY"] )) { $RECORD["INSERTEDBY"] = $this->getRequestParam("INSERTEDBY"); }
     if (isset($_REQUEST["INSERTEDON"] )) { $RECORD["INSERTEDON"] = $this->getRequestParam("INSERTEDON"); }
     if (isset($_REQUEST["ISSUER_ID"] )) { $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID"); }
     if (isset($_REQUEST["ISSUER_NAME"] )) { $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME"); }
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_PAYABLE"] = $this->getRequestParamBoolean("IS_PAYABLE");
    $RECORD["IS_PAYED"] = $this->getRequestParamBoolean("IS_PAYED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["RECEIVER_ID"] )) { $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID"); }
     if (isset($_REQUEST["RECEIVER_NAME"] )) { $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME"); }
     if (isset($_REQUEST["REF_RINVOICE_ID"] )) { $RECORD["REF_RINVOICE_ID"] = $this->getRequestParam("REF_RINVOICE_ID"); }
     if (isset($_REQUEST["REF_RINVOICE_NAME"] )) { $RECORD["REF_RINVOICE_NAME"] = $this->getRequestParam("REF_RINVOICE_NAME"); }
     if (isset($_REQUEST["TOTAL_AMOUNT"] )) { $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT"); }
     if (isset($_REQUEST["TOTAL_NET_AMOUNT"] )) { $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT"); }
     if (isset($_REQUEST["TOTAL_TAX_AMOUNT"] )) { $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT"); }
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
