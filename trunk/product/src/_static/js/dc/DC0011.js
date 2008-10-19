/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0011 DataControl: UoM conversions
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0011 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UOM_FROM", type:"string" }
         ,{name:"UOM_TO", type:"string" }
         ,{name:"CONVERSION_FACTOR", type:"float" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"CONVERSION_TYPE", type:"string" }
    ])
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("UOM_FROM",{ id:'UOM_FROM',header:this.resourceBundle.FieldLabel.UOM_FROM||"Uom_from",width:100,dataIndex:'UOM_FROM',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0002({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("UOM_TO",{ id:'UOM_TO',header:this.resourceBundle.FieldLabel.UOM_TO||"Uom_to",width:100,dataIndex:'UOM_TO',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0002({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CONVERSION_FACTOR",{ id:'CONVERSION_FACTOR',header:this.resourceBundle.FieldLabel.CONVERSION_FACTOR||"Conversion_factor",width:100,dataIndex:'CONVERSION_FACTOR',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columns.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("CONVERSION_TYPE",{ id:'CONVERSION_TYPE',header:this.resourceBundle.FieldLabel.CONVERSION_TYPE||"Conversion_type",width:50,dataIndex:'CONVERSION_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0011"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0011"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("UOM_FROM"),this.columns.get("UOM_TO"),this.columns.get("CONVERSION_FACTOR"),this.columns.get("MODIFIEDON"),this.columns.get("MODIFIEDBY"),this.columns.get("CONVERSION_TYPE")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0011_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0002",name:"QRY_UOM_FROM",id:"DC0011_QRY_UOM_FROM",width:120,fieldLabel: this.resourceBundle.FieldLabel.UOM_FROM||"Uom_from"}
               ,{xtype: "LOV0002",name:"QRY_UOM_TO",id:"DC0011_QRY_UOM_TO",width:120,fieldLabel: this.resourceBundle.FieldLabel.UOM_TO||"Uom_to"}
               ,{xtype: "numberfield",name:"QRY_CONVERSION_FACTOR",id:"DC0011_QRY_CONVERSION_FACTOR",width:120,fieldLabel: this.resourceBundle.FieldLabel.CONVERSION_FACTOR||"Conversion_factor",style: "text-align:right;"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0011_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0011_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
               ,{xtype: "textfield",name:"QRY_CONVERSION_TYPE",id:"DC0011_QRY_CONVERSION_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CONVERSION_TYPE||"Conversion_type"}
          ]
          ,dataComponentName:"DC0011"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0011.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0011.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UOM_FROM:""
              ,UOM_TO:""
              ,CONVERSION_FACTOR:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,CONVERSION_TYPE:""});
     }

  });
  Ext.reg("DC0011", N21.DataComp.DC0011);



