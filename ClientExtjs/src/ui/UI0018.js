  var DC0030
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
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
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-850}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0030.prototype.resourceBundle.DcProperty.Title||"Field default values")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0018&gt;</div>"}
   ]
});
gui.findById("DC0030").closeDetail();
gui.findById("DC0030").executeQuery();
  });
