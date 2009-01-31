<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0031 Controller: Users
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0031 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LOGIN_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "LOGIN_CODE like :LOGIN_CODE";
      $params["LOGIN_CODE"] = $_REQUEST["QRY_LOGIN_CODE"];
    }
}

public function doQuery() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"LOGIN_CODE";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                ACCOUNT_EXPIRED
                ,ACCOUNT_LOCKED
                ,CREATEDBY
                ,CREATEDON
                ,DBUSER
                ,ID
                ,LOGIN_CODE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,PERSON_ID
            from SYS_USER  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACCOUNT_EXPIRED"
      ,"ACCOUNT_LOCKED"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"DBUSER"
      ,"ID"
      ,"LOGIN_CODE"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"PERSON_ID"
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
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"LOGIN_CODE";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                ID
                ,LOGIN_CODE
                ,ACCOUNT_LOCKED
                ,ACCOUNT_EXPIRED
                ,DBUSER
                ,PERSON_ID
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from SYS_USER  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"LOGIN_CODE"
     ,"ACCOUNT_LOCKED"
     ,"ACCOUNT_EXPIRED"
     ,"DBUSER"
     ,"PERSON_ID"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0031.fetchRecord().");}
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
    $RECORD["ACCOUNT_EXPIRED"] = $this->getRequestParamBoolean("ACCOUNT_EXPIRED");
    $RECORD["ACCOUNT_LOCKED"] = $this->getRequestParamBoolean("ACCOUNT_LOCKED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DBUSER"] = $this->getRequestParam("DBUSER");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LOGIN_CODE"] = $this->getRequestParam("LOGIN_CODE");
    $RECORD["LOGIN_PASSWORD"] = $this->getRequestParam("LOGIN_PASSWORD");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PERSON_ID"] = $this->getRequestParam("PERSON_ID");
    $sql = "insert into SYS_USER(
                 ACCOUNT_EXPIRED
                ,ACCOUNT_LOCKED
                ,DBUSER
                ,ID
                ,LOGIN_CODE
                ,PERSON_ID
            ) values ( 
                 :ACCOUNT_EXPIRED
                ,:ACCOUNT_LOCKED
                ,:DBUSER
                ,:ID
                ,:LOGIN_CODE
                ,:PERSON_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_USER_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACCOUNT_EXPIRED"] = $this->getRequestParamBoolean("ACCOUNT_EXPIRED");
    $RECORD["ACCOUNT_LOCKED"] = $this->getRequestParamBoolean("ACCOUNT_LOCKED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DBUSER"] = $this->getRequestParam("DBUSER");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LOGIN_CODE"] = $this->getRequestParam("LOGIN_CODE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0031.doUpdate().");}
    $sql = "update SYS_USER set 
                 ACCOUNT_EXPIRED=:ACCOUNT_EXPIRED
                ,ACCOUNT_LOCKED=:ACCOUNT_LOCKED
                ,DBUSER=:DBUSER
                ,ID=:ID
                ,LOGIN_CODE=:LOGIN_CODE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0031.doDelete().");}
    $sql = "delete from SYS_USER where 
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
    $RECORD["ACCOUNT_EXPIRED"] = $this->getRequestParam("ACCOUNT_EXPIRED");
    $RECORD["ACCOUNT_LOCKED"] = $this->getRequestParam("ACCOUNT_LOCKED");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DBUSER"] = $this->getRequestParam("DBUSER");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LOGIN_CODE"] = $this->getRequestParam("LOGIN_CODE");
    $RECORD["LOGIN_PASSWORD"] = $this->getRequestParam("LOGIN_PASSWORD");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PERSON_ID"] = $this->getRequestParam("PERSON_ID");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0031");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACCOUNT_EXPIRED
                ,ACCOUNT_LOCKED
                ,CREATEDBY
                ,CREATEDON
                ,DBUSER
                ,ID
                ,LOGIN_CODE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,PERSON_ID
            from SYS_USER 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACCOUNT_EXPIRED" => array("DATA_TYPE" => "BOOLEAN")
  ,"ACCOUNT_LOCKED" => array("DATA_TYPE" => "BOOLEAN")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"DBUSER" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"LOGIN_CODE" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"PERSON_ID" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
    $RECORD["ACCOUNT_EXPIRED"] = $this->getRequestParamBoolean("ACCOUNT_EXPIRED");
    $RECORD["ACCOUNT_LOCKED"] = $this->getRequestParamBoolean("ACCOUNT_LOCKED");
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DBUSER"] )) { $RECORD["DBUSER"] = $this->getRequestParam("DBUSER"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LOGIN_CODE"] )) { $RECORD["LOGIN_CODE"] = $this->getRequestParam("LOGIN_CODE"); }
     if (isset($_REQUEST["LOGIN_PASSWORD"] )) { $RECORD["LOGIN_PASSWORD"] = $this->getRequestParam("LOGIN_PASSWORD"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["PERSON_ID"] )) { $RECORD["PERSON_ID"] = $this->getRequestParam("PERSON_ID"); }
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
