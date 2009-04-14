/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0101 DataControl: Acc schema default accounts
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0101 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ACCSCHEMA_NAME", type:"string" }
         ,{name:"ACCSCHEMA_ID", type:"float" }
         ,{name:"ACCSCHEMAPARAM_ID", type:"float" }
         ,{name:"ACCSCHEMAPARAM_NAME", type:"string" }
         ,{name:"PARAM_ACCT_ID", type:"float" }
         ,{name:"PARAM_ACCT_NAME", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
     ,firstFocusFieldName:"PARAM_ACCT_NAME"
     ,firstFocusFieldNameInsert:"CLIENT_CODE"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0101"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0101"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0101</span>"          )
          ,dataComponentName:"DC0101"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCSCHEMA_NAME",{ id:'ACCSCHEMA_NAME',header:this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",width:120,dataIndex:'ACCSCHEMA_NAME',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0062({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ACCSCHEMA_ID",field:"ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("ACCSCHEMA_ID",{ id:'ACCSCHEMA_ID',header:this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accounting schema ID",width:100,dataIndex:'ACCSCHEMA_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCSCHEMAPARAM_ID",{ id:'ACCSCHEMAPARAM_ID',header:this.resourceBundle.FieldLabel.ACCSCHEMAPARAM_ID||"Parameter ID",width:100,dataIndex:'ACCSCHEMAPARAM_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACCSCHEMAPARAM_NAME",{ id:'ACCSCHEMAPARAM_NAME',header:this.resourceBundle.FieldLabel.ACCSCHEMAPARAM_NAME||"Parameter",width:200,dataIndex:'ACCSCHEMAPARAM_NAME',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0063({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"ACCSCHEMAPARAM_ID"}],paramMapping: [{param:"p_is_account",value:"Y"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("PARAM_ACCT_ID",{ id:'PARAM_ACCT_ID',header:this.resourceBundle.FieldLabel.PARAM_ACCT_ID||"Account ID",width:100,dataIndex:'PARAM_ACCT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PARAM_ACCT_NAME",{ id:'PARAM_ACCT_NAME',header:this.resourceBundle.FieldLabel.PARAM_ACCT_NAME||"Account",width:100,dataIndex:'PARAM_ACCT_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0025({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"PARAM_ACCT_ID"},{column:"ACCOUNT",field:"PARAM_ACCT_NAME"}],paramMapping: [{param:"p_client_id",field:"CLIENT_ID"},{param:"p_accschema_id",field:"ACCSCHEMA_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"ACCOUNT"})});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0101F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0101F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0101F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0101F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"QRY_ACCSCHEMA_NAME",id:"DC0101F_QRY_ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0101F_QRY_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0101F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"QRY_ACCSCHEMA_ID",id:"DC0101F_QRY_ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accounting schema ID",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMAPARAM_ID",new Ext.form.Hidden({name:"QRY_ACCSCHEMAPARAM_ID",id:"DC0101F_QRY_ACCSCHEMAPARAM_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMAPARAM_ID||"Parameter ID",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMAPARAM_NAME",new  N21.DataComp.LOV0063({name:"QRY_ACCSCHEMAPARAM_NAME",id:"DC0101F_QRY_ACCSCHEMAPARAM_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMAPARAM_NAME||"Parameter",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0101F_QRY_ACCSCHEMAPARAM_ID"}],paramMapping: [{param:"p_is_account",value:"Y"}]}));
       this.queryFields.add("PARAM_ACCT_NAME",new  N21.DataComp.LOV0025({name:"QRY_PARAM_ACCT_NAME",id:"DC0101F_QRY_PARAM_ACCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PARAM_ACCT_NAME||"Account",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0101F_QRY_PARAM_ACCT_ID"},{column:"ACCOUNT",field:"DC0101F_QRY_PARAM_ACCT_NAME"}],paramMapping: [{param:"p_client_id",field:"DC0101F_QRY_CLIENT_ID"},{param:"p_accschema_id",field:"DC0101F_QRY_ACCSCHEMA_ID"}]}));
       this.queryFields.add("PARAM_ACCT_ID",new Ext.form.Hidden({name:"QRY_PARAM_ACCT_ID",id:"DC0101F_QRY_PARAM_ACCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PARAM_ACCT_ID||"Account ID",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "CLIENT_CODE","ACCSCHEMA_NAME","ACCSCHEMAPARAM_NAME","PARAM_ACCT_NAME" ];
       N21.DataComp.DC0101.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0101.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ACCSCHEMA_NAME:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMAPARAM_ID:""
              ,ACCSCHEMAPARAM_NAME:""
              ,PARAM_ACCT_ID:""
              ,PARAM_ACCT_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0101", N21.DataComp.DC0101);



