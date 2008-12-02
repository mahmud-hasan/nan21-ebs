/** 
 * Data Component: DC0004G, Title: Issued invoices
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0004G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"ISSUER_ID", type:"float" }
         ,{name:"ISSUER_NAME", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DOC_TYPE", type:"string" }
         ,{name:"DOC_CURRENCY", type:"string" }
         ,{name:"DOC_NO_SERIAL", type:"string" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_NO_FULL", type:"string" }
         ,{name:"RECEIVER_ID", type:"float" }
         ,{name:"RECEIVER_NAME", type:"string" }
         ,{name:"ACCT", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"DUE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"TOTAL_AMOUNT", type:"float" }
         ,{name:"TOTAL_NET_AMOUNT", type:"float" }
         ,{name:"TOTAL_TAX_AMOUNT", type:"float" }
         ,{name:"CURRENCY_XRATE", type:"float" }
         ,{name:"REF_IINV_ID", type:"float" }
         ,{name:"REF_IINV_DOC_NO", type:"string" }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_PRINTED", type:"string" }
         ,{name:"IS_POSTED", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"POSTEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"POSTEDBY", type:"string" }
         ,{name:"ACCDOC_ID", type:"float" }
         ,{name:"ACCDOC_NAME", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0004_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",name:"QRY_CLIENT_NAME",id:"DC0004_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0004_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("ISSUER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ISSUER_ID",id:"DC0004_QRY_ISSUER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id"})  );
         this.queryFields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0004_QRY_DOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Inv date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("DOC_TYPE", new N21.DataComp.LOV0003({xtype: "LOV0003",name:"QRY_DOC_TYPE",id:"DC0004_QRY_DOC_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Inv. type"})  );
         this.queryFields.add("DOC_CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_DOC_CURRENCY",id:"DC0004_QRY_DOC_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency"})  );
         this.queryFields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOC_NO",id:"DC0004_QRY_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no"})  );
         this.queryFields.add("RECEIVER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_RECEIVER_ID",id:"DC0004_QRY_RECEIVER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id"})  );
         this.queryFields.add("RECEIVER_NAME", new N21.DataComp.LOV0041({xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0004_QRY_RECEIVER_ID"},{column:"ACCT",field:"DC0004_QRY_ACCT"}],selectOnFocus:true,name:"QRY_RECEIVER_NAME",id:"DC0004_QRY_RECEIVER_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver"})  );
         this.queryFields.add("REF_IINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_REF_IINV_ID",id:"DC0004_QRY_REF_IINV_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_ID||"Ref_inv_id"})  );
         this.queryFields.add("REF_IINV_DOC_NO", new N21.DataComp.LOV0013({xtype: "LOV0013",displayColumn: "DOC_NO_FULL",fieldMapping: [{column:"ID",field:"DC0004_QRY_REF_IINV_ID"}],selectOnFocus:true,name:"QRY_REF_IINV_DOC_NO",id:"DC0004_QRY_REF_IINV_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_DOC_NO||"Ref_inv_doc_no"})  );
         this.queryFields.add("ACCDOC_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ACCDOC_ID",id:"DC0004_QRY_ACCDOC_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","DOC_DATE","DOC_TYPE","DOC_CURRENCY","DOC_NO","RECEIVER_NAME","REF_IINV_DOC_NO" ];
       Ext.apply(this, {
           store: new Ext.data.GroupingStore({
               id:"storeDC0004"
              ,groupOnSort :false
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0004"
              ,remoteSort :true
              ,sortInfo:{field: "DOC_DATE", direction: "DESC"}
              ,reader:new Ext.data.JsonReader({
                            totalProperty: "totalCount"  
                            ,root: "records"      
                        }, this.dataRecordMeta)
             ,groupField:""
           })
          ,view: new Ext.grid.GroupingView({
                    groupTextTpl: "{text}"
                })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"ISSUER_ID",header:this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",width:100,dataIndex:'ISSUER_ID',hidden:true,sortable:true}
              ,{ id:"ISSUER_NAME",header:this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",width:100,dataIndex:'ISSUER_NAME',hidden:true,sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Inv date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DOC_TYPE",header:this.resourceBundle.FieldLabel.DOC_TYPE||"Inv. type",width:70,dataIndex:'DOC_TYPE',sortable:true}
              ,{ id:"DOC_CURRENCY",header:this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",width:60,dataIndex:'DOC_CURRENCY',sortable:true}
              ,{ id:"DOC_NO_SERIAL",header:this.resourceBundle.FieldLabel.DOC_NO_SERIAL||"Serial no",width:100,dataIndex:'DOC_NO_SERIAL',hidden:true,sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc no",width:100,dataIndex:'DOC_NO',hidden:true,sortable:true}
              ,{ id:"DOC_NO_FULL",header:this.resourceBundle.FieldLabel.DOC_NO_FULL||"Doc no",width:100,dataIndex:'DOC_NO_FULL',sortable:true}
              ,{ id:"RECEIVER_ID",header:this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",width:100,dataIndex:'RECEIVER_ID',hidden:true,sortable:true}
              ,{ id:"RECEIVER_NAME",header:this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",width:180,dataIndex:'RECEIVER_NAME',sortable:true}
              ,{ id:"ACCT",header:this.resourceBundle.FieldLabel.ACCT||"Account",width:100,dataIndex:'ACCT',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"DUE_DATE",header:this.resourceBundle.FieldLabel.DUE_DATE||"Due_date",width:100,dataIndex:'DUE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TOTAL_NET_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Net amount",width:100,dataIndex:'TOTAL_NET_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TOTAL_TAX_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Tax amount",width:100,dataIndex:'TOTAL_TAX_AMOUNT',sortable:true,align:'right'}
              ,{ id:"CURRENCY_XRATE",header:this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Exchange rate",width:100,dataIndex:'CURRENCY_XRATE',hidden:true,sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"REF_IINV_ID",header:this.resourceBundle.FieldLabel.REF_IINV_ID||"Ref_inv_id",width:100,dataIndex:'REF_IINV_ID',hidden:true,sortable:true}
              ,{ id:"REF_IINV_DOC_NO",header:this.resourceBundle.FieldLabel.REF_IINV_DOC_NO||"Ref_inv_doc_no",width:100,dataIndex:'REF_IINV_DOC_NO',hidden:true,sortable:true}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_PRINTED",header:this.resourceBundle.FieldLabel.IS_PRINTED||"Printed",width:50,dataIndex:'IS_PRINTED',sortable:true}
              ,{ id:"IS_POSTED",header:this.resourceBundle.FieldLabel.IS_POSTED||"Posted",width:50,dataIndex:'IS_POSTED',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"POSTEDON",header:this.resourceBundle.FieldLabel.POSTEDON||"Postedon",width:100,dataIndex:'POSTEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"POSTEDBY",header:this.resourceBundle.FieldLabel.POSTEDBY||"Postedby",width:100,dataIndex:'POSTEDBY',hidden:true,sortable:true}
              ,{ id:"ACCDOC_ID",header:this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",width:100,dataIndex:'ACCDOC_ID',hidden:true,sortable:true}
              ,{ id:"ACCDOC_NAME",header:this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc",width:100,dataIndex:'ACCDOC_NAME',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0004G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0004G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0004G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,ISSUER_ID:""
              ,ISSUER_NAME:""
              ,DOC_DATE:""
              ,DOC_TYPE:""
              ,DOC_CURRENCY:""
              ,DOC_NO_SERIAL:""
              ,DOC_NO:""
              ,DOC_NO_FULL:""
              ,RECEIVER_ID:""
              ,RECEIVER_NAME:""
              ,ACCT:""
              ,NOTES:""
              ,DUE_DATE:""
              ,TOTAL_AMOUNT:""
              ,TOTAL_NET_AMOUNT:""
              ,TOTAL_TAX_AMOUNT:""
              ,CURRENCY_XRATE:""
              ,REF_IINV_ID:""
              ,REF_IINV_DOC_NO:""
              ,IS_INSERTED:""
              ,IS_PRINTED:""
              ,IS_POSTED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,POSTEDON:""
              ,POSTEDBY:""
              ,ACCDOC_ID:""
              ,ACCDOC_NAME:""});
     }
  });
  Ext.reg("DC0004G", N21.DataComp.DC0004G);
/** 
 * Data Component: DC0004F, Title: Issued invoices
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0004F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0004G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0004F_ID",dataIndex:"ID",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0004F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0004F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0004F_CLIENT_ID",dataIndex:"CLIENT_ID",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ISSUER_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",fieldMapping: [{column:"ID",field:"DC0004F_ISSUER_ID"}],selectOnFocus:true,name:"ISSUER_NAME",id:"DC0004F_ISSUER_NAME",dataIndex:"ISSUER_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ISSUER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ISSUER_ID",id:"DC0004F_ISSUER_ID",dataIndex:"ISSUER_ID",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0004F_DOC_DATE",dataIndex:"DOC_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Inv date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("DOC_TYPE", new N21.DataComp.LOV0003({xtype: "LOV0003",selectOnFocus:true,name:"DOC_TYPE",id:"DC0004F_DOC_TYPE",dataIndex:"DOC_TYPE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Inv. type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"DOC_CURRENCY",id:"DC0004F_DOC_CURRENCY",dataIndex:"DOC_CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO_SERIAL", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO_SERIAL",id:"DC0004F_DOC_NO_SERIAL",dataIndex:"DOC_NO_SERIAL",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO_SERIAL||"Serial no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0004F_DOC_NO",dataIndex:"DOC_NO",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RECEIVER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"RECEIVER_ID",id:"DC0004F_RECEIVER_ID",dataIndex:"RECEIVER_ID",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("RECEIVER_NAME", new N21.DataComp.LOV0041({xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0004F_RECEIVER_ID"},{column:"ACCT",field:"DC0004F_ACCT"}],selectOnFocus:true,name:"RECEIVER_NAME",id:"DC0004F_RECEIVER_NAME",dataIndex:"RECEIVER_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"ACCT",id:"DC0004F_ACCT",dataIndex:"ACCT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCT||"Account",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0004F_NOTES",dataIndex:"NOTES",width:"90%",height:50,allowBlank:true,labelSeparator: "",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DUE_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DUE_DATE",id:"DC0004F_DUE_DATE",dataIndex:"DUE_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DUE_DATE||"Due_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("TOTAL_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"TOTAL_AMOUNT",id:"DC0004F_TOTAL_AMOUNT",dataIndex:"TOTAL_AMOUNT",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",disabled:true,decimalPrecision:2,style: "text-align:right;",fieldClass: "field_important_1"})   );
       this.fields.add("TOTAL_NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"TOTAL_NET_AMOUNT",id:"DC0004F_TOTAL_NET_AMOUNT",dataIndex:"TOTAL_NET_AMOUNT",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Net amount",disabled:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("TOTAL_TAX_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"TOTAL_TAX_AMOUNT",id:"DC0004F_TOTAL_TAX_AMOUNT",dataIndex:"TOTAL_TAX_AMOUNT",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Tax amount",disabled:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("CURRENCY_XRATE", new Ext.form.NumberField ({xtype: "numberfield",name:"CURRENCY_XRATE",id:"DC0004F_CURRENCY_XRATE",dataIndex:"CURRENCY_XRATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Exchange rate",insert_allowed:true,update_allowed:true,decimalPrecision:4,style: "text-align:right;"})   );
       this.fields.add("REF_IINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"REF_IINV_ID",id:"DC0004F_REF_IINV_ID",dataIndex:"REF_IINV_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_ID||"Ref_inv_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REF_IINV_DOC_NO", new N21.DataComp.LOV0013({xtype: "LOV0013",displayColumn: "DOC_NO_FULL",fieldMapping: [{column:"ID",field:"DC0004F_REF_IINV_ID"}],selectOnFocus:true,name:"REF_IINV_DOC_NO",id:"DC0004F_REF_IINV_DOC_NO",dataIndex:"REF_IINV_DOC_NO",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_DOC_NO||"Ref_inv_doc_no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_INSERTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_INSERTED",id:"DC0004F_IS_INSERTED",dataIndex:"IS_INSERTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_PRINTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_PRINTED",id:"DC0004F_IS_PRINTED",dataIndex:"IS_PRINTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_PRINTED||"Printed",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_POSTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_POSTED",id:"DC0004F_IS_POSTED",dataIndex:"IS_POSTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Posted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0004F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0004F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0004F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0004F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",disabled:true})   );
       this.fields.add("POSTEDON", new Ext.form.DateField ({xtype: "datefield",name:"POSTEDON",id:"DC0004F_POSTEDON",dataIndex:"POSTEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.POSTEDON||"Postedon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("POSTEDBY", new Ext.form.TextField ({xtype: "textfield",name:"POSTEDBY",id:"DC0004F_POSTEDBY",dataIndex:"POSTEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.POSTEDBY||"Postedby",disabled:true})   );
       this.fields.add("ACCDOC_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ACCDOC_ID",id:"DC0004F_ACCDOC_ID",dataIndex:"ACCDOC_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCDOC_NAME", new Ext.form.TextField ({xtype: "textfield",name:"ACCDOC_NAME",id:"DC0004F_ACCDOC_NAME",dataIndex:"ACCDOC_NAME",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc",disabled:true})   );

       this.layoutItems.add("DC0020",
             new Ext.Window({ xtype:"window", modal:true, title:N21.DataComp.DC0020.prototype.resourceBundle.DcProperty.Title,  closeAction:"hide",closable:true,layout:"fit", width:800, height:450, items:{xtype:"DC0020",id:"DC0020", parentDcRelation:{name:"DC0004F",relation:[{parent:"ID",child:"IINV_ID"}]}         }} ) ); 
       this.layoutItems.add("InvAmounts",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.InvAmounts||"InvAmounts",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("DOC_CURRENCY"),this.fields.get("TOTAL_AMOUNT"),this.fields.get("TOTAL_NET_AMOUNT"),this.fields.get("TOTAL_TAX_AMOUNT"),this.fields.get("CURRENCY_XRATE")]});
       this.layoutItems.add("Notes",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Notes||"Notes",autoHeight:true,collapsible: true,labelWidth:1,width:"90%",items:[ this.fields.get("NOTES")]});
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.35, items:[ this.fields.get("REF_IINV_DOC_NO"),this.fields.get("REF_IINV_ID"),this.layoutItems.get("InvAmounts"),this.layoutItems.get("Notes")]}); 
       this.layoutItems.add("DC0042",
             new Ext.Window({ xtype:"window", modal:true, title:N21.DataComp.DC0042.prototype.resourceBundle.DcProperty.Title,  closeAction:"hide",closable:true,layout:"fit", width:600, height:400, items:{xtype:"DC0042",id:"DC0042", parentDcRelation:{name:"DC0004F",relation:[{parent:"ACCDOC_ID",child:"ACCDOC_ID"}]}         }} ) ); 
       this.layoutItems.add("Status",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Status||"Status",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("IS_INSERTED"),this.fields.get("IS_PRINTED"),this.fields.get("IS_POSTED"),this.fields.get("ACCDOC_ID"),this.fields.get("ACCDOC_NAME")]});
       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY"),this.fields.get("POSTEDON"),this.fields.get("POSTEDBY")]});
       this.layoutItems.add("C3",
             { layout:"form",columnWidth:.25, items:[ this.layoutItems.get("Status"),this.layoutItems.get("Modified")]}); 
       this.layoutItems.add("DocInfo",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.DocInfo||"DocInfo",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("CLIENT_NAME"),this.fields.get("ISSUER_NAME"),this.fields.get("DOC_DATE"),this.fields.get("DOC_TYPE"),this.fields.get("DOC_NO_SERIAL"),this.fields.get("DOC_NO"),this.fields.get("DUE_DATE")]});
       this.layoutItems.add("Receiver",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Receiver||"Receiver",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("RECEIVER_ID"),this.fields.get("RECEIVER_NAME"),this.fields.get("ACCT")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("ISSUER_ID"),this.layoutItems.get("DocInfo"),this.layoutItems.get("Receiver")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2"),this.layoutItems.get("C3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0004F"
          ,firstFocusFieldName:"DOC_DATE"
          ,childDCs: [{name:"DC0020",relation:[{parent:"ID",child:"IINV_ID"}]},{name:"DC0042",relation:[{parent:"ACCDOC_ID",child:"ACCDOC_ID"}]}]
          ,buttons: [{xtype:"button",text:"Print",scope:this,handler:function() {this.run_report({reportId:"PrintInvoice"},[{P_INVOICE_ID:"ID"}])}  },{xtype:"button",text:"Acc.Doc",scope:this,handler:function() {this.show_window("DC0042");}  },{xtype:"button",text:"Inv. items",scope:this,handler:function() {this.show_window("DC0020");}  }]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0004F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0004F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,ISSUER_ID:""
              ,ISSUER_NAME:""
              ,DOC_DATE:""
              ,DOC_TYPE:""
              ,DOC_CURRENCY:""
              ,DOC_NO_SERIAL:""
              ,DOC_NO:""
              ,DOC_NO_FULL:""
              ,RECEIVER_ID:""
              ,RECEIVER_NAME:""
              ,ACCT:""
              ,NOTES:""
              ,DUE_DATE:""
              ,TOTAL_AMOUNT:""
              ,TOTAL_NET_AMOUNT:""
              ,TOTAL_TAX_AMOUNT:""
              ,CURRENCY_XRATE:""
              ,REF_IINV_ID:""
              ,REF_IINV_DOC_NO:""
              ,IS_INSERTED:""
              ,IS_PRINTED:""
              ,IS_POSTED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,POSTEDON:""
              ,POSTEDBY:""
              ,ACCDOC_ID:""
              ,ACCDOC_NAME:""});
     }


  });
  Ext.reg("DC0004F", N21.DataComp.DC0004F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0004
 * Title: Issued invoices
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0004 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0004"
          ,masterName:"DC0004G"
          ,detailName:"DC0004F"
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
                            xtype: "DC0004G"
                           ,id: "DC0004G"
                           ,height:400
                       },{
                           xtype:"DC0004F"
                          ,id:"DC0004F"
                          ,height:400
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

       N21.DataComp.DC0004.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0004", N21.DataComp.DC0004);



