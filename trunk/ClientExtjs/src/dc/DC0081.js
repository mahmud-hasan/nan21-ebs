/** 
 * Data Component: DC0081G, Title: Business units
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0081G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"BPARTNER_NAME", type:"string" }
         ,{name:"DEFAULT_CLIENT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0081F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0081F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner ID",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_NAME",new  N21.DataComp.LOV0009({name:"QRY_BPARTNER_NAME",id:"DC0081F_QRY_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Linked business partner",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0081F_QRY_BPARTNER_ID"}]}));
  
       this.queryFieldsVisible = [  "BPARTNER_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0081"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0081"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner ID",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_NAME||"Linked business partner",width:100,dataIndex:'BPARTNER_NAME',hidden:true,sortable:true}
              ,{ id:"DEFAULT_CLIENT",header:this.resourceBundle.FieldLabel.DEFAULT_CLIENT||"Default?",width:100,dataIndex:'DEFAULT_CLIENT',sortable:true}
          ]
          ,dataComponentName:"DC0081G"
          ,queryArraySize:-1
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0081G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0081G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,DEFAULT_CLIENT:""});
     }
  });
  Ext.reg("DC0081G", N21.DataComp.DC0081G);
/** 
 * Data Component: DC0081F, Title: Business units
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0081F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0081G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0081F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0081F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",caseRestriction:"Upper",width:120,insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;"}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0081F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_ID",new Ext.form.Hidden({name:"BPARTNER_ID",id:"DC0081F_BPARTNER_ID",dataIndex:"BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_NAME",new  N21.DataComp.LOV0009({name:"BPARTNER_NAME",id:"DC0081F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Linked business partner",allowBlank:true,width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0081F_BPARTNER_ID"}]}));
       this.fields.add("DEFAULT_CLIENT",new Ext.ux.form.XCheckbox({name:"DEFAULT_CLIENT",id:"DC0081F_DEFAULT_CLIENT",dataIndex:"DEFAULT_CLIENT",fieldLabel: this.resourceBundle.FieldLabel.DEFAULT_CLIENT||"Default?",allowBlank:true,insert_allowed:true,update_allowed:true}));



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
                 ,this.fields.get("BPARTNER_ID")
                 ,this.fields.get("BPARTNER_NAME")
                 ,this.fields.get("DEFAULT_CLIENT")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0081F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0081F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0081F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,DEFAULT_CLIENT:""});
     }


  });
  Ext.reg("DC0081F", N21.DataComp.DC0081F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0081
 * Title: Business units
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0081 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0081"
          ,masterName:"DC0081G"
          ,detailName:"DC0081F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0081G",id: "DC0081G",region:"west"  ,split:true,width:350,minWidth:0}
             ,{xtype: "DC0081F",id: "DC0081F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0081</span>"          )
        }); 

       N21.DataComp.DC0081.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0081", N21.DataComp.DC0081);



