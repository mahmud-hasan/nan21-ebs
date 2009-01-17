<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0003: Countries
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0007.js"></script>
  <script type="text/javascript" src="_static/locale/DC0007_<?php print $_SESSION["user"]["language"];?>.js"></script>
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
  var DC0007
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0007 = new N21.DataComp.DC0007({id:"DC0007", autoScroll:true });
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
        ,items: [DC0007]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-450}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-500}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0007.prototype.resourceBundle.DcProperty.Title||"Countries")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0003&gt;</div>"}
   ]
});
gui.findById("DC0007").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
