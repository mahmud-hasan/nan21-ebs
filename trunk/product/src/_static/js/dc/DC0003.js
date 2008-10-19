/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0003 DataControl: UoM
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0003 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UOM_TYPE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"IS_PERIOD", type:"string" }
         ,{name:"IS_VOLUME", type:"string" }
         ,{name:"IS_MASS", type:"string" }
         ,{name:"ACTIVE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,firstFocusFieldName:"CODE"
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("UOM_TYPE",{ id:'UOM_TYPE',header:this.resourceBundle.FieldLabel.UOM_TYPE||"Uom_type",width:100,dataIndex:'UOM_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0004({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("IS_PERIOD",{ id:'IS_PERIOD',header:this.resourceBundle.FieldLabel.IS_PERIOD||"Period",width:50,dataIndex:'IS_PERIOD',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("IS_VOLUME",{ id:'IS_VOLUME',header:this.resourceBundle.FieldLabel.IS_VOLUME||"Volume",width:50,dataIndex:'IS_VOLUME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("IS_MASS",{ id:'IS_MASS',header:this.resourceBundle.FieldLabel.IS_MASS||"Mass",width:50,dataIndex:'IS_MASS',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',insert_allowed:false,update_allowed:false,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columns.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',insert_allowed:false,update_allowed:false,hidden:true,sortable:true});
         this.columns.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',insert_allowed:false,update_allowed:false,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columns.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0003"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0003"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("UOM_TYPE"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("IS_PERIOD"),this.columns.get("IS_VOLUME"),this.columns.get("IS_MASS"),this.columns.get("ACTIVE"),this.columns.get("CREATEDON"),this.columns.get("CREATEDBY"),this.columns.get("MODIFIEDON"),this.columns.get("MODIFIEDBY")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0003_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0004",name:"QRY_UOM_TYPE",id:"DC0003_QRY_UOM_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.UOM_TYPE||"Uom_type"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0003_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0003_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_PERIOD",id:"DC0003_QRY_IS_PERIOD",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_PERIOD||"Period"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_VOLUME",id:"DC0003_QRY_IS_VOLUME",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_VOLUME||"Volume"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_MASS",id:"DC0003_QRY_IS_MASS",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_MASS||"Mass"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0003_QRY_ACTIVE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0003_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0003_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0003_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0003_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
          ]
          ,dataComponentName:"DC0003"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0003.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0003.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UOM_TYPE:""
              ,CODE:""
              ,NAME:""
              ,IS_PERIOD:""
              ,IS_VOLUME:""
              ,IS_MASS:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0003", N21.DataComp.DC0003);



