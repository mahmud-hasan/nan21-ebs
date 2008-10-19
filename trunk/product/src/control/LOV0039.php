<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0039: Business partner with adress
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0039 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select bp.name, bp.id, bpa.country_code,bpa.region_code, bpa.city, bpa.city_id, bpa.adress
  from bpartner bp, bp_adress bpa
 where bp.id = bpa.bpartner_id(+) ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " ADRESS:\"".$row["ADRESS"]."\"";
        $jsOn .= ",CITY:\"".$row["CITY"]."\"";
        $jsOn .= ",CITY_ID:\"".$row["CITY_ID"]."\"";
        $jsOn .= ",COUNTRY_CODE:\"".$row["COUNTRY_CODE"]."\"";
        $jsOn .= ",ID:\"".$row["ID"]."\"";
        $jsOn .= ",NAME:\"".$row["NAME"]."\"";
        $jsOn .= ",REGION_CODE:\"".$row["REGION_CODE"]."\"";
        $jsOn .= "}";
      }
      print "{success:true, records:[".$jsOn."]}";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
