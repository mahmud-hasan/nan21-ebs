<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0098 Controller: Transports
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0098 extends Controller {


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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"EFECTIVE_ARRIVE_DATE"
      ,"EFECTIVE_DEP_DATE"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"PLANNED_ARRIVE_DATE"
      ,"PLANNED_DEP_DATE"
      ,"TRANSPSTAT_CODE"
      ,"TRANSPTYPE_CODE"
      ,"VEHICLE_ID"
      ,"VEHICLE_REGNO"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"TRANSPTYPE_CODE"
     ,"TRANSPSTAT_CODE"
     ,"CODE"
     ,"VEHICLE_REGNO"
     ,"VEHICLE_ID"
     ,"PLANNED_DEP_DATE"
     ,"EFECTIVE_DEP_DATE"
     ,"PLANNED_ARRIVE_DATE"
     ,"EFECTIVE_ARRIVE_DATE"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0098.fetchRecord().");}
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["EFECTIVE_ARRIVE_DATE"] = $this->getRequestParam("EFECTIVE_ARRIVE_DATE");
    $RECORD["EFECTIVE_DEP_DATE"] = $this->getRequestParam("EFECTIVE_DEP_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PLANNED_ARRIVE_DATE"] = $this->getRequestParam("PLANNED_ARRIVE_DATE");
    $RECORD["PLANNED_DEP_DATE"] = $this->getRequestParam("PLANNED_DEP_DATE");
    $RECORD["TRANSPSTAT_CODE"] = $this->getRequestParam("TRANSPSTAT_CODE");
    $RECORD["TRANSPTYPE_CODE"] = $this->getRequestParam("TRANSPTYPE_CODE");
    $RECORD["VEHICLE_ID"] = $this->getRequestParam("VEHICLE_ID");
    $RECORD["VEHICLE_REGNO"] = $this->getRequestParam("VEHICLE_REGNO");
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
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_TRANSP_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["EFECTIVE_ARRIVE_DATE"] = $this->getRequestParam("EFECTIVE_ARRIVE_DATE");
    $RECORD["EFECTIVE_DEP_DATE"] = $this->getRequestParam("EFECTIVE_DEP_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["PLANNED_ARRIVE_DATE"] = $this->getRequestParam("PLANNED_ARRIVE_DATE");
    $RECORD["PLANNED_DEP_DATE"] = $this->getRequestParam("PLANNED_DEP_DATE");
    $RECORD["TRANSPSTAT_CODE"] = $this->getRequestParam("TRANSPSTAT_CODE");
    $RECORD["TRANSPTYPE_CODE"] = $this->getRequestParam("TRANSPTYPE_CODE");
    $RECORD["VEHICLE_ID"] = $this->getRequestParam("VEHICLE_ID");
    $RECORD["VEHICLE_REGNO"] = $this->getRequestParam("VEHICLE_REGNO");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0098.doUpdate().");}
    $sql = "update TR_TRANSPORT set 
                 CODE=:CODE
                ,EFECTIVE_ARRIVE_DATE=:EFECTIVE_ARRIVE_DATE
                ,EFECTIVE_DEP_DATE=:EFECTIVE_DEP_DATE
                ,ID=:ID
                ,PLANNED_ARRIVE_DATE=:PLANNED_ARRIVE_DATE
                ,PLANNED_DEP_DATE=:PLANNED_DEP_DATE
                ,TRANSPSTAT_CODE=:TRANSPSTAT_CODE
                ,TRANSPTYPE_CODE=:TRANSPTYPE_CODE
                ,VEHICLE_ID=:VEHICLE_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0098.doDelete().");}
    $sql = "delete from TR_TRANSPORT where 
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["EFECTIVE_ARRIVE_DATE"] = $this->getRequestParam("EFECTIVE_ARRIVE_DATE");
    $RECORD["EFECTIVE_DEP_DATE"] = $this->getRequestParam("EFECTIVE_DEP_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PLANNED_ARRIVE_DATE"] = $this->getRequestParam("PLANNED_ARRIVE_DATE");
    $RECORD["PLANNED_DEP_DATE"] = $this->getRequestParam("PLANNED_DEP_DATE");
    $RECORD["TRANSPSTAT_CODE"] = $this->getRequestParam("TRANSPSTAT_CODE");
    $RECORD["TRANSPTYPE_CODE"] = $this->getRequestParam("TRANSPTYPE_CODE");
    $RECORD["VEHICLE_ID"] = $this->getRequestParam("VEHICLE_ID");
    $RECORD["VEHICLE_REGNO"] = $this->getRequestParam("VEHICLE_REGNO");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0098");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CODE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"EFECTIVE_ARRIVE_DATE" => array("DATA_TYPE" => "DATE")
  ,"EFECTIVE_DEP_DATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"PLANNED_ARRIVE_DATE" => array("DATA_TYPE" => "DATE")
  ,"PLANNED_DEP_DATE" => array("DATA_TYPE" => "DATE")
  ,"TRANSPSTAT_CODE" => array("DATA_TYPE" => "STRING")
  ,"TRANSPTYPE_CODE" => array("DATA_TYPE" => "STRING")
  ,"VEHICLE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"VEHICLE_REGNO" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["EFECTIVE_ARRIVE_DATE"] )) { $RECORD["EFECTIVE_ARRIVE_DATE"] = $this->getRequestParam("EFECTIVE_ARRIVE_DATE"); }
     if (isset($_REQUEST["EFECTIVE_DEP_DATE"] )) { $RECORD["EFECTIVE_DEP_DATE"] = $this->getRequestParam("EFECTIVE_DEP_DATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["PLANNED_ARRIVE_DATE"] )) { $RECORD["PLANNED_ARRIVE_DATE"] = $this->getRequestParam("PLANNED_ARRIVE_DATE"); }
     if (isset($_REQUEST["PLANNED_DEP_DATE"] )) { $RECORD["PLANNED_DEP_DATE"] = $this->getRequestParam("PLANNED_DEP_DATE"); }
     if (isset($_REQUEST["TRANSPSTAT_CODE"] )) { $RECORD["TRANSPSTAT_CODE"] = $this->getRequestParam("TRANSPSTAT_CODE"); }
     if (isset($_REQUEST["TRANSPTYPE_CODE"] )) { $RECORD["TRANSPTYPE_CODE"] = $this->getRequestParam("TRANSPTYPE_CODE"); }
     if (isset($_REQUEST["VEHICLE_ID"] )) { $RECORD["VEHICLE_ID"] = $this->getRequestParam("VEHICLE_ID"); }
     if (isset($_REQUEST["VEHICLE_REGNO"] )) { $RECORD["VEHICLE_REGNO"] = $this->getRequestParam("VEHICLE_REGNO"); }
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
