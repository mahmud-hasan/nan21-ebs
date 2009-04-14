<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0117 Controller: Parcel reception new
 */

require_once(PATH_N21LIB."/Http/Controller.php");

class DC0117 extends Controller {

  public function __construct($request, $response, $session) {
    parent::__construct($request, $response, $session);
    $this->_initFields();
  }

public function doInsert() {
    $this->populateRecordFromRequest(); 
    $sql = "insert into TR_PARCEL(
                 CLIENT_ID
                ,CODE
                ,CONTENT
                ,DECLARED_VALUE
                ,DEST_ADRESS_NOTE
                ,DEST_BPADRESS
                ,DEST_BPADRESS_ID
                ,DEST_BPARTNER_ID
                ,DEST_CITY
                ,DEST_CITY_ID
                ,DEST_COUNTRY
                ,DEST_NAME
                ,DEST_REGION
                ,DEST_ZIP
                ,EXP_BPADRESS
                ,EXP_BPADRESS_ID
                ,EXP_BPARTNER_ID
                ,EXP_CITY
                ,EXP_CITY_ID
                ,EXP_COUNTRY
                ,EXP_NAME
                ,EXP_REGION
                ,ID
                ,INSURED_VALUE
                ,NOTES
                ,PACKAGE_COUNT
                ,REF_PARCEL_ID
                ,REF_PARCEL_REFERENCE_TYPE
            ) values ( 
                 :CLIENT_ID
                ,:CODE
                ,:CONTENT
                ,:DECLARED_VALUE
                ,:DEST_ADRESS_NOTE
                ,:DEST_BPADRESS
                ,:DEST_BPADRESS_ID
                ,:DEST_BPARTNER_ID
                ,:DEST_CITY
                ,:DEST_CITY_ID
                ,:DEST_COUNTRY
                ,:DEST_NAME
                ,:DEST_REGION
                ,:DEST_ZIP
                ,:EXP_BPADRESS
                ,:EXP_BPADRESS_ID
                ,:EXP_BPARTNER_ID
                ,:EXP_CITY
                ,:EXP_CITY_ID
                ,:EXP_COUNTRY
                ,:EXP_NAME
                ,:EXP_REGION
                ,:ID
                ,:INSURED_VALUE
                ,:NOTES
                ,:PACKAGE_COUNT
                ,:REF_PARCEL_ID
                ,:REF_PARCEL_REFERENCE_TYPE
    )";
    $stmt = $this->getDbConn()->prepare($sql);
    $_seq = $this->getDbConn()->execute("select seq_parcel_id.nextval seq_val from dual")->fetchRow();
    $this->record["ID"] = $_seq["SEQ_VAL"];
    $this->getDbConn()->Execute($stmt, $this->record);
    $this->postInsert();
    $pkArray = array("ID" => $this->record["ID"]);
    $this->findByPk($pkArray, $this->record);
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function doInsert */

public function initNewRecord() {
    $this->populateRecordFromRequest();
    $this->record["_p_record_status"] = "insert";
    $this->setFieldInitialValues($this->record, "DC0117");
    print "{success:true, data:".json_encode($this->record)."}";
} /* end function initNewRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                pbo_client.get_code_by_id(t.client_id) CLIENT_CODE
                ,t.CLIENT_ID
                ,t.CODE
                ,t.CONTENT
                ,t.DECLARED_VALUE
                ,t.DEST_ADRESS_NOTE
                ,t.DEST_BPADRESS
                ,t.DEST_BPADRESS_ID
                ,t.DEST_BPARTNER_ID
                ,t.DEST_CITY
                ,t.DEST_CITY_ID
                ,t.DEST_COUNTRY
                ,t.DEST_NAME
                ,t.DEST_REGION
                ,t.DEST_ZIP
                ,t.EXP_BPADRESS
                ,t.EXP_BPADRESS_ID
                ,t.EXP_BPARTNER_ID
                ,t.EXP_CITY
                ,t.EXP_CITY_ID
                ,t.EXP_COUNTRY
                ,t.EXP_NAME
                ,t.EXP_REGION
                ,t.ID
                ,t.INSURED_VALUE
                ,t.NOTES
                ,t.PACKAGE_COUNT
                ,t.REF_PARCEL_ID
                ,t.REF_PARCEL_REFERENCE_TYPE
            from TR_PARCEL t
         where 
           t.ID= :ID
            ";
    $rs = $this->getDbConn()->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    CollectionUtils::copyMapValues($record, $row);
} /* end function findByPk  */

private function postInsert() {
  $this->callProc_doReception(); 

} /* end function postInsert  */


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
  $p_agent_id = null; 

  $stmt = $this->getDbConn()->PrepareSP("BEGIN pbo_parcel.reception_new(p_event_date => :p_event_date,p_warehouse_id => :p_warehouse_id,p_parcel_code => :p_parcel_code,p_raise => :p_raise,p_agent_id => :p_agent_id); END;");
  $this->getDbConn()->InParameter($stmt,$this->record["EVENT_DATE"] ,"p_event_date" );
  $this->getDbConn()->InParameter($stmt,$this->record["WAREHOUSE_ORG_ID"] ,"p_warehouse_id" );
  $this->getDbConn()->InParameter($stmt,$this->record["CODE"] ,"p_parcel_code" );
  $this->getDbConn()->InParameter($stmt,$p_raise ,"p_raise" );
  $this->getDbConn()->InParameter($stmt,$p_agent_id ,"p_agent_id" );
  $this->logger->debug("In-Parameters: ".CollectionUtils::mapToString($this->record) );
  $this->getDbConn()->Execute($stmt);
  $this->logger->debug("Out-Parameters: ".CollectionUtils::mapToString($this->record) );

  $this->logger->debug("End: ".$this->dcName.".callProc_doReception");
} /* end function callProc_doReception  */


private function _initFields() {
  $this->fields = array(
  "CLIENT_CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CLIENT_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"CODE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"CONTENT" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DECLARED_VALUE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_ADRESS_NOTE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_BPADRESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_BPADRESS_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_CITY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_CITY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"DEST_COUNTRY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_REGION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"DEST_ZIP" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EVENT_DATE" => array(parent::FLDPROP_DATA_TYPE => "DATE")
  ,"EXP_BPADRESS" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_BPADRESS_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXP_BPARTNER_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXP_CITY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_CITY_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"EXP_COUNTRY" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"EXP_REGION" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"INSURED_VALUE" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"NOTES" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"PACKAGE_COUNT" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"REF_PARCEL_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"REF_PARCEL_REFERENCE_TYPE" => array(parent::FLDPROP_DATA_TYPE => "STRING")
  ,"WAREHOUSE_ORG_ID" => array(parent::FLDPROP_DATA_TYPE => "NUMBER")
  ,"WAREHOUSE_ORG_NAME" => array(parent::FLDPROP_DATA_TYPE => "STRING")
);
}

}
?>
