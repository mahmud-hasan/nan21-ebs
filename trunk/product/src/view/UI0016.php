<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0016: Menu items
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0022.js"></script>
  <script type="text/javascript" src="_static/locale/DC0022_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0021.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0021_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0020.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0020_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0022.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0022_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0043.js"></script>
  <script type="text/javascript" src="_static/locale/DC0043_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0044.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0044_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/DC0070.js"></script>
  <script type="text/javascript" src="_static/locale/DC0070_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0045.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0045_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0022
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0022 = new N21.DataComp.DC0022({id:"DC0022", autoScroll:true });
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
        ,items: [DC0022]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:1}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:1}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0022.prototype.resourceBundle.DcProperty.Title||"Menu items")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0016&gt;</div>"}
   ]
});
gui.findById("DC0022").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
