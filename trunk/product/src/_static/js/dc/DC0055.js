/** 
 * Data Component: DC0055G, Title: Timesheet - charge project issue
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0055G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PROJECT_ISSUE_ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"USER_ACCOUNT", type:"string" }
         ,{name:"CHARGED_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"EFFORT", type:"float" }
         ,{name:"EFFORT_UNIT", type:"string" }
         ,{name:"IS_INSERTED", type:"string" }
         ,{name:"IS_APPROVED", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0055_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("PROJECT_ISSUE_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PROJECT_ISSUE_ID",id:"DC0055_QRY_PROJECT_ISSUE_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0055_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("USER_ACCOUNT", new Ext.form.TextField ({xtype: "textfield",name:"QRY_USER_ACCOUNT",id:"DC0055_QRY_USER_ACCOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.USER_ACCOUNT||"User_account"})  );
         this.queryFields.add("CHARGED_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CHARGED_DATE",id:"DC0055_QRY_CHARGED_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CHARGED_DATE||"Charged_date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("EFFORT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_EFFORT",id:"DC0055_QRY_EFFORT",width:100,fieldLabel: this.resourceBundle.FieldLabel.EFFORT||"Effort",style: "text-align:right;"})  );
         this.queryFields.add("EFFORT_UNIT", new N21.DataComp.LOV0037({xtype: "LOV0037",name:"QRY_EFFORT_UNIT",id:"DC0055_QRY_EFFORT_UNIT",width:100,fieldLabel: this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort_unit"})  );
         this.queryFields.add("IS_INSERTED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_INSERTED",id:"DC0055_QRY_IS_INSERTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted"})  );
         this.queryFields.add("IS_APPROVED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_APPROVED",id:"DC0055_QRY_IS_APPROVED",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved"})  );
  
       this.queryFieldsVisible = [  "USER_ACCOUNT","CHARGED_DATE","EFFORT","EFFORT_UNIT","IS_INSERTED","IS_APPROVED" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0055"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0055"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROJECT_ISSUE_ID",header:this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id",width:100,dataIndex:'PROJECT_ISSUE_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"USER_ACCOUNT",header:this.resourceBundle.FieldLabel.USER_ACCOUNT||"User_account",width:100,dataIndex:'USER_ACCOUNT',hidden:true,sortable:true}
              ,{ id:"CHARGED_DATE",header:this.resourceBundle.FieldLabel.CHARGED_DATE||"Charged_date",width:100,dataIndex:'CHARGED_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"EFFORT",header:this.resourceBundle.FieldLabel.EFFORT||"Effort",width:100,dataIndex:'EFFORT',sortable:true,align:'right'}
              ,{ id:"EFFORT_UNIT",header:this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort_unit",width:100,dataIndex:'EFFORT_UNIT',sortable:true}
              ,{ id:"IS_INSERTED",header:this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",width:50,dataIndex:'IS_INSERTED',hidden:true,sortable:true}
              ,{ id:"IS_APPROVED",header:this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",width:50,dataIndex:'IS_APPROVED',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0055G"
          ,queryArraySize:-1
        });
       N21.DataComp.DC0055G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0055G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ISSUE_ID:""
              ,CLIENT_ID:""
              ,USER_ACCOUNT:""
              ,CHARGED_DATE:""
              ,EFFORT:""
              ,EFFORT_UNIT:""
              ,IS_INSERTED:""
              ,IS_APPROVED:""});
     }
  });
  Ext.reg("DC0055G", N21.DataComp.DC0055G);
/** 
 * Data Component: DC0055F, Title: Timesheet - charge project issue
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0055F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0055G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0055F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROJECT_ISSUE_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PROJECT_ISSUE_ID",id:"DC0055F_PROJECT_ISSUE_ID",dataIndex:"PROJECT_ISSUE_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0055F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("USER_ACCOUNT", new Ext.form.TextField ({xtype: "textfield",name:"USER_ACCOUNT",id:"DC0055F_USER_ACCOUNT",dataIndex:"USER_ACCOUNT",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.USER_ACCOUNT||"User_account",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CHARGED_DATE", new Ext.form.DateField ({xtype: "datefield",name:"CHARGED_DATE",id:"DC0055F_CHARGED_DATE",dataIndex:"CHARGED_DATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CHARGED_DATE||"Charged_date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("EFFORT", new Ext.form.NumberField ({xtype: "numberfield",name:"EFFORT",id:"DC0055F_EFFORT",dataIndex:"EFFORT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.EFFORT||"Effort",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("EFFORT_UNIT", new N21.DataComp.LOV0037({xtype: "LOV0037",selectOnFocus:true,name:"EFFORT_UNIT",id:"DC0055F_EFFORT_UNIT",dataIndex:"EFFORT_UNIT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort_unit",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_INSERTED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_INSERTED",id:"DC0055F_IS_INSERTED",dataIndex:"IS_INSERTED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_INSERTED||"Is_inserted",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_APPROVED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_APPROVED",id:"DC0055F_IS_APPROVED",dataIndex:"IS_APPROVED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_APPROVED||"Is_approved",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("PROJECT_ISSUE_ID")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("USER_ACCOUNT")
                 ,this.fields.get("CHARGED_DATE")
                 ,this.fields.get("EFFORT")
                 ,this.fields.get("EFFORT_UNIT")
                 ,this.fields.get("IS_INSERTED")
                 ,this.fields.get("IS_APPROVED")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0055F"
          ,firstFocusFieldName:"EFFORT"
          ,toolbarConfig:['SAVE','NEW']
        });

        
       N21.DataComp.DC0055F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0055F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ISSUE_ID:""
              ,CLIENT_ID:""
              ,USER_ACCOUNT:""
              ,CHARGED_DATE:""
              ,EFFORT:""
              ,EFFORT_UNIT:""
              ,IS_INSERTED:""
              ,IS_APPROVED:""});
     }


  });
  Ext.reg("DC0055F", N21.DataComp.DC0055F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0055
 * Title: Timesheet - charge project issue
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0055 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0055"
          ,masterName:"DC0055G"
          ,detailName:"DC0055F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0055G",id: "DC0055G",region:"west"  ,split:true,width:"50%",minWidth:0}
             ,{xtype: "DC0055F",id: "DC0055F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0055.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0055", N21.DataComp.DC0055);



