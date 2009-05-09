/** 
 * Data Component: DC0119G, Title: Import strategies
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0119G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"IMPSTGGRP_ID", type:"float" }
         ,{name:"IMPSTGGRP_NAME", type:"string" }
         ,{name:"FILE_TYPE", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"DEST_TABLE", type:"string" }
         ,{name:"FILE_LOCATION", type:"string" }
         ,{name:"ACTIVE", type:"string" }
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
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0119F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0119F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("IMPSTGGRP_ID",new Ext.form.Hidden({name:"QRY_IMPSTGGRP_ID",id:"DC0119F_QRY_IMPSTGGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.IMPSTGGRP_ID||"Strategy group id",allowBlank:true,width:100}));
       this.queryFields.add("IMPSTGGRP_NAME",new  N21.DataComp.LOV0072({name:"QRY_IMPSTGGRP_NAME",id:"DC0119F_QRY_IMPSTGGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.IMPSTGGRP_NAME||"Strategy group",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0119F_QRY_IMPSTGGRP_ID"}]}));
       this.queryFields.add("FILE_TYPE",new Ext.form.ComboBox({name:"QRY_FILE_TYPE",id:"DC0119F_QRY_FILE_TYPE",fieldLabel: this.resourceBundle.FieldLabel.FILE_TYPE||"File type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,store:['csv','xml']}));
       this.queryFields.add("DEST_TABLE",new Ext.form.TextField({name:"QRY_DEST_TABLE",id:"DC0119F_QRY_DEST_TABLE",fieldLabel: this.resourceBundle.FieldLabel.DEST_TABLE||"Target table",allowBlank:true,width:100}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0119F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));
  
       this.queryFieldsVisible = [  "NAME","IMPSTGGRP_NAME","FILE_TYPE","DEST_TABLE","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0119"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0119", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',sortable:true}
              ,{ id:"IMPSTGGRP_ID",header:this.resourceBundle.FieldLabel.IMPSTGGRP_ID||"Strategy group id",width:100,dataIndex:'IMPSTGGRP_ID',hidden:true,sortable:true}
              ,{ id:"IMPSTGGRP_NAME",header:this.resourceBundle.FieldLabel.IMPSTGGRP_NAME||"Strategy group",width:150,dataIndex:'IMPSTGGRP_NAME',sortable:true}
              ,{ id:"FILE_TYPE",header:this.resourceBundle.FieldLabel.FILE_TYPE||"File type",width:100,dataIndex:'FILE_TYPE',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"DEST_TABLE",header:this.resourceBundle.FieldLabel.DEST_TABLE||"Target table",width:150,dataIndex:'DEST_TABLE',sortable:true}
              ,{ id:"FILE_LOCATION",header:this.resourceBundle.FieldLabel.FILE_LOCATION||"File location",width:100,dataIndex:'FILE_LOCATION',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0119G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0119G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0119G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,NAME:""
              ,IMPSTGGRP_ID:""
              ,IMPSTGGRP_NAME:""
              ,FILE_TYPE:""
              ,DESCRIPTION:""
              ,DEST_TABLE:""
              ,FILE_LOCATION:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0119G", N21.DataComp.DC0119G);
/** 
 * Data Component: DC0119F, Title: Import strategies
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0119F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0119G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0119F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0119F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("IMPSTGGRP_ID",new Ext.form.Hidden({name:"IMPSTGGRP_ID",id:"DC0119F_IMPSTGGRP_ID",dataIndex:"IMPSTGGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.IMPSTGGRP_ID||"Strategy group id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("IMPSTGGRP_NAME",new  N21.DataComp.LOV0072({name:"IMPSTGGRP_NAME",id:"DC0119F_IMPSTGGRP_NAME",dataIndex:"IMPSTGGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.IMPSTGGRP_NAME||"Strategy group",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0119F_IMPSTGGRP_ID"}]}));
       this.fields.add("FILE_TYPE",new Ext.form.ComboBox({name:"FILE_TYPE",id:"DC0119F_FILE_TYPE",dataIndex:"FILE_TYPE",fieldLabel: this.resourceBundle.FieldLabel.FILE_TYPE||"File type",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true,store:['csv','xml']}));
       this.fields.add("DESCRIPTION",new Ext.form.TextArea({name:"DESCRIPTION",id:"DC0119F_DESCRIPTION",dataIndex:"DESCRIPTION",fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",allowBlank:true,width:200,height:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEST_TABLE",new Ext.form.TextField({name:"DEST_TABLE",id:"DC0119F_DEST_TABLE",dataIndex:"DEST_TABLE",fieldLabel: this.resourceBundle.FieldLabel.DEST_TABLE||"Target table",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("FILE_LOCATION",new Ext.form.TextField({name:"FILE_LOCATION",id:"DC0119F_FILE_LOCATION",dataIndex:"FILE_LOCATION",fieldLabel: this.resourceBundle.FieldLabel.FILE_LOCATION||"File location",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACTIVE",new Ext.ux.form.XCheckbox({name:"ACTIVE",id:"DC0119F_ACTIVE",dataIndex:"ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:false,labelSeparator:":*",insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("DC0120",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0120 - "+(N21.DataComp.DC0120.prototype.resourceBundle.DcProperty.Title||"Fields"),  closeAction:"hide",closable:true,layout:"fit", width:650, height:400, items:{xtype:"DC0120",id:"DC0120", parentDcRelation:{name:"DC0119F",relation:[{parent:"ID",child:"IMPSTG_ID"}]}         }} ) ); 
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("NAME"),this.fields.get("IMPSTGGRP_ID"),this.fields.get("IMPSTGGRP_NAME"),this.fields.get("FILE_TYPE"),this.fields.get("DESCRIPTION"),this.fields.get("DEST_TABLE"),this.fields.get("FILE_LOCATION"),this.fields.get("ACTIVE")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0119F"
          ,firstFocusFieldName:"NAME"
          ,firstFocusFieldNameInsert:"NAME"
          ,childDCs: [{name:"DC0120",relation:[{parent:"ID",child:"IMPSTG_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Fields",handler:function() {this.show_window("DC0120");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0119F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0119F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,NAME:""
              ,IMPSTGGRP_ID:""
              ,IMPSTGGRP_NAME:""
              ,FILE_TYPE:""
              ,DESCRIPTION:""
              ,DEST_TABLE:""
              ,FILE_LOCATION:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0119F", N21.DataComp.DC0119F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0119
 * Title: Import strategies
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0119 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0119"
          ,masterName:"DC0119G"
          ,detailName:"DC0119F"
          ,mdLayout:"card"
          ,border: false
          ,items: [
              {
                xtype:"panel"
               ,layout:"card"
               ,id:"MDTab"
               ,region:"center"
               ,defaults:{layout:"fit"}
               ,activeItem:1
               ,tabPosition: "bottom"
               ,items: [{
                            xtype: "DC0119G"
                           ,id: "DC0119G"
                           ,height:350
                       },{
                           xtype:"DC0119F"
                          ,id:"DC0119F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

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
,"->","<span class='dcName'>DC0119</span>"          )
        }); 

       N21.DataComp.DC0119.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0119", N21.DataComp.DC0119);



