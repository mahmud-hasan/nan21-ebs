
Ext.ns('Ext.ux');


Ext.ux.CurrencyUnitSelector = Ext.extend(Ext.Panel, {
    fields : new Ext.util.MixedCollection()
   ,defaultCurrency: "EUR"
   ,defaultUnit: "LT"
   ,params:null
   ,initComponent:function() {

     Ext.apply(this, arguments);

     this.fields.add("lblCurrency",new Ext.form.Label({text: "Currency",style:"font-size:10pt"}));
     this.fields.add("lblUnit",new Ext.form.Label({text: "Unit",style:"font-size:9pt"}));

     this.fields.add("currency",new Ext.form.ComboBox({ allowBlank:false, selectOnFocus:true, width:100, store:["EUR","USD","RON"],value:this.defaultCurrency}));
     this.fields.add("unit",new Ext.form.ComboBox({ allowBlank:false, selectOnFocus:true, width:100, store:["LT","M3"],value:this.defaultUnit }));

     this.addEvents('selectionChanged');

     this.fields.get("currency").on('select', this.selectionChanged);
     this.fields.get("unit").on('unit', this.selectionChanged);

     Ext.apply(this, {
           items:[this.fields.get("lblCurrency"),this.fields.get("currency"),{},this.fields.get("lblUnit"),this.fields.get("unit")]
          ,layout:"table"
          ,labelAlign:"right"
          ,bodyStyle:"padding:5px"
          ,defaults: {bodyStyle:'margin:4px;padding:5px;border:0'}
          ,layoutConfig: { columns: 5 }
          ,labelWidth:100
       });

     Ext.ux.CurrencyUnitSelector.superclass.initComponent.apply(this, arguments);
   }

  ,initEvents: function() {
    Ext.ux.CurrencyUnitSelector.superclass.initEvents.call(this);
  }

  ,getCurrency: function() {}
  ,getUnit: function() {}

  ,selectionChanged:function() {
     var p = {
        currency:this.fields.get("currency").getValue()
       ,unit:this.fields.get("unit").getValue()
     }
     this.fireEvent("selectionChanged",p);
  }

});

 Ext.reg('CurrencyUnitSelector', Ext.ux.CurrencyUnitSelector);