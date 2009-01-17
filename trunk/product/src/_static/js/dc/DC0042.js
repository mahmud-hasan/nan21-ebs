/** 
 * Data Component: DC0042G, Title: Accounting doc. line
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
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0042_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("ACCDOC_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ACCDOC_ID",id:"DC0042_QRY_ACCDOC_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id"})  );
         this.queryFields.add("ACCDOC_NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_ACCDOC_NAME",id:"DC0042_QRY_ACCDOC_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_NAME||"Accdoc"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0042_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NOTES",id:"DC0042_QRY_NOTES",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"})  );
         this.queryFields.add("DB_ACCT", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DB_ACCT",id:"DC0042_QRY_DB_ACCT",width:100,fieldLabel: this.resourceBundle.FieldLabel.DB_ACCT||"Db_acct"})  );
         this.queryFields.add("CR_ACCT", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CR_ACCT",id:"DC0042_QRY_CR_ACCT",width:100,fieldLabel: this.resourceBundle.FieldLabel.CR_ACCT||"Cr_acct"})  );
         this.queryFields.add("DB_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_DB_AMOUNT",id:"DC0042_QRY_DB_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.DB_AMOUNT||"Dr amount",style: "text-align:right;"})  );
         this.queryFields.add("CR_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_CR_AMOUNT",id:"DC0042_QRY_CR_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr amount",style: "text-align:right;"})  );
         this.queryFields.add("CURRENCY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CURRENCY",id:"DC0042_QRY_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"})  );
         this.queryFields.add("XRATE", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_XRATE",id:"DC0042_QRY_XRATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.XRATE||"Xrate",style: "text-align:right;"})  );
         this.queryFields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CREATEDON",id:"DC0042_QRY_CREATEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0042_QRY_CREATEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"})  );
         this.queryFields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0042_QRY_MODIFIEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0042_QRY_MODIFIEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"})  );
         this.queryFields.add("IS_GENERATED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_GENERATED",id:"DC0042_QRY_IS_GENERATED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_GENERATED||"Is_generated"})  );
         this.queryFields.add("ORIG_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_ORIG_AMOUNT",id:"DC0042_QRY_ORIG_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORIG_AMOUNT||"Orig_amount",style: "text-align:right;"})  );
         this.queryFields.add("ORIG_CURRENCY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_ORIG_CURRENCY",id:"DC0042_QRY_ORIG_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORIG_CURRENCY||"Orig_currency"})  );
  
       this.queryFieldsVisible = [  "ACCDOC_NAME","NOTES","DB_ACCT","CR_ACCT","DB_AMOUNT","CR_AMOUNT","CURRENCY","XRATE","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY","IS_GENERATED","ORIG_AMOUNT","ORIG_CURRENCY" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0042"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0042"
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
          ,queryArraySize:-1
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
 * Data Component: DC0042F, Title: Accounting doc. line
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0042F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0042G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0042F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCDOC_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ACCDOC_ID",id:"DC0042F_ACCDOC_ID",dataIndex:"ACCDOC_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACCDOC_ID||"Accdoc_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0042F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true,copyValueFrom:"DC0026F_CLIENT_ID"})   );
       this.fields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"NOTES",id:"DC0042F_NOTES",dataIndex:"NOTES",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DB_ACCT", new Ext.form.TextField ({xtype: "textfield",name:"DB_ACCT",id:"DC0042F_DB_ACCT",dataIndex:"DB_ACCT",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DB_ACCT||"Db_acct",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CR_ACCT", new Ext.form.TextField ({xtype: "textfield",name:"CR_ACCT",id:"DC0042F_CR_ACCT",dataIndex:"CR_ACCT",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CR_ACCT||"Cr_acct",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DB_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"DB_AMOUNT",id:"DC0042F_DB_AMOUNT",dataIndex:"DB_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DB_AMOUNT||"Dr amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("CR_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"CR_AMOUNT",id:"DC0042F_CR_AMOUNT",dataIndex:"CR_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CR_AMOUNT||"Cr amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("CURRENCY", new Ext.form.TextField ({xtype: "textfield",name:"CURRENCY",id:"DC0042F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("XRATE", new Ext.form.NumberField ({xtype: "numberfield",name:"XRATE",id:"DC0042F_XRATE",dataIndex:"XRATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.XRATE||"Xrate",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );

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
 * Title: Accounting doc. line
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
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0042.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0042", N21.DataComp.DC0042);



