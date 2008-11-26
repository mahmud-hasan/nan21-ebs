/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0064 DataControl: Purchase order lines
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0064 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"PORDER_ID", type:"float" }
         ,{name:"LINE_NR", type:"float" }
         ,{name:"PRODUCT_NAME", type:"string" }
         ,{name:"PRODUCT_ID", type:"float" }
         ,{name:"UOM_CODE", type:"string" }
         ,{name:"QTY", type:"float" }
         ,{name:"CURRENCY_CODE", type:"string" }
         ,{name:"PRICE", type:"float" }
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
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("PORDER_ID",{ id:'PORDER_ID',header:this.resourceBundle.FieldLabel.PORDER_ID||"Porder_id",width:100,dataIndex:'PORDER_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("LINE_NR",{ id:'LINE_NR',header:this.resourceBundle.FieldLabel.LINE_NR||"No",width:100,dataIndex:'LINE_NR',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("PRODUCT_NAME",{ id:'PRODUCT_NAME',header:this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product",width:100,dataIndex:'PRODUCT_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0017({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"PRODUCT_ID"},{column:"NAME",field:"PRODUCT_NAME"}],cls:"x-form-text-in-grid",selectOnFocus:true,cls:"x-form-text-in-grid",valueField:"ID",displayField:"NAME"})});
         this.columns.add("PRODUCT_ID",{ id:'PRODUCT_ID',header:this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id",width:100,dataIndex:'PRODUCT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("UOM_CODE",{ id:'UOM_CODE',header:this.resourceBundle.FieldLabel.UOM_CODE||"UoM",width:100,dataIndex:'UOM_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0002({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("QTY",{ id:'QTY',header:this.resourceBundle.FieldLabel.QTY||"Qty",width:100,dataIndex:'QTY',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("CURRENCY_CODE",{ id:'CURRENCY_CODE',header:this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency",width:100,dataIndex:'CURRENCY_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0001({allowBlank: true,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("PRICE",{ id:'PRICE',header:this.resourceBundle.FieldLabel.PRICE||"Price",width:100,dataIndex:'PRICE',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NET_AMOUNT",{ id:'NET_AMOUNT',header:this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",width:100,dataIndex:'NET_AMOUNT',insert_allowed:true,update_allowed:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("NOTES",{ id:'NOTES',header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("DATE_REQUESTED",{ id:'DATE_REQUESTED',header:this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",width:100,dataIndex:'DATE_REQUESTED',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("DATE_PROMISED",{ id:'DATE_PROMISED',header:this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",width:100,dataIndex:'DATE_PROMISED',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("DATE_DELIVERED",{ id:'DATE_DELIVERED',header:this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",width:100,dataIndex:'DATE_DELIVERED',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: true,cls:"x-form-text-in-grid"})});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0064_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("PORDER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PORDER_ID",id:"DC0064_QRY_PORDER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PORDER_ID||"Porder_id"})  );
         this.queryFields.add("LINE_NR", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_LINE_NR",id:"DC0064_QRY_LINE_NR",width:100,fieldLabel: this.resourceBundle.FieldLabel.LINE_NR||"No",style: "text-align:right;"})  );
         this.queryFields.add("PRODUCT_NAME", new N21.DataComp.LOV0017({xtype: "LOV0017",fieldMapping: [{column:"ID",field:"DC0064_QRY_PRODUCT_ID"},{column:"NAME",field:"DC0064_QRY_PRODUCT_NAME"}],selectOnFocus:true,name:"QRY_PRODUCT_NAME",id:"DC0064_QRY_PRODUCT_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_NAME||"Product"})  );
         this.queryFields.add("PRODUCT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_PRODUCT_ID",id:"DC0064_QRY_PRODUCT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRODUCT_ID||"Product_id"})  );
         this.queryFields.add("UOM_CODE", new N21.DataComp.LOV0002({xtype: "LOV0002",name:"QRY_UOM_CODE",id:"DC0064_QRY_UOM_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"UoM"})  );
         this.queryFields.add("QTY", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_QTY",id:"DC0064_QRY_QTY",width:100,fieldLabel: this.resourceBundle.FieldLabel.QTY||"Qty",style: "text-align:right;"})  );
         this.queryFields.add("CURRENCY_CODE", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_CURRENCY_CODE",id:"DC0064_QRY_CURRENCY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_CODE||"Currency"})  );
         this.queryFields.add("PRICE", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_PRICE",id:"DC0064_QRY_PRICE",width:100,fieldLabel: this.resourceBundle.FieldLabel.PRICE||"Price",style: "text-align:right;"})  );
         this.queryFields.add("NET_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_NET_AMOUNT",id:"DC0064_QRY_NET_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.NET_AMOUNT||"Net amount",style: "text-align:right;"})  );
         this.queryFields.add("NOTES", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NOTES",id:"DC0064_QRY_NOTES",width:100,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes"})  );
         this.queryFields.add("DATE_REQUESTED", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DATE_REQUESTED",id:"DC0064_QRY_DATE_REQUESTED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DATE_REQUESTED||"Requested for",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("DATE_PROMISED", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DATE_PROMISED",id:"DC0064_QRY_DATE_PROMISED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DATE_PROMISED||"Promised for",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("DATE_DELIVERED", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DATE_DELIVERED",id:"DC0064_QRY_DATE_DELIVERED",width:100,fieldLabel: this.resourceBundle.FieldLabel.DATE_DELIVERED||"Delivered on",format:Ext.DATE_FORMAT})  );

       this.queryFieldsVisible = [  "LINE_NR","PRODUCT_NAME","UOM_CODE","QTY","CURRENCY_CODE","PRICE","NET_AMOUNT","NOTES","DATE_REQUESTED","DATE_PROMISED","DATE_DELIVERED" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0064"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0064"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("PORDER_ID"),this.columns.get("LINE_NR"),this.columns.get("PRODUCT_NAME"),this.columns.get("PRODUCT_ID"),this.columns.get("UOM_CODE"),this.columns.get("QTY"),this.columns.get("CURRENCY_CODE"),this.columns.get("PRICE"),this.columns.get("NET_AMOUNT"),this.columns.get("NOTES"),this.columns.get("DATE_REQUESTED"),this.columns.get("DATE_PROMISED"),this.columns.get("DATE_DELIVERED")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_66"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"Apply filter" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_73"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"Save changes &lt;Ctrl+S&gt;" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_68"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"Create new record &lt;Ctrl+N&gt;" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_65"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"Delete record &lt;Ctrl+D&gt;" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_67"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_upd.png" ,tooltip:"Editor&lt;Enter&gt;, List&lt;Ctrl+Q&gt;" ,handler: this.toggleEditMode ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_72"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_refresh.gif" ,tooltip:"Refresh record" ,handler: this.reloadRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_70"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_prev.gif" ,tooltip:"Previous record" ,handler: this.goToPrevRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_69"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/f_rec_next.gif" ,tooltip:"Next record" ,handler: this.goToNextRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_71"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0064"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0064.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0064.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,PORDER_ID:""
              ,LINE_NR:""
              ,PRODUCT_NAME:""
              ,PRODUCT_ID:""
              ,UOM_CODE:""
              ,QTY:""
              ,CURRENCY_CODE:""
              ,PRICE:""
              ,NET_AMOUNT:""
              ,NOTES:""
              ,DATE_REQUESTED:""
              ,DATE_PROMISED:""
              ,DATE_DELIVERED:""});
     }

  });
  Ext.reg("DC0064", N21.DataComp.DC0064);



