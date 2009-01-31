<?php



  class Logger {

     private static $log;

     private $fileHandler;
     private $logFileName = "log.txt";
     private $logLevel;

     const LOG_LEVEL_DEBUG = 3;
     const LOG_LEVEL_INFO  = 2;
     const LOG_LEVEL_ERROR = 1;
     const LOG_LEVEL_NONE  = 0;



     private function  Logger() {
        $this->fileHandler = fopen($this->logFileName, 'a');
        $this->logLevel = Logger::LOG_LEVEL_NONE;
     }

     public static function getInstance() {
       if (!isset($log )) {
          $log = new Logger();
       }
       return  $log;
     }

     public function setLogLevel($logLevel) {
       $this->logLevel = $logLevel;
     }

     public function debug($message) {
        if ($this->logLevel >= Logger::LOG_LEVEL_DEBUG ) {
          fwrite($this->fileHandler, "\r\n DEBUG: ". date("Y-m-d H:i:s")." ".$message);
        }
    }
     public function info($message) {
       if ($this->logLevel >= Logger::LOG_LEVEL_INFO ) {
         fwrite($this->fileHandler, "\r\n INFO: ". date("Y-m-d H:i:s")." ".$message);
       }
    }
     public function error($message) {
       if ($this->logLevel >= Logger::LOG_LEVEL_ERROR ) {
         fwrite($this->fileHandler, "\r\n ERROR: ". date("Y-m-d H:i:s")." ".$message);
       }
    }

    public function map2string(&$map) {
      $out = "";
      foreach($map as $k=>$v) {
        $out .= "\r\n  - $k=$v";
      }
      return $out;
    }
    public function close() {fclose($this->fileHandler);}






  }




?>
