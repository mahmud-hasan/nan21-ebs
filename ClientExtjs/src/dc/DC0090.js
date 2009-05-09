/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0090 DataControl: Price list products
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0090 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PRICELIST_ID", type:"float" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"PRICELVL_NAME", type:"string" }
         ,{name:"PRICELVL_ID", type:"float" }
         ,{name:"PRICE", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0090"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0090", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
,"->","<span class='dcName'>DC0090</span>"          )
          ,dataComponentName:"DC0090"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRICELIST_ID",{ id:'PRICELIST_ID',header:this.resourceBundle.FieldLabel.PRICELIST_ID||"Pricelist_id",width:100,dataIndex:'PRICELIST_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRODUCT_ID",{ id:'PRODUCT_ID',header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",width:100,dataIndex:'PRODUCT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRODUCT_NAME",{ id:'PRODUCT_NAME',header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",width:200,dataIndex:'PRODUCT_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0017({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"PRODUCT_ID"},{column:"NAME",field:"PRODUCT_NAME"}],cls:"x-form-text-in-grid",selectOnFocus:true,cls:"x-form-text-in-grid",valueField:"ID",displayField:"NAME"})});
         this.columnMap.add("PRICELVL_NAME",{ id:'PRICELVL_NAME',header:this.resourceBundle.FieldLabel.PRICELVL_NAME||"Price level",width:100,dataIndex:'PRICELVL_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0057({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"PRICELVL_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"NAME"})});
         this.columnMap.add("PRICELVL_ID",{ id:'PRICELVL_ID',header:this.resourceBundle.FieldLabel.PRICELVL_ID||"Pricelvl_id",width:100,dataIndex:'PRICELVL_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRICE",{ id:'PRICE',header:this.resourceBundle.FieldLabel.PRICE||"Price",width:100,dataIndex:'PRICE',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0090F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("PRICELIST_ID",new Ext.form.Hidden({name:"QRY_PRICELIST_ID",id:"DC0090F_QRY_PRICELIST_ID",fieldLabel: this.resourceBundle.FieldLabel.PRICELIST_ID||"Pricelist_id",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0090F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"QRY_PRODUCT_NAME",id:"DC0090F_QRY_PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",allowBlank:true,width:150,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0090F_QRY_PRODUCT_ID"},{column:"NAME",field:"DC0090F_QRY_PRODUCT_NAME"}]}));
       this.queryFields.add("PRICELVL_NAME",new  N21.DataComp.LOV0057({name:"QRY_PRICELVL_NAME",id:"DC0090F_QRY_PRICELVL_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRICELVL_NAME||"Price level",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0090F_QRY_PRICELVL_ID"}]}));
       this.queryFields.add("PRICELVL_ID",new Ext.form.Hidden({name:"QRY_PRICELVL_ID",id:"DC0090F_QRY_PRICELVL_ID",fieldLabel: this.resourceBundle.FieldLabel.PRICELVL_ID||"Pricelvl_id",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "PRODUCT_NAME","PRICELVL_NAME" ];
       N21.DataComp.DC0090.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0090.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PRICELIST_ID:""
              ,PRODUCT_ID:""
              ,PRODUCT_NAME:""
              ,PRICELVL_NAME:""
              ,PRICELVL_ID:""
              ,PRICE:""});
     }

  });
  Ext.reg("DC0090", N21.DataComp.DC0090);



