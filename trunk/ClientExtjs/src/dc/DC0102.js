/** 
 * Data Component: DC0102G, Title: Business partner accounts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0102G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"BPARTNER_NAME", type:"string" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ACCSCHEMA_ID", type:"float" }
         ,{name:"ACCSCHEMA_NAME", type:"string" }
         ,{name:"C_ACCT_RECEIVABLE_ID", type:"float" }
         ,{name:"C_ACCT_RECEIVABLE_NAME", type:"string" }
         ,{name:"C_ACCT_PREPAY_ID", type:"float" }
         ,{name:"V_ACCT_PAYABLE_NAME", type:"string" }
         ,{name:"V_ACCT_PAYABLE_ID", type:"float" }
         ,{name:"V_ACCT_PREPAY_ID", type:"float" }
         ,{name:"I_ACCT_PAYABLE_ID", type:"float" }
         ,{name:"I_ACCT_RECEIVABLE_ID", type:"float" }
         ,{name:"I_ACCT_PREPAY_ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0102F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0102F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Business partner ID",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_NAME",new  N21.DataComp.LOV0009({name:"QRY_BPARTNER_NAME",id:"DC0102F_QRY_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_QRY_BPARTNER_ID"}]}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0102F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0102F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"QRY_ACCSCHEMA_ID",id:"DC0102F_QRY_ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accounting schema ID",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"QRY_ACCSCHEMA_NAME",id:"DC0102F_QRY_ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0102F_QRY_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0102F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("C_ACCT_RECEIVABLE_ID",new Ext.form.Hidden({name:"QRY_C_ACCT_RECEIVABLE_ID",id:"DC0102F_QRY_C_ACCT_RECEIVABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.C_ACCT_RECEIVABLE_ID||"Cust. receivables acct",allowBlank:true,width:100}));
       this.queryFields.add("C_ACCT_RECEIVABLE_NAME",new  N21.DataComp.LOV0025({name:"QRY_C_ACCT_RECEIVABLE_NAME",id:"DC0102F_QRY_C_ACCT_RECEIVABLE_NAME",fieldLabel: this.resourceBundle.FieldLabel.C_ACCT_RECEIVABLE_NAME||"Receivables acct.",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_QRY_C_ACCT_RECEIVABLE_ID"}],paramMapping: [{param:"p_client_id",field:"DC0102F_QRY_CLIENT_ID"},{param:"p_accschema_id",field:"DC0102F_QRY_ACCSCHEMA_ID"}]}));
       this.queryFields.add("C_ACCT_PREPAY_ID",new Ext.form.Hidden({name:"QRY_C_ACCT_PREPAY_ID",id:"DC0102F_QRY_C_ACCT_PREPAY_ID",fieldLabel: this.resourceBundle.FieldLabel.C_ACCT_PREPAY_ID||"Cust. prepayment acct ",allowBlank:true,width:100}));
       this.queryFields.add("V_ACCT_PAYABLE_ID",new Ext.form.Hidden({name:"QRY_V_ACCT_PAYABLE_ID",id:"DC0102F_QRY_V_ACCT_PAYABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.V_ACCT_PAYABLE_ID||"Vendor prepayment acct",allowBlank:true,width:100}));
       this.queryFields.add("V_ACCT_PAYABLE_NAME",new  N21.DataComp.LOV0025({name:"QRY_V_ACCT_PAYABLE_NAME",id:"DC0102F_QRY_V_ACCT_PAYABLE_NAME",fieldLabel: this.resourceBundle.FieldLabel.V_ACCT_PAYABLE_NAME||"Payables acct.",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_QRY_V_ACCT_PAYABLE_ID"}],paramMapping: [{param:"p_client_id",field:"DC0102F_QRY_CLIENT_ID"},{param:"p_accschema_id",field:"DC0102F_QRY_ACCSCHEMA_ID"}]}));
       this.queryFields.add("V_ACCT_PREPAY_ID",new Ext.form.Hidden({name:"QRY_V_ACCT_PREPAY_ID",id:"DC0102F_QRY_V_ACCT_PREPAY_ID",fieldLabel: this.resourceBundle.FieldLabel.V_ACCT_PREPAY_ID||"Vendor prepayment acct ID",allowBlank:true,width:100}));
       this.queryFields.add("I_ACCT_PAYABLE_ID",new Ext.form.Hidden({name:"QRY_I_ACCT_PAYABLE_ID",id:"DC0102F_QRY_I_ACCT_PAYABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.I_ACCT_PAYABLE_ID||"Employee payables acct ID",allowBlank:true,width:100}));
       this.queryFields.add("I_ACCT_RECEIVABLE_ID",new Ext.form.Hidden({name:"QRY_I_ACCT_RECEIVABLE_ID",id:"DC0102F_QRY_I_ACCT_RECEIVABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.I_ACCT_RECEIVABLE_ID||"Employee receivables acct ID",allowBlank:true,width:100}));
       this.queryFields.add("I_ACCT_PREPAY_ID",new Ext.form.Hidden({name:"QRY_I_ACCT_PREPAY_ID",id:"DC0102F_QRY_I_ACCT_PREPAY_ID",fieldLabel: this.resourceBundle.FieldLabel.I_ACCT_PREPAY_ID||"Employee prepayment acct ID",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "BPARTNER_NAME","CLIENT_CODE","ACCSCHEMA_NAME","C_ACCT_RECEIVABLE_NAME","V_ACCT_PAYABLE_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0102"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0102"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Business partner ID",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",width:200,dataIndex:'BPARTNER_NAME',sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"ACCSCHEMA_ID",header:this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accounting schema ID",width:100,dataIndex:'ACCSCHEMA_ID',hidden:true,sortable:true}
              ,{ id:"ACCSCHEMA_NAME",header:this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",width:100,dataIndex:'ACCSCHEMA_NAME',sortable:true}
              ,{ id:"C_ACCT_RECEIVABLE_ID",header:this.resourceBundle.FieldLabel.C_ACCT_RECEIVABLE_ID||"Cust. receivables acct",width:100,dataIndex:'C_ACCT_RECEIVABLE_ID',hidden:true,sortable:true}
              ,{ id:"C_ACCT_RECEIVABLE_NAME",header:this.resourceBundle.FieldLabel.C_ACCT_RECEIVABLE_NAME||"Receivables acct.",width:100,dataIndex:'C_ACCT_RECEIVABLE_NAME',hidden:true,sortable:true}
              ,{ id:"C_ACCT_PREPAY_ID",header:this.resourceBundle.FieldLabel.C_ACCT_PREPAY_ID||"Cust. prepayment acct ",width:100,dataIndex:'C_ACCT_PREPAY_ID',hidden:true,sortable:true}
              ,{ id:"V_ACCT_PAYABLE_NAME",header:this.resourceBundle.FieldLabel.V_ACCT_PAYABLE_NAME||"Payables acct.",width:100,dataIndex:'V_ACCT_PAYABLE_NAME',hidden:true,sortable:true}
              ,{ id:"V_ACCT_PAYABLE_ID",header:this.resourceBundle.FieldLabel.V_ACCT_PAYABLE_ID||"Vendor prepayment acct",width:100,dataIndex:'V_ACCT_PAYABLE_ID',hidden:true,sortable:true}
              ,{ id:"V_ACCT_PREPAY_ID",header:this.resourceBundle.FieldLabel.V_ACCT_PREPAY_ID||"Vendor prepayment acct ID",width:100,dataIndex:'V_ACCT_PREPAY_ID',hidden:true,sortable:true}
              ,{ id:"I_ACCT_PAYABLE_ID",header:this.resourceBundle.FieldLabel.I_ACCT_PAYABLE_ID||"Employee payables acct ID",width:100,dataIndex:'I_ACCT_PAYABLE_ID',hidden:true,sortable:true}
              ,{ id:"I_ACCT_RECEIVABLE_ID",header:this.resourceBundle.FieldLabel.I_ACCT_RECEIVABLE_ID||"Employee receivables acct ID",width:100,dataIndex:'I_ACCT_RECEIVABLE_ID',hidden:true,sortable:true}
              ,{ id:"I_ACCT_PREPAY_ID",header:this.resourceBundle.FieldLabel.I_ACCT_PREPAY_ID||"Employee prepayment acct ID",width:100,dataIndex:'I_ACCT_PREPAY_ID',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0102G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0102G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0102G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMA_NAME:""
              ,C_ACCT_RECEIVABLE_ID:""
              ,C_ACCT_RECEIVABLE_NAME:""
              ,C_ACCT_PREPAY_ID:""
              ,V_ACCT_PAYABLE_NAME:""
              ,V_ACCT_PAYABLE_ID:""
              ,V_ACCT_PREPAY_ID:""
              ,I_ACCT_PAYABLE_ID:""
              ,I_ACCT_RECEIVABLE_ID:""
              ,I_ACCT_PREPAY_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0102G", N21.DataComp.DC0102G);
/** 
 * Data Component: DC0102F, Title: Business partner accounts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0102F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0102G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0102F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_ID",new Ext.form.Hidden({name:"BPARTNER_ID",id:"DC0102F_BPARTNER_ID",dataIndex:"BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Business partner ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:false}));
       this.fields.add("BPARTNER_NAME",new  N21.DataComp.LOV0009({name:"BPARTNER_NAME",id:"DC0102F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_BPARTNER_ID"}]}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0102F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_CLIENT_ID"}]}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0102F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:false}));
       this.fields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"ACCSCHEMA_ID",id:"DC0102F_ACCSCHEMA_ID",dataIndex:"ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accounting schema ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"ACCSCHEMA_NAME",id:"DC0102F_ACCSCHEMA_NAME",dataIndex:"ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0102F_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0102F.CLIENT_ID"}]}));
       this.fields.add("C_ACCT_RECEIVABLE_ID",new Ext.form.Hidden({name:"C_ACCT_RECEIVABLE_ID",id:"DC0102F_C_ACCT_RECEIVABLE_ID",dataIndex:"C_ACCT_RECEIVABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.C_ACCT_RECEIVABLE_ID||"Cust. receivables acct",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("C_ACCT_RECEIVABLE_NAME",new  N21.DataComp.LOV0025({name:"C_ACCT_RECEIVABLE_NAME",id:"DC0102F_C_ACCT_RECEIVABLE_NAME",dataIndex:"C_ACCT_RECEIVABLE_NAME",fieldLabel: this.resourceBundle.FieldLabel.C_ACCT_RECEIVABLE_NAME||"Receivables acct.",allowBlank:true,width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_C_ACCT_RECEIVABLE_ID"}],paramMapping: [{param:"p_client_id",field:"DC0102F.CLIENT_ID"},{param:"p_accschema_id",field:"DC0102F.ACCSCHEMA_ID"}]}));
       this.fields.add("C_ACCT_PREPAY_ID",new Ext.form.Hidden({name:"C_ACCT_PREPAY_ID",id:"DC0102F_C_ACCT_PREPAY_ID",dataIndex:"C_ACCT_PREPAY_ID",fieldLabel: this.resourceBundle.FieldLabel.C_ACCT_PREPAY_ID||"Cust. prepayment acct ",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("V_ACCT_PAYABLE_ID",new Ext.form.Hidden({name:"V_ACCT_PAYABLE_ID",id:"DC0102F_V_ACCT_PAYABLE_ID",dataIndex:"V_ACCT_PAYABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.V_ACCT_PAYABLE_ID||"Vendor prepayment acct",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("V_ACCT_PAYABLE_NAME",new  N21.DataComp.LOV0025({name:"V_ACCT_PAYABLE_NAME",id:"DC0102F_V_ACCT_PAYABLE_NAME",dataIndex:"V_ACCT_PAYABLE_NAME",fieldLabel: this.resourceBundle.FieldLabel.V_ACCT_PAYABLE_NAME||"Payables acct.",allowBlank:true,width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0102F_V_ACCT_PAYABLE_ID"}],paramMapping: [{param:"p_client_id",field:"DC0102F.CLIENT_ID"},{param:"p_accschema_id",field:"DC0102F.ACCSCHEMA_ID"}]}));
       this.fields.add("V_ACCT_PREPAY_ID",new Ext.form.Hidden({name:"V_ACCT_PREPAY_ID",id:"DC0102F_V_ACCT_PREPAY_ID",dataIndex:"V_ACCT_PREPAY_ID",fieldLabel: this.resourceBundle.FieldLabel.V_ACCT_PREPAY_ID||"Vendor prepayment acct ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("I_ACCT_PAYABLE_ID",new Ext.form.Hidden({name:"I_ACCT_PAYABLE_ID",id:"DC0102F_I_ACCT_PAYABLE_ID",dataIndex:"I_ACCT_PAYABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.I_ACCT_PAYABLE_ID||"Employee payables acct ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("I_ACCT_RECEIVABLE_ID",new Ext.form.Hidden({name:"I_ACCT_RECEIVABLE_ID",id:"DC0102F_I_ACCT_RECEIVABLE_ID",dataIndex:"I_ACCT_RECEIVABLE_ID",fieldLabel: this.resourceBundle.FieldLabel.I_ACCT_RECEIVABLE_ID||"Employee receivables acct ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("I_ACCT_PREPAY_ID",new Ext.form.Hidden({name:"I_ACCT_PREPAY_ID",id:"DC0102F_I_ACCT_PREPAY_ID",dataIndex:"I_ACCT_PREPAY_ID",fieldLabel: this.resourceBundle.FieldLabel.I_ACCT_PREPAY_ID||"Employee prepayment acct ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("BPARTNER_ID")
                 ,this.fields.get("BPARTNER_NAME")
                 ,this.fields.get("CLIENT_CODE")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("ACCSCHEMA_ID")
                 ,this.fields.get("ACCSCHEMA_NAME")
                 ,this.fields.get("C_ACCT_RECEIVABLE_ID")
                 ,this.fields.get("C_ACCT_RECEIVABLE_NAME")
                 ,this.fields.get("C_ACCT_PREPAY_ID")
                 ,this.fields.get("V_ACCT_PAYABLE_ID")
                 ,this.fields.get("V_ACCT_PAYABLE_NAME")
                 ,this.fields.get("V_ACCT_PREPAY_ID")
                 ,this.fields.get("I_ACCT_PAYABLE_ID")
                 ,this.fields.get("I_ACCT_RECEIVABLE_ID")
                 ,this.fields.get("I_ACCT_PREPAY_ID")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0102F"
          ,firstFocusFieldName:"C_ACCT_RECEIVABLE_NAME"
          ,firstFocusFieldNameInsert:"BPARTNER_NAME"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0102F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0102F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMA_NAME:""
              ,C_ACCT_RECEIVABLE_ID:""
              ,C_ACCT_RECEIVABLE_NAME:""
              ,C_ACCT_PREPAY_ID:""
              ,V_ACCT_PAYABLE_NAME:""
              ,V_ACCT_PAYABLE_ID:""
              ,V_ACCT_PREPAY_ID:""
              ,I_ACCT_PAYABLE_ID:""
              ,I_ACCT_RECEIVABLE_ID:""
              ,I_ACCT_PREPAY_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0102F", N21.DataComp.DC0102F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0102
 * Title: Business partner accounts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0102 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0102"
          ,masterName:"DC0102G"
          ,detailName:"DC0102F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0102G",id: "DC0102G",region:"west"  ,split:true,width:450,minWidth:0}
             ,{xtype: "DC0102F",id: "DC0102F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0102</span>"          )
        }); 

       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0102.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0102", N21.DataComp.DC0102);



