<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0032 Controller: Accounts
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0032 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCJOURNAL_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCJOURNAL_ID like :ACCJOURNAL_ID";
      $params["ACCJOURNAL_ID"] = $_REQUEST["QRY_ACCJOURNAL_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCOUNT like :ACCOUNT";
      $params["ACCOUNT"] = $_REQUEST["QRY_ACCOUNT"];
    }
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCTGRP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCTGRP_ID like :ACCTGRP_ID";
      $params["ACCTGRP_ID"] = $_REQUEST["QRY_ACCTGRP_ID"];
    }
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
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
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PARENT_ACCOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PARENT_ACCOUNT like :PARENT_ACCOUNT";
      $params["PARENT_ACCOUNT"] = $_REQUEST["QRY_PARENT_ACCOUNT"];
    }
}

public function doQuery() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ACCOUNT";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                t.ACCJOURNAL_ID
                ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME
                ,t.ACCOUNT
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ACCTGRP_ID
                ,t.ACTIVE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CURRENCY
                ,t.DESCRIPTION
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.PARENT_ACCOUNT
            from AC_ACCT t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCJOURNAL_ID"
      ,"ACCJOURNAL_NAME"
      ,"ACCOUNT"
      ,"ACCSCHEMA_ID"
      ,"ACCSCHEMA_NAME"
      ,"ACCTGRP_ID"
      ,"ACTIVE"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CURRENCY"
      ,"DESCRIPTION"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NAME"
      ,"PARENT_ACCOUNT"
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
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ACCOUNT";
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
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ACCOUNT
                ,t.NAME
                ,t.PARENT_ACCOUNT
                ,t.CURRENCY
                ,t.DESCRIPTION
                ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME
                ,t.ACCJOURNAL_ID
                ,t.ACTIVE
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.ACCTGRP_ID
            from AC_ACCT t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_CODE"
     ,"ACCSCHEMA_ID"
     ,"ACCSCHEMA_NAME"
     ,"ACCOUNT"
     ,"NAME"
     ,"PARENT_ACCOUNT"
     ,"CURRENCY"
     ,"DESCRIPTION"
     ,"ACCJOURNAL_NAME"
     ,"ACCJOURNAL_ID"
     ,"ACTIVE"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"ACCTGRP_ID"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0032.fetchRecord().");}
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
    $RECORD["ACCJOURNAL_ID"] = $this->getRequestParam("ACCJOURNAL_ID");
    $RECORD["ACCJOURNAL_NAME"] = $this->getRequestParam("ACCJOURNAL_NAME");
    $RECORD["ACCOUNT"] = $this->getRequestParam("ACCOUNT");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["ACCTGRP_ID"] = $this->getRequestParam("ACCTGRP_ID");
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PARENT_ACCOUNT"] = $this->getRequestParam("PARENT_ACCOUNT");
    $RECORD["SUMMARY"] = $this->getRequestParamBoolean("SUMMARY");
    $sql = "insert into AC_ACCT(
                 ACCJOURNAL_ID
                ,ACCOUNT
                ,ACCSCHEMA_ID
                ,ACCTGRP_ID
                ,ACTIVE
                ,CLIENT_ID
                ,CREATEDBY
                ,CURRENCY
                ,DESCRIPTION
                ,ID
                ,NAME
                ,PARENT_ACCOUNT
            ) values ( 
                 :ACCJOURNAL_ID
                ,:ACCOUNT
                ,:ACCSCHEMA_ID
                ,:ACCTGRP_ID
                ,:ACTIVE
                ,:CLIENT_ID
                ,:CREATEDBY
                ,:CURRENCY
                ,:DESCRIPTION
                ,:ID
                ,:NAME
                ,:PARENT_ACCOUNT
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_acct_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACCJOURNAL_ID"] = $this->getRequestParam("ACCJOURNAL_ID");
    $RECORD["ACCJOURNAL_NAME"] = $this->getRequestParam("ACCJOURNAL_NAME");
    $RECORD["ACCOUNT"] = $this->getRequestParam("ACCOUNT");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["ACCTGRP_ID"] = $this->getRequestParam("ACCTGRP_ID");
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PARENT_ACCOUNT"] = $this->getRequestParam("PARENT_ACCOUNT");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0032.doUpdate().");}
    $sql = "update AC_ACCT set 
                 ACCJOURNAL_ID=:ACCJOURNAL_ID
                ,ACCOUNT=:ACCOUNT
                ,ACCSCHEMA_ID=:ACCSCHEMA_ID
                ,ACCTGRP_ID=:ACCTGRP_ID
                ,ACTIVE=:ACTIVE
                ,CLIENT_ID=:CLIENT_ID
                ,CURRENCY=:CURRENCY
                ,DESCRIPTION=:DESCRIPTION
                ,ID=:ID
                ,NAME=:NAME
                ,PARENT_ACCOUNT=:PARENT_ACCOUNT
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0032.doDelete().");}
    $sql = "delete from AC_ACCT where 
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
    $RECORD["ACCJOURNAL_ID"] = $this->getRequestParam("ACCJOURNAL_ID");
    $RECORD["ACCJOURNAL_NAME"] = $this->getRequestParam("ACCJOURNAL_NAME");
    $RECORD["ACCOUNT"] = $this->getRequestParam("ACCOUNT");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["ACCTGRP_ID"] = $this->getRequestParam("ACCTGRP_ID");
    $RECORD["ACTIVE"] = $this->getRequestParam("ACTIVE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PARENT_ACCOUNT"] = $this->getRequestParam("PARENT_ACCOUNT");
    $RECORD["SUMMARY"] = $this->getRequestParam("SUMMARY");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0032");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCJOURNAL_ID
                ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME
                ,t.ACCOUNT
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ACCTGRP_ID
                ,t.ACTIVE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CURRENCY
                ,t.DESCRIPTION
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.PARENT_ACCOUNT
            from AC_ACCT t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCJOURNAL_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCJOURNAL_NAME" => array("DATA_TYPE" => "STRING")
  ,"ACCOUNT" => array("DATA_TYPE" => "STRING")
  ,"ACCSCHEMA_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCSCHEMA_NAME" => array("DATA_TYPE" => "STRING")
  ,"ACCTGRP_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"PARENT_ACCOUNT" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCJOURNAL_ID"] )) { $RECORD["ACCJOURNAL_ID"] = $this->getRequestParam("ACCJOURNAL_ID"); }
     if (isset($_REQUEST["ACCJOURNAL_NAME"] )) { $RECORD["ACCJOURNAL_NAME"] = $this->getRequestParam("ACCJOURNAL_NAME"); }
     if (isset($_REQUEST["ACCOUNT"] )) { $RECORD["ACCOUNT"] = $this->getRequestParam("ACCOUNT"); }
     if (isset($_REQUEST["ACCSCHEMA_ID"] )) { $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID"); }
     if (isset($_REQUEST["ACCSCHEMA_NAME"] )) { $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME"); }
     if (isset($_REQUEST["ACCTGRP_ID"] )) { $RECORD["ACCTGRP_ID"] = $this->getRequestParam("ACCTGRP_ID"); }
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY"] )) { $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["PARENT_ACCOUNT"] )) { $RECORD["PARENT_ACCOUNT"] = $this->getRequestParam("PARENT_ACCOUNT"); }
    $RECORD["SUMMARY"] = $this->getRequestParamBoolean("SUMMARY");
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
