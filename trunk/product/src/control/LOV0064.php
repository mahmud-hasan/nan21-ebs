<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0064: BP client business partner
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0064 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $p_query_column = $this->getRequestParam("_p_query_column");
      $p_query_value = $this->getRequestParam("_p_query_value");
      $where = "";
      if (!empty($p_query_value )) {
        if (!empty($where)) {
          $where = " where ".$where;
          $params ["p_query_value"] = $p_query_value;
        }
      }
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_client_id"] = (isset($_REQUEST["p_client_id"]))?  $_REQUEST["p_client_id"] : "-1";
      $sql = "select tsql.* from (select id, name from bpartner  where id = (select c.bpartner_id from client c where c.id = :p_client_id )) tsql ".$where." ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $params);
      $columns = array(
       "ID"
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
