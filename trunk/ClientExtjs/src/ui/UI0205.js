  var DC0035
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0035 = new N21.DataComp.DC0035({id:"DC0035", autoScroll:true });
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
        ,items: [DC0035]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:1}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:1}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0035.prototype.resourceBundle.DcProperty.Title||"Contracts")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0205&gt;</div>"}
   ]
});
gui.findById("DC0035").closeDetail();
gui.findById("DC0035").executeQuery();
  });
