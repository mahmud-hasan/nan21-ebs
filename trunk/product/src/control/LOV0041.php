<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0041: BP Customers
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0041 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select bp.id id, bp.code code, bp.name name , a.acct_receivable acct
  from bpartner bp , bp_account_customer a
 where bp.is_customer = 'Y'
   and bp.id = a.bpartner_id (+)
   and bp.client_id = a.client_id(+)
   and a.accschema_id = (select t.id from acc_schema t where t.client_id = bp.client_id and t.is_default = 'Y' ) ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
      $columns = array(
       "ACCT"
      ,"CODE"
      ,"ID"
      ,"NAME"
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
