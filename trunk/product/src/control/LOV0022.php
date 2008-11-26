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
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"position";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $PARAMS["p_parent"] = (isset($_REQUEST["p_parent"]))?  $_REQUEST["p_parent"] : "";
      $PARAMS["p_menubar"] = (isset($_REQUEST["p_menubar"]))?  $_REQUEST["p_menubar"] : "MAIN";
      $sql = "select m.id, m.menubar_code, m.position,m.name, m.menuitem_id , (select t.name from menuitem t where t.id = m.menuitem_id) parent_name from menuitem m where m.menubar_code=:p_menubar ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
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
      print $this->formatQueryResponseData($dataOut,-1);
      $jsOn = "";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
