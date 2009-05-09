/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0071 DataControl: UI DC role permission
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0071 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UI_DC", type:"string" }
         ,{name:"ROLE_NAME", type:"string" }
         ,{name:"FETCH_ALLOWED", type:"string" }
         ,{name:"INSERT_ALLOWED", type:"string" }
         ,{name:"UPDATE_ALLOWED", type:"string" }
         ,{name:"DELETE_ALLOWED", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
     ,firstFocusFieldName:"UI_DC"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0071"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0071", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0071</span>"          )
          ,dataComponentName:"DC0071"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("UI_DC",{ id:'UI_DC',header:this.resourceBundle.FieldLabel.UI_DC||"DC",width:100,dataIndex:'UI_DC',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0028({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"CODE",field:"UI_DC"}],cls:"x-form-text-in-grid",selectOnFocus:true,cls:"x-form-text-in-grid",valueField:"CODE",displayField:"CODE"})});
         this.columnMap.add("ROLE_NAME",{ id:'ROLE_NAME',header:this.resourceBundle.FieldLabel.ROLE_NAME||"Role",width:150,dataIndex:'ROLE_NAME',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0045({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("FETCH_ALLOWED",{ id:'FETCH_ALLOWED',header:this.resourceBundle.FieldLabel.FETCH_ALLOWED||"Query allowed",width:60,dataIndex:'FETCH_ALLOWED',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("INSERT_ALLOWED",{ id:'INSERT_ALLOWED',header:this.resourceBundle.FieldLabel.INSERT_ALLOWED||"Insert allowed",width:60,dataIndex:'INSERT_ALLOWED',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("UPDATE_ALLOWED",{ id:'UPDATE_ALLOWED',header:this.resourceBundle.FieldLabel.UPDATE_ALLOWED||"Update allowed",width:60,dataIndex:'UPDATE_ALLOWED',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("DELETE_ALLOWED",{ id:'DELETE_ALLOWED',header:this.resourceBundle.FieldLabel.DELETE_ALLOWED||"Delete allowed",width:60,dataIndex:'DELETE_ALLOWED',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:false,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:false,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:false,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:false,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0071F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("UI_DC",new  N21.DataComp.LOV0028({name:"QRY_UI_DC",id:"DC0071F_QRY_UI_DC",fieldLabel: this.resourceBundle.FieldLabel.UI_DC||"DC",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"CODE",field:"DC0071F_QRY_UI_DC"}]}));
       this.queryFields.add("ROLE_NAME",new  N21.DataComp.LOV0045({name:"QRY_ROLE_NAME",id:"DC0071F_QRY_ROLE_NAME",fieldLabel: this.resourceBundle.FieldLabel.ROLE_NAME||"Role",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("FETCH_ALLOWED",new Ext.form.ComboBox({name:"QRY_FETCH_ALLOWED",id:"DC0071F_QRY_FETCH_ALLOWED",fieldLabel: this.resourceBundle.FieldLabel.FETCH_ALLOWED||"Query allowed",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("INSERT_ALLOWED",new Ext.form.ComboBox({name:"QRY_INSERT_ALLOWED",id:"DC0071F_QRY_INSERT_ALLOWED",fieldLabel: this.resourceBundle.FieldLabel.INSERT_ALLOWED||"Insert allowed",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("UPDATE_ALLOWED",new Ext.form.ComboBox({name:"QRY_UPDATE_ALLOWED",id:"DC0071F_QRY_UPDATE_ALLOWED",fieldLabel: this.resourceBundle.FieldLabel.UPDATE_ALLOWED||"Update allowed",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("DELETE_ALLOWED",new Ext.form.ComboBox({name:"QRY_DELETE_ALLOWED",id:"DC0071F_QRY_DELETE_ALLOWED",fieldLabel: this.resourceBundle.FieldLabel.DELETE_ALLOWED||"Delete allowed",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));



       this.queryFieldsVisible = [  "UI_DC","ROLE_NAME","FETCH_ALLOWED","INSERT_ALLOWED","UPDATE_ALLOWED","DELETE_ALLOWED" ];
       N21.DataComp.DC0071.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0071.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UI_DC:""
              ,ROLE_NAME:""
              ,FETCH_ALLOWED:""
              ,INSERT_ALLOWED:""
              ,UPDATE_ALLOWED:""
              ,DELETE_ALLOWED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0071", N21.DataComp.DC0071);



