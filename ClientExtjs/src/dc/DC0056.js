/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0056 DataControl: BP customer acct
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0056 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"ACCSCHEMA_NAME", type:"string" }
         ,{name:"ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ACCT_RECEIVABLE", type:"string" }
         ,{name:"ACCT_PREPAYMENT", type:"string" }
         ,{name:"ACCT_RECEVABLE_SRVC", type:"string" }
         ,{name:"ACCSCHEMA_ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0056"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0056"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
          )
          ,dataComponentName:"DC0056"
          ,frame:true
          ,queryArraySize:-1
        });

         this.columnMap.add("CLIENT_NAME",{ id:'CLIENT_NAME',header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("ACCSCHEMA_NAME",{ id:'ACCSCHEMA_NAME',header:this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",width:100,dataIndex:'ACCSCHEMA_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0043({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("BPARTNER_ID",{ id:'BPARTNER_ID',header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCT_RECEIVABLE",{ id:'ACCT_RECEIVABLE',header:this.resourceBundle.FieldLabel.ACCT_RECEIVABLE||"Acct. receivable",width:100,dataIndex:'ACCT_RECEIVABLE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCT_PREPAYMENT",{ id:'ACCT_PREPAYMENT',header:this.resourceBundle.FieldLabel.ACCT_PREPAYMENT||"Acct. prepayment",width:100,dataIndex:'ACCT_PREPAYMENT',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCT_RECEVABLE_SRVC",{ id:'ACCT_RECEVABLE_SRVC',header:this.resourceBundle.FieldLabel.ACCT_RECEVABLE_SRVC||"Acct services",width:100,dataIndex:'ACCT_RECEVABLE_SRVC',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCSCHEMA_ID",{ id:'ACCSCHEMA_ID',header:this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",width:100,dataIndex:'ACCSCHEMA_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("CLIENT_NAME",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_NAME",id:"DC0056F_QRY_CLIENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0056F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0043({name:"QRY_ACCSCHEMA_NAME",id:"DC0056F_QRY_ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0056F_QRY_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0056F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0056F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0056F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0056F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("ACCT_RECEIVABLE",new Ext.form.TextField({name:"QRY_ACCT_RECEIVABLE",id:"DC0056F_QRY_ACCT_RECEIVABLE",fieldLabel: this.resourceBundle.FieldLabel.ACCT_RECEIVABLE||"Acct. receivable",allowBlank:true,width:100}));
       this.queryFields.add("ACCT_PREPAYMENT",new Ext.form.TextField({name:"QRY_ACCT_PREPAYMENT",id:"DC0056F_QRY_ACCT_PREPAYMENT",fieldLabel: this.resourceBundle.FieldLabel.ACCT_PREPAYMENT||"Acct. prepayment",allowBlank:true,width:100}));
       this.queryFields.add("ACCT_RECEVABLE_SRVC",new Ext.form.TextField({name:"QRY_ACCT_RECEVABLE_SRVC",id:"DC0056F_QRY_ACCT_RECEVABLE_SRVC",fieldLabel: this.resourceBundle.FieldLabel.ACCT_RECEVABLE_SRVC||"Acct services",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"QRY_ACCSCHEMA_ID",id:"DC0056F_QRY_ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "CLIENT_NAME","ACCSCHEMA_NAME","ACCT_RECEIVABLE","ACCT_PREPAYMENT","ACCT_RECEVABLE_SRVC" ];
       N21.DataComp.DC0056.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0056.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CLIENT_NAME:""
              ,ACCSCHEMA_NAME:""
              ,ID:""
              ,BPARTNER_ID:""
              ,CLIENT_ID:""
              ,ACCT_RECEIVABLE:""
              ,ACCT_PREPAYMENT:""
              ,ACCT_RECEVABLE_SRVC:""
              ,ACCSCHEMA_ID:""});
     }

  });
  Ext.reg("DC0056", N21.DataComp.DC0056);



