<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0055: Product attributes
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0077.js"></script>
  <script type="text/javascript" src="_static/locale/DC0077_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0017.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0017_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0077
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0077 = new N21.DataComp.DC0077({id:"DC0077", autoScroll:true });
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
        ,items: [DC0077]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-500}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-600}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0077.prototype.resourceBundle.DcProperty.Title||"Product attributes")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0055&gt;</div>"}
   ]
});
gui.findById("DC0077").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
