<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0037 Controller: UI dictionary translations
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0037 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LANGUAGE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "LANGUAGE_CODE like :LANGUAGE_CODE";
      $params["LANGUAGE_CODE"] = $_REQUEST["QRY_LANGUAGE_CODE"];
    }
    if (!empty($_REQUEST["QRY_TRANSLATION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "TRANSLATION like :TRANSLATION";
      $params["TRANSLATION"] = $_REQUEST["QRY_TRANSLATION"];
    }
    if (!empty($_REQUEST["QRY_UIDICT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UIDICT_ID like :UIDICT_ID";
      $params["UIDICT_ID"] = $_REQUEST["QRY_UIDICT_ID"];
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
                ,LANGUAGE_CODE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,(select msg_code from ui_dictionary where id = uidict_id) MSG_CODE
                ,TRANSLATION
                ,(select uidc_code from ui_dictionary where id = uidict_id) UIDC_CODE
                ,UIDICT_ID
            from UI_DICTIONARY_TRL  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"LANGUAGE_CODE"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"MSG_CODE"
      ,"TRANSLATION"
      ,"UIDC_CODE"
      ,"UIDICT_ID"
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
                ,UIDICT_ID
                ,(select uidc_code from ui_dictionary where id = uidict_id) UIDC_CODE
                ,(select msg_code from ui_dictionary where id = uidict_id) MSG_CODE
                ,LANGUAGE_CODE
                ,TRANSLATION
                ,MODIFIEDON
                ,MODIFIEDBY
            from UI_DICTIONARY_TRL  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"UIDICT_ID"
     ,"UIDC_CODE"
     ,"MSG_CODE"
     ,"LANGUAGE_CODE"
     ,"TRANSLATION"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0037.fetchRecord().");}
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */


public function doUpdate() {
  try {
    $RECORD["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $RECORD["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["TRANSLATION"] = $this->getRequestParam("TRANSLATION");
    $sql = "update UI_DICTIONARY_TRL set 
                 ID=:ID
                ,TRANSLATION=:TRANSLATION
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0037.doDelete().");}
    $sql = "delete from UI_DICTIONARY_TRL where 
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
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LANGUAGE_CODE"] = $this->getRequestParam("LANGUAGE_CODE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["MSG_CODE"] = $this->getRequestParam("MSG_CODE");
    $RECORD["TRANSLATION"] = $this->getRequestParam("TRANSLATION");
    $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE");
    $RECORD["UIDICT_ID"] = $this->getRequestParam("UIDICT_ID");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0037");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ID
                ,LANGUAGE_CODE
                ,MODIFIEDBY
                ,MODIFIEDON
                ,(select msg_code from ui_dictionary where id = uidict_id) MSG_CODE
                ,TRANSLATION
                ,(select uidc_code from ui_dictionary where id = uidict_id) UIDC_CODE
                ,UIDICT_ID
            from UI_DICTIONARY_TRL 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"LANGUAGE_CODE" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MSG_CODE" => array("DATA_TYPE" => "STRING")
  ,"TRANSLATION" => array("DATA_TYPE" => "STRING")
  ,"UIDC_CODE" => array("DATA_TYPE" => "STRING")
  ,"UIDICT_ID" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LANGUAGE_CODE"] )) { $RECORD["LANGUAGE_CODE"] = $this->getRequestParam("LANGUAGE_CODE"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["MSG_CODE"] )) { $RECORD["MSG_CODE"] = $this->getRequestParam("MSG_CODE"); }
     if (isset($_REQUEST["TRANSLATION"] )) { $RECORD["TRANSLATION"] = $this->getRequestParam("TRANSLATION"); }
     if (isset($_REQUEST["UIDC_CODE"] )) { $RECORD["UIDC_CODE"] = $this->getRequestParam("UIDC_CODE"); }
     if (isset($_REQUEST["UIDICT_ID"] )) { $RECORD["UIDICT_ID"] = $this->getRequestParam("UIDICT_ID"); }
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
