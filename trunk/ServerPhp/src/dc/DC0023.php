<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0023 Controller: Accounting year
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0023 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
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
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_OPENED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.OPENED like :OPENED";
      $params["OPENED"] = $_REQUEST["QRY_OPENED"];
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
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_YEAR
                ,t.NOTES
                ,t.OPENED
                ,t.PREV_YEAR_CODE
                ,t.STARTDATE
            from AC_ACC_YEAR t $where $orderByClause ";
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
                ,t.CODE
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.STARTDATE
                ,t.ENDDATE
                ,t.PREV_YEAR_CODE
                ,t.OPENED
                ,t.CLOSED
                ,t.NOTES
                ,t.IS_FIRST_YEAR
            from AC_ACC_YEAR t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0023.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into AC_ACC_YEAR(
                 CLIENT_ID
                ,CODE
                ,ENDDATE
                ,ID
                ,IS_FIRST_YEAR
                ,NOTES
                ,PREV_YEAR_CODE
                ,STARTDATE
            ) values ( 
                 :CLIENT_ID
                ,:CODE
                ,:ENDDATE
                ,:ID
                ,:IS_FIRST_YEAR
                ,:NOTES
                ,:PREV_YEAR_CODE
                ,:STARTDATE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_ACCYEAR_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0023.doUpdate().");}
    $sql = "update AC_ACC_YEAR set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,CODE=:CODE
                ,STARTDATE=:STARTDATE
                ,ENDDATE=:ENDDATE
                ,PREV_YEAR_CODE=:PREV_YEAR_CODE
                ,NOTES=:NOTES
                ,IS_FIRST_YEAR=:IS_FIRST_YEAR
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0023.doDelete().");}
    $sql = "delete from AC_ACC_YEAR where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0023");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CLOSED
                ,t.CODE
                ,t.ENDDATE
                ,t.ID
                ,t.IS_FIRST_YEAR
                ,t.NOTES
                ,t.OPENED
                ,t.PREV_YEAR_CODE
                ,t.STARTDATE
            from AC_ACC_YEAR t
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
    if ($pName == "OpenYear") { $this->callProc_OpenYear(); }
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function callProc_OpenYear() {
  $this->logger->debug("Start: ".$this->dcName.".callProc_OpenYear");


  $stmt = $this->getDbConn()->PrepareSP("BEGIN ps_acc.open_accyear(p_accyear_id => :p_accyear_id); END;");
  $this->getDbConn()->InParameter($stmt,$this->record["ID"] ,"p_accyear_id" );
  $this->logger->debug("In-Parameters: ".CollectionUtils::mapToString($this->record) );
  $this->getDbConn()->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".CollectionUtils::mapToString($this->record) );

  $this->logger->debug("End: ".$this->dcName.".callProc_OpenYear");
} /* end function callProc_OpenYear  */


private function _initFields() {
  $this->fields = array(
  "CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLOSED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ENDDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_FIRST_YEAR" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"OPENED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"PREV_YEAR_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STARTDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
);
}

}
?>
