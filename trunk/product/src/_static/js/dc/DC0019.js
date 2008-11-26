/** 
 * Data Component: DC0019G, Title: Tasks
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0019G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"TITLE", type:"string" }
         ,{name:"ASSIGNED_TO", type:"string" }
         ,{name:"START_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"FINISH_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"STATUS", type:"string" }
         ,{name:"CLOSED", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("TITLE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_TITLE",id:"DC0019_QRY_TITLE",width:100,fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title"})  );
         this.queryFields.add("STATUS", new Ext.form.TextField ({xtype: "textfield",name:"QRY_STATUS",id:"DC0019_QRY_STATUS",width:100,fieldLabel: this.resourceBundle.FieldLabel.STATUS||"Status"})  );
         this.queryFields.add("CLOSED", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_CLOSED",id:"DC0019_QRY_CLOSED",width:40,fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed"})  );
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0019_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
  
       this.queryFieldsVisible = [  "TITLE","STATUS","CLOSED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0019"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0019"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"TITLE",header:this.resourceBundle.FieldLabel.TITLE||"Title",width:200,dataIndex:'TITLE',sortable:true}
              ,{ id:"ASSIGNED_TO",header:this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned to",width:100,dataIndex:'ASSIGNED_TO',sortable:true}
              ,{ id:"START_DATE",header:this.resourceBundle.FieldLabel.START_DATE||"Start date",width:100,dataIndex:'START_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"FINISH_DATE",header:this.resourceBundle.FieldLabel.FINISH_DATE||"Finish date",width:100,dataIndex:'FINISH_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"STATUS",header:this.resourceBundle.FieldLabel.STATUS||"Status",width:100,dataIndex:'STATUS',sortable:true}
              ,{ id:"CLOSED",header:this.resourceBundle.FieldLabel.CLOSED||"Closed",width:50,dataIndex:'CLOSED',sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',sortable:true}
          ]
          ,dataComponentName:"DC0019G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0019G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0019G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,TITLE:""
              ,ASSIGNED_TO:""
              ,START_DATE:""
              ,FINISH_DATE:""
              ,STATUS:""
              ,CLOSED:""
              ,NOTES:""
              ,ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0019G", N21.DataComp.DC0019G);
/** 
 * Data Component: DC0019F, Title: Tasks
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0019F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0019G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("TITLE", new Ext.form.TextField ({xtype: "textfield",name:"TITLE",id:"DC0019F_TITLE",dataIndex:"TITLE",width:350,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ASSIGNED_TO", new Ext.form.TextField ({xtype: "textfield",name:"ASSIGNED_TO",id:"DC0019F_ASSIGNED_TO",dataIndex:"ASSIGNED_TO",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("START_DATE", new Ext.form.DateField ({xtype: "datefield",name:"START_DATE",id:"DC0019F_START_DATE",dataIndex:"START_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.START_DATE||"Start date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("FINISH_DATE", new Ext.form.DateField ({xtype: "datefield",name:"FINISH_DATE",id:"DC0019F_FINISH_DATE",dataIndex:"FINISH_DATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.FINISH_DATE||"Finish date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("STATUS", new Ext.form.TextField ({xtype: "textfield",name:"STATUS",id:"DC0019F_STATUS",dataIndex:"STATUS",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.STATUS||"Status",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLOSED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"CLOSED",id:"DC0019F_CLOSED",dataIndex:"CLOSED",width:20,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0019F_NOTES",dataIndex:"NOTES",width:400,height:120,allowBlank:true,labelSeparator: "",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0019F_ID",dataIndex:"ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("Notes",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Notes||"Notes",autoHeight:true,collapsible: true,labelWidth:1,width:"90%",items:[ this.fields.get("NOTES")]});
       this.layoutItems.add("c2",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("ID"),this.layoutItems.get("Notes")]}); 
       this.layoutItems.add("c1",
             { layout:"form",columnWidth:.5, items:[ this.fields.get("TITLE"),this.fields.get("ASSIGNED_TO"),this.fields.get("START_DATE"),this.fields.get("FINISH_DATE"),this.fields.get("STATUS"),this.fields.get("CLOSED")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("c1"),this.layoutItems.get("c2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0019F"
          ,firstFocusFieldName:"TITLE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0019F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0019F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,TITLE:""
              ,ASSIGNED_TO:""
              ,START_DATE:""
              ,FINISH_DATE:""
              ,STATUS:""
              ,CLOSED:""
              ,NOTES:""
              ,ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0019F", N21.DataComp.DC0019F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0019
 * Title: Tasks
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0019 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0019"
          ,masterName:"DC0019G"
          ,detailName:"DC0019F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0019G",id: "DC0019G",region:"north" ,split:true,height:280,minHeight:0}
             ,{xtype: "DC0019F",id: "DC0019F",region:"center",split:true,autoScroll:true}
            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_66"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_73"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_68"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_65"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_67"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_72"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_70"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_69"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_71"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0019.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0019", N21.DataComp.DC0019);



