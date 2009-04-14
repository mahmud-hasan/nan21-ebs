<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0035 Controller: Contracts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0035 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

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
    $this->logger->debug($sql);
    $rs = $this->getDbConn()->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $dataOut = $this->serializeCursor($rs,array_keys($this->fields), $this->getDataFormatFetch());
    if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
} /* end function doQuery  */


public function doExport() {
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
    $rs = $this->getDbConn()->Execute($sql, $params);
    $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    } else {
      $columns = array_keys($this->fields);
    }
    if ($this->getDataFormatExport() == "csv" ) {
      $dataOut = $this->serializeCursor($rs,$columns,"csv");
    } else {
      $dataOut = $this->serializeCursor($rs,$columns,"xml");
      $dataOut = "<records>".$dataOut."</records>";
      $dataOut = "<queryParams>".$this->serializeMap($params,"xml")."</queryParams>".$dataOut;
      $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fields,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fields,false)."</columnDef>".$dataOut;
      $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
      $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
      $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    }
    $this->beginExport();
    print $dataOut;
    $this->endExport();
} /* end function doExport  */

public function fetchRecord() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0035.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
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
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_BPCONTR_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0035.doUpdate().");}
    $sql = "update BP_CONTRACT set 
                 ID=:ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,CUST_BPARTNER_ID=:CUST_BPARTNER_ID
                ,CONTRTYPE_CODE=:CONTRTYPE_CODE
                ,STARTDATE=:STARTDATE
                ,ENDDATE=:ENDDATE
                ,NOTES=:NOTES
                ,BPCONTR_ID=:BPCONTR_ID
                ,CONTRSTAT_CODE=:CONTRSTAT_CODE
                ,SUPP_BPARTNER_ID=:SUPP_BPARTNER_ID
    where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"],"ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0035.doDelete().");}
    $sql = "delete from BP_CONTRACT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0035");
    print "{success:true, data:".json_encode($this->record)."}";
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
    $rs = $this->getDbConn()->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    CollectionUtils::copyMapValues($record, $row);
} /* end function findByPk  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
    $this->populateRecordFromRequest();
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function _initFields() {
  $this->fields = array(
  "BPCONTR_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"BPCONTR_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIENT_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CONTRSTAT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CONTRTYPE_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CUST_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CUST_BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DOC_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DOC_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ENDDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"STARTDATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"SUPP_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"SUPP_BPARTNER_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
