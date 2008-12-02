/** 
 * Data Component: DC0039G, Title: Product masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0039G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"PRODCATEG_CODE", type:"string" }
         ,{name:"PRODCATEG_ID", type:"float" }
         ,{name:"STORABLE", type:"string" }
         ,{name:"UOM_CODE", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"EXPENSE_ACCOUNT", type:"string" }
         ,{name:"REVENUE_ACCOUNT", type:"string" }
         ,{name:"PROD_TYPE", type:"string" }
         ,{name:"SUMMARY", type:"string" }
         ,{name:"VOLUME", type:"float" }
         ,{name:"WEIGHT", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"FOR_SALE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0039_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0039_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",name:"QRY_CLIENT_NAME",id:"DC0039_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0039_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0039_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("PRODCATEG_CODE", new N21.DataComp.LOV0014({xtype: "LOV0014",fieldMapping: [{column:"ID",field:"DC0039_QRY_PRODCATEG_ID"}],selectOnFocus:true,name:"QRY_PRODCATEG_CODE",id:"DC0039_QRY_PRODCATEG_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_CODE||"Product Category"})  );
         this.queryFields.add("PRODCATEG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PRODCATEG_ID",id:"DC0039_QRY_PRODCATEG_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id"})  );
         this.queryFields.add("PROD_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_PROD_TYPE",id:"DC0039_QRY_PROD_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PROD_TYPE||"Prod_type"})  );
         this.queryFields.add("SUMMARY", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_SUMMARY",id:"DC0039_QRY_SUMMARY",width:100,fieldLabel: this.resourceBundle.FieldLabel.SUMMARY||"Summary"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","CODE","NAME","PRODCATEG_CODE","PROD_TYPE","SUMMARY" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0039"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0039"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:120,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{ id:"PRODCATEG_CODE",header:this.resourceBundle.FieldLabel.PRODCATEG_CODE||"Product Category",width:150,dataIndex:'PRODCATEG_CODE',sortable:true}
              ,{ id:"PRODCATEG_ID",header:this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",width:100,dataIndex:'PRODCATEG_ID',hidden:true,sortable:true}
              ,{ id:"STORABLE",header:this.resourceBundle.FieldLabel.STORABLE||"Storable",width:50,dataIndex:'STORABLE',sortable:true}
              ,{ id:"UOM_CODE",header:this.resourceBundle.FieldLabel.UOM_CODE||"UoM",width:100,dataIndex:'UOM_CODE',hidden:true,sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"EXPENSE_ACCOUNT",header:this.resourceBundle.FieldLabel.EXPENSE_ACCOUNT||"Expense_account",width:100,dataIndex:'EXPENSE_ACCOUNT',hidden:true,sortable:true}
              ,{ id:"REVENUE_ACCOUNT",header:this.resourceBundle.FieldLabel.REVENUE_ACCOUNT||"Revenue_account",width:100,dataIndex:'REVENUE_ACCOUNT',hidden:true,sortable:true}
              ,{ id:"PROD_TYPE",header:this.resourceBundle.FieldLabel.PROD_TYPE||"Prod_type",width:100,dataIndex:'PROD_TYPE',hidden:true,sortable:true}
              ,{ id:"SUMMARY",header:this.resourceBundle.FieldLabel.SUMMARY||"Summary",width:50,dataIndex:'SUMMARY',hidden:true,sortable:true}
              ,{ id:"VOLUME",header:this.resourceBundle.FieldLabel.VOLUME||"Volume",width:100,dataIndex:'VOLUME',hidden:true,sortable:true,align:'right'}
              ,{ id:"WEIGHT",header:this.resourceBundle.FieldLabel.WEIGHT||"Weight",width:100,dataIndex:'WEIGHT',hidden:true,sortable:true,align:'right'}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"FOR_SALE",header:this.resourceBundle.FieldLabel.FOR_SALE||"For_sale",width:50,dataIndex:'FOR_SALE',sortable:true}
          ]
          ,dataComponentName:"DC0039G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0039G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0039G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,CODE:""
              ,NAME:""
              ,PRODCATEG_CODE:""
              ,PRODCATEG_ID:""
              ,STORABLE:""
              ,UOM_CODE:""
              ,DESCRIPTION:""
              ,EXPENSE_ACCOUNT:""
              ,REVENUE_ACCOUNT:""
              ,PROD_TYPE:""
              ,SUMMARY:""
              ,VOLUME:""
              ,WEIGHT:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,FOR_SALE:""});
     }
  });
  Ext.reg("DC0039G", N21.DataComp.DC0039G);
/** 
 * Data Component: DC0039F, Title: Product masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0039F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0039G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0039F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0039F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0039F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0039F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0039F_CODE",dataIndex:"CODE",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0039F_NAME",dataIndex:"NAME",width:250,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRODCATEG_CODE", new N21.DataComp.LOV0014({xtype: "LOV0014",fieldMapping: [{column:"ID",field:"DC0039F_PRODCATEG_ID"}],selectOnFocus:true,name:"PRODCATEG_CODE",id:"DC0039F_PRODCATEG_CODE",dataIndex:"PRODCATEG_CODE",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_CODE||"Product Category",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRODCATEG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PRODCATEG_ID",id:"DC0039F_PRODCATEG_ID",dataIndex:"PRODCATEG_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STORABLE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"STORABLE",id:"DC0039F_STORABLE",dataIndex:"STORABLE",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.STORABLE||"Storable",insert_allowed:true,update_allowed:true})   );
       this.fields.add("UOM_CODE", new N21.DataComp.LOV0002({xtype: "LOV0002",selectOnFocus:true,name:"UOM_CODE",id:"DC0039F_UOM_CODE",dataIndex:"UOM_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"UoM",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DESCRIPTION", new Ext.form.TextArea ({xtype: "textarea",name:"DESCRIPTION",id:"DC0039F_DESCRIPTION",dataIndex:"DESCRIPTION",width:250,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EXPENSE_ACCOUNT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"EXPENSE_ACCOUNT",id:"DC0039F_EXPENSE_ACCOUNT",dataIndex:"EXPENSE_ACCOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EXPENSE_ACCOUNT||"Expense_account",insert_allowed:true,update_allowed:true})   );
       this.fields.add("REVENUE_ACCOUNT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"REVENUE_ACCOUNT",id:"DC0039F_REVENUE_ACCOUNT",dataIndex:"REVENUE_ACCOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.REVENUE_ACCOUNT||"Revenue_account",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROD_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"PROD_TYPE",id:"DC0039F_PROD_TYPE",dataIndex:"PROD_TYPE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PROD_TYPE||"Prod_type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SUMMARY", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"SUMMARY",id:"DC0039F_SUMMARY",dataIndex:"SUMMARY",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.SUMMARY||"Summary",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
                 ,this.fields.get("PRODCATEG_CODE")
                 ,this.fields.get("PRODCATEG_ID")
                 ,this.fields.get("STORABLE")
                 ,this.fields.get("UOM_CODE")
                 ,this.fields.get("DESCRIPTION")
                 ,this.fields.get("EXPENSE_ACCOUNT")
                 ,this.fields.get("REVENUE_ACCOUNT")
                 ,this.fields.get("PROD_TYPE")
                 ,this.fields.get("SUMMARY")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0039F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0039F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0039F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,CODE:""
              ,NAME:""
              ,PRODCATEG_CODE:""
              ,PRODCATEG_ID:""
              ,STORABLE:""
              ,UOM_CODE:""
              ,DESCRIPTION:""
              ,EXPENSE_ACCOUNT:""
              ,REVENUE_ACCOUNT:""
              ,PROD_TYPE:""
              ,SUMMARY:""
              ,VOLUME:""
              ,WEIGHT:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,FOR_SALE:""});
     }


  });
  Ext.reg("DC0039F", N21.DataComp.DC0039F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0039
 * Title: Product masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0039 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0039"
          ,masterName:"DC0039G"
          ,detailName:"DC0039F"
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
                            xtype: "DC0039G"
                           ,id: "DC0039G"
                           ,height:350
                       },{
                           xtype:"DC0039F"
                          ,id:"DC0039F"
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

       N21.DataComp.DC0039.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0039", N21.DataComp.DC0039);



