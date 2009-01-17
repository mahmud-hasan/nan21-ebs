<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0054: Price lists
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0076.js"></script>
  <script type="text/javascript" src="_static/locale/DC0076_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0008.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0001.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0001_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0090.js"></script>
  <script type="text/javascript" src="_static/locale/DC0090_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0017.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0017_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0057.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0057_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0076
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0076 = new N21.DataComp.DC0076({id:"DC0076", autoScroll:true });
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
        ,items: [DC0076]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-400}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-600}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0076.prototype.resourceBundle.DcProperty.Title||"Price lists")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0054&gt;</div>"}
   ]
});
gui.findById("DC0076").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
