/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0013 DataControl: Streets
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0013 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"COUNTRY_CODE", type:"string" }
         ,{name:"REGION_CODE", type:"string" }
         ,{name:"CITY_NAME", type:"string" }
         ,{name:"CITY_ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"ACTIVE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
     ,firstFocusFieldName:"COUNTRY_CODE"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0013"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0013"
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
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0013</span>"          )
          ,dataComponentName:"DC0013"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("COUNTRY_CODE",{ id:'COUNTRY_CODE',header:this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country",width:100,dataIndex:'COUNTRY_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0006({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("REGION_CODE",{ id:'REGION_CODE',header:this.resourceBundle.FieldLabel.REGION_CODE||"Region",width:100,dataIndex:'REGION_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0007({allowBlank: false,callFromGrid:this,paramMapping: [{param:"p_country_code",field:"COUNTRY_CODE"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CITY_NAME",{ id:'CITY_NAME',header:this.resourceBundle.FieldLabel.CITY_NAME||"City",width:150,dataIndex:'CITY_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0010({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CITY_ID"}],paramMapping: [{param:"p_region_code",field:"REGION_CODE"},{param:"p_country_code",field:"COUNTRY_CODE"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("CITY_ID",{ id:'CITY_ID',header:this.resourceBundle.FieldLabel.CITY_ID||"City_id",width:100,dataIndex:'CITY_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Street",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0013F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("COUNTRY_CODE",new  N21.DataComp.LOV0006({name:"QRY_COUNTRY_CODE",id:"DC0013F_QRY_COUNTRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("REGION_CODE",new  N21.DataComp.LOV0007({name:"QRY_REGION_CODE",id:"DC0013F_QRY_REGION_CODE",fieldLabel: this.resourceBundle.FieldLabel.REGION_CODE||"Region",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,paramMapping: [{param:"p_country_code",field:"DC0013F_QRY_COUNTRY_CODE"}]}));
       this.queryFields.add("CITY_NAME",new  N21.DataComp.LOV0010({name:"QRY_CITY_NAME",id:"DC0013F_QRY_CITY_NAME",fieldLabel: this.resourceBundle.FieldLabel.CITY_NAME||"City",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0013F_QRY_CITY_ID"}],paramMapping: [{param:"p_region_code",field:"DC0013F_QRY_REGION_CODE"},{param:"p_country_code",field:"DC0013F_QRY_COUNTRY_CODE"}]}));
       this.queryFields.add("CITY_ID",new Ext.form.Hidden({name:"QRY_CITY_ID",id:"DC0013F_QRY_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.CITY_ID||"City_id",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0013F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Street",allowBlank:true,width:100}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0013F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:40,store:["Y","N"]}));



       this.queryFieldsVisible = [  "COUNTRY_CODE","REGION_CODE","CITY_NAME","NAME","ACTIVE" ];
       N21.DataComp.DC0013.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0013.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,COUNTRY_CODE:""
              ,REGION_CODE:""
              ,CITY_NAME:""
              ,CITY_ID:""
              ,NAME:""
              ,ACTIVE:""});
     }

  });
  Ext.reg("DC0013", N21.DataComp.DC0013);



