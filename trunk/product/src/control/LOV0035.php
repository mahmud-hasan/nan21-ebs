<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0035: Project component types
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0035 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $PARAMS["p_project_id"] = (isset($_REQUEST["p_project_id"]))?  $_REQUEST["p_project_id"] : "-1";
      $sql = "select code from project_cmp_type 
 where (:p_project_id is null or project_id = :p_project_id) 
order by 1 ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " CODE:\"".$row["CODE"]."\"";
        $jsOn .= "}";
      }
      print "{success:true, records:[".$jsOn."]}";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
