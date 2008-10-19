<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0027: Received invoice
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0027 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"doc_date";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $PARAMS["p_client_id"] = (isset($_REQUEST["p_client_id"]))?  $_REQUEST["p_client_id"] : "";
      $PARAMS["p_issuer_id"] = (isset($_REQUEST["p_issuer_id"]))?  $_REQUEST["p_issuer_id"] : "";
      $sql = "select r.id, r.doc_date, r.doc_no, r.issuer_id , iss.name issuer_name, r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_no_date, r.client_id, r.total_amount, r.doc_currency 
  from rinvoice  r, bpartner iss
 where r.issuer_id = iss.id
   and (:p_issuer_id is null or r.issuer_id = :p_issuer_id) ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " DOC_CURRENCY:\"".$row["DOC_CURRENCY"]."\"";
        $jsOn .= ",DOC_DATE:\"".$row["DOC_DATE"]."\"";
        $jsOn .= ",DOC_NO:\"".$row["DOC_NO"]."\"";
        $jsOn .= ",DOC_NO_DATE:\"".$row["DOC_NO_DATE"]."\"";
        $jsOn .= ",ID:\"".$row["ID"]."\"";
        $jsOn .= ",ISSUER_ID:\"".$row["ISSUER_ID"]."\"";
        $jsOn .= ",ISSUER_NAME:\"".$row["ISSUER_NAME"]."\"";
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
