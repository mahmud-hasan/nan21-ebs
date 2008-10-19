<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0003: Invoice document type
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0003 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"t.code";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select t.code, t.name 
  from iinv_doc_type t 
 where t.active = 'Y' ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " CODE:\"".$row["CODE"]."\"";
        $jsOn .= ",NAME:\"".$row["NAME"]."\"";
        $jsOn .= "}";
      }
      print "{success:true, records:[".$jsOn."]}";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
