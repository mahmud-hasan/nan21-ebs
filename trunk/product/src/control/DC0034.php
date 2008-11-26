<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0034 Controller: Contract types def.
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0034 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
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
                CODE
                ,NAME
                ,DESCRIPTION
                ,ACTIVE
            from CONTRACT_TYPE  $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CODE"
      ,"NAME"
      ,"DESCRIPTION"
      ,"ACTIVE"
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
                CODE
                ,NAME
                ,DESCRIPTION
                ,ACTIVE
            from CONTRACT_TYPE  $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "CODE"
     ,"NAME"
     ,"DESCRIPTION"
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    if (empty($RECORD["CODE"])) { throw new Exception("Missing value for primary key field CODE in DC0034.fetchRecord().");}
    $pkArray = array("CODE" => $RECORD["CODE"]);
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
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $sql = "insert into CONTRACT_TYPE(
                 CODE
                ,NAME
                ,DESCRIPTION
                ,ACTIVE
            ) values ( 
                 :CODE
                ,:NAME
                ,:DESCRIPTION
                ,:ACTIVE
    )";
    $stmt = $this->db->prepare($sql);
    $this->logger->debug("insert of RECORD: ".$this->logger->map2string($RECORD) );
    $this->db->Execute($stmt, $RECORD);
    $pkArray = array("CODE" => $RECORD["CODE"]);
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
    $RECORD["ACTIVE"] = $this->getRequestParam("ACTIVE");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $sql = "update CONTRACT_TYPE set 
                 CODE=:CODE
                ,NAME=:NAME
                ,DESCRIPTION=:DESCRIPTION
                ,ACTIVE=:ACTIVE
    where 
           CODE= :CODE
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
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    if (empty($RECORD["CODE"])) { throw new Exception("Missing value for primary key field CODE in DC0034.doDelete().");}
    $sql = "delete from CONTRACT_TYPE where 
           CODE= :CODE
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
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0034");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                CODE
                ,NAME
                ,DESCRIPTION
                ,ACTIVE
            from CONTRACT_TYPE 
         where 
           CODE= :CODE
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CODE" => array("DATA_TYPE" => "STRING")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
);


private function readRequest(&$RECORD) {
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
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
