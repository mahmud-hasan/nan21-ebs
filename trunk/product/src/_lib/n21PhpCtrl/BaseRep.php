<?php
  class BaseRep {
  
    protected $db;
    protected $request;
    protected $session;
    protected $report_id;

    protected $exp_format = "html";

    public function setDbConnection(&$dbConnection) {
      $this->db = $dbConnection;
    }
    public function setRequest(&$r) {
      $this->request = $r;
    }
    public function setSession(&$s) {
      $this->session = $s;
    }
    public function setExpFormat($s) {
      $this->exp_format = $s;
    }
    public function setReportId($s) {
      $this->report_id = $s;
    }
    function getRequestParam($attr) {
      return (isset($this->request[$attr]))?$this->request[$attr]:null;
    }
    function getSessionParam($attr) {
      return (isset($this->session[$attr]))?$this->session[$attr]:null;
    }

    function setFieldInitialValues(&$RECORD, $dcName) {
       $sql = "select * from ui_dc_field_initval where uidc_code = '".$dcName."' and active='Y'";
       $rs = $this->db->Execute($sql);
       while ( $row = $rs->FetchRow() ){
         if (array_key_exists($row["FIELD_NAME"],$RECORD)) {
            if ($row["VALUE_TYPE"] == "VALUE" ) {
              $RECORD[$row["FIELD_NAME"]] = $row["FIELD_VALUE"];
            }elseif ($row["VALUE_TYPE"] == "SQL") {
              $r = $this->db->Execute($row["FIELD_VALUE"]);
              $rr = $r->FetchRow();
              $RECORD[$row["FIELD_NAME"]] = $rr[0];
            }

         }
       }
    }



    function copyArrayValues(&$to, &$from) {
      foreach($from as $k => $v) {
         //if (array_key_exists($k,$from)) {
           $to[$k] = $from[$k];
        // }
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
       $dataOut .= "<".$k.">".$v."</".$k.">";
    }
    return $dataOut;
  }



   function serializeCursor(&$rs,&$columns,$format) {
     if (empty($format)) { return $this->serializeCursor_json($rs,$columns);}
     elseif ($format=="json") { return $this->serializeCursor_json($rs,$columns);}
     elseif ($format=="xml") { return $this->serializeCursor_xml($rs,$columns);}
   }
   function serializeRowAll(&$row,$format) {
     if (empty($format)) { return $this->serializeRowAll_xml($row);}
    // elseif ($format=="json") { return $this->serializeCursorAll_json($row,$columns);}
     elseif ($format=="xml") { return $this->serializeRowAll_xml($row);}
   }

   function serializeCursor_json(&$rs,&$columns) {
     $dataOut = "";
     while ( $row = $rs->FetchRow() ){
      $dataOut .= (!empty($dataOut))?",":"";
      $dataOut .= "{";
      for ($i=0; $i<count($columns); $i++) {
         $dataOut .= (($i>0)?",":"").$columns[$i].":\"".$row[$columns[$i]]."\"";
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
           $dataOut .= "<".$columns[$i].">".$row[$columns[$i]]."</".$columns[$i].">";
         }
      }
      $dataOut .= "</record>";
    }
    return $dataOut;
  }
  function serializeRowAll_xml(&$row) {
    $dataOut = "";
    foreach ($row as $k => $v ) {
       $dataOut .= "<".$k.">".$row[$k]."</".$k.">";
    }
    return $dataOut;
  }
  function serializeCursorAll_xml(&$rs,$tag) {
     $dataOut = "";
     while ( $row = $rs->FetchRow() ){
      $dataOut .= "<".$tag.">";
      foreach ($row as $k => $v ) {
       $dataOut .= "<".$k.">".$row[$k]."</".$k.">";
      }
      $dataOut .= "</".$tag.">";
    }
    return $dataOut;
  }
  protected function beginExport($format = "html") {

    header('Content-type: text/xml');
    if ($format == "html") {
       print "<"."?"."xml version=\"1.0\"?"."><"."?"."xml-stylesheet type=\"text/xsl\" href=\"rep/". $this->report_id.".xsl\""."?".">";
    } else{
        print "<"."?"."xml version=\"1.0\"?".">";
    }

  }
  protected function endExport() {

  }

   public function doQuery (&$query,&$queries,&$dataOut, &$params , &$masterRow = null) {
        global $ADODB_FETCH_MODE;
        if (is_array($masterRow)) {
           $currentParam = array_merge($params, array() );
           foreach($masterRow as $k=>$v) {
              $currentParam [$query->masterQuery->name."#".$k] =  $masterRow[$k];
           }
        } else {
          $currentParam = array_merge($params, array());
        }

        //print_r($currentParam );
         // print  "in doQuery se executa: ".$query->name.",  ";
         $ADODB_FETCH_MODE = ADODB_FETCH_ASSOC;
        $rs = $this->db->Execute($query->sqlStatement, $currentParam);


        $query->executed = true;
         while($row=$rs->FetchRow()) {

            $xmlChunks = $this->serializeRowAll($row,"xml");
            $xmlChildren = "";
            // call recursive for child queries
            for ( $j=0;$j<count($queries);$j++) {
               if ( $queries[$j]->masterQuery == $query /* && !$queries[$j]->executed  */  ) {
                 $tmp = "";
                 $this->doQuery ($queries[$j],$queries,$xmlChildren,$params, $row);
                // $xmlChunks .= $xmlChildren;
               }
            }
            $dataOut .= "<".$query->name.">".$xmlChunks.$xmlChildren."</".$query->name.">";
          }
        $dataOut = "<".$query->name."_LIST>".$dataOut."</".$query->name."_LIST>";

    }



}

class ReportQuery {

  public $name;
  public $sqlStatement;
  public $masterQuery;
  public $executed = false;

}



?>