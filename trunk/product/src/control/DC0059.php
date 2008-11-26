<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0059 Controller: Sales orders
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0059 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_DOC_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DOC_NO like :DOC_NO";
      $params["DOC_NO"] = $_REQUEST["QRY_DOC_NO"];
    }
    if (!empty($_REQUEST["QRY_DOC_DATE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DOC_DATE like :DOC_DATE";
      $params["DOC_DATE"] = $_REQUEST["QRY_DOC_DATE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_BILL_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BILL_BPARTNER_ID like :BILL_BPARTNER_ID";
      $params["BILL_BPARTNER_ID"] = $_REQUEST["QRY_BILL_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_DELIV_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DELIV_BPARTNER_ID like :DELIV_BPARTNER_ID";
      $params["DELIV_BPARTNER_ID"] = $_REQUEST["QRY_DELIV_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_PAY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.PAY_BPARTNER_ID like :PAY_BPARTNER_ID";
      $params["PAY_BPARTNER_ID"] = $_REQUEST["QRY_PAY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BPARTNER_CONTACT_ID like :BPARTNER_CONTACT_ID";
      $params["BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_BILL_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.BILL_BPARTNER_CONTACT_ID like :BILL_BPARTNER_CONTACT_ID";
      $params["BILL_BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_BILL_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_DELIV_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.DELIV_BPARTNER_CONTACT_ID like :DELIV_BPARTNER_CONTACT_ID";
      $params["DELIV_BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_DELIV_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_PAY_BPARTNER_CONTACT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.PAY_BPARTNER_CONTACT_ID like :PAY_BPARTNER_CONTACT_ID";
      $params["PAY_BPARTNER_CONTACT_ID"] = $_REQUEST["QRY_PAY_BPARTNER_CONTACT_ID"];
    }
    if (!empty($_REQUEST["QRY_REF_SORDER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.REF_SORDER_ID like :REF_SORDER_ID";
      $params["REF_SORDER_ID"] = $_REQUEST["QRY_REF_SORDER_ID"];
    }
    if (!empty($_REQUEST["QRY_CURRENCY"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.CURRENCY like :CURRENCY";
      $params["CURRENCY"] = $_REQUEST["QRY_CURRENCY"];
    }
    if (!empty($_REQUEST["QRY_PAYMETHOD_CODE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ord.PAYMETHOD_CODE like :PAYMETHOD_CODE";
      $params["PAYMETHOD_CODE"] = $_REQUEST["QRY_PAYMETHOD_CODE"];
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
                ord.ID
                ,ord.DOC_NO
                ,ord.DOC_DATE
                ,ord.CLIENT_ID
                ,ord.CREATEDON
                ,ord.CREATEDBY
                ,ord.MODIFIEDON
                ,ord.MODIFIEDBY
                ,ord.BPARTNER_ID
                ,ord.BILL_BPARTNER_ID
                ,ord.DELIV_BPARTNER_ID
                ,ord.PAY_BPARTNER_ID
                ,ord.BPARTNER_CONTACT_ID
                ,ord.BILL_BPARTNER_CONTACT_ID
                ,ord.DELIV_BPARTNER_CONTACT_ID
                ,ord.PAY_BPARTNER_CONTACT_ID
                ,ord.REF_SORDER_ID
                ,ord.CURRENCY
                ,ord.PAYMETHOD_CODE
                ,ord.SALESREP_ID
                ,ord.TOTAL_AMOUNT
                ,(select code from client where id = ord.client_id) CLIENT_CODE
                ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME
                ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME
                ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME
                ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME
            from SALES_ORDER ord $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"DOC_NO"
      ,"DOC_DATE"
      ,"CLIENT_ID"
      ,"CREATEDON"
      ,"CREATEDBY"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"BPARTNER_ID"
      ,"BILL_BPARTNER_ID"
      ,"DELIV_BPARTNER_ID"
      ,"PAY_BPARTNER_ID"
      ,"BPARTNER_CONTACT_ID"
      ,"BILL_BPARTNER_CONTACT_ID"
      ,"DELIV_BPARTNER_CONTACT_ID"
      ,"PAY_BPARTNER_CONTACT_ID"
      ,"REF_SORDER_ID"
      ,"CURRENCY"
      ,"PAYMETHOD_CODE"
      ,"SALESREP_ID"
      ,"TOTAL_AMOUNT"
      ,"CLIENT_CODE"
      ,"BPARTNER_NAME"
      ,"BILL_BPARTNER_NAME"
      ,"DELIV_BPARTNER_NAME"
      ,"PAY_BPARTNER_NAME"
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
                ord.ID
                ,(select code from client where id = ord.client_id) CLIENT_CODE
                ,ord.CLIENT_ID
                ,ord.DOC_NO
                ,ord.DOC_DATE
                ,ord.BPARTNER_ID
                ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME
                ,ord.CREATEDON
                ,ord.CREATEDBY
                ,ord.MODIFIEDON
                ,ord.MODIFIEDBY
                ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME
                ,ord.BILL_BPARTNER_ID
                ,ord.DELIV_BPARTNER_ID
                ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME
                ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME
                ,ord.PAY_BPARTNER_ID
                ,ord.BPARTNER_CONTACT_ID
                ,ord.BILL_BPARTNER_CONTACT_ID
                ,ord.DELIV_BPARTNER_CONTACT_ID
                ,ord.PAY_BPARTNER_CONTACT_ID
                ,ord.REF_SORDER_ID
                ,ord.CURRENCY
                ,ord.PAYMETHOD_CODE
                ,ord.SALESREP_ID
                ,ord.TOTAL_AMOUNT
            from SALES_ORDER ord $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"CLIENT_CODE"
     ,"CLIENT_ID"
     ,"DOC_NO"
     ,"DOC_DATE"
     ,"BPARTNER_ID"
     ,"BPARTNER_NAME"
     ,"CREATEDON"
     ,"CREATEDBY"
     ,"MODIFIEDON"
     ,"MODIFIEDBY"
     ,"BILL_BPARTNER_NAME"
     ,"BILL_BPARTNER_ID"
     ,"DELIV_BPARTNER_ID"
     ,"DELIV_BPARTNER_NAME"
     ,"PAY_BPARTNER_NAME"
     ,"PAY_BPARTNER_ID"
     ,"BPARTNER_CONTACT_ID"
     ,"BILL_BPARTNER_CONTACT_ID"
     ,"DELIV_BPARTNER_CONTACT_ID"
     ,"PAY_BPARTNER_CONTACT_ID"
     ,"REF_SORDER_ID"
     ,"CURRENCY"
     ,"PAYMETHOD_CODE"
     ,"SALESREP_ID"
     ,"TOTAL_AMOUNT"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0059.fetchRecord().");}
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
    $RECORD["BILL_BPARTNER_CONTACT_ID"] = $this->getRequestParam("BILL_BPARTNER_CONTACT_ID");
    $RECORD["BILL_BPARTNER_ID"] = $this->getRequestParam("BILL_BPARTNER_ID");
    $RECORD["BILL_BPARTNER_NAME"] = $this->getRequestParam("BILL_BPARTNER_NAME");
    $RECORD["BPARTNER_CONTACT_ID"] = $this->getRequestParam("BPARTNER_CONTACT_ID");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DELIV_BPARTNER_CONTACT_ID"] = $this->getRequestParam("DELIV_BPARTNER_CONTACT_ID");
    $RECORD["DELIV_BPARTNER_ID"] = $this->getRequestParam("DELIV_BPARTNER_ID");
    $RECORD["DELIV_BPARTNER_NAME"] = $this->getRequestParam("DELIV_BPARTNER_NAME");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE");
    $RECORD["PAY_BPARTNER_CONTACT_ID"] = $this->getRequestParam("PAY_BPARTNER_CONTACT_ID");
    $RECORD["PAY_BPARTNER_ID"] = $this->getRequestParam("PAY_BPARTNER_ID");
    $RECORD["PAY_BPARTNER_NAME"] = $this->getRequestParam("PAY_BPARTNER_NAME");
    $RECORD["REF_SORDER_ID"] = $this->getRequestParam("REF_SORDER_ID");
    $RECORD["SALESREP_ID"] = $this->getRequestParam("SALESREP_ID");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $sql = "insert into SALES_ORDER(
                 ID
                ,DOC_NO
                ,DOC_DATE
                ,CLIENT_ID
                ,BPARTNER_ID
                ,BILL_BPARTNER_ID
                ,DELIV_BPARTNER_ID
                ,PAY_BPARTNER_ID
                ,BPARTNER_CONTACT_ID
                ,BILL_BPARTNER_CONTACT_ID
                ,DELIV_BPARTNER_CONTACT_ID
                ,PAY_BPARTNER_CONTACT_ID
                ,REF_SORDER_ID
                ,CURRENCY
                ,PAYMETHOD_CODE
                ,SALESREP_ID
                ,TOTAL_AMOUNT
            ) values ( 
                 :ID
                ,:DOC_NO
                ,:DOC_DATE
                ,:CLIENT_ID
                ,:BPARTNER_ID
                ,:BILL_BPARTNER_ID
                ,:DELIV_BPARTNER_ID
                ,:PAY_BPARTNER_ID
                ,:BPARTNER_CONTACT_ID
                ,:BILL_BPARTNER_CONTACT_ID
                ,:DELIV_BPARTNER_CONTACT_ID
                ,:PAY_BPARTNER_CONTACT_ID
                ,:REF_SORDER_ID
                ,:CURRENCY
                ,:PAYMETHOD_CODE
                ,:SALESREP_ID
                ,:TOTAL_AMOUNT
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_BPORDER_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["BILL_BPARTNER_CONTACT_ID"] = $this->getRequestParam("BILL_BPARTNER_CONTACT_ID");
    $RECORD["BILL_BPARTNER_ID"] = $this->getRequestParam("BILL_BPARTNER_ID");
    $RECORD["BILL_BPARTNER_NAME"] = $this->getRequestParam("BILL_BPARTNER_NAME");
    $RECORD["BPARTNER_CONTACT_ID"] = $this->getRequestParam("BPARTNER_CONTACT_ID");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DELIV_BPARTNER_CONTACT_ID"] = $this->getRequestParam("DELIV_BPARTNER_CONTACT_ID");
    $RECORD["DELIV_BPARTNER_ID"] = $this->getRequestParam("DELIV_BPARTNER_ID");
    $RECORD["DELIV_BPARTNER_NAME"] = $this->getRequestParam("DELIV_BPARTNER_NAME");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE");
    $RECORD["PAY_BPARTNER_CONTACT_ID"] = $this->getRequestParam("PAY_BPARTNER_CONTACT_ID");
    $RECORD["PAY_BPARTNER_ID"] = $this->getRequestParam("PAY_BPARTNER_ID");
    $RECORD["PAY_BPARTNER_NAME"] = $this->getRequestParam("PAY_BPARTNER_NAME");
    $RECORD["REF_SORDER_ID"] = $this->getRequestParam("REF_SORDER_ID");
    $RECORD["SALESREP_ID"] = $this->getRequestParam("SALESREP_ID");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0059.doUpdate().");}
    $sql = "update SALES_ORDER set 
                 ID=:ID
                ,DOC_NO=:DOC_NO
                ,DOC_DATE=:DOC_DATE
                ,CLIENT_ID=:CLIENT_ID
                ,BPARTNER_ID=:BPARTNER_ID
                ,BILL_BPARTNER_ID=:BILL_BPARTNER_ID
                ,DELIV_BPARTNER_ID=:DELIV_BPARTNER_ID
                ,PAY_BPARTNER_ID=:PAY_BPARTNER_ID
                ,BPARTNER_CONTACT_ID=:BPARTNER_CONTACT_ID
                ,BILL_BPARTNER_CONTACT_ID=:BILL_BPARTNER_CONTACT_ID
                ,DELIV_BPARTNER_CONTACT_ID=:DELIV_BPARTNER_CONTACT_ID
                ,PAY_BPARTNER_CONTACT_ID=:PAY_BPARTNER_CONTACT_ID
                ,REF_SORDER_ID=:REF_SORDER_ID
                ,CURRENCY=:CURRENCY
                ,PAYMETHOD_CODE=:PAYMETHOD_CODE
                ,SALESREP_ID=:SALESREP_ID
                ,TOTAL_AMOUNT=:TOTAL_AMOUNT
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0059.doDelete().");}
    $sql = "delete from SALES_ORDER where 
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
    $RECORD["BILL_BPARTNER_CONTACT_ID"] = $this->getRequestParam("BILL_BPARTNER_CONTACT_ID");
    $RECORD["BILL_BPARTNER_ID"] = $this->getRequestParam("BILL_BPARTNER_ID");
    $RECORD["BILL_BPARTNER_NAME"] = $this->getRequestParam("BILL_BPARTNER_NAME");
    $RECORD["BPARTNER_CONTACT_ID"] = $this->getRequestParam("BPARTNER_CONTACT_ID");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY");
    $RECORD["DELIV_BPARTNER_CONTACT_ID"] = $this->getRequestParam("DELIV_BPARTNER_CONTACT_ID");
    $RECORD["DELIV_BPARTNER_ID"] = $this->getRequestParam("DELIV_BPARTNER_ID");
    $RECORD["DELIV_BPARTNER_NAME"] = $this->getRequestParam("DELIV_BPARTNER_NAME");
    $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE");
    $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE");
    $RECORD["PAY_BPARTNER_CONTACT_ID"] = $this->getRequestParam("PAY_BPARTNER_CONTACT_ID");
    $RECORD["PAY_BPARTNER_ID"] = $this->getRequestParam("PAY_BPARTNER_ID");
    $RECORD["PAY_BPARTNER_NAME"] = $this->getRequestParam("PAY_BPARTNER_NAME");
    $RECORD["REF_SORDER_ID"] = $this->getRequestParam("REF_SORDER_ID");
    $RECORD["SALESREP_ID"] = $this->getRequestParam("SALESREP_ID");
    $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0059");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ord.ID
                ,ord.DOC_NO
                ,ord.DOC_DATE
                ,ord.CLIENT_ID
                ,ord.CREATEDON
                ,ord.CREATEDBY
                ,ord.MODIFIEDON
                ,ord.MODIFIEDBY
                ,ord.BPARTNER_ID
                ,ord.BILL_BPARTNER_ID
                ,ord.DELIV_BPARTNER_ID
                ,ord.PAY_BPARTNER_ID
                ,ord.BPARTNER_CONTACT_ID
                ,ord.BILL_BPARTNER_CONTACT_ID
                ,ord.DELIV_BPARTNER_CONTACT_ID
                ,ord.PAY_BPARTNER_CONTACT_ID
                ,ord.REF_SORDER_ID
                ,ord.CURRENCY
                ,ord.PAYMETHOD_CODE
                ,ord.SALESREP_ID
                ,ord.TOTAL_AMOUNT
                ,(select code from client where id = ord.client_id) CLIENT_CODE
                ,(select name from bpartner where id = ord.BPARTNER_ID) BPARTNER_NAME
                ,(select name from bpartner where id = ord.BILL_BPARTNER_ID) BILL_BPARTNER_NAME
                ,(select name from bpartner where id = ord.DELIV_BPARTNER_ID) DELIV_BPARTNER_NAME
                ,(select name from bpartner where id = ord.PAY_BPARTNER_ID) PAY_BPARTNER_NAME
            from SALES_ORDER ord
         where 
           ord.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"DOC_NO" => array("DATA_TYPE" => "STRING")
  ,"DOC_DATE" => array("DATA_TYPE" => "DATE")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BILL_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"DELIV_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PAY_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_CONTACT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"BILL_BPARTNER_CONTACT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"DELIV_BPARTNER_CONTACT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PAY_BPARTNER_CONTACT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"REF_SORDER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CURRENCY" => array("DATA_TYPE" => "STRING")
  ,"PAYMETHOD_CODE" => array("DATA_TYPE" => "STRING")
  ,"SALESREP_ID" => array("DATA_TYPE" => "NUMBER")
  ,"TOTAL_AMOUNT" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
  ,"BILL_BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
  ,"DELIV_BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
  ,"PAY_BPARTNER_NAME" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["BILL_BPARTNER_CONTACT_ID"] )) { $RECORD["BILL_BPARTNER_CONTACT_ID"] = $this->getRequestParam("BILL_BPARTNER_CONTACT_ID"); }
     if (isset($_REQUEST["BILL_BPARTNER_ID"] )) { $RECORD["BILL_BPARTNER_ID"] = $this->getRequestParam("BILL_BPARTNER_ID"); }
     if (isset($_REQUEST["BILL_BPARTNER_NAME"] )) { $RECORD["BILL_BPARTNER_NAME"] = $this->getRequestParam("BILL_BPARTNER_NAME"); }
     if (isset($_REQUEST["BPARTNER_CONTACT_ID"] )) { $RECORD["BPARTNER_CONTACT_ID"] = $this->getRequestParam("BPARTNER_CONTACT_ID"); }
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["BPARTNER_NAME"] )) { $RECORD["BPARTNER_NAME"] = $this->getRequestParam("BPARTNER_NAME"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["CURRENCY"] )) { $RECORD["CURRENCY"] = $this->getRequestParam("CURRENCY"); }
     if (isset($_REQUEST["DELIV_BPARTNER_CONTACT_ID"] )) { $RECORD["DELIV_BPARTNER_CONTACT_ID"] = $this->getRequestParam("DELIV_BPARTNER_CONTACT_ID"); }
     if (isset($_REQUEST["DELIV_BPARTNER_ID"] )) { $RECORD["DELIV_BPARTNER_ID"] = $this->getRequestParam("DELIV_BPARTNER_ID"); }
     if (isset($_REQUEST["DELIV_BPARTNER_NAME"] )) { $RECORD["DELIV_BPARTNER_NAME"] = $this->getRequestParam("DELIV_BPARTNER_NAME"); }
     if (isset($_REQUEST["DOC_DATE"] )) { $RECORD["DOC_DATE"] = $this->getRequestParam("DOC_DATE"); }
     if (isset($_REQUEST["DOC_NO"] )) { $RECORD["DOC_NO"] = $this->getRequestParam("DOC_NO"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["PAYMETHOD_CODE"] )) { $RECORD["PAYMETHOD_CODE"] = $this->getRequestParam("PAYMETHOD_CODE"); }
     if (isset($_REQUEST["PAY_BPARTNER_CONTACT_ID"] )) { $RECORD["PAY_BPARTNER_CONTACT_ID"] = $this->getRequestParam("PAY_BPARTNER_CONTACT_ID"); }
     if (isset($_REQUEST["PAY_BPARTNER_ID"] )) { $RECORD["PAY_BPARTNER_ID"] = $this->getRequestParam("PAY_BPARTNER_ID"); }
     if (isset($_REQUEST["PAY_BPARTNER_NAME"] )) { $RECORD["PAY_BPARTNER_NAME"] = $this->getRequestParam("PAY_BPARTNER_NAME"); }
     if (isset($_REQUEST["REF_SORDER_ID"] )) { $RECORD["REF_SORDER_ID"] = $this->getRequestParam("REF_SORDER_ID"); }
     if (isset($_REQUEST["SALESREP_ID"] )) { $RECORD["SALESREP_ID"] = $this->getRequestParam("SALESREP_ID"); }
     if (isset($_REQUEST["TOTAL_AMOUNT"] )) { $RECORD["TOTAL_AMOUNT"] = $this->getRequestParam("TOTAL_AMOUNT"); }
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
