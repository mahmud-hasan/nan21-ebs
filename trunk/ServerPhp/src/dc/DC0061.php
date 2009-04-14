<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0061 Controller: Assets
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0061 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ASSETGRP_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.ASSETGRP_ID like :ASSETGRP_ID";
      $params["ASSETGRP_ID"] = $_REQUEST["QRY_ASSETGRP_ID"];
    }
    if (!empty($_REQUEST["QRY_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.BPARTNER_ID like :BPARTNER_ID";
      $params["BPARTNER_ID"] = $_REQUEST["QRY_BPARTNER_ID"];
    }
    if (!empty($_REQUEST["QRY_CLIENT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.CLIENT_ID like :CLIENT_ID";
      $params["CLIENT_ID"] = $_REQUEST["QRY_CLIENT_ID"];
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
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_INUSE_BPARTNER_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.INUSE_BPARTNER_ID like :INUSE_BPARTNER_ID";
      $params["INUSE_BPARTNER_ID"] = $_REQUEST["QRY_INUSE_BPARTNER_ID"];
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
    if (!empty($_REQUEST["QRY_IS_INPOSESSION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_INPOSESSION like :IS_INPOSESSION";
      $params["IS_INPOSESSION"] = $_REQUEST["QRY_IS_INPOSESSION"];
    }
    if (!empty($_REQUEST["QRY_IS_OWNED"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.IS_OWNED like :IS_OWNED";
      $params["IS_OWNED"] = $_REQUEST["QRY_IS_OWNED"];
    }
    if (!empty($_REQUEST["QRY_NAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.NAME like :NAME";
      $params["NAME"] = $_REQUEST["QRY_NAME"];
    }
    if (!empty($_REQUEST["QRY_PRODUCT_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.PRODUCT_ID like :PRODUCT_ID";
      $params["PRODUCT_ID"] = $_REQUEST["QRY_PRODUCT_ID"];
    }
    if (!empty($_REQUEST["QRY_SERIAL_NO"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.SERIAL_NO like :SERIAL_NO";
      $params["SERIAL_NO"] = $_REQUEST["QRY_SERIAL_NO"];
    }
    if (!empty($_REQUEST["QRY_WITH_DEPRECIATION"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "a.WITH_DEPRECIATION like :WITH_DEPRECIATION";
      $params["WITH_DEPRECIATION"] = $_REQUEST["QRY_WITH_DEPRECIATION"];
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
                a.ASSETGRP_ID
                ,(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME
                ,a.BPARTNER_ID
                ,(select code from client where id = a.client_id) CLIENT_CODE
                ,a.CLIENT_ID
                ,a.CLIORG_ID
                ,a.CREATEDBY
                ,a.CREATEDON
                ,a.DEPREC_BASE_VALUE
                ,a.DEPREC_MONTHS
                ,a.DEPREC_MONTHS_REMAINED
                ,a.ID
                ,a.INUSE_BPARTNER_ID
                ,a.IS_ACTIVE
                ,a.IS_DEPRECIATED
                ,a.IS_DISPOSED
                ,a.IS_INPOSESSION
                ,a.IS_OWNED
                ,a.LAST_MAINTENANCE_DATE
                ,a.MAINTENANCE_PLAN_ID
                ,a.MODIFIEDBY
                ,a.MODIFIEDON
                ,a.NAME
                ,a.NEXT_MAINTENENCE_DATE
                ,a.NOTES
                ,a.PRODUCT_ID
                ,a.QUANTITY
                ,a.SERIAL_NO
                ,a.WITH_DEPRECIATION
            from ASSET a $where $orderByClause ";
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
                a.ASSETGRP_ID
                ,a.CLIENT_ID
                ,a.PRODUCT_ID
                ,a.CLIORG_ID
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
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0061.fetchRecord().");}
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function fetchRecord */

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into ASSET(
                 ASSETGRP_ID
                ,BPARTNER_ID
                ,CLIENT_ID
                ,CLIORG_ID
                ,DEPREC_BASE_VALUE
                ,DEPREC_MONTHS
                ,DEPREC_MONTHS_REMAINED
                ,ID
                ,INUSE_BPARTNER_ID
                ,IS_ACTIVE
                ,IS_DEPRECIATED
                ,IS_DISPOSED
                ,IS_INPOSESSION
                ,IS_OWNED
                ,LAST_MAINTENANCE_DATE
                ,MAINTENANCE_PLAN_ID
                ,NAME
                ,NEXT_MAINTENENCE_DATE
                ,NOTES
                ,PRODUCT_ID
                ,QUANTITY
                ,SERIAL_NO
                ,WITH_DEPRECIATION
            ) values ( 
                 :ASSETGRP_ID
                ,:BPARTNER_ID
                ,:CLIENT_ID
                ,:CLIORG_ID
                ,:DEPREC_BASE_VALUE
                ,:DEPREC_MONTHS
                ,:DEPREC_MONTHS_REMAINED
                ,:ID
                ,:INUSE_BPARTNER_ID
                ,:IS_ACTIVE
                ,:IS_DEPRECIATED
                ,:IS_DISPOSED
                ,:IS_INPOSESSION
                ,:IS_OWNED
                ,:LAST_MAINTENANCE_DATE
                ,:MAINTENANCE_PLAN_ID
                ,:NAME
                ,:NEXT_MAINTENENCE_DATE
                ,:NOTES
                ,:PRODUCT_ID
                ,:QUANTITY
                ,:SERIAL_NO
                ,:WITH_DEPRECIATION
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select SEQ_ASSET_ID.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0061.doUpdate().");}
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
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("ID" => $this->record["ID"],"ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function doDelete() {
    $this->record["ID"] = $this->getRequestParam("ID");
    if (empty($this->record["ID"])) { throw new Exception("Missing value for primary key field ID in DC0061.doDelete().");}
    $sql = "delete from ASSET where 
           ID= :ID
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doDelete */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0061");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                a.ASSETGRP_ID
                ,(select name from asset_group where id = a.assetgrp_id) ASSETGRP_NAME
                ,a.BPARTNER_ID
                ,(select code from client where id = a.client_id) CLIENT_CODE
                ,a.CLIENT_ID
                ,a.CLIORG_ID
                ,a.CREATEDBY
                ,a.CREATEDON
                ,a.DEPREC_BASE_VALUE
                ,a.DEPREC_MONTHS
                ,a.DEPREC_MONTHS_REMAINED
                ,a.ID
                ,a.INUSE_BPARTNER_ID
                ,a.IS_ACTIVE
                ,a.IS_DEPRECIATED
                ,a.IS_DISPOSED
                ,a.IS_INPOSESSION
                ,a.IS_OWNED
                ,a.LAST_MAINTENANCE_DATE
                ,a.MAINTENANCE_PLAN_ID
                ,a.MODIFIEDBY
                ,a.MODIFIEDON
                ,a.NAME
                ,a.NEXT_MAINTENENCE_DATE
                ,a.NOTES
                ,a.PRODUCT_ID
                ,a.QUANTITY
                ,a.SERIAL_NO
                ,a.WITH_DEPRECIATION
            from ASSET a
         where 
           a.ID= :ID
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
  "ASSETGRP_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ASSETGRP_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CLIORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CREATEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CREATEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"DEPREC_BASE_VALUE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEPREC_MONTHS" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEPREC_MONTHS_REMAINED" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INUSE_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"IS_ACTIVE" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_DEPRECIATED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_DISPOSED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_INPOSESSION" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"IS_OWNED" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
  ,"LAST_MAINTENANCE_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"MAINTENANCE_PLAN_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"MODIFIEDBY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"MODIFIEDON" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"NEXT_MAINTENENCE_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PRODUCT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"QUANTITY" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"SERIAL_NO" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"WITH_DEPRECIATION" => array(parent::FLDPROP_DATA_TYPE => "BOOLEAN")
);
}

}
?>
