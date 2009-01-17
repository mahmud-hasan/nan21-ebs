<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0071 Controller: UI_DC_ROLE_PERMISSION
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0071 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_UI_DC"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UI_DC like :UI_DC";
      $params["UI_DC"] = $_REQUEST["QRY_UI_DC"];
    }
    if (!empty($_REQUEST["QRY_ROLE_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ROLE_NAME like :ROLE_NAME";
      $params["ROLE_NAME"] = $_REQUEST["QRY_ROLE_NAME"];
    }
    if (!empty($_REQUEST["QRY_FETCH_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "FETCH_ALLOWED like :FETCH_ALLOWED";
      $params["FETCH_ALLOWED"] = $_REQUEST["QRY_FETCH_ALLOWED"];
    }
    if (!empty($_REQUEST["QRY_INSERT_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "INSERT_ALLOWED like :INSERT_ALLOWED";
      $params["INSERT_ALLOWED"] = $_REQUEST["QRY_INSERT_ALLOWED"];
    }
    if (!empty($_REQUEST["QRY_UPDATE_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UPDATE_ALLOWED like :UPDATE_ALLOWED";
      $params["UPDATE_ALLOWED"] = $_REQUEST["QRY_UPDATE_ALLOWED"];
    }
    if (!empty($_REQUEST["QRY_DELETE_ALLOWED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DELETE_ALLOWED like :DELETE_ALLOWED";
      $params["DELETE_ALLOWED"] = $_REQUEST["QRY_DELETE_ALLOWED"];
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
                ID
                ,UI_DC
                ,ROLE_NAME
                ,FETCH_ALLOWED
                ,INSERT_ALLOWED
                ,UPDATE_ALLOWED
                ,DELETE_ALLOWED
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DC_ROLE_PERMISSION  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"UI_DC"
      ,"ROLE_NAME"
      ,"FETCH_ALLOWED"
      ,"INSERT_ALLOWED"
      ,"UPDATE_ALLOWED"
      ,"DELETE_ALLOWED"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
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
                ID
                ,UI_DC
                ,ROLE_NAME
                ,FETCH_ALLOWED
                ,INSERT_ALLOWED
                ,UPDATE_ALLOWED
                ,DELETE_ALLOWED
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DC_ROLE_PERMISSION  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"UI_DC"
     ,"ROLE_NAME"
     ,"FETCH_ALLOWED"
     ,"INSERT_ALLOWED"
     ,"UPDATE_ALLOWED"
     ,"DELETE_ALLOWED"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0071.fetchRecord().");}
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
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DELETE_ALLOWED"] = $this->getRequestParamBoolean("DELETE_ALLOWED");
    $RECORD["FETCH_ALLOWED"] = $this->getRequestParamBoolean("FETCH_ALLOWED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSERT_ALLOWED"] = $this->getRequestParamBoolean("INSERT_ALLOWED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME");
    $RECORD["UI_DC"] = $this->getRequestParam("UI_DC");
    $RECORD["UPDATE_ALLOWED"] = $this->getRequestParamBoolean("UPDATE_ALLOWED");
    $sql = "insert into UI_DC_ROLE_PERMISSION(
                 ID
                ,UI_DC
                ,ROLE_NAME
                ,FETCH_ALLOWED
                ,INSERT_ALLOWED
                ,UPDATE_ALLOWED
                ,DELETE_ALLOWED
            ) values ( 
                 :ID
                ,:UI_DC
                ,:ROLE_NAME
                ,:FETCH_ALLOWED
                ,:INSERT_ALLOWED
                ,:UPDATE_ALLOWED
                ,:DELETE_ALLOWED
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_UIDCROLEPRMS_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["DELETE_ALLOWED"] = $this->getRequestParam("DELETE_ALLOWED");
    $RECORD["FETCH_ALLOWED"] = $this->getRequestParam("FETCH_ALLOWED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSERT_ALLOWED"] = $this->getRequestParam("INSERT_ALLOWED");
    $RECORD["UPDATE_ALLOWED"] = $this->getRequestParam("UPDATE_ALLOWED");
    $sql = "update UI_DC_ROLE_PERMISSION set 
                 DELETE_ALLOWED=:DELETE_ALLOWED
                ,FETCH_ALLOWED=:FETCH_ALLOWED
                ,ID=:ID
                ,INSERT_ALLOWED=:INSERT_ALLOWED
                ,UPDATE_ALLOWED=:UPDATE_ALLOWED
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


public function initNewRecord() {
  try {
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DELETE_ALLOWED"] = $this->getRequestParam("DELETE_ALLOWED");
    $RECORD["FETCH_ALLOWED"] = $this->getRequestParam("FETCH_ALLOWED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSERT_ALLOWED"] = $this->getRequestParam("INSERT_ALLOWED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME");
    $RECORD["UI_DC"] = $this->getRequestParam("UI_DC");
    $RECORD["UPDATE_ALLOWED"] = $this->getRequestParam("UPDATE_ALLOWED");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0071");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ID
                ,UI_DC
                ,ROLE_NAME
                ,FETCH_ALLOWED
                ,INSERT_ALLOWED
                ,UPDATE_ALLOWED
                ,DELETE_ALLOWED
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DC_ROLE_PERMISSION 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"UI_DC" => array("DATA_TYPE" => "STRING")
  ,"ROLE_NAME" => array("DATA_TYPE" => "STRING")
  ,"FETCH_ALLOWED" => array("DATA_TYPE" => "BOOLEAN")
  ,"INSERT_ALLOWED" => array("DATA_TYPE" => "BOOLEAN")
  ,"UPDATE_ALLOWED" => array("DATA_TYPE" => "BOOLEAN")
  ,"DELETE_ALLOWED" => array("DATA_TYPE" => "BOOLEAN")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
    $RECORD["DELETE_ALLOWED"] = $this->getRequestParamBoolean("DELETE_ALLOWED");
    $RECORD["FETCH_ALLOWED"] = $this->getRequestParamBoolean("FETCH_ALLOWED");
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["INSERT_ALLOWED"] = $this->getRequestParamBoolean("INSERT_ALLOWED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["ROLE_NAME"] )) { $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME"); }
     if (isset($_REQUEST["UI_DC"] )) { $RECORD["UI_DC"] = $this->getRequestParam("UI_DC"); }
    $RECORD["UPDATE_ALLOWED"] = $this->getRequestParamBoolean("UPDATE_ALLOWED");
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
