<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0064 Controller: Purchase order lines
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0064 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CURRENCY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.CURRENCY_CODE like :CURRENCY_CODE";
      $params["CURRENCY_CODE"] = $_REQUEST["QRY_CURRENCY_CODE"];
      $params["CURRENCY_CODE"] = strtoupper($params["CURRENCY_CODE"]);
    }
    if (!empty($_REQUEST["QRY_DATE_DELIVERED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.DATE_DELIVERED like :DATE_DELIVERED";
      $params["DATE_DELIVERED"] = $_REQUEST["QRY_DATE_DELIVERED"];
    }
    if (!empty($_REQUEST["QRY_DATE_PROMISED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.DATE_PROMISED like :DATE_PROMISED";
      $params["DATE_PROMISED"] = $_REQUEST["QRY_DATE_PROMISED"];
    }
    if (!empty($_REQUEST["QRY_DATE_REQUESTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.DATE_REQUESTED like :DATE_REQUESTED";
      $params["DATE_REQUESTED"] = $_REQUEST["QRY_DATE_REQUESTED"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LINE_NR"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.LINE_NR like :LINE_NR";
      $params["LINE_NR"] = $_REQUEST["QRY_LINE_NR"];
    }
    if (!empty($_REQUEST["QRY_NET_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.NET_AMOUNT like :NET_AMOUNT";
      $params["NET_AMOUNT"] = $_REQUEST["QRY_NET_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_PORDER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.PORDER_ID like :PORDER_ID";
      $params["PORDER_ID"] = $_REQUEST["QRY_PORDER_ID"];
    }
    if (!empty($_REQUEST["QRY_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.PRICE like :PRICE";
      $params["PRICE"] = $_REQUEST["QRY_PRICE"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_QTY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.QTY like :QTY";
      $params["QTY"] = $_REQUEST["QRY_QTY"];
    }
    if (!empty($_REQUEST["QRY_UOM_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.UOM_CODE like :UOM_CODE";
      $params["UOM_CODE"] = $_REQUEST["QRY_UOM_CODE"];
      $params["UOM_CODE"] = strtoupper($params["UOM_CODE"]);
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
                pol.CURRENCY_CODE
                ,pol.DATE_DELIVERED
                ,pol.DATE_PROMISED
                ,pol.DATE_REQUESTED
                ,pol.ID
                ,pol.LINE_NR
                ,pol.NET_AMOUNT
                ,pol.NOTES
                ,pol.PORDER_ID
                ,pol.PRICE
                ,pol.PRODUCT_ID
                ,pbo_product.get_name_by_id(pol.product_id,'N') PRODUCT_NAME
                ,pol.QTY
                ,pol.UOM_CODE
            from PURCHASE_ORDER_LINE pol $where $orderByClause ";
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
                pol.ID
                ,pol.PORDER_ID
                ,pol.LINE_NR
                ,pbo_product.get_name_by_id(pol.product_id,'N') PRODUCT_NAME
                ,pol.PRODUCT_ID
                ,pol.QTY
                ,pol.UOM_CODE
                ,pol.PRICE
                ,pol.CURRENCY_CODE
                ,pol.NET_AMOUNT
                ,pol.NOTES
                ,pol.DATE_REQUESTED
                ,pol.DATE_PROMISED
                ,pol.DATE_DELIVERED
            from PURCHASE_ORDER_LINE pol $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0064.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into PURCHASE_ORDER_LINE(
                 CURRENCY_CODE
                ,DATE_DELIVERED
                ,DATE_PROMISED
                ,DATE_REQUESTED
                ,ID
                ,LINE_NR
                ,NET_AMOUNT
                ,NOTES
                ,PORDER_ID
                ,PRICE
                ,PRODUCT_ID
                ,QTY
                ,UOM_CODE
            ) values ( 
                 :CURRENCY_CODE
                ,:DATE_DELIVERED
                ,:DATE_PROMISED
                ,:DATE_REQUESTED
                ,:ID
                ,:LINE_NR
                ,:NET_AMOUNT
                ,:NOTES
                ,:PORDER_ID
                ,:PRICE
                ,:PRODUCT_ID
                ,:QTY
                ,:UOM_CODE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0064.doUpdate().");}
    $sql = "update PURCHASE_ORDER_LINE set 
                 ID=:ID
                ,PORDER_ID=:PORDER_ID
                ,LINE_NR=:LINE_NR
                ,PRODUCT_ID=:PRODUCT_ID
                ,QTY=:QTY
                ,UOM_CODE=:UOM_CODE
                ,PRICE=:PRICE
                ,NET_AMOUNT=:NET_AMOUNT
                ,CURRENCY_CODE=:CURRENCY_CODE
                ,NOTES=:NOTES
                ,DATE_REQUESTED=:DATE_REQUESTED
                ,DATE_PROMISED=:DATE_PROMISED
                ,DATE_DELIVERED=:DATE_DELIVERED
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0064.doDelete().");}
    $sql = "delete from PURCHASE_ORDER_LINE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0064");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pol.CURRENCY_CODE
                ,pol.DATE_DELIVERED
                ,pol.DATE_PROMISED
                ,pol.DATE_REQUESTED
                ,pol.ID
                ,pol.LINE_NR
                ,pol.NET_AMOUNT
                ,pol.NOTES
                ,pol.PORDER_ID
                ,pol.PRICE
                ,pol.PRODUCT_ID
                ,pbo_product.get_name_by_id(pol.product_id,'N') PRODUCT_NAME
                ,pol.QTY
                ,pol.UOM_CODE
            from PURCHASE_ORDER_LINE pol
         where 
           pol.ID= :ID
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
  ,"CURRENCY_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING",parent::FLDPROP_CASE_RESTRICTION => "Upper")
  ,"DATE_DELIVERED" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DATE_PROMISED" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DATE_REQUESTED" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LINE_NR" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PORDER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"UOM_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING",parent::FLDPROP_CASE_RESTRICTION => "Upper")
);
}

}
?>
