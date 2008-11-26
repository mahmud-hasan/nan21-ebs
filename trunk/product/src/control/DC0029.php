<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0029 Controller: Payment - payables
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0029 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_IS_INSERTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_INSERTED like :IS_INSERTED";
      $params["IS_INSERTED"] = $_REQUEST["QRY_IS_INSERTED"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_PAYDOCTYPE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.PAYDOCTYPE_CODE like :PAYDOCTYPE_CODE";
      $params["PAYDOCTYPE_CODE"] = $_REQUEST["QRY_PAYDOCTYPE_CODE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_FROM"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.BPARTNER_FROM like :BPARTNER_FROM";
      $params["BPARTNER_FROM"] = $_REQUEST["QRY_BPARTNER_FROM"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.BPARTNER_TO like :BPARTNER_TO";
      $params["BPARTNER_TO"] = $_REQUEST["QRY_BPARTNER_TO"];
    }
    if (!empty($_REQUEST["QRY_IS_PAYABLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_PAYABLE like :IS_PAYABLE";
      $params["IS_PAYABLE"] = $_REQUEST["QRY_IS_PAYABLE"];
    }
    if (!empty($_REQUEST["QRY_IS_RECEIVABLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_RECEIVABLE like :IS_RECEIVABLE";
      $params["IS_RECEIVABLE"] = $_REQUEST["QRY_IS_RECEIVABLE"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_IS_APPROVED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_APPROVED like :IS_APPROVED";
      $params["IS_APPROVED"] = $_REQUEST["QRY_IS_APPROVED"];
    }
    if (!empty($_REQUEST["QRY_IS_POSTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_POSTED like :IS_POSTED";
      $params["IS_POSTED"] = $_REQUEST["QRY_IS_POSTED"];
    }
    if (!empty($_REQUEST["QRY_ACCDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.ACCDOC_ID like :ACCDOC_ID";
      $params["ACCDOC_ID"] = $_REQUEST["QRY_ACCDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_PREPAYMENT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_PREPAYMENT like :IS_PREPAYMENT";
      $params["IS_PREPAYMENT"] = $_REQUEST["QRY_IS_PREPAYMENT"];
    }
    if (!empty($_REQUEST["QRY_RINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.RINV_ID like :RINV_ID";
      $params["RINV_ID"] = $_REQUEST["QRY_RINV_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_MULTI_PAYMENT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.IS_MULTI_PAYMENT like :IS_MULTI_PAYMENT";
      $params["IS_MULTI_PAYMENT"] = $_REQUEST["QRY_IS_MULTI_PAYMENT"];
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
                p.PAYMNT_ACCT
                ,p.IS_INSERTED
                ,p.ID
                ,p.CLIENT_ID
                ,p.PAYDOCTYPE_CODE
                ,p.DOC_NO
                ,p.DOC_DATE
                ,p.BPARTNER_FROM
                ,p.BPARTNER_TO
                ,p.IS_PAYABLE
                ,p.IS_RECEIVABLE
                ,p.AMOUNT
                ,p.CURRENCY
                ,p.NOTES
                ,p.CREATEDON
                ,p.CREATEDBY
                ,p.MODIFIEDON
                ,p.MODIFIEDBY
                ,(select t.code from client t where t.id= client_id) CLIENT_NAME
                ,(select t.name from bpartner t where t.id = p.bpartner_from) BPARTNER_FROM_NAME
                ,(select t.name from bpartner t where t.id = p.bpartner_to) BPARTNER_TO_NAME
                ,p.IS_GENERATED
                ,p.IS_APPROVED
                ,p.IS_POSTED
                ,p.ACCDOC_ID
                ,p.IS_PREPAYMENT
                ,p.PREPAY_ACCT
                ,p.RINV_ID
                ,p.IS_MULTI_PAYMENT
                ,(select accdoc.doc_no||'/'||to_char(accdoc.doc_date,'DD.MM.YYYY') from accounting_doc accdoc where accdoc.id = p.accdoc_id ) ACCDOC_NAME
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY')doc from rinvoice r where r.id = p.rinv_id) RINV_DOC_NO_DATE
            from PAYMENT p $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "PAYMNT_ACCT"
      ,"IS_INSERTED"
      ,"ID"
      ,"CLIENT_ID"
      ,"PAYDOCTYPE_CODE"
      ,"DOC_NO"
      ,"DOC_DATE"
      ,"BPARTNER_FROM"
      ,"BPARTNER_TO"
      ,"IS_PAYABLE"
      ,"IS_RECEIVABLE"
      ,"AMOUNT"
      ,"CURRENCY"
      ,"NOTES"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"CLIENT_NAME"
      ,"BPARTNER_FROM_NAME"
      ,"BPARTNER_TO_NAME"
      ,"IS_GENERATED"
      ,"IS_APPROVED"
      ,"IS_POSTED"
      ,"ACCDOC_ID"
      ,"IS_PREPAYMENT"
      ,"PREPAY_ACCT"
      ,"RINV_ID"
      ,"IS_MULTI_PAYMENT"
      ,"ACCDOC_NAME"
      ,"RINV_DOC_NO_DATE"
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
                p.ID
                ,p.CLIENT_ID
                ,(select t.code from client t where t.id= client_id) CLIENT_NAME
                ,p.PAYDOCTYPE_CODE
                ,p.DOC_NO
                ,p.DOC_DATE
                ,p.PAYMNT_ACCT
                ,p.BPARTNER_FROM
                ,(select t.name from bpartner t where t.id = p.bpartner_from) BPARTNER_FROM_NAME
                ,p.BPARTNER_TO
                ,(select t.name from bpartner t where t.id = p.bpartner_to) BPARTNER_TO_NAME
                ,p.IS_PREPAYMENT
                ,p.PREPAY_ACCT
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY')doc from rinvoice r where r.id = p.rinv_id) RINV_DOC_NO_DATE
                ,p.RINV_ID
                ,p.AMOUNT
                ,p.CURRENCY
                ,p.IS_PAYABLE
                ,p.IS_RECEIVABLE
                ,p.NOTES
                ,p.CREATEDON
                ,p.CREATEDBY
                ,p.MODIFIEDON
                ,p.MODIFIEDBY
                ,p.IS_INSERTED
                ,p.IS_GENERATED
                ,p.IS_APPROVED
                ,p.IS_POSTED
                ,(select accdoc.doc_no||'/'||to_char(accdoc.doc_date,'DD.MM.YYYY') from accounting_doc accdoc where accdoc.id = p.accdoc_id ) ACCDOC_NAME
                ,p.ACCDOC_ID
                ,p.IS_MULTI_PAYMENT
            from PAYMENT p $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_NAME"
     ,"PAYDOCTYPE_CODE"
     ,"DOC_NO"
     ,"DOC_DATE"
     ,"PAYMNT_ACCT"
     ,"BPARTNER_FROM"
     ,"BPARTNER_FROM_NAME"
     ,"BPARTNER_TO"
     ,"BPARTNER_TO_NAME"
     ,"IS_PREPAYMENT"
     ,"PREPAY_ACCT"
     ,"RINV_DOC_NO_DATE"
     ,"RINV_ID"
     ,"AMOUNT"
     ,"CURRENCY"
     ,"IS_PAYABLE"
     ,"IS_RECEIVABLE"
     ,"NOTES"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"IS_INSERTED"
     ,"IS_GENERATED"
     ,"IS_APPROVED"
     ,"IS_POSTED"
     ,"ACCDOC_NAME"
     ,"ACCDOC_ID"
     ,"IS_MULTI_PAYMENT"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0029.fetchRecord().");}
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
    $RECORD["AMOUNT"] = $this->getRequestParam("AMOUNT");
    $RECORD["BPARTNER_FROM"] = $this->getRequestParam("BPARTNER_FROM");
    $RECORD["BPARTNER_FROM_NAME"] = $this->getRequestParam("BPARTNER_FROM_NAME");
    $RECORD["BPARTNER_TO"] = $this->getRequestParam("BPARTNER_TO");
    $RECORD["BPARTNER_TO_NAME"] = $this->getRequestParam("BPARTNER_TO_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_APPROVED"] = $this->getRequestParamBoolean("IS_APPROVED");
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_MULTI_PAYMENT"] = $this->getRequestParam("IS_MULTI_PAYMENT");
    $RECORD["IS_PAYABLE"] = $this->getRequestParam("IS_PAYABLE");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["IS_PREPAYMENT"] = $this->getRequestParamBoolean("IS_PREPAYMENT");
    $RECORD["IS_RECEIVABLE"] = $this->getRequestParamBoolean("IS_RECEIVABLE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PAYDOCTYPE_CODE"] = $this->getRequestParam("PAYDOCTYPE_CODE");
    $RECORD["PAYMNT_ACCT"] = $this->getRequestParam("PAYMNT_ACCT");
    $RECORD["PREPAY_ACCT"] = $this->getRequestParam("PREPAY_ACCT");
    $RECORD["RINV_DOC_NO_DATE"] = $this->getRequestParam("RINV_DOC_NO_DATE");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $sql = "insert into PAYMENT(
                 PAYMNT_ACCT
                ,IS_INSERTED
                ,ID
                ,CLIENT_ID
                ,PAYDOCTYPE_CODE
                ,DOC_NO
                ,DOC_DATE
                ,BPARTNER_FROM
                ,BPARTNER_TO
                ,IS_PAYABLE
                ,IS_RECEIVABLE
                ,AMOUNT
                ,CURRENCY
                ,NOTES
                ,IS_APPROVED
                ,IS_POSTED
                ,ACCDOC_ID
                ,IS_PREPAYMENT
                ,PREPAY_ACCT
                ,RINV_ID
                ,IS_MULTI_PAYMENT
            ) values ( 
                 :PAYMNT_ACCT
                ,:IS_INSERTED
                ,:ID
                ,:CLIENT_ID
                ,:PAYDOCTYPE_CODE
                ,:DOC_NO
                ,:DOC_DATE
                ,:BPARTNER_FROM
                ,:BPARTNER_TO
                ,:IS_PAYABLE
                ,:IS_RECEIVABLE
                ,:AMOUNT
                ,:CURRENCY
                ,:NOTES
                ,:IS_APPROVED
                ,:IS_POSTED
                ,:ACCDOC_ID
                ,:IS_PREPAYMENT
                ,:PREPAY_ACCT
                ,:RINV_ID
                ,:IS_MULTI_PAYMENT
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_payment_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["AMOUNT"] = $this->getRequestParam("AMOUNT");
    $RECORD["BPARTNER_FROM"] = $this->getRequestParam("BPARTNER_FROM");
    $RECORD["BPARTNER_FROM_NAME"] = $this->getRequestParam("BPARTNER_FROM_NAME");
    $RECORD["BPARTNER_TO"] = $this->getRequestParam("BPARTNER_TO");
    $RECORD["BPARTNER_TO_NAME"] = $this->getRequestParam("BPARTNER_TO_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_APPROVED"] = $this->getRequestParamBoolean("IS_APPROVED");
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["IS_MULTI_PAYMENT"] = $this->getRequestParam("IS_MULTI_PAYMENT");
    $RECORD["IS_PAYABLE"] = $this->getRequestParam("IS_PAYABLE");
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["IS_PREPAYMENT"] = $this->getRequestParamBoolean("IS_PREPAYMENT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PAYDOCTYPE_CODE"] = $this->getRequestParam("PAYDOCTYPE_CODE");
    $RECORD["PAYMNT_ACCT"] = $this->getRequestParam("PAYMNT_ACCT");
    $RECORD["PREPAY_ACCT"] = $this->getRequestParam("PREPAY_ACCT");
    $RECORD["RINV_DOC_NO_DATE"] = $this->getRequestParam("RINV_DOC_NO_DATE");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0029.doUpdate().");}
    $sql = "update PAYMENT set 
                 PAYMNT_ACCT=:PAYMNT_ACCT
                ,IS_INSERTED=:IS_INSERTED
                ,ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,PAYDOCTYPE_CODE=:PAYDOCTYPE_CODE
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,BPARTNER_FROM=:BPARTNER_FROM
                ,BPARTNER_TO=:BPARTNER_TO
                ,IS_PAYABLE=:IS_PAYABLE
                ,AMOUNT=:AMOUNT
                ,CURRENCY=:CURRENCY
                ,NOTES=:NOTES
                ,IS_APPROVED=:IS_APPROVED
                ,IS_POSTED=:IS_POSTED
                ,ACCDOC_ID=:ACCDOC_ID
                ,IS_PREPAYMENT=:IS_PREPAYMENT
                ,PREPAY_ACCT=:PREPAY_ACCT
                ,RINV_ID=:RINV_ID
                ,IS_MULTI_PAYMENT=:IS_MULTI_PAYMENT
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0029.doDelete().");}
    $sql = "delete from PAYMENT where 
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
    $RECORD["AMOUNT"] = $this->getRequestParam("AMOUNT");
    $RECORD["BPARTNER_FROM"] = $this->getRequestParam("BPARTNER_FROM");
    $RECORD["BPARTNER_FROM_NAME"] = $this->getRequestParam("BPARTNER_FROM_NAME");
    $RECORD["BPARTNER_TO"] = $this->getRequestParam("BPARTNER_TO");
    $RECORD["BPARTNER_TO_NAME"] = $this->getRequestParam("BPARTNER_TO_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_APPROVED"] = $this->getRequestParam("IS_APPROVED");
    $RECORD["IS_GENERATED"] = $this->getRequestParam("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParam("IS_INSERTED");
    $RECORD["IS_MULTI_PAYMENT"] = $this->getRequestParam("IS_MULTI_PAYMENT");
    $RECORD["IS_PAYABLE"] = $this->getRequestParam("IS_PAYABLE");
    $RECORD["IS_POSTED"] = $this->getRequestParam("IS_POSTED");
    $RECORD["IS_PREPAYMENT"] = $this->getRequestParam("IS_PREPAYMENT");
    $RECORD["IS_RECEIVABLE"] = $this->getRequestParam("IS_RECEIVABLE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PAYDOCTYPE_CODE"] = $this->getRequestParam("PAYDOCTYPE_CODE");
    $RECORD["PAYMNT_ACCT"] = $this->getRequestParam("PAYMNT_ACCT");
    $RECORD["PREPAY_ACCT"] = $this->getRequestParam("PREPAY_ACCT");
    $RECORD["RINV_DOC_NO_DATE"] = $this->getRequestParam("RINV_DOC_NO_DATE");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0029");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                p.PAYMNT_ACCT
                ,p.IS_INSERTED
                ,p.ID
                ,p.CLIENT_ID
                ,p.PAYDOCTYPE_CODE
                ,p.DOC_NO
                ,p.DOC_DATE
                ,p.BPARTNER_FROM
                ,p.BPARTNER_TO
                ,p.IS_PAYABLE
                ,p.IS_RECEIVABLE
                ,p.AMOUNT
                ,p.CURRENCY
                ,p.NOTES
                ,p.CREATEDON
                ,p.CREATEDBY
                ,p.MODIFIEDON
                ,p.MODIFIEDBY
                ,(select t.code from client t where t.id= client_id) CLIENT_NAME
                ,(select t.name from bpartner t where t.id = p.bpartner_from) BPARTNER_FROM_NAME
                ,(select t.name from bpartner t where t.id = p.bpartner_to) BPARTNER_TO_NAME
                ,p.IS_GENERATED
                ,p.IS_APPROVED
                ,p.IS_POSTED
                ,p.ACCDOC_ID
                ,p.IS_PREPAYMENT
                ,p.PREPAY_ACCT
                ,p.RINV_ID
                ,p.IS_MULTI_PAYMENT
                ,(select accdoc.doc_no||'/'||to_char(accdoc.doc_date,'DD.MM.YYYY') from accounting_doc accdoc where accdoc.id = p.accdoc_id ) ACCDOC_NAME
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY')doc from rinvoice r where r.id = p.rinv_id) RINV_DOC_NO_DATE
            from PAYMENT p
         where 
           p.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "PAYMNT_ACCT" => array("DATA_TYPE" => "STRING")
  ,"IS_INSERTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PAYDOCTYPE_CODE" => array("DATA_TYPE" => "STRING")
  ,"DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"BPARTNER_FROM" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_TO" => array("DATA_TYPE" => "NUMBER")
  ,"IS_PAYABLE" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_RECEIVABLE" => array("DATA_TYPE" => "BOOLEAN")
  ,"AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_FROM_NAME" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_TO_NAME" => array("DATA_TYPE" => "STRING")
  ,"IS_GENERATED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_APPROVED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_POSTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"ACCDOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_PREPAYMENT" => array("DATA_TYPE" => "BOOLEAN")
  ,"PREPAY_ACCT" => array("DATA_TYPE" => "STRING")
  ,"RINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_MULTI_PAYMENT" => array("DATA_TYPE" => "BOOLEAN")
  ,"ACCDOC_NAME" => array("DATA_TYPE" => "STRING")
  ,"RINV_DOC_NO_DATE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCDOC_ID"] )) { $RECORD["ACCDOC_ID"] = $this->getRequestParam("ACCDOC_ID"); }
     if (isset($_REQUEST["ACCDOC_NAME"] )) { $RECORD["ACCDOC_NAME"] = $this->getRequestParam("ACCDOC_NAME"); }
     if (isset($_REQUEST["AMOUNT"] )) { $RECORD["AMOUNT"] = $this->getRequestParam("AMOUNT"); }
     if (isset($_REQUEST["BPARTNER_FROM"] )) { $RECORD["BPARTNER_FROM"] = $this->getRequestParam("BPARTNER_FROM"); }
     if (isset($_REQUEST["BPARTNER_FROM_NAME"] )) { $RECORD["BPARTNER_FROM_NAME"] = $this->getRequestParam("BPARTNER_FROM_NAME"); }
     if (isset($_REQUEST["BPARTNER_TO"] )) { $RECORD["BPARTNER_TO"] = $this->getRequestParam("BPARTNER_TO"); }
     if (isset($_REQUEST["BPARTNER_TO_NAME"] )) { $RECORD["BPARTNER_TO_NAME"] = $this->getRequestParam("BPARTNER_TO_NAME"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY"] )) { $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_APPROVED"] = $this->getRequestParamBoolean("IS_APPROVED");
    $RECORD["IS_GENERATED"] = $this->getRequestParamBoolean("IS_GENERATED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
     if (isset($_REQUEST["IS_MULTI_PAYMENT"] )) { $RECORD["IS_MULTI_PAYMENT"] = $this->getRequestParam("IS_MULTI_PAYMENT"); }
     if (isset($_REQUEST["IS_PAYABLE"] )) { $RECORD["IS_PAYABLE"] = $this->getRequestParam("IS_PAYABLE"); }
    $RECORD["IS_POSTED"] = $this->getRequestParamBoolean("IS_POSTED");
    $RECORD["IS_PREPAYMENT"] = $this->getRequestParamBoolean("IS_PREPAYMENT");
    $RECORD["IS_RECEIVABLE"] = $this->getRequestParamBoolean("IS_RECEIVABLE");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PAYDOCTYPE_CODE"] )) { $RECORD["PAYDOCTYPE_CODE"] = $this->getRequestParam("PAYDOCTYPE_CODE"); }
     if (isset($_REQUEST["PAYMNT_ACCT"] )) { $RECORD["PAYMNT_ACCT"] = $this->getRequestParam("PAYMNT_ACCT"); }
     if (isset($_REQUEST["PREPAY_ACCT"] )) { $RECORD["PREPAY_ACCT"] = $this->getRequestParam("PREPAY_ACCT"); }
     if (isset($_REQUEST["RINV_DOC_NO_DATE"] )) { $RECORD["RINV_DOC_NO_DATE"] = $this->getRequestParam("RINV_DOC_NO_DATE"); }
     if (isset($_REQUEST["RINV_ID"] )) { $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID"); }
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
