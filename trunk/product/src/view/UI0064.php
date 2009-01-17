<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0064: Stock location types
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0087.js"></script>
  <script type="text/javascript" src="_static/locale/DC0087_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0087
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0087 = new N21.DataComp.DC0087({id:"DC0087", autoScroll:true });
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
        ,items: [DC0087]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-300}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-400}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0087.prototype.resourceBundle.DcProperty.Title||"Stock location types")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0064&gt;</div>"}
   ]
});
gui.findById("DC0087").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
