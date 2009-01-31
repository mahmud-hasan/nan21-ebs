/** 
 * Data Component: DC0046G, Title: Project issues
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0046G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"PROJECT_ID", type:"float" }
         ,{name:"ID", type:"float" }
         ,{name:"PROJECT_NAME", type:"string" }
         ,{name:"TITLE", type:"string" }
         ,{name:"ISSUE_TYPE_CODE", type:"string" }
         ,{name:"SEVERITY_CODE", type:"string" }
         ,{name:"STATUS_CODE", type:"string" }
         ,{name:"PRIORITY_CODE", type:"string" }
         ,{name:"AFF_CMP_TYPE_CODE", type:"string" }
         ,{name:"AFF_CMP", type:"string" }
         ,{name:"AFF_PROJECT_RELEASE_CODE", type:"string" }
         ,{name:"EFFORT_UNIT", type:"string" }
         ,{name:"ESTIMATE_EFFORT", type:"float" }
         ,{name:"ACTUAL_EFFORT", type:"float" }
         ,{name:"IS_CLOSED", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"ASSIGNED_TO", type:"string" }
         ,{name:"PLAN_STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"PLAN_ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ACT_STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ACT_ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0046F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("PROJECT_ID",new Ext.form.Hidden({name:"QRY_PROJECT_ID",id:"DC0046F_QRY_PROJECT_ID",fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",allowBlank:true,width:100}));
       this.queryFields.add("PROJECT_NAME",new  N21.DataComp.LOV0033({name:"QRY_PROJECT_NAME",id:"DC0046F_QRY_PROJECT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0046F_QRY_PROJECT_ID"}]}));
       this.queryFields.add("TITLE",new Ext.form.TextField({name:"QRY_TITLE",id:"DC0046F_QRY_TITLE",fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title",allowBlank:true,width:100}));
       this.queryFields.add("ISSUE_TYPE_CODE",new  N21.DataComp.LOV0031({name:"QRY_ISSUE_TYPE_CODE",id:"DC0046F_QRY_ISSUE_TYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.ISSUE_TYPE_CODE||"Type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("SEVERITY_CODE",new  N21.DataComp.LOV0030({name:"QRY_SEVERITY_CODE",id:"DC0046F_QRY_SEVERITY_CODE",fieldLabel: this.resourceBundle.FieldLabel.SEVERITY_CODE||"Severity",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("STATUS_CODE",new  N21.DataComp.LOV0032({name:"QRY_STATUS_CODE",id:"DC0046F_QRY_STATUS_CODE",fieldLabel: this.resourceBundle.FieldLabel.STATUS_CODE||"Status",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("PRIORITY_CODE",new  N21.DataComp.LOV0034({name:"QRY_PRIORITY_CODE",id:"DC0046F_QRY_PRIORITY_CODE",fieldLabel: this.resourceBundle.FieldLabel.PRIORITY_CODE||"Priority",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("IS_CLOSED",new Ext.form.ComboBox({name:"QRY_IS_CLOSED",id:"DC0046F_QRY_IS_CLOSED",fieldLabel: this.resourceBundle.FieldLabel.IS_CLOSED||"Closed",allowBlank:true,width:100,store:["Y","N"]}));
       this.queryFields.add("ASSIGNED_TO",new Ext.form.TextField({name:"QRY_ASSIGNED_TO",id:"DC0046F_QRY_ASSIGNED_TO",fieldLabel: this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned to",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "PROJECT_NAME","TITLE","ISSUE_TYPE_CODE","SEVERITY_CODE","STATUS_CODE","PRIORITY_CODE","IS_CLOSED","ASSIGNED_TO" ];
       Ext.apply(this, {
           store: new Ext.data.GroupingStore({
               id:"storeDC0046"
              ,groupOnSort :false
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0046"
              ,remoteSort :true
              ,sortInfo:{field: "", direction: ""}
              ,reader:new Ext.data.JsonReader({
                            totalProperty: "totalCount"  
                            ,root: "records"      
                        }, this.dataRecordMeta)
             ,groupField:""
           })
           ,loadMask :true
          ,view: new Ext.grid.GroupingView({
                    groupTextTpl: "{text}"
                })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"PROJECT_ID",header:this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",width:100,dataIndex:'PROJECT_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROJECT_NAME",header:this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",width:120,dataIndex:'PROJECT_NAME',sortable:true}
              ,{ id:"TITLE",header:this.resourceBundle.FieldLabel.TITLE||"Title",width:250,dataIndex:'TITLE',sortable:true}
              ,{ id:"ISSUE_TYPE_CODE",header:this.resourceBundle.FieldLabel.ISSUE_TYPE_CODE||"Type",width:100,dataIndex:'ISSUE_TYPE_CODE',sortable:true}
              ,{ id:"SEVERITY_CODE",header:this.resourceBundle.FieldLabel.SEVERITY_CODE||"Severity",width:100,dataIndex:'SEVERITY_CODE',sortable:true}
              ,{ id:"STATUS_CODE",header:this.resourceBundle.FieldLabel.STATUS_CODE||"Status",width:100,dataIndex:'STATUS_CODE',sortable:true}
              ,{ id:"PRIORITY_CODE",header:this.resourceBundle.FieldLabel.PRIORITY_CODE||"Priority",width:100,dataIndex:'PRIORITY_CODE',sortable:true}
              ,{ id:"AFF_CMP_TYPE_CODE",header:this.resourceBundle.FieldLabel.AFF_CMP_TYPE_CODE||"Affected component type",width:100,dataIndex:'AFF_CMP_TYPE_CODE',hidden:true,sortable:true}
              ,{ id:"AFF_CMP",header:this.resourceBundle.FieldLabel.AFF_CMP||"Affected component",width:100,dataIndex:'AFF_CMP',hidden:true,sortable:true}
              ,{ id:"AFF_PROJECT_RELEASE_CODE",header:this.resourceBundle.FieldLabel.AFF_PROJECT_RELEASE_CODE||"Affected release",width:100,dataIndex:'AFF_PROJECT_RELEASE_CODE',hidden:true,sortable:true}
              ,{ id:"EFFORT_UNIT",header:this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort unit",width:100,dataIndex:'EFFORT_UNIT',hidden:true,sortable:true}
              ,{ id:"ESTIMATE_EFFORT",header:this.resourceBundle.FieldLabel.ESTIMATE_EFFORT||"Estimated effort",width:100,dataIndex:'ESTIMATE_EFFORT',hidden:true,sortable:true,align:'right'}
              ,{ id:"ACTUAL_EFFORT",header:this.resourceBundle.FieldLabel.ACTUAL_EFFORT||"Actual effort",width:100,dataIndex:'ACTUAL_EFFORT',hidden:true,sortable:true,align:'right'}
              ,{ id:"IS_CLOSED",header:this.resourceBundle.FieldLabel.IS_CLOSED||"Closed",width:50,dataIndex:'IS_CLOSED',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"ASSIGNED_TO",header:this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned to",width:100,dataIndex:'ASSIGNED_TO',sortable:true}
              ,{ id:"PLAN_STARTDATE",header:this.resourceBundle.FieldLabel.PLAN_STARTDATE||"Planned start-date",width:100,dataIndex:'PLAN_STARTDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PLAN_ENDDATE",header:this.resourceBundle.FieldLabel.PLAN_ENDDATE||"Planned end-date",width:100,dataIndex:'PLAN_ENDDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ACT_STARTDATE",header:this.resourceBundle.FieldLabel.ACT_STARTDATE||"Actual start-date",width:100,dataIndex:'ACT_STARTDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ACT_ENDDATE",header:this.resourceBundle.FieldLabel.ACT_ENDDATE||"Actual end-date",width:100,dataIndex:'ACT_ENDDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
          ]
          ,dataComponentName:"DC0046G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0046G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0046G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,PROJECT_ID:""
              ,ID:""
              ,PROJECT_NAME:""
              ,TITLE:""
              ,ISSUE_TYPE_CODE:""
              ,SEVERITY_CODE:""
              ,STATUS_CODE:""
              ,PRIORITY_CODE:""
              ,AFF_CMP_TYPE_CODE:""
              ,AFF_CMP:""
              ,AFF_PROJECT_RELEASE_CODE:""
              ,EFFORT_UNIT:""
              ,ESTIMATE_EFFORT:""
              ,ACTUAL_EFFORT:""
              ,IS_CLOSED:""
              ,DESCRIPTION:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ASSIGNED_TO:""
              ,PLAN_STARTDATE:""
              ,PLAN_ENDDATE:""
              ,ACT_STARTDATE:""
              ,ACT_ENDDATE:""});
     }
  });
  Ext.reg("DC0046G", N21.DataComp.DC0046G);
/** 
 * Data Component: DC0046F, Title: Project issues
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0046F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0046G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("PROJECT_ID",new Ext.form.Hidden({name:"PROJECT_ID",id:"DC0046F_PROJECT_ID",dataIndex:"PROJECT_ID",fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0046F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PROJECT_NAME",new  N21.DataComp.LOV0033({name:"PROJECT_NAME",id:"DC0046F_PROJECT_NAME",dataIndex:"PROJECT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0046F_PROJECT_ID"}]}));
       this.fields.add("TITLE",new Ext.form.TextField({name:"TITLE",id:"DC0046F_TITLE",dataIndex:"TITLE",fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title",allowBlank:false,labelSeparator:":*",width:480,insert_allowed:true,update_allowed:true}));
       this.fields.add("ISSUE_TYPE_CODE",new  N21.DataComp.LOV0031({name:"ISSUE_TYPE_CODE",id:"DC0046F_ISSUE_TYPE_CODE",dataIndex:"ISSUE_TYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.ISSUE_TYPE_CODE||"Type",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("SEVERITY_CODE",new  N21.DataComp.LOV0030({name:"SEVERITY_CODE",id:"DC0046F_SEVERITY_CODE",dataIndex:"SEVERITY_CODE",fieldLabel: this.resourceBundle.FieldLabel.SEVERITY_CODE||"Severity",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("STATUS_CODE",new  N21.DataComp.LOV0032({name:"STATUS_CODE",id:"DC0046F_STATUS_CODE",dataIndex:"STATUS_CODE",fieldLabel: this.resourceBundle.FieldLabel.STATUS_CODE||"Status",allowBlank:true,width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("PRIORITY_CODE",new  N21.DataComp.LOV0034({name:"PRIORITY_CODE",id:"DC0046F_PRIORITY_CODE",dataIndex:"PRIORITY_CODE",fieldLabel: this.resourceBundle.FieldLabel.PRIORITY_CODE||"Priority",allowBlank:true,width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("AFF_CMP_TYPE_CODE",new  N21.DataComp.LOV0035({name:"AFF_CMP_TYPE_CODE",id:"DC0046F_AFF_CMP_TYPE_CODE",dataIndex:"AFF_CMP_TYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.AFF_CMP_TYPE_CODE||"Affected component type",allowBlank:true,width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_project_id",field:"DC0046F.PROJECT_ID"}]}));
       this.fields.add("AFF_CMP",new Ext.form.TextField({name:"AFF_CMP",id:"DC0046F_AFF_CMP",dataIndex:"AFF_CMP",fieldLabel: this.resourceBundle.FieldLabel.AFF_CMP||"Affected component",allowBlank:true,width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("AFF_PROJECT_RELEASE_CODE",new Ext.form.TextField({name:"AFF_PROJECT_RELEASE_CODE",id:"DC0046F_AFF_PROJECT_RELEASE_CODE",dataIndex:"AFF_PROJECT_RELEASE_CODE",fieldLabel: this.resourceBundle.FieldLabel.AFF_PROJECT_RELEASE_CODE||"Affected release",allowBlank:true,width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("EFFORT_UNIT",new  N21.DataComp.LOV0037({name:"EFFORT_UNIT",id:"DC0046F_EFFORT_UNIT",dataIndex:"EFFORT_UNIT",fieldLabel: this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort unit",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("ESTIMATE_EFFORT",new Ext.form.NumberField({name:"ESTIMATE_EFFORT",id:"DC0046F_ESTIMATE_EFFORT",dataIndex:"ESTIMATE_EFFORT",fieldLabel: this.resourceBundle.FieldLabel.ESTIMATE_EFFORT||"Estimated effort",allowBlank:true,width:60,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("ACTUAL_EFFORT",new Ext.form.NumberField({name:"ACTUAL_EFFORT",id:"DC0046F_ACTUAL_EFFORT",dataIndex:"ACTUAL_EFFORT",fieldLabel: this.resourceBundle.FieldLabel.ACTUAL_EFFORT||"Actual effort",allowBlank:true,width:60,disabled:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("IS_CLOSED",new Ext.ux.form.XCheckbox({name:"IS_CLOSED",id:"DC0046F_IS_CLOSED",dataIndex:"IS_CLOSED",fieldLabel: this.resourceBundle.FieldLabel.IS_CLOSED||"Closed",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("DESCRIPTION",new Ext.form.TextArea({name:"DESCRIPTION",id:"DC0046F_DESCRIPTION",dataIndex:"DESCRIPTION",fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",allowBlank:true,width:480,height:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0046F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Created on",allowBlank:false,labelSeparator:":*",width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0046F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Created by",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0046F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",allowBlank:false,labelSeparator:":*",width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0046F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",allowBlank:false,labelSeparator:":*",width:100,disabled:true}));
       this.fields.add("ASSIGNED_TO",new Ext.form.TextField({name:"ASSIGNED_TO",id:"DC0046F_ASSIGNED_TO",dataIndex:"ASSIGNED_TO",fieldLabel: this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned to",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("PLAN_STARTDATE",new Ext.form.DateField({name:"PLAN_STARTDATE",id:"DC0046F_PLAN_STARTDATE",dataIndex:"PLAN_STARTDATE",fieldLabel: this.resourceBundle.FieldLabel.PLAN_STARTDATE||"Planned start-date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("PLAN_ENDDATE",new Ext.form.DateField({name:"PLAN_ENDDATE",id:"DC0046F_PLAN_ENDDATE",dataIndex:"PLAN_ENDDATE",fieldLabel: this.resourceBundle.FieldLabel.PLAN_ENDDATE||"Planned end-date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("ACT_STARTDATE",new Ext.form.DateField({name:"ACT_STARTDATE",id:"DC0046F_ACT_STARTDATE",dataIndex:"ACT_STARTDATE",fieldLabel: this.resourceBundle.FieldLabel.ACT_STARTDATE||"Actual start-date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("ACT_ENDDATE",new Ext.form.DateField({name:"ACT_ENDDATE",id:"DC0046F_ACT_ENDDATE",dataIndex:"ACT_ENDDATE",fieldLabel: this.resourceBundle.FieldLabel.ACT_ENDDATE||"Actual end-date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));

       this.layoutItems.add("DC0048",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0048 - "+(N21.DataComp.DC0048.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:600, height:450, items:{xtype:"DC0048",id:"DC0048", parentDcRelation:{name:"DC0046F",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]}         }} ) ); 
       this.layoutItems.add("Timing",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Timing||"Timing",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("IS_CLOSED"),this.fields.get("PLAN_STARTDATE"),this.fields.get("PLAN_ENDDATE"),this.fields.get("ACT_STARTDATE"),this.fields.get("ACT_ENDDATE")] });
       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")] });
       this.layoutItems.add("Eval",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Eval||"Eval",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("ISSUE_TYPE_CODE"),this.fields.get("SEVERITY_CODE"),this.fields.get("PRIORITY_CODE"),this.fields.get("STATUS_CODE"),this.fields.get("ASSIGNED_TO")] });
       this.layoutItems.add("C2",
             { layout:"form",width:280,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Eval"),this.layoutItems.get("Timing"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("Info",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Info||"Info",border:true,labelAlign:"top",width:"500"   ,items:[ this.fields.get("ID"),this.fields.get("TITLE"),this.fields.get("DESCRIPTION")] });
       this.layoutItems.add("Effort",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Effort||"Effort",border:true,labelAlign:"left",width:"220"   ,items:[ this.fields.get("EFFORT_UNIT"),this.fields.get("ESTIMATE_EFFORT"),this.fields.get("ACTUAL_EFFORT")] });
       this.layoutItems.add("C1R2C2",
             { layout:"form",width:250,labelAlign:"right",labelWidth:90, items:[ this.layoutItems.get("Effort")]
 }); 
       this.layoutItems.add("Impact",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Impact||"Impact",border:true,labelAlign:"left",width:"240"   ,items:[ this.fields.get("PROJECT_ID"),this.fields.get("PROJECT_NAME"),this.fields.get("AFF_PROJECT_RELEASE_CODE"),this.fields.get("AFF_CMP_TYPE_CODE"),this.fields.get("AFF_CMP")] });
       this.layoutItems.add("C1R2C1",
             { layout:"form",width:270,labelAlign:"right",labelWidth:90, items:[ this.layoutItems.get("Impact")]
 }); 
       this.layoutItems.add("C1R2",
             { layout:"column",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("C1R2C1"),this.layoutItems.get("C1R2C2")]
 }); 
       this.layoutItems.add("C1R1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100 }); 
       this.layoutItems.add("C1",
             { layout:"form",width:530,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("C1R1"),this.layoutItems.get("Info"),this.layoutItems.get("C1R2")]
 }); 
       this.layoutItems.add("DC0055",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0055 - "+(N21.DataComp.DC0055.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:500, height:300, items:{xtype:"DC0055",id:"DC0055", parentDcRelation:{name:"DC0046F",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]}         }} ) ); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0046F"
          ,firstFocusFieldName:"TITLE"
          ,childDCs: [{name:"DC0055",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]},{name:"DC0048",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Timesheet charge",handler:function() {this.show_window("DC0055");}}
                    ,{xtype:"button",scope:this,text:"Notes",handler:function() {this.show_window("DC0048");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0046F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0046F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,PROJECT_ID:""
              ,ID:""
              ,PROJECT_NAME:""
              ,TITLE:""
              ,ISSUE_TYPE_CODE:""
              ,SEVERITY_CODE:""
              ,STATUS_CODE:""
              ,PRIORITY_CODE:""
              ,AFF_CMP_TYPE_CODE:""
              ,AFF_CMP:""
              ,AFF_PROJECT_RELEASE_CODE:""
              ,EFFORT_UNIT:""
              ,ESTIMATE_EFFORT:""
              ,ACTUAL_EFFORT:""
              ,IS_CLOSED:""
              ,DESCRIPTION:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ASSIGNED_TO:""
              ,PLAN_STARTDATE:""
              ,PLAN_ENDDATE:""
              ,ACT_STARTDATE:""
              ,ACT_ENDDATE:""});
     }


  });
  Ext.reg("DC0046F", N21.DataComp.DC0046F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0046
 * Title: Project issues
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0046 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0046"
          ,masterName:"DC0046G"
          ,detailName:"DC0046F"
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
                            xtype: "DC0046G"
                           ,id: "DC0046G"
                           ,height:350
                       },{
                           xtype:"DC0046F"
                          ,id:"DC0046F"
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
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/exp_excel.png" ,tooltip:"Export records in CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0046</span>"          )
        }); 

       N21.DataComp.DC0046.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0046", N21.DataComp.DC0046);



