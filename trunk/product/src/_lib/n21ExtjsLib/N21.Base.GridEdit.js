
Ext.ns('N21.Base');


N21.Base.GridEdit = Ext.extend(Ext.grid.EditorGridPanel, {
   dataComponentName:null
  ,dataRecordMeta: null
  ,DATE_FORMAT: 'd.m.Y' 
  ,queryFields: new Array()
  ,queryWindow:null
  ,queryArraySize:20
  ,parentDcRelation: null
  ,firstFocusFieldName:null
   

  ,initComponent:function() {

     Ext.apply(this, arguments); // eo apply
     this.clicksToEdit = 1;
     if (this.queryArraySize != null && this.queryArraySize != -1) {
       this.bbar = new Ext.PagingToolbar({
           store:this.store
          ,displayInfo:true
          ,pageSize:20
          });
     }

     this.tbar = new Array(
            {id:"tlb_btn_rec_qry",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_src.gif", tooltip:"Filter &lt;Ctrl+F&gt;",handler: this.enter_query,scope :this }
           ,{id:"tlb_btn_rec_cmt",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_commit.png", tooltip:"Save changes &lt;Ctrl+S&gt;",handler: this.commitForm,scope :this }
           ,{id:"tlb_btn_rec_new",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_new.gif", tooltip:"Create new &lt;Ctrl+N&gt;",handler: this.createNewRecord,scope :this }
           ,'-'
           ,{id:"tlb_btn_rec_del",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_del.gif", tooltip:"Delete &lt;Ctrl+D&gt;",handler: this.deleteRecord,scope :this }
           ,'-'
           ,{id:"tlb_btn_rec_exp",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/print.png", tooltip:"Print",handler: this.export_data,scope :this }
       );

     //this.tbar = null;
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
         ,buttons: [{text:'Apply',handler:this.execute_query,scope:this },{text:'Reset',handler:this.reset_query,scope:this }]
         ,buttonAlign:'left'
       });
     N21.Base.GridEdit.superclass.initComponent.apply(this, arguments);
     if (this.parentDcRelation != null) {
        for (var j=0;j<this.parentDcRelation.relation.length; j++ ) {
          this.getColumnModel().getColumnById(this.parentDcRelation.relation[j].child).copyValueFrom = this.parentDcRelation.name+'_'+ this.parentDcRelation.relation[j].parent;
        }
     }


   }
   


   ,sentCommitRecCount:0
   ,doneCommitRecCount:0
   ,serverMessages: []


  ,initEvents: function() {
    N21.Base.GridEdit.superclass.initEvents.call(this);
    this.getStore().proxy.on('loadexception', this.onLoadException, this);
    this.getStore().proxy.on('load', this.onLoadProxy, this);
    this.on('beforeedit', this.beforeCellEdit,this )

  }

  ,beforeCellEdit:function(e) {
    if (e.record.data._p_record_status == "insert") {
      if (!this.columns.get(e.field).insert_allowed) {e.cancel=true;}
    } else {
      if (!this.columns.get(e.field).update_allowed) {e.cancel=true;}
    }
  }


  ,onLoadProxy:function(proxy, obj, arg, result) {
    for (var i=0;i<result.records.length ; i++ )  {
      for (v in result.records[i].data) {
        if (Ext.type(result.records[i].get(v)) == 'string')
          result.records[i].set(v, this.urldecode(result.records[i].get(v) )) ;
      }
      result.records[i].commit();
    }
  }


  ,onLoadException:function(proxy,options,response,error) {
      if (!response.responseText)
        Ext.Msg.alert('Error', 'Network failure. Communication with server lost.');
      else
        Ext.Msg.alert('Error', this.urldecode(Ext.decode(response.responseText).message));
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
     var v = window.open("frmMain.php?_p_action=export&_p_exp_format=csv&_p_form="+this.dataComponentName+''+qs+cs+ss,'Export','adress=yes,width=710,height=450,scrollbars=yes,resizable=yes,menubar=yes');
     v.focus();
  }

  ,enter_query:function() {
    if (this.queryWindow != null) {
      this.queryWindow.show();
    }
  }

   ,reset_query: function() {
     for(i=0;i<this.queryFields.length;i++) {
       this.queryWindow.findById(this.queryFields[i].id).setValue(null);
     }
   }

   ,commitForm: function() {
      this.serverMessages = new Array();
      var x = this.store.getModifiedRecords();
      if (x.length>0) {Ext.MessageBox.wait("Saving your data ...");}
      for (var i=0;i<x.length;i++) { this.sentCommitRecCount++;
        var lo = x[i];
        var ld = new Object();
        if (lo.data._p_record_status == "insert") {_p_action="insert"}  else {_p_action="update";}
        for (var j=0;j<this.dataRecordMeta.prototype.fields.items.length;j++) {

           if (this.dataRecordMeta.prototype.fields.items[j].type == 'date' ) {
              var val = "";
              if (!Ext.isEmpty(lo.get(this.dataRecordMeta.prototype.fields.items[j].name)) )   {val = lo.get(this.dataRecordMeta.prototype.fields.items[j].name).format(this.dataRecordMeta.prototype.fields.items[j].dateFormat);}
              ld[this.dataRecordMeta.prototype.fields.items[j].name] = val;
             } else {
                ld[this.dataRecordMeta.prototype.fields.items[j].name] = lo.data[this.dataRecordMeta.prototype.fields.items[j].name];
             }
             //add the store's record id to identify record in callback
             ld["_p_store_recId"] = lo.id;
        }
        Ext.Ajax.request({
             params:ld
            ,method:"POST"
            ,callback:this.after_commit
            ,scope:this
            ,url:"frmMain.php?_p_action="+_p_action+"&_p_form="+this.dataComponentName
        });
      }
   }



   ,after_commit: function(options, success,response) {
      this.doneCommitRecCount++;
      var o = Ext.util.JSON.decode(response.responseText);
      if (!o.success) {
         this.serverMessages[this.serverMessages.length] =  this.urldecode(o.message);
      } else {
         //TODO: overwrite changed values
       var p = o.data ;
       for (var j=0;j<this.dataRecordMeta.prototype.fields.items.length;j++) {
         if (this.dataRecordMeta.prototype.fields.items[j].type == 'date' ) {
             this.getStore().getById(p["_p_store_recId"]).set(this.dataRecordMeta.prototype.fields.items[j].name, Date.parseDate(p[this.dataRecordMeta.prototype.fields.items[j].name], this.dataRecordMeta.prototype.fields.items[j].dateFormat) );
           } else {
              this.getStore().getById(p["_p_store_recId"]).set(this.dataRecordMeta.prototype.fields.items[j].name,p[this.dataRecordMeta.prototype.fields.items[j].name] );
           }
      }
        this.store.commitChanges();
      }

      if (this.sentCommitRecCount==this.doneCommitRecCount) {
         this.sentCommitRecCount=0;
         this.doneCommitRecCount=0;
          Ext.MessageBox.hide();
          if (this.serverMessages.length>0) {
             var err = '';
             for (var x=0;x<this.serverMessages.length;x++ ) {
               err += '' + this.urldecode(this.serverMessages[0]) + '<br>' ;
             }
             Ext.Msg.alert('Error',err);
          }
        }
   }





  ,createNewRecord: function() {
     var newRecord = this.newDataRecord();
     newRecord.set("_p_record_status","insert");

     for (var i=0; i<this.getColumnModel().config.length; i++) {
       if (!Ext.isEmpty(this.getColumnModel().config[i].copyValueFrom) ) {
            newRecord.set(this.getColumnModel().config[i].dataIndex, Ext.getCmp(this.getColumnModel().config[i].copyValueFrom).getValue());
          }
     }
     this.store.add(newRecord);
      Ext.Ajax.request({
          url: "frmMain.php?_p_action=initRec&_p_form="+this.dataComponentName
         ,success: this.afterCreateNewRecordSuccess
         ,failure: this.afterCreateNewRecordFailure
         ,scope:this
         ,params:newRecord.data
      });

  }
  

  ,afterCreateNewRecordSuccess:function(r,o) {
    var p = Ext.util.JSON.decode(r.responseText).data ;

    for (var i=0;i<this.dataRecordMeta.prototype.fields.items.length;i++) {
          //alert(this.dataRecordMeta.prototype.fields.items[i].type);
         if (this.dataRecordMeta.prototype.fields.items[i].type == 'date' ) {
             this.getStore().getAt(this.getStore().getCount()-1).set(this.dataRecordMeta.prototype.fields.items[i].name, Date.parseDate(p[this.dataRecordMeta.prototype.fields.items[i].name], this.dataRecordMeta.prototype.fields.items[i].dateFormat) );
           } else {
              this.getStore().getAt(this.getStore().getCount()-1).set(this.dataRecordMeta.prototype.fields.items[i].name,p[this.dataRecordMeta.prototype.fields.items[i].name] );
           }
      }
     if (this.firstFocusFieldName != null ) {
       this.startEditing(this.getStore().getCount()-1, this.getColumnModel().getIndexById(this.firstFocusFieldName) );
     }
  }


  ,afterCreateNewRecordFailure:function(r,o) {

  }
  
  
  
  ,deleteRecord: function() {
    if ( this.getSelectionModel().selection == null  ) {
      Ext.Msg.show({
          title:'Confirm delete'
         ,msg: 'No records selected. Nothing to delete.'
         ,buttons: Ext.Msg.OK
         ,fn: this.executeDelete
         ,scope:this
         ,icon: Ext.MessageBox.WARNING
      });
    } else {
      Ext.Msg.show({
          title:'Confirm delete'
         ,msg: 'Are you sure you want to delete the selected record(s)?'
         ,buttons: Ext.Msg.YESNO
         ,fn: this.executeDelete
         ,scope:this
         ,icon: Ext.MessageBox.QUESTION
      });
    }
  }
  ,executeDelete: function(btn) {
      if (btn=='yes') {
         var rowIdx = this.getSelectionModel().selection.cell[0];
         this.stopEditing( );
          Ext.Ajax.request({
             url: "frmMain.php?_p_action=delete&_p_form="+this.dataComponentName.replace('G','')
             ,success: this.afterExecuteDeleteSuccess
             ,failure: this.afterExecuteDeleteFailure
             ,scope:this
             ,params: { ID: this.store.getAt(rowIdx).get("ID") } //TODO: replace ID with PK column(s) !!!
          });
      }
   }


  ,afterExecuteDeleteSuccess: function(response,options) {
    var resp = Ext.decode(response.responseText);
    if (resp.success) {
      this.getStore().remove( this.getSelectionModel().selection.record );
      this.getStore().commitChanges();
    }else {
       if (resp.message) {
         Ext.Msg.alert('Error',this.urldecode(resp.message));
       } else {
         Ext.Msg.alert('Error','Error deleting this record with no message from server. Contact system administrator.');
       }
    }
  }

  ,afterExecuteDeleteFailure: function(response,options) {
    alert('no');
  }


    ,executeQuery: function() {
       this.execute_query();
   }
   ,execute_query: function() {
       // set the query params

       var p = new Object(); //{start:0,limit:20}
       for(i=0;i<this.queryFields.length;i++) {
          p[this.queryFields[i].name] = this.queryWindow.findById(this.queryFields[i].id).getValue();
       }

       this.store.baseParams = p;
       this.store.load({callback:this.after_execute_query,scope:this});
       if (this.queryWindow != null ) {
         if (this.queryWindow.isVisible() )
            this.queryWindow.hide();
      }

     }

  ,after_execute_query: function(r,options,success) {
    if (success) {

    }
  }


   ,urldecode: function ( str ) {
      var ret = str;
      ret = ret.replace(/\+/g, "%20");
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
});

 Ext.reg('N21GridEdit', N21.Base.GridEdit);