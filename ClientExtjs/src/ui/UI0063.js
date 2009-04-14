  var DC0086
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0086 = new N21.DataComp.DC0086({id:"DC0086", autoScroll:true });
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
        ,items: [DC0086]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-300}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-500}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0086.prototype.resourceBundle.DcProperty.Title||"Org inventory types")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0063&gt;</div>"}
   ]
});
gui.findById("DC0086").executeQuery();
  });
