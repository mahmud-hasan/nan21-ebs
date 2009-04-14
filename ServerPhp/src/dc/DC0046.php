<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0046 Controller: Project issues
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0046 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0046.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
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
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_prjissue_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0046.doUpdate().");}
    $sql = "update PROJECT_ISSUE set 
                 ESTIMATE_EFFORT=:ESTIMATE_EFFORT
                ,EFFORT_UNIT=:EFFORT_UNIT
                ,ID=:ID
                ,PROJECT_ID=:PROJECT_ID
                ,TITLE=:TITLE
                ,ISSUE_TYPE_CODE=:ISSUE_TYPE_CODE
                ,SEVERITY_CODE=:SEVERITY_CODE
                ,AFF_CMP_TYPE_CODE=:AFF_CMP_TYPE_CODE
                ,AFF_CMP=:AFF_CMP
                ,AFF_PROJECT_RELEASE_CODE=:AFF_PROJECT_RELEASE_CODE
                ,STATUS_CODE=:STATUS_CODE
                ,IS_CLOSED=:IS_CLOSED
                ,DESCRIPTION=:DESCRIPTION
                ,PRIORITY_CODE=:PRIORITY_CODE
                ,ASSIGNED_TO=:ASSIGNED_TO
                ,PLAN_STARTDATE=:PLAN_STARTDATE
                ,PLAN_ENDDATE=:PLAN_ENDDATE
                ,ACT_STARTDATE=:ACT_STARTDATE
                ,ACT_ENDDATE=:ACT_ENDDATE
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0046.doDelete().");}
    $sql = "delete from PROJECT_ISSUE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0046");
    print "{success:true, data:".json_encode($this->record)."}";
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
  "ACTUAL_EFFORT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACT_ENDDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ACT_STARTDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"AFF_CMP" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"AFF_CMP_TYPE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"AFF_PROJECT_RELEASE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ASSIGNED_TO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DESCRIPTION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EFFORT_UNIT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ESTIMATE_EFFORT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ISSUE_TYPE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"IS_CLOSED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PLAN_ENDDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PLAN_STARTDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PRIORITY_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROJECT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PROJECT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SEVERITY_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STATUS_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TITLE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
