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
     ,firstFocusFieldName:"COUNTRY_CODE"
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("BPARTNER_ID",{ id:'BPARTNER_ID',header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("COUNTRY_CODE",{ id:'COUNTRY_CODE',header:this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country_code",width:60,dataIndex:'COUNTRY_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0006({allowBlank: true,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("REGION_CODE",{ id:'REGION_CODE',header:this.resourceBundle.FieldLabel.REGION_CODE||"Region_code",width:60,dataIndex:'REGION_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0007({allowBlank: true,callFromGrid:this,paramMapping: [{param:"p_country_code",field:"COUNTRY_CODE"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("CITY",{ id:'CITY',header:this.resourceBundle.FieldLabel.CITY||"City",width:100,dataIndex:'CITY',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("CITY_ID",{ id:'CITY_ID',header:this.resourceBundle.FieldLabel.CITY_ID||"City_id",width:100,dataIndex:'CITY_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("IS_DETAILED",{ id:'IS_DETAILED',header:this.resourceBundle.FieldLabel.IS_DETAILED||"Detailed",width:50,dataIndex:'IS_DETAILED',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("ADRESS",{ id:'ADRESS',header:this.resourceBundle.FieldLabel.ADRESS||"Adress",width:150,dataIndex:'ADRESS',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("ZIP",{ id:'ZIP',header:this.resourceBundle.FieldLabel.ZIP||"Zip",width:100,dataIndex:'ZIP',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("STREET_ID",{ id:'STREET_ID',header:this.resourceBundle.FieldLabel.STREET_ID||"Street_id",width:100,dataIndex:'STREET_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("STREET",{ id:'STREET',header:this.resourceBundle.FieldLabel.STREET||"Street",width:150,dataIndex:'STREET',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("ENTRANCE",{ id:'ENTRANCE',header:this.resourceBundle.FieldLabel.ENTRANCE||"Entrance",width:100,dataIndex:'ENTRANCE',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("IS_BILLING",{ id:'IS_BILLING',header:this.resourceBundle.FieldLabel.IS_BILLING||"Billing",width:50,dataIndex:'IS_BILLING',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("IS_DELIVERY",{ id:'IS_DELIVERY',header:this.resourceBundle.FieldLabel.IS_DELIVERY||"Delivery",width:50,dataIndex:'IS_DELIVERY',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("NOTES",{ id:'NOTES',header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:150,dataIndex:'NOTES',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0015"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0015"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("BPARTNER_ID"),this.columns.get("ID"),this.columns.get("NAME"),this.columns.get("COUNTRY_CODE"),this.columns.get("REGION_CODE"),this.columns.get("CITY"),this.columns.get("CITY_ID"),this.columns.get("IS_DETAILED"),this.columns.get("ADRESS"),this.columns.get("ZIP"),this.columns.get("STREET_ID"),this.columns.get("STREET"),this.columns.get("ENTRANCE"),this.columns.get("IS_BILLING"),this.columns.get("IS_DELIVERY"),this.columns.get("NOTES")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0015_QRY_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id"}
               ,{xtype: "hidden",name:"QRY_ID",id:"DC0015_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0015_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "LOV0006",name:"QRY_COUNTRY_CODE",id:"DC0015_QRY_COUNTRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country_code"}
               ,{xtype: "LOV0007",name:"QRY_REGION_CODE",id:"DC0015_QRY_REGION_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.REGION_CODE||"Region_code"}
               ,{xtype: "textfield",name:"QRY_CITY",id:"DC0015_QRY_CITY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CITY||"City"}
               ,{xtype: "numberfield",name:"QRY_CITY_ID",id:"DC0015_QRY_CITY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CITY_ID||"City_id",style: "text-align:right;"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_DETAILED",id:"DC0015_QRY_IS_DETAILED",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_DETAILED||"Detailed"}
               ,{xtype: "textfield",name:"QRY_ADRESS",id:"DC0015_QRY_ADRESS",width:120,fieldLabel: this.resourceBundle.FieldLabel.ADRESS||"Adress"}
               ,{xtype: "textfield",name:"QRY_ZIP",id:"DC0015_QRY_ZIP",width:120,fieldLabel: this.resourceBundle.FieldLabel.ZIP||"Zip"}
               ,{xtype: "numberfield",name:"QRY_STREET_ID",id:"DC0015_QRY_STREET_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.STREET_ID||"Street_id",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_STREET",id:"DC0015_QRY_STREET",width:120,fieldLabel: this.resourceBundle.FieldLabel.STREET||"Street"}
               ,{xtype: "textfield",name:"QRY_ENTRANCE",id:"DC0015_QRY_ENTRANCE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ENTRANCE||"Entrance"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_BILLING",id:"DC0015_QRY_IS_BILLING",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_BILLING||"Billing"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_DELIVERY",id:"DC0015_QRY_IS_DELIVERY",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_DELIVERY||"Delivery"}
               ,{xtype: "textfield",name:"QRY_NOTES",id:"DC0015_QRY_NOTES",width:120,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"}
          ]
          ,dataComponentName:"DC0015"
          ,frame:true
          ,queryArraySize:-1
        });

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



