<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0025: Account
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0025 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $start = nvl($this->getRequestParam("start"), 0);
      $limit = nvl($this->getRequestParam("limit"),40);
      $p_query_column = $this->getRequestParam("_p_query_column");
      $p_query_value = $this->getRequestParam("_p_query_value");
      $where = "";
      if (!empty($p_query_value )) {
      if ($p_query_column == "CODE") {
        $where = " tsql.CODE like :p_query_value" ;
      }
      if ($p_query_column == "NAME") {
        $where = " tsql.NAME like :p_query_value" ;
      }
        if (!empty($where)) {
          $where = " where ".$where;
          $params ["p_query_value"] = $p_query_value;
        }
      }
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"ACCOUNT";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_client_id"] = (isset($_REQUEST["p_client_id"]))?  $_REQUEST["p_client_id"] : "-1";
      $sql = "select tsql.* from (select account code, name 
  from account a 
 where  a.active = 'Y' ".$orderByClause.") tsql ".$where;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
      $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") tcount", $params);
      $rsCount->MoveFirst();
      $columns = array(
       "CODE"
      ,"NAME"
      );
      $dataOut = $this->serializeCursor($rs,$columns, $this->query_data_format);
      if ($this->query_data_format == "xml" ) {header("Content-type: application/xml");}
      print $this->formatQueryResponseData($dataOut,$rsCount->fields["TOTALCOUNT"]);
      $jsOn = "";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
