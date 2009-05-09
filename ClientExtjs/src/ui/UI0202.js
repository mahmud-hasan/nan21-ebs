  var DC0032
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0032 = new N21.DataComp.DC0032({id:"DC0032", autoScroll:true });
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
        ,items: [DC0032]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-900}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0032.prototype.resourceBundle.DcProperty.Title||"Accounts chart")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0202&gt;</div>"}
   ]
});
gui.findById("DC0032").closeDetail();
gui.findById("DC0032").executeQuery();
  });
