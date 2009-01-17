/** 
 * Data Component: DC0038G, Title: Product categories
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0038G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"PRODCATEG_ID", type:"float" }
         ,{name:"PRODCATEG_NAME", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
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
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0038_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0038_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0038_QRY_CLIENT_ID"}],name:"QRY_CLIENT_NAME",id:"DC0038_QRY_CLIENT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0038_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0038_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("PRODCATEG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PRODCATEG_ID",id:"DC0038_QRY_PRODCATEG_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id"})  );
         this.queryFields.add("PRODCATEG_NAME", new N21.DataComp.LOV0014({xtype: "LOV0014",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0038_QRY_PRODCATEG_ID"}],selectOnFocus:true,name:"QRY_PRODCATEG_NAME",id:"DC0038_QRY_PRODCATEG_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_NAME||"Parent Categ."})  );
         this.queryFields.add("ACTIVE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0038_QRY_ACTIVE",width:40,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"})  );
  
       this.queryFieldsVisible = [  "CLIENT_NAME","CODE","NAME","PRODCATEG_NAME","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0038"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0038"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:180,dataIndex:'NAME',sortable:true}
              ,{ id:"PRODCATEG_ID",header:this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",width:100,dataIndex:'PRODCATEG_ID',hidden:true,sortable:true}
              ,{ id:"PRODCATEG_NAME",header:this.resourceBundle.FieldLabel.PRODCATEG_NAME||"Parent Categ.",width:150,dataIndex:'PRODCATEG_NAME',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0038G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0038G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0038G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,CODE:""
              ,NAME:""
              ,PRODCATEG_ID:""
              ,PRODCATEG_NAME:""
              ,DESCRIPTION:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0038G", N21.DataComp.DC0038G);
/** 
 * Data Component: DC0038F, Title: Product categories
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0038F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0038G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0038F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0038F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:false})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0038F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0038F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:120,listWidth:138,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:false})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0038F_CODE",dataIndex:"CODE",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;"})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0038F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRODCATEG_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PRODCATEG_ID",id:"DC0038F_PRODCATEG_ID",dataIndex:"PRODCATEG_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRODCATEG_NAME", new N21.DataComp.LOV0014({xtype: "LOV0014",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0038F_PRODCATEG_ID"}],selectOnFocus:true,name:"PRODCATEG_NAME",id:"DC0038F_PRODCATEG_NAME",dataIndex:"PRODCATEG_NAME",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_NAME||"Parent Categ.",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DESCRIPTION", new Ext.form.TextArea ({xtype: "textarea",name:"DESCRIPTION",id:"DC0038F_DESCRIPTION",dataIndex:"DESCRIPTION",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACTIVE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACTIVE",id:"DC0038F_ACTIVE",dataIndex:"ACTIVE",width:50,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
                 ,this.fields.get("PRODCATEG_ID")
                 ,this.fields.get("PRODCATEG_NAME")
                 ,this.fields.get("DESCRIPTION")
                 ,this.fields.get("ACTIVE")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0038F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0038F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0038F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,CODE:""
              ,NAME:""
              ,PRODCATEG_ID:""
              ,PRODCATEG_NAME:""
              ,DESCRIPTION:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0038F", N21.DataComp.DC0038F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0038
 * Title: Product categories
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0038 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0038"
          ,masterName:"DC0038G"
          ,detailName:"DC0038F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0038G",id: "DC0038G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0038F",id: "DC0038F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0038.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0038", N21.DataComp.DC0038);



