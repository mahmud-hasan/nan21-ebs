<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0042 Controller: Accounting doc. line
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0042 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCDOC_ID like :ACCDOC_ID";
      $params["ACCDOC_ID"] = $_REQUEST["QRY_ACCDOC_ID"];
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_CR_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CR_ACCT like :CR_ACCT";
      $params["CR_ACCT"] = $_REQUEST["QRY_CR_ACCT"];
    }
    if (!empty($_REQUEST["QRY_CR_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CR_AMOUNT like :CR_AMOUNT";
      $params["CR_AMOUNT"] = $_REQUEST["QRY_CR_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_DB_ACCT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DB_ACCT like :DB_ACCT";
      $params["DB_ACCT"] = $_REQUEST["QRY_DB_ACCT"];
    }
    if (!empty($_REQUEST["QRY_DB_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DB_AMOUNT like :DB_AMOUNT";
      $params["DB_AMOUNT"] = $_REQUEST["QRY_DB_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_ORIG_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORIG_AMOUNT like :ORIG_AMOUNT";
      $params["ORIG_AMOUNT"] = $_REQUEST["QRY_ORIG_AMOUNT"];
    }
    if (!empty($_REQUEST["QRY_ORIG_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORIG_CURRENCY like :ORIG_CURRENCY";
      $params["ORIG_CURRENCY"] = $_REQUEST["QRY_ORIG_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_XRATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.XRATE like :XRATE";
      $params["XRATE"] = $_REQUEST["QRY_XRATE"];
    }
}

public function doQuery() {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),50);
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
                t.ACCDOC_ID
                ,pbo_acc.get_accdoc_name_by_id(t.accdoc_id) ACCDOC_NAME
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CR_ACCT
                ,t.CR_AMOUNT
                ,t.CURRENCY
                ,t.DB_ACCT
                ,t.DB_AMOUNT
                ,t.ID
                ,t.IS_GENERATED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.ORIG_AMOUNT
                ,t.ORIG_CURRENCY
                ,t.XRATE
            from AC_ACCDOC_LINE t $where $orderByClause ";
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
    $limit = nvl($this->getRequestParam("limit"),50);
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
                ,t.ACCDOC_ID
                ,pbo_acc.get_accdoc_name_by_id(t.accdoc_id) ACCDOC_NAME
                ,t.CLIENT_ID
                ,t.NOTES
                ,t.DB_ACCT
                ,t.CR_ACCT
                ,t.DB_AMOUNT
                ,t.CR_AMOUNT
                ,t.CURRENCY
                ,t.XRATE
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.IS_GENERATED
                ,t.ORIG_AMOUNT
                ,t.ORIG_CURRENCY
            from AC_ACCDOC_LINE t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0042.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into AC_ACCDOC_LINE(
                 ACCDOC_ID
                ,CLIENT_ID
                ,CREATEDBY
                ,CREATEDON
                ,CR_ACCT
                ,CR_AMOUNT
                ,CURRENCY
                ,DB_ACCT
                ,DB_AMOUNT
                ,ID
                ,IS_GENERATED
                ,MODIFIEDBY
                ,NOTES
                ,ORIG_AMOUNT
                ,ORIG_CURRENCY
                ,XRATE
            ) values ( 
                 :ACCDOC_ID
                ,:CLIENT_ID
                ,:CREATEDBY
                ,:CREATEDON
                ,:CR_ACCT
                ,:CR_AMOUNT
                ,:CURRENCY
                ,:DB_ACCT
                ,:DB_AMOUNT
                ,:ID
                ,:IS_GENERATED
                ,:MODIFIEDBY
                ,:NOTES
                ,:ORIG_AMOUNT
                ,:ORIG_CURRENCY
                ,:XRATE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0042.doUpdate().");}
    $sql = "update AC_ACCDOC_LINE set 
                 CR_AMOUNT=:CR_AMOUNT
                ,ID=:ID
                ,ACCDOC_ID=:ACCDOC_ID
                ,CLIENT_ID=:CLIENT_ID
                ,DB_ACCT=:DB_ACCT
                ,CR_ACCT=:CR_ACCT
                ,DB_AMOUNT=:DB_AMOUNT
                ,CURRENCY=:CURRENCY
                ,XRATE=:XRATE
                ,NOTES=:NOTES
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0042.doDelete().");}
    $sql = "delete from AC_ACCDOC_LINE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0042");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCDOC_ID
                ,pbo_acc.get_accdoc_name_by_id(t.accdoc_id) ACCDOC_NAME
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CR_ACCT
                ,t.CR_AMOUNT
                ,t.CURRENCY
                ,t.DB_ACCT
                ,t.DB_AMOUNT
                ,t.ID
                ,t.IS_GENERATED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.ORIG_AMOUNT
                ,t.ORIG_CURRENCY
                ,t.XRATE
            from AC_ACCDOC_LINE t
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
  "ACCDOC_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCDOC_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CR_ACCT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CR_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DB_ACCT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DB_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_GENERATED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORIG_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORIG_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"XRATE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
