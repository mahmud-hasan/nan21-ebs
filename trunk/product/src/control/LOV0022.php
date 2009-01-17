<?
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0022: Menu items
 */
require_once(PATH_CTRL_FRMWK."/Controller.php");
class LOV0022 extends Controller {
  public function doQuery() {
    try {
      $params = array();
      $start = nvl($this->getRequestParam("start"), 0);
      $limit = nvl($this->getRequestParam("limit"),40);
      $p_query_column = $this->getRequestParam("_p_query_column");
      $p_query_value = $this->getRequestParam("_p_query_value");
      $where = "";
      if (!empty($p_query_value )) {
      if ($p_query_column == "MENUBAR_CODE") {
        $where = " tsql.MENUBAR_CODE like :p_query_value" ;
      }
      if ($p_query_column == "NAME") {
        $where = " tsql.NAME like :p_query_value" ;
      }
        if (!empty($where)) {
          $where = " where ".$where;
          $params ["p_query_value"] = $p_query_value;
        }
      }
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"position";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $params["p_parent"] = (isset($_REQUEST["p_parent"]))?  $_REQUEST["p_parent"] : "";
      $params["p_menubar"] = (isset($_REQUEST["p_menubar"]))?  $_REQUEST["p_menubar"] : "%";
      $sql = "select tsql.* from (select m.id, m.menubar_code, m.position,m.name, m.menuitem_id , (select t.name from menuitem t where t.id = m.menuitem_id) parent_name from menuitem m where m.menubar_code like :p_menubar) tsql ".$where." ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
      $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") tcount", $params);
      $rsCount->MoveFirst();
      $columns = array(
       "ID"
      ,"MENUBAR_CODE"
      ,"MENUITEM_ID"
      ,"NAME"
      ,"PARENT_NAME"
      ,"POSITION"
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
