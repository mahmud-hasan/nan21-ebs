/** 
 * Data Component: DC0030G, Title: Field default values
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0030G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UIDC_CODE", type:"string" }
         ,{name:"FIELD_NAME", type:"string" }
         ,{name:"VALUE_TYPE", type:"string" }
         ,{name:"FIELD_VALUE", type:"string" }
         ,{name:"ACTIVE", type:"string" }
         ,{name:"APPLY_TO_USER", type:"string" }
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
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0030F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("UIDC_CODE",new  N21.DataComp.LOV0028({name:"QRY_UIDC_CODE",id:"DC0030F_QRY_UIDC_CODE",fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",allowBlank:true,width:100,selectOnFocus:true}));
       this.queryFields.add("FIELD_NAME",new  N21.DataComp.LOV0029({name:"QRY_FIELD_NAME",id:"DC0030F_QRY_FIELD_NAME",fieldLabel: this.resourceBundle.FieldLabel.FIELD_NAME||"Field_name",allowBlank:true,width:100,selectOnFocus:true,paramMapping: [{param:"p_uidc_code",field:"DC0030F_QRY_UIDC_CODE"}]}));
       this.queryFields.add("VALUE_TYPE",new Ext.form.ComboBox({name:"QRY_VALUE_TYPE",id:"DC0030F_QRY_VALUE_TYPE",fieldLabel: this.resourceBundle.FieldLabel.VALUE_TYPE||"Value_type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,store:['SQL','VALUE']}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0030F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("APPLY_TO_USER",new Ext.form.TextField({name:"QRY_APPLY_TO_USER",id:"DC0030F_QRY_APPLY_TO_USER",fieldLabel: this.resourceBundle.FieldLabel.APPLY_TO_USER||"Apply_to_user",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "UIDC_CODE","FIELD_NAME","VALUE_TYPE","ACTIVE","APPLY_TO_USER" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0030"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0030"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"UIDC_CODE",header:this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",width:100,dataIndex:'UIDC_CODE',sortable:true}
              ,{ id:"FIELD_NAME",header:this.resourceBundle.FieldLabel.FIELD_NAME||"Field_name",width:150,dataIndex:'FIELD_NAME',sortable:true}
              ,{ id:"VALUE_TYPE",header:this.resourceBundle.FieldLabel.VALUE_TYPE||"Value_type",width:100,dataIndex:'VALUE_TYPE',hidden:true,sortable:true}
              ,{ id:"FIELD_VALUE",header:this.resourceBundle.FieldLabel.FIELD_VALUE||"Field_value",width:100,dataIndex:'FIELD_VALUE',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
              ,{ id:"APPLY_TO_USER",header:this.resourceBundle.FieldLabel.APPLY_TO_USER||"Apply_to_user",width:100,dataIndex:'APPLY_TO_USER',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0030G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0030G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0030G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDC_CODE:""
              ,FIELD_NAME:""
              ,VALUE_TYPE:""
              ,FIELD_VALUE:""
              ,ACTIVE:""
              ,APPLY_TO_USER:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0030G", N21.DataComp.DC0030G);
/** 
 * Data Component: DC0030F, Title: Field default values
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0030F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0030G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0030F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("UIDC_CODE",new  N21.DataComp.LOV0028({name:"UIDC_CODE",id:"DC0030F_UIDC_CODE",dataIndex:"UIDC_CODE",fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("FIELD_NAME",new  N21.DataComp.LOV0029({name:"FIELD_NAME",id:"DC0030F_FIELD_NAME",dataIndex:"FIELD_NAME",fieldLabel: this.resourceBundle.FieldLabel.FIELD_NAME||"Field_name",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_uidc_code",field:"DC0030F.UIDC_CODE"}]}));
       this.fields.add("VALUE_TYPE",new Ext.form.ComboBox({name:"VALUE_TYPE",id:"DC0030F_VALUE_TYPE",dataIndex:"VALUE_TYPE",fieldLabel: this.resourceBundle.FieldLabel.VALUE_TYPE||"Value_type",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true,store:['SQL','VALUE']}));
       this.fields.add("FIELD_VALUE",new Ext.form.TextArea({name:"FIELD_VALUE",id:"DC0030F_FIELD_VALUE",dataIndex:"FIELD_VALUE",fieldLabel: this.resourceBundle.FieldLabel.FIELD_VALUE||"Field_value",allowBlank:false,labelSeparator:":*",width:200,height:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACTIVE",new Ext.ux.form.XCheckbox({name:"ACTIVE",id:"DC0030F_ACTIVE",dataIndex:"ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("APPLY_TO_USER",new Ext.form.TextField({name:"APPLY_TO_USER",id:"DC0030F_APPLY_TO_USER",dataIndex:"APPLY_TO_USER",fieldLabel: this.resourceBundle.FieldLabel.APPLY_TO_USER||"Apply_to_user",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0030F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0030F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",allowBlank:true,width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0030F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0030F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:100,disabled:true}));

       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")] });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("UIDC_CODE"),this.fields.get("FIELD_NAME"),this.fields.get("VALUE_TYPE"),this.fields.get("FIELD_VALUE"),this.fields.get("ACTIVE"),this.fields.get("APPLY_TO_USER"),this.layoutItems.get("Modified")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0030F"
          ,firstFocusFieldName:"FIELD_NAME"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0030F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0030F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDC_CODE:""
              ,FIELD_NAME:""
              ,VALUE_TYPE:""
              ,FIELD_VALUE:""
              ,ACTIVE:""
              ,APPLY_TO_USER:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0030F", N21.DataComp.DC0030F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0030
 * Title: Field default values
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0030 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0030"
          ,masterName:"DC0030G"
          ,detailName:"DC0030F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0030G",id: "DC0030G",region:"west"  ,split:true,width:500,minWidth:0}
             ,{xtype: "DC0030F",id: "DC0030F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0030</span>"          )
        }); 

       N21.DataComp.DC0030.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0030", N21.DataComp.DC0030);



