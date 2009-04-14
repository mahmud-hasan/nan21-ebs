<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0071 Controller: UI DC role permission
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0071 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_DELETE_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DELETE_ALLOWED like :DELETE_ALLOWED";
      $params["DELETE_ALLOWED"] = $_REQUEST["QRY_DELETE_ALLOWED"];
    }
    if (!empty($_REQUEST["QRY_FETCH_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "FETCH_ALLOWED like :FETCH_ALLOWED";
      $params["FETCH_ALLOWED"] = $_REQUEST["QRY_FETCH_ALLOWED"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_INSERT_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "INSERT_ALLOWED like :INSERT_ALLOWED";
      $params["INSERT_ALLOWED"] = $_REQUEST["QRY_INSERT_ALLOWED"];
    }
    if (!empty($_REQUEST["QRY_ROLE_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ROLE_NAME like :ROLE_NAME";
      $params["ROLE_NAME"] = $_REQUEST["QRY_ROLE_NAME"];
    }
    if (!empty($_REQUEST["QRY_UI_DC"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UI_DC like :UI_DC";
      $params["UI_DC"] = $_REQUEST["QRY_UI_DC"];
    }
    if (!empty($_REQUEST["QRY_UPDATE_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UPDATE_ALLOWED like :UPDATE_ALLOWED";
      $params["UPDATE_ALLOWED"] = $_REQUEST["QRY_UPDATE_ALLOWED"];
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
                CREATEDBY
                ,CREATEDON
                ,DELETE_ALLOWED
                ,FETCH_ALLOWED
                ,ID
                ,INSERT_ALLOWED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,ROLE_NAME
                ,UI_DC
                ,UPDATE_ALLOWED
            from UI_DC_ROLE_PERMISSION  $where $orderByClause ";
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
                ID
                ,UI_DC
                ,ROLE_NAME
                ,FETCH_ALLOWED
                ,INSERT_ALLOWED
                ,UPDATE_ALLOWED
                ,DELETE_ALLOWED
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DC_ROLE_PERMISSION  $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0071.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into UI_DC_ROLE_PERMISSION(
                 DELETE_ALLOWED
                ,FETCH_ALLOWED
                ,ID
                ,INSERT_ALLOWED
                ,ROLE_NAME
                ,UI_DC
                ,UPDATE_ALLOWED
            ) values ( 
                 :DELETE_ALLOWED
                ,:FETCH_ALLOWED
                ,:ID
                ,:INSERT_ALLOWED
                ,:ROLE_NAME
                ,:UI_DC
                ,:UPDATE_ALLOWED
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_UIDCROLEPRMS_ID.nextval seq_val from dual")->fetchRow();
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
    $sql = "update UI_DC_ROLE_PERMISSION set 
                 DELETE_ALLOWED=:DELETE_ALLOWED
                ,FETCH_ALLOWED=:FETCH_ALLOWED
                ,ID=:ID
                ,INSERT_ALLOWED=:INSERT_ALLOWED
                ,UPDATE_ALLOWED=:UPDATE_ALLOWED
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0071.doDelete().");}
    $sql = "delete from UI_DC_ROLE_PERMISSION where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0071");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CREATEDBY
                ,CREATEDON
                ,DELETE_ALLOWED
                ,FETCH_ALLOWED
                ,ID
                ,INSERT_ALLOWED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,ROLE_NAME
                ,UI_DC
                ,UPDATE_ALLOWED
            from UI_DC_ROLE_PERMISSION 
         where 
           ID= :ID
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
  ,"DELETE_ALLOWED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"FETCH_ALLOWED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INSERT_ALLOWED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ROLE_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"UI_DC" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"UPDATE_ALLOWED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
);
}

}
?>
