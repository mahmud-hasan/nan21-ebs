<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0019 Controller: Tasks
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0019 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLOSED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLOSED like :CLOSED";
      $params["CLOSED"] = $_REQUEST["QRY_CLOSED"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_TITLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "TITLE like :TITLE";
      $params["TITLE"] = $_REQUEST["QRY_TITLE"];
    }
    if (!empty($_REQUEST["QRY_STATUS"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STATUS like :STATUS";
      $params["STATUS"] = $_REQUEST["QRY_STATUS"];
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
                CLOSED
                ,ID
                ,TITLE
                ,FINISH_DATE
                ,START_DATE
                ,STATUS
                ,ASSIGNED_TO
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,NOTES
            from TASKS  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLOSED"
      ,"ID"
      ,"TITLE"
      ,"FINISH_DATE"
      ,"START_DATE"
      ,"STATUS"
      ,"ASSIGNED_TO"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"NOTES"
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
                TITLE
                ,ASSIGNED_TO
                ,START_DATE
                ,FINISH_DATE
                ,STATUS
                ,CLOSED
                ,NOTES
                ,ID
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from TASKS  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "TITLE"
     ,"ASSIGNED_TO"
     ,"START_DATE"
     ,"FINISH_DATE"
     ,"STATUS"
     ,"CLOSED"
     ,"NOTES"
     ,"ID"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0019.fetchRecord().");}
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
    $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO");
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["FINISH_DATE"] = $this->getRequestParam("FINISH_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["START_DATE"] = $this->getRequestParam("START_DATE");
    $RECORD["STATUS"] = $this->getRequestParam("STATUS");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    $sql = "insert into TASKS(
                 CLOSED
                ,ID
                ,TITLE
                ,FINISH_DATE
                ,START_DATE
                ,STATUS
                ,ASSIGNED_TO
                ,CREATEDBY
                ,MODIFIEDBY
                ,NOTES
            ) values ( 
                 :CLOSED
                ,:ID
                ,:TITLE
                ,:FINISH_DATE
                ,:START_DATE
                ,:STATUS
                ,:ASSIGNED_TO
                ,:CREATEDBY
                ,:MODIFIEDBY
                ,:NOTES
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_task_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO");
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
    $RECORD["FINISH_DATE"] = $this->getRequestParam("FINISH_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["START_DATE"] = $this->getRequestParam("START_DATE");
    $RECORD["STATUS"] = $this->getRequestParam("STATUS");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0019.doUpdate().");}
    $sql = "update TASKS set 
                 CLOSED=:CLOSED
                ,ID=:ID
                ,TITLE=:TITLE
                ,FINISH_DATE=:FINISH_DATE
                ,START_DATE=:START_DATE
                ,STATUS=:STATUS
                ,ASSIGNED_TO=:ASSIGNED_TO
                ,NOTES=:NOTES
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0019.doDelete().");}
    $sql = "delete from TASKS where 
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
    $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO");
    $RECORD["CLOSED"] = $this->getRequestParam("CLOSED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["FINISH_DATE"] = $this->getRequestParam("FINISH_DATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["START_DATE"] = $this->getRequestParam("START_DATE");
    $RECORD["STATUS"] = $this->getRequestParam("STATUS");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0019");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CLOSED
                ,ID
                ,TITLE
                ,FINISH_DATE
                ,START_DATE
                ,STATUS
                ,ASSIGNED_TO
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,NOTES
            from TASKS 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CLOSED" => array("DATA_TYPE" => "BOOLEAN")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"TITLE" => array("DATA_TYPE" => "STRING")
  ,"FINISH_DATE" => array("DATA_TYPE" => "DATE")
  ,"START_DATE" => array("DATA_TYPE" => "DATE")
  ,"STATUS" => array("DATA_TYPE" => "STRING")
  ,"ASSIGNED_TO" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ASSIGNED_TO"] )) { $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO"); }
    $RECORD["CLOSED"] = $this->getRequestParamBoolean("CLOSED");
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["FINISH_DATE"] )) { $RECORD["FINISH_DATE"] = $this->getRequestParam("FINISH_DATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["START_DATE"] )) { $RECORD["START_DATE"] = $this->getRequestParam("START_DATE"); }
     if (isset($_REQUEST["STATUS"] )) { $RECORD["STATUS"] = $this->getRequestParam("STATUS"); }
     if (isset($_REQUEST["TITLE"] )) { $RECORD["TITLE"] = $this->getRequestParam("TITLE"); }
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
