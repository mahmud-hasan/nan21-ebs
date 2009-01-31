/** 
 * Data Component: DC0023G, Title: Accounting year
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0023G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"STARTDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ENDDATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"PREV_YEAR_CODE", type:"string" }
         ,{name:"OPENED", type:"string" }
         ,{name:"CLOSED", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"IS_FIRST_YEAR", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0023F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0023F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Name",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0023F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0023F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0023F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("OPENED",new Ext.form.ComboBox({name:"QRY_OPENED",id:"DC0023F_QRY_OPENED",fieldLabel: this.resourceBundle.FieldLabel.OPENED||"Opened",allowBlank:true,width:40,store:["Y","N"]}));
       this.queryFields.add("CLOSED",new Ext.form.ComboBox({name:"QRY_CLOSED",id:"DC0023F_QRY_CLOSED",fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed",allowBlank:true,width:40,store:["Y","N"]}));
  
       this.queryFieldsVisible = [  "CODE","CLIENT_CODE","OPENED","CLOSED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0023"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0023"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Name",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"STARTDATE",header:this.resourceBundle.FieldLabel.STARTDATE||"Startdate",width:100,dataIndex:'STARTDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"ENDDATE",header:this.resourceBundle.FieldLabel.ENDDATE||"Enddate",width:100,dataIndex:'ENDDATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"PREV_YEAR_CODE",header:this.resourceBundle.FieldLabel.PREV_YEAR_CODE||"Previous year",width:100,dataIndex:'PREV_YEAR_CODE',hidden:true,sortable:true}
              ,{ id:"OPENED",header:this.resourceBundle.FieldLabel.OPENED||"Opened",width:100,dataIndex:'OPENED',hidden:true,sortable:true}
              ,{ id:"CLOSED",header:this.resourceBundle.FieldLabel.CLOSED||"Closed",width:50,dataIndex:'CLOSED',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"IS_FIRST_YEAR",header:this.resourceBundle.FieldLabel.IS_FIRST_YEAR||"Is first year?",width:100,dataIndex:'IS_FIRST_YEAR',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0023G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0023G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0023G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,PREV_YEAR_CODE:""
              ,OPENED:""
              ,CLOSED:""
              ,NOTES:""
              ,IS_FIRST_YEAR:""});
     }
  });
  Ext.reg("DC0023G", N21.DataComp.DC0023G);
/** 
 * Data Component: DC0023F, Title: Accounting year
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0023F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0023G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0023F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0023F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Name",allowBlank:false,labelSeparator:":*",width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0023F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0023F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0023F_CLIENT_ID"}]}));
       this.fields.add("STARTDATE",new Ext.form.DateField({name:"STARTDATE",id:"DC0023F_STARTDATE",dataIndex:"STARTDATE",fieldLabel: this.resourceBundle.FieldLabel.STARTDATE||"Startdate",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("ENDDATE",new Ext.form.DateField({name:"ENDDATE",id:"DC0023F_ENDDATE",dataIndex:"ENDDATE",fieldLabel: this.resourceBundle.FieldLabel.ENDDATE||"Enddate",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("PREV_YEAR_CODE",new  N21.DataComp.LOV0011({name:"PREV_YEAR_CODE",id:"DC0023F_PREV_YEAR_CODE",dataIndex:"PREV_YEAR_CODE",fieldLabel: this.resourceBundle.FieldLabel.PREV_YEAR_CODE||"Previous year",allowBlank:true,width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"CODE",field:"DC0023F_PREV_YEAR_CODE"}],paramMapping: [{param:"p_client_id",field:"DC0023F.CLIENT_ID"}]}));
       this.fields.add("OPENED",new Ext.ux.form.XCheckbox({name:"OPENED",id:"DC0023F_OPENED",dataIndex:"OPENED",fieldLabel: this.resourceBundle.FieldLabel.OPENED||"Opened",allowBlank:true,width:30,insert_allowed:false,update_allowed:false}));
       this.fields.add("CLOSED",new Ext.ux.form.XCheckbox({name:"CLOSED",id:"DC0023F_CLOSED",dataIndex:"CLOSED",fieldLabel: this.resourceBundle.FieldLabel.CLOSED||"Closed",allowBlank:true,width:30,insert_allowed:false,update_allowed:false}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0023F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_FIRST_YEAR",new Ext.ux.form.XCheckbox({name:"IS_FIRST_YEAR",id:"DC0023F_IS_FIRST_YEAR",dataIndex:"IS_FIRST_YEAR",fieldLabel: this.resourceBundle.FieldLabel.IS_FIRST_YEAR||"Is first year?",allowBlank:true,width:30,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CODE"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("STARTDATE"),this.fields.get("ENDDATE"),this.fields.get("PREV_YEAR_CODE"),this.fields.get("OPENED"),this.fields.get("CLOSED"),this.fields.get("NOTES"),this.fields.get("IS_FIRST_YEAR")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0023F"
          ,firstFocusFieldName:"NAME"
          ,buttons: [{xtype:"button",scope:this,text:"Open year",handler:function() {this.callProcedure("OpenYear");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0023F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0023F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,STARTDATE:""
              ,ENDDATE:""
              ,PREV_YEAR_CODE:""
              ,OPENED:""
              ,CLOSED:""
              ,NOTES:""
              ,IS_FIRST_YEAR:""});
     }


  });
  Ext.reg("DC0023F", N21.DataComp.DC0023F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0023
 * Title: Accounting year
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0023 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0023"
          ,masterName:"DC0023G"
          ,detailName:"DC0023F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0023G",id: "DC0023G",region:"west"  ,split:true,width:"54%",minWidth:0}
             ,{xtype: "DC0023F",id: "DC0023F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0023</span>"          )
        }); 

       N21.DataComp.DC0023.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0023", N21.DataComp.DC0023);



