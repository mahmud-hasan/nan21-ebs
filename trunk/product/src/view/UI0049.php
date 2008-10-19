<?php
/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * UI0049: Contacts
 */
  require_once(PATH_CTRL_FRMWK."/gui_lib.php");
  print print_page_header();
?>
  <script type="text/javascript" src="_static/js/dc/DC0069.js"></script>
  <script type="text/javascript" src="_static/locale/DC0069_<?php print $_SESSION["user"]["language"];?>.js"></script>
  <script type="text/javascript" src="_static/js/dc/LOV0009.js"></script>
  <script type="text/javascript" src="_static/locale/LOV0009_<?php print $_SESSION["user"]["language"];?>.js"></script>

</head>
<body  style="margin:0;padding:0;" >
<script><!--
  var DC0069
  Ext.onReady(function(){
    Ext.BLANK_IMAGE_URL = "<?php print PATH_EXTJS;?>/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0069 = new N21.DataComp.DC0069({id:"DC0069", autoScroll:true });
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
        ,items: [DC0069]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:1}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:1}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0069.prototype.resourceBundle.DcProperty.Title||"Contacts")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0049&gt;</div>"}
   ]
});
gui.findById("DC0069").executeQuery();
  });
--></script>
  <div id="north"></div>
</body>
</html>
