<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0016 Controller: Parcel masterdata
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0016 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

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
    if (!empty($_REQUEST["QRY_CUSTODY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CUSTODY_ORG_ID like :CUSTODY_ORG_ID";
      $params["CUSTODY_ORG_ID"] = $_REQUEST["QRY_CUSTODY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_DELIVERED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DELIVERED like :DELIVERED";
      $params["DELIVERED"] = $_REQUEST["QRY_DELIVERED"];
    }
    if (!empty($_REQUEST["QRY_DELIVERY_AGENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DELIVERY_AGENT_ID like :DELIVERY_AGENT_ID";
      $params["DELIVERY_AGENT_ID"] = $_REQUEST["QRY_DELIVERY_AGENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_BPADRESS_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DEST_BPADRESS_ID like :DEST_BPADRESS_ID";
      $params["DEST_BPADRESS_ID"] = $_REQUEST["QRY_DEST_BPADRESS_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DEST_BPARTNER_ID like :DEST_BPARTNER_ID";
      $params["DEST_BPARTNER_ID"] = $_REQUEST["QRY_DEST_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_CITY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DEST_CITY_ID like :DEST_CITY_ID";
      $params["DEST_CITY_ID"] = $_REQUEST["QRY_DEST_CITY_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DEST_NAME like :DEST_NAME";
      $params["DEST_NAME"] = $_REQUEST["QRY_DEST_NAME"];
    }
    if (!empty($_REQUEST["QRY_EXP_BPADRESS_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EXP_BPADRESS_ID like :EXP_BPADRESS_ID";
      $params["EXP_BPADRESS_ID"] = $_REQUEST["QRY_EXP_BPADRESS_ID"];
    }
    if (!empty($_REQUEST["QRY_EXP_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EXP_BPARTNER_ID like :EXP_BPARTNER_ID";
      $params["EXP_BPARTNER_ID"] = $_REQUEST["QRY_EXP_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_EXP_CITY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EXP_CITY_ID like :EXP_CITY_ID";
      $params["EXP_CITY_ID"] = $_REQUEST["QRY_EXP_CITY_ID"];
    }
    if (!empty($_REQUEST["QRY_EXP_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EXP_NAME like :EXP_NAME";
      $params["EXP_NAME"] = $_REQUEST["QRY_EXP_NAME"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LAST_EVENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.LAST_EVENT_ID like :LAST_EVENT_ID";
      $params["LAST_EVENT_ID"] = $_REQUEST["QRY_LAST_EVENT_ID"];
    }
    if (!empty($_REQUEST["QRY_PICKUP_AGENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PICKUP_AGENT_ID like :PICKUP_AGENT_ID";
      $params["PICKUP_AGENT_ID"] = $_REQUEST["QRY_PICKUP_AGENT_ID"];
    }
    if (!empty($_REQUEST["QRY_REJECTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.REJECTED like :REJECTED";
      $params["REJECTED"] = $_REQUEST["QRY_REJECTED"];
    }
    if (!empty($_REQUEST["QRY_REJECT_REASON_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.REJECT_REASON_CODE like :REJECT_REASON_CODE";
      $params["REJECT_REASON_CODE"] = $_REQUEST["QRY_REJECT_REASON_CODE"];
      $params["REJECT_REASON_CODE"] = strtoupper($params["REJECT_REASON_CODE"]);
    }
}

public function doQuery() {
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
                ,t.CONTENT
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CUSTODY_ORG_ID
                ,pbo_org.get_name_by_id(t.CUSTODY_ORG_ID) CUSTODY_ORG_NAME
                ,t.DECLARED_VALUE
                ,t.DELIVERED
                ,t.DELIVERED_TO_IDENT
                ,t.DELIVERED_TO_NAME
                ,t.DELIVERY_AGENT_ID
                ,pbo_org.get_name_by_id(t.DELIVERY_AGENT_ID) DELIVERY_AGENT_NAME
                ,t.DELIVERY_DATE
                ,t.DELIVERY_MODE
                ,t.DEST_ADRESS_NOTE
                ,t.DEST_BPADRESS
                ,t.DEST_BPADRESS_ID
                ,t.DEST_BPARTNER_ID
                ,t.DEST_CITY
                ,t.DEST_CITY_ID
                ,t.DEST_COUNTRY
                ,t.DEST_NAME
                ,t.DEST_REGION
                ,t.DEST_ZIP
                ,t.EXP_ADRESS_NOTE
                ,t.EXP_BPADRESS
                ,t.EXP_BPADRESS_ID
                ,t.EXP_BPARTNER_ID
                ,t.EXP_CITY
                ,t.EXP_CITY_ID
                ,t.EXP_COUNTRY
                ,t.EXP_NAME
                ,t.EXP_REGION
                ,t.EXP_ZIP
                ,t.ID
                ,t.INSURED_VALUE
                ,t.LAST_EVENT_ID
                ,pbo_parcel.get_evnttyp_name_by_evntid(t.LAST_EVENT_ID) LAST_EVENT_NAME
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.PACKAGE_COUNT
                ,t.PICKEDUP
                ,t.PICKUP_AGENT_ID
                ,pbo_org.get_name_by_id(t.PICKUP_AGENT_ID) PICKUP_AGENT_NAME
                ,t.PICKUP_DATE
                ,t.PICKUP_MODE
                ,t.REF_PARCEL_ID
                ,t.REF_PARCEL_REFERENCE_TYPE
                ,t.REJECTED
                ,t.REJECTED_BY_IDENT
                ,t.REJECTED_BY_NAME
                ,t.REJECT_DATE
                ,t.REJECT_REASON
                ,t.REJECT_REASON_CODE
            from TR_PARCEL t $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->getDbConn()->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
                ,t.CODE
                ,t.EXP_BPADRESS_ID
                ,t.EXP_CITY_ID
                ,t.EXP_BPARTNER_ID
                ,t.EXP_NAME
                ,t.EXP_COUNTRY
                ,t.EXP_REGION
                ,t.EXP_CITY
                ,t.EXP_BPADRESS
                ,t.EXP_ZIP
                ,t.EXP_ADRESS_NOTE
                ,t.DEST_BPADRESS_ID
                ,t.DEST_CITY_ID
                ,t.DEST_BPARTNER_ID
                ,t.DEST_NAME
                ,t.DEST_COUNTRY
                ,t.DEST_REGION
                ,t.DEST_CITY
                ,t.DEST_BPADRESS
                ,t.DEST_ZIP
                ,t.DEST_ADRESS_NOTE
                ,t.PICKEDUP
                ,t.PICKUP_MODE
                ,t.PICKUP_DATE
                ,t.PICKUP_AGENT_ID
                ,pbo_org.get_name_by_id(t.PICKUP_AGENT_ID) PICKUP_AGENT_NAME
                ,t.DELIVERED
                ,t.DELIVERY_MODE
                ,t.DELIVERY_DATE
                ,t.DELIVERY_AGENT_ID
                ,pbo_org.get_name_by_id(t.DELIVERY_AGENT_ID) DELIVERY_AGENT_NAME
                ,t.DELIVERED_TO_NAME
                ,t.DELIVERED_TO_IDENT
                ,t.REJECTED
                ,t.REJECT_DATE
                ,t.REJECT_REASON
                ,t.REJECTED_BY_NAME
                ,t.REJECTED_BY_IDENT
                ,t.PACKAGE_COUNT
                ,t.CONTENT
                ,t.NOTES
                ,t.DECLARED_VALUE
                ,t.INSURED_VALUE
                ,t.REF_PARCEL_ID
                ,t.REF_PARCEL_REFERENCE_TYPE
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,pbo_org.get_name_by_id(t.CUSTODY_ORG_ID) CUSTODY_ORG_NAME
                ,t.CUSTODY_ORG_ID
                ,t.LAST_EVENT_ID
                ,pbo_parcel.get_evnttyp_name_by_evntid(t.LAST_EVENT_ID) LAST_EVENT_NAME
                ,t.REJECT_REASON_CODE
            from TR_PARCEL t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0016.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into TR_PARCEL(
                 CLIENT_ID
                ,CODE
                ,CONTENT
                ,CREATEDBY
                ,CUSTODY_ORG_ID
                ,DECLARED_VALUE
                ,DELIVERED
                ,DELIVERED_TO_IDENT
                ,DELIVERED_TO_NAME
                ,DELIVERY_AGENT_ID
                ,DELIVERY_DATE
                ,DELIVERY_MODE
                ,DEST_ADRESS_NOTE
                ,DEST_BPADRESS
                ,DEST_BPADRESS_ID
                ,DEST_BPARTNER_ID
                ,DEST_CITY
                ,DEST_CITY_ID
                ,DEST_COUNTRY
                ,DEST_NAME
                ,DEST_REGION
                ,DEST_ZIP
                ,EXP_ADRESS_NOTE
                ,EXP_BPADRESS
                ,EXP_BPADRESS_ID
                ,EXP_BPARTNER_ID
                ,EXP_CITY
                ,EXP_CITY_ID
                ,EXP_COUNTRY
                ,EXP_NAME
                ,EXP_REGION
                ,EXP_ZIP
                ,ID
                ,INSURED_VALUE
                ,LAST_EVENT_ID
                ,MODIFIEDBY
                ,NOTES
                ,PACKAGE_COUNT
                ,PICKEDUP
                ,PICKUP_AGENT_ID
                ,PICKUP_DATE
                ,PICKUP_MODE
                ,REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE
                ,REJECTED
                ,REJECTED_BY_IDENT
                ,REJECTED_BY_NAME
                ,REJECT_DATE
                ,REJECT_REASON
                ,REJECT_REASON_CODE
            ) values ( 
                 :CLIENT_ID
                ,:CODE
                ,:CONTENT
                ,:CREATEDBY
                ,:CUSTODY_ORG_ID
                ,:DECLARED_VALUE
                ,:DELIVERED
                ,:DELIVERED_TO_IDENT
                ,:DELIVERED_TO_NAME
                ,:DELIVERY_AGENT_ID
                ,:DELIVERY_DATE
                ,:DELIVERY_MODE
                ,:DEST_ADRESS_NOTE
                ,:DEST_BPADRESS
                ,:DEST_BPADRESS_ID
                ,:DEST_BPARTNER_ID
                ,:DEST_CITY
                ,:DEST_CITY_ID
                ,:DEST_COUNTRY
                ,:DEST_NAME
                ,:DEST_REGION
                ,:DEST_ZIP
                ,:EXP_ADRESS_NOTE
                ,:EXP_BPADRESS
                ,:EXP_BPADRESS_ID
                ,:EXP_BPARTNER_ID
                ,:EXP_CITY
                ,:EXP_CITY_ID
                ,:EXP_COUNTRY
                ,:EXP_NAME
                ,:EXP_REGION
                ,:EXP_ZIP
                ,:ID
                ,:INSURED_VALUE
                ,:LAST_EVENT_ID
                ,:MODIFIEDBY
                ,:NOTES
                ,:PACKAGE_COUNT
                ,:PICKEDUP
                ,:PICKUP_AGENT_ID
                ,:PICKUP_DATE
                ,:PICKUP_MODE
                ,:REF_PARCEL_ID
                ,:REF_PARCEL_REFERENCE_TYPE
                ,:REJECTED
                ,:REJECTED_BY_IDENT
                ,:REJECTED_BY_NAME
                ,:REJECT_DATE
                ,:REJECT_REASON
                ,:REJECT_REASON_CODE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_parcel_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0016.doUpdate().");}
    $sql = "update TR_PARCEL set 
                 ID=:ID
                ,CODE=:CODE
                ,CLIENT_ID=:CLIENT_ID
                ,EXP_BPARTNER_ID=:EXP_BPARTNER_ID
                ,EXP_NAME=:EXP_NAME
                ,EXP_BPADRESS_ID=:EXP_BPADRESS_ID
                ,EXP_BPADRESS=:EXP_BPADRESS
                ,EXP_COUNTRY=:EXP_COUNTRY
                ,EXP_REGION=:EXP_REGION
                ,EXP_CITY=:EXP_CITY
                ,EXP_CITY_ID=:EXP_CITY_ID
                ,EXP_ZIP=:EXP_ZIP
                ,EXP_ADRESS_NOTE=:EXP_ADRESS_NOTE
                ,DEST_BPARTNER_ID=:DEST_BPARTNER_ID
                ,DEST_NAME=:DEST_NAME
                ,DEST_BPADRESS_ID=:DEST_BPADRESS_ID
                ,DEST_BPADRESS=:DEST_BPADRESS
                ,DEST_COUNTRY=:DEST_COUNTRY
                ,DEST_REGION=:DEST_REGION
                ,DEST_CITY=:DEST_CITY
                ,DEST_CITY_ID=:DEST_CITY_ID
                ,DEST_ZIP=:DEST_ZIP
                ,DEST_ADRESS_NOTE=:DEST_ADRESS_NOTE
                ,PICKEDUP=:PICKEDUP
                ,PICKUP_MODE=:PICKUP_MODE
                ,PICKUP_DATE=:PICKUP_DATE
                ,DELIVERED=:DELIVERED
                ,DELIVERY_MODE=:DELIVERY_MODE
                ,DELIVERY_DATE=:DELIVERY_DATE
                ,DELIVERED_TO_NAME=:DELIVERED_TO_NAME
                ,DELIVERED_TO_IDENT=:DELIVERED_TO_IDENT
                ,REJECTED=:REJECTED
                ,REJECT_DATE=:REJECT_DATE
                ,REJECT_REASON=:REJECT_REASON
                ,REJECTED_BY_NAME=:REJECTED_BY_NAME
                ,REJECTED_BY_IDENT=:REJECTED_BY_IDENT
                ,PACKAGE_COUNT=:PACKAGE_COUNT
                ,CONTENT=:CONTENT
                ,NOTES=:NOTES
                ,DECLARED_VALUE=:DECLARED_VALUE
                ,INSURED_VALUE=:INSURED_VALUE
                ,REF_PARCEL_ID=:REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE=:REF_PARCEL_REFERENCE_TYPE
                ,REJECT_REASON_CODE=:REJECT_REASON_CODE
                ,PICKUP_AGENT_ID=:PICKUP_AGENT_ID
                ,DELIVERY_AGENT_ID=:DELIVERY_AGENT_ID
                ,CUSTODY_ORG_ID=:CUSTODY_ORG_ID
                ,LAST_EVENT_ID=:LAST_EVENT_ID
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"],"ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0016.doDelete().");}
    $sql = "delete from TR_PARCEL where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0016");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CODE
                ,t.CONTENT
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CUSTODY_ORG_ID
                ,pbo_org.get_name_by_id(t.CUSTODY_ORG_ID) CUSTODY_ORG_NAME
                ,t.DECLARED_VALUE
                ,t.DELIVERED
                ,t.DELIVERED_TO_IDENT
                ,t.DELIVERED_TO_NAME
                ,t.DELIVERY_AGENT_ID
                ,pbo_org.get_name_by_id(t.DELIVERY_AGENT_ID) DELIVERY_AGENT_NAME
                ,t.DELIVERY_DATE
                ,t.DELIVERY_MODE
                ,t.DEST_ADRESS_NOTE
                ,t.DEST_BPADRESS
                ,t.DEST_BPADRESS_ID
                ,t.DEST_BPARTNER_ID
                ,t.DEST_CITY
                ,t.DEST_CITY_ID
                ,t.DEST_COUNTRY
                ,t.DEST_NAME
                ,t.DEST_REGION
                ,t.DEST_ZIP
                ,t.EXP_ADRESS_NOTE
                ,t.EXP_BPADRESS
                ,t.EXP_BPADRESS_ID
                ,t.EXP_BPARTNER_ID
                ,t.EXP_CITY
                ,t.EXP_CITY_ID
                ,t.EXP_COUNTRY
                ,t.EXP_NAME
                ,t.EXP_REGION
                ,t.EXP_ZIP
                ,t.ID
                ,t.INSURED_VALUE
                ,t.LAST_EVENT_ID
                ,pbo_parcel.get_evnttyp_name_by_evntid(t.LAST_EVENT_ID) LAST_EVENT_NAME
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.PACKAGE_COUNT
                ,t.PICKEDUP
                ,t.PICKUP_AGENT_ID
                ,pbo_org.get_name_by_id(t.PICKUP_AGENT_ID) PICKUP_AGENT_NAME
                ,t.PICKUP_DATE
                ,t.PICKUP_MODE
                ,t.REF_PARCEL_ID
                ,t.REF_PARCEL_REFERENCE_TYPE
                ,t.REJECTED
                ,t.REJECTED_BY_IDENT
                ,t.REJECTED_BY_NAME
                ,t.REJECT_DATE
                ,t.REJECT_REASON
                ,t.REJECT_REASON_CODE
            from TR_PARCEL t
         where 
           t.ID= :ID
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
  "CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CONTENT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CUSTODY_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CUSTODY_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DECLARED_VALUE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DELIVERED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"DELIVERED_TO_IDENT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DELIVERED_TO_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DELIVERY_AGENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DELIVERY_AGENT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DELIVERY_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DELIVERY_MODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_ADRESS_NOTE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_BPADRESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_BPADRESS_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_CITY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_CITY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_COUNTRY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_REGION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_ZIP" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_ADRESS_NOTE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_BPADRESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_BPADRESS_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXP_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXP_CITY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_CITY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXP_COUNTRY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_REGION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_ZIP" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INSURED_VALUE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LAST_EVENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LAST_EVENT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PACKAGE_COUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PICKEDUP" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"PICKUP_AGENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PICKUP_AGENT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PICKUP_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PICKUP_MODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REF_PARCEL_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"REF_PARCEL_REFERENCE_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REJECTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"REJECTED_BY_IDENT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REJECTED_BY_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REJECT_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"REJECT_REASON" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REJECT_REASON_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING",parent::FLDPROP_CASE_RESTRICTION => "Upper")
);
}

}
?>
