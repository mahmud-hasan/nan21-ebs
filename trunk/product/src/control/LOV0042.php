<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0042: BP Suppliers
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0042 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select bp.id id, bp.code code, bp.name name , a.acct_liability acct
  from bpartner bp , bp_account_vendor a
 where bp.is_vendor = 'Y'
   and bp.id = a.bpartner_id (+)
   and bp.client_id = a.client_id(+)
   and a.accschema_id = (select t.id from acc_schema t where t.client_id = bp.client_id and t.is_default = 'Y' ) ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $jsOn = "";
      while ( $row = $rs->FetchRow() ){
        $jsOn .= (!empty($jsOn))?",":"";
        $jsOn .= "{";
        $jsOn .= " ACCT:\"".$row["ACCT"]."\"";
        $jsOn .= ",CODE:\"".$row["CODE"]."\"";
        $jsOn .= ",ID:\"".$row["ID"]."\"";
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
