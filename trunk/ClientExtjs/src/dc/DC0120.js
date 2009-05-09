/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0120 DataControl: Import strategy fields
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0120 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"IMPSTG_ID", type:"float" }
         ,{name:"POSITION", type:"float" }
         ,{name:"IN_SRC", type:"string" }
         ,{name:"IN_DEST", type:"string" }
         ,{name:"SRC_NAME", type:"string" }
         ,{name:"DEST_NAME", type:"string" }
         ,{name:"DATA_TYPE", type:"string" }
         ,{name:"DATA_LENGTH", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
     ,firstFocusFieldName:"POSITION"
     ,firstFocusFieldNameInsert:"POSITION"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0120"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0120", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0120</span>"          )
          ,dataComponentName:"DC0120"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IMPSTG_ID",{ id:'IMPSTG_ID',header:this.resourceBundle.FieldLabel.IMPSTG_ID||"Import strategy ID",width:100,dataIndex:'IMPSTG_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("POSITION",{ id:'POSITION',header:this.resourceBundle.FieldLabel.POSITION||"Position",width:60,dataIndex:'POSITION',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IN_SRC",{ id:'IN_SRC',header:this.resourceBundle.FieldLabel.IN_SRC||"In source",width:50,dataIndex:'IN_SRC',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IN_DEST",{ id:'IN_DEST',header:this.resourceBundle.FieldLabel.IN_DEST||"In target",width:50,dataIndex:'IN_DEST',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("SRC_NAME",{ id:'SRC_NAME',header:this.resourceBundle.FieldLabel.SRC_NAME||"Source field name",width:100,dataIndex:'SRC_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("DEST_NAME",{ id:'DEST_NAME',header:this.resourceBundle.FieldLabel.DEST_NAME||"Target field name",width:100,dataIndex:'DEST_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("DATA_TYPE",{ id:'DATA_TYPE',header:this.resourceBundle.FieldLabel.DATA_TYPE||"Data type",width:100,dataIndex:'DATA_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("DATA_LENGTH",{ id:'DATA_LENGTH',header:this.resourceBundle.FieldLabel.DATA_LENGTH||"Data length",width:100,dataIndex:'DATA_LENGTH',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0120F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("IMPSTG_ID",new Ext.form.Hidden({name:"QRY_IMPSTG_ID",id:"DC0120F_QRY_IMPSTG_ID",fieldLabel: this.resourceBundle.FieldLabel.IMPSTG_ID||"Import strategy ID",allowBlank:true,width:100}));
       this.queryFields.add("POSITION",new Ext.form.NumberField({name:"QRY_POSITION",id:"DC0120F_QRY_POSITION",fieldLabel: this.resourceBundle.FieldLabel.POSITION||"Position",allowBlank:true,width:100}));
       this.queryFields.add("IN_SRC",new Ext.form.ComboBox({name:"QRY_IN_SRC",id:"DC0120F_QRY_IN_SRC",fieldLabel: this.resourceBundle.FieldLabel.IN_SRC||"In source",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IN_DEST",new Ext.form.ComboBox({name:"QRY_IN_DEST",id:"DC0120F_QRY_IN_DEST",fieldLabel: this.resourceBundle.FieldLabel.IN_DEST||"In target",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("SRC_NAME",new Ext.form.TextField({name:"QRY_SRC_NAME",id:"DC0120F_QRY_SRC_NAME",fieldLabel: this.resourceBundle.FieldLabel.SRC_NAME||"Source field name",allowBlank:true,width:100}));
       this.queryFields.add("DEST_NAME",new Ext.form.TextField({name:"QRY_DEST_NAME",id:"DC0120F_QRY_DEST_NAME",fieldLabel: this.resourceBundle.FieldLabel.DEST_NAME||"Target field name",allowBlank:true,width:100}));
       this.queryFields.add("DATA_TYPE",new Ext.form.TextField({name:"QRY_DATA_TYPE",id:"DC0120F_QRY_DATA_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DATA_TYPE||"Data type",allowBlank:true,width:100}));
       this.queryFields.add("DATA_LENGTH",new Ext.form.NumberField({name:"QRY_DATA_LENGTH",id:"DC0120F_QRY_DATA_LENGTH",fieldLabel: this.resourceBundle.FieldLabel.DATA_LENGTH||"Data length",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "POSITION","IN_SRC","IN_DEST","SRC_NAME","DEST_NAME","DATA_TYPE","DATA_LENGTH" ];
       N21.DataComp.DC0120.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0120.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,IMPSTG_ID:""
              ,POSITION:""
              ,IN_SRC:""
              ,IN_DEST:""
              ,SRC_NAME:""
              ,DEST_NAME:""
              ,DATA_TYPE:""
              ,DATA_LENGTH:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0120", N21.DataComp.DC0120);



