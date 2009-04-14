<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0026 Controller: Received invoice
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0026 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_DOC_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.DOC_TYPE like :DOC_TYPE";
      $params["DOC_TYPE"] = $_REQUEST["QRY_DOC_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_ISSUER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.ISSUER_ID like :ISSUER_ID";
      $params["ISSUER_ID"] = $_REQUEST["QRY_ISSUER_ID"];
    }
    if (!empty($_REQUEST["QRY_RECEIVER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.RECEIVER_ID like :RECEIVER_ID";
      $params["RECEIVER_ID"] = $_REQUEST["QRY_RECEIVER_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_RINVOICE_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "rinv.REF_RINVOICE_ID like :REF_RINVOICE_ID";
      $params["REF_RINVOICE_ID"] = $_REQUEST["QRY_REF_RINVOICE_ID"];
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
                rinv.CLIENT_ID
                ,(select code from client where id=rinv.client_id) CLIENT_NAME
                ,rinv.CREATEDBY
                ,rinv.CREATEDON
                ,rinv.DOC_CURRENCY
                ,rinv.DOC_DATE
                ,rinv.DOC_NO
                ,rinv.DOC_TYPE
                ,rinv.DUE_DATE
                ,rinv.ID
                ,rinv.INSERTEDBY
                ,rinv.INSERTEDON
                ,rinv.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME
                ,rinv.IS_INSERTED
                ,rinv.IS_PAYABLE
                ,rinv.IS_PAYED
                ,rinv.MODIFIEDBY
                ,rinv.MODIFIEDON
                ,rinv.NOTES
                ,rinv.RECEIVER_ID
                ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME
                ,rinv.REF_RINVOICE_ID
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME
                ,rinv.TOTAL_AMOUNT
                ,rinv.TOTAL_NET_AMOUNT
                ,rinv.TOTAL_TAX_AMOUNT
            from RINVOICE rinv $where $orderByClause ";
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
                rinv.ID
                ,rinv.CLIENT_ID
                ,(select code from client where id=rinv.client_id) CLIENT_NAME
                ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME
                ,rinv.RECEIVER_ID
                ,rinv.DOC_TYPE
                ,rinv.DOC_NO
                ,rinv.DOC_DATE
                ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME
                ,rinv.ISSUER_ID
                ,rinv.DOC_CURRENCY
                ,rinv.TOTAL_AMOUNT
                ,rinv.TOTAL_NET_AMOUNT
                ,rinv.TOTAL_TAX_AMOUNT
                ,rinv.DUE_DATE
                ,rinv.IS_INSERTED
                ,rinv.IS_PAYABLE
                ,rinv.IS_PAYED
                ,rinv.REF_RINVOICE_ID
                ,rinv.NOTES
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME
                ,rinv.INSERTEDBY
                ,rinv.INSERTEDON
                ,rinv.CREATEDON
                ,rinv.CREATEDBY
                ,rinv.MODIFIEDON
                ,rinv.MODIFIEDBY
            from RINVOICE rinv $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0026.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into RINVOICE(
                 CLIENT_ID
                ,DOC_CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,DOC_TYPE
                ,DUE_DATE
                ,ID
                ,ISSUER_ID
                ,IS_INSERTED
                ,IS_PAYABLE
                ,IS_PAYED
                ,NOTES
                ,RECEIVER_ID
                ,REF_RINVOICE_ID
                ,TOTAL_AMOUNT
                ,TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT
            ) values ( 
                 :CLIENT_ID
                ,:DOC_CURRENCY
                ,:DOC_DATE
                ,:DOC_NO
                ,:DOC_TYPE
                ,:DUE_DATE
                ,:ID
                ,:ISSUER_ID
                ,:IS_INSERTED
                ,:IS_PAYABLE
                ,:IS_PAYED
                ,:NOTES
                ,:RECEIVER_ID
                ,:REF_RINVOICE_ID
                ,:TOTAL_AMOUNT
                ,:TOTAL_NET_AMOUNT
                ,:TOTAL_TAX_AMOUNT
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_rinv_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0026.doUpdate().");}
    $sql = "update RINVOICE set 
                 ID=:ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,DOC_TYPE=:DOC_TYPE
                ,DOC_CURRENCY=:DOC_CURRENCY
                ,TOTAL_NET_AMOUNT=:TOTAL_NET_AMOUNT
                ,TOTAL_TAX_AMOUNT=:TOTAL_TAX_AMOUNT
                ,TOTAL_AMOUNT=:TOTAL_AMOUNT
                ,ISSUER_ID=:ISSUER_ID
                ,RECEIVER_ID=:RECEIVER_ID
                ,DUE_DATE=:DUE_DATE
                ,IS_INSERTED=:IS_INSERTED
                ,IS_PAYABLE=:IS_PAYABLE
                ,IS_PAYED=:IS_PAYED
                ,REF_RINVOICE_ID=:REF_RINVOICE_ID
                ,NOTES=:NOTES
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0026.doDelete().");}
    $sql = "delete from RINVOICE where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0026");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                rinv.CLIENT_ID
                ,(select code from client where id=rinv.client_id) CLIENT_NAME
                ,rinv.CREATEDBY
                ,rinv.CREATEDON
                ,rinv.DOC_CURRENCY
                ,rinv.DOC_DATE
                ,rinv.DOC_NO
                ,rinv.DOC_TYPE
                ,rinv.DUE_DATE
                ,rinv.ID
                ,rinv.INSERTEDBY
                ,rinv.INSERTEDON
                ,rinv.ISSUER_ID
                ,pbo_bpartner.get_name_by_id(rinv.issuer_id) ISSUER_NAME
                ,rinv.IS_INSERTED
                ,rinv.IS_PAYABLE
                ,rinv.IS_PAYED
                ,rinv.MODIFIEDBY
                ,rinv.MODIFIEDON
                ,rinv.NOTES
                ,rinv.RECEIVER_ID
                ,(select name from bpartner where id = rinv.receiver_id) RECEIVER_NAME
                ,rinv.REF_RINVOICE_ID
                ,(select r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_name from rinvoice  r where r.id = rinv.ref_rinvoice_id) REF_RINVOICE_NAME
                ,rinv.TOTAL_AMOUNT
                ,rinv.TOTAL_NET_AMOUNT
                ,rinv.TOTAL_TAX_AMOUNT
            from RINVOICE rinv
         where 
           rinv.ID= :ID
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
  "CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIENT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DUE_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INSERTEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"INSERTEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ISSUER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ISSUER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"IS_INSERTED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_PAYABLE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_PAYED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"RECEIVER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RECEIVER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REF_RINVOICE_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"REF_RINVOICE_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"TOTAL_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_NET_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_TAX_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
