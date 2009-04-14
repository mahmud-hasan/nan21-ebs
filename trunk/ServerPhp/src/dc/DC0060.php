<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0060 Controller: Sales order lines
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0060 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CURRENCY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.CURRENCY_CODE like :CURRENCY_CODE";
      $params["CURRENCY_CODE"] = $_REQUEST["QRY_CURRENCY_CODE"];
    }
    if (!empty($_REQUEST["QRY_DATE_DELIVERED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.DATE_DELIVERED like :DATE_DELIVERED";
      $params["DATE_DELIVERED"] = $_REQUEST["QRY_DATE_DELIVERED"];
    }
    if (!empty($_REQUEST["QRY_DATE_PROMISED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.DATE_PROMISED like :DATE_PROMISED";
      $params["DATE_PROMISED"] = $_REQUEST["QRY_DATE_PROMISED"];
    }
    if (!empty($_REQUEST["QRY_DATE_REQUESTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.DATE_REQUESTED like :DATE_REQUESTED";
      $params["DATE_REQUESTED"] = $_REQUEST["QRY_DATE_REQUESTED"];
    }
    if (!empty($_REQUEST["QRY_DISCOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.DISCOUNT like :DISCOUNT";
      $params["DISCOUNT"] = $_REQUEST["QRY_DISCOUNT"];
    }
    if (!empty($_REQUEST["QRY_DISCOUNT_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.DISCOUNT_TYPE like :DISCOUNT_TYPE";
      $params["DISCOUNT_TYPE"] = $_REQUEST["QRY_DISCOUNT_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LINE_NR"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.LINE_NR like :LINE_NR";
      $params["LINE_NR"] = $_REQUEST["QRY_LINE_NR"];
    }
    if (!empty($_REQUEST["QRY_NET_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.NET_AMOUNT like :NET_AMOUNT";
      $params["NET_AMOUNT"] = $_REQUEST["QRY_NET_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_PRICE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.PRICE like :PRICE";
      $params["PRICE"] = $_REQUEST["QRY_PRICE"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_QTY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.QTY like :QTY";
      $params["QTY"] = $_REQUEST["QRY_QTY"];
    }
    if (!empty($_REQUEST["QRY_QTY_DELIVERED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.QTY_DELIVERED like :QTY_DELIVERED";
      $params["QTY_DELIVERED"] = $_REQUEST["QRY_QTY_DELIVERED"];
    }
    if (!empty($_REQUEST["QRY_QTY_INVOICED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.QTY_INVOICED like :QTY_INVOICED";
      $params["QTY_INVOICED"] = $_REQUEST["QRY_QTY_INVOICED"];
    }
    if (!empty($_REQUEST["QRY_QTY_ORDERED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.QTY_ORDERED like :QTY_ORDERED";
      $params["QTY_ORDERED"] = $_REQUEST["QRY_QTY_ORDERED"];
    }
    if (!empty($_REQUEST["QRY_QTY_RESERVED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.QTY_RESERVED like :QTY_RESERVED";
      $params["QTY_RESERVED"] = $_REQUEST["QRY_QTY_RESERVED"];
    }
    if (!empty($_REQUEST["QRY_RAW_NET_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.RAW_NET_AMOUNT like :RAW_NET_AMOUNT";
      $params["RAW_NET_AMOUNT"] = $_REQUEST["QRY_RAW_NET_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_SORDER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.SORDER_ID like :SORDER_ID";
      $params["SORDER_ID"] = $_REQUEST["QRY_SORDER_ID"];
    }
    if (!empty($_REQUEST["QRY_UOM_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ol.UOM_CODE like :UOM_CODE";
      $params["UOM_CODE"] = $_REQUEST["QRY_UOM_CODE"];
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
                ol.CURRENCY_CODE
                ,ol.DATE_DELIVERED
                ,ol.DATE_PROMISED
                ,ol.DATE_REQUESTED
                ,ol.DISCOUNT
                ,ol.DISCOUNT_TYPE
                ,ol.ID
                ,ol.LINE_NR
                ,ol.NET_AMOUNT
                ,ol.NOTES
                ,ol.PRICE
                ,ol.PRODUCT_ID
                ,pbo_product.get_name_by_id( ol.product_id, 'N') PRODUCT_NAME
                ,ol.QTY
                ,ol.QTY_DELIVERED
                ,ol.QTY_INVOICED
                ,ol.QTY_ORDERED
                ,ol.QTY_RESERVED
                ,ol.RAW_NET_AMOUNT
                ,ol.SORDER_ID
                ,ol.UOM_CODE
            from SALES_ORDER_LINE ol $where $orderByClause ";
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
                ol.SORDER_ID
                ,ol.ID
                ,ol.LINE_NR
                ,ol.PRODUCT_ID
                ,pbo_product.get_name_by_id( ol.product_id, 'N') PRODUCT_NAME
                ,ol.QTY_ORDERED
                ,ol.UOM_CODE
                ,ol.QTY
                ,ol.PRICE
                ,ol.CURRENCY_CODE
                ,ol.DISCOUNT
                ,ol.DISCOUNT_TYPE
                ,ol.RAW_NET_AMOUNT
                ,ol.NET_AMOUNT
                ,ol.QTY_INVOICED
                ,ol.QTY_DELIVERED
                ,ol.QTY_RESERVED
                ,ol.DATE_REQUESTED
                ,ol.DATE_PROMISED
                ,ol.DATE_DELIVERED
                ,ol.NOTES
            from SALES_ORDER_LINE ol $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0060.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into SALES_ORDER_LINE(
                 CURRENCY_CODE
                ,DATE_DELIVERED
                ,DATE_PROMISED
                ,DATE_REQUESTED
                ,DISCOUNT
                ,DISCOUNT_TYPE
                ,ID
                ,LINE_NR
                ,NET_AMOUNT
                ,NOTES
                ,PRICE
                ,PRODUCT_ID
                ,QTY
                ,QTY_DELIVERED
                ,QTY_INVOICED
                ,QTY_ORDERED
                ,QTY_RESERVED
                ,RAW_NET_AMOUNT
                ,SORDER_ID
                ,UOM_CODE
            ) values ( 
                 :CURRENCY_CODE
                ,:DATE_DELIVERED
                ,:DATE_PROMISED
                ,:DATE_REQUESTED
                ,:DISCOUNT
                ,:DISCOUNT_TYPE
                ,:ID
                ,:LINE_NR
                ,:NET_AMOUNT
                ,:NOTES
                ,:PRICE
                ,:PRODUCT_ID
                ,:QTY
                ,:QTY_DELIVERED
                ,:QTY_INVOICED
                ,:QTY_ORDERED
                ,:QTY_RESERVED
                ,:RAW_NET_AMOUNT
                ,:SORDER_ID
                ,:UOM_CODE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_bpordline_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0060.doUpdate().");}
    $sql = "update SALES_ORDER_LINE set 
                 ID=:ID
                ,SORDER_ID=:SORDER_ID
                ,LINE_NR=:LINE_NR
                ,PRODUCT_ID=:PRODUCT_ID
                ,QTY_ORDERED=:QTY_ORDERED
                ,QTY=:QTY
                ,QTY_INVOICED=:QTY_INVOICED
                ,QTY_DELIVERED=:QTY_DELIVERED
                ,QTY_RESERVED=:QTY_RESERVED
                ,UOM_CODE=:UOM_CODE
                ,PRICE=:PRICE
                ,DISCOUNT=:DISCOUNT
                ,DISCOUNT_TYPE=:DISCOUNT_TYPE
                ,CURRENCY_CODE=:CURRENCY_CODE
                ,NOTES=:NOTES
                ,DATE_REQUESTED=:DATE_REQUESTED
                ,DATE_PROMISED=:DATE_PROMISED
                ,DATE_DELIVERED=:DATE_DELIVERED
                ,NET_AMOUNT=:NET_AMOUNT
                ,RAW_NET_AMOUNT=:RAW_NET_AMOUNT
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0060.doDelete().");}
    $sql = "delete from SALES_ORDER_LINE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0060");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ol.CURRENCY_CODE
                ,ol.DATE_DELIVERED
                ,ol.DATE_PROMISED
                ,ol.DATE_REQUESTED
                ,ol.DISCOUNT
                ,ol.DISCOUNT_TYPE
                ,ol.ID
                ,ol.LINE_NR
                ,ol.NET_AMOUNT
                ,ol.NOTES
                ,ol.PRICE
                ,ol.PRODUCT_ID
                ,pbo_product.get_name_by_id( ol.product_id, 'N') PRODUCT_NAME
                ,ol.QTY
                ,ol.QTY_DELIVERED
                ,ol.QTY_INVOICED
                ,ol.QTY_ORDERED
                ,ol.QTY_RESERVED
                ,ol.RAW_NET_AMOUNT
                ,ol.SORDER_ID
                ,ol.UOM_CODE
            from SALES_ORDER_LINE ol
         where 
           ol.ID= :ID
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
  ,"CURRENCY_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DATE_DELIVERED" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DATE_PROMISED" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DATE_REQUESTED" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DISCOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DISCOUNT_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LINE_NR" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QTY_DELIVERED" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QTY_INVOICED" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QTY_ORDERED" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QTY_RESERVED" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RAW_NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"SORDER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"UOM_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
