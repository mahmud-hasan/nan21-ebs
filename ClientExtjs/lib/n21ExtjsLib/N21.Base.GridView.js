
Ext.ns('N21.Base');


N21.Base.GridView = Ext.extend(Ext.grid.GridPanel, {
   dataRecordMeta: null
  ,recordPk: new Array()
  ,DATE_FORMAT: 'd.m.Y'
  ,queryFields: new Array()
  ,queryWindow:null
  ,toolbarConfig: null
  ,hasQuickFilter:false
  ,summary:null
  ,queryPanelColCount:2
  ,queryFields: new Ext.util.MixedCollection()
  ,queryFieldsVisible: new Array()
  ,advfWdw: null //AdvancedFilter
  ,printWindow:null
  ,hasCurrencyUnitSelector: false // currencyUnitSelector: project specific
  ,initComponent:function() {

     this.store.paramNames = {
        "start" : _n21["REQUEST_PARAM_FETCH_START"],
        "limit" : _n21["REQUEST_PARAM_FETCH_SIZE"],
        "sort" : _n21["REQUEST_PARAM_FETCH_SORT"],
        "dir" : _n21["REQUEST_PARAM_FETCH_SENSE"]
    };


     Ext.apply(this, arguments);

     this.advfWdw = new Ext.ux.AdvancedFilter();


     if (this.queryArraySize != null && this.queryArraySize != -1) {
       this.bbar = new Ext.PagingToolbar({
           store:this.store
          ,displayInfo:true
          ,pageSize:20
          });
       this.bbar.paramNames = {
          "start" : _n21["REQUEST_PARAM_FETCH_START"],
          "limit" : _n21["REQUEST_PARAM_FETCH_SIZE"]
        };
     }


     if(this.queryPanelColCount > 0) {
         this.tbar = new Ext.Panel({
          autoScroll:true
         ,border:false
         ,bodyBorder :false
         ,frame:true
         ,layout:'table'
         ,layoutConfig: {columns: this.queryPanelColCount}
         ,bbar:((this.hasCurrencyUnitSelector)?new Ext.ux.CurrencyUnitSelector():null)
         ,defaults:{labelWidth:90, labelAlign:'right'}
         ,bodyStyle:'padding-top:5px;padding-bottom:5px;'
       });

       for (var i=1; i<=this.queryPanelColCount; i++) {
         this.tbar.add( {layout:'form',labelAlign:'right', bodyStyle:'border:0;',  items: this.getQueryFieldsForPanelCol(i)});
       }
       //  this.tbar.add( {xtype:'button', text:'Advanced', scope:this,handler: function() {this.showAdvancedFilter(); }  });


       if (!Ext.isEmpty(this.plugins) && !Ext.isEmpty(this.plugins[0])) {
         this.summary = this.plugins[0];
       }

     }


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

  ,showAdvancedFilter:function() {
     var x=1;
     this.advfWdw.show();

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




  ,getSelectedRowPK: function() {
    var pk = new Object();
    for(var i=0; i<this.recordPk.length; i++ ) {
      pk[this.recordPk[i]] = this.getSelectionModel().getSelected().get(this.recordPk[i]);
    }
    return pk;
  }


  ,onLoadProxy:function(proxy, obj, arg, result, response) {
                    // alert(response);
    if (this.getStore().reader instanceof Ext.data.JsonReader ) {
      var records = result[_n21["RECORDS_JSON_ROOT_TAG"]];
      for (var i=0;i<records.length; i++ )  {
        for (v in records[i].data) {
          if (Ext.type(records[i].get(v)) == 'string')
            records[i].set(v, urldecode(records[i].get(v) )) ;
        }
        records[i].commit();
      }

      if (this.summary != null ) {
        var rs = Ext.decode(response.responseText);
        if (!Ext.isEmpty(rs["summary"])) {
           this.summary.data = rs["summary"];
        }

      }
    }
  }
  ,onLoadStore:function() {
     this.getSelectionModel().selectFirstRow();
     this.getView().focusRow(0);
  }


  ,onLoadException:function(proxy,options,response,err) {
    if (!Ext.isEmpty(err)) {
      Ext.Msg.alert(err.name,err.message );
    } else {
       try{
        Ext.Msg.alert(response.statusText, urldecode(response.responseText));
       } catch (e) {
          Ext.Msg.alert(e.name, e.message);
          throw e;
       }
    }
    return false;
  }

  ,createNewRecord: function() {
    this.fireEvent('createNewRecord');
  }


  ,enterQuery:function() {
    if (this.queryFieldsVisible.length > 0 ) {
      this.queryFields.get(this.queryFieldsVisible[0]).focus();
    }
  }

  ,resetQuery: function() {
       for(var i=0;i<this.queryFields.length;i++) {
         this.queryWindow.findById(this.queryFields[i].id).setValue(null);
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
    if (success) {
       if (this.grid && this.store.getCount()>0) {
         this.getSelectionModel().selectFirstRow();
         this.getView().focusRow(0);
         this.fireEvent("executeQuerySuccess", this,this.store.getCount(), this.getSelectionModel().getSelected() );
       }
       else {
          this.fireEvent("executeQuerySuccess", this,this.store.getCount(), null );
       }
     }
  }
 

  ,clear_records:function() {
     this.getStore().removeAll();
   }

  ,setQueryFieldValue:function(fieldName, fieldValue) {
     this.queryFields.get(fieldName).setValue(fieldValue);
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
     params[_n21["REQUEST_PARAM_DC"]] =  this.dataComponentName.replace('G','');
     var qf = this.queryFields;
     for(var i = 0, len = qf.keys.length; i < len; i++){
        if (qf.items[i].getValue() != undefined) {
           params['QRY_'+ qf.keys[i]] = qf.items[i].getValue();
        }
     }

     var cs = '';  // visible columns
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
       }  else {
          this.printWindow.params =  params;
       }
     this.printWindow.show();

  }

   ,deleteRecord: function() {
    if ( this.getSelectionModel().getCount() < 1 ) {
      Ext.Msg.show({
          title:''
         ,msg: 'No records selected. Nothing to delete.'
         ,buttons: Ext.Msg.OK
        // ,fn: this.execute_delete
         ,icon: Ext.MessageBox.WARNING
      });
    } else {
      Ext.Msg.show({
         title:'Confirm delete'
         ,msg: 'Are you sure you want to delete this record?'
         ,buttons: Ext.Msg.YESNO
         ,fn: this.executeDelete
         ,scope:this
         ,icon: Ext.MessageBox.QUESTION
      });
    }
  }

 ,executeDelete: function(btn) {
      if (btn=='yes') {
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



  ,afterExecuteDeleteSuccess: function(response,options) {
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

  ,reSelectCurrent:function () {
     var crt = this.getSelectionModel().getSelected();
     this.getSelectionModel().clearSelections();
     this.getSelectionModel().selectRecords([crt]);
  }
});

 Ext.reg('N21GridView', N21.Base.GridView);