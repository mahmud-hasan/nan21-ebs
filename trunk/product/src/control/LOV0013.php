<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0013: Issued invoices
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0013 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"doc_date desc";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select id, doc_no_full, doc_date,  receiver_name, total_amount, doc_currency from v_invoice_header ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " DOC_CURRENCY:\"".$row["DOC_CURRENCY"]."\"";
        $jsOn .= ",DOC_DATE:\"".$row["DOC_DATE"]."\"";
        $jsOn .= ",DOC_NO_FULL:\"".$row["DOC_NO_FULL"]."\"";
        $jsOn .= ",ID:\"".$row["ID"]."\"";
        $jsOn .= ",RECEIVER_NAME:\"".$row["RECEIVER_NAME"]."\"";
        $jsOn .= ",TOTAL_AMOUNT:\"".$row["TOTAL_AMOUNT"]."\"";
        $jsOn .= "}";
      }
      print "{success:true, records:[".$jsOn."]}";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
