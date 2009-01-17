<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0089 Controller: Stocks
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0089 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_STOCK_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STOCK_ID like :STOCK_ID";
      $params["STOCK_ID"] = $_REQUEST["QRY_STOCK_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_CODE like :CLIENT_CODE";
      $params["CLIENT_CODE"] = $_REQUEST["QRY_CLIENT_CODE"];
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
    if (!empty($_REQUEST["QRY_ORGINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORGINV_ID like :ORGINV_ID";
      $params["ORGINV_ID"] = $_REQUEST["QRY_ORGINV_ID"];
    }
    if (!empty($_REQUEST["QRY_ORGINV_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ORGINV_CODE like :ORGINV_CODE";
      $params["ORGINV_CODE"] = $_REQUEST["QRY_ORGINV_CODE"];
    }
    if (!empty($_REQUEST["QRY_STOCKLOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STOCKLOC_ID like :STOCKLOC_ID";
      $params["STOCKLOC_ID"] = $_REQUEST["QRY_STOCKLOC_ID"];
    }
    if (!empty($_REQUEST["QRY_STOCKLOC_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STOCKLOC_CODE like :STOCKLOC_CODE";
      $params["STOCKLOC_CODE"] = $_REQUEST["QRY_STOCKLOC_CODE"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRODUCT_CODE like :PRODUCT_CODE";
      $params["PRODUCT_CODE"] = $_REQUEST["QRY_PRODUCT_CODE"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRODUCT_NAME like :PRODUCT_NAME";
      $params["PRODUCT_NAME"] = $_REQUEST["QRY_PRODUCT_NAME"];
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
                STOCK_ID
                ,CLIENT_ID
                ,CLIENT_CODE
                ,ORG_ID
                ,ORG_NAME
                ,ORGINV_ID
                ,ORGINV_CODE
                ,STOCKLOC_ID
                ,STOCKLOC_CODE
                ,PRODUCT_ID
                ,PRODUCT_CODE
                ,PRODUCT_NAME
                ,QTY
                ,UOM
            from V_STOCKS  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "STOCK_ID"
      ,"CLIENT_ID"
      ,"CLIENT_CODE"
      ,"ORG_ID"
      ,"ORG_NAME"
      ,"ORGINV_ID"
      ,"ORGINV_CODE"
      ,"STOCKLOC_ID"
      ,"STOCKLOC_CODE"
      ,"PRODUCT_ID"
      ,"PRODUCT_CODE"
      ,"PRODUCT_NAME"
      ,"QTY"
      ,"UOM"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "PRODUCT_CODE"
     ,"PRODUCT_NAME"
     ,"QTY"
     ,"UOM"
     ,"STOCK_ID"
     ,"CLIENT_ID"
     ,"CLIENT_CODE"
     ,"ORG_ID"
     ,"ORG_NAME"
     ,"ORGINV_ID"
     ,"ORGINV_CODE"
     ,"STOCKLOC_ID"
     ,"STOCKLOC_CODE"
     ,"PRODUCT_ID"
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
    $RECORD["STOCK_ID"] = $this->getRequestParam("STOCK_ID");
    if (empty($RECORD["STOCK_ID"])) { throw new Exception("Missing value for primary key field STOCK_ID in DC0089.fetchRecord().");}
    $pkArray = array("STOCK_ID" => $RECORD["STOCK_ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                STOCK_ID
                ,CLIENT_ID
                ,CLIENT_CODE
                ,ORG_ID
                ,ORG_NAME
                ,ORGINV_ID
                ,ORGINV_CODE
                ,STOCKLOC_ID
                ,STOCKLOC_CODE
                ,PRODUCT_ID
                ,PRODUCT_CODE
                ,PRODUCT_NAME
                ,QTY
                ,UOM
            from V_STOCKS 
         where 
           STOCK_ID= :STOCK_ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "STOCK_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"ORG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORG_NAME" => array("DATA_TYPE" => "STRING")
  ,"ORGINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORGINV_CODE" => array("DATA_TYPE" => "STRING")
  ,"STOCKLOC_ID" => array("DATA_TYPE" => "NUMBER")
  ,"STOCKLOC_CODE" => array("DATA_TYPE" => "STRING")
  ,"PRODUCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_CODE" => array("DATA_TYPE" => "STRING")
  ,"PRODUCT_NAME" => array("DATA_TYPE" => "STRING")
  ,"QTY" => array("DATA_TYPE" => "NUMBER")
  ,"UOM" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["ORGINV_CODE"] )) { $RECORD["ORGINV_CODE"] = $this->getRequestParam("ORGINV_CODE"); }
     if (isset($_REQUEST["ORGINV_ID"] )) { $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID"); }
     if (isset($_REQUEST["ORG_ID"] )) { $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID"); }
     if (isset($_REQUEST["ORG_NAME"] )) { $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME"); }
     if (isset($_REQUEST["PRODUCT_CODE"] )) { $RECORD["PRODUCT_CODE"] = $this->getRequestParam("PRODUCT_CODE"); }
     if (isset($_REQUEST["PRODUCT_ID"] )) { $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID"); }
     if (isset($_REQUEST["PRODUCT_NAME"] )) { $RECORD["PRODUCT_NAME"] = $this->getRequestParam("PRODUCT_NAME"); }
     if (isset($_REQUEST["QTY"] )) { $RECORD["QTY"] = $this->getRequestParam("QTY"); }
     if (isset($_REQUEST["STOCKLOC_CODE"] )) { $RECORD["STOCKLOC_CODE"] = $this->getRequestParam("STOCKLOC_CODE"); }
     if (isset($_REQUEST["STOCKLOC_ID"] )) { $RECORD["STOCKLOC_ID"] = $this->getRequestParam("STOCKLOC_ID"); }
     if (isset($_REQUEST["STOCK_ID"] )) { $RECORD["STOCK_ID"] = $this->getRequestParam("STOCK_ID"); }
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
