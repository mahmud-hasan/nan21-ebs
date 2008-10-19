/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0006 DataControl: Bank agencies
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0006 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"BANK_CODE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"TYPE", type:"string" }
         ,{name:"ADRESS", type:"string" }
    ])
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("BANK_CODE",{ id:'BANK_CODE',header:this.resourceBundle.FieldLabel.BANK_CODE||"Bank_code",width:100,dataIndex:'BANK_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0005({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:150,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("TYPE",{ id:'TYPE',header:this.resourceBundle.FieldLabel.TYPE||"Type",width:50,dataIndex:'TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("ADRESS",{ id:'ADRESS',header:this.resourceBundle.FieldLabel.ADRESS||"Adress",width:150,dataIndex:'ADRESS',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0006"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0006"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("BANK_CODE"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("TYPE"),this.columns.get("ADRESS")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0006_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0005",name:"QRY_BANK_CODE",id:"DC0006_QRY_BANK_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.BANK_CODE||"Bank_code"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0006_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0006_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "textfield",name:"QRY_TYPE",id:"DC0006_QRY_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.TYPE||"Type"}
               ,{xtype: "textfield",name:"QRY_ADRESS",id:"DC0006_QRY_ADRESS",width:120,fieldLabel: this.resourceBundle.FieldLabel.ADRESS||"Adress"}
          ]
          ,dataComponentName:"DC0006"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0006.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0006.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BANK_CODE:""
              ,CODE:""
              ,NAME:""
              ,TYPE:""
              ,ADRESS:""});
     }

  });
  Ext.reg("DC0006", N21.DataComp.DC0006);



