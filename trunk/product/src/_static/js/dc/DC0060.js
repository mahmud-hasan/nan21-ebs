/** 
 * Data Component: DC0060G, Title: Sales order lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0060G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"SORDER_ID", type:"float" }
         ,{name:"ID", type:"float" }
         ,{name:"LINE_NR", type:"float" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"QTY_ORDERED", type:"float" }
         ,{name:"UOM_CODE", type:"string" }
         ,{name:"QTY", type:"float" }
         ,{name:"PRICE", type:"float" }
         ,{name:"CURRENCY_CODE", type:"string" }
         ,{name:"DISCOUNT", type:"float" }
         ,{name:"DISCOUNT_TYPE", type:"string" }
         ,{name:"RAW_NET_AMOUNT", type:"float" }
         ,{name:"NET_AMOUNT", type:"float" }
         ,{name:"QTY_INVOICED", type:"float" }
         ,{name:"QTY_DELIVERED", type:"float" }
         ,{name:"QTY_RESERVED", type:"float" }
         ,{name:"DATE_REQUESTED", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DATE_PROMISED", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DATE_DELIVERED", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"NOTES", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("SORDER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_SORDER_ID",id:"DC0060_QRY_SORDER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.SORDER_ID||"Bporder_id"})  );
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0060_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("LINE_NR", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_LINE_NR",id:"DC0060_QRY_LINE_NR",width:100,fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"Line_nr"})  );
         this.queryFields.add("PRODUCT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PRODUCT_ID",id:"DC0060_QRY_PRODUCT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id"})  );
         this.queryFields.add("PRODUCT_NAME", new N21.DataComp.LOV0017({xtype: "LOV0017",fieldMapping: [{column:"ID",field:"DC0060_QRY_PRODUCT_ID"},{column:"UOM_CODE",field:"DC0060_QRY_UOM_CODE"}],selectOnFocus:true,name:"QRY_PRODUCT_NAME",id:"DC0060_QRY_PRODUCT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product"})  );
         this.queryFields.add("QTY_ORDERED", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QTY_ORDERED",id:"DC0060_QRY_QTY_ORDERED",width:100,fieldLabel: this.resourceBundle.FieldLabel.QTY_ORDERED||"Requested qty.",style: "text-align:right;"})  );
         this.queryFields.add("UOM_CODE", new N21.DataComp.LOV0002({xtype: "LOV0002",name:"QRY_UOM_CODE",id:"DC0060_QRY_UOM_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"Uom"})  );
         this.queryFields.add("QTY", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QTY",id:"DC0060_QRY_QTY",width:100,fieldLabel: this.resourceBundle.FieldLabel.QTY||"Actual qty",style: "text-align:right;"})  );
         this.queryFields.add("PRICE", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_PRICE",id:"DC0060_QRY_PRICE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",style: "text-align:right;"})  );
         this.queryFields.add("CURRENCY_CODE", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_CURRENCY_CODE",id:"DC0060_QRY_CURRENCY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency"})  );
         this.queryFields.add("DISCOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_DISCOUNT",id:"DC0060_QRY_DISCOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT||"Discount",style: "text-align:right;"})  );
         this.queryFields.add("DISCOUNT_TYPE", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_DISCOUNT_TYPE",id:"DC0060_QRY_DISCOUNT_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT_TYPE||"Discount type"})  );
         this.queryFields.add("RAW_NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_RAW_NET_AMOUNT",id:"DC0060_QRY_RAW_NET_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.RAW_NET_AMOUNT||"Raw net amount (no discount)",style: "text-align:right;"})  );
         this.queryFields.add("NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_NET_AMOUNT",id:"DC0060_QRY_NET_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",style: "text-align:right;"})  );
         this.queryFields.add("QTY_INVOICED", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QTY_INVOICED",id:"DC0060_QRY_QTY_INVOICED",width:100,fieldLabel: this.resourceBundle.FieldLabel.QTY_INVOICED||"Invoiced qty.",style: "text-align:right;"})  );
         this.queryFields.add("QTY_DELIVERED", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QTY_DELIVERED",id:"DC0060_QRY_QTY_DELIVERED",width:100,fieldLabel: this.resourceBundle.FieldLabel.QTY_DELIVERED||"Delivered qty.",style: "text-align:right;"})  );
         this.queryFields.add("QTY_RESERVED", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QTY_RESERVED",id:"DC0060_QRY_QTY_RESERVED",width:100,fieldLabel: this.resourceBundle.FieldLabel.QTY_RESERVED||"Reserved qty",style: "text-align:right;"})  );
         this.queryFields.add("DATE_REQUESTED", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DATE_REQUESTED",id:"DC0060_QRY_DATE_REQUESTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("DATE_PROMISED", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DATE_PROMISED",id:"DC0060_QRY_DATE_PROMISED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("DATE_DELIVERED", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DATE_DELIVERED",id:"DC0060_QRY_DATE_DELIVERED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"QRY_NOTES",id:"DC0060_QRY_NOTES",width:100,fieldLabel: "N/A"})  );
  
       this.queryFieldsVisible = [  "PRODUCT_NAME","QTY_ORDERED","UOM_CODE","QTY","PRICE","CURRENCY_CODE","DISCOUNT","RAW_NET_AMOUNT","NET_AMOUNT","QTY_INVOICED","QTY_DELIVERED","QTY_RESERVED","DATE_REQUESTED","DATE_PROMISED","DATE_DELIVERED","NOTES" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0060"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0060"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"SORDER_ID",header:this.resourceBundle.FieldLabel.SORDER_ID||"Bporder_id",width:100,dataIndex:'SORDER_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"LINE_NR",header:this.resourceBundle.FieldLabel.LINE_NR||"Line_nr",width:100,dataIndex:'LINE_NR',sortable:true}
              ,{ id:"PRODUCT_ID",header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",width:100,dataIndex:'PRODUCT_ID',hidden:true,sortable:true}
              ,{ id:"PRODUCT_NAME",header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",width:100,dataIndex:'PRODUCT_NAME',sortable:true}
              ,{ id:"QTY_ORDERED",header:this.resourceBundle.FieldLabel.QTY_ORDERED||"Requested qty.",width:100,dataIndex:'QTY_ORDERED',hidden:true,sortable:true,align:'right'}
              ,{ id:"UOM_CODE",header:this.resourceBundle.FieldLabel.UOM_CODE||"Uom",width:100,dataIndex:'UOM_CODE',sortable:true}
              ,{ id:"QTY",header:this.resourceBundle.FieldLabel.QTY||"Actual qty",width:100,dataIndex:'QTY',sortable:true,align:'right'}
              ,{ id:"PRICE",header:this.resourceBundle.FieldLabel.PRICE||"Price",width:100,dataIndex:'PRICE',sortable:true,align:'right'}
              ,{ id:"CURRENCY_CODE",header:this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",width:100,dataIndex:'CURRENCY_CODE',sortable:true}
              ,{ id:"DISCOUNT",header:this.resourceBundle.FieldLabel.DISCOUNT||"Discount",width:100,dataIndex:'DISCOUNT',hidden:true,sortable:true,align:'right'}
              ,{ id:"DISCOUNT_TYPE",header:this.resourceBundle.FieldLabel.DISCOUNT_TYPE||"Discount type",width:100,dataIndex:'DISCOUNT_TYPE',hidden:true,sortable:true}
              ,{ id:"RAW_NET_AMOUNT",header:this.resourceBundle.FieldLabel.RAW_NET_AMOUNT||"Raw net amount (no discount)",width:100,dataIndex:'RAW_NET_AMOUNT',hidden:true,sortable:true,align:'right'}
              ,{ id:"NET_AMOUNT",header:this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",width:100,dataIndex:'NET_AMOUNT',sortable:true,align:'right'}
              ,{ id:"QTY_INVOICED",header:this.resourceBundle.FieldLabel.QTY_INVOICED||"Invoiced qty.",width:100,dataIndex:'QTY_INVOICED',hidden:true,sortable:true,align:'right'}
              ,{ id:"QTY_DELIVERED",header:this.resourceBundle.FieldLabel.QTY_DELIVERED||"Delivered qty.",width:100,dataIndex:'QTY_DELIVERED',hidden:true,sortable:true,align:'right'}
              ,{ id:"QTY_RESERVED",header:this.resourceBundle.FieldLabel.QTY_RESERVED||"Reserved qty",width:100,dataIndex:'QTY_RESERVED',hidden:true,sortable:true,align:'right'}
              ,{ id:"DATE_REQUESTED",header:this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",width:100,dataIndex:'DATE_REQUESTED',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DATE_PROMISED",header:this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",width:100,dataIndex:'DATE_PROMISED',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DATE_DELIVERED",header:this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",width:100,dataIndex:'DATE_DELIVERED',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0060G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0060G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0060G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,SORDER_ID:""
              ,ID:""
              ,LINE_NR:""
              ,PRODUCT_ID:""
              ,PRODUCT_NAME:""
              ,QTY_ORDERED:""
              ,UOM_CODE:""
              ,QTY:""
              ,PRICE:""
              ,CURRENCY_CODE:""
              ,DISCOUNT:""
              ,DISCOUNT_TYPE:""
              ,RAW_NET_AMOUNT:""
              ,NET_AMOUNT:""
              ,QTY_INVOICED:""
              ,QTY_DELIVERED:""
              ,QTY_RESERVED:""
              ,DATE_REQUESTED:""
              ,DATE_PROMISED:""
              ,DATE_DELIVERED:""
              ,NOTES:""});
     }
  });
  Ext.reg("DC0060G", N21.DataComp.DC0060G);
/** 
 * Data Component: DC0060F, Title: Sales order lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0060F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0060G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("SORDER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"SORDER_ID",id:"DC0060F_SORDER_ID",dataIndex:"SORDER_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.SORDER_ID||"Bporder_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0060F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("LINE_NR", new Ext.form.Hidden ({xtype: "hidden",name:"LINE_NR",id:"DC0060F_LINE_NR",dataIndex:"LINE_NR",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"Line_nr",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRODUCT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PRODUCT_ID",id:"DC0060F_PRODUCT_ID",dataIndex:"PRODUCT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRODUCT_NAME", new N21.DataComp.LOV0017({xtype: "LOV0017",fieldMapping: [{column:"ID",field:"DC0060F_PRODUCT_ID"},{column:"UOM_CODE",field:"DC0060F_UOM_CODE"}],selectOnFocus:true,name:"PRODUCT_NAME",id:"DC0060F_PRODUCT_NAME",dataIndex:"PRODUCT_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",insert_allowed:true,update_allowed:true})   );
       this.fields.add("QTY_ORDERED", new Ext.form.NumberField ({xtype: "numberfield",name:"QTY_ORDERED",id:"DC0060F_QTY_ORDERED",dataIndex:"QTY_ORDERED",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.QTY_ORDERED||"Requested qty.",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;",listeners:{  "change":{scope:this, fn:this.change_QTY_ORDERED}  }})   );
       this.fields.add("UOM_CODE", new N21.DataComp.LOV0002({xtype: "LOV0002",selectOnFocus:true,name:"UOM_CODE",id:"DC0060F_UOM_CODE",dataIndex:"UOM_CODE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"Uom",insert_allowed:true,update_allowed:true})   );
       this.fields.add("QTY", new Ext.form.NumberField ({xtype: "numberfield",name:"QTY",id:"DC0060F_QTY",dataIndex:"QTY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.QTY||"Actual qty",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;",listeners:{  "change":{scope:this, fn:this.change_QTY}  }})   );
       this.fields.add("PRICE", new Ext.form.NumberField ({xtype: "numberfield",name:"PRICE",id:"DC0060F_PRICE",dataIndex:"PRICE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;",listeners:{  "change":{scope:this, fn:this.change_PRICE}  }})   );
       this.fields.add("CURRENCY_CODE", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"CURRENCY_CODE",id:"DC0060F_CURRENCY_CODE",dataIndex:"CURRENCY_CODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DISCOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"DISCOUNT",id:"DC0060F_DISCOUNT",dataIndex:"DISCOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT||"Discount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("DISCOUNT_TYPE", new Ext.form.Hidden ({xtype: "hidden",name:"DISCOUNT_TYPE",id:"DC0060F_DISCOUNT_TYPE",dataIndex:"DISCOUNT_TYPE",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT_TYPE||"Discount type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RAW_NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"RAW_NET_AMOUNT",id:"DC0060F_RAW_NET_AMOUNT",dataIndex:"RAW_NET_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.RAW_NET_AMOUNT||"Raw net amount (no discount)",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"NET_AMOUNT",id:"DC0060F_NET_AMOUNT",dataIndex:"NET_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("QTY_INVOICED", new Ext.form.NumberField ({xtype: "numberfield",name:"QTY_INVOICED",id:"DC0060F_QTY_INVOICED",dataIndex:"QTY_INVOICED",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.QTY_INVOICED||"Invoiced qty.",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("QTY_DELIVERED", new Ext.form.NumberField ({xtype: "numberfield",name:"QTY_DELIVERED",id:"DC0060F_QTY_DELIVERED",dataIndex:"QTY_DELIVERED",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.QTY_DELIVERED||"Delivered qty.",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("QTY_RESERVED", new Ext.form.NumberField ({xtype: "numberfield",name:"QTY_RESERVED",id:"DC0060F_QTY_RESERVED",dataIndex:"QTY_RESERVED",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.QTY_RESERVED||"Reserved qty",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("DATE_REQUESTED", new Ext.form.DateField ({xtype: "datefield",name:"DATE_REQUESTED",id:"DC0060F_DATE_REQUESTED",dataIndex:"DATE_REQUESTED",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("DATE_PROMISED", new Ext.form.DateField ({xtype: "datefield",name:"DATE_PROMISED",id:"DC0060F_DATE_PROMISED",dataIndex:"DATE_PROMISED",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("DATE_DELIVERED", new Ext.form.DateField ({xtype: "datefield",name:"DATE_DELIVERED",id:"DC0060F_DATE_DELIVERED",dataIndex:"DATE_DELIVERED",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0060F_NOTES",dataIndex:"NOTES",width:200,height:50,allowBlank:true,labelSeparator: "",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("Notes",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Notes||"Notes",autoHeight:true,collapsible: true,labelWidth:1,width:"90%",items:[ this.fields.get("NOTES")]});
       this.layoutItems.add("Terms",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Terms||"Terms",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("DATE_REQUESTED"),this.fields.get("DATE_PROMISED"),this.fields.get("DATE_DELIVERED")]});
       this.layoutItems.add("Quantity",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Quantity||"Quantity",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("QTY_INVOICED"),this.fields.get("QTY_DELIVERED"),this.fields.get("QTY_RESERVED")]});
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.4, items:[ this.layoutItems.get("Quantity"),this.layoutItems.get("Terms"),this.layoutItems.get("Notes")]}); 
       this.layoutItems.add("Price",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Price||"Price",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("PRICE"),this.fields.get("CURRENCY_CODE"),this.fields.get("DISCOUNT"),this.fields.get("DISCOUNT_TYPE"),this.fields.get("RAW_NET_AMOUNT"),this.fields.get("NET_AMOUNT")]});
       this.layoutItems.add("Product",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Product||"Product",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("ID"),this.fields.get("SORDER_ID"),this.fields.get("LINE_NR"),this.fields.get("PRODUCT_ID"),this.fields.get("PRODUCT_NAME"),this.fields.get("QTY_ORDERED"),this.fields.get("UOM_CODE"),this.fields.get("QTY")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.6, items:[ this.layoutItems.get("Product"),this.layoutItems.get("Price")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0060F"
          ,firstFocusFieldName:"PRODUCT_NAME"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0060F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0060F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,SORDER_ID:""
              ,ID:""
              ,LINE_NR:""
              ,PRODUCT_ID:""
              ,PRODUCT_NAME:""
              ,QTY_ORDERED:""
              ,UOM_CODE:""
              ,QTY:""
              ,PRICE:""
              ,CURRENCY_CODE:""
              ,DISCOUNT:""
              ,DISCOUNT_TYPE:""
              ,RAW_NET_AMOUNT:""
              ,NET_AMOUNT:""
              ,QTY_INVOICED:""
              ,QTY_DELIVERED:""
              ,QTY_RESERVED:""
              ,DATE_REQUESTED:""
              ,DATE_PROMISED:""
              ,DATE_DELIVERED:""
              ,NOTES:""});
     }

  ,change_PRICE:function(fld, newVal, oldVal) {
      this.calcRawNetAmount();
  this.calcNetAmount();
   }

  ,change_QTY:function(fld, newVal, oldVal) {
      this.calcRawNetAmount();
  this.calcNetAmount();
   }

  ,change_QTY_ORDERED:function(fld, newVal, oldVal) {
    if  (Ext.isEmpty( this.getFieldValue("QTY") )) {
  this.setFieldValue("QTY", newVal ); 

}
   }

  ,calcNetAmount:function() {
      if (!Ext.isEmpty(this.getFieldValue("PRICE") ) 
        && !Ext.isEmpty(this.getFieldValue("QTY") ) ) {
     this.setFieldValue("NET_AMOUNT", this.getFieldValue("PRICE") * this.getFieldValue("QTY"));
  }

   }

  ,calcRawNetAmount:function() {
      if (!Ext.isEmpty(this.getFieldValue("PRICE") ) 
        && !Ext.isEmpty(this.getFieldValue("QTY") ) ) {
     this.setFieldValue("RAW_NET_AMOUNT", this.getFieldValue("PRICE") * this.getFieldValue("QTY"));
  }

   }


  });
  Ext.reg("DC0060F", N21.DataComp.DC0060F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0060
 * Title: Sales order lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0060 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0060"
          ,masterName:"DC0060G"
          ,detailName:"DC0060F"
          ,mdLayout:"card"
          ,border: false
          ,items: [
              {
                xtype:"panel"
               ,layout:"card"
               ,id:"MDTab"
               ,region:"center"
               ,defaults:{layout:"fit"}
               ,activeItem:0
               ,tabPosition: "bottom"
               ,items: [{
                            xtype: "DC0060G"
                           ,id: "DC0060G"
                           ,height:350
                       },{
                           xtype:"DC0060F"
                          ,id:"DC0060F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_66"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_73"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_68"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_65"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_67"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_72"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_70"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_69"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_71"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0060.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0060", N21.DataComp.DC0060);



