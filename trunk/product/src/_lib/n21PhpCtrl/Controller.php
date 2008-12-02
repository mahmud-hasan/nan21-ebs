<?php

require_once(dirname(__FILE__)."/Servlet.php");

class Controller extends Servlet{


    protected $dcName;
    protected $exp_format = "html";
    protected $query_data_format = "json";

    public function setQueryDataFormat(&$v) {
      if ( $v=="json" || $v=="xml"  ) {
        $this->query_data_format = $v;
      } else {
         throw new Exception("Allowed formats to fetch query data are json and xml");
      }
    }

    protected function formatQueryResponseData(&$dataString, $totalRecords) {
      if ($this->query_data_format == "json") {
        return "{ success : true , totalCount:".$totalRecords.", records : [  ".$dataString."] } ";
      }
      if ($this->query_data_format == "xml") {
        return "<"."?"."xml version='1.0' encoding='UTF-8'?><records>".$dataString."</records>";
        //<totalCount>".$totalRecords."</totalCount>
      }
    }

    public function setExpFormat($s) {
      $this->exp_format = $s;
    }
    public function setDcName(&$s) {
      $this->dcName = $s;
    }


    function setFieldInitialValues(&$RECORD, $dcName) {
       global $ADODB_FETCH_MODE;
       global $log;
       $params = array();
       foreach($this->getRequest() as $k=>$v) {
          if (substr($k,0,3) != "_p_") {$params[$k] = $this->getRequestParam($k); }
       }
       //print_r ($params) ;
       $sql = "select * from ui_dc_field_initval where uidc_code = '".$dcName."' and active='Y'";
       $ADODB_FETCH_MODE = ADODB_FETCH_BOTH;
       $rs = $this->db->Execute($sql);
       while ( $row = $rs->FetchRow() ){
         if (array_key_exists($row["FIELD_NAME"],$RECORD)) {
            if ($row["VALUE_TYPE"] == "VALUE" ) {
              $RECORD[$row["FIELD_NAME"]] = $row["FIELD_VALUE"];
            }elseif ($row["VALUE_TYPE"] == "SQL") {
              $log->debug($row["FIELD_VALUE"]);
              $log->debug($this->serializeArray($params,"json"));
              $r = $this->db->Execute($row["FIELD_VALUE"],$params);
              $rr = $r->FetchRow();
              $RECORD[$row["FIELD_NAME"]] = $rr[0];
            }

         }
       }
       $ADODB_FETCH_MODE = ADODB_FETCH_ASSOC;
    }



    function copyArrayValues(&$to, &$from) {
      foreach($from as $k => $v) {
        $to[$k] = $from[$k];
      }
    }

   function serializeArray(&$arr,$format) {
     if (empty($format)) { return $this->serializeArray_xml($arr);}
     elseif ($format=="json") { return $this->serializeArray_xml($arr);}
     elseif ($format=="xml") { return $this->serializeArray_xml($arr);}
   }
  function serializeArray_xml(&$arr) {
     $dataOut = "";
    // print_r($arr);
     foreach ( $arr as $k => $v ){
       $dataOut .= "<".$k.">".$this->xmlencode($v)."</".$k.">";
    }
    return $dataOut;
  }



   function serializeCursor(&$rs,&$columns,$format) {
     if (empty($format)) { return $this->serializeCursor_json($rs,$columns);}
     elseif ($format=="json") { return $this->serializeCursor_json($rs,$columns);}
     elseif ($format=="xml") { return $this->serializeCursor_xml($rs,$columns);}
   }


   function serializeCursor_json(&$rs,&$columns) {
     $dataOut = "";
     while ( $row = $rs->FetchRow() ){
      $dataOut .= (!empty($dataOut))?",":"";
      $dataOut .= "{";
      for ($i=0; $i<count($columns); $i++) {
         $dataOut .= (($i>0)?",":"").$columns[$i].":\"".urlencode($row[$columns[$i]])."\"";
      }
      $dataOut .= "}";
    }
    return $dataOut;
  }
  function serializeCursor_xml(&$rs,&$columns) {
     $dataOut = "";
     while ( $row = $rs->FetchRow() ){
      $dataOut .= "<record>";
      for ($i=0; $i<count($columns); $i++) {
         if (!empty($columns[$i])) {
           $dataOut .= "<".$columns[$i].">".$this->xmlencode($row[$columns[$i]])."</".$columns[$i].">";
         }
      }
      $dataOut .= "</record>";
    }
    return $dataOut;
  }


