<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0069 Controller: Contacts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0069 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_FIRSTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.FIRSTNAME like :FIRSTNAME";
      $params["FIRSTNAME"] = $_REQUEST["QRY_FIRSTNAME"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LASTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.LASTNAME like :LASTNAME";
      $params["LASTNAME"] = $_REQUEST["QRY_LASTNAME"];
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
                c.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(c.bpartner_id) BPARTNER_NAME
                ,c.CREATEDBY
                ,c.CREATEDON
                ,c.EMAIL
                ,c.FAX
                ,c.FIRSTNAME
                ,c.ID
                ,c.LASTNAME
                ,c.MOBILE
                ,c.MODIFIEDBY
                ,c.MODIFIEDON
                ,c.NAME
                ,c.NOTES
                ,c.PHONE
            from BP_CONTACT c $where $orderByClause ";
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
                c.ID
                ,c.BPARTNER_ID
                ,c.NAME
                ,pbo_bpartner.get_name_by_id(c.bpartner_id) BPARTNER_NAME
                ,c.FIRSTNAME
                ,c.LASTNAME
                ,c.PHONE
                ,c.EMAIL
                ,c.FAX
                ,c.NOTES
                ,c.MOBILE
                ,c.CREATEDON
                ,c.CREATEDBY
                ,c.MODIFIEDON
                ,c.MODIFIEDBY
            from BP_CONTACT c $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0069.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into BP_CONTACT(
                 BPARTNER_ID
                ,EMAIL
                ,FAX
                ,FIRSTNAME
                ,ID
                ,LASTNAME
                ,MOBILE
                ,NAME
                ,NOTES
                ,PHONE
            ) values ( 
                 :BPARTNER_ID
                ,:EMAIL
                ,:FAX
                ,:FIRSTNAME
                ,:ID
                ,:LASTNAME
                ,:MOBILE
                ,:NAME
                ,:NOTES
                ,:PHONE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0069.doUpdate().");}
    $sql = "update BP_CONTACT set 
                 ID=:ID
                ,BPARTNER_ID=:BPARTNER_ID
                ,FIRSTNAME=:FIRSTNAME
                ,LASTNAME=:LASTNAME
                ,PHONE=:PHONE
                ,EMAIL=:EMAIL
                ,FAX=:FAX
                ,NOTES=:NOTES
                ,MOBILE=:MOBILE
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0069.doDelete().");}
    $sql = "delete from BP_CONTACT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0069");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                c.BPARTNER_ID
                ,pbo_bpartner.get_name_by_id(c.bpartner_id) BPARTNER_NAME
                ,c.CREATEDBY
                ,c.CREATEDON
                ,c.EMAIL
                ,c.FAX
                ,c.FIRSTNAME
                ,c.ID
                ,c.LASTNAME
                ,c.MOBILE
                ,c.MODIFIEDBY
                ,c.MODIFIEDON
                ,c.NAME
                ,c.NOTES
                ,c.PHONE
            from BP_CONTACT c
         where 
           c.ID= :ID
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
  "BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"EMAIL" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"FAX" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"FIRSTNAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LASTNAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MOBILE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PHONE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
