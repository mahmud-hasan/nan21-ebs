/** 
 * Data Component: DC0045G, Title: Projects
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0045G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"TYPE_CODE", type:"string" }
         ,{name:"STATUS_CODE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0045"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0045"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
              ,{ id:"TYPE_CODE",header:this.resourceBundle.FieldLabel.TYPE_CODE||"Type_code",width:100,dataIndex:'TYPE_CODE',sortable:true}
              ,{ id:"STATUS_CODE",header:this.resourceBundle.FieldLabel.STATUS_CODE||"Status_code",width:100,dataIndex:'STATUS_CODE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Createdon",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0045_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0008",displayColumn: "CODE",name:"QRY_CLIENT_NAME",id:"DC0045_QRY_CLIENT_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"}
               ,{xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0045_QRY_CLIENT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0045_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "LOV0036",name:"QRY_TYPE_CODE",id:"DC0045_QRY_TYPE_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.TYPE_CODE||"Type_code"}
               ,{xtype: "textfield",name:"QRY_STATUS_CODE",id:"DC0045_QRY_STATUS_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.STATUS_CODE||"Status_code"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0045_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0045_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0045_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0045_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby"}
          ]
          ,dataComponentName:"DC0045G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0045G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0045G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_NAME:""
              ,CLIENT_ID:""
              ,NAME:""
              ,TYPE_CODE:""
              ,STATUS_CODE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0045G", N21.DataComp.DC0045G);
/** 
 * Data Component: DC0045F, Title: Projects
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0045F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0045G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0045F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",displayColumn: "CODE",fieldMapping: [{column:"ID",field:"DC0045F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0045F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0045F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0045F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TYPE_CODE", new N21.DataComp.LOV0036({xtype: "LOV0036",selectOnFocus:true,name:"TYPE_CODE",id:"DC0045F_TYPE_CODE",dataIndex:"TYPE_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.TYPE_CODE||"Type_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("STATUS_CODE", new Ext.form.TextField ({xtype: "textfield",name:"STATUS_CODE",id:"DC0045F_STATUS_CODE",dataIndex:"STATUS_CODE",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.STATUS_CODE||"Status_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0045F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Createdon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0045F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Createdby",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0045F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modifiedon",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0045F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modifiedby",disabled:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("NAME")
                 ,this.fields.get("TYPE_CODE")
                 ,this.fields.get("STATUS_CODE")
                 ,this.fields.get("CREATEDON")
                 ,this.fields.get("CREATEDBY")
                 ,this.fields.get("MODIFIEDON")
                 ,this.fields.get("MODIFIEDBY")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0045F"
          ,firstFocusFieldName:"NAME"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0045F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0045F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_NAME:""
              ,CLIENT_ID:""
              ,NAME:""
              ,TYPE_CODE:""
              ,STATUS_CODE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0045F", N21.DataComp.DC0045F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0045
 * Title: Projects
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0045 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0045"
          ,masterName:"DC0045G"
          ,detailName:"DC0045F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0045G",id: "DC0045G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0045F",id: "DC0045F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0045.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0045", N21.DataComp.DC0045);



