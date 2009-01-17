<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0024: Taxes - VAT
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0024 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"name";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select id,name, value 
  from tax 
where active = 'Y'
  and taxtype_code = 'VAT'
 ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $params);
      $columns = array(
       "ID"
      ,"NAME"
      ,"VALUE"
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
