/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0002 DataControl: Currencies def.
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0002 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"ACTIVE", type:"string" }
    ])
     ,firstFocusFieldName:"CODE"
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0002"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0002"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("ACTIVE")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0002_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0002_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0002_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0002_QRY_ACTIVE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"}
          ]
          ,dataComponentName:"DC0002"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0002.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0002.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,ACTIVE:""});
     }

  });
  Ext.reg("DC0002", N21.DataComp.DC0002);



