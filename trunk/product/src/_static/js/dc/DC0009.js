/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0009 DataControl: Cities def.
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0009 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"COUNTRY_CODE", type:"string" }
         ,{name:"REGION_CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"ACTIVE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"COUNTRY_CODE"
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:false,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("COUNTRY_CODE",{ id:'COUNTRY_CODE',header:this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country",width:120,dataIndex:'COUNTRY_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0006({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("REGION_CODE",{ id:'REGION_CODE',header:this.resourceBundle.FieldLabel.REGION_CODE||"Region",width:120,dataIndex:'REGION_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0007({allowBlank: false,callFromGrid:this,paramMapping: [{param:"p_country_code",field:"COUNTRY_CODE"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"City",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0009_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("COUNTRY_CODE", new N21.DataComp.LOV0006({xtype: "LOV0006",name:"QRY_COUNTRY_CODE",id:"DC0009_QRY_COUNTRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country"})  );
         this.queryFields.add("REGION_CODE", new N21.DataComp.LOV0007({xtype: "LOV0007",name:"QRY_REGION_CODE",id:"DC0009_QRY_REGION_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.REGION_CODE||"Region"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0009_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"City"})  );
         this.queryFields.add("ACTIVE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0009_QRY_ACTIVE",width:40,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"})  );

       this.queryFieldsVisible = [  "COUNTRY_CODE","REGION_CODE","NAME","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0009"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0009"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("COUNTRY_CODE"),this.columns.get("REGION_CODE"),this.columns.get("NAME"),this.columns.get("ACTIVE")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0009"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0009.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0009.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,COUNTRY_CODE:""
              ,REGION_CODE:""
              ,NAME:""
              ,ACTIVE:""});
     }

  });
  Ext.reg("DC0009", N21.DataComp.DC0009);



