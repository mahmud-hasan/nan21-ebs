/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0058 DataControl: BP communication
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0058 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"CMNCT_TYPE", type:"string" }
         ,{name:"CMNCT_VALUE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
     ,firstFocusFieldName:"CMNCT_TYPE"
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("BPARTNER_ID",{ id:'BPARTNER_ID',header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CMNCT_TYPE",{ id:'CMNCT_TYPE',header:this.resourceBundle.FieldLabel.CMNCT_TYPE||"Type",width:100,dataIndex:'CMNCT_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0038({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CMNCT_VALUE",{ id:'CMNCT_VALUE',header:this.resourceBundle.FieldLabel.CMNCT_VALUE||"Value",width:100,dataIndex:'CMNCT_VALUE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_ID",id:"DC0058_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",style: "text-align:right;"})  );
         this.queryFields.add("BPARTNER_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_BPARTNER_ID",id:"DC0058_QRY_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",style: "text-align:right;"})  );
         this.queryFields.add("CMNCT_TYPE", new N21.DataComp.LOV0038({xtype: "LOV0038",name:"QRY_CMNCT_TYPE",id:"DC0058_QRY_CMNCT_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CMNCT_TYPE||"Type"})  );
         this.queryFields.add("CMNCT_VALUE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CMNCT_VALUE",id:"DC0058_QRY_CMNCT_VALUE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CMNCT_VALUE||"Value"})  );

       this.queryFieldsVisible = [  "ID","BPARTNER_ID","CMNCT_TYPE","CMNCT_VALUE" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0058"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0058"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("BPARTNER_ID"),this.columns.get("CMNCT_TYPE"),this.columns.get("CMNCT_VALUE")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0058"
          ,frame:true
          ,queryArraySize:-1
        });

       N21.DataComp.DC0058.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0058.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,CMNCT_TYPE:""
              ,CMNCT_VALUE:""});
     }

  });
  Ext.reg("DC0058", N21.DataComp.DC0058);



