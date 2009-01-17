/** 
 * Data Component: DC0082G, Title: Organizations hierarchy
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0082G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"ORG_TYPE", type:"string" }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"COSTMETHOD_CODE", type:"string" }
         ,{name:"COSTCENTER_NAME", type:"string" }
         ,{name:"COSTCENTER_ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"ACTIVE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0082_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0082_QRY_CLIENT_ID"}],name:"QRY_CLIENT_CODE",id:"DC0082_QRY_CLIENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0082_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0082_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("ORG_TYPE", new N21.DataComp.LOV0050({xtype: "LOV0050",name:"QRY_ORG_TYPE",id:"DC0082_QRY_ORG_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORG_TYPE||"Org. type"})  );
         this.queryFields.add("ORG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ORG_ID",id:"DC0082_QRY_ORG_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Parent org ID"})  );
         this.queryFields.add("COSTCENTER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_COSTCENTER_ID",id:"DC0082_QRY_COSTCENTER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.COSTCENTER_ID||"Cost center ID"})  );
         this.queryFields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0082_QRY_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner ID"})  );
         this.queryFields.add("ACTIVE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0082_QRY_ACTIVE",width:40,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"})  );
  
       this.queryFieldsVisible = [  "CLIENT_CODE","NAME","ORG_TYPE","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0082"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0082"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{ id:"ORG_TYPE",header:this.resourceBundle.FieldLabel.ORG_TYPE||"Org. type",width:100,dataIndex:'ORG_TYPE',sortable:true}
              ,{ id:"ORG_ID",header:this.resourceBundle.FieldLabel.ORG_ID||"Parent org ID",width:100,dataIndex:'ORG_ID',hidden:true,sortable:true}
              ,{ id:"COSTMETHOD_CODE",header:this.resourceBundle.FieldLabel.COSTMETHOD_CODE||"Costing method",width:100,dataIndex:'COSTMETHOD_CODE',sortable:true}
              ,{ id:"COSTCENTER_NAME",header:this.resourceBundle.FieldLabel.COSTCENTER_NAME||"Cost center",width:100,dataIndex:'COSTCENTER_NAME',sortable:true}
              ,{ id:"COSTCENTER_ID",header:this.resourceBundle.FieldLabel.COSTCENTER_ID||"Cost center ID",width:40,dataIndex:'COSTCENTER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner ID",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:40,dataIndex:'ACTIVE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0082G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0082G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0082G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,NAME:""
              ,ORG_TYPE:""
              ,ORG_ID:""
              ,COSTMETHOD_CODE:""
              ,COSTCENTER_NAME:""
              ,COSTCENTER_ID:""
              ,BPARTNER_ID:""
              ,NOTES:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0082G", N21.DataComp.DC0082G);
/** 
 * Data Component: DC0082F, Title: Organizations hierarchy
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0082F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0082G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0082F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0082F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_CODE",id:"DC0082F_CLIENT_CODE",dataIndex:"CLIENT_CODE",width:100,listWidth:118,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0082F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0082F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ORG_TYPE", new N21.DataComp.LOV0050({xtype: "LOV0050",selectOnFocus:true,name:"ORG_TYPE",id:"DC0082F_ORG_TYPE",dataIndex:"ORG_TYPE",width:80,listWidth:98,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ORG_TYPE||"Org. type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ORG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ORG_ID",id:"DC0082F_ORG_ID",dataIndex:"ORG_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Parent org ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("COSTMETHOD_CODE", new N21.DataComp.LOV0049({xtype: "LOV0049",selectOnFocus:true,name:"COSTMETHOD_CODE",id:"DC0082F_COSTMETHOD_CODE",dataIndex:"COSTMETHOD_CODE",width:80,listWidth:98,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.COSTMETHOD_CODE||"Costing method",insert_allowed:true,update_allowed:true})   );
       this.fields.add("COSTCENTER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"COSTCENTER_ID",id:"DC0082F_COSTCENTER_ID",dataIndex:"COSTCENTER_ID",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.COSTCENTER_ID||"Cost center ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("COSTCENTER_NAME", new N21.DataComp.LOV0048({xtype: "LOV0048",fieldMapping: [{column:"ID",field:"DC0082F_COSTCENTER_ID"}],paramMapping: [{param:"p_client_id",field:"DC0082F.CLIENT_ID"}],selectOnFocus:true,name:"COSTCENTER_NAME",id:"DC0082F_COSTCENTER_NAME",dataIndex:"COSTCENTER_NAME",width:150,listWidth:168,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.COSTCENTER_NAME||"Cost center",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_ID",id:"DC0082F_BPARTNER_ID",dataIndex:"BPARTNER_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0082F_NOTES",dataIndex:"NOTES",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACTIVE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACTIVE",id:"DC0082F_ACTIVE",dataIndex:"ACTIVE",width:50,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_CODE")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("NAME")
                 ,this.fields.get("ORG_TYPE")
                 ,this.fields.get("ORG_ID")
                 ,this.fields.get("COSTMETHOD_CODE")
                 ,this.fields.get("COSTCENTER_ID")
                 ,this.fields.get("COSTCENTER_NAME")
                 ,this.fields.get("BPARTNER_ID")
                 ,this.fields.get("NOTES")
                 ,this.fields.get("ACTIVE")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0082F"
          ,firstFocusFieldName:"NAME"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0082F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0082F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,NAME:""
              ,ORG_TYPE:""
              ,ORG_ID:""
              ,COSTMETHOD_CODE:""
              ,COSTCENTER_NAME:""
              ,COSTCENTER_ID:""
              ,BPARTNER_ID:""
              ,NOTES:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0082F", N21.DataComp.DC0082F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0082
 * Title: Organizations hierarchy
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0082 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0082"
          ,masterName:"DC0082G"
          ,detailName:"DC0082F"
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
                            xtype: "DC0082G"
                           ,id: "DC0082G"
                           ,height:350
                       },{
                           xtype:"DC0082F"
                          ,id:"DC0082F"
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

       N21.DataComp.DC0082.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0082", N21.DataComp.DC0082);



