<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0017: Products
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0017 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select id, code, name, expense_account, revenue_account, uom_code 
 from product 
 ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $columns = array(
       "CODE"
      ,"EXPENSE_ACCOUNT"
      ,"ID"
      ,"NAME"
      ,"REVENUE_ACCOUNT"
      ,"UOM_CODE"
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
