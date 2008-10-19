/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0065 DataControl: Documents serial no. setup
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0065 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"DOCUMENT_TYPE", type:"string" }
         ,{name:"SERIAL", type:"string" }
    ])
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client id",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("DOCUMENT_TYPE",{ id:'DOCUMENT_TYPE',header:this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type",width:100,dataIndex:'DOCUMENT_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("SERIAL",{ id:'SERIAL',header:this.resourceBundle.FieldLabel.SERIAL||"Serial",width:100,dataIndex:'SERIAL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0065"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0065"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("CLIENT_CODE"),this.columns.get("CLIENT_ID"),this.columns.get("DOCUMENT_TYPE"),this.columns.get("SERIAL")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0065_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0065_QRY_CLIENT_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"}
               ,{xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0065_QRY_CLIENT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client id"}
               ,{xtype: "textfield",name:"QRY_DOCUMENT_TYPE",id:"DC0065_QRY_DOCUMENT_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type"}
               ,{xtype: "textfield",name:"QRY_SERIAL",id:"DC0065_QRY_SERIAL",width:120,fieldLabel: this.resourceBundle.FieldLabel.SERIAL||"Serial"}
          ]
          ,dataComponentName:"DC0065"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0065.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0065.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOCUMENT_TYPE:""
              ,SERIAL:""});
     }

  });
  Ext.reg("DC0065", N21.DataComp.DC0065);



