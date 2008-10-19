<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0029: UI DC fields
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0029 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"FIELD_NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $PARAMS["p_uidc_code"] = (isset($_REQUEST["p_uidc_code"]))?  $_REQUEST["p_uidc_code"] : "";
      $sql = "select uidc_code, field_name
  from ui_dc_field 
 where (:p_uidc_code is null or uidc_code like :p_uidc_code) ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " FIELD_NAME:\"".$row["FIELD_NAME"]."\"";
        $jsOn .= ",UIDC_CODE:\"".$row["UIDC_CODE"]."\"";
        $jsOn .= "}";
      }
      print "{success:true, records:[".$jsOn."]}";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
