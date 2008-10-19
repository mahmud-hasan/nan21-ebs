<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0156: Project issues
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0046.js"></script>
  <script type="text/javascript" src="_static/locale/DC0046_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0030.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0030_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0032.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0032_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0037.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0037_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0031.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0031_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0034.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0034_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0035.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0035_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0033.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0033_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0055.js"></script>
  <script type="text/javascript" src="_static/locale/DC0055_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0037.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0037_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0048.js"></script>
  <script type="text/javascript" src="_static/locale/DC0048_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0046
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0046 = new N21.DataComp.DC0046({id:"DC0046", autoScroll:true });
  var gui = new Ext.Viewport({
     layout:"border"
    ,style:bodyStyle
    ,items:[
      new Ext.Panel({
         id: "mainPanel"
        ,region:"center"
        ,layout:"fit"
        ,border: false
        ,split: true
        ,bodyStyle:bodyStyle
        ,items: [DC0046]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:1}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:1}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0046.prototype.resourceBundle.DcProperty.Title||"Project issues")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0156&gt;</div>"}
   ]
});
gui.findById("DC0046").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
