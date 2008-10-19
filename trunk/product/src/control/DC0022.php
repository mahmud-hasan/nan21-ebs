<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0022 Controller: Menu items
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0022 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
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
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_POSITION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "POSITION like :POSITION";
      $params["POSITION"] = $_REQUEST["QRY_POSITION"];
    }
    if (!empty($_REQUEST["QRY_TARGET"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "TARGET like :TARGET";
      $params["TARGET"] = $_REQUEST["QRY_TARGET"];
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
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACTIVE"
      ,"CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"ID"
      ,"LINK"
      ,"MENUBAR_CODE"
      ,"MENUITEM_ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NAME"
      ,"PARENT_MENU"
      ,"POSITION"
      ,"TARGET"
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
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"MENUBAR_CODE"
     ,"POSITION"
     ,"NAME"
     ,"LINK"
     ,"MENUITEM_ID"
     ,"PARENT_MENU"
     ,"CODE"
     ,"TARGET"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"ACTIVE"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    $dataOut = $this->serializeCursor($rs,$columns,"xml");
    $dataOut = "<records>".$dataOut."</records>";
    $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
    $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
    $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
    $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
    $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0022.fetchRecord().");}
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
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINK"] = $this->getRequestParam("LINK");
    $RECORD["MENUBAR_CODE"] = $this->getRequestParam("MENUBAR_CODE");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PARENT_MENU"] = $this->getRequestParam("PARENT_MENU");
    $RECORD["POSITION"] = $this->getRequestParam("POSITION");
    $RECORD["TARGET"] = $this->getRequestParam("TARGET");
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
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_menuitem_id.nextval seq_val from dual")->fetchRow();
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
  $this->logger->debug("Start: ".$this->dcName.".doUpdate");
  try {
    $RECORD = array();
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINK"] = $this->getRequestParam("LINK");
    $RECORD["MENUBAR_CODE"] = $this->getRequestParam("MENUBAR_CODE");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PARENT_MENU"] = $this->getRequestParam("PARENT_MENU");
    $RECORD["POSITION"] = $this->getRequestParam("POSITION");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0022.doUpdate().");}
    $sql = "update MENUITEM set 
                 ACTIVE=:ACTIVE
                ,CODE=:CODE
                ,ID=:ID
                ,LINK=:LINK
                ,MENUBAR_CODE=:MENUBAR_CODE
                ,MENUITEM_ID=:MENUITEM_ID
                ,NAME=:NAME
                ,POSITION=:POSITION
    where 
           ID= :ID
    ";
    $stmt = $this->db->prepare($sql);
    $this->logger->debug("update of RECORD: ".$this->logger->map2string($RECORD) );
    $this->db->Execute($stmt, $RECORD);
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".doUpdate");
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doUpdate */


public function doDelete() {
  $this->logger->debug("Start: ".$this->dcName.".doDelete");
  try {
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0022.doDelete().");}
    $sql = "delete from MENUITEM where 
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
    $RECORD["ACTIVE"] = $this->getRequestParam("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LINK"] = $this->getRequestParam("LINK");
    $RECORD["MENUBAR_CODE"] = $this->getRequestParam("MENUBAR_CODE");
    $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PARENT_MENU"] = $this->getRequestParam("PARENT_MENU");
    $RECORD["POSITION"] = $this->getRequestParam("POSITION");
    $RECORD["TARGET"] = $this->getRequestParam("TARGET");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0022");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
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
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"LINK" => array("DATA_TYPE" => "STRING")
  ,"MENUBAR_CODE" => array("DATA_TYPE" => "STRING")
  ,"MENUITEM_ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"PARENT_MENU" => array("DATA_TYPE" => "STRING")
  ,"POSITION" => array("DATA_TYPE" => "NUMBER")
  ,"TARGET" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LINK"] )) { $RECORD["LINK"] = $this->getRequestParam("LINK"); }
     if (isset($_REQUEST["MENUBAR_CODE"] )) { $RECORD["MENUBAR_CODE"] = $this->getRequestParam("MENUBAR_CODE"); }
     if (isset($_REQUEST["MENUITEM_ID"] )) { $RECORD["MENUITEM_ID"] = $this->getRequestParam("MENUITEM_ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["PARENT_MENU"] )) { $RECORD["PARENT_MENU"] = $this->getRequestParam("PARENT_MENU"); }
     if (isset($_REQUEST["POSITION"] )) { $RECORD["POSITION"] = $this->getRequestParam("POSITION"); }
     if (isset($_REQUEST["TARGET"] )) { $RECORD["TARGET"] = $this->getRequestParam("TARGET"); }
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
