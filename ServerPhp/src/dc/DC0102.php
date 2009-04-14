<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0102 Controller: Business partner accounts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0102 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_C_ACCT_PREPAY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.C_ACCT_PREPAY_ID like :C_ACCT_PREPAY_ID";
      $params["C_ACCT_PREPAY_ID"] = $_REQUEST["QRY_C_ACCT_PREPAY_ID"];
    }
    if (!empty($_REQUEST["QRY_C_ACCT_RECEIVABLE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.C_ACCT_RECEIVABLE_ID like :C_ACCT_RECEIVABLE_ID";
      $params["C_ACCT_RECEIVABLE_ID"] = $_REQUEST["QRY_C_ACCT_RECEIVABLE_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_I_ACCT_PAYABLE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.I_ACCT_PAYABLE_ID like :I_ACCT_PAYABLE_ID";
      $params["I_ACCT_PAYABLE_ID"] = $_REQUEST["QRY_I_ACCT_PAYABLE_ID"];
    }
    if (!empty($_REQUEST["QRY_I_ACCT_PREPAY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.I_ACCT_PREPAY_ID like :I_ACCT_PREPAY_ID";
      $params["I_ACCT_PREPAY_ID"] = $_REQUEST["QRY_I_ACCT_PREPAY_ID"];
    }
    if (!empty($_REQUEST["QRY_I_ACCT_RECEIVABLE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.I_ACCT_RECEIVABLE_ID like :I_ACCT_RECEIVABLE_ID";
      $params["I_ACCT_RECEIVABLE_ID"] = $_REQUEST["QRY_I_ACCT_RECEIVABLE_ID"];
    }
    if (!empty($_REQUEST["QRY_V_ACCT_PAYABLE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.V_ACCT_PAYABLE_ID like :V_ACCT_PAYABLE_ID";
      $params["V_ACCT_PAYABLE_ID"] = $_REQUEST["QRY_V_ACCT_PAYABLE_ID"];
    }
    if (!empty($_REQUEST["QRY_V_ACCT_PREPAY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.V_ACCT_PREPAY_ID like :V_ACCT_PREPAY_ID";
      $params["V_ACCT_PREPAY_ID"] = $_REQUEST["QRY_V_ACCT_PREPAY_ID"];
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
                t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.C_ACCT_PREPAY_ID
                ,t.C_ACCT_RECEIVABLE_ID
                ,pbo_acc.get_acct_code_by_id(t.C_ACCT_RECEIVABLE_ID) C_ACCT_RECEIVABLE_NAME
                ,t.ID
                ,t.I_ACCT_PAYABLE_ID
                ,t.I_ACCT_PREPAY_ID
                ,t.I_ACCT_RECEIVABLE_ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.V_ACCT_PAYABLE_ID
                ,pbo_acc.get_acct_code_by_id(t.V_ACCT_PAYABLE_ID) V_ACCT_PAYABLE_NAME
                ,t.V_ACCT_PREPAY_ID
            from BP_ACCOUNT t $where $orderByClause ";
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
                ,t.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.C_ACCT_RECEIVABLE_ID
                ,pbo_acc.get_acct_code_by_id(t.C_ACCT_RECEIVABLE_ID) C_ACCT_RECEIVABLE_NAME
                ,t.C_ACCT_PREPAY_ID
                ,pbo_acc.get_acct_code_by_id(t.V_ACCT_PAYABLE_ID) V_ACCT_PAYABLE_NAME
                ,t.V_ACCT_PAYABLE_ID
                ,t.V_ACCT_PREPAY_ID
                ,t.I_ACCT_PAYABLE_ID
                ,t.I_ACCT_RECEIVABLE_ID
                ,t.I_ACCT_PREPAY_ID
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from BP_ACCOUNT t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0102.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0102.doUpdate().");}
    $sql = "update BP_ACCOUNT set 
                 ID=:ID
                ,ACCSCHEMA_ID=:ACCSCHEMA_ID
                ,C_ACCT_RECEIVABLE_ID=:C_ACCT_RECEIVABLE_ID
                ,C_ACCT_PREPAY_ID=:C_ACCT_PREPAY_ID
                ,V_ACCT_PAYABLE_ID=:V_ACCT_PAYABLE_ID
                ,V_ACCT_PREPAY_ID=:V_ACCT_PREPAY_ID
                ,I_ACCT_PAYABLE_ID=:I_ACCT_PAYABLE_ID
                ,I_ACCT_RECEIVABLE_ID=:I_ACCT_RECEIVABLE_ID
                ,I_ACCT_PREPAY_ID=:I_ACCT_PREPAY_ID
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"],"ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0102");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.C_ACCT_PREPAY_ID
                ,t.C_ACCT_RECEIVABLE_ID
                ,pbo_acc.get_acct_code_by_id(t.C_ACCT_RECEIVABLE_ID) C_ACCT_RECEIVABLE_NAME
                ,t.ID
                ,t.I_ACCT_PAYABLE_ID
                ,t.I_ACCT_PREPAY_ID
                ,t.I_ACCT_RECEIVABLE_ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.V_ACCT_PAYABLE_ID
                ,pbo_acc.get_acct_code_by_id(t.V_ACCT_PAYABLE_ID) V_ACCT_PAYABLE_NAME
                ,t.V_ACCT_PREPAY_ID
            from BP_ACCOUNT t
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
  "ACCSCHEMA_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCSCHEMA_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"C_ACCT_PREPAY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"C_ACCT_RECEIVABLE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"C_ACCT_RECEIVABLE_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"I_ACCT_PAYABLE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"I_ACCT_PREPAY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"I_ACCT_RECEIVABLE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"V_ACCT_PAYABLE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"V_ACCT_PAYABLE_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"V_ACCT_PREPAY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
