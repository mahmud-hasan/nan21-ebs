<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0004: Regions
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0008.js"></script>
  <script type="text/javascript" src="_static/locale/DC0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0006.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0006_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0009.js"></script>
  <script type="text/javascript" src="_static/locale/DC0009_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0006.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0006_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0007.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0007_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0008
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0008 = new N21.DataComp.DC0008({id:"DC0008", autoScroll:true });
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
        ,items: [DC0008]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-450}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-600}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0008.prototype.resourceBundle.DcProperty.Title||"Regions")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0004&gt;</div>"}
   ]
});
gui.findById("DC0008").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
