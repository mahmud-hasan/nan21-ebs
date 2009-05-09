/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0089 DataControl: Stocks
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0089 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"PRODUCT_CODE", type:"string" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"QTY", type:"float" }
         ,{name:"UOM", type:"string" }
         ,{name:"STOCK_ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"ORG_NAME", type:"string" }
         ,{name:"ORGINV_ID", type:"float" }
         ,{name:"ORGINV_CODE", type:"string" }
         ,{name:"STOCKLOC_ID", type:"float" }
         ,{name:"STOCKLOC_CODE", type:"string" }
         ,{name:"PRODUCT_ID", type:"float" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
    ,recordPk:[ "STOCK_ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0089"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0089", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0089</span>"          )
          ,dataComponentName:"DC0089"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("PRODUCT_CODE",{ id:'PRODUCT_CODE',header:this.resourceBundle.FieldLabel.PRODUCT_CODE||"Prod. code",width:100,dataIndex:'PRODUCT_CODE',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("PRODUCT_NAME",{ id:'PRODUCT_NAME',header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Prod. name",width:200,dataIndex:'PRODUCT_NAME',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("QTY",{ id:'QTY',header:this.resourceBundle.FieldLabel.QTY||"Quantity",width:100,dataIndex:'QTY',insert_allowed:true,update_allowed:true,sortable:true,align:'right'});
         this.columnMap.add("UOM",{ id:'UOM',header:this.resourceBundle.FieldLabel.UOM||"UoM",width:100,dataIndex:'UOM',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("STOCK_ID",{ id:'STOCK_ID',header:this.resourceBundle.FieldLabel.STOCK_ID||"Stock_id",width:100,dataIndex:'STOCK_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:70,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("ORG_ID",{ id:'ORG_ID',header:this.resourceBundle.FieldLabel.ORG_ID||"Org_id",width:100,dataIndex:'ORG_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("ORG_NAME",{ id:'ORG_NAME',header:this.resourceBundle.FieldLabel.ORG_NAME||"Org.",width:100,dataIndex:'ORG_NAME',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("ORGINV_ID",{ id:'ORGINV_ID',header:this.resourceBundle.FieldLabel.ORGINV_ID||"Orginv_id",width:100,dataIndex:'ORGINV_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("ORGINV_CODE",{ id:'ORGINV_CODE',header:this.resourceBundle.FieldLabel.ORGINV_CODE||"Org inv.",width:100,dataIndex:'ORGINV_CODE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("STOCKLOC_ID",{ id:'STOCKLOC_ID',header:this.resourceBundle.FieldLabel.STOCKLOC_ID||"Stockloc_id",width:100,dataIndex:'STOCKLOC_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("STOCKLOC_CODE",{ id:'STOCKLOC_CODE',header:this.resourceBundle.FieldLabel.STOCKLOC_CODE||"Stock loc.",width:100,dataIndex:'STOCKLOC_CODE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("PRODUCT_ID",{ id:'PRODUCT_ID',header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",width:100,dataIndex:'PRODUCT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("PRODUCT_NAME",new Ext.form.TextField({name:"QRY_PRODUCT_NAME",id:"DC0089F_QRY_PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Prod. name",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_CODE",new Ext.form.TextField({name:"QRY_PRODUCT_CODE",id:"DC0089F_QRY_PRODUCT_CODE",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_CODE||"Prod. code",allowBlank:true,width:100}));
       this.queryFields.add("STOCK_ID",new Ext.form.Hidden({name:"QRY_STOCK_ID",id:"DC0089F_QRY_STOCK_ID",fieldLabel: this.resourceBundle.FieldLabel.STOCK_ID||"Stock_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0089F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0089F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0089F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ORG_ID",new Ext.form.Hidden({name:"QRY_ORG_ID",id:"DC0089F_QRY_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org_id",allowBlank:true,width:100}));
       this.queryFields.add("ORG_NAME",new  N21.DataComp.LOV0051({name:"QRY_ORG_NAME",id:"DC0089F_QRY_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORG_NAME||"Org.",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0089F_QRY_ORG_ID"}],paramMapping: [{param:"p_client_id",field:"DC0089F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ORGINV_ID",new Ext.form.Hidden({name:"QRY_ORGINV_ID",id:"DC0089F_QRY_ORGINV_ID",fieldLabel: this.resourceBundle.FieldLabel.ORGINV_ID||"Orginv_id",allowBlank:true,width:100}));
       this.queryFields.add("ORGINV_CODE",new  N21.DataComp.LOV0053({name:"QRY_ORGINV_CODE",id:"DC0089F_QRY_ORGINV_CODE",fieldLabel: this.resourceBundle.FieldLabel.ORGINV_CODE||"Org inv.",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0089F_QRY_ORGINV_ID"}],paramMapping: [{param:"p_org_id",field:"DC0089F_QRY_ORG_ID"}]}));
       this.queryFields.add("STOCKLOC_ID",new Ext.form.Hidden({name:"QRY_STOCKLOC_ID",id:"DC0089F_QRY_STOCKLOC_ID",fieldLabel: this.resourceBundle.FieldLabel.STOCKLOC_ID||"Stockloc_id",allowBlank:true,width:100}));
       this.queryFields.add("STOCKLOC_CODE",new Ext.form.TextField({name:"QRY_STOCKLOC_CODE",id:"DC0089F_QRY_STOCKLOC_CODE",fieldLabel: this.resourceBundle.FieldLabel.STOCKLOC_CODE||"Stock loc.",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0089F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100}));



       this.queryFieldsVisible = [  "PRODUCT_NAME","PRODUCT_CODE","CLIENT_CODE","ORG_NAME","ORGINV_CODE","STOCKLOC_CODE" ];
       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_SAVE").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0089.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0089.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,PRODUCT_CODE:""
              ,PRODUCT_NAME:""
              ,QTY:""
              ,UOM:""
              ,STOCK_ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,ORG_ID:""
              ,ORG_NAME:""
              ,ORGINV_ID:""
              ,ORGINV_CODE:""
              ,STOCKLOC_ID:""
              ,STOCKLOC_CODE:""
              ,PRODUCT_ID:""});
     }

  });
  Ext.reg("DC0089", N21.DataComp.DC0089);



