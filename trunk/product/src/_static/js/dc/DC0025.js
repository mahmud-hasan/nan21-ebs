/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0025 DataControl: UI lovs
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0025 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
    ])
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:120,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("DESCRIPTION",{ id:'DESCRIPTION',header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0025"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0025"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("DESCRIPTION")]
          ,queryFields: [
                {xtype: "numberfield",name:"QRY_ID",id:"DC0025_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0025_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0025_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "textfield",name:"QRY_DESCRIPTION",id:"DC0025_QRY_DESCRIPTION",width:120,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description"}
          ]
          ,dataComponentName:"DC0025"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0025.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0025.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,DESCRIPTION:""});
     }

  });
  Ext.reg("DC0025", N21.DataComp.DC0025);



