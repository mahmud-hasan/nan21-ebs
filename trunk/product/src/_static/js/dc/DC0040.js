/** 
 * Data Component: DC0040G, Title: Accounting doc.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0040G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"ACCPERIOD_NAME", type:"string" }
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
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0040_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0040_QRY_CLIENT_ID"}],name:"QRY_CLIENT_NAME",id:"DC0040_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0040_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("ACCPERIOD_NAME", new N21.DataComp.LOV0023({xtype: "LOV0023",paramMapping: [{param:"p_client_id",field:"DC0040_QRY_CLIENT_ID"}],name:"QRY_ACCPERIOD_NAME",id:"DC0040_QRY_ACCPERIOD_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCPERIOD_NAME||"Accounting_period"})  );
         this.queryFields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOC_NO",id:"DC0040_QRY_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no"})  );
         this.queryFields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0040_QRY_DOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("BASEDOC_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_BASEDOC_TYPE",id:"DC0040_QRY_BASEDOC_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_TYPE||"Basedoc_type"})  );
         this.queryFields.add("BASEDOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_BASEDOC_NO",id:"DC0040_QRY_BASEDOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_NO||"Basedoc_no"})  );
         this.queryFields.add("BASEDOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_BASEDOC_DATE",id:"DC0040_QRY_BASEDOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_DATE||"Basedoc_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("BASEDOC_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_BASEDOC_ID",id:"DC0040_QRY_BASEDOC_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_ID||"Basedoc_id",style: "text-align:right;"})  );
         this.queryFields.add("IS_GENERATED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_GENERATED",id:"DC0040_QRY_IS_GENERATED",width:50,fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated"})  );
         this.queryFields.add("IS_INSERTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_INSERTED",id:"DC0040_QRY_IS_INSERTED",width:50,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted"})  );
         this.queryFields.add("IS_POSTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_POSTED",id:"DC0040_QRY_IS_POSTED",width:50,fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","ACCPERIOD_NAME","DOC_NO","DOC_DATE","BASEDOC_TYPE","BASEDOC_NO","BASEDOC_DATE","BASEDOC_ID","IS_GENERATED","IS_INSERTED","IS_POSTED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0040"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0040"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"ACCPERIOD_NAME",header:this.resourceBundle.FieldLabel.ACCPERIOD_NAME||"Accounting_period",width:100,dataIndex:'ACCPERIOD_NAME',sortable:true}
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
              ,CLIENT_NAME:""
              ,ACCPERIOD_NAME:""
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
              ,POSTEDBY:""});
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
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0040F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0040F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_CLIENT_ID}  }})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0040F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0040F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:120,listWidth:138,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCPERIOD_NAME", new N21.DataComp.LOV0023({xtype: "LOV0023",paramMapping: [{param:"p_client_id",field:"DC0040F.CLIENT_ID"}],selectOnFocus:true,name:"ACCPERIOD_NAME",id:"DC0040F_ACCPERIOD_NAME",dataIndex:"ACCPERIOD_NAME",width:150,listWidth:168,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACCPERIOD_NAME||"Accounting_period",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DB_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"DB_AMOUNT",id:"DC0040F_DB_AMOUNT",dataIndex:"DB_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DB_AMOUNT||"Db_amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("CR_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"CR_AMOUNT",id:"DC0040F_CR_AMOUNT",dataIndex:"CR_AMOUNT",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr_amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0040F_DOC_NO",dataIndex:"DOC_NO",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0040F_DOC_DATE",dataIndex:"DOC_DATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("BASEDOC_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"BASEDOC_TYPE",id:"DC0040F_BASEDOC_TYPE",dataIndex:"BASEDOC_TYPE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_TYPE||"Basedoc_type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BASEDOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"BASEDOC_NO",id:"DC0040F_BASEDOC_NO",dataIndex:"BASEDOC_NO",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_NO||"Basedoc_no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BASEDOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"BASEDOC_DATE",id:"DC0040F_BASEDOC_DATE",dataIndex:"BASEDOC_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_DATE||"Basedoc_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("BASEDOC_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"BASEDOC_ID",id:"DC0040F_BASEDOC_ID",dataIndex:"BASEDOC_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BASEDOC_ID||"Basedoc_id",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0040F_NOTES",dataIndex:"NOTES",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_GENERATED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_GENERATED",id:"DC0040F_IS_GENERATED",dataIndex:"IS_GENERATED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_INSERTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_INSERTED",id:"DC0040F_IS_INSERTED",dataIndex:"IS_INSERTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_POSTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_POSTED",id:"DC0040F_IS_POSTED",dataIndex:"IS_POSTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_POSTED||"Is_posted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0040F_CREATEDON",dataIndex:"CREATEDON",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0040F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0040F_MODIFIEDON",dataIndex:"MODIFIEDON",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0040F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",disabled:true})   );
       this.fields.add("POSTEDON", new Ext.form.DateField ({xtype: "datefield",name:"POSTEDON",id:"DC0040F_POSTEDON",dataIndex:"POSTEDON",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.POSTEDON||"Postedon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("POSTEDBY", new Ext.form.TextField ({xtype: "textfield",name:"POSTEDBY",id:"DC0040F_POSTEDBY",dataIndex:"POSTEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.POSTEDBY||"Postedby",disabled:true})   );

       this.layoutItems.add("DC0042",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0042 - "+(N21.DataComp.DC0042.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:700, height:450, items:{xtype:"DC0042",id:"DC0042", parentDcRelation:{name:"DC0040F",relation:[{parent:"ID",child:"ACCDOC_ID"}]}         }} ) ); 
       this.layoutItems.add("Processing",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Processing||"Processing",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("IS_GENERATED"),this.fields.get("IS_INSERTED"),this.fields.get("IS_POSTED")] });
       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY"),this.fields.get("POSTEDON"),this.fields.get("POSTEDBY")] });
       this.layoutItems.add("C2",
             { layout:"form",width:300,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Processing"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",width:350,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_NAME"),this.fields.get("ACCPERIOD_NAME"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("BASEDOC_TYPE"),this.fields.get("BASEDOC_NO"),this.fields.get("BASEDOC_DATE"),this.fields.get("BASEDOC_ID"),this.fields.get("NOTES")]
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
          ,buttons: [{xtype:"button",text:"AccdocItems",scope:this,handler:function() {this.show_window("DC0042");}  }]
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
              ,CLIENT_NAME:""
              ,ACCPERIOD_NAME:""
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
              ,POSTEDBY:""});
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
               ,activeItem:0
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

       N21.DataComp.DC0040.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0040", N21.DataComp.DC0040);



