/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0067 DataControl: Roles
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0067 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
    ])
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Role",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("DESCRIPTION",{ id:'DESCRIPTION',header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:200,dataIndex:'DESCRIPTION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextArea({   cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0067"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0067"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("NAME"),this.columns.get("DESCRIPTION")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0067_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0067_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Role"}
               ,{xtype: "textarea",name:"QRY_DESCRIPTION",id:"DC0067_QRY_DESCRIPTION",width:120,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description"}
          ]
          ,dataComponentName:"DC0067"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0067.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0067.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,NAME:""
              ,DESCRIPTION:""});
     }

  });
  Ext.reg("DC0067", N21.DataComp.DC0067);



