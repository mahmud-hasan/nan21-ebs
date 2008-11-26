/** 
 * Data Component: DC0036G, Title: UI dictionary codes
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0036G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UIDC_CODE", type:"string" }
         ,{name:"MSG_TYPE", type:"string" }
         ,{name:"MSG_CODE", type:"string" }
         ,{name:"MAINTAINED_BY", type:"string" }
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
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0036_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("UIDC_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_UIDC_CODE",id:"DC0036_QRY_UIDC_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code"})  );
         this.queryFields.add("MSG_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MSG_TYPE",id:"DC0036_QRY_MSG_TYPE",width:100,fieldLabel: this.resourceBundle.FieldLabel.MSG_TYPE||"Msg_type"})  );
         this.queryFields.add("MSG_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MSG_CODE",id:"DC0036_QRY_MSG_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.MSG_CODE||"Msg_code"})  );
         this.queryFields.add("MAINTAINED_BY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MAINTAINED_BY",id:"DC0036_QRY_MAINTAINED_BY",width:100,fieldLabel: this.resourceBundle.FieldLabel.MAINTAINED_BY||"Maintained_by"})  );
         this.queryFields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_CREATEDON",id:"DC0036_QRY_CREATEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0036_QRY_CREATEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"})  );
         this.queryFields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0036_QRY_MODIFIEDON",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0036_QRY_MODIFIEDBY",width:100,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"})  );
  
       this.queryFieldsVisible = [  "UIDC_CODE","MSG_TYPE","MSG_CODE","MAINTAINED_BY","CREATEDON","CREATEDBY","MODIFIEDON","MODIFIEDBY" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0036"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0036"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"UIDC_CODE",header:this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",width:100,dataIndex:'UIDC_CODE',sortable:true}
              ,{ id:"MSG_TYPE",header:this.resourceBundle.FieldLabel.MSG_TYPE||"Msg_type",width:100,dataIndex:'MSG_TYPE',sortable:true}
              ,{ id:"MSG_CODE",header:this.resourceBundle.FieldLabel.MSG_CODE||"Msg_code",width:100,dataIndex:'MSG_CODE',sortable:true}
              ,{ id:"MAINTAINED_BY",header:this.resourceBundle.FieldLabel.MAINTAINED_BY||"Maintained_by",width:100,dataIndex:'MAINTAINED_BY',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0036G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0036G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0036G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDC_CODE:""
              ,MSG_TYPE:""
              ,MSG_CODE:""
              ,MAINTAINED_BY:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0036G", N21.DataComp.DC0036G);
/** 
 * Data Component: DC0036F, Title: UI dictionary codes
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0036F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0036G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0036F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("UIDC_CODE", new Ext.form.TextField ({xtype: "textfield",name:"UIDC_CODE",id:"DC0036F_UIDC_CODE",dataIndex:"UIDC_CODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MSG_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"MSG_TYPE",id:"DC0036F_MSG_TYPE",dataIndex:"MSG_TYPE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MSG_TYPE||"Msg_type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MSG_CODE", new Ext.form.TextField ({xtype: "textfield",name:"MSG_CODE",id:"DC0036F_MSG_CODE",dataIndex:"MSG_CODE",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MSG_CODE||"Msg_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MAINTAINED_BY", new Ext.form.TextField ({xtype: "textfield",name:"MAINTAINED_BY",id:"DC0036F_MAINTAINED_BY",dataIndex:"MAINTAINED_BY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MAINTAINED_BY||"Maintained_by",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0036F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0036F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("UIDC_CODE")
                 ,this.fields.get("MSG_TYPE")
                 ,this.fields.get("MSG_CODE")
                 ,this.fields.get("MAINTAINED_BY")
                 ,this.fields.get("MODIFIEDON")
                 ,this.fields.get("MODIFIEDBY")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0036F"
          ,firstFocusFieldName:"UIDC_CODE"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0036F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0036F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDC_CODE:""
              ,MSG_TYPE:""
              ,MSG_CODE:""
              ,MAINTAINED_BY:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0036F", N21.DataComp.DC0036F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0036
 * Title: UI dictionary codes
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0036 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0036"
          ,masterName:"DC0036G"
          ,detailName:"DC0036F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0036G",id: "DC0036G",region:"west"  ,split:true,width:"50%",minWidth:0}
             ,{xtype: "DC0036F",id: "DC0036F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0036.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0036", N21.DataComp.DC0036);



