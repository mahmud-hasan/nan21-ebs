<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0061 Controller: Assets
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0061 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_ASSETGRP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.ASSETGRP_ID like :ASSETGRP_ID";
      $params["ASSETGRP_ID"] = $_REQUEST["QRY_ASSETGRP_ID"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_SERIAL_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.SERIAL_NO like :SERIAL_NO";
      $params["SERIAL_NO"] = $_REQUEST["QRY_SERIAL_NO"];
    }
    if (!empty($_REQUEST["QRY_IS_ACTIVE"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_ACTIVE like :IS_ACTIVE";
      $params["IS_ACTIVE"] = $_REQUEST["QRY_IS_ACTIVE"];
    }
    if (!empty($_REQUEST["QRY_IS_DEPRECIATED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_DEPRECIATED like :IS_DEPRECIATED";
      $params["IS_DEPRECIATED"] = $_REQUEST["QRY_IS_DEPRECIATED"];
    }
    if (!empty($_REQUEST["QRY_IS_DISPOSED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_DISPOSED like :IS_DISPOSED";
      $params["IS_DISPOSED"] = $_REQUEST["QRY_IS_DISPOSED"];
    }
    if (!empty($_REQUEST["QRY_IS_OWNED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_OWNED like :IS_OWNED";
      $params["IS_OWNED"] = $_REQUEST["QRY_IS_OWNED"];
    }
    if (!empty($_REQUEST["QRY_IS_INPOSESSION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_INPOSESSION like :IS_INPOSESSION";
      $params["IS_INPOSESSION"] = $_REQUEST["QRY_IS_INPOSESSION"];
    }
    if (!empty($_REQUEST["QRY_WITH_DEPRECIATION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.WITH_DEPRECIATION like :WITH_DEPRECIATION";
      $params["WITH_DEPRECIATION"] = $_REQUEST["QRY_WITH_DEPRECIATION"];
    }
    if (!empty($_REQUEST["QRY_DEPREC_MONTHS"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.DEPREC_MONTHS like :DEPREC_MONTHS";
      $params["DEPREC_MONTHS"] = $_REQUEST["QRY_DEPREC_MONTHS"];
    }
    if (!empty($_REQUEST["QRY_DEPREC_MONTHS_REMAINED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.DEPREC_MONTHS_REMAINED like :DEPREC_MONTHS_REMAINED";
      $params["DEPREC_MONTHS_REMAINED"] = $_REQUEST["QRY_DEPREC_MONTHS_REMAINED"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_INUSE_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.INUSE_BPARTNER_ID like :INUSE_BPARTNER_ID";
      $params["INUSE_BPARTNER_ID"] = $_REQUEST["QRY_INUSE_BPARTNER_ID"];
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
                (select code from client where id = a.client_id) CLIENT_CODE
                ,(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME
                ,a.ID
                ,a.CLIENT_ID
                ,a.CLIORG_ID
                ,a.PRODUCT_ID
                ,a.ASSETGRP_ID
                ,a.NAME
                ,a.NOTES
                ,a.QUANTITY
                ,a.SERIAL_NO
                ,a.IS_ACTIVE
                ,a.IS_DEPRECIATED
                ,a.IS_DISPOSED
                ,a.IS_OWNED
                ,a.IS_INPOSESSION
                ,a.LAST_MAINTENANCE_DATE
                ,a.NEXT_MAINTENENCE_DATE
                ,a.MAINTENANCE_PLAN_ID
                ,a.WITH_DEPRECIATION
                ,a.DEPREC_MONTHS
                ,a.DEPREC_BASE_VALUE
                ,a.DEPREC_MONTHS_REMAINED
                ,a.BPARTNER_ID
                ,a.CREATEDON
                ,a.INUSE_BPARTNER_ID
                ,a.MODIFIEDON
                ,a.MODIFIEDBY
                ,a.CREATEDBY
            from ASSET a $where $orderByClause ";
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "CLIENT_CODE"
      ,"ASSETGRP_NAME"
      ,"ID"
      ,"CLIENT_ID"
      ,"CLIORG_ID"
      ,"PRODUCT_ID"
      ,"ASSETGRP_ID"
      ,"NAME"
      ,"NOTES"
      ,"QUANTITY"
      ,"SERIAL_NO"
      ,"IS_ACTIVE"
      ,"IS_DEPRECIATED"
      ,"IS_DISPOSED"
      ,"IS_OWNED"
      ,"IS_INPOSESSION"
      ,"LAST_MAINTENANCE_DATE"
      ,"NEXT_MAINTENENCE_DATE"
      ,"MAINTENANCE_PLAN_ID"
      ,"WITH_DEPRECIATION"
      ,"DEPREC_MONTHS"
      ,"DEPREC_BASE_VALUE"
      ,"DEPREC_MONTHS_REMAINED"
      ,"BPARTNER_ID"
      ,"CREATEDON"
      ,"INUSE_BPARTNER_ID"
      ,"MODIFIEDON"
      ,"MODIFIEDBY"
      ,"CREATEDBY"
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
                a.ASSETGRP_ID
                ,a.PRODUCT_ID
                ,a.CLIORG_ID
                ,a.CLIENT_ID
                ,a.ID
                ,(select code from client where id = a.client_id) CLIENT_CODE
                ,a.NAME
                ,(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME
                ,a.QUANTITY
                ,a.SERIAL_NO
                ,a.NOTES
                ,a.IS_ACTIVE
                ,a.IS_DEPRECIATED
                ,a.IS_DISPOSED
                ,a.IS_OWNED
                ,a.IS_INPOSESSION
                ,a.LAST_MAINTENANCE_DATE
                ,a.NEXT_MAINTENENCE_DATE
                ,a.MAINTENANCE_PLAN_ID
                ,a.WITH_DEPRECIATION
                ,a.DEPREC_MONTHS
                ,a.DEPREC_BASE_VALUE
                ,a.DEPREC_MONTHS_REMAINED
                ,a.BPARTNER_ID
                ,a.INUSE_BPARTNER_ID
                ,a.CREATEDON
                ,a.CREATEDBY
                ,a.MODIFIEDON
                ,a.MODIFIEDBY
            from ASSET a $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ASSETGRP_ID"
     ,"PRODUCT_ID"
     ,"CLIORG_ID"
     ,"CLIENT_ID"
     ,"ID"
     ,"CLIENT_CODE"
     ,"NAME"
     ,"ASSETGRP_NAME"
     ,"QUANTITY"
     ,"SERIAL_NO"
     ,"NOTES"
     ,"IS_ACTIVE"
     ,"IS_DEPRECIATED"
     ,"IS_DISPOSED"
     ,"IS_OWNED"
     ,"IS_INPOSESSION"
     ,"LAST_MAINTENANCE_DATE"
     ,"NEXT_MAINTENENCE_DATE"
     ,"MAINTENANCE_PLAN_ID"
     ,"WITH_DEPRECIATION"
     ,"DEPREC_MONTHS"
     ,"DEPREC_BASE_VALUE"
     ,"DEPREC_MONTHS_REMAINED"
     ,"BPARTNER_ID"
     ,"INUSE_BPARTNER_ID"
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0061.fetchRecord().");}
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
    $RECORD["ASSETGRP_ID"] = $this->getRequestParam("ASSETGRP_ID");
    $RECORD["ASSETGRP_NAME"] = $this->getRequestParam("ASSETGRP_NAME");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIORG_ID"] = $this->getRequestParam("CLIORG_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DEPREC_BASE_VALUE"] = $this->getRequestParam("DEPREC_BASE_VALUE");
    $RECORD["DEPREC_MONTHS"] = $this->getRequestParam("DEPREC_MONTHS");
    $RECORD["DEPREC_MONTHS_REMAINED"] = $this->getRequestParam("DEPREC_MONTHS_REMAINED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INUSE_BPARTNER_ID"] = $this->getRequestParam("INUSE_BPARTNER_ID");
    $RECORD["IS_ACTIVE"] = $this->getRequestParamBoolean("IS_ACTIVE");
    $RECORD["IS_DEPRECIATED"] = $this->getRequestParamBoolean("IS_DEPRECIATED");
    $RECORD["IS_DISPOSED"] = $this->getRequestParamBoolean("IS_DISPOSED");
    $RECORD["IS_INPOSESSION"] = $this->getRequestParamBoolean("IS_INPOSESSION");
    $RECORD["IS_OWNED"] = $this->getRequestParamBoolean("IS_OWNED");
    $RECORD["LAST_MAINTENANCE_DATE"] = $this->getRequestParam("LAST_MAINTENANCE_DATE");
    $RECORD["MAINTENANCE_PLAN_ID"] = $this->getRequestParam("MAINTENANCE_PLAN_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NEXT_MAINTENENCE_DATE"] = $this->getRequestParam("NEXT_MAINTENENCE_DATE");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["SERIAL_NO"] = $this->getRequestParam("SERIAL_NO");
    $RECORD["WITH_DEPRECIATION"] = $this->getRequestParamBoolean("WITH_DEPRECIATION");
    $sql = "insert into ASSET(
                 ID
                ,CLIENT_ID
                ,CLIORG_ID
                ,PRODUCT_ID
                ,ASSETGRP_ID
                ,NAME
                ,NOTES
                ,QUANTITY
                ,SERIAL_NO
                ,IS_ACTIVE
                ,IS_DEPRECIATED
                ,IS_DISPOSED
                ,IS_OWNED
                ,IS_INPOSESSION
                ,LAST_MAINTENANCE_DATE
                ,NEXT_MAINTENENCE_DATE
                ,MAINTENANCE_PLAN_ID
                ,WITH_DEPRECIATION
                ,DEPREC_MONTHS
                ,DEPREC_BASE_VALUE
                ,DEPREC_MONTHS_REMAINED
                ,BPARTNER_ID
                ,INUSE_BPARTNER_ID
            ) values ( 
                 :ID
                ,:CLIENT_ID
                ,:CLIORG_ID
                ,:PRODUCT_ID
                ,:ASSETGRP_ID
                ,:NAME
                ,:NOTES
                ,:QUANTITY
                ,:SERIAL_NO
                ,:IS_ACTIVE
                ,:IS_DEPRECIATED
                ,:IS_DISPOSED
                ,:IS_OWNED
                ,:IS_INPOSESSION
                ,:LAST_MAINTENANCE_DATE
                ,:NEXT_MAINTENENCE_DATE
                ,:MAINTENANCE_PLAN_ID
                ,:WITH_DEPRECIATION
                ,:DEPREC_MONTHS
                ,:DEPREC_BASE_VALUE
                ,:DEPREC_MONTHS_REMAINED
                ,:BPARTNER_ID
                ,:INUSE_BPARTNER_ID
    )";
    $stmt = $this->db->prepare($sql);
    $_seq = $this->db->execute("select SEQ_ASSET_ID.nextval seq_val from dual")->fetchRow();
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
    $RECORD["ASSETGRP_ID"] = $this->getRequestParam("ASSETGRP_ID");
    $RECORD["ASSETGRP_NAME"] = $this->getRequestParam("ASSETGRP_NAME");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIORG_ID"] = $this->getRequestParam("CLIORG_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DEPREC_BASE_VALUE"] = $this->getRequestParam("DEPREC_BASE_VALUE");
    $RECORD["DEPREC_MONTHS"] = $this->getRequestParam("DEPREC_MONTHS");
    $RECORD["DEPREC_MONTHS_REMAINED"] = $this->getRequestParam("DEPREC_MONTHS_REMAINED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INUSE_BPARTNER_ID"] = $this->getRequestParam("INUSE_BPARTNER_ID");
    $RECORD["IS_ACTIVE"] = $this->getRequestParamBoolean("IS_ACTIVE");
    $RECORD["IS_DEPRECIATED"] = $this->getRequestParamBoolean("IS_DEPRECIATED");
    $RECORD["IS_DISPOSED"] = $this->getRequestParamBoolean("IS_DISPOSED");
    $RECORD["IS_INPOSESSION"] = $this->getRequestParamBoolean("IS_INPOSESSION");
    $RECORD["IS_OWNED"] = $this->getRequestParamBoolean("IS_OWNED");
    $RECORD["LAST_MAINTENANCE_DATE"] = $this->getRequestParam("LAST_MAINTENANCE_DATE");
    $RECORD["MAINTENANCE_PLAN_ID"] = $this->getRequestParam("MAINTENANCE_PLAN_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NEXT_MAINTENENCE_DATE"] = $this->getRequestParam("NEXT_MAINTENENCE_DATE");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["SERIAL_NO"] = $this->getRequestParam("SERIAL_NO");
    $RECORD["WITH_DEPRECIATION"] = $this->getRequestParamBoolean("WITH_DEPRECIATION");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0061.doUpdate().");}
    $sql = "update ASSET set 
                 ID=:ID
                ,CLIENT_ID=:CLIENT_ID
                ,CLIORG_ID=:CLIORG_ID
                ,PRODUCT_ID=:PRODUCT_ID
                ,ASSETGRP_ID=:ASSETGRP_ID
                ,NAME=:NAME
                ,NOTES=:NOTES
                ,QUANTITY=:QUANTITY
                ,SERIAL_NO=:SERIAL_NO
                ,IS_ACTIVE=:IS_ACTIVE
                ,IS_DEPRECIATED=:IS_DEPRECIATED
                ,IS_DISPOSED=:IS_DISPOSED
                ,IS_OWNED=:IS_OWNED
                ,IS_INPOSESSION=:IS_INPOSESSION
                ,LAST_MAINTENANCE_DATE=:LAST_MAINTENANCE_DATE
                ,NEXT_MAINTENENCE_DATE=:NEXT_MAINTENENCE_DATE
                ,MAINTENANCE_PLAN_ID=:MAINTENANCE_PLAN_ID
                ,WITH_DEPRECIATION=:WITH_DEPRECIATION
                ,DEPREC_MONTHS=:DEPREC_MONTHS
                ,DEPREC_BASE_VALUE=:DEPREC_BASE_VALUE
                ,DEPREC_MONTHS_REMAINED=:DEPREC_MONTHS_REMAINED
                ,BPARTNER_ID=:BPARTNER_ID
                ,INUSE_BPARTNER_ID=:INUSE_BPARTNER_ID
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
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0061.doDelete().");}
    $sql = "delete from ASSET where 
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
    $RECORD["ASSETGRP_ID"] = $this->getRequestParam("ASSETGRP_ID");
    $RECORD["ASSETGRP_NAME"] = $this->getRequestParam("ASSETGRP_NAME");
    $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID");
    $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE");
    $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID");
    $RECORD["CLIORG_ID"] = $this->getRequestParam("CLIORG_ID");
    $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY");
    $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON");
    $RECORD["DEPREC_BASE_VALUE"] = $this->getRequestParam("DEPREC_BASE_VALUE");
    $RECORD["DEPREC_MONTHS"] = $this->getRequestParam("DEPREC_MONTHS");
    $RECORD["DEPREC_MONTHS_REMAINED"] = $this->getRequestParam("DEPREC_MONTHS_REMAINED");
    $RECORD["ID"] = $this->getRequestParam("ID");
    $RECORD["INUSE_BPARTNER_ID"] = $this->getRequestParam("INUSE_BPARTNER_ID");
    $RECORD["IS_ACTIVE"] = $this->getRequestParam("IS_ACTIVE");
    $RECORD["IS_DEPRECIATED"] = $this->getRequestParam("IS_DEPRECIATED");
    $RECORD["IS_DISPOSED"] = $this->getRequestParam("IS_DISPOSED");
    $RECORD["IS_INPOSESSION"] = $this->getRequestParam("IS_INPOSESSION");
    $RECORD["IS_OWNED"] = $this->getRequestParam("IS_OWNED");
    $RECORD["LAST_MAINTENANCE_DATE"] = $this->getRequestParam("LAST_MAINTENANCE_DATE");
    $RECORD["MAINTENANCE_PLAN_ID"] = $this->getRequestParam("MAINTENANCE_PLAN_ID");
    $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY");
    $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON");
    $RECORD["NAME"] = $this->getRequestParam("NAME");
    $RECORD["NEXT_MAINTENENCE_DATE"] = $this->getRequestParam("NEXT_MAINTENENCE_DATE");
    $RECORD["NOTES"] = $this->getRequestParam("NOTES");
    $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID");
    $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY");
    $RECORD["SERIAL_NO"] = $this->getRequestParam("SERIAL_NO");
    $RECORD["WITH_DEPRECIATION"] = $this->getRequestParam("WITH_DEPRECIATION");
    $RECORD["_p_record_status"] = "insert";
    $this->setFieldInitialValues($RECORD, "DC0061");
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                (select code from client where id = a.client_id) CLIENT_CODE
                ,(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME
                ,a.ID
                ,a.CLIENT_ID
                ,a.CLIORG_ID
                ,a.PRODUCT_ID
                ,a.ASSETGRP_ID
                ,a.NAME
                ,a.NOTES
                ,a.QUANTITY
                ,a.SERIAL_NO
                ,a.IS_ACTIVE
                ,a.IS_DEPRECIATED
                ,a.IS_DISPOSED
                ,a.IS_OWNED
                ,a.IS_INPOSESSION
                ,a.LAST_MAINTENANCE_DATE
                ,a.NEXT_MAINTENENCE_DATE
                ,a.MAINTENANCE_PLAN_ID
                ,a.WITH_DEPRECIATION
                ,a.DEPREC_MONTHS
                ,a.DEPREC_BASE_VALUE
                ,a.DEPREC_MONTHS_REMAINED
                ,a.BPARTNER_ID
                ,a.CREATEDON
                ,a.INUSE_BPARTNER_ID
                ,a.MODIFIEDON
                ,a.MODIFIEDBY
                ,a.CREATEDBY
            from ASSET a
         where 
           a.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "CLIENT_CODE" => array("DATA_TYPE" => "STRING")
  ,"ASSETGRP_NAME" => array("DATA_TYPE" => "STRING")
  ,"ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIENT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CLIORG_ID" => array("DATA_TYPE" => "NUMBER")
  ,"PRODUCT_ID" => array("DATA_TYPE" => "NUMBER")
  ,"ASSETGRP_ID" => array("DATA_TYPE" => "NUMBER")
  ,"NAME" => array("DATA_TYPE" => "STRING")
  ,"NOTES" => array("DATA_TYPE" => "STRING")
  ,"QUANTITY" => array("DATA_TYPE" => "NUMBER")
  ,"SERIAL_NO" => array("DATA_TYPE" => "STRING")
  ,"IS_ACTIVE" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_DEPRECIATED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_DISPOSED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_OWNED" => array("DATA_TYPE" => "BOOLEAN")
  ,"IS_INPOSESSION" => array("DATA_TYPE" => "BOOLEAN")
  ,"LAST_MAINTENANCE_DATE" => array("DATA_TYPE" => "DATE")
  ,"NEXT_MAINTENENCE_DATE" => array("DATA_TYPE" => "DATE")
  ,"MAINTENANCE_PLAN_ID" => array("DATA_TYPE" => "NUMBER")
  ,"WITH_DEPRECIATION" => array("DATA_TYPE" => "BOOLEAN")
  ,"DEPREC_MONTHS" => array("DATA_TYPE" => "NUMBER")
  ,"DEPREC_BASE_VALUE" => array("DATA_TYPE" => "NUMBER")
  ,"DEPREC_MONTHS_REMAINED" => array("DATA_TYPE" => "NUMBER")
  ,"BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"CREATEDON" => array("DATA_TYPE" => "DATE")
  ,"INUSE_BPARTNER_ID" => array("DATA_TYPE" => "NUMBER")
  ,"MODIFIEDON" => array("DATA_TYPE" => "DATE")
  ,"MODIFIEDBY" => array("DATA_TYPE" => "STRING")
  ,"CREATEDBY" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ASSETGRP_ID"] )) { $RECORD["ASSETGRP_ID"] = $this->getRequestParam("ASSETGRP_ID"); }
     if (isset($_REQUEST["ASSETGRP_NAME"] )) { $RECORD["ASSETGRP_NAME"] = $this->getRequestParam("ASSETGRP_NAME"); }
     if (isset($_REQUEST["BPARTNER_ID"] )) { $RECORD["BPARTNER_ID"] = $this->getRequestParam("BPARTNER_ID"); }
     if (isset($_REQUEST["CLIENT_CODE"] )) { $RECORD["CLIENT_CODE"] = $this->getRequestParam("CLIENT_CODE"); }
     if (isset($_REQUEST["CLIENT_ID"] )) { $RECORD["CLIENT_ID"] = $this->getRequestParam("CLIENT_ID"); }
     if (isset($_REQUEST["CLIORG_ID"] )) { $RECORD["CLIORG_ID"] = $this->getRequestParam("CLIORG_ID"); }
     if (isset($_REQUEST["CREATEDBY"] )) { $RECORD["CREATEDBY"] = $this->getRequestParam("CREATEDBY"); }
     if (isset($_REQUEST["CREATEDON"] )) { $RECORD["CREATEDON"] = $this->getRequestParam("CREATEDON"); }
     if (isset($_REQUEST["DEPREC_BASE_VALUE"] )) { $RECORD["DEPREC_BASE_VALUE"] = $this->getRequestParam("DEPREC_BASE_VALUE"); }
     if (isset($_REQUEST["DEPREC_MONTHS"] )) { $RECORD["DEPREC_MONTHS"] = $this->getRequestParam("DEPREC_MONTHS"); }
     if (isset($_REQUEST["DEPREC_MONTHS_REMAINED"] )) { $RECORD["DEPREC_MONTHS_REMAINED"] = $this->getRequestParam("DEPREC_MONTHS_REMAINED"); }
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["INUSE_BPARTNER_ID"] )) { $RECORD["INUSE_BPARTNER_ID"] = $this->getRequestParam("INUSE_BPARTNER_ID"); }
    $RECORD["IS_ACTIVE"] = $this->getRequestParamBoolean("IS_ACTIVE");
    $RECORD["IS_DEPRECIATED"] = $this->getRequestParamBoolean("IS_DEPRECIATED");
    $RECORD["IS_DISPOSED"] = $this->getRequestParamBoolean("IS_DISPOSED");
    $RECORD["IS_INPOSESSION"] = $this->getRequestParamBoolean("IS_INPOSESSION");
    $RECORD["IS_OWNED"] = $this->getRequestParamBoolean("IS_OWNED");
     if (isset($_REQUEST["LAST_MAINTENANCE_DATE"] )) { $RECORD["LAST_MAINTENANCE_DATE"] = $this->getRequestParam("LAST_MAINTENANCE_DATE"); }
     if (isset($_REQUEST["MAINTENANCE_PLAN_ID"] )) { $RECORD["MAINTENANCE_PLAN_ID"] = $this->getRequestParam("MAINTENANCE_PLAN_ID"); }
     if (isset($_REQUEST["MODIFIEDBY"] )) { $RECORD["MODIFIEDBY"] = $this->getRequestParam("MODIFIEDBY"); }
     if (isset($_REQUEST["MODIFIEDON"] )) { $RECORD["MODIFIEDON"] = $this->getRequestParam("MODIFIEDON"); }
     if (isset($_REQUEST["NAME"] )) { $RECORD["NAME"] = $this->getRequestParam("NAME"); }
     if (isset($_REQUEST["NEXT_MAINTENENCE_DATE"] )) { $RECORD["NEXT_MAINTENENCE_DATE"] = $this->getRequestParam("NEXT_MAINTENENCE_DATE"); }
     if (isset($_REQUEST["NOTES"] )) { $RECORD["NOTES"] = $this->getRequestParam("NOTES"); }
     if (isset($_REQUEST["PRODUCT_ID"] )) { $RECORD["PRODUCT_ID"] = $this->getRequestParam("PRODUCT_ID"); }
     if (isset($_REQUEST["QUANTITY"] )) { $RECORD["QUANTITY"] = $this->getRequestParam("QUANTITY"); }
     if (isset($_REQUEST["SERIAL_NO"] )) { $RECORD["SERIAL_NO"] = $this->getRequestParam("SERIAL_NO"); }
    $RECORD["WITH_DEPRECIATION"] = $this->getRequestParamBoolean("WITH_DEPRECIATION");
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
