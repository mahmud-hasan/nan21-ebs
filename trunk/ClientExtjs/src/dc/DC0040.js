/** 
 * Data Component: DC0040G, Title: Accounting doc.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0040G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"ACCPERIOD_ID", type:"string" }
         ,{name:"DB_AMOUNT", type:"float" }
         ,{name:"CR_AMOUNT", type:"float" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"BASEDOC_TYPE", type:"string" }
         ,{name:"BASEDOC_NO", type:"string" }
         ,{name:"BASEDOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"BASEDOC_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"IS_GENERATED", type:"string" }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_POSTED", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"POSTEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"POSTEDBY", type:"string" }
         ,{name:"ACCSCHEMA_ID", type:"float" }
         ,{name:"ACCSCHEMA_NAME", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0040F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0040F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0040F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0040F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ACCPERIOD_ID",new  N21.DataComp.LOV0023({name:"QRY_ACCPERIOD_ID",id:"DC0040F_QRY_ACCPERIOD_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCPERIOD_ID||"Accounting_period",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,paramMapping: [{param:"p_client_id",field:"DC0040F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("DOC_NO",new Ext.form.TextField({name:"QRY_DOC_NO",id:"DC0040F_QRY_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",allowBlank:true,width:100}));
       this.queryFields.add("DOC_DATE",new Ext.form.DateField({name:"QRY_DOC_DATE",id:"DC0040F_QRY_DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("BASEDOC_TYPE",new Ext.form.TextField({name:"QRY_BASEDOC_TYPE",id:"DC0040F_QRY_BASEDOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_TYPE||"Basedoc_type",allowBlank:true,width:100}));
       this.queryFields.add("BASEDOC_NO",new Ext.form.TextField({name:"QRY_BASEDOC_NO",id:"DC0040F_QRY_BASEDOC_NO",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_NO||"Basedoc_no",allowBlank:true,width:100}));
       this.queryFields.add("BASEDOC_DATE",new Ext.form.DateField({name:"QRY_BASEDOC_DATE",id:"DC0040F_QRY_BASEDOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_DATE||"Basedoc_date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("BASEDOC_ID",new Ext.form.NumberField({name:"QRY_BASEDOC_ID",id:"DC0040F_QRY_BASEDOC_ID",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_ID||"Basedoc_id",allowBlank:true,width:100}));
       this.queryFields.add("IS_GENERATED",new Ext.form.ComboBox({name:"QRY_IS_GENERATED",id:"DC0040F_QRY_IS_GENERATED",fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_INSERTED",new Ext.form.ComboBox({name:"QRY_IS_INSERTED",id:"DC0040F_QRY_IS_INSERTED",fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("IS_POSTED",new Ext.form.ComboBox({name:"QRY_IS_POSTED",id:"DC0040F_QRY_IS_POSTED",fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"QRY_ACCSCHEMA_ID",id:"DC0040F_QRY_ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"QRY_ACCSCHEMA_NAME",id:"DC0040F_QRY_ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0040F_QRY_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0040F_QRY_CLIENT_ID"}]}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","ACCPERIOD_ID","DOC_NO","DOC_DATE","BASEDOC_TYPE","BASEDOC_NO","BASEDOC_DATE","BASEDOC_ID","IS_GENERATED","IS_INSERTED","IS_POSTED","ACCSCHEMA_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0040"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0040", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"ACCPERIOD_ID",header:this.resourceBundle.FieldLabel.ACCPERIOD_ID||"Accounting_period",width:100,dataIndex:'ACCPERIOD_ID',sortable:true}
              ,{ id:"DB_AMOUNT",header:this.resourceBundle.FieldLabel.DB_AMOUNT||"Db_amount",width:100,dataIndex:'DB_AMOUNT',sortable:true,align:'right'}
              ,{ id:"CR_AMOUNT",header:this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr_amount",width:100,dataIndex:'CR_AMOUNT',sortable:true,align:'right'}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"BASEDOC_TYPE",header:this.resourceBundle.FieldLabel.BASEDOC_TYPE||"Basedoc_type",width:100,dataIndex:'BASEDOC_TYPE',sortable:true}
              ,{ id:"BASEDOC_NO",header:this.resourceBundle.FieldLabel.BASEDOC_NO||"Basedoc_no",width:100,dataIndex:'BASEDOC_NO',sortable:true}
              ,{ id:"BASEDOC_DATE",header:this.resourceBundle.FieldLabel.BASEDOC_DATE||"Basedoc_date",width:100,dataIndex:'BASEDOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"BASEDOC_ID",header:this.resourceBundle.FieldLabel.BASEDOC_ID||"Basedoc_id",width:100,dataIndex:'BASEDOC_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"IS_GENERATED",header:this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",width:50,dataIndex:'IS_GENERATED',hidden:true,sortable:true}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_POSTED",header:this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",width:50,dataIndex:'IS_POSTED',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"POSTEDON",header:this.resourceBundle.FieldLabel.POSTEDON||"Postedon",width:100,dataIndex:'POSTEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"POSTEDBY",header:this.resourceBundle.FieldLabel.POSTEDBY||"Postedby",width:100,dataIndex:'POSTEDBY',hidden:true,sortable:true}
              ,{ id:"ACCSCHEMA_ID",header:this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",width:100,dataIndex:'ACCSCHEMA_ID',sortable:true}
              ,{ id:"ACCSCHEMA_NAME",header:this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",width:100,dataIndex:'ACCSCHEMA_NAME',sortable:true}
          ]
          ,dataComponentName:"DC0040G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0040G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0040G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ACCPERIOD_ID:""
              ,DB_AMOUNT:""
              ,CR_AMOUNT:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BASEDOC_TYPE:""
              ,BASEDOC_NO:""
              ,BASEDOC_DATE:""
              ,BASEDOC_ID:""
              ,NOTES:""
              ,IS_GENERATED:""
              ,IS_INSERTED:""
              ,IS_POSTED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,POSTEDON:""
              ,POSTEDBY:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMA_NAME:""});
     }
  });
  Ext.reg("DC0040G", N21.DataComp.DC0040G);
/** 
 * Data Component: DC0040F, Title: Accounting doc.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0040F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0040G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0040F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0040F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0040F_CLIENT_ID"}]}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0040F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_CLIENT_ID}  }}));
       this.fields.add("ACCPERIOD_ID",new  N21.DataComp.LOV0023({name:"ACCPERIOD_ID",id:"DC0040F_ACCPERIOD_ID",dataIndex:"ACCPERIOD_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCPERIOD_ID||"Accounting_period",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_client_id",field:"DC0040F.CLIENT_ID"}]}));
       this.fields.add("DB_AMOUNT",new Ext.form.NumberField({name:"DB_AMOUNT",id:"DC0040F_DB_AMOUNT",dataIndex:"DB_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.DB_AMOUNT||"Db_amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CR_AMOUNT",new Ext.form.NumberField({name:"CR_AMOUNT",id:"DC0040F_CR_AMOUNT",dataIndex:"CR_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr_amount",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DOC_NO",new Ext.form.TextField({name:"DOC_NO",id:"DC0040F_DOC_NO",dataIndex:"DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",allowBlank:false,labelSeparator:":*",width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_DATE",new Ext.form.DateField({name:"DOC_DATE",id:"DC0040F_DOC_DATE",dataIndex:"DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("BASEDOC_TYPE",new Ext.form.TextField({name:"BASEDOC_TYPE",id:"DC0040F_BASEDOC_TYPE",dataIndex:"BASEDOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_TYPE||"Basedoc_type",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("BASEDOC_NO",new Ext.form.TextField({name:"BASEDOC_NO",id:"DC0040F_BASEDOC_NO",dataIndex:"BASEDOC_NO",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_NO||"Basedoc_no",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("BASEDOC_DATE",new Ext.form.DateField({name:"BASEDOC_DATE",id:"DC0040F_BASEDOC_DATE",dataIndex:"BASEDOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_DATE||"Basedoc_date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("BASEDOC_ID",new Ext.form.NumberField({name:"BASEDOC_ID",id:"DC0040F_BASEDOC_ID",dataIndex:"BASEDOC_ID",fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_ID||"Basedoc_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0040F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_GENERATED",new Ext.ux.form.XCheckbox({name:"IS_GENERATED",id:"DC0040F_IS_GENERATED",dataIndex:"IS_GENERATED",fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_INSERTED",new Ext.ux.form.XCheckbox({name:"IS_INSERTED",id:"DC0040F_IS_INSERTED",dataIndex:"IS_INSERTED",fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_POSTED",new Ext.ux.form.XCheckbox({name:"IS_POSTED",id:"DC0040F_IS_POSTED",dataIndex:"IS_POSTED",fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0040F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:false,labelSeparator:":*",width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0040F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0040F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:false,labelSeparator:":*",width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0040F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("POSTEDON",new Ext.form.DateField({name:"POSTEDON",id:"DC0040F_POSTEDON",dataIndex:"POSTEDON",fieldLabel: this.resourceBundle.FieldLabel.POSTEDON||"Postedon",allowBlank:true,width:80,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("POSTEDBY",new Ext.form.TextField({name:"POSTEDBY",id:"DC0040F_POSTEDBY",dataIndex:"POSTEDBY",fieldLabel: this.resourceBundle.FieldLabel.POSTEDBY||"Postedby",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"ACCSCHEMA_NAME",id:"DC0040F_ACCSCHEMA_NAME",dataIndex:"ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0040F_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0040F.CLIENT_ID"}]}));

       this.layoutItems.add("DC0042",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0042 - "+(N21.DataComp.DC0042.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:700, height:450, items:{xtype:"DC0042",id:"DC0042", parentDcRelation:{name:"DC0040F",relation:[{parent:"ID",child:"ACCDOC_ID"}]}         }} ) ); 
       this.layoutItems.add("Processing",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Processing||"Processing",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("IS_GENERATED"),this.fields.get("IS_INSERTED"),this.fields.get("IS_POSTED")] });
       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelWidth:80,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY"),this.fields.get("POSTEDON"),this.fields.get("POSTEDBY")] });
       this.layoutItems.add("C2",
             { layout:"form",width:300,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Processing"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",width:350,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("ACCSCHEMA_NAME"),this.fields.get("ACCPERIOD_ID"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("BASEDOC_TYPE"),this.fields.get("BASEDOC_NO"),this.fields.get("BASEDOC_DATE"),this.fields.get("BASEDOC_ID"),this.fields.get("NOTES")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0040F"
          ,firstFocusFieldName:"DOC_NO"
          ,childDCs: [{name:"DC0042",relation:[{parent:"ID",child:"ACCDOC_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"AccdocItems",handler:function() {this.show_window("DC0042");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0040F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0040F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ACCPERIOD_ID:""
              ,DB_AMOUNT:""
              ,CR_AMOUNT:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BASEDOC_TYPE:""
              ,BASEDOC_NO:""
              ,BASEDOC_DATE:""
              ,BASEDOC_ID:""
              ,NOTES:""
              ,IS_GENERATED:""
              ,IS_INSERTED:""
              ,IS_POSTED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,POSTEDON:""
              ,POSTEDBY:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMA_NAME:""});
     }

  ,change_CLIENT_ID:function(fld, newVal, oldVal) {
    this.getField("ACCPERIOD_NAME").setParamValue("p_client_id",newVal);
this.getField("ACCPERIOD_NAME").setValue("");
   }


  });
  Ext.reg("DC0040F", N21.DataComp.DC0040F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0040
 * Title: Accounting doc.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0040 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0040"
          ,masterName:"DC0040G"
          ,detailName:"DC0040F"
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
                            xtype: "DC0040G"
                           ,id: "DC0040G"
                           ,height:350
                       },{
                           xtype:"DC0040F"
                          ,id:"DC0040F"
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
,"->","<span class='dcName'>DC0040</span>"          )
        }); 

       N21.DataComp.DC0040.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0040", N21.DataComp.DC0040);



