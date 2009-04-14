<?php

/**
 * see if the java extension was loaded.
 */
function checkJavaExtension()
{
    if(!extension_loaded('java'))
    {
        $sapi_type = php_sapi_name();
        $port = (isset($_SERVER['SERVER_PORT']) && (($_SERVER['SERVER_PORT'])>1024)) ? $_SERVER['SERVER_PORT'] : '8088';
        print   $port;
        if ($sapi_type == "cgi" || $sapi_type == "cgi-fcgi" || $sapi_type == "cli")
        {
            if(!(PHP_SHLIB_SUFFIX=="so" && @dl('java.so'))&&!(PHP_SHLIB_SUFFIX=="dll" && @dl('php_java.dll'))&&!(@include_once("java/Java.inc"))&&!(require_once("http://127.0.0.1:$port/java/Java.inc"))) 
            {
                return "java extension not installed.";
            }
        } 
        else
        {
            if(!(@include_once("java/Java.inc")))
            {
                require_once("http://localhost:8088/JavaBridge/java/Java.inc");
            }
        }
    }
    if(!function_exists("java_get_server_name")) 
    {
        return "The loaded java extension is not the PHP/Java Bridge";
    }

    return true;
}

/** 
 * convert a php value to a java one... 
 * @param string $value 
 * @param string $className 
 * @returns boolean success 
 */  
function convertValue($value, $className)  
{  
    // if we are a string, just use the normal conversion  
    // methods from the java extension...  
    try   
    {  
        if ($className == 'java.lang.String')  
        {  
            $temp = new Java('java.lang.String', $value);  
            return $temp;  
        }  
        else if ($className == 'java.lang.Boolean' ||  
            $className == 'java.lang.Integer' ||  
            $className == 'java.lang.Long' ||  
            $className == 'java.lang.Short' ||  
            $className == 'java.lang.Double' ||  
            $className == 'java.math.BigDecimal')  
        {  
            $temp = new Java($className, $value);  
            return $temp;  
        }  
        else if ($className == 'java.sql.Timestamp' ||  
            $className == 'java.sql.Time')  
        {  
            $temp = new Java($className);  
            $javaObject = $temp->valueOf($value);  
            return $javaObject;  
        }  
    }  
    catch (Exception $err)  
    {  
        echo (  'unable to convert value, ' . $value .  
                ' could not be converted to ' . $className);  
        return false;  
    }
  
    echo (  'unable to convert value, class name '.$className.  
            ' not recognised');  
    return false;  
}


//checkJavaExtension();
   require_once("http://localhost:8088/JavaBridge/java/Java.inc");
$compileManager = new JavaClass("net.sf.jasperreports.engine.JasperCompileManager");
$report = $compileManager->compileReport("D:/work/php/n21eBusinessSuite_/product/src/___reports/src/REP0001.jrxml");

$fillManager = new JavaClass("net.sf.jasperreports.engine.JasperFillManager");

$params = new Java("java.util.HashMap");
$params->put("P_INVOICE_ID",  convertValue($_REQUEST["P_INVOICE_ID"], "java.lang.Long"));
$params->put("SUBREPORT_DIR",  "D:/work/php/n21eBusinessSuite_/product/src/___reports/src");

$c = new JavaClass("oracle.jdbc.driver.OracleDriver");
$d = $c->newInstance();
$dm = new JavaClass("java.sql.DriverManager");
$conn = $dm->getConnection("jdbc:oracle:thin:@toshiba2:1521:XE","NAN21","NAN21");


  /*
 private static Connection connectToOracle(String db_host, String db_schema, String db_user, String db_password) {
	  	Connection c = null;
	  	try {
				String url = "jdbc:oracle:thin:@"+db_host+":1521:"+db_schema;
				Class.forName ("oracle.jdbc.driver.OracleDriver").newInstance();
				c = DriverManager.getConnection (url, db_user, db_password);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return c;

*/
$jasperPrint = $fillManager->fillReport($report, $params, $conn);

$outputPath = realpath(".")."/"."output.pdf";

$exportManager = new JavaClass("net.sf.jasperreports.engine.JasperExportManager");
$exportManager->exportReportToPdfFile($jasperPrint, $outputPath);

header("Content-type: application/pdf");
readfile($outputPath);

unlink($outputPath);

?>
