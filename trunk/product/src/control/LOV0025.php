<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0025: Account
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0025 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ACCOUNT";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $PARAMS["p_client_id"] = (isset($_REQUEST["p_client_id"]))?  $_REQUEST["p_client_id"] : "-1";
      $sql = "select account code, name 
  from account a 
 where  a.active = 'Y' ".$orderByClause;
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
