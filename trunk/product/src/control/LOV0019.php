<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0019: Contracts
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0019 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"doc_date desc";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select c.id, c.doc_no, c.doc_date , cust.name customer, supp.name supplier, c.doc_no || '/' || c.doc_date doc_no_full
  from bp_contract c, bpartner cust , bpartner supp
 where c.cust_bpartner_id = cust.id
   and c.supp_bpartner_id = supp.id ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $columns = array(
       "CUSTOMER"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"DOC_NO_FULL"
      ,"ID"
      ,"SUPPLIER"
      );
      $dataOut = $this->serializeCursor($rs,$columns, $this->query_data_format);
      if ($this->query_data_format == "xml" ) {header("Content-type: application/xml");}
      print $this->formatQueryResponseData($dataOut,-1);
      $jsOn = "";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
