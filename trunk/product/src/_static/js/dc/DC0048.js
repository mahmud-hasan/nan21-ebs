/** 
 * Data Component: DC0048G, Title: Project issue notes
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0048G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PROJECT_ISSUE_ID", type:"float" }
         ,{name:"NOTE", type:"string" }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0048_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("PROJECT_ISSUE_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PROJECT_ISSUE_ID",id:"DC0048_QRY_PROJECT_ISSUE_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id"})  );
         this.queryFields.add("NOTE", new Ext.form.TextArea ({xtype: "textarea",name:"QRY_NOTE",id:"DC0048_QRY_NOTE",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTE||"Note"})  );
         this.queryFields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0048_QRY_CREATEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby"})  );
         this.queryFields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CREATEDON",id:"DC0048_QRY_CREATEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0048_QRY_MODIFIEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby"})  );
         this.queryFields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0048_QRY_MODIFIEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",format:Ext.DATE_FORMAT})  );
  
       this.queryFieldsVisible = [  "NOTE","CREATEDBY","CREATEDON","MODIFIEDBY","MODIFIEDON" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0048"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0048"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROJECT_ISSUE_ID",header:this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id",width:100,dataIndex:'PROJECT_ISSUE_ID',hidden:true,sortable:true}
              ,{ id:"NOTE",header:this.resourceBundle.FieldLabel.NOTE||"Note",width:100,dataIndex:'NOTE',sortable:true}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",width:100,dataIndex:'CREATEDBY',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Createdon",width:100,dataIndex:'CREATEDON',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
          ]
          ,dataComponentName:"DC0048G"
          ,queryArraySize:-1
        });
       N21.DataComp.DC0048G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0048G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ISSUE_ID:""
              ,NOTE:""
              ,CREATEDBY:""
              ,CREATEDON:""
              ,MODIFIEDBY:""
              ,MODIFIEDON:""});
     }
  });
  Ext.reg("DC0048G", N21.DataComp.DC0048G);
/** 
 * Data Component: DC0048F, Title: Project issue notes
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0048F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0048G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0048F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROJECT_ISSUE_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PROJECT_ISSUE_ID",id:"DC0048F_PROJECT_ISSUE_ID",dataIndex:"PROJECT_ISSUE_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ISSUE_ID||"Project_issue_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTE", new Ext.form.TextArea ({xtype: "textarea",name:"NOTE",id:"DC0048F_NOTE",dataIndex:"NOTE",width:350,height:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NOTE||"Note",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("PROJECT_ISSUE_ID")
                 ,this.fields.get("NOTE")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0048F"
          ,firstFocusFieldName:"NOTE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0048F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0048F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ISSUE_ID:""
              ,NOTE:""
              ,CREATEDBY:""
              ,CREATEDON:""
              ,MODIFIEDBY:""
              ,MODIFIEDON:""});
     }


  });
  Ext.reg("DC0048F", N21.DataComp.DC0048F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0048
 * Title: Project issue notes
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0048 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0048"
          ,masterName:"DC0048G"
          ,detailName:"DC0048F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0048G",id: "DC0048G",region:"north" ,split:true,height:160,minHeight:0}
             ,{xtype: "DC0048F",id: "DC0048F",region:"center",split:true,autoScroll:true}
            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0048.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0048", N21.DataComp.DC0048);



