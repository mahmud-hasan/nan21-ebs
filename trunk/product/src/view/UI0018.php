<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0018: Field default values
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0030.js"></script>
  <script type="text/javascript" src="_static/locale/DC0030_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0028.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0028_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0029.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0029_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0030
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0030 = new N21.DataComp.DC0030({id:"DC0030", autoScroll:true });
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
        ,items: [DC0030]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:1}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:1}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0030.prototype.resourceBundle.DcProperty.Title||"Field default values")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0018&gt;</div>"}
   ]
});
gui.findById("DC0030").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
