/** 
 * Data Component: DC0030G, Title: Field default values
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0030G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UIDC_CODE", type:"string" }
         ,{name:"FIELD_NAME", type:"string" }
         ,{name:"VALUE_TYPE", type:"string" }
         ,{name:"FIELD_VALUE", type:"string" }
         ,{name:"ACTIVE", type:"string" }
         ,{name:"APPLY_TO_USER", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0030"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0030"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"UIDC_CODE",header:this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",width:100,dataIndex:'UIDC_CODE',sortable:true}
              ,{ id:"FIELD_NAME",header:this.resourceBundle.FieldLabel.FIELD_NAME||"Field_name",width:150,dataIndex:'FIELD_NAME',sortable:true}
              ,{ id:"VALUE_TYPE",header:this.resourceBundle.FieldLabel.VALUE_TYPE||"Value_type",width:100,dataIndex:'VALUE_TYPE',hidden:true,sortable:true}
              ,{ id:"FIELD_VALUE",header:this.resourceBundle.FieldLabel.FIELD_VALUE||"Field_value",width:100,dataIndex:'FIELD_VALUE',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
              ,{ id:"APPLY_TO_USER",header:this.resourceBundle.FieldLabel.APPLY_TO_USER||"Apply_to_user",width:100,dataIndex:'APPLY_TO_USER',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0030_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0028",selectOnFocus:true,name:"QRY_UIDC_CODE",id:"DC0030_QRY_UIDC_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code"}
               ,{xtype: "LOV0029",selectOnFocus:true,name:"QRY_FIELD_NAME",id:"DC0030_QRY_FIELD_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.FIELD_NAME||"Field_name"}
               ,{xtype: "textfield",name:"QRY_VALUE_TYPE",id:"DC0030_QRY_VALUE_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.VALUE_TYPE||"Value_type"}
               ,{xtype: "textarea",name:"QRY_FIELD_VALUE",id:"DC0030_QRY_FIELD_VALUE",width:120,fieldLabel: this.resourceBundle.FieldLabel.FIELD_VALUE||"Field_value"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0030_QRY_ACTIVE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"}
               ,{xtype: "textfield",name:"QRY_APPLY_TO_USER",id:"DC0030_QRY_APPLY_TO_USER",width:120,fieldLabel: this.resourceBundle.FieldLabel.APPLY_TO_USER||"Apply_to_user"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0030_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0030_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0030_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0030_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
          ]
          ,dataComponentName:"DC0030G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0030G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0030G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDC_CODE:""
              ,FIELD_NAME:""
              ,VALUE_TYPE:""
              ,FIELD_VALUE:""
              ,ACTIVE:""
              ,APPLY_TO_USER:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0030G", N21.DataComp.DC0030G);
/** 
 * Data Component: DC0030F, Title: Field default values
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0030F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0030G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0030F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("UIDC_CODE", new N21.DataComp.LOV0028({xtype: "LOV0028",selectOnFocus:true,name:"UIDC_CODE",id:"DC0030F_UIDC_CODE",dataIndex:"UIDC_CODE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"Uidc_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("FIELD_NAME", new N21.DataComp.LOV0029({xtype: "LOV0029",paramMapping: [{param:"p_uidc_code",field:"DC0030F_UIDC_CODE"}],selectOnFocus:true,name:"FIELD_NAME",id:"DC0030F_FIELD_NAME",dataIndex:"FIELD_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.FIELD_NAME||"Field_name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("VALUE_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"VALUE_TYPE",id:"DC0030F_VALUE_TYPE",dataIndex:"VALUE_TYPE",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.VALUE_TYPE||"Value_type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("FIELD_VALUE", new Ext.form.TextArea ({xtype: "textarea",name:"FIELD_VALUE",id:"DC0030F_FIELD_VALUE",dataIndex:"FIELD_VALUE",width:200,height:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.FIELD_VALUE||"Field_value",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACTIVE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACTIVE",id:"DC0030F_ACTIVE",dataIndex:"ACTIVE",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",insert_allowed:true,update_allowed:true})   );
       this.fields.add("APPLY_TO_USER", new Ext.form.TextField ({xtype: "textfield",name:"APPLY_TO_USER",id:"DC0030F_APPLY_TO_USER",dataIndex:"APPLY_TO_USER",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.APPLY_TO_USER||"Apply_to_user",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0030F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0030F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0030F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0030F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",disabled:true})   );

       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("UIDC_CODE"),this.fields.get("FIELD_NAME"),this.fields.get("VALUE_TYPE"),this.fields.get("FIELD_VALUE"),this.fields.get("ACTIVE"),this.fields.get("APPLY_TO_USER"),this.layoutItems.get("Modified")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0030F"
          ,firstFocusFieldName:"FIELD_NAME"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0030F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0030F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDC_CODE:""
              ,FIELD_NAME:""
              ,VALUE_TYPE:""
              ,FIELD_VALUE:""
              ,ACTIVE:""
              ,APPLY_TO_USER:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0030F", N21.DataComp.DC0030F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0030
 * Title: Field default values
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0030 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0030"
          ,masterName:"DC0030G"
          ,detailName:"DC0030F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0030G",id: "DC0030G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0030F",id: "DC0030F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0030.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0030", N21.DataComp.DC0030);



