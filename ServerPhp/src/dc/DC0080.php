<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0080 Controller: Reception document line
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0080 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

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
                t.BASE_DOC_CURRENCY
                ,t.BASE_DOC_PRICE
                ,t.BASE_DOC_QTY
                ,t.ID
                ,t.INVENTORY_QTY
                ,t.LINE_NO
                ,t.MVMNTINDOC_ID
                ,t.NOTES
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.QTY
                ,t.RECEIVED_QTY
                ,pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE
                ,t.STOCKLOC_ID
                ,t.UOM
            from MM_MOVEMENT_IN_LINE t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0080.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into MM_MOVEMENT_IN_LINE(
                 BASE_DOC_CURRENCY
                ,BASE_DOC_PRICE
                ,BASE_DOC_QTY
                ,ID
                ,INVENTORY_QTY
                ,LINE_NO
                ,MVMNTINDOC_ID
                ,NOTES
                ,PRODUCT_ID
                ,QTY
                ,RECEIVED_QTY
                ,STOCKLOC_ID
                ,UOM
            ) values ( 
                 :BASE_DOC_CURRENCY
                ,:BASE_DOC_PRICE
                ,:BASE_DOC_QTY
                ,:ID
                ,:INVENTORY_QTY
                ,:LINE_NO
                ,:MVMNTINDOC_ID
                ,:NOTES
                ,:PRODUCT_ID
                ,:QTY
                ,:RECEIVED_QTY
                ,:STOCKLOC_ID
                ,:UOM
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_MVMNTINLIN_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0080.doUpdate().");}
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
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"],"ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0080.doDelete().");}
    $sql = "delete from MM_MOVEMENT_IN_LINE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0080");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.BASE_DOC_CURRENCY
                ,t.BASE_DOC_PRICE
                ,t.BASE_DOC_QTY
                ,t.ID
                ,t.INVENTORY_QTY
                ,t.LINE_NO
                ,t.MVMNTINDOC_ID
                ,t.NOTES
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.QTY
                ,t.RECEIVED_QTY
                ,pbo_org.get_stockloc_code_by_id(t.stockloc_id) STOCKLOC_CODE
                ,t.STOCKLOC_ID
                ,t.UOM
            from MM_MOVEMENT_IN_LINE t
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
  "BASE_DOC_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BASE_DOC_PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BASE_DOC_QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INVENTORY_QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LINE_NO" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MVMNTINDOC_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RECEIVED_QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"STOCKLOC_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STOCKLOC_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"UOM" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
