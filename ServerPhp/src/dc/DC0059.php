<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0059 Controller: Sales orders
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0059 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_BILL_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BILL_BPARTNER_CONTACT_ID like :BILL_BPARTNER_CONTACT_ID";
      $params["BILL_BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_BILL_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_BILL_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BILL_BPARTNER_ID like :BILL_BPARTNER_ID";
      $params["BILL_BPARTNER_ID"] = $_REQUEST["QRY_BILL_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BPARTNER_CONTACT_ID like :BPARTNER_CONTACT_ID";
      $params["BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_DELIV_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DELIV_BPARTNER_CONTACT_ID like :DELIV_BPARTNER_CONTACT_ID";
      $params["DELIV_BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_DELIV_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_DELIV_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DELIV_BPARTNER_ID like :DELIV_BPARTNER_ID";
      $params["DELIV_BPARTNER_ID"] = $_REQUEST["QRY_DELIV_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_PAYMETHOD_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.PAYMETHOD_CODE like :PAYMETHOD_CODE";
      $params["PAYMETHOD_CODE"] = $_REQUEST["QRY_PAYMETHOD_CODE"];
    }
    if (!empty($_REQUEST["QRY_PAY_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.PAY_BPARTNER_CONTACT_ID like :PAY_BPARTNER_CONTACT_ID";
      $params["PAY_BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_PAY_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_PAY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.PAY_BPARTNER_ID like :PAY_BPARTNER_ID";
      $params["PAY_BPARTNER_ID"] = $_REQUEST["QRY_PAY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_SORDER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.REF_SORDER_ID like :REF_SORDER_ID";
      $params["REF_SORDER_ID"] = $_REQUEST["QRY_REF_SORDER_ID"];
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
                ord.BILL_BPARTNER_CONTACT_ID
                ,ord.BILL_BPARTNER_ID
                ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME
                ,ord.BPARTNER_CONTACT_ID
                ,ord.BPARTNER_ID
                ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME
                ,(select code from client where id = ord.client_id) CLIENT_CODE
                ,ord.CLIENT_ID
                ,ord.CREATEDBY
                ,ord.CREATEDON
                ,ord.CURRENCY
                ,ord.DELIV_BPARTNER_CONTACT_ID
                ,ord.DELIV_BPARTNER_ID
                ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME
                ,ord.DOC_DATE
                ,ord.DOC_NO
                ,ord.ID
                ,ord.MODIFIEDBY
                ,ord.MODIFIEDON
                ,ord.PAYMETHOD_CODE
                ,ord.PAY_BPARTNER_CONTACT_ID
                ,ord.PAY_BPARTNER_ID
                ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME
                ,ord.REF_SORDER_ID
                ,ord.SALESREP_ID
                ,ord.TOTAL_AMOUNT
            from SALES_ORDER ord $where $orderByClause ";
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
                ord.ID
                ,(select code from client where id = ord.client_id) CLIENT_CODE
                ,ord.CLIENT_ID
                ,ord.DOC_NO
                ,ord.DOC_DATE
                ,ord.BPARTNER_ID
                ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME
                ,ord.CREATEDON
                ,ord.CREATEDBY
                ,ord.MODIFIEDON
                ,ord.MODIFIEDBY
                ,ord.BILL_BPARTNER_ID
                ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME
                ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME
                ,ord.DELIV_BPARTNER_ID
                ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME
                ,ord.PAY_BPARTNER_ID
                ,ord.BPARTNER_CONTACT_ID
                ,ord.BILL_BPARTNER_CONTACT_ID
                ,ord.DELIV_BPARTNER_CONTACT_ID
                ,ord.PAY_BPARTNER_CONTACT_ID
                ,ord.REF_SORDER_ID
                ,ord.CURRENCY
                ,ord.PAYMETHOD_CODE
                ,ord.SALESREP_ID
                ,ord.TOTAL_AMOUNT
            from SALES_ORDER ord $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0059.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into SALES_ORDER(
                 BILL_BPARTNER_CONTACT_ID
                ,BILL_BPARTNER_ID
                ,BPARTNER_CONTACT_ID
                ,BPARTNER_ID
                ,CLIENT_ID
                ,CURRENCY
                ,DELIV_BPARTNER_CONTACT_ID
                ,DELIV_BPARTNER_ID
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,PAYMETHOD_CODE
                ,PAY_BPARTNER_CONTACT_ID
                ,PAY_BPARTNER_ID
                ,REF_SORDER_ID
                ,SALESREP_ID
                ,TOTAL_AMOUNT
            ) values ( 
                 :BILL_BPARTNER_CONTACT_ID
                ,:BILL_BPARTNER_ID
                ,:BPARTNER_CONTACT_ID
                ,:BPARTNER_ID
                ,:CLIENT_ID
                ,:CURRENCY
                ,:DELIV_BPARTNER_CONTACT_ID
                ,:DELIV_BPARTNER_ID
                ,:DOC_DATE
                ,:DOC_NO
                ,:ID
                ,:PAYMETHOD_CODE
                ,:PAY_BPARTNER_CONTACT_ID
                ,:PAY_BPARTNER_ID
                ,:REF_SORDER_ID
                ,:SALESREP_ID
                ,:TOTAL_AMOUNT
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_BPORDER_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0059.doUpdate().");}
    $sql = "update SALES_ORDER set 
                 ID=:ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,BPARTNER_ID=:BPARTNER_ID
                ,BILL_BPARTNER_ID=:BILL_BPARTNER_ID
                ,DELIV_BPARTNER_ID=:DELIV_BPARTNER_ID
                ,PAY_BPARTNER_ID=:PAY_BPARTNER_ID
                ,BPARTNER_CONTACT_ID=:BPARTNER_CONTACT_ID
                ,BILL_BPARTNER_CONTACT_ID=:BILL_BPARTNER_CONTACT_ID
                ,DELIV_BPARTNER_CONTACT_ID=:DELIV_BPARTNER_CONTACT_ID
                ,PAY_BPARTNER_CONTACT_ID=:PAY_BPARTNER_CONTACT_ID
                ,REF_SORDER_ID=:REF_SORDER_ID
                ,CURRENCY=:CURRENCY
                ,PAYMETHOD_CODE=:PAYMETHOD_CODE
                ,SALESREP_ID=:SALESREP_ID
                ,TOTAL_AMOUNT=:TOTAL_AMOUNT
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0059.doDelete().");}
    $sql = "delete from SALES_ORDER where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0059");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ord.BILL_BPARTNER_CONTACT_ID
                ,ord.BILL_BPARTNER_ID
                ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME
                ,ord.BPARTNER_CONTACT_ID
                ,ord.BPARTNER_ID
                ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME
                ,(select code from client where id = ord.client_id) CLIENT_CODE
                ,ord.CLIENT_ID
                ,ord.CREATEDBY
                ,ord.CREATEDON
                ,ord.CURRENCY
                ,ord.DELIV_BPARTNER_CONTACT_ID
                ,ord.DELIV_BPARTNER_ID
                ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME
                ,ord.DOC_DATE
                ,ord.DOC_NO
                ,ord.ID
                ,ord.MODIFIEDBY
                ,ord.MODIFIEDON
                ,ord.PAYMETHOD_CODE
                ,ord.PAY_BPARTNER_CONTACT_ID
                ,ord.PAY_BPARTNER_ID
                ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME
                ,ord.REF_SORDER_ID
                ,ord.SALESREP_ID
                ,ord.TOTAL_AMOUNT
            from SALES_ORDER ord
         where 
           ord.ID= :ID
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
  "BILL_BPARTNER_CONTACT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BILL_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BILL_BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BPARTNER_CONTACT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DELIV_BPARTNER_CONTACT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DELIV_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DELIV_BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PAYMETHOD_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PAY_BPARTNER_CONTACT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PAY_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PAY_BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REF_SORDER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"SALESREP_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
