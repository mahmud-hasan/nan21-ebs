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
         ,{name:"NOTES", type:"string" }
         ,{name:"PROD_ID", type:"float" }
         ,{name:"PURCHASE_ACCT", type:"string" }
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
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0041_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("RINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_RINV_ID",id:"DC0041_QRY_RINV_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id"})  );
         this.queryFields.add("PROD_CODE", new N21.DataComp.LOV0017({xtype: "LOV0017",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0041_QRY_PROD_ID"},{column:"NAME",field:"DC0041_QRY_NOTES"},{column:"EXPENSE_ACCOUNT",field:"DC0041_QRY_PURCHASE_ACCT"}],selectOnFocus:true,name:"QRY_PROD_CODE",id:"DC0041_QRY_PROD_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PROD_CODE||"Prod_code"})  );
         this.queryFields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NOTES",id:"DC0041_QRY_NOTES",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"})  );
         this.queryFields.add("PROD_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PROD_ID",id:"DC0041_QRY_PROD_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PROD_ID||"Prod_id"})  );
         this.queryFields.add("PURCHASE_ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"QRY_PURCHASE_ACCT",id:"DC0041_QRY_PURCHASE_ACCT",width:100,fieldLabel: this.resourceBundle.FieldLabel.PURCHASE_ACCT||"Purchase_acct"})  );
         this.queryFields.add("NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_NET_AMOUNT",id:"DC0041_QRY_NET_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",style: "text-align:right;"})  );
         this.queryFields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_CURRENCY",id:"DC0041_QRY_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"})  );
         this.queryFields.add("TAX_NAME", new N21.DataComp.LOV0024({xtype: "LOV0024",displayColumn: "NAME",name:"QRY_TAX_NAME",id:"DC0041_QRY_TAX_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.TAX_NAME||"VAT class"})  );
         this.queryFields.add("TAX_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_TAX_ID",id:"DC0041_QRY_TAX_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.TAX_ID||"Tax_id"})  );
         this.queryFields.add("TAX_RATE", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_TAX_RATE",id:"DC0041_QRY_TAX_RATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.TAX_RATE||"Tax_rate"})  );
         this.queryFields.add("TAX_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_TAX_AMOUNT",id:"DC0041_QRY_TAX_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT||"Tax_amount",style: "text-align:right;"})  );
         this.queryFields.add("TAX_AMOUNT_NR", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_TAX_AMOUNT_NR",id:"DC0041_QRY_TAX_AMOUNT_NR",width:100,fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT_NR||"Non-refund tax",style: "text-align:right;"})  );
         this.queryFields.add("ORIG_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_ORIG_AMOUNT",id:"DC0041_QRY_ORIG_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",style: "text-align:right;"})  );
         this.queryFields.add("ORIG_CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_ORIG_CURRENCY",id:"DC0041_QRY_ORIG_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency"})  );
         this.queryFields.add("CURRENCY_XRATE", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_CURRENCY_XRATE",id:"DC0041_QRY_CURRENCY_XRATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",style: "text-align:right;"})  );
         this.queryFields.add("QUANTITY", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QUANTITY",id:"DC0041_QRY_QUANTITY",width:100,fieldLabel: this.resourceBundle.FieldLabel.QUANTITY||"Quantity",style: "text-align:right;"})  );
         this.queryFields.add("QUANTITY_UNIT", new Ext.form.TextField ({xtype: "textfield",name:"QRY_QUANTITY_UNIT",id:"DC0041_QRY_QUANTITY_UNIT",width:100,fieldLabel: this.resourceBundle.FieldLabel.QUANTITY_UNIT||"Quantity_unit"})  );
         this.queryFields.add("PRICE", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_PRICE",id:"DC0041_QRY_PRICE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",style: "text-align:right;"})  );
         this.queryFields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CREATEDON",id:"DC0041_QRY_CREATEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0041_QRY_CREATEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"})  );
         this.queryFields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0041_QRY_MODIFIEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0041_QRY_MODIFIEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"})  );
         this.queryFields.add("RINVITEM_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_RINVITEM_ID",id:"DC0041_QRY_RINVITEM_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.RINVITEM_ID||"Rinvitem_id",style: "text-align:right;"})  );
  
       this.queryFieldsVisible = [  "PROD_CODE","NOTES","PURCHASE_ACCT","NET_AMOUNT","CURRENCY","TAX_NAME","TAX_AMOUNT","TAX_AMOUNT_NR","ORIG_AMOUNT","ORIG_CURRENCY","CURRENCY_XRATE","QUANTITY","QUANTITY_UNIT","PRICE","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY","RINVITEM_ID" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0041"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0041"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"RINV_ID",header:this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",width:100,dataIndex:'RINV_ID',hidden:true,sortable:true}
              ,{ id:"PROD_CODE",header:this.resourceBundle.FieldLabel.PROD_CODE||"Prod_code",width:100,dataIndex:'PROD_CODE',sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',sortable:true}
              ,{ id:"PROD_ID",header:this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",width:100,dataIndex:'PROD_ID',hidden:true,sortable:true}
              ,{ id:"PURCHASE_ACCT",header:this.resourceBundle.FieldLabel.PURCHASE_ACCT||"Purchase_acct",width:100,dataIndex:'PURCHASE_ACCT',sortable:true}
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
              ,{ id:"QUANTITY_UNIT",header:this.resourceBundle.FieldLabel.QUANTITY_UNIT||"Quantity_unit",width:100,dataIndex:'QUANTITY_UNIT',hidden:true,sortable:true}
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
              ,NOTES:""
              ,PROD_ID:""
              ,PURCHASE_ACCT:""
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
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0041F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"RINV_ID",id:"DC0041F_RINV_ID",dataIndex:"RINV_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",insert_allowed:true,update_allowed:true,copyValueFrom:"DC0026F_ID"})   );
       this.fields.add("PROD_CODE", new N21.DataComp.LOV0017({xtype: "LOV0017",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0041F_PROD_ID"},{column:"NAME",field:"DC0041F_NOTES"},{column:"EXPENSE_ACCOUNT",field:"DC0041F_PURCHASE_ACCT"}],selectOnFocus:true,name:"PROD_CODE",id:"DC0041F_PROD_CODE",dataIndex:"PROD_CODE",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PROD_CODE||"Prod_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"NOTES",id:"DC0041F_NOTES",dataIndex:"NOTES",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROD_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PROD_ID",id:"DC0041F_PROD_ID",dataIndex:"PROD_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PROD_ID||"Prod_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PURCHASE_ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"PURCHASE_ACCT",id:"DC0041F_PURCHASE_ACCT",dataIndex:"PURCHASE_ACCT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PURCHASE_ACCT||"Purchase_acct",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"NET_AMOUNT",id:"DC0041F_NET_AMOUNT",dataIndex:"NET_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net_amount",insert_allowed:true,update_allowed:true,decimalPrecision:4,style: "text-align:right;",listeners:{  "change":{scope:this, fn:this.change_NET_AMOUNT}  }})   );
       this.fields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"CURRENCY",id:"DC0041F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true,copyValueFrom:"DC0026F_DOC_CURRENCY"})   );
       this.fields.add("TAX_NAME", new N21.DataComp.LOV0024({xtype: "LOV0024",displayColumn: "NAME",fieldMapping: [{column:"VALUE",field:"DC0041F_TAX_RATE"},{column:"ID",field:"DC0041F_TAX_ID"}],selectOnFocus:true,name:"TAX_NAME",id:"DC0041F_TAX_NAME",dataIndex:"TAX_NAME",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.TAX_NAME||"VAT class",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TAX_RATE", new Ext.form.Hidden ({xtype: "hidden",name:"TAX_RATE",id:"DC0041F_TAX_RATE",dataIndex:"TAX_RATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TAX_RATE||"Tax_rate",insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_TAX_RATE}  }})   );
       this.fields.add("TAX_ID", new Ext.form.Hidden ({xtype: "hidden",name:"TAX_ID",id:"DC0041F_TAX_ID",dataIndex:"TAX_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TAX_ID||"Tax_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TAX_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"TAX_AMOUNT",id:"DC0041F_TAX_AMOUNT",dataIndex:"TAX_AMOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT||"Tax_amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("TAX_AMOUNT_NR", new Ext.form.NumberField ({xtype: "numberfield",name:"TAX_AMOUNT_NR",id:"DC0041F_TAX_AMOUNT_NR",dataIndex:"TAX_AMOUNT_NR",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TAX_AMOUNT_NR||"Non-refund tax",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("ORIG_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"ORIG_AMOUNT",id:"DC0041F_ORIG_AMOUNT",dataIndex:"ORIG_AMOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("ORIG_CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"ORIG_CURRENCY",id:"DC0041F_ORIG_CURRENCY",dataIndex:"ORIG_CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CURRENCY_XRATE", new Ext.form.NumberField ({xtype: "numberfield",name:"CURRENCY_XRATE",id:"DC0041F_CURRENCY_XRATE",dataIndex:"CURRENCY_XRATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Currency_xrate",insert_allowed:true,update_allowed:true,decimalPrecision:4,style: "text-align:right;"})   );

       this.layoutItems.add("OrigCost",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.OrigCost||"OrigCost",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("ORIG_AMOUNT"),this.fields.get("ORIG_CURRENCY"),this.fields.get("CURRENCY_XRATE")]});
       this.layoutItems.add("Product",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Product||"Product",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("ID"),this.fields.get("RINV_ID"),this.fields.get("PROD_CODE"),this.fields.get("PROD_ID"),this.fields.get("NOTES"),this.fields.get("PURCHASE_ACCT")]});
       this.layoutItems.add("Cost",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Cost||"Cost",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("NET_AMOUNT"),this.fields.get("CURRENCY"),this.fields.get("TAX_NAME"),this.fields.get("TAX_RATE"),this.fields.get("TAX_ID"),this.fields.get("TAX_AMOUNT"),this.fields.get("TAX_AMOUNT_NR")]});
       this.layoutItems.add("C2",
             { layout:"table",columnWidth:1,labelAlign:"right",labelWidth:90, items:[ this.layoutItems.get("Product"),this.layoutItems.get("Cost"),this.layoutItems.get("OrigCost")]}); 
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
              ,NOTES:""
              ,PROD_ID:""
              ,PURCHASE_ACCT:""
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
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_LIST_EDITOR_MODE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_REFRESH_RECORD"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PREV_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEXT_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0041.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0041", N21.DataComp.DC0041);



