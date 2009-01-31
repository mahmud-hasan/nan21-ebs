<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0082 Controller: Organizations hierarchy
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0082 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_COSTCENTER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.COSTCENTER_ID like :COSTCENTER_ID";
      $params["COSTCENTER_ID"] = $_REQUEST["QRY_COSTCENTER_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ORG_TYPE like :ORG_TYPE";
      $params["ORG_TYPE"] = $_REQUEST["QRY_ORG_TYPE"];
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
                o.ACTIVE
                ,o.BPARTNER_ID
                ,pbo_client.get_code_by_id(o.client_id) CLIENT_CODE
                ,o.CLIENT_ID
                ,o.COSTCENTER_ID
                ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME
                ,o.COSTMETHOD_CODE
                ,o.CREATEDBY
                ,o.CREATEDON
                ,o.ID
                ,o.MODIFIEDBY
                ,o.MODIFIEDON
                ,o.NAME
                ,o.NOTES
                ,o.ORG_ID
                ,o.ORG_TYPE
            from ORGANIZATION o $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACTIVE"
      ,"BPARTNER_ID"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"COSTCENTER_ID"
      ,"COSTCENTER_NAME"
      ,"COSTMETHOD_CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NAME"
      ,"NOTES"
      ,"ORG_ID"
      ,"ORG_TYPE"
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
                o.ID
                ,pbo_client.get_code_by_id(o.client_id) CLIENT_CODE
                ,o.CLIENT_ID
                ,o.NAME
                ,o.ORG_TYPE
                ,o.ORG_ID
                ,o.COSTMETHOD_CODE
                ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME
                ,o.COSTCENTER_ID
                ,o.BPARTNER_ID
                ,o.NOTES
                ,o.ACTIVE
                ,o.CREATEDON
                ,o.CREATEDBY
                ,o.MODIFIEDON
                ,o.MODIFIEDBY
            from ORGANIZATION o $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_CODE"
     ,"CLIENT_ID"
     ,"NAME"
     ,"ORG_TYPE"
     ,"ORG_ID"
     ,"COSTMETHOD_CODE"
     ,"COSTCENTER_NAME"
     ,"COSTCENTER_ID"
     ,"BPARTNER_ID"
     ,"NOTES"
     ,"ACTIVE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0082.fetchRecord().");}
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["COSTCENTER_ID"] = $this->getRequestParam("COSTCENTER_ID");
    $RECORD["COSTCENTER_NAME"] = $this->getRequestParam("COSTCENTER_NAME");
    $RECORD["COSTMETHOD_CODE"] = $this->getRequestParam("COSTMETHOD_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_TYPE"] = $this->getRequestParam("ORG_TYPE");
    $sql = "insert into ORGANIZATION(
                 ACTIVE
                ,BPARTNER_ID
                ,CLIENT_ID
                ,COSTCENTER_ID
                ,COSTMETHOD_CODE
                ,ID
                ,NAME
                ,NOTES
                ,ORG_ID
                ,ORG_TYPE
            ) values ( 
                 :ACTIVE
                ,:BPARTNER_ID
                ,:CLIENT_ID
                ,:COSTCENTER_ID
                ,:COSTMETHOD_CODE
                ,:ID
                ,:NAME
                ,:NOTES
                ,:ORG_ID
                ,:ORG_TYPE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_ORG_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["COSTCENTER_ID"] = $this->getRequestParam("COSTCENTER_ID");
    $RECORD["COSTCENTER_NAME"] = $this->getRequestParam("COSTCENTER_NAME");
    $RECORD["COSTMETHOD_CODE"] = $this->getRequestParam("COSTMETHOD_CODE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_TYPE"] = $this->getRequestParam("ORG_TYPE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0082.doUpdate().");}
    $sql = "update ORGANIZATION set 
                 ACTIVE=:ACTIVE
                ,BPARTNER_ID=:BPARTNER_ID
                ,CLIENT_ID=:CLIENT_ID
                ,COSTCENTER_ID=:COSTCENTER_ID
                ,COSTMETHOD_CODE=:COSTMETHOD_CODE
                ,ID=:ID
                ,NAME=:NAME
                ,NOTES=:NOTES
                ,ORG_ID=:ORG_ID
                ,ORG_TYPE=:ORG_TYPE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0082.doDelete().");}
    $sql = "delete from ORGANIZATION where 
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["COSTCENTER_ID"] = $this->getRequestParam("COSTCENTER_ID");
    $RECORD["COSTCENTER_NAME"] = $this->getRequestParam("COSTCENTER_NAME");
    $RECORD["COSTMETHOD_CODE"] = $this->getRequestParam("COSTMETHOD_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["ORG_TYPE"] = $this->getRequestParam("ORG_TYPE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0082");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                o.ACTIVE
                ,o.BPARTNER_ID
                ,pbo_client.get_code_by_id(o.client_id) CLIENT_CODE
                ,o.CLIENT_ID
                ,o.COSTCENTER_ID
                ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME
                ,o.COSTMETHOD_CODE
                ,o.CREATEDBY
                ,o.CREATEDON
                ,o.ID
                ,o.MODIFIEDBY
                ,o.MODIFIEDON
                ,o.NAME
                ,o.NOTES
                ,o.ORG_ID
                ,o.ORG_TYPE
            from ORGANIZATION o
         where 
           o.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"COSTCENTER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"COSTCENTER_NAME" => array("DATA_TYPE" => "STRING")
  ,"COSTMETHOD_CODE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"ORG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORG_TYPE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["COSTCENTER_ID"] )) { $RECORD["COSTCENTER_ID"] = $this->getRequestParam("COSTCENTER_ID"); }
     if (isset($_REQUEST["COSTCENTER_NAME"] )) { $RECORD["COSTCENTER_NAME"] = $this->getRequestParam("COSTCENTER_NAME"); }
     if (isset($_REQUEST["COSTMETHOD_CODE"] )) { $RECORD["COSTMETHOD_CODE"] = $this->getRequestParam("COSTMETHOD_CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["ORG_ID"] )) { $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID"); }
     if (isset($_REQUEST["ORG_TYPE"] )) { $RECORD["ORG_TYPE"] = $this->getRequestParam("ORG_TYPE"); }
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
