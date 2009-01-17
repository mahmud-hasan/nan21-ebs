<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0035: Payments - Payables
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0029.js"></script>
  <script type="text/javascript" src="_static/locale/DC0029_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0008.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0012.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0012_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0027.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0027_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0001.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0001_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0025.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0025_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0009.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0009_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0029
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0029 = new N21.DataComp.DC0029({id:"DC0029", autoScroll:true });
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
        ,items: [DC0029]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-900}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0029.prototype.resourceBundle.DcProperty.Title||"Payments - Payables")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0035&gt;</div>"}
   ]
});
gui.findById("DC0029").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
