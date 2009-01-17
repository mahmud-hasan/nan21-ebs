<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0072 Controller: User authentication log
 */

require_once(PATH_CTRL_FRMWK."/Controller.php");

class DC0072 extends Controller {


private function preQuery(&$params, &$where) {
    if (!empty($_REQUEST["QRY_ID"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ul.ID like :ID";
      $params["ID"] = $_REQUEST["QRY_ID"];
    }
    if (!empty($_REQUEST["QRY_USERNAME"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ul.USERNAME like :USERNAME";
      $params["USERNAME"] = $_REQUEST["QRY_USERNAME"];
    }
    if (!empty($_REQUEST["QRY_LOGIN"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ul.LOGIN like :LOGIN";
      $params["LOGIN"] = $_REQUEST["QRY_LOGIN"];
    }
    if (!empty($_REQUEST["QRY_IP_ADRESS"])) {
      $where .= (!empty($where))?" and ":"";
      $where .= "ul.IP_ADRESS like :IP_ADRESS";
      $params["IP_ADRESS"] = $_REQUEST["QRY_IP_ADRESS"];
    }
}

public function doQuery() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                ul.ID
                ,ul.USERNAME
                ,ul.LOGIN
                ,ul.LOGOUT
                ,ul.IP_ADRESS
            from USR_LOGIN ul $where $orderByClause ";
    $this->logger->debug($sql);
    $rs = $this->db->SelectLimit($sql, $limit, $start, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
      "ID"
      ,"USERNAME"
      ,"LOGIN"
      ,"LOGOUT"
      ,"IP_ADRESS"
      );
    $dataOut = $this->serializeCursor($rs,$columns, $this->query_data_format);
    if ($this->query_data_format == "xml" ) {header("Content-type: application/xml");}
    print $this->formatQueryResponseData($dataOut, $rsCount->fields["TOTALCOUNT"]);
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doQuery  */


public function doExport() {
  try {
    $start = nvl($this->getRequestParam("start"), 0);
    $limit = nvl($this->getRequestParam("limit"),20);
    $groupBy = (!empty($_REQUEST["groupBy"]))?$_REQUEST["groupBy"]:"";
    $orderBy = (!empty($_REQUEST["sort"]))?$_REQUEST["sort"]:"";
    $orderSense = (!empty($_REQUEST["dir"]))?$_REQUEST["dir"]:"";
    $orderByClause = (!empty($orderBy))? "order by $orderBy $orderSense " : "" ;
    $where = "";
    $params = array();
    $this->preQuery($params, $where);
    if (!empty($where)) {
      $where = " where ".$where;
    }
    $sql = "select 
                ul.ID
                ,ul.USERNAME
                ,ul.LOGIN
                ,ul.LOGOUT
                ,ul.IP_ADRESS
            from USR_LOGIN ul $where $orderByClause ";
    $rs = $this->db->Execute($sql, $params);
    $rsCount = $this->db->Execute("select count(*) TOTALCOUNT from (".$sql.") t", $params);
    $rsCount->MoveFirst();
    $columns = array(
     "ID"
     ,"USERNAME"
     ,"LOGIN"
     ,"LOGOUT"
     ,"IP_ADRESS"
      );
    if (!empty($_REQUEST["_p_disp_cols"])) {
      $columns = explode("|",$_REQUEST["_p_disp_cols"]);
    }
    $dataOut = $this->serializeCursor($rs,$columns,"xml");
    $dataOut = "<records>".$dataOut."</records>";
    $dataOut = "<queryParams>".$this->serializeArray($params,"xml")."</queryParams>".$dataOut;
    $dataOut = "<columnDef>".$this->columnDefForExport($columns,$this->fieldDef,true).$this->columnDefForExport(array_diff(array_keys($params), $columns),$this->fieldDef,false)."</columnDef>".$dataOut;
    $dataOut = "<staticText>".$this->exportLocalizedStaticText()."</staticText>".$dataOut;
    $dataOut = "<groupBy>".$groupBy."</groupBy>".$dataOut;
    $dataOut = "<reportData  title=\"".$this->getDcTitle()."\" by=\"".$_SESSION["user"]["userName"]."\" on=\"".date(DATE_FORMAT)."\">".$dataOut."</reportData>";
    $this->beginExport();
    print $dataOut;
    $this->endExport();
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function doExport  */


public function fetchRecord() {
  try {
    $RECORD = array();
    $RECORD["ID"] = $this->getRequestParam("ID");
    if (empty($RECORD["ID"])) { throw new Exception("Missing value for primary key field ID in DC0072.fetchRecord().");}
    $pkArray = array("ID" => $RECORD["ID"]);
    $this->findByPk($pkArray, $RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
  }catch(Exception  $e) {
    System::sendActionErrorJson( $e->getMessage());
  }
} /* end function fetchRecord */

private function findByPk(&$pkCols, &$record) {
    $sql = "select 
                ul.ID
                ,ul.USERNAME
                ,ul.LOGIN
                ,ul.LOGOUT
                ,ul.IP_ADRESS
            from USR_LOGIN ul
         where 
           ul.ID= :ID
            ";
    $rs = $this->db->Execute($sql, $pkCols);
    $row = $rs->FetchRow();
    $this->copyArrayValues($record, $row);
} /* end function findByPk  */

private  $fieldDef = array(
  "ID" => array("DATA_TYPE" => "NUMBER")
  ,"USERNAME" => array("DATA_TYPE" => "STRING")
  ,"LOGIN" => array("DATA_TYPE" => "DATE")
  ,"LOGOUT" => array("DATA_TYPE" => "DATE")
  ,"IP_ADRESS" => array("DATA_TYPE" => "STRING")
);


private function readRequest(&$RECORD) {
     if (isset($_REQUEST["ID"] )) { $RECORD["ID"] = $this->getRequestParam("ID"); }
     if (isset($_REQUEST["IP_ADRESS"] )) { $RECORD["IP_ADRESS"] = $this->getRequestParam("IP_ADRESS"); }
     if (isset($_REQUEST["LOGIN"] )) { $RECORD["LOGIN"] = $this->getRequestParam("LOGIN"); }
     if (isset($_REQUEST["LOGOUT"] )) { $RECORD["LOGOUT"] = $this->getRequestParam("LOGOUT"); }
     if (isset($_REQUEST["USERNAME"] )) { $RECORD["USERNAME"] = $this->getRequestParam("USERNAME"); }
} /* end function readRequest  */


public function callProcedure($pName) {
  $this->logger->debug("Start: ".$this->dcName.".callProcedure(".$pName.")");
  try {
    $RECORD = array();
    $this->readRequest($RECORD);
    print "{success:true, data:".json_encode($RECORD)."}";
    $this->logger->debug("End: ".$this->dcName.".callProcedure");
  }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
  }
} /* end function callProcedure */

}
?>