  protected function beginExport() {

    header('Content-type: text/xml');
    print '<?xml version="1.0"?>';
    print '<'.'?'.'xml-stylesheet type="text/xsl" href="test.xsl"'.'?'.'>';

  }
  protected function endExport() {

  }

  protected function columnDefForExport(&$columns, &$columnDef, $isResultCoumn) {
                     //print_r($columns);
                     //print_r(array_keys($columns));
    require(INCLUDES."/locale/".$this->dcName."_".$_SESSION["user"]["language"].".php");
    $out = "";
    $cnt = count($columns);
    $origKeys = array_keys($columns);
    if (isset($resourceBundle)) {
      $rb = $resourceBundle["FieldLabel"];
      for ($i=0;$i<$cnt;$i++) {
        if (!empty($columns[$origKeys[$i]])) {
          $out .= "<".$columns[$origKeys[$i]]." isColumn=\"".($isResultCoumn?"Y":"N")."\">";
          if (array_key_exists($columns[$origKeys[$i]],$rb )) {
             $out .= "<label>".$rb[$columns[$origKeys[$i]]]."</label>";
          } else {
             $out .=  "<label>".strtolower($columns[$origKeys[$i]])."</label>";
          }
          if (array_key_exists($columns[$origKeys[$i]],$columnDef )) {
            $out .= "<dataType>".$columnDef[$columns[$origKeys[$i]]]["DATA_TYPE"]."</dataType>";
          } else {
            $out .=  "<dataType>STRING</dataType>";
          }
          $out .= "</".$columns[$origKeys[$i]].">";
        }
      }
    }
    else {  // no translation found do some defaults
      for ($i=0;$i<$cnt;$i++) {
        if (!empty($columns[$origKeys[$i]])) {
          $out .= "<".$columns[$origKeys[$i]].">";
          $out .=  "<label>".strtolower($columns[$origKeys[$i]])."</label>";
           if (array_key_exists($columns[$origKeys[$i]],$columnDef )) {
            $out .= "<dataType>".$columnDef[$columns[$origKeys[$i]]]["DATA_TYPE"]."</dataType>";
          } else {
            $out .=  "<dataType>STRING</dataType>";
          }
          $out .= "</".$columns[$origKeys[$i]].">";
        }
      }
    }
    return $out;
  }

  protected function getDcTitle () {
     require(INCLUDES."/locale/".$this->dcName."_".$_SESSION["user"]["language"].".php");
     if (is_array($resourceBundle)) {
       return $resourceBundle["DcProperty"]["Title"];
     } else return $this->dcName;
   }


  protected function exportLocalizedStaticText() {
    require(INCLUDES."/locale/_list_export_".$_SESSION["user"]["language"].".php");
    $out = "";
    $out .= "<label id=\"queryParamsTitle\">".$_list_export_labels["queryParamsTitle"]."</label>";
    $out .= "<label id=\"runBy\">".$_list_export_labels["runBy"]."</label>";
    $out .= "<label id=\"runOn\">".$_list_export_labels["runOn"]."</label>";
    return $out;
  }


  public function doAction($actionName) {
    try {
       $hnd = "$"."this->doAction_".$actionName."();";
       eval($hnd);
     }catch(Exception  $e) {
      System::sendActionErrorJson( $e->getMessage());
    }
  }


  function xmlencode($tag) {
    $tag = str_replace("&", "&amp;", $tag);
    $tag = str_replace("<", "&lt;", $tag);
    $tag = str_replace(">", "&gt;", $tag);
    $tag = str_replace("", "@", $tag);
    //$tag = str_replace("\r", "_", $tag);
    //$tag = str_replace("\t", "_", $tag);
    return $tag;
}




}


?>