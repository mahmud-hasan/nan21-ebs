<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0098 Controller: Transports
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0098 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_TRANSPSTAT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.TRANSPSTAT_CODE like :TRANSPSTAT_CODE";
      $params["TRANSPSTAT_CODE"] = $_REQUEST["QRY_TRANSPSTAT_CODE"];
    }
    if (!empty($_REQUEST["QRY_TRANSPTYPE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.TRANSPTYPE_CODE like :TRANSPTYPE_CODE";
      $params["TRANSPTYPE_CODE"] = $_REQUEST["QRY_TRANSPTYPE_CODE"];
    }
    if (!empty($_REQUEST["QRY_VEHICLE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.VEHICLE_ID like :VEHICLE_ID";
      $params["VEHICLE_ID"] = $_REQUEST["QRY_VEHICLE_ID"];
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
                t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.EFECTIVE_ARRIVE_DATE
                ,t.EFECTIVE_DEP_DATE
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PLANNED_ARRIVE_DATE
                ,t.PLANNED_DEP_DATE
                ,t.TRANSPSTAT_CODE
                ,t.TRANSPTYPE_CODE
                ,t.VEHICLE_ID
                ,pbo_transp.get_vehicle_regno_by_id(t.vehicle_id) VEHICLE_REGNO
            from TR_TRANSPORT t $where $orderByClause ";
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
                ,t.TRANSPTYPE_CODE
                ,t.TRANSPSTAT_CODE
                ,t.CODE
                ,pbo_transp.get_vehicle_regno_by_id(t.vehicle_id) VEHICLE_REGNO
                ,t.VEHICLE_ID
                ,t.PLANNED_DEP_DATE
                ,t.EFECTIVE_DEP_DATE
                ,t.PLANNED_ARRIVE_DATE
                ,t.EFECTIVE_ARRIVE_DATE
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from TR_TRANSPORT t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0098.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into TR_TRANSPORT(
                 CODE
                ,EFECTIVE_ARRIVE_DATE
                ,EFECTIVE_DEP_DATE
                ,ID
                ,PLANNED_ARRIVE_DATE
                ,PLANNED_DEP_DATE
                ,TRANSPSTAT_CODE
                ,TRANSPTYPE_CODE
                ,VEHICLE_ID
            ) values ( 
                 :CODE
                ,:EFECTIVE_ARRIVE_DATE
                ,:EFECTIVE_DEP_DATE
                ,:ID
                ,:PLANNED_ARRIVE_DATE
                ,:PLANNED_DEP_DATE
                ,:TRANSPSTAT_CODE
                ,:TRANSPTYPE_CODE
                ,:VEHICLE_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_TRANSP_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0098.doUpdate().");}
    $sql = "update TR_TRANSPORT set 
                 ID=:ID
                ,CODE=:CODE
                ,PLANNED_DEP_DATE=:PLANNED_DEP_DATE
                ,EFECTIVE_DEP_DATE=:EFECTIVE_DEP_DATE
                ,PLANNED_ARRIVE_DATE=:PLANNED_ARRIVE_DATE
                ,EFECTIVE_ARRIVE_DATE=:EFECTIVE_ARRIVE_DATE
                ,TRANSPTYPE_CODE=:TRANSPTYPE_CODE
                ,TRANSPSTAT_CODE=:TRANSPSTAT_CODE
                ,VEHICLE_ID=:VEHICLE_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0098.doDelete().");}
    $sql = "delete from TR_TRANSPORT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0098");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.EFECTIVE_ARRIVE_DATE
                ,t.EFECTIVE_DEP_DATE
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PLANNED_ARRIVE_DATE
                ,t.PLANNED_DEP_DATE
                ,t.TRANSPSTAT_CODE
                ,t.TRANSPTYPE_CODE
                ,t.VEHICLE_ID
                ,pbo_transp.get_vehicle_regno_by_id(t.vehicle_id) VEHICLE_REGNO
            from TR_TRANSPORT t
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
  "CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"EFECTIVE_ARRIVE_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"EFECTIVE_DEP_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PLANNED_ARRIVE_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PLANNED_DEP_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"TRANSPSTAT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TRANSPTYPE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"VEHICLE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"VEHICLE_REGNO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
