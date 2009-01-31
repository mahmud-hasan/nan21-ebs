/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0077 DataControl: Product attributes
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0077 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PRDATTR_ID", type:"float" }
         ,{name:"PRDATTR_NAME", type:"string" }
         ,{name:"ATTR_VAL", type:"string" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:1
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0077"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0077"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0077</span>"          )
          ,dataComponentName:"DC0077"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"ID",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRDATTR_ID",{ id:'PRDATTR_ID',header:this.resourceBundle.FieldLabel.PRDATTR_ID||"Attribute ID",width:100,dataIndex:'PRDATTR_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRDATTR_NAME",{ id:'PRDATTR_NAME',header:this.resourceBundle.FieldLabel.PRDATTR_NAME||"Attribute name",width:200,dataIndex:'PRDATTR_NAME',insert_allowed:false,update_allowed:false,sortable:true});
         this.columnMap.add("ATTR_VAL",{ id:'ATTR_VAL',header:this.resourceBundle.FieldLabel.ATTR_VAL||"Value",width:300,dataIndex:'ATTR_VAL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextArea({   cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRODUCT_ID",{ id:'PRODUCT_ID',header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product ID",width:100,dataIndex:'PRODUCT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRODUCT_NAME",{ id:'PRODUCT_NAME',header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",width:150,dataIndex:'PRODUCT_NAME',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0077F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"ID",allowBlank:true,width:100}));
       this.queryFields.add("PRDATTR_ID",new Ext.form.Hidden({name:"QRY_PRDATTR_ID",id:"DC0077F_QRY_PRDATTR_ID",fieldLabel: this.resourceBundle.FieldLabel.PRDATTR_ID||"Attribute ID",allowBlank:true,width:100}));
       this.queryFields.add("PRDATTR_NAME",new Ext.form.TextField({name:"QRY_PRDATTR_NAME",id:"DC0077F_QRY_PRDATTR_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRDATTR_NAME||"Attribute name",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0077F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product ID",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"QRY_PRODUCT_NAME",id:"DC0077F_QRY_PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",allowBlank:true,width:250,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0077F_QRY_PRODUCT_ID"},{column:"NAME",field:"DC0077F_QRY_PRODUCT_NAME"}]}));

 
       this.queryFieldsVisible = [  "PRDATTR_NAME","PRODUCT_NAME" ];
       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0077.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0077.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PRDATTR_ID:""
              ,PRDATTR_NAME:""
              ,ATTR_VAL:""
              ,PRODUCT_ID:""
              ,PRODUCT_NAME:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0077", N21.DataComp.DC0077);



