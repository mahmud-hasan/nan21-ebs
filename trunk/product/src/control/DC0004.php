<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0004 Controller: Issued invoices
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0004 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACCDOC_ID like :ACCDOC_ID";
      $params["ACCDOC_ID"] = $_REQUEST["QRY_ACCDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DOC_CURRENCY like :DOC_CURRENCY";
      $params["DOC_CURRENCY"] = $_REQUEST["QRY_DOC_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_DOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DOC_TYPE like :DOC_TYPE";
      $params["DOC_TYPE"] = $_REQUEST["QRY_DOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ISSUER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ISSUER_ID like :ISSUER_ID";
      $params["ISSUER_ID"] = $_REQUEST["QRY_ISSUER_ID"];
    }
    if (!empty($_REQUEST["QRY_RECEIVER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "RECEIVER_ID like :RECEIVER_ID";
      $params["RECEIVER_ID"] = $_REQUEST["QRY_RECEIVER_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_IINV_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "REF_IINV_DOC_NO like :REF_IINV_DOC_NO";
      $params["REF_IINV_DOC_NO"] = $_REQUEST["QRY_REF_IINV_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_REF_IINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "REF_IINV_ID like :REF_IINV_ID";
      $params["REF_IINV_ID"] = $_REQUEST["QRY_REF_IINV_ID"];
    }
}

public function doQuery() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"doc_date desc";
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
                ,(select accdoc.doc_no||'/'||to_char(accdoc.doc_date,'DD.MM.YYYY') from accounting_doc accdoc where accdoc.id = accdoc_id ) ACCDOC_NAME
                ,ACCT
                ,CLIENT_ID
                ,(select t.code from client t where t.id = client_id) CLIENT_NAME
                ,CREATEDBY
                ,CREATEDON
                ,CURRENCY_XRATE
                ,DOC_CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,doc_no_serial||doc_no DOC_NO_FULL
                ,DOC_NO_SERIAL
                ,DOC_TYPE
                ,DUE_DATE
                ,ID
                ,ISSUER_ID
                ,(select t1.name from bpartner t1 where t1.id = issuer_id) ISSUER_NAME
                ,IS_INSERTED
                ,IS_POSTED
                ,IS_PRINTED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,POSTEDBY
                ,POSTEDON
                ,RECEIVER_ID
                ,(select name from bpartner where id = receiver_id) RECEIVER_NAME
                ,REF_IINV_DOC_NO
                ,REF_IINV_ID
                ,TOTAL_AMOUNT
                ,TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT
            from IINVOICE  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCDOC_ID"
      ,"ACCDOC_NAME"
      ,"ACCT"
      ,"CLIENT_ID"
      ,"CLIENT_NAME"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CURRENCY_XRATE"
      ,"DOC_CURRENCY"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"DOC_NO_FULL"
      ,"DOC_NO_SERIAL"
      ,"DOC_TYPE"
      ,"DUE_DATE"
      ,"ID"
      ,"ISSUER_ID"
      ,"ISSUER_NAME"
      ,"IS_INSERTED"
      ,"IS_POSTED"
      ,"IS_PRINTED"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NOTES"
      ,"POSTEDBY"
      ,"POSTEDON"
      ,"RECEIVER_ID"
      ,"RECEIVER_NAME"
      ,"REF_IINV_DOC_NO"
      ,"REF_IINV_ID"
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
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"doc_date desc";
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
                ,CLIENT_ID
                ,(select t.code from client t where t.id = client_id) CLIENT_NAME
                ,ISSUER_ID
                ,(select t1.name from bpartner t1 where t1.id = issuer_id) ISSUER_NAME
                ,DOC_DATE
                ,DOC_TYPE
                ,DOC_CURRENCY
                ,DOC_NO_SERIAL
                ,DOC_NO
                ,doc_no_serial||doc_no DOC_NO_FULL
                ,RECEIVER_ID
                ,(select name from bpartner where id = receiver_id) RECEIVER_NAME
                ,ACCT
                ,NOTES
                ,DUE_DATE
                ,TOTAL_AMOUNT
                ,TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT
                ,CURRENCY_XRATE
                ,REF_IINV_ID
                ,REF_IINV_DOC_NO
                ,IS_INSERTED
                ,IS_PRINTED
                ,IS_POSTED
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,POSTEDON
                ,POSTEDBY
                ,ACCDOC_ID
                ,(select accdoc.doc_no||'/'||to_char(accdoc.doc_date,'DD.MM.YYYY') from accounting_doc accdoc where accdoc.id = accdoc_id ) ACCDOC_NAME
            from IINVOICE  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_NAME"
     ,"ISSUER_ID"
     ,"ISSUER_NAME"
     ,"DOC_DATE"
     ,"DOC_TYPE"
     ,"DOC_CURRENCY"
     ,"DOC_NO_SERIAL"
     ,"DOC_NO"
     ,"DOC_NO_FULL"
     ,"RECEIVER_ID"
     ,"RECEIVER_NAME"
     ,"ACCT"
     ,"NOTES"
     ,"DUE_DATE"
     ,"TOTAL_AMOUNT"
     ,"TOTAL_NET_AMOUNT"
     ,"TOTAL_TAX_AMOUNT"
     ,"CURRENCY_XRATE"
     ,"REF_IINV_ID"
     ,"REF_IINV_DOC_NO"
     ,"IS_INSERTED"
     ,"IS_PRINTED"
     ,"IS_POSTED"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"POSTEDON"
     ,"POSTEDBY"
     ,"ACCDOC_ID"
     ,"ACCDOC_NAME"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0004.fetchRecord().");}
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
    $RECORD["ACCT"] = $this->getRequestParam("ACCT");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE");
    $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_NO_FULL"] = $this->getRequestParam("DOC_NO_FULL");
    $RECORD["DOC_NO_SERIAL"] = $this->getRequestParam("DOC_NO_SERIAL");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INV_LINE_COUNT"] = $this->getRequestParam("INV_LINE_COUNT");
    $RECORD["INV_STATUS"] = $this->getRequestParam("INV_STATUS");
    $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID");
    $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["IS_PRINTED"] = $this->getRequestParamBoolean("IS_PRINTED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORDER_ID"] = $this->getRequestParam("ORDER_ID");
    $RECORD["PAYBY_ID"] = $this->getRequestParam("PAYBY_ID");
    $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY");
    $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON");
    $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID");
    $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME");
    $RECORD["REF_IINV_DOC_NO"] = $this->getRequestParam("REF_IINV_DOC_NO");
    $RECORD["REF_IINV_ID"] = $this->getRequestParam("REF_IINV_ID");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT");
    $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT");
    $RECORD["TRANSTYPE_CODE"] = $this->getRequestParam("TRANSTYPE_CODE");
    $RECORD["VAT_RATE"] = $this->getRequestParam("VAT_RATE");
    $sql = "insert into IINVOICE(
                 ACCDOC_ID
                ,ACCT
                ,CLIENT_ID
                ,CURRENCY_XRATE
                ,DOC_CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,DOC_NO_SERIAL
                ,DOC_TYPE
                ,DUE_DATE
                ,ID
                ,ISSUER_ID
                ,IS_INSERTED
                ,IS_POSTED
                ,IS_PRINTED
                ,NOTES
                ,RECEIVER_ID
                ,REF_IINV_DOC_NO
                ,REF_IINV_ID
            ) values ( 
                 :ACCDOC_ID
                ,:ACCT
                ,:CLIENT_ID
                ,:CURRENCY_XRATE
                ,:DOC_CURRENCY
                ,:DOC_DATE
                ,:DOC_NO
                ,:DOC_NO_SERIAL
                ,:DOC_TYPE
                ,:DUE_DATE
                ,:ID
                ,:ISSUER_ID
                ,:IS_INSERTED
                ,:IS_POSTED
                ,:IS_PRINTED
                ,:NOTES
                ,:RECEIVER_ID
                ,:REF_IINV_DOC_NO
                ,:REF_IINV_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_iinv_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID");
    $RECORD["ACCDOC_NAME"] = $this->getRequestParam("ACCDOC_NAME");
    $RECORD["ACCT"] = $this->getRequestParam("ACCT");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE");
    $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_NO_SERIAL"] = $this->getRequestParam("DOC_NO_SERIAL");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID");
    $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["IS_PRINTED"] = $this->getRequestParamBoolean("IS_PRINTED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY");
    $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON");
    $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID");
    $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME");
    $RECORD["REF_IINV_DOC_NO"] = $this->getRequestParam("REF_IINV_DOC_NO");
    $RECORD["REF_IINV_ID"] = $this->getRequestParam("REF_IINV_ID");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT");
    $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0004.doUpdate().");}
    $sql = "update IINVOICE set 
                 ACCDOC_ID=:ACCDOC_ID
                ,ACCT=:ACCT
                ,CLIENT_ID=:CLIENT_ID
                ,CURRENCY_XRATE=:CURRENCY_XRATE
                ,DOC_CURRENCY=:DOC_CURRENCY
                ,DOC_DATE=:DOC_DATE
                ,DOC_NO=:DOC_NO
                ,DOC_NO_SERIAL=:DOC_NO_SERIAL
                ,DOC_TYPE=:DOC_TYPE
                ,DUE_DATE=:DUE_DATE
                ,ID=:ID
                ,ISSUER_ID=:ISSUER_ID
                ,IS_INSERTED=:IS_INSERTED
                ,IS_POSTED=:IS_POSTED
                ,IS_PRINTED=:IS_PRINTED
                ,NOTES=:NOTES
                ,RECEIVER_ID=:RECEIVER_ID
                ,REF_IINV_DOC_NO=:REF_IINV_DOC_NO
                ,REF_IINV_ID=:REF_IINV_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0004.doDelete().");}
    $sql = "delete from IINVOICE where 
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
    $RECORD["ACCT"] = $this->getRequestParam("ACCT");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE");
    $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_NO_FULL"] = $this->getRequestParam("DOC_NO_FULL");
    $RECORD["DOC_NO_SERIAL"] = $this->getRequestParam("DOC_NO_SERIAL");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INV_LINE_COUNT"] = $this->getRequestParam("INV_LINE_COUNT");
    $RECORD["INV_STATUS"] = $this->getRequestParam("INV_STATUS");
    $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID");
    $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME");
    $RECORD["IS_INSERTED"] = $this->getRequestParam("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParam("IS_POSTED");
    $RECORD["IS_PRINTED"] = $this->getRequestParam("IS_PRINTED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORDER_ID"] = $this->getRequestParam("ORDER_ID");
    $RECORD["PAYBY_ID"] = $this->getRequestParam("PAYBY_ID");
    $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY");
    $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON");
    $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID");
    $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME");
    $RECORD["REF_IINV_DOC_NO"] = $this->getRequestParam("REF_IINV_DOC_NO");
    $RECORD["REF_IINV_ID"] = $this->getRequestParam("REF_IINV_ID");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT");
    $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT");
    $RECORD["TRANSTYPE_CODE"] = $this->getRequestParam("TRANSTYPE_CODE");
    $RECORD["VAT_RATE"] = $this->getRequestParam("VAT_RATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0004");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACCDOC_ID
                ,(select accdoc.doc_no||'/'||to_char(accdoc.doc_date,'DD.MM.YYYY') from accounting_doc accdoc where accdoc.id = accdoc_id ) ACCDOC_NAME
                ,ACCT
                ,CLIENT_ID
                ,(select t.code from client t where t.id = client_id) CLIENT_NAME
                ,CREATEDBY
                ,CREATEDON
                ,CURRENCY_XRATE
                ,DOC_CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,doc_no_serial||doc_no DOC_NO_FULL
                ,DOC_NO_SERIAL
                ,DOC_TYPE
                ,DUE_DATE
                ,ID
                ,ISSUER_ID
                ,(select t1.name from bpartner t1 where t1.id = issuer_id) ISSUER_NAME
                ,IS_INSERTED
                ,IS_POSTED
                ,IS_PRINTED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,POSTEDBY
                ,POSTEDON
                ,RECEIVER_ID
                ,(select name from bpartner where id = receiver_id) RECEIVER_NAME
                ,REF_IINV_DOC_NO
                ,REF_IINV_ID
                ,TOTAL_AMOUNT
                ,TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT
            from IINVOICE 
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
  ,"ACCT" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CURRENCY_XRATE" => array("DATA_TYPE" => "NUMBER")
  ,"DOC_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"DOC_NO_FULL" => array("DATA_TYPE" => "STRING")
  ,"DOC_NO_SERIAL" => array("DATA_TYPE" => "STRING")
  ,"DOC_TYPE" => array("DATA_TYPE" => "STRING")
  ,"DUE_DATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"ISSUER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ISSUER_NAME" => array("DATA_TYPE" => "STRING")
  ,"IS_INSERTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_POSTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_PRINTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"POSTEDBY" => array("DATA_TYPE" => "STRING")
  ,"POSTEDON" => array("DATA_TYPE" => "DATE")
  ,"RECEIVER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"RECEIVER_NAME" => array("DATA_TYPE" => "STRING")
  ,"REF_IINV_DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"REF_IINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"TOTAL_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"TOTAL_NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"TOTAL_TAX_AMOUNT" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCDOC_ID"] )) { $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID"); }
     if (isset($_REQUEST["ACCDOC_NAME"] )) { $RECORD["ACCDOC_NAME"] = $this->getRequestParam("ACCDOC_NAME"); }
     if (isset($_REQUEST["ACCT"] )) { $RECORD["ACCT"] = $this->getRequestParam("ACCT"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY_XRATE"] )) { $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE"); }
     if (isset($_REQUEST["DOC_CURRENCY"] )) { $RECORD["DOC_CURRENCY"] = $this->getRequestParam("DOC_CURRENCY"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["DOC_NO_FULL"] )) { $RECORD["DOC_NO_FULL"] = $this->getRequestParam("DOC_NO_FULL"); }
     if (isset($_REQUEST["DOC_NO_SERIAL"] )) { $RECORD["DOC_NO_SERIAL"] = $this->getRequestParam("DOC_NO_SERIAL"); }
     if (isset($_REQUEST["DOC_TYPE"] )) { $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE"); }
     if (isset($_REQUEST["DUE_DATE"] )) { $RECORD["DUE_DATE"] = $this->getRequestParam("DUE_DATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["INV_LINE_COUNT"] )) { $RECORD["INV_LINE_COUNT"] = $this->getRequestParam("INV_LINE_COUNT"); }
     if (isset($_REQUEST["INV_STATUS"] )) { $RECORD["INV_STATUS"] = $this->getRequestParam("INV_STATUS"); }
     if (isset($_REQUEST["ISSUER_ID"] )) { $RECORD["ISSUER_ID"] = $this->getRequestParam("ISSUER_ID"); }
     if (isset($_REQUEST["ISSUER_NAME"] )) { $RECORD["ISSUER_NAME"] = $this->getRequestParam("ISSUER_NAME"); }
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["IS_PRINTED"] = $this->getRequestParamBoolean("IS_PRINTED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["ORDER_ID"] )) { $RECORD["ORDER_ID"] = $this->getRequestParam("ORDER_ID"); }
     if (isset($_REQUEST["PAYBY_ID"] )) { $RECORD["PAYBY_ID"] = $this->getRequestParam("PAYBY_ID"); }
     if (isset($_REQUEST["POSTEDBY"] )) { $RECORD["POSTEDBY"] = $this->getRequestParam("POSTEDBY"); }
     if (isset($_REQUEST["POSTEDON"] )) { $RECORD["POSTEDON"] = $this->getRequestParam("POSTEDON"); }
     if (isset($_REQUEST["RECEIVER_ID"] )) { $RECORD["RECEIVER_ID"] = $this->getRequestParam("RECEIVER_ID"); }
     if (isset($_REQUEST["RECEIVER_NAME"] )) { $RECORD["RECEIVER_NAME"] = $this->getRequestParam("RECEIVER_NAME"); }
     if (isset($_REQUEST["REF_IINV_DOC_NO"] )) { $RECORD["REF_IINV_DOC_NO"] = $this->getRequestParam("REF_IINV_DOC_NO"); }
     if (isset($_REQUEST["REF_IINV_ID"] )) { $RECORD["REF_IINV_ID"] = $this->getRequestParam("REF_IINV_ID"); }
     if (isset($_REQUEST["TOTAL_AMOUNT"] )) { $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT"); }
     if (isset($_REQUEST["TOTAL_NET_AMOUNT"] )) { $RECORD["TOTAL_NET_AMOUNT"] = $this->getRequestParam("TOTAL_NET_AMOUNT"); }
     if (isset($_REQUEST["TOTAL_TAX_AMOUNT"] )) { $RECORD["TOTAL_TAX_AMOUNT"] = $this->getRequestParam("TOTAL_TAX_AMOUNT"); }
     if (isset($_REQUEST["TRANSTYPE_CODE"] )) { $RECORD["TRANSTYPE_CODE"] = $this->getRequestParam("TRANSTYPE_CODE"); }
     if (isset($_REQUEST["VAT_RATE"] )) { $RECORD["VAT_RATE"] = $this->getRequestParam("VAT_RATE"); }
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
