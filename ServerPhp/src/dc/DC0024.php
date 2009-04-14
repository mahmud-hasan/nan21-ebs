<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0024 Controller: Accounting period
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0024 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCYEAR_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCYEAR_CODE like :ACCYEAR_CODE";
      $params["ACCYEAR_CODE"] = $_REQUEST["QRY_ACCYEAR_CODE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CLOSED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLOSED like :CLOSED";
      $params["CLOSED"] = $_REQUEST["QRY_CLOSED"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
      $params["CODE"] = strtoupper($params["CODE"]);
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
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
                t.ACCYEAR_CODE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_PERIOD
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.NOTES
                ,t.OPENED
                ,t.PERIODTYPE
                ,t.PREV_PERIOD_NAME
                ,t.PROCESSING
                ,t.STARTDATE
            from AC_ACC_PERIOD t $where $orderByClause ";
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
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.ACCYEAR_CODE
                ,t.CODE
                ,t.NAME
                ,t.STARTDATE
                ,t.ENDDATE
                ,t.PREV_PERIOD_NAME
                ,t.OPENED
                ,t.CLOSED
                ,t.NOTES
                ,t.IS_FIRST_PERIOD
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.PERIODTYPE
                ,t.PROCESSING
            from AC_ACC_PERIOD t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into AC_ACC_PERIOD(
                 ACCYEAR_CODE
                ,CLIENT_ID
                ,CODE
                ,CREATEDBY
                ,ENDDATE
                ,ID
                ,IS_FIRST_PERIOD
                ,MODIFIEDBY
                ,NOTES
                ,PERIODTYPE
                ,PREV_PERIOD_NAME
                ,PROCESSING
                ,STARTDATE
            ) values ( 
                 :ACCYEAR_CODE
                ,:CLIENT_ID
                ,:CODE
                ,:CREATEDBY
                ,:ENDDATE
                ,:ID
                ,:IS_FIRST_PERIOD
                ,:MODIFIEDBY
                ,:NOTES
                ,:PERIODTYPE
                ,:PREV_PERIOD_NAME
                ,:PROCESSING
                ,:STARTDATE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_accperiod_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.doUpdate().");}
    $sql = "update AC_ACC_PERIOD set 
                 ID=:ID
                ,CODE=:CODE
                ,STARTDATE=:STARTDATE
                ,ENDDATE=:ENDDATE
                ,PREV_PERIOD_NAME=:PREV_PERIOD_NAME
                ,NOTES=:NOTES
                ,IS_FIRST_PERIOD=:IS_FIRST_PERIOD
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0024.doDelete().");}
    $sql = "delete from AC_ACC_PERIOD where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0024");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCYEAR_CODE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_PERIOD
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.NOTES
                ,t.OPENED
                ,t.PERIODTYPE
                ,t.PREV_PERIOD_NAME
                ,t.PROCESSING
                ,t.STARTDATE
            from AC_ACC_PERIOD t
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
    if ($pName == "OpenAccPeriod") { $this->callProc_OpenAccPeriod(); }
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function callProc_OpenAccPeriod() {
  $this->logger->debug("Start: ".$this->dcName.".callProc_OpenAccPeriod");


  $stmt = $this->getDbConn()->PrepareSP("BEGIN ps_acc.open_accperiod(p_accperiod_id => :p_accperiod_id); END;");
  $this->getDbConn()->InParameter($stmt,$this->record["ID"] ,"p_accperiod_id" );
  $this->logger->debug("In-Parameters: ".CollectionUtils::mapToString($this->record) );
  $this->getDbConn()->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".CollectionUtils::mapToString($this->record) );

  $this->logger->debug("End: ".$this->dcName.".callProc_OpenAccPeriod");
} /* end function callProc_OpenAccPeriod  */


private function _initFields() {
  $this->fields = array(
  "ACCYEAR_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLOSED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING",parent::FLDPROP_CASE_RESTRICTION => "Upper")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ENDDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_FIRST_PERIOD" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"OPENED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"PERIODTYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PREV_PERIOD_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROCESSING" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STARTDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
);
}

}
?>
