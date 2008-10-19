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
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.GroupingStore({
               id:"storeDC0046"
              ,groupOnSort :false
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0046"
              ,remoteSort :true
              ,sortInfo:{field: "", direction: ""}
              ,reader:new Ext.data.XmlReader({
                            totalRecords:"totalCount",record: "record" 
                        }, this.dataRecordMeta)
             ,groupField:""
           })
          ,view: new Ext.grid.GroupingView({
                    groupTextTpl: "{text}"
                })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"PROJECT_ID",header:this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",width:100,dataIndex:'PROJECT_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROJECT_NAME",header:this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",width:120,dataIndex:'PROJECT_NAME',sortable:true}
              ,{ id:"TITLE",header:this.resourceBundle.FieldLabel.TITLE||"Title",width:250,dataIndex:'TITLE',sortable:true}
              ,{ id:"ISSUE_TYPE_CODE",header:this.resourceBundle.FieldLabel.ISSUE_TYPE_CODE||"Issue_type_code",width:100,dataIndex:'ISSUE_TYPE_CODE',sortable:true}
              ,{ id:"SEVERITY_CODE",header:this.resourceBundle.FieldLabel.SEVERITY_CODE||"Severity_code",width:100,dataIndex:'SEVERITY_CODE',sortable:true}
              ,{ id:"STATUS_CODE",header:this.resourceBundle.FieldLabel.STATUS_CODE||"Status_code",width:100,dataIndex:'STATUS_CODE',sortable:true}
              ,{ id:"PRIORITY_CODE",header:this.resourceBundle.FieldLabel.PRIORITY_CODE||"Priority_code",width:100,dataIndex:'PRIORITY_CODE',sortable:true}
              ,{ id:"AFF_CMP_TYPE_CODE",header:this.resourceBundle.FieldLabel.AFF_CMP_TYPE_CODE||"Aff_cmp_type_code",width:100,dataIndex:'AFF_CMP_TYPE_CODE',hidden:true,sortable:true}
              ,{ id:"AFF_CMP",header:this.resourceBundle.FieldLabel.AFF_CMP||"Aff_cmp",width:100,dataIndex:'AFF_CMP',hidden:true,sortable:true}
              ,{ id:"AFF_PROJECT_RELEASE_CODE",header:this.resourceBundle.FieldLabel.AFF_PROJECT_RELEASE_CODE||"Aff_project_release_code",width:100,dataIndex:'AFF_PROJECT_RELEASE_CODE',hidden:true,sortable:true}
              ,{ id:"EFFORT_UNIT",header:this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort_unit",width:100,dataIndex:'EFFORT_UNIT',hidden:true,sortable:true}
              ,{ id:"ESTIMATE_EFFORT",header:this.resourceBundle.FieldLabel.ESTIMATE_EFFORT||"Estimate_effort",width:100,dataIndex:'ESTIMATE_EFFORT',hidden:true,sortable:true,align:'right'}
              ,{ id:"ACTUAL_EFFORT",header:this.resourceBundle.FieldLabel.ACTUAL_EFFORT||"Actual_effort",width:100,dataIndex:'ACTUAL_EFFORT',hidden:true,sortable:true,align:'right'}
              ,{ id:"IS_CLOSED",header:this.resourceBundle.FieldLabel.IS_CLOSED||"Is_closed",width:50,dataIndex:'IS_CLOSED',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Createdon",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"ASSIGNED_TO",header:this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned_to",width:100,dataIndex:'ASSIGNED_TO',sortable:true}
              ,{ id:"PLAN_STARTDATE",header:this.resourceBundle.FieldLabel.PLAN_STARTDATE||"Plan_startdate",width:100,dataIndex:'PLAN_STARTDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PLAN_ENDDATE",header:this.resourceBundle.FieldLabel.PLAN_ENDDATE||"Plan_enddate",width:100,dataIndex:'PLAN_ENDDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ACT_STARTDATE",header:this.resourceBundle.FieldLabel.ACT_STARTDATE||"Act_startdate",width:100,dataIndex:'ACT_STARTDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ACT_ENDDATE",header:this.resourceBundle.FieldLabel.ACT_ENDDATE||"Act_enddate",width:100,dataIndex:'ACT_ENDDATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_PROJECT_ID",id:"DC0046_QRY_PROJECT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id"}
               ,{xtype: "hidden",name:"QRY_ID",id:"DC0046_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0033",name:"QRY_PROJECT_NAME",id:"DC0046_QRY_PROJECT_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_NAME||"Project"}
               ,{xtype: "textfield",name:"QRY_TITLE",id:"DC0046_QRY_TITLE",width:120,fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title"}
               ,{xtype: "LOV0031",name:"QRY_ISSUE_TYPE_CODE",id:"DC0046_QRY_ISSUE_TYPE_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ISSUE_TYPE_CODE||"Issue_type_code"}
               ,{xtype: "LOV0030",name:"QRY_SEVERITY_CODE",id:"DC0046_QRY_SEVERITY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.SEVERITY_CODE||"Severity_code"}
               ,{xtype: "LOV0032",name:"QRY_STATUS_CODE",id:"DC0046_QRY_STATUS_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.STATUS_CODE||"Status_code"}
               ,{xtype: "LOV0034",name:"QRY_PRIORITY_CODE",id:"DC0046_QRY_PRIORITY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PRIORITY_CODE||"Priority_code"}
               ,{xtype: "LOV0035",name:"QRY_AFF_CMP_TYPE_CODE",id:"DC0046_QRY_AFF_CMP_TYPE_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.AFF_CMP_TYPE_CODE||"Aff_cmp_type_code"}
               ,{xtype: "textfield",name:"QRY_AFF_CMP",id:"DC0046_QRY_AFF_CMP",width:120,fieldLabel: this.resourceBundle.FieldLabel.AFF_CMP||"Aff_cmp"}
               ,{xtype: "textfield",name:"QRY_AFF_PROJECT_RELEASE_CODE",id:"DC0046_QRY_AFF_PROJECT_RELEASE_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.AFF_PROJECT_RELEASE_CODE||"Aff_project_release_code"}
               ,{xtype: "LOV0037",name:"QRY_EFFORT_UNIT",id:"DC0046_QRY_EFFORT_UNIT",width:120,fieldLabel: this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort_unit"}
               ,{xtype: "numberfield",name:"QRY_ESTIMATE_EFFORT",id:"DC0046_QRY_ESTIMATE_EFFORT",width:120,fieldLabel: this.resourceBundle.FieldLabel.ESTIMATE_EFFORT||"Estimate_effort",style: "text-align:right;"}
               ,{xtype: "numberfield",name:"QRY_ACTUAL_EFFORT",id:"DC0046_QRY_ACTUAL_EFFORT",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACTUAL_EFFORT||"Actual_effort",style: "text-align:right;"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_IS_CLOSED",id:"DC0046_QRY_IS_CLOSED",width:120,fieldLabel: this.resourceBundle.FieldLabel.IS_CLOSED||"Is_closed"}
               ,{xtype: "textarea",name:"QRY_DESCRIPTION",id:"DC0046_QRY_DESCRIPTION",width:120,fieldLabel: "N/A"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0046_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0046_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0046_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0046_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby"}
               ,{xtype: "textfield",name:"QRY_ASSIGNED_TO",id:"DC0046_QRY_ASSIGNED_TO",width:120,fieldLabel: this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned_to"}
               ,{xtype: "datefield",name:"QRY_PLAN_STARTDATE",id:"DC0046_QRY_PLAN_STARTDATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PLAN_STARTDATE||"Plan_startdate",format:Ext.DATE_FORMAT}
               ,{xtype: "datefield",name:"QRY_PLAN_ENDDATE",id:"DC0046_QRY_PLAN_ENDDATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PLAN_ENDDATE||"Plan_enddate",format:Ext.DATE_FORMAT}
               ,{xtype: "datefield",name:"QRY_ACT_STARTDATE",id:"DC0046_QRY_ACT_STARTDATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACT_STARTDATE||"Act_startdate",format:Ext.DATE_FORMAT}
               ,{xtype: "datefield",name:"QRY_ACT_ENDDATE",id:"DC0046_QRY_ACT_ENDDATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACT_ENDDATE||"Act_enddate",format:Ext.DATE_FORMAT}
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
       this.fields.add("PROJECT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PROJECT_ID",id:"DC0046F_PROJECT_ID",dataIndex:"PROJECT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0046F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROJECT_NAME", new N21.DataComp.LOV0033({xtype: "LOV0033",fieldMapping: [{column:"ID",field:"DC0046F_PROJECT_ID"}],selectOnFocus:true,name:"PROJECT_NAME",id:"DC0046F_PROJECT_NAME",dataIndex:"PROJECT_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TITLE", new Ext.form.TextField ({xtype: "textfield",name:"TITLE",id:"DC0046F_TITLE",dataIndex:"TITLE",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.TITLE||"Title",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ISSUE_TYPE_CODE", new N21.DataComp.LOV0031({xtype: "LOV0031",selectOnFocus:true,name:"ISSUE_TYPE_CODE",id:"DC0046F_ISSUE_TYPE_CODE",dataIndex:"ISSUE_TYPE_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ISSUE_TYPE_CODE||"Issue_type_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("SEVERITY_CODE", new N21.DataComp.LOV0030({xtype: "LOV0030",selectOnFocus:true,name:"SEVERITY_CODE",id:"DC0046F_SEVERITY_CODE",dataIndex:"SEVERITY_CODE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.SEVERITY_CODE||"Severity_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STATUS_CODE", new N21.DataComp.LOV0032({xtype: "LOV0032",selectOnFocus:true,name:"STATUS_CODE",id:"DC0046F_STATUS_CODE",dataIndex:"STATUS_CODE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.STATUS_CODE||"Status_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PRIORITY_CODE", new N21.DataComp.LOV0034({xtype: "LOV0034",selectOnFocus:true,name:"PRIORITY_CODE",id:"DC0046F_PRIORITY_CODE",dataIndex:"PRIORITY_CODE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PRIORITY_CODE||"Priority_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("AFF_CMP_TYPE_CODE", new N21.DataComp.LOV0035({xtype: "LOV0035",paramMapping: [{param:"p_project_id",field:"DC0046F_PROJECT_ID"}],selectOnFocus:true,name:"AFF_CMP_TYPE_CODE",id:"DC0046F_AFF_CMP_TYPE_CODE",dataIndex:"AFF_CMP_TYPE_CODE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.AFF_CMP_TYPE_CODE||"Aff_cmp_type_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("AFF_CMP", new Ext.form.TextField ({xtype: "textfield",name:"AFF_CMP",id:"DC0046F_AFF_CMP",dataIndex:"AFF_CMP",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.AFF_CMP||"Aff_cmp",insert_allowed:true,update_allowed:true})   );
       this.fields.add("AFF_PROJECT_RELEASE_CODE", new Ext.form.TextField ({xtype: "textfield",name:"AFF_PROJECT_RELEASE_CODE",id:"DC0046F_AFF_PROJECT_RELEASE_CODE",dataIndex:"AFF_PROJECT_RELEASE_CODE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.AFF_PROJECT_RELEASE_CODE||"Aff_project_release_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EFFORT_UNIT", new N21.DataComp.LOV0037({xtype: "LOV0037",selectOnFocus:true,name:"EFFORT_UNIT",id:"DC0046F_EFFORT_UNIT",dataIndex:"EFFORT_UNIT",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EFFORT_UNIT||"Effort_unit",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ESTIMATE_EFFORT", new Ext.form.NumberField ({xtype: "numberfield",name:"ESTIMATE_EFFORT",id:"DC0046F_ESTIMATE_EFFORT",dataIndex:"ESTIMATE_EFFORT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ESTIMATE_EFFORT||"Estimate_effort",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("ACTUAL_EFFORT", new Ext.form.NumberField ({xtype: "numberfield",name:"ACTUAL_EFFORT",id:"DC0046F_ACTUAL_EFFORT",dataIndex:"ACTUAL_EFFORT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACTUAL_EFFORT||"Actual_effort",disabled:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("IS_CLOSED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_CLOSED",id:"DC0046F_IS_CLOSED",dataIndex:"IS_CLOSED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_CLOSED||"Is_closed",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DESCRIPTION", new Ext.form.TextArea ({xtype: "textarea",name:"DESCRIPTION",id:"DC0046F_DESCRIPTION",dataIndex:"DESCRIPTION",width:350,height:120,allowBlank:true,labelSeparator: "",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0046F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0046F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0046F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0046F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",disabled:true})   );
       this.fields.add("ASSIGNED_TO", new Ext.form.TextField ({xtype: "textfield",name:"ASSIGNED_TO",id:"DC0046F_ASSIGNED_TO",dataIndex:"ASSIGNED_TO",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ASSIGNED_TO||"Assigned_to",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PLAN_STARTDATE", new Ext.form.DateField ({xtype: "datefield",name:"PLAN_STARTDATE",id:"DC0046F_PLAN_STARTDATE",dataIndex:"PLAN_STARTDATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PLAN_STARTDATE||"Plan_startdate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("PLAN_ENDDATE", new Ext.form.DateField ({xtype: "datefield",name:"PLAN_ENDDATE",id:"DC0046F_PLAN_ENDDATE",dataIndex:"PLAN_ENDDATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PLAN_ENDDATE||"Plan_enddate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("ACT_STARTDATE", new Ext.form.DateField ({xtype: "datefield",name:"ACT_STARTDATE",id:"DC0046F_ACT_STARTDATE",dataIndex:"ACT_STARTDATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACT_STARTDATE||"Act_startdate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("ACT_ENDDATE", new Ext.form.DateField ({xtype: "datefield",name:"ACT_ENDDATE",id:"DC0046F_ACT_ENDDATE",dataIndex:"ACT_ENDDATE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACT_ENDDATE||"Act_enddate",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );

       this.layoutItems.add("DC0048",
             new Ext.Window({ xtype:"window", modal:true, title:N21.DataComp.DC0048.prototype.resourceBundle.DcProperty.Title,  closeAction:"hide",closable:true,layout:"fit", width:500, height:420, items:{xtype:"DC0048",id:"DC0048", parentDcRelation:{name:"DC0046F",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]}         }} ) ); 
       this.layoutItems.add("Timing",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Timing||"Timing",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("IS_CLOSED"),this.fields.get("PLAN_STARTDATE"),this.fields.get("PLAN_ENDDATE"),this.fields.get("ACT_STARTDATE"),this.fields.get("ACT_ENDDATE")]});
       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")]});
       this.layoutItems.add("C3",
             { layout:"form",columnWidth:.25, items:[ this.layoutItems.get("Timing"),this.layoutItems.get("Modified")]}); 
       this.layoutItems.add("Impact",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Impact||"Impact",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("AFF_CMP_TYPE_CODE"),this.fields.get("AFF_CMP"),this.fields.get("AFF_PROJECT_RELEASE_CODE")]});
       this.layoutItems.add("Effort",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Effort||"Effort",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("EFFORT_UNIT"),this.fields.get("ESTIMATE_EFFORT"),this.fields.get("ACTUAL_EFFORT")]});
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("Impact"),this.layoutItems.get("Effort")]}); 
       this.layoutItems.add("Info",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Info||"Info",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("PROJECT_NAME"),this.fields.get("TITLE"),this.fields.get("ISSUE_TYPE_CODE"),this.fields.get("SEVERITY_CODE"),this.fields.get("STATUS_CODE"),this.fields.get("PRIORITY_CODE"),this.fields.get("ASSIGNED_TO")]});
       this.layoutItems.add("Notes",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Notes||"Notes",autoHeight:true,collapsible: true,labelWidth:1,width:"90%",items:[ this.fields.get("DESCRIPTION")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("PROJECT_ID"),this.fields.get("ID"),this.layoutItems.get("Info"),this.layoutItems.get("Notes")]}); 
       this.layoutItems.add("DC0055",
             new Ext.Window({ xtype:"window", modal:true, title:N21.DataComp.DC0055.prototype.resourceBundle.DcProperty.Title,  closeAction:"hide",closable:true,layout:"fit", width:550, height:300, items:{xtype:"DC0055",id:"DC0055", parentDcRelation:{name:"DC0046F",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]}         }} ) ); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2"),this.layoutItems.get("C3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0046F"
          ,firstFocusFieldName:"TITLE"
          ,childDCs: [{name:"DC0048",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]},{name:"DC0055",relation:[{parent:"ID",child:"PROJECT_ISSUE_ID"}]}]
          ,buttons: [{xtype:"button",text:"Timesheet charge",scope:this,handler:function() {this.show_window("DC0055");}  },{xtype:"button",text:"Notes",scope:this,handler:function() {this.show_window("DC0048");}  }]
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
          ,mdLayout:"tab"
          ,border: false
          ,items: [
              {
                xtype:"tabpanel"
               ,id:"MDTab"
               ,region:"center"
               ,defaults:{layout:"fit"}
               ,activeItem:0
               ,tabPosition: "bottom"
               ,items: [{
                            title:"List"
                           ,xtype: "DC0046G"
                           ,id: "DC0046G"
                           ,height:350
                       },{
                           title:"Edit Record"
                          ,xtype:"DC0046F"
                          ,id:"DC0046F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

            ]
        }); 

       N21.DataComp.DC0046.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0046", N21.DataComp.DC0046);



