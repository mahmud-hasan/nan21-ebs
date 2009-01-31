/** 
 * Data Component: DC0103G, Title: Business partner details
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0103G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"BPARTNER_NAME", type:"string" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"IS_CUSTOMER", type:"string" }
         ,{name:"IS_VENDOR", type:"string" }
         ,{name:"IS_EMPLOYEE", type:"string" }
         ,{name:"CUSTGRP_CODE", type:"string" }
         ,{name:"CREDITCLASS_CODE", type:"string" }
         ,{name:"PAYMETHOD_CODE", type:"string" }
         ,{name:"PAYTERMCLASS_CODE", type:"string" }
         ,{name:"MAX_CREDIT_LIMIT", type:"float" }
         ,{name:"MAX_CREDIT_LIMIT_CURRENCY", type:"string" }
         ,{name:"MAX_PAYMENT_TERM", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0103F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_NAME",new  N21.DataComp.LOV0009({name:"QRY_BPARTNER_NAME",id:"DC0103F_QRY_BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0103F_QRY_BPARTNER_ID"}]}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0103F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Business partner ID",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0103F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0103F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0103F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("IS_CUSTOMER",new Ext.form.ComboBox({name:"QRY_IS_CUSTOMER",id:"DC0103F_QRY_IS_CUSTOMER",fieldLabel: this.resourceBundle.FieldLabel.IS_CUSTOMER||"Customer?",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("IS_VENDOR",new Ext.form.ComboBox({name:"QRY_IS_VENDOR",id:"DC0103F_QRY_IS_VENDOR",fieldLabel: this.resourceBundle.FieldLabel.IS_VENDOR||"Vendor?",allowBlank:true,width:50,store:["Y","N"]}));
  
       this.queryFieldsVisible = [  "BPARTNER_NAME","CLIENT_CODE","IS_CUSTOMER","IS_VENDOR" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0103"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0103"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Business partner ID",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",width:200,dataIndex:'BPARTNER_NAME',sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"IS_CUSTOMER",header:this.resourceBundle.FieldLabel.IS_CUSTOMER||"Customer?",width:50,dataIndex:'IS_CUSTOMER',sortable:true}
              ,{ id:"IS_VENDOR",header:this.resourceBundle.FieldLabel.IS_VENDOR||"Vendor?",width:50,dataIndex:'IS_VENDOR',sortable:true}
              ,{ id:"IS_EMPLOYEE",header:this.resourceBundle.FieldLabel.IS_EMPLOYEE||"Employee?",width:50,dataIndex:'IS_EMPLOYEE',sortable:true}
              ,{ id:"CUSTGRP_CODE",header:this.resourceBundle.FieldLabel.CUSTGRP_CODE||"Customer group",width:100,dataIndex:'CUSTGRP_CODE',hidden:true,sortable:true}
              ,{ id:"CREDITCLASS_CODE",header:this.resourceBundle.FieldLabel.CREDITCLASS_CODE||"Credit class",width:100,dataIndex:'CREDITCLASS_CODE',hidden:true,sortable:true}
              ,{ id:"PAYMETHOD_CODE",header:this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Preffered payment method",width:100,dataIndex:'PAYMETHOD_CODE',hidden:true,sortable:true}
              ,{ id:"PAYTERMCLASS_CODE",header:this.resourceBundle.FieldLabel.PAYTERMCLASS_CODE||"Payment terms class",width:100,dataIndex:'PAYTERMCLASS_CODE',hidden:true,sortable:true}
              ,{ id:"MAX_CREDIT_LIMIT",header:this.resourceBundle.FieldLabel.MAX_CREDIT_LIMIT||"Max. credit limit",width:100,dataIndex:'MAX_CREDIT_LIMIT',hidden:true,sortable:true,align:'right'}
              ,{ id:"MAX_CREDIT_LIMIT_CURRENCY",header:this.resourceBundle.FieldLabel.MAX_CREDIT_LIMIT_CURRENCY||"Credit limit currency",width:100,dataIndex:'MAX_CREDIT_LIMIT_CURRENCY',hidden:true,sortable:true}
              ,{ id:"MAX_PAYMENT_TERM",header:this.resourceBundle.FieldLabel.MAX_PAYMENT_TERM||"Max. payment term",width:100,dataIndex:'MAX_PAYMENT_TERM',hidden:true,sortable:true,align:'right'}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0103G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0103G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0103G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,IS_CUSTOMER:""
              ,IS_VENDOR:""
              ,IS_EMPLOYEE:""
              ,CUSTGRP_CODE:""
              ,CREDITCLASS_CODE:""
              ,PAYMETHOD_CODE:""
              ,PAYTERMCLASS_CODE:""
              ,MAX_CREDIT_LIMIT:""
              ,MAX_CREDIT_LIMIT_CURRENCY:""
              ,MAX_PAYMENT_TERM:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0103G", N21.DataComp.DC0103G);
/** 
 * Data Component: DC0103F, Title: Business partner details
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0103F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0103G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0103F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("BPARTNER_NAME",new  N21.DataComp.LOV0009({name:"BPARTNER_NAME",id:"DC0103F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0103F_BPARTNER_ID"}]}));
       this.fields.add("BPARTNER_ID",new Ext.form.Hidden({name:"BPARTNER_ID",id:"DC0103F_BPARTNER_ID",dataIndex:"BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Business partner ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:false}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0103F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:false}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0103F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:false,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0103F_CLIENT_ID"}]}));
       this.fields.add("IS_CUSTOMER",new Ext.ux.form.XCheckbox({name:"IS_CUSTOMER",id:"DC0103F_IS_CUSTOMER",dataIndex:"IS_CUSTOMER",fieldLabel: this.resourceBundle.FieldLabel.IS_CUSTOMER||"Customer?",allowBlank:false,labelSeparator:":*",width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_VENDOR",new Ext.ux.form.XCheckbox({name:"IS_VENDOR",id:"DC0103F_IS_VENDOR",dataIndex:"IS_VENDOR",fieldLabel: this.resourceBundle.FieldLabel.IS_VENDOR||"Vendor?",allowBlank:false,labelSeparator:":*",width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_EMPLOYEE",new Ext.ux.form.XCheckbox({name:"IS_EMPLOYEE",id:"DC0103F_IS_EMPLOYEE",dataIndex:"IS_EMPLOYEE",fieldLabel: this.resourceBundle.FieldLabel.IS_EMPLOYEE||"Employee?",allowBlank:false,labelSeparator:":*",width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("CUSTGRP_CODE",new Ext.form.TextField({name:"CUSTGRP_CODE",id:"DC0103F_CUSTGRP_CODE",dataIndex:"CUSTGRP_CODE",fieldLabel: this.resourceBundle.FieldLabel.CUSTGRP_CODE||"Customer group",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("MAX_CREDIT_LIMIT",new Ext.form.NumberField({name:"MAX_CREDIT_LIMIT",id:"DC0103F_MAX_CREDIT_LIMIT",dataIndex:"MAX_CREDIT_LIMIT",fieldLabel: this.resourceBundle.FieldLabel.MAX_CREDIT_LIMIT||"Max. credit limit",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("MAX_PAYMENT_TERM",new Ext.form.NumberField({name:"MAX_PAYMENT_TERM",id:"DC0103F_MAX_PAYMENT_TERM",dataIndex:"MAX_PAYMENT_TERM",fieldLabel: this.resourceBundle.FieldLabel.MAX_PAYMENT_TERM||"Max. payment term",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("BPARTNER_NAME")
                 ,this.fields.get("BPARTNER_ID")
                 ,this.fields.get("CLIENT_ID")
                 ,this.fields.get("CLIENT_CODE")
                 ,this.fields.get("IS_CUSTOMER")
                 ,this.fields.get("IS_VENDOR")
                 ,this.fields.get("IS_EMPLOYEE")
                 ,this.fields.get("CUSTGRP_CODE")
                 ,this.fields.get("MAX_CREDIT_LIMIT")
                 ,this.fields.get("MAX_PAYMENT_TERM")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0103F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0103F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0103F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,IS_CUSTOMER:""
              ,IS_VENDOR:""
              ,IS_EMPLOYEE:""
              ,CUSTGRP_CODE:""
              ,CREDITCLASS_CODE:""
              ,PAYMETHOD_CODE:""
              ,PAYTERMCLASS_CODE:""
              ,MAX_CREDIT_LIMIT:""
              ,MAX_CREDIT_LIMIT_CURRENCY:""
              ,MAX_PAYMENT_TERM:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0103F", N21.DataComp.DC0103F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0103
 * Title: Business partner details
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0103 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0103"
          ,masterName:"DC0103G"
          ,detailName:"DC0103F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0103G",id: "DC0103G",region:"west"  ,split:true,width:"65%",minWidth:0}
             ,{xtype: "DC0103F",id: "DC0103F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0103</span>"          )
        }); 

       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0103.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0103", N21.DataComp.DC0103);



