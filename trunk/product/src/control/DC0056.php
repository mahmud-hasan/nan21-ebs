<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0056 Controller: BP customer acct
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0056 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCT_PREPAYMENT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.ACCT_PREPAYMENT like :ACCT_PREPAYMENT";
      $params["ACCT_PREPAYMENT"] = $_REQUEST["QRY_ACCT_PREPAYMENT"];
    }
    if (!empty($_REQUEST["QRY_ACCT_RECEIVABLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.ACCT_RECEIVABLE like :ACCT_RECEIVABLE";
      $params["ACCT_RECEIVABLE"] = $_REQUEST["QRY_ACCT_RECEIVABLE"];
    }
    if (!empty($_REQUEST["QRY_ACCT_RECEVABLE_SRVC"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.ACCT_RECEVABLE_SRVC like :ACCT_RECEVABLE_SRVC";
      $params["ACCT_RECEVABLE_SRVC"] = $_REQUEST["QRY_ACCT_RECEVABLE_SRVC"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bac.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
}

public function doQuery() {
  try {
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
                bac.ACCSCHEMA_ID
                ,( select t.name from acc_schema t where t.id = bac.accschema_id ) ACCSCHEMA_NAME
                ,bac.ACCT_PREPAYMENT
                ,bac.ACCT_RECEIVABLE
                ,bac.ACCT_RECEVABLE_SRVC
                ,bac.BPARTNER_ID
                ,bac.CLIENT_ID
                ,(select code from client where id = bac.client_id) CLIENT_NAME
                ,bac.ID
            from BP_ACCOUNT_CUSTOMER bac $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCSCHEMA_ID"
      ,"ACCSCHEMA_NAME"
      ,"ACCT_PREPAYMENT"
      ,"ACCT_RECEIVABLE"
      ,"ACCT_RECEVABLE_SRVC"
      ,"BPARTNER_ID"
      ,"CLIENT_ID"
      ,"CLIENT_NAME"
      ,"ID"
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
    $limit = nvl($this->getRequestParam("limit"),-1);
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
                (select code from client where id = bac.client_id) CLIENT_NAME
                ,( select t.name from acc_schema t where t.id = bac.accschema_id ) ACCSCHEMA_NAME
                ,bac.ID
                ,bac.BPARTNER_ID
                ,bac.CLIENT_ID
                ,bac.ACCT_RECEIVABLE
                ,bac.ACCT_PREPAYMENT
                ,bac.ACCT_RECEVABLE_SRVC
                ,bac.ACCSCHEMA_ID
            from BP_ACCOUNT_CUSTOMER bac $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "CLIENT_NAME"
     ,"ACCSCHEMA_NAME"
     ,"ID"
     ,"BPARTNER_ID"
     ,"CLIENT_ID"
     ,"ACCT_RECEIVABLE"
     ,"ACCT_PREPAYMENT"
     ,"ACCT_RECEVABLE_SRVC"
     ,"ACCSCHEMA_ID"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    $dataOut = $this->serializeCursor($rs,$columns,"xml");
    $dataOut = "<records>".$dataOut."</records>";
    $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
    $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
    $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
    $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
    $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0056.fetchRecord().");}
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
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["ACCT_PREPAYMENT"] = $this->getRequestParam("ACCT_PREPAYMENT");
    $RECORD["ACCT_RECEIVABLE"] = $this->getRequestParam("ACCT_RECEIVABLE");
    $RECORD["ACCT_RECEVABLE_SRVC"] = $this->getRequestParam("ACCT_RECEVABLE_SRVC");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $sql = "insert into BP_ACCOUNT_CUSTOMER(
                 ACCSCHEMA_ID
                ,ACCT_PREPAYMENT
                ,ACCT_RECEIVABLE
                ,ACCT_RECEVABLE_SRVC
                ,BPARTNER_ID
                ,CLIENT_ID
                ,ID
            ) values ( 
                 :ACCSCHEMA_ID
                ,:ACCT_PREPAYMENT
                ,:ACCT_RECEIVABLE
                ,:ACCT_RECEVABLE_SRVC
                ,:BPARTNER_ID
                ,:CLIENT_ID
                ,:ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_BPACCTCUST_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["ACCT_PREPAYMENT"] = $this->getRequestParam("ACCT_PREPAYMENT");
    $RECORD["ACCT_RECEIVABLE"] = $this->getRequestParam("ACCT_RECEIVABLE");
    $RECORD["ACCT_RECEVABLE_SRVC"] = $this->getRequestParam("ACCT_RECEVABLE_SRVC");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $sql = "update BP_ACCOUNT_CUSTOMER set 
                 ACCSCHEMA_ID=:ACCSCHEMA_ID
                ,ACCT_PREPAYMENT=:ACCT_PREPAYMENT
                ,ACCT_RECEIVABLE=:ACCT_RECEIVABLE
                ,ACCT_RECEVABLE_SRVC=:ACCT_RECEVABLE_SRVC
                ,BPARTNER_ID=:BPARTNER_ID
                ,CLIENT_ID=:CLIENT_ID
                ,ID=:ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0056.doDelete().");}
    $sql = "delete from BP_ACCOUNT_CUSTOMER where 
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
    $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID");
    $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME");
    $RECORD["ACCT_PREPAYMENT"] = $this->getRequestParam("ACCT_PREPAYMENT");
    $RECORD["ACCT_RECEIVABLE"] = $this->getRequestParam("ACCT_RECEIVABLE");
    $RECORD["ACCT_RECEVABLE_SRVC"] = $this->getRequestParam("ACCT_RECEVABLE_SRVC");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0056");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                bac.ACCSCHEMA_ID
                ,( select t.name from acc_schema t where t.id = bac.accschema_id ) ACCSCHEMA_NAME
                ,bac.ACCT_PREPAYMENT
                ,bac.ACCT_RECEIVABLE
                ,bac.ACCT_RECEVABLE_SRVC
                ,bac.BPARTNER_ID
                ,bac.CLIENT_ID
                ,(select code from client where id = bac.client_id) CLIENT_NAME
                ,bac.ID
            from BP_ACCOUNT_CUSTOMER bac
         where 
           bac.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCSCHEMA_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ACCSCHEMA_NAME" => array("DATA_TYPE" => "STRING")
  ,"ACCT_PREPAYMENT" => array("DATA_TYPE" => "STRING")
  ,"ACCT_RECEIVABLE" => array("DATA_TYPE" => "STRING")
  ,"ACCT_RECEVABLE_SRVC" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ACCSCHEMA_ID"] )) { $RECORD["ACCSCHEMA_ID"] = $this->getRequestParam("ACCSCHEMA_ID"); }
     if (isset($_REQUEST["ACCSCHEMA_NAME"] )) { $RECORD["ACCSCHEMA_NAME"] = $this->getRequestParam("ACCSCHEMA_NAME"); }
     if (isset($_REQUEST["ACCT_PREPAYMENT"] )) { $RECORD["ACCT_PREPAYMENT"] = $this->getRequestParam("ACCT_PREPAYMENT"); }
     if (isset($_REQUEST["ACCT_RECEIVABLE"] )) { $RECORD["ACCT_RECEIVABLE"] = $this->getRequestParam("ACCT_RECEIVABLE"); }
     if (isset($_REQUEST["ACCT_RECEVABLE_SRVC"] )) { $RECORD["ACCT_RECEVABLE_SRVC"] = $this->getRequestParam("ACCT_RECEVABLE_SRVC"); }
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
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
