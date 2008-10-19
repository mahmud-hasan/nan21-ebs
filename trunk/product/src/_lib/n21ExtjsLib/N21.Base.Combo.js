
Ext.ns('N21.Base');

N21.Base.Combo = Ext.extend(Ext.form.ComboBox, {

   dataComponentName:null
  ,isStoreLoaded:false

     /*column from store which is displayed in combo and dropdown */
  ,displayColumn: null

     /* specify which columns to be returned in other fields or grid columns.  */
  ,fieldMapping:[]
     /* specify where to get the parameter values from */
  ,paramMapping:[]

     /* if the combo is a cell editor in a grid, this is the grid */
  ,callFromGrid: null
     /* row number where the combo is editing */
  ,callFromGridRow:null

  ,initComponent:function() {
     Ext.apply(this, arguments);
     this.displayField = this.displayColumn;
     N21.Base.Combo.superclass.initComponent.apply(this, arguments);
  }

  ,initEvents: function() {
    N21.Base.Combo.superclass.initEvents.call(this);
    this.on('select', this.onSelectValue, this);
    this.on('focus', this.onFocus, this);
    this.store.proxy.on('loadexception', this.onLoadException, this);
  }


  ,onLoadException:function(proxy,options,response,error) {
      if (!response.responseText) {
        Ext.Msg.alert('Error', 'Network failure. Communication with server lost.');
      }
      else {
        Ext.Msg.alert('Error', this.urldecode(Ext.decode(response.responseText).message));
      }

  }

 ,onSelectValue: function (cbo, rec, idx ) {
    if (this.fieldMapping.length > 0  ) {
        for (var i=0;i<this.fieldMapping.length;i++ ) {
          if (this.callFromGrid) {
            this.callFromGrid.store.getAt(this.callFromGridRow).set( this.fieldMapping[i].field ,rec.get(this.fieldMapping[i].column) )  ;
          }
          else {
            Ext.getCmp(this.fieldMapping[i].field).setValue( rec.get(this.fieldMapping[i].column) );
            Ext.getCmp(this.fieldMapping[i].field).fireEvent( "change");
          }
        }
    }
  }


  ,onFocus: function () {
    if (!Ext.isEmpty(this.callFromGrid)) {
       this.callFromGridRow = this.callFromGrid.getSelectionModel().selection.cell[0];
     }
    var newParamVal;
    var oldParamVal;
    for (var i=0;i<this.paramMapping.length;i++) {
      if (this.callFromGrid) { 
        newParamVal = (!Ext.isEmpty(this.paramMapping[i].field))? this.callFromGrid.store.getAt(this.callFromGridRow).get( this.paramMapping[i].field ):this.paramMapping[i].value ;
      } else {
        newParamVal = (!Ext.isEmpty(this.paramMapping[i].field))?Ext.getCmp(this.paramMapping[i].field).getValue():this.paramMapping[i].value;
      }
      oldParamVal = this.store.baseParams[this.paramMapping[i].param];
      if (newParamVal != oldParamVal) {
            this.store.baseParams[this.paramMapping[i].param] = newParamVal;
            this.isStoreLoaded = false;
         }
    }
    if (!this.isStoreLoaded) {
      this.store.load({callback:this.afterLoad,scope:this});
      return false;
    } else {
      N21.Base.Combo.superclass.onFocus.apply(this, arguments);
    }
  }
  ,onBlur: function () {
    if (!this.getRawValue()) {
      if (this.fieldMapping.length > 0  ) {
        for (var i=0;i<this.fieldMapping.length;i++ ) {
          if (this.callFromGrid) {
            this.callFromGrid.store.getAt(this.callFromGridRow).set( this.fieldMapping[i].field ,"" )  ;
          } else {
            Ext.getCmp(this.fieldMapping[i].field).setValue( "" );
            Ext.getCmp(this.fieldMapping[i].field).fireEvent( "change");
          }
        }
      }
    }
    N21.Base.Combo.superclass.onBlur.apply(this, arguments);
  
  }

  ,afterLoad: function(records, options, success) {
     this.isStoreLoaded = true;
     if (success) {
       this.isStoreLoaded = true;
     } else {
       return false;
     }
  }

  ,setParamValue:function(paramName, paramValue) {  //alert('in BaseCombo.setParamValue'+ paramName +' '+paramValue);
    this.store.baseParams[paramName] = paramValue;
    this.isStoreLoaded = false;
    this.store.removeAll()
  }

  ,urldecode: function ( str ) {
    var ret = str;
    ret = ret.replace(/\+/g, "%20");
    ret = decodeURIComponent(ret);
    ret = ret.toString();
    return ret;
  }


});
Ext.reg('N21Combo', N21.Base.Combo);