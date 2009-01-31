<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0064 Controller: Purchase order lines
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0064 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CURRENCY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pol.CURRENCY_CODE like :CURRENCY_CODE";
      $params["CURRENCY_CODE"] = $_REQUEST["QRY_CURRENCY_CODE"];
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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CURRENCY_CODE"
      ,"DATE_DELIVERED"
      ,"DATE_PROMISED"
      ,"DATE_REQUESTED"
      ,"ID"
      ,"LINE_NR"
      ,"NET_AMOUNT"
      ,"NOTES"
      ,"PORDER_ID"
      ,"PRICE"
      ,"PRODUCT_ID"
      ,"PRODUCT_NAME"
      ,"QTY"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"PORDER_ID"
     ,"LINE_NR"
     ,"PRODUCT_NAME"
     ,"PRODUCT_ID"
     ,"QTY"
     ,"UOM_CODE"
     ,"PRICE"
     ,"CURRENCY_CODE"
     ,"NET_AMOUNT"
     ,"NOTES"
     ,"DATE_REQUESTED"
     ,"DATE_PROMISED"
     ,"DATE_DELIVERED"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0064.fetchRecord().");}
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
    $RECORD["CURRENCY_CODE"] = strtoupper($this->getRequestParam("CURRENCY_CODE"));
    $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED");
    $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED");
    $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PORDER_ID"] = $this->getRequestParam("PORDER_ID");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["UOM_CODE"] = strtoupper($this->getRequestParam("UOM_CODE"));
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
    $stmt = $this->db->prepare($sql);
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
    $RECORD["CURRENCY_CODE"] = strtoupper($this->getRequestParam("CURRENCY_CODE"));
    $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED");
    $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED");
    $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PORDER_ID"] = $this->getRequestParam("PORDER_ID");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["UOM_CODE"] = strtoupper($this->getRequestParam("UOM_CODE"));
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0064.doUpdate().");}
    $sql = "update PURCHASE_ORDER_LINE set 
                 CURRENCY_CODE=:CURRENCY_CODE
                ,DATE_DELIVERED=:DATE_DELIVERED
                ,DATE_PROMISED=:DATE_PROMISED
                ,DATE_REQUESTED=:DATE_REQUESTED
                ,ID=:ID
                ,LINE_NR=:LINE_NR
                ,NET_AMOUNT=:NET_AMOUNT
                ,NOTES=:NOTES
                ,PORDER_ID=:PORDER_ID
                ,PRICE=:PRICE
                ,PRODUCT_ID=:PRODUCT_ID
                ,QTY=:QTY
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0064.doDelete().");}
    $sql = "delete from PURCHASE_ORDER_LINE where 
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
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PORDER_ID"] = $this->getRequestParam("PORDER_ID");
    $RECORD["PRICE"] = $this->getRequestParam("PRICE");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0064");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CURRENCY_CODE" => array("DATA_TYPE" => "STRING")
  ,"DATE_DELIVERED" => array("DATA_TYPE" => "DATE")
  ,"DATE_PROMISED" => array("DATA_TYPE" => "DATE")
  ,"DATE_REQUESTED" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"LINE_NR" => array("DATA_TYPE" => "NUMBER")
  ,"NET_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"PORDER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRICE" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_NAME" => array("DATA_TYPE" => "STRING")
  ,"QTY" => array("DATA_TYPE" => "NUMBER")
  ,"UOM_CODE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY_CODE"] )) { $RECORD["CURRENCY_CODE"] = $this->getRequestParam("CURRENCY_CODE"); }
     if (isset($_REQUEST["DATE_DELIVERED"] )) { $RECORD["DATE_DELIVERED"] = $this->getRequestParam("DATE_DELIVERED"); }
     if (isset($_REQUEST["DATE_PROMISED"] )) { $RECORD["DATE_PROMISED"] = $this->getRequestParam("DATE_PROMISED"); }
     if (isset($_REQUEST["DATE_REQUESTED"] )) { $RECORD["DATE_REQUESTED"] = $this->getRequestParam("DATE_REQUESTED"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LINE_NR"] )) { $RECORD["LINE_NR"] = $this->getRequestParam("LINE_NR"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NET_AMOUNT"] )) { $RECORD["NET_AMOUNT"] = $this->getRequestParam("NET_AMOUNT"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PORDER_ID"] )) { $RECORD["PORDER_ID"] = $this->getRequestParam("PORDER_ID"); }
     if (isset($_REQUEST["PRICE"] )) { $RECORD["PRICE"] = $this->getRequestParam("PRICE"); }
     if (isset($_REQUEST["PRODUCT_ID"] )) { $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID"); }
     if (isset($_REQUEST["PRODUCT_NAME"] )) { $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME"); }
     if (isset($_REQUEST["QTY"] )) { $RECORD["QTY"] = $this->getRequestParam("QTY"); }
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
