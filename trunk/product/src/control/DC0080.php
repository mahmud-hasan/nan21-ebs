<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0080 Controller: Reception document line
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0080 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_MVMNTINDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.MVMNTINDOC_ID like :MVMNTINDOC_ID";
      $params["MVMNTINDOC_ID"] = $_REQUEST["QRY_MVMNTINDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_STOCKLOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.STOCKLOC_ID like :STOCKLOC_ID";
      $params["STOCKLOC_ID"] = $_REQUEST["QRY_STOCKLOC_ID"];
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
                t.ID
                ,t.LINE_NO
                ,t.MVMNTINDOC_ID
                ,t.PRODUCT_ID
                ,t.QTY
                ,t.BASE_DOC_QTY
                ,t.RECEIVED_QTY
                ,t.INVENTORY_QTY
                ,t.BASE_DOC_PRICE
                ,t.BASE_DOC_CURRENCY
                ,t.NOTES
                ,t.UOM
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.STOCKLOC_ID
                ,pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE
            from MM_MOVEMENT_IN_LINE t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"LINE_NO"
      ,"MVMNTINDOC_ID"
      ,"PRODUCT_ID"
      ,"QTY"
      ,"BASE_DOC_QTY"
      ,"RECEIVED_QTY"
      ,"INVENTORY_QTY"
      ,"BASE_DOC_PRICE"
      ,"BASE_DOC_CURRENCY"
      ,"NOTES"
      ,"UOM"
      ,"PRODUCT_NAME"
      ,"STOCKLOC_ID"
      ,"STOCKLOC_CODE"
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
                t.ID
                ,t.LINE_NO
                ,t.MVMNTINDOC_ID
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.QTY
                ,t.UOM
                ,t.BASE_DOC_QTY
                ,t.RECEIVED_QTY
                ,t.INVENTORY_QTY
                ,t.BASE_DOC_PRICE
                ,t.BASE_DOC_CURRENCY
                ,pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE
                ,t.STOCKLOC_ID
                ,t.NOTES
            from MM_MOVEMENT_IN_LINE t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"LINE_NO"
     ,"MVMNTINDOC_ID"
     ,"PRODUCT_ID"
     ,"PRODUCT_NAME"
     ,"QTY"
     ,"UOM"
     ,"BASE_DOC_QTY"
     ,"RECEIVED_QTY"
     ,"INVENTORY_QTY"
     ,"BASE_DOC_PRICE"
     ,"BASE_DOC_CURRENCY"
     ,"STOCKLOC_CODE"
     ,"STOCKLOC_ID"
     ,"NOTES"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0080.fetchRecord().");}
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
    $RECORD["BASE_DOC_CURRENCY"] = $this->getRequestParam("BASE_DOC_CURRENCY");
    $RECORD["BASE_DOC_PRICE"] = $this->getRequestParam("BASE_DOC_PRICE");
    $RECORD["BASE_DOC_QTY"] = $this->getRequestParam("BASE_DOC_QTY");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INVENTORY_QTY"] = $this->getRequestParam("INVENTORY_QTY");
    $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO");
    $RECORD["MVMNTINDOC_ID"] = $this->getRequestParam("MVMNTINDOC_ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["RECEIVED_QTY"] = $this->getRequestParam("RECEIVED_QTY");
    $RECORD["STOCKLOC_CODE"] = $this->getRequestParam("STOCKLOC_CODE");
    $RECORD["STOCKLOC_ID"] = $this->getRequestParam("STOCKLOC_ID");
    $RECORD["UOM"] = $this->getRequestParam("UOM");
    $sql = "insert into MM_MOVEMENT_IN_LINE(
                 ID
                ,LINE_NO
                ,MVMNTINDOC_ID
                ,PRODUCT_ID
                ,QTY
                ,BASE_DOC_QTY
                ,RECEIVED_QTY
                ,INVENTORY_QTY
                ,BASE_DOC_PRICE
                ,BASE_DOC_CURRENCY
                ,NOTES
                ,UOM
                ,STOCKLOC_ID
            ) values ( 
                 :ID
                ,:LINE_NO
                ,:MVMNTINDOC_ID
                ,:PRODUCT_ID
                ,:QTY
                ,:BASE_DOC_QTY
                ,:RECEIVED_QTY
                ,:INVENTORY_QTY
                ,:BASE_DOC_PRICE
                ,:BASE_DOC_CURRENCY
                ,:NOTES
                ,:UOM
                ,:STOCKLOC_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_MVMNTINLIN_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["BASE_DOC_CURRENCY"] = $this->getRequestParam("BASE_DOC_CURRENCY");
    $RECORD["BASE_DOC_PRICE"] = $this->getRequestParam("BASE_DOC_PRICE");
    $RECORD["BASE_DOC_QTY"] = $this->getRequestParam("BASE_DOC_QTY");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INVENTORY_QTY"] = $this->getRequestParam("INVENTORY_QTY");
    $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO");
    $RECORD["MVMNTINDOC_ID"] = $this->getRequestParam("MVMNTINDOC_ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["RECEIVED_QTY"] = $this->getRequestParam("RECEIVED_QTY");
    $RECORD["STOCKLOC_CODE"] = $this->getRequestParam("STOCKLOC_CODE");
    $RECORD["STOCKLOC_ID"] = $this->getRequestParam("STOCKLOC_ID");
    $RECORD["UOM"] = $this->getRequestParam("UOM");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0080.doUpdate().");}
    $sql = "update MM_MOVEMENT_IN_LINE set 
                 ID=:ID
                ,LINE_NO=:LINE_NO
                ,MVMNTINDOC_ID=:MVMNTINDOC_ID
                ,PRODUCT_ID=:PRODUCT_ID
                ,QTY=:QTY
                ,BASE_DOC_QTY=:BASE_DOC_QTY
                ,RECEIVED_QTY=:RECEIVED_QTY
                ,INVENTORY_QTY=:INVENTORY_QTY
                ,BASE_DOC_PRICE=:BASE_DOC_PRICE
                ,BASE_DOC_CURRENCY=:BASE_DOC_CURRENCY
                ,NOTES=:NOTES
                ,UOM=:UOM
                ,STOCKLOC_ID=:STOCKLOC_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0080.doDelete().");}
    $sql = "delete from MM_MOVEMENT_IN_LINE where 
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
    $RECORD["BASE_DOC_CURRENCY"] = $this->getRequestParam("BASE_DOC_CURRENCY");
    $RECORD["BASE_DOC_PRICE"] = $this->getRequestParam("BASE_DOC_PRICE");
    $RECORD["BASE_DOC_QTY"] = $this->getRequestParam("BASE_DOC_QTY");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INVENTORY_QTY"] = $this->getRequestParam("INVENTORY_QTY");
    $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO");
    $RECORD["MVMNTINDOC_ID"] = $this->getRequestParam("MVMNTINDOC_ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME");
    $RECORD["QTY"] = $this->getRequestParam("QTY");
    $RECORD["RECEIVED_QTY"] = $this->getRequestParam("RECEIVED_QTY");
    $RECORD["STOCKLOC_CODE"] = $this->getRequestParam("STOCKLOC_CODE");
    $RECORD["STOCKLOC_ID"] = $this->getRequestParam("STOCKLOC_ID");
    $RECORD["UOM"] = $this->getRequestParam("UOM");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0080");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ID
                ,t.LINE_NO
                ,t.MVMNTINDOC_ID
                ,t.PRODUCT_ID
                ,t.QTY
                ,t.BASE_DOC_QTY
                ,t.RECEIVED_QTY
                ,t.INVENTORY_QTY
                ,t.BASE_DOC_PRICE
                ,t.BASE_DOC_CURRENCY
                ,t.NOTES
                ,t.UOM
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.STOCKLOC_ID
                ,pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE
            from MM_MOVEMENT_IN_LINE t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"LINE_NO" => array("DATA_TYPE" => "NUMBER")
  ,"MVMNTINDOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"QTY" => array("DATA_TYPE" => "NUMBER")
  ,"BASE_DOC_QTY" => array("DATA_TYPE" => "NUMBER")
  ,"RECEIVED_QTY" => array("DATA_TYPE" => "NUMBER")
  ,"INVENTORY_QTY" => array("DATA_TYPE" => "NUMBER")
  ,"BASE_DOC_PRICE" => array("DATA_TYPE" => "NUMBER")
  ,"BASE_DOC_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"UOM" => array("DATA_TYPE" => "STRING")
  ,"PRODUCT_NAME" => array("DATA_TYPE" => "STRING")
  ,"STOCKLOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"STOCKLOC_CODE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BASE_DOC_CURRENCY"] )) { $RECORD["BASE_DOC_CURRENCY"] = $this->getRequestParam("BASE_DOC_CURRENCY"); }
     if (isset($_REQUEST["BASE_DOC_PRICE"] )) { $RECORD["BASE_DOC_PRICE"] = $this->getRequestParam("BASE_DOC_PRICE"); }
     if (isset($_REQUEST["BASE_DOC_QTY"] )) { $RECORD["BASE_DOC_QTY"] = $this->getRequestParam("BASE_DOC_QTY"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["INVENTORY_QTY"] )) { $RECORD["INVENTORY_QTY"] = $this->getRequestParam("INVENTORY_QTY"); }
     if (isset($_REQUEST["LINE_NO"] )) { $RECORD["LINE_NO"] = $this->getRequestParam("LINE_NO"); }
     if (isset($_REQUEST["MVMNTINDOC_ID"] )) { $RECORD["MVMNTINDOC_ID"] = $this->getRequestParam("MVMNTINDOC_ID"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PRODUCT_ID"] )) { $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID"); }
     if (isset($_REQUEST["PRODUCT_NAME"] )) { $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME"); }
     if (isset($_REQUEST["QTY"] )) { $RECORD["QTY"] = $this->getRequestParam("QTY"); }
     if (isset($_REQUEST["RECEIVED_QTY"] )) { $RECORD["RECEIVED_QTY"] = $this->getRequestParam("RECEIVED_QTY"); }
     if (isset($_REQUEST["STOCKLOC_CODE"] )) { $RECORD["STOCKLOC_CODE"] = $this->getRequestParam("STOCKLOC_CODE"); }
     if (isset($_REQUEST["STOCKLOC_ID"] )) { $RECORD["STOCKLOC_ID"] = $this->getRequestParam("STOCKLOC_ID"); }
     if (isset($_REQUEST["UOM"] )) { $RECORD["UOM"] = $this->getRequestParam("UOM"); }
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
