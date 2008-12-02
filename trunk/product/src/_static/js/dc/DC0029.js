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
         ,{name:"ACCDOC_NAME", type:"string" }
         ,{name:"ACCDOC_ID", type:"float" }
         ,{name:"IS_MULTI_PAYMENT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0029_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0029_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",name:"QRY_CLIENT_NAME",id:"DC0029_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("PAYDOCTYPE_CODE", new N21.DataComp.LOV0012({xtype: "LOV0012",displayColumn: "CODE",name:"QRY_PAYDOCTYPE_CODE",id:"DC0029_QRY_PAYDOCTYPE_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code"})  );
         this.queryFields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOC_NO",id:"DC0029_QRY_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no"})  );
         this.queryFields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0029_QRY_DOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("BPARTNER_FROM", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_FROM",id:"DC0029_QRY_BPARTNER_FROM",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from"})  );
         this.queryFields.add("BPARTNER_FROM_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0029_QRY_BPARTNER_FROM"}],selectOnFocus:true,name:"QRY_BPARTNER_FROM_NAME",id:"DC0029_QRY_BPARTNER_FROM_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM_NAME||"Payer"})  );
         this.queryFields.add("BPARTNER_TO", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_TO",id:"DC0029_QRY_BPARTNER_TO",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to"})  );
         this.queryFields.add("BPARTNER_TO_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0029_QRY_BPARTNER_TO"}],selectOnFocus:true,name:"QRY_BPARTNER_TO_NAME",id:"DC0029_QRY_BPARTNER_TO_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO_NAME||"Payment to"})  );
         this.queryFields.add("IS_PREPAYMENT", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_PREPAYMENT",id:"DC0029_QRY_IS_PREPAYMENT",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment"})  );
         this.queryFields.add("RINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_RINV_ID",id:"DC0029_QRY_RINV_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id"})  );
         this.queryFields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_CURRENCY",id:"DC0029_QRY_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"})  );
         this.queryFields.add("IS_PAYABLE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_PAYABLE",id:"DC0029_QRY_IS_PAYABLE",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Payable"})  );
         this.queryFields.add("IS_RECEIVABLE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_RECEIVABLE",id:"DC0029_QRY_IS_RECEIVABLE",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_RECEIVABLE||"Receivable"})  );
         this.queryFields.add("IS_INSERTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_INSERTED",id:"DC0029_QRY_IS_INSERTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted"})  );
         this.queryFields.add("IS_GENERATED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_GENERATED",id:"DC0029_QRY_IS_GENERATED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated"})  );
         this.queryFields.add("IS_APPROVED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_APPROVED",id:"DC0029_QRY_IS_APPROVED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved"})  );
         this.queryFields.add("IS_POSTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_POSTED",id:"DC0029_QRY_IS_POSTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted"})  );
         this.queryFields.add("ACCDOC_NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_ACCDOC_NAME",id:"DC0029_QRY_ACCDOC_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc"})  );
         this.queryFields.add("ACCDOC_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ACCDOC_ID",id:"DC0029_QRY_ACCDOC_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id"})  );
         this.queryFields.add("IS_MULTI_PAYMENT", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_MULTI_PAYMENT",id:"DC0029_QRY_IS_MULTI_PAYMENT",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","PAYDOCTYPE_CODE","DOC_NO","DOC_DATE","BPARTNER_FROM_NAME","BPARTNER_TO_NAME","IS_PREPAYMENT","CURRENCY","IS_RECEIVABLE","IS_INSERTED","IS_GENERATED","IS_APPROVED","IS_POSTED","ACCDOC_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0029"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0029"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
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
              ,{ id:"IS_POSTED",header:this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",width:50,dataIndex:'IS_POSTED',sortable:true}
              ,{ id:"ACCDOC_NAME",header:this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc",width:100,dataIndex:'ACCDOC_NAME',sortable:true}
              ,{ id:"ACCDOC_ID",header:this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",width:100,dataIndex:'ACCDOC_ID',hidden:true,sortable:true}
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
              ,ACCDOC_NAME:""
              ,ACCDOC_ID:""
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
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0029F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0029F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0029F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0029F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAYDOCTYPE_CODE", new N21.DataComp.LOV0012({xtype: "LOV0012",displayColumn: "CODE",selectOnFocus:true,name:"PAYDOCTYPE_CODE",id:"DC0029F_PAYDOCTYPE_CODE",dataIndex:"PAYDOCTYPE_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0029F_DOC_NO",dataIndex:"DOC_NO",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0029F_DOC_DATE",dataIndex:"DOC_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("PAYMNT_ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"PAYMNT_ACCT",id:"DC0029F_PAYMNT_ACCT",dataIndex:"PAYMNT_ACCT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PAYMNT_ACCT||"Paymnt_acct",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_FROM", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_FROM",id:"DC0029F_BPARTNER_FROM",dataIndex:"BPARTNER_FROM",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_FROM_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0029F_BPARTNER_FROM"}],selectOnFocus:true,name:"BPARTNER_FROM_NAME",id:"DC0029F_BPARTNER_FROM_NAME",dataIndex:"BPARTNER_FROM_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM_NAME||"Payer",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_TO", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_TO",id:"DC0029F_BPARTNER_TO",dataIndex:"BPARTNER_TO",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_TO_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0029F_BPARTNER_TO"}],selectOnFocus:true,name:"BPARTNER_TO_NAME",id:"DC0029F_BPARTNER_TO_NAME",dataIndex:"BPARTNER_TO_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO_NAME||"Payment to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_PREPAYMENT", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_PREPAYMENT",id:"DC0029F_IS_PREPAYMENT",dataIndex:"IS_PREPAYMENT",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PREPAY_ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"PREPAY_ACCT",id:"DC0029F_PREPAY_ACCT",dataIndex:"PREPAY_ACCT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PREPAY_ACCT||"Prepay_acct",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RINV_DOC_NO_DATE", new N21.DataComp.LOV0027({xtype: "LOV0027",fieldMapping: [{column:"ID",field:"DC0029F_RINV_ID"}],paramMapping: [{param:"p_issuer_id",field:"DC0029F_BPARTNER_TO"}],selectOnFocus:true,name:"RINV_DOC_NO_DATE",id:"DC0029F_RINV_DOC_NO_DATE",dataIndex:"RINV_DOC_NO_DATE",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.RINV_DOC_NO_DATE||"Rinv_doc",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"RINV_ID",id:"DC0029F_RINV_ID",dataIndex:"RINV_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"AMOUNT",id:"DC0029F_AMOUNT",dataIndex:"AMOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.AMOUNT||"Amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;",fieldClass: "field_important_1"})   );
       this.fields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"CURRENCY",id:"DC0029F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_PAYABLE", new Ext.form.Hidden ({xtype: "hidden",name:"IS_PAYABLE",id:"DC0029F_IS_PAYABLE",dataIndex:"IS_PAYABLE",width:50,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Payable",insert_allowed:true,update_allowed:true,value:"Y"})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0029F_NOTES",dataIndex:"NOTES",width:250,height:50,allowBlank:true,labelSeparator: "",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0029F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0029F_CREATEDBY",dataIndex:"CREATEDBY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0029F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0029F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",disabled:true})   );
       this.fields.add("IS_INSERTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_INSERTED",id:"DC0029F_IS_INSERTED",dataIndex:"IS_INSERTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_GENERATED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_GENERATED",id:"DC0029F_IS_GENERATED",dataIndex:"IS_GENERATED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",disabled:true})   );
       this.fields.add("IS_APPROVED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_APPROVED",id:"DC0029F_IS_APPROVED",dataIndex:"IS_APPROVED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_POSTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_POSTED",id:"DC0029F_IS_POSTED",dataIndex:"IS_POSTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCDOC_NAME", new Ext.form.TextField ({xtype: "textfield",name:"ACCDOC_NAME",id:"DC0029F_ACCDOC_NAME",dataIndex:"ACCDOC_NAME",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc",disabled:true})   );
       this.fields.add("ACCDOC_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ACCDOC_ID",id:"DC0029F_ACCDOC_ID",dataIndex:"ACCDOC_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_MULTI_PAYMENT", new Ext.form.Hidden ({xtype: "hidden",name:"IS_MULTI_PAYMENT",id:"DC0029F_IS_MULTI_PAYMENT",dataIndex:"IS_MULTI_PAYMENT",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")]});
       this.layoutItems.add("Notes",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Notes||"Notes",autoHeight:true,collapsible: true,labelWidth:1,width:"90%",items:[ this.fields.get("NOTES")]});
       this.layoutItems.add("C3",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("Notes"),this.layoutItems.get("Modified")]}); 
       this.layoutItems.add("ProcessingStatus",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.ProcessingStatus||"ProcessingStatus",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("IS_INSERTED"),this.fields.get("IS_GENERATED"),this.fields.get("IS_APPROVED"),this.fields.get("IS_POSTED"),this.fields.get("ACCDOC_NAME")]});
       this.layoutItems.add("Amounts",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Amounts||"Amounts",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("AMOUNT"),this.fields.get("CURRENCY"),this.fields.get("IS_PAYABLE")]});
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("Amounts"),this.layoutItems.get("ProcessingStatus")]}); 
       this.layoutItems.add("DocInfo",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.DocInfo||"DocInfo",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("PAYDOCTYPE_CODE"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("PAYMNT_ACCT"),this.fields.get("BPARTNER_TO"),this.fields.get("BPARTNER_TO_NAME"),this.fields.get("IS_PREPAYMENT"),this.fields.get("PREPAY_ACCT"),this.fields.get("RINV_ID"),this.fields.get("RINV_DOC_NO_DATE")]});
       this.layoutItems.add("Unit",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Unit||"Unit",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_NAME"),this.fields.get("BPARTNER_FROM"),this.fields.get("BPARTNER_FROM_NAME")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("ACCDOC_ID"),this.fields.get("IS_MULTI_PAYMENT"),this.layoutItems.get("Unit"),this.layoutItems.get("DocInfo")]}); 


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
              ,ACCDOC_NAME:""
              ,ACCDOC_ID:""
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
               ,activeItem:0
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

       N21.DataComp.DC0029.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0029", N21.DataComp.DC0029);



