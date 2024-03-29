
Ext.ns("N21.Other");
N21.Other.MenuTree = Ext.extend(Ext.tree.TreePanel , {

   backendServerUrl: null


  ,initComponent:function() {

    Ext.apply(this, {
       border:false
      ,margins:'0 0 0 5'
      ,layout:'fit'
      ,autoScroll:true
      ,collapseFirst:false
      ,loader: new Ext.tree.TreeLoader({
          dataUrl:buildBaseUrlAction("DC_MAIN", "loadMenu")
   	    })
      ,root: new Ext.tree.AsyncTreeNode({
           id:'root'
          ,text:'Meniuri aplicatie'
          ,guiID:''
          ,expanded:true
        })
    });
    N21.Other.MenuTree.superclass.initComponent.apply(this, arguments);
    this.addEvents('openMenuLink','openMenuLinkInNewTab');
  }

  ,initEvents: function() {
    N21.Other.MenuTree.superclass.initEvents.call(this);
    this.on("contextmenu", this.onContextmenu, this );
    this.on("click", this.onMenuClick, this );

  }


  , onContextmenu: function(node,e) {
      var  treeContextMenuNode = node;
       	if(!this.contextMenu||this.contextMenu==undefined) {
      			this.contextMenu = new Ext.menu.Menu({
      				items: [
      					        {id:'ctx-menu-open',    scope:this, text:'Open', handler:function() { this.fireEvent('click',treeContextMenuNode,e);} }
            					, {id:'ctx-menu-openTab', scope:this, text:'Open in New Tab' , handler: function() { if (!treeContextMenuNode.attributes.guiID) { return false; } else { this.fireEvent("openMenuLinkInNewTab", node.attributes.guiID, node.attributes.text , null );  }  }   }
            					, new Ext.menu.Separator({id:'sep-1'})
                      , {id:'ctx-menu-bookmark', scope:this, text:'Add to Shortcuts', handler:function() {createShrtctWdw.findById("ShrtctWdw_title_field").setValue(treeContextMenuNode.attributes.text);createShrtctWdw.show();} }
            					, new Ext.menu.Separator({id:'sep-2'})
                      , {id:'ctx-menu-refresh', scope:this, text:'Refresh', handler:function() { this.getLoader().load(treeContextMenuNode);}}
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
    }  // end onContextmenu


  ,onMenuClick: function(node, e) {
    if (node.attributes.guiID != undefined && node.attributes.guiID != '') {
       var params = new Object();
       this.fireEvent("openMenuLink", node.attributes.guiID, node.attributes.text , params );
    }
  }  // end tree.on("click"


});