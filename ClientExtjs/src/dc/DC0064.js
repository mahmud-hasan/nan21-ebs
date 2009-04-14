/** 
 * Data Component: DC0064G, Title: Purchase order lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0064G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PORDER_ID", type:"float" }
         ,{name:"LINE_NR", type:"float" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"QTY", type:"float" }
         ,{name:"UOM_CODE", type:"string" }
         ,{name:"PRICE", type:"float" }
         ,{name:"CURRENCY_CODE", type:"string" }
         ,{name:"NET_AMOUNT", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"DATE_REQUESTED", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DATE_PROMISED", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DATE_DELIVERED", type:"date",dateFormat:Ext.DATE_FORMAT }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:0 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0064F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("PORDER_ID",new Ext.form.Hidden({name:"QRY_PORDER_ID",id:"DC0064F_QRY_PORDER_ID",fieldLabel: this.resourceBundle.FieldLabel.PORDER_ID||"Porder_id",allowBlank:true,width:100}));
       this.queryFields.add("LINE_NR",new Ext.form.NumberField({name:"QRY_LINE_NR",id:"DC0064F_QRY_LINE_NR",fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"No",allowBlank:true,width:100}));
       this.queryFields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"QRY_PRODUCT_NAME",id:"DC0064F_QRY_PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0064F_QRY_PRODUCT_ID"},{column:"NAME",field:"DC0064F_QRY_PRODUCT_NAME"}]}));
       this.queryFields.add("PRODUCT_ID",new Ext.form.Hidden({name:"QRY_PRODUCT_ID",id:"DC0064F_QRY_PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100}));
       this.queryFields.add("QTY",new Ext.form.NumberField({name:"QRY_QTY",id:"DC0064F_QRY_QTY",fieldLabel: this.resourceBundle.FieldLabel.QTY||"Qty",allowBlank:true,width:100}));
       this.queryFields.add("UOM_CODE",new  N21.DataComp.LOV0002({name:"QRY_UOM_CODE",id:"DC0064F_QRY_UOM_CODE",fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"UoM",allowBlank:true,caseRestriction:"Upper",style: "text-transform:uppercase;",width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("PRICE",new Ext.form.NumberField({name:"QRY_PRICE",id:"DC0064F_QRY_PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY_CODE",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY_CODE",id:"DC0064F_QRY_CURRENCY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",allowBlank:true,caseRestriction:"Upper",style: "text-transform:uppercase;",width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("NET_AMOUNT",new Ext.form.NumberField({name:"QRY_NET_AMOUNT",id:"DC0064F_QRY_NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",allowBlank:true,width:100}));
       this.queryFields.add("NOTES",new Ext.form.TextField({name:"QRY_NOTES",id:"DC0064F_QRY_NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:100}));
       this.queryFields.add("DATE_REQUESTED",new Ext.form.DateField({name:"QRY_DATE_REQUESTED",id:"DC0064F_QRY_DATE_REQUESTED",fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("DATE_PROMISED",new Ext.form.DateField({name:"QRY_DATE_PROMISED",id:"DC0064F_QRY_DATE_PROMISED",fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("DATE_DELIVERED",new Ext.form.DateField({name:"QRY_DATE_DELIVERED",id:"DC0064F_QRY_DATE_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
  
       this.queryFieldsVisible = [  "LINE_NR","PRODUCT_NAME","QTY","UOM_CODE","PRICE","CURRENCY_CODE","NET_AMOUNT","NOTES","DATE_REQUESTED","DATE_PROMISED","DATE_DELIVERED" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0064"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0064"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"PORDER_ID",header:this.resourceBundle.FieldLabel.PORDER_ID||"Porder_id",width:100,dataIndex:'PORDER_ID',hidden:true,sortable:true}
              ,{ id:"LINE_NR",header:this.resourceBundle.FieldLabel.LINE_NR||"No",width:40,dataIndex:'LINE_NR',sortable:true,align:'right'}
              ,{ id:"PRODUCT_NAME",header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",width:200,dataIndex:'PRODUCT_NAME',sortable:true}
              ,{ id:"PRODUCT_ID",header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",width:100,dataIndex:'PRODUCT_ID',hidden:true,sortable:true}
              ,{ id:"QTY",header:this.resourceBundle.FieldLabel.QTY||"Qty",width:80,dataIndex:'QTY',sortable:true,align:'right'}
              ,{ id:"UOM_CODE",header:this.resourceBundle.FieldLabel.UOM_CODE||"UoM",width:80,dataIndex:'UOM_CODE',sortable:true}
              ,{ id:"PRICE",header:this.resourceBundle.FieldLabel.PRICE||"Price",width:100,dataIndex:'PRICE',sortable:true,align:'right'}
              ,{ id:"CURRENCY_CODE",header:this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",width:50,dataIndex:'CURRENCY_CODE',sortable:true}
              ,{ id:"NET_AMOUNT",header:this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",width:100,dataIndex:'NET_AMOUNT',hidden:true,sortable:true,align:'right'}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"DATE_REQUESTED",header:this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",width:100,dataIndex:'DATE_REQUESTED',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DATE_PROMISED",header:this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",width:100,dataIndex:'DATE_PROMISED',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DATE_DELIVERED",header:this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",width:100,dataIndex:'DATE_DELIVERED',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
          ]
          ,dataComponentName:"DC0064G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0064G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0064G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PORDER_ID:""
              ,LINE_NR:""
              ,PRODUCT_NAME:""
              ,PRODUCT_ID:""
              ,QTY:""
              ,UOM_CODE:""
              ,PRICE:""
              ,CURRENCY_CODE:""
              ,NET_AMOUNT:""
              ,NOTES:""
              ,DATE_REQUESTED:""
              ,DATE_PROMISED:""
              ,DATE_DELIVERED:""});
     }
  });
  Ext.reg("DC0064G", N21.DataComp.DC0064G);
/** 
 * Data Component: DC0064F, Title: Purchase order lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0064F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0064G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0064F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PORDER_ID",new Ext.form.Hidden({name:"PORDER_ID",id:"DC0064F_PORDER_ID",dataIndex:"PORDER_ID",fieldLabel: this.resourceBundle.FieldLabel.PORDER_ID||"Porder_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("LINE_NR",new Ext.form.NumberField({name:"LINE_NR",id:"DC0064F_LINE_NR",dataIndex:"LINE_NR",fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"No",allowBlank:false,labelSeparator:":*",width:50,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("PRODUCT_NAME",new  N21.DataComp.LOV0017({name:"PRODUCT_NAME",id:"DC0064F_PRODUCT_NAME",dataIndex:"PRODUCT_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",allowBlank:false,labelSeparator:":*",width:250,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0064F_PRODUCT_ID"},{column:"NAME",field:"DC0064F_PRODUCT_NAME"}]}));
       this.fields.add("PRODUCT_ID",new Ext.form.Hidden({name:"PRODUCT_ID",id:"DC0064F_PRODUCT_ID",dataIndex:"PRODUCT_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("QTY",new Ext.form.NumberField({name:"QTY",id:"DC0064F_QTY",dataIndex:"QTY",fieldLabel: this.resourceBundle.FieldLabel.QTY||"Qty",allowBlank:false,labelSeparator:":*",width:80,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("UOM_CODE",new  N21.DataComp.LOV0002({name:"UOM_CODE",id:"DC0064F_UOM_CODE",dataIndex:"UOM_CODE",fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"UoM",allowBlank:false,labelSeparator:":*",caseRestriction:"Upper",width:80,listWidth:98,insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;",selectOnFocus:true}));
       this.fields.add("PRICE",new Ext.form.NumberField({name:"PRICE",id:"DC0064F_PRICE",dataIndex:"PRICE",fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",allowBlank:true,width:80,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("CURRENCY_CODE",new  N21.DataComp.LOV0001({name:"CURRENCY_CODE",id:"DC0064F_CURRENCY_CODE",dataIndex:"CURRENCY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",allowBlank:true,caseRestriction:"Upper",width:80,listWidth:98,insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;",selectOnFocus:true}));
       this.fields.add("NET_AMOUNT",new Ext.form.NumberField({name:"NET_AMOUNT",id:"DC0064F_NET_AMOUNT",dataIndex:"NET_AMOUNT",fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("NOTES",new Ext.form.TextField({name:"NOTES",id:"DC0064F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,insert_allowed:true,update_allowed:true}));
       this.fields.add("DATE_REQUESTED",new Ext.form.DateField({name:"DATE_REQUESTED",id:"DC0064F_DATE_REQUESTED",dataIndex:"DATE_REQUESTED",fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("DATE_PROMISED",new Ext.form.DateField({name:"DATE_PROMISED",id:"DC0064F_DATE_PROMISED",dataIndex:"DATE_PROMISED",fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("DATE_DELIVERED",new Ext.form.DateField({name:"DATE_DELIVERED",id:"DC0064F_DATE_DELIVERED",dataIndex:"DATE_DELIVERED",fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",allowBlank:true,width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));

       this.layoutItems.add("R2C2",
             { layout:"form",width:240,labelAlign:"right",labelWidth:100, items:[ this.fields.get("DATE_REQUESTED"),this.fields.get("DATE_PROMISED"),this.fields.get("DATE_DELIVERED")]
 }); 
       this.layoutItems.add("R2C1",
             { layout:"form",width:200,labelAlign:"right",labelWidth:100, items:[ this.fields.get("QTY"),this.fields.get("UOM_CODE"),this.fields.get("PRICE"),this.fields.get("CURRENCY_CODE")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("R2C1"),this.layoutItems.get("R2C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.fields.get("PORDER_ID"),this.fields.get("ID"),this.fields.get("PRODUCT_NAME"),this.fields.get("PRODUCT_ID")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0064F"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0064F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0064F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PORDER_ID:""
              ,LINE_NR:""
              ,PRODUCT_NAME:""
              ,PRODUCT_ID:""
              ,QTY:""
              ,UOM_CODE:""
              ,PRICE:""
              ,CURRENCY_CODE:""
              ,NET_AMOUNT:""
              ,NOTES:""
              ,DATE_REQUESTED:""
              ,DATE_PROMISED:""
              ,DATE_DELIVERED:""});
     }


  });
  Ext.reg("DC0064F", N21.DataComp.DC0064F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0064
 * Title: Purchase order lines
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0064 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0064"
          ,masterName:"DC0064G"
          ,detailName:"DC0064F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0064G",id: "DC0064G",region:"north" ,split:true,height:250,minHeight:0}
             ,{xtype: "DC0064F",id: "DC0064F",region:"center",split:true,autoScroll:true}
            ]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0064</span>"          )
        }); 

       N21.DataComp.DC0064.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0064", N21.DataComp.DC0064);



