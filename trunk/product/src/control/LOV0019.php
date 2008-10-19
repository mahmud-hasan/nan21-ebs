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
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " CUSTOMER:\"".$row["CUSTOMER"]."\"";
        $jsOn .= ",DOC_DATE:\"".$row["DOC_DATE"]."\"";
        $jsOn .= ",DOC_NO:\"".$row["DOC_NO"]."\"";
        $jsOn .= ",DOC_NO_FULL:\"".$row["DOC_NO_FULL"]."\"";
        $jsOn .= ",ID:\"".$row["ID"]."\"";
        $jsOn .= ",SUPPLIER:\"".$row["SUPPLIER"]."\"";
        $jsOn .= "}";
      }
      print "{success:true, records:[".$jsOn."]}";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
