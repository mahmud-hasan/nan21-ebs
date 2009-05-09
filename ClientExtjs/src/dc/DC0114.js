/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0114 DataControl: Parcel events
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0114 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PARCEL_ID", type:"float" }
         ,{name:"PARCEL_CODE", type:"string" }
         ,{name:"EVENT_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"EVENTTYP_ID", type:"float" }
         ,{name:"EVENTTYP_NAME", type:"string" }
         ,{name:"SRC_ORG_ID", type:"float" }
         ,{name:"SRC_ORG_NAME", type:"string" }
         ,{name:"DEST_ORG_NAME", type:"string" }
         ,{name:"DEST_ORG_ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0114"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0114", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0114</span>"          )
          ,dataComponentName:"DC0114"
          ,frame:true
          ,queryArraySize:40
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("PARCEL_ID",{ id:'PARCEL_ID',header:this.resourceBundle.FieldLabel.PARCEL_ID||"Parcel ID",width:100,dataIndex:'PARCEL_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("PARCEL_CODE",{ id:'PARCEL_CODE',header:this.resourceBundle.FieldLabel.PARCEL_CODE||"Parcel code",width:100,dataIndex:'PARCEL_CODE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("EVENT_DATE",{ id:'EVENT_DATE',header:this.resourceBundle.FieldLabel.EVENT_DATE||"Event date",width:100,dataIndex:'EVENT_DATE',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("EVENTTYP_ID",{ id:'EVENTTYP_ID',header:this.resourceBundle.FieldLabel.EVENTTYP_ID||"Event type ID",width:100,dataIndex:'EVENTTYP_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("EVENTTYP_NAME",{ id:'EVENTTYP_NAME',header:this.resourceBundle.FieldLabel.EVENTTYP_NAME||"Event type",width:150,dataIndex:'EVENTTYP_NAME',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("SRC_ORG_ID",{ id:'SRC_ORG_ID',header:this.resourceBundle.FieldLabel.SRC_ORG_ID||"From inventory ID",width:100,dataIndex:'SRC_ORG_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("SRC_ORG_NAME",{ id:'SRC_ORG_NAME',header:this.resourceBundle.FieldLabel.SRC_ORG_NAME||"From inventory",width:120,dataIndex:'SRC_ORG_NAME',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("DEST_ORG_NAME",{ id:'DEST_ORG_NAME',header:this.resourceBundle.FieldLabel.DEST_ORG_NAME||"To inventory",width:100,dataIndex:'DEST_ORG_NAME',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("DEST_ORG_ID",{ id:'DEST_ORG_ID',header:this.resourceBundle.FieldLabel.DEST_ORG_ID||"To inventory ID",width:100,dataIndex:'DEST_ORG_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0114F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("PARCEL_ID",new Ext.form.Hidden({name:"QRY_PARCEL_ID",id:"DC0114F_QRY_PARCEL_ID",fieldLabel: this.resourceBundle.FieldLabel.PARCEL_ID||"Parcel ID",allowBlank:true,width:100}));
       this.queryFields.add("PARCEL_CODE",new Ext.form.TextField({name:"QRY_PARCEL_CODE",id:"DC0114F_QRY_PARCEL_CODE",fieldLabel: this.resourceBundle.FieldLabel.PARCEL_CODE||"Parcel code",allowBlank:true,width:100}));
       this.queryFields.add("EVENT_DATE",new Ext.form.DateField({name:"QRY_EVENT_DATE",id:"DC0114F_QRY_EVENT_DATE",fieldLabel: this.resourceBundle.FieldLabel.EVENT_DATE||"Event date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("EVENTTYP_ID",new Ext.form.Hidden({name:"QRY_EVENTTYP_ID",id:"DC0114F_QRY_EVENTTYP_ID",fieldLabel: this.resourceBundle.FieldLabel.EVENTTYP_ID||"Event type ID",allowBlank:true,width:100}));
       this.queryFields.add("EVENTTYP_NAME",new  N21.DataComp.LOV0070({name:"QRY_EVENTTYP_NAME",id:"DC0114F_QRY_EVENTTYP_NAME",fieldLabel: this.resourceBundle.FieldLabel.EVENTTYP_NAME||"Event type",allowBlank:true,width:130}));
       this.queryFields.add("SRC_ORG_ID",new Ext.form.Hidden({name:"QRY_SRC_ORG_ID",id:"DC0114F_QRY_SRC_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.SRC_ORG_ID||"From inventory ID",allowBlank:true,width:100}));
       this.queryFields.add("SRC_ORG_NAME",new  N21.DataComp.LOV0071({name:"QRY_SRC_ORG_NAME",id:"DC0114F_QRY_SRC_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.SRC_ORG_NAME||"From inventory",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0114F_QRY_SRC_ORG_ID"}]}));
       this.queryFields.add("DEST_ORG_NAME",new  N21.DataComp.LOV0071({name:"QRY_DEST_ORG_NAME",id:"DC0114F_QRY_DEST_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.DEST_ORG_NAME||"To inventory",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0114F_QRY_DEST_ORG_ID"}]}));
       this.queryFields.add("DEST_ORG_ID",new Ext.form.Hidden({name:"QRY_DEST_ORG_ID",id:"DC0114F_QRY_DEST_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_ORG_ID||"To inventory ID",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "PARCEL_CODE","EVENT_DATE","EVENTTYP_NAME","SRC_ORG_NAME","DEST_ORG_NAME" ];
       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_SAVE").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0114.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0114.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PARCEL_ID:""
              ,PARCEL_CODE:""
              ,EVENT_DATE:""
              ,EVENTTYP_ID:""
              ,EVENTTYP_NAME:""
              ,SRC_ORG_ID:""
              ,SRC_ORG_NAME:""
              ,DEST_ORG_NAME:""
              ,DEST_ORG_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""});
     }

  });
  Ext.reg("DC0114", N21.DataComp.DC0114);



