<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0021: MenuBars
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0021 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"position";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select code from menubar ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $params);
      $columns = array(
       "CODE"
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
