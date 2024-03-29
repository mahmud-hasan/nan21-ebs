/** 
 * Data Component: DC0085G, Title: Organization inventory
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0085G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"ORG_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"ORGINVTYPE_CODE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"IS_DEFAULT", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0085F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0085F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0085F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0085F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ORG_ID",new Ext.form.Hidden({name:"QRY_ORG_ID",id:"DC0085F_QRY_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org. ID",allowBlank:true,width:100}));
       this.queryFields.add("ORG_NAME",new  N21.DataComp.LOV0051({name:"QRY_ORG_NAME",id:"DC0085F_QRY_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORG_NAME||"Organization",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0085F_QRY_ORG_ID"}],paramMapping: [{param:"p_client_id",field:"DC0085F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0085F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:100}));
       this.queryFields.add("ORGINVTYPE_CODE",new  N21.DataComp.LOV0052({name:"QRY_ORGINVTYPE_CODE",id:"DC0085F_QRY_ORGINVTYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.ORGINVTYPE_CODE||"Type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("IS_DEFAULT",new Ext.form.ComboBox({name:"QRY_IS_DEFAULT",id:"DC0085F_QRY_IS_DEFAULT",fieldLabel: this.resourceBundle.FieldLabel.IS_DEFAULT||"Is default?",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","ORG_NAME","CODE","ORGINVTYPE_CODE","IS_DEFAULT" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0085"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0085", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"ORG_ID",header:this.resourceBundle.FieldLabel.ORG_ID||"Org. ID",width:100,dataIndex:'ORG_ID',hidden:true,sortable:true}
              ,{ id:"ORG_NAME",header:this.resourceBundle.FieldLabel.ORG_NAME||"Organization",width:100,dataIndex:'ORG_NAME',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:200,dataIndex:'DESCRIPTION',sortable:true}
              ,{ id:"ORGINVTYPE_CODE",header:this.resourceBundle.FieldLabel.ORGINVTYPE_CODE||"Type",width:100,dataIndex:'ORGINVTYPE_CODE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"IS_DEFAULT",header:this.resourceBundle.FieldLabel.IS_DEFAULT||"Is default?",width:100,dataIndex:'IS_DEFAULT',sortable:true}
          ]
          ,dataComponentName:"DC0085G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0085G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0085G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ORG_ID:""
              ,ORG_NAME:""
              ,CODE:""
              ,DESCRIPTION:""
              ,ORGINVTYPE_CODE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IS_DEFAULT:""});
     }
  });
  Ext.reg("DC0085G", N21.DataComp.DC0085G);
/** 
 * Data Component: DC0085F, Title: Organization inventory
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0085F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0085G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0085F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0085F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0085F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0085F_CLIENT_ID"}]}));
       this.fields.add("ORG_ID",new Ext.form.Hidden({name:"ORG_ID",id:"DC0085F_ORG_ID",dataIndex:"ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org. ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ORG_NAME",new  N21.DataComp.LOV0051({name:"ORG_NAME",id:"DC0085F_ORG_NAME",dataIndex:"ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORG_NAME||"Organization",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0085F_ORG_ID"}],paramMapping: [{param:"p_client_id",field:"DC0085F.CLIENT_ID"}]}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0085F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("DESCRIPTION",new Ext.form.TextArea({name:"DESCRIPTION",id:"DC0085F_DESCRIPTION",dataIndex:"DESCRIPTION",fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",allowBlank:true,width:200,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("ORGINVTYPE_CODE",new  N21.DataComp.LOV0052({name:"ORGINVTYPE_CODE",id:"DC0085F_ORGINVTYPE_CODE",dataIndex:"ORGINVTYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.ORGINVTYPE_CODE||"Type",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("IS_DEFAULT",new Ext.ux.form.XCheckbox({name:"IS_DEFAULT",id:"DC0085F_IS_DEFAULT",dataIndex:"IS_DEFAULT",fieldLabel: this.resourceBundle.FieldLabel.IS_DEFAULT||"Is default?",allowBlank:false,labelSeparator:":*",insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("C2",
             { layout:"form",width:320, items:[ this.fields.get("DESCRIPTION"),this.fields.get("ORGINVTYPE_CODE"),this.fields.get("IS_DEFAULT")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",width:300, items:[ this.fields.get("CODE"),this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("ORG_ID"),this.fields.get("ORG_NAME")]
 }); 
       this.layoutItems.add("DC0088",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0088 - "+(N21.DataComp.DC0088.prototype.resourceBundle.DcProperty.Title||"Org. stock locations"),  closeAction:"hide",closable:true,layout:"fit", width:600, height:450, items:{xtype:"DC0088",id:"DC0088", parentDcRelation:{name:"DC0085F",relation:[{parent:"CLIENT_ID",child:"CLIENT_ID"},{parent:"ORG_ID",child:"ORG_ID"},{parent:"ID",child:"ORGINV_ID"}]}         }} ) ); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0085F"
          ,firstFocusFieldName:"CODE"
          ,childDCs: [{name:"DC0088",relation:[{parent:"CLIENT_ID",child:"CLIENT_ID"},{parent:"ORG_ID",child:"ORG_ID"},{parent:"ID",child:"ORGINV_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Stock locations",handler:function() {this.show_window("DC0088");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0085F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0085F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ORG_ID:""
              ,ORG_NAME:""
              ,CODE:""
              ,DESCRIPTION:""
              ,ORGINVTYPE_CODE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,IS_DEFAULT:""});
     }


  });
  Ext.reg("DC0085F", N21.DataComp.DC0085F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0085
 * Title: Organization inventory
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0085 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0085"
          ,masterName:"DC0085G"
          ,detailName:"DC0085F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0085G",id: "DC0085G",region:"north" ,split:true,height:300,minHeight:0}
             ,{xtype: "DC0085F",id: "DC0085F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0085</span>"          )
        }); 

       N21.DataComp.DC0085.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0085", N21.DataComp.DC0085);



