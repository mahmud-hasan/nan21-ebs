<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0033 Controller: Acc schema attributes definition
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0033 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CREATEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CREATEDBY like :CREATEDBY";
      $params["CREATEDBY"] = $_REQUEST["QRY_CREATEDBY"];
    }
    if (!empty($_REQUEST["QRY_CREATEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CREATEDON like :CREATEDON";
      $params["CREATEDON"] = $_REQUEST["QRY_CREATEDON"];
    }
    if (!empty($_REQUEST["QRY_DESCRIPTION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "DESCRIPTION like :DESCRIPTION";
      $params["DESCRIPTION"] = $_REQUEST["QRY_DESCRIPTION"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDBY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MODIFIEDBY like :MODIFIEDBY";
      $params["MODIFIEDBY"] = $_REQUEST["QRY_MODIFIEDBY"];
    }
    if (!empty($_REQUEST["QRY_MODIFIEDON"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MODIFIEDON like :MODIFIEDON";
      $params["MODIFIEDON"] = $_REQUEST["QRY_MODIFIEDON"];
    }
    if (!empty($_REQUEST["QRY_PROPERTY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PROPERTY_NAME like :PROPERTY_NAME";
      $params["PROPERTY_NAME"] = $_REQUEST["QRY_PROPERTY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PROPERTY_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "PROPERTY_TYPE like :PROPERTY_TYPE";
      $params["PROPERTY_TYPE"] = $_REQUEST["QRY_PROPERTY_TYPE"];
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
                CREATEDBY
                ,CREATEDON
                ,DESCRIPTION
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,PROPERTY_NAME
                ,PROPERTY_TYPE
            from ACC_SCHEMA_ATTR_DEF  $where $orderByClause ";
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
                ,PROPERTY_NAME
                ,PROPERTY_TYPE
                ,DESCRIPTION
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
            from ACC_SCHEMA_ATTR_DEF  $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0033.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into ACC_SCHEMA_ATTR_DEF(
                 CREATEDBY
                ,DESCRIPTION
                ,ID
                ,MODIFIEDBY
                ,PROPERTY_NAME
                ,PROPERTY_TYPE
            ) values ( 
                 :CREATEDBY
                ,:DESCRIPTION
                ,:ID
                ,:MODIFIEDBY
                ,:PROPERTY_NAME
                ,:PROPERTY_TYPE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_ACCSCHATTRDEF_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0033.doUpdate().");}
    $sql = "update ACC_SCHEMA_ATTR_DEF set 
                 ID=:ID
                ,PROPERTY_NAME=:PROPERTY_NAME
                ,PROPERTY_TYPE=:PROPERTY_TYPE
                ,DESCRIPTION=:DESCRIPTION
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0033.doDelete().");}
    $sql = "delete from ACC_SCHEMA_ATTR_DEF where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0033");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CREATEDBY
                ,CREATEDON
                ,DESCRIPTION
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,PROPERTY_NAME
                ,PROPERTY_TYPE
            from ACC_SCHEMA_ATTR_DEF 
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
  "CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DESCRIPTION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"PROPERTY_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PROPERTY_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
