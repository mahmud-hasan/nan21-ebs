<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0012 Controller: Currency exchange rates
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0012 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY_FROM"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CURRENCY_FROM like :CURRENCY_FROM";
      $params["CURRENCY_FROM"] = $_REQUEST["QRY_CURRENCY_FROM"];
    }
    if (!empty($_REQUEST["QRY_VALID_FROM"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "VALID_FROM like :VALID_FROM";
      $params["VALID_FROM"] = $_REQUEST["QRY_VALID_FROM"];
    }
    if (!empty($_REQUEST["QRY_VALID_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "VALID_TO like :VALID_TO";
      $params["VALID_TO"] = $_REQUEST["QRY_VALID_TO"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CURRENCY_TO like :CURRENCY_TO";
      $params["CURRENCY_TO"] = $_REQUEST["QRY_CURRENCY_TO"];
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
                ID
                ,CURRENCY_FROM
                ,XRATE
                ,MODIFIEDON
                ,VALID_FROM
                ,VALID_TO
                ,CURRENCY_TO
            from CURRENCY_XRATE  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"CURRENCY_FROM"
      ,"XRATE"
      ,"MODIFIEDON"
      ,"VALID_FROM"
      ,"VALID_TO"
      ,"CURRENCY_TO"
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
                ,CURRENCY_FROM
                ,CURRENCY_TO
                ,XRATE
                ,VALID_FROM
                ,VALID_TO
                ,MODIFIEDON
            from CURRENCY_XRATE  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CURRENCY_FROM"
     ,"CURRENCY_TO"
     ,"XRATE"
     ,"VALID_FROM"
     ,"VALID_TO"
     ,"MODIFIEDON"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0012.fetchRecord().");}
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
    $RECORD["CURRENCY_FROM"] = $this->getRequestParam("CURRENCY_FROM");
    $RECORD["CURRENCY_TO"] = $this->getRequestParam("CURRENCY_TO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["VALID_FROM"] = $this->getRequestParam("VALID_FROM");
    $RECORD["VALID_TO"] = $this->getRequestParam("VALID_TO");
    $RECORD["XRATE"] = $this->getRequestParam("XRATE");
    $sql = "insert into CURRENCY_XRATE(
                 ID
                ,CURRENCY_FROM
                ,XRATE
                ,VALID_FROM
                ,VALID_TO
                ,CURRENCY_TO
            ) values ( 
                 :ID
                ,:CURRENCY_FROM
                ,:XRATE
                ,:VALID_FROM
                ,:VALID_TO
                ,:CURRENCY_TO
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_CRNCYXRATE_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CURRENCY_FROM"] = $this->getRequestParam("CURRENCY_FROM");
    $RECORD["CURRENCY_TO"] = $this->getRequestParam("CURRENCY_TO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["VALID_FROM"] = $this->getRequestParam("VALID_FROM");
    $RECORD["VALID_TO"] = $this->getRequestParam("VALID_TO");
    $RECORD["XRATE"] = $this->getRequestParam("XRATE");
    $sql = "update CURRENCY_XRATE set 
                 CURRENCY_FROM=:CURRENCY_FROM
                ,CURRENCY_TO=:CURRENCY_TO
                ,ID=:ID
                ,MODIFIEDON=:MODIFIEDON
                ,VALID_FROM=:VALID_FROM
                ,VALID_TO=:VALID_TO
                ,XRATE=:XRATE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0012.doDelete().");}
    $sql = "delete from CURRENCY_XRATE where 
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
    $RECORD["CURRENCY_FROM"] = $this->getRequestParam("CURRENCY_FROM");
    $RECORD["CURRENCY_TO"] = $this->getRequestParam("CURRENCY_TO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["VALID_FROM"] = $this->getRequestParam("VALID_FROM");
    $RECORD["VALID_TO"] = $this->getRequestParam("VALID_TO");
    $RECORD["XRATE"] = $this->getRequestParam("XRATE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0012");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ID
                ,CURRENCY_FROM
                ,XRATE
                ,MODIFIEDON
                ,VALID_FROM
                ,VALID_TO
                ,CURRENCY_TO
            from CURRENCY_XRATE 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"CURRENCY_FROM" => array("DATA_TYPE" => "STRING")
  ,"XRATE" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"VALID_FROM" => array("DATA_TYPE" => "DATE")
  ,"VALID_TO" => array("DATA_TYPE" => "DATE")
  ,"CURRENCY_TO" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY_FROM"] )) { $RECORD["CURRENCY_FROM"] = $this->getRequestParam("CURRENCY_FROM"); }
     if (isset($_REQUEST["CURRENCY_TO"] )) { $RECORD["CURRENCY_TO"] = $this->getRequestParam("CURRENCY_TO"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["VALID_FROM"] )) { $RECORD["VALID_FROM"] = $this->getRequestParam("VALID_FROM"); }
     if (isset($_REQUEST["VALID_TO"] )) { $RECORD["VALID_TO"] = $this->getRequestParam("VALID_TO"); }
     if (isset($_REQUEST["XRATE"] )) { $RECORD["XRATE"] = $this->getRequestParam("XRATE"); }
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
