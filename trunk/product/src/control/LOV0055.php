<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0055: Org inv. stock location
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0055 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_orginv_id"] = (isset($_REQUEST["p_orginv_id"]))?  $_REQUEST["p_orginv_id"] : "-1";
      $sql = "select t.id, t.code from mm_stock_loc t where t.orginv_id = :p_orginv_id order by 2 ".$orderByClause;
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
