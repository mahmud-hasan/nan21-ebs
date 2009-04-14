<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0009: Business partners
 */
require_once(PATH_N21LIB."/Http/Controller.php");
class LOV0009 extends Controller {
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
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select tsql.* from (select id, code, name from bpartner) tsql ".$where." ".$orderByClause;
      $stmt = $this->getDbConn()->prepare($sql);
      $rs = $this->getDbConn()->SelectLimit($sql, $limit, $start, $params);
      $rsCount = $this->getDbConn()->Execute("select count(*) TOTALCOUNT from (".$sql.") tcount", $params);
      $rsCount->MoveFirst();
      $columns = array(
       "CODE"
      ,"ID"
      ,"NAME"
      );
      $dataOut = $this->serializeCursor($rs,$columns, $this->getDataFormatFetch());
      if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
      print $this->formatQueryResponseData($dataOut,$rsCount->fields["TOTALCOUNT"]);
      $jsOn = "";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
