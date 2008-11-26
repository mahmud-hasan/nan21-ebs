/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0047 DataControl: Project issue attachments
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0047 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PROJECT_ISSUE_ID", type:"float" }
         ,{name:"FILE_NAME", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"NOTES", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:1
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("PROJECT_ISSUE_ID",{ id:'PROJECT_ISSUE_ID',header:this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id",width:100,dataIndex:'PROJECT_ISSUE_ID',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("FILE_NAME",{ id:'FILE_NAME',header:this.resourceBundle.FieldLabel.FILE_NAME||"File_name",width:100,dataIndex:'FILE_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Createdon",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NOTES",{ id:'NOTES',header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_ID",id:"DC0047_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",style: "text-align:right;"})  );
         this.queryFields.add("PROJECT_ISSUE_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_PROJECT_ISSUE_ID",id:"DC0047_QRY_PROJECT_ISSUE_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id",style: "text-align:right;"})  );
         this.queryFields.add("FILE_NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_FILE_NAME",id:"DC0047_QRY_FILE_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.FILE_NAME||"File_name"})  );
         this.queryFields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CREATEDON",id:"DC0047_QRY_CREATEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0047_QRY_CREATEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby"})  );
         this.queryFields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NOTES",id:"DC0047_QRY_NOTES",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"})  );

       this.queryFieldsVisible = [  "ID","PROJECT_ISSUE_ID","FILE_NAME","CREATEDON","CREATEDBY","NOTES" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0047"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0047"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("PROJECT_ISSUE_ID"),this.columns.get("FILE_NAME"),this.columns.get("CREATEDON"),this.columns.get("CREATEDBY"),this.columns.get("NOTES")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0047"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0047.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0047.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ISSUE_ID:""
              ,FILE_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,NOTES:""});
     }

  });
  Ext.reg("DC0047", N21.DataComp.DC0047);



