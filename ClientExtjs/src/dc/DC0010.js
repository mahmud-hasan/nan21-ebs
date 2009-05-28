/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0010 DataControl: Unit of measure types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0010 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"IS_PERIOD", type:"string" }
         ,{name:"IS_VOLUME", type:"string" }
         ,{name:"IS_WEIGHT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"CODE"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0010"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0010", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0010</span>"          )
          ,dataComponentName:"DC0010"
          ,frame:true
          ,queryArraySize:20
          ,childDCs: [{name:"DC0003",relation:[{parent:"CODE",child:"UOM_TYPE"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Defined UOM's",handler:function() {this.show_window("DC0003");}}]
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,caseRestriction:"Upper",style:"text-transform:uppercase;",cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

         this.columnMap.add("IS_PERIOD",{ id:'IS_PERIOD',
         header:this.resourceBundle.FieldLabel.IS_PERIOD||"Period?",width:50,
         dataIndex:'IS_PERIOD',insert_allowed:true,update_allowed:true,sortable:true,
         editor:new Ext.ux.form.BooleanCombo({ disableKeyFilter:true, editable:false, selectOnFocus:false,  store:["N","Y"],allowBlank: false,cls:"x-form-text-in-grid"})});


         this.columnMap.add("IS_VOLUME",{ id:'IS_VOLUME',header:this.resourceBundle.FieldLabel.IS_VOLUME||"Volume?",width:50,dataIndex:'IS_VOLUME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.ux.form.BooleanCombo({ disableKeyFilter:true, editable:false, selectOnFocus:false,store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IS_WEIGHT",{ id:'IS_WEIGHT',header:this.resourceBundle.FieldLabel.IS_WEIGHT||"Weight?",width:50,dataIndex:'IS_WEIGHT',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.ux.form.BooleanCombo({ disableKeyFilter:true, editable:false, selectOnFocus:false,store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0010F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0010F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,caseRestriction:"Upper",style: "text-transform:uppercase;",width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0010F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));

       this.layoutItems.add("DC0003",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0003 - "+(N21.DataComp.DC0003.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:500, height:400, items:{xtype:"DC0003",id:"DC0003", parentDcRelation:{name:"DC0010",relation:[{parent:"CODE",child:"UOM_TYPE"}]}         }} ) ); 


       this.queryFieldsVisible = [  "CODE","NAME" ];
       N21.DataComp.DC0010.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0010.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,IS_PERIOD:""
              ,IS_VOLUME:""
              ,IS_WEIGHT:""});
     }

  });
  Ext.reg("DC0010", N21.DataComp.DC0010);



