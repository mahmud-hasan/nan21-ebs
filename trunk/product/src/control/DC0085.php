<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0085 Controller: Organization inventory
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0085 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_DEFAULT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_DEFAULT like :IS_DEFAULT";
      $params["IS_DEFAULT"] = $_REQUEST["QRY_IS_DEFAULT"];
    }
    if (!empty($_REQUEST["QRY_ORGINVTYPE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORGINVTYPE_CODE like :ORGINVTYPE_CODE";
      $params["ORGINVTYPE_CODE"] = $_REQUEST["QRY_ORGINVTYPE_CODE"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
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
                ,t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.DESCRIPTION
                ,t.ID
                ,t.IS_DEFAULT
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.ORGINVTYPE_CODE
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
            from MM_ORG_INV t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"DESCRIPTION"
      ,"ID"
      ,"IS_DEFAULT"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"ORGINVTYPE_CODE"
      ,"ORG_ID"
      ,"ORG_NAME"
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
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.CODE
                ,t.DESCRIPTION
                ,t.ORGINVTYPE_CODE
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.IS_DEFAULT
            from MM_ORG_INV t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_CODE"
     ,"ORG_ID"
     ,"ORG_NAME"
     ,"CODE"
     ,"DESCRIPTION"
     ,"ORGINVTYPE_CODE"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"IS_DEFAULT"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0085.fetchRecord().");}
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_DEFAULT"] = $this->getRequestParamBoolean("IS_DEFAULT");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ORGINVTYPE_CODE"] = $this->getRequestParam("ORGINVTYPE_CODE");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME");
    $sql = "insert into MM_ORG_INV(
                 CLIENT_ID
                ,CODE
                ,DESCRIPTION
                ,ID
                ,IS_DEFAULT
                ,ORGINVTYPE_CODE
                ,ORG_ID
            ) values ( 
                 :CLIENT_ID
                ,:CODE
                ,:DESCRIPTION
                ,:ID
                ,:IS_DEFAULT
                ,:ORGINVTYPE_CODE
                ,:ORG_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_ORGINV_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_DEFAULT"] = $this->getRequestParamBoolean("IS_DEFAULT");
    $RECORD["ORGINVTYPE_CODE"] = $this->getRequestParam("ORGINVTYPE_CODE");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0085.doUpdate().");}
    $sql = "update MM_ORG_INV set 
                 CLIENT_ID=:CLIENT_ID
                ,CODE=:CODE
                ,DESCRIPTION=:DESCRIPTION
                ,ID=:ID
                ,IS_DEFAULT=:IS_DEFAULT
                ,ORGINVTYPE_CODE=:ORGINVTYPE_CODE
                ,ORG_ID=:ORG_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0085.doDelete().");}
    $sql = "delete from MM_ORG_INV where 
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_DEFAULT"] = $this->getRequestParam("IS_DEFAULT");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ORGINVTYPE_CODE"] = $this->getRequestParam("ORGINVTYPE_CODE");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0085");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CODE
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.DESCRIPTION
                ,t.ID
                ,t.IS_DEFAULT
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.ORGINVTYPE_CODE
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
            from MM_ORG_INV t
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
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_DEFAULT" => array("DATA_TYPE" => "BOOLEAN")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"ORGINVTYPE_CODE" => array("DATA_TYPE" => "STRING")
  ,"ORG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORG_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_DEFAULT"] = $this->getRequestParamBoolean("IS_DEFAULT");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["ORGINVTYPE_CODE"] )) { $RECORD["ORGINVTYPE_CODE"] = $this->getRequestParam("ORGINVTYPE_CODE"); }
     if (isset($_REQUEST["ORG_ID"] )) { $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID"); }
     if (isset($_REQUEST["ORG_NAME"] )) { $RECORD["ORG_NAME"] = $this->getRequestParam("ORG_NAME"); }
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
