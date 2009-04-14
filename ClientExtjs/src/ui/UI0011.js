  var DC0012
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0012 = new N21.DataComp.DC0012({id:"DC0012", autoScroll:true });
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
        ,items: [DC0012]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-400}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-700}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0012.prototype.resourceBundle.DcProperty.Title||"Currency exchange rates")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0011&gt;</div>"}
   ]
});
gui.findById("DC0012").executeQuery();
  });
