
Ext.ns('N21.Base');


N21.Base.EditForm = Ext.extend(Ext.form.FormPanel, {
   dataRecord: null
  ,dataComponentName:null
  ,firstFocusFieldName:null
  ,firstFocusFieldNameInsert:null
  ,fields: new Ext.util.MixedCollection()
  ,childDCs:new Array()   //Array

  ,initComponent:function() {

     Ext.apply(this, arguments); // eo apply
     this.header=false;
     this.hideBorders =true;
     this.trackResetOnLoad=true;
     N21.Base.EditForm.superclass.initComponent.apply(this, arguments);
     this.addEvents('commitFormSuccess', 'commitFormFailure', 'loadNextRecord', 'loadPrevRecord', 'deleteRecord');

     this.onInitForm();
   }
 ,onInitForm:function() {

 }

 ,initEvents: function() {
    N21.Base.EditForm.superclass.initEvents.call(this);

    var keyMap = new Ext.KeyMap( this.body, [
       { key: 83, fn: this.commitForm,   ctrl:true, scope:this }/* Ctrl+S */
    ]);
    keyMap.stopEvent = true;
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



  ,disableAllFields: function() {
    this.fields.each( this.disable);
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



  ,updateRecord: function () {
       this.getForm().updateRecord(this.dataRecord);
  }



  ,getFieldValue: function(fieldName) {
      return this.fields.get(fieldName).getValue();
  }



  ,setFieldValue: function(fieldName,newVal) {
      this.fields.get(fieldName).setValue(newVal);
      //this.fields.get(fieldName).fireEvent('change',this.fields.get(fieldName),newVal,oldVal);
      //if ( this.fields.get(fieldName).xtype == 'numberfield' )
      //  this.getField(fieldName).beforeBlur();
      /*
      var oldVal = this.getForm().findField(fieldName).getValue();
      this.getForm().findField(fieldName).setValue(newVal);
      this.getForm().findField(fieldName).fireEvent('change',this.getForm().findField(fieldName),newVal,oldVal);
      if ( this.fields.get(fieldName).xtype == 'numberfield' )
        this.getField(fieldName).beforeBlur();
      */
  }


  
  ,getField: function(fieldName) {
     // return this.getForm().findField(fieldName);
      return this.fields.get(fieldName);
  }



  ,clearDetails: function() {
     for (var i=0;i<this.childDCs.length;i++) {
         this.clearBlockDetails(this.childDCs[i].name);
      }
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
         try {
           Ext.getCmp(detailBlock).clearRecords();
         } catch (e) {
            Ext.Msg.alert('Framework error', 'Cannot clear detail block: '+detailBlock);
         }
       }
  }



  ,synchronizeMasterDetail:function() {
      for (var i=0;i<this.childDCs.length;i++) {

         for (var x=0; x<this.childDCs[ i ].relation.length; x++ ) {
           Ext.getCmp(this.childDCs[ i ].name).setQueryFieldValue(this.childDCs[ i ].relation[x].child, Ext.getCmp(this.dataComponentName+"_"+ this.childDCs[ i ].relation[x].parent).getValue() );
         }

      }
  }
  
 
  

  ,setRecordStatus: function(s) {
     if (s=="insert"||s=="update") {
       this.getForm().findField("_p_record_status").setValue(s);
       this.dataRecord.set("_p_record_status",s);
     }
  }

  ,getRecordStatus: function() {
     if ( this.getForm().findField("_p_record_status").getValue() == "insert") return "insert";   else return "update";
  }

// --------------------------- commitForm ----------------------

   /*
    * Config object properties: see each function to see specific properties
    */
  ,executeTrigger: function(tn,config) {
    if (tn=="COMMIT_FORM") { this.commitForm(config); }
    if (tn=="CREATE_NEW_RECORD") { this.createNewRecord(config); }
  }


   /* Config object properties:
    *   onSuccess: callback for successfully execution
    *   onFailure: callback for execution failure
    *   setDefaultFocus: true/false, focus the default focusable field after execution completed 
    */
  ,commitForm: function(config) {
    if (this.getForm().isValid()) {
      if (this.getForm().findField("_p_record_status").getValue() == "insert") {_p_action=_n21["REQUEST_PARAM_ACTION_INSERT"];}  else {_p_action=_n21["REQUEST_PARAM_ACTION_UPDATE"];}
      var baseUrlCfg = {};
      baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _p_action;
      baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName.replace('F','');
      baseUrlCfg[_n21["REQUEST_PARAM_FETCH_DATA_FORMAT"]] = _n21["DATA_FORMAT_JSON"];

        Ext.Msg.wait("Working...");


        var pConfig = {};
        Ext.apply(pConfig, config, {setDefaultFocus:true});

        var fnIns = function() {
          //alert('1');
          var op = (this.getForm().findField("_p_record_status").getValue() == "insert")?"insert":"update";
          this.getForm().findField("_p_record_status").setValue("");
          this.updateRecord();
          this.fireEvent("commitFormSuccess", this, op );

          for (var i=0;i<this.childDCs.length;i++) {
             if (this.childDCs[ i ].commitChildWithParent) {
               Ext.getCmp(this.childDCs[ i ].name).commitForm();
             }
          }
        }

        if (!Ext.isEmpty(pConfig) && !Ext.isEmpty(pConfig.fnSuccess)) {
           pConfig.fnSuccess.createSequence(fnIns,this);
        } else {
           pConfig.fnSuccess = fnIns;
        }
     Ext.Ajax.request({
             params:this.getValues()
            ,method:"POST"
            ,callback:this.afterAjaxRequest
            ,scope:this
            ,customConfig: pConfig
            ,url:buildUrl(baseUrlCfg)
            ,timeout:600000
        });

    }else {
    Ext.Msg.alert('Error', 'Form contains empty/invalid data');
    }
  }

 

  ,setDefaultFormFocus: function() {
    if (this.getRecordStatus() == "insert") {
      if (this.firstFocusFieldNameInsert != null) {
         this.getForm().findField(this.firstFocusFieldNameInsert).focus();
       }else if (this.firstFocusFieldName != null) {
         this.getForm().findField(this.firstFocusFieldName).focus();
       }
    } else {
       if (this.firstFocusFieldName != null) {
         this.getForm().findField(this.firstFocusFieldName).focus();
       }
    }

  }


  ,populateAllDetails:function() {
      for (var i=0;i<this.childDCs.length;i++) {
          this.populateDetails(this.childDCs[i].name);
        }
  }

  ,populateDetails:function(detailBlock) {
        var blockRelationIndex = -1;
        for (var i=0;i<this.childDCs.length;i++) {
          if  (this.childDCs[i].name == detailBlock)  {
            blockRelationIndex = i;
            break;
          }
        }

       if (blockRelationIndex != -1 ) {
         Ext.getCmp(detailBlock).clearRecords();
         for (var x=0; x<this.childDCs[ blockRelationIndex ].relation.length; x++ ) {
           Ext.getCmp(detailBlock).setQueryFieldValue(this.childDCs[ blockRelationIndex ].relation[x].child, Ext.getCmp(this.dataComponentName+"_"+ this.childDCs[ blockRelationIndex ].relation[x].parent).getValue() );
         }
         Ext.getCmp(detailBlock).executeQuery();
       }
  }


  ,show_details:function(detailBlock) {
    this.windows.get(detailBlock).doLayout();
    this.windows.get(detailBlock).show();
    this.populateDetails(detailBlock);
  }


  ,show_window:function(detailBlock) {
    this.layoutItems.get(detailBlock).show();
    this.populateDetails(detailBlock);
  }

   /* Config object properties:
    *   remoteRecInit: call the remote record initialization procedure
    *   onSuccess: callback for successfully execution
    *   onFailure: callback for execution failure
    */
  ,createNewRecord: function(config) {

     this.dataRecord = this.newDataRecord();
     this.dataRecord.set("_p_record_status","insert");
     this.loadRecord(this.dataRecord);
     var f= this.fields.getRange();
     for(var i=0;i<f.length; i++) {
       var item = f[i];
        if (!Ext.isEmpty(item.initialValue) ) {
            this.dataRecord.set(item.dataIndex, item.initialValue);
          } else if (!Ext.isEmpty(item.copyValueFrom) ) {
            this.dataRecord.set(item.dataIndex, Ext.getCmp(item.copyValueFrom).getValue());
          }
     }

    var doRemoteRecInit = (!Ext.isEmpty(config) && !config.remoteRecInit)?false:true;
     if (doRemoteRecInit) {

        var baseUrlCfg = {};
        baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_INIT_RECORD"];
        baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName.replace('F','');
        Ext.MessageBox.wait("Initializing new record...");
        var pConfig = {};
        Ext.apply(pConfig, config, {setDefaultFocus:true});
        
        var fnIns = function() {  this.getForm().findField("_p_record_status").setValue("insert");this.updateRecord(); }
        if (!Ext.isEmpty(pConfig) && !Ext.isEmpty(pConfig.fnSuccess)) {
           pConfig.fnSuccess.createSequence(fnIns,this);
        } else {
           pConfig.fnSuccess = fnIns;
        }

        Ext.Ajax.request({
            url: buildUrl(baseUrlCfg)
           ,callback:this.afterAjaxRequest
           ,scope:this
           ,params:this.dataRecord.data  //params:this.getValues()
           ,customConfig: pConfig
        });

     }
  }




  ,copyFieldValuesFrom:function(item , idx, len) {
        if (!Ext.isEmpty(item.copyValueFrom) ) {
            this.dataRecord.set(item.dataIndex, Ext.getCmp(item.copyValueFrom).getValue());
          }
  }



  ,fetchRecord:function(pk) {

      var baseUrlCfg = {};
      baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_FETCH_RECORD"];
      baseUrlCfg[_n21["REQUEST_PARAM_FETCH_DATA_FORMAT"]] = _n21["DATA_FORMAT_JSON"];
      baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName.replace('F','');

      Ext.MessageBox.wait("Loading data...");

        Ext.Ajax.request({
            url: buildUrl(baseUrlCfg)
           ,callback:this.afterAjaxRequest
           ,scope:this
           ,params:this.dataRecord.data   //params:this.getValues()
           ,customConfig: {fnSuccess:function() { this.setDefaultFormFocus(); }}
           ,params:pk
        });
  }



  ,callProcedure: function(procName, validateForm, fnSuccess, fnFailure ) {
     if (validateForm && !this.getForm().isValid()) {
        Ext.Msg.alert('Error', 'Form contains empty/invalid data');
        return false;
     }

    Ext.Msg.wait("Working...");

     var baseUrlCfg = {};
      baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_CUSTOM"]; //"call_proc";
      baseUrlCfg[_n21["REQUEST_PARAM_CUSTOM_ACTION"]] = procName;
      baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName.replace('F','');

     Ext.Ajax.request({
             params:this.getValues()
            ,method:"POST"
            ,callback:this.afterAjaxRequest
            ,scope:this
            ,customConfig: {fnSuccess:fnSuccess, fnFailure: fnFailure}
            ,url:buildUrl(baseUrlCfg)
            ,timeout:600000
        });
  }


  

  ,getValues:function() {
     // logic should be : get all values from dataRecord [ if exists]
     // update values from fields
     var f = this.fields;
     var fv = this.getForm().getValues();
     return fv;
  }



  ,afterAjaxSuccess:function(response, options) {  //  options.customConfig
      var p = Ext.util.JSON.decode(response.responseText)[_n21["RECORD_JSON_ROOT_TAG"]];
      if (!Ext.isEmpty(this.dataRecord)) {
         for (v in this.dataRecord.data) {
           try {
             this.getForm().findField(v).setValue(urldecode(p[v]));
           } catch(e) { }
        }
      }
      if (!Ext.isEmpty(options.customConfig)  ) {
        if (  !Ext.isEmpty(options.customConfig.fnSuccess) ) {
           var callback =  options.customConfig.fnSuccess;
           if( typeof callback == "function" ) {
              callback = callback.call(this, response);
           }
         }
        if (options.customConfig.setDefaultFocus)  {
           this.setDefaultFormFocus.defer(200, this);
         } 
      }
      Ext.MessageBox.hide();
  }


  ,afterAjaxFailure: function(code, message, callback) {
    try{
      Ext.Msg.alert(code, urldecode(message) );
      
      if (!Ext.isEmpty(callback) ) {
         if( typeof callback == "function" ) {
            callback = callback.call(this);
         }
       }
     } catch (e) {
        Ext.Msg.alert(e.name, e.message);
     }
  }


  ,afterAjaxRequest: function(options, success, response) {
     Ext.MessageBox.hide();
      if (!success) {
        if (options.customConfig !== false && options.customConfig.fnFailure !== false) {
           this.afterAjaxFailure(response.statusText, response.responseText, options.customConfig.fnFailure);
        } else {
          this.afterAjaxFailure(response.statusText, response.responseText);
        }
      } else {
          var o = Ext.util.JSON.decode(response.responseText);
          if(!o.success) {
             this.afterAjaxFailure('Error' , o.message);
          } else {
             if (!Ext.isEmpty(o.message)) {
               Ext.Msg.alert('Message',urldecode(o.message) );
             }
             this.afterAjaxSuccess(response, options);
          }
      }
  }


  ,run_report:function(config,param_list) {
     var paramQS = "";
     config.showParameterForm = config.showParameterForm || 'N';
     for (var j=0; j<param_list.length; j++ ) {
       for (var kk in param_list[j] ) {
         param_list[j][kk] = this.getForm().findField(this.fields.get(param_list[j][kk]).id).getValue();
         paramQS = paramQS + '' +  Ext.urlEncode( param_list[j] );
       }
     }
    var w = window.open('http://localhost/n21eBusinessSuite/ServerPhp/testjasper.php?_p_report_id='+config.reportId+'&output=pdf&'+paramQS, config.reportId, 'width=680,height=500,menubar=yes,scrolling=yes,adress=yes');
     w.focus;
  }

});

 Ext.reg('N21EditForm', N21.Base.EditForm);