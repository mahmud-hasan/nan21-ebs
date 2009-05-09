
Ext.ns('Ext.ux');


Ext.ux.PrintWindow = Ext.extend(Ext.Window, {
   fields : new Ext.util.MixedCollection()
   ,defaultFormat: ""
   ,defaultLayout: ""
   ,params:null
  ,initComponent:function() {
     
     this.defaultFormat = _n21["DATA_FORMAT_PDF"];
     this.defaultLayout = _n21["PRINT_LAYOUT_V"];

     Ext.apply(this, arguments);

     this.fields.add("fld_print_format",new Ext.form.ComboBox({fieldLabel: "Format",allowBlank:false, selectOnFocus:true, width:100, store:[_n21["DATA_FORMAT_PDF"],_n21["DATA_FORMAT_HTML"],_n21["DATA_FORMAT_CSV"],_n21["DATA_FORMAT_XML"] ],value:this.defaultFormat}));
     this.fields.add("fld_print_layout",new Ext.form.ComboBox({fieldLabel: "Layout",allowBlank:false, selectOnFocus:true, width:100, store:[_n21["PRINT_LAYOUT_V"],_n21["PRINT_LAYOUT_H"] ],value:this.defaultLayout  }));

     Ext.apply(this, {
           items:[this.fields.get("fld_print_format"),this.fields.get("fld_print_layout")]
          ,layout:"form"
          ,closable: true
          ,closeAction: 'hide'
          ,title: "Print"
          ,width: 250
          ,height: 120
          ,modal: true
          ,labelAlign:"right"
          ,labelWidth:100
          ,buttons:[
             {xtype:"button",scope:this,text:"Print", handler:function() {this.executeTask()} }
          ]
       });

     Ext.ux.PrintWindow.superclass.initComponent.apply(this, arguments);
   }

  ,initEvents: function() {
    Ext.ux.PrintWindow.superclass.initEvents.call(this);
  }

  ,executeTask:function() {

      var baseUrlCfg = {};

      baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] =  _n21["REQUEST_PARAM_ACTION_EXPORT"];
      baseUrlCfg[_n21["REQUEST_PARAM_EXPORT_DATA_FORMAT"]] = this.fields.get("fld_print_format").getValue();
      baseUrlCfg[_n21["REQUEST_PARAM_PRINT_LAYOUT"]]       = this.fields.get("fld_print_layout").getValue();
       
      var v = window.open(buildUrl(baseUrlCfg)+'&'+Ext.urlEncode(this.params),'Export','adress=yes,width=710,height=450,scrollbars=yes,resizable=yes,menubar=yes');
      v.focus();
  }

});

// Ext.reg('PrintWindow', Ext.ux.PrintWindow);