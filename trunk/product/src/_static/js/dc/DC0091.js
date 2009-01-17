/** 
 * Data Component: DC0091G, Title: Oracle sessions
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0091G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"SID", type:"string" }
         ,{name:"SERIAL_", type:"string" }
         ,{name:"USERNAME", type:"string" }
         ,{name:"STATUS", type:"string" }
         ,{name:"MACHINE", type:"string" }
         ,{name:"TERMINAL", type:"string" }
         ,{name:"OSUSER", type:"string" }
         ,{name:"PROGRAM", type:"string" }
         ,{name:"TYPE", type:"string" }
         ,{name:"LOGON_TIME", type:"string" }
         ,{name:"SADDR", type:"string" }
         ,{name:"SERVER", type:"string" }
         ,{name:"SCHEMANAME", type:"string" }
         ,{name:"PROCESS", type:"string" }
         ,{name:"SQL_ADDRESS", type:"string" }
         ,{name:"SQL_ID", type:"string" }
         ,{name:"MODULE", type:"string" }
         ,{name:"CLIENT_INFO", type:"string" }
         ,{name:"STATE", type:"string" }
         ,{name:"SERVICE_NAME", type:"string" }
         ,{name:"SQL_TEXT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "SERIAL_","SID"]
    ,initComponent:function() {
       
         this.queryFields.add("SQL_TEXT", new Ext.form.TextArea ({xtype: "textarea",name:"QRY_SQL_TEXT",id:"DC0091_QRY_SQL_TEXT",width:100,fieldLabel: this.resourceBundle.FieldLabel.SQL_TEXT||"Sql_text"})  );
  
       this.queryFieldsVisible = [  "SQL_TEXT" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0091"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0091"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"SID",header:this.resourceBundle.FieldLabel.SID||"Sid",width:100,dataIndex:'SID',sortable:true}
              ,{ id:"SERIAL_",header:this.resourceBundle.FieldLabel.SERIAL_||"Serial_",width:100,dataIndex:'SERIAL_',sortable:true}
              ,{ id:"USERNAME",header:this.resourceBundle.FieldLabel.USERNAME||"Username",width:100,dataIndex:'USERNAME',sortable:true}
              ,{ id:"STATUS",header:this.resourceBundle.FieldLabel.STATUS||"Status",width:100,dataIndex:'STATUS',sortable:true}
              ,{ id:"MACHINE",header:this.resourceBundle.FieldLabel.MACHINE||"Machine",width:100,dataIndex:'MACHINE',sortable:true}
              ,{ id:"TERMINAL",header:this.resourceBundle.FieldLabel.TERMINAL||"Terminal",width:100,dataIndex:'TERMINAL',sortable:true}
              ,{ id:"OSUSER",header:this.resourceBundle.FieldLabel.OSUSER||"Osuser",width:100,dataIndex:'OSUSER',sortable:true}
              ,{ id:"PROGRAM",header:this.resourceBundle.FieldLabel.PROGRAM||"Program",width:100,dataIndex:'PROGRAM',sortable:true}
              ,{ id:"TYPE",header:this.resourceBundle.FieldLabel.TYPE||"Type",width:100,dataIndex:'TYPE',sortable:true}
              ,{ id:"LOGON_TIME",header:this.resourceBundle.FieldLabel.LOGON_TIME||"Logon_time",width:100,dataIndex:'LOGON_TIME',sortable:true}
              ,{ id:"SADDR",header:this.resourceBundle.FieldLabel.SADDR||"Saddr",width:100,dataIndex:'SADDR',hidden:true,sortable:true}
              ,{ id:"SERVER",header:this.resourceBundle.FieldLabel.SERVER||"Server",width:100,dataIndex:'SERVER',sortable:true}
              ,{ id:"SCHEMANAME",header:this.resourceBundle.FieldLabel.SCHEMANAME||"Schemaname",width:100,dataIndex:'SCHEMANAME',sortable:true}
              ,{ id:"PROCESS",header:this.resourceBundle.FieldLabel.PROCESS||"Process",width:100,dataIndex:'PROCESS',sortable:true}
              ,{ id:"SQL_ADDRESS",header:this.resourceBundle.FieldLabel.SQL_ADDRESS||"Sql_address",width:100,dataIndex:'SQL_ADDRESS',hidden:true,sortable:true}
              ,{ id:"SQL_ID",header:this.resourceBundle.FieldLabel.SQL_ID||"Sql_id",width:100,dataIndex:'SQL_ID',hidden:true,sortable:true}
              ,{ id:"MODULE",header:this.resourceBundle.FieldLabel.MODULE||"Module",width:100,dataIndex:'MODULE',sortable:true}
              ,{ id:"CLIENT_INFO",header:this.resourceBundle.FieldLabel.CLIENT_INFO||"Client_info",width:100,dataIndex:'CLIENT_INFO',hidden:true,sortable:true}
              ,{ id:"STATE",header:this.resourceBundle.FieldLabel.STATE||"State",width:100,dataIndex:'STATE',sortable:true}
              ,{ id:"SERVICE_NAME",header:this.resourceBundle.FieldLabel.SERVICE_NAME||"Service_name",width:100,dataIndex:'SERVICE_NAME',sortable:true}
              ,{ id:"SQL_TEXT",header:this.resourceBundle.FieldLabel.SQL_TEXT||"Sql_text",width:100,dataIndex:'SQL_TEXT',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0091G"
          ,queryArraySize:40
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0091G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0091G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,SID:""
              ,SERIAL_:""
              ,USERNAME:""
              ,STATUS:""
              ,MACHINE:""
              ,TERMINAL:""
              ,OSUSER:""
              ,PROGRAM:""
              ,TYPE:""
              ,LOGON_TIME:""
              ,SADDR:""
              ,SERVER:""
              ,SCHEMANAME:""
              ,PROCESS:""
              ,SQL_ADDRESS:""
              ,SQL_ID:""
              ,MODULE:""
              ,CLIENT_INFO:""
              ,STATE:""
              ,SERVICE_NAME:""
              ,SQL_TEXT:""});
     }
  });
  Ext.reg("DC0091G", N21.DataComp.DC0091G);
/** 
 * Data Component: DC0091F, Title: Oracle sessions
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0091F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0091G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("SID", new Ext.form.Hidden ({xtype: "hidden",name:"SID",id:"DC0091F_SID",dataIndex:"SID",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.SID||"Sid",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SERIAL_", new Ext.form.TextField ({xtype: "textfield",name:"SERIAL_",id:"DC0091F_SERIAL_",dataIndex:"SERIAL_",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.SERIAL_||"Serial_",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SQL_TEXT", new Ext.form.TextArea ({xtype: "textarea",name:"SQL_TEXT",id:"DC0091F_SQL_TEXT",dataIndex:"SQL_TEXT",width:400,height:400,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.SQL_TEXT||"Sql_text",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("SID")
                 ,this.fields.get("SERIAL_")
                 ,this.fields.get("SQL_TEXT")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0091F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0091F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0091F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,SID:""
              ,SERIAL_:""
              ,USERNAME:""
              ,STATUS:""
              ,MACHINE:""
              ,TERMINAL:""
              ,OSUSER:""
              ,PROGRAM:""
              ,TYPE:""
              ,LOGON_TIME:""
              ,SADDR:""
              ,SERVER:""
              ,SCHEMANAME:""
              ,PROCESS:""
              ,SQL_ADDRESS:""
              ,SQL_ID:""
              ,MODULE:""
              ,CLIENT_INFO:""
              ,STATE:""
              ,SERVICE_NAME:""
              ,SQL_TEXT:""});
     }


  });
  Ext.reg("DC0091F", N21.DataComp.DC0091F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0091
 * Title: Oracle sessions
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0091 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0091"
          ,masterName:"DC0091G"
          ,detailName:"DC0091F"
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
                            xtype: "DC0091G"
                           ,id: "DC0091G"
                           ,height:350
                       },{
                           xtype:"DC0091F"
                          ,id:"DC0091F"
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

       N21.DataComp.DC0091.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0091", N21.DataComp.DC0091);



