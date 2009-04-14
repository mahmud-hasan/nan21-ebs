/** 
 * Data Component: DC0026G, Title: Received invoice
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0026G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"RECEIVER_NAME", type:"string" }
         ,{name:"RECEIVER_ID", type:"float" }
         ,{name:"DOC_TYPE", type:"string" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ISSUER_NAME", type:"string" }
         ,{name:"ISSUER_ID", type:"float" }
         ,{name:"DOC_CURRENCY", type:"string" }
         ,{name:"TOTAL_AMOUNT", type:"float" }
         ,{name:"TOTAL_NET_AMOUNT", type:"float" }
         ,{name:"TOTAL_TAX_AMOUNT", type:"float" }
         ,{name:"DUE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_PAYABLE", type:"string" }
         ,{name:"IS_PAYED", type:"string" }
         ,{name:"REF_RINVOICE_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"REF_RINVOICE_NAME", type:"string" }
         ,{name:"INSERTEDBY", type:"string" }
         ,{name:"INSERTEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0026F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0026F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_NAME",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_NAME",id:"DC0026F_QRY_CLIENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0026F_QRY_CLIENT_ID"}],displayColumn: "CODE"}));
       this.queryFields.add("RECEIVER_ID",new Ext.form.Hidden({name:"QRY_RECEIVER_ID",id:"DC0026F_QRY_RECEIVER_ID",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",allowBlank:true,width:100}));
       this.queryFields.add("DOC_TYPE",new  N21.DataComp.LOV0015({name:"QRY_DOC_TYPE",id:"DC0026F_QRY_DOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Doc type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,displayColumn: "CODE"}));
       this.queryFields.add("DOC_NO",new Ext.form.TextField({name:"QRY_DOC_NO",id:"DC0026F_QRY_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",allowBlank:true,width:100}));
       this.queryFields.add("DOC_DATE",new Ext.form.DateField({name:"QRY_DOC_DATE",id:"DC0026F_QRY_DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("ISSUER_ID",new Ext.form.Hidden({name:"QRY_ISSUER_ID",id:"DC0026F_QRY_ISSUER_ID",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",allowBlank:true,width:100}));
       this.queryFields.add("ISSUER_NAME",new  N21.DataComp.LOV0042({name:"QRY_ISSUER_NAME",id:"DC0026F_QRY_ISSUER_NAME",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0026F_QRY_ISSUER_ID"}],paramMapping: [{param:"p_client_id",field:"DC0026F_QRY_CLIENT_ID"}],displayColumn: "NAME"}));
       this.queryFields.add("REF_RINVOICE_ID",new Ext.form.Hidden({name:"QRY_REF_RINVOICE_ID",id:"DC0026F_QRY_REF_RINVOICE_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_RINVOICE_ID||"Ref_rinvoice_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CLIENT_NAME","DOC_TYPE","DOC_NO","DOC_DATE","ISSUER_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.GroupingStore({
               id:"storeDC0026"
              ,groupOnSort :false
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0026"
              ,remoteSort :true
              ,sortInfo:{field: "", direction: ""}
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
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:40,dataIndex:'ID',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"RECEIVER_NAME",header:this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",width:100,dataIndex:'RECEIVER_NAME',hidden:true,sortable:true}
              ,{ id:"RECEIVER_ID",header:this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",width:100,dataIndex:'RECEIVER_ID',hidden:true,sortable:true}
              ,{ id:"DOC_TYPE",header:this.resourceBundle.FieldLabel.DOC_TYPE||"Doc type",width:100,dataIndex:'DOC_TYPE',sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc no",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ISSUER_NAME",header:this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",width:100,dataIndex:'ISSUER_NAME',sortable:true}
              ,{ id:"ISSUER_ID",header:this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",width:100,dataIndex:'ISSUER_ID',hidden:true,sortable:true}
              ,{ id:"DOC_CURRENCY",header:this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",width:50,dataIndex:'DOC_CURRENCY',sortable:true}
              ,{ id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right',decimalPrecision:2}
              ,{ id:"TOTAL_NET_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Net amount",width:100,dataIndex:'TOTAL_NET_AMOUNT',sortable:true,align:'right',decimalPrecision:2}
              ,{ id:"TOTAL_TAX_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Tax amount",width:100,dataIndex:'TOTAL_TAX_AMOUNT',sortable:true,align:'right',decimalPrecision:2}
              ,{ id:"DUE_DATE",header:this.resourceBundle.FieldLabel.DUE_DATE||"Due date",width:100,dataIndex:'DUE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Registered",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_PAYABLE",header:this.resourceBundle.FieldLabel.IS_PAYABLE||"Is_payable",width:50,dataIndex:'IS_PAYABLE',hidden:true,sortable:true}
              ,{ id:"IS_PAYED",header:this.resourceBundle.FieldLabel.IS_PAYED||"Is_payed",width:50,dataIndex:'IS_PAYED',sortable:true}
              ,{ id:"REF_RINVOICE_ID",header:this.resourceBundle.FieldLabel.REF_RINVOICE_ID||"Ref_rinvoice_id",width:100,dataIndex:'REF_RINVOICE_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"REF_RINVOICE_NAME",header:this.resourceBundle.FieldLabel.REF_RINVOICE_NAME||"Ref. doc.",width:100,dataIndex:'REF_RINVOICE_NAME',hidden:true,sortable:true}
              ,{ id:"INSERTEDBY",header:this.resourceBundle.FieldLabel.INSERTEDBY||"Registered by",width:100,dataIndex:'INSERTEDBY',hidden:true,sortable:true}
              ,{ id:"INSERTEDON",header:this.resourceBundle.FieldLabel.INSERTEDON||"Registered on",width:100,dataIndex:'INSERTEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0026G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0026G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0026G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,RECEIVER_NAME:""
              ,RECEIVER_ID:""
              ,DOC_TYPE:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,ISSUER_NAME:""
              ,ISSUER_ID:""
              ,DOC_CURRENCY:""
              ,TOTAL_AMOUNT:""
              ,TOTAL_NET_AMOUNT:""
              ,TOTAL_TAX_AMOUNT:""
              ,DUE_DATE:""
              ,IS_INSERTED:""
              ,IS_PAYABLE:""
              ,IS_PAYED:""
              ,REF_RINVOICE_ID:""
              ,NOTES:""
              ,REF_RINVOICE_NAME:""
              ,INSERTEDBY:""
              ,INSERTEDON:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0026G", N21.DataComp.DC0026G);
/** 
 * Data Component: DC0026F, Title: Received invoice
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0026F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0026G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0026F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0026F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_NAME",new  N21.DataComp.LOV0008({name:"CLIENT_NAME",id:"DC0026F_CLIENT_NAME",dataIndex:"CLIENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0026F_CLIENT_ID"}],displayColumn: "CODE"}));
       this.fields.add("RECEIVER_NAME",new  N21.DataComp.LOV0009({name:"RECEIVER_NAME",id:"DC0026F_RECEIVER_NAME",dataIndex:"RECEIVER_NAME",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0026F_RECEIVER_ID"}],displayColumn: "NAME"}));
       this.fields.add("RECEIVER_ID",new Ext.form.Hidden({name:"RECEIVER_ID",id:"DC0026F_RECEIVER_ID",dataIndex:"RECEIVER_ID",fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_TYPE",new  N21.DataComp.LOV0015({name:"DOC_TYPE",id:"DC0026F_DOC_TYPE",dataIndex:"DOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Doc type",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,displayColumn: "CODE"}));
       this.fields.add("DOC_NO",new Ext.form.TextField({name:"DOC_NO",id:"DC0026F_DOC_NO",dataIndex:"DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",allowBlank:false,labelSeparator:":*",width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_DATE",new Ext.form.DateField({name:"DOC_DATE",id:"DC0026F_DOC_DATE",dataIndex:"DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("ISSUER_NAME",new  N21.DataComp.LOV0042({name:"ISSUER_NAME",id:"DC0026F_ISSUER_NAME",dataIndex:"ISSUER_NAME",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0026F_ISSUER_ID"}],paramMapping: [{param:"p_client_id",field:"DC0026F.CLIENT_ID"}],displayColumn: "NAME"}));
       this.fields.add("ISSUER_ID",new Ext.form.Hidden({name:"ISSUER_ID",id:"DC0026F_ISSUER_ID",dataIndex:"ISSUER_ID",fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_CURRENCY",new  N21.DataComp.LOV0001({name:"DOC_CURRENCY",id:"DC0026F_DOC_CURRENCY",dataIndex:"DOC_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true,displayColumn: "CODE"}));
       this.fields.add("TOTAL_AMOUNT",new Ext.form.NumberField({name:"TOTAL_AMOUNT",id:"DC0026F_TOTAL_AMOUNT",dataIndex:"TOTAL_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",fieldClass: "field_important_1",decimalPrecision:2,listeners:{  "change":{scope:this, fn:this.change_TOTAL_AMOUNT}  }}));
       this.fields.add("TOTAL_NET_AMOUNT",new Ext.form.NumberField({name:"TOTAL_NET_AMOUNT",id:"DC0026F_TOTAL_NET_AMOUNT",dataIndex:"TOTAL_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Net amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("TOTAL_TAX_AMOUNT",new Ext.form.NumberField({name:"TOTAL_TAX_AMOUNT",id:"DC0026F_TOTAL_TAX_AMOUNT",dataIndex:"TOTAL_TAX_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Tax amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DUE_DATE",new Ext.form.DateField({name:"DUE_DATE",id:"DC0026F_DUE_DATE",dataIndex:"DUE_DATE",fieldLabel: this.resourceBundle.FieldLabel.DUE_DATE||"Due date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("IS_INSERTED",new Ext.ux.form.XCheckbox({name:"IS_INSERTED",id:"DC0026F_IS_INSERTED",dataIndex:"IS_INSERTED",fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Registered",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_PAYABLE",new Ext.ux.form.XCheckbox({name:"IS_PAYABLE",id:"DC0026F_IS_PAYABLE",dataIndex:"IS_PAYABLE",fieldLabel: this.resourceBundle.FieldLabel.IS_PAYABLE||"Is_payable",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_PAYED",new Ext.ux.form.XCheckbox({name:"IS_PAYED",id:"DC0026F_IS_PAYED",dataIndex:"IS_PAYED",fieldLabel: this.resourceBundle.FieldLabel.IS_PAYED||"Is_payed",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("REF_RINVOICE_ID",new Ext.form.Hidden({name:"REF_RINVOICE_ID",id:"DC0026F_REF_RINVOICE_ID",dataIndex:"REF_RINVOICE_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_RINVOICE_ID||"Ref_rinvoice_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0026F_NOTES",dataIndex:"NOTES",labelSeparator: "",allowBlank:true,width:250,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("REF_RINVOICE_NAME",new  N21.DataComp.LOV0027({name:"REF_RINVOICE_NAME",id:"DC0026F_REF_RINVOICE_NAME",dataIndex:"REF_RINVOICE_NAME",fieldLabel: this.resourceBundle.FieldLabel.REF_RINVOICE_NAME||"Ref. doc.",allowBlank:true,width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0026F_REF_RINVOICE_ID"}],paramMapping: [{param:"p_client_id",field:"DC0026F.CLIENT_ID"},{param:"p_issuer_id",field:"DC0026F.ISSUER_ID"}]}));
       this.fields.add("INSERTEDBY",new Ext.form.TextField({name:"INSERTEDBY",id:"DC0026F_INSERTEDBY",dataIndex:"INSERTEDBY",fieldLabel: this.resourceBundle.FieldLabel.INSERTEDBY||"Registered by",allowBlank:true,width:100,disabled:true}));
       this.fields.add("INSERTEDON",new Ext.form.DateField({name:"INSERTEDON",id:"DC0026F_INSERTEDON",dataIndex:"INSERTEDON",fieldLabel: this.resourceBundle.FieldLabel.INSERTEDON||"Registered on",allowBlank:true,width:80,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0026F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0026F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0026F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0026F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:100,disabled:true}));

       this.layoutItems.add("DC0041",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0041 - "+(N21.DataComp.DC0041.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:840, height:480, items:{xtype:"DC0041",id:"DC0041", parentDcRelation:{name:"DC0026F",relation:[{parent:"ID",child:"RINV_ID"}]}         }} ) ); 
       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Notes||"Notes",border:true,labelWidth:80,labelAlign:"top",width:"250"   ,items:[ this.fields.get("NOTES")] });
       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY"),this.fields.get("INSERTEDON"),this.fields.get("INSERTEDBY")] });
       this.layoutItems.add("C3",
             { layout:"form",width:280,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Notes"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("DC0044",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0044 - "+(N21.DataComp.DC0044.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:550, height:350, items:{xtype:"DC0044",id:"DC0044", parentDcRelation:{name:"DC0026F",relation:[{parent:"ID",child:"RINV_ID"},{parent:"CLIENT_ID",child:"CLIENT_ID"},{parent:"ISSUER_ID",child:"BPARTNER_TO"},{parent:"RECEIVER_ID",child:"BPARTNER_FROM"}]}         }} ) ); 
       this.layoutItems.add("Amounts",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Amounts||"Amounts",border:true,labelWidth:80,labelAlign:"left",width:"240"   ,items:[ this.fields.get("DOC_CURRENCY"),this.fields.get("TOTAL_AMOUNT"),this.fields.get("TOTAL_NET_AMOUNT"),this.fields.get("TOTAL_TAX_AMOUNT")] });
       this.layoutItems.add("ProcessingStatus",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.ProcessingStatus||"ProcessingStatus",border:true,labelWidth:80,labelAlign:"left",width:"240"   ,items:[ this.fields.get("IS_INSERTED"),this.fields.get("IS_PAYABLE"),this.fields.get("IS_PAYED")] });
       this.layoutItems.add("C2",
             { layout:"form",width:280,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Amounts"),this.layoutItems.get("ProcessingStatus")]
 }); 
       this.layoutItems.add("Unit",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Unit||"Unit",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_NAME"),this.fields.get("RECEIVER_ID"),this.fields.get("RECEIVER_NAME")] });
       this.layoutItems.add("DocInfo",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.DocInfo||"DocInfo",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("DOC_TYPE"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("ISSUER_ID"),this.fields.get("ISSUER_NAME"),this.fields.get("DUE_DATE"),this.fields.get("REF_RINVOICE_ID"),this.fields.get("REF_RINVOICE_NAME")] });
       this.layoutItems.add("C1",
             { layout:"form",width:340,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.layoutItems.get("Unit"),this.layoutItems.get("DocInfo")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2"),this.layoutItems.get("C3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0026F"
          ,firstFocusFieldName:"RECEIVER_NAME"
          ,childDCs: [{name:"DC0044",relation:[{parent:"ID",child:"RINV_ID"},{parent:"CLIENT_ID",child:"CLIENT_ID"},{parent:"ISSUER_ID",child:"BPARTNER_TO"},{parent:"RECEIVER_ID",child:"BPARTNER_FROM"}]},{name:"DC0041",relation:[{parent:"ID",child:"RINV_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Payment",handler:function() {this.show_window("DC0044");}}
                    ,{xtype:"button",scope:this,text:"Inv. items",handler:function() {this.show_window("DC0041");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0026F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0026F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,RECEIVER_NAME:""
              ,RECEIVER_ID:""
              ,DOC_TYPE:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,ISSUER_NAME:""
              ,ISSUER_ID:""
              ,DOC_CURRENCY:""
              ,TOTAL_AMOUNT:""
              ,TOTAL_NET_AMOUNT:""
              ,TOTAL_TAX_AMOUNT:""
              ,DUE_DATE:""
              ,IS_INSERTED:""
              ,IS_PAYABLE:""
              ,IS_PAYED:""
              ,REF_RINVOICE_ID:""
              ,NOTES:""
              ,REF_RINVOICE_NAME:""
              ,INSERTEDBY:""
              ,INSERTEDON:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  ,change_TOTAL_AMOUNT:function(fld, newVal, oldVal) {
    if ( !Ext.isEmpty(newVal) ) {
        this.setFieldValue("TOTAL_NET_AMOUNT", this.getFieldValue("TOTAL_AMOUNT")/1.19 );
        this.setFieldValue("TOTAL_TAX_AMOUNT", this.getFieldValue("TOTAL_AMOUNT") - this.getFieldValue("TOTAL_NET_AMOUNT")  );
        
      } else {
        this.setFieldValue("TOTAL_NET_AMOUNT", "" );
        this.setFieldValue("TOTAL_TAX_AMOUNT", "");
      }
   }


  });
  Ext.reg("DC0026F", N21.DataComp.DC0026F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0026
 * Title: Received invoice
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0026 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0026"
          ,masterName:"DC0026G"
          ,detailName:"DC0026F"
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
                            xtype: "DC0026G"
                           ,id: "DC0026G"
                           ,height:350
                       },{
                           xtype:"DC0026F"
                          ,id:"DC0026F"
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
,"->","<span class='dcName'>DC0026</span>"          )
        }); 

       N21.DataComp.DC0026.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0026", N21.DataComp.DC0026);



