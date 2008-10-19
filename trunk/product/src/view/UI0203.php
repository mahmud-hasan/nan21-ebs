<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0203: Define acc. schema attributes
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0033.js"></script>
  <script type="text/javascript" src="_static/locale/DC0033_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0033
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0033 = new N21.DataComp.DC0033({id:"DC0033", autoScroll:true });
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
        ,items: [DC0033]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-100}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-100}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0033.prototype.resourceBundle.DcProperty.Title||"Define acc. schema attributes")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0203&gt;</div>"}
   ]
});
gui.findById("DC0033").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
