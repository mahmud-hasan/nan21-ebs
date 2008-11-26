<?php

  define("N21_APPLICATION","1"); 
  session_start();

  require_once("properties.php");
  require_once(PATH_CTRL_FRMWK."/System.php");
  require_once(PATH_LOGGER."/Logger.php");
  require_once(PATH_ADODB."/adodb.inc.php");
  require_once(PATH_ADODB."/adodb-exceptions.inc.php");
  require_once(PATH_CTRL_FRMWK."/MainServlet.php");

  

  $error = "";
  $logger = Logger::getInstance();
  $logger->debug($logger->map2string($_REQUEST));

  if (isset($_REQUEST["_p_action"]) && $_REQUEST["_p_action"] == "flogin") {


      $mainServlet = new MainServlet();
      $mainServlet->setDbConnection($db);          
      $mainServlet->setLogger($logger);


      $mainServlet->setAction($_REQUEST["_p_action"]);


      try {
         $mainServlet->run();
         $sUser = $mainServlet->getSession("user");
         

         if ($sUser != null && !empty($sUser["userName"]) ) {
            header("Location: frmMain.php");
            exit;
         }
      } catch(Exception $e) {
         if ( $e->getMessage() == "AUTH_INVALID_CREDENTIALS") {
           $error = "Invalid username/password. Logon denied.";
         } else {
           $error = $e->getMessage();
         }

      }
  }
  if (array_key_exists("user",$_SESSION) ) {
    header("Location: frmMain.php");
    exit;
  }

?>

<html>
  <head>
    <title>Nan21 eBusiness Suite</title>
    <style>
      .copyRight {
        font-size:9px;
        font-family:verdana,arial;
        color:#555555;
        margin-top:20px;
        padding-top:20px;
      }
      .logo1{
        font-family:verdana,arial;
        font-size:20px;
        color:#333399;

      }
      .logo2{
        font-family:verdana,arial;
        font-size:14px;
        color:rgb(220,19,57);
    
      }

    </style>
  </head>





<body style='background-color:#fff;font-family:arial,verdana;font-size:12px;' onLoad='if(document.forms[0] && document.forms[0].user){ try{document.forms[0].user.focus(); } catch(e) {} }'>

<br><br>
<br><br>



<div style='text-align:center;width:100%;border:0px solid'>
<center>

<table cellspacing=0 cellpadding=2 border=0  style='text-align:center;width:50%;' align=center width=60% >
  <tr>
    <td><hr width=100% size=1 noshade color="#154aa2"></td>
  </tr>
  <tr>
    <td width=100% >
      <table cellspacing=0 cellpadding=2 border=0  style='text-align:center' align=center width=100% >
        <tr>
          <td align=center colspan=3 >

            <font color=red><? if (!empty($error)) { print $error;}?></font>
          </td>
        </tr>

        <tr>
          <td style='text-align:right' >

             <span class="logo1"><font size="+2"><b>nan21</b></font> eBusiness Suite</span>  <br>
             <span class="logo2">Open source ERP/CRM </span>
          </td>
          <td style='width:15%' >

          </td>
          <td style='text-align:right' >

            

<!------  bgcolor = #79a0ef   --->

<form name="login" method=post action="">
<input type="hidden" name="_p_action" value="">

<table style='background-color:#154aa2;padding:0px;border:1px solid #154aa2;'  cellpadding="1" cellspacing="0"  align=center >
<tr>
  <td>
  	<table border="0" cellspacing="0" cellpadding="2" bgcolor="ffffff" style="width:100%">
  	 <tr bgcolor='#154aa2' height='18px'>
  	  <td align=center> <b><font  size=-2 face=verdana color=white >Registered user</font></b></td>

  	 </tr>
  	</table>
  	<table border="0" cellspacing="6" cellpadding="6" bgcolor="ffffff" width="100%">
  	  <tr bgcolor="#eeeeee">
  	    <td align="center">
      		<table style='margin:4px;' >
        		 <tr>
          		  <td align="right">

            			<table style='width:200px;'>
            			 <tr>
              			  <td align="left" nowrap><font face="arial" size="-1">Username:</font></td>
              			  <td><input name="_p_usr" size="20" value=""></td>
            			 </tr>
            			 <tr>
              			  <td align="left" nowrap><font face="arial" size="-1">Password:</font></td>
              			  <td><input name="_p_psw" type="password" value='' size="20" maxlength="32"></td>

            			 </tr>
            			 <tr>
              			  <td align="left" nowrap><font face="arial" size="-1">Instance:</font></td>
              			  <td><select name="_p_sid"  value='NAN21'   maxlength="32" >
                                        <?php
                                          foreach($_n21_tns_ as $k=>$v) {
                                            print "<option value='".$k."'>".$k."</option>";
                                          }
                                        ?>
                                      </select>
                                  </td>
            			 </tr>

            		   <tr>
            		  	  <td align=center></td>
                      <td>            &nbsp;<input name="save" type="button" value="Login" onClick="javascript:DoLogin();" ></td>

            			 </tr>
            			</table>

        	  	  </td>
      	 	 </tr>
      	 	 <tr bgcolor="eeeeee">
      	  	  <td valign="top" align="center"> <font face="arial" size="-1">

      	  	  </td>

      	 	 </tr>
    		 </table>
       </td>
 	   </tr>
    </table>
  </td>
 </tr>
</table>
</form>





          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>

    <td><hr width=100% size=1 noshade color="#154aa2"></td>
  </tr>
  <tr>
    <td align=center>
      <table cellpadding='0' cellspacing='0' width='100%' border='0' align=center>
        <tr>
          <td align='center' class='copyRight'>&copy; <a href='http://www.nan21.eu' target='_blank'  class='copyRightLink'>Nan21 Electronics srl.</a> All Rights Reserved.<br><A href='http://www.lionsol.com' target='_blank'></a></td>

        </tr>
      </table>
    </td>
  </tr>
</table>
</center>
 </div>


 </body>

<script>
 
function DoLogin() {
  if (checkFields()) {
    document.forms['login']._p_action.value = 'flogin';
    document.forms['login'].submit();
  }
}

function checkFields() {
  if (document.forms['login']._p_usr.value == '')  {
    alert('Enter your username.');
    document.forms['login']._p_usr.focus();
    return false;
  }
  if (document.forms['login']._p_psw.value == '') {
    alert('Enter your password.');
    document.forms['login']._p_psw.focus();
    return false;
  }
  if (document.forms['login']._p_sid.value == '') {
    alert('Select the database instance.');
    document.forms['login']._p_sid.focus();
    return false;
  }

  return true;
}
</script>
</html>















