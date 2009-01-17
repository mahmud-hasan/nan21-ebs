<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0029: UI DC fields
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0029 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $p_query_column = $this->getRequestParam("_p_query_column");
      $p_query_value = $this->getRequestParam("_p_query_value");
      $where = "";
      if (!empty($p_query_value )) {
      if ($p_query_column == "FIELD_NAME") {
        $where = " tsql.FIELD_NAME like :p_query_value" ;
      }
      if ($p_query_column == "UIDC_CODE") {
        $where = " tsql.UIDC_CODE like :p_query_value" ;
      }
        if (!empty($where)) {
          $where = " where ".$where;
          $params ["p_query_value"] = $p_query_value;
        }
      }
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"FIELD_NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_uidc_code"] = (isset($_REQUEST["p_uidc_code"]))?  $_REQUEST["p_uidc_code"] : "";
      $sql = "select tsql.* from (select uidc_code, field_name
  from ui_dc_field 
 where (:p_uidc_code is null or uidc_code like :p_uidc_code)) tsql ".$where." ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $params);
      $columns = array(
       "FIELD_NAME"
      ,"UIDC_CODE"
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
