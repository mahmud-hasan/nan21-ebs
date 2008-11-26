<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0003 Controller: UoM
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0003 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_UOM_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UOM_TYPE like :UOM_TYPE";
      $params["UOM_TYPE"] = $_REQUEST["QRY_UOM_TYPE"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
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
                ,CODE
                ,UOM_TYPE
                ,NAME
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,ACTIVE
                ,IS_PERIOD
                ,IS_VOLUME
                ,IS_MASS
            from UOM  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"CODE"
      ,"UOM_TYPE"
      ,"NAME"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"ACTIVE"
      ,"IS_PERIOD"
      ,"IS_VOLUME"
      ,"IS_MASS"
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
                ,UOM_TYPE
                ,CODE
                ,NAME
                ,IS_PERIOD
                ,IS_VOLUME
                ,IS_MASS
                ,ACTIVE
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from UOM  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"UOM_TYPE"
     ,"CODE"
     ,"NAME"
     ,"IS_PERIOD"
     ,"IS_VOLUME"
     ,"IS_MASS"
     ,"ACTIVE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0003.fetchRecord().");}
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
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_MASS"] = $this->getRequestParamBoolean("IS_MASS");
    $RECORD["IS_PERIOD"] = $this->getRequestParamBoolean("IS_PERIOD");
    $RECORD["IS_VOLUME"] = $this->getRequestParamBoolean("IS_VOLUME");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["UOM_TYPE"] = $this->getRequestParam("UOM_TYPE");
    $sql = "insert into UOM(
                 ID
                ,CODE
                ,UOM_TYPE
                ,NAME
                ,ACTIVE
                ,IS_PERIOD
                ,IS_VOLUME
                ,IS_MASS
            ) values ( 
                 :ID
                ,:CODE
                ,:UOM_TYPE
                ,:NAME
                ,:ACTIVE
                ,:IS_PERIOD
                ,:IS_VOLUME
                ,:IS_MASS
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_uom_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ACTIVE"] = $this->getRequestParam("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_MASS"] = $this->getRequestParam("IS_MASS");
    $RECORD["IS_PERIOD"] = $this->getRequestParam("IS_PERIOD");
    $RECORD["IS_VOLUME"] = $this->getRequestParam("IS_VOLUME");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["UOM_TYPE"] = $this->getRequestParam("UOM_TYPE");
    $sql = "update UOM set 
                 ID=:ID
                ,CODE=:CODE
                ,UOM_TYPE=:UOM_TYPE
                ,NAME=:NAME
                ,MODIFIEDBY=:MODIFIEDBY
                ,ACTIVE=:ACTIVE
                ,IS_PERIOD=:IS_PERIOD
                ,IS_VOLUME=:IS_VOLUME
                ,IS_MASS=:IS_MASS
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0003.doDelete().");}
    $sql = "delete from UOM where 
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_MASS"] = $this->getRequestParam("IS_MASS");
    $RECORD["IS_PERIOD"] = $this->getRequestParam("IS_PERIOD");
    $RECORD["IS_VOLUME"] = $this->getRequestParam("IS_VOLUME");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["UOM_TYPE"] = $this->getRequestParam("UOM_TYPE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0003");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ID
                ,CODE
                ,UOM_TYPE
                ,NAME
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,ACTIVE
                ,IS_PERIOD
                ,IS_VOLUME
                ,IS_MASS
            from UOM 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"UOM_TYPE" => array("DATA_TYPE" => "STRING")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_PERIOD" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_VOLUME" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_MASS" => array("DATA_TYPE" => "BOOLEAN")
);


private function readRequest(&$RECORD) {
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_MASS"] = $this->getRequestParamBoolean("IS_MASS");
    $RECORD["IS_PERIOD"] = $this->getRequestParamBoolean("IS_PERIOD");
    $RECORD["IS_VOLUME"] = $this->getRequestParamBoolean("IS_VOLUME");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["UOM_TYPE"] )) { $RECORD["UOM_TYPE"] = $this->getRequestParam("UOM_TYPE"); }
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
