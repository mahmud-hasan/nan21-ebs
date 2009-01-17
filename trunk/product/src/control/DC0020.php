<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0020 Controller: Issued invoice items
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0020 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.IINV_ID like :IINV_ID";
      $params["IINV_ID"] = $_REQUEST["QRY_IINV_ID"];
    }
    if (!empty($_REQUEST["QRY_PROD_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.PROD_ID like :PROD_ID";
      $params["PROD_ID"] = $_REQUEST["QRY_PROD_ID"];
    }
    if (!empty($_REQUEST["QRY_QUANTITY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.QUANTITY like :QUANTITY";
      $params["QUANTITY"] = $_REQUEST["QRY_QUANTITY"];
    }
    if (!empty($_REQUEST["QRY_QUANTITY_UNIT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.QUANTITY_UNIT like :QUANTITY_UNIT";
      $params["QUANTITY_UNIT"] = $_REQUEST["QRY_QUANTITY_UNIT"];
    }
    if (!empty($_REQUEST["QRY_ORIG_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.ORIG_PRICE like :ORIG_PRICE";
      $params["ORIG_PRICE"] = $_REQUEST["QRY_ORIG_PRICE"];
    }
    if (!empty($_REQUEST["QRY_NET_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.NET_AMOUNT like :NET_AMOUNT";
      $params["NET_AMOUNT"] = $_REQUEST["QRY_NET_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_ORIG_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.ORIG_CURRENCY like :ORIG_CURRENCY";
      $params["ORIG_CURRENCY"] = $_REQUEST["QRY_ORIG_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.PRICE like :PRICE";
      $params["PRICE"] = $_REQUEST["QRY_PRICE"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY_XRATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CURRENCY_XRATE like :CURRENCY_XRATE";
      $params["CURRENCY_XRATE"] = $_REQUEST["QRY_CURRENCY_XRATE"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_IINVITEM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.IINVITEM_ID like :IINVITEM_ID";
      $params["IINVITEM_ID"] = $_REQUEST["QRY_IINVITEM_ID"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_TAX_RATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.TAX_RATE like :TAX_RATE";
      $params["TAX_RATE"] = $_REQUEST["QRY_TAX_RATE"];
    }
    if (!empty($_REQUEST["QRY_TAX_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.TAX_AMOUNT like :TAX_AMOUNT";
      $params["TAX_AMOUNT"] = $_REQUEST["QRY_TAX_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_SALES_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.SALES_ACCT like :SALES_ACCT";
      $params["SALES_ACCT"] = $_REQUEST["QRY_SALES_ACCT"];
    }
    if (!empty($_REQUEST["QRY_TAX_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.TAX_ID like :TAX_ID";
      $params["TAX_ID"] = $_REQUEST["QRY_TAX_ID"];
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
                iii.ID
                ,iii.IINV_ID
                ,iii.PROD_ID
                ,iii.QUANTITY
                ,iii.QUANTITY_UNIT
                ,iii.ORIG_PRICE
                ,iii.NET_AMOUNT
                ,iii.ORIG_CURRENCY
                ,iii.PRICE
                ,iii.CURRENCY_XRATE
                ,iii.CREATEDON
                ,iii.CREATEDBY
                ,iii.MODIFIEDON
                ,iii.MODIFIEDBY
                ,iii.IINVITEM_ID
                ,iii.NOTES
                ,iii.TAX_RATE
                ,iii.TAX_AMOUNT
                ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE
                ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME
                ,iii.CURRENCY
                ,iii.SALES_ACCT
                ,iii.TAX_ID
                ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME
            from IINVOICE_ITEM iii $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"IINV_ID"
      ,"PROD_ID"
      ,"QUANTITY"
      ,"QUANTITY_UNIT"
      ,"ORIG_PRICE"
      ,"NET_AMOUNT"
      ,"ORIG_CURRENCY"
      ,"PRICE"
      ,"CURRENCY_XRATE"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"IINVITEM_ID"
      ,"NOTES"
      ,"TAX_RATE"
      ,"TAX_AMOUNT"
      ,"PROD_CODE"
      ,"PROD_NAME"
      ,"CURRENCY"
      ,"SALES_ACCT"
      ,"TAX_ID"
      ,"TAX_NAME"
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
                iii.ID
                ,iii.IINV_ID
                ,iii.PROD_ID
                ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE
                ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME
                ,iii.SALES_ACCT
                ,iii.QUANTITY
                ,iii.QUANTITY_UNIT
                ,iii.ORIG_PRICE
                ,iii.ORIG_CURRENCY
                ,iii.CURRENCY_XRATE
                ,iii.PRICE
                ,iii.CURRENCY
                ,iii.NET_AMOUNT
                ,iii.TAX_ID
                ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME
                ,iii.TAX_RATE
                ,iii.TAX_AMOUNT
                ,iii.NOTES
                ,iii.CREATEDON
                ,iii.CREATEDBY
                ,iii.MODIFIEDON
                ,iii.MODIFIEDBY
                ,iii.IINVITEM_ID
            from IINVOICE_ITEM iii $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"IINV_ID"
     ,"PROD_ID"
     ,"PROD_CODE"
     ,"PROD_NAME"
     ,"SALES_ACCT"
     ,"QUANTITY"
     ,"QUANTITY_UNIT"
     ,"ORIG_PRICE"
     ,"ORIG_CURRENCY"
     ,"CURRENCY_XRATE"
     ,"PRICE"
     ,"CURRENCY"
     ,"NET_AMOUNT"
     ,"TAX_ID"
     ,"TAX_NAME"
     ,"TAX_RATE"
     ,"TAX_AMOUNT"
     ,"NOTES"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"IINVITEM_ID"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0020.fetchRecord().");}
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
    $RECORD["IINVITEM_ID"] = $this->getRequestParam("IINVITEM_ID");
    $RECORD["IINV_ID"] = $this->getRequestParam("IINV_ID");
    $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["ORIG_PRICE"] = $this->getRequestParam("ORIG_PRICE");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE");
    $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID");
    $RECORD["PROD_NAME"] = $this->getRequestParam("PROD_NAME");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT");
    $RECORD["SALES_ACCT"] = $this->getRequestParam("SALES_ACCT");
    $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT");
    $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID");
    $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME");
    $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE");
    $sql = "insert into IINVOICE_ITEM(
                 ID
                ,IINV_ID
                ,PROD_ID
                ,QUANTITY
                ,QUANTITY_UNIT
                ,ORIG_PRICE
                ,NET_AMOUNT
                ,ORIG_CURRENCY
                ,PRICE
                ,CURRENCY_XRATE
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDBY
                ,IINVITEM_ID
                ,NOTES
                ,TAX_RATE
                ,TAX_AMOUNT
                ,CURRENCY
                ,SALES_ACCT
                ,TAX_ID
            ) values ( 
                 :ID
                ,:IINV_ID
                ,:PROD_ID
                ,:QUANTITY
                ,:QUANTITY_UNIT
                ,:ORIG_PRICE
                ,:NET_AMOUNT
                ,:ORIG_CURRENCY
                ,:PRICE
                ,:CURRENCY_XRATE
                ,:CREATEDON
                ,:CREATEDBY
                ,:MODIFIEDBY
                ,:IINVITEM_ID
                ,:NOTES
                ,:TAX_RATE
                ,:TAX_AMOUNT
                ,:CURRENCY
                ,:SALES_ACCT
                ,:TAX_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_iinvitem_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["IINVITEM_ID"] = $this->getRequestParam("IINVITEM_ID");
    $RECORD["IINV_ID"] = $this->getRequestParam("IINV_ID");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["ORIG_PRICE"] = $this->getRequestParam("ORIG_PRICE");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE");
    $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID");
    $RECORD["PROD_NAME"] = $this->getRequestParam("PROD_NAME");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT");
    $RECORD["SALES_ACCT"] = $this->getRequestParam("SALES_ACCT");
    $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT");
    $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID");
    $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME");
    $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0020.doUpdate().");}
    $sql = "update IINVOICE_ITEM set 
                 ID=:ID
                ,IINV_ID=:IINV_ID
                ,PROD_ID=:PROD_ID
                ,QUANTITY=:QUANTITY
                ,QUANTITY_UNIT=:QUANTITY_UNIT
                ,ORIG_PRICE=:ORIG_PRICE
                ,NET_AMOUNT=:NET_AMOUNT
                ,ORIG_CURRENCY=:ORIG_CURRENCY
                ,PRICE=:PRICE
                ,CURRENCY_XRATE=:CURRENCY_XRATE
                ,IINVITEM_ID=:IINVITEM_ID
                ,NOTES=:NOTES
                ,TAX_RATE=:TAX_RATE
                ,TAX_AMOUNT=:TAX_AMOUNT
                ,CURRENCY=:CURRENCY
                ,SALES_ACCT=:SALES_ACCT
                ,TAX_ID=:TAX_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0020.doDelete().");}
    $sql = "delete from IINVOICE_ITEM where 
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
    $RECORD["IINVITEM_ID"] = $this->getRequestParam("IINVITEM_ID");
    $RECORD["IINV_ID"] = $this->getRequestParam("IINV_ID");
    $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY");
    $RECORD["ORIG_PRICE"] = $this->getRequestParam("ORIG_PRICE");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE");
    $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID");
    $RECORD["PROD_NAME"] = $this->getRequestParam("PROD_NAME");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT");
    $RECORD["SALES_ACCT"] = $this->getRequestParam("SALES_ACCT");
    $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT");
    $RECORD["TAX_ID"] = $this->getRequestParam("TAX_ID");
    $RECORD["TAX_NAME"] = $this->getRequestParam("TAX_NAME");
    $RECORD["TAX_RATE"] = $this->getRequestParam("TAX_RATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0020");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                iii.ID
                ,iii.IINV_ID
                ,iii.PROD_ID
                ,iii.QUANTITY
                ,iii.QUANTITY_UNIT
                ,iii.ORIG_PRICE
                ,iii.NET_AMOUNT
                ,iii.ORIG_CURRENCY
                ,iii.PRICE
                ,iii.CURRENCY_XRATE
                ,iii.CREATEDON
                ,iii.CREATEDBY
                ,iii.MODIFIEDON
                ,iii.MODIFIEDBY
                ,iii.IINVITEM_ID
                ,iii.NOTES
                ,iii.TAX_RATE
                ,iii.TAX_AMOUNT
                ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE
                ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME
                ,iii.CURRENCY
                ,iii.SALES_ACCT
                ,iii.TAX_ID
                ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME
            from IINVOICE_ITEM iii
         where 
           iii.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"IINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PROD_ID" => array("DATA_TYPE" => "NUMBER")
  ,"QUANTITY" => array("DATA_TYPE" => "NUMBER")
  ,"QUANTITY_UNIT" => array("DATA_TYPE" => "STRING")
  ,"ORIG_PRICE" => array("DATA_TYPE" => "NUMBER")
  ,"NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"ORIG_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"PRICE" => array("DATA_TYPE" => "NUMBER")
  ,"CURRENCY_XRATE" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"IINVITEM_ID" => array("DATA_TYPE" => "NUMBER")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"TAX_RATE" => array("DATA_TYPE" => "NUMBER")
  ,"TAX_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"PROD_CODE" => array("DATA_TYPE" => "STRING")
  ,"PROD_NAME" => array("DATA_TYPE" => "STRING")
  ,"CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"SALES_ACCT" => array("DATA_TYPE" => "STRING")
  ,"TAX_ID" => array("DATA_TYPE" => "NUMBER")
  ,"TAX_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY"] )) { $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY"); }
     if (isset($_REQUEST["CURRENCY_XRATE"] )) { $RECORD["CURRENCY_XRATE"] = $this->getRequestParam("CURRENCY_XRATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["IINVITEM_ID"] )) { $RECORD["IINVITEM_ID"] = $this->getRequestParam("IINVITEM_ID"); }
     if (isset($_REQUEST["IINV_ID"] )) { $RECORD["IINV_ID"] = $this->getRequestParam("IINV_ID"); }
     if (isset($_REQUEST["LINE_NO"] )) { $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NET_AMOUNT"] )) { $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["ORIG_CURRENCY"] )) { $RECORD["ORIG_CURRENCY"] = $this->getRequestParam("ORIG_CURRENCY"); }
     if (isset($_REQUEST["ORIG_PRICE"] )) { $RECORD["ORIG_PRICE"] = $this->getRequestParam("ORIG_PRICE"); }
     if (isset($_REQUEST["PRICE"] )) { $RECORD["PRICE"] = $this->getRequestParam("PRICE"); }
     if (isset($_REQUEST["PROD_CODE"] )) { $RECORD["PROD_CODE"] = $this->getRequestParam("PROD_CODE"); }
     if (isset($_REQUEST["PROD_ID"] )) { $RECORD["PROD_ID"] = $this->getRequestParam("PROD_ID"); }
     if (isset($_REQUEST["PROD_NAME"] )) { $RECORD["PROD_NAME"] = $this->getRequestParam("PROD_NAME"); }
     if (isset($_REQUEST["QUANTITY"] )) { $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY"); }
     if (isset($_REQUEST["QUANTITY_UNIT"] )) { $RECORD["QUANTITY_UNIT"] = $this->getRequestParam("QUANTITY_UNIT"); }
     if (isset($_REQUEST["SALES_ACCT"] )) { $RECORD["SALES_ACCT"] = $this->getRequestParam("SALES_ACCT"); }
     if (isset($_REQUEST["TAX_AMOUNT"] )) { $RECORD["TAX_AMOUNT"] = $this->getRequestParam("TAX_AMOUNT"); }
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
