/** 
 * Data Component: DC0044G, Title: Received invoice payments
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0044G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"PAYDOCTYPE_CODE", type:"string" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"BPARTNER_FROM", type:"float" }
         ,{name:"BPARTNER_TO", type:"float" }
         ,{name:"IS_PAYABLE", type:"string" }
         ,{name:"IS_RECEIVABLE", type:"string" }
         ,{name:"AMOUNT", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"PAYMNT_ACCT", type:"string" }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_GENERATED", type:"string" }
         ,{name:"IS_APPROVED", type:"string" }
         ,{name:"IS_POSTED", type:"string" }
         ,{name:"ACCDOC_ID", type:"float" }
         ,{name:"IS_PREPAYMENT", type:"string" }
         ,{name:"PREPAY_ACCT", type:"string" }
         ,{name:"RINV_ID", type:"float" }
         ,{name:"IS_MULTI_PAYMENT", type:"string" }
         ,{name:"IINV_ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0044_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0044_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("PAYDOCTYPE_CODE", new N21.DataComp.LOV0012({xtype: "LOV0012",name:"QRY_PAYDOCTYPE_CODE",id:"DC0044_QRY_PAYDOCTYPE_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code"})  );
         this.queryFields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOC_NO",id:"DC0044_QRY_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no"})  );
         this.queryFields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0044_QRY_DOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("BPARTNER_FROM", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_FROM",id:"DC0044_QRY_BPARTNER_FROM",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from"})  );
         this.queryFields.add("BPARTNER_TO", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_TO",id:"DC0044_QRY_BPARTNER_TO",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to"})  );
         this.queryFields.add("IS_PAYABLE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_PAYABLE",id:"DC0044_QRY_IS_PAYABLE",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Is_payable"})  );
         this.queryFields.add("IS_RECEIVABLE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_RECEIVABLE",id:"DC0044_QRY_IS_RECEIVABLE",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_RECEIVABLE||"Is_receivable"})  );
         this.queryFields.add("AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_AMOUNT",id:"DC0044_QRY_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.AMOUNT||"Amount",style: "text-align:right;"})  );
         this.queryFields.add("CURRENCY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CURRENCY",id:"DC0044_QRY_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"})  );
         this.queryFields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NOTES",id:"DC0044_QRY_NOTES",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"})  );
         this.queryFields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CREATEDON",id:"DC0044_QRY_CREATEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0044_QRY_CREATEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby"})  );
         this.queryFields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0044_QRY_MODIFIEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0044_QRY_MODIFIEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby"})  );
         this.queryFields.add("PAYMNT_ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"QRY_PAYMNT_ACCT",id:"DC0044_QRY_PAYMNT_ACCT",width:100,fieldLabel: this.resourceBundle.FieldLabel.PAYMNT_ACCT||"Paymnt_acct"})  );
         this.queryFields.add("IS_INSERTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_INSERTED",id:"DC0044_QRY_IS_INSERTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted"})  );
         this.queryFields.add("IS_GENERATED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_GENERATED",id:"DC0044_QRY_IS_GENERATED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated"})  );
         this.queryFields.add("IS_APPROVED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_APPROVED",id:"DC0044_QRY_IS_APPROVED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved"})  );
         this.queryFields.add("IS_POSTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_POSTED",id:"DC0044_QRY_IS_POSTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted"})  );
         this.queryFields.add("ACCDOC_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_ACCDOC_ID",id:"DC0044_QRY_ACCDOC_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",style: "text-align:right;"})  );
         this.queryFields.add("IS_PREPAYMENT", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_PREPAYMENT",id:"DC0044_QRY_IS_PREPAYMENT",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment"})  );
         this.queryFields.add("PREPAY_ACCT", new Ext.form.TextField ({xtype: "textfield",name:"QRY_PREPAY_ACCT",id:"DC0044_QRY_PREPAY_ACCT",width:100,fieldLabel: this.resourceBundle.FieldLabel.PREPAY_ACCT||"Prepay_acct"})  );
         this.queryFields.add("RINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_RINV_ID",id:"DC0044_QRY_RINV_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id"})  );
         this.queryFields.add("IS_MULTI_PAYMENT", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_MULTI_PAYMENT",id:"DC0044_QRY_IS_MULTI_PAYMENT",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment"})  );
         this.queryFields.add("IINV_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_IINV_ID",id:"DC0044_QRY_IINV_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.IINV_ID||"Iinv_id",style: "text-align:right;"})  );
  
       this.queryFieldsVisible = [  "PAYDOCTYPE_CODE","DOC_NO","DOC_DATE","AMOUNT","CURRENCY","NOTES","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY","PAYMNT_ACCT","IS_INSERTED","IS_GENERATED","IS_APPROVED","IS_POSTED","ACCDOC_ID","IS_PREPAYMENT","PREPAY_ACCT","IINV_ID" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0044"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0044"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"PAYDOCTYPE_CODE",header:this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code",width:100,dataIndex:'PAYDOCTYPE_CODE',hidden:true,sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",width:100,dataIndex:'DOC_NO',hidden:true,sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"BPARTNER_FROM",header:this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from",width:100,dataIndex:'BPARTNER_FROM',hidden:true,sortable:true}
              ,{ id:"BPARTNER_TO",header:this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to",width:100,dataIndex:'BPARTNER_TO',hidden:true,sortable:true}
              ,{ id:"IS_PAYABLE",header:this.resourceBundle.FieldLabel.IS_PAYABLE||"Is_payable",width:100,dataIndex:'IS_PAYABLE',hidden:true,sortable:true}
              ,{ id:"IS_RECEIVABLE",header:this.resourceBundle.FieldLabel.IS_RECEIVABLE||"Is_receivable",width:100,dataIndex:'IS_RECEIVABLE',hidden:true,sortable:true}
              ,{ id:"AMOUNT",header:this.resourceBundle.FieldLabel.AMOUNT||"Amount",width:100,dataIndex:'AMOUNT',sortable:true,align:'right'}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Createdon",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"PAYMNT_ACCT",header:this.resourceBundle.FieldLabel.PAYMNT_ACCT||"Paymnt_acct",width:100,dataIndex:'PAYMNT_ACCT',hidden:true,sortable:true}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_GENERATED",header:this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",width:50,dataIndex:'IS_GENERATED',hidden:true,sortable:true}
              ,{ id:"IS_APPROVED",header:this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",width:50,dataIndex:'IS_APPROVED',hidden:true,sortable:true}
              ,{ id:"IS_POSTED",header:this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",width:50,dataIndex:'IS_POSTED',hidden:true,sortable:true}
              ,{ id:"ACCDOC_ID",header:this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",width:100,dataIndex:'ACCDOC_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"IS_PREPAYMENT",header:this.resourceBundle.FieldLabel.IS_PREPAYMENT||"Is_prepayment",width:50,dataIndex:'IS_PREPAYMENT',hidden:true,sortable:true}
              ,{ id:"PREPAY_ACCT",header:this.resourceBundle.FieldLabel.PREPAY_ACCT||"Prepay_acct",width:100,dataIndex:'PREPAY_ACCT',hidden:true,sortable:true}
              ,{ id:"RINV_ID",header:this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",width:100,dataIndex:'RINV_ID',hidden:true,sortable:true}
              ,{ id:"IS_MULTI_PAYMENT",header:this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment",width:100,dataIndex:'IS_MULTI_PAYMENT',hidden:true,sortable:true}
              ,{ id:"IINV_ID",header:this.resourceBundle.FieldLabel.IINV_ID||"Iinv_id",width:100,dataIndex:'IINV_ID',hidden:true,sortable:true,align:'right'}
          ]
          ,dataComponentName:"DC0044G"
          ,queryArraySize:-1
        });
       N21.DataComp.DC0044G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0044G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,PAYDOCTYPE_CODE:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BPARTNER_FROM:""
              ,BPARTNER_TO:""
              ,IS_PAYABLE:""
              ,IS_RECEIVABLE:""
              ,AMOUNT:""
              ,CURRENCY:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,PAYMNT_ACCT:""
              ,IS_INSERTED:""
              ,IS_GENERATED:""
              ,IS_APPROVED:""
              ,IS_POSTED:""
              ,ACCDOC_ID:""
              ,IS_PREPAYMENT:""
              ,PREPAY_ACCT:""
              ,RINV_ID:""
              ,IS_MULTI_PAYMENT:""
              ,IINV_ID:""});
     }
  });
  Ext.reg("DC0044G", N21.DataComp.DC0044G);
/** 
 * Data Component: DC0044F, Title: Received invoice payments
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0044F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0044G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0044F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0044F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAYDOCTYPE_CODE", new N21.DataComp.LOV0012({xtype: "LOV0012",selectOnFocus:true,name:"PAYDOCTYPE_CODE",id:"DC0044F_PAYDOCTYPE_CODE",dataIndex:"PAYDOCTYPE_CODE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PAYDOCTYPE_CODE||"Paydoctype_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0044F_DOC_NO",dataIndex:"DOC_NO",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0044F_DOC_DATE",dataIndex:"DOC_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("BPARTNER_FROM", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_FROM",id:"DC0044F_BPARTNER_FROM",dataIndex:"BPARTNER_FROM",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_FROM||"Bpartner_from",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_TO", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_TO",id:"DC0044F_BPARTNER_TO",dataIndex:"BPARTNER_TO",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_TO||"Bpartner_to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_PAYABLE", new Ext.form.Hidden ({xtype: "hidden",name:"IS_PAYABLE",id:"DC0044F_IS_PAYABLE",dataIndex:"IS_PAYABLE",width:50,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Is_payable",insert_allowed:true,update_allowed:true})   );
       this.fields.add("AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"AMOUNT",id:"DC0044F_AMOUNT",dataIndex:"AMOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.AMOUNT||"Amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;",fieldClass: "field_important_1"})   );
       this.fields.add("CURRENCY", new Ext.form.TextField ({xtype: "textfield",name:"CURRENCY",id:"DC0044F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"NOTES",id:"DC0044F_NOTES",dataIndex:"NOTES",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAYMNT_ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"PAYMNT_ACCT",id:"DC0044F_PAYMNT_ACCT",dataIndex:"PAYMNT_ACCT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PAYMNT_ACCT||"Paymnt_acct",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"RINV_ID",id:"DC0044F_RINV_ID",dataIndex:"RINV_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Rinv_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_MULTI_PAYMENT", new Ext.form.Hidden ({xtype: "hidden",name:"IS_MULTI_PAYMENT",id:"DC0044F_IS_MULTI_PAYMENT",dataIndex:"IS_MULTI_PAYMENT",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_MULTI_PAYMENT||"Is_multi_payment",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("PAYDOCTYPE_CODE")
                 ,this.fields.get("DOC_NO")
                 ,this.fields.get("DOC_DATE")
                 ,this.fields.get("BPARTNER_FROM")
                 ,this.fields.get("BPARTNER_TO")
                 ,this.fields.get("IS_PAYABLE")
                 ,this.fields.get("AMOUNT")
                 ,this.fields.get("CURRENCY")
                 ,this.fields.get("NOTES")
                 ,this.fields.get("PAYMNT_ACCT")
                 ,this.fields.get("RINV_ID")
                 ,this.fields.get("IS_MULTI_PAYMENT")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0044F"
          ,firstFocusFieldName:"PAYDOCTYPE_CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0044F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0044F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,PAYDOCTYPE_CODE:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BPARTNER_FROM:""
              ,BPARTNER_TO:""
              ,IS_PAYABLE:""
              ,IS_RECEIVABLE:""
              ,AMOUNT:""
              ,CURRENCY:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,PAYMNT_ACCT:""
              ,IS_INSERTED:""
              ,IS_GENERATED:""
              ,IS_APPROVED:""
              ,IS_POSTED:""
              ,ACCDOC_ID:""
              ,IS_PREPAYMENT:""
              ,PREPAY_ACCT:""
              ,RINV_ID:""
              ,IS_MULTI_PAYMENT:""
              ,IINV_ID:""});
     }


  });
  Ext.reg("DC0044F", N21.DataComp.DC0044F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0044
 * Title: Received invoice payments
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0044 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0044"
          ,masterName:"DC0044G"
          ,detailName:"DC0044F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0044G",id: "DC0044G",region:"west"  ,split:true,width:"40%",minWidth:0}
             ,{xtype: "DC0044F",id: "DC0044F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0044.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0044", N21.DataComp.DC0044);



