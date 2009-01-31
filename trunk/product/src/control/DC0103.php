<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0103 Controller: Business partner details
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0103 extends Controller {


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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "BPARTNER_ID"
      ,"BPARTNER_NAME"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CREDITCLASS_CODE"
      ,"CUSTGRP_CODE"
      ,"ID"
      ,"IS_CUSTOMER"
      ,"IS_EMPLOYEE"
      ,"IS_VENDOR"
      ,"MAX_CREDIT_LIMIT"
      ,"MAX_CREDIT_LIMIT_CURRENCY"
      ,"MAX_PAYMENT_TERM"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"PAYMETHOD_CODE"
      ,"PAYTERMCLASS_CODE"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"BPARTNER_ID"
     ,"BPARTNER_NAME"
     ,"CLIENT_CODE"
     ,"CLIENT_ID"
     ,"IS_CUSTOMER"
     ,"IS_VENDOR"
     ,"IS_EMPLOYEE"
     ,"CUSTGRP_CODE"
     ,"CREDITCLASS_CODE"
     ,"PAYMETHOD_CODE"
     ,"PAYTERMCLASS_CODE"
     ,"MAX_CREDIT_LIMIT"
     ,"MAX_CREDIT_LIMIT_CURRENCY"
     ,"MAX_PAYMENT_TERM"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0103.fetchRecord().");}
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */


public function doUpdate() {
  $this->logger->debug("Start: ".$this->dcName.".doUpdate");
  try {
    $RECORD = array();
    $RECORD["CUSTGRP_CODE"] = $this->getRequestParam("CUSTGRP_CODE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_CUSTOMER"] = $this->getRequestParamBoolean("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParamBoolean("IS_EMPLOYEE");
    $RECORD["IS_VENDOR"] = $this->getRequestParamBoolean("IS_VENDOR");
    $RECORD["MAX_CREDIT_LIMIT"] = $this->getRequestParam("MAX_CREDIT_LIMIT");
    $RECORD["MAX_PAYMENT_TERM"] = $this->getRequestParam("MAX_PAYMENT_TERM");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0103.doUpdate().");}
    $sql = "update BP_CLIENT set 
                 CUSTGRP_CODE=:CUSTGRP_CODE
                ,ID=:ID
                ,IS_CUSTOMER=:IS_CUSTOMER
                ,IS_EMPLOYEE=:IS_EMPLOYEE
                ,IS_VENDOR=:IS_VENDOR
                ,MAX_CREDIT_LIMIT=:MAX_CREDIT_LIMIT
                ,MAX_PAYMENT_TERM=:MAX_PAYMENT_TERM
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


public function initNewRecord() {
  try {
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CREDITCLASS_CODE"] = $this->getRequestParam("CREDITCLASS_CODE");
    $RECORD["CUSTGRP_CODE"] = $this->getRequestParam("CUSTGRP_CODE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_CUSTOMER"] = $this->getRequestParam("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParam("IS_EMPLOYEE");
    $RECORD["IS_VENDOR"] = $this->getRequestParam("IS_VENDOR");
    $RECORD["MAX_CREDIT_LIMIT"] = $this->getRequestParam("MAX_CREDIT_LIMIT");
    $RECORD["MAX_CREDIT_LIMIT_CURRENCY"] = $this->getRequestParam("MAX_CREDIT_LIMIT_CURRENCY");
    $RECORD["MAX_PAYMENT_TERM"] = $this->getRequestParam("MAX_PAYMENT_TERM");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE");
    $RECORD["PAYTERMCLASS_CODE"] = $this->getRequestParam("PAYTERMCLASS_CODE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0103");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREDITCLASS_CODE" => array("DATA_TYPE" => "STRING")
  ,"CUSTGRP_CODE" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_CUSTOMER" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_EMPLOYEE" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_VENDOR" => array("DATA_TYPE" => "BOOLEAN")
  ,"MAX_CREDIT_LIMIT" => array("DATA_TYPE" => "NUMBER")
  ,"MAX_CREDIT_LIMIT_CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"MAX_PAYMENT_TERM" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"PAYMETHOD_CODE" => array("DATA_TYPE" => "STRING")
  ,"PAYTERMCLASS_CODE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["BPARTNER_NAME"] )) { $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CREDITCLASS_CODE"] )) { $RECORD["CREDITCLASS_CODE"] = $this->getRequestParam("CREDITCLASS_CODE"); }
     if (isset($_REQUEST["CUSTGRP_CODE"] )) { $RECORD["CUSTGRP_CODE"] = $this->getRequestParam("CUSTGRP_CODE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_CUSTOMER"] = $this->getRequestParamBoolean("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParamBoolean("IS_EMPLOYEE");
    $RECORD["IS_VENDOR"] = $this->getRequestParamBoolean("IS_VENDOR");
     if (isset($_REQUEST["MAX_CREDIT_LIMIT"] )) { $RECORD["MAX_CREDIT_LIMIT"] = $this->getRequestParam("MAX_CREDIT_LIMIT"); }
     if (isset($_REQUEST["MAX_CREDIT_LIMIT_CURRENCY"] )) { $RECORD["MAX_CREDIT_LIMIT_CURRENCY"] = $this->getRequestParam("MAX_CREDIT_LIMIT_CURRENCY"); }
     if (isset($_REQUEST["MAX_PAYMENT_TERM"] )) { $RECORD["MAX_PAYMENT_TERM"] = $this->getRequestParam("MAX_PAYMENT_TERM"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["PAYMETHOD_CODE"] )) { $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE"); }
     if (isset($_REQUEST["PAYTERMCLASS_CODE"] )) { $RECORD["PAYTERMCLASS_CODE"] = $this->getRequestParam("PAYTERMCLASS_CODE"); }
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
