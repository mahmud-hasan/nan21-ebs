<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0103 Controller: Business partner details
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0103 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
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
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_CUSTOMER"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_CUSTOMER like :IS_CUSTOMER";
      $params["IS_CUSTOMER"] = $_REQUEST["QRY_IS_CUSTOMER"];
    }
    if (!empty($_REQUEST["QRY_IS_VENDOR"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_VENDOR like :IS_VENDOR";
      $params["IS_VENDOR"] = $_REQUEST["QRY_IS_VENDOR"];
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
                t.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CREDITCLASS_CODE
                ,t.CUSTGRP_CODE
                ,t.ID
                ,t.IS_CUSTOMER
                ,t.IS_EMPLOYEE
                ,t.IS_VENDOR
                ,t.MAX_CREDIT_LIMIT
                ,t.MAX_CREDIT_LIMIT_CURRENCY
                ,t.MAX_PAYMENT_TERM
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PAYMETHOD_CODE
                ,t.PAYTERMCLASS_CODE
            from BP_CLIENT t $where $orderByClause ";
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
                ,t.IS_CUSTOMER
                ,t.IS_VENDOR
                ,t.IS_EMPLOYEE
                ,t.CUSTGRP_CODE
                ,t.CREDITCLASS_CODE
                ,t.PAYMETHOD_CODE
                ,t.PAYTERMCLASS_CODE
                ,t.MAX_CREDIT_LIMIT
                ,t.MAX_CREDIT_LIMIT_CURRENCY
                ,t.MAX_PAYMENT_TERM
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from BP_CLIENT t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0103.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0103.doUpdate().");}
    $sql = "update BP_CLIENT set 
                 ID=:ID
                ,IS_CUSTOMER=:IS_CUSTOMER
                ,IS_VENDOR=:IS_VENDOR
                ,IS_EMPLOYEE=:IS_EMPLOYEE
                ,CUSTGRP_CODE=:CUSTGRP_CODE
                ,MAX_CREDIT_LIMIT=:MAX_CREDIT_LIMIT
                ,MAX_PAYMENT_TERM=:MAX_PAYMENT_TERM
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
    $this->setFieldInitialValues($this->record, "DC0103");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(t.bpartner_id) BPARTNER_NAME
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CREDITCLASS_CODE
                ,t.CUSTGRP_CODE
                ,t.ID
                ,t.IS_CUSTOMER
                ,t.IS_EMPLOYEE
                ,t.IS_VENDOR
                ,t.MAX_CREDIT_LIMIT
                ,t.MAX_CREDIT_LIMIT_CURRENCY
                ,t.MAX_PAYMENT_TERM
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PAYMETHOD_CODE
                ,t.PAYTERMCLASS_CODE
            from BP_CLIENT t
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
  "BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CREDITCLASS_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CUSTGRP_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_CUSTOMER" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_EMPLOYEE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_VENDOR" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MAX_CREDIT_LIMIT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MAX_CREDIT_LIMIT_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MAX_PAYMENT_TERM" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PAYMETHOD_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PAYTERMCLASS_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
