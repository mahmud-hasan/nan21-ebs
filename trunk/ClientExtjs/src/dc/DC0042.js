/** 
 * Data Component: DC0042G, Title: Accounting document lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0042G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"ACCDOC_ID", type:"float" }
         ,{name:"ACCDOC_NAME", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"DB_ACCT", type:"string" }
         ,{name:"CR_ACCT", type:"string" }
         ,{name:"DB_AMOUNT", type:"float" }
         ,{name:"CR_AMOUNT", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"XRATE", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"IS_GENERATED", type:"string" }
         ,{name:"ORIG_AMOUNT", type:"float" }
         ,{name:"ORIG_CURRENCY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0042F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("ACCDOC_ID",new Ext.form.Hidden({name:"QRY_ACCDOC_ID",id:"DC0042F_QRY_ACCDOC_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",allowBlank:false,labelSeparator:":*",width:100}));
       this.queryFields.add("ACCDOC_NAME",new Ext.form.TextField({name:"QRY_ACCDOC_NAME",id:"DC0042F_QRY_ACCDOC_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0042F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("NOTES",new Ext.form.TextField({name:"QRY_NOTES",id:"DC0042F_QRY_NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:100}));
       this.queryFields.add("DB_ACCT",new Ext.form.TextField({name:"QRY_DB_ACCT",id:"DC0042F_QRY_DB_ACCT",fieldLabel: this.resourceBundle.FieldLabel.DB_ACCT||"Db_acct",allowBlank:true,width:100}));
       this.queryFields.add("CR_ACCT",new Ext.form.TextField({name:"QRY_CR_ACCT",id:"DC0042F_QRY_CR_ACCT",fieldLabel: this.resourceBundle.FieldLabel.CR_ACCT||"Cr_acct",allowBlank:true,width:100}));
       this.queryFields.add("DB_AMOUNT",new Ext.form.NumberField({name:"QRY_DB_AMOUNT",id:"DC0042F_QRY_DB_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.DB_AMOUNT||"Dr amount",allowBlank:true,width:100}));
       this.queryFields.add("CR_AMOUNT",new Ext.form.NumberField({name:"QRY_CR_AMOUNT",id:"DC0042F_QRY_CR_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr amount",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY",new Ext.form.TextField({name:"QRY_CURRENCY",id:"DC0042F_QRY_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:100}));
       this.queryFields.add("XRATE",new Ext.form.NumberField({name:"QRY_XRATE",id:"DC0042F_QRY_XRATE",fieldLabel: this.resourceBundle.FieldLabel.XRATE||"Xrate",allowBlank:true,width:100}));
       this.queryFields.add("CREATEDON",new Ext.form.DateField({name:"QRY_CREATEDON",id:"DC0042F_QRY_CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("CREATEDBY",new Ext.form.TextField({name:"QRY_CREATEDBY",id:"DC0042F_QRY_CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:100}));
       this.queryFields.add("MODIFIEDON",new Ext.form.DateField({name:"QRY_MODIFIEDON",id:"DC0042F_QRY_MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("MODIFIEDBY",new Ext.form.TextField({name:"QRY_MODIFIEDBY",id:"DC0042F_QRY_MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:100}));
       this.queryFields.add("IS_GENERATED",new Ext.form.ComboBox({name:"QRY_IS_GENERATED",id:"DC0042F_QRY_IS_GENERATED",fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",allowBlank:true,width:100,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("ORIG_AMOUNT",new Ext.form.NumberField({name:"QRY_ORIG_AMOUNT",id:"DC0042F_QRY_ORIG_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",allowBlank:true,width:100}));
       this.queryFields.add("ORIG_CURRENCY",new Ext.form.TextField({name:"QRY_ORIG_CURRENCY",id:"DC0042F_QRY_ORIG_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "ACCDOC_NAME","NOTES","DB_ACCT","CR_ACCT","DB_AMOUNT","CR_AMOUNT","CURRENCY","XRATE","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY","IS_GENERATED","ORIG_AMOUNT","ORIG_CURRENCY" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0042"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0042", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"ACCDOC_ID",header:this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",width:100,dataIndex:'ACCDOC_ID',hidden:true,sortable:true}
              ,{ id:"ACCDOC_NAME",header:this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc",width:100,dataIndex:'ACCDOC_NAME',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',sortable:true}
              ,{ id:"DB_ACCT",header:this.resourceBundle.FieldLabel.DB_ACCT||"Db_acct",width:100,dataIndex:'DB_ACCT',sortable:true}
              ,{ id:"CR_ACCT",header:this.resourceBundle.FieldLabel.CR_ACCT||"Cr_acct",width:100,dataIndex:'CR_ACCT',sortable:true}
              ,{ id:"DB_AMOUNT",header:this.resourceBundle.FieldLabel.DB_AMOUNT||"Dr amount",width:100,dataIndex:'DB_AMOUNT',sortable:true,align:'right'}
              ,{ id:"CR_AMOUNT",header:this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr amount",width:100,dataIndex:'CR_AMOUNT',sortable:true,align:'right'}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:50,dataIndex:'CURRENCY',sortable:true}
              ,{ id:"XRATE",header:this.resourceBundle.FieldLabel.XRATE||"Xrate",width:100,dataIndex:'XRATE',hidden:true,sortable:true,align:'right'}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"IS_GENERATED",header:this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated",width:50,dataIndex:'IS_GENERATED',hidden:true,sortable:true}
              ,{ id:"ORIG_AMOUNT",header:this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",width:100,dataIndex:'ORIG_AMOUNT',hidden:true,sortable:true,align:'right'}
              ,{ id:"ORIG_CURRENCY",header:this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency",width:100,dataIndex:'ORIG_CURRENCY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0042G"
          ,queryArraySize:50
        });
       N21.DataComp.DC0042G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0042G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,ACCDOC_ID:""
              ,ACCDOC_NAME:""
              ,CLIENT_ID:""
              ,NOTES:""
              ,DB_ACCT:""
              ,CR_ACCT:""
              ,DB_AMOUNT:""
              ,CR_AMOUNT:""
              ,CURRENCY:""
              ,XRATE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IS_GENERATED:""
              ,ORIG_AMOUNT:""
              ,ORIG_CURRENCY:""});
     }
  });
  Ext.reg("DC0042G", N21.DataComp.DC0042G);
/** 
 * Data Component: DC0042F, Title: Accounting document lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0042F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0042G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0042F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACCDOC_ID",new Ext.form.Hidden({name:"ACCDOC_ID",id:"DC0042F_ACCDOC_ID",dataIndex:"ACCDOC_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0042F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,copyValueFrom:"DC0026F_CLIENT_ID"}));
       this.fields.add("NOTES",new Ext.form.TextField({name:"NOTES",id:"DC0042F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("DB_ACCT",new Ext.form.TextField({name:"DB_ACCT",id:"DC0042F_DB_ACCT",dataIndex:"DB_ACCT",fieldLabel: this.resourceBundle.FieldLabel.DB_ACCT||"Db_acct",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("CR_ACCT",new Ext.form.TextField({name:"CR_ACCT",id:"DC0042F_CR_ACCT",dataIndex:"CR_ACCT",fieldLabel: this.resourceBundle.FieldLabel.CR_ACCT||"Cr_acct",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("DB_AMOUNT",new Ext.form.NumberField({name:"DB_AMOUNT",id:"DC0042F_DB_AMOUNT",dataIndex:"DB_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.DB_AMOUNT||"Dr amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CR_AMOUNT",new Ext.form.NumberField({name:"CR_AMOUNT",id:"DC0042F_CR_AMOUNT",dataIndex:"CR_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CURRENCY",new Ext.form.TextField({name:"CURRENCY",id:"DC0042F_CURRENCY",dataIndex:"CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:false,labelSeparator:":*",width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("XRATE",new Ext.form.NumberField({name:"XRATE",id:"DC0042F_XRATE",dataIndex:"XRATE",fieldLabel: this.resourceBundle.FieldLabel.XRATE||"Xrate",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));

       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("CURRENCY"),this.fields.get("XRATE")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.6, items:[ this.fields.get("ID"),this.fields.get("ACCDOC_ID"),this.fields.get("CLIENT_ID"),this.fields.get("NOTES"),this.fields.get("DB_ACCT"),this.fields.get("CR_ACCT"),this.fields.get("DB_AMOUNT"),this.fields.get("CR_AMOUNT")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0042F"
          ,firstFocusFieldName:"NOTES"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0042F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0042F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,ACCDOC_ID:""
              ,ACCDOC_NAME:""
              ,CLIENT_ID:""
              ,NOTES:""
              ,DB_ACCT:""
              ,CR_ACCT:""
              ,DB_AMOUNT:""
              ,CR_AMOUNT:""
              ,CURRENCY:""
              ,XRATE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IS_GENERATED:""
              ,ORIG_AMOUNT:""
              ,ORIG_CURRENCY:""});
     }


  });
  Ext.reg("DC0042F", N21.DataComp.DC0042F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0042
 * Title: Accounting document lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0042 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0042"
          ,masterName:"DC0042G"
          ,detailName:"DC0042F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0042G",id: "DC0042G",region:"north" ,split:true,height:220,minHeight:0}
             ,{xtype: "DC0042F",id: "DC0042F",region:"center",split:true,autoScroll:true}
            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
,"->","<span class='dcName'>DC0042</span>"          )
        }); 

       N21.DataComp.DC0042.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0042", N21.DataComp.DC0042);



