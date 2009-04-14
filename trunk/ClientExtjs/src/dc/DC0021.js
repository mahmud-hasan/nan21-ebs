/** 
 * Data Component: DC0021G, Title: UI
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0021G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"NBS_STANDARD", type:"string" }
         ,{name:"USER_BUILD", type:"string" }
         ,{name:"DEPRECATED", type:"string" }
         ,{name:"ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0021F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0021F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("NBS_STANDARD",new Ext.form.ComboBox({name:"QRY_NBS_STANDARD",id:"DC0021F_QRY_NBS_STANDARD",fieldLabel: this.resourceBundle.FieldLabel.NBS_STANDARD||"Standard",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("USER_BUILD",new Ext.form.ComboBox({name:"QRY_USER_BUILD",id:"DC0021F_QRY_USER_BUILD",fieldLabel: this.resourceBundle.FieldLabel.USER_BUILD||"User build",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("DEPRECATED",new Ext.form.ComboBox({name:"QRY_DEPRECATED",id:"DC0021F_QRY_DEPRECATED",fieldLabel: this.resourceBundle.FieldLabel.DEPRECATED||"Deprecated",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0021F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CODE","NAME","NBS_STANDARD","USER_BUILD","DEPRECATED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0021"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0021"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:160,dataIndex:'NAME',sortable:true}
              ,{ id:"NBS_STANDARD",header:this.resourceBundle.FieldLabel.NBS_STANDARD||"Standard",width:50,dataIndex:'NBS_STANDARD',sortable:true}
              ,{ id:"USER_BUILD",header:this.resourceBundle.FieldLabel.USER_BUILD||"User build",width:50,dataIndex:'USER_BUILD',sortable:true}
              ,{ id:"DEPRECATED",header:this.resourceBundle.FieldLabel.DEPRECATED||"Deprecated",width:50,dataIndex:'DEPRECATED',sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0021G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0021G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0021G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CODE:""
              ,NAME:""
              ,NBS_STANDARD:""
              ,USER_BUILD:""
              ,DEPRECATED:""
              ,ID:""});
     }
  });
  Ext.reg("DC0021G", N21.DataComp.DC0021G);
/** 
 * Data Component: DC0021F, Title: UI
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0021F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0021G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0021F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0021F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0021F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:30,insert_allowed:true,update_allowed:true}));



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
                 ,this.fields.get("ID")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0021F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0021F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0021F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CODE:""
              ,NAME:""
              ,NBS_STANDARD:""
              ,USER_BUILD:""
              ,DEPRECATED:""
              ,ID:""});
     }


  });
  Ext.reg("DC0021F", N21.DataComp.DC0021F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0021
 * Title: UI
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0021 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0021"
          ,masterName:"DC0021G"
          ,detailName:"DC0021F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0021G",id: "DC0021G",region:"west"  ,split:true,width:500,minWidth:0}
             ,{xtype: "DC0021F",id: "DC0021F",region:"center",split:true,autoScroll:true}
            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_LIST_EDITOR_MODE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_REFRESH_RECORD"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PREV_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEXT_REC"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records in CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0021</span>"          )
        }); 

       N21.DataComp.DC0021.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0021", N21.DataComp.DC0021);



