<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0035 Controller: Contracts
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0035 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_BPCONTR_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.BPCONTR_ID like :BPCONTR_ID";
      $params["BPCONTR_ID"] = $_REQUEST["QRY_BPCONTR_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_CONTRSTAT_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.CONTRSTAT_CODE like :CONTRSTAT_CODE";
      $params["CONTRSTAT_CODE"] = $_REQUEST["QRY_CONTRSTAT_CODE"];
    }
    if (!empty($_REQUEST["QRY_CONTRTYPE_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.CONTRTYPE_CODE like :CONTRTYPE_CODE";
      $params["CONTRTYPE_CODE"] = $_REQUEST["QRY_CONTRTYPE_CODE"];
    }
    if (!empty($_REQUEST["QRY_CUST_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.CUST_BPARTNER_ID like :CUST_BPARTNER_ID";
      $params["CUST_BPARTNER_ID"] = $_REQUEST["QRY_CUST_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_SUPP_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "c.SUPP_BPARTNER_ID like :SUPP_BPARTNER_ID";
      $params["SUPP_BPARTNER_ID"] = $_REQUEST["QRY_SUPP_BPARTNER_ID"];
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
                c.BPCONTR_ID
                ,(select tt.doc_no||'/'||tt.doc_date from bp_contract tt where tt.id = c.bpcontr_id ) BPCONTR_NAME
                ,c.CLIENT_ID
                ,(select t1.code from client t1 where t1.id = client_id) CLIENT_NAME
                ,c.CONTRSTAT_CODE
                ,c.CONTRTYPE_CODE
                ,c.CREATEDBY
                ,c.CREATEDON
                ,c.CUST_BPARTNER_ID
                ,(select t.name from bpartner t where t.id = c.cust_bpartner_id) CUST_BPARTNER_NAME
                ,c.DOC_DATE
                ,c.DOC_NO
                ,c.ENDDATE
                ,c.ID
                ,c.MODIFIEDBY
                ,c.MODIFIEDON
                ,c.NOTES
                ,c.STARTDATE
                ,c.SUPP_BPARTNER_ID
                ,(select t.name from bpartner t where t.id = c.supp_bpartner_id) SUPP_BPARTNER_NAME
            from BP_CONTRACT c $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "BPCONTR_ID"
      ,"BPCONTR_NAME"
      ,"CLIENT_ID"
      ,"CLIENT_NAME"
      ,"CONTRSTAT_CODE"
      ,"CONTRTYPE_CODE"
      ,"CREATEDBY"
      ,"CREATEDON"
      ,"CUST_BPARTNER_ID"
      ,"CUST_BPARTNER_NAME"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"ENDDATE"
      ,"ID"
      ,"MODIFIEDBY"
      ,"MODIFIEDON"
      ,"NOTES"
      ,"STARTDATE"
      ,"SUPP_BPARTNER_ID"
      ,"SUPP_BPARTNER_NAME"
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
                ,c.CLIENT_ID
                ,(select t1.code from client t1 where t1.id = client_id) CLIENT_NAME
                ,c.DOC_NO
                ,c.DOC_DATE
                ,(select t.name from bpartner t where t.id = c.cust_bpartner_id) CUST_BPARTNER_NAME
                ,c.CUST_BPARTNER_ID
                ,c.SUPP_BPARTNER_ID
                ,(select t.name from bpartner t where t.id = c.supp_bpartner_id) SUPP_BPARTNER_NAME
                ,c.CONTRTYPE_CODE
                ,c.STARTDATE
                ,c.ENDDATE
                ,(select tt.doc_no||'/'||tt.doc_date from bp_contract tt where tt.id = c.bpcontr_id ) BPCONTR_NAME
                ,c.BPCONTR_ID
                ,c.NOTES
                ,c.CREATEDON
                ,c.CREATEDBY
                ,c.MODIFIEDON
                ,c.MODIFIEDBY
                ,c.CONTRSTAT_CODE
            from BP_CONTRACT c $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_ID"
     ,"CLIENT_NAME"
     ,"DOC_NO"
     ,"DOC_DATE"
     ,"CUST_BPARTNER_NAME"
     ,"CUST_BPARTNER_ID"
     ,"SUPP_BPARTNER_ID"
     ,"SUPP_BPARTNER_NAME"
     ,"CONTRTYPE_CODE"
     ,"STARTDATE"
     ,"ENDDATE"
     ,"BPCONTR_NAME"
     ,"BPCONTR_ID"
     ,"NOTES"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"CONTRSTAT_CODE"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0035.fetchRecord().");}
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
    $RECORD["BPCONTR_ID"] = $this->getRequestParam("BPCONTR_ID");
    $RECORD["BPCONTR_NAME"] = $this->getRequestParam("BPCONTR_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CONTRSTAT_CODE"] = $this->getRequestParam("CONTRSTAT_CODE");
    $RECORD["CONTRTYPE_CODE"] = $this->getRequestParam("CONTRTYPE_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CUST_BPARTNER_ID"] = $this->getRequestParam("CUST_BPARTNER_ID");
    $RECORD["CUST_BPARTNER_NAME"] = $this->getRequestParam("CUST_BPARTNER_NAME");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $RECORD["SUPP_BPARTNER_ID"] = $this->getRequestParam("SUPP_BPARTNER_ID");
    $RECORD["SUPP_BPARTNER_NAME"] = $this->getRequestParam("SUPP_BPARTNER_NAME");
    $sql = "insert into BP_CONTRACT(
                 BPCONTR_ID
                ,CLIENT_ID
                ,CONTRSTAT_CODE
                ,CONTRTYPE_CODE
                ,CREATEDBY
                ,CUST_BPARTNER_ID
                ,DOC_DATE
                ,DOC_NO
                ,ENDDATE
                ,ID
                ,MODIFIEDBY
                ,NOTES
                ,STARTDATE
                ,SUPP_BPARTNER_ID
            ) values ( 
                 :BPCONTR_ID
                ,:CLIENT_ID
                ,:CONTRSTAT_CODE
                ,:CONTRTYPE_CODE
                ,:CREATEDBY
                ,:CUST_BPARTNER_ID
                ,:DOC_DATE
                ,:DOC_NO
                ,:ENDDATE
                ,:ID
                ,:MODIFIEDBY
                ,:NOTES
                ,:STARTDATE
                ,:SUPP_BPARTNER_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_BPCONTR_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["BPCONTR_ID"] = $this->getRequestParam("BPCONTR_ID");
    $RECORD["BPCONTR_NAME"] = $this->getRequestParam("BPCONTR_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CONTRSTAT_CODE"] = $this->getRequestParam("CONTRSTAT_CODE");
    $RECORD["CONTRTYPE_CODE"] = $this->getRequestParam("CONTRTYPE_CODE");
    $RECORD["CUST_BPARTNER_ID"] = $this->getRequestParam("CUST_BPARTNER_ID");
    $RECORD["CUST_BPARTNER_NAME"] = $this->getRequestParam("CUST_BPARTNER_NAME");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $RECORD["SUPP_BPARTNER_ID"] = $this->getRequestParam("SUPP_BPARTNER_ID");
    $RECORD["SUPP_BPARTNER_NAME"] = $this->getRequestParam("SUPP_BPARTNER_NAME");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0035.doUpdate().");}
    $sql = "update BP_CONTRACT set 
                 BPCONTR_ID=:BPCONTR_ID
                ,CLIENT_ID=:CLIENT_ID
                ,CONTRSTAT_CODE=:CONTRSTAT_CODE
                ,CONTRTYPE_CODE=:CONTRTYPE_CODE
                ,CUST_BPARTNER_ID=:CUST_BPARTNER_ID
                ,DOC_DATE=:DOC_DATE
                ,DOC_NO=:DOC_NO
                ,ENDDATE=:ENDDATE
                ,ID=:ID
                ,NOTES=:NOTES
                ,STARTDATE=:STARTDATE
                ,SUPP_BPARTNER_ID=:SUPP_BPARTNER_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0035.doDelete().");}
    $sql = "delete from BP_CONTRACT where 
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
    $RECORD["BPCONTR_ID"] = $this->getRequestParam("BPCONTR_ID");
    $RECORD["BPCONTR_NAME"] = $this->getRequestParam("BPCONTR_NAME");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME");
    $RECORD["CONTRSTAT_CODE"] = $this->getRequestParam("CONTRSTAT_CODE");
    $RECORD["CONTRTYPE_CODE"] = $this->getRequestParam("CONTRTYPE_CODE");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CUST_BPARTNER_ID"] = $this->getRequestParam("CUST_BPARTNER_ID");
    $RECORD["CUST_BPARTNER_NAME"] = $this->getRequestParam("CUST_BPARTNER_NAME");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE");
    $RECORD["SUPP_BPARTNER_ID"] = $this->getRequestParam("SUPP_BPARTNER_ID");
    $RECORD["SUPP_BPARTNER_NAME"] = $this->getRequestParam("SUPP_BPARTNER_NAME");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0035");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                c.BPCONTR_ID
                ,(select tt.doc_no||'/'||tt.doc_date from bp_contract tt where tt.id = c.bpcontr_id ) BPCONTR_NAME
                ,c.CLIENT_ID
                ,(select t1.code from client t1 where t1.id = client_id) CLIENT_NAME
                ,c.CONTRSTAT_CODE
                ,c.CONTRTYPE_CODE
                ,c.CREATEDBY
                ,c.CREATEDON
                ,c.CUST_BPARTNER_ID
                ,(select t.name from bpartner t where t.id = c.cust_bpartner_id) CUST_BPARTNER_NAME
                ,c.DOC_DATE
                ,c.DOC_NO
                ,c.ENDDATE
                ,c.ID
                ,c.MODIFIEDBY
                ,c.MODIFIEDON
                ,c.NOTES
                ,c.STARTDATE
                ,c.SUPP_BPARTNER_ID
                ,(select t.name from bpartner t where t.id = c.supp_bpartner_id) SUPP_BPARTNER_NAME
            from BP_CONTRACT c
         where 
           c.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "BPCONTR_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPCONTR_NAME" => array("DATA_TYPE" => "STRING")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_NAME" => array("DATA_TYPE" => "STRING")
  ,"CONTRSTAT_CODE" => array("DATA_TYPE" => "STRING")
  ,"CONTRTYPE_CODE" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CUST_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CUST_BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"ENDDATE" => array("DATA_TYPE" => "DATE")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"STARTDATE" => array("DATA_TYPE" => "DATE")
  ,"SUPP_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"SUPP_BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BPCONTR_ID"] )) { $RECORD["BPCONTR_ID"] = $this->getRequestParam("BPCONTR_ID"); }
     if (isset($_REQUEST["BPCONTR_NAME"] )) { $RECORD["BPCONTR_NAME"] = $this->getRequestParam("BPCONTR_NAME"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIENT_NAME"] )) { $RECORD["CLIENT_NAME"] = $this->getRequestParam("CLIENT_NAME"); }
     if (isset($_REQUEST["CONTRSTAT_CODE"] )) { $RECORD["CONTRSTAT_CODE"] = $this->getRequestParam("CONTRSTAT_CODE"); }
     if (isset($_REQUEST["CONTRTYPE_CODE"] )) { $RECORD["CONTRTYPE_CODE"] = $this->getRequestParam("CONTRTYPE_CODE"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CUST_BPARTNER_ID"] )) { $RECORD["CUST_BPARTNER_ID"] = $this->getRequestParam("CUST_BPARTNER_ID"); }
     if (isset($_REQUEST["CUST_BPARTNER_NAME"] )) { $RECORD["CUST_BPARTNER_NAME"] = $this->getRequestParam("CUST_BPARTNER_NAME"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["ENDDATE"] )) { $RECORD["ENDDATE"] = $this->getRequestParam("ENDDATE"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["STARTDATE"] )) { $RECORD["STARTDATE"] = $this->getRequestParam("STARTDATE"); }
     if (isset($_REQUEST["SUPP_BPARTNER_ID"] )) { $RECORD["SUPP_BPARTNER_ID"] = $this->getRequestParam("SUPP_BPARTNER_ID"); }
     if (isset($_REQUEST["SUPP_BPARTNER_NAME"] )) { $RECORD["SUPP_BPARTNER_NAME"] = $this->getRequestParam("SUPP_BPARTNER_NAME"); }
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
