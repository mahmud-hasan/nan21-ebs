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
           store: new Ext.data.Store({
               id:"storeDC0066"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0066"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
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

         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0066_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("POSITION", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_POSITION",id:"DC0066_QRY_POSITION",width:100,fieldLabel: this.resourceBundle.FieldLabel.POSITION||"Position",style: "text-align:right;"})  );
         this.queryFields.add("OWNER", new Ext.form.TextField ({xtype: "textfield",name:"QRY_OWNER",id:"DC0066_QRY_OWNER",width:100,fieldLabel: this.resourceBundle.FieldLabel.OWNER||"Owner"})  );
         this.queryFields.add("TITLE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_TITLE",id:"DC0066_QRY_TITLE",width:100,fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title"})  );
         this.queryFields.add("LINK", new Ext.form.TextField ({xtype: "textfield",name:"QRY_LINK",id:"DC0066_QRY_LINK",width:100,fieldLabel: this.resourceBundle.FieldLabel.LINK||"Link"})  );
         this.queryFields.add("MENUSHRCT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_MENUSHRCT_ID",id:"DC0066_QRY_MENUSHRCT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.MENUSHRCT_ID||"Menushrct_id"})  );
         this.queryFields.add("MENUITEM_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_MENUITEM_ID",id:"DC0066_QRY_MENUITEM_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id"})  );



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



