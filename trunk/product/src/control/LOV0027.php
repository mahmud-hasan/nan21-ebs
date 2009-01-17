<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0027: Received invoice
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0027 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $p_query_column = $this->getRequestParam("_p_query_column");
      $p_query_value = $this->getRequestParam("_p_query_value");
      $where = "";
      if (!empty($p_query_value )) {
      if ($p_query_column == "DOC_NO") {
        $where = " tsql.DOC_NO like :p_query_value" ;
      }
        if (!empty($where)) {
          $where = " where ".$where;
          $params ["p_query_value"] = $p_query_value;
        }
      }
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"doc_date";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_client_id"] = (isset($_REQUEST["p_client_id"]))?  $_REQUEST["p_client_id"] : "";
      $params["p_issuer_id"] = (isset($_REQUEST["p_issuer_id"]))?  $_REQUEST["p_issuer_id"] : "";
      $sql = "select tsql.* from (select r.id, r.doc_date, r.doc_no, r.issuer_id , iss.name issuer_name, r.doc_no||' / '||to_char(r.doc_date ,'DD.MM.YYYY') doc_no_date, r.client_id, r.total_amount, r.doc_currency 
  from rinvoice  r, bpartner iss
 where r.issuer_id = iss.id
   and (:p_issuer_id is null or r.issuer_id = :p_issuer_id)) tsql ".$where." ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $params);
      $columns = array(
       "DOC_CURRENCY"
      ,"DOC_DATE"
      ,"DOC_NO"
      ,"DOC_NO_DATE"
      ,"ID"
      ,"ISSUER_ID"
      ,"ISSUER_NAME"
      ,"TOTAL_AMOUNT"
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
