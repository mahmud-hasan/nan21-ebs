<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0060 Controller: Sales order lines
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0060 extends Controller {


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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CURRENCY_CODE"
      ,"DATE_DELIVERED"
      ,"DATE_PROMISED"
      ,"DATE_REQUESTED"
      ,"DISCOUNT"
      ,"DISCOUNT_TYPE"
      ,"ID"
      ,"LINE_NR"
      ,"NET_AMOUNT"
      ,"NOTES"
      ,"PRICE"
      ,"PRODUCT_ID"
      ,"PRODUCT_NAME"
      ,"QTY"
      ,"QTY_DELIVERED"
      ,"QTY_INVOICED"
      ,"QTY_ORDERED"
      ,"QTY_RESERVED"
      ,"RAW_NET_AMOUNT"
      ,"SORDER_ID"
      ,"UOM_CODE"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "SORDER_ID"
     ,"ID"
     ,"LINE_NR"
     ,"PRODUCT_ID"
     ,"PRODUCT_NAME"
     ,"QTY_ORDERED"
     ,"UOM_CODE"
     ,"QTY"
     ,"PRICE"
     ,"CURRENCY_CODE"
     ,"DISCOUNT"
     ,"DISCOUNT_TYPE"
     ,"RAW_NET_AMOUNT"
     ,"NET_AMOUNT"
     ,"QTY_INVOICED"
     ,"QTY_DELIVERED"
     ,"QTY_RESERVED"
     ,"DATE_REQUESTED"
     ,"DATE_PROMISED"
     ,"DATE_DELIVERED"
     ,"NOTES"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    if ($this->getExpFormat() == "csv" ) {
      $dataOut = $this->serializeCursor($rs,$columns,"csv");
    } else {
      $dataOut = $this->serializeCursor($rs,$columns,"xml");
      $dataOut = "<records>".$dataOut."</records>";
      $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
      $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
      $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
      $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
      $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    }
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0060.fetchRecord().");}
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
    $RECORD["CURRENCY_CODE"] = $this->getRequestParam("CURRENCY_CODE");
    $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED");
    $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED");
    $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED");
    $RECORD["DISCOUNT"] = $this->getRequestParam("DISCOUNT");
    $RECORD["DISCOUNT_TYPE"] = $this->getRequestParam("DISCOUNT_TYPE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["QTY_DELIVERED"] = $this->getRequestParam("QTY_DELIVERED");
    $RECORD["QTY_INVOICED"] = $this->getRequestParam("QTY_INVOICED");
    $RECORD["QTY_ORDERED"] = $this->getRequestParam("QTY_ORDERED");
    $RECORD["QTY_RESERVED"] = $this->getRequestParam("QTY_RESERVED");
    $RECORD["RAW_NET_AMOUNT"] = $this->getRequestParam("RAW_NET_AMOUNT");
    $RECORD["SORDER_ID"] = $this->getRequestParam("SORDER_ID");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
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
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_bpordline_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CURRENCY_CODE"] = $this->getRequestParam("CURRENCY_CODE");
    $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED");
    $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED");
    $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED");
    $RECORD["DISCOUNT"] = $this->getRequestParam("DISCOUNT");
    $RECORD["DISCOUNT_TYPE"] = $this->getRequestParam("DISCOUNT_TYPE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["QTY_DELIVERED"] = $this->getRequestParam("QTY_DELIVERED");
    $RECORD["QTY_INVOICED"] = $this->getRequestParam("QTY_INVOICED");
    $RECORD["QTY_ORDERED"] = $this->getRequestParam("QTY_ORDERED");
    $RECORD["QTY_RESERVED"] = $this->getRequestParam("QTY_RESERVED");
    $RECORD["RAW_NET_AMOUNT"] = $this->getRequestParam("RAW_NET_AMOUNT");
    $RECORD["SORDER_ID"] = $this->getRequestParam("SORDER_ID");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0060.doUpdate().");}
    $sql = "update SALES_ORDER_LINE set 
                 CURRENCY_CODE=:CURRENCY_CODE
                ,DATE_DELIVERED=:DATE_DELIVERED
                ,DATE_PROMISED=:DATE_PROMISED
                ,DATE_REQUESTED=:DATE_REQUESTED
                ,DISCOUNT=:DISCOUNT
                ,DISCOUNT_TYPE=:DISCOUNT_TYPE
                ,ID=:ID
                ,LINE_NR=:LINE_NR
                ,NET_AMOUNT=:NET_AMOUNT
                ,NOTES=:NOTES
                ,PRICE=:PRICE
                ,PRODUCT_ID=:PRODUCT_ID
                ,QTY=:QTY
                ,QTY_DELIVERED=:QTY_DELIVERED
                ,QTY_INVOICED=:QTY_INVOICED
                ,QTY_ORDERED=:QTY_ORDERED
                ,QTY_RESERVED=:QTY_RESERVED
                ,RAW_NET_AMOUNT=:RAW_NET_AMOUNT
                ,SORDER_ID=:SORDER_ID
                ,UOM_CODE=:UOM_CODE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0060.doDelete().");}
    $sql = "delete from SALES_ORDER_LINE where 
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
    $RECORD["CURRENCY_CODE"] = $this->getRequestParam("CURRENCY_CODE");
    $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED");
    $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED");
    $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED");
    $RECORD["DISCOUNT"] = $this->getRequestParam("DISCOUNT");
    $RECORD["DISCOUNT_TYPE"] = $this->getRequestParam("DISCOUNT_TYPE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["QTY_DELIVERED"] = $this->getRequestParam("QTY_DELIVERED");
    $RECORD["QTY_INVOICED"] = $this->getRequestParam("QTY_INVOICED");
    $RECORD["QTY_ORDERED"] = $this->getRequestParam("QTY_ORDERED");
    $RECORD["QTY_RESERVED"] = $this->getRequestParam("QTY_RESERVED");
    $RECORD["RAW_NET_AMOUNT"] = $this->getRequestParam("RAW_NET_AMOUNT");
    $RECORD["SORDER_ID"] = $this->getRequestParam("SORDER_ID");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0060");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CURRENCY_CODE" => array("DATA_TYPE" => "STRING")
  ,"DATE_DELIVERED" => array("DATA_TYPE" => "DATE")
  ,"DATE_PROMISED" => array("DATA_TYPE" => "DATE")
  ,"DATE_REQUESTED" => array("DATA_TYPE" => "DATE")
  ,"DISCOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"DISCOUNT_TYPE" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"LINE_NR" => array("DATA_TYPE" => "NUMBER")
  ,"NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"PRICE" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_NAME" => array("DATA_TYPE" => "STRING")
  ,"QTY" => array("DATA_TYPE" => "NUMBER")
  ,"QTY_DELIVERED" => array("DATA_TYPE" => "NUMBER")
  ,"QTY_INVOICED" => array("DATA_TYPE" => "NUMBER")
  ,"QTY_ORDERED" => array("DATA_TYPE" => "NUMBER")
  ,"QTY_RESERVED" => array("DATA_TYPE" => "NUMBER")
  ,"RAW_NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"SORDER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"UOM_CODE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY_CODE"] )) { $RECORD["CURRENCY_CODE"] = $this->getRequestParam("CURRENCY_CODE"); }
     if (isset($_REQUEST["DATE_DELIVERED"] )) { $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED"); }
     if (isset($_REQUEST["DATE_PROMISED"] )) { $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED"); }
     if (isset($_REQUEST["DATE_REQUESTED"] )) { $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED"); }
     if (isset($_REQUEST["DISCOUNT"] )) { $RECORD["DISCOUNT"] = $this->getRequestParam("DISCOUNT"); }
     if (isset($_REQUEST["DISCOUNT_TYPE"] )) { $RECORD["DISCOUNT_TYPE"] = $this->getRequestParam("DISCOUNT_TYPE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LINE_NR"] )) { $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NET_AMOUNT"] )) { $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PRICE"] )) { $RECORD["PRICE"] = $this->getRequestParam("PRICE"); }
     if (isset($_REQUEST["PRODUCT_ID"] )) { $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID"); }
     if (isset($_REQUEST["PRODUCT_NAME"] )) { $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME"); }
     if (isset($_REQUEST["QTY"] )) { $RECORD["QTY"] = $this->getRequestParam("QTY"); }
     if (isset($_REQUEST["QTY_DELIVERED"] )) { $RECORD["QTY_DELIVERED"] = $this->getRequestParam("QTY_DELIVERED"); }
     if (isset($_REQUEST["QTY_INVOICED"] )) { $RECORD["QTY_INVOICED"] = $this->getRequestParam("QTY_INVOICED"); }
     if (isset($_REQUEST["QTY_ORDERED"] )) { $RECORD["QTY_ORDERED"] = $this->getRequestParam("QTY_ORDERED"); }
     if (isset($_REQUEST["QTY_RESERVED"] )) { $RECORD["QTY_RESERVED"] = $this->getRequestParam("QTY_RESERVED"); }
     if (isset($_REQUEST["RAW_NET_AMOUNT"] )) { $RECORD["RAW_NET_AMOUNT"] = $this->getRequestParam("RAW_NET_AMOUNT"); }
     if (isset($_REQUEST["SORDER_ID"] )) { $RECORD["SORDER_ID"] = $this->getRequestParam("SORDER_ID"); }
     if (isset($_REQUEST["UOM_CODE"] )) { $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE"); }
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
