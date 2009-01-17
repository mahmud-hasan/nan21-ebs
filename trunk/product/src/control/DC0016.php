<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0016 Controller: Parcel masterdata
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0016 extends Controller {


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
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_EXP_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_BPARTNER_ID like :EXP_BPARTNER_ID";
      $params["EXP_BPARTNER_ID"] = $_REQUEST["QRY_EXP_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_EXP_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_NAME like :EXP_NAME";
      $params["EXP_NAME"] = $_REQUEST["QRY_EXP_NAME"];
    }
    if (!empty($_REQUEST["QRY_EXP_BPADRESS_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_BPADRESS_ID like :EXP_BPADRESS_ID";
      $params["EXP_BPADRESS_ID"] = $_REQUEST["QRY_EXP_BPADRESS_ID"];
    }
    if (!empty($_REQUEST["QRY_EXP_BPADRESS"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_BPADRESS like :EXP_BPADRESS";
      $params["EXP_BPADRESS"] = $_REQUEST["QRY_EXP_BPADRESS"];
    }
    if (!empty($_REQUEST["QRY_EXP_COUNTRY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_COUNTRY like :EXP_COUNTRY";
      $params["EXP_COUNTRY"] = $_REQUEST["QRY_EXP_COUNTRY"];
    }
    if (!empty($_REQUEST["QRY_EXP_REGION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_REGION like :EXP_REGION";
      $params["EXP_REGION"] = $_REQUEST["QRY_EXP_REGION"];
    }
    if (!empty($_REQUEST["QRY_EXP_CITY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_CITY like :EXP_CITY";
      $params["EXP_CITY"] = $_REQUEST["QRY_EXP_CITY"];
    }
    if (!empty($_REQUEST["QRY_EXP_CITY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "EXP_CITY_ID like :EXP_CITY_ID";
      $params["EXP_CITY_ID"] = $_REQUEST["QRY_EXP_CITY_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_BPARTNER_ID like :DEST_BPARTNER_ID";
      $params["DEST_BPARTNER_ID"] = $_REQUEST["QRY_DEST_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_NAME like :DEST_NAME";
      $params["DEST_NAME"] = $_REQUEST["QRY_DEST_NAME"];
    }
    if (!empty($_REQUEST["QRY_DEST_BPADRESS_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_BPADRESS_ID like :DEST_BPADRESS_ID";
      $params["DEST_BPADRESS_ID"] = $_REQUEST["QRY_DEST_BPADRESS_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_COUNTRY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_COUNTRY like :DEST_COUNTRY";
      $params["DEST_COUNTRY"] = $_REQUEST["QRY_DEST_COUNTRY"];
    }
    if (!empty($_REQUEST["QRY_DEST_REGION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_REGION like :DEST_REGION";
      $params["DEST_REGION"] = $_REQUEST["QRY_DEST_REGION"];
    }
    if (!empty($_REQUEST["QRY_DEST_CITY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_CITY like :DEST_CITY";
      $params["DEST_CITY"] = $_REQUEST["QRY_DEST_CITY"];
    }
    if (!empty($_REQUEST["QRY_DEST_CITY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DEST_CITY_ID like :DEST_CITY_ID";
      $params["DEST_CITY_ID"] = $_REQUEST["QRY_DEST_CITY_ID"];
    }
    if (!empty($_REQUEST["QRY_PICKUP_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PICKUP_DATE like :PICKUP_DATE";
      $params["PICKUP_DATE"] = $_REQUEST["QRY_PICKUP_DATE"];
    }
    if (!empty($_REQUEST["QRY_PICKUP_AGENT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PICKUP_AGENT_CODE like :PICKUP_AGENT_CODE";
      $params["PICKUP_AGENT_CODE"] = $_REQUEST["QRY_PICKUP_AGENT_CODE"];
    }
    if (!empty($_REQUEST["QRY_DELIVERED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DELIVERED like :DELIVERED";
      $params["DELIVERED"] = $_REQUEST["QRY_DELIVERED"];
    }
    if (!empty($_REQUEST["QRY_DELIVERY_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DELIVERY_DATE like :DELIVERY_DATE";
      $params["DELIVERY_DATE"] = $_REQUEST["QRY_DELIVERY_DATE"];
    }
    if (!empty($_REQUEST["QRY_DELIVERY_AGENT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DELIVERY_AGENT_CODE like :DELIVERY_AGENT_CODE";
      $params["DELIVERY_AGENT_CODE"] = $_REQUEST["QRY_DELIVERY_AGENT_CODE"];
    }
    if (!empty($_REQUEST["QRY_REJECTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "REJECTED like :REJECTED";
      $params["REJECTED"] = $_REQUEST["QRY_REJECTED"];
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
                ,CLIENT_ID
                ,EXP_BPARTNER_ID
                ,EXP_NAME
                ,EXP_BPADRESS_ID
                ,EXP_BPADRESS
                ,EXP_COUNTRY
                ,EXP_REGION
                ,EXP_CITY
                ,EXP_CITY_ID
                ,EXP_ZIP
                ,EXP_ADRESS_NOTE
                ,DEST_BPARTNER_ID
                ,DEST_NAME
                ,DEST_BPADRESS_ID
                ,DEST_BPADRESS
                ,DEST_COUNTRY
                ,DEST_REGION
                ,DEST_CITY
                ,DEST_CITY_ID
                ,DEST_ZIP
                ,DEST_ADRESS_NOTE
                ,PICKEDUP
                ,PICKUP_MODE
                ,PICKUP_DATE
                ,PICKUP_AGENT_CODE
                ,DELIVERED
                ,DELIVERY_MODE
                ,DELIVERY_DATE
                ,DELIVERY_AGENT_CODE
                ,DELIVERED_TO_NAME
                ,DELIVERED_TO_IDENT
                ,REJECTED
                ,REJECT_DATE
                ,REJECT_REASON
                ,REJECTED_BY_NAME
                ,REJECTED_BY_IDENT
                ,PACKAGE_COUNT
                ,CONTENT
                ,NOTES
                ,DECLARED_VALUE
                ,INSURED_VALUE
                ,REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,(select code from client where id = client_id) CLIENT_NAME
            from PARCEL  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"CODE"
      ,"CLIENT_ID"
      ,"EXP_BPARTNER_ID"
      ,"EXP_NAME"
      ,"EXP_BPADRESS_ID"
      ,"EXP_BPADRESS"
      ,"EXP_COUNTRY"
      ,"EXP_REGION"
      ,"EXP_CITY"
      ,"EXP_CITY_ID"
      ,"EXP_ZIP"
      ,"EXP_ADRESS_NOTE"
      ,"DEST_BPARTNER_ID"
      ,"DEST_NAME"
      ,"DEST_BPADRESS_ID"
      ,"DEST_BPADRESS"
      ,"DEST_COUNTRY"
      ,"DEST_REGION"
      ,"DEST_CITY"
      ,"DEST_CITY_ID"
      ,"DEST_ZIP"
      ,"DEST_ADRESS_NOTE"
      ,"PICKEDUP"
      ,"PICKUP_MODE"
      ,"PICKUP_DATE"
      ,"PICKUP_AGENT_CODE"
      ,"DELIVERED"
      ,"DELIVERY_MODE"
      ,"DELIVERY_DATE"
      ,"DELIVERY_AGENT_CODE"
      ,"DELIVERED_TO_NAME"
      ,"DELIVERED_TO_IDENT"
      ,"REJECTED"
      ,"REJECT_DATE"
      ,"REJECT_REASON"
      ,"REJECTED_BY_NAME"
      ,"REJECTED_BY_IDENT"
      ,"PACKAGE_COUNT"
      ,"CONTENT"
      ,"NOTES"
      ,"DECLARED_VALUE"
      ,"INSURED_VALUE"
      ,"REF_PARCEL_ID"
      ,"REF_PARCEL_REFERENCE_TYPE"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"CLIENT_NAME"
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
                ,(select code from client where id = client_id) CLIENT_NAME
                ,CLIENT_ID
                ,CODE
                ,EXP_CITY_ID
                ,EXP_BPARTNER_ID
                ,EXP_BPADRESS_ID
                ,EXP_NAME
                ,EXP_COUNTRY
                ,EXP_REGION
                ,EXP_CITY
                ,EXP_BPADRESS
                ,EXP_ZIP
                ,EXP_ADRESS_NOTE
                ,DEST_BPADRESS_ID
                ,DEST_CITY_ID
                ,DEST_BPARTNER_ID
                ,DEST_NAME
                ,DEST_COUNTRY
                ,DEST_REGION
                ,DEST_CITY
                ,DEST_BPADRESS
                ,DEST_ZIP
                ,DEST_ADRESS_NOTE
                ,PICKEDUP
                ,PICKUP_MODE
                ,PICKUP_DATE
                ,PICKUP_AGENT_CODE
                ,DELIVERED
                ,DELIVERY_MODE
                ,DELIVERY_DATE
                ,DELIVERY_AGENT_CODE
                ,DELIVERED_TO_NAME
                ,DELIVERED_TO_IDENT
                ,REJECTED
                ,REJECT_DATE
                ,REJECT_REASON
                ,REJECTED_BY_NAME
                ,REJECTED_BY_IDENT
                ,PACKAGE_COUNT
                ,CONTENT
                ,NOTES
                ,DECLARED_VALUE
                ,INSURED_VALUE
                ,REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from PARCEL  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_NAME"
     ,"CLIENT_ID"
     ,"CODE"
     ,"EXP_CITY_ID"
     ,"EXP_BPARTNER_ID"
     ,"EXP_BPADRESS_ID"
     ,"EXP_NAME"
     ,"EXP_COUNTRY"
     ,"EXP_REGION"
     ,"EXP_CITY"
     ,"EXP_BPADRESS"
     ,"EXP_ZIP"
     ,"EXP_ADRESS_NOTE"
     ,"DEST_BPADRESS_ID"
     ,"DEST_CITY_ID"
     ,"DEST_BPARTNER_ID"
     ,"DEST_NAME"
     ,"DEST_COUNTRY"
     ,"DEST_REGION"
     ,"DEST_CITY"
     ,"DEST_BPADRESS"
     ,"DEST_ZIP"
     ,"DEST_ADRESS_NOTE"
     ,"PICKEDUP"
     ,"PICKUP_MODE"
     ,"PICKUP_DATE"
     ,"PICKUP_AGENT_CODE"
     ,"DELIVERED"
     ,"DELIVERY_MODE"
     ,"DELIVERY_DATE"
     ,"DELIVERY_AGENT_CODE"
     ,"DELIVERED_TO_NAME"
     ,"DELIVERED_TO_IDENT"
     ,"REJECTED"
     ,"REJECT_DATE"
     ,"REJECT_REASON"
     ,"REJECTED_BY_NAME"
     ,"REJECTED_BY_IDENT"
     ,"PACKAGE_COUNT"
     ,"CONTENT"
     ,"NOTES"
     ,"DECLARED_VALUE"
     ,"INSURED_VALUE"
     ,"REF_PARCEL_ID"
     ,"REF_PARCEL_REFERENCE_TYPE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0016.fetchRecord().");}
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
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CONTENT"] = $this->getRequestParam("CONTENT");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DECLARED_VALUE"] = $this->getRequestParam("DECLARED_VALUE");
    $RECORD["DELIVERED"] = $this->getRequestParamBoolean("DELIVERED");
    $RECORD["DELIVERED_TO_IDENT"] = $this->getRequestParam("DELIVERED_TO_IDENT");
    $RECORD["DELIVERED_TO_NAME"] = $this->getRequestParam("DELIVERED_TO_NAME");
    $RECORD["DELIVERY_AGENT_CODE"] = $this->getRequestParam("DELIVERY_AGENT_CODE");
    $RECORD["DELIVERY_DATE"] = $this->getRequestParam("DELIVERY_DATE");
    $RECORD["DELIVERY_MODE"] = $this->getRequestParam("DELIVERY_MODE");
    $RECORD["DEST_ADRESS_NOTE"] = $this->getRequestParam("DEST_ADRESS_NOTE");
    $RECORD["DEST_BPADRESS"] = $this->getRequestParam("DEST_BPADRESS");
    $RECORD["DEST_BPADRESS_ID"] = $this->getRequestParam("DEST_BPADRESS_ID");
    $RECORD["DEST_BPARTNER_ID"] = $this->getRequestParam("DEST_BPARTNER_ID");
    $RECORD["DEST_CITY"] = $this->getRequestParam("DEST_CITY");
    $RECORD["DEST_CITY_ID"] = $this->getRequestParam("DEST_CITY_ID");
    $RECORD["DEST_COUNTRY"] = $this->getRequestParam("DEST_COUNTRY");
    $RECORD["DEST_NAME"] = $this->getRequestParam("DEST_NAME");
    $RECORD["DEST_REGION"] = $this->getRequestParam("DEST_REGION");
    $RECORD["DEST_ZIP"] = $this->getRequestParam("DEST_ZIP");
    $RECORD["EXP_ADRESS_NOTE"] = $this->getRequestParam("EXP_ADRESS_NOTE");
    $RECORD["EXP_BPADRESS"] = $this->getRequestParam("EXP_BPADRESS");
    $RECORD["EXP_BPADRESS_ID"] = $this->getRequestParam("EXP_BPADRESS_ID");
    $RECORD["EXP_BPARTNER_ID"] = $this->getRequestParam("EXP_BPARTNER_ID");
    $RECORD["EXP_CITY"] = $this->getRequestParam("EXP_CITY");
    $RECORD["EXP_CITY_ID"] = $this->getRequestParam("EXP_CITY_ID");
    $RECORD["EXP_COUNTRY"] = $this->getRequestParam("EXP_COUNTRY");
    $RECORD["EXP_NAME"] = $this->getRequestParam("EXP_NAME");
    $RECORD["EXP_REGION"] = $this->getRequestParam("EXP_REGION");
    $RECORD["EXP_ZIP"] = $this->getRequestParam("EXP_ZIP");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSURED_VALUE"] = $this->getRequestParam("INSURED_VALUE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PACKAGE_COUNT"] = $this->getRequestParam("PACKAGE_COUNT");
    $RECORD["PICKEDUP"] = $this->getRequestParamBoolean("PICKEDUP");
    $RECORD["PICKUP_AGENT_CODE"] = $this->getRequestParam("PICKUP_AGENT_CODE");
    $RECORD["PICKUP_DATE"] = $this->getRequestParam("PICKUP_DATE");
    $RECORD["PICKUP_MODE"] = $this->getRequestParam("PICKUP_MODE");
    $RECORD["REF_PARCEL_ID"] = $this->getRequestParam("REF_PARCEL_ID");
    $RECORD["REF_PARCEL_REFERENCE_TYPE"] = $this->getRequestParam("REF_PARCEL_REFERENCE_TYPE");
    $RECORD["REJECTED"] = $this->getRequestParamBoolean("REJECTED");
    $RECORD["REJECTED_BY_IDENT"] = $this->getRequestParam("REJECTED_BY_IDENT");
    $RECORD["REJECTED_BY_NAME"] = $this->getRequestParam("REJECTED_BY_NAME");
    $RECORD["REJECT_DATE"] = $this->getRequestParam("REJECT_DATE");
    $RECORD["REJECT_REASON"] = $this->getRequestParam("REJECT_REASON");
    $sql = "insert into PARCEL(
                 ID
                ,CODE
                ,CLIENT_ID
                ,EXP_BPARTNER_ID
                ,EXP_NAME
                ,EXP_BPADRESS_ID
                ,EXP_BPADRESS
                ,EXP_COUNTRY
                ,EXP_REGION
                ,EXP_CITY
                ,EXP_CITY_ID
                ,EXP_ZIP
                ,EXP_ADRESS_NOTE
                ,DEST_BPARTNER_ID
                ,DEST_NAME
                ,DEST_BPADRESS_ID
                ,DEST_BPADRESS
                ,DEST_COUNTRY
                ,DEST_REGION
                ,DEST_CITY
                ,DEST_CITY_ID
                ,DEST_ZIP
                ,DEST_ADRESS_NOTE
                ,PICKEDUP
                ,PICKUP_MODE
                ,PICKUP_DATE
                ,PICKUP_AGENT_CODE
                ,DELIVERED
                ,DELIVERY_MODE
                ,DELIVERY_DATE
                ,DELIVERY_AGENT_CODE
                ,DELIVERED_TO_NAME
                ,DELIVERED_TO_IDENT
                ,REJECTED
                ,REJECT_DATE
                ,REJECT_REASON
                ,REJECTED_BY_NAME
                ,REJECTED_BY_IDENT
                ,PACKAGE_COUNT
                ,CONTENT
                ,NOTES
                ,DECLARED_VALUE
                ,INSURED_VALUE
                ,REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE
                ,CREATEDBY
                ,MODIFIEDBY
            ) values ( 
                 :ID
                ,:CODE
                ,:CLIENT_ID
                ,:EXP_BPARTNER_ID
                ,:EXP_NAME
                ,:EXP_BPADRESS_ID
                ,:EXP_BPADRESS
                ,:EXP_COUNTRY
                ,:EXP_REGION
                ,:EXP_CITY
                ,:EXP_CITY_ID
                ,:EXP_ZIP
                ,:EXP_ADRESS_NOTE
                ,:DEST_BPARTNER_ID
                ,:DEST_NAME
                ,:DEST_BPADRESS_ID
                ,:DEST_BPADRESS
                ,:DEST_COUNTRY
                ,:DEST_REGION
                ,:DEST_CITY
                ,:DEST_CITY_ID
                ,:DEST_ZIP
                ,:DEST_ADRESS_NOTE
                ,:PICKEDUP
                ,:PICKUP_MODE
                ,:PICKUP_DATE
                ,:PICKUP_AGENT_CODE
                ,:DELIVERED
                ,:DELIVERY_MODE
                ,:DELIVERY_DATE
                ,:DELIVERY_AGENT_CODE
                ,:DELIVERED_TO_NAME
                ,:DELIVERED_TO_IDENT
                ,:REJECTED
                ,:REJECT_DATE
                ,:REJECT_REASON
                ,:REJECTED_BY_NAME
                ,:REJECTED_BY_IDENT
                ,:PACKAGE_COUNT
                ,:CONTENT
                ,:NOTES
                ,:DECLARED_VALUE
                ,:INSURED_VALUE
                ,:REF_PARCEL_ID
                ,:REF_PARCEL_REFERENCE_TYPE
                ,:CREATEDBY
                ,:MODIFIEDBY
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_parcel_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CONTENT"] = $this->getRequestParam("CONTENT");
    $RECORD["DECLARED_VALUE"] = $this->getRequestParam("DECLARED_VALUE");
    $RECORD["DELIVERED"] = $this->getRequestParamBoolean("DELIVERED");
    $RECORD["DELIVERED_TO_IDENT"] = $this->getRequestParam("DELIVERED_TO_IDENT");
    $RECORD["DELIVERED_TO_NAME"] = $this->getRequestParam("DELIVERED_TO_NAME");
    $RECORD["DELIVERY_AGENT_CODE"] = $this->getRequestParam("DELIVERY_AGENT_CODE");
    $RECORD["DELIVERY_DATE"] = $this->getRequestParam("DELIVERY_DATE");
    $RECORD["DELIVERY_MODE"] = $this->getRequestParam("DELIVERY_MODE");
    $RECORD["DEST_ADRESS_NOTE"] = $this->getRequestParam("DEST_ADRESS_NOTE");
    $RECORD["DEST_BPADRESS"] = $this->getRequestParam("DEST_BPADRESS");
    $RECORD["DEST_BPADRESS_ID"] = $this->getRequestParam("DEST_BPADRESS_ID");
    $RECORD["DEST_BPARTNER_ID"] = $this->getRequestParam("DEST_BPARTNER_ID");
    $RECORD["DEST_CITY"] = $this->getRequestParam("DEST_CITY");
    $RECORD["DEST_CITY_ID"] = $this->getRequestParam("DEST_CITY_ID");
    $RECORD["DEST_COUNTRY"] = $this->getRequestParam("DEST_COUNTRY");
    $RECORD["DEST_NAME"] = $this->getRequestParam("DEST_NAME");
    $RECORD["DEST_REGION"] = $this->getRequestParam("DEST_REGION");
    $RECORD["DEST_ZIP"] = $this->getRequestParam("DEST_ZIP");
    $RECORD["EXP_ADRESS_NOTE"] = $this->getRequestParam("EXP_ADRESS_NOTE");
    $RECORD["EXP_BPADRESS"] = $this->getRequestParam("EXP_BPADRESS");
    $RECORD["EXP_BPADRESS_ID"] = $this->getRequestParam("EXP_BPADRESS_ID");
    $RECORD["EXP_BPARTNER_ID"] = $this->getRequestParam("EXP_BPARTNER_ID");
    $RECORD["EXP_CITY"] = $this->getRequestParam("EXP_CITY");
    $RECORD["EXP_CITY_ID"] = $this->getRequestParam("EXP_CITY_ID");
    $RECORD["EXP_COUNTRY"] = $this->getRequestParam("EXP_COUNTRY");
    $RECORD["EXP_NAME"] = $this->getRequestParam("EXP_NAME");
    $RECORD["EXP_REGION"] = $this->getRequestParam("EXP_REGION");
    $RECORD["EXP_ZIP"] = $this->getRequestParam("EXP_ZIP");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSURED_VALUE"] = $this->getRequestParam("INSURED_VALUE");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PACKAGE_COUNT"] = $this->getRequestParam("PACKAGE_COUNT");
    $RECORD["PICKEDUP"] = $this->getRequestParamBoolean("PICKEDUP");
    $RECORD["PICKUP_AGENT_CODE"] = $this->getRequestParam("PICKUP_AGENT_CODE");
    $RECORD["PICKUP_DATE"] = $this->getRequestParam("PICKUP_DATE");
    $RECORD["PICKUP_MODE"] = $this->getRequestParam("PICKUP_MODE");
    $RECORD["REF_PARCEL_ID"] = $this->getRequestParam("REF_PARCEL_ID");
    $RECORD["REF_PARCEL_REFERENCE_TYPE"] = $this->getRequestParam("REF_PARCEL_REFERENCE_TYPE");
    $RECORD["REJECTED"] = $this->getRequestParamBoolean("REJECTED");
    $RECORD["REJECTED_BY_IDENT"] = $this->getRequestParam("REJECTED_BY_IDENT");
    $RECORD["REJECTED_BY_NAME"] = $this->getRequestParam("REJECTED_BY_NAME");
    $RECORD["REJECT_DATE"] = $this->getRequestParam("REJECT_DATE");
    $RECORD["REJECT_REASON"] = $this->getRequestParam("REJECT_REASON");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0016.doUpdate().");}
    $sql = "update PARCEL set 
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
                ,PICKUP_AGENT_CODE=:PICKUP_AGENT_CODE
                ,DELIVERED=:DELIVERED
                ,DELIVERY_MODE=:DELIVERY_MODE
                ,DELIVERY_DATE=:DELIVERY_DATE
                ,DELIVERY_AGENT_CODE=:DELIVERY_AGENT_CODE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0016.doDelete().");}
    $sql = "delete from PARCEL where 
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
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CONTENT"] = $this->getRequestParam("CONTENT");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DECLARED_VALUE"] = $this->getRequestParam("DECLARED_VALUE");
    $RECORD["DELIVERED"] = $this->getRequestParam("DELIVERED");
    $RECORD["DELIVERED_TO_IDENT"] = $this->getRequestParam("DELIVERED_TO_IDENT");
    $RECORD["DELIVERED_TO_NAME"] = $this->getRequestParam("DELIVERED_TO_NAME");
    $RECORD["DELIVERY_AGENT_CODE"] = $this->getRequestParam("DELIVERY_AGENT_CODE");
    $RECORD["DELIVERY_DATE"] = $this->getRequestParam("DELIVERY_DATE");
    $RECORD["DELIVERY_MODE"] = $this->getRequestParam("DELIVERY_MODE");
    $RECORD["DEST_ADRESS_NOTE"] = $this->getRequestParam("DEST_ADRESS_NOTE");
    $RECORD["DEST_BPADRESS"] = $this->getRequestParam("DEST_BPADRESS");
    $RECORD["DEST_BPADRESS_ID"] = $this->getRequestParam("DEST_BPADRESS_ID");
    $RECORD["DEST_BPARTNER_ID"] = $this->getRequestParam("DEST_BPARTNER_ID");
    $RECORD["DEST_CITY"] = $this->getRequestParam("DEST_CITY");
    $RECORD["DEST_CITY_ID"] = $this->getRequestParam("DEST_CITY_ID");
    $RECORD["DEST_COUNTRY"] = $this->getRequestParam("DEST_COUNTRY");
    $RECORD["DEST_NAME"] = $this->getRequestParam("DEST_NAME");
    $RECORD["DEST_REGION"] = $this->getRequestParam("DEST_REGION");
    $RECORD["DEST_ZIP"] = $this->getRequestParam("DEST_ZIP");
    $RECORD["EXP_ADRESS_NOTE"] = $this->getRequestParam("EXP_ADRESS_NOTE");
    $RECORD["EXP_BPADRESS"] = $this->getRequestParam("EXP_BPADRESS");
    $RECORD["EXP_BPADRESS_ID"] = $this->getRequestParam("EXP_BPADRESS_ID");
    $RECORD["EXP_BPARTNER_ID"] = $this->getRequestParam("EXP_BPARTNER_ID");
    $RECORD["EXP_CITY"] = $this->getRequestParam("EXP_CITY");
    $RECORD["EXP_CITY_ID"] = $this->getRequestParam("EXP_CITY_ID");
    $RECORD["EXP_COUNTRY"] = $this->getRequestParam("EXP_COUNTRY");
    $RECORD["EXP_NAME"] = $this->getRequestParam("EXP_NAME");
    $RECORD["EXP_REGION"] = $this->getRequestParam("EXP_REGION");
    $RECORD["EXP_ZIP"] = $this->getRequestParam("EXP_ZIP");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INSURED_VALUE"] = $this->getRequestParam("INSURED_VALUE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PACKAGE_COUNT"] = $this->getRequestParam("PACKAGE_COUNT");
    $RECORD["PICKEDUP"] = $this->getRequestParam("PICKEDUP");
    $RECORD["PICKUP_AGENT_CODE"] = $this->getRequestParam("PICKUP_AGENT_CODE");
    $RECORD["PICKUP_DATE"] = $this->getRequestParam("PICKUP_DATE");
    $RECORD["PICKUP_MODE"] = $this->getRequestParam("PICKUP_MODE");
    $RECORD["REF_PARCEL_ID"] = $this->getRequestParam("REF_PARCEL_ID");
    $RECORD["REF_PARCEL_REFERENCE_TYPE"] = $this->getRequestParam("REF_PARCEL_REFERENCE_TYPE");
    $RECORD["REJECTED"] = $this->getRequestParam("REJECTED");
    $RECORD["REJECTED_BY_IDENT"] = $this->getRequestParam("REJECTED_BY_IDENT");
    $RECORD["REJECTED_BY_NAME"] = $this->getRequestParam("REJECTED_BY_NAME");
    $RECORD["REJECT_DATE"] = $this->getRequestParam("REJECT_DATE");
    $RECORD["REJECT_REASON"] = $this->getRequestParam("REJECT_REASON");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0016");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ID
                ,CODE
                ,CLIENT_ID
                ,EXP_BPARTNER_ID
                ,EXP_NAME
                ,EXP_BPADRESS_ID
                ,EXP_BPADRESS
                ,EXP_COUNTRY
                ,EXP_REGION
                ,EXP_CITY
                ,EXP_CITY_ID
                ,EXP_ZIP
                ,EXP_ADRESS_NOTE
                ,DEST_BPARTNER_ID
                ,DEST_NAME
                ,DEST_BPADRESS_ID
                ,DEST_BPADRESS
                ,DEST_COUNTRY
                ,DEST_REGION
                ,DEST_CITY
                ,DEST_CITY_ID
                ,DEST_ZIP
                ,DEST_ADRESS_NOTE
                ,PICKEDUP
                ,PICKUP_MODE
                ,PICKUP_DATE
                ,PICKUP_AGENT_CODE
                ,DELIVERED
                ,DELIVERY_MODE
                ,DELIVERY_DATE
                ,DELIVERY_AGENT_CODE
                ,DELIVERED_TO_NAME
                ,DELIVERED_TO_IDENT
                ,REJECTED
                ,REJECT_DATE
                ,REJECT_REASON
                ,REJECTED_BY_NAME
                ,REJECTED_BY_IDENT
                ,PACKAGE_COUNT
                ,CONTENT
                ,NOTES
                ,DECLARED_VALUE
                ,INSURED_VALUE
                ,REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,(select code from client where id = client_id) CLIENT_NAME
            from PARCEL 
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
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"EXP_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"EXP_NAME" => array("DATA_TYPE" => "STRING")
  ,"EXP_BPADRESS_ID" => array("DATA_TYPE" => "NUMBER")
  ,"EXP_BPADRESS" => array("DATA_TYPE" => "STRING")
  ,"EXP_COUNTRY" => array("DATA_TYPE" => "STRING")
  ,"EXP_REGION" => array("DATA_TYPE" => "STRING")
  ,"EXP_CITY" => array("DATA_TYPE" => "STRING")
  ,"EXP_CITY_ID" => array("DATA_TYPE" => "NUMBER")
  ,"EXP_ZIP" => array("DATA_TYPE" => "STRING")
  ,"EXP_ADRESS_NOTE" => array("DATA_TYPE" => "STRING")
  ,"DEST_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"DEST_NAME" => array("DATA_TYPE" => "STRING")
  ,"DEST_BPADRESS_ID" => array("DATA_TYPE" => "NUMBER")
  ,"DEST_BPADRESS" => array("DATA_TYPE" => "STRING")
  ,"DEST_COUNTRY" => array("DATA_TYPE" => "STRING")
  ,"DEST_REGION" => array("DATA_TYPE" => "STRING")
  ,"DEST_CITY" => array("DATA_TYPE" => "STRING")
  ,"DEST_CITY_ID" => array("DATA_TYPE" => "NUMBER")
  ,"DEST_ZIP" => array("DATA_TYPE" => "STRING")
  ,"DEST_ADRESS_NOTE" => array("DATA_TYPE" => "STRING")
  ,"PICKEDUP" => array("DATA_TYPE" => "BOOLEAN")
  ,"PICKUP_MODE" => array("DATA_TYPE" => "STRING")
  ,"PICKUP_DATE" => array("DATA_TYPE" => "DATE")
  ,"PICKUP_AGENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"DELIVERED" => array("DATA_TYPE" => "BOOLEAN")
  ,"DELIVERY_MODE" => array("DATA_TYPE" => "STRING")
  ,"DELIVERY_DATE" => array("DATA_TYPE" => "DATE")
  ,"DELIVERY_AGENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"DELIVERED_TO_NAME" => array("DATA_TYPE" => "STRING")
  ,"DELIVERED_TO_IDENT" => array("DATA_TYPE" => "STRING")
  ,"REJECTED" => array("DATA_TYPE" => "BOOLEAN")
  ,"REJECT_DATE" => array("DATA_TYPE" => "DATE")
  ,"REJECT_REASON" => array("DATA_TYPE" => "STRING")
  ,"REJECTED_BY_NAME" => array("DATA_TYPE" => "STRING")
  ,"REJECTED_BY_IDENT" => array("DATA_TYPE" => "STRING")
  ,"PACKAGE_COUNT" => array("DATA_TYPE" => "NUMBER")
  ,"CONTENT" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"DECLARED_VALUE" => array("DATA_TYPE" => "NUMBER")
  ,"INSURED_VALUE" => array("DATA_TYPE" => "NUMBER")
  ,"REF_PARCEL_ID" => array("DATA_TYPE" => "NUMBER")
  ,"REF_PARCEL_REFERENCE_TYPE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CONTENT"] )) { $RECORD["CONTENT"] = $this->getRequestParam("CONTENT"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DECLARED_VALUE"] )) { $RECORD["DECLARED_VALUE"] = $this->getRequestParam("DECLARED_VALUE"); }
    $RECORD["DELIVERED"] = $this->getRequestParamBoolean("DELIVERED");
     if (isset($_REQUEST["DELIVERED_TO_IDENT"] )) { $RECORD["DELIVERED_TO_IDENT"] = $this->getRequestParam("DELIVERED_TO_IDENT"); }
     if (isset($_REQUEST["DELIVERED_TO_NAME"] )) { $RECORD["DELIVERED_TO_NAME"] = $this->getRequestParam("DELIVERED_TO_NAME"); }
     if (isset($_REQUEST["DELIVERY_AGENT_CODE"] )) { $RECORD["DELIVERY_AGENT_CODE"] = $this->getRequestParam("DELIVERY_AGENT_CODE"); }
     if (isset($_REQUEST["DELIVERY_DATE"] )) { $RECORD["DELIVERY_DATE"] = $this->getRequestParam("DELIVERY_DATE"); }
     if (isset($_REQUEST["DELIVERY_MODE"] )) { $RECORD["DELIVERY_MODE"] = $this->getRequestParam("DELIVERY_MODE"); }
     if (isset($_REQUEST["DEST_ADRESS_NOTE"] )) { $RECORD["DEST_ADRESS_NOTE"] = $this->getRequestParam("DEST_ADRESS_NOTE"); }
     if (isset($_REQUEST["DEST_BPADRESS"] )) { $RECORD["DEST_BPADRESS"] = $this->getRequestParam("DEST_BPADRESS"); }
     if (isset($_REQUEST["DEST_BPADRESS_ID"] )) { $RECORD["DEST_BPADRESS_ID"] = $this->getRequestParam("DEST_BPADRESS_ID"); }
     if (isset($_REQUEST["DEST_BPARTNER_ID"] )) { $RECORD["DEST_BPARTNER_ID"] = $this->getRequestParam("DEST_BPARTNER_ID"); }
     if (isset($_REQUEST["DEST_CITY"] )) { $RECORD["DEST_CITY"] = $this->getRequestParam("DEST_CITY"); }
     if (isset($_REQUEST["DEST_CITY_ID"] )) { $RECORD["DEST_CITY_ID"] = $this->getRequestParam("DEST_CITY_ID"); }
     if (isset($_REQUEST["DEST_COUNTRY"] )) { $RECORD["DEST_COUNTRY"] = $this->getRequestParam("DEST_COUNTRY"); }
     if (isset($_REQUEST["DEST_NAME"] )) { $RECORD["DEST_NAME"] = $this->getRequestParam("DEST_NAME"); }
     if (isset($_REQUEST["DEST_REGION"] )) { $RECORD["DEST_REGION"] = $this->getRequestParam("DEST_REGION"); }
     if (isset($_REQUEST["DEST_ZIP"] )) { $RECORD["DEST_ZIP"] = $this->getRequestParam("DEST_ZIP"); }
     if (isset($_REQUEST["EXP_ADRESS_NOTE"] )) { $RECORD["EXP_ADRESS_NOTE"] = $this->getRequestParam("EXP_ADRESS_NOTE"); }
     if (isset($_REQUEST["EXP_BPADRESS"] )) { $RECORD["EXP_BPADRESS"] = $this->getRequestParam("EXP_BPADRESS"); }
     if (isset($_REQUEST["EXP_BPADRESS_ID"] )) { $RECORD["EXP_BPADRESS_ID"] = $this->getRequestParam("EXP_BPADRESS_ID"); }
     if (isset($_REQUEST["EXP_BPARTNER_ID"] )) { $RECORD["EXP_BPARTNER_ID"] = $this->getRequestParam("EXP_BPARTNER_ID"); }
     if (isset($_REQUEST["EXP_CITY"] )) { $RECORD["EXP_CITY"] = $this->getRequestParam("EXP_CITY"); }
     if (isset($_REQUEST["EXP_CITY_ID"] )) { $RECORD["EXP_CITY_ID"] = $this->getRequestParam("EXP_CITY_ID"); }
     if (isset($_REQUEST["EXP_COUNTRY"] )) { $RECORD["EXP_COUNTRY"] = $this->getRequestParam("EXP_COUNTRY"); }
     if (isset($_REQUEST["EXP_NAME"] )) { $RECORD["EXP_NAME"] = $this->getRequestParam("EXP_NAME"); }
     if (isset($_REQUEST["EXP_REGION"] )) { $RECORD["EXP_REGION"] = $this->getRequestParam("EXP_REGION"); }
     if (isset($_REQUEST["EXP_ZIP"] )) { $RECORD["EXP_ZIP"] = $this->getRequestParam("EXP_ZIP"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["INSURED_VALUE"] )) { $RECORD["INSURED_VALUE"] = $this->getRequestParam("INSURED_VALUE"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PACKAGE_COUNT"] )) { $RECORD["PACKAGE_COUNT"] = $this->getRequestParam("PACKAGE_COUNT"); }
    $RECORD["PICKEDUP"] = $this->getRequestParamBoolean("PICKEDUP");
     if (isset($_REQUEST["PICKUP_AGENT_CODE"] )) { $RECORD["PICKUP_AGENT_CODE"] = $this->getRequestParam("PICKUP_AGENT_CODE"); }
     if (isset($_REQUEST["PICKUP_DATE"] )) { $RECORD["PICKUP_DATE"] = $this->getRequestParam("PICKUP_DATE"); }
     if (isset($_REQUEST["PICKUP_MODE"] )) { $RECORD["PICKUP_MODE"] = $this->getRequestParam("PICKUP_MODE"); }
     if (isset($_REQUEST["REF_PARCEL_ID"] )) { $RECORD["REF_PARCEL_ID"] = $this->getRequestParam("REF_PARCEL_ID"); }
     if (isset($_REQUEST["REF_PARCEL_REFERENCE_TYPE"] )) { $RECORD["REF_PARCEL_REFERENCE_TYPE"] = $this->getRequestParam("REF_PARCEL_REFERENCE_TYPE"); }
    $RECORD["REJECTED"] = $this->getRequestParamBoolean("REJECTED");
     if (isset($_REQUEST["REJECTED_BY_IDENT"] )) { $RECORD["REJECTED_BY_IDENT"] = $this->getRequestParam("REJECTED_BY_IDENT"); }
     if (isset($_REQUEST["REJECTED_BY_NAME"] )) { $RECORD["REJECTED_BY_NAME"] = $this->getRequestParam("REJECTED_BY_NAME"); }
     if (isset($_REQUEST["REJECT_DATE"] )) { $RECORD["REJECT_DATE"] = $this->getRequestParam("REJECT_DATE"); }
     if (isset($_REQUEST["REJECT_REASON"] )) { $RECORD["REJECT_REASON"] = $this->getRequestParam("REJECT_REASON"); }
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
