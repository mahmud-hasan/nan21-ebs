<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0070 Controller: Menu item roles
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0070 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "mir.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_MENUITEM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "mir.MENUITEM_ID like :MENUITEM_ID";
      $params["MENUITEM_ID"] = $_REQUEST["QRY_MENUITEM_ID"];
    }
    if (!empty($_REQUEST["QRY_ROLE_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "mir.ROLE_NAME like :ROLE_NAME";
      $params["ROLE_NAME"] = $_REQUEST["QRY_ROLE_NAME"];
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
                mir.CREATEDBY
                ,mir.CREATEDON
                ,mir.ID
                ,mir.MENUITEM_ID
                ,mir.MODIFIEDBY
                ,mir.MODIFIEDON
                ,mir.ROLE_NAME
            from MENUITEM_ROLE mir $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CREATEDBY"
      ,"CREATEDON"
      ,"ID"
      ,"MENUITEM_ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"ROLE_NAME"
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
                mir.ID
                ,mir.MENUITEM_ID
                ,mir.ROLE_NAME
                ,mir.CREATEDON
                ,mir.CREATEDBY
                ,mir.MODIFIEDON
                ,mir.MODIFIEDBY
            from MENUITEM_ROLE mir $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"MENUITEM_ID"
     ,"ROLE_NAME"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0070.fetchRecord().");}
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
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME");
    $sql = "insert into MENUITEM_ROLE(
                 ID
                ,MENUITEM_ID
                ,ROLE_NAME
            ) values ( 
                 :ID
                ,:MENUITEM_ID
                ,:ROLE_NAME
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_MENUITEMROLE_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME");
    $sql = "update MENUITEM_ROLE set 
                 CREATEDBY=:CREATEDBY
                ,CREATEDON=:CREATEDON
                ,ID=:ID
                ,MENUITEM_ID=:MENUITEM_ID
                ,MODIFIEDBY=:MODIFIEDBY
                ,MODIFIEDON=:MODIFIEDON
                ,ROLE_NAME=:ROLE_NAME
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0070.doDelete().");}
    $sql = "delete from MENUITEM_ROLE where 
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
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0070");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                mir.CREATEDBY
                ,mir.CREATEDON
                ,mir.ID
                ,mir.MENUITEM_ID
                ,mir.MODIFIEDBY
                ,mir.MODIFIEDON
                ,mir.ROLE_NAME
            from MENUITEM_ROLE mir
         where 
           mir.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MENUITEM_ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"ROLE_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MENUITEM_ID"] )) { $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["ROLE_NAME"] )) { $RECORD["ROLE_NAME"] = $this->getRequestParam("ROLE_NAME"); }
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
