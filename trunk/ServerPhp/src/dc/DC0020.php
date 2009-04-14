<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0020 Controller: Issued invoice items
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0020 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY_XRATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.CURRENCY_XRATE like :CURRENCY_XRATE";
      $params["CURRENCY_XRATE"] = $_REQUEST["QRY_CURRENCY_XRATE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IINVITEM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.IINVITEM_ID like :IINVITEM_ID";
      $params["IINVITEM_ID"] = $_REQUEST["QRY_IINVITEM_ID"];
    }
    if (!empty($_REQUEST["QRY_IINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.IINV_ID like :IINV_ID";
      $params["IINV_ID"] = $_REQUEST["QRY_IINV_ID"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_NET_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.NET_AMOUNT like :NET_AMOUNT";
      $params["NET_AMOUNT"] = $_REQUEST["QRY_NET_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_ORIG_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.ORIG_CURRENCY like :ORIG_CURRENCY";
      $params["ORIG_CURRENCY"] = $_REQUEST["QRY_ORIG_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_ORIG_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.ORIG_PRICE like :ORIG_PRICE";
      $params["ORIG_PRICE"] = $_REQUEST["QRY_ORIG_PRICE"];
    }
    if (!empty($_REQUEST["QRY_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.PRICE like :PRICE";
      $params["PRICE"] = $_REQUEST["QRY_PRICE"];
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
    if (!empty($_REQUEST["QRY_TAX_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.TAX_AMOUNT like :TAX_AMOUNT";
      $params["TAX_AMOUNT"] = $_REQUEST["QRY_TAX_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_TAX_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.TAX_ID like :TAX_ID";
      $params["TAX_ID"] = $_REQUEST["QRY_TAX_ID"];
    }
    if (!empty($_REQUEST["QRY_TAX_RATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "iii.TAX_RATE like :TAX_RATE";
      $params["TAX_RATE"] = $_REQUEST["QRY_TAX_RATE"];
    }
}

public function doQuery() {
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
                iii.CREATEDBY
                ,iii.CREATEDON
                ,iii.CURRENCY
                ,iii.CURRENCY_XRATE
                ,iii.ID
                ,iii.IINVITEM_ID
                ,iii.IINV_ID
                ,iii.MODIFIEDBY
                ,iii.MODIFIEDON
                ,iii.NET_AMOUNT
                ,iii.NOTES
                ,iii.ORIG_CURRENCY
                ,iii.ORIG_PRICE
                ,iii.PRICE
                ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE
                ,iii.PROD_ID
                ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME
                ,iii.QUANTITY
                ,iii.QUANTITY_UNIT
                ,iii.TAX_AMOUNT
                ,iii.TAX_ID
                ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME
                ,iii.TAX_RATE
            from IINVOICE_ITEM iii $where $orderByClause ";
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
                iii.IINV_ID
                ,iii.ID
                ,iii.PROD_ID
                ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE
                ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME
                ,iii.QUANTITY
                ,iii.QUANTITY_UNIT
                ,iii.ORIG_PRICE
                ,iii.ORIG_CURRENCY
                ,iii.CURRENCY_XRATE
                ,iii.PRICE
                ,iii.CURRENCY
                ,iii.NET_AMOUNT
                ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME
                ,iii.TAX_RATE
                ,iii.TAX_ID
                ,iii.TAX_AMOUNT
                ,iii.NOTES
                ,iii.CREATEDON
                ,iii.CREATEDBY
                ,iii.MODIFIEDON
                ,iii.MODIFIEDBY
                ,iii.IINVITEM_ID
            from IINVOICE_ITEM iii $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0020.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into IINVOICE_ITEM(
                 CREATEDBY
                ,CREATEDON
                ,CURRENCY
                ,CURRENCY_XRATE
                ,ID
                ,IINVITEM_ID
                ,IINV_ID
                ,MODIFIEDBY
                ,NET_AMOUNT
                ,NOTES
                ,ORIG_CURRENCY
                ,ORIG_PRICE
                ,PRICE
                ,PROD_ID
                ,QUANTITY
                ,QUANTITY_UNIT
                ,TAX_AMOUNT
                ,TAX_ID
                ,TAX_RATE
            ) values ( 
                 :CREATEDBY
                ,:CREATEDON
                ,:CURRENCY
                ,:CURRENCY_XRATE
                ,:ID
                ,:IINVITEM_ID
                ,:IINV_ID
                ,:MODIFIEDBY
                ,:NET_AMOUNT
                ,:NOTES
                ,:ORIG_CURRENCY
                ,:ORIG_PRICE
                ,:PRICE
                ,:PROD_ID
                ,:QUANTITY
                ,:QUANTITY_UNIT
                ,:TAX_AMOUNT
                ,:TAX_ID
                ,:TAX_RATE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_iinvitem_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0020.doUpdate().");}
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
                ,TAX_ID=:TAX_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0020.doDelete().");}
    $sql = "delete from IINVOICE_ITEM where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0020");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                iii.CREATEDBY
                ,iii.CREATEDON
                ,iii.CURRENCY
                ,iii.CURRENCY_XRATE
                ,iii.ID
                ,iii.IINVITEM_ID
                ,iii.IINV_ID
                ,iii.MODIFIEDBY
                ,iii.MODIFIEDON
                ,iii.NET_AMOUNT
                ,iii.NOTES
                ,iii.ORIG_CURRENCY
                ,iii.ORIG_PRICE
                ,iii.PRICE
                ,pbo_product.get_code_by_id(iii.prod_id,'N') PROD_CODE
                ,iii.PROD_ID
                ,pbo_product.get_name_by_id(iii.prod_id,'N') PROD_NAME
                ,iii.QUANTITY
                ,iii.QUANTITY_UNIT
                ,iii.TAX_AMOUNT
                ,iii.TAX_ID
                ,(select t.name from tax t where t.id = iii.tax_id) TAX_NAME
                ,iii.TAX_RATE
            from IINVOICE_ITEM iii
         where 
           iii.ID= :ID
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
  ,"IINVITEM_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LINE_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORIG_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORIG_PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PROD_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROD_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PROD_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QUANTITY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QUANTITY_UNIT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TAX_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TAX_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TAX_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TAX_RATE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
