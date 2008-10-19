/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0068 DataControl: User roles
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0068 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"USER_ID", type:"float" }
         ,{name:"ROLE_NAME", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
    ])
     ,firstFocusFieldName:"ROLE_NAME"
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("USER_ID",{ id:'USER_ID',header:this.resourceBundle.FieldLabel.USER_ID||"User_id",width:100,dataIndex:'USER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("ROLE_NAME",{ id:'ROLE_NAME',header:this.resourceBundle.FieldLabel.ROLE_NAME||"Role",width:100,dataIndex:'ROLE_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0045({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columns.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columns.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,sortable:true});

       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0068"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0068"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("USER_ID"),this.columns.get("ROLE_NAME"),this.columns.get("CREATEDON"),this.columns.get("CREATEDBY")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0068_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_USER_ID",id:"DC0068_QRY_USER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.USER_ID||"User_id"}
               ,{xtype: "LOV0045",name:"QRY_ROLE_NAME",id:"DC0068_QRY_ROLE_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.ROLE_NAME||"Role"}
          ]
          ,dataComponentName:"DC0068"
          ,frame:true
          ,queryArraySize:-1
        });

       N21.DataComp.DC0068.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0068.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,USER_ID:""
              ,ROLE_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""});
     }

  });
  Ext.reg("DC0068", N21.DataComp.DC0068);



