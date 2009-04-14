<?
  try {
    $PARAMS = array();
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"name";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $sql = "select id, code,name from ui_gui ".$orderByClause;
    $stmt = $db->prepare($sql);
    $rs = $db->Execute($stmt, $PARAMS);
    $jsOn = "";
    while ( $row = $rs->FetchRow() ){
      $jsOn .= (!empty($jsOn))?",":"";
      $jsOn .= "{";
      $jsOn .= " ID:\"".$row["ID"]."\"";
      $jsOn .= ",CODE:\"".$row["CODE"]."\"";
      $jsOn .= ",NAME:\"".$row["NAME"]."\"";
      $jsOn .= "}";
    }
    print "{success:true, records:[".$jsOn."]}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
?>
