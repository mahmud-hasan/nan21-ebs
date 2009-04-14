<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0022 Controller: Menu items
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0022 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LINK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "LINK like :LINK";
      $params["LINK"] = $_REQUEST["QRY_LINK"];
    }
    if (!empty($_REQUEST["QRY_MENUBAR_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MENUBAR_CODE like :MENUBAR_CODE";
      $params["MENUBAR_CODE"] = $_REQUEST["QRY_MENUBAR_CODE"];
    }
    if (!empty($_REQUEST["QRY_MENUITEM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "MENUITEM_ID like :MENUITEM_ID";
      $params["MENUITEM_ID"] = $_REQUEST["QRY_MENUITEM_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
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
                ACTIVE
                ,CODE
                ,CREATEDBY
                ,CREATEDON
                ,ID
                ,LINK
                ,MENUBAR_CODE
                ,MENUITEM_ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NAME
                ,(select t.name from menuitem t where t.id = menuitem.menuitem_id) PARENT_MENU
                ,POSITION
                ,TARGET
            from MENUITEM  $where $orderByClause ";
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
                ,MENUBAR_CODE
                ,POSITION
                ,NAME
                ,LINK
                ,MENUITEM_ID
                ,(select t.name from menuitem t where t.id = menuitem.menuitem_id) PARENT_MENU
                ,CODE
                ,TARGET
                ,CREATEDON
                ,CREATEDBY
                ,MODIFIEDON
                ,MODIFIEDBY
                ,ACTIVE
            from MENUITEM  $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0022.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into MENUITEM(
                 ACTIVE
                ,CODE
                ,CREATEDBY
                ,ID
                ,LINK
                ,MENUBAR_CODE
                ,MENUITEM_ID
                ,MODIFIEDBY
                ,NAME
                ,POSITION
                ,TARGET
            ) values ( 
                 :ACTIVE
                ,:CODE
                ,:CREATEDBY
                ,:ID
                ,:LINK
                ,:MENUBAR_CODE
                ,:MENUITEM_ID
                ,:MODIFIEDBY
                ,:NAME
                ,:POSITION
                ,:TARGET
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_menuitem_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0022.doUpdate().");}
    $sql = "update MENUITEM set 
                 ID=:ID
                ,MENUBAR_CODE=:MENUBAR_CODE
                ,NAME=:NAME
                ,POSITION=:POSITION
                ,MENUITEM_ID=:MENUITEM_ID
                ,CODE=:CODE
                ,LINK=:LINK
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0022.doDelete().");}
    $sql = "delete from MENUITEM where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0022");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ACTIVE
                ,CODE
                ,CREATEDBY
                ,CREATEDON
                ,ID
                ,LINK
                ,MENUBAR_CODE
                ,MENUITEM_ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,NAME
                ,(select t.name from menuitem t where t.id = menuitem.menuitem_id) PARENT_MENU
                ,POSITION
                ,TARGET
            from MENUITEM 
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
  "ACTIVE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LINK" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MENUBAR_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MENUITEM_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PARENT_MENU" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"POSITION" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TARGET" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
