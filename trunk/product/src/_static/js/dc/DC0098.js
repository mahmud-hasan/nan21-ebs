/** 
 * Data Component: DC0098G, Title: Transports
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0098G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"TRANSPTYPE_CODE", type:"string" }
         ,{name:"TRANSPSTAT_CODE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"VEHICLE_REGNO", type:"string" }
         ,{name:"VEHICLE_ID", type:"float" }
         ,{name:"PLANNED_DEP_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"EFECTIVE_DEP_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"PLANNED_ARRIVE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"EFECTIVE_ARRIVE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
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
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0098F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("TRANSPTYPE_CODE",new  N21.DataComp.LOV0058({name:"QRY_TRANSPTYPE_CODE",id:"DC0098F_QRY_TRANSPTYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.TRANSPTYPE_CODE||"Type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("TRANSPSTAT_CODE",new  N21.DataComp.LOV0059({name:"QRY_TRANSPSTAT_CODE",id:"DC0098F_QRY_TRANSPSTAT_CODE",fieldLabel: this.resourceBundle.FieldLabel.TRANSPSTAT_CODE||"Status",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0098F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:100}));
       this.queryFields.add("VEHICLE_ID",new Ext.form.Hidden({name:"QRY_VEHICLE_ID",id:"DC0098F_QRY_VEHICLE_ID",fieldLabel: this.resourceBundle.FieldLabel.VEHICLE_ID||"Vehicle ID",allowBlank:true,width:100}));
       this.queryFields.add("VEHICLE_REGNO",new  N21.DataComp.LOV0061({name:"QRY_VEHICLE_REGNO",id:"DC0098F_QRY_VEHICLE_REGNO",fieldLabel: this.resourceBundle.FieldLabel.VEHICLE_REGNO||"Vehicle reg. no",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "TRANSPTYPE_CODE","TRANSPSTAT_CODE","CODE","VEHICLE_REGNO" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0098"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0098"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"TRANSPTYPE_CODE",header:this.resourceBundle.FieldLabel.TRANSPTYPE_CODE||"Type",width:100,dataIndex:'TRANSPTYPE_CODE',sortable:true}
              ,{ id:"TRANSPSTAT_CODE",header:this.resourceBundle.FieldLabel.TRANSPSTAT_CODE||"Status",width:100,dataIndex:'TRANSPSTAT_CODE',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"VEHICLE_REGNO",header:this.resourceBundle.FieldLabel.VEHICLE_REGNO||"Vehicle reg. no",width:100,dataIndex:'VEHICLE_REGNO',sortable:true}
              ,{ id:"VEHICLE_ID",header:this.resourceBundle.FieldLabel.VEHICLE_ID||"Vehicle ID",width:100,dataIndex:'VEHICLE_ID',hidden:true,sortable:true}
              ,{ id:"PLANNED_DEP_DATE",header:this.resourceBundle.FieldLabel.PLANNED_DEP_DATE||"Planned depart. on",width:100,dataIndex:'PLANNED_DEP_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"EFECTIVE_DEP_DATE",header:this.resourceBundle.FieldLabel.EFECTIVE_DEP_DATE||"Actual dept. on",width:100,dataIndex:'EFECTIVE_DEP_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PLANNED_ARRIVE_DATE",header:this.resourceBundle.FieldLabel.PLANNED_ARRIVE_DATE||"Planned arrive on",width:100,dataIndex:'PLANNED_ARRIVE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"EFECTIVE_ARRIVE_DATE",header:this.resourceBundle.FieldLabel.EFECTIVE_ARRIVE_DATE||"Actual arrive on",width:100,dataIndex:'EFECTIVE_ARRIVE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0098G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0098G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0098G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,TRANSPTYPE_CODE:""
              ,TRANSPSTAT_CODE:""
              ,CODE:""
              ,VEHICLE_REGNO:""
              ,VEHICLE_ID:""
              ,PLANNED_DEP_DATE:""
              ,EFECTIVE_DEP_DATE:""
              ,PLANNED_ARRIVE_DATE:""
              ,EFECTIVE_ARRIVE_DATE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0098G", N21.DataComp.DC0098G);
/** 
 * Data Component: DC0098F, Title: Transports
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0098F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0098G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0098F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("TRANSPTYPE_CODE",new  N21.DataComp.LOV0058({name:"TRANSPTYPE_CODE",id:"DC0098F_TRANSPTYPE_CODE",dataIndex:"TRANSPTYPE_CODE",fieldLabel: this.resourceBundle.FieldLabel.TRANSPTYPE_CODE||"Type",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("TRANSPSTAT_CODE",new  N21.DataComp.LOV0059({name:"TRANSPSTAT_CODE",id:"DC0098F_TRANSPSTAT_CODE",dataIndex:"TRANSPSTAT_CODE",fieldLabel: this.resourceBundle.FieldLabel.TRANSPSTAT_CODE||"Status",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0098F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("VEHICLE_ID",new Ext.form.Hidden({name:"VEHICLE_ID",id:"DC0098F_VEHICLE_ID",dataIndex:"VEHICLE_ID",fieldLabel: this.resourceBundle.FieldLabel.VEHICLE_ID||"Vehicle ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("VEHICLE_REGNO",new  N21.DataComp.LOV0061({name:"VEHICLE_REGNO",id:"DC0098F_VEHICLE_REGNO",dataIndex:"VEHICLE_REGNO",fieldLabel: this.resourceBundle.FieldLabel.VEHICLE_REGNO||"Vehicle reg. no",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("PLANNED_DEP_DATE",new Ext.form.DateField({name:"PLANNED_DEP_DATE",id:"DC0098F_PLANNED_DEP_DATE",dataIndex:"PLANNED_DEP_DATE",fieldLabel: this.resourceBundle.FieldLabel.PLANNED_DEP_DATE||"Planned depart. on",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("EFECTIVE_DEP_DATE",new Ext.form.DateField({name:"EFECTIVE_DEP_DATE",id:"DC0098F_EFECTIVE_DEP_DATE",dataIndex:"EFECTIVE_DEP_DATE",fieldLabel: this.resourceBundle.FieldLabel.EFECTIVE_DEP_DATE||"Actual dept. on",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("PLANNED_ARRIVE_DATE",new Ext.form.DateField({name:"PLANNED_ARRIVE_DATE",id:"DC0098F_PLANNED_ARRIVE_DATE",dataIndex:"PLANNED_ARRIVE_DATE",fieldLabel: this.resourceBundle.FieldLabel.PLANNED_ARRIVE_DATE||"Planned arrive on",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("EFECTIVE_ARRIVE_DATE",new Ext.form.DateField({name:"EFECTIVE_ARRIVE_DATE",id:"DC0098F_EFECTIVE_ARRIVE_DATE",dataIndex:"EFECTIVE_ARRIVE_DATE",fieldLabel: this.resourceBundle.FieldLabel.EFECTIVE_ARRIVE_DATE||"Actual arrive on",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));

       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.4,labelAlign:"left",labelWidth:100, items:[ this.fields.get("PLANNED_DEP_DATE"),this.fields.get("EFECTIVE_DEP_DATE"),this.fields.get("PLANNED_ARRIVE_DATE"),this.fields.get("EFECTIVE_ARRIVE_DATE")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CODE"),this.fields.get("TRANSPTYPE_CODE"),this.fields.get("TRANSPSTAT_CODE"),this.fields.get("VEHICLE_REGNO"),this.fields.get("VEHICLE_ID")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0098F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0098F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0098F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,TRANSPTYPE_CODE:""
              ,TRANSPSTAT_CODE:""
              ,CODE:""
              ,VEHICLE_REGNO:""
              ,VEHICLE_ID:""
              ,PLANNED_DEP_DATE:""
              ,EFECTIVE_DEP_DATE:""
              ,PLANNED_ARRIVE_DATE:""
              ,EFECTIVE_ARRIVE_DATE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0098F", N21.DataComp.DC0098F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0098
 * Title: Transports
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0098 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0098"
          ,masterName:"DC0098G"
          ,detailName:"DC0098F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0098G",id: "DC0098G",region:"north" ,split:true,height:300,minHeight:0}
             ,{xtype: "DC0098F",id: "DC0098F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0098</span>"          )
        }); 

       N21.DataComp.DC0098.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0098", N21.DataComp.DC0098);



