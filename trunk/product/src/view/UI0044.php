<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0044: Purchase order
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0063.js"></script>
  <script type="text/javascript" src="_static/locale/DC0063_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0042.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0042_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0008.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0001.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0001_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0064.js"></script>
  <script type="text/javascript" src="_static/locale/DC0064_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0002.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0002_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0017.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0017_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0001.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0001_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0063
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0063 = new N21.DataComp.DC0063({id:"DC0063", autoScroll:true });
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
        ,items: [DC0063]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-850}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0063.prototype.resourceBundle.DcProperty.Title||"Purchase order")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0044&gt;</div>"}
   ]
});
gui.findById("DC0063").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
