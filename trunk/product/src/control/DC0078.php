<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0078 Controller: Reception document
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0078 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_DOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_TYPE like :DOC_TYPE";
      $params["DOC_TYPE"] = $_REQUEST["QRY_DOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_FROM_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.FROM_BPARTNER_ID like :FROM_BPARTNER_ID";
      $params["FROM_BPARTNER_ID"] = $_REQUEST["QRY_FROM_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ORGINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORGINV_ID like :ORGINV_ID";
      $params["ORGINV_ID"] = $_REQUEST["QRY_ORGINV_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_QTY_CHECK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.QTY_CHECK like :QTY_CHECK";
      $params["QTY_CHECK"] = $_REQUEST["QRY_QTY_CHECK"];
    }
    if (!empty($_REQUEST["QRY_QUALITY_CHECK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.QUALITY_CHECK like :QUALITY_CHECK";
      $params["QUALITY_CHECK"] = $_REQUEST["QRY_QUALITY_CHECK"];
    }
    if (!empty($_REQUEST["QRY_RINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.RINV_ID like :RINV_ID";
      $params["RINV_ID"] = $_REQUEST["QRY_RINV_ID"];
    }
    if (!empty($_REQUEST["QRY_VALUE_CHECK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.VALUE_CHECK like :VALUE_CHECK";
      $params["VALUE_CHECK"] = $_REQUEST["QRY_VALUE_CHECK"];
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
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.DOC_TYPE
                ,t.FROM_BPARTNER_ID
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.ORGINV_ID
                ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.QTY_CHECK
                ,t.QTY_CHECK_BY
                ,t.QTY_CHECK_ON
                ,t.QUALITY_CHECK
                ,t.QUALITY_CHECK_BY
                ,t.QUALITY_CHECK_ON
                ,t.RINV_ID
                ,t.VALUE_CHECK
                ,t.VALUE_CHECK_BY
                ,t.VALUE_CHECK_ON
            from MM_MOVEMENT_IN_DOC t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"DOC_TYPE"
      ,"FROM_BPARTNER_ID"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NOTES"
      ,"ORGINV_ID"
      ,"ORGINV_NAME"
      ,"ORG_ID"
      ,"ORG_NAME"
      ,"QTY_CHECK"
      ,"QTY_CHECK_BY"
      ,"QTY_CHECK_ON"
      ,"QUALITY_CHECK"
      ,"QUALITY_CHECK_BY"
      ,"QUALITY_CHECK_ON"
      ,"RINV_ID"
      ,"VALUE_CHECK"
      ,"VALUE_CHECK_BY"
      ,"VALUE_CHECK_ON"
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
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.ORG_ID
                ,t.ORGINV_ID
                ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME
                ,t.DOC_NO
                ,t.DOC_DATE
                ,t.FROM_BPARTNER_ID
                ,t.NOTES
                ,t.DOC_TYPE
                ,t.RINV_ID
                ,t.QTY_CHECK
                ,t.QTY_CHECK_ON
                ,t.QTY_CHECK_BY
                ,t.QUALITY_CHECK
                ,t.QUALITY_CHECK_ON
                ,t.QUALITY_CHECK_BY
                ,t.VALUE_CHECK
                ,t.VALUE_CHECK_ON
                ,t.VALUE_CHECK_BY
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from MM_MOVEMENT_IN_DOC t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_CODE"
     ,"CLIENT_ID"
     ,"ORG_NAME"
     ,"ORG_ID"
     ,"ORGINV_ID"
     ,"ORGINV_NAME"
     ,"DOC_NO"
     ,"DOC_DATE"
     ,"FROM_BPARTNER_ID"
     ,"NOTES"
     ,"DOC_TYPE"
     ,"RINV_ID"
     ,"QTY_CHECK"
     ,"QTY_CHECK_ON"
     ,"QTY_CHECK_BY"
     ,"QUALITY_CHECK"
     ,"QUALITY_CHECK_ON"
     ,"QUALITY_CHECK_BY"
     ,"VALUE_CHECK"
     ,"VALUE_CHECK_ON"
     ,"VALUE_CHECK_BY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0078.fetchRecord().");}
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
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["FROM_BPARTNER_ID"] = $this->getRequestParam("FROM_BPARTNER_ID");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID");
    $RECORD["ORGINV_NAME"] = $this->getRequestParam("ORGINV_NAME");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME");
    $RECORD["QUALITY_CHECK"] = $this->getRequestParamBoolean("QUALITY_CHECK");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $sql = "insert into MM_MOVEMENT_IN_DOC(
                 CLIENT_ID
                ,DOC_DATE
                ,DOC_NO
                ,DOC_TYPE
                ,FROM_BPARTNER_ID
                ,ID
                ,NOTES
                ,ORGINV_ID
                ,ORG_ID
                ,QUALITY_CHECK
                ,RINV_ID
            ) values ( 
                 :CLIENT_ID
                ,:DOC_DATE
                ,:DOC_NO
                ,:DOC_TYPE
                ,:FROM_BPARTNER_ID
                ,:ID
                ,:NOTES
                ,:ORGINV_ID
                ,:ORG_ID
                ,:QUALITY_CHECK
                ,:RINV_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_mvmntindoc_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["FROM_BPARTNER_ID"] = $this->getRequestParam("FROM_BPARTNER_ID");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID");
    $RECORD["ORGINV_NAME"] = $this->getRequestParam("ORGINV_NAME");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME");
    $RECORD["QTY_CHECK"] = $this->getRequestParamBoolean("QTY_CHECK");
    $RECORD["QUALITY_CHECK"] = $this->getRequestParamBoolean("QUALITY_CHECK");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $RECORD["VALUE_CHECK"] = $this->getRequestParamBoolean("VALUE_CHECK");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0078.doUpdate().");}
    $sql = "update MM_MOVEMENT_IN_DOC set 
                 CLIENT_ID=:CLIENT_ID
                ,DOC_DATE=:DOC_DATE
                ,DOC_NO=:DOC_NO
                ,DOC_TYPE=:DOC_TYPE
                ,FROM_BPARTNER_ID=:FROM_BPARTNER_ID
                ,ID=:ID
                ,NOTES=:NOTES
                ,ORGINV_ID=:ORGINV_ID
                ,ORG_ID=:ORG_ID
                ,QTY_CHECK=:QTY_CHECK
                ,QUALITY_CHECK=:QUALITY_CHECK
                ,RINV_ID=:RINV_ID
                ,VALUE_CHECK=:VALUE_CHECK
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0078.doDelete().");}
    $sql = "delete from MM_MOVEMENT_IN_DOC where 
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
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE");
    $RECORD["FROM_BPARTNER_ID"] = $this->getRequestParam("FROM_BPARTNER_ID");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID");
    $RECORD["ORGINV_NAME"] = $this->getRequestParam("ORGINV_NAME");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME");
    $RECORD["QTY_CHECK"] = $this->getRequestParam("QTY_CHECK");
    $RECORD["QTY_CHECK_BY"] = $this->getRequestParam("QTY_CHECK_BY");
    $RECORD["QTY_CHECK_ON"] = $this->getRequestParam("QTY_CHECK_ON");
    $RECORD["QUALITY_CHECK"] = $this->getRequestParam("QUALITY_CHECK");
    $RECORD["QUALITY_CHECK_BY"] = $this->getRequestParam("QUALITY_CHECK_BY");
    $RECORD["QUALITY_CHECK_ON"] = $this->getRequestParam("QUALITY_CHECK_ON");
    $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID");
    $RECORD["VALUE_CHECK"] = $this->getRequestParam("VALUE_CHECK");
    $RECORD["VALUE_CHECK_BY"] = $this->getRequestParam("VALUE_CHECK_BY");
    $RECORD["VALUE_CHECK_ON"] = $this->getRequestParam("VALUE_CHECK_ON");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0078");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.DOC_TYPE
                ,t.FROM_BPARTNER_ID
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.ORGINV_ID
                ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.QTY_CHECK
                ,t.QTY_CHECK_BY
                ,t.QTY_CHECK_ON
                ,t.QUALITY_CHECK
                ,t.QUALITY_CHECK_BY
                ,t.QUALITY_CHECK_ON
                ,t.RINV_ID
                ,t.VALUE_CHECK
                ,t.VALUE_CHECK_BY
                ,t.VALUE_CHECK_ON
            from MM_MOVEMENT_IN_DOC t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"DOC_NO" => array("DATA_TYPE" => "NUMBER")
  ,"DOC_TYPE" => array("DATA_TYPE" => "STRING")
  ,"FROM_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"ORGINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORGINV_NAME" => array("DATA_TYPE" => "STRING")
  ,"ORG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORG_NAME" => array("DATA_TYPE" => "STRING")
  ,"QTY_CHECK" => array("DATA_TYPE" => "BOOLEAN")
  ,"QTY_CHECK_BY" => array("DATA_TYPE" => "STRING")
  ,"QTY_CHECK_ON" => array("DATA_TYPE" => "DATE")
  ,"QUALITY_CHECK" => array("DATA_TYPE" => "BOOLEAN")
  ,"QUALITY_CHECK_BY" => array("DATA_TYPE" => "STRING")
  ,"QUALITY_CHECK_ON" => array("DATA_TYPE" => "DATE")
  ,"RINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"VALUE_CHECK" => array("DATA_TYPE" => "BOOLEAN")
  ,"VALUE_CHECK_BY" => array("DATA_TYPE" => "STRING")
  ,"VALUE_CHECK_ON" => array("DATA_TYPE" => "DATE")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["DOC_TYPE"] )) { $RECORD["DOC_TYPE"] = $this->getRequestParam("DOC_TYPE"); }
     if (isset($_REQUEST["FROM_BPARTNER_ID"] )) { $RECORD["FROM_BPARTNER_ID"] = $this->getRequestParam("FROM_BPARTNER_ID"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["ORGINV_ID"] )) { $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID"); }
     if (isset($_REQUEST["ORGINV_NAME"] )) { $RECORD["ORGINV_NAME"] = $this->getRequestParam("ORGINV_NAME"); }
     if (isset($_REQUEST["ORG_ID"] )) { $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID"); }
     if (isset($_REQUEST["ORG_NAME"] )) { $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME"); }
    $RECORD["QTY_CHECK"] = $this->getRequestParamBoolean("QTY_CHECK");
     if (isset($_REQUEST["QTY_CHECK_BY"] )) { $RECORD["QTY_CHECK_BY"] = $this->getRequestParam("QTY_CHECK_BY"); }
     if (isset($_REQUEST["QTY_CHECK_ON"] )) { $RECORD["QTY_CHECK_ON"] = $this->getRequestParam("QTY_CHECK_ON"); }
    $RECORD["QUALITY_CHECK"] = $this->getRequestParamBoolean("QUALITY_CHECK");
     if (isset($_REQUEST["QUALITY_CHECK_BY"] )) { $RECORD["QUALITY_CHECK_BY"] = $this->getRequestParam("QUALITY_CHECK_BY"); }
     if (isset($_REQUEST["QUALITY_CHECK_ON"] )) { $RECORD["QUALITY_CHECK_ON"] = $this->getRequestParam("QUALITY_CHECK_ON"); }
     if (isset($_REQUEST["RINV_ID"] )) { $RECORD["RINV_ID"] = $this->getRequestParam("RINV_ID"); }
    $RECORD["VALUE_CHECK"] = $this->getRequestParamBoolean("VALUE_CHECK");
     if (isset($_REQUEST["VALUE_CHECK_BY"] )) { $RECORD["VALUE_CHECK_BY"] = $this->getRequestParam("VALUE_CHECK_BY"); }
     if (isset($_REQUEST["VALUE_CHECK_ON"] )) { $RECORD["VALUE_CHECK_ON"] = $this->getRequestParam("VALUE_CHECK_ON"); }
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
