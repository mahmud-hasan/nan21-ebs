/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0111 DataControl: Org attribute value
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0111 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"ORGATTR_NAME", type:"string" }
         ,{name:"ORGATTR_ID", type:"float" }
         ,{name:"ATTR_VAL", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
     ,firstFocusFieldName:"ATTR_VAL"
     ,firstFocusFieldNameInsert:"ORGATTR_NAME"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0111"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0111"
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
,"->","<span class='dcName'>DC0111</span>"          )
          ,dataComponentName:"DC0111"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ORG_ID",{ id:'ORG_ID',header:this.resourceBundle.FieldLabel.ORG_ID||"Org. id",width:100,dataIndex:'ORG_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ORGATTR_NAME",{ id:'ORGATTR_NAME',header:this.resourceBundle.FieldLabel.ORGATTR_NAME||"Attribute",width:150,dataIndex:'ORGATTR_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0066({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"ORGATTR_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("ORGATTR_ID",{ id:'ORGATTR_ID',header:this.resourceBundle.FieldLabel.ORGATTR_ID||"Attribute ID",width:100,dataIndex:'ORGATTR_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ATTR_VAL",{ id:'ATTR_VAL',header:this.resourceBundle.FieldLabel.ATTR_VAL||"Value",width:150,dataIndex:'ATTR_VAL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0111F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("ORG_ID",new Ext.form.Hidden({name:"QRY_ORG_ID",id:"DC0111F_QRY_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org. id",allowBlank:true,width:100}));
       this.queryFields.add("ORGATTR_ID",new Ext.form.Hidden({name:"QRY_ORGATTR_ID",id:"DC0111F_QRY_ORGATTR_ID",fieldLabel: this.resourceBundle.FieldLabel.ORGATTR_ID||"Attribute ID",allowBlank:true,width:100}));
       this.queryFields.add("ORGATTR_NAME",new  N21.DataComp.LOV0066({name:"QRY_ORGATTR_NAME",id:"DC0111F_QRY_ORGATTR_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORGATTR_NAME||"Attribute",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0111F_QRY_ORGATTR_ID"}]}));
       this.queryFields.add("ATTR_VAL",new Ext.form.TextField({name:"QRY_ATTR_VAL",id:"DC0111F_QRY_ATTR_VAL",fieldLabel: this.resourceBundle.FieldLabel.ATTR_VAL||"Value",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "ORGATTR_NAME","ATTR_VAL" ];
       N21.DataComp.DC0111.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0111.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,ORG_ID:""
              ,ORGATTR_NAME:""
              ,ORGATTR_ID:""
              ,ATTR_VAL:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0111", N21.DataComp.DC0111);



