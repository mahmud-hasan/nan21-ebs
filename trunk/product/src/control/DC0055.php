<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0055 Controller: Timesheet - charge project issue
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0055 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CHARGED_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.CHARGED_DATE like :CHARGED_DATE";
      $params["CHARGED_DATE"] = $_REQUEST["QRY_CHARGED_DATE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_EFFORT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.EFFORT like :EFFORT";
      $params["EFFORT"] = $_REQUEST["QRY_EFFORT"];
    }
    if (!empty($_REQUEST["QRY_EFFORT_UNIT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.EFFORT_UNIT like :EFFORT_UNIT";
      $params["EFFORT_UNIT"] = $_REQUEST["QRY_EFFORT_UNIT"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_APPROVED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.IS_APPROVED like :IS_APPROVED";
      $params["IS_APPROVED"] = $_REQUEST["QRY_IS_APPROVED"];
    }
    if (!empty($_REQUEST["QRY_IS_INSERTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.IS_INSERTED like :IS_INSERTED";
      $params["IS_INSERTED"] = $_REQUEST["QRY_IS_INSERTED"];
    }
    if (!empty($_REQUEST["QRY_PROJECT_ISSUE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.PROJECT_ISSUE_ID like :PROJECT_ISSUE_ID";
      $params["PROJECT_ISSUE_ID"] = $_REQUEST["QRY_PROJECT_ISSUE_ID"];
    }
    if (!empty($_REQUEST["QRY_USER_ACCOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ts.USER_ACCOUNT like :USER_ACCOUNT";
      $params["USER_ACCOUNT"] = $_REQUEST["QRY_USER_ACCOUNT"];
    }
}

public function doQuery() {
  try {
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ts.charged_date";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "ts.user_account=user";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                ts.CHARGED_DATE
                ,ts.CLIENT_ID
                ,ts.EFFORT
                ,ts.EFFORT_UNIT
                ,ts.ID
                ,ts.IS_APPROVED
                ,ts.IS_INSERTED
                ,ts.PROJECT_ISSUE_ID
                ,ts.USER_ACCOUNT
            from TIMESHEET ts $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CHARGED_DATE"
      ,"CLIENT_ID"
      ,"EFFORT"
      ,"EFFORT_UNIT"
      ,"ID"
      ,"IS_APPROVED"
      ,"IS_INSERTED"
      ,"PROJECT_ISSUE_ID"
      ,"USER_ACCOUNT"
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
    $limit = nvl($this->getRequestParam("limit"),-1);
    $groupBy = (!empty($_REQUEST["groupBy"]))?$_REQUEST["groupBy"]:"";
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ts.charged_date";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                ts.ID
                ,ts.PROJECT_ISSUE_ID
                ,ts.CLIENT_ID
                ,ts.USER_ACCOUNT
                ,ts.CHARGED_DATE
                ,ts.EFFORT
                ,ts.EFFORT_UNIT
                ,ts.IS_INSERTED
                ,ts.IS_APPROVED
            from TIMESHEET ts $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"PROJECT_ISSUE_ID"
     ,"CLIENT_ID"
     ,"USER_ACCOUNT"
     ,"CHARGED_DATE"
     ,"EFFORT"
     ,"EFFORT_UNIT"
     ,"IS_INSERTED"
     ,"IS_APPROVED"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0055.fetchRecord().");}
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
    $RECORD["CHARGED_DATE"] = $this->getRequestParam("CHARGED_DATE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["EFFORT"] = $this->getRequestParam("EFFORT");
    $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_APPROVED"] = $this->getRequestParamBoolean("IS_APPROVED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["PROJECT_ISSUE_ID"] = $this->getRequestParam("PROJECT_ISSUE_ID");
    $RECORD["USER_ACCOUNT"] = $this->getRequestParam("USER_ACCOUNT");
    $sql = "insert into TIMESHEET(
                 CHARGED_DATE
                ,CLIENT_ID
                ,EFFORT
                ,EFFORT_UNIT
                ,ID
                ,IS_APPROVED
                ,IS_INSERTED
                ,PROJECT_ISSUE_ID
                ,USER_ACCOUNT
            ) values ( 
                 :CHARGED_DATE
                ,:CLIENT_ID
                ,:EFFORT
                ,:EFFORT_UNIT
                ,:ID
                ,:IS_APPROVED
                ,:IS_INSERTED
                ,:PROJECT_ISSUE_ID
                ,:USER_ACCOUNT
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_timesht_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CHARGED_DATE"] = $this->getRequestParam("CHARGED_DATE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["EFFORT"] = $this->getRequestParam("EFFORT");
    $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_APPROVED"] = $this->getRequestParamBoolean("IS_APPROVED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
    $RECORD["PROJECT_ISSUE_ID"] = $this->getRequestParam("PROJECT_ISSUE_ID");
    $RECORD["USER_ACCOUNT"] = $this->getRequestParam("USER_ACCOUNT");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0055.doUpdate().");}
    $sql = "update TIMESHEET set 
                 CHARGED_DATE=:CHARGED_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,EFFORT=:EFFORT
                ,EFFORT_UNIT=:EFFORT_UNIT
                ,ID=:ID
                ,IS_APPROVED=:IS_APPROVED
                ,IS_INSERTED=:IS_INSERTED
                ,PROJECT_ISSUE_ID=:PROJECT_ISSUE_ID
                ,USER_ACCOUNT=:USER_ACCOUNT
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0055.doDelete().");}
    $sql = "delete from TIMESHEET where 
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
    $RECORD["CHARGED_DATE"] = $this->getRequestParam("CHARGED_DATE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["EFFORT"] = $this->getRequestParam("EFFORT");
    $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_APPROVED"] = $this->getRequestParam("IS_APPROVED");
    $RECORD["IS_INSERTED"] = $this->getRequestParam("IS_INSERTED");
    $RECORD["PROJECT_ISSUE_ID"] = $this->getRequestParam("PROJECT_ISSUE_ID");
    $RECORD["USER_ACCOUNT"] = $this->getRequestParam("USER_ACCOUNT");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0055");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ts.CHARGED_DATE
                ,ts.CLIENT_ID
                ,ts.EFFORT
                ,ts.EFFORT_UNIT
                ,ts.ID
                ,ts.IS_APPROVED
                ,ts.IS_INSERTED
                ,ts.PROJECT_ISSUE_ID
                ,ts.USER_ACCOUNT
            from TIMESHEET ts
         where 
           ts.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CHARGED_DATE" => array("DATA_TYPE" => "DATE")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"EFFORT" => array("DATA_TYPE" => "NUMBER")
  ,"EFFORT_UNIT" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_APPROVED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_INSERTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"PROJECT_ISSUE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"USER_ACCOUNT" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CHARGED_DATE"] )) { $RECORD["CHARGED_DATE"] = $this->getRequestParam("CHARGED_DATE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["EFFORT"] )) { $RECORD["EFFORT"] = $this->getRequestParam("EFFORT"); }
     if (isset($_REQUEST["EFFORT_UNIT"] )) { $RECORD["EFFORT_UNIT"] = $this->getRequestParam("EFFORT_UNIT"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_APPROVED"] = $this->getRequestParamBoolean("IS_APPROVED");
    $RECORD["IS_INSERTED"] = $this->getRequestParamBoolean("IS_INSERTED");
     if (isset($_REQUEST["PROJECT_ISSUE_ID"] )) { $RECORD["PROJECT_ISSUE_ID"] = $this->getRequestParam("PROJECT_ISSUE_ID"); }
     if (isset($_REQUEST["USER_ACCOUNT"] )) { $RECORD["USER_ACCOUNT"] = $this->getRequestParam("USER_ACCOUNT"); }
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
