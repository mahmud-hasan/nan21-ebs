<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0044 Controller: Received invoice payments
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0044 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACCDOC_ID like :ACCDOC_ID";
      $params["ACCDOC_ID"] = $_REQUEST["QRY_ACCDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "AMOUNT like :AMOUNT";
      $params["AMOUNT"] = $_REQUEST["QRY_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_FROM"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "BPARTNER_FROM like :BPARTNER_FROM";
      $params["BPARTNER_FROM"] = $_REQUEST["QRY_BPARTNER_FROM"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "BPARTNER_TO like :BPARTNER_TO";
      $params["BPARTNER_TO"] = $_REQUEST["QRY_BPARTNER_TO"];
    }
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
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
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
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IINV_ID like :IINV_ID";
      $params["IINV_ID"] = $_REQUEST["QRY_IINV_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_APPROVED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_APPROVED like :IS_APPROVED";
      $params["IS_APPROVED"] = $_REQUEST["QRY_IS_APPROVED"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_IS_INSERTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_INSERTED like :IS_INSERTED";
      $params["IS_INSERTED"] = $_REQUEST["QRY_IS_INSERTED"];
    }
    if (!empty($_REQUEST["QRY_IS_MULTI_PAYMENT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_MULTI_PAYMENT like :IS_MULTI_PAYMENT";
      $params["IS_MULTI_PAYMENT"] = $_REQUEST["QRY_IS_MULTI_PAYMENT"];
    }
    if (!empty($_REQUEST["QRY_IS_PAYABLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_PAYABLE like :IS_PAYABLE";
      $params["IS_PAYABLE"] = $_REQUEST["QRY_IS_PAYABLE"];
    }
    if (!empty($_REQUEST["QRY_IS_POSTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_POSTED like :IS_POSTED";
      $params["IS_POSTED"] = $_REQUEST["QRY_IS_POSTED"];
    }
    if (!empty($_REQUEST["QRY_IS_PREPAYMENT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_PREPAYMENT like :IS_PREPAYMENT";
      $params["IS_PREPAYMENT"] = $_REQUEST["QRY_IS_PREPAYMENT"];
    }
    if (!empty($_REQUEST["QRY_IS_RECEIVABLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_RECEIVABLE like :IS_RECEIVABLE";
      $params["IS_RECEIVABLE"] = $_REQUEST["QRY_IS_RECEIVABLE"];
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
    if (!empty($_REQUEST["QRY_PAYDOCTYPE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PAYDOCTYPE_CODE like :PAYDOCTYPE_CODE";
      $params["PAYDOCTYPE_CODE"] = $_REQUEST["QRY_PAYDOCTYPE_CODE"];
    }
    if (!empty($_REQUEST["QRY_PAYMNT_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PAYMNT_ACCT like :PAYMNT_ACCT";
      $params["PAYMNT_ACCT"] = $_REQUEST["QRY_PAYMNT_ACCT"];
    }
    if (!empty($_REQUEST["QRY_PREPAY_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PREPAY_ACCT like :PREPAY_ACCT";
      $params["PREPAY_ACCT"] = $_REQUEST["QRY_PREPAY_ACCT"];
    }
    if (!empty($_REQUEST["QRY_RINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "RINV_ID like :RINV_ID";
      $params["RINV_ID"] = $_REQUEST["QRY_RINV_ID"];
    }
}

public function doQuery() {
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
                ,AMOUNT
                ,BPARTNER_FROM
                ,BPARTNER_TO
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,IINV_ID
                ,IS_APPROVED
                ,IS_GENERATED
                ,IS_INSERTED
                ,IS_MULTI_PAYMENT
                ,IS_PAYABLE
                ,IS_POSTED
                ,IS_PREPAYMENT
                ,IS_RECEIVABLE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,PAYDOCTYPE_CODE
                ,PAYMNT_ACCT
                ,PREPAY_ACCT
                ,RINV_ID
            from PAYMENT  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->getDbConn()->Execute($sql, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,PAYMNT_ACCT
                ,IS_INSERTED
                ,IS_GENERATED
                ,IS_APPROVED
                ,IS_POSTED
                ,ACCDOC_ID
                ,IS_PREPAYMENT
                ,PREPAY_ACCT
                ,RINV_ID
                ,IS_MULTI_PAYMENT
                ,IINV_ID
            from PAYMENT  $where $orderByClause ";
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
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0044.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into PAYMENT(
                 ACCDOC_ID
                ,AMOUNT
                ,BPARTNER_FROM
                ,BPARTNER_TO
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,IINV_ID
                ,IS_APPROVED
                ,IS_GENERATED
                ,IS_INSERTED
                ,IS_MULTI_PAYMENT
                ,IS_PAYABLE
                ,IS_POSTED
                ,IS_PREPAYMENT
                ,IS_RECEIVABLE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,PAYDOCTYPE_CODE
                ,PAYMNT_ACCT
                ,PREPAY_ACCT
                ,RINV_ID
            ) values ( 
                 :ACCDOC_ID
                ,:AMOUNT
                ,:BPARTNER_FROM
                ,:BPARTNER_TO
                ,:CLIENT_ID
                ,:CREATEDBY
                ,:CREATEDON
                ,:CURRENCY
                ,:DOC_DATE
                ,:DOC_NO
                ,:ID
                ,:IINV_ID
                ,:IS_APPROVED
                ,:IS_GENERATED
                ,:IS_INSERTED
                ,:IS_MULTI_PAYMENT
                ,:IS_PAYABLE
                ,:IS_POSTED
                ,:IS_PREPAYMENT
                ,:IS_RECEIVABLE
                ,:MODIFIEDBY
                ,:MODIFIEDON
                ,:NOTES
                ,:PAYDOCTYPE_CODE
                ,:PAYMNT_ACCT
                ,:PREPAY_ACCT
                ,:RINV_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_PAYMENT_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0044.doUpdate().");}
    $sql = "update PAYMENT set 
                 ID=:ID
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
                ,PAYMNT_ACCT=:PAYMNT_ACCT
                ,RINV_ID=:RINV_ID
                ,IS_MULTI_PAYMENT=:IS_MULTI_PAYMENT
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"],"ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0044.doDelete().");}
    $sql = "delete from PAYMENT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0044");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACCDOC_ID
                ,AMOUNT
                ,BPARTNER_FROM
                ,BPARTNER_TO
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,IINV_ID
                ,IS_APPROVED
                ,IS_GENERATED
                ,IS_INSERTED
                ,IS_MULTI_PAYMENT
                ,IS_PAYABLE
                ,IS_POSTED
                ,IS_PREPAYMENT
                ,IS_RECEIVABLE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NOTES
                ,PAYDOCTYPE_CODE
                ,PAYMNT_ACCT
                ,PREPAY_ACCT
                ,RINV_ID
            from PAYMENT 
         where 
           ID= :ID
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
  "ACCDOC_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_FROM" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_TO" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_APPROVED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_GENERATED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_INSERTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_MULTI_PAYMENT" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_PAYABLE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_POSTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_PREPAYMENT" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_RECEIVABLE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PAYDOCTYPE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PAYMNT_ACCT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PREPAY_ACCT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"RINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
