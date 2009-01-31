<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0066 Controller: Menu shortcuts
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0066 extends Controller {


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
  try {
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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CREATEDBY"
      ,"CREATEDON"
      ,"ID"
      ,"LINK"
      ,"MENUITEM_ID"
      ,"MENUSHRCT_ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"OWNER"
      ,"POSITION"
      ,"TITLE"
      );
    $dataOut = $this->serializeCursor($rs,$columns, $this->query_data_format);
    if ($this->query_data_format == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doQuery  */


public function doExport() {
  try {
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"POSITION"
     ,"OWNER"
     ,"TITLE"
     ,"LINK"
     ,"MENUSHRCT_ID"
     ,"MENUITEM_ID"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    if ($this->getExpFormat() == "csv" ) {
      $dataOut = $this->serializeCursor($rs,$columns,"csv");
    } else {
      $dataOut = $this->serializeCursor($rs,$columns,"xml");
      $dataOut = "<records>".$dataOut."</records>";
      $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
      $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
      $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
      $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
      $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    }
    $this->beginExport();
    print $dataOut;
    $this->endExport();
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doExport  */


public function fetchRecord() {
  try {
    $RECORD = array();
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0066.fetchRecord().");}
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */


public function doInsert() {
  $this->logger->debug("start: ".$this->dcName.".doInsert");
  try {
    $RECORD = array();
    $RECORD["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $RECORD["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINK"] = $this->getRequestParam("LINK");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MENUSHRCT_ID"] = $this->getRequestParam("MENUSHRCT_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["OWNER"] = $this->getRequestParam("OWNER");
    $RECORD["POSITION"] = $this->getRequestParam("POSITION");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
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
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_MENUSHRCT_ID.nextval seq_val from dual")->fetchRow();
    $RECORD["ID"] = $_seq["SEQ_VAL"];
    $this->logger->debug("insert of RECORD: ".$this->logger->map2string($RECORD) );
    $this->db->Execute($stmt, $RECORD);
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("end: ".$this->dcName.".doInsert");
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doInsert */


public function doUpdate() {
  try {
    $RECORD["_p_record_status"] = $this->getRequestParam("_p_record_status");
    $RECORD["_p_store_recId"] = $this->getRequestParam("_p_store_recId");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINK"] = $this->getRequestParam("LINK");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MENUSHRCT_ID"] = $this->getRequestParam("MENUSHRCT_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["OWNER"] = $this->getRequestParam("OWNER");
    $RECORD["POSITION"] = $this->getRequestParam("POSITION");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
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
    $stmt = $this->db->prepare($sql);
    $this->db->Execute($stmt, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doUpdate */


public function doDelete() {
  $this->logger->debug("Start: ".$this->dcName.".doDelete");
  try {
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0066.doDelete().");}
    $sql = "delete from MENU_SHORTCUT where 
           ID= :ID
    ";
    $stmt = $this->db->prepare($sql);
    $this->db->Execute($stmt, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".doDelete");
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doDelete */


public function initNewRecord() {
  try {
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINK"] = $this->getRequestParam("LINK");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MENUSHRCT_ID"] = $this->getRequestParam("MENUSHRCT_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["OWNER"] = $this->getRequestParam("OWNER");
    $RECORD["POSITION"] = $this->getRequestParam("POSITION");
    $RECORD["TITLE"] = $this->getRequestParam("TITLE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0066");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"LINK" => array("DATA_TYPE" => "STRING")
  ,"MENUITEM_ID" => array("DATA_TYPE" => "NUMBER")
  ,"MENUSHRCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"OWNER" => array("DATA_TYPE" => "STRING")
  ,"POSITION" => array("DATA_TYPE" => "NUMBER")
  ,"TITLE" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LINK"] )) { $RECORD["LINK"] = $this->getRequestParam("LINK"); }
     if (isset($_REQUEST["MENUITEM_ID"] )) { $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID"); }
     if (isset($_REQUEST["MENUSHRCT_ID"] )) { $RECORD["MENUSHRCT_ID"] = $this->getRequestParam("MENUSHRCT_ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["OWNER"] )) { $RECORD["OWNER"] = $this->getRequestParam("OWNER"); }
     if (isset($_REQUEST["POSITION"] )) { $RECORD["POSITION"] = $this->getRequestParam("POSITION"); }
     if (isset($_REQUEST["TITLE"] )) { $RECORD["TITLE"] = $this->getRequestParam("TITLE"); }
} /* end function readRequest  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
  try {
    $RECORD = array();
    $this->readRequest($RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
  }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
  }
} /* end function callProcedure */

}
?>
