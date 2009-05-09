/** 
 * Data Component: DC0024G, Title: Accounting period
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0024G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"ACCYEAR_CODE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"PREV_PERIOD_NAME", type:"string" }
         ,{name:"OPENED", type:"string" }
         ,{name:"CLOSED", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"IS_FIRST_PERIOD", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"PERIODTYPE", type:"string" }
         ,{name:"PROCESSING", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0024F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0024F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0024F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0024F_QRY_CLIENT_ID"}],displayColumn: "CODE"}));
       this.queryFields.add("ACCYEAR_CODE",new  N21.DataComp.LOV0011({name:"QRY_ACCYEAR_CODE",id:"DC0024F_QRY_ACCYEAR_CODE",fieldLabel: this.resourceBundle.FieldLabel.ACCYEAR_CODE||"Accyear",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,paramMapping: [{param:"p_client_id",field:"DC0024F_QRY_CLIENT_ID"}],displayColumn: "CODE"}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0024F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,caseRestriction:"Upper",style: "text-transform:uppercase;",width:100}));
       this.queryFields.add("CLOSED",new Ext.form.ComboBox({name:"QRY_CLOSED",id:"DC0024F_QRY_CLOSED",fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","ACCYEAR_CODE","CODE","CLOSED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0024"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0024", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:80,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"ACCYEAR_CODE",header:this.resourceBundle.FieldLabel.ACCYEAR_CODE||"Accyear",width:80,dataIndex:'ACCYEAR_CODE',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',hidden:true,sortable:true}
              ,{ id:"STARTDATE",header:this.resourceBundle.FieldLabel.STARTDATE||"Startdate",width:100,dataIndex:'STARTDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ENDDATE",header:this.resourceBundle.FieldLabel.ENDDATE||"Enddate",width:100,dataIndex:'ENDDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PREV_PERIOD_NAME",header:this.resourceBundle.FieldLabel.PREV_PERIOD_NAME||"Previous period",width:100,dataIndex:'PREV_PERIOD_NAME',hidden:true,sortable:true}
              ,{ id:"OPENED",header:this.resourceBundle.FieldLabel.OPENED||"Opened",width:50,dataIndex:'OPENED',sortable:true}
              ,{ id:"CLOSED",header:this.resourceBundle.FieldLabel.CLOSED||"Closed",width:50,dataIndex:'CLOSED',sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"IS_FIRST_PERIOD",header:this.resourceBundle.FieldLabel.IS_FIRST_PERIOD||"Is first period?",width:50,dataIndex:'IS_FIRST_PERIOD',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"PERIODTYPE",header:this.resourceBundle.FieldLabel.PERIODTYPE||"Periodtype",width:100,dataIndex:'PERIODTYPE',hidden:true,sortable:true}
              ,{ id:"PROCESSING",header:this.resourceBundle.FieldLabel.PROCESSING||"Processing",width:100,dataIndex:'PROCESSING',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0024G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0024G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0024G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ACCYEAR_CODE:""
              ,CODE:""
              ,NAME:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,PREV_PERIOD_NAME:""
              ,OPENED:""
              ,CLOSED:""
              ,NOTES:""
              ,IS_FIRST_PERIOD:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,PERIODTYPE:""
              ,PROCESSING:""});
     }
  });
  Ext.reg("DC0024G", N21.DataComp.DC0024G);
/** 
 * Data Component: DC0024F, Title: Accounting period
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0024F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0024G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0024F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0024F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:false}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0024F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0024F_CLIENT_ID"}],displayColumn: "CODE"}));
       this.fields.add("ACCYEAR_CODE",new  N21.DataComp.LOV0011({name:"ACCYEAR_CODE",id:"DC0024F_ACCYEAR_CODE",dataIndex:"ACCYEAR_CODE",fieldLabel: this.resourceBundle.FieldLabel.ACCYEAR_CODE||"Accyear",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:false,selectOnFocus:true,paramMapping: [{param:"p_client_id",field:"DC0024F.CLIENT_ID"}],displayColumn: "CODE"}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0024F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",caseRestriction:"Upper",width:150,insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;"}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0024F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:false,update_allowed:false}));
       this.fields.add("STARTDATE",new Ext.form.DateField({name:"STARTDATE",id:"DC0024F_STARTDATE",dataIndex:"STARTDATE",fieldLabel: this.resourceBundle.FieldLabel.STARTDATE||"Startdate",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("ENDDATE",new Ext.form.DateField({name:"ENDDATE",id:"DC0024F_ENDDATE",dataIndex:"ENDDATE",fieldLabel: this.resourceBundle.FieldLabel.ENDDATE||"Enddate",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("PREV_PERIOD_NAME",new  N21.DataComp.LOV0023({name:"PREV_PERIOD_NAME",id:"DC0024F_PREV_PERIOD_NAME",dataIndex:"PREV_PERIOD_NAME",fieldLabel: this.resourceBundle.FieldLabel.PREV_PERIOD_NAME||"Previous period",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,paramMapping: [{param:"p_client_id",field:"DC0024F.CLIENT_ID"}],displayColumn: "NAME"}));
       this.fields.add("OPENED",new Ext.ux.form.XCheckbox({name:"OPENED",id:"DC0024F_OPENED",dataIndex:"OPENED",fieldLabel: this.resourceBundle.FieldLabel.OPENED||"Opened",allowBlank:true,insert_allowed:false,update_allowed:false}));
       this.fields.add("CLOSED",new Ext.ux.form.XCheckbox({name:"CLOSED",id:"DC0024F_CLOSED",dataIndex:"CLOSED",fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed",allowBlank:true,insert_allowed:false,update_allowed:false}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0024F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:150,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_FIRST_PERIOD",new Ext.ux.form.XCheckbox({name:"IS_FIRST_PERIOD",id:"DC0024F_IS_FIRST_PERIOD",dataIndex:"IS_FIRST_PERIOD",fieldLabel: this.resourceBundle.FieldLabel.IS_FIRST_PERIOD||"Is first period?",allowBlank:true,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("ACCYEAR_CODE"),this.fields.get("CODE"),this.fields.get("NAME"),this.fields.get("STARTDATE"),this.fields.get("ENDDATE"),this.fields.get("PREV_PERIOD_NAME"),this.fields.get("OPENED"),this.fields.get("CLOSED"),this.fields.get("NOTES"),this.fields.get("IS_FIRST_PERIOD")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0024F"
          ,firstFocusFieldName:"CODE"
          ,firstFocusFieldNameInsert:"CLIENT_CODE"
          ,buttons: [{xtype:"button",scope:this,text:"Open period",handler:function() {this.callProcedure("OpenAccPeriod");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0024F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0024F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ACCYEAR_CODE:""
              ,CODE:""
              ,NAME:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,PREV_PERIOD_NAME:""
              ,OPENED:""
              ,CLOSED:""
              ,NOTES:""
              ,IS_FIRST_PERIOD:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,PERIODTYPE:""
              ,PROCESSING:""});
     }


  });
  Ext.reg("DC0024F", N21.DataComp.DC0024F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0024
 * Title: Accounting period
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0024 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0024"
          ,masterName:"DC0024G"
          ,detailName:"DC0024F"
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
                            xtype: "DC0024G"
                           ,id: "DC0024G"
                           ,height:350
                       },{
                           xtype:"DC0024F"
                          ,id:"DC0024F"
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
,"->","<span class='dcName'>DC0024</span>"          )
        }); 

       N21.DataComp.DC0024.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0024", N21.DataComp.DC0024);



