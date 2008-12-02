/** 
 * Data Component: DC0024G, Title: Accounting period
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0024G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"ACCYEAR", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ID", type:"float" }
         ,{name:"CLOSED", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"PREV_PERIOD_NAME", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"PERIODTYPE", type:"string" }
         ,{name:"PROCESSING", type:"string" }
         ,{name:"OPENED", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0024_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",name:"QRY_CLIENT_NAME",id:"DC0024_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("ACCYEAR", new N21.DataComp.LOV0011({xtype: "LOV0011",displayColumn: "NAME",name:"QRY_ACCYEAR",id:"DC0024_QRY_ACCYEAR",width:100,fieldLabel: this.resourceBundle.FieldLabel.ACCYEAR||"Accyear"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0024_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0024_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLOSED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_CLOSED",id:"DC0024_QRY_CLOSED",width:40,fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","ACCYEAR","NAME","CLOSED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0024"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0024"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"ACCYEAR",header:this.resourceBundle.FieldLabel.ACCYEAR||"Accyear",width:100,dataIndex:'ACCYEAR',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
              ,{ id:"STARTDATE",header:this.resourceBundle.FieldLabel.STARTDATE||"Startdate",width:100,dataIndex:'STARTDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ENDDATE",header:this.resourceBundle.FieldLabel.ENDDATE||"Enddate",width:100,dataIndex:'ENDDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLOSED",header:this.resourceBundle.FieldLabel.CLOSED||"Closed",width:50,dataIndex:'CLOSED',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"PREV_PERIOD_NAME",header:this.resourceBundle.FieldLabel.PREV_PERIOD_NAME||"Prev_period_name",width:100,dataIndex:'PREV_PERIOD_NAME',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"PERIODTYPE",header:this.resourceBundle.FieldLabel.PERIODTYPE||"Periodtype",width:100,dataIndex:'PERIODTYPE',hidden:true,sortable:true}
              ,{ id:"PROCESSING",header:this.resourceBundle.FieldLabel.PROCESSING||"Processing",width:100,dataIndex:'PROCESSING',hidden:true,sortable:true}
              ,{ id:"OPENED",header:this.resourceBundle.FieldLabel.OPENED||"Opened",width:50,dataIndex:'OPENED',sortable:true}
          ]
          ,dataComponentName:"DC0024G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0024G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0024G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,ACCYEAR:""
              ,NAME:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,ID:""
              ,CLOSED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,PREV_PERIOD_NAME:""
              ,NOTES:""
              ,PERIODTYPE:""
              ,PROCESSING:""
              ,OPENED:""});
     }
  });
  Ext.reg("DC0024G", N21.DataComp.DC0024G);
/** 
 * Data Component: DC0024F, Title: Accounting period
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0024F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0024G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0024F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0024F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0024F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCYEAR", new N21.DataComp.LOV0011({xtype: "LOV0011",displayColumn: "NAME",selectOnFocus:true,name:"ACCYEAR",id:"DC0024F_ACCYEAR",dataIndex:"ACCYEAR",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACCYEAR||"Accyear",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0024F_NAME",dataIndex:"NAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STARTDATE", new Ext.form.DateField ({xtype: "datefield",name:"STARTDATE",id:"DC0024F_STARTDATE",dataIndex:"STARTDATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.STARTDATE||"Startdate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("ENDDATE", new Ext.form.DateField ({xtype: "datefield",name:"ENDDATE",id:"DC0024F_ENDDATE",dataIndex:"ENDDATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ENDDATE||"Enddate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0024F_ID",dataIndex:"ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("ACCYEAR")
                 ,this.fields.get("NAME")
                 ,this.fields.get("STARTDATE")
                 ,this.fields.get("ENDDATE")
                 ,this.fields.get("ID")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0024F"
          ,firstFocusFieldName:"CLIENT_NAME"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0024F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0024F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,ACCYEAR:""
              ,NAME:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,ID:""
              ,CLOSED:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,PREV_PERIOD_NAME:""
              ,NOTES:""
              ,PERIODTYPE:""
              ,PROCESSING:""
              ,OPENED:""});
     }


  });
  Ext.reg("DC0024F", N21.DataComp.DC0024F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0024
 * Title: Accounting period
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0024 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0024"
          ,masterName:"DC0024G"
          ,detailName:"DC0024F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0024G",id: "DC0024G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0024F",id: "DC0024F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0024.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0024", N21.DataComp.DC0024);



