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
      $PARAMS = array();
      $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"NAME";
      $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
      $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
      $sql = "select bp.name, bp.id, bpa.country_code,bpa.region_code, bpa.city, bpa.city_id, bpa.adress
  from bpartner bp, bp_adress bpa
 where bp.id = bpa.bpartner_id(+) ".$orderByClause;
      $stmt = $this->db->prepare($sql);
      $rs = $this->db->Execute($stmt, $PARAMS);
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
      print $this->formatQueryResponseData($dataOut,-1);
      $jsOn = "";
    }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }
}
?>
