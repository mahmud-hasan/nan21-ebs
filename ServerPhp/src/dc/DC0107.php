<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0107 Controller: Documents serial no
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0107 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CLIENT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_CODE like :CLIENT_CODE";
      $params["CLIENT_CODE"] = $_REQUEST["QRY_CLIENT_CODE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_DOCUMENT_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DOCUMENT_TYPE like :DOCUMENT_TYPE";
      $params["DOCUMENT_TYPE"] = $_REQUEST["QRY_DOCUMENT_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_IS_ALLOCATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.IS_ALLOCATED like :IS_ALLOCATED";
      $params["IS_ALLOCATED"] = $_REQUEST["QRY_IS_ALLOCATED"];
    }
    if (!empty($_REQUEST["QRY_SERIAL"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.SERIAL like :SERIAL";
      $params["SERIAL"] = $_REQUEST["QRY_SERIAL"];
    }
    if (!empty($_REQUEST["QRY_VALUE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.VALUE like :VALUE";
      $params["VALUE"] = $_REQUEST["QRY_VALUE"];
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
                t.CLIENT_CODE
                ,t.CLIENT_ID
                ,t.DOCUMENT_TYPE
                ,t.ID
                ,t.IS_ALLOCATED
                ,MINVAL || '-' ||MAXVAL RANGE
                ,t.SERIAL
                ,t.VALUE
            from V_DOC_SERIAL_NO t $where $orderByClause ";
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
                ,t.CLIENT_CODE
                ,t.DOCUMENT_TYPE
                ,t.SERIAL
                ,MINVAL || '-' ||MAXVAL RANGE
                ,t.VALUE
                ,t.IS_ALLOCATED
            from V_DOC_SERIAL_NO t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0107.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.CLIENT_CODE
                ,t.CLIENT_ID
                ,t.DOCUMENT_TYPE
                ,t.ID
                ,t.IS_ALLOCATED
                ,MINVAL || '-' ||MAXVAL RANGE
                ,t.SERIAL
                ,t.VALUE
            from V_DOC_SERIAL_NO t
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
  ,"DOCUMENT_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_ALLOCATED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"RANGE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SERIAL" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"VALUE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
