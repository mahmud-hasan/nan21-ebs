<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0040 Controller: Accounting doc.
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0040 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCPERIOD_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCPERIOD_ID like :ACCPERIOD_ID";
      $params["ACCPERIOD_ID"] = $_REQUEST["QRY_ACCPERIOD_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_DATE like :BASEDOC_DATE";
      $params["BASEDOC_DATE"] = $_REQUEST["QRY_BASEDOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_ID like :BASEDOC_ID";
      $params["BASEDOC_ID"] = $_REQUEST["QRY_BASEDOC_ID"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_NO like :BASEDOC_NO";
      $params["BASEDOC_NO"] = $_REQUEST["QRY_BASEDOC_NO"];
    }
    if (!empty($_REQUEST["QRY_BASEDOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.BASEDOC_TYPE like :BASEDOC_TYPE";
      $params["BASEDOC_TYPE"] = $_REQUEST["QRY_BASEDOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_GENERATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_GENERATED like :IS_GENERATED";
      $params["IS_GENERATED"] = $_REQUEST["QRY_IS_GENERATED"];
    }
    if (!empty($_REQUEST["QRY_IS_INSERTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_INSERTED like :IS_INSERTED";
      $params["IS_INSERTED"] = $_REQUEST["QRY_IS_INSERTED"];
    }
    if (!empty($_REQUEST["QRY_IS_POSTED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_POSTED like :IS_POSTED";
      $params["IS_POSTED"] = $_REQUEST["QRY_IS_POSTED"];
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
                t.ACCPERIOD_ID
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.BASEDOC_DATE
                ,t.BASEDOC_ID
                ,t.BASEDOC_NO
                ,t.BASEDOC_TYPE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT
                ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.ID
                ,t.IS_GENERATED
                ,t.IS_INSERTED
                ,t.IS_POSTED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.POSTEDBY
                ,t.POSTEDON
            from AC_ACCDOC t $where $orderByClause ";
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
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.ACCPERIOD_ID
                ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT
                ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT
                ,t.DOC_NO
                ,t.DOC_DATE
                ,t.BASEDOC_TYPE
                ,t.BASEDOC_NO
                ,t.BASEDOC_DATE
                ,t.BASEDOC_ID
                ,t.NOTES
                ,t.IS_GENERATED
                ,t.IS_INSERTED
                ,t.IS_POSTED
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.POSTEDON
                ,t.POSTEDBY
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
            from AC_ACCDOC t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0040.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into AC_ACCDOC(
                 ACCPERIOD_ID
                ,ACCSCHEMA_ID
                ,BASEDOC_DATE
                ,BASEDOC_ID
                ,BASEDOC_NO
                ,BASEDOC_TYPE
                ,CLIENT_ID
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,IS_GENERATED
                ,IS_INSERTED
                ,IS_POSTED
                ,NOTES
            ) values ( 
                 :ACCPERIOD_ID
                ,:ACCSCHEMA_ID
                ,:BASEDOC_DATE
                ,:BASEDOC_ID
                ,:BASEDOC_NO
                ,:BASEDOC_TYPE
                ,:CLIENT_ID
                ,:DOC_DATE
                ,:DOC_NO
                ,:ID
                ,:IS_GENERATED
                ,:IS_INSERTED
                ,:IS_POSTED
                ,:NOTES
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_ACCDOC_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0040.doUpdate().");}
    $sql = "update AC_ACCDOC set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,BASEDOC_TYPE=:BASEDOC_TYPE
                ,BASEDOC_NO=:BASEDOC_NO
                ,BASEDOC_DATE=:BASEDOC_DATE
                ,BASEDOC_ID=:BASEDOC_ID
                ,NOTES=:NOTES
                ,IS_GENERATED=:IS_GENERATED
                ,IS_INSERTED=:IS_INSERTED
                ,IS_POSTED=:IS_POSTED
                ,ACCPERIOD_ID=:ACCPERIOD_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0040.doDelete().");}
    $sql = "delete from AC_ACCDOC where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0040");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCPERIOD_ID
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.BASEDOC_DATE
                ,t.BASEDOC_ID
                ,t.BASEDOC_NO
                ,t.BASEDOC_TYPE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,pbo_acc.get_accdoc_cr_amount(t.id) CR_AMOUNT
                ,pbo_acc.get_accdoc_db_amount(t.id) DB_AMOUNT
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.ID
                ,t.IS_GENERATED
                ,t.IS_INSERTED
                ,t.IS_POSTED
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.POSTEDBY
                ,t.POSTEDON
            from AC_ACCDOC t
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
  "ACCPERIOD_ID" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ACCSCHEMA_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCSCHEMA_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BASEDOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"BASEDOC_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BASEDOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BASEDOC_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CR_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DB_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_GENERATED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_INSERTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_POSTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"POSTEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"POSTEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
);
}

}
?>
