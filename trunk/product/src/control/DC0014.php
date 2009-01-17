<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0014 Controller: Business partners
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0014 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_CUSTOMER"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.IS_CUSTOMER like :IS_CUSTOMER";
      $params["IS_CUSTOMER"] = $_REQUEST["QRY_IS_CUSTOMER"];
    }
    if (!empty($_REQUEST["QRY_IS_EMPLOYEE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.IS_EMPLOYEE like :IS_EMPLOYEE";
      $params["IS_EMPLOYEE"] = $_REQUEST["QRY_IS_EMPLOYEE"];
    }
    if (!empty($_REQUEST["QRY_IS_VENDOR"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.IS_VENDOR like :IS_VENDOR";
      $params["IS_VENDOR"] = $_REQUEST["QRY_IS_VENDOR"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_TAX_NUMBER"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bp.TAX_NUMBER like :TAX_NUMBER";
      $params["TAX_NUMBER"] = $_REQUEST["QRY_TAX_NUMBER"];
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
                bp.BPARTNER_ID
                ,bp.BPARTNER_TYPE
                ,(select t.code from client t where t.id = bp.client_id ) CLIENT_CODE
                ,bp.CLIENT_ID
                ,bp.CODE
                ,bp.COMPANY_REG_NR
                ,bp.COPIED_FROM_BPARTNER_ID
                ,bp.CREATEDBY
                ,bp.CREATEDON
                ,bp.CREDITCLASS_CODE
                ,bp.CUSTGROUP_CODE
                ,bp.EMAIL
                ,bp.FAX
                ,bp.ID
                ,bp.IS_CUSTOMER
                ,bp.IS_EMPLOYEE
                ,bp.IS_ONETIME
                ,bp.IS_VENDOR
                ,bp.MAX_CREDIT_LIMIT
                ,bp.MAX_PAYMENT_TERM
                ,bp.MODIFIEDBY
                ,bp.MODIFIEDON
                ,bp.NAME
                ,bp.PAYMETHOD_CODE
                ,bp.PAYTERMCLASS_CODE
                ,bp.PHONE
                ,bp.TAX_NUMBER
                ,bp.TAX_NUMBER_TYPE
            from BPARTNER bp $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "BPARTNER_ID"
      ,"BPARTNER_TYPE"
      ,"CLIENT_CODE"
      ,"CLIENT_ID"
      ,"CODE"
      ,"COMPANY_REG_NR"
      ,"COPIED_FROM_BPARTNER_ID"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CREDITCLASS_CODE"
      ,"CUSTGROUP_CODE"
      ,"EMAIL"
      ,"FAX"
      ,"ID"
      ,"IS_CUSTOMER"
      ,"IS_EMPLOYEE"
      ,"IS_ONETIME"
      ,"IS_VENDOR"
      ,"MAX_CREDIT_LIMIT"
      ,"MAX_PAYMENT_TERM"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NAME"
      ,"PAYMETHOD_CODE"
      ,"PAYTERMCLASS_CODE"
      ,"PHONE"
      ,"TAX_NUMBER"
      ,"TAX_NUMBER_TYPE"
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
                (select t.code from client t where t.id = bp.client_id ) CLIENT_CODE
                ,bp.CLIENT_ID
                ,bp.ID
                ,bp.CODE
                ,bp.NAME
                ,bp.TAX_NUMBER_TYPE
                ,bp.TAX_NUMBER
                ,bp.COMPANY_REG_NR
                ,bp.PHONE
                ,bp.EMAIL
                ,bp.FAX
                ,bp.BPARTNER_TYPE
                ,bp.BPARTNER_ID
                ,bp.COPIED_FROM_BPARTNER_ID
                ,bp.CREATEDON
                ,bp.CREATEDBY
                ,bp.MODIFIEDON
                ,bp.MODIFIEDBY
                ,bp.CUSTGROUP_CODE
                ,bp.CREDITCLASS_CODE
                ,bp.PAYMETHOD_CODE
                ,bp.PAYTERMCLASS_CODE
                ,bp.MAX_CREDIT_LIMIT
                ,bp.MAX_PAYMENT_TERM
                ,bp.IS_CUSTOMER
                ,bp.IS_VENDOR
                ,bp.IS_EMPLOYEE
                ,bp.IS_ONETIME
            from BPARTNER bp $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "CLIENT_CODE"
     ,"CLIENT_ID"
     ,"ID"
     ,"CODE"
     ,"NAME"
     ,"TAX_NUMBER_TYPE"
     ,"TAX_NUMBER"
     ,"COMPANY_REG_NR"
     ,"PHONE"
     ,"EMAIL"
     ,"FAX"
     ,"BPARTNER_TYPE"
     ,"BPARTNER_ID"
     ,"COPIED_FROM_BPARTNER_ID"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"CUSTGROUP_CODE"
     ,"CREDITCLASS_CODE"
     ,"PAYMETHOD_CODE"
     ,"PAYTERMCLASS_CODE"
     ,"MAX_CREDIT_LIMIT"
     ,"MAX_PAYMENT_TERM"
     ,"IS_CUSTOMER"
     ,"IS_VENDOR"
     ,"IS_EMPLOYEE"
     ,"IS_ONETIME"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0014.fetchRecord().");}
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_TYPE"] = $this->getRequestParam("BPARTNER_TYPE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["COMPANY_REG_NR"] = $this->getRequestParam("COMPANY_REG_NR");
    $RECORD["COPIED_FROM_BPARTNER_ID"] = $this->getRequestParam("COPIED_FROM_BPARTNER_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CREDITCLASS_CODE"] = $this->getRequestParam("CREDITCLASS_CODE");
    $RECORD["CUSTGROUP_CODE"] = $this->getRequestParam("CUSTGROUP_CODE");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_CUSTOMER"] = $this->getRequestParamBoolean("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParamBoolean("IS_EMPLOYEE");
    $RECORD["IS_ONETIME"] = $this->getRequestParamBoolean("IS_ONETIME");
    $RECORD["IS_VENDOR"] = $this->getRequestParamBoolean("IS_VENDOR");
    $RECORD["MAX_CREDIT_LIMIT"] = $this->getRequestParam("MAX_CREDIT_LIMIT");
    $RECORD["MAX_PAYMENT_TERM"] = $this->getRequestParam("MAX_PAYMENT_TERM");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE");
    $RECORD["PAYTERMCLASS_CODE"] = $this->getRequestParam("PAYTERMCLASS_CODE");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $RECORD["TAX_NUMBER"] = $this->getRequestParam("TAX_NUMBER");
    $RECORD["TAX_NUMBER_TYPE"] = $this->getRequestParam("TAX_NUMBER_TYPE");
    $sql = "insert into BPARTNER(
                 BPARTNER_ID
                ,BPARTNER_TYPE
                ,CLIENT_ID
                ,CODE
                ,COMPANY_REG_NR
                ,COPIED_FROM_BPARTNER_ID
                ,CREDITCLASS_CODE
                ,CUSTGROUP_CODE
                ,EMAIL
                ,FAX
                ,ID
                ,IS_CUSTOMER
                ,IS_EMPLOYEE
                ,IS_ONETIME
                ,IS_VENDOR
                ,MAX_CREDIT_LIMIT
                ,MAX_PAYMENT_TERM
                ,NAME
                ,PAYMETHOD_CODE
                ,PAYTERMCLASS_CODE
                ,PHONE
                ,TAX_NUMBER
                ,TAX_NUMBER_TYPE
            ) values ( 
                 :BPARTNER_ID
                ,:BPARTNER_TYPE
                ,:CLIENT_ID
                ,:CODE
                ,:COMPANY_REG_NR
                ,:COPIED_FROM_BPARTNER_ID
                ,:CREDITCLASS_CODE
                ,:CUSTGROUP_CODE
                ,:EMAIL
                ,:FAX
                ,:ID
                ,:IS_CUSTOMER
                ,:IS_EMPLOYEE
                ,:IS_ONETIME
                ,:IS_VENDOR
                ,:MAX_CREDIT_LIMIT
                ,:MAX_PAYMENT_TERM
                ,:NAME
                ,:PAYMETHOD_CODE
                ,:PAYTERMCLASS_CODE
                ,:PHONE
                ,:TAX_NUMBER
                ,:TAX_NUMBER_TYPE
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_bpartner_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["COMPANY_REG_NR"] = $this->getRequestParam("COMPANY_REG_NR");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_CUSTOMER"] = $this->getRequestParamBoolean("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParamBoolean("IS_EMPLOYEE");
    $RECORD["IS_VENDOR"] = $this->getRequestParamBoolean("IS_VENDOR");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $RECORD["TAX_NUMBER"] = $this->getRequestParam("TAX_NUMBER");
    $RECORD["TAX_NUMBER_TYPE"] = $this->getRequestParam("TAX_NUMBER_TYPE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0014.doUpdate().");}
    $sql = "update BPARTNER set 
                 ID=:ID
                ,NAME=:NAME
                ,CODE=:CODE
                ,TAX_NUMBER=:TAX_NUMBER
                ,TAX_NUMBER_TYPE=:TAX_NUMBER_TYPE
                ,COMPANY_REG_NR=:COMPANY_REG_NR
                ,PHONE=:PHONE
                ,EMAIL=:EMAIL
                ,FAX=:FAX
                ,CLIENT_ID=:CLIENT_ID
                ,IS_CUSTOMER=:IS_CUSTOMER
                ,IS_VENDOR=:IS_VENDOR
                ,IS_EMPLOYEE=:IS_EMPLOYEE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0014.doDelete().");}
    $sql = "delete from BPARTNER where 
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_TYPE"] = $this->getRequestParam("BPARTNER_TYPE");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["COMPANY_REG_NR"] = $this->getRequestParam("COMPANY_REG_NR");
    $RECORD["COPIED_FROM_BPARTNER_ID"] = $this->getRequestParam("COPIED_FROM_BPARTNER_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CREDITCLASS_CODE"] = $this->getRequestParam("CREDITCLASS_CODE");
    $RECORD["CUSTGROUP_CODE"] = $this->getRequestParam("CUSTGROUP_CODE");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["IS_CUSTOMER"] = $this->getRequestParam("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParam("IS_EMPLOYEE");
    $RECORD["IS_ONETIME"] = $this->getRequestParam("IS_ONETIME");
    $RECORD["IS_VENDOR"] = $this->getRequestParam("IS_VENDOR");
    $RECORD["MAX_CREDIT_LIMIT"] = $this->getRequestParam("MAX_CREDIT_LIMIT");
    $RECORD["MAX_PAYMENT_TERM"] = $this->getRequestParam("MAX_PAYMENT_TERM");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE");
    $RECORD["PAYTERMCLASS_CODE"] = $this->getRequestParam("PAYTERMCLASS_CODE");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $RECORD["TAX_NUMBER"] = $this->getRequestParam("TAX_NUMBER");
    $RECORD["TAX_NUMBER_TYPE"] = $this->getRequestParam("TAX_NUMBER_TYPE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0014");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                bp.BPARTNER_ID
                ,bp.BPARTNER_TYPE
                ,(select t.code from client t where t.id = bp.client_id ) CLIENT_CODE
                ,bp.CLIENT_ID
                ,bp.CODE
                ,bp.COMPANY_REG_NR
                ,bp.COPIED_FROM_BPARTNER_ID
                ,bp.CREATEDBY
                ,bp.CREATEDON
                ,bp.CREDITCLASS_CODE
                ,bp.CUSTGROUP_CODE
                ,bp.EMAIL
                ,bp.FAX
                ,bp.ID
                ,bp.IS_CUSTOMER
                ,bp.IS_EMPLOYEE
                ,bp.IS_ONETIME
                ,bp.IS_VENDOR
                ,bp.MAX_CREDIT_LIMIT
                ,bp.MAX_PAYMENT_TERM
                ,bp.MODIFIEDBY
                ,bp.MODIFIEDON
                ,bp.NAME
                ,bp.PAYMETHOD_CODE
                ,bp.PAYTERMCLASS_CODE
                ,bp.PHONE
                ,bp.TAX_NUMBER
                ,bp.TAX_NUMBER_TYPE
            from BPARTNER bp
         where 
           bp.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_TYPE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"COMPANY_REG_NR" => array("DATA_TYPE" => "STRING")
  ,"COPIED_FROM_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREDITCLASS_CODE" => array("DATA_TYPE" => "STRING")
  ,"CUSTGROUP_CODE" => array("DATA_TYPE" => "STRING")
  ,"EMAIL" => array("DATA_TYPE" => "STRING")
  ,"FAX" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"IS_CUSTOMER" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_EMPLOYEE" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_ONETIME" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_VENDOR" => array("DATA_TYPE" => "BOOLEAN")
  ,"MAX_CREDIT_LIMIT" => array("DATA_TYPE" => "NUMBER")
  ,"MAX_PAYMENT_TERM" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"PAYMETHOD_CODE" => array("DATA_TYPE" => "STRING")
  ,"PAYTERMCLASS_CODE" => array("DATA_TYPE" => "STRING")
  ,"PHONE" => array("DATA_TYPE" => "STRING")
  ,"TAX_NUMBER" => array("DATA_TYPE" => "STRING")
  ,"TAX_NUMBER_TYPE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["BPARTNER_TYPE"] )) { $RECORD["BPARTNER_TYPE"] = $this->getRequestParam("BPARTNER_TYPE"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["COMPANY_REG_NR"] )) { $RECORD["COMPANY_REG_NR"] = $this->getRequestParam("COMPANY_REG_NR"); }
     if (isset($_REQUEST["COPIED_FROM_BPARTNER_ID"] )) { $RECORD["COPIED_FROM_BPARTNER_ID"] = $this->getRequestParam("COPIED_FROM_BPARTNER_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CREDITCLASS_CODE"] )) { $RECORD["CREDITCLASS_CODE"] = $this->getRequestParam("CREDITCLASS_CODE"); }
     if (isset($_REQUEST["CUSTGROUP_CODE"] )) { $RECORD["CUSTGROUP_CODE"] = $this->getRequestParam("CUSTGROUP_CODE"); }
     if (isset($_REQUEST["EMAIL"] )) { $RECORD["EMAIL"] = $this->getRequestParam("EMAIL"); }
     if (isset($_REQUEST["FAX"] )) { $RECORD["FAX"] = $this->getRequestParam("FAX"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
    $RECORD["IS_CUSTOMER"] = $this->getRequestParamBoolean("IS_CUSTOMER");
    $RECORD["IS_EMPLOYEE"] = $this->getRequestParamBoolean("IS_EMPLOYEE");
    $RECORD["IS_ONETIME"] = $this->getRequestParamBoolean("IS_ONETIME");
    $RECORD["IS_VENDOR"] = $this->getRequestParamBoolean("IS_VENDOR");
     if (isset($_REQUEST["MAX_CREDIT_LIMIT"] )) { $RECORD["MAX_CREDIT_LIMIT"] = $this->getRequestParam("MAX_CREDIT_LIMIT"); }
     if (isset($_REQUEST["MAX_PAYMENT_TERM"] )) { $RECORD["MAX_PAYMENT_TERM"] = $this->getRequestParam("MAX_PAYMENT_TERM"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["PAYMETHOD_CODE"] )) { $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE"); }
     if (isset($_REQUEST["PAYTERMCLASS_CODE"] )) { $RECORD["PAYTERMCLASS_CODE"] = $this->getRequestParam("PAYTERMCLASS_CODE"); }
     if (isset($_REQUEST["PHONE"] )) { $RECORD["PHONE"] = $this->getRequestParam("PHONE"); }
     if (isset($_REQUEST["TAX_NUMBER"] )) { $RECORD["TAX_NUMBER"] = $this->getRequestParam("TAX_NUMBER"); }
     if (isset($_REQUEST["TAX_NUMBER_TYPE"] )) { $RECORD["TAX_NUMBER_TYPE"] = $this->getRequestParam("TAX_NUMBER_TYPE"); }
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
