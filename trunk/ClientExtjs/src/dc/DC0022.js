/** 
 * Data Component: DC0022G, Title: Menu items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0022G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"MENUBAR_CODE", type:"string" }
         ,{name:"POSITION", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"LINK", type:"string" }
         ,{name:"MENUITEM_ID", type:"float" }
         ,{name:"PARENT_MENU", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"TARGET", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"ACTIVE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0022F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("MENUBAR_CODE",new  N21.DataComp.LOV0021({name:"QRY_MENUBAR_CODE",id:"DC0022F_QRY_MENUBAR_CODE",fieldLabel: this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0022F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("LINK",new  N21.DataComp.LOV0020({name:"QRY_LINK",id:"DC0022F_QRY_LINK",fieldLabel: this.resourceBundle.FieldLabel.LINK||"Link",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"CODE",field:"DC0022F_QRY_LINK"}],displayColumn: "CODE"}));
       this.queryFields.add("MENUITEM_ID",new Ext.form.Hidden({name:"QRY_MENUITEM_ID",id:"DC0022F_QRY_MENUITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Parent menu id",allowBlank:true,width:100}));
       this.queryFields.add("PARENT_MENU",new  N21.DataComp.LOV0022({name:"QRY_PARENT_MENU",id:"DC0022F_QRY_PARENT_MENU",fieldLabel: this.resourceBundle.FieldLabel.PARENT_MENU||"Parent menu",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0022F_QRY_MENUITEM_ID"}],displayColumn: "NAME"}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0022F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
  
       this.queryFieldsVisible = [  "MENUBAR_CODE","NAME","LINK","PARENT_MENU","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0022"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0022", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"MENUBAR_CODE",header:this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar",width:80,dataIndex:'MENUBAR_CODE',sortable:true}
              ,{ id:"POSITION",header:this.resourceBundle.FieldLabel.POSITION||"Position",width:50,dataIndex:'POSITION',sortable:true,align:'right'}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{ id:"LINK",header:this.resourceBundle.FieldLabel.LINK||"Link",width:80,dataIndex:'LINK',sortable:true}
              ,{ id:"MENUITEM_ID",header:this.resourceBundle.FieldLabel.MENUITEM_ID||"Parent menu id",width:100,dataIndex:'MENUITEM_ID',hidden:true,sortable:true}
              ,{ id:"PARENT_MENU",header:this.resourceBundle.FieldLabel.PARENT_MENU||"Parent menu",width:200,dataIndex:'PARENT_MENU',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',hidden:true,sortable:true}
              ,{ id:"TARGET",header:this.resourceBundle.FieldLabel.TARGET||"Target",width:100,dataIndex:'TARGET',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
          ]
          ,dataComponentName:"DC0022G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0022G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0022G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,MENUBAR_CODE:""
              ,POSITION:""
              ,NAME:""
              ,LINK:""
              ,MENUITEM_ID:""
              ,PARENT_MENU:""
              ,CODE:""
              ,TARGET:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ACTIVE:""});
     }
  });
  Ext.reg("DC0022G", N21.DataComp.DC0022G);
/** 
 * Data Component: DC0022F, Title: Menu items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0022F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0022G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0022F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("MENUBAR_CODE",new  N21.DataComp.LOV0021({name:"MENUBAR_CODE",id:"DC0022F_MENUBAR_CODE",dataIndex:"MENUBAR_CODE",fieldLabel: this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("POSITION",new Ext.form.NumberField({name:"POSITION",id:"DC0022F_POSITION",dataIndex:"POSITION",fieldLabel: this.resourceBundle.FieldLabel.POSITION||"Position",allowBlank:false,labelSeparator:":*",width:60,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0022F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("LINK",new  N21.DataComp.LOV0020({name:"LINK",id:"DC0022F_LINK",dataIndex:"LINK",fieldLabel: this.resourceBundle.FieldLabel.LINK||"Link",allowBlank:true,width:120,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"CODE",field:"DC0022F_LINK"}],displayColumn: "CODE"}));
       this.fields.add("MENUITEM_ID",new Ext.form.Hidden({name:"MENUITEM_ID",id:"DC0022F_MENUITEM_ID",dataIndex:"MENUITEM_ID",fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Parent menu id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PARENT_MENU",new  N21.DataComp.LOV0022({name:"PARENT_MENU",id:"DC0022F_PARENT_MENU",dataIndex:"PARENT_MENU",fieldLabel: this.resourceBundle.FieldLabel.PARENT_MENU||"Parent menu",allowBlank:true,width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0022F_MENUITEM_ID"}],displayColumn: "NAME"}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0022F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACTIVE",new Ext.ux.form.XCheckbox({name:"ACTIVE",id:"DC0022F_ACTIVE",dataIndex:"ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("DC0070",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0070 - "+(N21.DataComp.DC0070.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:200, height:200, items:{xtype:"DC0070",id:"DC0070", parentDcRelation:{name:"DC0022F",relation:[{parent:"ID",child:"MENUITEM_ID"}]}         }} ) ); 
       this.layoutItems.add("DC0043",
             { xtype:"DC0043",id:"DC0043",width:"100%",height:160, parentDcRelation:{name:"DC0022F",relation:[{parent:"ID",child:"MENUITEM_ID"}]}   });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("POSITION"),this.fields.get("MENUITEM_ID"),this.fields.get("MENUBAR_CODE"),this.fields.get("NAME"),this.fields.get("LINK"),this.fields.get("PARENT_MENU"),this.fields.get("ACTIVE"),this.fields.get("CODE"),this.layoutItems.get("DC0043")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0022F"
          ,firstFocusFieldName:"POSITION"
          ,childDCs: [{name:"DC0043",relation:[{parent:"ID",child:"MENUITEM_ID"}],commitChildWithParent:true},{name:"DC0070",relation:[{parent:"ID",child:"MENUITEM_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Roles",handler:function() {this.show_window("DC0070");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0022F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0022F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,MENUBAR_CODE:""
              ,POSITION:""
              ,NAME:""
              ,LINK:""
              ,MENUITEM_ID:""
              ,PARENT_MENU:""
              ,CODE:""
              ,TARGET:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ACTIVE:""});
     }


  });
  Ext.reg("DC0022F", N21.DataComp.DC0022F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0022
 * Title: Menu items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0022 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0022"
          ,masterName:"DC0022G"
          ,detailName:"DC0022F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0022G",id: "DC0022G",region:"west"  ,split:true,width:600,minWidth:0}
             ,{xtype: "DC0022F",id: "DC0022F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0022</span>"          )
        }); 

       N21.DataComp.DC0022.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0022", N21.DataComp.DC0022);



