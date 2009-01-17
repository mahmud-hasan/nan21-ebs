<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0051: Define prod. attribute groups
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0073.js"></script>
  <script type="text/javascript" src="_static/locale/DC0073_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0046.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0046_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0074.js"></script>
  <script type="text/javascript" src="_static/locale/DC0074_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0046.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0046_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0073
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0073 = new N21.DataComp.DC0073({id:"DC0073", autoScroll:true });
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
        ,items: [DC0073]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-400}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-600}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0073.prototype.resourceBundle.DcProperty.Title||"Define prod. attribute groups")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0051&gt;</div>"}
   ]
});
gui.findById("DC0073").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
