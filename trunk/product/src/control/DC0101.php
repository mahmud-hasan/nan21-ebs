<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0101 Controller: Acc schema default accounts
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0101 extends Controller {


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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCSCHEMAPARAM_ID"
      ,"ACCSCHEMAPARAM_NAME"
      ,"ACCSCHEMA_ID"
      ,"ACCSCHEMA_NAME"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"PARAM_ACCT_ID"
      ,"PARAM_ACCT_NAME"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_CODE"
     ,"CLIENT_ID"
     ,"ACCSCHEMA_NAME"
     ,"ACCSCHEMA_ID"
     ,"ACCSCHEMAPARAM_ID"
     ,"ACCSCHEMAPARAM_NAME"
     ,"PARAM_ACCT_ID"
     ,"PARAM_ACCT_NAME"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0101.fetchRecord().");}
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
    $RECORD["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $RECORD["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $RECORD["ACCSCHEMAPARAM_ID"] = $this->getRequestParam("ACCSCHEMAPARAM_ID");
    $RECORD["ACCSCHEMAPARAM_NAME"] = $this->getRequestParam("ACCSCHEMAPARAM_NAME");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PARAM_ACCT_ID"] = $this->getRequestParam("PARAM_ACCT_ID");
    $RECORD["PARAM_ACCT_NAME"] = $this->getRequestParam("PARAM_ACCT_NAME");
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
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_CLIACCSCHPACCT_ID.nextval seq_val from dual")->fetchRow();
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
  try {
    $RECORD["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $RECORD["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $RECORD["ACCSCHEMAPARAM_ID"] = $this->getRequestParam("ACCSCHEMAPARAM_ID");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PARAM_ACCT_ID"] = $this->getRequestParam("PARAM_ACCT_ID");
    $RECORD["PARAM_ACCT_NAME"] = $this->getRequestParam("PARAM_ACCT_NAME");
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
    $stmt = $this->db->prepare($sql);
    $this->db->Execute($stmt, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doUpdate */


public function doDelete() {
  $this->logger->debug("Start: ".$this->dcName.".doDelete");
  try {
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0101.doDelete().");}
    $sql = "delete from AC_CLIACCSCHEMA_PARAMACCT where 
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
    $RECORD["ACCSCHEMAPARAM_ID"] = $this->getRequestParam("ACCSCHEMAPARAM_ID");
    $RECORD["ACCSCHEMAPARAM_NAME"] = $this->getRequestParam("ACCSCHEMAPARAM_NAME");
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PARAM_ACCT_ID"] = $this->getRequestParam("PARAM_ACCT_ID");
    $RECORD["PARAM_ACCT_NAME"] = $this->getRequestParam("PARAM_ACCT_NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0101");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCSCHEMAPARAM_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCSCHEMAPARAM_NAME" => array("DATA_TYPE" => "STRING")
  ,"ACCSCHEMA_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCSCHEMA_NAME" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"PARAM_ACCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PARAM_ACCT_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCSCHEMAPARAM_ID"] )) { $RECORD["ACCSCHEMAPARAM_ID"] = $this->getRequestParam("ACCSCHEMAPARAM_ID"); }
     if (isset($_REQUEST["ACCSCHEMAPARAM_NAME"] )) { $RECORD["ACCSCHEMAPARAM_NAME"] = $this->getRequestParam("ACCSCHEMAPARAM_NAME"); }
     if (isset($_REQUEST["ACCSCHEMA_ID"] )) { $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID"); }
     if (isset($_REQUEST["ACCSCHEMA_NAME"] )) { $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["PARAM_ACCT_ID"] )) { $RECORD["PARAM_ACCT_ID"] = $this->getRequestParam("PARAM_ACCT_ID"); }
     if (isset($_REQUEST["PARAM_ACCT_NAME"] )) { $RECORD["PARAM_ACCT_NAME"] = $this->getRequestParam("PARAM_ACCT_NAME"); }
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
