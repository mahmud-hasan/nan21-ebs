<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0090 Controller: Price list products
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0090 extends Controller {

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
    if (!empty($_REQUEST["QRY_PRICELIST_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PRICELIST_ID like :PRICELIST_ID";
      $params["PRICELIST_ID"] = $_REQUEST["QRY_PRICELIST_ID"];
    }
    if (!empty($_REQUEST["QRY_PRICELVL_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PRICELVL_ID like :PRICELVL_ID";
      $params["PRICELVL_ID"] = $_REQUEST["QRY_PRICELVL_ID"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
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
                t.ID
                ,t.PRICE
                ,t.PRICELIST_ID
                ,t.PRICELVL_ID
                ,pbo_price.get_pricelvl_name_by_id(t.pricelvl_id) PRICELVL_NAME
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
            from MM_PRODUCT_PRICE t $where $orderByClause ";
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
                ,t.PRICELIST_ID
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,pbo_price.get_pricelvl_name_by_id(t.pricelvl_id) PRICELVL_NAME
                ,t.PRICELVL_ID
                ,t.PRICE
            from MM_PRODUCT_PRICE t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0090.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into MM_PRODUCT_PRICE(
                 ID
                ,PRICE
                ,PRICELIST_ID
                ,PRICELVL_ID
                ,PRODUCT_ID
            ) values ( 
                 :ID
                ,:PRICE
                ,:PRICELIST_ID
                ,:PRICELVL_ID
                ,:PRODUCT_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_PRODPRICE_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "update MM_PRODUCT_PRICE set 
                 ID=:ID
                ,PRICE=:PRICE
                ,PRICELIST_ID=:PRICELIST_ID
                ,PRICELVL_ID=:PRICELVL_ID
                ,PRODUCT_ID=:PRODUCT_ID
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0090.doDelete().");}
    $sql = "delete from MM_PRODUCT_PRICE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0090");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ID
                ,t.PRICE
                ,t.PRICELIST_ID
                ,t.PRICELVL_ID
                ,pbo_price.get_pricelvl_name_by_id(t.pricelvl_id) PRICELVL_NAME
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
            from MM_PRODUCT_PRICE t
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
  "ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRICE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRICELIST_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRICELVL_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRICELVL_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
