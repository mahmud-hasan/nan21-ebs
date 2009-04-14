<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0063 Controller: Purchase orders
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0063 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.BPARTNER_CONTACT_ID like :BPARTNER_CONTACT_ID";
      $params["BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_PORDER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.REF_PORDER_ID like :REF_PORDER_ID";
      $params["REF_PORDER_ID"] = $_REQUEST["QRY_REF_PORDER_ID"];
    }
    if (!empty($_REQUEST["QRY_TOTAL_AMOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "po.TOTAL_AMOUNT like :TOTAL_AMOUNT";
      $params["TOTAL_AMOUNT"] = $_REQUEST["QRY_TOTAL_AMOUNT"];
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
                po.BPARTNER_CONTACT_ID
                ,po.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(po.BPARTNER_ID) BPARTNER_NAME
                ,(select code from client where id = po.client_id) CLIENT_CODE
                ,po.CLIENT_ID
                ,po.CREATEDBY
                ,po.CREATEDON
                ,po.CURRENCY
                ,po.DOC_DATE
                ,po.DOC_NO
                ,po.ID
                ,po.MODIFIEDBY
                ,po.MODIFIEDON
                ,po.REF_PORDER_ID
                ,po.TOTAL_AMOUNT
            from PURCHASE_ORDER po $where $orderByClause ";
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
                po.ID
                ,(select code from client where id = po.client_id) CLIENT_CODE
                ,po.CLIENT_ID
                ,po.DOC_NO
                ,po.DOC_DATE
                ,po.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(po.BPARTNER_ID) BPARTNER_NAME
                ,po.BPARTNER_CONTACT_ID
                ,po.REF_PORDER_ID
                ,po.TOTAL_AMOUNT
                ,po.CURRENCY
                ,po.CREATEDON
                ,po.CREATEDBY
                ,po.MODIFIEDON
                ,po.MODIFIEDBY
            from PURCHASE_ORDER po $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0063.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into PURCHASE_ORDER(
                 BPARTNER_CONTACT_ID
                ,BPARTNER_ID
                ,CLIENT_ID
                ,CURRENCY
                ,DOC_DATE
                ,DOC_NO
                ,ID
                ,REF_PORDER_ID
                ,TOTAL_AMOUNT
            ) values ( 
                 :BPARTNER_CONTACT_ID
                ,:BPARTNER_ID
                ,:CLIENT_ID
                ,:CURRENCY
                ,:DOC_DATE
                ,:DOC_NO
                ,:ID
                ,:REF_PORDER_ID
                ,:TOTAL_AMOUNT
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_porder_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0063.doUpdate().");}
    $sql = "update PURCHASE_ORDER set 
                 ID=:ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,BPARTNER_ID=:BPARTNER_ID
                ,BPARTNER_CONTACT_ID=:BPARTNER_CONTACT_ID
                ,CURRENCY=:CURRENCY
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0063.doDelete().");}
    $sql = "delete from PURCHASE_ORDER where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0063");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                po.BPARTNER_CONTACT_ID
                ,po.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(po.BPARTNER_ID) BPARTNER_NAME
                ,(select code from client where id = po.client_id) CLIENT_CODE
                ,po.CLIENT_ID
                ,po.CREATEDBY
                ,po.CREATEDON
                ,po.CURRENCY
                ,po.DOC_DATE
                ,po.DOC_NO
                ,po.ID
                ,po.MODIFIEDBY
                ,po.MODIFIEDON
                ,po.REF_PORDER_ID
                ,po.TOTAL_AMOUNT
            from PURCHASE_ORDER po
         where 
           po.ID= :ID
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
  "BPARTNER_CONTACT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"REF_PORDER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TOTAL_AMOUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
