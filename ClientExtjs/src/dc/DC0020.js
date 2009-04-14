/** 
 * Data Component: DC0020G, Title: Issued invoice items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0020G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"IINV_ID", type:"float" }
         ,{name:"ID", type:"float" }
         ,{name:"PROD_ID", type:"float" }
         ,{name:"PROD_CODE", type:"string" }
         ,{name:"PROD_NAME", type:"string" }
         ,{name:"QUANTITY", type:"float" }
         ,{name:"QUANTITY_UNIT", type:"string" }
         ,{name:"ORIG_PRICE", type:"float" }
         ,{name:"ORIG_CURRENCY", type:"string" }
         ,{name:"CURRENCY_XRATE", type:"float" }
         ,{name:"PRICE", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"NET_AMOUNT", type:"float" }
         ,{name:"TAX_NAME", type:"string" }
         ,{name:"TAX_RATE", type:"float" }
         ,{name:"TAX_ID", type:"float" }
         ,{name:"TAX_AMOUNT", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"IINVITEM_ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("IINV_ID",new Ext.form.Hidden({name:"QRY_IINV_ID",id:"DC0020F_QRY_IINV_ID",fieldLabel: this.resourceBundle.FieldLabel.IINV_ID||"Inv_id",allowBlank:true,width:100}));
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0020F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("PROD_CODE",new  N21.DataComp.LOV0017({name:"QRY_PROD_CODE",id:"DC0020F_QRY_PROD_CODE",fieldLabel: this.resourceBundle.FieldLabel.PROD_CODE||"Prod. Code",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0020F_QRY_PROD_ID"},{column:"NAME",field:"DC0020F_QRY_PROD_NAME"}],displayColumn: "CODE"}));
       this.queryFields.add("PROD_ID",new Ext.form.Hidden({name:"QRY_PROD_ID",id:"DC0020F_QRY_PROD_ID",fieldLabel: this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",allowBlank:true,width:100}));
       this.queryFields.add("PROD_NAME",new Ext.form.TextField({name:"QRY_PROD_NAME",id:"DC0020F_QRY_PROD_NAME",fieldLabel: this.resourceBundle.FieldLabel.PROD_NAME||"Prod. Name",allowBlank:true,width:100}));
       this.queryFields.add("QUANTITY",new Ext.form.NumberField({name:"QRY_QUANTITY",id:"DC0020F_QRY_QUANTITY",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY||"Quantity",allowBlank:true,width:100}));
       this.queryFields.add("QUANTITY_UNIT",new  N21.DataComp.LOV0002({name:"QRY_QUANTITY_UNIT",id:"DC0020F_QRY_QUANTITY_UNIT",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY_UNIT||"Quantity_unit",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,displayColumn: "CODE"}));
       this.queryFields.add("ORIG_PRICE",new Ext.form.NumberField({name:"QRY_ORIG_PRICE",id:"DC0020F_QRY_ORIG_PRICE",fieldLabel: this.resourceBundle.FieldLabel.ORIG_PRICE||"Orig_price",allowBlank:true,width:100}));
       this.queryFields.add("ORIG_CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_ORIG_CURRENCY",id:"DC0020F_QRY_ORIG_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_price_currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("CURRENCY_XRATE",new Ext.form.NumberField({name:"QRY_CURRENCY_XRATE",id:"DC0020F_QRY_CURRENCY_XRATE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",allowBlank:true,width:100}));
       this.queryFields.add("PRICE",new Ext.form.NumberField({name:"QRY_PRICE",id:"DC0020F_QRY_PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Unit Price",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY",id:"DC0020F_QRY_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("NET_AMOUNT",new Ext.form.NumberField({name:"QRY_NET_AMOUNT",id:"DC0020F_QRY_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",allowBlank:true,width:100}));
       this.queryFields.add("TAX_ID",new Ext.form.Hidden({name:"QRY_TAX_ID",id:"DC0020F_QRY_TAX_ID",fieldLabel: this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",allowBlank:true,width:100}));
       this.queryFields.add("TAX_RATE",new Ext.form.Hidden({name:"QRY_TAX_RATE",id:"DC0020F_QRY_TAX_RATE",fieldLabel: this.resourceBundle.FieldLabel.TAX_RATE||"Vat_rate",allowBlank:true,width:100}));
       this.queryFields.add("TAX_NAME",new  N21.DataComp.LOV0024({name:"QRY_TAX_NAME",id:"DC0020F_QRY_TAX_NAME",fieldLabel: this.resourceBundle.FieldLabel.TAX_NAME||"Tax",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"VALUE",field:"DC0020F_QRY_TAX_RATE"},{column:"ID",field:"DC0020F_QRY_TAX_ID"}],displayColumn: "NAME"}));
       this.queryFields.add("TAX_AMOUNT",new Ext.form.NumberField({name:"QRY_TAX_AMOUNT",id:"DC0020F_QRY_TAX_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT||"Vat_amount",allowBlank:true,width:100}));
       this.queryFields.add("NOTES",new Ext.form.TextArea({name:"QRY_NOTES",id:"DC0020F_QRY_NOTES",labelSeparator: "",allowBlank:true,width:100}));
       this.queryFields.add("LINE_NO",new Ext.form.TextField({name:"QRY_LINE_NO",id:"DC0020F_QRY_LINE_NO",fieldLabel: this.resourceBundle.FieldLabel.LINE_NO||"Line_no",allowBlank:true,width:100}));
       this.queryFields.add("CREATEDON",new Ext.form.DateField({name:"QRY_CREATEDON",id:"DC0020F_QRY_CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDBY",new Ext.form.TextField({name:"QRY_CREATEDBY",id:"DC0020F_QRY_CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:100}));
       this.queryFields.add("MODIFIEDON",new Ext.form.DateField({name:"QRY_MODIFIEDON",id:"DC0020F_QRY_MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("MODIFIEDBY",new Ext.form.TextField({name:"QRY_MODIFIEDBY",id:"DC0020F_QRY_MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:100}));
       this.queryFields.add("IINVITEM_ID",new Ext.form.Hidden({name:"QRY_IINVITEM_ID",id:"DC0020F_QRY_IINVITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.IINVITEM_ID||"Invitem_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "PROD_CODE","PROD_NAME","QUANTITY","QUANTITY_UNIT","ORIG_PRICE","ORIG_CURRENCY","CURRENCY_XRATE","PRICE","CURRENCY","NET_AMOUNT","TAX_NAME","TAX_AMOUNT","NOTES","LINE_NO","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0020"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0020"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"IINV_ID",header:this.resourceBundle.FieldLabel.IINV_ID||"Inv_id",width:100,dataIndex:'IINV_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROD_ID",header:this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",width:100,dataIndex:'PROD_ID',hidden:true,sortable:true}
              ,{ id:"PROD_CODE",header:this.resourceBundle.FieldLabel.PROD_CODE||"Prod. Code",width:100,dataIndex:'PROD_CODE',hidden:true,sortable:true}
              ,{ id:"PROD_NAME",header:this.resourceBundle.FieldLabel.PROD_NAME||"Prod. Name",width:100,dataIndex:'PROD_NAME',sortable:true}
              ,{ id:"QUANTITY",header:this.resourceBundle.FieldLabel.QUANTITY||"Quantity",width:100,dataIndex:'QUANTITY',sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"QUANTITY_UNIT",header:this.resourceBundle.FieldLabel.QUANTITY_UNIT||"Quantity_unit",width:100,dataIndex:'QUANTITY_UNIT',sortable:true}
              ,{ id:"ORIG_PRICE",header:this.resourceBundle.FieldLabel.ORIG_PRICE||"Orig_price",width:100,dataIndex:'ORIG_PRICE',hidden:true,sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"ORIG_CURRENCY",header:this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_price_currency",width:100,dataIndex:'ORIG_CURRENCY',hidden:true,sortable:true}
              ,{ id:"CURRENCY_XRATE",header:this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",width:100,dataIndex:'CURRENCY_XRATE',hidden:true,sortable:true,align:'right',decimalPrecision:6}
              ,{ id:"PRICE",header:this.resourceBundle.FieldLabel.PRICE||"Unit Price",width:100,dataIndex:'PRICE',sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',hidden:true,sortable:true}
              ,{ id:"NET_AMOUNT",header:this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",width:100,dataIndex:'NET_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TAX_NAME",header:this.resourceBundle.FieldLabel.TAX_NAME||"Tax",width:100,dataIndex:'TAX_NAME',sortable:true}
              ,{ id:"TAX_RATE",header:this.resourceBundle.FieldLabel.TAX_RATE||"Vat_rate",width:100,dataIndex:'TAX_RATE',hidden:true,sortable:true}
              ,{ id:"TAX_ID",header:this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",width:100,dataIndex:'TAX_ID',hidden:true,sortable:true}
              ,{ id:"TAX_AMOUNT",header:this.resourceBundle.FieldLabel.TAX_AMOUNT||"Vat_amount",width:100,dataIndex:'TAX_AMOUNT',sortable:true,align:'right'}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"IINVITEM_ID",header:this.resourceBundle.FieldLabel.IINVITEM_ID||"Invitem_id",width:100,dataIndex:'IINVITEM_ID',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0020G"
          ,queryArraySize:20
          ,toolbarConfig:['NEW','DELETE']
        });
       N21.DataComp.DC0020G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0020G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,IINV_ID:""
              ,ID:""
              ,PROD_ID:""
              ,PROD_CODE:""
              ,PROD_NAME:""
              ,QUANTITY:""
              ,QUANTITY_UNIT:""
              ,ORIG_PRICE:""
              ,ORIG_CURRENCY:""
              ,CURRENCY_XRATE:""
              ,PRICE:""
              ,CURRENCY:""
              ,NET_AMOUNT:""
              ,TAX_NAME:""
              ,TAX_RATE:""
              ,TAX_ID:""
              ,TAX_AMOUNT:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IINVITEM_ID:""});
     }
  });
  Ext.reg("DC0020G", N21.DataComp.DC0020G);
/** 
 * Data Component: DC0020F, Title: Issued invoice items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0020F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0020G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("IINV_ID",new Ext.form.Hidden({name:"IINV_ID",id:"DC0020F_IINV_ID",dataIndex:"IINV_ID",fieldLabel: this.resourceBundle.FieldLabel.IINV_ID||"Inv_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,copyValueFrom:"DC0004F_ID"}));
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0020F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PROD_CODE",new  N21.DataComp.LOV0017({name:"PROD_CODE",id:"DC0020F_PROD_CODE",dataIndex:"PROD_CODE",fieldLabel: this.resourceBundle.FieldLabel.PROD_CODE||"Prod. Code",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0020F_PROD_ID"},{column:"NAME",field:"DC0020F_PROD_NAME"}],displayColumn: "CODE"}));
       this.fields.add("PROD_ID",new Ext.form.Hidden({name:"PROD_ID",id:"DC0020F_PROD_ID",dataIndex:"PROD_ID",fieldLabel: this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PROD_NAME",new Ext.form.TextField({name:"PROD_NAME",id:"DC0020F_PROD_NAME",dataIndex:"PROD_NAME",fieldLabel: this.resourceBundle.FieldLabel.PROD_NAME||"Prod. Name",allowBlank:false,labelSeparator:":*",width:250,insert_allowed:true,update_allowed:true}));
       this.fields.add("QUANTITY",new Ext.form.NumberField({name:"QUANTITY",id:"DC0020F_QUANTITY",dataIndex:"QUANTITY",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY||"Quantity",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:4,listeners:{  "change":{scope:this, fn:this.change_QUANTITY}  }}));
       this.fields.add("QUANTITY_UNIT",new  N21.DataComp.LOV0002({name:"QUANTITY_UNIT",id:"DC0020F_QUANTITY_UNIT",dataIndex:"QUANTITY_UNIT",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY_UNIT||"Quantity_unit",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,displayColumn: "CODE"}));
       this.fields.add("ORIG_PRICE",new Ext.form.NumberField({name:"ORIG_PRICE",id:"DC0020F_ORIG_PRICE",dataIndex:"ORIG_PRICE",fieldLabel: this.resourceBundle.FieldLabel.ORIG_PRICE||"Orig_price",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:4}));
       this.fields.add("ORIG_CURRENCY",new  N21.DataComp.LOV0001({name:"ORIG_CURRENCY",id:"DC0020F_ORIG_CURRENCY",dataIndex:"ORIG_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_price_currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("CURRENCY_XRATE",new Ext.form.NumberField({name:"CURRENCY_XRATE",id:"DC0020F_CURRENCY_XRATE",dataIndex:"CURRENCY_XRATE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:6,listeners:{  "change":{scope:this, fn:this.change_CURRENCY_XRATE}  }}));
       this.fields.add("PRICE",new Ext.form.NumberField({name:"PRICE",id:"DC0020F_PRICE",dataIndex:"PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Unit Price",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:4,listeners:{  "change":{scope:this, fn:this.change_PRICE}  }}));
       this.fields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"CURRENCY",id:"DC0020F_CURRENCY",dataIndex:"CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,copyValueFrom:"DC0004F_DOC_CURRENCY",selectOnFocus:true}));
       this.fields.add("NET_AMOUNT",new Ext.form.NumberField({name:"NET_AMOUNT",id:"DC0020F_NET_AMOUNT",dataIndex:"NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",fieldClass: "field_important_1",decimalPrecision:2,listeners:{  "change":{scope:this, fn:this.change_NET_AMOUNT}  }}));
       this.fields.add("TAX_ID",new Ext.form.Hidden({name:"TAX_ID",id:"DC0020F_TAX_ID",dataIndex:"TAX_ID",fieldLabel: this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("TAX_NAME",new  N21.DataComp.LOV0024({name:"TAX_NAME",id:"DC0020F_TAX_NAME",dataIndex:"TAX_NAME",fieldLabel: this.resourceBundle.FieldLabel.TAX_NAME||"Tax",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"VALUE",field:"DC0020F_TAX_RATE"},{column:"ID",field:"DC0020F_TAX_ID"}],displayColumn: "NAME"}));
       this.fields.add("TAX_RATE",new Ext.form.Hidden({name:"TAX_RATE",id:"DC0020F_TAX_RATE",dataIndex:"TAX_RATE",fieldLabel: this.resourceBundle.FieldLabel.TAX_RATE||"Vat_rate",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_TAX_RATE}  }}));
       this.fields.add("TAX_AMOUNT",new Ext.form.NumberField({name:"TAX_AMOUNT",id:"DC0020F_TAX_AMOUNT",dataIndex:"TAX_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT||"Vat_amount",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0020F_NOTES",dataIndex:"NOTES",labelSeparator: "",allowBlank:true,width:250,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IINVITEM_ID",new Ext.form.Hidden({name:"IINVITEM_ID",id:"DC0020F_IINVITEM_ID",dataIndex:"IINVITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.IINVITEM_ID||"Invitem_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("Cost",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Cost||"Cost",border:true,labelWidth:80,labelAlign:"left",width:"280"   ,items:[ this.fields.get("PRICE"),this.fields.get("CURRENCY"),this.fields.get("NET_AMOUNT"),this.fields.get("TAX_ID"),this.fields.get("TAX_NAME"),this.fields.get("TAX_RATE"),this.fields.get("TAX_AMOUNT")] });
       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Notes||"Notes",border:true,labelWidth:80,labelAlign:"top",width:"280"   ,items:[ this.fields.get("NOTES")] });
       this.layoutItems.add("R2C2",
             { layout:"column",width:320,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Cost"),this.layoutItems.get("Notes")]
 }); 
       this.layoutItems.add("Product",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Product||"Product",border:true,labelWidth:80,labelAlign:"left",width:"260"   ,items:[ this.fields.get("QUANTITY"),this.fields.get("QUANTITY_UNIT"),this.fields.get("ORIG_PRICE"),this.fields.get("ORIG_CURRENCY"),this.fields.get("CURRENCY_XRATE")] });
       this.layoutItems.add("R2C1",
             { layout:"form",width:300,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("IINV_ID"),this.fields.get("IINVITEM_ID"),this.layoutItems.get("Product")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("R2C1"),this.layoutItems.get("R2C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:130, items:[ this.fields.get("PROD_ID"),this.fields.get("PROD_CODE"),this.fields.get("PROD_NAME")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0020F"
          ,firstFocusFieldName:"PROD_CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0020F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0020F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,IINV_ID:""
              ,ID:""
              ,PROD_ID:""
              ,PROD_CODE:""
              ,PROD_NAME:""
              ,QUANTITY:""
              ,QUANTITY_UNIT:""
              ,ORIG_PRICE:""
              ,ORIG_CURRENCY:""
              ,CURRENCY_XRATE:""
              ,PRICE:""
              ,CURRENCY:""
              ,NET_AMOUNT:""
              ,TAX_NAME:""
              ,TAX_RATE:""
              ,TAX_ID:""
              ,TAX_AMOUNT:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IINVITEM_ID:""});
     }

  ,change_CURRENCY_XRATE:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(newVal) &&  !Ext.isEmpty(this.getFieldValue("ORIG_PRICE"))   ) {
      this.setFieldValue("PRICE", this.getFieldValue("ORIG_PRICE") * newVal );
 }
   }

  ,change_NET_AMOUNT:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(newVal) &&  !Ext.isEmpty(this.getFieldValue("TAX_RATE"))   ) {
      this.setFieldValue("TAX_AMOUNT", this.getFieldValue("NET_AMOUNT") *  this.getFieldValue("TAX_RATE"));
 } else { 
  this.setFieldValue("TAX_AMOUNT", "" );      
 }
   }

  ,change_PRICE:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(newVal) &&  !Ext.isEmpty(this.getFieldValue("QUANTITY"))   ) {
      this.setFieldValue("NET_AMOUNT", this.getFieldValue("PRICE") *  this.getFieldValue("QUANTITY"));
 }
   }

  ,change_QUANTITY:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(newVal) &&  !Ext.isEmpty(this.getFieldValue("PRICE"))   ) {
      this.setFieldValue("NET_AMOUNT", this.getFieldValue("PRICE") *  this.getFieldValue("QUANTITY"));
 }
   }

  ,change_TAX_RATE:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(this.getFieldValue("TAX_RATE")) ) {
   if ( !Ext.isEmpty(this.getFieldValue("NET_AMOUNT")) ) {
      this.setFieldValue("TAX_AMOUNT", this.getFieldValue("TAX_RATE") *  this.getFieldValue("NET_AMOUNT"));
    } 
 } else { 
  this.setFieldValue("TAX_AMOUNT", "" );      
 }
   }


  });
  Ext.reg("DC0020F", N21.DataComp.DC0020F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0020
 * Title: Issued invoice items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0020 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0020"
          ,masterName:"DC0020G"
          ,detailName:"DC0020F"
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
                            xtype: "DC0020G"
                           ,id: "DC0020G"
                           ,height:180
                       },{
                           xtype:"DC0020F"
                          ,id:"DC0020F"
                          ,height:180
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
,"->","<span class='dcName'>DC0020</span>"          )
        }); 

       N21.DataComp.DC0020.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0020", N21.DataComp.DC0020);



