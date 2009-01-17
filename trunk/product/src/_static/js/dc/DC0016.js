/** 
 * Data Component: DC0016G, Title: Parcel masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0016G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"EXP_BPARTNER_ID", type:"float" }
         ,{name:"EXP_BPADRESS_ID", type:"float" }
         ,{name:"EXP_CITY_ID", type:"float" }
         ,{name:"EXP_NAME", type:"string" }
         ,{name:"EXP_COUNTRY", type:"string" }
         ,{name:"EXP_REGION", type:"string" }
         ,{name:"EXP_CITY", type:"string" }
         ,{name:"EXP_BPADRESS", type:"string" }
         ,{name:"EXP_ZIP", type:"string" }
         ,{name:"EXP_ADRESS_NOTE", type:"string" }
         ,{name:"DEST_BPADRESS_ID", type:"float" }
         ,{name:"DEST_BPARTNER_ID", type:"float" }
         ,{name:"DEST_CITY_ID", type:"float" }
         ,{name:"DEST_NAME", type:"string" }
         ,{name:"DEST_COUNTRY", type:"string" }
         ,{name:"DEST_REGION", type:"string" }
         ,{name:"DEST_CITY", type:"string" }
         ,{name:"DEST_BPADRESS", type:"string" }
         ,{name:"DEST_ZIP", type:"string" }
         ,{name:"DEST_ADRESS_NOTE", type:"string" }
         ,{name:"PICKEDUP", type:"string" }
         ,{name:"PICKUP_MODE", type:"string" }
         ,{name:"PICKUP_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"PICKUP_AGENT_CODE", type:"string" }
         ,{name:"DELIVERED", type:"string" }
         ,{name:"DELIVERY_MODE", type:"string" }
         ,{name:"DELIVERY_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DELIVERY_AGENT_CODE", type:"string" }
         ,{name:"DELIVERED_TO_NAME", type:"string" }
         ,{name:"DELIVERED_TO_IDENT", type:"string" }
         ,{name:"REJECTED", type:"string" }
         ,{name:"REJECT_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"REJECT_REASON", type:"string" }
         ,{name:"REJECTED_BY_NAME", type:"string" }
         ,{name:"REJECTED_BY_IDENT", type:"string" }
         ,{name:"PACKAGE_COUNT", type:"float" }
         ,{name:"CONTENT", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"DECLARED_VALUE", type:"float" }
         ,{name:"INSURED_VALUE", type:"float" }
         ,{name:"REF_PARCEL_ID", type:"float" }
         ,{name:"REF_PARCEL_REFERENCE_TYPE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0016_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0016_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0016_QRY_CLIENT_ID"}],name:"QRY_CLIENT_NAME",id:"DC0016_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0016_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("EXP_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_EXP_BPARTNER_ID",id:"DC0016_QRY_EXP_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Exp_bpartner_id"})  );
         this.queryFields.add("EXP_BPADRESS_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_EXP_BPADRESS_ID",id:"DC0016_QRY_EXP_BPADRESS_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Exp adress id"})  );
         this.queryFields.add("EXP_CITY_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_EXP_CITY_ID",id:"DC0016_QRY_EXP_CITY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY_ID||"Exp_city_id"})  );
         this.queryFields.add("EXP_NAME", new N21.DataComp.LOV0039({xtype: "LOV0039",fieldMapping: [{column:"ID",field:"DC0016_QRY_EXP_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0016_QRY_EXP_COUNTRY"},{column:"REGION_CODE",field:"DC0016_QRY_EXP_REGION"},{column:"CITY",field:"DC0016_QRY_EXP_CITY"},{column:"ADRESS",field:"DC0016_QRY_EXP_BPADRESS"}],selectOnFocus:true,name:"QRY_EXP_NAME",id:"DC0016_QRY_EXP_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_NAME||"Exp_name"})  );
         this.queryFields.add("EXP_COUNTRY", new N21.DataComp.LOV0006({xtype: "LOV0006",name:"QRY_EXP_COUNTRY",id:"DC0016_QRY_EXP_COUNTRY",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_COUNTRY||"Country"})  );
         this.queryFields.add("EXP_REGION", new N21.DataComp.LOV0007({xtype: "LOV0007",paramMapping: [{param:"p_country_code",field:"DC0016_QRY_EXP_COUNTRY"}],name:"QRY_EXP_REGION",id:"DC0016_QRY_EXP_REGION",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_REGION||"Region"})  );
         this.queryFields.add("EXP_CITY", new N21.DataComp.LOV0010({xtype: "LOV0010",fieldMapping: [{column:"ID",field:"DC0016_QRY_EXP_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0016_QRY_EXP_COUNTRY"},{param:"p_region_code",field:"DC0016_QRY_EXP_REGION"}],name:"QRY_EXP_CITY",id:"DC0016_QRY_EXP_CITY",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY||"Exp_city"})  );
         this.queryFields.add("EXP_BPADRESS", new Ext.form.TextField ({xtype: "textfield",name:"QRY_EXP_BPADRESS",id:"DC0016_QRY_EXP_BPADRESS",width:100,fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS||"Adress"})  );
         this.queryFields.add("DEST_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_DEST_BPARTNER_ID",id:"DC0016_QRY_DEST_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Dest_bpartner_id"})  );
         this.queryFields.add("DEST_CITY_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_DEST_CITY_ID",id:"DC0016_QRY_DEST_CITY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY_ID||"Dest_city_id"})  );
         this.queryFields.add("DEST_BPADRESS_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_DEST_BPADRESS_ID",id:"DC0016_QRY_DEST_BPADRESS_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Dest adress id"})  );
         this.queryFields.add("DEST_NAME", new N21.DataComp.LOV0039({xtype: "LOV0039",fieldMapping: [{column:"ID",field:"DC0016_QRY_DEST_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0016_QRY_DEST_COUNTRY"},{column:"REGION_CODE",field:"DC0016_QRY_DEST_REGION"},{column:"CITY",field:"DC0016_QRY_DEST_CITY"},{column:"ADRESS",field:"DC0016_QRY_DEST_BPADRESS"}],selectOnFocus:true,name:"QRY_DEST_NAME",id:"DC0016_QRY_DEST_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_NAME||"Dest_name"})  );
         this.queryFields.add("DEST_COUNTRY", new N21.DataComp.LOV0006({xtype: "LOV0006",name:"QRY_DEST_COUNTRY",id:"DC0016_QRY_DEST_COUNTRY",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_COUNTRY||"Dest_country"})  );
         this.queryFields.add("DEST_REGION", new N21.DataComp.LOV0007({xtype: "LOV0007",paramMapping: [{param:"p_country_code",field:"DC0016_QRY_DEST_COUNTRY"}],name:"QRY_DEST_REGION",id:"DC0016_QRY_DEST_REGION",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_REGION||"Region"})  );
         this.queryFields.add("DEST_CITY", new N21.DataComp.LOV0010({xtype: "LOV0010",fieldMapping: [{column:"ID",field:"DC0016_QRY_DEST_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0016_QRY_DEST_COUNTRY"},{param:"p_region_code",field:"DC0016_QRY_DEST_REGION"}],name:"QRY_DEST_CITY",id:"DC0016_QRY_DEST_CITY",width:100,fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY||"City"})  );
         this.queryFields.add("PICKUP_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_PICKUP_DATE",id:"DC0016_QRY_PICKUP_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PICKUP_DATE||"Pickup_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("PICKUP_AGENT_CODE", new N21.DataComp.LOV0016({xtype: "LOV0016",name:"QRY_PICKUP_AGENT_CODE",id:"DC0016_QRY_PICKUP_AGENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PICKUP_AGENT_CODE||"Pickup agent"})  );
         this.queryFields.add("DELIVERED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_DELIVERED",id:"DC0016_QRY_DELIVERED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DELIVERED||"Delivered"})  );
         this.queryFields.add("DELIVERY_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DELIVERY_DATE",id:"DC0016_QRY_DELIVERY_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_DATE||"Delivery_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("DELIVERY_AGENT_CODE", new N21.DataComp.LOV0016({xtype: "LOV0016",name:"QRY_DELIVERY_AGENT_CODE",id:"DC0016_QRY_DELIVERY_AGENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_AGENT_CODE||"Delivery agent"})  );
         this.queryFields.add("REJECTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_REJECTED",id:"DC0016_QRY_REJECTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.REJECTED||"Rejected"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","CODE","EXP_NAME","EXP_COUNTRY","EXP_REGION","EXP_CITY","EXP_BPADRESS","DEST_NAME","DEST_COUNTRY","DEST_REGION","DEST_CITY","PICKUP_DATE","PICKUP_AGENT_CODE","DELIVERED","DELIVERY_DATE","DELIVERY_AGENT_CODE","REJECTED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0016"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0016"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"EXP_BPARTNER_ID",header:this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Exp_bpartner_id",width:100,dataIndex:'EXP_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"EXP_BPADRESS_ID",header:this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Exp adress id",width:100,dataIndex:'EXP_BPADRESS_ID',hidden:true,sortable:true}
              ,{ id:"EXP_CITY_ID",header:this.resourceBundle.FieldLabel.EXP_CITY_ID||"Exp_city_id",width:100,dataIndex:'EXP_CITY_ID',hidden:true,sortable:true}
              ,{ id:"EXP_NAME",header:this.resourceBundle.FieldLabel.EXP_NAME||"Exp_name",width:200,dataIndex:'EXP_NAME',sortable:true}
              ,{ id:"EXP_COUNTRY",header:this.resourceBundle.FieldLabel.EXP_COUNTRY||"Country",width:100,dataIndex:'EXP_COUNTRY',hidden:true,sortable:true}
              ,{ id:"EXP_REGION",header:this.resourceBundle.FieldLabel.EXP_REGION||"Region",width:100,dataIndex:'EXP_REGION',hidden:true,sortable:true}
              ,{ id:"EXP_CITY",header:this.resourceBundle.FieldLabel.EXP_CITY||"Exp_city",width:100,dataIndex:'EXP_CITY',hidden:true,sortable:true}
              ,{ id:"EXP_BPADRESS",header:this.resourceBundle.FieldLabel.EXP_BPADRESS||"Adress",width:100,dataIndex:'EXP_BPADRESS',hidden:true,sortable:true}
              ,{ id:"EXP_ZIP",header:this.resourceBundle.FieldLabel.EXP_ZIP||"Exp_zip",width:100,dataIndex:'EXP_ZIP',hidden:true,sortable:true}
              ,{ id:"EXP_ADRESS_NOTE",header:this.resourceBundle.FieldLabel.EXP_ADRESS_NOTE||"Exp_adress_note",width:100,dataIndex:'EXP_ADRESS_NOTE',hidden:true,sortable:true}
              ,{ id:"DEST_BPADRESS_ID",header:this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Dest adress id",width:100,dataIndex:'DEST_BPADRESS_ID',hidden:true,sortable:true}
              ,{ id:"DEST_BPARTNER_ID",header:this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Dest_bpartner_id",width:100,dataIndex:'DEST_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"DEST_CITY_ID",header:this.resourceBundle.FieldLabel.DEST_CITY_ID||"Dest_city_id",width:100,dataIndex:'DEST_CITY_ID',hidden:true,sortable:true}
              ,{ id:"DEST_NAME",header:this.resourceBundle.FieldLabel.DEST_NAME||"Dest_name",width:200,dataIndex:'DEST_NAME',sortable:true}
              ,{ id:"DEST_COUNTRY",header:this.resourceBundle.FieldLabel.DEST_COUNTRY||"Dest_country",width:100,dataIndex:'DEST_COUNTRY',hidden:true,sortable:true}
              ,{ id:"DEST_REGION",header:this.resourceBundle.FieldLabel.DEST_REGION||"Region",width:100,dataIndex:'DEST_REGION',sortable:true}
              ,{ id:"DEST_CITY",header:this.resourceBundle.FieldLabel.DEST_CITY||"City",width:100,dataIndex:'DEST_CITY',sortable:true}
              ,{ id:"DEST_BPADRESS",header:this.resourceBundle.FieldLabel.DEST_BPADRESS||"Dest_bpadress",width:100,dataIndex:'DEST_BPADRESS',hidden:true,sortable:true}
              ,{ id:"DEST_ZIP",header:this.resourceBundle.FieldLabel.DEST_ZIP||"Dest_zip",width:100,dataIndex:'DEST_ZIP',hidden:true,sortable:true}
              ,{ id:"DEST_ADRESS_NOTE",header:this.resourceBundle.FieldLabel.DEST_ADRESS_NOTE||"Dest_adress_note",width:100,dataIndex:'DEST_ADRESS_NOTE',hidden:true,sortable:true}
              ,{ id:"PICKEDUP",header:this.resourceBundle.FieldLabel.PICKEDUP||"Pickedup",width:50,dataIndex:'PICKEDUP',hidden:true,sortable:true}
              ,{ id:"PICKUP_MODE",header:this.resourceBundle.FieldLabel.PICKUP_MODE||"Pickup_mode",width:100,dataIndex:'PICKUP_MODE',hidden:true,sortable:true}
              ,{ id:"PICKUP_DATE",header:this.resourceBundle.FieldLabel.PICKUP_DATE||"Pickup_date",width:100,dataIndex:'PICKUP_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PICKUP_AGENT_CODE",header:this.resourceBundle.FieldLabel.PICKUP_AGENT_CODE||"Pickup agent",width:100,dataIndex:'PICKUP_AGENT_CODE',hidden:true,sortable:true}
              ,{ id:"DELIVERED",header:this.resourceBundle.FieldLabel.DELIVERED||"Delivered",width:50,dataIndex:'DELIVERED',hidden:true,sortable:true}
              ,{ id:"DELIVERY_MODE",header:this.resourceBundle.FieldLabel.DELIVERY_MODE||"Delivery_mode",width:100,dataIndex:'DELIVERY_MODE',hidden:true,sortable:true}
              ,{ id:"DELIVERY_DATE",header:this.resourceBundle.FieldLabel.DELIVERY_DATE||"Delivery_date",width:100,dataIndex:'DELIVERY_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DELIVERY_AGENT_CODE",header:this.resourceBundle.FieldLabel.DELIVERY_AGENT_CODE||"Delivery agent",width:100,dataIndex:'DELIVERY_AGENT_CODE',hidden:true,sortable:true}
              ,{ id:"DELIVERED_TO_NAME",header:this.resourceBundle.FieldLabel.DELIVERED_TO_NAME||"Deliv. to person",width:100,dataIndex:'DELIVERED_TO_NAME',hidden:true,sortable:true}
              ,{ id:"DELIVERED_TO_IDENT",header:this.resourceBundle.FieldLabel.DELIVERED_TO_IDENT||"Deliv. to pers. ident",width:100,dataIndex:'DELIVERED_TO_IDENT',hidden:true,sortable:true}
              ,{ id:"REJECTED",header:this.resourceBundle.FieldLabel.REJECTED||"Rejected",width:50,dataIndex:'REJECTED',hidden:true,sortable:true}
              ,{ id:"REJECT_DATE",header:this.resourceBundle.FieldLabel.REJECT_DATE||"Reject_date",width:100,dataIndex:'REJECT_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"REJECT_REASON",header:this.resourceBundle.FieldLabel.REJECT_REASON||"Reject_reason",width:100,dataIndex:'REJECT_REASON',hidden:true,sortable:true}
              ,{ id:"REJECTED_BY_NAME",header:this.resourceBundle.FieldLabel.REJECTED_BY_NAME||"Rejected_by_name",width:100,dataIndex:'REJECTED_BY_NAME',hidden:true,sortable:true}
              ,{ id:"REJECTED_BY_IDENT",header:this.resourceBundle.FieldLabel.REJECTED_BY_IDENT||"Rejected_by_ident",width:100,dataIndex:'REJECTED_BY_IDENT',hidden:true,sortable:true}
              ,{ id:"PACKAGE_COUNT",header:this.resourceBundle.FieldLabel.PACKAGE_COUNT||"Package count",width:100,dataIndex:'PACKAGE_COUNT',sortable:true,align:'right'}
              ,{ id:"CONTENT",header:this.resourceBundle.FieldLabel.CONTENT||"Content",width:100,dataIndex:'CONTENT',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"DECLARED_VALUE",header:this.resourceBundle.FieldLabel.DECLARED_VALUE||"Declared_value",width:100,dataIndex:'DECLARED_VALUE',hidden:true,sortable:true,align:'right'}
              ,{ id:"INSURED_VALUE",header:this.resourceBundle.FieldLabel.INSURED_VALUE||"Insured_value",width:100,dataIndex:'INSURED_VALUE',hidden:true,sortable:true,align:'right'}
              ,{ id:"REF_PARCEL_ID",header:this.resourceBundle.FieldLabel.REF_PARCEL_ID||"Ref_parcel_id",width:100,dataIndex:'REF_PARCEL_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"REF_PARCEL_REFERENCE_TYPE",header:this.resourceBundle.FieldLabel.REF_PARCEL_REFERENCE_TYPE||"Ref_parcel_reference_type",width:100,dataIndex:'REF_PARCEL_REFERENCE_TYPE',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0016G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0016G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0016G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,CODE:""
              ,EXP_BPARTNER_ID:""
              ,EXP_BPADRESS_ID:""
              ,EXP_CITY_ID:""
              ,EXP_NAME:""
              ,EXP_COUNTRY:""
              ,EXP_REGION:""
              ,EXP_CITY:""
              ,EXP_BPADRESS:""
              ,EXP_ZIP:""
              ,EXP_ADRESS_NOTE:""
              ,DEST_BPADRESS_ID:""
              ,DEST_BPARTNER_ID:""
              ,DEST_CITY_ID:""
              ,DEST_NAME:""
              ,DEST_COUNTRY:""
              ,DEST_REGION:""
              ,DEST_CITY:""
              ,DEST_BPADRESS:""
              ,DEST_ZIP:""
              ,DEST_ADRESS_NOTE:""
              ,PICKEDUP:""
              ,PICKUP_MODE:""
              ,PICKUP_DATE:""
              ,PICKUP_AGENT_CODE:""
              ,DELIVERED:""
              ,DELIVERY_MODE:""
              ,DELIVERY_DATE:""
              ,DELIVERY_AGENT_CODE:""
              ,DELIVERED_TO_NAME:""
              ,DELIVERED_TO_IDENT:""
              ,REJECTED:""
              ,REJECT_DATE:""
              ,REJECT_REASON:""
              ,REJECTED_BY_NAME:""
              ,REJECTED_BY_IDENT:""
              ,PACKAGE_COUNT:""
              ,CONTENT:""
              ,NOTES:""
              ,DECLARED_VALUE:""
              ,INSURED_VALUE:""
              ,REF_PARCEL_ID:""
              ,REF_PARCEL_REFERENCE_TYPE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0016G", N21.DataComp.DC0016G);
/** 
 * Data Component: DC0016F, Title: Parcel masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0016F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0016G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0016F_ID",dataIndex:"ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0016F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0016F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0016F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:120,listWidth:138,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0016F_CODE",dataIndex:"CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"EXP_BPARTNER_ID",id:"DC0016F_EXP_BPARTNER_ID",dataIndex:"EXP_BPARTNER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Exp_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_BPADRESS_ID", new Ext.form.Hidden ({xtype: "hidden",name:"EXP_BPADRESS_ID",id:"DC0016F_EXP_BPADRESS_ID",dataIndex:"EXP_BPADRESS_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Exp adress id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_CITY_ID", new Ext.form.Hidden ({xtype: "hidden",name:"EXP_CITY_ID",id:"DC0016F_EXP_CITY_ID",dataIndex:"EXP_CITY_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY_ID||"Exp_city_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_NAME", new N21.DataComp.LOV0039({xtype: "LOV0039",fieldMapping: [{column:"ID",field:"DC0016F_EXP_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0016F_EXP_COUNTRY"},{column:"REGION_CODE",field:"DC0016F_EXP_REGION"},{column:"CITY",field:"DC0016F_EXP_CITY"},{column:"ADRESS",field:"DC0016F_EXP_BPADRESS"}],selectOnFocus:true,name:"EXP_NAME",id:"DC0016F_EXP_NAME",dataIndex:"EXP_NAME",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_NAME||"Exp_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_COUNTRY", new N21.DataComp.LOV0006({xtype: "LOV0006",selectOnFocus:true,name:"EXP_COUNTRY",id:"DC0016F_EXP_COUNTRY",dataIndex:"EXP_COUNTRY",width:120,listWidth:138,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_COUNTRY||"Country",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_REGION", new N21.DataComp.LOV0007({xtype: "LOV0007",paramMapping: [{param:"p_country_code",field:"DC0016F.EXP_COUNTRY"}],selectOnFocus:true,name:"EXP_REGION",id:"DC0016F_EXP_REGION",dataIndex:"EXP_REGION",width:150,listWidth:168,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_REGION||"Region",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_CITY", new N21.DataComp.LOV0010({xtype: "LOV0010",fieldMapping: [{column:"ID",field:"DC0016F_EXP_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0016F.EXP_COUNTRY"},{param:"p_region_code",field:"DC0016F.EXP_REGION"}],selectOnFocus:true,name:"EXP_CITY",id:"DC0016F_EXP_CITY",dataIndex:"EXP_CITY",width:150,listWidth:168,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY||"Exp_city",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_BPADRESS", new Ext.form.TextField ({xtype: "textfield",name:"EXP_BPADRESS",id:"DC0016F_EXP_BPADRESS",dataIndex:"EXP_BPADRESS",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS||"Adress",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_ZIP", new Ext.form.TextField ({xtype: "textfield",name:"EXP_ZIP",id:"DC0016F_EXP_ZIP",dataIndex:"EXP_ZIP",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_ZIP||"Exp_zip",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXP_ADRESS_NOTE", new Ext.form.TextField ({xtype: "textfield",name:"EXP_ADRESS_NOTE",id:"DC0016F_EXP_ADRESS_NOTE",dataIndex:"EXP_ADRESS_NOTE",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXP_ADRESS_NOTE||"Exp_adress_note",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"DEST_BPARTNER_ID",id:"DC0016F_DEST_BPARTNER_ID",dataIndex:"DEST_BPARTNER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Dest_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_BPADRESS_ID", new Ext.form.Hidden ({xtype: "hidden",name:"DEST_BPADRESS_ID",id:"DC0016F_DEST_BPADRESS_ID",dataIndex:"DEST_BPADRESS_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Dest adress id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_CITY_ID", new Ext.form.Hidden ({xtype: "hidden",name:"DEST_CITY_ID",id:"DC0016F_DEST_CITY_ID",dataIndex:"DEST_CITY_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY_ID||"Dest_city_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_NAME", new N21.DataComp.LOV0039({xtype: "LOV0039",fieldMapping: [{column:"ID",field:"DC0016F_DEST_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0016F_DEST_COUNTRY"},{column:"REGION_CODE",field:"DC0016F_DEST_REGION"},{column:"CITY",field:"DC0016F_DEST_CITY"},{column:"ADRESS",field:"DC0016F_DEST_BPADRESS"}],selectOnFocus:true,name:"DEST_NAME",id:"DC0016F_DEST_NAME",dataIndex:"DEST_NAME",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_NAME||"Dest_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_COUNTRY", new N21.DataComp.LOV0006({xtype: "LOV0006",selectOnFocus:true,name:"DEST_COUNTRY",id:"DC0016F_DEST_COUNTRY",dataIndex:"DEST_COUNTRY",width:120,listWidth:138,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_COUNTRY||"Dest_country",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_REGION", new N21.DataComp.LOV0007({xtype: "LOV0007",paramMapping: [{param:"p_country_code",field:"DC0016F.DEST_COUNTRY"}],selectOnFocus:true,name:"DEST_REGION",id:"DC0016F_DEST_REGION",dataIndex:"DEST_REGION",width:150,listWidth:168,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_REGION||"Region",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_CITY", new N21.DataComp.LOV0010({xtype: "LOV0010",fieldMapping: [{column:"ID",field:"DC0016F_DEST_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0016F.DEST_COUNTRY"},{param:"p_region_code",field:"DC0016F.DEST_REGION"}],selectOnFocus:true,name:"DEST_CITY",id:"DC0016F_DEST_CITY",dataIndex:"DEST_CITY",width:150,listWidth:168,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY||"City",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_BPADRESS", new Ext.form.TextField ({xtype: "textfield",name:"DEST_BPADRESS",id:"DC0016F_DEST_BPADRESS",dataIndex:"DEST_BPADRESS",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS||"Dest_bpadress",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_ZIP", new Ext.form.TextField ({xtype: "textfield",name:"DEST_ZIP",id:"DC0016F_DEST_ZIP",dataIndex:"DEST_ZIP",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_ZIP||"Dest_zip",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DEST_ADRESS_NOTE", new Ext.form.TextField ({xtype: "textfield",name:"DEST_ADRESS_NOTE",id:"DC0016F_DEST_ADRESS_NOTE",dataIndex:"DEST_ADRESS_NOTE",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DEST_ADRESS_NOTE||"Dest_adress_note",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PICKEDUP", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"PICKEDUP",id:"DC0016F_PICKEDUP",dataIndex:"PICKEDUP",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PICKEDUP||"Pickedup",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PICKUP_MODE", new Ext.form.TextField ({xtype: "textfield",name:"PICKUP_MODE",id:"DC0016F_PICKUP_MODE",dataIndex:"PICKUP_MODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PICKUP_MODE||"Pickup_mode",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PICKUP_DATE", new Ext.form.DateField ({xtype: "datefield",name:"PICKUP_DATE",id:"DC0016F_PICKUP_DATE",dataIndex:"PICKUP_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PICKUP_DATE||"Pickup_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("PICKUP_AGENT_CODE", new N21.DataComp.LOV0016({xtype: "LOV0016",selectOnFocus:true,name:"PICKUP_AGENT_CODE",id:"DC0016F_PICKUP_AGENT_CODE",dataIndex:"PICKUP_AGENT_CODE",width:100,listWidth:118,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PICKUP_AGENT_CODE||"Pickup agent",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIVERED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"DELIVERED",id:"DC0016F_DELIVERED",dataIndex:"DELIVERED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIVERED||"Delivered",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIVERY_MODE", new Ext.form.TextField ({xtype: "textfield",name:"DELIVERY_MODE",id:"DC0016F_DELIVERY_MODE",dataIndex:"DELIVERY_MODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_MODE||"Delivery_mode",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIVERY_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DELIVERY_DATE",id:"DC0016F_DELIVERY_DATE",dataIndex:"DELIVERY_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_DATE||"Delivery_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("DELIVERY_AGENT_CODE", new N21.DataComp.LOV0016({xtype: "LOV0016",selectOnFocus:true,name:"DELIVERY_AGENT_CODE",id:"DC0016F_DELIVERY_AGENT_CODE",dataIndex:"DELIVERY_AGENT_CODE",width:100,listWidth:118,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_AGENT_CODE||"Delivery agent",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIVERED_TO_NAME", new Ext.form.TextField ({xtype: "textfield",name:"DELIVERED_TO_NAME",id:"DC0016F_DELIVERED_TO_NAME",dataIndex:"DELIVERED_TO_NAME",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIVERED_TO_NAME||"Deliv. to person",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DELIVERED_TO_IDENT", new Ext.form.TextField ({xtype: "textfield",name:"DELIVERED_TO_IDENT",id:"DC0016F_DELIVERED_TO_IDENT",dataIndex:"DELIVERED_TO_IDENT",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DELIVERED_TO_IDENT||"Deliv. to pers. ident",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REJECTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"REJECTED",id:"DC0016F_REJECTED",dataIndex:"REJECTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REJECTED||"Rejected",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REJECT_DATE", new Ext.form.DateField ({xtype: "datefield",name:"REJECT_DATE",id:"DC0016F_REJECT_DATE",dataIndex:"REJECT_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REJECT_DATE||"Reject_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("REJECT_REASON", new Ext.form.TextField ({xtype: "textfield",name:"REJECT_REASON",id:"DC0016F_REJECT_REASON",dataIndex:"REJECT_REASON",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REJECT_REASON||"Reject_reason",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REJECTED_BY_NAME", new Ext.form.TextField ({xtype: "textfield",name:"REJECTED_BY_NAME",id:"DC0016F_REJECTED_BY_NAME",dataIndex:"REJECTED_BY_NAME",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REJECTED_BY_NAME||"Rejected_by_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REJECTED_BY_IDENT", new Ext.form.TextField ({xtype: "textfield",name:"REJECTED_BY_IDENT",id:"DC0016F_REJECTED_BY_IDENT",dataIndex:"REJECTED_BY_IDENT",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REJECTED_BY_IDENT||"Rejected_by_ident",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PACKAGE_COUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"PACKAGE_COUNT",id:"DC0016F_PACKAGE_COUNT",dataIndex:"PACKAGE_COUNT",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PACKAGE_COUNT||"Package count",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("CONTENT", new Ext.form.TextArea ({xtype: "textarea",name:"CONTENT",id:"DC0016F_CONTENT",dataIndex:"CONTENT",width:220,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CONTENT||"Content",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0016F_NOTES",dataIndex:"NOTES",width:220,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DECLARED_VALUE", new Ext.form.NumberField ({xtype: "numberfield",name:"DECLARED_VALUE",id:"DC0016F_DECLARED_VALUE",dataIndex:"DECLARED_VALUE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DECLARED_VALUE||"Declared_value",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("INSURED_VALUE", new Ext.form.NumberField ({xtype: "numberfield",name:"INSURED_VALUE",id:"DC0016F_INSURED_VALUE",dataIndex:"INSURED_VALUE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.INSURED_VALUE||"Insured_value",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("REF_PARCEL_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"REF_PARCEL_ID",id:"DC0016F_REF_PARCEL_ID",dataIndex:"REF_PARCEL_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REF_PARCEL_ID||"Ref_parcel_id",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("REF_PARCEL_REFERENCE_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"REF_PARCEL_REFERENCE_TYPE",id:"DC0016F_REF_PARCEL_REFERENCE_TYPE",dataIndex:"REF_PARCEL_REFERENCE_TYPE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REF_PARCEL_REFERENCE_TYPE||"Ref_parcel_reference_type",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("Pickup",
             { xtype:"fieldset", autoHeight:true,collapsible: false,border:true,width:"90%"   ,items:[ this.fields.get("PICKEDUP"),this.fields.get("PICKUP_MODE"),this.fields.get("PICKUP_DATE"),this.fields.get("PICKUP_AGENT_CODE")] });
       this.layoutItems.add("Delivery",
             { xtype:"fieldset", autoHeight:true,collapsible: false,border:true,width:"90%"   ,items:[ this.fields.get("DELIVERED"),this.fields.get("DELIVERY_MODE"),this.fields.get("DELIVERY_DATE"),this.fields.get("DELIVERY_AGENT_CODE"),this.fields.get("DELIVERED_TO_NAME"),this.fields.get("DELIVERED_TO_IDENT")] });
       this.layoutItems.add("C3",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("Pickup"),this.layoutItems.get("Delivery")]
 }); 
       this.layoutItems.add("Receiver",
             { xtype:"fieldset", autoHeight:true,collapsible: false,border:true,width:"90%"   ,items:[ this.fields.get("DEST_BPARTNER_ID"),this.fields.get("DEST_BPADRESS_ID"),this.fields.get("DEST_CITY_ID"),this.fields.get("DEST_NAME"),this.fields.get("DEST_COUNTRY"),this.fields.get("DEST_REGION"),this.fields.get("DEST_CITY"),this.fields.get("DEST_BPADRESS"),this.fields.get("DEST_ADRESS_NOTE")] });
       this.layoutItems.add("Sender",
             { xtype:"fieldset", autoHeight:true,collapsible: false,border:true,width:"90%"   ,items:[ this.fields.get("EXP_BPARTNER_ID"),this.fields.get("EXP_BPADRESS_ID"),this.fields.get("EXP_CITY_ID"),this.fields.get("EXP_NAME"),this.fields.get("EXP_COUNTRY"),this.fields.get("EXP_REGION"),this.fields.get("EXP_CITY"),this.fields.get("EXP_BPADRESS"),this.fields.get("EXP_ADRESS_NOTE")] });
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.4, items:[ this.layoutItems.get("Sender"),this.layoutItems.get("Receiver")]
 }); 
       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: false,border:true,width:"90%"   ,items:[ this.fields.get("CONTENT"),this.fields.get("NOTES")] });
       this.layoutItems.add("ParcelInfo",
             { xtype:"fieldset", autoHeight:true,collapsible: false,border:true,width:"90%"   ,items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_NAME"),this.fields.get("CODE"),this.fields.get("PACKAGE_COUNT")] });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("ParcelInfo"),this.layoutItems.get("Notes")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2"),this.layoutItems.get("C3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0016F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0016F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0016F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,CODE:""
              ,EXP_BPARTNER_ID:""
              ,EXP_BPADRESS_ID:""
              ,EXP_CITY_ID:""
              ,EXP_NAME:""
              ,EXP_COUNTRY:""
              ,EXP_REGION:""
              ,EXP_CITY:""
              ,EXP_BPADRESS:""
              ,EXP_ZIP:""
              ,EXP_ADRESS_NOTE:""
              ,DEST_BPADRESS_ID:""
              ,DEST_BPARTNER_ID:""
              ,DEST_CITY_ID:""
              ,DEST_NAME:""
              ,DEST_COUNTRY:""
              ,DEST_REGION:""
              ,DEST_CITY:""
              ,DEST_BPADRESS:""
              ,DEST_ZIP:""
              ,DEST_ADRESS_NOTE:""
              ,PICKEDUP:""
              ,PICKUP_MODE:""
              ,PICKUP_DATE:""
              ,PICKUP_AGENT_CODE:""
              ,DELIVERED:""
              ,DELIVERY_MODE:""
              ,DELIVERY_DATE:""
              ,DELIVERY_AGENT_CODE:""
              ,DELIVERED_TO_NAME:""
              ,DELIVERED_TO_IDENT:""
              ,REJECTED:""
              ,REJECT_DATE:""
              ,REJECT_REASON:""
              ,REJECTED_BY_NAME:""
              ,REJECTED_BY_IDENT:""
              ,PACKAGE_COUNT:""
              ,CONTENT:""
              ,NOTES:""
              ,DECLARED_VALUE:""
              ,INSURED_VALUE:""
              ,REF_PARCEL_ID:""
              ,REF_PARCEL_REFERENCE_TYPE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0016F", N21.DataComp.DC0016F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0016
 * Title: Parcel masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0016 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0016"
          ,masterName:"DC0016G"
          ,detailName:"DC0016F"
          ,mdLayout:"card"
          ,border: false
          ,items: [
              {
                xtype:"panel"
               ,layout:"card"
               ,id:"MDTab"
               ,region:"center"
               ,defaults:{layout:"fit"}
               ,activeItem:0
               ,tabPosition: "bottom"
               ,items: [{
                            xtype: "DC0016G"
                           ,id: "DC0016G"
                           ,height:350
                       },{
                           xtype:"DC0016F"
                          ,id:"DC0016F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_LIST_EDITOR_MODE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_REFRESH_RECORD"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PREV_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEXT_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0016.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0016", N21.DataComp.DC0016);



