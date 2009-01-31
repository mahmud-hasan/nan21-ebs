<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0011 Controller: UoM conversions
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0011 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CONVERSION_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CONVERSION_TYPE like :CONVERSION_TYPE";
      $params["CONVERSION_TYPE"] = $_REQUEST["QRY_CONVERSION_TYPE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_UOM_FROM"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UOM_FROM like :UOM_FROM";
      $params["UOM_FROM"] = $_REQUEST["QRY_UOM_FROM"];
    }
    if (!empty($_REQUEST["QRY_UOM_TO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "UOM_TO like :UOM_TO";
      $params["UOM_TO"] = $_REQUEST["QRY_UOM_TO"];
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
                CONVERSION_FACTOR
                ,CONVERSION_TYPE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,UOM_FROM
                ,UOM_TO
            from UOM_CONVERSION  $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CONVERSION_FACTOR"
      ,"CONVERSION_TYPE"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"UOM_FROM"
      ,"UOM_TO"
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
                ,UOM_TO
                ,UOM_FROM
                ,CONVERSION_TYPE
                ,CONVERSION_FACTOR
                ,MODIFIEDON
                ,MODIFIEDBY
            from UOM_CONVERSION  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"UOM_TO"
     ,"UOM_FROM"
     ,"CONVERSION_TYPE"
     ,"CONVERSION_FACTOR"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0011.fetchRecord().");}
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
    $RECORD["CONVERSION_FACTOR"] = $this->getRequestParam("CONVERSION_FACTOR");
    $RECORD["CONVERSION_TYPE"] = $this->getRequestParam("CONVERSION_TYPE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["UOM_FROM"] = $this->getRequestParam("UOM_FROM");
    $RECORD["UOM_TO"] = $this->getRequestParam("UOM_TO");
    $sql = "insert into UOM_CONVERSION(
                 CONVERSION_FACTOR
                ,CONVERSION_TYPE
                ,ID
                ,MODIFIEDBY
                ,UOM_FROM
                ,UOM_TO
            ) values ( 
                 :CONVERSION_FACTOR
                ,:CONVERSION_TYPE
                ,:ID
                ,:MODIFIEDBY
                ,:UOM_FROM
                ,:UOM_TO
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_uomconv_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["CONVERSION_FACTOR"] = $this->getRequestParam("CONVERSION_FACTOR");
    $RECORD["CONVERSION_TYPE"] = $this->getRequestParam("CONVERSION_TYPE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["UOM_FROM"] = $this->getRequestParam("UOM_FROM");
    $RECORD["UOM_TO"] = $this->getRequestParam("UOM_TO");
    $sql = "update UOM_CONVERSION set 
                 CONVERSION_FACTOR=:CONVERSION_FACTOR
                ,CONVERSION_TYPE=:CONVERSION_TYPE
                ,ID=:ID
                ,MODIFIEDBY=:MODIFIEDBY
                ,MODIFIEDON=:MODIFIEDON
                ,UOM_FROM=:UOM_FROM
                ,UOM_TO=:UOM_TO
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0011.doDelete().");}
    $sql = "delete from UOM_CONVERSION where 
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
    $RECORD["CONVERSION_FACTOR"] = $this->getRequestParam("CONVERSION_FACTOR");
    $RECORD["CONVERSION_TYPE"] = $this->getRequestParam("CONVERSION_TYPE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["UOM_FROM"] = $this->getRequestParam("UOM_FROM");
    $RECORD["UOM_TO"] = $this->getRequestParam("UOM_TO");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0011");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CONVERSION_FACTOR
                ,CONVERSION_TYPE
                ,ID
                ,MODIFIEDBY
                ,MODIFIEDON
                ,UOM_FROM
                ,UOM_TO
            from UOM_CONVERSION 
         where 
           ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CONVERSION_FACTOR" => array("DATA_TYPE" => "NUMBER")
  ,"CONVERSION_TYPE" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"UOM_FROM" => array("DATA_TYPE" => "STRING")
  ,"UOM_TO" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CONVERSION_FACTOR"] )) { $RECORD["CONVERSION_FACTOR"] = $this->getRequestParam("CONVERSION_FACTOR"); }
     if (isset($_REQUEST["CONVERSION_TYPE"] )) { $RECORD["CONVERSION_TYPE"] = $this->getRequestParam("CONVERSION_TYPE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["UOM_FROM"] )) { $RECORD["UOM_FROM"] = $this->getRequestParam("UOM_FROM"); }
     if (isset($_REQUEST["UOM_TO"] )) { $RECORD["UOM_TO"] = $this->getRequestParam("UOM_TO"); }
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
