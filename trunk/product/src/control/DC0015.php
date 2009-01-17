<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0015 Controller: BP adress
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0015 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_COUNTRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "COUNTRY_CODE like :COUNTRY_CODE";
      $params["COUNTRY_CODE"] = $_REQUEST["QRY_COUNTRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_REGION_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "REGION_CODE like :REGION_CODE";
      $params["REGION_CODE"] = $_REQUEST["QRY_REGION_CODE"];
    }
    if (!empty($_REQUEST["QRY_CITY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CITY like :CITY";
      $params["CITY"] = $_REQUEST["QRY_CITY"];
    }
    if (!empty($_REQUEST["QRY_CITY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CITY_ID like :CITY_ID";
      $params["CITY_ID"] = $_REQUEST["QRY_CITY_ID"];
    }
    if (!empty($_REQUEST["QRY_STREET"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STREET like :STREET";
      $params["STREET"] = $_REQUEST["QRY_STREET"];
    }
    if (!empty($_REQUEST["QRY_STREET_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "STREET_ID like :STREET_ID";
      $params["STREET_ID"] = $_REQUEST["QRY_STREET_ID"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_ENTRANCE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ENTRANCE like :ENTRANCE";
      $params["ENTRANCE"] = $_REQUEST["QRY_ENTRANCE"];
    }
    if (!empty($_REQUEST["QRY_IS_BILLING"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_BILLING like :IS_BILLING";
      $params["IS_BILLING"] = $_REQUEST["QRY_IS_BILLING"];
    }
    if (!empty($_REQUEST["QRY_IS_DELIVERY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_DELIVERY like :IS_DELIVERY";
      $params["IS_DELIVERY"] = $_REQUEST["QRY_IS_DELIVERY"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_ZIP"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ZIP like :ZIP";
      $params["ZIP"] = $_REQUEST["QRY_ZIP"];
    }
    if (!empty($_REQUEST["QRY_ADRESS"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ADRESS like :ADRESS";
      $params["ADRESS"] = $_REQUEST["QRY_ADRESS"];
    }
    if (!empty($_REQUEST["QRY_IS_DETAILED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_DETAILED like :IS_DETAILED";
      $params["IS_DETAILED"] = $_REQUEST["QRY_IS_DETAILED"];
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
                ID
                ,BPARTNER_ID
                ,COUNTRY_CODE
                ,REGION_CODE
                ,CITY
                ,CITY_ID
                ,STREET
                ,STREET_ID
                ,NOTES
                ,ENTRANCE
                ,IS_BILLING
                ,IS_DELIVERY
                ,NAME
                ,ZIP
                ,ADRESS
                ,IS_DETAILED
            from BP_ADRESS  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"BPARTNER_ID"
      ,"COUNTRY_CODE"
      ,"REGION_CODE"
      ,"CITY"
      ,"CITY_ID"
      ,"STREET"
      ,"STREET_ID"
      ,"NOTES"
      ,"ENTRANCE"
      ,"IS_BILLING"
      ,"IS_DELIVERY"
      ,"NAME"
      ,"ZIP"
      ,"ADRESS"
      ,"IS_DETAILED"
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
                ID
                ,BPARTNER_ID
                ,NAME
                ,COUNTRY_CODE
                ,REGION_CODE
                ,CITY
                ,CITY_ID
                ,IS_DETAILED
                ,ADRESS
                ,ZIP
                ,STREET_ID
                ,STREET
                ,ENTRANCE
                ,IS_BILLING
                ,IS_DELIVERY
                ,NOTES
            from BP_ADRESS  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"BPARTNER_ID"
     ,"NAME"
     ,"COUNTRY_CODE"
     ,"REGION_CODE"
     ,"CITY"
     ,"CITY_ID"
     ,"IS_DETAILED"
     ,"ADRESS"
     ,"ZIP"
     ,"STREET_ID"
     ,"STREET"
     ,"ENTRANCE"
     ,"IS_BILLING"
     ,"IS_DELIVERY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0015.fetchRecord().");}
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
    $RECORD["ADRESS"] = $this->getRequestParam("ADRESS");
    $RECORD["ADRESS_TYPE"] = $this->getRequestParam("ADRESS_TYPE");
    $RECORD["APT"] = $this->getRequestParam("APT");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BUILDING"] = $this->getRequestParam("BUILDING");
    $RECORD["CITY"] = $this->getRequestParam("CITY");
    $RECORD["CITY_ID"] = $this->getRequestParam("CITY_ID");
    $RECORD["COUNTRY_CODE"] = $this->getRequestParam("COUNTRY_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENTRANCE"] = $this->getRequestParam("ENTRANCE");
    $RECORD["FLOOR"] = $this->getRequestParam("FLOOR");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_BILLING"] = $this->getRequestParamBoolean("IS_BILLING");
    $RECORD["IS_DELIVERY"] = $this->getRequestParamBoolean("IS_DELIVERY");
    $RECORD["IS_DETAILED"] = $this->getRequestParamBoolean("IS_DETAILED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NO"] = $this->getRequestParam("NO");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["REGION_CODE"] = $this->getRequestParam("REGION_CODE");
    $RECORD["STREET"] = $this->getRequestParam("STREET");
    $RECORD["STREET_ID"] = $this->getRequestParam("STREET_ID");
    $RECORD["ZIP"] = $this->getRequestParam("ZIP");
    $sql = "insert into BP_ADRESS(
                 ID
                ,BPARTNER_ID
                ,COUNTRY_CODE
                ,REGION_CODE
                ,CITY
                ,CITY_ID
                ,STREET
                ,STREET_ID
                ,NOTES
                ,ENTRANCE
                ,IS_BILLING
                ,IS_DELIVERY
                ,NAME
                ,ZIP
                ,ADRESS
                ,IS_DETAILED
            ) values ( 
                 :ID
                ,:BPARTNER_ID
                ,:COUNTRY_CODE
                ,:REGION_CODE
                ,:CITY
                ,:CITY_ID
                ,:STREET
                ,:STREET_ID
                ,:NOTES
                ,:ENTRANCE
                ,:IS_BILLING
                ,:IS_DELIVERY
                ,:NAME
                ,:ZIP
                ,:ADRESS
                ,:IS_DETAILED
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_BPADR_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ADRESS"] = $this->getRequestParam("ADRESS");
    $RECORD["ADRESS_TYPE"] = $this->getRequestParam("ADRESS_TYPE");
    $RECORD["APT"] = $this->getRequestParam("APT");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BUILDING"] = $this->getRequestParam("BUILDING");
    $RECORD["CITY"] = $this->getRequestParam("CITY");
    $RECORD["CITY_ID"] = $this->getRequestParam("CITY_ID");
    $RECORD["COUNTRY_CODE"] = $this->getRequestParam("COUNTRY_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENTRANCE"] = $this->getRequestParam("ENTRANCE");
    $RECORD["FLOOR"] = $this->getRequestParam("FLOOR");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_BILLING"] = $this->getRequestParam("IS_BILLING");
    $RECORD["IS_DELIVERY"] = $this->getRequestParam("IS_DELIVERY");
    $RECORD["IS_DETAILED"] = $this->getRequestParam("IS_DETAILED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NO"] = $this->getRequestParam("NO");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["REGION_CODE"] = $this->getRequestParam("REGION_CODE");
    $RECORD["STREET"] = $this->getRequestParam("STREET");
    $RECORD["STREET_ID"] = $this->getRequestParam("STREET_ID");
    $RECORD["ZIP"] = $this->getRequestParam("ZIP");
    $sql = "update BP_ADRESS set 
                 ADRESS=:ADRESS
                ,BPARTNER_ID=:BPARTNER_ID
                ,CITY=:CITY
                ,CITY_ID=:CITY_ID
                ,COUNTRY_CODE=:COUNTRY_CODE
                ,ENTRANCE=:ENTRANCE
                ,ID=:ID
                ,IS_BILLING=:IS_BILLING
                ,IS_DELIVERY=:IS_DELIVERY
                ,IS_DETAILED=:IS_DETAILED
                ,NAME=:NAME
                ,NOTES=:NOTES
                ,REGION_CODE=:REGION_CODE
                ,STREET=:STREET
                ,STREET_ID=:STREET_ID
                ,ZIP=:ZIP
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0015.doDelete().");}
    $sql = "delete from BP_ADRESS where 
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
    $RECORD["ADRESS"] = $this->getRequestParam("ADRESS");
    $RECORD["ADRESS_TYPE"] = $this->getRequestParam("ADRESS_TYPE");
    $RECORD["APT"] = $this->getRequestParam("APT");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BUILDING"] = $this->getRequestParam("BUILDING");
    $RECORD["CITY"] = $this->getRequestParam("CITY");
    $RECORD["CITY_ID"] = $this->getRequestParam("CITY_ID");
    $RECORD["COUNTRY_CODE"] = $this->getRequestParam("COUNTRY_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ENTRANCE"] = $this->getRequestParam("ENTRANCE");
    $RECORD["FLOOR"] = $this->getRequestParam("FLOOR");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_BILLING"] = $this->getRequestParam("IS_BILLING");
    $RECORD["IS_DELIVERY"] = $this->getRequestParam("IS_DELIVERY");
    $RECORD["IS_DETAILED"] = $this->getRequestParam("IS_DETAILED");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NO"] = $this->getRequestParam("NO");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["REGION_CODE"] = $this->getRequestParam("REGION_CODE");
    $RECORD["STREET"] = $this->getRequestParam("STREET");
    $RECORD["STREET_ID"] = $this->getRequestParam("STREET_ID");
    $RECORD["ZIP"] = $this->getRequestParam("ZIP");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0015");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ID
                ,BPARTNER_ID
                ,COUNTRY_CODE
                ,REGION_CODE
                ,CITY
                ,CITY_ID
                ,STREET
                ,STREET_ID
                ,NOTES
                ,ENTRANCE
                ,IS_BILLING
                ,IS_DELIVERY
                ,NAME
                ,ZIP
                ,ADRESS
                ,IS_DETAILED
            from BP_ADRESS 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"COUNTRY_CODE" => array("DATA_TYPE" => "STRING")
  ,"REGION_CODE" => array("DATA_TYPE" => "STRING")
  ,"CITY" => array("DATA_TYPE" => "STRING")
  ,"CITY_ID" => array("DATA_TYPE" => "NUMBER")
  ,"STREET" => array("DATA_TYPE" => "STRING")
  ,"STREET_ID" => array("DATA_TYPE" => "NUMBER")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"ENTRANCE" => array("DATA_TYPE" => "STRING")
  ,"IS_BILLING" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_DELIVERY" => array("DATA_TYPE" => "BOOLEAN")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"ZIP" => array("DATA_TYPE" => "STRING")
  ,"ADRESS" => array("DATA_TYPE" => "STRING")
  ,"IS_DETAILED" => array("DATA_TYPE" => "BOOLEAN")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ADRESS"] )) { $RECORD["ADRESS"] = $this->getRequestParam("ADRESS"); }
     if (isset($_REQUEST["ADRESS_TYPE"] )) { $RECORD["ADRESS_TYPE"] = $this->getRequestParam("ADRESS_TYPE"); }
     if (isset($_REQUEST["APT"] )) { $RECORD["APT"] = $this->getRequestParam("APT"); }
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["BUILDING"] )) { $RECORD["BUILDING"] = $this->getRequestParam("BUILDING"); }
     if (isset($_REQUEST["CITY"] )) { $RECORD["CITY"] = $this->getRequestParam("CITY"); }
     if (isset($_REQUEST["CITY_ID"] )) { $RECORD["CITY_ID"] = $this->getRequestParam("CITY_ID"); }
     if (isset($_REQUEST["COUNTRY_CODE"] )) { $RECORD["COUNTRY_CODE"] = $this->getRequestParam("COUNTRY_CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ENTRANCE"] )) { $RECORD["ENTRANCE"] = $this->getRequestParam("ENTRANCE"); }
     if (isset($_REQUEST["FLOOR"] )) { $RECORD["FLOOR"] = $this->getRequestParam("FLOOR"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_BILLING"] = $this->getRequestParamBoolean("IS_BILLING");
    $RECORD["IS_DELIVERY"] = $this->getRequestParamBoolean("IS_DELIVERY");
    $RECORD["IS_DETAILED"] = $this->getRequestParamBoolean("IS_DETAILED");
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["NO"] )) { $RECORD["NO"] = $this->getRequestParam("NO"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["REGION_CODE"] )) { $RECORD["REGION_CODE"] = $this->getRequestParam("REGION_CODE"); }
     if (isset($_REQUEST["STREET"] )) { $RECORD["STREET"] = $this->getRequestParam("STREET"); }
     if (isset($_REQUEST["STREET_ID"] )) { $RECORD["STREET_ID"] = $this->getRequestParam("STREET_ID"); }
     if (isset($_REQUEST["ZIP"] )) { $RECORD["ZIP"] = $this->getRequestParam("ZIP"); }
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
