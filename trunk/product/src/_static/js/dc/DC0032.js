/** 
 * Data Component: DC0032G, Title: Accounts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0032G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_NAME", type:"string" }
         ,{name:"ACCOUNT", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"PARENT_ACCOUNT", type:"string" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"ACCJOURNAL_NAME", type:"string" }
         ,{name:"ACCJOURNAL_ID", type:"float" }
         ,{name:"ACTIVE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"ACCGRP_ID", type:"float" }
         ,{name:"ACCSCHEMA_ID", type:"float" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0032"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0032"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_NAME",header:this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",width:100,dataIndex:'CLIENT_NAME',sortable:true}
              ,{ id:"ACCOUNT",header:this.resourceBundle.FieldLabel.ACCOUNT||"Account",width:100,dataIndex:'ACCOUNT',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
              ,{ id:"PARENT_ACCOUNT",header:this.resourceBundle.FieldLabel.PARENT_ACCOUNT||"Parent_account",width:100,dataIndex:'PARENT_ACCOUNT',sortable:true}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"ACCJOURNAL_NAME",header:this.resourceBundle.FieldLabel.ACCJOURNAL_NAME||"Journal",width:100,dataIndex:'ACCJOURNAL_NAME',hidden:true,sortable:true}
              ,{ id:"ACCJOURNAL_ID",header:this.resourceBundle.FieldLabel.ACCJOURNAL_ID||"Accjournal_id",width:100,dataIndex:'ACCJOURNAL_ID',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"ACCGRP_ID",header:this.resourceBundle.FieldLabel.ACCGRP_ID||"Accgrp_id",width:100,dataIndex:'ACCGRP_ID',hidden:true,sortable:true}
              ,{ id:"ACCSCHEMA_ID",header:this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",width:100,dataIndex:'ACCSCHEMA_ID',hidden:true,sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0032_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0032_QRY_CLIENT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"}
               ,{xtype: "LOV0008",name:"QRY_CLIENT_NAME",id:"DC0032_QRY_CLIENT_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client"}
               ,{xtype: "textfield",name:"QRY_ACCOUNT",id:"DC0032_QRY_ACCOUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACCOUNT||"Account"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0032_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "LOV0025",selectOnFocus:true,name:"QRY_PARENT_ACCOUNT",id:"DC0032_QRY_PARENT_ACCOUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.PARENT_ACCOUNT||"Parent_account"}
               ,{xtype: "LOV0001",name:"QRY_CURRENCY",id:"DC0032_QRY_CURRENCY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"}
               ,{xtype: "textarea",name:"QRY_DESCRIPTION",id:"DC0032_QRY_DESCRIPTION",width:120,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description"}
               ,{xtype: "LOV0026",displayColumn: "NAME",name:"QRY_ACCJOURNAL_NAME",id:"DC0032_QRY_ACCJOURNAL_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_NAME||"Journal"}
               ,{xtype: "hidden",name:"QRY_ACCJOURNAL_ID",id:"DC0032_QRY_ACCJOURNAL_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_ID||"Accjournal_id"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0032_QRY_ACTIVE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0032_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0032_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0032_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0032_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
               ,{xtype: "hidden",name:"QRY_ACCGRP_ID",id:"DC0032_QRY_ACCGRP_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACCGRP_ID||"Accgrp_id"}
               ,{xtype: "hidden",name:"QRY_ACCSCHEMA_ID",id:"DC0032_QRY_ACCSCHEMA_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id"}
          ]
          ,dataComponentName:"DC0032G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0032G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0032G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,ACCOUNT:""
              ,NAME:""
              ,PARENT_ACCOUNT:""
              ,CURRENCY:""
              ,DESCRIPTION:""
              ,ACCJOURNAL_NAME:""
              ,ACCJOURNAL_ID:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ACCGRP_ID:""
              ,ACCSCHEMA_ID:""});
     }
  });
  Ext.reg("DC0032G", N21.DataComp.DC0032G);
/** 
 * Data Component: DC0032F, Title: Accounts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0032F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0032G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0032F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_NAME", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0032F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_NAME",id:"DC0032F_CLIENT_NAME",dataIndex:"CLIENT_NAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_NAME||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0032F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_CLIENT_ID}  }})   );
       this.fields.add("ACCOUNT", new Ext.form.TextField ({xtype: "textfield",name:"ACCOUNT",id:"DC0032F_ACCOUNT",dataIndex:"ACCOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACCOUNT||"Account",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0032F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PARENT_ACCOUNT", new N21.DataComp.LOV0025({xtype: "LOV0025",selectOnFocus:true,name:"PARENT_ACCOUNT",id:"DC0032F_PARENT_ACCOUNT",dataIndex:"PARENT_ACCOUNT",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PARENT_ACCOUNT||"Parent_account",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"CURRENCY",id:"DC0032F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DESCRIPTION", new Ext.form.TextArea ({xtype: "textarea",name:"DESCRIPTION",id:"DC0032F_DESCRIPTION",dataIndex:"DESCRIPTION",width:200,height:40,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCJOURNAL_NAME", new N21.DataComp.LOV0026({xtype: "LOV0026",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0032F_ACCJOURNAL_ID"}],selectOnFocus:true,name:"ACCJOURNAL_NAME",id:"DC0032F_ACCJOURNAL_NAME",dataIndex:"ACCJOURNAL_NAME",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_NAME||"Journal",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCJOURNAL_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ACCJOURNAL_ID",id:"DC0032F_ACCJOURNAL_ID",dataIndex:"ACCJOURNAL_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_ID||"Accjournal_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACTIVE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACTIVE",id:"DC0032F_ACTIVE",dataIndex:"ACTIVE",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0032F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0032F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",disabled:true})   );
       this.fields.add("ACCGRP_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ACCGRP_ID",id:"DC0032F_ACCGRP_ID",dataIndex:"ACCGRP_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCGRP_ID||"Accgrp_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCSCHEMA_ID", new Ext.form.Hidden ({xtype: "hidden",name:"ACCSCHEMA_ID",id:"DC0032F_ACCSCHEMA_ID",dataIndex:"ACCSCHEMA_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CLIENT_NAME")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("ACCOUNT")
                 ,this.fields.get("NAME")
                 ,this.fields.get("PARENT_ACCOUNT")
                 ,this.fields.get("CURRENCY")
                 ,this.fields.get("DESCRIPTION")
                 ,this.fields.get("ACCJOURNAL_NAME")
                 ,this.fields.get("ACCJOURNAL_ID")
                 ,this.fields.get("ACTIVE")
                 ,this.fields.get("MODIFIEDON")
                 ,this.fields.get("MODIFIEDBY")
                 ,this.fields.get("ACCGRP_ID")
                 ,this.fields.get("ACCSCHEMA_ID")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0032F"
          ,firstFocusFieldName:"ACCOUNT"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0032F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0032F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_NAME:""
              ,ACCOUNT:""
              ,NAME:""
              ,PARENT_ACCOUNT:""
              ,CURRENCY:""
              ,DESCRIPTION:""
              ,ACCJOURNAL_NAME:""
              ,ACCJOURNAL_ID:""
              ,ACTIVE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ACCGRP_ID:""
              ,ACCSCHEMA_ID:""});
     }

  ,change_CLIENT_ID:function(fld, newVal, oldVal) {
    this.getField("ACCJOURNAL_NAME").setParamValue("p_client_id",newVal);
   }

  });
  Ext.reg("DC0032F", N21.DataComp.DC0032F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0032
 * Title: Accounts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0032 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0032"
          ,masterName:"DC0032G"
          ,detailName:"DC0032F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0032G",id: "DC0032G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0032F",id: "DC0032F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0032.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0032", N21.DataComp.DC0032);



