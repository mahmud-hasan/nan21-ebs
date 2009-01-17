<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0059: Organizations hierarchy
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0082.js"></script>
  <script type="text/javascript" src="_static/locale/DC0082_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0008.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0008_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0048.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0048_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0050.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0050_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0049.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0049_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0082
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0082 = new N21.DataComp.DC0082({id:"DC0082", autoScroll:true });
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
        ,items: [DC0082]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-800}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0082.prototype.resourceBundle.DcProperty.Title||"Organizations hierarchy")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0059&gt;</div>"}
   ]
});
gui.findById("DC0082").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
