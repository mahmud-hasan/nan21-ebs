/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0112 DataControl: Parcel event types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0112 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"EVNTGRP_CODE", type:"string" }
         ,{name:"ACTIVE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"NAME"
     ,firstFocusFieldNameInsert:"CODE"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0112"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0112", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0112</span>"          )
          ,dataComponentName:"DC0112"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:120,dataIndex:'CODE',insert_allowed:true,update_allowed:false,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,caseRestriction:"Upper",style:"text-transform:uppercase;",cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("EVNTGRP_CODE",{ id:'EVNTGRP_CODE',header:this.resourceBundle.FieldLabel.EVNTGRP_CODE||"Group",width:100,dataIndex:'EVNTGRP_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0069({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0112F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0112F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,caseRestriction:"Upper",style: "text-transform:uppercase;",width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0112F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("EVNTGRP_CODE",new  N21.DataComp.LOV0069({name:"QRY_EVNTGRP_CODE",id:"DC0112F_QRY_EVNTGRP_CODE",fieldLabel: this.resourceBundle.FieldLabel.EVNTGRP_CODE||"Group",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0112F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));



       this.queryFieldsVisible = [  "CODE","NAME","EVNTGRP_CODE","ACTIVE" ];
       N21.DataComp.DC0112.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0112.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,EVNTGRP_CODE:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0112", N21.DataComp.DC0112);


