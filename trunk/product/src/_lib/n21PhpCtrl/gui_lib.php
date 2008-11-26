<?php

  define( "UI_FIELD_STYLE_MANDATORY","background:#ffffaa;");
  define( "UI_FIELD_STYLE_HIGHLIGHT","background:#ffff66;");
 

  function print_page_header() {}

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Nan21 eBusiness Suite</title>

<!-- EXT
<link rel="stylesheet" type="text/css" href="<?php print PATH_EXTJS;?>/resources/css/ext-all.css" />

-->
 <link rel="stylesheet" type="text/css" href="<?php print PATH_EXTJS;?>/resources/css/ext-all.css" />
 <?php $br = strtolower($_SERVER['HTTP_USER_AGENT']);
    if(ereg("msie", $br)) {
      $css="-ie";
    } else {
      $css="";
    }

 ?>
 <link rel="stylesheet" type="text/css" href="<?php print PATH_EXTJS?>/resources/css/xtheme-nbs<?php print $css;?>.css" />
 <!--  include in Ext.js DATE_FORMAT : "d.m.Y",  -->
<script type="text/javascript" src="<?php print PATH_EXTJS;?>/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="<?php print PATH_EXTJS;?>/ext-all.js"></script>
<script type="text/javascript" src="<?php print PATH_EXTJS;?>/build/locale/ext-lang-<?php print $_SESSION["user"]["language"]?>.js"></script>


<!-- EXT custom -->

<script type="text/javascript" src="<?php print PATH_JSLIB;?>/N21.Base.GridEdit.js"></script>
<script type="text/javascript" src="<?php print PATH_JSLIB;?>/N21.Base.GridView.js"></script>
<script type="text/javascript" src="<?php print PATH_JSLIB;?>/N21.Base.Combo.js"></script>
<script type="text/javascript" src="<?php print PATH_JSLIB;?>/N21.Base.Lov.js"></script>
<script type="text/javascript" src="<?php print PATH_JSLIB;?>/N21.Base.EditForm.js"></script>
<script type="text/javascript" src="<?php print PATH_JSLIB;?>/N21.Base.GridEditForm.js"></script>
<script type="text/javascript" src="<?php print PATH_JSLIB;?>/lib.js"></script>

<script type="text/javascript" src="<?php print PATH_EXTJS?>/custom/Ext.ux.form.XCheckbox.js"></script>
<script type="text/javascript" src="<?php print PATH_EXTJS?>/custom/Ext.ux.grid.GridSummary.js"></script>






