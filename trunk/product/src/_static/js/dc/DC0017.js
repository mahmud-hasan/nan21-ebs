/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0017 DataControl: Delivery agents
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0017 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"ACTIVE", type:"string" }
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
               id:"storeDC0017"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0017"
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
          ,dataComponentName:"DC0017"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0017_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0017_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0017_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("ACTIVE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0017_QRY_ACTIVE",width:40,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"})  );



       this.queryFieldsVisible = [  "CODE","NAME","ACTIVE" ];
       N21.DataComp.DC0017.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0017.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,ACTIVE:""});
     }

  });
  Ext.reg("DC0017", N21.DataComp.DC0017);



