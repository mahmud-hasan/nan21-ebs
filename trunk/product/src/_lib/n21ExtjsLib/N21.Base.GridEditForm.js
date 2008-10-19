
Ext.ns('N21.Base');


N21.Base.GridEditForm = Ext.extend(Ext.Panel, {
   dataComponentName:null
  ,detailWindow:null
  ,masterName: null
  ,detailName: null

  ,parentDcRelation: null
  ,mdLayout:'tab' // can be : row/column/tab/window
  ,detailTabRendered:false
   ,toolbarConfig: 'STANDARD'

  ,initComponent:function() {

     Ext.apply(this, arguments); // eo apply

     var stdTlb = new Array(

            {id:"tlb_btn_rec_qry",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_src.gif", tooltip:"Filter &lt;Ctrl+F&gt;",handler: this.enter_query,scope :this }
           ,{id:"tlb_btn_rec_cmt",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_commit.png", tooltip:"Save changes &lt;Ctrl+S&gt;",handler: this.commitForm,scope :this }
           ,{id:"tlb_btn_rec_new",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_new.gif", tooltip:"Create new &lt;Ctrl+N&gt;",handler: this.createNewRecord,scope :this }
           ,{id:"tlb_btn_rec_upd",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_upd.gif", tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;",enableToggle:true, handler: this.editModeOn,scope :this }
           ,'-'
           ,{id:"tlb_btn_rec_ref",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_refresh.gif", tooltip:"Refresh record",handler: this.reloadRecord,scope :this }
           ,{id:"tlb_btn_rec_del",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/g_rec_del.gif", tooltip:"Delete &lt;Ctrl+D&gt;",handler: this.deleteRecord,scope :this }
           ,'-'
           ,{id:"tlb_btn_rec_prv",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/f_rec_prev.gif", tooltip:"Previous",handler: this.goToPrevRecord,scope :this }
           ,{id:"tlb_btn_rec_nxt",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/f_rec_next.gif", tooltip:"Next",handler: this.goToNextRecord,scope :this }
           ,'-'
           ,{id:"tlb_btn_rec_prt",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/print.png", tooltip:"Print",handler: this.export_data,scope :this }
          // ,{id:"tlb_btn_rec_new",xtype: "button",cls:"x-btn-text-icon",text:"Editor", icon:"_static/icon/g_rec_new.gif", tooltip:"Create new &lt;Ctrl+N&gt;",handler: this.createNewRecord,scope :this }
        );
     if (Ext.isArray(this.toolbarConfig)) {
       this.tbar = new Array();
       var j=0;
       for (var i=0; i<this.toolbarConfig.length; i++ ) {
         if (this.toolbarConfig[i] == 'SAVE') {
           this.tbar[j] = stdTlb[0];
           j++;
         }
         if (this.toolbarConfig[i] == 'NEW') {
           this.tbar[j] = stdTlb[1];
           j++;
         }
         if (this.toolbarConfig[i] == 'N_PREV') {
           this.tbar[j] = stdTlb[2];
           j++;
         }
         if (this.toolbarConfig[i] == 'N_NEXT') {
           this.tbar[j] = stdTlb[3];
           j++;
         }

       }

     } else {
        if (this.toolbarConfig == 'STANDARD') {
          this.tbar = stdTlb;
       }
     }

     N21.Base.GridEditForm.superclass.initComponent.apply(this, arguments);
     if (this.parentDcRelation != null) {
        for (var j=0;j<this.parentDcRelation.relation.length; j++ ) {
          this.getRecordEditor().fields.get(this.parentDcRelation.relation[j].child).copyValueFrom =  this.parentDcRelation.name+'_'+ this.parentDcRelation.relation[j].parent;
        }
     }

   }

  ,initEvents: function() {
    N21.Base.GridEditForm.superclass.initEvents.call(this);
    this.getRecordList().getSelectionModel().on('rowselect', this.onRowSelect, this);

    this.getRecordList().on('keydown', this.onGridKeydown, this);
    this.getRecordList().on('rowdblclick', this.onRowDblClick, this);

    this.getRecordList().on('executeQuerySuccess',this.afterListExecuteQuerySuccess, this);
    this.getRecordList().on('createNewRecord',this.createNewRecord, this);

    this.getRecordEditor().on('commitFormSuccess',this.afterCommitFormSuccess, this);

    this.getRecordEditor().on('loadPrevRecord',this.goToPrevRecord, this);
    this.getRecordEditor().on('loadNextRecord',this.goToNextRecord, this);
    this.getRecordEditor().on('deleteRecord',this.deleteRecord, this);

    var keyMap = new Ext.KeyMap( this.body, [
        { key: 81, fn: this.close_detail,  ctrl:true, scope:this }/* Alt+Q */
       ,{ key: 70, fn: this.enter_query,   ctrl:true, scope:this }/* Alt+F */
       ,{ key: 78, fn: this.createNewRecord, ctrl:true, scope:this }/* Alt+N */
      // ,{ key: 83, fn: this.commitForm,   ctrl:true, scope:this }/* Alt+S */
    ]);
    keyMap.stopEvent = true;

  }
  // ----------- private properties

  ,reloadRecord: function () {
     this.getRecordEditor().fetchRecord();
  }

  ,goToPrevRecord: function() {  //  alert('in goToPrevRecord');
     if (this.getRecordList().getStore().getCount()==1) {
       this.reSelectCurrent();
     }
     this.getRecordList().getSelectionModel().selectPrevious(false);
  }

  ,goToNextRecord: function() {  //   alert('in goToNextRecord');
     if (this.getRecordList().getStore().getCount()==1) {
       this.reSelectCurrent();
     }
     this.getRecordList().getSelectionModel().selectNext(false);
  }

  ,reSelectCurrent:function () {
     this.getRecordList().reSelectCurrent();
  }

  , afterListExecuteQuerySuccess:function(listCmp, fetchedRecCount, firstRec) {
      if (fetchedRecCount>0) {
         this.loadRecord(firstRec);
      }else {
          if (this.mdLayout == 'row' || this.mdLayout == 'column' ) {
             this.createNewRecord();
          }
      }
  }

  ,editModeOn: function() {
     if (!Ext.getCmp("tlb_btn_rec_upd").pressed) { this.close_detail();}
     else {
       this.onRowDblClick();
     }
  }
  ,getRecordEditor:function() {
     return this.findById(this.detailName);
  }
  ,getRecordList:function() {
     return this.findById(this.masterName);
  }

  ,getDataRecord:function() {
     return this.getRecordEditor().dataRecord;
  }

  ,close_detail: function() {
     if (this.mdLayout == "tab") {
       this.getComponent("MDTab").activate(0);
     }
     if (this.mdLayout == "card") {
       this.getComponent("MDTab").layout.setActiveItem(0);
     }
     if (this.mdLayout == "window") {
       this.detailWindow.hide();  // alert(this.masterName);
       //Ext.getCmp(this.masterName).focus(false,200);
     }
     this.getTopToolbar().items.get(3).toggle(false);
     //this.getRecordList().getView().focusRow(this.getRecordList().getSelectionModel()....?);
     this.getRecordList().getView().focusRow(0);
  }

  ,onRowSelect: function(sm, rowIdx, r) {
     this.loadRecord(r);
  }

  ,loadRecord:function(r) {
     this.getRecordEditor().loadRecord(r);
     this.clear_details();
     this.synchronize_master_detail();
   }

  ,synchronize_master_detail:function() {
      this.getRecordEditor().synchronize_master_detail();
  }


  ,setDefaultFormFocus: function() {
    if (this.getRecordEditor().firstFocusFieldName != null) {
       this.getRecordEditor().getForm().findField(this.getRecordEditor().firstFocusFieldName).focus();
    }
  }


  ,onRowDblClick: function(grid, rowIndex, evnt) { //return ;
     //if the layout of grid and form is tabs => show form
     // in this situation we're stucked as rowselect is not fired
     if (this.getRecordList().getStore().getCount()==1 && this.getRecordEditor().dataRecord.get("_p_record_status")=="insert" ) {
       this.reSelectCurrent();
     }
     if (this.mdLayout == "tab") {
       this.getComponent("MDTab").activate(1); // alert(this.detailTabRendered);
       if (!this.detailTabRendered) {  // workaround to show content of nested panels and fieldsets, necessary only on first activation of the detail tab
          this.getComponent("MDTab").doLayout();
          this.detailTabRendered = true;
       }
       this.getRecordList().getSelectionModel().fireEvent('rowselect');   // is necessary for the first activation of the form tab


       // *****************************************************************************************************
       //todo: !!! add a new parameter: fetchChildDataOn : masterSelection - when the master record is changed 
       // check the paramter for each child DC and call this.getRecordEditor().populate_details(block_name);
       this.getRecordEditor().populate_all_details();
       // *****************************************************************************************************
       


     }else if (this.mdLayout == "window") {
       this.detailWindow.show();
       this.getRecordList().getSelectionModel().fireEvent('rowselect');  // is necessary for the first activation of the form tab
     }else if (this.mdLayout == "card") {
       this.getComponent("MDTab").layout.setActiveItem(1);
       this.getComponent("MDTab").items.get(1).doLayout();
       this.getRecordList().getSelectionModel().fireEvent('rowselect');  // is necessary for the first activation of the form tab
     }  else {
         this.getRecordEditor().populate_all_details(); //form is visible with list, on record selection must load details
     }

     this.getTopToolbar().items.get(3).toggle(true);
     this.setDefaultFormFocus();
  }

  ,onGridKeydown: function(evnt) {
     //if the layout of grid and form is tabs => show form
     if (evnt.getKey() == Ext.EventObject.ENTER) {
       // in this situation we're stucked as rowselect is not fired
       if (this.getRecordList().getStore().getCount()==1 && this.getRecordEditor().dataRecord.get("_p_record_status")=="insert" ) {
         this.reSelectCurrent();
       }

       if (this.mdLayout == "tab") {
           this.getComponent("MDTab").activate(1);
           if (!this.detailTabRendered) {   // workaround to show content of nested panels and fieldsets, necessary only on first activation of the detail tab
              this.getComponent("MDTab").doLayout();
              this.detailTabRendered = true;
           }
           this.getRecordList().getSelectionModel().fireEvent('rowselect');  // is necessary for the first activation of the form tab
          // this.fetchChildRecords();//load child records if any child datacontrol exists ...
       }else if (this.mdLayout == "window") {
           this.detailWindow.show();
           // is necessary for the first activation of the form tab
           this.getRecordList().getSelectionModel().fireEvent('rowselect');
       }else if (this.mdLayout == "card") {
         this.getComponent("MDTab").layout.setActiveItem(1);
         this.getComponent("MDTab").doLayout();
         this.getRecordList().getSelectionModel().fireEvent('rowselect');  // is necessary for the first activation of the form tab
       } else {
            this.getRecordEditor().populate_all_details();
       }
       this.getTopToolbar().items.get(3).toggle(true);
       this.setDefaultFormFocus();
     }



  }

  ,fetchChildRecords: function(childName) {
     Ext.getCmp(childName).executeQuery();
  }

  ,fetchAllChildRecords: function() {
      for (var i=0;i<this.getRecordEditor().childDCs.length;i++) {
       Ext.getCmp(this.getRecordEditor().childDCs[i].name).executeQuery();
     }

  }
  ,enter_query:function() {
      this.getRecordList().enter_query();
  }

  ,commitForm: function() {
    this.getRecordEditor().commitForm();
  }
  

  ,afterCommitFormSuccess:function(recordEditor,operation) {
      if (operation=="insert") {
        this.getRecordList().getStore().add([this.getRecordEditor().dataRecord]);
        this.getRecordList().getSelectionModel().selectLastRow();
      }else {

      }
      this.getRecordList().getStore().commitChanges();
      this.getRecordEditor().setDefaultFormFocus();
  }

  ,createNewRecord: function() {
     if (this.mdLayout == "tab") {
       this.getComponent("MDTab").activate(1);
       if (!this.detailTabRendered) {   // workaround to show content of nested panels and fieldsets, necessary only on first activation of the detail tab
          this.getComponent("MDTab").doLayout();
          this.detailTabRendered = true;
       }
       this.getTopToolbar().items.get(3).toggle(true);
     } else if (this.mdLayout == "card") {
         this.getComponent("MDTab").layout.setActiveItem(1);
         this.getComponent("MDTab").doLayout();
         this.getTopToolbar().items.get(3).toggle(true);
       }
     this.getRecordEditor().createNewRecord();
  }


  ,deleteRecord: function(recStatus) {
     if (recStatus == "insert") {
       this.reSelectCurrent();
     } else {
        this.getRecordList().deleteRecord();
     }
  }


  ,executeQuery: function() {
      this.getRecordList().executeQuery();
   }
  ,execute_query: function() {
      this.getRecordList().executeQuery();
   }
   
  ,export_data: function() {
     this.getRecordList().export_data();
  }
  
  ,urldecode: function ( str ) {
    var ret = str;
    ret = ret.replace(/\+/g, "%20");
    ret = decodeURIComponent(ret);
    ret = ret.toString();
    return ret;
  }

   ,clear_records:function() {
     this.getRecordList().getStore().removeAll();
     this.getRecordEditor().getForm().reset();
   }

   ,clear_details:function() {
     this.getRecordEditor().clear_details();
   }

   ,setQueryFieldValue:function(fieldName, fieldValue) {
     this.getRecordList().queryWindow.findById(this.dataComponentName+"_QRY_"+fieldName).setValue(fieldValue);
   }
   ,focus: function() {
      this.getRecordList().getSelectionModel().selectFirstRow();
      this.getRecordList().focusRow(0);
   }
   

  

});

 Ext.reg('N21GridEditForm', N21.Base.GridEditForm);