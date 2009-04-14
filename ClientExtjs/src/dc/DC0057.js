/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0057 DataControl: BP contact
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0057 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"FIRSTNAME", type:"string" }
         ,{name:"LASTNAME", type:"string" }
         ,{name:"PHONE", type:"string" }
         ,{name:"EMAIL", type:"string" }
         ,{name:"FAX", type:"string" }
         ,{name:"MOBILE", type:"string" }
         ,{name:"NOTES", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
     ,firstFocusFieldName:"FIRSTNAME"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0057"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0057"
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
,"->","<span class='dcName'>DC0057</span>"          )
          ,dataComponentName:"DC0057"
          ,frame:true
          ,queryArraySize:-1
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("BPARTNER_ID",{ id:'BPARTNER_ID',header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("FIRSTNAME",{ id:'FIRSTNAME',header:this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname",width:100,dataIndex:'FIRSTNAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("LASTNAME",{ id:'LASTNAME',header:this.resourceBundle.FieldLabel.LASTNAME||"Lastname",width:100,dataIndex:'LASTNAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PHONE",{ id:'PHONE',header:this.resourceBundle.FieldLabel.PHONE||"Phone",width:100,dataIndex:'PHONE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("EMAIL",{ id:'EMAIL',header:this.resourceBundle.FieldLabel.EMAIL||"Email",width:100,dataIndex:'EMAIL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("FAX",{ id:'FAX',header:this.resourceBundle.FieldLabel.FAX||"Fax",width:100,dataIndex:'FAX',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MOBILE",{ id:'MOBILE',header:this.resourceBundle.FieldLabel.MOBILE||"Mobile",width:100,dataIndex:'MOBILE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NOTES",{ id:'NOTES',header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextArea({   cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0057F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0057F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.Hidden({name:"QRY_NAME",id:"DC0057F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("FIRSTNAME",new Ext.form.TextField({name:"QRY_FIRSTNAME",id:"DC0057F_QRY_FIRSTNAME",fieldLabel: this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname",allowBlank:true,width:100}));
       this.queryFields.add("LASTNAME",new Ext.form.TextField({name:"QRY_LASTNAME",id:"DC0057F_QRY_LASTNAME",fieldLabel: this.resourceBundle.FieldLabel.LASTNAME||"Lastname",allowBlank:true,width:100}));
       this.queryFields.add("PHONE",new Ext.form.TextField({name:"QRY_PHONE",id:"DC0057F_QRY_PHONE",fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone",allowBlank:true,width:100}));
       this.queryFields.add("EMAIL",new Ext.form.TextField({name:"QRY_EMAIL",id:"DC0057F_QRY_EMAIL",fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email",allowBlank:true,width:100}));
       this.queryFields.add("FAX",new Ext.form.TextField({name:"QRY_FAX",id:"DC0057F_QRY_FAX",fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax",allowBlank:true,width:100}));
       this.queryFields.add("MOBILE",new Ext.form.TextField({name:"QRY_MOBILE",id:"DC0057F_QRY_MOBILE",fieldLabel: this.resourceBundle.FieldLabel.MOBILE||"Mobile",allowBlank:true,width:100}));
       this.queryFields.add("NOTES",new Ext.form.TextArea({name:"QRY_NOTES",id:"DC0057F_QRY_NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "FIRSTNAME","LASTNAME","PHONE","EMAIL","FAX","MOBILE","NOTES" ];
       N21.DataComp.DC0057.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0057.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,NAME:""
              ,FIRSTNAME:""
              ,LASTNAME:""
              ,PHONE:""
              ,EMAIL:""
              ,FAX:""
              ,MOBILE:""
              ,NOTES:""});
     }

  });
  Ext.reg("DC0057", N21.DataComp.DC0057);



