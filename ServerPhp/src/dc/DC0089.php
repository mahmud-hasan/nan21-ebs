<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0089 Controller: Stocks
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0089 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_CODE like :CLIENT_CODE";
      $params["CLIENT_CODE"] = $_REQUEST["QRY_CLIENT_CODE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_ORGINV_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORGINV_CODE like :ORGINV_CODE";
      $params["ORGINV_CODE"] = $_REQUEST["QRY_ORGINV_CODE"];
    }
    if (!empty($_REQUEST["QRY_ORGINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORGINV_ID like :ORGINV_ID";
      $params["ORGINV_ID"] = $_REQUEST["QRY_ORGINV_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORG_NAME like :ORG_NAME";
      $params["ORG_NAME"] = $_REQUEST["QRY_ORG_NAME"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRODUCT_CODE like :PRODUCT_CODE";
      $params["PRODUCT_CODE"] = $_REQUEST["QRY_PRODUCT_CODE"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRODUCT_NAME like :PRODUCT_NAME";
      $params["PRODUCT_NAME"] = $_REQUEST["QRY_PRODUCT_NAME"];
    }
    if (!empty($_REQUEST["QRY_STOCKLOC_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STOCKLOC_CODE like :STOCKLOC_CODE";
      $params["STOCKLOC_CODE"] = $_REQUEST["QRY_STOCKLOC_CODE"];
    }
    if (!empty($_REQUEST["QRY_STOCKLOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STOCKLOC_ID like :STOCKLOC_ID";
      $params["STOCKLOC_ID"] = $_REQUEST["QRY_STOCKLOC_ID"];
    }
    if (!empty($_REQUEST["QRY_STOCK_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STOCK_ID like :STOCK_ID";
      $params["STOCK_ID"] = $_REQUEST["QRY_STOCK_ID"];
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
                CLIENT_CODE
                ,CLIENT_ID
                ,ORGINV_CODE
                ,ORGINV_ID
                ,ORG_ID
                ,ORG_NAME
                ,PRODUCT_CODE
                ,PRODUCT_ID
                ,PRODUCT_NAME
                ,QTY
                ,STOCKLOC_CODE
                ,STOCKLOC_ID
                ,STOCK_ID
                ,UOM
            from V_STOCKS  $where $orderByClause ";
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
                PRODUCT_CODE
                ,PRODUCT_NAME
                ,QTY
                ,UOM
                ,STOCK_ID
                ,CLIENT_ID
                ,CLIENT_CODE
                ,ORG_ID
                ,ORG_NAME
                ,ORGINV_ID
                ,ORGINV_CODE
                ,STOCKLOC_ID
                ,STOCKLOC_CODE
                ,PRODUCT_ID
            from V_STOCKS  $where $orderByClause ";
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
    $this->record["STOCK_ID"] = $this->getRequestParam("STOCK_ID");
    if (empty($this->record["STOCK_ID"])) { throw new Exception("Missing value for primary key field STOCK_ID in DC0089.fetchRecord().");}
    $pkArray = array("STOCK_ID" => $this->record["STOCK_ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CLIENT_CODE
                ,CLIENT_ID
                ,ORGINV_CODE
                ,ORGINV_ID
                ,ORG_ID
                ,ORG_NAME
                ,PRODUCT_CODE
                ,PRODUCT_ID
                ,PRODUCT_NAME
                ,QTY
                ,STOCKLOC_CODE
                ,STOCKLOC_ID
                ,STOCK_ID
                ,UOM
            from V_STOCKS 
         where 
           STOCK_ID= :STOCK_ID
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
  "CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORGINV_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORGINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRODUCT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QTY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"STOCKLOC_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STOCKLOC_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"STOCK_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"UOM" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
