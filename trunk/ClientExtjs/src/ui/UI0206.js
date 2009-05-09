  var DC0040
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0040 = new N21.DataComp.DC0040({id:"DC0040", autoScroll:true });
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
        ,items: [DC0040]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-900}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0040.prototype.resourceBundle.DcProperty.Title||"Accounting documents")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0206&gt;</div>"}
   ]
});
gui.findById("DC0040").closeDetail();
gui.findById("DC0040").executeQuery();
  });
