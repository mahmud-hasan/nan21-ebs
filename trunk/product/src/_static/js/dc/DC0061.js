/** 
 * Data Component: DC0061G, Title: Assets
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0061G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ASSETGRP_ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"CLIORG_ID", type:"float" }
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"ASSETGRP_NAME", type:"string" }
         ,{name:"QUANTITY", type:"float" }
         ,{name:"SERIAL_NO", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"IS_ACTIVE", type:"string" }
         ,{name:"IS_DEPRECIATED", type:"string" }
         ,{name:"IS_DISPOSED", type:"string" }
         ,{name:"IS_OWNED", type:"string" }
         ,{name:"IS_INPOSESSION", type:"string" }
         ,{name:"LAST_MAINTENANCE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"NEXT_MAINTENENCE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MAINTENANCE_PLAN_ID", type:"float" }
         ,{name:"WITH_DEPRECIATION", type:"string" }
         ,{name:"DEPREC_MONTHS", type:"float" }
         ,{name:"DEPREC_BASE_VALUE", type:"float" }
         ,{name:"DEPREC_MONTHS_REMAINED", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"INUSE_BPARTNER_ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ASSETGRP_ID",new Ext.form.Hidden({name:"QRY_ASSETGRP_ID",id:"DC0061F_QRY_ASSETGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.ASSETGRP_ID||"Assetgrp_id",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0061F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0061F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0061F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0061F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0061F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0061F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("ASSETGRP_NAME",new  N21.DataComp.LOV0040({name:"QRY_ASSETGRP_NAME",id:"DC0061F_QRY_ASSETGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.ASSETGRP_NAME||"Asset group",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0061F_QRY_ASSETGRP_ID"}],paramMapping: [{param:"p_client_id",field:"DC0061F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("SERIAL_NO",new Ext.form.TextField({name:"QRY_SERIAL_NO",id:"DC0061F_QRY_SERIAL_NO",fieldLabel: this.resourceBundle.FieldLabel.SERIAL_NO||"Serial_no",allowBlank:true,width:100}));
       this.queryFields.add("IS_ACTIVE",new Ext.form.ComboBox({name:"QRY_IS_ACTIVE",id:"DC0061F_QRY_IS_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.IS_ACTIVE||"Active",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("IS_DEPRECIATED",new Ext.form.ComboBox({name:"QRY_IS_DEPRECIATED",id:"DC0061F_QRY_IS_DEPRECIATED",fieldLabel: this.resourceBundle.FieldLabel.IS_DEPRECIATED||"Depreciated",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("IS_DISPOSED",new Ext.form.ComboBox({name:"QRY_IS_DISPOSED",id:"DC0061F_QRY_IS_DISPOSED",fieldLabel: this.resourceBundle.FieldLabel.IS_DISPOSED||"Disposed",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("IS_OWNED",new Ext.form.ComboBox({name:"QRY_IS_OWNED",id:"DC0061F_QRY_IS_OWNED",fieldLabel: this.resourceBundle.FieldLabel.IS_OWNED||"Owned",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("IS_INPOSESSION",new Ext.form.ComboBox({name:"QRY_IS_INPOSESSION",id:"DC0061F_QRY_IS_INPOSESSION",fieldLabel: this.resourceBundle.FieldLabel.IS_INPOSESSION||"In-posession",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("WITH_DEPRECIATION",new Ext.form.ComboBox({name:"QRY_WITH_DEPRECIATION",id:"DC0061F_QRY_WITH_DEPRECIATION",fieldLabel: this.resourceBundle.FieldLabel.WITH_DEPRECIATION||"With_depreciation",allowBlank:true,width:50,store:["Y","N"]}));
       this.queryFields.add("DEPREC_MONTHS",new Ext.form.NumberField({name:"QRY_DEPREC_MONTHS",id:"DC0061F_QRY_DEPREC_MONTHS",fieldLabel: this.resourceBundle.FieldLabel.DEPREC_MONTHS||"Deprec. months",allowBlank:true,width:100}));
       this.queryFields.add("DEPREC_MONTHS_REMAINED",new Ext.form.NumberField({name:"QRY_DEPREC_MONTHS_REMAINED",id:"DC0061F_QRY_DEPREC_MONTHS_REMAINED",fieldLabel: this.resourceBundle.FieldLabel.DEPREC_MONTHS_REMAINED||"Deprec months remained",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0061F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100}));
       this.queryFields.add("INUSE_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_INUSE_BPARTNER_ID",id:"DC0061F_QRY_INUSE_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.INUSE_BPARTNER_ID||"Inuse_bpartner_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","NAME","ASSETGRP_NAME","SERIAL_NO","IS_ACTIVE","IS_DEPRECIATED","IS_DISPOSED","IS_OWNED","IS_INPOSESSION","WITH_DEPRECIATION","DEPREC_MONTHS","DEPREC_MONTHS_REMAINED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0061"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0061"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ASSETGRP_ID",header:this.resourceBundle.FieldLabel.ASSETGRP_ID||"Assetgrp_id",width:100,dataIndex:'ASSETGRP_ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"PRODUCT_ID",header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",width:100,dataIndex:'PRODUCT_ID',hidden:true,sortable:true}
              ,{ id:"CLIORG_ID",header:this.resourceBundle.FieldLabel.CLIORG_ID||"Cliorg_id",width:100,dataIndex:'CLIORG_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{ id:"ASSETGRP_NAME",header:this.resourceBundle.FieldLabel.ASSETGRP_NAME||"Asset group",width:100,dataIndex:'ASSETGRP_NAME',sortable:true}
              ,{ id:"QUANTITY",header:this.resourceBundle.FieldLabel.QUANTITY||"Quantity",width:100,dataIndex:'QUANTITY',sortable:true,align:'right'}
              ,{ id:"SERIAL_NO",header:this.resourceBundle.FieldLabel.SERIAL_NO||"Serial_no",width:100,dataIndex:'SERIAL_NO',sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"IS_ACTIVE",header:this.resourceBundle.FieldLabel.IS_ACTIVE||"Active",width:50,dataIndex:'IS_ACTIVE',sortable:true}
              ,{ id:"IS_DEPRECIATED",header:this.resourceBundle.FieldLabel.IS_DEPRECIATED||"Depreciated",width:50,dataIndex:'IS_DEPRECIATED',hidden:true,sortable:true}
              ,{ id:"IS_DISPOSED",header:this.resourceBundle.FieldLabel.IS_DISPOSED||"Disposed",width:50,dataIndex:'IS_DISPOSED',hidden:true,sortable:true}
              ,{ id:"IS_OWNED",header:this.resourceBundle.FieldLabel.IS_OWNED||"Owned",width:50,dataIndex:'IS_OWNED',hidden:true,sortable:true}
              ,{ id:"IS_INPOSESSION",header:this.resourceBundle.FieldLabel.IS_INPOSESSION||"In-posession",width:50,dataIndex:'IS_INPOSESSION',hidden:true,sortable:true}
              ,{ id:"LAST_MAINTENANCE_DATE",header:this.resourceBundle.FieldLabel.LAST_MAINTENANCE_DATE||"Last_maintenance_date",width:100,dataIndex:'LAST_MAINTENANCE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"NEXT_MAINTENENCE_DATE",header:this.resourceBundle.FieldLabel.NEXT_MAINTENENCE_DATE||"Next_maintenence_date",width:100,dataIndex:'NEXT_MAINTENENCE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MAINTENANCE_PLAN_ID",header:this.resourceBundle.FieldLabel.MAINTENANCE_PLAN_ID||"Maintenance_plan_id",width:100,dataIndex:'MAINTENANCE_PLAN_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"WITH_DEPRECIATION",header:this.resourceBundle.FieldLabel.WITH_DEPRECIATION||"With_depreciation",width:50,dataIndex:'WITH_DEPRECIATION',hidden:true,sortable:true}
              ,{ id:"DEPREC_MONTHS",header:this.resourceBundle.FieldLabel.DEPREC_MONTHS||"Deprec. months",width:100,dataIndex:'DEPREC_MONTHS',sortable:true,align:'right'}
              ,{ id:"DEPREC_BASE_VALUE",header:this.resourceBundle.FieldLabel.DEPREC_BASE_VALUE||"Deprec base value",width:100,dataIndex:'DEPREC_BASE_VALUE',hidden:true,sortable:true,align:'right'}
              ,{ id:"DEPREC_MONTHS_REMAINED",header:this.resourceBundle.FieldLabel.DEPREC_MONTHS_REMAINED||"Deprec months remained",width:100,dataIndex:'DEPREC_MONTHS_REMAINED',sortable:true,align:'right'}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"INUSE_BPARTNER_ID",header:this.resourceBundle.FieldLabel.INUSE_BPARTNER_ID||"Inuse_bpartner_id",width:100,dataIndex:'INUSE_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0061G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0061G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0061G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ASSETGRP_ID:""
              ,CLIENT_ID:""
              ,PRODUCT_ID:""
              ,CLIORG_ID:""
              ,ID:""
              ,CLIENT_CODE:""
              ,NAME:""
              ,ASSETGRP_NAME:""
              ,QUANTITY:""
              ,SERIAL_NO:""
              ,NOTES:""
              ,IS_ACTIVE:""
              ,IS_DEPRECIATED:""
              ,IS_DISPOSED:""
              ,IS_OWNED:""
              ,IS_INPOSESSION:""
              ,LAST_MAINTENANCE_DATE:""
              ,NEXT_MAINTENENCE_DATE:""
              ,MAINTENANCE_PLAN_ID:""
              ,WITH_DEPRECIATION:""
              ,DEPREC_MONTHS:""
              ,DEPREC_BASE_VALUE:""
              ,DEPREC_MONTHS_REMAINED:""
              ,BPARTNER_ID:""
              ,INUSE_BPARTNER_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0061G", N21.DataComp.DC0061G);
/** 
 * Data Component: DC0061F, Title: Assets
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0061F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0061G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ASSETGRP_ID",new Ext.form.Hidden({name:"ASSETGRP_ID",id:"DC0061F_ASSETGRP_ID",dataIndex:"ASSETGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.ASSETGRP_ID||"Assetgrp_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0061F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODUCT_ID",new Ext.form.Hidden({name:"PRODUCT_ID",id:"DC0061F_PRODUCT_ID",dataIndex:"PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIORG_ID",new Ext.form.Hidden({name:"CLIORG_ID",id:"DC0061F_CLIORG_ID",dataIndex:"CLIORG_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIORG_ID||"Cliorg_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0061F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0061F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0061F_CLIENT_ID"}]}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0061F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("ASSETGRP_NAME",new  N21.DataComp.LOV0040({name:"ASSETGRP_NAME",id:"DC0061F_ASSETGRP_NAME",dataIndex:"ASSETGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.ASSETGRP_NAME||"Asset group",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0061F_ASSETGRP_ID"}],paramMapping: [{param:"p_client_id",field:"DC0061F.CLIENT_ID"}]}));
       this.fields.add("QUANTITY",new Ext.form.NumberField({name:"QUANTITY",id:"DC0061F_QUANTITY",dataIndex:"QUANTITY",fieldLabel: this.resourceBundle.FieldLabel.QUANTITY||"Quantity",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("SERIAL_NO",new Ext.form.TextField({name:"SERIAL_NO",id:"DC0061F_SERIAL_NO",dataIndex:"SERIAL_NO",fieldLabel: this.resourceBundle.FieldLabel.SERIAL_NO||"Serial_no",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0061F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_ACTIVE",new Ext.ux.form.XCheckbox({name:"IS_ACTIVE",id:"DC0061F_IS_ACTIVE",dataIndex:"IS_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.IS_ACTIVE||"Active",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_DEPRECIATED",new Ext.ux.form.XCheckbox({name:"IS_DEPRECIATED",id:"DC0061F_IS_DEPRECIATED",dataIndex:"IS_DEPRECIATED",fieldLabel: this.resourceBundle.FieldLabel.IS_DEPRECIATED||"Depreciated",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_DISPOSED",new Ext.ux.form.XCheckbox({name:"IS_DISPOSED",id:"DC0061F_IS_DISPOSED",dataIndex:"IS_DISPOSED",fieldLabel: this.resourceBundle.FieldLabel.IS_DISPOSED||"Disposed",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_OWNED",new Ext.ux.form.XCheckbox({name:"IS_OWNED",id:"DC0061F_IS_OWNED",dataIndex:"IS_OWNED",fieldLabel: this.resourceBundle.FieldLabel.IS_OWNED||"Owned",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("IS_INPOSESSION",new Ext.ux.form.XCheckbox({name:"IS_INPOSESSION",id:"DC0061F_IS_INPOSESSION",dataIndex:"IS_INPOSESSION",fieldLabel: this.resourceBundle.FieldLabel.IS_INPOSESSION||"In-posession",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("LAST_MAINTENANCE_DATE",new Ext.form.DateField({name:"LAST_MAINTENANCE_DATE",id:"DC0061F_LAST_MAINTENANCE_DATE",dataIndex:"LAST_MAINTENANCE_DATE",fieldLabel: this.resourceBundle.FieldLabel.LAST_MAINTENANCE_DATE||"Last_maintenance_date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("NEXT_MAINTENENCE_DATE",new Ext.form.DateField({name:"NEXT_MAINTENENCE_DATE",id:"DC0061F_NEXT_MAINTENENCE_DATE",dataIndex:"NEXT_MAINTENENCE_DATE",fieldLabel: this.resourceBundle.FieldLabel.NEXT_MAINTENENCE_DATE||"Next_maintenence_date",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MAINTENANCE_PLAN_ID",new Ext.form.NumberField({name:"MAINTENANCE_PLAN_ID",id:"DC0061F_MAINTENANCE_PLAN_ID",dataIndex:"MAINTENANCE_PLAN_ID",fieldLabel: this.resourceBundle.FieldLabel.MAINTENANCE_PLAN_ID||"Maintenance_plan_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("WITH_DEPRECIATION",new Ext.ux.form.XCheckbox({name:"WITH_DEPRECIATION",id:"DC0061F_WITH_DEPRECIATION",dataIndex:"WITH_DEPRECIATION",fieldLabel: this.resourceBundle.FieldLabel.WITH_DEPRECIATION||"With_depreciation",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("DEPREC_MONTHS",new Ext.form.NumberField({name:"DEPREC_MONTHS",id:"DC0061F_DEPREC_MONTHS",dataIndex:"DEPREC_MONTHS",fieldLabel: this.resourceBundle.FieldLabel.DEPREC_MONTHS||"Deprec. months",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DEPREC_BASE_VALUE",new Ext.form.NumberField({name:"DEPREC_BASE_VALUE",id:"DC0061F_DEPREC_BASE_VALUE",dataIndex:"DEPREC_BASE_VALUE",fieldLabel: this.resourceBundle.FieldLabel.DEPREC_BASE_VALUE||"Deprec base value",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DEPREC_MONTHS_REMAINED",new Ext.form.NumberField({name:"DEPREC_MONTHS_REMAINED",id:"DC0061F_DEPREC_MONTHS_REMAINED",dataIndex:"DEPREC_MONTHS_REMAINED",fieldLabel: this.resourceBundle.FieldLabel.DEPREC_MONTHS_REMAINED||"Deprec months remained",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("BPARTNER_ID",new Ext.form.Hidden({name:"BPARTNER_ID",id:"DC0061F_BPARTNER_ID",dataIndex:"BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("INUSE_BPARTNER_ID",new Ext.form.Hidden({name:"INUSE_BPARTNER_ID",id:"DC0061F_INUSE_BPARTNER_ID",dataIndex:"INUSE_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.INUSE_BPARTNER_ID||"Inuse_bpartner_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CREATEDON",new Ext.form.DateField({name:"CREATEDON",id:"DC0061F_CREATEDON",dataIndex:"CREATEDON",fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Created on",allowBlank:true,width:80,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("CREATEDBY",new Ext.form.TextField({name:"CREATEDBY",id:"DC0061F_CREATEDBY",dataIndex:"CREATEDBY",fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Created by",allowBlank:true,width:100,disabled:true}));
       this.fields.add("MODIFIEDON",new Ext.form.DateField({name:"MODIFIEDON",id:"DC0061F_MODIFIEDON",dataIndex:"MODIFIEDON",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",allowBlank:true,width:80,disabled:true,format:Ext.DATE_FORMAT}));
       this.fields.add("MODIFIEDBY",new Ext.form.TextField({name:"MODIFIEDBY",id:"DC0061F_MODIFIEDBY",dataIndex:"MODIFIEDBY",fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",allowBlank:true,width:100,disabled:true}));

       this.layoutItems.add("Depreciation",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Depreciation||"Depreciation",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("WITH_DEPRECIATION"),this.fields.get("DEPREC_MONTHS"),this.fields.get("DEPREC_BASE_VALUE"),this.fields.get("DEPREC_MONTHS_REMAINED")] });
       this.layoutItems.add("Modified",
             { xtype:"fieldset", autoHeight:true,collapsed:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Modified||"Modified",border:true,labelAlign:"left",width:"250"   ,items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")] });
       this.layoutItems.add("C2",
             { layout:"form",width:350,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Depreciation"),this.layoutItems.get("Modified")]
 }); 
       this.layoutItems.add("Status",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Status||"Status",border:true,labelAlign:"left",width:"300"   ,items:[ this.fields.get("IS_ACTIVE"),this.fields.get("IS_DEPRECIATED"),this.fields.get("IS_DISPOSED"),this.fields.get("IS_OWNED"),this.fields.get("IS_INPOSESSION")] });
       this.layoutItems.add("Header",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Header||"Header",border:true,labelAlign:"left",width:"300"   ,items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIORG_ID"),this.fields.get("PRODUCT_ID"),this.fields.get("ASSETGRP_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("NAME"),this.fields.get("ASSETGRP_NAME"),this.fields.get("QUANTITY"),this.fields.get("SERIAL_NO"),this.fields.get("NOTES")] });
       this.layoutItems.add("C1",
             { layout:"form",width:350,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Header"),this.layoutItems.get("Status")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0061F"
          ,firstFocusFieldName:"NAME"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0061F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0061F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ASSETGRP_ID:""
              ,CLIENT_ID:""
              ,PRODUCT_ID:""
              ,CLIORG_ID:""
              ,ID:""
              ,CLIENT_CODE:""
              ,NAME:""
              ,ASSETGRP_NAME:""
              ,QUANTITY:""
              ,SERIAL_NO:""
              ,NOTES:""
              ,IS_ACTIVE:""
              ,IS_DEPRECIATED:""
              ,IS_DISPOSED:""
              ,IS_OWNED:""
              ,IS_INPOSESSION:""
              ,LAST_MAINTENANCE_DATE:""
              ,NEXT_MAINTENENCE_DATE:""
              ,MAINTENANCE_PLAN_ID:""
              ,WITH_DEPRECIATION:""
              ,DEPREC_MONTHS:""
              ,DEPREC_BASE_VALUE:""
              ,DEPREC_MONTHS_REMAINED:""
              ,BPARTNER_ID:""
              ,INUSE_BPARTNER_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0061F", N21.DataComp.DC0061F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0061
 * Title: Assets
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0061 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0061"
          ,masterName:"DC0061G"
          ,detailName:"DC0061F"
          ,mdLayout:"card"
          ,border: false
          ,items: [
              {
                xtype:"panel"
               ,layout:"card"
               ,id:"MDTab"
               ,region:"center"
               ,defaults:{layout:"fit"}
               ,activeItem:0
               ,tabPosition: "bottom"
               ,items: [{
                            xtype: "DC0061G"
                           ,id: "DC0061G"
                           ,height:350
                       },{
                           xtype:"DC0061F"
                          ,id:"DC0061F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

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
,"->","<span class='dcName'>DC0061</span>"          )
        }); 

       N21.DataComp.DC0061.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0061", N21.DataComp.DC0061);



