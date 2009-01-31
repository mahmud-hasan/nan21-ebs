<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0046 Controller: Project issues
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0046 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ASSIGNED_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ASSIGNED_TO like :ASSIGNED_TO";
      $params["ASSIGNED_TO"] = $_REQUEST["QRY_ASSIGNED_TO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ISSUE_TYPE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ISSUE_TYPE_CODE like :ISSUE_TYPE_CODE";
      $params["ISSUE_TYPE_CODE"] = $_REQUEST["QRY_ISSUE_TYPE_CODE"];
    }
    if (!empty($_REQUEST["QRY_IS_CLOSED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_CLOSED like :IS_CLOSED";
      $params["IS_CLOSED"] = $_REQUEST["QRY_IS_CLOSED"];
    }
    if (!empty($_REQUEST["QRY_PRIORITY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PRIORITY_CODE like :PRIORITY_CODE";
      $params["PRIORITY_CODE"] = $_REQUEST["QRY_PRIORITY_CODE"];
    }
    if (!empty($_REQUEST["QRY_PROJECT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PROJECT_ID like :PROJECT_ID";
      $params["PROJECT_ID"] = $_REQUEST["QRY_PROJECT_ID"];
    }
    if (!empty($_REQUEST["QRY_SEVERITY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "SEVERITY_CODE like :SEVERITY_CODE";
      $params["SEVERITY_CODE"] = $_REQUEST["QRY_SEVERITY_CODE"];
    }
    if (!empty($_REQUEST["QRY_STATUS_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STATUS_CODE like :STATUS_CODE";
      $params["STATUS_CODE"] = $_REQUEST["QRY_STATUS_CODE"];
    }
    if (!empty($_REQUEST["QRY_TITLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "TITLE like :TITLE";
      $params["TITLE"] = $_REQUEST["QRY_TITLE"];
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
                ACTUAL_EFFORT
                ,ACT_ENDDATE
                ,ACT_STARTDATE
                ,AFF_CMP
                ,AFF_CMP_TYPE_CODE
                ,AFF_PROJECT_RELEASE_CODE
                ,ASSIGNED_TO
                ,CREATEDBY
                ,CREATEDON
                ,DESCRIPTION
                ,EFFORT_UNIT
                ,ESTIMATE_EFFORT
                ,ID
                ,ISSUE_TYPE_CODE
                ,IS_CLOSED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,PLAN_ENDDATE
                ,PLAN_STARTDATE
                ,PRIORITY_CODE
                ,PROJECT_ID
                ,( select name from project where id = project_id) PROJECT_NAME
                ,SEVERITY_CODE
                ,STATUS_CODE
                ,TITLE
            from PROJECT_ISSUE  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACTUAL_EFFORT"
      ,"ACT_ENDDATE"
      ,"ACT_STARTDATE"
      ,"AFF_CMP"
      ,"AFF_CMP_TYPE_CODE"
      ,"AFF_PROJECT_RELEASE_CODE"
      ,"ASSIGNED_TO"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"DESCRIPTION"
      ,"EFFORT_UNIT"
      ,"ESTIMATE_EFFORT"
      ,"ID"
      ,"ISSUE_TYPE_CODE"
      ,"IS_CLOSED"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"PLAN_ENDDATE"
      ,"PLAN_STARTDATE"
      ,"PRIORITY_CODE"
      ,"PROJECT_ID"
      ,"PROJECT_NAME"
      ,"SEVERITY_CODE"
      ,"STATUS_CODE"
      ,"TITLE"
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
                PROJECT_ID
                ,ID
                ,( select name from project where id = project_id) PROJECT_NAME
                ,TITLE
                ,ISSUE_TYPE_CODE
                ,SEVERITY_CODE
                ,STATUS_CODE
                ,PRIORITY_CODE
                ,AFF_CMP_TYPE_CODE
                ,AFF_CMP
                ,AFF_PROJECT_RELEASE_CODE
                ,EFFORT_UNIT
                ,ESTIMATE_EFFORT
                ,ACTUAL_EFFORT
                ,IS_CLOSED
                ,DESCRIPTION
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,ASSIGNED_TO
                ,PLAN_STARTDATE
                ,PLAN_ENDDATE
                ,ACT_STARTDATE
                ,ACT_ENDDATE
            from PROJECT_ISSUE  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "PROJECT_ID"
     ,"ID"
     ,"PROJECT_NAME"
     ,"TITLE"
     ,"ISSUE_TYPE_CODE"
     ,"SEVERITY_CODE"
     ,"STATUS_CODE"
     ,"PRIORITY_CODE"
     ,"AFF_CMP_TYPE_CODE"
     ,"AFF_CMP"
     ,"AFF_PROJECT_RELEASE_CODE"
     ,"EFFORT_UNIT"
     ,"ESTIMATE_EFFORT"
     ,"ACTUAL_EFFORT"
     ,"IS_CLOSED"
     ,"DESCRIPTION"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"ASSIGNED_TO"
     ,"PLAN_STARTDATE"
     ,"PLAN_ENDDATE"
     ,"ACT_STARTDATE"
     ,"ACT_ENDDATE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0046.fetchRecord().");}
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
    $RECORD["ACT_ENDDATE"] = $this->getRequestParam("ACT_ENDDATE");
    $RECORD["ACT_STARTDATE"] = $this->getRequestParam("ACT_STARTDATE");
    $RECORD["AFF_CMP"] = $this->getRequestParam("AFF_CMP");
    $RECORD["AFF_CMP_TYPE_CODE"] = $this->getRequestParam("AFF_CMP_TYPE_CODE");
    $RECORD["AFF_PROJECT_RELEASE_CODE"] = $this->getRequestParam("AFF_PROJECT_RELEASE_CODE");
    $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT");
    $RECORD["ESTIMATE_EFFORT"] = $this->getRequestParam("ESTIMATE_EFFORT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["ISSUE_TYPE_CODE"] = $this->getRequestParam("ISSUE_TYPE_CODE");
    $RECORD["IS_CLOSED"] = $this->getRequestParamBoolean("IS_CLOSED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PLAN_ENDDATE"] = $this->getRequestParam("PLAN_ENDDATE");
    $RECORD["PLAN_STARTDATE"] = $this->getRequestParam("PLAN_STARTDATE");
    $RECORD["PRIORITY_CODE"] = $this->getRequestParam("PRIORITY_CODE");
    $RECORD["PROJECT_ID"] = $this->getRequestParam("PROJECT_ID");
    $RECORD["PROJECT_NAME"] = $this->getRequestParam("PROJECT_NAME");
    $RECORD["SEVERITY_CODE"] = $this->getRequestParam("SEVERITY_CODE");
    $RECORD["STATUS_CODE"] = $this->getRequestParam("STATUS_CODE");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    $sql = "insert into PROJECT_ISSUE(
                 ACT_ENDDATE
                ,ACT_STARTDATE
                ,AFF_CMP
                ,AFF_CMP_TYPE_CODE
                ,AFF_PROJECT_RELEASE_CODE
                ,ASSIGNED_TO
                ,DESCRIPTION
                ,EFFORT_UNIT
                ,ESTIMATE_EFFORT
                ,ID
                ,ISSUE_TYPE_CODE
                ,IS_CLOSED
                ,PLAN_ENDDATE
                ,PLAN_STARTDATE
                ,PRIORITY_CODE
                ,PROJECT_ID
                ,SEVERITY_CODE
                ,STATUS_CODE
                ,TITLE
            ) values ( 
                 :ACT_ENDDATE
                ,:ACT_STARTDATE
                ,:AFF_CMP
                ,:AFF_CMP_TYPE_CODE
                ,:AFF_PROJECT_RELEASE_CODE
                ,:ASSIGNED_TO
                ,:DESCRIPTION
                ,:EFFORT_UNIT
                ,:ESTIMATE_EFFORT
                ,:ID
                ,:ISSUE_TYPE_CODE
                ,:IS_CLOSED
                ,:PLAN_ENDDATE
                ,:PLAN_STARTDATE
                ,:PRIORITY_CODE
                ,:PROJECT_ID
                ,:SEVERITY_CODE
                ,:STATUS_CODE
                ,:TITLE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_prjissue_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACT_ENDDATE"] = $this->getRequestParam("ACT_ENDDATE");
    $RECORD["ACT_STARTDATE"] = $this->getRequestParam("ACT_STARTDATE");
    $RECORD["AFF_CMP"] = $this->getRequestParam("AFF_CMP");
    $RECORD["AFF_CMP_TYPE_CODE"] = $this->getRequestParam("AFF_CMP_TYPE_CODE");
    $RECORD["AFF_PROJECT_RELEASE_CODE"] = $this->getRequestParam("AFF_PROJECT_RELEASE_CODE");
    $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT");
    $RECORD["ESTIMATE_EFFORT"] = $this->getRequestParam("ESTIMATE_EFFORT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["ISSUE_TYPE_CODE"] = $this->getRequestParam("ISSUE_TYPE_CODE");
    $RECORD["IS_CLOSED"] = $this->getRequestParamBoolean("IS_CLOSED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PLAN_ENDDATE"] = $this->getRequestParam("PLAN_ENDDATE");
    $RECORD["PLAN_STARTDATE"] = $this->getRequestParam("PLAN_STARTDATE");
    $RECORD["PRIORITY_CODE"] = $this->getRequestParam("PRIORITY_CODE");
    $RECORD["PROJECT_ID"] = $this->getRequestParam("PROJECT_ID");
    $RECORD["PROJECT_NAME"] = $this->getRequestParam("PROJECT_NAME");
    $RECORD["SEVERITY_CODE"] = $this->getRequestParam("SEVERITY_CODE");
    $RECORD["STATUS_CODE"] = $this->getRequestParam("STATUS_CODE");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0046.doUpdate().");}
    $sql = "update PROJECT_ISSUE set 
                 ACT_ENDDATE=:ACT_ENDDATE
                ,ACT_STARTDATE=:ACT_STARTDATE
                ,AFF_CMP=:AFF_CMP
                ,AFF_CMP_TYPE_CODE=:AFF_CMP_TYPE_CODE
                ,AFF_PROJECT_RELEASE_CODE=:AFF_PROJECT_RELEASE_CODE
                ,ASSIGNED_TO=:ASSIGNED_TO
                ,DESCRIPTION=:DESCRIPTION
                ,EFFORT_UNIT=:EFFORT_UNIT
                ,ESTIMATE_EFFORT=:ESTIMATE_EFFORT
                ,ID=:ID
                ,ISSUE_TYPE_CODE=:ISSUE_TYPE_CODE
                ,IS_CLOSED=:IS_CLOSED
                ,PLAN_ENDDATE=:PLAN_ENDDATE
                ,PLAN_STARTDATE=:PLAN_STARTDATE
                ,PRIORITY_CODE=:PRIORITY_CODE
                ,PROJECT_ID=:PROJECT_ID
                ,SEVERITY_CODE=:SEVERITY_CODE
                ,STATUS_CODE=:STATUS_CODE
                ,TITLE=:TITLE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0046.doDelete().");}
    $sql = "delete from PROJECT_ISSUE where 
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
    $RECORD["ACTUAL_EFFORT"] = $this->getRequestParam("ACTUAL_EFFORT");
    $RECORD["ACT_ENDDATE"] = $this->getRequestParam("ACT_ENDDATE");
    $RECORD["ACT_STARTDATE"] = $this->getRequestParam("ACT_STARTDATE");
    $RECORD["AFF_CMP"] = $this->getRequestParam("AFF_CMP");
    $RECORD["AFF_CMP_TYPE_CODE"] = $this->getRequestParam("AFF_CMP_TYPE_CODE");
    $RECORD["AFF_PROJECT_RELEASE_CODE"] = $this->getRequestParam("AFF_PROJECT_RELEASE_CODE");
    $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT");
    $RECORD["ESTIMATE_EFFORT"] = $this->getRequestParam("ESTIMATE_EFFORT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["ISSUE_TYPE_CODE"] = $this->getRequestParam("ISSUE_TYPE_CODE");
    $RECORD["IS_CLOSED"] = $this->getRequestParam("IS_CLOSED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PLAN_ENDDATE"] = $this->getRequestParam("PLAN_ENDDATE");
    $RECORD["PLAN_STARTDATE"] = $this->getRequestParam("PLAN_STARTDATE");
    $RECORD["PRIORITY_CODE"] = $this->getRequestParam("PRIORITY_CODE");
    $RECORD["PROJECT_ID"] = $this->getRequestParam("PROJECT_ID");
    $RECORD["PROJECT_NAME"] = $this->getRequestParam("PROJECT_NAME");
    $RECORD["SEVERITY_CODE"] = $this->getRequestParam("SEVERITY_CODE");
    $RECORD["STATUS_CODE"] = $this->getRequestParam("STATUS_CODE");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0046");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACTUAL_EFFORT
                ,ACT_ENDDATE
                ,ACT_STARTDATE
                ,AFF_CMP
                ,AFF_CMP_TYPE_CODE
                ,AFF_PROJECT_RELEASE_CODE
                ,ASSIGNED_TO
                ,CREATEDBY
                ,CREATEDON
                ,DESCRIPTION
                ,EFFORT_UNIT
                ,ESTIMATE_EFFORT
                ,ID
                ,ISSUE_TYPE_CODE
                ,IS_CLOSED
                ,MODIFIEDBY
                ,MODIFIEDON
                ,PLAN_ENDDATE
                ,PLAN_STARTDATE
                ,PRIORITY_CODE
                ,PROJECT_ID
                ,( select name from project where id = project_id) PROJECT_NAME
                ,SEVERITY_CODE
                ,STATUS_CODE
                ,TITLE
            from PROJECT_ISSUE 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACTUAL_EFFORT" => array("DATA_TYPE" => "NUMBER")
  ,"ACT_ENDDATE" => array("DATA_TYPE" => "DATE")
  ,"ACT_STARTDATE" => array("DATA_TYPE" => "DATE")
  ,"AFF_CMP" => array("DATA_TYPE" => "STRING")
  ,"AFF_CMP_TYPE_CODE" => array("DATA_TYPE" => "STRING")
  ,"AFF_PROJECT_RELEASE_CODE" => array("DATA_TYPE" => "STRING")
  ,"ASSIGNED_TO" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"EFFORT_UNIT" => array("DATA_TYPE" => "STRING")
  ,"ESTIMATE_EFFORT" => array("DATA_TYPE" => "NUMBER")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"ISSUE_TYPE_CODE" => array("DATA_TYPE" => "STRING")
  ,"IS_CLOSED" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"PLAN_ENDDATE" => array("DATA_TYPE" => "DATE")
  ,"PLAN_STARTDATE" => array("DATA_TYPE" => "DATE")
  ,"PRIORITY_CODE" => array("DATA_TYPE" => "STRING")
  ,"PROJECT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PROJECT_NAME" => array("DATA_TYPE" => "STRING")
  ,"SEVERITY_CODE" => array("DATA_TYPE" => "STRING")
  ,"STATUS_CODE" => array("DATA_TYPE" => "STRING")
  ,"TITLE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACTUAL_EFFORT"] )) { $RECORD["ACTUAL_EFFORT"] = $this->getRequestParam("ACTUAL_EFFORT"); }
     if (isset($_REQUEST["ACT_ENDDATE"] )) { $RECORD["ACT_ENDDATE"] = $this->getRequestParam("ACT_ENDDATE"); }
     if (isset($_REQUEST["ACT_STARTDATE"] )) { $RECORD["ACT_STARTDATE"] = $this->getRequestParam("ACT_STARTDATE"); }
     if (isset($_REQUEST["AFF_CMP"] )) { $RECORD["AFF_CMP"] = $this->getRequestParam("AFF_CMP"); }
     if (isset($_REQUEST["AFF_CMP_TYPE_CODE"] )) { $RECORD["AFF_CMP_TYPE_CODE"] = $this->getRequestParam("AFF_CMP_TYPE_CODE"); }
     if (isset($_REQUEST["AFF_PROJECT_RELEASE_CODE"] )) { $RECORD["AFF_PROJECT_RELEASE_CODE"] = $this->getRequestParam("AFF_PROJECT_RELEASE_CODE"); }
     if (isset($_REQUEST["ASSIGNED_TO"] )) { $RECORD["ASSIGNED_TO"] = $this->getRequestParam("ASSIGNED_TO"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["EFFORT_UNIT"] )) { $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT"); }
     if (isset($_REQUEST["ESTIMATE_EFFORT"] )) { $RECORD["ESTIMATE_EFFORT"] = $this->getRequestParam("ESTIMATE_EFFORT"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["ISSUE_TYPE_CODE"] )) { $RECORD["ISSUE_TYPE_CODE"] = $this->getRequestParam("ISSUE_TYPE_CODE"); }
    $RECORD["IS_CLOSED"] = $this->getRequestParamBoolean("IS_CLOSED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["PLAN_ENDDATE"] )) { $RECORD["PLAN_ENDDATE"] = $this->getRequestParam("PLAN_ENDDATE"); }
     if (isset($_REQUEST["PLAN_STARTDATE"] )) { $RECORD["PLAN_STARTDATE"] = $this->getRequestParam("PLAN_STARTDATE"); }
     if (isset($_REQUEST["PRIORITY_CODE"] )) { $RECORD["PRIORITY_CODE"] = $this->getRequestParam("PRIORITY_CODE"); }
     if (isset($_REQUEST["PROJECT_ID"] )) { $RECORD["PROJECT_ID"] = $this->getRequestParam("PROJECT_ID"); }
     if (isset($_REQUEST["PROJECT_NAME"] )) { $RECORD["PROJECT_NAME"] = $this->getRequestParam("PROJECT_NAME"); }
     if (isset($_REQUEST["SEVERITY_CODE"] )) { $RECORD["SEVERITY_CODE"] = $this->getRequestParam("SEVERITY_CODE"); }
     if (isset($_REQUEST["STATUS_CODE"] )) { $RECORD["STATUS_CODE"] = $this->getRequestParam("STATUS_CODE"); }
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
