
Ext.ns('N21.Base');


N21.Base.GridEdit = Ext.extend(Ext.grid.EditorGridPanel, {
   dataComponentName:null
  ,dataRecordMeta: null
  ,DATE_FORMAT: 'd.m.Y'

  ,queryWindow:null
  ,queryArraySize:20
  ,parentDcRelation: null
  ,firstFocusFieldName:null
  ,firstFocusFieldNameInsert:null
  ,recordPk: new Array()
  ,columnMap: new Ext.util.MixedCollection()
  ,dcToolbar: null
  ,queryPanelColCount: 2
  ,queryFields: new Ext.util.MixedCollection()
  ,queryFieldsVisible: new Array()

  ,childDCs:new Array()   //Array

  ,printWindow:null

  ,initComponent:function() {
     this.store.paramNames = {
        "start" : _n21["REQUEST_PARAM_FETCH_START"],
        "limit" : _n21["REQUEST_PARAM_FETCH_SIZE"],
        "sort" : _n21["REQUEST_PARAM_FETCH_SORT"],
        "dir" : _n21["REQUEST_PARAM_FETCH_SENSE"]
    };

     this.clicksToEdit = 1;
     if (this.queryArraySize != null && this.queryArraySize != -1) {
       this.bbar = new Ext.PagingToolbar({
           store:this.store
          ,displayInfo:true
          ,pageSize:this.queryArraySize
          });
      this.bbar.paramNames = {
          "start" : _n21["REQUEST_PARAM_FETCH_START"],
          "limit" : _n21["REQUEST_PARAM_FETCH_SIZE"]
        };
     }
      this.dcToolbar = this.tbar;
      this.tbar = new Ext.Panel({
          autoScroll:true
         ,border:true
         ,bodyBorder :false
         ,tbar:this.dcToolbar
         ,frame:false
         ,layout:'table'
         ,layoutConfig: {columns: this.queryPanelColCount}
         ,defaults:{labelWidth:90, labelAlign:'right'}
         ,bodyStyle:'padding-top:5px;padding-bottom:5px;'

       });

       for (var i=1; i<=this.queryPanelColCount; i++) {
         this.tbar.add( {layout:'form',labelAlign:'right', bodyStyle:'border:0;', autoScroll:false, items: this.getQueryFieldsForPanelCol(i)});
       }



     N21.Base.GridEdit.superclass.initComponent.apply(this, arguments);
     if (this.parentDcRelation != null) {
        for (var j=0;j<this.parentDcRelation.relation.length; j++ ) {
          this.getColumnModel().getColumnById(this.parentDcRelation.relation[j].child).copyValueFrom = this.parentDcRelation.name+'.'+ this.parentDcRelation.relation[j].parent;
        }
     }
     
     
     this.keys = [
        { key: Ext.EventObject.F7, fn: this.enterQuery,   ctrl:false, scope:this,stopEvent:true }
       ,{ key: Ext.EventObject.F8, fn: this.executeQuery,   ctrl:false, scope:this,stopEvent:true }
       ,{ key: Ext.EventObject.N, fn: this.createNewRecord, ctrl:true, scope:this ,stopEvent:true}
       ,{ key: Ext.EventObject.S, fn: this.commitForm, ctrl:true, scope:this ,stopEvent:true}
    ];

   }


   ,sentCommitRecCount:0
   ,doneCommitRecCount:0
   ,serverMessages: []


  ,getCurrentRowIndex:function() {
     if (this.getSelectionModel().selection) {
       return this.getSelectionModel().selection.cell[0];
     }  else return -1;
   }


  ,show_window:function(detailBlock) {
    var showWindow = true;
    //if it is a child DC fetch the data
    var blockRelationIndex = -1;
        for (var i=0;i<this.childDCs.length;i++) {
          if  (this.childDCs[i].name == detailBlock)  {
            blockRelationIndex = i;
            break;
          }
        }

    if (blockRelationIndex != -1 ) {
      var rowIdx = -1;
      try {
        var rowIdx = this.getCurrentRowIndex();
      } catch (e) { /* No selection */ showWindow=false; Ext.Msg.alert('Error', e.message); }
      if (rowIdx != -1) {
        for (var x=0; x<this.childDCs[ blockRelationIndex ].relation.length; x++ ) {
             Ext.getCmp(detailBlock).setQueryFieldValue(this.childDCs[ blockRelationIndex ].relation[x].child, this.store.getAt(rowIdx).get(this.childDCs[ blockRelationIndex ].relation[x].parent )  );
        }
        Ext.getCmp(detailBlock).executeQuery();
      } else {
          showWindow = false;
          Ext.Msg.alert('Error', 'No record selected. Cannot load details.');
      }

    }
    if (showWindow) {
      this.layoutItems.get(detailBlock).show();
    }
  }





  ,initEvents: function() {
    N21.Base.GridEdit.superclass.initEvents.call(this);
    this.getStore().proxy.on('loadexception', this.onLoadException, this);
    this.getStore().proxy.on('load', this.onLoadProxy, this);
    this.on('beforeedit', this.beforeCellEdit,this );
  }


  ,getQueryFieldsForPanelCol:function (colNr) {
     var idxStart,idxStop;
     var colArr = new Array();
     var vqfLen = this.queryFieldsVisible.length;
     var mod = vqfLen%this.queryPanelColCount;
     var colSize = Math.floor(vqfLen/this.queryPanelColCount);
     colSize =  (mod>0&&colNr<=mod)?(colSize+1):colSize;
     idxStart =  Math.floor(vqfLen/this.queryPanelColCount)*(colNr-1) ;
     if (mod>0) {
        idxStart += (colNr>mod)?mod:(colNr-1);
      }
     idxStop = idxStart + colSize;
     idxStop = (idxStop<vqfLen)?idxStop:vqfLen ;
     for(var i = idxStart; i < idxStop; i++){
        colArr[colArr.length] = this.queryFields.get(this.queryFieldsVisible[i]);
     }
    return colArr;
  }


  ,getFieldValue: function(fieldName, rowIdx) {
      if (!Ext.isEmpty(rowIdx)) {
         return this.getStore().getAt(rowIdx).get(fieldName);
      } else {
        return this.getStore().getAt(this.getCurrentRowIndex()).get(fieldName);
      }
  }


  ,beforeCellEdit:function(e) {
    if (e.record.data._p_record_status == "insert") {
      if (!this.columnMap.get(e.field).insert_allowed) {e.cancel=true;}
    } else {
      if (!this.columnMap.get(e.field).update_allowed) {e.cancel=true;}
    }
  }


  ,onLoadProxy:function(proxy, obj, arg, result) {
    for (var i=0;i<result.records.length ; i++ )  {
      for (v in result.records[i].data) {
        if (Ext.type(result.records[i].get(v)) == 'string')
          result.records[i].set(v, urldecode(result.records[i].get(v) )) ;
      }
      result.records[i].commit();
    }
  }


  ,onLoadException:function(proxy,options,response,err) {
    if (!Ext.isEmpty(err)) {
      Ext.Msg.alert(err.name,err.message );
    } else {
       try{
        Ext.Msg.alert(response.statusText, urldecode(response.responseText) );
       } catch (e) {
          Ext.Msg.alert(e.name, e.message);
          throw e;
       }
    }
    return false;
  }




  ,exportXml:function() {
    this.exportList(_n21["DATA_FORMAT_XML"]);
  }
  ,exportPdf:function() {
    this.exportList(_n21["DATA_FORMAT_PDF"]);
  }
  ,exportHtml:function() {
    this.exportList(_n21["DATA_FORMAT_HTML"]);
  }
  ,exportCsv:function() {
    this.exportList(_n21["DATA_FORMAT_CSV"]);
  }
  ,exportList:function(pFormat) {
    
     var params = {};
     params[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName;
     var qf = this.queryFields;
     for(var i = 0, len = qf.keys.length; i < len; i++){
        if (qf.items[i].getValue() != undefined) {
           params['QRY_'+ qf.keys[i]] = qf.items[i].getValue();
        }
     }

     var cs = '';
     var csw = ''; //visible columns width
     var cnt=0;
     for(var i=0; i<this.getColumnModel().getColumnCount(); i++) {
       if(! this.getColumnModel().isHidden(i) ) {
          cs += (cnt>0)?",":"";
          cs += this.getColumnModel().getDataIndex(i);
          csw += (cnt>0)?",":"";
          csw += this.getColumnModel().getColumnWidth(i);
          cnt++;
       }
     }
     params[_n21["REQUEST_PARAM_EXPORT_COL_NAMES"]] = cs;
     params[_n21["REQUEST_PARAM_EXPORT_COL_WIDTHS"]] = csw;

     if (this.getStore().getSortState()) {
       params[_n21["REQUEST_PARAM_FETCH_SORT"]] = this.getStore().getSortState().field;
       params[_n21["REQUEST_PARAM_FETCH_SENSE"]] = this.getStore().getSortState().direction;
     }

     if (this.getView() instanceof Ext.grid.GroupingView) {
       if(this.getStore() instanceof Ext.data.GroupingStore && this.getStore().groupField !== false){
          params[_n21["REQUEST_PARAM_EXPORT_GROUPBY"]] = this.getStore().getGroupState();
       }
     }

     if (Ext.isEmpty(this.printWindow)) {
           this.printWindow = new Ext.ux.PrintWindow({params:params });
       }
     this.printWindow.show();
  }

  ,enterQuery:function() { 
     var qf = this.queryFields;
     for(var i = 0, len = qf.keys.length; i < len; i++){
        qf.items[i].setValue("");
     }
  }

   ,resetQuery: function() {
     var qf = this.queryFields;
     for(var i = 0, len = qf.keys.length; i < len; i++){
        qf.items[i].setValue(null);
     }
   }

   ,commitForm: function() {
      this.serverMessages = new Array();
      var x = this.store.getModifiedRecords();
      if (x.length>0) {Ext.MessageBox.wait("Saving your data ...");}
      for (var i=0;i<x.length;i++) { this.sentCommitRecCount++;
        var lo = x[i];
        var ld = new Object();
        if (lo.data._p_record_status == "insert") {_p_action=_n21["REQUEST_PARAM_ACTION_INSERT"];}  else {_p_action=_n21["REQUEST_PARAM_ACTION_UPDATE"];}
        for (var j=0;j<this.dataRecordMeta.prototype.fields.items.length;j++) {

           if (this.dataRecordMeta.prototype.fields.items[j].type == 'date' ) {
              var val = "";
              if (!Ext.isEmpty(lo.get(this.dataRecordMeta.prototype.fields.items[j].name)) )   {val = lo.get(this.dataRecordMeta.prototype.fields.items[j].name).format(this.dataRecordMeta.prototype.fields.items[j].dateFormat);}
              ld[this.dataRecordMeta.prototype.fields.items[j].name] = val;
             } else {
                ld[this.dataRecordMeta.prototype.fields.items[j].name] = lo.data[this.dataRecordMeta.prototype.fields.items[j].name];
             }
             //add the store's record id to identify record in callback
             ld[_n21["REQUEST_PARAM_TRANSPORT"]]=_n21["COLLECTION_RECORD_ID_TAG"]+"="+lo.id;
        }
        var baseUrlCfg = {};
        baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] =  _p_action;
        baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName;

        Ext.Ajax.request({
             params:ld
            ,method:"POST"
            ,callback:this.afterCommit
            ,scope:this
            ,url:buildUrl(baseUrlCfg)
        });
      }
   }



   ,afterCommit: function(options, success,response) {
      this.doneCommitRecCount++;

      if (!success) {
        try{
         this.serverMessages[this.serverMessages.length] =  response.responseText ;
       } catch (e) {
          this.serverMessages[this.serverMessages.length] =  e.message;
       }
      }else {
          var o = Ext.util.JSON.decode(response.responseText);
          if (!o.success) {
             this.serverMessages[this.serverMessages.length] =  urldecode(o.message);
          } else {
           var p = o[_n21["RECORD_JSON_ROOT_TAG"]];
           var opt = o[_n21["TRANSPORT_TAG"]];
           for (var j=0;j<this.dataRecordMeta.prototype.fields.items.length;j++) {
            // only those fields which exists in the returned result
             if (p.hasOwnProperty(this.dataRecordMeta.prototype.fields.items[j].name)) {
               if (this.dataRecordMeta.prototype.fields.items[j].type == 'date' ) {
                 this.getStore().getById(opt[_n21["COLLECTION_RECORD_ID_TAG"]]).set(this.dataRecordMeta.prototype.fields.items[j].name, Date.parseDate(urldecode(p[this.dataRecordMeta.prototype.fields.items[j].name]), this.dataRecordMeta.prototype.fields.items[j].dateFormat) );
               } else {
                  this.getStore().getById(opt[_n21["COLLECTION_RECORD_ID_TAG"]]).set(this.dataRecordMeta.prototype.fields.items[j].name,urldecode(p[this.dataRecordMeta.prototype.fields.items[j].name]) );
               }
             }
           }
           this.getStore().getById(opt[_n21["COLLECTION_RECORD_ID_TAG"]]).set("_p_record_status","");
           this.store.commitChanges();
         }

      }

      if (this.sentCommitRecCount==this.doneCommitRecCount) {
         this.sentCommitRecCount=0;
         this.doneCommitRecCount=0;
          Ext.MessageBox.hide();
          if (this.serverMessages.length>0) {
             var err = '';
             for (var x=0;x<this.serverMessages.length;x++ ) {
               err += '' + urldecode(this.serverMessages[0]) + '<br>' ;
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
            var cpValFrom = this.getColumnModel().config[i].copyValueFrom;
            var dc = cpValFrom.substring(0,cpValFrom.indexOf("."));
            var fld = cpValFrom.substring(cpValFrom.indexOf(".")+1);
            var val = Ext.getCmp(dc).getFieldValue(fld);
            newRecord.set(this.getColumnModel().config[i].dataIndex, val);
          }
     }
     this.store.add(newRecord);
     
      var baseUrlCfg = {};
      baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_INIT_RECORD"];
      baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName;

      Ext.Ajax.request({
          url: buildUrl(baseUrlCfg)
         ,success: this.afterCreateNewRecordSuccess
         ,failure: this.afterCreateNewRecordFailure
         ,scope:this
         ,params:newRecord.data
      });
  }


  ,afterCreateNewRecordSuccess:function(r,o) {

    var p = Ext.util.JSON.decode(r.responseText)[_n21["RECORD_JSON_ROOT_TAG"]];

    for (var i=0;i<this.dataRecordMeta.prototype.fields.items.length;i++) {
      if (this.dataRecordMeta.prototype.fields.items[i].name!='_p_record_status') {
         if (this.dataRecordMeta.prototype.fields.items[i].type == 'date' ) {
             this.getStore().getAt(this.getStore().getCount()-1).set(this.dataRecordMeta.prototype.fields.items[i].name, Date.parseDate(urldecode(p[this.dataRecordMeta.prototype.fields.items[i].name] ), this.dataRecordMeta.prototype.fields.items[i].dateFormat) );
           } else {
              this.getStore().getAt(this.getStore().getCount()-1).set(this.dataRecordMeta.prototype.fields.items[i].name,urldecode(p[this.dataRecordMeta.prototype.fields.items[i].name] ) );
           }
      }

      }
     if (this.firstFocusFieldNameInsert != null ) {
       this.startEditing(this.getStore().getCount()-1, this.getColumnModel().getIndexById(this.firstFocusFieldNameInsert) );
     }else if (this.firstFocusFieldName!= null ) {
       this.startEditing(this.getStore().getCount()-1, this.getColumnModel().getIndexById(this.firstFocusFieldName) );
     }
  }


  ,afterCreateNewRecordFailure:function(r,o) {

  }


  ,getSelectedRowPK: function() {
    var pk = new Object();
    var rowIdx = this.getSelectionModel().selection.cell[0];
    for(var i=0; i<this.recordPk.length; i++ ) {
      pk[this.recordPk[i]] = this.store.getAt(rowIdx).get(this.recordPk[i]);
    }
    return pk;
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
         this.stopEditing();
         var rowIdx = this.getSelectionModel().selection.cell[0];
         if (this.store.getAt(rowIdx).get("_p_record_status") == "insert") {
           this.getStore().remove( this.getSelectionModel().selection.record );
           this.getStore().commitChanges();
         }else{
            var baseUrlCfg = {};
            baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_DELETE"];
            baseUrlCfg[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName.replace('G','');

            Ext.Ajax.request({
              url: buildUrl(baseUrlCfg)
              ,success: this.afterExecuteDeleteSuccess
              ,failure: this.afterExecuteDeleteFailure
              ,scope:this
              ,params: this.getSelectedRowPK()
            });
          }
      }
   }


  ,afterExecuteDeleteSuccess: function(response,options) {
    var resp = Ext.decode(response.responseText);
    if (resp.success) {
      this.getStore().remove( this.getSelectionModel().selection.record );
      this.getStore().commitChanges();
    }else {
       if (resp.message) {
         Ext.Msg.alert('Error',urldecode(resp.message));
       } else {
         Ext.Msg.alert('Error','Error deleting this record with no message from server. Contact system administrator.');
       }
    }
  }


  ,afterExecuteDeleteFailure: function(response,options) {
    try{
        Ext.Msg.alert(response.statusText, urldecode(response.responseText) );
       } catch (e) {
          Ext.Msg.alert(e.name, e.message);
       }
   }



    ,executeQuery: function() {
       var p = new Object();
       var qf = this.queryFields;
       for(var i = 0, len = qf.keys.length; i < len; i++){
         if (qf.items[i] instanceof Ext.form.DateField  ) {
            if ( !Ext.isEmpty(qf.items[i].getValue() ) ) {
              p["QRY_"+qf.keys[i]] = qf.items[i].getValue().format(Ext.DATE_FORMAT);
            } else {
              p["QRY_"+qf.keys[i]] = "";
            }
          } else {
             p["QRY_"+qf.keys[i]] = qf.items[i].getValue();
          }
       }
       this.store.baseParams = p;
       this.store.load({callback:this.afterExecuteQuery,scope:this});
     }


  ,afterExecuteQuery: function(r,options,success) {

  }

   ,clearRecords:function() {
     this.getStore().removeAll();
   }

   ,setQueryFieldValue:function(fieldName, fieldValue) {
     this.queryFields.get(fieldName).setValue(fieldValue);
   }
});

 Ext.reg('N21GridEdit', N21.Base.GridEdit);