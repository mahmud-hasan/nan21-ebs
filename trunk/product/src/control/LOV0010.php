<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0010: Cities
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0010 extends Controller {
  public function doQuery() {
    try {
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $PARAMS["p_country_code"] = (isset($_REQUEST["p_country_code"]))?  $_REQUEST["p_country_code"] : "-1";
      $PARAMS["p_region_code"] = (isset($_REQUEST["p_region_code"]))?  $_REQUEST["p_region_code"] : "-1";
      $sql = "select id, name 
  from city 
 where (:p_country_code is null 
        or country_code like :p_country_code) 
 and (:p_region_code is null 
        or region_code like :p_region_code) 
  and active='Y' ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
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
