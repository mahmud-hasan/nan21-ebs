<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0038 Controller: Product categories
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0038 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
      $params["CODE"] = strtoupper($params["CODE"]);
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PRODCATEG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.PRODCATEG_ID like :PRODCATEG_ID";
      $params["PRODCATEG_ID"] = $_REQUEST["QRY_PRODCATEG_ID"];
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
                pc.ACTIVE
                ,pc.CODE
                ,pc.CREATEDBY
                ,pc.CREATEDON
                ,pc.DESCRIPTION
                ,pc.ID
                ,pc.MODIFIEDBY
                ,pc.MODIFIEDON
                ,pc.NAME
                ,pc.PRODCATEG_ID
                ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME
            from MM_PRODUCT_CATEGORY pc $where $orderByClause ";
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
                pc.ID
                ,pc.CODE
                ,pc.NAME
                ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME
                ,pc.PRODCATEG_ID
                ,pc.DESCRIPTION
                ,pc.ACTIVE
                ,pc.CREATEDON
                ,pc.CREATEDBY
                ,pc.MODIFIEDON
                ,pc.MODIFIEDBY
            from MM_PRODUCT_CATEGORY pc $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0038.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into MM_PRODUCT_CATEGORY(
                 ACTIVE
                ,CODE
                ,CREATEDBY
                ,DESCRIPTION
                ,ID
                ,MODIFIEDBY
                ,NAME
                ,PRODCATEG_ID
            ) values ( 
                 :ACTIVE
                ,:CODE
                ,:CREATEDBY
                ,:DESCRIPTION
                ,:ID
                ,:MODIFIEDBY
                ,:NAME
                ,:PRODCATEG_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_prodcateg_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0038.doUpdate().");}
    $sql = "update MM_PRODUCT_CATEGORY set 
                 ID=:ID
                ,NAME=:NAME
                ,PRODCATEG_ID=:PRODCATEG_ID
                ,DESCRIPTION=:DESCRIPTION
                ,ACTIVE=:ACTIVE
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0038.doDelete().");}
    $sql = "delete from MM_PRODUCT_CATEGORY where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0038");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pc.ACTIVE
                ,pc.CODE
                ,pc.CREATEDBY
                ,pc.CREATEDON
                ,pc.DESCRIPTION
                ,pc.ID
                ,pc.MODIFIEDBY
                ,pc.MODIFIEDON
                ,pc.NAME
                ,pc.PRODCATEG_ID
                ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME
            from MM_PRODUCT_CATEGORY pc
         where 
           pc.ID= :ID
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
  "ACTIVE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING",parent::FLDPROP_CASE_RESTRICTION => "Upper")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DESCRIPTION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRODCATEG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PRODCATEG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
