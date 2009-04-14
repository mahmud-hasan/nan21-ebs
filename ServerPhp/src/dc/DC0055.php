<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0055 Controller: Timesheet - charge project issue
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0055 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

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
    $rs = $this->getDbConn()->Execute($sql, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0055.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
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
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_timesht_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0055.doUpdate().");}
    $sql = "update TIMESHEET set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,CHARGED_DATE=:CHARGED_DATE
                ,USER_ACCOUNT=:USER_ACCOUNT
                ,EFFORT=:EFFORT
                ,IS_INSERTED=:IS_INSERTED
                ,IS_APPROVED=:IS_APPROVED
                ,PROJECT_ISSUE_ID=:PROJECT_ISSUE_ID
                ,EFFORT_UNIT=:EFFORT_UNIT
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0055.doDelete().");}
    $sql = "delete from TIMESHEET where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0055");
    print "{success:true, data:".json_encode($this->record)."}";
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
  "CHARGED_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EFFORT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EFFORT_UNIT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_APPROVED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_INSERTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"PROJECT_ISSUE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"USER_ACCOUNT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
