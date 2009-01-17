<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0088 Controller: Org. stock locations
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0088 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_ORGINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORGINV_ID like :ORGINV_ID";
      $params["ORGINV_ID"] = $_REQUEST["QRY_ORGINV_ID"];
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
                t.ID
                ,t.CLIENT_ID
                ,t.ORG_ID
                ,t.ORGINV_ID
                ,t.CODE
                ,t.DESCRIPTION
                ,t.IS_DEFAULT
                ,t.STOCKLOC_TYPE
                ,t.IS_VIRTUAL
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from MM_STOCK_LOC t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"CLIENT_ID"
      ,"ORG_ID"
      ,"ORGINV_ID"
      ,"CODE"
      ,"DESCRIPTION"
      ,"IS_DEFAULT"
      ,"STOCKLOC_TYPE"
      ,"IS_VIRTUAL"
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
                t.ID
                ,t.CLIENT_ID
                ,t.ORG_ID
                ,t.ORGINV_ID
                ,t.CODE
                ,t.DESCRIPTION
                ,t.IS_DEFAULT
                ,t.STOCKLOC_TYPE
                ,t.IS_VIRTUAL
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from MM_STOCK_LOC t $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"ORG_ID"
     ,"ORGINV_ID"
     ,"CODE"
     ,"DESCRIPTION"
     ,"IS_DEFAULT"
     ,"STOCKLOC_TYPE"
     ,"IS_VIRTUAL"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0088.fetchRecord().");}
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
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_DEFAULT"] = $this->getRequestParamBoolean("IS_DEFAULT");
    $RECORD["IS_VIRTUAL"] = $this->getRequestParamBoolean("IS_VIRTUAL");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["STOCKLOC_TYPE"] = $this->getRequestParam("STOCKLOC_TYPE");
    $sql = "insert into MM_STOCK_LOC(
                 ID
                ,CLIENT_ID
                ,ORG_ID
                ,ORGINV_ID
                ,CODE
                ,DESCRIPTION
                ,IS_DEFAULT
                ,STOCKLOC_TYPE
                ,IS_VIRTUAL
            ) values ( 
                 :ID
                ,:CLIENT_ID
                ,:ORG_ID
                ,:ORGINV_ID
                ,:CODE
                ,:DESCRIPTION
                ,:IS_DEFAULT
                ,:STOCKLOC_TYPE
                ,:IS_VIRTUAL
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_STOCKLOC_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_DEFAULT"] = $this->getRequestParamBoolean("IS_DEFAULT");
    $RECORD["IS_VIRTUAL"] = $this->getRequestParamBoolean("IS_VIRTUAL");
    $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["STOCKLOC_TYPE"] = $this->getRequestParam("STOCKLOC_TYPE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0088.doUpdate().");}
    $sql = "update MM_STOCK_LOC set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,ORG_ID=:ORG_ID
                ,ORGINV_ID=:ORGINV_ID
                ,CODE=:CODE
                ,DESCRIPTION=:DESCRIPTION
                ,IS_DEFAULT=:IS_DEFAULT
                ,STOCKLOC_TYPE=:STOCKLOC_TYPE
                ,IS_VIRTUAL=:IS_VIRTUAL
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0088.doDelete().");}
    $sql = "delete from MM_STOCK_LOC where 
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
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_DEFAULT"] = $this->getRequestParam("IS_DEFAULT");
    $RECORD["IS_VIRTUAL"] = $this->getRequestParam("IS_VIRTUAL");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID");
    $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID");
    $RECORD["STOCKLOC_TYPE"] = $this->getRequestParam("STOCKLOC_TYPE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0088");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ID
                ,t.CLIENT_ID
                ,t.ORG_ID
                ,t.ORGINV_ID
                ,t.CODE
                ,t.DESCRIPTION
                ,t.IS_DEFAULT
                ,t.STOCKLOC_TYPE
                ,t.IS_VIRTUAL
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from MM_STOCK_LOC t
         where 
           t.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ORGINV_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"IS_DEFAULT" => array("DATA_TYPE" => "BOOLEAN")
  ,"STOCKLOC_TYPE" => array("DATA_TYPE" => "STRING")
  ,"IS_VIRTUAL" => array("DATA_TYPE" => "BOOLEAN")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_DEFAULT"] = $this->getRequestParamBoolean("IS_DEFAULT");
    $RECORD["IS_VIRTUAL"] = $this->getRequestParamBoolean("IS_VIRTUAL");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["ORGINV_ID"] )) { $RECORD["ORGINV_ID"] = $this->getRequestParam("ORGINV_ID"); }
     if (isset($_REQUEST["ORG_ID"] )) { $RECORD["ORG_ID"] = $this->getRequestParam("ORG_ID"); }
     if (isset($_REQUEST["STOCKLOC_TYPE"] )) { $RECORD["STOCKLOC_TYPE"] = $this->getRequestParam("STOCKLOC_TYPE"); }
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
