<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0074 Controller: Define prod. attributes
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0074 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_DATA_TYPE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.DATA_TYPE like :DATA_TYPE";
      $params["DATA_TYPE"] = $_REQUEST["QRY_DATA_TYPE"];
    }
    if (!empty($_REQUEST["QRY_PRODATTRGRP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.PRODATTRGRP_ID like :PRODATTRGRP_ID";
      $params["PRODATTRGRP_ID"] = $_REQUEST["QRY_PRODATTRGRP_ID"];
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
                ( select p.name from MM_PROD_ATTR_GRP p where p.id = a.PRODATTRGRP_ID) PRODATTRGRP_NAME
                ,a.ID
                ,a.NAME
                ,a.DESCRIPTION
                ,a.DATA_TYPE
                ,a.CREATEDON
                ,a.CREATEDBY
                ,a.MODIFIEDON
                ,a.MODIFIEDBY
                ,a.PRODATTRGRP_ID
            from MM_PROD_ATTR a $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "PRODATTRGRP_NAME"
      ,"ID"
      ,"NAME"
      ,"DESCRIPTION"
      ,"DATA_TYPE"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"PRODATTRGRP_ID"
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
                a.ID
                ,a.NAME
                ,a.DATA_TYPE
                ,a.PRODATTRGRP_ID
                ,( select p.name from MM_PROD_ATTR_GRP p where p.id = a.PRODATTRGRP_ID) PRODATTRGRP_NAME
                ,a.DESCRIPTION
                ,a.CREATEDON
                ,a.CREATEDBY
                ,a.MODIFIEDON
                ,a.MODIFIEDBY
            from MM_PROD_ATTR a $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"NAME"
     ,"DATA_TYPE"
     ,"PRODATTRGRP_ID"
     ,"PRODATTRGRP_NAME"
     ,"DESCRIPTION"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0074.fetchRecord().");}
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
    $RECORD["DATA_TYPE"] = $this->getRequestParam("DATA_TYPE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODATTRGRP_ID"] = $this->getRequestParam("PRODATTRGRP_ID");
    $RECORD["PRODATTRGRP_NAME"] = $this->getRequestParam("PRODATTRGRP_NAME");
    $sql = "insert into MM_PROD_ATTR(
                 ID
                ,NAME
                ,DESCRIPTION
                ,DATA_TYPE
                ,PRODATTRGRP_ID
            ) values ( 
                 :ID
                ,:NAME
                ,:DESCRIPTION
                ,:DATA_TYPE
                ,:PRODATTRGRP_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_PRDATTR_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["DATA_TYPE"] = $this->getRequestParam("DATA_TYPE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODATTRGRP_ID"] = $this->getRequestParam("PRODATTRGRP_ID");
    $RECORD["PRODATTRGRP_NAME"] = $this->getRequestParam("PRODATTRGRP_NAME");
    $sql = "update MM_PROD_ATTR set 
                 CREATEDBY=:CREATEDBY
                ,CREATEDON=:CREATEDON
                ,DATA_TYPE=:DATA_TYPE
                ,DESCRIPTION=:DESCRIPTION
                ,ID=:ID
                ,MODIFIEDBY=:MODIFIEDBY
                ,MODIFIEDON=:MODIFIEDON
                ,NAME=:NAME
                ,PRODATTRGRP_ID=:PRODATTRGRP_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0074.doDelete().");}
    $sql = "delete from MM_PROD_ATTR where 
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
    $RECORD["DATA_TYPE"] = $this->getRequestParam("DATA_TYPE");
    $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["PRODATTRGRP_ID"] = $this->getRequestParam("PRODATTRGRP_ID");
    $RECORD["PRODATTRGRP_NAME"] = $this->getRequestParam("PRODATTRGRP_NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0074");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ( select p.name from MM_PROD_ATTR_GRP p where p.id = a.PRODATTRGRP_ID) PRODATTRGRP_NAME
                ,a.ID
                ,a.NAME
                ,a.DESCRIPTION
                ,a.DATA_TYPE
                ,a.CREATEDON
                ,a.CREATEDBY
                ,a.MODIFIEDON
                ,a.MODIFIEDBY
                ,a.PRODATTRGRP_ID
            from MM_PROD_ATTR a
         where 
           a.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "PRODATTRGRP_NAME" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"DESCRIPTION" => array("DATA_TYPE" => "STRING")
  ,"DATA_TYPE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"PRODATTRGRP_ID" => array("DATA_TYPE" => "NUMBER")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DATA_TYPE"] )) { $RECORD["DATA_TYPE"] = $this->getRequestParam("DATA_TYPE"); }
     if (isset($_REQUEST["DESCRIPTION"] )) { $RECORD["DESCRIPTION"] = $this->getRequestParam("DESCRIPTION"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["PRODATTRGRP_ID"] )) { $RECORD["PRODATTRGRP_ID"] = $this->getRequestParam("PRODATTRGRP_ID"); }
     if (isset($_REQUEST["PRODATTRGRP_NAME"] )) { $RECORD["PRODATTRGRP_NAME"] = $this->getRequestParam("PRODATTRGRP_NAME"); }
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