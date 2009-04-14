<?
  try {
    $PARAMS = array();
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"position";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $PARAMS["p_parent"] = (isset($_REQUEST["p_parent"]))?  $_REQUEST["p_parent"] : "";
    $PARAMS["p_menubar"] = (isset($_REQUEST["p_menubar"]))?  $_REQUEST["p_menubar"] : "MAIN";
    $sql = "select m.id, m.menubar_code, m.position,m.name, m.menuitem_id , (select t.name from menuitem t where t.id = m.menuitem_id) parent_name from menuitem m where m.menubar_code=:p_menubar ".$orderByClause;
    $stmt = $db->prepare($sql);
    $rs = $db->Execute($stmt, $PARAMS);
    $jsOn = "";
    while ( $row = $rs->FetchRow() ){
      $jsOn .= (!empty($jsOn))?",":"";
      $jsOn .= "{";
      $jsOn .= " ID:\"".$row["ID"]."\"";
      $jsOn .= ",MENUBAR_CODE:\"".$row["MENUBAR_CODE"]."\"";
      $jsOn .= ",POSITION:\"".$row["POSITION"]."\"";
      $jsOn .= ",NAME:\"".$row["NAME"]."\"";
      $jsOn .= ",MENUITEM_ID:\"".$row["MENUITEM_ID"]."\"";
      $jsOn .= ",PARENT_NAME:\"".$row["PARENT_NAME"]."\"";
      $jsOn .= "}";
    }
    print "{success:true, records:[".$jsOn."]}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
?>