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
     ,firstFocusFieldName:"FIRSTNAME"
    ,columns: new Ext.util.MixedCollection()
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

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0057"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0057"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("BPARTNER_ID"),this.columns.get("NAME"),this.columns.get("FIRSTNAME"),this.columns.get("LASTNAME"),this.columns.get("PHONE"),this.columns.get("EMAIL"),this.columns.get("FAX"),this.columns.get("MOBILE"),this.columns.get("NOTES")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0057_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0057_QRY_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id"}
               ,{xtype: "hidden",name:"QRY_NAME",id:"DC0057_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "textfield",name:"QRY_FIRSTNAME",id:"DC0057_QRY_FIRSTNAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname"}
               ,{xtype: "textfield",name:"QRY_LASTNAME",id:"DC0057_QRY_LASTNAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.LASTNAME||"Lastname"}
               ,{xtype: "textfield",name:"QRY_PHONE",id:"DC0057_QRY_PHONE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone"}
               ,{xtype: "textfield",name:"QRY_EMAIL",id:"DC0057_QRY_EMAIL",width:120,fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email"}
               ,{xtype: "textfield",name:"QRY_FAX",id:"DC0057_QRY_FAX",width:120,fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax"}
               ,{xtype: "textfield",name:"QRY_MOBILE",id:"DC0057_QRY_MOBILE",width:120,fieldLabel: this.resourceBundle.FieldLabel.MOBILE||"Mobile"}
               ,{xtype: "textarea",name:"QRY_NOTES",id:"DC0057_QRY_NOTES",width:120,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"}
          ]
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



