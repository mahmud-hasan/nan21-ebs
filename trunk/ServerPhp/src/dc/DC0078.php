<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0078 Controller: Reception document
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0078 extends Controller {

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
    if (!empty($_REQUEST["QRY_DOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOC_TYPE like :DOC_TYPE";
      $params["DOC_TYPE"] = $_REQUEST["QRY_DOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_FROM_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.FROM_BPARTNER_ID like :FROM_BPARTNER_ID";
      $params["FROM_BPARTNER_ID"] = $_REQUEST["QRY_FROM_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ORGINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORGINV_ID like :ORGINV_ID";
      $params["ORGINV_ID"] = $_REQUEST["QRY_ORGINV_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_QTY_CHECK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.QTY_CHECK like :QTY_CHECK";
      $params["QTY_CHECK"] = $_REQUEST["QRY_QTY_CHECK"];
    }
    if (!empty($_REQUEST["QRY_QUALITY_CHECK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.QUALITY_CHECK like :QUALITY_CHECK";
      $params["QUALITY_CHECK"] = $_REQUEST["QRY_QUALITY_CHECK"];
    }
    if (!empty($_REQUEST["QRY_RINV_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.RINV_ID like :RINV_ID";
      $params["RINV_ID"] = $_REQUEST["QRY_RINV_ID"];
    }
    if (!empty($_REQUEST["QRY_VALUE_CHECK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.VALUE_CHECK like :VALUE_CHECK";
      $params["VALUE_CHECK"] = $_REQUEST["QRY_VALUE_CHECK"];
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
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.DOC_TYPE
                ,t.FROM_BPARTNER_ID
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.ORGINV_ID
                ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.QTY_CHECK
                ,t.QTY_CHECK_BY
                ,t.QTY_CHECK_ON
                ,t.QUALITY_CHECK
                ,t.QUALITY_CHECK_BY
                ,t.QUALITY_CHECK_ON
                ,t.RINV_ID
                ,t.VALUE_CHECK
                ,t.VALUE_CHECK_BY
                ,t.VALUE_CHECK_ON
            from MM_MOVEMENT_IN_DOC t $where $orderByClause ";
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
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.ORG_ID
                ,t.ORGINV_ID
                ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME
                ,t.DOC_NO
                ,t.DOC_DATE
                ,t.FROM_BPARTNER_ID
                ,t.NOTES
                ,t.DOC_TYPE
                ,t.RINV_ID
                ,t.QTY_CHECK
                ,t.QTY_CHECK_ON
                ,t.QTY_CHECK_BY
                ,t.QUALITY_CHECK
                ,t.QUALITY_CHECK_ON
                ,t.QUALITY_CHECK_BY
                ,t.VALUE_CHECK
                ,t.VALUE_CHECK_ON
                ,t.VALUE_CHECK_BY
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from MM_MOVEMENT_IN_DOC t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0078.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into MM_MOVEMENT_IN_DOC(
                 CLIENT_ID
                ,DOC_DATE
                ,DOC_NO
                ,DOC_TYPE
                ,FROM_BPARTNER_ID
                ,ID
                ,NOTES
                ,ORGINV_ID
                ,ORG_ID
                ,QUALITY_CHECK
                ,RINV_ID
            ) values ( 
                 :CLIENT_ID
                ,:DOC_DATE
                ,:DOC_NO
                ,:DOC_TYPE
                ,:FROM_BPARTNER_ID
                ,:ID
                ,:NOTES
                ,:ORGINV_ID
                ,:ORG_ID
                ,:QUALITY_CHECK
                ,:RINV_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_mvmntindoc_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0078.doUpdate().");}
    $sql = "update MM_MOVEMENT_IN_DOC set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,FROM_BPARTNER_ID=:FROM_BPARTNER_ID
                ,NOTES=:NOTES
                ,DOC_TYPE=:DOC_TYPE
                ,RINV_ID=:RINV_ID
                ,QTY_CHECK=:QTY_CHECK
                ,QUALITY_CHECK=:QUALITY_CHECK
                ,VALUE_CHECK=:VALUE_CHECK
                ,ORG_ID=:ORG_ID
                ,ORGINV_ID=:ORGINV_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0078.doDelete().");}
    $sql = "delete from MM_MOVEMENT_IN_DOC where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0078");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.DOC_DATE
                ,t.DOC_NO
                ,t.DOC_TYPE
                ,t.FROM_BPARTNER_ID
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NOTES
                ,t.ORGINV_ID
                ,pbo_org.get_orginv_code_by_id(t.orginv_id) ORGINV_NAME
                ,t.ORG_ID
                ,pbo_org.get_name_by_id(t.org_id) ORG_NAME
                ,t.QTY_CHECK
                ,t.QTY_CHECK_BY
                ,t.QTY_CHECK_ON
                ,t.QUALITY_CHECK
                ,t.QUALITY_CHECK_BY
                ,t.QUALITY_CHECK_ON
                ,t.RINV_ID
                ,t.VALUE_CHECK
                ,t.VALUE_CHECK_BY
                ,t.VALUE_CHECK_ON
            from MM_MOVEMENT_IN_DOC t
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
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DOC_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"FROM_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORGINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORGINV_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QTY_CHECK" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"QTY_CHECK_BY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QTY_CHECK_ON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"QUALITY_CHECK" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"QUALITY_CHECK_BY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"QUALITY_CHECK_ON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"RINV_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"VALUE_CHECK" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"VALUE_CHECK_BY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"VALUE_CHECK_ON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
);
}

}
?>
