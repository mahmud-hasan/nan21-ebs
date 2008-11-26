/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0067 DataControl: Roles
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0067 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:1
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Role",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("DESCRIPTION",{ id:'DESCRIPTION',header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:200,dataIndex:'DESCRIPTION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextArea({   cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0067_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0067_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Role"})  );

       this.queryFieldsVisible = [  "NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0067"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0067"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("NAME"),this.columns.get("DESCRIPTION")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0067"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0067.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0067.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,NAME:""
              ,DESCRIPTION:""});
     }

  });
  Ext.reg("DC0067", N21.DataComp.DC0067);



