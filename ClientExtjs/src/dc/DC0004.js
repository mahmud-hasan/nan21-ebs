/** 
 * Data Component: DC0004G, Title: Issued invoices
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0004G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ID", type:"float" }
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
         ,{name:"NOTES", type:"string" }
         ,{name:"DUE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"TOTAL_AMOUNT", type:"float" }
         ,{name:"TOTAL_NET_AMOUNT", type:"float" }
         ,{name:"TOTAL_TAX_AMOUNT", type:"float" }
         ,{name:"CURRENCY_XRATE", type:"float" }
         ,{name:"REF_IINV_DOC_NO", type:"string" }
         ,{name:"REF_IINV_ID", type:"float" }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_PRINTED", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0004F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0004F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0004F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("ISSUER_ID",new Ext.form.Hidden({name:"QRY_ISSUER_ID",id:"DC0004F_QRY_ISSUER_ID",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",allowBlank:true,width:100}));
       this.queryFields.add("DOC_DATE",new Ext.form.DateField({name:"QRY_DOC_DATE",id:"DC0004F_QRY_DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Inv date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("DOC_TYPE",new  N21.DataComp.LOV0003({name:"QRY_DOC_TYPE",id:"DC0004F_QRY_DOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Inv. type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("DOC_CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_DOC_CURRENCY",id:"DC0004F_QRY_DOC_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("DOC_NO",new Ext.form.TextField({name:"QRY_DOC_NO",id:"DC0004F_QRY_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",allowBlank:true,width:100}));
       this.queryFields.add("RECEIVER_ID",new Ext.form.Hidden({name:"QRY_RECEIVER_ID",id:"DC0004F_QRY_RECEIVER_ID",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",allowBlank:true,width:100}));
       this.queryFields.add("RECEIVER_NAME",new  N21.DataComp.LOV0041({name:"QRY_RECEIVER_NAME",id:"DC0004F_QRY_RECEIVER_NAME",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_QRY_RECEIVER_ID"}],paramMapping: [{param:"p_client_id",field:"DC0004F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("REF_IINV_DOC_NO",new  N21.DataComp.LOV0013({name:"QRY_REF_IINV_DOC_NO",id:"DC0004F_QRY_REF_IINV_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_DOC_NO||"Ref_inv_doc_no",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_QRY_REF_IINV_ID"}],displayColumn: "DOC_NO_FULL"}));
       this.queryFields.add("REF_IINV_ID",new Ext.form.Hidden({name:"QRY_REF_IINV_ID",id:"DC0004F_QRY_REF_IINV_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_ID||"Ref_inv_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","DOC_DATE","DOC_TYPE","DOC_CURRENCY","DOC_NO","RECEIVER_NAME","REF_IINV_DOC_NO" ];
       Ext.apply(this, {
           store: new Ext.data.GroupingStore({
               id:"storeDC0004"
              ,groupOnSort :false
              ,url:buildBaseUrlFetch("DC0004", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,sortInfo:{field: "DOC_DATE", direction: "DESC"}
              ,reader:new Ext.data.JsonReader({
                            totalProperty: "totalCount"  
                            ,root: "records"      
                        }, this.dataRecordMeta)
             ,groupField:""
           })
           ,loadMask :true
          ,view: new Ext.grid.GroupingView({
                    groupTextTpl: "{text}"
                })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
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
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"DUE_DATE",header:this.resourceBundle.FieldLabel.DUE_DATE||"Due_date",width:100,dataIndex:'DUE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TOTAL_NET_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Net amount",width:100,dataIndex:'TOTAL_NET_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TOTAL_TAX_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Tax amount",width:100,dataIndex:'TOTAL_TAX_AMOUNT',sortable:true,align:'right'}
              ,{ id:"CURRENCY_XRATE",header:this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Exchange rate",width:100,dataIndex:'CURRENCY_XRATE',hidden:true,sortable:true,align:'right',decimalPrecision:4}
              ,{ id:"REF_IINV_DOC_NO",header:this.resourceBundle.FieldLabel.REF_IINV_DOC_NO||"Ref_inv_doc_no",width:100,dataIndex:'REF_IINV_DOC_NO',hidden:true,sortable:true}
              ,{ id:"REF_IINV_ID",header:this.resourceBundle.FieldLabel.REF_IINV_ID||"Ref_inv_id",width:100,dataIndex:'REF_IINV_ID',hidden:true,sortable:true}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_PRINTED",header:this.resourceBundle.FieldLabel.IS_PRINTED||"Printed",width:50,dataIndex:'IS_PRINTED',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
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
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ID:""
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
              ,NOTES:""
              ,DUE_DATE:""
              ,TOTAL_AMOUNT:""
              ,TOTAL_NET_AMOUNT:""
              ,TOTAL_TAX_AMOUNT:""
              ,CURRENCY_XRATE:""
              ,REF_IINV_DOC_NO:""
              ,REF_IINV_ID:""
              ,IS_INSERTED:""
              ,IS_PRINTED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
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
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0004F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_CLIENT_ID"}]}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0004F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0004F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("ISSUER_ID",new Ext.form.Hidden({name:"ISSUER_ID",id:"DC0004F_ISSUER_ID",dataIndex:"ISSUER_ID",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("ISSUER_NAME",new  N21.DataComp.LOV0064({name:"ISSUER_NAME",id:"DC0004F_ISSUER_NAME",dataIndex:"ISSUER_NAME",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_ISSUER_ID"}],paramMapping: [{param:"p_client_id",field:"DC0004F.CLIENT_ID"}]}));
       this.fields.add("DOC_DATE",new Ext.form.DateField({name:"DOC_DATE",id:"DC0004F_DOC_DATE",dataIndex:"DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Inv date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("DOC_TYPE",new  N21.DataComp.LOV0003({name:"DOC_TYPE",id:"DC0004F_DOC_TYPE",dataIndex:"DOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Inv. type",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DOC_CURRENCY",new  N21.DataComp.LOV0001({name:"DOC_CURRENCY",id:"DC0004F_DOC_CURRENCY",dataIndex:"DOC_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DOC_NO_SERIAL",new Ext.form.TextField({name:"DOC_NO_SERIAL",id:"DC0004F_DOC_NO_SERIAL",dataIndex:"DOC_NO_SERIAL",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO_SERIAL||"Serial no",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_NO",new Ext.form.TextField({name:"DOC_NO",id:"DC0004F_DOC_NO",dataIndex:"DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("RECEIVER_ID",new Ext.form.Hidden({name:"RECEIVER_ID",id:"DC0004F_RECEIVER_ID",dataIndex:"RECEIVER_ID",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("RECEIVER_NAME",new  N21.DataComp.LOV0041({name:"RECEIVER_NAME",id:"DC0004F_RECEIVER_NAME",dataIndex:"RECEIVER_NAME",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_RECEIVER_ID"}],paramMapping: [{param:"p_client_id",field:"DC0004F.CLIENT_ID"}]}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0004F_NOTES",dataIndex:"NOTES",labelSeparator: "",allowBlank:true,width:"90%",height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("DUE_DATE",new Ext.form.DateField({name:"DUE_DATE",id:"DC0004F_DUE_DATE",dataIndex:"DUE_DATE",fieldLabel: this.resourceBundle.FieldLabel.DUE_DATE||"Due_date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("TOTAL_AMOUNT",new Ext.form.NumberField({name:"TOTAL_AMOUNT",id:"DC0004F_TOTAL_AMOUNT",dataIndex:"TOTAL_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",allowBlank:true,width:120,disabled:true,style: "text-align:right;",fieldClass: "field_important_1",decimalPrecision:2}));
       this.fields.add("TOTAL_NET_AMOUNT",new Ext.form.NumberField({name:"TOTAL_NET_AMOUNT",id:"DC0004F_TOTAL_NET_AMOUNT",dataIndex:"TOTAL_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Net amount",allowBlank:true,width:120,disabled:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("TOTAL_TAX_AMOUNT",new Ext.form.NumberField({name:"TOTAL_TAX_AMOUNT",id:"DC0004F_TOTAL_TAX_AMOUNT",dataIndex:"TOTAL_TAX_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Tax amount",allowBlank:true,width:120,disabled:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CURRENCY_XRATE",new Ext.form.NumberField({name:"CURRENCY_XRATE",id:"DC0004F_CURRENCY_XRATE",dataIndex:"CURRENCY_XRATE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_XRATE||"Exchange rate",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:4}));
       this.fields.add("REF_IINV_DOC_NO",new  N21.DataComp.LOV0013({name:"REF_IINV_DOC_NO",id:"DC0004F_REF_IINV_DOC_NO",dataIndex:"REF_IINV_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_DOC_NO||"Ref_inv_doc_no",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0004F_REF_IINV_ID"}],displayColumn: "DOC_NO_FULL"}));
       this.fields.add("REF_IINV_ID",new Ext.form.Hidden({name:"REF_IINV_ID",id:"DC0004F_REF_IINV_ID",dataIndex:"REF_IINV_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_IINV_ID||"Ref_inv_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_INSERTED",new Ext.ux.form.XCheckbox({name:"IS_INSERTED",id:"DC0004F_IS_INSERTED",dataIndex:"IS_INSERTED",fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_PRINTED",new Ext.ux.form.XCheckbox({name:"IS_PRINTED",id:"DC0004F_IS_PRINTED",dataIndex:"IS_PRINTED",fieldLabel: this.resourceBundle.FieldLabel.IS_PRINTED||"Printed",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0004F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0004F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0004F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0004F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:100,disabled:true}));

       this.layoutItems.add("DC0020",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0020 - "+(N21.DataComp.DC0020.prototype.resourceBundle.DcProperty.Title||"Window"),  closeAction:"hide",closable:true,layout:"fit", width:700, height:450, items:{xtype:"DC0020",id:"DC0020", parentDcRelation:{name:"DC0004F",relation:[{parent:"ID",child:"IINV_ID"}]}         }} ) ); 
       this.layoutItems.add("InvAmounts",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.InvAmounts||"InvAmounts",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("DOC_CURRENCY"),this.fields.get("TOTAL_AMOUNT"),this.fields.get("TOTAL_NET_AMOUNT"),this.fields.get("TOTAL_TAX_AMOUNT"),this.fields.get("CURRENCY_XRATE")] });
       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Notes||"Notes",border:true,labelWidth:80,labelAlign:"top",width:"250"   ,items:[ this.fields.get("NOTES")] });
       this.layoutItems.add("C2",
             { layout:"form",width:280,labelAlign:"left",labelWidth:100, items:[ this.fields.get("REF_IINV_DOC_NO"),this.fields.get("REF_IINV_ID"),this.layoutItems.get("InvAmounts"),this.layoutItems.get("Notes")]
 }); 
       this.layoutItems.add("Status",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Status||"Status",border:true,labelWidth:80,labelAlign:"left",width:"220"   ,items:[ this.fields.get("IS_INSERTED"),this.fields.get("IS_PRINTED")] });
       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelWidth:80,labelAlign:"left",width:"220"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")] });
       this.layoutItems.add("C3",
             { layout:"form",width:260,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Status"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("DocInfo",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.DocInfo||"DocInfo",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("CLIENT_CODE"),this.fields.get("ISSUER_NAME"),this.fields.get("DOC_DATE"),this.fields.get("DOC_TYPE"),this.fields.get("DOC_NO_SERIAL"),this.fields.get("DOC_NO"),this.fields.get("DUE_DATE")] });
       this.layoutItems.add("Receiver",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Receiver||"Receiver",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("RECEIVER_ID"),this.fields.get("RECEIVER_NAME")] });
       this.layoutItems.add("C1",
             { layout:"form",width:330,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("ISSUER_ID"),this.layoutItems.get("DocInfo"),this.layoutItems.get("Receiver")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2"),this.layoutItems.get("C3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0004F"
          ,firstFocusFieldName:"DOC_DATE"
          ,childDCs: [{name:"DC0020",relation:[{parent:"ID",child:"IINV_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Print",handler:function() {this.run_report({reportId:"PrintInvoice"},[{P_INVOICE_ID:"ID"}])}}
                    ,{xtype:"button",scope:this,text:"Inv. items",handler:function() {this.show_window("DC0020");}}]
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
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ID:""
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
              ,NOTES:""
              ,DUE_DATE:""
              ,TOTAL_AMOUNT:""
              ,TOTAL_NET_AMOUNT:""
              ,TOTAL_TAX_AMOUNT:""
              ,CURRENCY_XRATE:""
              ,REF_IINV_DOC_NO:""
              ,REF_IINV_ID:""
              ,IS_INSERTED:""
              ,IS_PRINTED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
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
               ,activeItem:1
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
,"->","<span class='dcName'>DC0004</span>"          )
        }); 

       N21.DataComp.DC0004.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0004", N21.DataComp.DC0004);



