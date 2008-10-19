<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0030 Controller: Field default values
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0030 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_APPLY_TO_USER"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "APPLY_TO_USER like :APPLY_TO_USER";
      $params["APPLY_TO_USER"] = $_REQUEST["QRY_APPLY_TO_USER"];
    }
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_FIELD_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "FIELD_NAME like :FIELD_NAME";
      $params["FIELD_NAME"] = $_REQUEST["QRY_FIELD_NAME"];
    }
    if (!empty($_REQUEST["QRY_FIELD_VALUE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "FIELD_VALUE like :FIELD_VALUE";
      $params["FIELD_VALUE"] = $_REQUEST["QRY_FIELD_VALUE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_UIDC_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UIDC_CODE like :UIDC_CODE";
      $params["UIDC_CODE"] = $_REQUEST["QRY_UIDC_CODE"];
    }
    if (!empty($_REQUEST["QRY_VALUE_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "VALUE_TYPE like :VALUE_TYPE";
      $params["VALUE_TYPE"] = $_REQUEST["QRY_VALUE_TYPE"];
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
                ACTIVE
                ,APPLY_TO_USER
                ,CREATEDBY
                ,CREATEDON
                ,FIELD_NAME
                ,FIELD_VALUE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,UIDC_CODE
                ,VALUE_TYPE
            from UI_DC_FIELD_INITVAL  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACTIVE"
      ,"APPLY_TO_USER"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"FIELD_NAME"
      ,"FIELD_VALUE"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"UIDC_CODE"
      ,"VALUE_TYPE"
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
                ,UIDC_CODE
                ,FIELD_NAME
                ,VALUE_TYPE
                ,FIELD_VALUE
                ,ACTIVE
                ,APPLY_TO_USER
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DC_FIELD_INITVAL  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"UIDC_CODE"
     ,"FIELD_NAME"
     ,"VALUE_TYPE"
     ,"FIELD_VALUE"
     ,"ACTIVE"
     ,"APPLY_TO_USER"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0030.fetchRecord().");}
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
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["APPLY_TO_USER"] = $this->getRequestParam("APPLY_TO_USER");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["FIELD_NAME"] = $this->getRequestParam("FIELD_NAME");
    $RECORD["FIELD_VALUE"] = $this->getRequestParam("FIELD_VALUE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    $RECORD["VALUE_TYPE"] = $this->getRequestParam("VALUE_TYPE");
    $sql = "insert into UI_DC_FIELD_INITVAL(
                 ACTIVE
                ,APPLY_TO_USER
                ,FIELD_NAME
                ,FIELD_VALUE
                ,ID
                ,UIDC_CODE
                ,VALUE_TYPE
            ) values ( 
                 :ACTIVE
                ,:APPLY_TO_USER
                ,:FIELD_NAME
                ,:FIELD_VALUE
                ,:ID
                ,:UIDC_CODE
                ,:VALUE_TYPE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_UIFLDINITVAL_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["APPLY_TO_USER"] = $this->getRequestParam("APPLY_TO_USER");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["FIELD_NAME"] = $this->getRequestParam("FIELD_NAME");
    $RECORD["FIELD_VALUE"] = $this->getRequestParam("FIELD_VALUE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    $RECORD["VALUE_TYPE"] = $this->getRequestParam("VALUE_TYPE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0030.doUpdate().");}
    $sql = "update UI_DC_FIELD_INITVAL set 
                 ACTIVE=:ACTIVE
                ,APPLY_TO_USER=:APPLY_TO_USER
                ,FIELD_NAME=:FIELD_NAME
                ,FIELD_VALUE=:FIELD_VALUE
                ,ID=:ID
                ,UIDC_CODE=:UIDC_CODE
                ,VALUE_TYPE=:VALUE_TYPE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0030.doDelete().");}
    $sql = "delete from UI_DC_FIELD_INITVAL where 
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
    $RECORD["ACTIVE"] = $this->getRequestParam("ACTIVE");
    $RECORD["APPLY_TO_USER"] = $this->getRequestParam("APPLY_TO_USER");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["FIELD_NAME"] = $this->getRequestParam("FIELD_NAME");
    $RECORD["FIELD_VALUE"] = $this->getRequestParam("FIELD_VALUE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    $RECORD["VALUE_TYPE"] = $this->getRequestParam("VALUE_TYPE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0030");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACTIVE
                ,APPLY_TO_USER
                ,CREATEDBY
                ,CREATEDON
                ,FIELD_NAME
                ,FIELD_VALUE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,UIDC_CODE
                ,VALUE_TYPE
            from UI_DC_FIELD_INITVAL 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
  ,"APPLY_TO_USER" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"FIELD_NAME" => array("DATA_TYPE" => "STRING")
  ,"FIELD_VALUE" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"UIDC_CODE" => array("DATA_TYPE" => "STRING")
  ,"VALUE_TYPE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["APPLY_TO_USER"] )) { $RECORD["APPLY_TO_USER"] = $this->getRequestParam("APPLY_TO_USER"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["FIELD_NAME"] )) { $RECORD["FIELD_NAME"] = $this->getRequestParam("FIELD_NAME"); }
     if (isset($_REQUEST["FIELD_VALUE"] )) { $RECORD["FIELD_VALUE"] = $this->getRequestParam("FIELD_VALUE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["UIDC_CODE"] )) { $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE"); }
     if (isset($_REQUEST["VALUE_TYPE"] )) { $RECORD["VALUE_TYPE"] = $this->getRequestParam("VALUE_TYPE"); }
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
