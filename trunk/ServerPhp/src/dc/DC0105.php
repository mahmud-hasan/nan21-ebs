<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0105 Controller: Product accounts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0105 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_ASSET_ACCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ASSET_ACCT_ID like :ASSET_ACCT_ID";
      $params["ASSET_ACCT_ID"] = $_REQUEST["QRY_ASSET_ACCT_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_EXPENSE_ACCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EXPENSE_ACCT_ID like :EXPENSE_ACCT_ID";
      $params["EXPENSE_ACCT_ID"] = $_REQUEST["QRY_EXPENSE_ACCT_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_REVENUE_ACCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.REVENUE_ACCT_ID like :REVENUE_ACCT_ID";
      $params["REVENUE_ACCT_ID"] = $_REQUEST["QRY_REVENUE_ACCT_ID"];
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
                t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ASSET_ACCT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.EXPENSE_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.EXPENSE_ACCT_ID) EXPENSE_ACCT_NAME
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.REVENUE_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.revenue_acct_id) REVENUE_ACCT_NAME
            from MM_PRODUCT_ACCOUNT t $where $orderByClause ";
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
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.PRODUCT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.REVENUE_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.revenue_acct_id) REVENUE_ACCT_NAME
                ,pbo_acc.get_acct_code_by_id(t.EXPENSE_ACCT_ID) EXPENSE_ACCT_NAME
                ,t.EXPENSE_ACCT_ID
                ,t.ASSET_ACCT_ID
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
            from MM_PRODUCT_ACCOUNT t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0105.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into MM_PRODUCT_ACCOUNT(
                 ACCSCHEMA_ID
                ,ASSET_ACCT_ID
                ,CLIENT_ID
                ,EXPENSE_ACCT_ID
                ,ID
                ,PRODUCT_ID
                ,REVENUE_ACCT_ID
            ) values ( 
                 :ACCSCHEMA_ID
                ,:ASSET_ACCT_ID
                ,:CLIENT_ID
                ,:EXPENSE_ACCT_ID
                ,:ID
                ,:PRODUCT_ID
                ,:REVENUE_ACCT_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_PRODACCT_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0105.doUpdate().");}
    $sql = "update MM_PRODUCT_ACCOUNT set 
                 ID=:ID
                ,REVENUE_ACCT_ID=:REVENUE_ACCT_ID
                ,EXPENSE_ACCT_ID=:EXPENSE_ACCT_ID
                ,ASSET_ACCT_ID=:ASSET_ACCT_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0105.doDelete().");}
    $sql = "delete from MM_PRODUCT_ACCOUNT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0105");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ASSET_ACCT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.EXPENSE_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.EXPENSE_ACCT_ID) EXPENSE_ACCT_NAME
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.PRODUCT_ID
                ,pbo_product.get_name_by_id(t.product_id) PRODUCT_NAME
                ,t.REVENUE_ACCT_ID
                ,pbo_acc.get_acct_code_by_id(t.revenue_acct_id) REVENUE_ACCT_NAME
            from MM_PRODUCT_ACCOUNT t
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
  "ACCSCHEMA_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCSCHEMA_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ASSET_ACCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"EXPENSE_ACCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXPENSE_ACCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODUCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"REVENUE_ACCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"REVENUE_ACCT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
