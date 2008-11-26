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
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"CODE"
    ,recordPk:[ "ID"]
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


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0003_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("UOM_TYPE", new N21.DataComp.LOV0004({xtype: "LOV0004",name:"QRY_UOM_TYPE",id:"DC0003_QRY_UOM_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.UOM_TYPE||"Uom_type"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0003_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0003_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("ACTIVE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0003_QRY_ACTIVE",width:40,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"})  );

       this.queryFieldsVisible = [  "UOM_TYPE","CODE","NAME","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0003"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0003"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("UOM_TYPE"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("IS_PERIOD"),this.columns.get("IS_VOLUME"),this.columns.get("IS_MASS"),this.columns.get("ACTIVE"),this.columns.get("CREATEDON"),this.columns.get("CREATEDBY"),this.columns.get("MODIFIEDON"),this.columns.get("MODIFIEDBY")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
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



