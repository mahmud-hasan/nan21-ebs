<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0069 Controller: Contacts
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0069 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_FIRSTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.FIRSTNAME like :FIRSTNAME";
      $params["FIRSTNAME"] = $_REQUEST["QRY_FIRSTNAME"];
    }
    if (!empty($_REQUEST["QRY_LASTNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.LASTNAME like :LASTNAME";
      $params["LASTNAME"] = $_REQUEST["QRY_LASTNAME"];
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
                c.ID
                ,c.BPARTNER_ID
                ,c.NAME
                ,c.FIRSTNAME
                ,c.LASTNAME
                ,c.PHONE
                ,c.EMAIL
                ,c.FAX
                ,c.NOTES
                ,c.MOBILE
                ,c.CREATEDON
                ,c.CREATEDBY
                ,c.MODIFIEDON
                ,c.MODIFIEDBY
                ,(select bp.name from bpartner bp where bp.id = c.bpartner_id) BPARTNER_NAME
            from BP_CONTACT c $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"BPARTNER_ID"
      ,"NAME"
      ,"FIRSTNAME"
      ,"LASTNAME"
      ,"PHONE"
      ,"EMAIL"
      ,"FAX"
      ,"NOTES"
      ,"MOBILE"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"BPARTNER_NAME"
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
                c.ID
                ,c.BPARTNER_ID
                ,c.NAME
                ,(select bp.name from bpartner bp where bp.id = c.bpartner_id) BPARTNER_NAME
                ,c.FIRSTNAME
                ,c.LASTNAME
                ,c.PHONE
                ,c.EMAIL
                ,c.FAX
                ,c.NOTES
                ,c.MOBILE
                ,c.CREATEDON
                ,c.CREATEDBY
                ,c.MODIFIEDON
                ,c.MODIFIEDBY
            from BP_CONTACT c $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"BPARTNER_ID"
     ,"NAME"
     ,"BPARTNER_NAME"
     ,"FIRSTNAME"
     ,"LASTNAME"
     ,"PHONE"
     ,"EMAIL"
     ,"FAX"
     ,"NOTES"
     ,"MOBILE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0069.fetchRecord().");}
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME");
    $RECORD["MOBILE"] = $this->getRequestParam("MOBILE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $sql = "insert into BP_CONTACT(
                 ID
                ,BPARTNER_ID
                ,NAME
                ,FIRSTNAME
                ,LASTNAME
                ,PHONE
                ,EMAIL
                ,FAX
                ,NOTES
                ,MOBILE
            ) values ( 
                 :ID
                ,:BPARTNER_ID
                ,:NAME
                ,:FIRSTNAME
                ,:LASTNAME
                ,:PHONE
                ,:EMAIL
                ,:FAX
                ,:NOTES
                ,:MOBILE
    )";
    $stmt = $this->db->prepare($sql);
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME");
    $RECORD["MOBILE"] = $this->getRequestParam("MOBILE");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0069.doUpdate().");}
    $sql = "update BP_CONTACT set 
                 ID=:ID
                ,BPARTNER_ID=:BPARTNER_ID
                ,FIRSTNAME=:FIRSTNAME
                ,LASTNAME=:LASTNAME
                ,PHONE=:PHONE
                ,EMAIL=:EMAIL
                ,FAX=:FAX
                ,NOTES=:NOTES
                ,MOBILE=:MOBILE
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0069.doDelete().");}
    $sql = "delete from BP_CONTACT where 
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
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["EMAIL"] = $this->getRequestParam("EMAIL");
    $RECORD["FAX"] = $this->getRequestParam("FAX");
    $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME");
    $RECORD["MOBILE"] = $this->getRequestParam("MOBILE");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PHONE"] = $this->getRequestParam("PHONE");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0069");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                c.ID
                ,c.BPARTNER_ID
                ,c.NAME
                ,c.FIRSTNAME
                ,c.LASTNAME
                ,c.PHONE
                ,c.EMAIL
                ,c.FAX
                ,c.NOTES
                ,c.MOBILE
                ,c.CREATEDON
                ,c.CREATEDBY
                ,c.MODIFIEDON
                ,c.MODIFIEDBY
                ,(select bp.name from bpartner bp where bp.id = c.bpartner_id) BPARTNER_NAME
            from BP_CONTACT c
         where 
           c.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"FIRSTNAME" => array("DATA_TYPE" => "STRING")
  ,"LASTNAME" => array("DATA_TYPE" => "STRING")
  ,"PHONE" => array("DATA_TYPE" => "STRING")
  ,"EMAIL" => array("DATA_TYPE" => "STRING")
  ,"FAX" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"MOBILE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["BPARTNER_NAME"] )) { $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["EMAIL"] )) { $RECORD["EMAIL"] = $this->getRequestParam("EMAIL"); }
     if (isset($_REQUEST["FAX"] )) { $RECORD["FAX"] = $this->getRequestParam("FAX"); }
     if (isset($_REQUEST["FIRSTNAME"] )) { $RECORD["FIRSTNAME"] = $this->getRequestParam("FIRSTNAME"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["LASTNAME"] )) { $RECORD["LASTNAME"] = $this->getRequestParam("LASTNAME"); }
     if (isset($_REQUEST["MOBILE"] )) { $RECORD["MOBILE"] = $this->getRequestParam("MOBILE"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PHONE"] )) { $RECORD["PHONE"] = $this->getRequestParam("PHONE"); }
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
