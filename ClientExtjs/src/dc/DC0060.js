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
       
       this.queryFields.add("SORDER_ID",new Ext.form.Hidden({name:"QRY_SORDER_ID",id:"DC0060F_QRY_SORDER_ID",fieldLabel: this.resourceBundle.FieldLabel.SORDER_ID||"Bporder_id",allowBlank:true,width:100}));
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0060F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("LINE_NR",new Ext.form.Hidden({name:"QRY_LINE_NR",id:"DC0060F_QRY_LINE_NR",fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"Line_nr",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0060F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"QRY_PRODUCT_NAME",id:"DC0060F_QRY_PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0060F_QRY_PRODUCT_ID"},{column:"UOM_CODE",field:"DC0060F_QRY_UOM_CODE"}]}));
       this.queryFields.add("QTY_ORDERED",new Ext.form.NumberField({name:"QRY_QTY_ORDERED",id:"DC0060F_QRY_QTY_ORDERED",fieldLabel: this.resourceBundle.FieldLabel.QTY_ORDERED||"Requested qty.",allowBlank:true,width:100}));
       this.queryFields.add("UOM_CODE",new  N21.DataComp.LOV0002({name:"QRY_UOM_CODE",id:"DC0060F_QRY_UOM_CODE",fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"Uom",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("QTY",new Ext.form.NumberField({name:"QRY_QTY",id:"DC0060F_QRY_QTY",fieldLabel: this.resourceBundle.FieldLabel.QTY||"Actual qty",allowBlank:true,width:100}));
       this.queryFields.add("PRICE",new Ext.form.NumberField({name:"QRY_PRICE",id:"DC0060F_QRY_PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY_CODE",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY_CODE",id:"DC0060F_QRY_CURRENCY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("DISCOUNT",new Ext.form.NumberField({name:"QRY_DISCOUNT",id:"DC0060F_QRY_DISCOUNT",fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT||"Discount",allowBlank:true,width:100}));
       this.queryFields.add("DISCOUNT_TYPE",new Ext.form.Hidden({name:"QRY_DISCOUNT_TYPE",id:"DC0060F_QRY_DISCOUNT_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT_TYPE||"Discount type",allowBlank:true,width:100}));
       this.queryFields.add("RAW_NET_AMOUNT",new Ext.form.NumberField({name:"QRY_RAW_NET_AMOUNT",id:"DC0060F_QRY_RAW_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.RAW_NET_AMOUNT||"Raw net amount (no discount)",allowBlank:true,width:100}));
       this.queryFields.add("NET_AMOUNT",new Ext.form.NumberField({name:"QRY_NET_AMOUNT",id:"DC0060F_QRY_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",allowBlank:true,width:100}));
       this.queryFields.add("QTY_INVOICED",new Ext.form.NumberField({name:"QRY_QTY_INVOICED",id:"DC0060F_QRY_QTY_INVOICED",fieldLabel: this.resourceBundle.FieldLabel.QTY_INVOICED||"Invoiced qty.",allowBlank:true,width:100}));
       this.queryFields.add("QTY_DELIVERED",new Ext.form.NumberField({name:"QRY_QTY_DELIVERED",id:"DC0060F_QRY_QTY_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.QTY_DELIVERED||"Delivered qty.",allowBlank:true,width:100}));
       this.queryFields.add("QTY_RESERVED",new Ext.form.NumberField({name:"QRY_QTY_RESERVED",id:"DC0060F_QRY_QTY_RESERVED",fieldLabel: this.resourceBundle.FieldLabel.QTY_RESERVED||"Reserved qty",allowBlank:true,width:100}));
       this.queryFields.add("DATE_REQUESTED",new Ext.form.DateField({name:"QRY_DATE_REQUESTED",id:"DC0060F_QRY_DATE_REQUESTED",fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("DATE_PROMISED",new Ext.form.DateField({name:"QRY_DATE_PROMISED",id:"DC0060F_QRY_DATE_PROMISED",fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("DATE_DELIVERED",new Ext.form.DateField({name:"QRY_DATE_DELIVERED",id:"DC0060F_QRY_DATE_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDON",new Ext.form.DateField({name:"QRY_CREATEDON",id:"DC0060F_QRY_CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDBY",new Ext.form.TextField({name:"QRY_CREATEDBY",id:"DC0060F_QRY_CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",allowBlank:true,width:100}));
       this.queryFields.add("MODIFIEDON",new Ext.form.DateField({name:"QRY_MODIFIEDON",id:"DC0060F_QRY_MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("MODIFIEDBY",new Ext.form.TextField({name:"QRY_MODIFIEDBY",id:"DC0060F_QRY_MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",allowBlank:true,width:100}));
       this.queryFields.add("NOTES",new Ext.form.TextArea({name:"QRY_NOTES",id:"DC0060F_QRY_NOTES",labelSeparator: "",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "PRODUCT_NAME","QTY_ORDERED","UOM_CODE","QTY","PRICE","CURRENCY_CODE","DISCOUNT","RAW_NET_AMOUNT","NET_AMOUNT","QTY_INVOICED","QTY_DELIVERED","QTY_RESERVED","DATE_REQUESTED","DATE_PROMISED","DATE_DELIVERED","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY","NOTES" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0060"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0060"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
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
       this.fields.add("SORDER_ID",new Ext.form.Hidden({name:"SORDER_ID",id:"DC0060F_SORDER_ID",dataIndex:"SORDER_ID",fieldLabel: this.resourceBundle.FieldLabel.SORDER_ID||"Bporder_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0060F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("LINE_NR",new Ext.form.Hidden({name:"LINE_NR",id:"DC0060F_LINE_NR",dataIndex:"LINE_NR",fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"Line_nr",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODUCT_ID",new Ext.form.Hidden({name:"PRODUCT_ID",id:"DC0060F_PRODUCT_ID",dataIndex:"PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"PRODUCT_NAME",id:"DC0060F_PRODUCT_NAME",dataIndex:"PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",allowBlank:false,labelSeparator:":*",width:300,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0060F_PRODUCT_ID"},{column:"UOM_CODE",field:"DC0060F_UOM_CODE"}]}));
       this.fields.add("QTY_ORDERED",new Ext.form.NumberField({name:"QTY_ORDERED",id:"DC0060F_QTY_ORDERED",dataIndex:"QTY_ORDERED",fieldLabel: this.resourceBundle.FieldLabel.QTY_ORDERED||"Requested qty.",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2,listeners:{  "change":{scope:this, fn:this.change_QTY_ORDERED}  }}));
       this.fields.add("UOM_CODE",new  N21.DataComp.LOV0002({name:"UOM_CODE",id:"DC0060F_UOM_CODE",dataIndex:"UOM_CODE",fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"Uom",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("QTY",new Ext.form.NumberField({name:"QTY",id:"DC0060F_QTY",dataIndex:"QTY",fieldLabel: this.resourceBundle.FieldLabel.QTY||"Actual qty",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2,listeners:{  "change":{scope:this, fn:this.change_QTY}  }}));
       this.fields.add("PRICE",new Ext.form.NumberField({name:"PRICE",id:"DC0060F_PRICE",dataIndex:"PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2,listeners:{  "change":{scope:this, fn:this.change_PRICE}  }}));
       this.fields.add("CURRENCY_CODE",new  N21.DataComp.LOV0001({name:"CURRENCY_CODE",id:"DC0060F_CURRENCY_CODE",dataIndex:"CURRENCY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DISCOUNT",new Ext.form.NumberField({name:"DISCOUNT",id:"DC0060F_DISCOUNT",dataIndex:"DISCOUNT",fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT||"Discount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DISCOUNT_TYPE",new Ext.form.Hidden({name:"DISCOUNT_TYPE",id:"DC0060F_DISCOUNT_TYPE",dataIndex:"DISCOUNT_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DISCOUNT_TYPE||"Discount type",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("RAW_NET_AMOUNT",new Ext.form.NumberField({name:"RAW_NET_AMOUNT",id:"DC0060F_RAW_NET_AMOUNT",dataIndex:"RAW_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.RAW_NET_AMOUNT||"Raw net amount (no discount)",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("NET_AMOUNT",new Ext.form.NumberField({name:"NET_AMOUNT",id:"DC0060F_NET_AMOUNT",dataIndex:"NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("QTY_INVOICED",new Ext.form.NumberField({name:"QTY_INVOICED",id:"DC0060F_QTY_INVOICED",dataIndex:"QTY_INVOICED",fieldLabel: this.resourceBundle.FieldLabel.QTY_INVOICED||"Invoiced qty.",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("QTY_DELIVERED",new Ext.form.NumberField({name:"QTY_DELIVERED",id:"DC0060F_QTY_DELIVERED",dataIndex:"QTY_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.QTY_DELIVERED||"Delivered qty.",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("QTY_RESERVED",new Ext.form.NumberField({name:"QTY_RESERVED",id:"DC0060F_QTY_RESERVED",dataIndex:"QTY_RESERVED",fieldLabel: this.resourceBundle.FieldLabel.QTY_RESERVED||"Reserved qty",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DATE_REQUESTED",new Ext.form.DateField({name:"DATE_REQUESTED",id:"DC0060F_DATE_REQUESTED",dataIndex:"DATE_REQUESTED",fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("DATE_PROMISED",new Ext.form.DateField({name:"DATE_PROMISED",id:"DC0060F_DATE_PROMISED",dataIndex:"DATE_PROMISED",fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("DATE_DELIVERED",new Ext.form.DateField({name:"DATE_DELIVERED",id:"DC0060F_DATE_DELIVERED",dataIndex:"DATE_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0060F_NOTES",dataIndex:"NOTES",labelSeparator: "",allowBlank:true,width:200,height:50,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Notes||"Notes",border:true,labelWidth:80,labelAlign:"top",width:"300"   ,items:[ this.fields.get("NOTES")] });
       this.layoutItems.add("Terms",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Terms||"Terms",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("DATE_REQUESTED"),this.fields.get("DATE_PROMISED"),this.fields.get("DATE_DELIVERED")] });
       this.layoutItems.add("Quantities",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Quantities||"Quantities",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("QTY_INVOICED"),this.fields.get("QTY_DELIVERED"),this.fields.get("QTY_RESERVED")] });
       this.layoutItems.add("C2",
             { layout:"form",width:300,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Quantities"),this.layoutItems.get("Terms"),this.layoutItems.get("Notes")]
 }); 
       this.layoutItems.add("Price",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Price||"Price",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("PRICE"),this.fields.get("CURRENCY_CODE"),this.fields.get("DISCOUNT"),this.fields.get("DISCOUNT_TYPE"),this.fields.get("RAW_NET_AMOUNT"),this.fields.get("NET_AMOUNT")] });
       this.layoutItems.add("RequestQty",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.RequestQty||"RequestQty",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("ID"),this.fields.get("SORDER_ID"),this.fields.get("LINE_NR"),this.fields.get("QTY_ORDERED"),this.fields.get("UOM_CODE"),this.fields.get("QTY")] });
       this.layoutItems.add("C1",
             { layout:"form",width:360,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("RequestQty"),this.layoutItems.get("Price")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("C1"),this.layoutItems.get("C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.fields.get("PRODUCT_ID"),this.fields.get("PRODUCT_NAME")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2")]
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
               ,activeItem:1
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
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_LIST_EDITOR_MODE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_REFRESH_RECORD"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PREV_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEXT_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records in CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0060</span>"          )
        }); 

       N21.DataComp.DC0060.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0060", N21.DataComp.DC0060);



