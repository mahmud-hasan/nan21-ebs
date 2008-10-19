<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0036 Controller: UI dictionary codes
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0036 extends Controller {


private function preQuery(&$params, &$where) {
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
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_MAINTAINED_BY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MAINTAINED_BY like :MAINTAINED_BY";
      $params["MAINTAINED_BY"] = $_REQUEST["QRY_MAINTAINED_BY"];
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
    if (!empty($_REQUEST["QRY_MSG_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MSG_CODE like :MSG_CODE";
      $params["MSG_CODE"] = $_REQUEST["QRY_MSG_CODE"];
    }
    if (!empty($_REQUEST["QRY_MSG_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MSG_TYPE like :MSG_TYPE";
      $params["MSG_TYPE"] = $_REQUEST["QRY_MSG_TYPE"];
    }
    if (!empty($_REQUEST["QRY_UIDC_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UIDC_CODE like :UIDC_CODE";
      $params["UIDC_CODE"] = $_REQUEST["QRY_UIDC_CODE"];
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
                CREATEDBY
                ,CREATEDON
                ,ID
                ,MAINTAINED_BY
                ,MODIFIEDBY
                ,MODIFIEDON
                ,MSG_CODE
                ,MSG_TYPE
                ,UIDC_CODE
            from UI_DICTIONARY  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CREATEDBY"
      ,"CREATEDON"
      ,"ID"
      ,"MAINTAINED_BY"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"MSG_CODE"
      ,"MSG_TYPE"
      ,"UIDC_CODE"
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
                ,MSG_TYPE
                ,MSG_CODE
                ,MAINTAINED_BY
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DICTIONARY  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"UIDC_CODE"
     ,"MSG_TYPE"
     ,"MSG_CODE"
     ,"MAINTAINED_BY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0036.fetchRecord().");}
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
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MAINTAINED_BY"] = $this->getRequestParam("MAINTAINED_BY");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["MSG_CODE"] = $this->getRequestParam("MSG_CODE");
    $RECORD["MSG_TYPE"] = $this->getRequestParam("MSG_TYPE");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    $sql = "insert into UI_DICTIONARY(
                 CREATEDBY
                ,ID
                ,MAINTAINED_BY
                ,MODIFIEDBY
                ,MSG_CODE
                ,MSG_TYPE
                ,UIDC_CODE
            ) values ( 
                 :CREATEDBY
                ,:ID
                ,:MAINTAINED_BY
                ,:MODIFIEDBY
                ,:MSG_CODE
                ,:MSG_TYPE
                ,:UIDC_CODE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_UIDICT_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MAINTAINED_BY"] = $this->getRequestParam("MAINTAINED_BY");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["MSG_CODE"] = $this->getRequestParam("MSG_CODE");
    $RECORD["MSG_TYPE"] = $this->getRequestParam("MSG_TYPE");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0036.doUpdate().");}
    $sql = "update UI_DICTIONARY set 
                 ID=:ID
                ,MAINTAINED_BY=:MAINTAINED_BY
                ,MODIFIEDBY=:MODIFIEDBY
                ,MSG_CODE=:MSG_CODE
                ,MSG_TYPE=:MSG_TYPE
                ,UIDC_CODE=:UIDC_CODE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0036.doDelete().");}
    $sql = "delete from UI_DICTIONARY where 
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
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MAINTAINED_BY"] = $this->getRequestParam("MAINTAINED_BY");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["MSG_CODE"] = $this->getRequestParam("MSG_CODE");
    $RECORD["MSG_TYPE"] = $this->getRequestParam("MSG_TYPE");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0036");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CREATEDBY
                ,CREATEDON
                ,ID
                ,MAINTAINED_BY
                ,MODIFIEDBY
                ,MODIFIEDON
                ,MSG_CODE
                ,MSG_TYPE
                ,UIDC_CODE
            from UI_DICTIONARY 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MAINTAINED_BY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MSG_CODE" => array("DATA_TYPE" => "STRING")
  ,"MSG_TYPE" => array("DATA_TYPE" => "STRING")
  ,"UIDC_CODE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MAINTAINED_BY"] )) { $RECORD["MAINTAINED_BY"] = $this->getRequestParam("MAINTAINED_BY"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["MSG_CODE"] )) { $RECORD["MSG_CODE"] = $this->getRequestParam("MSG_CODE"); }
     if (isset($_REQUEST["MSG_TYPE"] )) { $RECORD["MSG_TYPE"] = $this->getRequestParam("MSG_TYPE"); }
     if (isset($_REQUEST["UIDC_CODE"] )) { $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE"); }
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
