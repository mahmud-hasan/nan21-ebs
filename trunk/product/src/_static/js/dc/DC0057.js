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
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
     ,firstFocusFieldName:"FIRSTNAME"
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("BPARTNER_ID",{ id:'BPARTNER_ID',header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("FIRSTNAME",{ id:'FIRSTNAME',header:this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname",width:100,dataIndex:'FIRSTNAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("LASTNAME",{ id:'LASTNAME',header:this.resourceBundle.FieldLabel.LASTNAME||"Lastname",width:100,dataIndex:'LASTNAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("PHONE",{ id:'PHONE',header:this.resourceBundle.FieldLabel.PHONE||"Phone",width:100,dataIndex:'PHONE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("EMAIL",{ id:'EMAIL',header:this.resourceBundle.FieldLabel.EMAIL||"Email",width:100,dataIndex:'EMAIL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("FAX",{ id:'FAX',header:this.resourceBundle.FieldLabel.FAX||"Fax",width:100,dataIndex:'FAX',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("MOBILE",{ id:'MOBILE',header:this.resourceBundle.FieldLabel.MOBILE||"Mobile",width:100,dataIndex:'MOBILE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("NOTES",{ id:'NOTES',header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextArea({   cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0057_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0057_QRY_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id"})  );
         this.queryFields.add("NAME", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_NAME",id:"DC0057_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("FIRSTNAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_FIRSTNAME",id:"DC0057_QRY_FIRSTNAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname"})  );
         this.queryFields.add("LASTNAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_LASTNAME",id:"DC0057_QRY_LASTNAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.LASTNAME||"Lastname"})  );
         this.queryFields.add("PHONE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_PHONE",id:"DC0057_QRY_PHONE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone"})  );
         this.queryFields.add("EMAIL", new Ext.form.TextField ({xtype: "textfield",name:"QRY_EMAIL",id:"DC0057_QRY_EMAIL",width:100,fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email"})  );
         this.queryFields.add("FAX", new Ext.form.TextField ({xtype: "textfield",name:"QRY_FAX",id:"DC0057_QRY_FAX",width:100,fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax"})  );
         this.queryFields.add("MOBILE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MOBILE",id:"DC0057_QRY_MOBILE",width:100,fieldLabel: this.resourceBundle.FieldLabel.MOBILE||"Mobile"})  );
         this.queryFields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"QRY_NOTES",id:"DC0057_QRY_NOTES",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"})  );

       this.queryFieldsVisible = [  "FIRSTNAME","LASTNAME","PHONE","EMAIL","FAX","MOBILE","NOTES" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0057"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0057"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("BPARTNER_ID"),this.columns.get("NAME"),this.columns.get("FIRSTNAME"),this.columns.get("LASTNAME"),this.columns.get("PHONE"),this.columns.get("EMAIL"),this.columns.get("FAX"),this.columns.get("MOBILE"),this.columns.get("NOTES")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0057"
          ,frame:true
          ,queryArraySize:-1
        });

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



