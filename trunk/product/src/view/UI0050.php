<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0050: Tasks
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0019.js"></script>
  <script type="text/javascript" src="_static/locale/DC0019_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0019
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0019 = new N21.DataComp.DC0019({id:"DC0019", autoScroll:true });
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
        ,items: [DC0019]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-850}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0019.prototype.resourceBundle.DcProperty.Title||"Tasks")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0050&gt;</div>"}
   ]
});
gui.findById("DC0019").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
