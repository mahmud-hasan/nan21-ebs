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
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0059F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0059F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0059F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("DOC_NO",new Ext.form.TextField({name:"QRY_DOC_NO",id:"DC0059F_QRY_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Order no.",allowBlank:true,width:100}));
       this.queryFields.add("DOC_DATE",new Ext.form.DateField({name:"QRY_DOC_DATE",id:"DC0059F_QRY_DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0059F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"QRY_BPARTNER_NAME",id:"DC0059F_QRY_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Customer",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_QRY_BPARTNER_ID"}]}));
       this.queryFields.add("BILL_BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"QRY_BILL_BPARTNER_NAME",id:"DC0059F_QRY_BILL_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_NAME||"Invoice to",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_QRY_BILL_BPARTNER_ID"}]}));
       this.queryFields.add("BILL_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BILL_BPARTNER_ID",id:"DC0059F_QRY_BILL_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_ID||"Bill_bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("DELIV_BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"QRY_DELIV_BPARTNER_NAME",id:"DC0059F_QRY_DELIV_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_NAME||"Deliver to",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_QRY_DELIV_BPARTNER_ID"}]}));
       this.queryFields.add("DELIV_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_DELIV_BPARTNER_ID",id:"DC0059F_QRY_DELIV_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_ID||"Deliv_bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("PAY_BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"QRY_PAY_BPARTNER_NAME",id:"DC0059F_QRY_PAY_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_NAME||"Pay by",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_QRY_PAY_BPARTNER_ID"}]}));
       this.queryFields.add("PAY_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_PAY_BPARTNER_ID",id:"DC0059F_QRY_PAY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_ID||"Pay_bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_CONTACT_ID",id:"DC0059F_QRY_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id",allowBlank:true,width:100}));
       this.queryFields.add("BILL_BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"QRY_BILL_BPARTNER_CONTACT_ID",id:"DC0059F_QRY_BILL_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_CONTACT_ID||"Bill_bpartner_contact_id",allowBlank:true,width:100}));
       this.queryFields.add("DELIV_BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"QRY_DELIV_BPARTNER_CONTACT_ID",id:"DC0059F_QRY_DELIV_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_CONTACT_ID||"Deliv_bpartner_contact_id",allowBlank:true,width:100}));
       this.queryFields.add("PAY_BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"QRY_PAY_BPARTNER_CONTACT_ID",id:"DC0059F_QRY_PAY_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_CONTACT_ID||"Pay_bpartner_contact_id",allowBlank:true,width:100}));
       this.queryFields.add("REF_SORDER_ID",new Ext.form.Hidden({name:"QRY_REF_SORDER_ID",id:"DC0059F_QRY_REF_SORDER_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_SORDER_ID||"Ref_order_id",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY",id:"DC0059F_QRY_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("PAYMETHOD_CODE",new Ext.form.TextField({name:"QRY_PAYMETHOD_CODE",id:"DC0059F_QRY_PAYMETHOD_CODE",fieldLabel: this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Paymethod_code",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","DOC_NO","DOC_DATE","BPARTNER_NAME","BILL_BPARTNER_NAME","DELIV_BPARTNER_NAME","PAY_BPARTNER_NAME","CURRENCY","PAYMETHOD_CODE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0059"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0059"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
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
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0059F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0059F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_CLIENT_ID"}]}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0059F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_NO",new Ext.form.TextField({name:"DOC_NO",id:"DC0059F_DOC_NO",dataIndex:"DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Order no.",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_DATE",new Ext.form.DateField({name:"DOC_DATE",id:"DC0059F_DOC_DATE",dataIndex:"DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",allowBlank:false,labelSeparator:":*",width:80,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("BPARTNER_ID",new Ext.form.Hidden({name:"BPARTNER_ID",id:"DC0059F_BPARTNER_ID",dataIndex:"BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"BPARTNER_NAME",id:"DC0059F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Customer",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_BPARTNER_ID"}]}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0059F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Created on",allowBlank:false,labelSeparator:":*",width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0059F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0059F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",allowBlank:false,labelSeparator:":*",width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0059F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("BILL_BPARTNER_ID",new Ext.form.Hidden({name:"BILL_BPARTNER_ID",id:"DC0059F_BILL_BPARTNER_ID",dataIndex:"BILL_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_ID||"Bill_bpartner_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BILL_BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"BILL_BPARTNER_NAME",id:"DC0059F_BILL_BPARTNER_NAME",dataIndex:"BILL_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_NAME||"Invoice to",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_BILL_BPARTNER_ID"}]}));
       this.fields.add("DELIV_BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"DELIV_BPARTNER_NAME",id:"DC0059F_DELIV_BPARTNER_NAME",dataIndex:"DELIV_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_NAME||"Deliver to",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_DELIV_BPARTNER_ID"}]}));
       this.fields.add("DELIV_BPARTNER_ID",new Ext.form.Hidden({name:"DELIV_BPARTNER_ID",id:"DC0059F_DELIV_BPARTNER_ID",dataIndex:"DELIV_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_ID||"Deliv_bpartner_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PAY_BPARTNER_NAME",new  N21.DataComp.LOV0041({name:"PAY_BPARTNER_NAME",id:"DC0059F_PAY_BPARTNER_NAME",dataIndex:"PAY_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_NAME||"Pay by",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0059F_PAY_BPARTNER_ID"}]}));
       this.fields.add("PAY_BPARTNER_ID",new Ext.form.Hidden({name:"PAY_BPARTNER_ID",id:"DC0059F_PAY_BPARTNER_ID",dataIndex:"PAY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_ID||"Pay_bpartner_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"BPARTNER_CONTACT_ID",id:"DC0059F_BPARTNER_CONTACT_ID",dataIndex:"BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BILL_BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"BILL_BPARTNER_CONTACT_ID",id:"DC0059F_BILL_BPARTNER_CONTACT_ID",dataIndex:"BILL_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.BILL_BPARTNER_CONTACT_ID||"Bill_bpartner_contact_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DELIV_BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"DELIV_BPARTNER_CONTACT_ID",id:"DC0059F_DELIV_BPARTNER_CONTACT_ID",dataIndex:"DELIV_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.DELIV_BPARTNER_CONTACT_ID||"Deliv_bpartner_contact_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PAY_BPARTNER_CONTACT_ID",new Ext.form.Hidden({name:"PAY_BPARTNER_CONTACT_ID",id:"DC0059F_PAY_BPARTNER_CONTACT_ID",dataIndex:"PAY_BPARTNER_CONTACT_ID",fieldLabel: this.resourceBundle.FieldLabel.PAY_BPARTNER_CONTACT_ID||"Pay_bpartner_contact_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("REF_SORDER_ID",new Ext.form.Hidden({name:"REF_SORDER_ID",id:"DC0059F_REF_SORDER_ID",dataIndex:"REF_SORDER_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_SORDER_ID||"Ref_order_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"CURRENCY",id:"DC0059F_CURRENCY",dataIndex:"CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("PAYMETHOD_CODE",new Ext.form.TextField({name:"PAYMETHOD_CODE",id:"DC0059F_PAYMETHOD_CODE",dataIndex:"PAYMETHOD_CODE",fieldLabel: this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Paymethod_code",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("SALESREP_ID",new Ext.form.Hidden({name:"SALESREP_ID",id:"DC0059F_SALESREP_ID",dataIndex:"SALESREP_ID",fieldLabel: this.resourceBundle.FieldLabel.SALESREP_ID||"Salesrep_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("TOTAL_AMOUNT",new Ext.form.NumberField({name:"TOTAL_AMOUNT",id:"DC0059F_TOTAL_AMOUNT",dataIndex:"TOTAL_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));

       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelWidth:80,labelAlign:"left",width:"280"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")] });
       this.layoutItems.add("C2",
             { layout:"form",width:300,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("DocHeader",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.DocHeader||"DocHeader",border:true,labelWidth:80,labelAlign:"left",width:"330"   ,items:[ this.fields.get("CLIENT_CODE"),this.fields.get("CLIENT_ID"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("BPARTNER_NAME"),this.fields.get("BPARTNER_ID"),this.fields.get("REF_SORDER_ID"),this.fields.get("CURRENCY"),this.fields.get("TOTAL_AMOUNT")] });
       this.layoutItems.add("ThirdParties",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.ThirdParties||"ThirdParties",border:true,labelWidth:80,labelAlign:"left",width:"330"   ,items:[ this.fields.get("BILL_BPARTNER_ID"),this.fields.get("BILL_BPARTNER_NAME"),this.fields.get("DELIV_BPARTNER_ID"),this.fields.get("DELIV_BPARTNER_NAME"),this.fields.get("PAY_BPARTNER_ID"),this.fields.get("PAY_BPARTNER_NAME")] });
       this.layoutItems.add("C1",
             { layout:"form",width:350,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.layoutItems.get("DocHeader"),this.layoutItems.get("ThirdParties")]
 }); 
       this.layoutItems.add("DC0060",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0060 - "+(N21.DataComp.DC0060.prototype.resourceBundle.DcProperty.Title||"Window"),  closeAction:"hide",closable:true,layout:"fit", width:700, height:500, items:{xtype:"DC0060",id:"DC0060", parentDcRelation:{name:"DC0059F",relation:[{parent:"ID",child:"SORDER_ID"}]}         }} ) ); 


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
          ,buttons: [{xtype:"button",scope:this,text:"Order lines",handler:function() {this.show_window("DC0060");}}]
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
               ,activeItem:1
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
,"->","<span class='dcName'>DC0059</span>"          )
        }); 

       N21.DataComp.DC0059.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0059", N21.DataComp.DC0059);



