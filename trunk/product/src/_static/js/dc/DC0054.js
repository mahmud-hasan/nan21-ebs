/** 
 * Data Component: DC0054G, Title: Project component types def.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0054G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PROJECT_ID", type:"float" }
         ,{name:"PROJECT_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0054"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0054"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROJECT_ID",header:this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",width:100,dataIndex:'PROJECT_ID',hidden:true,sortable:true}
              ,{ id:"PROJECT_NAME",header:this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",width:100,dataIndex:'PROJECT_NAME',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0054_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_PROJECT_ID",id:"DC0054_QRY_PROJECT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id"}
               ,{xtype: "LOV0033",displayColumn: "NAME",name:"QRY_PROJECT_NAME",id:"DC0054_QRY_PROJECT_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_NAME||"Project"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0054_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0054_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
          ]
          ,dataComponentName:"DC0054G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0054G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0054G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ID:""
              ,PROJECT_NAME:""
              ,CODE:""
              ,NAME:""});
     }
  });
  Ext.reg("DC0054G", N21.DataComp.DC0054G);
/** 
 * Data Component: DC0054F, Title: Project component types def.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0054F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0054G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0054F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROJECT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"PROJECT_ID",id:"DC0054F_PROJECT_ID",dataIndex:"PROJECT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_ID||"Project_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROJECT_NAME", new N21.DataComp.LOV0033({xtype: "LOV0033",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0054F_PROJECT_ID"}],selectOnFocus:true,name:"PROJECT_NAME",id:"DC0054F_PROJECT_NAME",dataIndex:"PROJECT_NAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PROJECT_NAME||"Project",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0054F_CODE",dataIndex:"CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0054F_NAME",dataIndex:"NAME",width:180,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("PROJECT_ID")
                 ,this.fields.get("PROJECT_NAME")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0054F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0054F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0054F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROJECT_ID:""
              ,PROJECT_NAME:""
              ,CODE:""
              ,NAME:""});
     }


  });
  Ext.reg("DC0054F", N21.DataComp.DC0054F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0054
 * Title: Project component types def.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0054 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0054"
          ,masterName:"DC0054G"
          ,detailName:"DC0054F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0054G",id: "DC0054G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0054F",id: "DC0054F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0054.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0054", N21.DataComp.DC0054);



