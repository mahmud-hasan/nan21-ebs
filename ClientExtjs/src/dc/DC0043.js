/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0043 DataControl: Menu item translations
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0043 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"MENUITEM_ID", type:"float" }
         ,{name:"LANG", type:"string" }
         ,{name:"TRANSLATION", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0043"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0043"
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
,"->","<span class='dcName'>DC0043</span>"          )
          ,dataComponentName:"DC0043"
          ,frame:true
          ,queryArraySize:-1
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MENUITEM_ID",{ id:'MENUITEM_ID',header:this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",width:100,dataIndex:'MENUITEM_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("LANG",{ id:'LANG',header:this.resourceBundle.FieldLabel.LANG||"Language",width:100,dataIndex:'LANG',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0044({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("TRANSLATION",{ id:'TRANSLATION',header:this.resourceBundle.FieldLabel.TRANSLATION||"Translation",width:250,dataIndex:'TRANSLATION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0043F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("MENUITEM_ID",new Ext.form.Hidden({name:"QRY_MENUITEM_ID",id:"DC0043F_QRY_MENUITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",allowBlank:true,width:100}));
       this.queryFields.add("LANG",new  N21.DataComp.LOV0044({name:"QRY_LANG",id:"DC0043F_QRY_LANG",fieldLabel: this.resourceBundle.FieldLabel.LANG||"Language",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("TRANSLATION",new Ext.form.TextField({name:"QRY_TRANSLATION",id:"DC0043F_QRY_TRANSLATION",fieldLabel: this.resourceBundle.FieldLabel.TRANSLATION||"Translation",allowBlank:true,width:100}));
       this.queryFields.add("CREATEDON",new Ext.form.DateField({name:"QRY_CREATEDON",id:"DC0043F_QRY_CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDBY",new Ext.form.TextField({name:"QRY_CREATEDBY",id:"DC0043F_QRY_CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",allowBlank:true,width:100}));
       this.queryFields.add("MODIFIEDON",new Ext.form.DateField({name:"QRY_MODIFIEDON",id:"DC0043F_QRY_MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("MODIFIEDBY",new Ext.form.TextField({name:"QRY_MODIFIEDBY",id:"DC0043F_QRY_MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "LANG","TRANSLATION","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY" ];
       N21.DataComp.DC0043.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0043.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,MENUITEM_ID:""
              ,LANG:""
              ,TRANSLATION:""});
     }

  });
  Ext.reg("DC0043", N21.DataComp.DC0043);



