<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0007: Regions
 */
require_once(PATH_N21LIB."/Http/Controller.php");
class LOV0007 extends Controller {
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
      $params["p_country_code"] = (isset($_REQUEST["p_country_code"]))?  $_REQUEST["p_country_code"] : "-";
      $sql = "select tsql.* from (select code, name from region 
 where active='Y' 
  and country_code like :p_country_code order by 1) tsql ".$where." ".$orderByClause;
      $stmt = $this->getDbConn()->prepare($sql);
      $rs = $this->getDbConn()->Execute($stmt, $params);
      $columns = array(
       "CODE"
      );
      $dataOut = $this->serializeCursor($rs,$columns, $this->getDataFormatFetch());
      if ($this->getDataFormatFetch() == "xml" ) {header("Content-type: application/xml");}
      print $this->formatQueryResponseData($dataOut,-1);
      $jsOn = "";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
