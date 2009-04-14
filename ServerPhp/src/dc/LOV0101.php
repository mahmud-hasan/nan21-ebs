<?
  try {
    $PARAMS = array();
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"position";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $sql = "select code from menubar ".$orderByClause;
    $stmt = $db->prepare($sql);
    $rs = $db->Execute($stmt, $PARAMS);
    $jsOn = "";
    while ( $row = $rs->FetchRow() ){
      $jsOn .= (!empty($jsOn))?",":"";
      $jsOn .= "{";
      $jsOn .= " CODE:\"".$row["CODE"]."\"";
      $jsOn .= "}";
    }
    print "{success:true, records:[".$jsOn."]}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
?>
