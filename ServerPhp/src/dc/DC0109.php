<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0109 Controller: Parcel return to warehouse
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0109 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into (
                 CODE
                ,EVENT_DATE
                ,RETURN_BY_ORG_ID
                ,RETURN_BY_ORG_NAME
                ,RETURN_REASON
                ,RETURN_REASON_CODE
                ,WAREHOUSE_ORG_ID
                ,WAREHOUSE_ORG_NAME
            ) values ( 
                 :CODE
                ,:EVENT_DATE
                ,:RETURN_BY_ORG_ID
                ,:RETURN_BY_ORG_NAME
                ,:RETURN_REASON
                ,:RETURN_REASON_CODE
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
    if (empty($this->record["CODE"])) { throw new Exception("Missing value for primary key field CODE in DC0109.doUpdate().");}
    $sql = "update  set 
                 CODE=:CODE
                ,EVENT_DATE=:EVENT_DATE
                ,RETURN_REASON_CODE=:RETURN_REASON_CODE
                ,RETURN_REASON=:RETURN_REASON
                ,WAREHOUSE_ORG_ID=:WAREHOUSE_ORG_ID
                ,WAREHOUSE_ORG_NAME=:WAREHOUSE_ORG_NAME
                ,RETURN_BY_ORG_ID=:RETURN_BY_ORG_ID
                ,RETURN_BY_ORG_NAME=:RETURN_BY_ORG_NAME
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
    $this->setFieldInitialValues($this->record, "DC0109");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
    $this->populateRecordFromRequest();
    if ($pName == "markRejected") { $this->callProc_markRejected(); }
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function callProc_markRejected() {
  $this->logger->debug("Start: ".$this->dcName.".callProc_markRejected");

  $p_raise = "Y"; 

  $stmt = $this->getDbConn()->PrepareSP("BEGIN pbo_parcel.mark_return(p_parcel_code => :p_parcel_code,p_raise => :p_raise,p_reason_code => :p_reason_code,p_event_date => :p_event_date,p_reason => :p_reason,p_warehouse_id => :p_warehouse_id,p_agent_id => :p_agent_id); END;");
  $this->getDbConn()->InParameter($stmt,$this->record["CODE"] ,"p_parcel_code" );
  $this->getDbConn()->InParameter($stmt,$p_raise ,"p_raise" );
  $this->getDbConn()->InParameter($stmt,$this->record["REJECT_REASON_CODE"] ,"p_reason_code" );
  $this->getDbConn()->InParameter($stmt,$this->record["EVENT_DATE"] ,"p_event_date" );
  $this->getDbConn()->InParameter($stmt,$this->record["REJECT_REASON"] ,"p_reason" );
  $this->getDbConn()->InParameter($stmt,$this->record["WAREHOUSE_ORG_ID"] ,"p_warehouse_id" );
  $this->getDbConn()->InParameter($stmt,$this->record["RETURN_BY_ORG_ID"] ,"p_agent_id" );
  $this->logger->debug("In-Parameters: ".CollectionUtils::mapToString($this->record) );
  $this->getDbConn()->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".CollectionUtils::mapToString($this->record) );

  $this->logger->debug("End: ".$this->dcName.".callProc_markRejected");
} /* end function callProc_markRejected  */


private function _initFields() {
  $this->fields = array(
  "CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EVENT_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"RETURN_BY_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"RETURN_BY_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"RETURN_REASON" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"RETURN_REASON_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"WAREHOUSE_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"WAREHOUSE_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
