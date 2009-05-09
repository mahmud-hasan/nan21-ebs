/** 
 * Data Component: DC0080G, Title: Reception document line
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0080G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"LINE_NO", type:"float" }
         ,{name:"MVMNTINDOC_ID", type:"float" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"QTY", type:"float" }
         ,{name:"UOM", type:"string" }
         ,{name:"BASE_DOC_QTY", type:"float" }
         ,{name:"RECEIVED_QTY", type:"float" }
         ,{name:"INVENTORY_QTY", type:"float" }
         ,{name:"BASE_DOC_PRICE", type:"float" }
         ,{name:"BASE_DOC_CURRENCY", type:"string" }
         ,{name:"STOCKLOC_CODE", type:"string" }
         ,{name:"STOCKLOC_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:1 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0080F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("MVMNTINDOC_ID",new Ext.form.Hidden({name:"QRY_MVMNTINDOC_ID",id:"DC0080F_QRY_MVMNTINDOC_ID",fieldLabel: this.resourceBundle.FieldLabel.MVMNTINDOC_ID||"Document ID",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0080F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product ID",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"QRY_PRODUCT_NAME",id:"DC0080F_QRY_PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product name",allowBlank:true,width:200,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0080F_QRY_PRODUCT_ID"},{column:"NAME",field:"DC0080F_QRY_PRODUCT_NAME"}]}));
       this.queryFields.add("STOCKLOC_ID",new Ext.form.Hidden({name:"QRY_STOCKLOC_ID",id:"DC0080F_QRY_STOCKLOC_ID",fieldLabel: this.resourceBundle.FieldLabel.STOCKLOC_ID||"Stockloc_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "PRODUCT_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0080"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0080", _n21["DATA_FORMAT_JSON"])
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"LINE_NO",header:this.resourceBundle.FieldLabel.LINE_NO||"Line no",width:100,dataIndex:'LINE_NO',hidden:true,sortable:true}
              ,{ id:"MVMNTINDOC_ID",header:this.resourceBundle.FieldLabel.MVMNTINDOC_ID||"Document ID",width:100,dataIndex:'MVMNTINDOC_ID',hidden:true,sortable:true}
              ,{ id:"PRODUCT_ID",header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product ID",width:100,dataIndex:'PRODUCT_ID',hidden:true,sortable:true}
              ,{ id:"PRODUCT_NAME",header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product name",width:200,dataIndex:'PRODUCT_NAME',sortable:true}
              ,{ id:"QTY",header:this.resourceBundle.FieldLabel.QTY||"Qty",width:100,dataIndex:'QTY',sortable:true,align:'right'}
              ,{ id:"UOM",header:this.resourceBundle.FieldLabel.UOM||"Uom",width:100,dataIndex:'UOM',sortable:true}
              ,{ id:"BASE_DOC_QTY",header:this.resourceBundle.FieldLabel.BASE_DOC_QTY||"Base doc qty",width:100,dataIndex:'BASE_DOC_QTY',hidden:true,sortable:true,align:'right'}
              ,{ id:"RECEIVED_QTY",header:this.resourceBundle.FieldLabel.RECEIVED_QTY||"Received qty",width:100,dataIndex:'RECEIVED_QTY',hidden:true,sortable:true,align:'right'}
              ,{ id:"INVENTORY_QTY",header:this.resourceBundle.FieldLabel.INVENTORY_QTY||"Inventory qty",width:100,dataIndex:'INVENTORY_QTY',hidden:true,sortable:true,align:'right'}
              ,{ id:"BASE_DOC_PRICE",header:this.resourceBundle.FieldLabel.BASE_DOC_PRICE||"Base doc price",width:100,dataIndex:'BASE_DOC_PRICE',hidden:true,sortable:true,align:'right'}
              ,{ id:"BASE_DOC_CURRENCY",header:this.resourceBundle.FieldLabel.BASE_DOC_CURRENCY||"Base doc currency",width:100,dataIndex:'BASE_DOC_CURRENCY',hidden:true,sortable:true}
              ,{ id:"STOCKLOC_CODE",header:this.resourceBundle.FieldLabel.STOCKLOC_CODE||"Stock location",width:100,dataIndex:'STOCKLOC_CODE',sortable:true}
              ,{ id:"STOCKLOC_ID",header:this.resourceBundle.FieldLabel.STOCKLOC_ID||"Stockloc_id",width:100,dataIndex:'STOCKLOC_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0080G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0080G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0080G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,LINE_NO:""
              ,MVMNTINDOC_ID:""
              ,PRODUCT_ID:""
              ,PRODUCT_NAME:""
              ,QTY:""
              ,UOM:""
              ,BASE_DOC_QTY:""
              ,RECEIVED_QTY:""
              ,INVENTORY_QTY:""
              ,BASE_DOC_PRICE:""
              ,BASE_DOC_CURRENCY:""
              ,STOCKLOC_CODE:""
              ,STOCKLOC_ID:""
              ,NOTES:""});
     }
  });
  Ext.reg("DC0080G", N21.DataComp.DC0080G);
/** 
 * Data Component: DC0080F, Title: Reception document line
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0080F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0080G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0080F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("LINE_NO",new Ext.form.Hidden({name:"LINE_NO",id:"DC0080F_LINE_NO",dataIndex:"LINE_NO",fieldLabel: this.resourceBundle.FieldLabel.LINE_NO||"Line no",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("MVMNTINDOC_ID",new Ext.form.Hidden({name:"MVMNTINDOC_ID",id:"DC0080F_MVMNTINDOC_ID",dataIndex:"MVMNTINDOC_ID",fieldLabel: this.resourceBundle.FieldLabel.MVMNTINDOC_ID||"Document ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODUCT_ID",new Ext.form.Hidden({name:"PRODUCT_ID",id:"DC0080F_PRODUCT_ID",dataIndex:"PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"PRODUCT_NAME",id:"DC0080F_PRODUCT_NAME",dataIndex:"PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product name",allowBlank:false,labelSeparator:":*",width:300,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0080F_PRODUCT_ID"},{column:"NAME",field:"DC0080F_PRODUCT_NAME"}]}));
       this.fields.add("QTY",new Ext.form.NumberField({name:"QTY",id:"DC0080F_QTY",dataIndex:"QTY",fieldLabel: this.resourceBundle.FieldLabel.QTY||"Qty",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("UOM",new  N21.DataComp.LOV0002({name:"UOM",id:"DC0080F_UOM",dataIndex:"UOM",fieldLabel: this.resourceBundle.FieldLabel.UOM||"Uom",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("BASE_DOC_QTY",new Ext.form.NumberField({name:"BASE_DOC_QTY",id:"DC0080F_BASE_DOC_QTY",dataIndex:"BASE_DOC_QTY",fieldLabel: this.resourceBundle.FieldLabel.BASE_DOC_QTY||"Base doc qty",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("RECEIVED_QTY",new Ext.form.NumberField({name:"RECEIVED_QTY",id:"DC0080F_RECEIVED_QTY",dataIndex:"RECEIVED_QTY",fieldLabel: this.resourceBundle.FieldLabel.RECEIVED_QTY||"Received qty",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("INVENTORY_QTY",new Ext.form.NumberField({name:"INVENTORY_QTY",id:"DC0080F_INVENTORY_QTY",dataIndex:"INVENTORY_QTY",fieldLabel: this.resourceBundle.FieldLabel.INVENTORY_QTY||"Inventory qty",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("BASE_DOC_PRICE",new Ext.form.NumberField({name:"BASE_DOC_PRICE",id:"DC0080F_BASE_DOC_PRICE",dataIndex:"BASE_DOC_PRICE",fieldLabel: this.resourceBundle.FieldLabel.BASE_DOC_PRICE||"Base doc price",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("BASE_DOC_CURRENCY",new  N21.DataComp.LOV0001({name:"BASE_DOC_CURRENCY",id:"DC0080F_BASE_DOC_CURRENCY",dataIndex:"BASE_DOC_CURRENCY",fieldLabel: this.resourceBundle.FieldLabel.BASE_DOC_CURRENCY||"Base doc currency",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("STOCKLOC_CODE",new  N21.DataComp.LOV0055({name:"STOCKLOC_CODE",id:"DC0080F_STOCKLOC_CODE",dataIndex:"STOCKLOC_CODE",fieldLabel: this.resourceBundle.FieldLabel.STOCKLOC_CODE||"Stock location",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0080F_STOCKLOC_ID"}],paramMapping: [{param:"p_orginv_id",field:"DC0078.ORGINV_ID"}]}));
       this.fields.add("STOCKLOC_ID",new Ext.form.Hidden({name:"STOCKLOC_ID",id:"DC0080F_STOCKLOC_ID",dataIndex:"STOCKLOC_ID",fieldLabel: this.resourceBundle.FieldLabel.STOCKLOC_ID||"Stockloc_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NOTES",new Ext.form.TextField({name:"NOTES",id:"DC0080F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:150,height:40,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("R2C2",
             { layout:"form",columnWidth:.5, items:[ this.fields.get("LINE_NO"),this.fields.get("BASE_DOC_PRICE"),this.fields.get("BASE_DOC_CURRENCY"),this.fields.get("STOCKLOC_CODE"),this.fields.get("STOCKLOC_ID"),this.fields.get("NOTES")]
 }); 
       this.layoutItems.add("R2C1",
             { layout:"form",columnWidth:.5, items:[ this.fields.get("QTY"),this.fields.get("UOM"),this.fields.get("BASE_DOC_QTY"),this.fields.get("RECEIVED_QTY"),this.fields.get("INVENTORY_QTY")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",columnWidth:1, items:[ this.layoutItems.get("R2C1"),this.layoutItems.get("R2C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("MVMNTINDOC_ID"),this.fields.get("PRODUCT_ID"),this.fields.get("PRODUCT_NAME")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0080F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0080F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0080F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,LINE_NO:""
              ,MVMNTINDOC_ID:""
              ,PRODUCT_ID:""
              ,PRODUCT_NAME:""
              ,QTY:""
              ,UOM:""
              ,BASE_DOC_QTY:""
              ,RECEIVED_QTY:""
              ,INVENTORY_QTY:""
              ,BASE_DOC_PRICE:""
              ,BASE_DOC_CURRENCY:""
              ,STOCKLOC_CODE:""
              ,STOCKLOC_ID:""
              ,NOTES:""});
     }


  });
  Ext.reg("DC0080F", N21.DataComp.DC0080F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0080
 * Title: Reception document line
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0080 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0080"
          ,masterName:"DC0080G"
          ,detailName:"DC0080F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0080G",id: "DC0080G",region:"north" ,split:true,height:200,minHeight:0}
             ,{xtype: "DC0080F",id: "DC0080F",region:"center",split:true,autoScroll:true}
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
,"->","<span class='dcName'>DC0080</span>"          )
        }); 

       N21.DataComp.DC0080.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0080", N21.DataComp.DC0080);



