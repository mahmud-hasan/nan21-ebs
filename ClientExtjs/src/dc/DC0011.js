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
         ,{name:"UOM_TO", type:"string" }
         ,{name:"UOM_FROM", type:"string" }
         ,{name:"CONVERSION_TYPE", type:"string" }
         ,{name:"CONVERSION_FACTOR", type:"float" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"UOM_TO"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0011"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0011"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0011</span>"          )
          ,dataComponentName:"DC0011"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("UOM_TO",{ id:'UOM_TO',header:this.resourceBundle.FieldLabel.UOM_TO||"Uom_to",width:100,dataIndex:'UOM_TO',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0002({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("UOM_FROM",{ id:'UOM_FROM',header:this.resourceBundle.FieldLabel.UOM_FROM||"Uom_from",width:100,dataIndex:'UOM_FROM',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0002({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CONVERSION_TYPE",{ id:'CONVERSION_TYPE',header:this.resourceBundle.FieldLabel.CONVERSION_TYPE||"Operator",width:50,dataIndex:'CONVERSION_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({   store:['x',':'],allowBlank: true,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true})});
         this.columnMap.add("CONVERSION_FACTOR",{ id:'CONVERSION_FACTOR',header:this.resourceBundle.FieldLabel.CONVERSION_FACTOR||"Factor",width:100,dataIndex:'CONVERSION_FACTOR',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0011F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("UOM_TO",new  N21.DataComp.LOV0002({name:"QRY_UOM_TO",id:"DC0011F_QRY_UOM_TO",fieldLabel: this.resourceBundle.FieldLabel.UOM_TO||"Uom_to",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("UOM_FROM",new  N21.DataComp.LOV0002({name:"QRY_UOM_FROM",id:"DC0011F_QRY_UOM_FROM",fieldLabel: this.resourceBundle.FieldLabel.UOM_FROM||"Uom_from",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("CONVERSION_TYPE",new Ext.form.ComboBox({name:"QRY_CONVERSION_TYPE",id:"DC0011F_QRY_CONVERSION_TYPE",fieldLabel: this.resourceBundle.FieldLabel.CONVERSION_TYPE||"Operator",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,store:['x',':']}));



       this.queryFieldsVisible = [  "UOM_TO","UOM_FROM","CONVERSION_TYPE" ];
       N21.DataComp.DC0011.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0011.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UOM_TO:""
              ,UOM_FROM:""
              ,CONVERSION_TYPE:""
              ,CONVERSION_FACTOR:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0011", N21.DataComp.DC0011);



