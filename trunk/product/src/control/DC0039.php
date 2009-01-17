<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0039 Controller: Product masterdata
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0039 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.CODE like :CODE";
      $params["CODE"] = $_REQUEST["QRY_CODE"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PROD_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.PROD_TYPE like :PROD_TYPE";
      $params["PROD_TYPE"] = $_REQUEST["QRY_PROD_TYPE"];
    }
    if (!empty($_REQUEST["QRY_SUMMARY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.SUMMARY like :SUMMARY";
      $params["SUMMARY"] = $_REQUEST["QRY_SUMMARY"];
    }
    if (!empty($_REQUEST["QRY_PRODCATEG_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.PRODCATEG_ID like :PRODCATEG_ID";
      $params["PRODCATEG_ID"] = $_REQUEST["QRY_PRODCATEG_ID"];
    }
    if (!empty($_REQUEST["QRY_ATTRGRP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "p.ATTRGRP_ID like :ATTRGRP_ID";
      $params["ATTRGRP_ID"] = $_REQUEST["QRY_ATTRGRP_ID"];
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
                p.FOR_SALE
                ,p.EXPENSE_ACCOUNT
                ,p.REVENUE_ACCOUNT
                ,p.ID
                ,p.CLIENT_ID
                ,p.CODE
                ,p.NAME
                ,p.DESCRIPTION
                ,p.PROD_TYPE
                ,p.SUMMARY
                ,p.STORABLE
                ,p.CREATEDON
                ,p.CREATEDBY
                ,p.MODIFIEDON
                ,p.MODIFIEDBY
                ,p.UOM_CODE
                ,p.VOLUME
                ,p.WEIGHT
                ,p.PRODCATEG_ID
                ,pbo_product.get_categ_name_by_id(p.prodcateg_id, 'N') PRODCATEG_CODE
                ,(select t.code from client t where t.id = p.client_id) CLIENT_NAME
                ,p.ATTRGRP_ID
                ,pbo_product.get_attrgrp_name_by_id(p.attrgrp_id, 'N' ) ATTRGRP_NAME
            from MM_PRODUCT p $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "FOR_SALE"
      ,"EXPENSE_ACCOUNT"
      ,"REVENUE_ACCOUNT"
      ,"ID"
      ,"CLIENT_ID"
      ,"CODE"
      ,"NAME"
      ,"DESCRIPTION"
      ,"PROD_TYPE"
      ,"SUMMARY"
      ,"STORABLE"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"UOM_CODE"
      ,"VOLUME"
      ,"WEIGHT"
      ,"PRODCATEG_ID"
      ,"PRODCATEG_CODE"
      ,"CLIENT_NAME"
      ,"ATTRGRP_ID"
      ,"ATTRGRP_NAME"
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
                p.ID
                ,(select t.code from client t where t.id = p.client_id) CLIENT_NAME
                ,p.CLIENT_ID
                ,p.CODE
                ,p.NAME
                ,pbo_product.get_categ_name_by_id(p.prodcateg_id, 'N') PRODCATEG_CODE
                ,p.PRODCATEG_ID
                ,p.STORABLE
                ,p.UOM_CODE
                ,p.DESCRIPTION
                ,p.EXPENSE_ACCOUNT
                ,p.REVENUE_ACCOUNT
                ,p.PROD_TYPE
                ,p.SUMMARY
                ,p.ATTRGRP_ID
                ,pbo_product.get_attrgrp_name_by_id(p.attrgrp_id, 'N' ) ATTRGRP_NAME
                ,p.VOLUME
                ,p.WEIGHT
                ,p.CREATEDON
                ,p.CREATEDBY
                ,p.MODIFIEDON
                ,p.MODIFIEDBY
                ,p.FOR_SALE
            from MM_PRODUCT p $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_NAME"
     ,"CLIENT_ID"
     ,"CODE"
     ,"NAME"
     ,"PRODCATEG_CODE"
     ,"PRODCATEG_ID"
     ,"STORABLE"
     ,"UOM_CODE"
     ,"DESCRIPTION"
     ,"EXPENSE_ACCOUNT"
     ,"REVENUE_ACCOUNT"
     ,"PROD_TYPE"
     ,"SUMMARY"
     ,"ATTRGRP_ID"
     ,"ATTRGRP_NAME"
     ,"VOLUME"
     ,"WEIGHT"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"FOR_SALE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0039.fetchRecord().");}
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
    $RECORD["ATTRGRP_ID"] = $this->getRequestParam("ATTRGRP_ID");
    $RECORD["ATTRGRP_NAME"] = $this->getRequestParam("ATTRGRP_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CODE"] = strtoupper($this->getRequestParam("CODE"));
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["EXPENSE_ACCOUNT"] = $this->getRequestParam("EXPENSE_ACCOUNT");
    $RECORD["FOR_SALE"] = $this->getRequestParamBoolean("FOR_SALE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODCATEG_CODE"] = $this->getRequestParam("PRODCATEG_CODE");
    $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID");
    $RECORD["PROD_TYPE"] = $this->getRequestParam("PROD_TYPE");
    $RECORD["REVENUE_ACCOUNT"] = $this->getRequestParam("REVENUE_ACCOUNT");
    $RECORD["STORABLE"] = $this->getRequestParamBoolean("STORABLE");
    $RECORD["SUMMARY"] = $this->getRequestParamBoolean("SUMMARY");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
    $RECORD["VOLUME"] = $this->getRequestParam("VOLUME");
    $RECORD["WEIGHT"] = $this->getRequestParam("WEIGHT");
    $sql = "insert into MM_PRODUCT(
                 FOR_SALE
                ,EXPENSE_ACCOUNT
                ,REVENUE_ACCOUNT
                ,ID
                ,CLIENT_ID
                ,CODE
                ,NAME
                ,DESCRIPTION
                ,PROD_TYPE
                ,SUMMARY
                ,STORABLE
                ,CREATEDBY
                ,MODIFIEDBY
                ,UOM_CODE
                ,VOLUME
                ,WEIGHT
                ,PRODCATEG_ID
                ,ATTRGRP_ID
            ) values ( 
                 :FOR_SALE
                ,:EXPENSE_ACCOUNT
                ,:REVENUE_ACCOUNT
                ,:ID
                ,:CLIENT_ID
                ,:CODE
                ,:NAME
                ,:DESCRIPTION
                ,:PROD_TYPE
                ,:SUMMARY
                ,:STORABLE
                ,:CREATEDBY
                ,:MODIFIEDBY
                ,:UOM_CODE
                ,:VOLUME
                ,:WEIGHT
                ,:PRODCATEG_ID
                ,:ATTRGRP_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_PROD_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ATTRGRP_ID"] = $this->getRequestParam("ATTRGRP_ID");
    $RECORD["ATTRGRP_NAME"] = $this->getRequestParam("ATTRGRP_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CODE"] = strtoupper($this->getRequestParam("CODE"));
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["EXPENSE_ACCOUNT"] = $this->getRequestParam("EXPENSE_ACCOUNT");
    $RECORD["FOR_SALE"] = $this->getRequestParamBoolean("FOR_SALE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODCATEG_CODE"] = $this->getRequestParam("PRODCATEG_CODE");
    $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID");
    $RECORD["PROD_TYPE"] = $this->getRequestParam("PROD_TYPE");
    $RECORD["REVENUE_ACCOUNT"] = $this->getRequestParam("REVENUE_ACCOUNT");
    $RECORD["STORABLE"] = $this->getRequestParamBoolean("STORABLE");
    $RECORD["SUMMARY"] = $this->getRequestParamBoolean("SUMMARY");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0039.doUpdate().");}
    $sql = "update MM_PRODUCT set 
                 FOR_SALE=:FOR_SALE
                ,EXPENSE_ACCOUNT=:EXPENSE_ACCOUNT
                ,REVENUE_ACCOUNT=:REVENUE_ACCOUNT
                ,ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,CODE=:CODE
                ,NAME=:NAME
                ,DESCRIPTION=:DESCRIPTION
                ,PROD_TYPE=:PROD_TYPE
                ,SUMMARY=:SUMMARY
                ,STORABLE=:STORABLE
                ,UOM_CODE=:UOM_CODE
                ,PRODCATEG_ID=:PRODCATEG_ID
                ,ATTRGRP_ID=:ATTRGRP_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0039.doDelete().");}
    $sql = "delete from MM_PRODUCT where 
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
    $RECORD["ATTRGRP_ID"] = $this->getRequestParam("ATTRGRP_ID");
    $RECORD["ATTRGRP_NAME"] = $this->getRequestParam("ATTRGRP_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CODE"] = $this->getRequestParam("CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["EXPENSE_ACCOUNT"] = $this->getRequestParam("EXPENSE_ACCOUNT");
    $RECORD["FOR_SALE"] = $this->getRequestParam("FOR_SALE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODCATEG_CODE"] = $this->getRequestParam("PRODCATEG_CODE");
    $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID");
    $RECORD["PROD_TYPE"] = $this->getRequestParam("PROD_TYPE");
    $RECORD["REVENUE_ACCOUNT"] = $this->getRequestParam("REVENUE_ACCOUNT");
    $RECORD["STORABLE"] = $this->getRequestParam("STORABLE");
    $RECORD["SUMMARY"] = $this->getRequestParam("SUMMARY");
    $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE");
    $RECORD["VOLUME"] = $this->getRequestParam("VOLUME");
    $RECORD["WEIGHT"] = $this->getRequestParam("WEIGHT");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0039");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                p.FOR_SALE
                ,p.EXPENSE_ACCOUNT
                ,p.REVENUE_ACCOUNT
                ,p.ID
                ,p.CLIENT_ID
                ,p.CODE
                ,p.NAME
                ,p.DESCRIPTION
                ,p.PROD_TYPE
                ,p.SUMMARY
                ,p.STORABLE
                ,p.CREATEDON
                ,p.CREATEDBY
                ,p.MODIFIEDON
                ,p.MODIFIEDBY
                ,p.UOM_CODE
                ,p.VOLUME
                ,p.WEIGHT
                ,p.PRODCATEG_ID
                ,pbo_product.get_categ_name_by_id(p.prodcateg_id, 'N') PRODCATEG_CODE
                ,(select t.code from client t where t.id = p.client_id) CLIENT_NAME
                ,p.ATTRGRP_ID
                ,pbo_product.get_attrgrp_name_by_id(p.attrgrp_id, 'N' ) ATTRGRP_NAME
            from MM_PRODUCT p
         where 
           p.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "FOR_SALE" => array("DATA_TYPE" => "BOOLEAN")
  ,"EXPENSE_ACCOUNT" => array("DATA_TYPE" => "STRING")
  ,"REVENUE_ACCOUNT" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CODE" => array("DATA_TYPE" => "STRING")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"PROD_TYPE" => array("DATA_TYPE" => "STRING")
  ,"SUMMARY" => array("DATA_TYPE" => "BOOLEAN")
  ,"STORABLE" => array("DATA_TYPE" => "BOOLEAN")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"UOM_CODE" => array("DATA_TYPE" => "STRING")
  ,"VOLUME" => array("DATA_TYPE" => "NUMBER")
  ,"WEIGHT" => array("DATA_TYPE" => "NUMBER")
  ,"PRODCATEG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODCATEG_CODE" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"ATTRGRP_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ATTRGRP_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ATTRGRP_ID"] )) { $RECORD["ATTRGRP_ID"] = $this->getRequestParam("ATTRGRP_ID"); }
     if (isset($_REQUEST["ATTRGRP_NAME"] )) { $RECORD["ATTRGRP_NAME"] = $this->getRequestParam("ATTRGRP_NAME"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CODE"] )) { $RECORD["CODE"] = $this->getRequestParam("CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["EXPENSE_ACCOUNT"] )) { $RECORD["EXPENSE_ACCOUNT"] = $this->getRequestParam("EXPENSE_ACCOUNT"); }
    $RECORD["FOR_SALE"] = $this->getRequestParamBoolean("FOR_SALE");
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["PRODCATEG_CODE"] )) { $RECORD["PRODCATEG_CODE"] = $this->getRequestParam("PRODCATEG_CODE"); }
     if (isset($_REQUEST["PRODCATEG_ID"] )) { $RECORD["PRODCATEG_ID"] = $this->getRequestParam("PRODCATEG_ID"); }
     if (isset($_REQUEST["PROD_TYPE"] )) { $RECORD["PROD_TYPE"] = $this->getRequestParam("PROD_TYPE"); }
     if (isset($_REQUEST["REVENUE_ACCOUNT"] )) { $RECORD["REVENUE_ACCOUNT"] = $this->getRequestParam("REVENUE_ACCOUNT"); }
    $RECORD["STORABLE"] = $this->getRequestParamBoolean("STORABLE");
    $RECORD["SUMMARY"] = $this->getRequestParamBoolean("SUMMARY");
     if (isset($_REQUEST["UOM_CODE"] )) { $RECORD["UOM_CODE"] = $this->getRequestParam("UOM_CODE"); }
     if (isset($_REQUEST["VOLUME"] )) { $RECORD["VOLUME"] = $this->getRequestParam("VOLUME"); }
     if (isset($_REQUEST["WEIGHT"] )) { $RECORD["WEIGHT"] = $this->getRequestParam("WEIGHT"); }
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
