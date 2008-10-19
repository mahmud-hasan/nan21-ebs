/** 
 * Data Component: DC0033G, Title: Acc schema attributes definition
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0033G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PROPERTY_NAME", type:"string" }
         ,{name:"PROPERTY_TYPE", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0033"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0033"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PROPERTY_NAME",header:this.resourceBundle.FieldLabel.PROPERTY_NAME||"Property_name",width:100,dataIndex:'PROPERTY_NAME',sortable:true}
              ,{ id:"PROPERTY_TYPE",header:this.resourceBundle.FieldLabel.PROPERTY_TYPE||"Property_type",width:100,dataIndex:'PROPERTY_TYPE',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0033_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "textfield",name:"QRY_PROPERTY_NAME",id:"DC0033_QRY_PROPERTY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.PROPERTY_NAME||"Property_name"}
               ,{xtype: "textfield",name:"QRY_PROPERTY_TYPE",id:"DC0033_QRY_PROPERTY_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PROPERTY_TYPE||"Property_type"}
               ,{xtype: "textarea",name:"QRY_DESCRIPTION",id:"DC0033_QRY_DESCRIPTION",width:120,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0033_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0033_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0033_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0033_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
          ]
          ,dataComponentName:"DC0033G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0033G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0033G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROPERTY_NAME:""
              ,PROPERTY_TYPE:""
              ,DESCRIPTION:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0033G", N21.DataComp.DC0033G);
/** 
 * Data Component: DC0033F, Title: Acc schema attributes definition
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0033F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0033G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0033F_ID",dataIndex:"ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROPERTY_NAME", new Ext.form.TextField ({xtype: "textfield",name:"PROPERTY_NAME",id:"DC0033F_PROPERTY_NAME",dataIndex:"PROPERTY_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.PROPERTY_NAME||"Property_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PROPERTY_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"PROPERTY_TYPE",id:"DC0033F_PROPERTY_TYPE",dataIndex:"PROPERTY_TYPE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PROPERTY_TYPE||"Property_type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DESCRIPTION", new Ext.form.TextArea ({xtype: "textarea",name:"DESCRIPTION",id:"DC0033F_DESCRIPTION",dataIndex:"DESCRIPTION",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("PROPERTY_NAME")
                 ,this.fields.get("PROPERTY_TYPE")
                 ,this.fields.get("DESCRIPTION")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0033F"
          ,firstFocusFieldName:"PROPERTY_NAME"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0033F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0033F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PROPERTY_NAME:""
              ,PROPERTY_TYPE:""
              ,DESCRIPTION:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0033F", N21.DataComp.DC0033F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0033
 * Title: Acc schema attributes definition
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0033 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0033"
          ,masterName:"DC0033G"
          ,detailName:"DC0033F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0033G",id: "DC0033G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0033F",id: "DC0033F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0033.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0033", N21.DataComp.DC0033);



