<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0066 Controller: Menu shortcuts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0066 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_LINK"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.LINK like :LINK";
      $params["LINK"] = $_REQUEST["QRY_LINK"];
    }
    if (!empty($_REQUEST["QRY_MENUITEM_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.MENUITEM_ID like :MENUITEM_ID";
      $params["MENUITEM_ID"] = $_REQUEST["QRY_MENUITEM_ID"];
    }
    if (!empty($_REQUEST["QRY_MENUSHRCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.MENUSHRCT_ID like :MENUSHRCT_ID";
      $params["MENUSHRCT_ID"] = $_REQUEST["QRY_MENUSHRCT_ID"];
    }
    if (!empty($_REQUEST["QRY_OWNER"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.OWNER like :OWNER";
      $params["OWNER"] = $_REQUEST["QRY_OWNER"];
    }
    if (!empty($_REQUEST["QRY_POSITION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.POSITION like :POSITION";
      $params["POSITION"] = $_REQUEST["QRY_POSITION"];
    }
    if (!empty($_REQUEST["QRY_TITLE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ms.TITLE like :TITLE";
      $params["TITLE"] = $_REQUEST["QRY_TITLE"];
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
                ms.CREATEDBY
                ,ms.CREATEDON
                ,ms.ID
                ,ms.LINK
                ,ms.MENUITEM_ID
                ,ms.MENUSHRCT_ID
                ,ms.MODIFIEDBY
                ,ms.MODIFIEDON
                ,ms.OWNER
                ,ms.POSITION
                ,ms.TITLE
            from MENU_SHORTCUT ms $where $orderByClause ";
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
                ms.ID
                ,ms.POSITION
                ,ms.OWNER
                ,ms.TITLE
                ,ms.LINK
                ,ms.MENUSHRCT_ID
                ,ms.MENUITEM_ID
                ,ms.CREATEDON
                ,ms.CREATEDBY
                ,ms.MODIFIEDON
                ,ms.MODIFIEDBY
            from MENU_SHORTCUT ms $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0066.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $this->record["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $this->record["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $sql = "insert into MENU_SHORTCUT(
                 ID
                ,LINK
                ,MENUITEM_ID
                ,MENUSHRCT_ID
                ,OWNER
                ,POSITION
                ,TITLE
            ) values ( 
                 :ID
                ,:LINK
                ,:MENUITEM_ID
                ,:MENUSHRCT_ID
                ,:OWNER
                ,:POSITION
                ,:TITLE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_MENUSHRCT_ID.nextval seq_val from dual")->fetchRow();
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
    $sql = "update MENU_SHORTCUT set 
                 CREATEDBY=:CREATEDBY
                ,CREATEDON=:CREATEDON
                ,LINK=:LINK
                ,MENUITEM_ID=:MENUITEM_ID
                ,MENUSHRCT_ID=:MENUSHRCT_ID
                ,MODIFIEDBY=:MODIFIEDBY
                ,MODIFIEDON=:MODIFIEDON
                ,OWNER=:OWNER
                ,POSITION=:POSITION
                ,TITLE=:TITLE
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0066.doDelete().");}
    $sql = "delete from MENU_SHORTCUT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0066");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ms.CREATEDBY
                ,ms.CREATEDON
                ,ms.ID
                ,ms.LINK
                ,ms.MENUITEM_ID
                ,ms.MENUSHRCT_ID
                ,ms.MODIFIEDBY
                ,ms.MODIFIEDON
                ,ms.OWNER
                ,ms.POSITION
                ,ms.TITLE
            from MENU_SHORTCUT ms
         where 
           ms.ID= :ID
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
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"LINK" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MENUITEM_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MENUSHRCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"OWNER" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"POSITION" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"TITLE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
