<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0041 Controller: Received invoice items
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0041 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY_XRATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.CURRENCY_XRATE like :CURRENCY_XRATE";
      $params["CURRENCY_XRATE"] = $_REQUEST["QRY_CURRENCY_XRATE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_NET_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.NET_AMOUNT like :NET_AMOUNT";
      $params["NET_AMOUNT"] = $_REQUEST["QRY_NET_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_ORIG_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.ORIG_AMOUNT like :ORIG_AMOUNT";
      $params["ORIG_AMOUNT"] = $_REQUEST["QRY_ORIG_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_ORIG_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.ORIG_CURRENCY like :ORIG_CURRENCY";
      $params["ORIG_CURRENCY"] = $_REQUEST["QRY_ORIG_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.PRICE like :PRICE";
      $params["PRICE"] = $_REQUEST["QRY_PRICE"];
    }
    if (!empty($_REQUEST["QRY_PROD_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.PROD_ID like :PROD_ID";
      $params["PROD_ID"] = $_REQUEST["QRY_PROD_ID"];
    }
    if (!empty($_REQUEST["QRY_PURCHASE_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.PURCHASE_ACCT like :PURCHASE_ACCT";
      $params["PURCHASE_ACCT"] = $_REQUEST["QRY_PURCHASE_ACCT"];
    }
    if (!empty($_REQUEST["QRY_QUANTITY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.QUANTITY like :QUANTITY";
      $params["QUANTITY"] = $_REQUEST["QRY_QUANTITY"];
    }
    if (!empty($_REQUEST["QRY_QUANTITY_UNIT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.QUANTITY_UNIT like :QUANTITY_UNIT";
      $params["QUANTITY_UNIT"] = $_REQUEST["QRY_QUANTITY_UNIT"];
    }
    if (!empty($_REQUEST["QRY_RINVITEM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.RINVITEM_ID like :RINVITEM_ID";
      $params["RINVITEM_ID"] = $_REQUEST["QRY_RINVITEM_ID"];
    }
    if (!empty($_REQUEST["QRY_RINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.RINV_ID like :RINV_ID";
      $params["RINV_ID"] = $_REQUEST["QRY_RINV_ID"];
    }
    if (!empty($_REQUEST["QRY_TAX_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.TAX_AMOUNT like :TAX_AMOUNT";
      $params["TAX_AMOUNT"] = $_REQUEST["QRY_TAX_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_TAX_AMOUNT_NR"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.TAX_AMOUNT_NR like :TAX_AMOUNT_NR";
      $params["TAX_AMOUNT_NR"] = $_REQUEST["QRY_TAX_AMOUNT_NR"];
    }
    if (!empty($_REQUEST["QRY_TAX_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.TAX_ID like :TAX_ID";
      $params["TAX_ID"] = $_REQUEST["QRY_TAX_ID"];
    }
    if (!empty($_REQUEST["QRY_TAX_RATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rii.TAX_RATE like :TAX_RATE";
      $params["TAX_RATE"] = $_REQUEST["QRY_TAX_RATE"];
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
                rii.CREATEDBY
                ,rii.CREATEDON
                ,rii.CURRENCY
                ,rii.CURRENCY_XRATE
                ,rii.ID
                ,rii.MODIFIEDBY
                ,rii.MODIFIEDON
                ,rii.NET_AMOUNT
                ,rii.NOTES
                ,rii.ORIG_AMOUNT
                ,rii.ORIG_CURRENCY
                ,rii.PRICE
                ,(select t.code from product t where t.id = rii.prod_id ) PROD_CODE
                ,rii.PROD_ID
                ,rii.PURCHASE_ACCT
                ,rii.QUANTITY
                ,rii.QUANTITY_UNIT
                ,rii.RINVITEM_ID
                ,rii.RINV_ID
                ,rii.TAX_AMOUNT
                ,rii.TAX_AMOUNT_NR
                ,rii.TAX_ID
                ,(select t.name from tax t where t.id = rii.tax_id) TAX_NAME
                ,rii.TAX_RATE
            from RINVOICE_ITEM rii $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CREATEDBY"
      ,"CREATEDON"
      ,"CURRENCY"
      ,"CURRENCY_XRATE"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NET_AMOUNT"
      ,"NOTES"
      ,"ORIG_AMOUNT"
      ,"ORIG_CURRENCY"
      ,"PRICE"
      ,"PROD_CODE"
      ,"PROD_ID"
      ,"PURCHASE_ACCT"
      ,"QUANTITY"
      ,"QUANTITY_UNIT"
      ,"RINVITEM_ID"
      ,"RINV_ID"
      ,"TAX_AMOUNT"
      ,"TAX_AMOUNT_NR"
      ,"TAX_ID"
      ,"TAX_NAME"
      ,"TAX_RATE"
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
                rii.ID
                ,rii.RINV_ID
                ,(select t.code from product t where t.id = rii.prod_id ) PROD_CODE
                ,rii.NOTES
                ,rii.PROD_ID
                ,rii.PURCHASE_ACCT
                ,rii.NET_AMOUNT
                ,rii.CURRENCY
                ,(select t.name from tax t where t.id = rii.tax_id) TAX_NAME
                ,rii.TAX_ID
                ,rii.TAX_RATE
                ,rii.TAX_AMOUNT
                ,rii.TAX_AMOUNT_NR
                ,rii.ORIG_AMOUNT
                ,rii.ORIG_CURRENCY
                ,rii.CURRENCY_XRATE
                ,rii.QUANTITY
                ,rii.QUANTITY_UNIT
                ,rii.PRICE
                ,rii.CREATEDON
                ,rii.CREATEDBY
                ,rii.MODIFIEDON
                ,rii.MODIFIEDBY
                ,rii.RINVITEM_ID
            from RINVOICE_ITEM rii $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"RINV_ID"
     ,"PROD_CODE"
     ,"NOTES"
     ,"PROD_ID"
     ,"PURCHASE_ACCT"
     ,"NET_AMOUNT"
     ,"CURRENCY"
     ,"TAX_NAME"
     ,"TAX_ID"
     ,"TAX_RATE"
     ,"TAX_AMOUNT"
     ,"TAX_AMOUNT_NR"
     ,"ORIG_AMOUNT"
     ,"ORIG_CURRENCY"
     ,"CURRENCY_XRATE"
     ,"QUANTITY"
     ,"QUANTITY_UNIT"
     ,"PRICE"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"RINVITEM_ID"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0041.fetchRecord().");}
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
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE");
    $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID");
    $RECORD["PURCHASE_ACCT"] = $this->getRequestParam("PURCHASE_ACCT");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT");
    $RECORD["RINVITEM_ID"] = $this->getRequestParam("RINVITEM_ID");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT");
    $RECORD["TAX_AMOUNT_NR"] = $this->getRequestParam("TAX_AMOUNT_NR");
    $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID");
    $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME");
    $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE");
    $sql = "insert into RINVOICE_ITEM(
                 CREATEDBY
                ,CREATEDON
                ,CURRENCY
                ,CURRENCY_XRATE
                ,ID
                ,MODIFIEDBY
                ,NET_AMOUNT
                ,NOTES
                ,ORIG_AMOUNT
                ,ORIG_CURRENCY
                ,PRICE
                ,PROD_ID
                ,PURCHASE_ACCT
                ,QUANTITY
                ,QUANTITY_UNIT
                ,RINVITEM_ID
                ,RINV_ID
                ,TAX_AMOUNT
                ,TAX_AMOUNT_NR
                ,TAX_ID
                ,TAX_RATE
            ) values ( 
                 :CREATEDBY
                ,:CREATEDON
                ,:CURRENCY
                ,:CURRENCY_XRATE
                ,:ID
                ,:MODIFIEDBY
                ,:NET_AMOUNT
                ,:NOTES
                ,:ORIG_AMOUNT
                ,:ORIG_CURRENCY
                ,:PRICE
                ,:PROD_ID
                ,:PURCHASE_ACCT
                ,:QUANTITY
                ,:QUANTITY_UNIT
                ,:RINVITEM_ID
                ,:RINV_ID
                ,:TAX_AMOUNT
                ,:TAX_AMOUNT_NR
                ,:TAX_ID
                ,:TAX_RATE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_RINVITEM_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE");
    $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID");
    $RECORD["PURCHASE_ACCT"] = $this->getRequestParam("PURCHASE_ACCT");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT");
    $RECORD["TAX_AMOUNT_NR"] = $this->getRequestParam("TAX_AMOUNT_NR");
    $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID");
    $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME");
    $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0041.doUpdate().");}
    $sql = "update RINVOICE_ITEM set 
                 CURRENCY=:CURRENCY
                ,CURRENCY_XRATE=:CURRENCY_XRATE
                ,ID=:ID
                ,NET_AMOUNT=:NET_AMOUNT
                ,NOTES=:NOTES
                ,ORIG_AMOUNT=:ORIG_AMOUNT
                ,ORIG_CURRENCY=:ORIG_CURRENCY
                ,PROD_ID=:PROD_ID
                ,PURCHASE_ACCT=:PURCHASE_ACCT
                ,RINV_ID=:RINV_ID
                ,TAX_AMOUNT=:TAX_AMOUNT
                ,TAX_AMOUNT_NR=:TAX_AMOUNT_NR
                ,TAX_ID=:TAX_ID
                ,TAX_RATE=:TAX_RATE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0041.doDelete().");}
    $sql = "delete from RINVOICE_ITEM where 
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
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE");
    $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID");
    $RECORD["PURCHASE_ACCT"] = $this->getRequestParam("PURCHASE_ACCT");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT");
    $RECORD["RINVITEM_ID"] = $this->getRequestParam("RINVITEM_ID");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT");
    $RECORD["TAX_AMOUNT_NR"] = $this->getRequestParam("TAX_AMOUNT_NR");
    $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID");
    $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME");
    $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0041");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                rii.CREATEDBY
                ,rii.CREATEDON
                ,rii.CURRENCY
                ,rii.CURRENCY_XRATE
                ,rii.ID
                ,rii.MODIFIEDBY
                ,rii.MODIFIEDON
                ,rii.NET_AMOUNT
                ,rii.NOTES
                ,rii.ORIG_AMOUNT
                ,rii.ORIG_CURRENCY
                ,rii.PRICE
                ,(select t.code from product t where t.id = rii.prod_id ) PROD_CODE
                ,rii.PROD_ID
                ,rii.PURCHASE_ACCT
                ,rii.QUANTITY
                ,rii.QUANTITY_UNIT
                ,rii.RINVITEM_ID
                ,rii.RINV_ID
                ,rii.TAX_AMOUNT
                ,rii.TAX_AMOUNT_NR
                ,rii.TAX_ID
                ,(select t.name from tax t where t.id = rii.tax_id) TAX_NAME
                ,rii.TAX_RATE
            from RINVOICE_ITEM rii
         where 
           rii.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"CURRENCY_XRATE" => array("DATA_TYPE" => "NUMBER")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"ORIG_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"ORIG_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"PRICE" => array("DATA_TYPE" => "NUMBER")
  ,"PROD_CODE" => array("DATA_TYPE" => "STRING")
  ,"PROD_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PURCHASE_ACCT" => array("DATA_TYPE" => "STRING")
  ,"QUANTITY" => array("DATA_TYPE" => "NUMBER")
  ,"QUANTITY_UNIT" => array("DATA_TYPE" => "STRING")
  ,"RINVITEM_ID" => array("DATA_TYPE" => "NUMBER")
  ,"RINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"TAX_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"TAX_AMOUNT_NR" => array("DATA_TYPE" => "NUMBER")
  ,"TAX_ID" => array("DATA_TYPE" => "NUMBER")
  ,"TAX_NAME" => array("DATA_TYPE" => "STRING")
  ,"TAX_RATE" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY"] )) { $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY"); }
     if (isset($_REQUEST["CURRENCY_XRATE"] )) { $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NET_AMOUNT"] )) { $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["ORIG_AMOUNT"] )) { $RECORD["ORIG_AMOUNT"] = $this->getRequestParam("ORIG_AMOUNT"); }
     if (isset($_REQUEST["ORIG_CURRENCY"] )) { $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY"); }
     if (isset($_REQUEST["PRICE"] )) { $RECORD["PRICE"] = $this->getRequestParam("PRICE"); }
     if (isset($_REQUEST["PROD_CODE"] )) { $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE"); }
     if (isset($_REQUEST["PROD_ID"] )) { $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID"); }
     if (isset($_REQUEST["PURCHASE_ACCT"] )) { $RECORD["PURCHASE_ACCT"] = $this->getRequestParam("PURCHASE_ACCT"); }
     if (isset($_REQUEST["QUANTITY"] )) { $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY"); }
     if (isset($_REQUEST["QUANTITY_UNIT"] )) { $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT"); }
     if (isset($_REQUEST["RINVITEM_ID"] )) { $RECORD["RINVITEM_ID"] = $this->getRequestParam("RINVITEM_ID"); }
     if (isset($_REQUEST["RINV_ID"] )) { $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID"); }
     if (isset($_REQUEST["TAX_AMOUNT"] )) { $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT"); }
     if (isset($_REQUEST["TAX_AMOUNT_NR"] )) { $RECORD["TAX_AMOUNT_NR"] = $this->getRequestParam("TAX_AMOUNT_NR"); }
     if (isset($_REQUEST["TAX_ID"] )) { $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID"); }
     if (isset($_REQUEST["TAX_NAME"] )) { $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME"); }
     if (isset($_REQUEST["TAX_RATE"] )) { $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE"); }
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
