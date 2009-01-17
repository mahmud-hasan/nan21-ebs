<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0057 Controller: BP contact
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0057 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_FIRSTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.FIRSTNAME like :FIRSTNAME";
      $params["FIRSTNAME"] = $_REQUEST["QRY_FIRSTNAME"];
    }
    if (!empty($_REQUEST["QRY_LASTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.LASTNAME like :LASTNAME";
      $params["LASTNAME"] = $_REQUEST["QRY_LASTNAME"];
    }
    if (!empty($_REQUEST["QRY_PHONE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.PHONE like :PHONE";
      $params["PHONE"] = $_REQUEST["QRY_PHONE"];
    }
    if (!empty($_REQUEST["QRY_EMAIL"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.EMAIL like :EMAIL";
      $params["EMAIL"] = $_REQUEST["QRY_EMAIL"];
    }
    if (!empty($_REQUEST["QRY_FAX"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.FAX like :FAX";
      $params["FAX"] = $_REQUEST["QRY_FAX"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_MOBILE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.MOBILE like :MOBILE";
      $params["MOBILE"] = $_REQUEST["QRY_MOBILE"];
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
                bpc.ID
                ,bpc.BPARTNER_ID
                ,bpc.NAME
                ,bpc.FIRSTNAME
                ,bpc.LASTNAME
                ,bpc.PHONE
                ,bpc.EMAIL
                ,bpc.FAX
                ,bpc.NOTES
                ,bpc.MOBILE
            from BP_CONTACT bpc $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"BPARTNER_ID"
      ,"NAME"
      ,"FIRSTNAME"
      ,"LASTNAME"
      ,"PHONE"
      ,"EMAIL"
      ,"FAX"
      ,"NOTES"
      ,"MOBILE"
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
                bpc.ID
                ,bpc.BPARTNER_ID
                ,bpc.NAME
                ,bpc.FIRSTNAME
                ,bpc.LASTNAME
                ,bpc.PHONE
                ,bpc.EMAIL
                ,bpc.FAX
                ,bpc.MOBILE
                ,bpc.NOTES
            from BP_CONTACT bpc $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"BPARTNER_ID"
     ,"NAME"
     ,"FIRSTNAME"
     ,"LASTNAME"
     ,"PHONE"
     ,"EMAIL"
     ,"FAX"
     ,"MOBILE"
     ,"NOTES"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0057.fetchRecord().");}
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME");
    $RECORD["MOBILE"] = $this->getRequestParam("MOBILE");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $sql = "insert into BP_CONTACT(
                 ID
                ,BPARTNER_ID
                ,NAME
                ,FIRSTNAME
                ,LASTNAME
                ,PHONE
                ,EMAIL
                ,FAX
                ,NOTES
                ,MOBILE
            ) values ( 
                 :ID
                ,:BPARTNER_ID
                ,:NAME
                ,:FIRSTNAME
                ,:LASTNAME
                ,:PHONE
                ,:EMAIL
                ,:FAX
                ,:NOTES
                ,:MOBILE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_BPCONTACT_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME");
    $RECORD["MOBILE"] = $this->getRequestParam("MOBILE");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $sql = "update BP_CONTACT set 
                 BPARTNER_ID=:BPARTNER_ID
                ,EMAIL=:EMAIL
                ,FAX=:FAX
                ,FIRSTNAME=:FIRSTNAME
                ,ID=:ID
                ,LASTNAME=:LASTNAME
                ,MOBILE=:MOBILE
                ,NAME=:NAME
                ,NOTES=:NOTES
                ,PHONE=:PHONE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0057.doDelete().");}
    $sql = "delete from BP_CONTACT where 
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME");
    $RECORD["MOBILE"] = $this->getRequestParam("MOBILE");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0057");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                bpc.ID
                ,bpc.BPARTNER_ID
                ,bpc.NAME
                ,bpc.FIRSTNAME
                ,bpc.LASTNAME
                ,bpc.PHONE
                ,bpc.EMAIL
                ,bpc.FAX
                ,bpc.NOTES
                ,bpc.MOBILE
            from BP_CONTACT bpc
         where 
           bpc.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"FIRSTNAME" => array("DATA_TYPE" => "STRING")
  ,"LASTNAME" => array("DATA_TYPE" => "STRING")
  ,"PHONE" => array("DATA_TYPE" => "STRING")
  ,"EMAIL" => array("DATA_TYPE" => "STRING")
  ,"FAX" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"MOBILE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["EMAIL"] )) { $RECORD["EMAIL"] = $this->getRequestParam("EMAIL"); }
     if (isset($_REQUEST["FAX"] )) { $RECORD["FAX"] = $this->getRequestParam("FAX"); }
     if (isset($_REQUEST["FIRSTNAME"] )) { $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LASTNAME"] )) { $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME"); }
     if (isset($_REQUEST["MOBILE"] )) { $RECORD["MOBILE"] = $this->getRequestParam("MOBILE"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PHONE"] )) { $RECORD["PHONE"] = $this->getRequestParam("PHONE"); }
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
