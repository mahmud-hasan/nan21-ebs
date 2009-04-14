<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0041 Controller: Received invoice items
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0041 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

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
                ,pbo_product.get_code_by_id(rii.prod_id,'N') PROD_CODE
                ,rii.PROD_ID
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
                rii.ID
                ,rii.RINV_ID
                ,pbo_product.get_code_by_id(rii.prod_id,'N') PROD_CODE
                ,rii.PROD_ID
                ,rii.NOTES
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0041.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
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
                ,:QUANTITY
                ,:QUANTITY_UNIT
                ,:RINVITEM_ID
                ,:RINV_ID
                ,:TAX_AMOUNT
                ,:TAX_AMOUNT_NR
                ,:TAX_ID
                ,:TAX_RATE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_RINVITEM_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0041.doUpdate().");}
    $sql = "update RINVOICE_ITEM set 
                 ORIG_AMOUNT=:ORIG_AMOUNT
                ,ORIG_CURRENCY=:ORIG_CURRENCY
                ,ID=:ID
                ,RINV_ID=:RINV_ID
                ,PROD_ID=:PROD_ID
                ,QUANTITY=:QUANTITY
                ,QUANTITY_UNIT=:QUANTITY_UNIT
                ,NET_AMOUNT=:NET_AMOUNT
                ,NOTES=:NOTES
                ,TAX_ID=:TAX_ID
                ,TAX_RATE=:TAX_RATE
                ,TAX_AMOUNT=:TAX_AMOUNT
                ,CURRENCY=:CURRENCY
                ,CURRENCY_XRATE=:CURRENCY_XRATE
                ,TAX_AMOUNT_NR=:TAX_AMOUNT_NR
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0041.doDelete().");}
    $sql = "delete from RINVOICE_ITEM where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0041");
    print "{success:true, data:".json_encode($this->record)."}";
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
                ,pbo_product.get_code_by_id(rii.prod_id,'N') PROD_CODE
                ,rii.PROD_ID
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
  "CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CURRENCY_XRATE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORIG_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORIG_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PROD_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROD_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QUANTITY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QUANTITY_UNIT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"RINVITEM_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TAX_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TAX_AMOUNT_NR" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TAX_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TAX_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TAX_RATE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
