/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0028 DataControl: Payment doc. types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0028 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"COMPENSATION", type:"string" }
         ,{name:"PAYABLE", type:"string" }
         ,{name:"RECEIVABLE", type:"string" }
         ,{name:"PRINT_REPORT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"CODE"
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:40,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("COMPENSATION",{ id:'COMPENSATION',header:this.resourceBundle.FieldLabel.COMPENSATION||"Compensation",width:50,dataIndex:'COMPENSATION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("PAYABLE",{ id:'PAYABLE',header:this.resourceBundle.FieldLabel.PAYABLE||"Payable",width:50,dataIndex:'PAYABLE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("RECEIVABLE",{ id:'RECEIVABLE',header:this.resourceBundle.FieldLabel.RECEIVABLE||"Receivable",width:50,dataIndex:'RECEIVABLE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("PRINT_REPORT",{ id:'PRINT_REPORT',header:this.resourceBundle.FieldLabel.PRINT_REPORT||"Print_report",width:100,dataIndex:'PRINT_REPORT',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0028_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0028_QRY_CLIENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0028_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0028_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0028_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );

       this.queryFieldsVisible = [  "CLIENT_CODE","CODE","NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0028"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0028"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("CLIENT_ID"),this.columns.get("CLIENT_CODE"),this.columns.get("CODE"),this.columns.get("NAME"),this.columns.get("COMPENSATION"),this.columns.get("PAYABLE"),this.columns.get("RECEIVABLE"),this.columns.get("PRINT_REPORT")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_66"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_73"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_68"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_65"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_67"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_72"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_70"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_69"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_71"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0028"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0028.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0028.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,CODE:""
              ,NAME:""
              ,COMPENSATION:""
              ,PAYABLE:""
              ,RECEIVABLE:""
              ,PRINT_REPORT:""});
     }

  });
  Ext.reg("DC0028", N21.DataComp.DC0028);



