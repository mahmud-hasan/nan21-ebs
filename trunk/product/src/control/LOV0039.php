<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0039: Business partner with adress
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0039 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $start = nvl($this->getRequestParam("start"), 0);
      $limit = nvl($this->getRequestParam("limit"),40);
      $p_query_column = $this->getRequestParam("_p_query_column");
      $p_query_value = $this->getRequestParam("_p_query_value");
      $where = "";
      if (!empty($p_query_value )) {
      if ($p_query_column == "CITY") {
        $where = " tsql.CITY like :p_query_value" ;
      }
      if ($p_query_column == "COUNTRY_CODE") {
        $where = " tsql.COUNTRY_CODE like :p_query_value" ;
      }
      if ($p_query_column == "NAME") {
        $where = " tsql.NAME like :p_query_value" ;
      }
      if ($p_query_column == "REGION_CODE") {
        $where = " tsql.REGION_CODE like :p_query_value" ;
      }
        if (!empty($where)) {
          $where = " where ".$where;
          $params ["p_query_value"] = $p_query_value;
        }
      }
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select tsql.* from (select bp.name, bp.id, bpa.country_code,bpa.region_code, bpa.city, bpa.city_id, bpa.adress
  from bpartner bp, bp_adress bpa
 where bp.id = bpa.bpartner_id(+)) tsql ".$where." ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
      $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") tcount", $params);
      $rsCount->MoveFirst();
      $columns = array(
       "ADRESS"
      ,"CITY"
      ,"CITY_ID"
      ,"COUNTRY_CODE"
      ,"ID"
      ,"NAME"
      ,"REGION_CODE"
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
