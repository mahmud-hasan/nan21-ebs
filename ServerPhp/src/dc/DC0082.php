<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0082 Controller: Organizations hierarchy
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0082 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_COSTCENTER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.COSTCENTER_ID like :COSTCENTER_ID";
      $params["COSTCENTER_ID"] = $_REQUEST["QRY_COSTCENTER_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_ORG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ORG_ID like :ORG_ID";
      $params["ORG_ID"] = $_REQUEST["QRY_ORG_ID"];
    }
    if (!empty($_REQUEST["QRY_ORG_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "o.ORG_TYPE like :ORG_TYPE";
      $params["ORG_TYPE"] = $_REQUEST["QRY_ORG_TYPE"];
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
                o.ACTIVE
                ,o.BPARTNER_ID
                ,pbo_client.get_code_by_id(o.client_id) CLIENT_CODE
                ,o.CLIENT_ID
                ,o.COSTCENTER_ID
                ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME
                ,o.COSTMETHOD_CODE
                ,o.CREATEDBY
                ,o.CREATEDON
                ,o.ID
                ,o.MODIFIEDBY
                ,o.MODIFIEDON
                ,o.NAME
                ,o.NOTES
                ,o.ORG_ID
                ,o.ORG_TYPE
            from ORGANIZATION o $where $orderByClause ";
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
                o.ID
                ,pbo_client.get_code_by_id(o.client_id) CLIENT_CODE
                ,o.CLIENT_ID
                ,o.NAME
                ,o.ORG_TYPE
                ,o.ORG_ID
                ,o.COSTMETHOD_CODE
                ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME
                ,o.COSTCENTER_ID
                ,o.BPARTNER_ID
                ,o.NOTES
                ,o.ACTIVE
                ,o.CREATEDON
                ,o.CREATEDBY
                ,o.MODIFIEDON
                ,o.MODIFIEDBY
            from ORGANIZATION o $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0082.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into ORGANIZATION(
                 ACTIVE
                ,BPARTNER_ID
                ,CLIENT_ID
                ,COSTCENTER_ID
                ,COSTMETHOD_CODE
                ,ID
                ,NAME
                ,NOTES
                ,ORG_ID
                ,ORG_TYPE
            ) values ( 
                 :ACTIVE
                ,:BPARTNER_ID
                ,:CLIENT_ID
                ,:COSTCENTER_ID
                ,:COSTMETHOD_CODE
                ,:ID
                ,:NAME
                ,:NOTES
                ,:ORG_ID
                ,:ORG_TYPE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_ORG_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0082.doUpdate().");}
    $sql = "update ORGANIZATION set 
                 COSTCENTER_ID=:COSTCENTER_ID
                ,ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,NAME=:NAME
                ,ORG_ID=:ORG_ID
                ,ORG_TYPE=:ORG_TYPE
                ,BPARTNER_ID=:BPARTNER_ID
                ,COSTMETHOD_CODE=:COSTMETHOD_CODE
                ,NOTES=:NOTES
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0082.doDelete().");}
    $sql = "delete from ORGANIZATION where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0082");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                o.ACTIVE
                ,o.BPARTNER_ID
                ,pbo_client.get_code_by_id(o.client_id) CLIENT_CODE
                ,o.CLIENT_ID
                ,o.COSTCENTER_ID
                ,pbo_org.get_costcenter_name_by_id(o.costcenter_id) COSTCENTER_NAME
                ,o.COSTMETHOD_CODE
                ,o.CREATEDBY
                ,o.CREATEDON
                ,o.ID
                ,o.MODIFIEDBY
                ,o.MODIFIEDON
                ,o.NAME
                ,o.NOTES
                ,o.ORG_ID
                ,o.ORG_TYPE
            from ORGANIZATION o
         where 
           o.ID= :ID
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
  ,"BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"COSTCENTER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"COSTCENTER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"COSTMETHOD_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ORG_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
