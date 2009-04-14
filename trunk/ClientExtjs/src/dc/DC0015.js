/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0015 DataControl: BP adress
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0015 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"COUNTRY_CODE", type:"string" }
         ,{name:"REGION_CODE", type:"string" }
         ,{name:"CITY", type:"string" }
         ,{name:"CITY_ID", type:"float" }
         ,{name:"IS_DETAILED", type:"string" }
         ,{name:"ADRESS", type:"string" }
         ,{name:"ZIP", type:"string" }
         ,{name:"STREET_ID", type:"float" }
         ,{name:"STREET", type:"string" }
         ,{name:"ENTRANCE", type:"string" }
         ,{name:"IS_BILLING", type:"string" }
         ,{name:"IS_DELIVERY", type:"string" }
         ,{name:"NOTES", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0
     ,firstFocusFieldName:"NAME"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0015"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0015"
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
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0015</span>"          )
          ,dataComponentName:"DC0015"
          ,frame:true
          ,queryArraySize:-1
        });

         this.columnMap.add("BPARTNER_ID",{ id:'BPARTNER_ID',header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("COUNTRY_CODE",{ id:'COUNTRY_CODE',header:this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country_code",width:60,dataIndex:'COUNTRY_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0006({allowBlank: true,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("REGION_CODE",{ id:'REGION_CODE',header:this.resourceBundle.FieldLabel.REGION_CODE||"Region_code",width:60,dataIndex:'REGION_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0007({allowBlank: true,callFromGrid:this,paramMapping: [{param:"p_country_code",field:"COUNTRY_CODE"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CITY",{ id:'CITY',header:this.resourceBundle.FieldLabel.CITY||"City",width:100,dataIndex:'CITY',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CITY_ID",{ id:'CITY_ID',header:this.resourceBundle.FieldLabel.CITY_ID||"City_id",width:100,dataIndex:'CITY_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IS_DETAILED",{ id:'IS_DETAILED',header:this.resourceBundle.FieldLabel.IS_DETAILED||"Detailed",width:50,dataIndex:'IS_DETAILED',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ADRESS",{ id:'ADRESS',header:this.resourceBundle.FieldLabel.ADRESS||"Adress",width:150,dataIndex:'ADRESS',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ZIP",{ id:'ZIP',header:this.resourceBundle.FieldLabel.ZIP||"Zip",width:100,dataIndex:'ZIP',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("STREET_ID",{ id:'STREET_ID',header:this.resourceBundle.FieldLabel.STREET_ID||"Street_id",width:100,dataIndex:'STREET_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("STREET",{ id:'STREET',header:this.resourceBundle.FieldLabel.STREET||"Street",width:150,dataIndex:'STREET',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ENTRANCE",{ id:'ENTRANCE',header:this.resourceBundle.FieldLabel.ENTRANCE||"Entrance",width:100,dataIndex:'ENTRANCE',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IS_BILLING",{ id:'IS_BILLING',header:this.resourceBundle.FieldLabel.IS_BILLING||"Billing",width:50,dataIndex:'IS_BILLING',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("IS_DELIVERY",{ id:'IS_DELIVERY',header:this.resourceBundle.FieldLabel.IS_DELIVERY||"Delivery",width:50,dataIndex:'IS_DELIVERY',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NOTES",{ id:'NOTES',header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:150,dataIndex:'NOTES',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0015F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0015F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0015F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("COUNTRY_CODE",new  N21.DataComp.LOV0006({name:"QRY_COUNTRY_CODE",id:"DC0015F_QRY_COUNTRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country_code",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("REGION_CODE",new  N21.DataComp.LOV0007({name:"QRY_REGION_CODE",id:"DC0015F_QRY_REGION_CODE",fieldLabel: this.resourceBundle.FieldLabel.REGION_CODE||"Region_code",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,paramMapping: [{param:"p_country_code",field:"DC0015F_QRY_COUNTRY_CODE"}]}));
       this.queryFields.add("CITY",new Ext.form.TextField({name:"QRY_CITY",id:"DC0015F_QRY_CITY",fieldLabel: this.resourceBundle.FieldLabel.CITY||"City",allowBlank:true,width:100}));
       this.queryFields.add("CITY_ID",new Ext.form.NumberField({name:"QRY_CITY_ID",id:"DC0015F_QRY_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.CITY_ID||"City_id",allowBlank:true,width:100}));
       this.queryFields.add("IS_DETAILED",new Ext.form.ComboBox({name:"QRY_IS_DETAILED",id:"DC0015F_QRY_IS_DETAILED",fieldLabel: this.resourceBundle.FieldLabel.IS_DETAILED||"Detailed",allowBlank:true,width:100,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("ADRESS",new Ext.form.TextField({name:"QRY_ADRESS",id:"DC0015F_QRY_ADRESS",fieldLabel: this.resourceBundle.FieldLabel.ADRESS||"Adress",allowBlank:true,width:100}));
       this.queryFields.add("ZIP",new Ext.form.TextField({name:"QRY_ZIP",id:"DC0015F_QRY_ZIP",fieldLabel: this.resourceBundle.FieldLabel.ZIP||"Zip",allowBlank:true,width:100}));
       this.queryFields.add("STREET_ID",new Ext.form.NumberField({name:"QRY_STREET_ID",id:"DC0015F_QRY_STREET_ID",fieldLabel: this.resourceBundle.FieldLabel.STREET_ID||"Street_id",allowBlank:true,width:100}));
       this.queryFields.add("STREET",new Ext.form.TextField({name:"QRY_STREET",id:"DC0015F_QRY_STREET",fieldLabel: this.resourceBundle.FieldLabel.STREET||"Street",allowBlank:true,width:100}));
       this.queryFields.add("NO",new Ext.form.TextField({name:"QRY_NO",id:"DC0015F_QRY_NO",fieldLabel: this.resourceBundle.FieldLabel.NO||"No",allowBlank:true,width:100}));
       this.queryFields.add("BUILDING",new Ext.form.TextField({name:"QRY_BUILDING",id:"DC0015F_QRY_BUILDING",fieldLabel: this.resourceBundle.FieldLabel.BUILDING||"Building",allowBlank:true,width:100}));
       this.queryFields.add("FLOOR",new Ext.form.TextField({name:"QRY_FLOOR",id:"DC0015F_QRY_FLOOR",fieldLabel: this.resourceBundle.FieldLabel.FLOOR||"Floor",allowBlank:true,width:100}));
       this.queryFields.add("APT",new Ext.form.TextField({name:"QRY_APT",id:"DC0015F_QRY_APT",fieldLabel: this.resourceBundle.FieldLabel.APT||"Apt",allowBlank:true,width:100}));
       this.queryFields.add("ADRESS_TYPE",new Ext.form.TextField({name:"QRY_ADRESS_TYPE",id:"DC0015F_QRY_ADRESS_TYPE",fieldLabel: this.resourceBundle.FieldLabel.ADRESS_TYPE||"Adress_type",allowBlank:true,width:100}));
       this.queryFields.add("ENTRANCE",new Ext.form.TextField({name:"QRY_ENTRANCE",id:"DC0015F_QRY_ENTRANCE",fieldLabel: this.resourceBundle.FieldLabel.ENTRANCE||"Entrance",allowBlank:true,width:100}));
       this.queryFields.add("IS_BILLING",new Ext.form.ComboBox({name:"QRY_IS_BILLING",id:"DC0015F_QRY_IS_BILLING",fieldLabel: this.resourceBundle.FieldLabel.IS_BILLING||"Billing",allowBlank:true,width:100,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_DELIVERY",new Ext.form.ComboBox({name:"QRY_IS_DELIVERY",id:"DC0015F_QRY_IS_DELIVERY",fieldLabel: this.resourceBundle.FieldLabel.IS_DELIVERY||"Delivery",allowBlank:true,width:100,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("NOTES",new Ext.form.TextField({name:"QRY_NOTES",id:"DC0015F_QRY_NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:100}));
       this.queryFields.add("CREATEDON",new Ext.form.DateField({name:"QRY_CREATEDON",id:"DC0015F_QRY_CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDBY",new Ext.form.TextField({name:"QRY_CREATEDBY",id:"DC0015F_QRY_CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",allowBlank:true,width:100}));
       this.queryFields.add("MODIFIEDON",new Ext.form.DateField({name:"QRY_MODIFIEDON",id:"DC0015F_QRY_MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("MODIFIEDBY",new Ext.form.TextField({name:"QRY_MODIFIEDBY",id:"DC0015F_QRY_MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "NAME","COUNTRY_CODE","REGION_CODE","CITY","CITY_ID","IS_DETAILED","ADRESS","ZIP","STREET_ID","STREET","NO","BUILDING","FLOOR","APT","ADRESS_TYPE","ENTRANCE","IS_BILLING","IS_DELIVERY","NOTES","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY" ];
       N21.DataComp.DC0015.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0015.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,BPARTNER_ID:""
              ,ID:""
              ,NAME:""
              ,COUNTRY_CODE:""
              ,REGION_CODE:""
              ,CITY:""
              ,CITY_ID:""
              ,IS_DETAILED:""
              ,ADRESS:""
              ,ZIP:""
              ,STREET_ID:""
              ,STREET:""
              ,ENTRANCE:""
              ,IS_BILLING:""
              ,IS_DELIVERY:""
              ,NOTES:""});
     }

  });
  Ext.reg("DC0015", N21.DataComp.DC0015);



