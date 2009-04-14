<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0057 Controller: BP contact
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0057 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_EMAIL"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.EMAIL like :EMAIL";
      $params["EMAIL"] = $_REQUEST["QRY_EMAIL"];
    }
    if (!empty($_REQUEST["QRY_FAX"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.FAX like :FAX";
      $params["FAX"] = $_REQUEST["QRY_FAX"];
    }
    if (!empty($_REQUEST["QRY_FIRSTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.FIRSTNAME like :FIRSTNAME";
      $params["FIRSTNAME"] = $_REQUEST["QRY_FIRSTNAME"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LASTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.LASTNAME like :LASTNAME";
      $params["LASTNAME"] = $_REQUEST["QRY_LASTNAME"];
    }
    if (!empty($_REQUEST["QRY_MOBILE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.MOBILE like :MOBILE";
      $params["MOBILE"] = $_REQUEST["QRY_MOBILE"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_NOTES"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.NOTES like :NOTES";
      $params["NOTES"] = $_REQUEST["QRY_NOTES"];
    }
    if (!empty($_REQUEST["QRY_PHONE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "bpc.PHONE like :PHONE";
      $params["PHONE"] = $_REQUEST["QRY_PHONE"];
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
                bpc.BPARTNER_ID
                ,bpc.EMAIL
                ,bpc.FAX
                ,bpc.FIRSTNAME
                ,bpc.ID
                ,bpc.LASTNAME
                ,bpc.MOBILE
                ,bpc.NAME
                ,bpc.NOTES
                ,bpc.PHONE
            from BP_CONTACT bpc $where $orderByClause ";
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
                bpc.ID
                ,bpc.BPARTNER_ID
                ,bpc.NAME
                ,bpc.FIRSTNAME
                ,bpc.LASTNAME
                ,bpc.PHONE
                ,bpc.EMAIL
                ,bpc.FAX
                ,bpc.MOBILE
                ,bpc.NOTES
            from BP_CONTACT bpc $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0057.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into BP_CONTACT(
                 BPARTNER_ID
                ,EMAIL
                ,FAX
                ,FIRSTNAME
                ,ID
                ,LASTNAME
                ,MOBILE
                ,NAME
                ,NOTES
                ,PHONE
            ) values ( 
                 :BPARTNER_ID
                ,:EMAIL
                ,:FAX
                ,:FIRSTNAME
                ,:ID
                ,:LASTNAME
                ,:MOBILE
                ,:NAME
                ,:NOTES
                ,:PHONE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_BPCONTACT_ID.nextval seq_val from dual")->fetchRow();
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
    $sql = "update BP_CONTACT set 
                 BPARTNER_ID=:BPARTNER_ID
                ,EMAIL=:EMAIL
                ,FAX=:FAX
                ,FIRSTNAME=:FIRSTNAME
                ,ID=:ID
                ,LASTNAME=:LASTNAME
                ,MOBILE=:MOBILE
                ,NAME=:NAME
                ,NOTES=:NOTES
                ,PHONE=:PHONE
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0057.doDelete().");}
    $sql = "delete from BP_CONTACT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0057");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                bpc.BPARTNER_ID
                ,bpc.EMAIL
                ,bpc.FAX
                ,bpc.FIRSTNAME
                ,bpc.ID
                ,bpc.LASTNAME
                ,bpc.MOBILE
                ,bpc.NAME
                ,bpc.NOTES
                ,bpc.PHONE
            from BP_CONTACT bpc
         where 
           bpc.ID= :ID
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
  "BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EMAIL" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"FAX" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"FIRSTNAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LASTNAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MOBILE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PHONE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
