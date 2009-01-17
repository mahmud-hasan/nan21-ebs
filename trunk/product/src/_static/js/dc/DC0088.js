/** 
 * Data Component: DC0088G, Title: Org. stock locations
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0088G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"ORGINV_ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"IS_DEFAULT", type:"string" }
         ,{name:"STOCKLOC_TYPE", type:"string" }
         ,{name:"IS_VIRTUAL", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0088_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0088_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID"})  );
         this.queryFields.add("ORG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ORG_ID",id:"DC0088_QRY_ORG_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org. ID"})  );
         this.queryFields.add("ORGINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ORGINV_ID",id:"DC0088_QRY_ORGINV_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORGINV_ID||"Org. inventory ID"})  );
  
       this.queryFieldsVisible = [  ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0088"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0088"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"ORG_ID",header:this.resourceBundle.FieldLabel.ORG_ID||"Org. ID",width:100,dataIndex:'ORG_ID',hidden:true,sortable:true}
              ,{ id:"ORGINV_ID",header:this.resourceBundle.FieldLabel.ORGINV_ID||"Org. inventory ID",width:100,dataIndex:'ORGINV_ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"IS_DEFAULT",header:this.resourceBundle.FieldLabel.IS_DEFAULT||"Default?",width:100,dataIndex:'IS_DEFAULT',sortable:true}
              ,{ id:"STOCKLOC_TYPE",header:this.resourceBundle.FieldLabel.STOCKLOC_TYPE||"Type",width:100,dataIndex:'STOCKLOC_TYPE',sortable:true}
              ,{ id:"IS_VIRTUAL",header:this.resourceBundle.FieldLabel.IS_VIRTUAL||"Virtual?",width:100,dataIndex:'IS_VIRTUAL',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0088G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0088G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0088G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,ORG_ID:""
              ,ORGINV_ID:""
              ,CODE:""
              ,DESCRIPTION:""
              ,IS_DEFAULT:""
              ,STOCKLOC_TYPE:""
              ,IS_VIRTUAL:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0088G", N21.DataComp.DC0088G);
/** 
 * Data Component: DC0088F, Title: Org. stock locations
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0088F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0088G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0088F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0088F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ORG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ORG_ID",id:"DC0088F_ORG_ID",dataIndex:"ORG_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org. ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ORGINV_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ORGINV_ID",id:"DC0088F_ORGINV_ID",dataIndex:"ORGINV_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ORGINV_ID||"Org. inventory ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0088F_CODE",dataIndex:"CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DESCRIPTION", new Ext.form.TextArea ({xtype: "textarea",name:"DESCRIPTION",id:"DC0088F_DESCRIPTION",dataIndex:"DESCRIPTION",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_DEFAULT", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_DEFAULT",id:"DC0088F_IS_DEFAULT",dataIndex:"IS_DEFAULT",width:50,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.IS_DEFAULT||"Default?",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STOCKLOC_TYPE", new N21.DataComp.LOV0054({xtype: "LOV0054",selectOnFocus:true,name:"STOCKLOC_TYPE",id:"DC0088F_STOCKLOC_TYPE",dataIndex:"STOCKLOC_TYPE",width:80,listWidth:98,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.STOCKLOC_TYPE||"Type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_VIRTUAL", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_VIRTUAL",id:"DC0088F_IS_VIRTUAL",dataIndex:"IS_VIRTUAL",width:50,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.IS_VIRTUAL||"Virtual?",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("C2",
             { layout:"form",width:250,labelAlign:"top", items:[ this.fields.get("DESCRIPTION")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",width:300, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("ORG_ID"),this.fields.get("ORGINV_ID"),this.fields.get("CODE"),this.fields.get("STOCKLOC_TYPE"),this.fields.get("IS_DEFAULT"),this.fields.get("IS_VIRTUAL")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0088F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0088F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0088F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,ORG_ID:""
              ,ORGINV_ID:""
              ,CODE:""
              ,DESCRIPTION:""
              ,IS_DEFAULT:""
              ,STOCKLOC_TYPE:""
              ,IS_VIRTUAL:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0088F", N21.DataComp.DC0088F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0088
 * Title: Org. stock locations
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0088 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0088"
          ,masterName:"DC0088G"
          ,detailName:"DC0088F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0088G",id: "DC0088G",region:"north" ,split:true,height:250,minHeight:0}
             ,{xtype: "DC0088F",id: "DC0088F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0088.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0088", N21.DataComp.DC0088);



