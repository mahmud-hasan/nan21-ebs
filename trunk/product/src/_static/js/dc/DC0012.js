/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0012 DataControl: Currency exchange rates
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0012 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CURRENCY_FROM", type:"string" }
         ,{name:"CURRENCY_TO", type:"string" }
         ,{name:"XRATE", type:"float" }
         ,{name:"VALID_FROM", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"VALID_TO", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"XRATE"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0012"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0012"
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
,"->","<span class='dcName'>DC0012</span>"          )
          ,dataComponentName:"DC0012"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CURRENCY_FROM",{ id:'CURRENCY_FROM',header:this.resourceBundle.FieldLabel.CURRENCY_FROM||"Currency_from",width:100,dataIndex:'CURRENCY_FROM',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0001({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CURRENCY_TO",{ id:'CURRENCY_TO',header:this.resourceBundle.FieldLabel.CURRENCY_TO||"Currency_to",width:100,dataIndex:'CURRENCY_TO',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0001({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("XRATE",{ id:'XRATE',header:this.resourceBundle.FieldLabel.XRATE||"Xrate",width:100,dataIndex:'XRATE',insert_allowed:true,update_allowed:true,sortable:true,align:'right',decimalPrecision:6,editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("VALID_FROM",{ id:'VALID_FROM',header:this.resourceBundle.FieldLabel.VALID_FROM||"Valid_from",width:100,dataIndex:'VALID_FROM',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("VALID_TO",{ id:'VALID_TO',header:this.resourceBundle.FieldLabel.VALID_TO||"Valid_to",width:100,dataIndex:'VALID_TO',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0012F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CURRENCY_FROM",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY_FROM",id:"DC0012F_QRY_CURRENCY_FROM",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_FROM||"Currency_from",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("CURRENCY_TO",new  N21.DataComp.LOV0001({name:"QRY_CURRENCY_TO",id:"DC0012F_QRY_CURRENCY_TO",fieldLabel: this.resourceBundle.FieldLabel.CURRENCY_TO||"Currency_to",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("VALID_FROM",new Ext.form.DateField({name:"QRY_VALID_FROM",id:"DC0012F_QRY_VALID_FROM",fieldLabel: this.resourceBundle.FieldLabel.VALID_FROM||"Valid_from",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("VALID_TO",new Ext.form.DateField({name:"QRY_VALID_TO",id:"DC0012F_QRY_VALID_TO",fieldLabel: this.resourceBundle.FieldLabel.VALID_TO||"Valid_to",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));



       this.queryFieldsVisible = [  "CURRENCY_FROM","CURRENCY_TO","VALID_FROM","VALID_TO" ];
       N21.DataComp.DC0012.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0012.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CURRENCY_FROM:""
              ,CURRENCY_TO:""
              ,XRATE:""
              ,VALID_FROM:""
              ,VALID_TO:""
              ,MODIFIEDON:""});
     }

  });
  Ext.reg("DC0012", N21.DataComp.DC0012);



