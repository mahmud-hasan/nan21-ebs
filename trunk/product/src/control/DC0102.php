<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0102 Controller: Business partner accounts
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0102 extends Controller {


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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCSCHEMA_ID"
      ,"ACCSCHEMA_NAME"
      ,"BPARTNER_ID"
      ,"BPARTNER_NAME"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"C_ACCT_PREPAY_ID"
      ,"C_ACCT_RECEIVABLE_ID"
      ,"C_ACCT_RECEIVABLE_NAME"
      ,"ID"
      ,"I_ACCT_PAYABLE_ID"
      ,"I_ACCT_PREPAY_ID"
      ,"I_ACCT_RECEIVABLE_ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"V_ACCT_PAYABLE_ID"
      ,"V_ACCT_PAYABLE_NAME"
      ,"V_ACCT_PREPAY_ID"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"BPARTNER_ID"
     ,"BPARTNER_NAME"
     ,"CLIENT_CODE"
     ,"CLIENT_ID"
     ,"ACCSCHEMA_ID"
     ,"ACCSCHEMA_NAME"
     ,"C_ACCT_RECEIVABLE_ID"
     ,"C_ACCT_RECEIVABLE_NAME"
     ,"C_ACCT_PREPAY_ID"
     ,"V_ACCT_PAYABLE_NAME"
     ,"V_ACCT_PAYABLE_ID"
     ,"V_ACCT_PREPAY_ID"
     ,"I_ACCT_PAYABLE_ID"
     ,"I_ACCT_RECEIVABLE_ID"
     ,"I_ACCT_PREPAY_ID"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0102.fetchRecord().");}
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
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["C_ACCT_PREPAY_ID"] = $this->getRequestParam("C_ACCT_PREPAY_ID");
    $RECORD["C_ACCT_RECEIVABLE_ID"] = $this->getRequestParam("C_ACCT_RECEIVABLE_ID");
    $RECORD["C_ACCT_RECEIVABLE_NAME"] = $this->getRequestParam("C_ACCT_RECEIVABLE_NAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["I_ACCT_PAYABLE_ID"] = $this->getRequestParam("I_ACCT_PAYABLE_ID");
    $RECORD["I_ACCT_PREPAY_ID"] = $this->getRequestParam("I_ACCT_PREPAY_ID");
    $RECORD["I_ACCT_RECEIVABLE_ID"] = $this->getRequestParam("I_ACCT_RECEIVABLE_ID");
    $RECORD["V_ACCT_PAYABLE_ID"] = $this->getRequestParam("V_ACCT_PAYABLE_ID");
    $RECORD["V_ACCT_PAYABLE_NAME"] = $this->getRequestParam("V_ACCT_PAYABLE_NAME");
    $RECORD["V_ACCT_PREPAY_ID"] = $this->getRequestParam("V_ACCT_PREPAY_ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0102.doUpdate().");}
    $sql = "update BP_ACCOUNT set 
                 ACCSCHEMA_ID=:ACCSCHEMA_ID
                ,C_ACCT_PREPAY_ID=:C_ACCT_PREPAY_ID
                ,C_ACCT_RECEIVABLE_ID=:C_ACCT_RECEIVABLE_ID
                ,ID=:ID
                ,I_ACCT_PAYABLE_ID=:I_ACCT_PAYABLE_ID
                ,I_ACCT_PREPAY_ID=:I_ACCT_PREPAY_ID
                ,I_ACCT_RECEIVABLE_ID=:I_ACCT_RECEIVABLE_ID
                ,V_ACCT_PAYABLE_ID=:V_ACCT_PAYABLE_ID
                ,V_ACCT_PREPAY_ID=:V_ACCT_PREPAY_ID
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
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["C_ACCT_PREPAY_ID"] = $this->getRequestParam("C_ACCT_PREPAY_ID");
    $RECORD["C_ACCT_RECEIVABLE_ID"] = $this->getRequestParam("C_ACCT_RECEIVABLE_ID");
    $RECORD["C_ACCT_RECEIVABLE_NAME"] = $this->getRequestParam("C_ACCT_RECEIVABLE_NAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["I_ACCT_PAYABLE_ID"] = $this->getRequestParam("I_ACCT_PAYABLE_ID");
    $RECORD["I_ACCT_PREPAY_ID"] = $this->getRequestParam("I_ACCT_PREPAY_ID");
    $RECORD["I_ACCT_RECEIVABLE_ID"] = $this->getRequestParam("I_ACCT_RECEIVABLE_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["V_ACCT_PAYABLE_ID"] = $this->getRequestParam("V_ACCT_PAYABLE_ID");
    $RECORD["V_ACCT_PAYABLE_NAME"] = $this->getRequestParam("V_ACCT_PAYABLE_NAME");
    $RECORD["V_ACCT_PREPAY_ID"] = $this->getRequestParam("V_ACCT_PREPAY_ID");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0102");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCSCHEMA_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCSCHEMA_NAME" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"C_ACCT_PREPAY_ID" => array("DATA_TYPE" => "NUMBER")
  ,"C_ACCT_RECEIVABLE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"C_ACCT_RECEIVABLE_NAME" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"I_ACCT_PAYABLE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"I_ACCT_PREPAY_ID" => array("DATA_TYPE" => "NUMBER")
  ,"I_ACCT_RECEIVABLE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"V_ACCT_PAYABLE_ID" => array("DATA_TYPE" => "NUMBER")
  ,"V_ACCT_PAYABLE_NAME" => array("DATA_TYPE" => "STRING")
  ,"V_ACCT_PREPAY_ID" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCSCHEMA_ID"] )) { $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID"); }
     if (isset($_REQUEST["ACCSCHEMA_NAME"] )) { $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME"); }
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["BPARTNER_NAME"] )) { $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["C_ACCT_PREPAY_ID"] )) { $RECORD["C_ACCT_PREPAY_ID"] = $this->getRequestParam("C_ACCT_PREPAY_ID"); }
     if (isset($_REQUEST["C_ACCT_RECEIVABLE_ID"] )) { $RECORD["C_ACCT_RECEIVABLE_ID"] = $this->getRequestParam("C_ACCT_RECEIVABLE_ID"); }
     if (isset($_REQUEST["C_ACCT_RECEIVABLE_NAME"] )) { $RECORD["C_ACCT_RECEIVABLE_NAME"] = $this->getRequestParam("C_ACCT_RECEIVABLE_NAME"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["I_ACCT_PAYABLE_ID"] )) { $RECORD["I_ACCT_PAYABLE_ID"] = $this->getRequestParam("I_ACCT_PAYABLE_ID"); }
     if (isset($_REQUEST["I_ACCT_PREPAY_ID"] )) { $RECORD["I_ACCT_PREPAY_ID"] = $this->getRequestParam("I_ACCT_PREPAY_ID"); }
     if (isset($_REQUEST["I_ACCT_RECEIVABLE_ID"] )) { $RECORD["I_ACCT_RECEIVABLE_ID"] = $this->getRequestParam("I_ACCT_RECEIVABLE_ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["V_ACCT_PAYABLE_ID"] )) { $RECORD["V_ACCT_PAYABLE_ID"] = $this->getRequestParam("V_ACCT_PAYABLE_ID"); }
     if (isset($_REQUEST["V_ACCT_PAYABLE_NAME"] )) { $RECORD["V_ACCT_PAYABLE_NAME"] = $this->getRequestParam("V_ACCT_PAYABLE_NAME"); }
     if (isset($_REQUEST["V_ACCT_PREPAY_ID"] )) { $RECORD["V_ACCT_PREPAY_ID"] = $this->getRequestParam("V_ACCT_PREPAY_ID"); }
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
