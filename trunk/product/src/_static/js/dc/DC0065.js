/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0065 DataControl: Documents serial no. setup
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0065 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"DOCUMENT_TYPE", type:"string" }
         ,{name:"SERIAL", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client id",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("DOCUMENT_TYPE",{ id:'DOCUMENT_TYPE',header:this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type",width:100,dataIndex:'DOCUMENT_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("SERIAL",{ id:'SERIAL',header:this.resourceBundle.FieldLabel.SERIAL||"Serial",width:100,dataIndex:'SERIAL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0065_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0065_QRY_CLIENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0065_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client id"})  );
         this.queryFields.add("DOCUMENT_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOCUMENT_TYPE",id:"DC0065_QRY_DOCUMENT_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type"})  );
         this.queryFields.add("SERIAL", new Ext.form.TextField ({xtype: "textfield",name:"QRY_SERIAL",id:"DC0065_QRY_SERIAL",width:100,fieldLabel: this.resourceBundle.FieldLabel.SERIAL||"Serial"})  );

       this.queryFieldsVisible = [  "CLIENT_CODE","DOCUMENT_TYPE","SERIAL" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0065"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0065"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("CLIENT_CODE"),this.columns.get("CLIENT_ID"),this.columns.get("DOCUMENT_TYPE"),this.columns.get("SERIAL")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0065"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0065.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0065.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOCUMENT_TYPE:""
              ,SERIAL:""});
     }

  });
  Ext.reg("DC0065", N21.DataComp.DC0065);



