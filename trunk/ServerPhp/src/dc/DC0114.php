<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0114 Controller: Parcel events
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0114 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_DEST_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DEST_ORG_ID like :DEST_ORG_ID";
      $params["DEST_ORG_ID"] = $_REQUEST["QRY_DEST_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_DEST_ORG_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.DEST_ORG_NAME like :DEST_ORG_NAME";
      $params["DEST_ORG_NAME"] = $_REQUEST["QRY_DEST_ORG_NAME"];
    }
    if (!empty($_REQUEST["QRY_EVENTTYP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EVENTTYP_ID like :EVENTTYP_ID";
      $params["EVENTTYP_ID"] = $_REQUEST["QRY_EVENTTYP_ID"];
    }
    if (!empty($_REQUEST["QRY_EVENTTYP_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EVENTTYP_NAME like :EVENTTYP_NAME";
      $params["EVENTTYP_NAME"] = $_REQUEST["QRY_EVENTTYP_NAME"];
    }
    if (!empty($_REQUEST["QRY_EVENT_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.EVENT_DATE like :EVENT_DATE";
      $params["EVENT_DATE"] = $_REQUEST["QRY_EVENT_DATE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_PARCEL_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PARCEL_CODE like :PARCEL_CODE";
      $params["PARCEL_CODE"] = $_REQUEST["QRY_PARCEL_CODE"];
    }
    if (!empty($_REQUEST["QRY_PARCEL_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PARCEL_ID like :PARCEL_ID";
      $params["PARCEL_ID"] = $_REQUEST["QRY_PARCEL_ID"];
    }
    if (!empty($_REQUEST["QRY_SRC_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.SRC_ORG_ID like :SRC_ORG_ID";
      $params["SRC_ORG_ID"] = $_REQUEST["QRY_SRC_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_SRC_ORG_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.SRC_ORG_NAME like :SRC_ORG_NAME";
      $params["SRC_ORG_NAME"] = $_REQUEST["QRY_SRC_ORG_NAME"];
    }
}

public function doQuery() {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),40);
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
                t.CREATEDBY
                ,t.CREATEDON
                ,t.DEST_ORG_ID
                ,t.DEST_ORG_NAME
                ,t.EVENTTYP_ID
                ,t.EVENTTYP_NAME
                ,t.EVENT_DATE
                ,t.ID
                ,t.PARCEL_CODE
                ,t.PARCEL_ID
                ,t.SRC_ORG_ID
                ,t.SRC_ORG_NAME
            from v_parcel_event t $where $orderByClause ";
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
    $limit = nvl($this->getRequestParam("limit"),40);
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
                ,t.PARCEL_ID
                ,t.PARCEL_CODE
                ,t.EVENT_DATE
                ,t.EVENTTYP_ID
                ,t.EVENTTYP_NAME
                ,t.SRC_ORG_ID
                ,t.SRC_ORG_NAME
                ,t.DEST_ORG_NAME
                ,t.DEST_ORG_ID
                ,t.CREATEDON
                ,t.CREATEDBY
            from v_parcel_event t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0114.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.CREATEDBY
                ,t.CREATEDON
                ,t.DEST_ORG_ID
                ,t.DEST_ORG_NAME
                ,t.EVENTTYP_ID
                ,t.EVENTTYP_NAME
                ,t.EVENT_DATE
                ,t.ID
                ,t.PARCEL_CODE
                ,t.PARCEL_ID
                ,t.SRC_ORG_ID
                ,t.SRC_ORG_NAME
            from v_parcel_event t
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
  "CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DEST_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EVENTTYP_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EVENTTYP_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EVENT_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"PARCEL_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PARCEL_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"SRC_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"SRC_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
