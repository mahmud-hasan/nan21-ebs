<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0038 Controller: Product categories
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0038 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PRODCATEG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "pc.PRODCATEG_ID like :PRODCATEG_ID";
      $params["PRODCATEG_ID"] = $_REQUEST["QRY_PRODCATEG_ID"];
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
                pc.ACTIVE
                ,pc.CODE
                ,pc.CREATEDBY
                ,pc.CREATEDON
                ,pc.DESCRIPTION
                ,pc.ID
                ,pc.MODIFIEDBY
                ,pc.MODIFIEDON
                ,pc.NAME
                ,pc.PRODCATEG_ID
                ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME
            from MM_PRODUCT_CATEGORY pc $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ACTIVE"
      ,"CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"DESCRIPTION"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NAME"
      ,"PRODCATEG_ID"
      ,"PRODCATEG_NAME"
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
                pc.ID
                ,pc.CODE
                ,pc.NAME
                ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME
                ,pc.PRODCATEG_ID
                ,pc.DESCRIPTION
                ,pc.ACTIVE
                ,pc.CREATEDON
                ,pc.CREATEDBY
                ,pc.MODIFIEDON
                ,pc.MODIFIEDBY
            from MM_PRODUCT_CATEGORY pc $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CODE"
     ,"NAME"
     ,"PRODCATEG_NAME"
     ,"PRODCATEG_ID"
     ,"DESCRIPTION"
     ,"ACTIVE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0038.fetchRecord().");}
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
    $RECORD["CODE"] = strtoupper($this->getRequestParam("CODE"));
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID");
    $RECORD["PRODCATEG_NAME"] = $this->getRequestParam("PRODCATEG_NAME");
    $sql = "insert into MM_PRODUCT_CATEGORY(
                 ACTIVE
                ,CODE
                ,CREATEDBY
                ,DESCRIPTION
                ,ID
                ,MODIFIEDBY
                ,NAME
                ,PRODCATEG_ID
            ) values ( 
                 :ACTIVE
                ,:CODE
                ,:CREATEDBY
                ,:DESCRIPTION
                ,:ID
                ,:MODIFIEDBY
                ,:NAME
                ,:PRODCATEG_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select seq_prodcateg_id.nextval seq_val from dual")->fetchRow();
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
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID");
    $RECORD["PRODCATEG_NAME"] = $this->getRequestParam("PRODCATEG_NAME");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0038.doUpdate().");}
    $sql = "update MM_PRODUCT_CATEGORY set 
                 ACTIVE=:ACTIVE
                ,DESCRIPTION=:DESCRIPTION
                ,ID=:ID
                ,NAME=:NAME
                ,PRODCATEG_ID=:PRODCATEG_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0038.doDelete().");}
    $sql = "delete from MM_PRODUCT_CATEGORY where 
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
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID");
    $RECORD["PRODCATEG_NAME"] = $this->getRequestParam("PRODCATEG_NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0038");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pc.ACTIVE
                ,pc.CODE
                ,pc.CREATEDBY
                ,pc.CREATEDON
                ,pc.DESCRIPTION
                ,pc.ID
                ,pc.MODIFIEDBY
                ,pc.MODIFIEDON
                ,pc.NAME
                ,pc.PRODCATEG_ID
                ,pbo_product.get_categ_name_by_id(pc.prodcateg_id) PRODCATEG_NAME
            from MM_PRODUCT_CATEGORY pc
         where 
           pc.ID= :ID
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
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"PRODCATEG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODCATEG_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
    $RECORD["ACTIVE"] = $this->getRequestParamBoolean("ACTIVE");
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["PRODCATEG_ID"] )) { $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID"); }
     if (isset($_REQUEST["PRODCATEG_NAME"] )) { $RECORD["PRODCATEG_NAME"] = $this->getRequestParam("PRODCATEG_NAME"); }
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
