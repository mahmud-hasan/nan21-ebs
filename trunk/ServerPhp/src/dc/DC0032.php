<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0032 Controller: Accounts
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0032 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ACCJOURNAL_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCJOURNAL_ID like :ACCJOURNAL_ID";
      $params["ACCJOURNAL_ID"] = $_REQUEST["QRY_ACCJOURNAL_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCOUNT like :ACCOUNT";
      $params["ACCOUNT"] = $_REQUEST["QRY_ACCOUNT"];
    }
    if (!empty($_REQUEST["QRY_ACCSCHEMA_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCSCHEMA_ID like :ACCSCHEMA_ID";
      $params["ACCSCHEMA_ID"] = $_REQUEST["QRY_ACCSCHEMA_ID"];
    }
    if (!empty($_REQUEST["QRY_ACCTGRP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACCTGRP_ID like :ACCTGRP_ID";
      $params["ACCTGRP_ID"] = $_REQUEST["QRY_ACCTGRP_ID"];
    }
    if (!empty($_REQUEST["QRY_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ACTIVE like :ACTIVE";
      $params["ACTIVE"] = $_REQUEST["QRY_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PARENT_ACCOUNT"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "t.PARENT_ACCOUNT like :PARENT_ACCOUNT";
      $params["PARENT_ACCOUNT"] = $_REQUEST["QRY_PARENT_ACCOUNT"];
    }
}

public function doQuery() {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ACCOUNT";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                t.ACCJOURNAL_ID
                ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME
                ,t.ACCOUNT
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ACCTGRP_ID
                ,t.ACTIVE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CURRENCY
                ,t.DESCRIPTION
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.PARENT_ACCOUNT
            from AC_ACCT t $where $orderByClause ";
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
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ACCOUNT";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                t.ID
                ,t.CLIENT_ID
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ACCOUNT
                ,t.NAME
                ,t.PARENT_ACCOUNT
                ,t.CURRENCY
                ,t.DESCRIPTION
                ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME
                ,t.ACCJOURNAL_ID
                ,t.ACTIVE
                ,t.CREATEDON
                ,t.CREATEDBY
                ,t.MODIFIEDON
                ,t.MODIFIEDBY
                ,t.ACCTGRP_ID
            from AC_ACCT t $where $orderByClause ";
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0032.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into AC_ACCT(
                 ACCJOURNAL_ID
                ,ACCOUNT
                ,ACCSCHEMA_ID
                ,ACCTGRP_ID
                ,ACTIVE
                ,CLIENT_ID
                ,CREATEDBY
                ,CURRENCY
                ,DESCRIPTION
                ,ID
                ,NAME
                ,PARENT_ACCOUNT
            ) values ( 
                 :ACCJOURNAL_ID
                ,:ACCOUNT
                ,:ACCSCHEMA_ID
                ,:ACCTGRP_ID
                ,:ACTIVE
                ,:CLIENT_ID
                ,:CREATEDBY
                ,:CURRENCY
                ,:DESCRIPTION
                ,:ID
                ,:NAME
                ,:PARENT_ACCOUNT
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_acct_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0032.doUpdate().");}
    $sql = "update AC_ACCT set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,ACCOUNT=:ACCOUNT
                ,NAME=:NAME
                ,PARENT_ACCOUNT=:PARENT_ACCOUNT
                ,CURRENCY=:CURRENCY
                ,DESCRIPTION=:DESCRIPTION
                ,ACTIVE=:ACTIVE
                ,ACCJOURNAL_ID=:ACCJOURNAL_ID
                ,ACCTGRP_ID=:ACCTGRP_ID
                ,ACCSCHEMA_ID=:ACCSCHEMA_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0032.doDelete().");}
    $sql = "delete from AC_ACCT where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0032");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                t.ACCJOURNAL_ID
                ,pbo_acc.get_journal_name_by_id(t.accjournal_id) ACCJOURNAL_NAME
                ,t.ACCOUNT
                ,t.ACCSCHEMA_ID
                ,pbo_acc.get_accschema_name_by_id(t.accschema_id) ACCSCHEMA_NAME
                ,t.ACCTGRP_ID
                ,t.ACTIVE
                ,pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CREATEDBY
                ,t.CREATEDON
                ,t.CURRENCY
                ,t.DESCRIPTION
                ,t.ID
                ,t.MODIFIEDBY
                ,t.MODIFIEDON
                ,t.NAME
                ,t.PARENT_ACCOUNT
            from AC_ACCT t
         where 
           t.ID= :ID
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
  "ACCJOURNAL_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCJOURNAL_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ACCOUNT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ACCSCHEMA_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACCSCHEMA_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ACCTGRP_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ACTIVE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"CURRENCY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DESCRIPTION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PARENT_ACCOUNT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"SUMMARY" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
);
}

}
?>