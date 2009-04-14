/** 
 * Data Component: DC0016G, Title: Parcel masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0016G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"EXP_BPADRESS_ID", type:"float" }
         ,{name:"EXP_CITY_ID", type:"float" }
         ,{name:"EXP_BPARTNER_ID", type:"float" }
         ,{name:"EXP_NAME", type:"string" }
         ,{name:"EXP_COUNTRY", type:"string" }
         ,{name:"EXP_REGION", type:"string" }
         ,{name:"EXP_CITY", type:"string" }
         ,{name:"EXP_BPADRESS", type:"string" }
         ,{name:"EXP_ZIP", type:"string" }
         ,{name:"EXP_ADRESS_NOTE", type:"string" }
         ,{name:"DEST_BPADRESS_ID", type:"float" }
         ,{name:"DEST_CITY_ID", type:"float" }
         ,{name:"DEST_BPARTNER_ID", type:"float" }
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
         ,{name:"PICKUP_AGENT_ID", type:"float" }
         ,{name:"PICKUP_AGENT_NAME", type:"string" }
         ,{name:"DELIVERED", type:"string" }
         ,{name:"DELIVERY_MODE", type:"string" }
         ,{name:"DELIVERY_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DELIVERY_AGENT_ID", type:"float" }
         ,{name:"DELIVERY_AGENT_NAME", type:"string" }
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
         ,{name:"CUSTODY_ORG_NAME", type:"string" }
         ,{name:"CUSTODY_ORG_ID", type:"float" }
         ,{name:"LAST_EVENT_ID", type:"float" }
         ,{name:"LAST_EVENT_NAME", type:"string" }
         ,{name:"REJECT_REASON_CODE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0016F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0016F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_QRY_CLIENT_ID"}],displayColumn: "CODE"}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0016F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0016F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:100}));
       this.queryFields.add("EXP_CITY_ID",new Ext.form.Hidden({name:"QRY_EXP_CITY_ID",id:"DC0016F_QRY_EXP_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY_ID||"Sender city ID",allowBlank:true,width:100}));
       this.queryFields.add("EXP_BPADRESS_ID",new Ext.form.Hidden({name:"QRY_EXP_BPADRESS_ID",id:"DC0016F_QRY_EXP_BPADRESS_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Sender adress ID",allowBlank:true,width:100}));
       this.queryFields.add("EXP_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_EXP_BPARTNER_ID",id:"DC0016F_QRY_EXP_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Sender ID",allowBlank:true,width:100}));
       this.queryFields.add("EXP_NAME",new  N21.DataComp.LOV0039({name:"QRY_EXP_NAME",id:"DC0016F_QRY_EXP_NAME",fieldLabel: this.resourceBundle.FieldLabel.EXP_NAME||"Sender name",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_QRY_EXP_BPARTNER_ID"}]}));
       this.queryFields.add("DEST_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_DEST_BPARTNER_ID",id:"DC0016F_QRY_DEST_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Receiver ID",allowBlank:true,width:100}));
       this.queryFields.add("DEST_BPADRESS_ID",new Ext.form.Hidden({name:"QRY_DEST_BPADRESS_ID",id:"DC0016F_QRY_DEST_BPADRESS_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Receiver adress ID",allowBlank:true,width:100}));
       this.queryFields.add("DEST_CITY_ID",new Ext.form.Hidden({name:"QRY_DEST_CITY_ID",id:"DC0016F_QRY_DEST_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY_ID||"Receiver city ID",allowBlank:true,width:100}));
       this.queryFields.add("DEST_NAME",new  N21.DataComp.LOV0039({name:"QRY_DEST_NAME",id:"DC0016F_QRY_DEST_NAME",fieldLabel: this.resourceBundle.FieldLabel.DEST_NAME||"Receiver name",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_QRY_DEST_BPARTNER_ID"}]}));
       this.queryFields.add("PICKUP_AGENT_NAME",new  N21.DataComp.LOV0067({name:"QRY_PICKUP_AGENT_NAME",id:"DC0016F_QRY_PICKUP_AGENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PICKUP_AGENT_NAME||"Pickup agent",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_QRY_PICKUP_AGENT_ID"}]}));
       this.queryFields.add("PICKUP_AGENT_ID",new Ext.form.Hidden({name:"QRY_PICKUP_AGENT_ID",id:"DC0016F_QRY_PICKUP_AGENT_ID",fieldLabel: this.resourceBundle.FieldLabel.PICKUP_AGENT_ID||"Pickup agent ID",allowBlank:true,width:100}));
       this.queryFields.add("DELIVERED",new Ext.form.ComboBox({name:"QRY_DELIVERED",id:"DC0016F_QRY_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.DELIVERED||"Delivered",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("DELIVERY_AGENT_ID",new Ext.form.Hidden({name:"QRY_DELIVERY_AGENT_ID",id:"DC0016F_QRY_DELIVERY_AGENT_ID",fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_AGENT_ID||"Delivery agent ID",allowBlank:true,width:100}));
       this.queryFields.add("DELIVERY_AGENT_NAME",new  N21.DataComp.LOV0067({name:"QRY_DELIVERY_AGENT_NAME",id:"DC0016F_QRY_DELIVERY_AGENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_AGENT_NAME||"Delivery agent",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_QRY_DELIVERY_AGENT_ID"}]}));
       this.queryFields.add("REJECTED",new Ext.form.ComboBox({name:"QRY_REJECTED",id:"DC0016F_QRY_REJECTED",fieldLabel: this.resourceBundle.FieldLabel.REJECTED||"Rejected",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("CUSTODY_ORG_NAME",new  N21.DataComp.LOV0071({name:"QRY_CUSTODY_ORG_NAME",id:"DC0016F_QRY_CUSTODY_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.CUSTODY_ORG_NAME||"In inventory",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_QRY_CUSTODY_ORG_ID"}]}));
       this.queryFields.add("CUSTODY_ORG_ID",new Ext.form.Hidden({name:"QRY_CUSTODY_ORG_ID",id:"DC0016F_QRY_CUSTODY_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.CUSTODY_ORG_ID||"In inventory ID",allowBlank:true,width:100}));
       this.queryFields.add("LAST_EVENT_NAME",new Ext.form.TextField({name:"QRY_LAST_EVENT_NAME",id:"DC0016F_QRY_LAST_EVENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.LAST_EVENT_NAME||"Last event",allowBlank:true,width:100}));
       this.queryFields.add("LAST_EVENT_ID",new Ext.form.Hidden({name:"QRY_LAST_EVENT_ID",id:"DC0016F_QRY_LAST_EVENT_ID",labelSeparator: "",allowBlank:true,width:100}));
       this.queryFields.add("REJECT_REASON_CODE",new  N21.DataComp.LOV0065({name:"QRY_REJECT_REASON_CODE",id:"DC0016F_QRY_REJECT_REASON_CODE",fieldLabel: this.resourceBundle.FieldLabel.REJECT_REASON_CODE||"Reject reason type",allowBlank:true,caseRestriction:"Upper",style: "text-transform:uppercase;",width:100,listWidth:118,selectOnFocus:true}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","CODE","EXP_NAME","DEST_NAME","PICKUP_AGENT_NAME","DELIVERED","DELIVERY_AGENT_NAME","REJECTED","CUSTODY_ORG_NAME","LAST_EVENT_NAME","REJECT_REASON_CODE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0016"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0016"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"EXP_BPADRESS_ID",header:this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Sender adress ID",width:100,dataIndex:'EXP_BPADRESS_ID',hidden:true,sortable:true}
              ,{ id:"EXP_CITY_ID",header:this.resourceBundle.FieldLabel.EXP_CITY_ID||"Sender city ID",width:100,dataIndex:'EXP_CITY_ID',hidden:true,sortable:true}
              ,{ id:"EXP_BPARTNER_ID",header:this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Sender ID",width:100,dataIndex:'EXP_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"EXP_NAME",header:this.resourceBundle.FieldLabel.EXP_NAME||"Sender name",width:200,dataIndex:'EXP_NAME',sortable:true}
              ,{ id:"EXP_COUNTRY",header:this.resourceBundle.FieldLabel.EXP_COUNTRY||"Country",width:100,dataIndex:'EXP_COUNTRY',hidden:true,sortable:true}
              ,{ id:"EXP_REGION",header:this.resourceBundle.FieldLabel.EXP_REGION||"Region",width:100,dataIndex:'EXP_REGION',hidden:true,sortable:true}
              ,{ id:"EXP_CITY",header:this.resourceBundle.FieldLabel.EXP_CITY||"Sender city",width:100,dataIndex:'EXP_CITY',hidden:true,sortable:true}
              ,{ id:"EXP_BPADRESS",header:this.resourceBundle.FieldLabel.EXP_BPADRESS||"Adress",width:100,dataIndex:'EXP_BPADRESS',hidden:true,sortable:true}
              ,{ id:"EXP_ZIP",header:this.resourceBundle.FieldLabel.EXP_ZIP||"Sender zip",width:100,dataIndex:'EXP_ZIP',hidden:true,sortable:true}
              ,{ id:"EXP_ADRESS_NOTE",header:this.resourceBundle.FieldLabel.EXP_ADRESS_NOTE||"Sender adress note",width:100,dataIndex:'EXP_ADRESS_NOTE',hidden:true,sortable:true}
              ,{ id:"DEST_BPADRESS_ID",header:this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Receiver adress ID",width:100,dataIndex:'DEST_BPADRESS_ID',hidden:true,sortable:true}
              ,{ id:"DEST_CITY_ID",header:this.resourceBundle.FieldLabel.DEST_CITY_ID||"Receiver city ID",width:100,dataIndex:'DEST_CITY_ID',hidden:true,sortable:true}
              ,{ id:"DEST_BPARTNER_ID",header:this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Receiver ID",width:100,dataIndex:'DEST_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"DEST_NAME",header:this.resourceBundle.FieldLabel.DEST_NAME||"Receiver name",width:200,dataIndex:'DEST_NAME',sortable:true}
              ,{ id:"DEST_COUNTRY",header:this.resourceBundle.FieldLabel.DEST_COUNTRY||"Receiver country",width:100,dataIndex:'DEST_COUNTRY',hidden:true,sortable:true}
              ,{ id:"DEST_REGION",header:this.resourceBundle.FieldLabel.DEST_REGION||"Region",width:100,dataIndex:'DEST_REGION',sortable:true}
              ,{ id:"DEST_CITY",header:this.resourceBundle.FieldLabel.DEST_CITY||"City",width:100,dataIndex:'DEST_CITY',sortable:true}
              ,{ id:"DEST_BPADRESS",header:this.resourceBundle.FieldLabel.DEST_BPADRESS||"Receiver adress",width:100,dataIndex:'DEST_BPADRESS',hidden:true,sortable:true}
              ,{ id:"DEST_ZIP",header:this.resourceBundle.FieldLabel.DEST_ZIP||"Receiver zip",width:100,dataIndex:'DEST_ZIP',hidden:true,sortable:true}
              ,{ id:"DEST_ADRESS_NOTE",header:this.resourceBundle.FieldLabel.DEST_ADRESS_NOTE||"Receiver adress notes",width:100,dataIndex:'DEST_ADRESS_NOTE',hidden:true,sortable:true}
              ,{ id:"PICKEDUP",header:this.resourceBundle.FieldLabel.PICKEDUP||"Pickedup",width:50,dataIndex:'PICKEDUP',hidden:true,sortable:true}
              ,{ id:"PICKUP_MODE",header:this.resourceBundle.FieldLabel.PICKUP_MODE||"Pickup mode",width:100,dataIndex:'PICKUP_MODE',hidden:true,sortable:true}
              ,{ id:"PICKUP_DATE",header:this.resourceBundle.FieldLabel.PICKUP_DATE||"Pickup date",width:100,dataIndex:'PICKUP_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PICKUP_AGENT_ID",header:this.resourceBundle.FieldLabel.PICKUP_AGENT_ID||"Pickup agent ID",width:100,dataIndex:'PICKUP_AGENT_ID',hidden:true,sortable:true}
              ,{ id:"PICKUP_AGENT_NAME",header:this.resourceBundle.FieldLabel.PICKUP_AGENT_NAME||"Pickup agent",width:100,dataIndex:'PICKUP_AGENT_NAME',hidden:true,sortable:true}
              ,{ id:"DELIVERED",header:this.resourceBundle.FieldLabel.DELIVERED||"Delivered",width:50,dataIndex:'DELIVERED',hidden:true,sortable:true}
              ,{ id:"DELIVERY_MODE",header:this.resourceBundle.FieldLabel.DELIVERY_MODE||"Delivery mode",width:100,dataIndex:'DELIVERY_MODE',hidden:true,sortable:true}
              ,{ id:"DELIVERY_DATE",header:this.resourceBundle.FieldLabel.DELIVERY_DATE||"Delivery date",width:100,dataIndex:'DELIVERY_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DELIVERY_AGENT_ID",header:this.resourceBundle.FieldLabel.DELIVERY_AGENT_ID||"Delivery agent ID",width:100,dataIndex:'DELIVERY_AGENT_ID',hidden:true,sortable:true}
              ,{ id:"DELIVERY_AGENT_NAME",header:this.resourceBundle.FieldLabel.DELIVERY_AGENT_NAME||"Delivery agent",width:100,dataIndex:'DELIVERY_AGENT_NAME',hidden:true,sortable:true}
              ,{ id:"DELIVERED_TO_NAME",header:this.resourceBundle.FieldLabel.DELIVERED_TO_NAME||"Deliv. to person",width:100,dataIndex:'DELIVERED_TO_NAME',hidden:true,sortable:true}
              ,{ id:"DELIVERED_TO_IDENT",header:this.resourceBundle.FieldLabel.DELIVERED_TO_IDENT||"Deliv. to pers. ident",width:100,dataIndex:'DELIVERED_TO_IDENT',hidden:true,sortable:true}
              ,{ id:"REJECTED",header:this.resourceBundle.FieldLabel.REJECTED||"Rejected",width:50,dataIndex:'REJECTED',hidden:true,sortable:true}
              ,{ id:"REJECT_DATE",header:this.resourceBundle.FieldLabel.REJECT_DATE||"Reject_date",width:100,dataIndex:'REJECT_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"REJECT_REASON",header:this.resourceBundle.FieldLabel.REJECT_REASON||"Reject_reason",width:100,dataIndex:'REJECT_REASON',hidden:true,sortable:true}
              ,{ id:"REJECTED_BY_NAME",header:this.resourceBundle.FieldLabel.REJECTED_BY_NAME||"Rej. by pers",width:100,dataIndex:'REJECTED_BY_NAME',hidden:true,sortable:true}
              ,{ id:"REJECTED_BY_IDENT",header:this.resourceBundle.FieldLabel.REJECTED_BY_IDENT||"Rej. by pers ident",width:100,dataIndex:'REJECTED_BY_IDENT',hidden:true,sortable:true}
              ,{ id:"PACKAGE_COUNT",header:this.resourceBundle.FieldLabel.PACKAGE_COUNT||"Package count",width:100,dataIndex:'PACKAGE_COUNT',sortable:true,align:'right'}
              ,{ id:"CONTENT",header:this.resourceBundle.FieldLabel.CONTENT||"Content",width:100,dataIndex:'CONTENT',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"DECLARED_VALUE",header:this.resourceBundle.FieldLabel.DECLARED_VALUE||"Declared value",width:100,dataIndex:'DECLARED_VALUE',hidden:true,sortable:true,align:'right'}
              ,{ id:"INSURED_VALUE",header:this.resourceBundle.FieldLabel.INSURED_VALUE||"Insured value",width:100,dataIndex:'INSURED_VALUE',hidden:true,sortable:true,align:'right'}
              ,{ id:"REF_PARCEL_ID",header:this.resourceBundle.FieldLabel.REF_PARCEL_ID||"Ref_parcel_id",width:100,dataIndex:'REF_PARCEL_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"REF_PARCEL_REFERENCE_TYPE",header:this.resourceBundle.FieldLabel.REF_PARCEL_REFERENCE_TYPE||"Ref_parcel_reference_type",width:100,dataIndex:'REF_PARCEL_REFERENCE_TYPE',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"CUSTODY_ORG_NAME",header:this.resourceBundle.FieldLabel.CUSTODY_ORG_NAME||"In inventory",width:100,dataIndex:'CUSTODY_ORG_NAME',sortable:true}
              ,{ id:"CUSTODY_ORG_ID",header:this.resourceBundle.FieldLabel.CUSTODY_ORG_ID||"In inventory ID",width:100,dataIndex:'CUSTODY_ORG_ID',hidden:true,sortable:true}
              ,{ id:"LAST_EVENT_ID",header:this.resourceBundle.FieldLabel.LAST_EVENT_ID||"",width:100,dataIndex:'LAST_EVENT_ID',hidden:true,sortable:true}
              ,{ id:"LAST_EVENT_NAME",header:this.resourceBundle.FieldLabel.LAST_EVENT_NAME||"Last event",width:100,dataIndex:'LAST_EVENT_NAME',hidden:true,sortable:true}
              ,{ id:"REJECT_REASON_CODE",header:this.resourceBundle.FieldLabel.REJECT_REASON_CODE||"Reject reason type",width:100,dataIndex:'REJECT_REASON_CODE',hidden:true,sortable:true}
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
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,CODE:""
              ,EXP_BPADRESS_ID:""
              ,EXP_CITY_ID:""
              ,EXP_BPARTNER_ID:""
              ,EXP_NAME:""
              ,EXP_COUNTRY:""
              ,EXP_REGION:""
              ,EXP_CITY:""
              ,EXP_BPADRESS:""
              ,EXP_ZIP:""
              ,EXP_ADRESS_NOTE:""
              ,DEST_BPADRESS_ID:""
              ,DEST_CITY_ID:""
              ,DEST_BPARTNER_ID:""
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
              ,PICKUP_AGENT_ID:""
              ,PICKUP_AGENT_NAME:""
              ,DELIVERED:""
              ,DELIVERY_MODE:""
              ,DELIVERY_DATE:""
              ,DELIVERY_AGENT_ID:""
              ,DELIVERY_AGENT_NAME:""
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
              ,MODIFIEDBY:""
              ,CUSTODY_ORG_NAME:""
              ,CUSTODY_ORG_ID:""
              ,LAST_EVENT_ID:""
              ,LAST_EVENT_NAME:""
              ,REJECT_REASON_CODE:""});
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
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0016F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0016F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_CLIENT_ID"}],displayColumn: "CODE"}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0016F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0016F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_BPADRESS_ID",new Ext.form.Hidden({name:"EXP_BPADRESS_ID",id:"DC0016F_EXP_BPADRESS_ID",dataIndex:"EXP_BPADRESS_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Sender adress ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_CITY_ID",new Ext.form.Hidden({name:"EXP_CITY_ID",id:"DC0016F_EXP_CITY_ID",dataIndex:"EXP_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY_ID||"Sender city ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_BPARTNER_ID",new Ext.form.Hidden({name:"EXP_BPARTNER_ID",id:"DC0016F_EXP_BPARTNER_ID",dataIndex:"EXP_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Sender ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_NAME",new  N21.DataComp.LOV0039({name:"EXP_NAME",id:"DC0016F_EXP_NAME",dataIndex:"EXP_NAME",fieldLabel: this.resourceBundle.FieldLabel.EXP_NAME||"Sender name",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_EXP_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0016F_EXP_COUNTRY"},{column:"REGION_CODE",field:"DC0016F_EXP_REGION"},{column:"CITY",field:"DC0016F_EXP_CITY"},{column:"ADRESS",field:"DC0016F_EXP_BPADRESS"}]}));
       this.fields.add("EXP_COUNTRY",new  N21.DataComp.LOV0006({name:"EXP_COUNTRY",id:"DC0016F_EXP_COUNTRY",dataIndex:"EXP_COUNTRY",fieldLabel: this.resourceBundle.FieldLabel.EXP_COUNTRY||"Country",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("EXP_REGION",new  N21.DataComp.LOV0007({name:"EXP_REGION",id:"DC0016F_EXP_REGION",dataIndex:"EXP_REGION",fieldLabel: this.resourceBundle.FieldLabel.EXP_REGION||"Region",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_country_code",field:"DC0016F.EXP_COUNTRY"}]}));
       this.fields.add("EXP_CITY",new  N21.DataComp.LOV0010({name:"EXP_CITY",id:"DC0016F_EXP_CITY",dataIndex:"EXP_CITY",fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY||"Sender city",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_EXP_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0016F.EXP_COUNTRY"},{param:"p_region_code",field:"DC0016F.EXP_REGION"}]}));
       this.fields.add("EXP_BPADRESS",new Ext.form.TextField({name:"EXP_BPADRESS",id:"DC0016F_EXP_BPADRESS",dataIndex:"EXP_BPADRESS",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS||"Adress",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_ZIP",new Ext.form.TextField({name:"EXP_ZIP",id:"DC0016F_EXP_ZIP",dataIndex:"EXP_ZIP",fieldLabel: this.resourceBundle.FieldLabel.EXP_ZIP||"Sender zip",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_ADRESS_NOTE",new Ext.form.TextField({name:"EXP_ADRESS_NOTE",id:"DC0016F_EXP_ADRESS_NOTE",dataIndex:"EXP_ADRESS_NOTE",fieldLabel: this.resourceBundle.FieldLabel.EXP_ADRESS_NOTE||"Sender adress note",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_BPADRESS_ID",new Ext.form.Hidden({name:"DEST_BPADRESS_ID",id:"DC0016F_DEST_BPADRESS_ID",dataIndex:"DEST_BPADRESS_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Receiver adress ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_CITY_ID",new Ext.form.Hidden({name:"DEST_CITY_ID",id:"DC0016F_DEST_CITY_ID",dataIndex:"DEST_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY_ID||"Receiver city ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_BPARTNER_ID",new Ext.form.Hidden({name:"DEST_BPARTNER_ID",id:"DC0016F_DEST_BPARTNER_ID",dataIndex:"DEST_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Receiver ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_NAME",new  N21.DataComp.LOV0039({name:"DEST_NAME",id:"DC0016F_DEST_NAME",dataIndex:"DEST_NAME",fieldLabel: this.resourceBundle.FieldLabel.DEST_NAME||"Receiver name",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_DEST_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0016F_DEST_COUNTRY"},{column:"REGION_CODE",field:"DC0016F_DEST_REGION"},{column:"CITY",field:"DC0016F_DEST_CITY"},{column:"ADRESS",field:"DC0016F_DEST_BPADRESS"}]}));
       this.fields.add("DEST_COUNTRY",new  N21.DataComp.LOV0006({name:"DEST_COUNTRY",id:"DC0016F_DEST_COUNTRY",dataIndex:"DEST_COUNTRY",fieldLabel: this.resourceBundle.FieldLabel.DEST_COUNTRY||"Receiver country",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DEST_REGION",new  N21.DataComp.LOV0007({name:"DEST_REGION",id:"DC0016F_DEST_REGION",dataIndex:"DEST_REGION",fieldLabel: this.resourceBundle.FieldLabel.DEST_REGION||"Region",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_country_code",field:"DC0016F.DEST_COUNTRY"}]}));
       this.fields.add("DEST_CITY",new  N21.DataComp.LOV0010({name:"DEST_CITY",id:"DC0016F_DEST_CITY",dataIndex:"DEST_CITY",fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY||"City",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_DEST_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0016F.DEST_COUNTRY"},{param:"p_region_code",field:"DC0016F.DEST_REGION"}]}));
       this.fields.add("DEST_BPADRESS",new Ext.form.TextField({name:"DEST_BPADRESS",id:"DC0016F_DEST_BPADRESS",dataIndex:"DEST_BPADRESS",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS||"Receiver adress",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_ZIP",new Ext.form.TextField({name:"DEST_ZIP",id:"DC0016F_DEST_ZIP",dataIndex:"DEST_ZIP",fieldLabel: this.resourceBundle.FieldLabel.DEST_ZIP||"Receiver zip",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_ADRESS_NOTE",new Ext.form.TextField({name:"DEST_ADRESS_NOTE",id:"DC0016F_DEST_ADRESS_NOTE",dataIndex:"DEST_ADRESS_NOTE",fieldLabel: this.resourceBundle.FieldLabel.DEST_ADRESS_NOTE||"Receiver adress notes",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("PICKEDUP",new Ext.ux.form.XCheckbox({name:"PICKEDUP",id:"DC0016F_PICKEDUP",dataIndex:"PICKEDUP",fieldLabel: this.resourceBundle.FieldLabel.PICKEDUP||"Pickedup",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("PICKUP_MODE",new Ext.form.TextField({name:"PICKUP_MODE",id:"DC0016F_PICKUP_MODE",dataIndex:"PICKUP_MODE",fieldLabel: this.resourceBundle.FieldLabel.PICKUP_MODE||"Pickup mode",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("PICKUP_DATE",new Ext.form.DateField({name:"PICKUP_DATE",id:"DC0016F_PICKUP_DATE",dataIndex:"PICKUP_DATE",fieldLabel: this.resourceBundle.FieldLabel.PICKUP_DATE||"Pickup date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("PICKUP_AGENT_ID",new Ext.form.Hidden({name:"PICKUP_AGENT_ID",id:"DC0016F_PICKUP_AGENT_ID",dataIndex:"PICKUP_AGENT_ID",fieldLabel: this.resourceBundle.FieldLabel.PICKUP_AGENT_ID||"Pickup agent ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("PICKUP_AGENT_NAME",new  N21.DataComp.LOV0067({name:"PICKUP_AGENT_NAME",id:"DC0016F_PICKUP_AGENT_NAME",dataIndex:"PICKUP_AGENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PICKUP_AGENT_NAME||"Pickup agent",allowBlank:true,width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_PICKUP_AGENT_ID"}]}));
       this.fields.add("DELIVERED",new Ext.ux.form.XCheckbox({name:"DELIVERED",id:"DC0016F_DELIVERED",dataIndex:"DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.DELIVERED||"Delivered",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("DELIVERY_MODE",new Ext.form.TextField({name:"DELIVERY_MODE",id:"DC0016F_DELIVERY_MODE",dataIndex:"DELIVERY_MODE",fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_MODE||"Delivery mode",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("DELIVERY_DATE",new Ext.form.DateField({name:"DELIVERY_DATE",id:"DC0016F_DELIVERY_DATE",dataIndex:"DELIVERY_DATE",fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_DATE||"Delivery date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("DELIVERY_AGENT_NAME",new  N21.DataComp.LOV0067({name:"DELIVERY_AGENT_NAME",id:"DC0016F_DELIVERY_AGENT_NAME",dataIndex:"DELIVERY_AGENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_AGENT_NAME||"Delivery agent",allowBlank:true,width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_DELIVERY_AGENT_ID"}]}));
       this.fields.add("DELIVERY_AGENT_ID",new Ext.form.Hidden({name:"DELIVERY_AGENT_ID",id:"DC0016F_DELIVERY_AGENT_ID",dataIndex:"DELIVERY_AGENT_ID",fieldLabel: this.resourceBundle.FieldLabel.DELIVERY_AGENT_ID||"Delivery agent ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("DELIVERED_TO_NAME",new Ext.form.TextField({name:"DELIVERED_TO_NAME",id:"DC0016F_DELIVERED_TO_NAME",dataIndex:"DELIVERED_TO_NAME",fieldLabel: this.resourceBundle.FieldLabel.DELIVERED_TO_NAME||"Deliv. to person",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DELIVERED_TO_IDENT",new Ext.form.TextField({name:"DELIVERED_TO_IDENT",id:"DC0016F_DELIVERED_TO_IDENT",dataIndex:"DELIVERED_TO_IDENT",fieldLabel: this.resourceBundle.FieldLabel.DELIVERED_TO_IDENT||"Deliv. to pers. ident",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("REJECTED",new Ext.ux.form.XCheckbox({name:"REJECTED",id:"DC0016F_REJECTED",dataIndex:"REJECTED",fieldLabel: this.resourceBundle.FieldLabel.REJECTED||"Rejected",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("REJECT_DATE",new Ext.form.DateField({name:"REJECT_DATE",id:"DC0016F_REJECT_DATE",dataIndex:"REJECT_DATE",fieldLabel: this.resourceBundle.FieldLabel.REJECT_DATE||"Reject_date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("REJECT_REASON",new Ext.form.TextArea({name:"REJECT_REASON",id:"DC0016F_REJECT_REASON",dataIndex:"REJECT_REASON",fieldLabel: this.resourceBundle.FieldLabel.REJECT_REASON||"Reject_reason",allowBlank:true,width:120,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("REJECTED_BY_NAME",new Ext.form.TextField({name:"REJECTED_BY_NAME",id:"DC0016F_REJECTED_BY_NAME",dataIndex:"REJECTED_BY_NAME",fieldLabel: this.resourceBundle.FieldLabel.REJECTED_BY_NAME||"Rej. by pers",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("REJECTED_BY_IDENT",new Ext.form.TextField({name:"REJECTED_BY_IDENT",id:"DC0016F_REJECTED_BY_IDENT",dataIndex:"REJECTED_BY_IDENT",fieldLabel: this.resourceBundle.FieldLabel.REJECTED_BY_IDENT||"Rej. by pers ident",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("PACKAGE_COUNT",new Ext.form.NumberField({name:"PACKAGE_COUNT",id:"DC0016F_PACKAGE_COUNT",dataIndex:"PACKAGE_COUNT",fieldLabel: this.resourceBundle.FieldLabel.PACKAGE_COUNT||"Package count",allowBlank:true,width:50,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CONTENT",new Ext.form.TextArea({name:"CONTENT",id:"DC0016F_CONTENT",dataIndex:"CONTENT",fieldLabel: this.resourceBundle.FieldLabel.CONTENT||"Content",allowBlank:true,width:220,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0016F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:220,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("DECLARED_VALUE",new Ext.form.NumberField({name:"DECLARED_VALUE",id:"DC0016F_DECLARED_VALUE",dataIndex:"DECLARED_VALUE",fieldLabel: this.resourceBundle.FieldLabel.DECLARED_VALUE||"Declared value",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("INSURED_VALUE",new Ext.form.NumberField({name:"INSURED_VALUE",id:"DC0016F_INSURED_VALUE",dataIndex:"INSURED_VALUE",fieldLabel: this.resourceBundle.FieldLabel.INSURED_VALUE||"Insured value",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("REF_PARCEL_ID",new Ext.form.NumberField({name:"REF_PARCEL_ID",id:"DC0016F_REF_PARCEL_ID",dataIndex:"REF_PARCEL_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_PARCEL_ID||"Ref_parcel_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("REF_PARCEL_REFERENCE_TYPE",new Ext.form.TextField({name:"REF_PARCEL_REFERENCE_TYPE",id:"DC0016F_REF_PARCEL_REFERENCE_TYPE",dataIndex:"REF_PARCEL_REFERENCE_TYPE",fieldLabel: this.resourceBundle.FieldLabel.REF_PARCEL_REFERENCE_TYPE||"Ref_parcel_reference_type",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("CUSTODY_ORG_ID",new Ext.form.Hidden({name:"CUSTODY_ORG_ID",id:"DC0016F_CUSTODY_ORG_ID",dataIndex:"CUSTODY_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.CUSTODY_ORG_ID||"In inventory ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("CUSTODY_ORG_NAME",new  N21.DataComp.LOV0071({name:"CUSTODY_ORG_NAME",id:"DC0016F_CUSTODY_ORG_NAME",dataIndex:"CUSTODY_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.CUSTODY_ORG_NAME||"In inventory",allowBlank:true,width:100,listWidth:118,insert_allowed:false,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0016F_CUSTODY_ORG_ID"}]}));
       this.fields.add("LAST_EVENT_ID",new Ext.form.Hidden({name:"LAST_EVENT_ID",id:"DC0016F_LAST_EVENT_ID",dataIndex:"LAST_EVENT_ID",labelSeparator: "",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("LAST_EVENT_NAME",new Ext.form.TextField({name:"LAST_EVENT_NAME",id:"DC0016F_LAST_EVENT_NAME",dataIndex:"LAST_EVENT_NAME",fieldLabel: this.resourceBundle.FieldLabel.LAST_EVENT_NAME||"Last event",allowBlank:true,width:100,insert_allowed:false,update_allowed:false}));
       this.fields.add("REJECT_REASON_CODE",new  N21.DataComp.LOV0065({name:"REJECT_REASON_CODE",id:"DC0016F_REJECT_REASON_CODE",dataIndex:"REJECT_REASON_CODE",fieldLabel: this.resourceBundle.FieldLabel.REJECT_REASON_CODE||"Reject reason type",allowBlank:true,caseRestriction:"Upper",width:100,listWidth:118,insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;",selectOnFocus:true}));

       this.layoutItems.add("Pickup",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Pickup||"Pickup",border:true,labelWidth:80,labelAlign:"left",width:"230"   ,items:[ this.fields.get("PICKEDUP"),this.fields.get("PICKUP_MODE"),this.fields.get("PICKUP_DATE"),this.fields.get("PICKUP_AGENT_NAME")] });
       this.layoutItems.add("Return",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Return||"Return",border:true,labelWidth:80,labelAlign:"left",width:"230"   ,items:[ this.fields.get("REJECTED"),this.fields.get("REJECT_DATE"),this.fields.get("REJECT_REASON_CODE"),this.fields.get("REJECT_REASON"),this.fields.get("REJECTED_BY_NAME"),this.fields.get("REJECTED_BY_IDENT")] });
       this.layoutItems.add("Delivery",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Delivery||"Delivery",border:true,labelWidth:80,labelAlign:"left",width:"230"   ,items:[ this.fields.get("DELIVERED"),this.fields.get("DELIVERY_MODE"),this.fields.get("DELIVERY_DATE"),this.fields.get("DELIVERY_AGENT_NAME"),this.fields.get("DELIVERED_TO_NAME"),this.fields.get("DELIVERED_TO_IDENT")] });
       this.layoutItems.add("C3",
             { layout:"form",width:260,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Pickup"),this.layoutItems.get("Delivery"),this.layoutItems.get("Return")]
 }); 
       this.layoutItems.add("Receiver",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Receiver||"Receiver",border:true,labelWidth:80,labelAlign:"left",width:"330"   ,items:[ this.fields.get("DEST_BPARTNER_ID"),this.fields.get("DEST_BPADRESS_ID"),this.fields.get("DEST_CITY_ID"),this.fields.get("DEST_NAME"),this.fields.get("DEST_COUNTRY"),this.fields.get("DEST_REGION"),this.fields.get("DEST_CITY"),this.fields.get("DEST_BPADRESS"),this.fields.get("DEST_ADRESS_NOTE")] });
       this.layoutItems.add("Sender",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Sender||"Sender",border:true,labelWidth:80,labelAlign:"left",width:"330"   ,items:[ this.fields.get("EXP_BPARTNER_ID"),this.fields.get("EXP_BPADRESS_ID"),this.fields.get("EXP_CITY_ID"),this.fields.get("EXP_NAME"),this.fields.get("EXP_COUNTRY"),this.fields.get("EXP_REGION"),this.fields.get("EXP_CITY"),this.fields.get("EXP_BPADRESS"),this.fields.get("EXP_ADRESS_NOTE")] });
       this.layoutItems.add("C2",
             { layout:"form",width:360,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Sender"),this.layoutItems.get("Receiver")]
 }); 
       this.layoutItems.add("Notes",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Notes||"Notes",border:true,labelWidth:80,labelAlign:"top",width:"230"   ,items:[ this.fields.get("CONTENT"),this.fields.get("NOTES")] });
       this.layoutItems.add("Status",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Status||"Status",border:true,labelWidth:80,labelAlign:"left",width:"230"   ,items:[ this.fields.get("CUSTODY_ORG_ID"),this.fields.get("CUSTODY_ORG_NAME"),this.fields.get("LAST_EVENT_ID"),this.fields.get("LAST_EVENT_NAME")] });
       this.layoutItems.add("ParcelInfo",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.ParcelInfo||"ParcelInfo",border:true,labelWidth:80,labelAlign:"left",width:"230"   ,items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("CODE"),this.fields.get("PACKAGE_COUNT")] });
       this.layoutItems.add("C1",
             { layout:"form",width:260,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("ParcelInfo"),this.layoutItems.get("Notes"),this.layoutItems.get("Status")]
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
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,CODE:""
              ,EXP_BPADRESS_ID:""
              ,EXP_CITY_ID:""
              ,EXP_BPARTNER_ID:""
              ,EXP_NAME:""
              ,EXP_COUNTRY:""
              ,EXP_REGION:""
              ,EXP_CITY:""
              ,EXP_BPADRESS:""
              ,EXP_ZIP:""
              ,EXP_ADRESS_NOTE:""
              ,DEST_BPADRESS_ID:""
              ,DEST_CITY_ID:""
              ,DEST_BPARTNER_ID:""
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
              ,PICKUP_AGENT_ID:""
              ,PICKUP_AGENT_NAME:""
              ,DELIVERED:""
              ,DELIVERY_MODE:""
              ,DELIVERY_DATE:""
              ,DELIVERY_AGENT_ID:""
              ,DELIVERY_AGENT_NAME:""
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
              ,MODIFIEDBY:""
              ,CUSTODY_ORG_NAME:""
              ,CUSTODY_ORG_ID:""
              ,LAST_EVENT_ID:""
              ,LAST_EVENT_NAME:""
              ,REJECT_REASON_CODE:""});
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
               ,activeItem:1
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
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_LIST_EDITOR_MODE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_REFRESH_RECORD"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PREV_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEXT_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records in CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0016</span>"          )
        }); 

       N21.DataComp.DC0016.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0016", N21.DataComp.DC0016);



