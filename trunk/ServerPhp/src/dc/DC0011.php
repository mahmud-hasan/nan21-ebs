<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0011 Controller: UoM conversions
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0011 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CONVERSION_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CONVERSION_TYPE like :CONVERSION_TYPE";
      $params["CONVERSION_TYPE"] = $_REQUEST["QRY_CONVERSION_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_UOM_FROM"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UOM_FROM like :UOM_FROM";
      $params["UOM_FROM"] = $_REQUEST["QRY_UOM_FROM"];
    }
    if (!empty($_REQUEST["QRY_UOM_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UOM_TO like :UOM_TO";
      $params["UOM_TO"] = $_REQUEST["QRY_UOM_TO"];
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
                CONVERSION_FACTOR
                ,CONVERSION_TYPE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,UOM_FROM
                ,UOM_TO
            from UOM_CONVERSION  $where $orderByClause ";
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
                ID
                ,UOM_TO
                ,UOM_FROM
                ,CONVERSION_TYPE
                ,CONVERSION_FACTOR
                ,MODIFIEDON
                ,MODIFIEDBY
            from UOM_CONVERSION  $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0011.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into UOM_CONVERSION(
                 CONVERSION_FACTOR
                ,CONVERSION_TYPE
                ,ID
                ,MODIFIEDBY
                ,UOM_FROM
                ,UOM_TO
            ) values ( 
                 :CONVERSION_FACTOR
                ,:CONVERSION_TYPE
                ,:ID
                ,:MODIFIEDBY
                ,:UOM_FROM
                ,:UOM_TO
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_uomconv_id.nextval seq_val from dual")->fetchRow();
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
    $sql = "update UOM_CONVERSION set 
                 CONVERSION_FACTOR=:CONVERSION_FACTOR
                ,CONVERSION_TYPE=:CONVERSION_TYPE
                ,ID=:ID
                ,MODIFIEDBY=:MODIFIEDBY
                ,MODIFIEDON=:MODIFIEDON
                ,UOM_FROM=:UOM_FROM
                ,UOM_TO=:UOM_TO
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0011.doDelete().");}
    $sql = "delete from UOM_CONVERSION where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0011");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CONVERSION_FACTOR
                ,CONVERSION_TYPE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,UOM_FROM
                ,UOM_TO
            from UOM_CONVERSION 
         where 
           ID= :ID
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
  "CONVERSION_FACTOR" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CONVERSION_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"UOM_FROM" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"UOM_TO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
