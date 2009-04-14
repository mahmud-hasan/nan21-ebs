<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0004 Controller: Issued invoices
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0004 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_CURRENCY like :DOC_CURRENCY";
      $params["DOC_CURRENCY"] = $_REQUEST["QRY_DOC_CURRENCY"];
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
    if (!empty($_REQUEST["QRY_DOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_TYPE like :DOC_TYPE";
      $params["DOC_TYPE"] = $_REQUEST["QRY_DOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ISSUER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ISSUER_ID like :ISSUER_ID";
      $params["ISSUER_ID"] = $_REQUEST["QRY_ISSUER_ID"];
    }
    if (!empty($_REQUEST["QRY_RECEIVER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.RECEIVER_ID like :RECEIVER_ID";
      $params["RECEIVER_ID"] = $_REQUEST["QRY_RECEIVER_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_IINV_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.REF_IINV_DOC_NO like :REF_IINV_DOC_NO";
      $params["REF_IINV_DOC_NO"] = $_REQUEST["QRY_REF_IINV_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_REF_IINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.REF_IINV_ID like :REF_IINV_ID";
      $params["REF_IINV_ID"] = $_REQUEST["QRY_REF_IINV_ID"];
    }
}

public function doQuery() {
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
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CURRENCY_XRATE
                ,t.DOC_CURRENCY
                ,t.DOC_DATE
                ,t.DOC_NO
                ,doc_no_serial||doc_no DOC_NO_FULL
                ,t.DOC_NO_SERIAL
                ,t.DOC_TYPE
                ,t.DUE_DATE
                ,t.ID
                ,t.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(t.issuer_id) ISSUER_NAME
                ,t.IS_INSERTED
                ,t.IS_PRINTED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.RECEIVER_ID
                ,pbo_bpartner.get_name_by_id(t.receiver_id) RECEIVER_NAME
                ,t.REF_IINV_DOC_NO
                ,t.REF_IINV_ID
                ,t.TOTAL_AMOUNT
                ,t.TOTAL_NET_AMOUNT
                ,t.TOTAL_TAX_AMOUNT
            from IINVOICE t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->getDbConn()->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.ID
                ,t.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(t.issuer_id) ISSUER_NAME
                ,t.DOC_DATE
                ,t.DOC_TYPE
                ,t.DOC_CURRENCY
                ,t.DOC_NO_SERIAL
                ,t.DOC_NO
                ,doc_no_serial||doc_no DOC_NO_FULL
                ,t.RECEIVER_ID
                ,pbo_bpartner.get_name_by_id(t.receiver_id) RECEIVER_NAME
                ,t.NOTES
                ,t.DUE_DATE
                ,t.TOTAL_AMOUNT
                ,t.TOTAL_NET_AMOUNT
                ,t.TOTAL_TAX_AMOUNT
                ,t.CURRENCY_XRATE
                ,t.REF_IINV_DOC_NO
                ,t.REF_IINV_ID
                ,t.IS_INSERTED
                ,t.IS_PRINTED
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from IINVOICE t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0004.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into IINVOICE(
                 CLIENT_ID
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
                ,IS_PRINTED
                ,NOTES
                ,RECEIVER_ID
                ,REF_IINV_DOC_NO
                ,REF_IINV_ID
            ) values ( 
                 :CLIENT_ID
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
                ,:IS_PRINTED
                ,:NOTES
                ,:RECEIVER_ID
                ,:REF_IINV_DOC_NO
                ,:REF_IINV_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_iinv_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0004.doUpdate().");}
    $sql = "update IINVOICE set 
                 ID=:ID
                ,DOC_DATE=:DOC_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,ISSUER_ID=:ISSUER_ID
                ,RECEIVER_ID=:RECEIVER_ID
                ,DOC_TYPE=:DOC_TYPE
                ,DOC_CURRENCY=:DOC_CURRENCY
                ,DUE_DATE=:DUE_DATE
                ,REF_IINV_ID=:REF_IINV_ID
                ,REF_IINV_DOC_NO=:REF_IINV_DOC_NO
                ,IS_PRINTED=:IS_PRINTED
                ,NOTES=:NOTES
                ,CURRENCY_XRATE=:CURRENCY_XRATE
                ,DOC_NO_SERIAL=:DOC_NO_SERIAL
                ,DOC_NO=:DOC_NO
                ,IS_INSERTED=:IS_INSERTED
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0004.doDelete().");}
    $sql = "delete from IINVOICE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0004");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CURRENCY_XRATE
                ,t.DOC_CURRENCY
                ,t.DOC_DATE
                ,t.DOC_NO
                ,doc_no_serial||doc_no DOC_NO_FULL
                ,t.DOC_NO_SERIAL
                ,t.DOC_TYPE
                ,t.DUE_DATE
                ,t.ID
                ,t.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(t.issuer_id) ISSUER_NAME
                ,t.IS_INSERTED
                ,t.IS_PRINTED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.RECEIVER_ID
                ,pbo_bpartner.get_name_by_id(t.receiver_id) RECEIVER_NAME
                ,t.REF_IINV_DOC_NO
                ,t.REF_IINV_ID
                ,t.TOTAL_AMOUNT
                ,t.TOTAL_NET_AMOUNT
                ,t.TOTAL_TAX_AMOUNT
            from IINVOICE t
         where 
           t.ID= :ID
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
  "CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CURRENCY_XRATE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DOC_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_NO_FULL" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_NO_SERIAL" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DUE_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INV_LINE_COUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INV_STATUS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ISSUER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ISSUER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"IS_INSERTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_PRINTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORDER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PAYBY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RECEIVER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RECEIVER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REF_IINV_DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REF_IINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_TAX_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TRANSTYPE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"VAT_RATE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
