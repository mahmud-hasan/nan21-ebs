/** 
 * Data Component: DC0023G, Title: Accounting year
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0023G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CLOSED", type:"string" }
         ,{name:"ID", type:"float" }
         ,{name:"PREV_YEAR_NAME", type:"string" }
         ,{name:"NEXT_YEAR_NAME", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"NOTES", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0023_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0023_QRY_CLIENT_ID"}],name:"QRY_CLIENT_NAME",id:"DC0023_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0023_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("CLOSED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_CLOSED",id:"DC0023_QRY_CLOSED",width:40,fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Is open"})  );
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0023_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","NAME","CLOSED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0023"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0023"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
              ,{ id:"STARTDATE",header:this.resourceBundle.FieldLabel.STARTDATE||"Startdate",width:100,dataIndex:'STARTDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ENDDATE",header:this.resourceBundle.FieldLabel.ENDDATE||"Enddate",width:100,dataIndex:'ENDDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CLOSED",header:this.resourceBundle.FieldLabel.CLOSED||"Is open",width:50,dataIndex:'CLOSED',sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PREV_YEAR_NAME",header:this.resourceBundle.FieldLabel.PREV_YEAR_NAME||"Prev_year_name",width:100,dataIndex:'PREV_YEAR_NAME',hidden:true,sortable:true}
              ,{ id:"NEXT_YEAR_NAME",header:this.resourceBundle.FieldLabel.NEXT_YEAR_NAME||"Next_year_name",width:100,dataIndex:'NEXT_YEAR_NAME',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0023G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0023G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0023G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,NAME:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,CLOSED:""
              ,ID:""
              ,PREV_YEAR_NAME:""
              ,NEXT_YEAR_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,NOTES:""});
     }
  });
  Ext.reg("DC0023G", N21.DataComp.DC0023G);
/** 
 * Data Component: DC0023F, Title: Accounting year
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0023F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0023G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0023F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0023F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0023F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:200,listWidth:218,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0023F_NAME",dataIndex:"NAME",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STARTDATE", new Ext.form.DateField ({xtype: "datefield",name:"STARTDATE",id:"DC0023F_STARTDATE",dataIndex:"STARTDATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.STARTDATE||"Startdate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("ENDDATE", new Ext.form.DateField ({xtype: "datefield",name:"ENDDATE",id:"DC0023F_ENDDATE",dataIndex:"ENDDATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ENDDATE||"Enddate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CLOSED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"CLOSED",id:"DC0023F_CLOSED",dataIndex:"CLOSED",width:30,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Is open",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PREV_YEAR_NAME", new Ext.form.TextField ({xtype: "textfield",name:"PREV_YEAR_NAME",id:"DC0023F_PREV_YEAR_NAME",dataIndex:"PREV_YEAR_NAME",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PREV_YEAR_NAME||"Prev_year_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NEXT_YEAR_NAME", new Ext.form.TextField ({xtype: "textfield",name:"NEXT_YEAR_NAME",id:"DC0023F_NEXT_YEAR_NAME",dataIndex:"NEXT_YEAR_NAME",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NEXT_YEAR_NAME||"Next_year_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0023F_NOTES",dataIndex:"NOTES",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("NAME")
                 ,this.fields.get("STARTDATE")
                 ,this.fields.get("ENDDATE")
                 ,this.fields.get("CLOSED")
                 ,this.fields.get("PREV_YEAR_NAME")
                 ,this.fields.get("NEXT_YEAR_NAME")
                 ,this.fields.get("NOTES")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0023F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0023F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0023F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,NAME:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,CLOSED:""
              ,ID:""
              ,PREV_YEAR_NAME:""
              ,NEXT_YEAR_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,NOTES:""});
     }


  });
  Ext.reg("DC0023F", N21.DataComp.DC0023F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0023
 * Title: Accounting year
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0023 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0023"
          ,masterName:"DC0023G"
          ,detailName:"DC0023F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0023G",id: "DC0023G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0023F",id: "DC0023F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0023.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0023", N21.DataComp.DC0023);



