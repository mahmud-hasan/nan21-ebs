/** 
 * Data Component: DC0029G, Title: Payment - payables
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0029G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"PAYDOCTYPE_CODE", type:"string" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"PAYMNT_ACCT", type:"string" }
         ,{name:"BPARTNER_FROM", type:"float" }
         ,{name:"BPARTNER_FROM_NAME", type:"string" }
         ,{name:"BPARTNER_TO", type:"float" }
         ,{name:"BPARTNER_TO_NAME", type:"string" }
         ,{name:"IS_PREPAYMENT", type:"string" }
         ,{name:"PREPAY_ACCT", type:"string" }
         ,{name:"RINV_DOC_NO_DATE", type:"string" }
         ,{name:"RINV_ID", type:"float" }
         ,{name:"AMOUNT", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"IS_PAYABLE", type:"string" }
         ,{name:"IS_RECEIVABLE", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_GENERATED", type:"string" }
         ,{name:"IS_APPROVED", type:"string" }
         ,{name:"IS_POSTED", type:"string" }
         ,{name:"IS_MULTI_PAYMENT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0029F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0029F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_NAME",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_NAME",id:"DC0029F_QRY_CLIENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("PAYDOCTYPE_CODE",new  N21.DataComp.LOV0012({name:"QRY_PAYDOCTYPE_CODE",id:"DC0029F_QRY_PAYDOCTYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,displayColumn: "CODE"}));
       this.queryFields.add("DOC_NO",new Ext.form.TextField({name:"QRY_DOC_NO",id:"DC0029F_QRY_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",allowBlank:true,width:100}));
       this.queryFields.add("DOC_DATE",new Ext.form.DateField({name:"QRY_DOC_DATE",id:"DC0029F_QRY_DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("BPARTNER_FROM",new Ext.form.Hidden({name:"QRY_BPARTNER_FROM",id:"DC0029F_QRY_BPARTNER_FROM",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_FROM_NAME",new  N21.DataComp.LOV0009({name:"QRY_BPARTNER_FROM_NAME",id:"DC0029F_QRY_BPARTNER_FROM_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM_NAME||"Payer",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_QRY_BPARTNER_FROM"}],displayColumn: "NAME"}));
       this.queryFields.add("BPARTNER_TO",new Ext.form.Hidden({name:"QRY_BPARTNER_TO",id:"DC0029F_QRY_BPARTNER_TO",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_TO_NAME",new  N21.DataComp.LOV0009({name:"QRY_BPARTNER_TO_NAME",id:"DC0029F_QRY_BPARTNER_TO_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO_NAME||"Payment to",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_QRY_BPARTNER_TO"}],displayColumn: "NAME"}));
       this.queryFields.add("IS_PREPAYMENT",new Ext.form.ComboBox({name:"QRY_IS_PREPAYMENT",id:"DC0029F_QRY_IS_PREPAYMENT",fieldLabel: this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("RINV_ID",new Ext.form.Hidden({name:"QRY_RINV_ID",id:"DC0029F_QRY_RINV_ID",fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY",id:"DC0029F_QRY_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("IS_PAYABLE",new Ext.form.Hidden({name:"QRY_IS_PAYABLE",id:"DC0029F_QRY_IS_PAYABLE",fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Payable",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_RECEIVABLE",new Ext.form.ComboBox({name:"QRY_IS_RECEIVABLE",id:"DC0029F_QRY_IS_RECEIVABLE",fieldLabel: this.resourceBundle.FieldLabel.IS_RECEIVABLE||"Receivable",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_INSERTED",new Ext.form.ComboBox({name:"QRY_IS_INSERTED",id:"DC0029F_QRY_IS_INSERTED",fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_GENERATED",new Ext.form.ComboBox({name:"QRY_IS_GENERATED",id:"DC0029F_QRY_IS_GENERATED",fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_APPROVED",new Ext.form.ComboBox({name:"QRY_IS_APPROVED",id:"DC0029F_QRY_IS_APPROVED",fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_POSTED",new Ext.form.ComboBox({name:"QRY_IS_POSTED",id:"DC0029F_QRY_IS_POSTED",fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_MULTI_PAYMENT",new Ext.form.Hidden({name:"QRY_IS_MULTI_PAYMENT",id:"DC0029F_QRY_IS_MULTI_PAYMENT",fieldLabel: this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
  
       this.queryFieldsVisible = [  "CLIENT_NAME","PAYDOCTYPE_CODE","DOC_NO","DOC_DATE","BPARTNER_FROM_NAME","BPARTNER_TO_NAME","IS_PREPAYMENT","CURRENCY","IS_RECEIVABLE","IS_INSERTED","IS_GENERATED","IS_APPROVED","IS_POSTED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0029"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0029", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"PAYDOCTYPE_CODE",header:this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code",width:100,dataIndex:'PAYDOCTYPE_CODE',sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PAYMNT_ACCT",header:this.resourceBundle.FieldLabel.PAYMNT_ACCT||"Paymnt_acct",width:100,dataIndex:'PAYMNT_ACCT',hidden:true,sortable:true}
              ,{ id:"BPARTNER_FROM",header:this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from",width:100,dataIndex:'BPARTNER_FROM',hidden:true,sortable:true}
              ,{ id:"BPARTNER_FROM_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_FROM_NAME||"Payer",width:100,dataIndex:'BPARTNER_FROM_NAME',hidden:true,sortable:true}
              ,{ id:"BPARTNER_TO",header:this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to",width:100,dataIndex:'BPARTNER_TO',hidden:true,sortable:true}
              ,{ id:"BPARTNER_TO_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_TO_NAME||"Payment to",width:200,dataIndex:'BPARTNER_TO_NAME',sortable:true}
              ,{ id:"IS_PREPAYMENT",header:this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment",width:50,dataIndex:'IS_PREPAYMENT',hidden:true,sortable:true}
              ,{ id:"PREPAY_ACCT",header:this.resourceBundle.FieldLabel.PREPAY_ACCT||"Prepay_acct",width:100,dataIndex:'PREPAY_ACCT',hidden:true,sortable:true}
              ,{ id:"RINV_DOC_NO_DATE",header:this.resourceBundle.FieldLabel.RINV_DOC_NO_DATE||"Rinv_doc",width:100,dataIndex:'RINV_DOC_NO_DATE',hidden:true,sortable:true}
              ,{ id:"RINV_ID",header:this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",width:100,dataIndex:'RINV_ID',hidden:true,sortable:true}
              ,{ id:"AMOUNT",header:this.resourceBundle.FieldLabel.AMOUNT||"Amount",width:100,dataIndex:'AMOUNT',sortable:true,align:'right'}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',sortable:true}
              ,{ id:"IS_PAYABLE",header:this.resourceBundle.FieldLabel.IS_PAYABLE||"Payable",width:100,dataIndex:'IS_PAYABLE',hidden:true,sortable:true}
              ,{ id:"IS_RECEIVABLE",header:this.resourceBundle.FieldLabel.IS_RECEIVABLE||"Receivable",width:50,dataIndex:'IS_RECEIVABLE',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_GENERATED",header:this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",width:50,dataIndex:'IS_GENERATED',hidden:true,sortable:true}
              ,{ id:"IS_APPROVED",header:this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",width:50,dataIndex:'IS_APPROVED',hidden:true,sortable:true}
              ,{ id:"IS_POSTED",header:this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",width:50,dataIndex:'IS_POSTED',hidden:true,sortable:true}
              ,{ id:"IS_MULTI_PAYMENT",header:this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment",width:100,dataIndex:'IS_MULTI_PAYMENT',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0029G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0029G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0029G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,PAYDOCTYPE_CODE:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,PAYMNT_ACCT:""
              ,BPARTNER_FROM:""
              ,BPARTNER_FROM_NAME:""
              ,BPARTNER_TO:""
              ,BPARTNER_TO_NAME:""
              ,IS_PREPAYMENT:""
              ,PREPAY_ACCT:""
              ,RINV_DOC_NO_DATE:""
              ,RINV_ID:""
              ,AMOUNT:""
              ,CURRENCY:""
              ,IS_PAYABLE:""
              ,IS_RECEIVABLE:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IS_INSERTED:""
              ,IS_GENERATED:""
              ,IS_APPROVED:""
              ,IS_POSTED:""
              ,IS_MULTI_PAYMENT:""});
     }
  });
  Ext.reg("DC0029G", N21.DataComp.DC0029G);
/** 
 * Data Component: DC0029F, Title: Payment - payables
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0029F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0029G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0029F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0029F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_NAME",new  N21.DataComp.LOV0008({name:"CLIENT_NAME",id:"DC0029F_CLIENT_NAME",dataIndex:"CLIENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_CLIENT_ID"}]}));
       this.fields.add("PAYDOCTYPE_CODE",new  N21.DataComp.LOV0012({name:"PAYDOCTYPE_CODE",id:"DC0029F_PAYDOCTYPE_CODE",dataIndex:"PAYDOCTYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,displayColumn: "CODE"}));
       this.fields.add("DOC_NO",new Ext.form.TextField({name:"DOC_NO",id:"DC0029F_DOC_NO",dataIndex:"DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_DATE",new Ext.form.DateField({name:"DOC_DATE",id:"DC0029F_DOC_DATE",dataIndex:"DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("PAYMNT_ACCT",new  N21.DataComp.LOV0025({name:"PAYMNT_ACCT",id:"DC0029F_PAYMNT_ACCT",dataIndex:"PAYMNT_ACCT",fieldLabel: this.resourceBundle.FieldLabel.PAYMNT_ACCT||"Paymnt_acct",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("BPARTNER_FROM",new Ext.form.Hidden({name:"BPARTNER_FROM",id:"DC0029F_BPARTNER_FROM",dataIndex:"BPARTNER_FROM",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_FROM_NAME",new  N21.DataComp.LOV0009({name:"BPARTNER_FROM_NAME",id:"DC0029F_BPARTNER_FROM_NAME",dataIndex:"BPARTNER_FROM_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM_NAME||"Payer",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_BPARTNER_FROM"}],displayColumn: "NAME"}));
       this.fields.add("BPARTNER_TO",new Ext.form.Hidden({name:"BPARTNER_TO",id:"DC0029F_BPARTNER_TO",dataIndex:"BPARTNER_TO",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_TO_NAME",new  N21.DataComp.LOV0009({name:"BPARTNER_TO_NAME",id:"DC0029F_BPARTNER_TO_NAME",dataIndex:"BPARTNER_TO_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO_NAME||"Payment to",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_BPARTNER_TO"}],displayColumn: "NAME"}));
       this.fields.add("IS_PREPAYMENT",new Ext.ux.form.XCheckbox({name:"IS_PREPAYMENT",id:"DC0029F_IS_PREPAYMENT",dataIndex:"IS_PREPAYMENT",fieldLabel: this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("PREPAY_ACCT",new  N21.DataComp.LOV0025({name:"PREPAY_ACCT",id:"DC0029F_PREPAY_ACCT",dataIndex:"PREPAY_ACCT",fieldLabel: this.resourceBundle.FieldLabel.PREPAY_ACCT||"Prepay_acct",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("RINV_DOC_NO_DATE",new  N21.DataComp.LOV0027({name:"RINV_DOC_NO_DATE",id:"DC0029F_RINV_DOC_NO_DATE",dataIndex:"RINV_DOC_NO_DATE",fieldLabel: this.resourceBundle.FieldLabel.RINV_DOC_NO_DATE||"Rinv_doc",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0029F_RINV_ID"}],paramMapping: [{param:"p_issuer_id",field:"DC0029F.BPARTNER_TO"}]}));
       this.fields.add("RINV_ID",new Ext.form.Hidden({name:"RINV_ID",id:"DC0029F_RINV_ID",dataIndex:"RINV_ID",fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("AMOUNT",new Ext.form.NumberField({name:"AMOUNT",id:"DC0029F_AMOUNT",dataIndex:"AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.AMOUNT||"Amount",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",fieldClass: "field_important_1",decimalPrecision:2}));
       this.fields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"CURRENCY",id:"DC0029F_CURRENCY",dataIndex:"CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("IS_PAYABLE",new Ext.form.Hidden({name:"IS_PAYABLE",id:"DC0029F_IS_PAYABLE",dataIndex:"IS_PAYABLE",fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Payable",allowBlank:false,labelSeparator:":*",width:50,insert_allowed:true,update_allowed:true,value:"Y"}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0029F_NOTES",dataIndex:"NOTES",labelSeparator: "",allowBlank:true,width:250,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0029F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0029F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:80,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0029F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0029F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:80,disabled:true}));
       this.fields.add("IS_INSERTED",new Ext.ux.form.XCheckbox({name:"IS_INSERTED",id:"DC0029F_IS_INSERTED",dataIndex:"IS_INSERTED",fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_GENERATED",new Ext.ux.form.XCheckbox({name:"IS_GENERATED",id:"DC0029F_IS_GENERATED",dataIndex:"IS_GENERATED",fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",allowBlank:true,disabled:true}));
       this.fields.add("IS_APPROVED",new Ext.ux.form.XCheckbox({name:"IS_APPROVED",id:"DC0029F_IS_APPROVED",dataIndex:"IS_APPROVED",fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_POSTED",new Ext.ux.form.XCheckbox({name:"IS_POSTED",id:"DC0029F_IS_POSTED",dataIndex:"IS_POSTED",fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_MULTI_PAYMENT",new Ext.form.Hidden({name:"IS_MULTI_PAYMENT",id:"DC0029F_IS_MULTI_PAYMENT",dataIndex:"IS_MULTI_PAYMENT",fieldLabel: this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")] });
       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Notes||"Notes",border:true,labelWidth:80,labelAlign:"top",width:"250"   ,items:[ this.fields.get("NOTES")] });
       this.layoutItems.add("C3",
             { layout:"form",width:280,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Notes"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("ProcessingStatus",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.ProcessingStatus||"ProcessingStatus",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("IS_INSERTED"),this.fields.get("IS_GENERATED"),this.fields.get("IS_APPROVED"),this.fields.get("IS_POSTED")] });
       this.layoutItems.add("Amounts",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Amounts||"Amounts",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("AMOUNT"),this.fields.get("CURRENCY"),this.fields.get("IS_PAYABLE")] });
       this.layoutItems.add("C2",
             { layout:"form",width:280,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Amounts"),this.layoutItems.get("ProcessingStatus")]
 }); 
       this.layoutItems.add("DocInfo",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.DocInfo||"DocInfo",border:true,labelWidth:80,labelAlign:"left",width:"280"   ,items:[ this.fields.get("PAYDOCTYPE_CODE"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("PAYMNT_ACCT"),this.fields.get("BPARTNER_TO"),this.fields.get("BPARTNER_TO_NAME"),this.fields.get("IS_PREPAYMENT"),this.fields.get("PREPAY_ACCT"),this.fields.get("RINV_ID"),this.fields.get("RINV_DOC_NO_DATE")] });
       this.layoutItems.add("Unit",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Unit||"Unit",border:true,labelWidth:80,labelAlign:"left",width:"280"   ,items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_NAME"),this.fields.get("BPARTNER_FROM"),this.fields.get("BPARTNER_FROM_NAME")] });
       this.layoutItems.add("C1",
             { layout:"form",width:320,labelAlign:"left",labelWidth:100, items:[ this.fields.get("IS_MULTI_PAYMENT"),this.layoutItems.get("Unit"),this.layoutItems.get("DocInfo")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2"),this.layoutItems.get("C3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0029F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0029F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0029F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,PAYDOCTYPE_CODE:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,PAYMNT_ACCT:""
              ,BPARTNER_FROM:""
              ,BPARTNER_FROM_NAME:""
              ,BPARTNER_TO:""
              ,BPARTNER_TO_NAME:""
              ,IS_PREPAYMENT:""
              ,PREPAY_ACCT:""
              ,RINV_DOC_NO_DATE:""
              ,RINV_ID:""
              ,AMOUNT:""
              ,CURRENCY:""
              ,IS_PAYABLE:""
              ,IS_RECEIVABLE:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IS_INSERTED:""
              ,IS_GENERATED:""
              ,IS_APPROVED:""
              ,IS_POSTED:""
              ,IS_MULTI_PAYMENT:""});
     }


  });
  Ext.reg("DC0029F", N21.DataComp.DC0029F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0029
 * Title: Payment - payables
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0029 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0029"
          ,masterName:"DC0029G"
          ,detailName:"DC0029F"
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
                            xtype: "DC0029G"
                           ,id: "DC0029G"
                           ,height:350
                       },{
                           xtype:"DC0029F"
                          ,id:"DC0029F"
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
,"->","<span class='dcName'>DC0029</span>"          )
        }); 

       N21.DataComp.DC0029.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0029", N21.DataComp.DC0029);



