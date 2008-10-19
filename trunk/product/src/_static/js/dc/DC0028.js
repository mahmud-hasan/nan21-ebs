/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0028 DataControl: Payment doc. types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0028 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"COMPENSATION", type:"string" }
         ,{name:"PAYABLE", type:"string" }
         ,{name:"RECEIVABLE", type:"string" }
         ,{name:"PRINT_REPORT", type:"string" }
    ])
     ,firstFocusFieldName:"CODE"
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:40,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("COMPENSATION",{ id:'COMPENSATION',header:this.resourceBundle.FieldLabel.COMPENSATION||"Compensation",width:50,dataIndex:'COMPENSATION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("PAYABLE",{ id:'PAYABLE',header:this.resourceBundle.FieldLabel.PAYABLE||"Payable",width:50,dataIndex:'PAYABLE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("RECEIVABLE",{ id:'RECEIVABLE',header:this.resourceBundle.FieldLabel.RECEIVABLE||"Receivable",width:50,dataIndex:'RECEIVABLE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("PRINT_REPORT",{ id:'PRINT_REPORT',header:this.resourceBundle.FieldLabel.PRINT_REPORT||"Print_report",width:100,dataIndex:'PRINT_REPORT',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0028"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0028"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("CLIENT_ID"),this.columns.get("CLIENT_CODE"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("COMPENSATION"),this.columns.get("PAYABLE"),this.columns.get("RECEIVABLE"),this.columns.get("PRINT_REPORT")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0028_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0028_QRY_CLIENT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"}
               ,{xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0028_QRY_CLIENT_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0028_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0028_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_COMPENSATION",id:"DC0028_QRY_COMPENSATION",width:120,fieldLabel: this.resourceBundle.FieldLabel.COMPENSATION||"Compensation"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_PAYABLE",id:"DC0028_QRY_PAYABLE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PAYABLE||"Payable"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_RECEIVABLE",id:"DC0028_QRY_RECEIVABLE",width:120,fieldLabel: this.resourceBundle.FieldLabel.RECEIVABLE||"Receivable"}
               ,{xtype: "textfield",name:"QRY_PRINT_REPORT",id:"DC0028_QRY_PRINT_REPORT",width:120,fieldLabel: this.resourceBundle.FieldLabel.PRINT_REPORT||"Print_report"}
          ]
          ,dataComponentName:"DC0028"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0028.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0028.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,CODE:""
              ,NAME:""
              ,COMPENSATION:""
              ,PAYABLE:""
              ,RECEIVABLE:""
              ,PRINT_REPORT:""});
     }

  });
  Ext.reg("DC0028", N21.DataComp.DC0028);



