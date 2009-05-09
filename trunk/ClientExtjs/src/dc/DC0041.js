/** 
 * Data Component: DC0041G, Title: Received invoice items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0041G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"RINV_ID", type:"float" }
         ,{name:"PROD_CODE", type:"string" }
         ,{name:"PROD_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"NET_AMOUNT", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"TAX_NAME", type:"string" }
         ,{name:"TAX_ID", type:"float" }
         ,{name:"TAX_RATE", type:"float" }
         ,{name:"TAX_AMOUNT", type:"float" }
         ,{name:"TAX_AMOUNT_NR", type:"float" }
         ,{name:"ORIG_AMOUNT", type:"float" }
         ,{name:"ORIG_CURRENCY", type:"string" }
         ,{name:"CURRENCY_XRATE", type:"float" }
         ,{name:"QUANTITY", type:"float" }
         ,{name:"QUANTITY_UNIT", type:"string" }
         ,{name:"PRICE", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"RINVITEM_ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0041F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("RINV_ID",new Ext.form.Hidden({name:"QRY_RINV_ID",id:"DC0041F_QRY_RINV_ID",fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",allowBlank:true,width:100}));
       this.queryFields.add("PROD_CODE",new  N21.DataComp.LOV0017({name:"QRY_PROD_CODE",id:"DC0041F_QRY_PROD_CODE",fieldLabel: this.resourceBundle.FieldLabel.PROD_CODE||"Prod_code",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0041F_QRY_PROD_ID"},{column:"NAME",field:"DC0041F_QRY_NOTES"}],displayColumn: "CODE"}));
       this.queryFields.add("PROD_ID",new Ext.form.Hidden({name:"QRY_PROD_ID",id:"DC0041F_QRY_PROD_ID",fieldLabel: this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",allowBlank:true,width:100}));
       this.queryFields.add("NOTES",new Ext.form.TextField({name:"QRY_NOTES",id:"DC0041F_QRY_NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:100}));
       this.queryFields.add("NET_AMOUNT",new Ext.form.NumberField({name:"QRY_NET_AMOUNT",id:"DC0041F_QRY_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY",id:"DC0041F_QRY_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("TAX_NAME",new  N21.DataComp.LOV0024({name:"QRY_TAX_NAME",id:"DC0041F_QRY_TAX_NAME",fieldLabel: this.resourceBundle.FieldLabel.TAX_NAME||"VAT class",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"VALUE",field:"DC0041F_QRY_TAX_RATE"},{column:"ID",field:"DC0041F_QRY_TAX_ID"}],displayColumn: "NAME"}));
       this.queryFields.add("TAX_ID",new Ext.form.Hidden({name:"QRY_TAX_ID",id:"DC0041F_QRY_TAX_ID",fieldLabel: this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",allowBlank:true,width:100}));
       this.queryFields.add("TAX_RATE",new Ext.form.Hidden({name:"QRY_TAX_RATE",id:"DC0041F_QRY_TAX_RATE",fieldLabel: this.resourceBundle.FieldLabel.TAX_RATE||"Tax_rate",allowBlank:true,width:100}));
       this.queryFields.add("TAX_AMOUNT",new Ext.form.NumberField({name:"QRY_TAX_AMOUNT",id:"DC0041F_QRY_TAX_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT||"Tax_amount",allowBlank:true,width:100}));
       this.queryFields.add("TAX_AMOUNT_NR",new Ext.form.NumberField({name:"QRY_TAX_AMOUNT_NR",id:"DC0041F_QRY_TAX_AMOUNT_NR",fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT_NR||"Non-refund tax",allowBlank:true,width:100}));
       this.queryFields.add("ORIG_AMOUNT",new Ext.form.NumberField({name:"QRY_ORIG_AMOUNT",id:"DC0041F_QRY_ORIG_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",allowBlank:true,width:100}));
       this.queryFields.add("ORIG_CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_ORIG_CURRENCY",id:"DC0041F_QRY_ORIG_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("CURRENCY_XRATE",new Ext.form.NumberField({name:"QRY_CURRENCY_XRATE",id:"DC0041F_QRY_CURRENCY_XRATE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",allowBlank:true,width:100}));
       this.queryFields.add("QUANTITY",new Ext.form.NumberField({name:"QRY_QUANTITY",id:"DC0041F_QRY_QUANTITY",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY||"Quantity",allowBlank:true,width:100}));
       this.queryFields.add("QUANTITY_UNIT",new  N21.DataComp.LOV0002({name:"QRY_QUANTITY_UNIT",id:"DC0041F_QRY_QUANTITY_UNIT",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY_UNIT||"UOM",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("PRICE",new Ext.form.NumberField({name:"QRY_PRICE",id:"DC0041F_QRY_PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",allowBlank:true,width:100}));
       this.queryFields.add("CREATEDON",new Ext.form.DateField({name:"QRY_CREATEDON",id:"DC0041F_QRY_CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDBY",new Ext.form.TextField({name:"QRY_CREATEDBY",id:"DC0041F_QRY_CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:100}));
       this.queryFields.add("MODIFIEDON",new Ext.form.DateField({name:"QRY_MODIFIEDON",id:"DC0041F_QRY_MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("MODIFIEDBY",new Ext.form.TextField({name:"QRY_MODIFIEDBY",id:"DC0041F_QRY_MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:100}));
       this.queryFields.add("RINVITEM_ID",new Ext.form.NumberField({name:"QRY_RINVITEM_ID",id:"DC0041F_QRY_RINVITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.RINVITEM_ID||"Rinvitem_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "PROD_CODE","NOTES","NET_AMOUNT","CURRENCY","TAX_NAME","TAX_AMOUNT","TAX_AMOUNT_NR","ORIG_AMOUNT","ORIG_CURRENCY","CURRENCY_XRATE","QUANTITY","QUANTITY_UNIT","PRICE","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY","RINVITEM_ID" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0041"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0041", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"RINV_ID",header:this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",width:100,dataIndex:'RINV_ID',hidden:true,sortable:true}
              ,{ id:"PROD_CODE",header:this.resourceBundle.FieldLabel.PROD_CODE||"Prod_code",width:100,dataIndex:'PROD_CODE',sortable:true}
              ,{ id:"PROD_ID",header:this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",width:100,dataIndex:'PROD_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',sortable:true}
              ,{ id:"NET_AMOUNT",header:this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",width:100,dataIndex:'NET_AMOUNT',sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',sortable:true}
              ,{ id:"TAX_NAME",header:this.resourceBundle.FieldLabel.TAX_NAME||"VAT class",width:100,dataIndex:'TAX_NAME',sortable:true}
              ,{ id:"TAX_ID",header:this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",width:100,dataIndex:'TAX_ID',hidden:true,sortable:true}
              ,{ id:"TAX_RATE",header:this.resourceBundle.FieldLabel.TAX_RATE||"Tax_rate",width:100,dataIndex:'TAX_RATE',hidden:true,sortable:true}
              ,{ id:"TAX_AMOUNT",header:this.resourceBundle.FieldLabel.TAX_AMOUNT||"Tax_amount",width:100,dataIndex:'TAX_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TAX_AMOUNT_NR",header:this.resourceBundle.FieldLabel.TAX_AMOUNT_NR||"Non-refund tax",width:100,dataIndex:'TAX_AMOUNT_NR',hidden:true,sortable:true,align:'right'}
              ,{ id:"ORIG_AMOUNT",header:this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",width:100,dataIndex:'ORIG_AMOUNT',hidden:true,sortable:true,align:'right'}
              ,{ id:"ORIG_CURRENCY",header:this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency",width:100,dataIndex:'ORIG_CURRENCY',hidden:true,sortable:true}
              ,{ id:"CURRENCY_XRATE",header:this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",width:100,dataIndex:'CURRENCY_XRATE',hidden:true,sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"QUANTITY",header:this.resourceBundle.FieldLabel.QUANTITY||"Quantity",width:100,dataIndex:'QUANTITY',hidden:true,sortable:true,align:'right'}
              ,{ id:"QUANTITY_UNIT",header:this.resourceBundle.FieldLabel.QUANTITY_UNIT||"UOM",width:100,dataIndex:'QUANTITY_UNIT',hidden:true,sortable:true}
              ,{ id:"PRICE",header:this.resourceBundle.FieldLabel.PRICE||"Price",width:100,dataIndex:'PRICE',hidden:true,sortable:true,align:'right'}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"RINVITEM_ID",header:this.resourceBundle.FieldLabel.RINVITEM_ID||"Rinvitem_id",width:100,dataIndex:'RINVITEM_ID',hidden:true,sortable:true,align:'right'}
          ]
          ,dataComponentName:"DC0041G"
          ,queryArraySize:-1
          ,toolbarConfig:['NEW','DELETE']
        });
       N21.DataComp.DC0041G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0041G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,RINV_ID:""
              ,PROD_CODE:""
              ,PROD_ID:""
              ,NOTES:""
              ,NET_AMOUNT:""
              ,CURRENCY:""
              ,TAX_NAME:""
              ,TAX_ID:""
              ,TAX_RATE:""
              ,TAX_AMOUNT:""
              ,TAX_AMOUNT_NR:""
              ,ORIG_AMOUNT:""
              ,ORIG_CURRENCY:""
              ,CURRENCY_XRATE:""
              ,QUANTITY:""
              ,QUANTITY_UNIT:""
              ,PRICE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,RINVITEM_ID:""});
     }
  });
  Ext.reg("DC0041G", N21.DataComp.DC0041G);
/** 
 * Data Component: DC0041F, Title: Received invoice items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0041F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0041G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0041F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("RINV_ID",new Ext.form.Hidden({name:"RINV_ID",id:"DC0041F_RINV_ID",dataIndex:"RINV_ID",fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,copyValueFrom:"DC0026F_ID"}));
       this.fields.add("PROD_CODE",new  N21.DataComp.LOV0017({name:"PROD_CODE",id:"DC0041F_PROD_CODE",dataIndex:"PROD_CODE",fieldLabel: this.resourceBundle.FieldLabel.PROD_CODE||"Prod_code",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0041F_PROD_ID"},{column:"NAME",field:"DC0041F_NOTES"}],displayColumn: "CODE"}));
       this.fields.add("NOTES",new Ext.form.TextField({name:"NOTES",id:"DC0041F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("PROD_ID",new Ext.form.Hidden({name:"PROD_ID",id:"DC0041F_PROD_ID",dataIndex:"PROD_ID",fieldLabel: this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NET_AMOUNT",new Ext.form.NumberField({name:"NET_AMOUNT",id:"DC0041F_NET_AMOUNT",dataIndex:"NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:4,listeners:{  "change":{scope:this, fn:this.change_NET_AMOUNT}  }}));
       this.fields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"CURRENCY",id:"DC0041F_CURRENCY",dataIndex:"CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,copyValueFrom:"DC0026F_DOC_CURRENCY",selectOnFocus:true}));
       this.fields.add("TAX_NAME",new  N21.DataComp.LOV0024({name:"TAX_NAME",id:"DC0041F_TAX_NAME",dataIndex:"TAX_NAME",fieldLabel: this.resourceBundle.FieldLabel.TAX_NAME||"VAT class",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"VALUE",field:"DC0041F_TAX_RATE"},{column:"ID",field:"DC0041F_TAX_ID"}],displayColumn: "NAME"}));
       this.fields.add("TAX_RATE",new Ext.form.Hidden({name:"TAX_RATE",id:"DC0041F_TAX_RATE",dataIndex:"TAX_RATE",fieldLabel: this.resourceBundle.FieldLabel.TAX_RATE||"Tax_rate",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_TAX_RATE}  }}));
       this.fields.add("TAX_ID",new Ext.form.Hidden({name:"TAX_ID",id:"DC0041F_TAX_ID",dataIndex:"TAX_ID",fieldLabel: this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("TAX_AMOUNT",new Ext.form.NumberField({name:"TAX_AMOUNT",id:"DC0041F_TAX_AMOUNT",dataIndex:"TAX_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT||"Tax_amount",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("TAX_AMOUNT_NR",new Ext.form.NumberField({name:"TAX_AMOUNT_NR",id:"DC0041F_TAX_AMOUNT_NR",dataIndex:"TAX_AMOUNT_NR",fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT_NR||"Non-refund tax",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("ORIG_AMOUNT",new Ext.form.NumberField({name:"ORIG_AMOUNT",id:"DC0041F_ORIG_AMOUNT",dataIndex:"ORIG_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("ORIG_CURRENCY",new  N21.DataComp.LOV0001({name:"ORIG_CURRENCY",id:"DC0041F_ORIG_CURRENCY",dataIndex:"ORIG_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("CURRENCY_XRATE",new Ext.form.NumberField({name:"CURRENCY_XRATE",id:"DC0041F_CURRENCY_XRATE",dataIndex:"CURRENCY_XRATE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:4}));
       this.fields.add("QUANTITY",new Ext.form.NumberField({name:"QUANTITY",id:"DC0041F_QUANTITY",dataIndex:"QUANTITY",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY||"Quantity",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("QUANTITY_UNIT",new  N21.DataComp.LOV0002({name:"QUANTITY_UNIT",id:"DC0041F_QUANTITY_UNIT",dataIndex:"QUANTITY_UNIT",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY_UNIT||"UOM",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));

       this.layoutItems.add("OrigCost",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.OrigCost||"OrigCost",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("ORIG_AMOUNT"),this.fields.get("ORIG_CURRENCY"),this.fields.get("CURRENCY_XRATE")] });
       this.layoutItems.add("Product",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Product||"Product",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("ID"),this.fields.get("RINV_ID"),this.fields.get("PROD_CODE"),this.fields.get("NOTES"),this.fields.get("PROD_ID"),this.fields.get("QUANTITY"),this.fields.get("QUANTITY_UNIT")] });
       this.layoutItems.add("Cost",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Cost||"Cost",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("NET_AMOUNT"),this.fields.get("CURRENCY"),this.fields.get("TAX_NAME"),this.fields.get("TAX_RATE"),this.fields.get("TAX_ID"),this.fields.get("TAX_AMOUNT"),this.fields.get("TAX_AMOUNT_NR")] });
       this.layoutItems.add("C2",
             { layout:"table",columnWidth:1,labelAlign:"right",labelWidth:90, items:[ this.layoutItems.get("Product"),this.layoutItems.get("Cost"),this.layoutItems.get("OrigCost")]
 }); 
             this.layoutItems.get("Cost").cellCls = "cellClsAlignTop";
             this.layoutItems.get("Cost").width = "";
             this.layoutItems.get("Product").cellCls = "cellClsAlignTop";
             this.layoutItems.get("Product").width = "";
             this.layoutItems.get("OrigCost").cellCls = "cellClsAlignTop";
             this.layoutItems.get("OrigCost").width = "";


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0041F"
          ,firstFocusFieldName:"NOTES"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0041F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0041F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,RINV_ID:""
              ,PROD_CODE:""
              ,PROD_ID:""
              ,NOTES:""
              ,NET_AMOUNT:""
              ,CURRENCY:""
              ,TAX_NAME:""
              ,TAX_ID:""
              ,TAX_RATE:""
              ,TAX_AMOUNT:""
              ,TAX_AMOUNT_NR:""
              ,ORIG_AMOUNT:""
              ,ORIG_CURRENCY:""
              ,CURRENCY_XRATE:""
              ,QUANTITY:""
              ,QUANTITY_UNIT:""
              ,PRICE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,RINVITEM_ID:""});
     }

  ,change_NET_AMOUNT:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(newVal) ) {
   if ( !Ext.isEmpty(this.getFieldValue("TAX_RATE")) ) {
      this.setFieldValue("TAX_AMOUNT", newVal *  this.getFieldValue("TAX_RATE"));
    } 
 } else { 
  this.setFieldValue("TAX_AMOUNT", "" );      
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
  Ext.reg("DC0041F", N21.DataComp.DC0041F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0041
 * Title: Received invoice items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0041 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0041"
          ,masterName:"DC0041G"
          ,detailName:"DC0041F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0041G",id: "DC0041G",region:"north" ,split:true,height:180,minHeight:0}
             ,{xtype: "DC0041F",id: "DC0041F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0041</span>"          )
        }); 

       N21.DataComp.DC0041.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0041", N21.DataComp.DC0041);



