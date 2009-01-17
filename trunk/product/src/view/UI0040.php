<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0040: Business Partners
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0014.js"></script>
  <script type="text/javascript" src="_static/locale/DC0014_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0008.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0015.js"></script>
  <script type="text/javascript" src="_static/locale/DC0015_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0006.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0006_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0007.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0007_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0057.js"></script>
  <script type="text/javascript" src="_static/locale/DC0057_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0056.js"></script>
  <script type="text/javascript" src="_static/locale/DC0056_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0008.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0043.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0043_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0018.js"></script>
  <script type="text/javascript" src="_static/locale/DC0018_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0005.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0005_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0001.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0001_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0058.js"></script>
  <script type="text/javascript" src="_static/locale/DC0058_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0038.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0038_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0014
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0014 = new N21.DataComp.DC0014({id:"DC0014", autoScroll:true });
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
        ,items: [DC0014]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-800}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0014.prototype.resourceBundle.DcProperty.Title||"Business Partners")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0040&gt;</div>"}
   ]
});
gui.findById("DC0014").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
