/** 
 * Data Component: DC0117, Title: Parcel reception new
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0117 = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
     ,dataRecordMeta:    Ext.data.Record.create([
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
         ,{name:"DEST_CITY_ID", type:"float" }
         ,{name:"DEST_BPARTNER_ID", type:"float" }
         ,{name:"DEST_BPADRESS_ID", type:"float" }
         ,{name:"DEST_NAME", type:"string" }
         ,{name:"DEST_COUNTRY", type:"string" }
         ,{name:"DEST_REGION", type:"string" }
         ,{name:"DEST_CITY", type:"string" }
         ,{name:"DEST_BPADRESS", type:"string" }
         ,{name:"DEST_ZIP", type:"string" }
         ,{name:"DEST_ADRESS_NOTE", type:"string" }
         ,{name:"PACKAGE_COUNT", type:"float" }
         ,{name:"CONTENT", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"DECLARED_VALUE", type:"float" }
         ,{name:"INSURED_VALUE", type:"float" }
         ,{name:"REF_PARCEL_ID", type:"float" }
         ,{name:"REF_PARCEL_REFERENCE_TYPE", type:"string" }
    ])
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0117F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0117F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0117F_CLIENT_ID"}],displayColumn: "CODE"}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0117F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EVENT_DATE",new Ext.form.DateField({name:"EVENT_DATE",id:"DC0117F_EVENT_DATE",fieldLabel: this.resourceBundle.FieldLabel.EVENT_DATE||"Reception date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0117F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_CITY_ID",new Ext.form.Hidden({name:"EXP_CITY_ID",id:"DC0117F_EXP_CITY_ID",dataIndex:"EXP_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY_ID||"Sender city ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_BPARTNER_ID",new Ext.form.Hidden({name:"EXP_BPARTNER_ID",id:"DC0117F_EXP_BPARTNER_ID",dataIndex:"EXP_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPARTNER_ID||"Sender ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_BPADRESS_ID",new Ext.form.Hidden({name:"EXP_BPADRESS_ID",id:"DC0117F_EXP_BPADRESS_ID",dataIndex:"EXP_BPADRESS_ID",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS_ID||"Sender adress id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("EXP_NAME",new  N21.DataComp.LOV0039({name:"EXP_NAME",id:"DC0117F_EXP_NAME",dataIndex:"EXP_NAME",fieldLabel: this.resourceBundle.FieldLabel.EXP_NAME||"Sender name",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0117F_EXP_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0117F_EXP_COUNTRY"},{column:"REGION_CODE",field:"DC0117F_EXP_REGION"},{column:"CITY",field:"DC0117F_EXP_CITY"},{column:"ADRESS",field:"DC0117F_EXP_BPADRESS"}]}));
       this.fields.add("EXP_COUNTRY",new  N21.DataComp.LOV0006({name:"EXP_COUNTRY",id:"DC0117F_EXP_COUNTRY",dataIndex:"EXP_COUNTRY",fieldLabel: this.resourceBundle.FieldLabel.EXP_COUNTRY||"Country",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("EXP_REGION",new  N21.DataComp.LOV0007({name:"EXP_REGION",id:"DC0117F_EXP_REGION",dataIndex:"EXP_REGION",fieldLabel: this.resourceBundle.FieldLabel.EXP_REGION||"Region",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_country_code",field:"DC0117F.EXP_COUNTRY"}]}));
       this.fields.add("EXP_CITY",new  N21.DataComp.LOV0010({name:"EXP_CITY",id:"DC0117F_EXP_CITY",dataIndex:"EXP_CITY",fieldLabel: this.resourceBundle.FieldLabel.EXP_CITY||"City",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0117F_EXP_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0117F.EXP_COUNTRY"},{param:"p_region_code",field:"DC0117F.EXP_REGION"}]}));
       this.fields.add("EXP_BPADRESS",new Ext.form.TextField({name:"EXP_BPADRESS",id:"DC0117F_EXP_BPADRESS",dataIndex:"EXP_BPADRESS",fieldLabel: this.resourceBundle.FieldLabel.EXP_BPADRESS||"Adress",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_BPADRESS_ID",new Ext.form.Hidden({name:"DEST_BPADRESS_ID",id:"DC0117F_DEST_BPADRESS_ID",dataIndex:"DEST_BPADRESS_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS_ID||"Receiver adress ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_CITY_ID",new Ext.form.Hidden({name:"DEST_CITY_ID",id:"DC0117F_DEST_CITY_ID",dataIndex:"DEST_CITY_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY_ID||"Receiver city ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_BPARTNER_ID",new Ext.form.Hidden({name:"DEST_BPARTNER_ID",id:"DC0117F_DEST_BPARTNER_ID",dataIndex:"DEST_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPARTNER_ID||"Receiver ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_NAME",new  N21.DataComp.LOV0039({name:"DEST_NAME",id:"DC0117F_DEST_NAME",dataIndex:"DEST_NAME",fieldLabel: this.resourceBundle.FieldLabel.DEST_NAME||"Receiver name",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0117F_DEST_BPARTNER_ID"},{column:"COUNTRY_CODE",field:"DC0117F_DEST_COUNTRY"},{column:"REGION_CODE",field:"DC0117F_DEST_REGION"},{column:"CITY",field:"DC0117F_DEST_CITY"},{column:"ADRESS",field:"DC0117F_DEST_BPADRESS"}]}));
       this.fields.add("DEST_COUNTRY",new  N21.DataComp.LOV0006({name:"DEST_COUNTRY",id:"DC0117F_DEST_COUNTRY",dataIndex:"DEST_COUNTRY",fieldLabel: this.resourceBundle.FieldLabel.DEST_COUNTRY||"Country",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DEST_REGION",new  N21.DataComp.LOV0007({name:"DEST_REGION",id:"DC0117F_DEST_REGION",dataIndex:"DEST_REGION",fieldLabel: this.resourceBundle.FieldLabel.DEST_REGION||"Region",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_country_code",field:"DC0117F.DEST_COUNTRY"}]}));
       this.fields.add("DEST_CITY",new  N21.DataComp.LOV0010({name:"DEST_CITY",id:"DC0117F_DEST_CITY",dataIndex:"DEST_CITY",fieldLabel: this.resourceBundle.FieldLabel.DEST_CITY||"City",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0117F_DEST_CITY_ID"}],paramMapping: [{param:"p_country_code",field:"DC0117F.DEST_COUNTRY"},{param:"p_region_code",field:"DC0117F.DEST_REGION"}]}));
       this.fields.add("DEST_BPADRESS",new Ext.form.TextField({name:"DEST_BPADRESS",id:"DC0117F_DEST_BPADRESS",dataIndex:"DEST_BPADRESS",fieldLabel: this.resourceBundle.FieldLabel.DEST_BPADRESS||"Adress",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_ZIP",new Ext.form.TextField({name:"DEST_ZIP",id:"DC0117F_DEST_ZIP",dataIndex:"DEST_ZIP",fieldLabel: this.resourceBundle.FieldLabel.DEST_ZIP||"Zip",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_ADRESS_NOTE",new Ext.form.TextField({name:"DEST_ADRESS_NOTE",id:"DC0117F_DEST_ADRESS_NOTE",dataIndex:"DEST_ADRESS_NOTE",fieldLabel: this.resourceBundle.FieldLabel.DEST_ADRESS_NOTE||"Adress note",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("PACKAGE_COUNT",new Ext.form.NumberField({name:"PACKAGE_COUNT",id:"DC0117F_PACKAGE_COUNT",dataIndex:"PACKAGE_COUNT",fieldLabel: this.resourceBundle.FieldLabel.PACKAGE_COUNT||"Package count",allowBlank:true,width:50,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CONTENT",new Ext.form.TextArea({name:"CONTENT",id:"DC0117F_CONTENT",dataIndex:"CONTENT",fieldLabel: this.resourceBundle.FieldLabel.CONTENT||"Content",allowBlank:true,width:220,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0117F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:220,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("DECLARED_VALUE",new Ext.form.NumberField({name:"DECLARED_VALUE",id:"DC0117F_DECLARED_VALUE",dataIndex:"DECLARED_VALUE",fieldLabel: this.resourceBundle.FieldLabel.DECLARED_VALUE||"Declared value",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("INSURED_VALUE",new Ext.form.NumberField({name:"INSURED_VALUE",id:"DC0117F_INSURED_VALUE",dataIndex:"INSURED_VALUE",fieldLabel: this.resourceBundle.FieldLabel.INSURED_VALUE||"Insured value",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("REF_PARCEL_ID",new Ext.form.NumberField({name:"REF_PARCEL_ID",id:"DC0117F_REF_PARCEL_ID",dataIndex:"REF_PARCEL_ID",fieldLabel: this.resourceBundle.FieldLabel.REF_PARCEL_ID||"Ref parcel ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("REF_PARCEL_REFERENCE_TYPE",new Ext.form.TextField({name:"REF_PARCEL_REFERENCE_TYPE",id:"DC0117F_REF_PARCEL_REFERENCE_TYPE",dataIndex:"REF_PARCEL_REFERENCE_TYPE",fieldLabel: this.resourceBundle.FieldLabel.REF_PARCEL_REFERENCE_TYPE||"Reference type",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("WAREHOUSE_ORG_NAME",new  N21.DataComp.LOV0071({name:"WAREHOUSE_ORG_NAME",id:"DC0117F_WAREHOUSE_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.WAREHOUSE_ORG_NAME||"Warehouse",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0117F_WAREHOUSE_ORG_ID"}]}));
       this.fields.add("WAREHOUSE_ORG_ID",new Ext.form.Hidden({name:"WAREHOUSE_ORG_ID",id:"DC0117F_WAREHOUSE_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.WAREHOUSE_ORG_ID||"Warehouse ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("Receiver",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Receiver||"Receiver",border:true,labelWidth:80,labelAlign:"left",width:"320"   ,items:[ this.fields.get("DEST_BPARTNER_ID"),this.fields.get("DEST_CITY_ID"),this.fields.get("DEST_BPADRESS_ID"),this.fields.get("DEST_NAME"),this.fields.get("DEST_COUNTRY"),this.fields.get("DEST_REGION"),this.fields.get("DEST_CITY"),this.fields.get("DEST_BPADRESS"),this.fields.get("DEST_ADRESS_NOTE"),this.fields.get("DEST_ZIP")] });
       this.layoutItems.add("Sender",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Sender||"Sender",border:true,labelWidth:80,labelAlign:"left",width:"320"   ,items:[ this.fields.get("EXP_NAME"),this.fields.get("EXP_COUNTRY"),this.fields.get("EXP_REGION"),this.fields.get("EXP_CITY"),this.fields.get("EXP_BPADRESS"),this.fields.get("EXP_BPADRESS_ID"),this.fields.get("EXP_CITY_ID"),this.fields.get("EXP_BPARTNER_ID")] });
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.6,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Sender"),this.layoutItems.get("Receiver")]
 }); 
       this.layoutItems.add("Parcel",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Parcel||"Parcel",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CODE"),this.fields.get("PACKAGE_COUNT")] });
       this.layoutItems.add("Reception",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Reception||"Reception",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("WAREHOUSE_ORG_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("WAREHOUSE_ORG_NAME"),this.fields.get("EVENT_DATE")] });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Reception"),this.layoutItems.get("Parcel")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0117"
          ,firstFocusFieldName:"CODE"
          ,buttons: [{xtype:"button",scope:this,text:"Process reception",handler:function() {this.executeTrigger("COMMIT_FORM", {onSuccess:this.doReceptionSuccess});}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0117.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0117.superclass.onRender.apply(this, arguments);
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
              ,DEST_CITY_ID:""
              ,DEST_BPARTNER_ID:""
              ,DEST_BPADRESS_ID:""
              ,DEST_NAME:""
              ,DEST_COUNTRY:""
              ,DEST_REGION:""
              ,DEST_CITY:""
              ,DEST_BPADRESS:""
              ,DEST_ZIP:""
              ,DEST_ADRESS_NOTE:""
              ,PACKAGE_COUNT:""
              ,CONTENT:""
              ,NOTES:""
              ,DECLARED_VALUE:""
              ,INSURED_VALUE:""
              ,REF_PARCEL_ID:""
              ,REF_PARCEL_REFERENCE_TYPE:""});
     }

  ,doReceptionSuccess:function(response) {
    this.clearAllFieldsExcept( new Array('CLIENT_ID', 'CLIENT_CODE', 'EVENT_DATE', 'WAREHOUSE_ORG_NAME', 'WAREHOUSE_ORG_ID'));
this.setRecordStatus("insert");
this.getField("CODE").focus();
   }

  ,onInitForm:function() {
    this.executeTrigger("CREATE_NEW_RECORD");
   }


  });
  Ext.reg("DC0117", N21.DataComp.DC0117);

