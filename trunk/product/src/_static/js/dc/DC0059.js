/** 
 * Data Component: DC0059G, Title: Sales orders
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0059G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"BPARTNER_NAME", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"BILL_BPARTNER_ID", type:"float" }
         ,{name:"BILL_BPARTNER_NAME", type:"string" }
         ,{name:"DELIV_BPARTNER_NAME", type:"string" }
         ,{name:"DELIV_BPARTNER_ID", type:"float" }
         ,{name:"PAY_BPARTNER_NAME", type:"string" }
         ,{name:"PAY_BPARTNER_ID", type:"float" }
         ,{name:"BPARTNER_CONTACT_ID", type:"float" }
         ,{name:"BILL_BPARTNER_CONTACT_ID", type:"float" }
         ,{name:"DELIV_BPARTNER_CONTACT_ID", type:"float" }
         ,{name:"PAY_BPARTNER_CONTACT_ID", type:"float" }
         ,{name:"REF_SORDER_ID", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"PAYMETHOD_CODE", type:"string" }
         ,{name:"SALESREP_ID", type:"float" }
         ,{name:"TOTAL_AMOUNT", type:"float" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0059"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0059"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Order no.",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_NAME||"Customer",width:100,dataIndex:'BPARTNER_NAME',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"BILL_BPARTNER_ID",header:this.resourceBundle.FieldLabel.BILL_BPARTNER_ID||"Bill_bpartner_id",width:100,dataIndex:'BILL_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BILL_BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BILL_BPARTNER_NAME||"Invoice to",width:100,dataIndex:'BILL_BPARTNER_NAME',hidden:true,sortable:true}
              ,{ id:"DELIV_BPARTNER_NAME",header:this.resourceBundle.FieldLabel.DELIV_BPARTNER_NAME||"Deliver to",width:100,dataIndex:'DELIV_BPARTNER_NAME',hidden:true,sortable:true}
              ,{ id:"DELIV_BPARTNER_ID",header:this.resourceBundle.FieldLabel.DELIV_BPARTNER_ID||"Deliv_bpartner_id",width:100,dataIndex:'DELIV_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"PAY_BPARTNER_NAME",header:this.resourceBundle.FieldLabel.PAY_BPARTNER_NAME||"Pay by",width:100,dataIndex:'PAY_BPARTNER_NAME',hidden:true,sortable:true}
              ,{ id:"PAY_BPARTNER_ID",header:this.resourceBundle.FieldLabel.PAY_BPARTNER_ID||"Pay_bpartner_id",width:100,dataIndex:'PAY_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_CONTACT_ID",header:this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id",width:100,dataIndex:'BPARTNER_CONTACT_ID',hidden:true,sortable:true}
              ,{ id:"BILL_BPARTNER_CONTACT_ID",header:this.resourceBundle.FieldLabel.BILL_BPARTNER_CONTACT_ID||"Bill_bpartner_contact_id",width:100,dataIndex:'BILL_BPARTNER_CONTACT_ID',hidden:true,sortable:true}
              ,{ id:"DELIV_BPARTNER_CONTACT_ID",header:this.resourceBundle.FieldLabel.DELIV_BPARTNER_CONTACT_ID||"Deliv_bpartner_contact_id",width:100,dataIndex:'DELIV_BPARTNER_CONTACT_ID',hidden:true,sortable:true}
              ,{ id:"PAY_BPARTNER_CONTACT_ID",header:this.resourceBundle.FieldLabel.PAY_BPARTNER_CONTACT_ID||"Pay_bpartner_contact_id",width:100,dataIndex:'PAY_BPARTNER_CONTACT_ID',hidden:true,sortable:true}
              ,{ id:"REF_SORDER_ID",header:this.resourceBundle.FieldLabel.REF_SORDER_ID||"Ref_order_id",width:100,dataIndex:'REF_SORDER_ID',hidden:true,sortable:true}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',sortable:true}
              ,{ id:"PAYMETHOD_CODE",header:this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Paymethod_code",width:100,dataIndex:'PAYMETHOD_CODE',hidden:true,sortable:true}
              ,{ id:"SALESREP_ID",header:this.resourceBundle.FieldLabel.SALESREP_ID||"Salesrep_id",width:100,dataIndex:'SALESREP_ID',hidden:true,sortable:true}
              ,{ id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right'}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0059_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0059_QRY_CLIENT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"}
               ,{xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0059_QRY_CLIENT_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"}
               ,{xtype: "textfield",name:"QRY_DOC_NO",id:"DC0059_QRY_DOC_NO",width:120,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Order no."}
               ,{xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0059_QRY_DOC_DATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",format:Ext.DATE_FORMAT}
               ,{xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059_QRY_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_BPARTNER_NAME",id:"DC0059_QRY_BPARTNER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Customer"}
               ,{xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0059_QRY_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id"}
               ,{xtype: "hidden",name:"QRY_BILL_BPARTNER_ID",id:"DC0059_QRY_BILL_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_ID||"Bill_bpartner_id"}
               ,{xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059_QRY_BILL_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_BILL_BPARTNER_NAME",id:"DC0059_QRY_BILL_BPARTNER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_NAME||"Invoice to"}
               ,{xtype: "hidden",name:"QRY_DELIV_BPARTNER_ID",id:"DC0059_QRY_DELIV_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_ID||"Deliv_bpartner_id"}
               ,{xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059_QRY_DELIV_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_DELIV_BPARTNER_NAME",id:"DC0059_QRY_DELIV_BPARTNER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_NAME||"Deliver to"}
               ,{xtype: "hidden",name:"QRY_PAY_BPARTNER_ID",id:"DC0059_QRY_PAY_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_ID||"Pay_bpartner_id"}
               ,{xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059_QRY_PAY_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_PAY_BPARTNER_NAME",id:"DC0059_QRY_PAY_BPARTNER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_NAME||"Pay by"}
               ,{xtype: "hidden",name:"QRY_BPARTNER_CONTACT_ID",id:"DC0059_QRY_BPARTNER_CONTACT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id"}
               ,{xtype: "hidden",name:"QRY_BILL_BPARTNER_CONTACT_ID",id:"DC0059_QRY_BILL_BPARTNER_CONTACT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_CONTACT_ID||"Bill_bpartner_contact_id"}
               ,{xtype: "hidden",name:"QRY_DELIV_BPARTNER_CONTACT_ID",id:"DC0059_QRY_DELIV_BPARTNER_CONTACT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_CONTACT_ID||"Deliv_bpartner_contact_id"}
               ,{xtype: "hidden",name:"QRY_PAY_BPARTNER_CONTACT_ID",id:"DC0059_QRY_PAY_BPARTNER_CONTACT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_CONTACT_ID||"Pay_bpartner_contact_id"}
               ,{xtype: "hidden",name:"QRY_REF_SORDER_ID",id:"DC0059_QRY_REF_SORDER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.REF_SORDER_ID||"Ref_order_id"}
               ,{xtype: "LOV0001",name:"QRY_CURRENCY",id:"DC0059_QRY_CURRENCY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"}
               ,{xtype: "textfield",name:"QRY_PAYMETHOD_CODE",id:"DC0059_QRY_PAYMETHOD_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Paymethod_code"}
               ,{xtype: "numberfield",name:"QRY_TOTAL_AMOUNT",id:"DC0059_QRY_TOTAL_AMOUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",style: "text-align:right;"}
          ]
          ,dataComponentName:"DC0059G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0059G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0059G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,BILL_BPARTNER_ID:""
              ,BILL_BPARTNER_NAME:""
              ,DELIV_BPARTNER_NAME:""
              ,DELIV_BPARTNER_ID:""
              ,PAY_BPARTNER_NAME:""
              ,PAY_BPARTNER_ID:""
              ,BPARTNER_CONTACT_ID:""
              ,BILL_BPARTNER_CONTACT_ID:""
              ,DELIV_BPARTNER_CONTACT_ID:""
              ,PAY_BPARTNER_CONTACT_ID:""
              ,REF_SORDER_ID:""
              ,CURRENCY:""
              ,PAYMETHOD_CODE:""
              ,SALESREP_ID:""
              ,TOTAL_AMOUNT:""});
     }
  });
  Ext.reg("DC0059G", N21.DataComp.DC0059G);
/** 
 * Data Component: DC0059F, Title: Sales orders
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0059F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0059G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0059F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0059F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_CODE",id:"DC0059F_CLIENT_CODE",dataIndex:"CLIENT_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0059F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0059F_DOC_NO",dataIndex:"DOC_NO",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Order no.",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0059F_DOC_DATE",dataIndex:"DOC_DATE",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_ID",id:"DC0059F_BPARTNER_ID",dataIndex:"BPARTNER_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_NAME", new N21.DataComp.LOV0041({xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059F_BPARTNER_ID"}],selectOnFocus:true,name:"BPARTNER_NAME",id:"DC0059F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Customer",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0059F_CREATEDON",dataIndex:"CREATEDON",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Created on",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0059F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0059F_MODIFIEDON",dataIndex:"MODIFIEDON",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0059F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",disabled:true})   );
       this.fields.add("BILL_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BILL_BPARTNER_ID",id:"DC0059F_BILL_BPARTNER_ID",dataIndex:"BILL_BPARTNER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_ID||"Bill_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BILL_BPARTNER_NAME", new N21.DataComp.LOV0041({xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059F_BILL_BPARTNER_ID"}],selectOnFocus:true,name:"BILL_BPARTNER_NAME",id:"DC0059F_BILL_BPARTNER_NAME",dataIndex:"BILL_BPARTNER_NAME",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_NAME||"Invoice to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIV_BPARTNER_NAME", new N21.DataComp.LOV0041({xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059F_DELIV_BPARTNER_ID"}],selectOnFocus:true,name:"DELIV_BPARTNER_NAME",id:"DC0059F_DELIV_BPARTNER_NAME",dataIndex:"DELIV_BPARTNER_NAME",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_NAME||"Deliver to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIV_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"DELIV_BPARTNER_ID",id:"DC0059F_DELIV_BPARTNER_ID",dataIndex:"DELIV_BPARTNER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_ID||"Deliv_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAY_BPARTNER_NAME", new N21.DataComp.LOV0041({xtype: "LOV0041",fieldMapping: [{column:"ID",field:"DC0059F_PAY_BPARTNER_ID"}],selectOnFocus:true,name:"PAY_BPARTNER_NAME",id:"DC0059F_PAY_BPARTNER_NAME",dataIndex:"PAY_BPARTNER_NAME",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_NAME||"Pay by",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAY_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PAY_BPARTNER_ID",id:"DC0059F_PAY_BPARTNER_ID",dataIndex:"PAY_BPARTNER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_ID||"Pay_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_CONTACT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_CONTACT_ID",id:"DC0059F_BPARTNER_CONTACT_ID",dataIndex:"BPARTNER_CONTACT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BILL_BPARTNER_CONTACT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BILL_BPARTNER_CONTACT_ID",id:"DC0059F_BILL_BPARTNER_CONTACT_ID",dataIndex:"BILL_BPARTNER_CONTACT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_CONTACT_ID||"Bill_bpartner_contact_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIV_BPARTNER_CONTACT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"DELIV_BPARTNER_CONTACT_ID",id:"DC0059F_DELIV_BPARTNER_CONTACT_ID",dataIndex:"DELIV_BPARTNER_CONTACT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_CONTACT_ID||"Deliv_bpartner_contact_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAY_BPARTNER_CONTACT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PAY_BPARTNER_CONTACT_ID",id:"DC0059F_PAY_BPARTNER_CONTACT_ID",dataIndex:"PAY_BPARTNER_CONTACT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_CONTACT_ID||"Pay_bpartner_contact_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REF_SORDER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"REF_SORDER_ID",id:"DC0059F_REF_SORDER_ID",dataIndex:"REF_SORDER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REF_SORDER_ID||"Ref_order_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"CURRENCY",id:"DC0059F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PAYMETHOD_CODE", new Ext.form.TextField ({xtype: "textfield",name:"PAYMETHOD_CODE",id:"DC0059F_PAYMETHOD_CODE",dataIndex:"PAYMETHOD_CODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Paymethod_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SALESREP_ID", new Ext.form.Hidden ({xtype: "hidden",name:"SALESREP_ID",id:"DC0059F_SALESREP_ID",dataIndex:"SALESREP_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.SALESREP_ID||"Salesrep_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TOTAL_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"TOTAL_AMOUNT",id:"DC0059F_TOTAL_AMOUNT",dataIndex:"TOTAL_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );

       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")]});
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("Modified")]}); 
       this.layoutItems.add("DocHeader",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.DocHeader||"DocHeader",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("CLIENT_CODE"),this.fields.get("CLIENT_ID"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("BPARTNER_NAME"),this.fields.get("BPARTNER_ID"),this.fields.get("REF_SORDER_ID"),this.fields.get("CURRENCY"),this.fields.get("TOTAL_AMOUNT")]});
       this.layoutItems.add("ThirdParties",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.ThirdParties||"ThirdParties",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("BILL_BPARTNER_ID"),this.fields.get("BILL_BPARTNER_NAME"),this.fields.get("DELIV_BPARTNER_ID"),this.fields.get("DELIV_BPARTNER_NAME"),this.fields.get("PAY_BPARTNER_ID"),this.fields.get("PAY_BPARTNER_NAME")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("ID"),this.layoutItems.get("DocHeader"),this.layoutItems.get("ThirdParties")]}); 
       this.layoutItems.add("DC0060",
             new Ext.Window({ xtype:"window", modal:true, title:N21.DataComp.DC0060.prototype.resourceBundle.DcProperty.Title,  closeAction:"hide",closable:true,layout:"fit", width:700, height:450, items:{xtype:"DC0060",id:"DC0060", parentDcRelation:{name:"DC0059F",relation:[{parent:"ID",child:"SORDER_ID"}]}         }} ) ); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0059F"
          ,firstFocusFieldName:"DOC_NO"
          ,childDCs: [{name:"DC0060",relation:[{parent:"ID",child:"SORDER_ID"}]}]
          ,buttons: [{xtype:"button",text:"Order lines",scope:this,handler:function() {this.show_window("DC0060");}  }]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0059F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0059F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,BILL_BPARTNER_ID:""
              ,BILL_BPARTNER_NAME:""
              ,DELIV_BPARTNER_NAME:""
              ,DELIV_BPARTNER_ID:""
              ,PAY_BPARTNER_NAME:""
              ,PAY_BPARTNER_ID:""
              ,BPARTNER_CONTACT_ID:""
              ,BILL_BPARTNER_CONTACT_ID:""
              ,DELIV_BPARTNER_CONTACT_ID:""
              ,PAY_BPARTNER_CONTACT_ID:""
              ,REF_SORDER_ID:""
              ,CURRENCY:""
              ,PAYMETHOD_CODE:""
              ,SALESREP_ID:""
              ,TOTAL_AMOUNT:""});
     }


  });
  Ext.reg("DC0059F", N21.DataComp.DC0059F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0059
 * Title: Sales orders
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0059 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0059"
          ,masterName:"DC0059G"
          ,detailName:"DC0059F"
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
                            xtype: "DC0059G"
                           ,id: "DC0059G"
                           ,height:350
                       },{
                           xtype:"DC0059F"
                          ,id:"DC0059F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

            ]
        }); 

       N21.DataComp.DC0059.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0059", N21.DataComp.DC0059);



