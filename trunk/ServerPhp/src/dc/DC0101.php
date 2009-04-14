<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0101 Controller: Acc schema default accounts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0101 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCSCHEMAPARAM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMAPARAM_ID like :ACCSCHEMAPARAM_ID";
      $params["ACCSCHEMAPARAM_ID"] = $_REQUEST["QRY_ACCSCHEMAPARAM_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_PARAM_ACCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PARAM_ACCT_ID like :PARAM_ACCT_ID";
      $params["PARAM_ACCT_ID"] = $_REQUEST["QRY_PARAM_ACCT_ID"];
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
                t.ACCSCHEMAPARAM_ID
                ,pbo_acc.get_accschemaparam_name_by_id(t.ACCSCHEMAPARAM_ID) ACCSCHEMAPARAM_NAME
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.ACCSCHEMA_ID) ACCSCHEMA_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PARAM_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.PARAM_ACCT_ID) PARAM_ACCT_NAME
            from AC_CLIACCSCHEMA_PARAMACCT t $where $orderByClause ";
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
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,pbo_acc.get_accschema_name_by_id(t.ACCSCHEMA_ID) ACCSCHEMA_NAME
                ,t.ACCSCHEMA_ID
                ,t.ACCSCHEMAPARAM_ID
                ,pbo_acc.get_accschemaparam_name_by_id(t.ACCSCHEMAPARAM_ID) ACCSCHEMAPARAM_NAME
                ,t.PARAM_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.PARAM_ACCT_ID) PARAM_ACCT_NAME
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from AC_CLIACCSCHEMA_PARAMACCT t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0101.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into AC_CLIACCSCHEMA_PARAMACCT(
                 ACCSCHEMAPARAM_ID
                ,ACCSCHEMA_ID
                ,CLIENT_ID
                ,ID
                ,PARAM_ACCT_ID
            ) values ( 
                 :ACCSCHEMAPARAM_ID
                ,:ACCSCHEMA_ID
                ,:CLIENT_ID
                ,:ID
                ,:PARAM_ACCT_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_CLIACCSCHPACCT_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "update AC_CLIACCSCHEMA_PARAMACCT set 
                 ACCSCHEMAPARAM_ID=:ACCSCHEMAPARAM_ID
                ,ACCSCHEMA_ID=:ACCSCHEMA_ID
                ,CLIENT_ID=:CLIENT_ID
                ,CREATEDBY=:CREATEDBY
                ,CREATEDON=:CREATEDON
                ,ID=:ID
                ,MODIFIEDBY=:MODIFIEDBY
                ,MODIFIEDON=:MODIFIEDON
                ,PARAM_ACCT_ID=:PARAM_ACCT_ID
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0101.doDelete().");}
    $sql = "delete from AC_CLIACCSCHEMA_PARAMACCT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0101");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCSCHEMAPARAM_ID
                ,pbo_acc.get_accschemaparam_name_by_id(t.ACCSCHEMAPARAM_ID) ACCSCHEMAPARAM_NAME
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.ACCSCHEMA_ID) ACCSCHEMA_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PARAM_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.PARAM_ACCT_ID) PARAM_ACCT_NAME
            from AC_CLIACCSCHEMA_PARAMACCT t
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
  "ACCSCHEMAPARAM_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCSCHEMAPARAM_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ACCSCHEMA_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCSCHEMA_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PARAM_ACCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PARAM_ACCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
