/** 
 * Data Component: DC0035G, Title: Contracts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0035G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CUST_BPARTNER_NAME", type:"string" }
         ,{name:"CUST_BPARTNER_ID", type:"float" }
         ,{name:"SUPP_BPARTNER_ID", type:"float" }
         ,{name:"SUPP_BPARTNER_NAME", type:"string" }
         ,{name:"CONTRTYPE_CODE", type:"string" }
         ,{name:"STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"BPCONTR_NAME", type:"string" }
         ,{name:"BPCONTR_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"CONTRSTAT_CODE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0035_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0035_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0035_QRY_CLIENT_ID"}],name:"QRY_CLIENT_NAME",id:"DC0035_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOC_NO",id:"DC0035_QRY_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no"})  );
         this.queryFields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0035_QRY_DOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("CUST_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CUST_BPARTNER_ID",id:"DC0035_QRY_CUST_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CUST_BPARTNER_ID||"Cust_bpartner_id"})  );
         this.queryFields.add("CUST_BPARTNER_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",fieldMapping: [{column:"ID",field:"DC0035_QRY_CUST_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_CUST_BPARTNER_NAME",id:"DC0035_QRY_CUST_BPARTNER_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CUST_BPARTNER_NAME||"Customer"})  );
         this.queryFields.add("SUPP_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_SUPP_BPARTNER_ID",id:"DC0035_QRY_SUPP_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.SUPP_BPARTNER_ID||"Supp_bpartner_id"})  );
         this.queryFields.add("SUPP_BPARTNER_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",fieldMapping: [{column:"ID",field:"DC0035_QRY_SUPP_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_SUPP_BPARTNER_NAME",id:"DC0035_QRY_SUPP_BPARTNER_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.SUPP_BPARTNER_NAME||"Supplier"})  );
         this.queryFields.add("CONTRTYPE_CODE", new N21.DataComp.LOV0018({xtype: "LOV0018",name:"QRY_CONTRTYPE_CODE",id:"DC0035_QRY_CONTRTYPE_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CONTRTYPE_CODE||"Contract type"})  );
         this.queryFields.add("BPCONTR_NAME", new N21.DataComp.LOV0019({xtype: "LOV0019",displayColumn: "doc_no_full",fieldMapping: [{column:"ID",field:"DC0035_QRY_BPCONTR_ID"}],selectOnFocus:true,name:"QRY_BPCONTR_NAME",id:"DC0035_QRY_BPCONTR_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPCONTR_NAME||"Ref Contract"})  );
         this.queryFields.add("BPCONTR_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPCONTR_ID",id:"DC0035_QRY_BPCONTR_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPCONTR_ID||"Bpcontr_id"})  );
         this.queryFields.add("CONTRSTAT_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CONTRSTAT_CODE",id:"DC0035_QRY_CONTRSTAT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CONTRSTAT_CODE||"Contrstat_code"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","DOC_NO","DOC_DATE","CUST_BPARTNER_NAME","SUPP_BPARTNER_NAME","CONTRTYPE_CODE","BPCONTR_NAME","CONTRSTAT_CODE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0035"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0035"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CUST_BPARTNER_NAME",header:this.resourceBundle.FieldLabel.CUST_BPARTNER_NAME||"Customer",width:200,dataIndex:'CUST_BPARTNER_NAME',sortable:true}
              ,{ id:"CUST_BPARTNER_ID",header:this.resourceBundle.FieldLabel.CUST_BPARTNER_ID||"Cust_bpartner_id",width:100,dataIndex:'CUST_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"SUPP_BPARTNER_ID",header:this.resourceBundle.FieldLabel.SUPP_BPARTNER_ID||"Supp_bpartner_id",width:100,dataIndex:'SUPP_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"SUPP_BPARTNER_NAME",header:this.resourceBundle.FieldLabel.SUPP_BPARTNER_NAME||"Supplier",width:200,dataIndex:'SUPP_BPARTNER_NAME',sortable:true}
              ,{ id:"CONTRTYPE_CODE",header:this.resourceBundle.FieldLabel.CONTRTYPE_CODE||"Contract type",width:100,dataIndex:'CONTRTYPE_CODE',sortable:true}
              ,{ id:"STARTDATE",header:this.resourceBundle.FieldLabel.STARTDATE||"Startdate",width:100,dataIndex:'STARTDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ENDDATE",header:this.resourceBundle.FieldLabel.ENDDATE||"Enddate",width:100,dataIndex:'ENDDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"BPCONTR_NAME",header:this.resourceBundle.FieldLabel.BPCONTR_NAME||"Ref Contract",width:100,dataIndex:'BPCONTR_NAME',hidden:true,sortable:true}
              ,{ id:"BPCONTR_ID",header:this.resourceBundle.FieldLabel.BPCONTR_ID||"Bpcontr_id",width:100,dataIndex:'BPCONTR_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"CONTRSTAT_CODE",header:this.resourceBundle.FieldLabel.CONTRSTAT_CODE||"Contrstat_code",width:100,dataIndex:'CONTRSTAT_CODE',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0035G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0035G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0035G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,CUST_BPARTNER_NAME:""
              ,CUST_BPARTNER_ID:""
              ,SUPP_BPARTNER_ID:""
              ,SUPP_BPARTNER_NAME:""
              ,CONTRTYPE_CODE:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,BPCONTR_NAME:""
              ,BPCONTR_ID:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,CONTRSTAT_CODE:""});
     }
  });
  Ext.reg("DC0035G", N21.DataComp.DC0035G);
/** 
 * Data Component: DC0035F, Title: Contracts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0035F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0035G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0035F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0035F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0035F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0035F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:120,listWidth:138,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0035F_DOC_NO",dataIndex:"DOC_NO",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0035F_DOC_DATE",dataIndex:"DOC_DATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CUST_BPARTNER_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",fieldMapping: [{column:"ID",field:"DC0035F_CUST_BPARTNER_ID"}],selectOnFocus:true,name:"CUST_BPARTNER_NAME",id:"DC0035F_CUST_BPARTNER_NAME",dataIndex:"CUST_BPARTNER_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CUST_BPARTNER_NAME||"Customer",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CUST_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CUST_BPARTNER_ID",id:"DC0035F_CUST_BPARTNER_ID",dataIndex:"CUST_BPARTNER_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CUST_BPARTNER_ID||"Cust_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SUPP_BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"SUPP_BPARTNER_ID",id:"DC0035F_SUPP_BPARTNER_ID",dataIndex:"SUPP_BPARTNER_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.SUPP_BPARTNER_ID||"Supp_bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SUPP_BPARTNER_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",fieldMapping: [{column:"ID",field:"DC0035F_SUPP_BPARTNER_ID"}],selectOnFocus:true,name:"SUPP_BPARTNER_NAME",id:"DC0035F_SUPP_BPARTNER_NAME",dataIndex:"SUPP_BPARTNER_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.SUPP_BPARTNER_NAME||"Supplier",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CONTRTYPE_CODE", new N21.DataComp.LOV0018({xtype: "LOV0018",selectOnFocus:true,name:"CONTRTYPE_CODE",id:"DC0035F_CONTRTYPE_CODE",dataIndex:"CONTRTYPE_CODE",width:120,listWidth:138,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CONTRTYPE_CODE||"Contract type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STARTDATE", new Ext.form.DateField ({xtype: "datefield",name:"STARTDATE",id:"DC0035F_STARTDATE",dataIndex:"STARTDATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.STARTDATE||"Startdate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("ENDDATE", new Ext.form.DateField ({xtype: "datefield",name:"ENDDATE",id:"DC0035F_ENDDATE",dataIndex:"ENDDATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ENDDATE||"Enddate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("BPCONTR_NAME", new N21.DataComp.LOV0019({xtype: "LOV0019",displayColumn: "doc_no_full",fieldMapping: [{column:"ID",field:"DC0035F_BPCONTR_ID"}],selectOnFocus:true,name:"BPCONTR_NAME",id:"DC0035F_BPCONTR_NAME",dataIndex:"BPCONTR_NAME",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BPCONTR_NAME||"Ref Contract",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPCONTR_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPCONTR_ID",id:"DC0035F_BPCONTR_ID",dataIndex:"BPCONTR_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BPCONTR_ID||"Bpcontr_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0035F_NOTES",dataIndex:"NOTES",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CONTRSTAT_CODE", new Ext.form.TextField ({xtype: "textfield",name:"CONTRSTAT_CODE",id:"DC0035F_CONTRSTAT_CODE",dataIndex:"CONTRSTAT_CODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CONTRSTAT_CODE||"Contrstat_code",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("DOC_NO")
                 ,this.fields.get("DOC_DATE")
                 ,this.fields.get("CUST_BPARTNER_NAME")
                 ,this.fields.get("CUST_BPARTNER_ID")
                 ,this.fields.get("SUPP_BPARTNER_ID")
                 ,this.fields.get("SUPP_BPARTNER_NAME")
                 ,this.fields.get("CONTRTYPE_CODE")
                 ,this.fields.get("STARTDATE")
                 ,this.fields.get("ENDDATE")
                 ,this.fields.get("BPCONTR_NAME")
                 ,this.fields.get("BPCONTR_ID")
                 ,this.fields.get("NOTES")
                 ,this.fields.get("CONTRSTAT_CODE")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0035F"
          ,firstFocusFieldName:"DOC_NO"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0035F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0035F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,CUST_BPARTNER_NAME:""
              ,CUST_BPARTNER_ID:""
              ,SUPP_BPARTNER_ID:""
              ,SUPP_BPARTNER_NAME:""
              ,CONTRTYPE_CODE:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,BPCONTR_NAME:""
              ,BPCONTR_ID:""
              ,NOTES:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,CONTRSTAT_CODE:""});
     }


  });
  Ext.reg("DC0035F", N21.DataComp.DC0035F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0035
 * Title: Contracts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0035 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0035"
          ,masterName:"DC0035G"
          ,detailName:"DC0035F"
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
                            xtype: "DC0035G"
                           ,id: "DC0035G"
                           ,height:350
                       },{
                           xtype:"DC0035F"
                          ,id:"DC0035F"
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

       N21.DataComp.DC0035.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0035", N21.DataComp.DC0035);



