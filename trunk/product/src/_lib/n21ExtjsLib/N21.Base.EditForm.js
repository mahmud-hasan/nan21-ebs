
Ext.ns('N21.Base');


N21.Base.EditForm = Ext.extend(Ext.form.FormPanel, {
   dataRecord: null
  ,dataComponentName:null
  ,firstFocusFieldName:null
  ,fields: new Ext.util.MixedCollection()
  ,childDCs:new Array()   //Array

  ,initComponent:function() {

     Ext.apply(this, arguments); // eo apply

     var stdTlb = new Array(
            {id:"tlb_btn_rec_cmt",xtype: "button",cls:"x-btn-text-icon",text:"Save", icon:"_static/icon/g_rec_commit.png", tooltip:"Save changes &lt;Ctrl+S&gt;",handler: this.commitForm,scope :this }
           ,{id:"tlb_btn_rec_new",xtype: "button",cls:"x-btn-text-icon",text:"New", icon:"_static/icon/g_rec_new.gif", tooltip:"Create new &lt;Ctrl+N&gt;",handler: this.createNewRecord,scope :this }
           ,{id:"tlb_btn_rec_del",xtype: "button",cls:"x-btn-text-icon",text:"Delete", icon:"_static/icon/g_rec_del.gif", tooltip:"Delete",handler: this.deleteRecord,scope :this }
           ,{id:"tlb_btn_rec_prv",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/f_rec_prev.gif", tooltip:"Previous",handler: this.fetchPrevFromDs,scope :this }
           ,{id:"tlb_btn_rec_nxt",xtype: "button",cls:"x-btn-icon", icon:"_static/icon/f_rec_next.gif", tooltip:"Next",handler: this.fetchNextFromDs,scope :this }
       
        );
     /*
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
        */
     this.trackResetOnLoad=true;
     N21.Base.EditForm.superclass.initComponent.apply(this, arguments);
    // alert(this.bodyStyle);
     this.addEvents('commitFormSuccess', 'commitFormFailure', 'loadNextRecord', 'loadPrevRecord', 'deleteRecord');
   }


 ,initEvents: function() {
    N21.Base.EditForm.superclass.initEvents.call(this);

    var keyMap = new Ext.KeyMap( this.body, [
       { key: 83, fn: this.commitForm,   ctrl:true, scope:this }/* Ctrl+S */
    ]);
    keyMap.stopEvent = true;
  }

  ,fetchPrevFromDs: function() { // alert(-1);
     this.fireEvent("loadPrevRecord",this);
  }

  ,fetchNextFromDs: function() {// alert(+1);
     this.fireEvent("loadNextRecord",this);
  }

  ,loadRecord: function (record) { //
     if (record!=null && record != undefined) {
       this.dataRecord =  record;
     }
     if (this.dataRecord != null) {
       this.getForm().loadRecord(this.dataRecord);
       if (this.dataRecord.get("_p_record_status") == "insert") {
          this.fields.eachKey( this.checkInsertAllowed, this );
       }else {
          this.fields.eachKey( this.checkUpdateAllowed, this );
       }

     }
  }
  ,deleteRecord: function() {
     if (this.dataRecord.data._p_record_status == "insert") {
        this.fireEvent("deleteRecord",this.dataRecord.data._p_record_status);
     }else {
        this.fireEvent("deleteRecord",this.dataRecord.data._p_record_status);
     }
  }

  ,checkUpdateAllowed:function(key,item) {
     try {
       if (item.update_allowed) {
         this.getForm().findField(key).enable();
       } else {
         this.getForm().findField(key).disable();
       }
     }catch(e) {/* maybe is a hidden field .. */}
  }


  ,checkInsertAllowed:function(key,item) {
     try {
       if (item.insert_allowed) {
         this.getForm().findField(key).enable();
       } else {
         this.getForm().findField(key).disable();
       }
      }catch(e) {/* maybe is a hidden field .. */}
  }


  ,updateRecord: function () { //
       this.getForm().updateRecord(this.dataRecord);
  }
  

  ,getFieldValue: function(fieldName) {
      return this.fields.get(fieldName).getValue();
  }


  ,setFieldValue: function(fieldName,newVal) {
      var oldVal = this.getForm().findField(fieldName).getValue();
      this.getForm().findField(fieldName).setValue(newVal);
      this.getForm().findField(fieldName).fireEvent('change',this.getForm().findField(fieldName),newVal,oldVal);
      if ( this.fields.get(fieldName).xtype == 'numberfield' )
        this.getField(fieldName).beforeBlur();
  }

  ,getField: function(fieldName) {
      return this.getForm().findField(fieldName);
  }

  ,clearDetails: function() {
     for (var i=0;i<this.childDCs.length;i++) {
         this.clear_block_details(this.childDCs[i].name);
      }
  }
  ,clear_details: function() {
    this.clearDetails();
  }


  ,clearBlockDetails:function(detailBlock) {
       var blockRelationIndex = -1;
        for (var i=0;i<this.childDCs.length;i++) {
          if  (this.childDCs[i].name == detailBlock)  {
            blockRelationIndex = i;
            break;
          }
        }
       if (blockRelationIndex != -1 ) {
         Ext.getCmp(detailBlock).clear_records();
       }
  }
  ,clear_block_details:function(detailBlock) {
      this.clearBlockDetails(detailBlock);
  }

  ,synchronizeMasterDetail:function() {
      for (var i=0;i<this.childDCs.length;i++) {

         for (var x=0; x<this.childDCs[ i ].relation.length; x++ ) {
           Ext.getCmp(this.childDCs[ i ].name).setQueryFieldValue(this.childDCs[ i ].relation[x].child, Ext.getCmp(this.dataComponentName+"_"+ this.childDCs[ i ].relation[x].parent).getValue() );
         }

      }
  }
  ,synchronize_master_detail:function() {
     this.synchronizeMasterDetail();
  }
  

// --------------------------- commitForm ----------------------

  ,commitForm: function() {
    if (this.getForm().isValid()) {
      if (this.getForm().findField("_p_record_status").getValue() == "insert") {_p_action="insert"}  else {_p_action="update";}
      url = "frmMain.php?_p_action="+_p_action+"&_p_form="+this.dataComponentName.replace('F','');
      this.getForm().submit({ url:url ,scope: this, success: this.afterCommitSuccess, failure: this.afterCommitFailure, waitMsg:'Saving your data...'});
    }else {
    Ext.Msg.alert('Error', 'Form contains empty/invalid data');
    }
  }


  ,afterCommitSuccess: function(form,action) {
      var op = "";
      if (this.getForm().findField("_p_record_status").getValue() == "insert") {
        op = "insert";
        this.getForm().findField("_p_record_status").setValue("");
        //syncronize the local dataRecord with the values returned from server
        for (v in this.dataRecord.data) {
             try {
               this.getForm().findField(v).setValue(action.result.data[v]);
             } catch(e) {}
          }
      } else {
        op = "update";
        for (v in this.dataRecord.data) {
             try {
               this.getForm().findField(v).setValue(action.result.data[v]);
             } catch(e) {}
          }
      }
      this.updateRecord();
     // this.setDefaultFormFocus();

      this.fireEvent("commitFormSuccess", this, op );

      for (var i=0;i<this.childDCs.length;i++) {
         if (this.childDCs[ i ].commitChildWithParent) {
           Ext.getCmp(this.childDCs[ i ].name).commitForm();
         }
      }
      this.setDefaultFormFocus();
  }


  ,afterCommitFailure: function(form,action) {
      if (action.result.message == undefined)
        Ext.Msg.alert('Error', 'Network failure. Communication with server lost.');
      else
        Ext.Msg.alert('Error', this.urldecode(action.result.message));
      this.fireEvent("commitFormFailure", this );
  }


  ,setDefaultFormFocus: function() {
    if (this.firstFocusFieldName != null) {
       this.getForm().findField(this.firstFocusFieldName).focus();
    }
  }


  ,populateAllDetails:function() {
      for (var i=0;i<this.childDCs.length;i++) {
          this.populate_details(this.childDCs[i].name);
        }
  }
  ,populate_all_details:function() {
      this.populateAllDetails();
  }

  ,populateDetails:function(detailBlock) {
        var blockRelationIndex = -1;
        for (var i=0;i<this.childDCs.length;i++) {
          if  (this.childDCs[i].name == detailBlock)  {
            blockRelationIndex = i;
            break;
          }
        }
         //alert(" alert(blockRelationIndex);="+blockRelationIndex);
       if (blockRelationIndex != -1 ) {
         Ext.getCmp(detailBlock).clear_records();
         for (var x=0; x<this.childDCs[ blockRelationIndex ].relation.length; x++ ) {
           Ext.getCmp(detailBlock).setQueryFieldValue(this.childDCs[ blockRelationIndex ].relation[x].child, Ext.getCmp(this.dataComponentName+"_"+ this.childDCs[ blockRelationIndex ].relation[x].parent).getValue() );
         }
         Ext.getCmp(detailBlock).execute_query();
       }
  }

  ,populate_details:function(detailBlock) {
       this.populateDetails(detailBlock);
  }
  

  ,show_details:function(detailBlock) {
    this.windows.get(detailBlock).doLayout();
    this.windows.get(detailBlock).show();
    this.populate_details(detailBlock);
  }


  ,show_window:function(detailBlock) {
    this.layoutItems.get(detailBlock).show();
    this.populate_details(detailBlock);
  }


  ,createNewRecord: function() {
     
     this.dataRecord = this.newDataRecord();
     this.dataRecord.set("_p_record_status","insert");
     //this.updateRecord();
     this.loadRecord(this.dataRecord);
     this.fields.each(this.copyFieldValuesFrom, this);

     this.getForm().load({ url:"frmMain.php?_p_action=initRec&_p_form="+this.dataComponentName.replace('F',''),params:this.dataRecord.data
                          ,success: this.createNewRecordSuccess, failure: this.createNewRecordFailure, scope:this
                          ,waitMsg:'Initializing new record...'});
  }


  ,createNewRecordSuccess: function(form, action) {
     //this.dataRecord = this.newDataRecord();
     //this.dataRecord.set("_p_record_status","insert");
     this.updateRecord();
     this.fields.each(this.copyFieldValuesFrom, this);

     this.loadRecord(this.dataRecord);
     this.clear_details();
     this.setDefaultFormFocus();  // set the focus

  }


  ,copyFieldValuesFrom:function(item , idx, len) {
     //try {      // alert(idx+' '+item.dataIndex);
        if (!Ext.isEmpty(item.copyValueFrom) ) {
            this.dataRecord.set(item.dataIndex, Ext.getCmp(item.copyValueFrom).getValue());
          }
    // }catch(e) {}

  }


  ,createNewRecordFailure: function(form, action) {
     try{
        if (action.result.message) {
          Ext.Msg.alert('Error', this.urldecode(action.result.message) );
        }
     } catch (e) {Ext.Msg.alert('Error', 'Network failure. Communication with server lost.');}
  }

  ,fetchRecord:function() {
     this.getForm().load({ url:"frmMain.php?_p_action=fetchRecord&_p_form="+this.dataComponentName.replace('F',''),params:this.dataRecord.data
              ,success: this.fetchRecordSuccess, failure: this.fetchRecordFailure, scope:this
              ,waitMsg:'Loading...'});

  }
  
  ,fetchRecordSuccess: function(form, action) {
      for (v in this.dataRecord.data) {
           try {
             this.getForm().findField(v).setValue(action.result.data[v]);
           } catch(e) {}
        }
      this.updateRecord();
  }

  ,fetchRecordFailure: function(form, action) {
     try{
        if (action.result.message) {
          Ext.Msg.alert('Error', this.urldecode(action.result.message) );
        }
     } catch (e) {Ext.Msg.alert('Error', 'Network failure. Communication with server lost.');}
  }
  

  ,callProcedure: function(procName) {
     //Ext.MessageBox.wait("Working ...");
     var f = this.fields;
     var fv = new Object();
     for(var i = 0, len = f.keys.length; i < len; i++){
        fv[f.keys[i]] = f.items[i].getValue();
     }
     
     Ext.Ajax.request({
             params:fv
            ,method:"POST"
            ,callback:this.afterCallProcedure
            ,scope:this
            ,url:"frmMain.php?_p_action=call_proc&_p_proc="+procName+"&_p_form="+this.dataComponentName.replace('F','')
        });
  }



  ,afterCallProcedure: function(options, success,response) {
      var o = Ext.util.JSON.decode(response.responseText);
      //alert(response.responseText);
      Ext.MessageBox.hide();
      if (!success || !o.success) {
         Ext.Msg.alert('Error',this.urldecode(o.message) );
      } else {
         if (!Ext.isEmpty(o.message)) {
           Ext.Msg.alert('Message',this.urldecode(o.message) );
         }
      }

  }

  ,run_report:function(config,param_list) {
     var paramQS = "";
     config.showParameterForm = config.showParameterForm || 'N';
     for (var j=0; j<param_list.length; j++ ) {
       for (var kk in param_list[j] ) {
         //alert(kk + ' ' + param_list[j][kk]);
         //alert(this.getForm().findField(this.fields.get(param_list[j][kk]).id).getValue());
         param_list[j][kk] = this.getForm().findField(this.fields.get(param_list[j][kk]).id).getValue();
         paramQS = paramQS + '' +  Ext.urlEncode( param_list[j] );
       }
     }
    // var w = window.open('http://localhost:8088/jasperserver/flow.html?_flowId=viewReportFlow&reportUnit=/reports/MyReports/'+config.reportId+'&output=pdf&'+paramQS, config.reportId, 'width=680,height=500,menubar=yes,scrolling=yes,adress=yes');
     //var w = window.open('runReport.php?_p_show_parameter_form='+config.showParameterForm+'&_p_report_id='+config.reportId+'&'+paramQS, config.reportId, 'width=680,height=500,menubar=yes,scrolling=yes');
    var w = window.open('http://localhost/n21eBusinessSuite/product/src/testjasper.php?_p_report_id='+config.reportId+'&output=pdf&'+paramQS, config.reportId, 'width=680,height=500,menubar=yes,scrolling=yes,adress=yes');
     w.focus;
  }


   ,urldecode: function ( str ) {
    var ret = str;
    ret = ret.replace(/\+/g, "%20");
    ret = decodeURIComponent(ret);
    ret = ret.toString();
    return ret;
  }


});

 Ext.reg('N21EditForm', N21.Base.EditForm);