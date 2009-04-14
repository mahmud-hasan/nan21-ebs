<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0015 Controller: BP adress
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0015 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ADRESS"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ADRESS like :ADRESS";
      $params["ADRESS"] = $_REQUEST["QRY_ADRESS"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
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
    if (!empty($_REQUEST["QRY_COUNTRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "COUNTRY_CODE like :COUNTRY_CODE";
      $params["COUNTRY_CODE"] = $_REQUEST["QRY_COUNTRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ENTRANCE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ENTRANCE like :ENTRANCE";
      $params["ENTRANCE"] = $_REQUEST["QRY_ENTRANCE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
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
    if (!empty($_REQUEST["QRY_IS_DETAILED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "IS_DETAILED like :IS_DETAILED";
      $params["IS_DETAILED"] = $_REQUEST["QRY_IS_DETAILED"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_REGION_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "REGION_CODE like :REGION_CODE";
      $params["REGION_CODE"] = $_REQUEST["QRY_REGION_CODE"];
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
    if (!empty($_REQUEST["QRY_ZIP"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ZIP like :ZIP";
      $params["ZIP"] = $_REQUEST["QRY_ZIP"];
    }
}

public function doQuery() {
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
                ADRESS
                ,BPARTNER_ID
                ,CITY
                ,CITY_ID
                ,COUNTRY_CODE
                ,ENTRANCE
                ,ID
                ,IS_BILLING
                ,IS_DELIVERY
                ,IS_DETAILED
                ,NAME
                ,NOTES
                ,REGION_CODE
                ,STREET
                ,STREET_ID
                ,ZIP
            from BP_ADRESS  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->getDbConn()->Execute($sql, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
                BPARTNER_ID
                ,ID
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
    $rs = $this->getDbConn()->Execute($sql, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    } else {
      $columns = array_keys($this->fields);
    }
    if ($this->getDataFormatExport() == "csv" ) {
      $dataOut = $this->serializeCursor($rs,$columns,"csv");
    } else {
      $dataOut = $this->serializeCursor($rs,$columns,"xml");
      $dataOut = "<records>".$dataOut."</records>";
      $dataOut = "<queryParams>".$this->serializeMap($params,"xml")."</queryParams>".$dataOut;
      $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fields,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fields,false)."</columnDef>".$dataOut;
      $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
      $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
      $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    }
    $this->beginExport();
    print $dataOut;
    $this->endExport();
} /* end function doExport  */

public function fetchRecord() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0015.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into BP_ADRESS(
                 ADRESS
                ,BPARTNER_ID
                ,CITY
                ,CITY_ID
                ,COUNTRY_CODE
                ,ENTRANCE
                ,ID
                ,IS_BILLING
                ,IS_DELIVERY
                ,IS_DETAILED
                ,NAME
                ,NOTES
                ,REGION_CODE
                ,STREET
                ,STREET_ID
                ,ZIP
            ) values ( 
                 :ADRESS
                ,:BPARTNER_ID
                ,:CITY
                ,:CITY_ID
                ,:COUNTRY_CODE
                ,:ENTRANCE
                ,:ID
                ,:IS_BILLING
                ,:IS_DELIVERY
                ,:IS_DETAILED
                ,:NAME
                ,:NOTES
                ,:REGION_CODE
                ,:STREET
                ,:STREET_ID
                ,:ZIP
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_BPADR_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
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
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0015.doDelete().");}
    $sql = "delete from BP_ADRESS where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0015");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ADRESS
                ,BPARTNER_ID
                ,CITY
                ,CITY_ID
                ,COUNTRY_CODE
                ,ENTRANCE
                ,ID
                ,IS_BILLING
                ,IS_DELIVERY
                ,IS_DETAILED
                ,NAME
                ,NOTES
                ,REGION_CODE
                ,STREET
                ,STREET_ID
                ,ZIP
            from BP_ADRESS 
         where 
           ID= :ID
            ";
    $rs = $this->getDbConn()->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    CollectionUtils::copyMapValues($record, $row);
} /* end function findByPk  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
    $this->populateRecordFromRequest();
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function _initFields() {
  $this->fields = array(
  "ADRESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ADRESS_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"APT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BUILDING" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CITY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CITY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"COUNTRY_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ENTRANCE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"FLOOR" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_BILLING" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_DELIVERY" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_DETAILED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REGION_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STREET" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STREET_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ZIP" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
