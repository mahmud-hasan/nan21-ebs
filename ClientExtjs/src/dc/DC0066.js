/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0066 DataControl: Menu shortcuts
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0066 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"POSITION", type:"float" }
         ,{name:"OWNER", type:"string" }
         ,{name:"TITLE", type:"string" }
         ,{name:"LINK", type:"string" }
         ,{name:"MENUSHRCT_ID", type:"float" }
         ,{name:"MENUITEM_ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0066"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0066", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0066</span>"          )
          ,dataComponentName:"DC0066"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:false,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("POSITION",{ id:'POSITION',header:this.resourceBundle.FieldLabel.POSITION||"Position",width:40,dataIndex:'POSITION',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("OWNER",{ id:'OWNER',header:this.resourceBundle.FieldLabel.OWNER||"Owner",width:100,dataIndex:'OWNER',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("TITLE",{ id:'TITLE',header:this.resourceBundle.FieldLabel.TITLE||"Title",width:200,dataIndex:'TITLE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("LINK",{ id:'LINK',header:this.resourceBundle.FieldLabel.LINK||"Link",width:100,dataIndex:'LINK',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MENUSHRCT_ID",{ id:'MENUSHRCT_ID',header:this.resourceBundle.FieldLabel.MENUSHRCT_ID||"Menushrct_id",width:100,dataIndex:'MENUSHRCT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MENUITEM_ID",{ id:'MENUITEM_ID',header:this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",width:100,dataIndex:'MENUITEM_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0066F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("POSITION",new Ext.form.NumberField({name:"QRY_POSITION",id:"DC0066F_QRY_POSITION",fieldLabel: this.resourceBundle.FieldLabel.POSITION||"Position",allowBlank:true,width:100}));
       this.queryFields.add("OWNER",new Ext.form.TextField({name:"QRY_OWNER",id:"DC0066F_QRY_OWNER",fieldLabel: this.resourceBundle.FieldLabel.OWNER||"Owner",allowBlank:true,width:100}));
       this.queryFields.add("TITLE",new Ext.form.TextField({name:"QRY_TITLE",id:"DC0066F_QRY_TITLE",fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title",allowBlank:true,width:100}));
       this.queryFields.add("LINK",new Ext.form.TextField({name:"QRY_LINK",id:"DC0066F_QRY_LINK",fieldLabel: this.resourceBundle.FieldLabel.LINK||"Link",allowBlank:true,width:100}));
       this.queryFields.add("MENUSHRCT_ID",new Ext.form.Hidden({name:"QRY_MENUSHRCT_ID",id:"DC0066F_QRY_MENUSHRCT_ID",fieldLabel: this.resourceBundle.FieldLabel.MENUSHRCT_ID||"Menushrct_id",allowBlank:true,width:100}));
       this.queryFields.add("MENUITEM_ID",new Ext.form.Hidden({name:"QRY_MENUITEM_ID",id:"DC0066F_QRY_MENUITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "POSITION","OWNER","TITLE","LINK" ];
       N21.DataComp.DC0066.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0066.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,POSITION:""
              ,OWNER:""
              ,TITLE:""
              ,LINK:""
              ,MENUSHRCT_ID:""
              ,MENUITEM_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0066", N21.DataComp.DC0066);



