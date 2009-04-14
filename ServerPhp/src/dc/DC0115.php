<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0115 Controller: Parcel reception existing
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0115 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into (
                 AGENT_ORG_ID
                ,AGENT_ORG_NAME
                ,CODE
                ,EVENT_DATE
                ,WAREHOUSE_ORG_ID
                ,WAREHOUSE_ORG_NAME
            ) values ( 
                 :AGENT_ORG_ID
                ,:AGENT_ORG_NAME
                ,:CODE
                ,:EVENT_DATE
                ,:WAREHOUSE_ORG_ID
                ,:WAREHOUSE_ORG_NAME
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("CODE" => $this->record["CODE"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["CODE"])) { throw new Exception("Missing value for primary key field CODE in DC0115.doUpdate().");}
    $sql = "update  set 
                 WAREHOUSE_ORG_ID=:WAREHOUSE_ORG_ID
                ,WAREHOUSE_ORG_NAME=:WAREHOUSE_ORG_NAME
                ,AGENT_ORG_ID=:AGENT_ORG_ID
                ,AGENT_ORG_NAME=:AGENT_ORG_NAME
                ,EVENT_DATE=:EVENT_DATE
                ,CODE=:CODE
    where 
           CODE= :CODE
    ";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("CODE" => $this->record["CODE"],"CODE" => $this->record["CODE"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doUpdate */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0115");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
    $this->populateRecordFromRequest();
    if ($pName == "doReception") { $this->callProc_doReception(); }
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function callProc_doReception() {
  $this->logger->debug("Start: ".$this->dcName.".callProc_doReception");

  $p_raise = "Y"; 

  $stmt = $this->getDbConn()->PrepareSP("BEGIN pbo_parcel.reception_existing(p_parcel_code => :p_parcel_code,p_agent_id => :p_agent_id,p_raise => :p_raise,p_event_date => :p_event_date,p_warehouse_id => :p_warehouse_id); END;");
  $this->getDbConn()->InParameter($stmt,$this->record["CODE"] ,"p_parcel_code" );
  $this->getDbConn()->InParameter($stmt,$this->record["AGENT_ORG_ID"] ,"p_agent_id" );
  $this->getDbConn()->InParameter($stmt,$p_raise ,"p_raise" );
  $this->getDbConn()->InParameter($stmt,$this->record["EVENT_DATE"] ,"p_event_date" );
  $this->getDbConn()->InParameter($stmt,$this->record["WAREHOUSE_ORG_ID"] ,"p_warehouse_id" );
  $this->logger->debug("In-Parameters: ".CollectionUtils::mapToString($this->record) );
  $this->getDbConn()->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".CollectionUtils::mapToString($this->record) );

  $this->logger->debug("End: ".$this->dcName.".callProc_doReception");
} /* end function callProc_doReception  */


private function _initFields() {
  $this->fields = array(
  "AGENT_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"AGENT_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EVENT_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"WAREHOUSE_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"WAREHOUSE_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
