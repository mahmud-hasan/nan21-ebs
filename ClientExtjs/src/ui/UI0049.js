  var DC0069
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
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
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-850}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0069.prototype.resourceBundle.DcProperty.Title||"Contacts")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0049&gt;</div>"}
   ]
});
gui.findById("DC0069").close_detail();
gui.findById("DC0069").executeQuery();
  });
