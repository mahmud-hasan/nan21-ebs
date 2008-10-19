
Ext.ns('N21.Base');


N21.Base.GridView = Ext.extend(Ext.grid.GridPanel, {
   dataRecordMeta: null
  ,DATE_FORMAT: 'd.m.Y'
  ,queryFields: new Array()
  ,queryWindow:null
  ,toolbarConfig: null
  ,hasQuickFilter:false
  ,initComponent:function() {

     Ext.apply(this, arguments);
    /*
     var stdTlb = new Array(
                {id:"tlb_btn_rec_qry",xtype: "button",cls:"x-btn-text-icon",text:"Filter", icon:"_static/icon/g_rec_src.gif", tooltip:"Filter &lt;Ctrl+F&gt;",handler: this.enter_query,scope :this }
               ,{id:"tlb_btn_rec_new",xtype: "button",cls:"x-btn-text-icon",text:"New", icon:"_static/icon/g_rec_new.gif", tooltip:"Create new &lt;Ctrl+N&gt;",handler: this.createNewRecord,scope :this }
               ,{id:"tlb_btn_rec_del",xtype: "button",cls:"x-btn-text-icon",text:"Delete", icon:"_static/icon/g_rec_del.gif", tooltip:"Delete &lt;Ctrl+D&gt;",handler: this.deleteRecord,scope :this }
               ,{id:"tlb_btn_rec_prt",xtype: "button",cls:"x-btn-text-icon",text:"Print", icon:"_static/icon/print.png", tooltip:"Print",handler: this.export_data,scope :this }
            );

     if (Ext.isArray(this.toolbarConfig)) {
       this.tbar = new Array();
       var j=0;
       for (var i=0; i<this.toolbarConfig.length; i++ ) {
         if (this.toolbarConfig[i] == 'FILTER') {
           this.tbar[j] = stdTlb[0];
           j++;
         }
         if (this.toolbarConfig[i] == 'NEW') {
           this.tbar[j] = stdTlb[1];
           j++;
         }
         if (this.toolbarConfig[i] == 'DELETE') {
           this.tbar[j] = stdTlb[2];
           j++;
         }
         if (this.toolbarConfig[i] == 'PRINT') {
           this.tbar[j] = stdTlb[3];
           j++;
         }
       }

     } else {
        if (this.toolbarConfig == 'STANDARD') {
          this.tbar = stdTlb;
       }
     }

     */
     if (this.queryArraySize != null && this.queryArraySize != -1) {
       this.bbar = new Ext.PagingToolbar({
           store:this.store
          ,displayInfo:true
          ,pageSize:20
          });
     }
    // alert(this.hasQuickFilter);
     if (this.hasQuickFilter=='x') {

       this.tbar = new Ext.Panel({
             frame:true
           ,layout:"column"
           ,layoutConfig:{labelAlign:"right"}
           ,defaults:{labelAlign:"right"}
           ,collapsible: true
           ,animCollapse: false
           ,border:false
           ,items:[
              {columnWidth:.3,layout:"form" }
             ,{columnWidth:.3,layout:"form",bodyBorder:false,border:false,items:[this.queryFields[4],this.queryFields[8]]}
             ,{columnWidth:.3,layout:"form",bodyBorder:false,border:false,items:[this.queryFields[5]]}
           ]
         });





     }



     this.queryWindow = new Ext.Window({
          closable: true
         ,closeAction : 'hide'
         ,title:'Set Filter'
         ,width:500
         ,height:300
         ,modal:true
         ,x:100
         ,y:50
         ,autoScroll:true
         ,constrain :true
         ,layout:'form'
         ,bodyStyle:'padding:10px 10px 10px 10px;'
         ,items:this.queryFields
         ,buttons: [{text:'Apply',handler:this.executeQuery,scope:this },{text:'Reset',handler:this.reset_query,scope:this }]
         ,buttonAlign:'left'
       });

     N21.Base.GridView.superclass.initComponent.apply(this, arguments);
     this.addEvents('executeQuerySuccess');
     this.addEvents('createNewRecord');
   }

  ,initEvents: function() {
    N21.Base.GridView.superclass.initEvents.call(this);
    this.getStore().proxy.on('loadexception', this.onLoadException, this);
    this.getStore().proxy.on('load', this.onLoadProxy, this);
    this.getStore().on('load', this.onLoadStore, this);
    var keyMap = new Ext.KeyMap( this.body, [
        { key: Ext.EventObject.PAGE_DOWN , fn: function() { if (this.getBottomToolbar().getPageData().activePage < this.getBottomToolbar().getPageData().pages) { this.getBottomToolbar().changePage(  this.getBottomToolbar().getPageData().activePage+1);}},  ctrl:false, scope:this }
       ,{ key: Ext.EventObject.PAGE_UP , fn: function()   { if (this.getBottomToolbar().getPageData().activePage > 1 )                                          { this.getBottomToolbar().changePage(  this.getBottomToolbar().getPageData().activePage-1);}},  ctrl:false, scope:this }
    ]);
    keyMap.stopEvent = true;
  }


  ,onLoadProxy:function(proxy, obj, arg, result) {
    if (this.getStore().reader instanceof Ext.data.JsonReader ) { 
      for (var i=0;i<result.records.length ; i++ )  {
        for (v in result.records[i].data) {
          if (Ext.type(result.records[i].get(v)) == 'string')
            result.records[i].set(v, this.urldecode(result.records[i].get(v) )) ;
        }
        result.records[i].commit();
      }
    }
  }
  ,onLoadStore:function() {
     this.getSelectionModel().selectFirstRow();
     this.getView().focusRow(0);
  }

  ,onLoadException:function(proxy,options,response,error) {
      if (!response.responseText)
        Ext.Msg.alert('Error', 'Network failure. Communication with server lost.');
      else
        Ext.Msg.alert('Error', this.urldecode(Ext.decode(response.responseText).message));
  }


  ,createNewRecord: function() {
    this.fireEvent('createNewRecord');
  }
  

  ,enter_query:function() {
      if (this.queryWindow != null) {
        this.queryWindow.show();
      }
  }

  ,reset_query: function() {
       for(var i=0;i<this.queryFields.length;i++) {
         this.queryWindow.findById(this.queryFields[i].id).setValue(null);
       }
     }

  ,cancel_query: function() {
       this.queryWindow.hide();
     }

  ,execute_query: function() {
      this.executeQuery();
  }

  ,executeQuery: function() {
       // set the query params
       p = new Object(); //{start:0,limit:20}
       for(var i=0;i<this.queryFields.length;i++) {
          p[this.queryFields[i].name] = this.queryWindow.findById(this.queryFields[i].id).getValue();
       }

       this.store.baseParams = p;
       this.store.load({callback:this.afterExecuteQuery,scope:this});
       if (this.queryWindow != null ) {
         if (this.queryWindow.isVisible() )
            this.queryWindow.hide();
       }

     }

  ,afterExecuteQuery: function(r,options,success) {    
    if (success) {
       if (this.store.getCount()>0) {
         this.getSelectionModel().selectFirstRow();
         this.getView().focusRow(0);
         this.fireEvent("executeQuerySuccess", this,this.store.getCount(), this.getSelectionModel().getSelected() );
       }
       else {
          this.fireEvent("executeQuerySuccess", this,this.store.getCount(), null );
       }
     }
  }
   ,urldecode: function ( str ) {
    var ret = str;
    ret = str.replace(/\+/g, "%20");
    ret = decodeURIComponent(ret);
    ret = ret.toString();
    return ret;
  }
 
  ,clear_records:function() {
     this.getStore().removeAll();
   }

  ,setQueryFieldValue:function(fieldName, fieldValue) {
     this.queryWindow.findById(this.dataComponentName+"_QRY_"+fieldName).setValue(fieldValue);
   }

  ,export_data:function() {
     var qs = '';
     for(var i=0; i<this.queryFields.length; i++) {
        if (this.queryWindow.findById(this.queryFields[i].id).getValue() != undefined)
         qs = qs + '&'+this.queryFields[i].name  + '=' + this.queryWindow.findById(this.queryFields[i].id).getValue();
     }
     var cs = '&_p_disp_cols=';
     for(var i=0; i<this.getColumnModel().getColumnCount(); i++) {
       if(! this.getColumnModel().isHidden(i) ) {
          cs = cs + '' +  this.getColumnModel().getDataIndex(i) + '|';
       }
     }
     var ss = ''; //sorting and grouping
     if (this.getStore().getSortState()) {
       ss = '&sort='+ this.getStore().getSortState().field + '&dir='+this.getStore().getSortState().direction;
     }
     if (this.getView() instanceof Ext.grid.GroupingView) {
       if(this.getStore() instanceof Ext.data.GroupingStore && this.getStore().groupField !== false){
          ss += '&groupBy='+ this.getStore().getGroupState();
       }

     }


     var v = window.open("frmMain.php?_p_form="+this.dataComponentName.replace('G','')+"&_p_action=export&_p_exp_format=csv"+qs+cs+ss,'Export','adress=yes,width=710,height=450,scrollbars=yes,resizable=yes,menubar=yes');
     v.focus();
  }

   ,deleteRecord: function() {
    if ( this.getSelectionModel().getCount() < 1 ) {
      Ext.Msg.show({
          title:''
         ,msg: 'No records selected. Nothing to delete.'
         ,buttons: Ext.Msg.OK
         ,fn: this.execute_delete
         ,icon: Ext.MessageBox.WARNING
      });
    } else {
      Ext.Msg.show({
         title:'Confirm delete'
         ,msg: 'Are you sure you want to delete this record?'
         ,buttons: Ext.Msg.YESNO
         ,fn: this.execute_delete
         ,scope:this
         ,icon: Ext.MessageBox.QUESTION
      });
    }
  }
  ,execute_delete: function(btn) {
      if (btn=='yes') {
        Ext.Ajax.request({
             url: "frmMain.php?_p_form="+this.dataComponentName.replace('G','')+"&_p_action=delete"
             ,success: this.after_execute_delete_success
             ,failure: this.after_execute_delete_failure
             ,scope:this
             ,params: { ID: this.getSelectionModel().getSelected().get("ID") } //TODO: replace ID with PK column(s) !!!
          });
      }
   }

  ,after_execute_delete_success: function(response,options) {
    var resp = Ext.decode(response.responseText);
    if (resp.success) {
      var removed = this.getSelectionModel().getSelected();
      var create = false;
      if (this.getSelectionModel().hasNext() ) {
        this.getSelectionModel().selectNext();
      }else if(this.getSelectionModel().hasPrevious()) {
        this.getSelectionModel().selectPrevious();
      }
      else {
         create = true;
      }
      this.getStore().remove( removed );
      this.getStore().commitChanges();
      if (create) {
        this.createNewRecord();
      }
    }else {
       if (resp.message) {
         Ext.Msg.alert('Error',this.urldecode(resp.message));
       } else {
         Ext.Msg.alert('Error','Error deleting this record with no message from server. Contact system administrator.');
       }
    }


  }
  ,after_execute_delete_failure: function(response,options) {
    alert('no');
  }

  ,reSelectCurrent:function () {
     var crt = this.getSelectionModel().getSelected();
     this.getSelectionModel().clearSelections();
     this.getSelectionModel().selectRecords([crt]);
  }
});

 Ext.reg('N21GridView', N21.Base.GridView);