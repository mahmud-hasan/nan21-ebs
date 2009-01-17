<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0053: Org. inventory
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0053 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_org_id"] = (isset($_REQUEST["p_org_id"]))?  $_REQUEST["p_org_id"] : "-1";
      $sql = "select t.id, t.code from mm_org_inv t where t.org_id = :p_org_id order by 2  ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $params);
      $columns = array(
       "CODE"
      ,"ID"
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
