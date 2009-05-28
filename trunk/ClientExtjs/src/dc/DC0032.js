/** 
 * Data Component: DC0032G, Title: Accounting accounts chart
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0032G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"ACCSCHEMA_ID", type:"float" }
         ,{name:"ACCSCHEMA_NAME", type:"string" }
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
         ,{name:"ACCTGRP_ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0032F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0032F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0032F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0032F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"QRY_ACCSCHEMA_ID",id:"DC0032F_QRY_ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",allowBlank:true,width:100}));
       this.queryFields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"QRY_ACCSCHEMA_NAME",id:"DC0032F_QRY_ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0032F_QRY_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0032F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ACCOUNT",new Ext.form.TextField({name:"QRY_ACCOUNT",id:"DC0032F_QRY_ACCOUNT",fieldLabel: this.resourceBundle.FieldLabel.ACCOUNT||"Account",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0032F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("PARENT_ACCOUNT",new  N21.DataComp.LOV0025({name:"QRY_PARENT_ACCOUNT",id:"DC0032F_QRY_PARENT_ACCOUNT",fieldLabel: this.resourceBundle.FieldLabel.PARENT_ACCOUNT||"Parent_account",allowBlank:true,width:100,selectOnFocus:true}));
       this.queryFields.add("ACCJOURNAL_ID",new Ext.form.Hidden({name:"QRY_ACCJOURNAL_ID",id:"DC0032F_QRY_ACCJOURNAL_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_ID||"Accjournal_id",allowBlank:true,width:100}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0032F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("ACCTGRP_ID",new Ext.form.Hidden({name:"QRY_ACCTGRP_ID",id:"DC0032F_QRY_ACCTGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCTGRP_ID||"Accgrp_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","ACCSCHEMA_NAME","ACCOUNT","NAME","PARENT_ACCOUNT","ACTIVE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0032"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0032", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"ACCSCHEMA_ID",header:this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",width:100,dataIndex:'ACCSCHEMA_ID',hidden:true,sortable:true}
              ,{ id:"ACCSCHEMA_NAME",header:this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",width:100,dataIndex:'ACCSCHEMA_NAME',sortable:true}
              ,{ id:"ACCOUNT",header:this.resourceBundle.FieldLabel.ACCOUNT||"Account",width:100,dataIndex:'ACCOUNT',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
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
              ,{ id:"ACCTGRP_ID",header:this.resourceBundle.FieldLabel.ACCTGRP_ID||"Accgrp_id",width:100,dataIndex:'ACCTGRP_ID',hidden:true,sortable:true}
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
              ,CLIENT_CODE:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMA_NAME:""
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
              ,ACCTGRP_ID:""});
     }
  });
  Ext.reg("DC0032G", N21.DataComp.DC0032G);
/** 
 * Data Component: DC0032F, Title: Accounting accounts chart
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0032F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0032G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0032F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0032F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,listeners:{  "change":{scope:this, fn:this.change_CLIENT_ID}  }}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0032F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0032F_CLIENT_ID"}]}));
       this.fields.add("ACCSCHEMA_ID",new Ext.form.Hidden({name:"ACCSCHEMA_ID",id:"DC0032F_ACCSCHEMA_ID",dataIndex:"ACCSCHEMA_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_ID||"Accschema_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACCSCHEMA_NAME",new  N21.DataComp.LOV0062({name:"ACCSCHEMA_NAME",id:"DC0032F_ACCSCHEMA_NAME",dataIndex:"ACCSCHEMA_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCSCHEMA_NAME||"Accounting schema",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ACCSCHEMA_ID",field:"DC0032F_ACCSCHEMA_ID"}],paramMapping: [{param:"p_client_id",field:"DC0032F.CLIENT_ID"}]}));
       this.fields.add("ACCOUNT",new Ext.form.TextField({name:"ACCOUNT",id:"DC0032F_ACCOUNT",dataIndex:"ACCOUNT",fieldLabel: this.resourceBundle.FieldLabel.ACCOUNT||"Account",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0032F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:300,insert_allowed:true,update_allowed:true}));
       this.fields.add("PARENT_ACCOUNT",new  N21.DataComp.LOV0025({name:"PARENT_ACCOUNT",id:"DC0032F_PARENT_ACCOUNT",dataIndex:"PARENT_ACCOUNT",fieldLabel: this.resourceBundle.FieldLabel.PARENT_ACCOUNT||"Parent_account",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("CURRENCY",new  N21.DataComp.LOV0001({name:"CURRENCY",id:"DC0032F_CURRENCY",dataIndex:"CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",allowBlank:true,width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DESCRIPTION",new Ext.form.TextArea({name:"DESCRIPTION",id:"DC0032F_DESCRIPTION",dataIndex:"DESCRIPTION",fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",allowBlank:true,width:200,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACCJOURNAL_NAME",new  N21.DataComp.LOV0026({name:"ACCJOURNAL_NAME",id:"DC0032F_ACCJOURNAL_NAME",dataIndex:"ACCJOURNAL_NAME",fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_NAME||"Journal",allowBlank:true,width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0032F_ACCJOURNAL_ID"}],displayColumn: "NAME"}));
       this.fields.add("ACCJOURNAL_ID",new Ext.form.Hidden({name:"ACCJOURNAL_ID",id:"DC0032F_ACCJOURNAL_ID",dataIndex:"ACCJOURNAL_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCJOURNAL_ID||"Accjournal_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ACTIVE",new Ext.ux.form.XCheckbox({name:"ACTIVE",id:"DC0032F_ACTIVE",dataIndex:"ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0032F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",allowBlank:true,width:100,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0032F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",allowBlank:true,width:80,disabled:true}));
       this.fields.add("ACCTGRP_ID",new Ext.form.Hidden({name:"ACCTGRP_ID",id:"DC0032F_ACCTGRP_ID",dataIndex:"ACCTGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.ACCTGRP_ID||"Accgrp_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("R2C2",
             { layout:"form",columnWidth:.5,labelAlign:"left",labelWidth:100, items:[ this.fields.get("CURRENCY"),this.fields.get("DESCRIPTION"),this.fields.get("ACCJOURNAL_ID"),this.fields.get("ACCJOURNAL_NAME"),this.fields.get("ACTIVE")]
 }); 
       this.layoutItems.add("R2C1",
             { layout:"form",columnWidth:.5,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("ACCSCHEMA_ID"),this.fields.get("ACCSCHEMA_NAME"),this.fields.get("ACCOUNT"),this.fields.get("PARENT_ACCOUNT")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("R2C1"),this.layoutItems.get("R2C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.fields.get("NAME")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0032F"
          ,firstFocusFieldName:"NAME"
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
              ,CLIENT_CODE:""
              ,ACCSCHEMA_ID:""
              ,ACCSCHEMA_NAME:""
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
              ,ACCTGRP_ID:""});
     }

  ,change_CLIENT_ID:function(fld, newVal, oldVal) {
    this.getField("ACCJOURNAL_NAME").setParamValue("p_client_id",newVal);
   }


  });
  Ext.reg("DC0032F", N21.DataComp.DC0032F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0032
 * Title: Accounting accounts chart
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
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0032G",id: "DC0032G",region:"north" ,split:true,height:300,minHeight:0}
             ,{xtype: "DC0032F",id: "DC0032F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0032</span>"          )
        }); 

       N21.DataComp.DC0032.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0032", N21.DataComp.DC0032);



