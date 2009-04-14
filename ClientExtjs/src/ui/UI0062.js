  var DC0085
  Ext.onReady(function(){
  if (!Ext.isEmpty(Ext.get("n21-loading"))) {
    Ext.get("n21-loading").remove();
  }
    Ext.BLANK_IMAGE_URL = CFG_PATH_EXTJS+"/s.gif";
    Ext.QuickTips.init();
  var  bodyStyle = "background:#efeff3;";
  DC0085 = new N21.DataComp.DC0085({id:"DC0085", autoScroll:true });
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
        ,items: [DC0085]
       })
    ,{ region: "south",border: false, minHeight:1,bodyStyle:bodyStyle,split: true,height:getWindowInnerHeight()-600}
    ,{ region: "east" ,border: false, minWidth:1, bodyStyle:bodyStyle,split: true,width:getWindowInnerWidth()-800}
    ,{ region: "north",border: false, html:"<div class='gui_title'>"+(N21.DataComp.DC0085.prototype.resourceBundle.DcProperty.Title||"Organization inventory")+" &nbsp;&nbsp;&nbsp;<font size=-2>&lt;UI0062&gt;</div>"}
   ]
});
gui.findById("DC0085").close_detail();
gui.findById("DC0085").executeQuery();
  });
