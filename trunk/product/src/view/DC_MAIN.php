<?php
  require_once(PATH_CTRL_FRMWK.'/gui_lib.php');
  print print_page_header ();
?>
 <link rel="stylesheet" type="text/css" href="<?php print PATH_EXTJS;?>/resources/css/xtheme-sap.css" />
 <script>
Ext.BLANK_IMAGE_URL = '<?php print PATH_EXTJS;?>/s.gif';


   var logInWindow;
   var shtree,treeContextMenuNode, tree, createShrtctWdw, contentPane, mTlb, viewport;

Ext.onReady(function(){

  // Ext.state.Manager.setProvider(new Ext.state.CookieProvider());


  var loggedIn = <?php print (!isset($_SESSION["user"]))?"false":"true";?>;

  var dcName = "<?php print APPLICATION_ENTRY_UI;?>";
     // logInWindow
  //---------------------  SHORTCUTS MENU TREE ------------------------------------

  treeContextMenuNode = null;
  // shortcuts tree
  shtree =  new Ext.tree.TreePanel ({
     id:'shTree'
    ,border:false
    ,collapseFirst:false
    ,margins:'0 0 0 5'
    ,layout:'fit'
    ,autoScroll:true
    ,loader: new Ext.tree.TreeLoader({
                   dataUrl:'frmMain.php?_p_form='+dcName+'&_p_action=custom&_p_custom_action=loadMenu'
  		 })
    ,root: new Ext.tree.AsyncTreeNode({
                  text:'My shortcuts',
                  id:'root',
                  guiID:'',
                  expanded:true
               })
    });

   // when right-click shortcut menu show pop-up contextmenu
   shtree.on("contextmenu", function(node,e) {
     if(!this.contextMenu||this.contextMenu==undefined) {
	this.contextMenu = new Ext.menu.Menu({
                               	items: [
				    { id:'ctx-shmenu-open'    , scope:this, text:'Open',            handler:function() { tree.fireEvent('click',treeContextMenuNode,e);}}
				  , { id:'ctx-shmenu-openTab' , scope:this, text:'Open in New Tab', handler: function() {
                                                                                                               if (!treeContextMenuNode.attributes.guiID) { return false; }
                                                                                                               else {
                                                                                                                 var iframeId = treeContextMenuNode.attributes.guiID;
                                                                                                                 if (document.getElementById("iframe_"+iframeId)) {
                                                                                                                    if (contentPane.getActiveTab().getId() == 'tabPanel_'+iframeId) {
                                                                                                                      openInNewTab(treeContextMenuNode,iframeId);
                                                                                                                    } else {
                                                                                                                      contentPane.activate('tabPanel_'+iframeId);
                                                                                                                    }
                                                                                                                 } else {
                                                                                                                 contentPane.add(new Ext.Panel({
                                                                                                                      title:treeContextMenuNode.attributes.text
                                                                                                                     ,id: 'tabPanel_'+iframeId
                                                                                                                     ,autoScroll:true
                                                                                                                     ,layout:'fit'
                                                                                                                     ,closable:true
                                                                                                                     ,html:'<div style="width:100%;height:99%" id="div_'+iframeId+'"><iframe id="iframe_'+iframeId+'" src="" style="border:0;width:99%;height:99%"></iframe></div>'
                                                                                                                   }));
                                                                                                                   contentPane.activate('tabPanel_'+iframeId);
                                                                                                                   openInNewTab(treeContextMenuNode,iframeId);
                                                                                                                 }
                                                                                                               }
                                                                                                             }//end handler
                    		    }
                                  , new Ext.menu.Separator({id:'shmenu-sep-1'})
                                  , {id:'ctx-shmenu-newfolder', scope:this, text:'New folder',       handler:function() {createShrtctWdw.findById("ShrtctWdw_title_field").setValue(treeContextMenuNode.attributes.text);createShrtctWdw.show();} }
                                  , {id:'ctx-shmenu-remove'   , scope:this, text:'Remove shortcut' , handler:function() {createShrtctWdw.findById("ShrtctWdw_title_field").setValue(treeContextMenuNode.attributes.text);createShrtctWdw.show();} }
                                  , new Ext.menu.Separator({id:'shmenu-sep-2'})
                                  , {id:'ctx-shmenu-refresh', scope:this, text:'Refresh', handler:function() { shtree.getLoader().load(treeContextMenuNode);} }
                                  , {id:'ctx-shmenu-cancel' , scope:this, text:'Cancel'}
                                            			       ]
			        });  // end this.contextMenu
    }


    if(!this.contextMenu||this.contextMenu==undefined) {
      }else {
      var menu = this.contextMenu;
      if (!node.attributes.guiID) {
        this.contextMenu.items.get("ctx-shmenu-open").disable() ;
        this.contextMenu.items.get("ctx-shmenu-openTab").disable() ;
        this.contextMenu.items.get("ctx-shmenu-refresh").enable();
        this.contextMenu.items.get("ctx-shmenu-newfolder").enable();
      }  else {
        this.contextMenu.items.get("ctx-shmenu-open").enable() ;
        this.contextMenu.items.get("ctx-shmenu-openTab").enable() ;
        this.contextMenu.items.get("ctx-shmenu-refresh").disable();
        this.contextMenu.items.get("ctx-shmenu-newfolder").disable();
      }
      menu.showAt(menu.getEl().getAlignToXY(node.getUI().getEl(), 'tl-tl?', [30, 18]));
     treeContextMenuNode = node;
    }
  });  // end shtree.on("contextmenu"

  shtree.on("click", function(node, e) {
    if (node.attributes.guiID != undefined && node.attributes.guiID != '') {
       if(node.attributes.guiID.substr(0,3)=="REP") {
           document.getElementById("content_iframe").src = "runReport.php?_p_report_id="+node.attributes.guiID;
        } else {
           document.getElementById("content_iframe").src = "frmMain.php?action=loadGUI&guiID="+node.attributes.guiID;
        }
        contentPane.activate(0);
    }
  });  // end shtree.on("click"

  //----------------------------------  MAIN MENU TREE -------------------------------------------

  tree =  new Ext.tree.TreePanel ({
     id:'tree'
    ,border:false
    ,margins:'0 0 0 5'
    ,layout:'fit'
    ,autoScroll:true
    ,collapseFirst:false
    ,loader: new Ext.tree.TreeLoader({
                    dataUrl:'frmMain.php?_p_form='+dcName+'&_p_action=custom&_p_custom_action=loadMenu'
        	})
    ,root: new Ext.tree.AsyncTreeNode({
                   id:'root'
                  ,text:'Meniuri aplicatie'
                  ,guiID:''
                  ,expanded:true
                })
    });

    tree.on("contextmenu", function(node,e) {
 	if(!this.contextMenu||this.contextMenu==undefined) {
			this.contextMenu = new Ext.menu.Menu({
				items: [
					  {id:'ctx-menu-open',    scope:this, text:'Open', handler:function() { tree.fireEvent('click',treeContextMenuNode,e);} }

      					, {id:'ctx-menu-openTab', scope:this, text:'Open in New Tab'
                                                                    , handler: function() {
                                                                             if (!treeContextMenuNode.attributes.guiID) { return false; }
                                                                             else {
                                                                               var iframeId = treeContextMenuNode.attributes.guiID;
                                                                               if (document.getElementById("iframe_"+iframeId)) {
                                                                                  if (contentPane.getActiveTab().getId() == 'tabPanel_'+iframeId) {
                                                                                    openInNewTab(treeContextMenuNode,iframeId);
                                                                                  } else {
                                                                                    contentPane.activate('tabPanel_'+iframeId);
                                                                                  }
                                                                               } else {
                                                                               contentPane.add(new Ext.Panel({
                                                                                    title:treeContextMenuNode.attributes.text
                                                                                   ,id: 'tabPanel_'+iframeId
                                                                                   ,autoScroll:true
                                                                                   ,layout:'fit'
                                                                                   ,closable:true
                                                                                   ,html:'<div style="width:100%;height:100%;overflow: hidden;" id="div_'+iframeId+'"><iframe id="iframe_'+iframeId+'" src="" style="border:0;width:100%;height:100%;overflow: hidden" FRAMEBORDER="no"></iframe></div>'
                                                                                 }));
                                                                                 contentPane.activate('tabPanel_'+iframeId);
                                                                                 openInNewTab(treeContextMenuNode,iframeId);
                                                                               }
                                                                             }
                                                                            }
      					  }
      					, new Ext.menu.Separator({id:'sep-1'})
                                        , {id:'ctx-menu-bookmark', scope:this, text:'Add to Shortcuts', handler:function() {createShrtctWdw.findById("ShrtctWdw_title_field").setValue(treeContextMenuNode.attributes.text);createShrtctWdw.show();} }
      					, new Ext.menu.Separator({id:'sep-2'})
                                        , {id:'ctx-menu-refresh', scope:this, text:'Refresh', handler:function() { tree.getLoader().load(treeContextMenuNode);}}
                                        , {id:'ctx-menu-cancel' , scope:this, text:'Cancel', handler:function() {} }
          			     ]
			   }); // end this.contextMenu
      } // end if

    if(!this.contextMenu||this.contextMenu==undefined) {
      }else {
      var menu = this.contextMenu;
      if (!node.attributes.guiID) {
        this.contextMenu.items.get("ctx-menu-open").disable();
        this.contextMenu.items.get("ctx-menu-openTab").disable();
        this.contextMenu.items.get("ctx-menu-bookmark").disable();
        this.contextMenu.items.get("ctx-menu-refresh").enable();
      }  else {
        this.contextMenu.items.get("ctx-menu-open").enable() ;
        this.contextMenu.items.get("ctx-menu-openTab").enable() ;
        this.contextMenu.items.get("ctx-menu-bookmark").enable() ;
        this.contextMenu.items.get("ctx-menu-refresh").disable();
      }
      menu.showAt(menu.getEl().getAlignToXY(node.getUI().getEl(), 'tl-tl?', [30, 18]));
      treeContextMenuNode = node;
    }
  }); // end tree.on("contextmenu"


  tree.on("click", function(node, e) {
    if (node.attributes.guiID != undefined && node.attributes.guiID != '') {
       if(node.attributes.guiID.substr(0,3)=="REP") {
           document.getElementById("content_iframe").src = "runReport.php?_p_report_id="+node.attributes.guiID;
        } else {
           document.getElementById("content_iframe").src = "frmMain.php?action=loadGUI&guiID="+node.attributes.guiID;
        }
        contentPane.activate(0);
    }
  }); // end tree.on("click"


  createShrtctWdw = new Ext.Window({
      title:'Create shortcut'
     ,width:300
     ,height:150
     ,modal:true
     ,closeAction:'hide'
     ,left:50
     ,layout:'form'
    , labelAlign: 'top'
    ,buttonAlign:'left'
    ,items:[
       { xtype:'textfield', fieldLabel:'Title', width:"90%", id:'ShrtctWdw_title_field'}
      ]
    ,buttons:[
      { cls:"x-btn-text-icon",text:"Save",  icon:"_static/icon/g_rec_commit.png" }
     ,{ cls:"x-btn-text-icon",text:'Cancel',icon:"_static/icon/lov_cancel.gif",scope:this, handler:function() {createShrtctWdw.hide();}}
    ]
  });


  contentPane =  new Ext.TabPanel({
     region:'center'
    ,deferredRender:false
    ,activeTab:0
    ,items:[
        {contentEl:'content', title: 'Home', autoScroll:true, layout:'fit'}
      ]
  });
                


  mTlb = new Ext.Toolbar();
  mTlb.render('north');
  mTlb.add(
    new Ext.Toolbar.MenuButton({
       text:'Session'
       ,menu: {
          items: [
              {id:"menu-login", text:'Log-in' ,handler: function() { logInWindow.show(); } , scope:this, disabled:loggedIn}
             ,{id:"menu-logout", text:'Log-out',handler: function() { doLogout(); } , scope:this, disabled:!loggedIn}
             ,{id:"menu-lock", text:'Lock'   ,handler: function() { doLockSession(); } , scope:this, disabled:!loggedIn}
          ]
        }
     })
   ,new Ext.Toolbar.MenuButton({
       text:'Language'
       ,menu: {
          items: [
              { text:'English',handler: function() { changeLanguage('en'); } , scope:this}
             ,{ text:'Romana', handler: function() { changeLanguage('ro'); } , scope:this}
          ]
        }
     })

  );  // end mTlb.add





  viewport = new Ext.Viewport({
    layout:'border',
    items:[
        { region:"north", height:26, items:[mTlb] }
       , new Ext.Panel({
             layout:'accordion'
            ,region:'west'
            ,split:true
            ,width: 220
            ,title:'Navigare'
            ,minSize: 175
            ,maxSize: 300
            ,collapsible: true
            ,items:[
                {title: 'Standard menu', layout:'fit', border:false, items:[ tree ] }
               ,{title: 'My Shortcuts' , border:false, items:[ shtree ] }
               ]
           })
       , contentPane
       ,{region: "south",border: false,height:0}
       ,{region: "east" ,border: false,width:0}
     ]
  }); // end viewport

  logInWindow = new Ext.Window({
     title:'System Logon'
    ,width:300
    ,height:120
    ,layout:"form"
    ,closable:false
    ,closeAction:'hide'
    ,modal:true
    ,items:[
      { xtype: "textfield", id:"login_username" , allow_blank:false,value:'<?php print $_SESSION["user"]["userName"]?>', fieldLabel: "Username",width:150}
     ,{ xtype: "textfield", id:"login_password" , allow_blank:false,value:'', fieldLabel: "Password",width:150}
     //!!!!disable mouse right click and ctrl Z on password field to avoid undo to see the password from the previous login/unlock
    ]
    ,buttons:[
      { xtype: "button", id:"login_connect_btn" ,scope:this, text:"Connect" ,  handler:function() {
        onLogin(logInWindow.findById("login_username").getValue(),logInWindow.findById("login_password").getValue());}}
    ]
  }); // end logInWindow


   if (!loggedIn) {
       logInWindow.show();
       Ext.getCmp("login_username").focus();
   }

   function doLockSession() {
      Ext.Ajax.request({
       url: "frmMain.php?_p_form="+dcName+"&_p_action=custom&_p_custom_action=lockSession"
      ,scope:this
      ,callback: function(o,s,r) {
          var respText = Ext.decode(r.responseText);
          if (respText.success && respText.message == "OK") { 
            //Ext.getCmp("menu-login").enable();
            //Ext.getCmp("menu-logout").disable();
            Ext.getCmp("login_username").disable();
            logInWindow.show();
           }
          else {
             if (!Ext.isEmpty(respText.message)) { 
               Ext.Msg.alert('Error', urldecode(respText.message) );
             } else {
               Ext.Msg.alert('Error', 'Cannot lock session. Connection to server lost.' );
             }
          }
      }
    });
   
   }
   function doLogout() {

      Ext.Ajax.request({
       url: "frmMain.php?_p_form="+dcName+"&_p_action=custom&_p_custom_action=logout"
      ,scope:this
      ,callback: function(o,s,r) {
          var respText = Ext.decode(r.responseText);
          if (respText.success && respText.message == "OK") { contentPane.destroy();window.location.href='index.php'; }
          else {
             if (!Ext.isEmpty(respText.message)) { 
               Ext.Msg.alert('Error', urldecode(respText.message) );
             } else {
               Ext.Msg.alert('Error', 'Cannot logout. Connection to server lost' );
             }
          }
      }
    });
   }



  /**
   *  Change the current language
   */
  function changeLanguage(p_lang) {
    Ext.Ajax.request({
       url: "frmMain.php?_p_form="+dcName+"&_p_action=custom&_p_custom_action=changeLanguage&_p_lang="+p_lang
      ,scope:this
      ,callback: function(o,s,r) {
          var respText = Ext.decode(r.responseText);
          if (respText.success && respText.message == "OK") { tree.getLoader().load(tree.getRootNode(),function(l,n,r){n.expand();}); Ext.Msg.alert('Info', 'Panels already opened must be reloaded to display content in the selected language' );  }
          if (!respText.success) { Ext.Msg.alert('Error', urldecode(respText.message) ); }
      }
    });

  }

  /**
   *  Open a menu-link in a new tab (not Home tab). 
   */
  function openInNewTab(node,ifrid) {
    if (node.attributes.guiID != undefined && node.attributes.guiID != '') {
      if(node.attributes.guiID.substr(0,3)=="REP") {
        document.getElementById("iframe_"+ifrid).src = "runReport.php?_p_report_id="+node.attributes.guiID;
      } else {
        document.getElementById("iframe_"+ifrid).src = "frmMain.php?action=loadGUI&guiID="+node.attributes.guiID;
      }
    }
  }




  /**
   *  Logon event processing.
   */
  function onLogin(p_usr, p_psw) {
    Ext.Ajax.request({
       url: "frmMain.php?_p_action=login&_p_usr="+p_usr+"&_p_psw="+p_psw
      ,callback: after_onlogin
      ,scope:this
    });
  }

  /**
   *  Post logon processing. If authentication succesful hide the logon window and load the main menu.
   */
  function after_onlogin(o,s,r) {
    var respText = Ext.decode(r.responseText);
    if (respText.success && respText.message == "OK") { logInWindow.hide(); loggedIn=true; tree.getLoader().load(tree.getRootNode(),function(l,n,r){n.expand();});   }
    if (!respText.success) { Ext.Msg.alert('Autenthication error', urldecode(respText.message) ); }
    Ext.getCmp("login_password").setRawValue("");
  }

  /**
   *  Decode a string which has been urlencoded
   */
  function urldecode ( str ) {
    var ret = str;
    ret = ret.replace(/\+/g, "%20");
    ret = decodeURIComponent(ret);
    ret = ret.toString();
    return ret;
  }


});





 function call_gui(p_gui) {    alert(1);
    var iframeId = p_gui;
    if (document.getElementById("iframe_"+iframeId)) {
      document.getElementById("iframe_"+iframeId).src = "frmMain.php?action=loadGUI&guiID="+p_gui;
      contentPane.activate('tabPanel_'+iframeId);
   } else {
     contentPane.add(new Ext.Panel({
        title:p_gui
       ,id: 'tabPanel_'+iframeId
       ,autoScroll:true
       ,layout:'fit'
       ,closable:true
       ,html:'<div style="width:100%;height:100%;overflow: hidden;" id="div_'+iframeId+'"><iframe id="iframe_'+iframeId+'" src="" style="border:0;width:100%;height:100%;overflow: hidden" FRAMEBORDER="no"></iframe></div>'
     }));
     contentPane.activate('tabPanel_'+iframeId);
     document.getElementById("iframe_"+iframeId).src = "frmMain.php?action=loadGUI&guiID="+p_gui;
   }
  
  }

</script>
</head>
<body>
    <div id="west"></div>
    <div id="north" style="height:32">
    </div>
    <div id="south" style="margin:0;padding:0;"></div>
    <div style="width:100%;height:100%;overflow: hidden;" id="content">
      <iframe id="content_iframe" src="" style="border:0;width:100%;height:100%;overflow-y: hidden;margin:0;padding:0;" FRAMEBORDER="no"></iframe>
    </div>
 </body>
</html>