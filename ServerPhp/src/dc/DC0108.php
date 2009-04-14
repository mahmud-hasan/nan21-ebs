<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0108 Controller: Parcel confirm delivery
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0108 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into (
                 CODE
                ,EVENT_DATE
                ,ORG
                ,ORG_ID
            ) values ( 
                 :CODE
                ,:EVENT_DATE
                ,:ORG
                ,:ORG_ID
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $this->getDbConn()->Execute($stmt, $this->record);
    $pkArray = array("CODE" => $this->record["CODE"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function doUpdate() {
    $this->populateRecordFromRequest();
    if (empty($this->record["CODE"])) { throw new Exception("Missing value for primary key field CODE in DC0108.doUpdate().");}
    $sql = "update  set 
                 EVENT_DATE=:EVENT_DATE
                ,CODE=:CODE
                ,ORG=:ORG
                ,ORG_ID=:ORG_ID
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
    $this->setFieldInitialValues($this->record, "DC0108");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
    $this->populateRecordFromRequest();
    if ($pName == "markDelivered") { $this->callProc_markDelivered(); }
    print "{success:true, data:".json_encode($this->record)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
} /* end function callProcedure */


private function callProc_markDelivered() {
  $this->logger->debug("Start: ".$this->dcName.".callProc_markDelivered");

  $p_raise = "Y"; 

  $stmt = $this->getDbConn()->PrepareSP("BEGIN pbo_parcel.mark_delivered(p_event_date => :p_event_date,p_parcel_code => :p_parcel_code,p_raise => :p_raise,p_agent_id => :p_agent_id); END;");
  $this->getDbConn()->InParameter($stmt,$this->record["EVENT_DATE"] ,"p_event_date" );
  $this->getDbConn()->InParameter($stmt,$this->record["CODE"] ,"p_parcel_code" );
  $this->getDbConn()->InParameter($stmt,$p_raise ,"p_raise" );
  $this->getDbConn()->InParameter($stmt,$this->record["ORG_ID"] ,"p_agent_id" );
  $this->logger->debug("In-Parameters: ".CollectionUtils::mapToString($this->record) );
  $this->getDbConn()->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".CollectionUtils::mapToString($this->record) );

  $this->logger->debug("End: ".$this->dcName.".callProc_markDelivered");
} /* end function callProc_markDelivered  */


private function _initFields() {
  $this->fields = array(
  "CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EVENT_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"ORG" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
);
}

}
?>
