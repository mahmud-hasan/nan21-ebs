/** 
 * Data Component: DC0097G, Title: Vehicles
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0097G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"REG_NO", type:"string" }
         ,{name:"VEHICLETYP_CODE", type:"string" }
         ,{name:"ASSET_ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:1 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0097F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("REG_NO",new Ext.form.TextField({name:"QRY_REG_NO",id:"DC0097F_QRY_REG_NO",fieldLabel: this.resourceBundle.FieldLabel.REG_NO||"Registration no",allowBlank:true,width:100}));
       this.queryFields.add("VEHICLETYP_CODE",new  N21.DataComp.LOV0060({name:"QRY_VEHICLETYP_CODE",id:"DC0097F_QRY_VEHICLETYP_CODE",fieldLabel: this.resourceBundle.FieldLabel.VEHICLETYP_CODE||"Vehicle type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("ASSET_ID",new Ext.form.Hidden({name:"QRY_ASSET_ID",id:"DC0097F_QRY_ASSET_ID",fieldLabel: this.resourceBundle.FieldLabel.ASSET_ID||"Asset ID",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "REG_NO","VEHICLETYP_CODE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0097"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0097"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"REG_NO",header:this.resourceBundle.FieldLabel.REG_NO||"Registration no",width:100,dataIndex:'REG_NO',sortable:true}
              ,{ id:"VEHICLETYP_CODE",header:this.resourceBundle.FieldLabel.VEHICLETYP_CODE||"Vehicle type",width:100,dataIndex:'VEHICLETYP_CODE',sortable:true}
              ,{ id:"ASSET_ID",header:this.resourceBundle.FieldLabel.ASSET_ID||"Asset ID",width:100,dataIndex:'ASSET_ID',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0097G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0097G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0097G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,REG_NO:""
              ,VEHICLETYP_CODE:""
              ,ASSET_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0097G", N21.DataComp.DC0097G);
/** 
 * Data Component: DC0097F, Title: Vehicles
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0097F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0097G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0097F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("REG_NO",new Ext.form.TextField({name:"REG_NO",id:"DC0097F_REG_NO",dataIndex:"REG_NO",fieldLabel: this.resourceBundle.FieldLabel.REG_NO||"Registration no",allowBlank:false,labelSeparator:":*",width:120,insert_allowed:true,update_allowed:true}));
       this.fields.add("VEHICLETYP_CODE",new  N21.DataComp.LOV0060({name:"VEHICLETYP_CODE",id:"DC0097F_VEHICLETYP_CODE",dataIndex:"VEHICLETYP_CODE",fieldLabel: this.resourceBundle.FieldLabel.VEHICLETYP_CODE||"Vehicle type",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("ASSET_ID",new Ext.form.Hidden({name:"ASSET_ID",id:"DC0097F_ASSET_ID",dataIndex:"ASSET_ID",fieldLabel: this.resourceBundle.FieldLabel.ASSET_ID||"Asset ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("REG_NO")
                 ,this.fields.get("VEHICLETYP_CODE")
                 ,this.fields.get("ASSET_ID")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0097F"
          ,firstFocusFieldName:"REG_NO"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0097F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0097F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,REG_NO:""
              ,VEHICLETYP_CODE:""
              ,ASSET_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0097F", N21.DataComp.DC0097F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0097
 * Title: Vehicles
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0097 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0097"
          ,masterName:"DC0097G"
          ,detailName:"DC0097F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0097G",id: "DC0097G",region:"west"  ,split:true,width:"50%",minWidth:0}
             ,{xtype: "DC0097F",id: "DC0097F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0097</span>"          )
        }); 

       N21.DataComp.DC0097.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0097", N21.DataComp.DC0097);



