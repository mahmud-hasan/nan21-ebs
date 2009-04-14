/** 
 * Data Component: DC0078G, Title: Reception document
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0078G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ORG_NAME", type:"string" }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"ORGINV_ID", type:"float" }
         ,{name:"ORGINV_NAME", type:"string" }
         ,{name:"DOC_NO", type:"float" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"FROM_BPARTNER_ID", type:"float" }
         ,{name:"NOTES", type:"string" }
         ,{name:"DOC_TYPE", type:"string" }
         ,{name:"RINV_ID", type:"float" }
         ,{name:"QTY_CHECK", type:"string" }
         ,{name:"QTY_CHECK_ON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"QTY_CHECK_BY", type:"string" }
         ,{name:"QUALITY_CHECK", type:"string" }
         ,{name:"QUALITY_CHECK_ON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"QUALITY_CHECK_BY", type:"string" }
         ,{name:"VALUE_CHECK", type:"string" }
         ,{name:"VALUE_CHECK_ON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"VALUE_CHECK_BY", type:"string" }
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
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0078F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0078F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0078F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0078F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("ORG_NAME",new  N21.DataComp.LOV0051({name:"QRY_ORG_NAME",id:"DC0078F_QRY_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORG_NAME||"Organization",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0078F_QRY_ORG_ID"}],paramMapping: [{param:"p_client_id",field:"DC0078F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("ORG_ID",new Ext.form.Hidden({name:"QRY_ORG_ID",id:"DC0078F_QRY_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org_id",allowBlank:true,width:100}));
       this.queryFields.add("ORGINV_ID",new Ext.form.Hidden({name:"QRY_ORGINV_ID",id:"DC0078F_QRY_ORGINV_ID",fieldLabel: this.resourceBundle.FieldLabel.ORGINV_ID||"Orginv_id",allowBlank:true,width:100}));
       this.queryFields.add("ORGINV_NAME",new  N21.DataComp.LOV0053({name:"QRY_ORGINV_NAME",id:"DC0078F_QRY_ORGINV_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORGINV_NAME||"Org. inventory",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0078F_QRY_ORGINV_ID"}],paramMapping: [{param:"p_org_id",field:"DC0078F_QRY_ORG_ID"}]}));
       this.queryFields.add("DOC_NO",new Ext.form.NumberField({name:"QRY_DOC_NO",id:"DC0078F_QRY_DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",allowBlank:true,width:100}));
       this.queryFields.add("DOC_DATE",new Ext.form.DateField({name:"QRY_DOC_DATE",id:"DC0078F_QRY_DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",allowBlank:true,width:100,format:Ext.DATE_FORMAT}));
       this.queryFields.add("FROM_BPARTNER_ID",new Ext.form.Hidden({name:"QRY_FROM_BPARTNER_ID",id:"DC0078F_QRY_FROM_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.FROM_BPARTNER_ID||"BPartner ID",allowBlank:true,width:100}));
       this.queryFields.add("DOC_TYPE",new  N21.DataComp.LOV0047({name:"QRY_DOC_TYPE",id:"DC0078F_QRY_DOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Doc type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("RINV_ID",new Ext.form.Hidden({name:"QRY_RINV_ID",id:"DC0078F_QRY_RINV_ID",fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Supplier invoice ID",allowBlank:true,width:100}));
       this.queryFields.add("QTY_CHECK",new Ext.form.ComboBox({name:"QRY_QTY_CHECK",id:"DC0078F_QRY_QTY_CHECK",fieldLabel: this.resourceBundle.FieldLabel.QTY_CHECK||"Qty check",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("QUALITY_CHECK",new Ext.form.ComboBox({name:"QRY_QUALITY_CHECK",id:"DC0078F_QRY_QUALITY_CHECK",fieldLabel: this.resourceBundle.FieldLabel.QUALITY_CHECK||"Quality check",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
       this.queryFields.add("VALUE_CHECK",new Ext.form.ComboBox({name:"QRY_VALUE_CHECK",id:"DC0078F_QRY_VALUE_CHECK",fieldLabel: this.resourceBundle.FieldLabel.VALUE_CHECK||"Value check",allowBlank:true,width:40,store:["%","Y","N"],value:"%"}));
  
       this.queryFieldsVisible = [  "CLIENT_CODE","ORG_NAME","ORGINV_NAME","DOC_NO","DOC_DATE","DOC_TYPE","QTY_CHECK","QUALITY_CHECK","VALUE_CHECK" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0078"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0078"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:50,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"ORG_NAME",header:this.resourceBundle.FieldLabel.ORG_NAME||"Organization",width:100,dataIndex:'ORG_NAME',sortable:true}
              ,{ id:"ORG_ID",header:this.resourceBundle.FieldLabel.ORG_ID||"Org_id",width:100,dataIndex:'ORG_ID',hidden:true,sortable:true}
              ,{ id:"ORGINV_ID",header:this.resourceBundle.FieldLabel.ORGINV_ID||"Orginv_id",width:100,dataIndex:'ORGINV_ID',hidden:true,sortable:true}
              ,{ id:"ORGINV_NAME",header:this.resourceBundle.FieldLabel.ORGINV_NAME||"Org. inventory",width:100,dataIndex:'ORGINV_NAME',sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc no",width:100,dataIndex:'DOC_NO',sortable:true,align:'right'}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"FROM_BPARTNER_ID",header:this.resourceBundle.FieldLabel.FROM_BPARTNER_ID||"BPartner ID",width:100,dataIndex:'FROM_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"DOC_TYPE",header:this.resourceBundle.FieldLabel.DOC_TYPE||"Doc type",width:100,dataIndex:'DOC_TYPE',sortable:true}
              ,{ id:"RINV_ID",header:this.resourceBundle.FieldLabel.RINV_ID||"Supplier invoice ID",width:100,dataIndex:'RINV_ID',hidden:true,sortable:true}
              ,{ id:"QTY_CHECK",header:this.resourceBundle.FieldLabel.QTY_CHECK||"Qty check",width:40,dataIndex:'QTY_CHECK',sortable:true}
              ,{ id:"QTY_CHECK_ON",header:this.resourceBundle.FieldLabel.QTY_CHECK_ON||"Qty check on",width:100,dataIndex:'QTY_CHECK_ON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"QTY_CHECK_BY",header:this.resourceBundle.FieldLabel.QTY_CHECK_BY||"Qty check by",width:100,dataIndex:'QTY_CHECK_BY',hidden:true,sortable:true}
              ,{ id:"QUALITY_CHECK",header:this.resourceBundle.FieldLabel.QUALITY_CHECK||"Quality check",width:40,dataIndex:'QUALITY_CHECK',sortable:true}
              ,{ id:"QUALITY_CHECK_ON",header:this.resourceBundle.FieldLabel.QUALITY_CHECK_ON||"Quality check on",width:100,dataIndex:'QUALITY_CHECK_ON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"QUALITY_CHECK_BY",header:this.resourceBundle.FieldLabel.QUALITY_CHECK_BY||"Quality check by",width:100,dataIndex:'QUALITY_CHECK_BY',hidden:true,sortable:true}
              ,{ id:"VALUE_CHECK",header:this.resourceBundle.FieldLabel.VALUE_CHECK||"Value check",width:40,dataIndex:'VALUE_CHECK',sortable:true}
              ,{ id:"VALUE_CHECK_ON",header:this.resourceBundle.FieldLabel.VALUE_CHECK_ON||"Value check on",width:100,dataIndex:'VALUE_CHECK_ON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"VALUE_CHECK_BY",header:this.resourceBundle.FieldLabel.VALUE_CHECK_BY||"Value check by",width:100,dataIndex:'VALUE_CHECK_BY',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0078G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0078G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0078G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ORG_NAME:""
              ,ORG_ID:""
              ,ORGINV_ID:""
              ,ORGINV_NAME:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,FROM_BPARTNER_ID:""
              ,NOTES:""
              ,DOC_TYPE:""
              ,RINV_ID:""
              ,QTY_CHECK:""
              ,QTY_CHECK_ON:""
              ,QTY_CHECK_BY:""
              ,QUALITY_CHECK:""
              ,QUALITY_CHECK_ON:""
              ,QUALITY_CHECK_BY:""
              ,VALUE_CHECK:""
              ,VALUE_CHECK_ON:""
              ,VALUE_CHECK_BY:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0078G", N21.DataComp.DC0078G);
/** 
 * Data Component: DC0078F, Title: Reception document
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0078F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0078G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0078F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"CLIENT_CODE",id:"DC0078F_CLIENT_CODE",dataIndex:"CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:false,labelSeparator:":*",width:100,listWidth:118,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0078F_CLIENT_ID"}]}));
       this.fields.add("CLIENT_ID",new Ext.form.Hidden({name:"CLIENT_ID",id:"DC0078F_CLIENT_ID",dataIndex:"CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ORG_ID",new Ext.form.Hidden({name:"ORG_ID",id:"DC0078F_ORG_ID",dataIndex:"ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Org_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ORG_NAME",new  N21.DataComp.LOV0051({name:"ORG_NAME",id:"DC0078F_ORG_NAME",dataIndex:"ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORG_NAME||"Organization",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0078F_ORG_ID"}],paramMapping: [{param:"p_client_id",field:"DC0078F.CLIENT_ID"}]}));
       this.fields.add("ORGINV_ID",new Ext.form.Hidden({name:"ORGINV_ID",id:"DC0078F_ORGINV_ID",dataIndex:"ORGINV_ID",fieldLabel: this.resourceBundle.FieldLabel.ORGINV_ID||"Orginv_id",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("ORGINV_NAME",new  N21.DataComp.LOV0053({name:"ORGINV_NAME",id:"DC0078F_ORGINV_NAME",dataIndex:"ORGINV_NAME",fieldLabel: this.resourceBundle.FieldLabel.ORGINV_NAME||"Org. inventory",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0078F_ORGINV_ID"}],paramMapping: [{param:"p_org_id",field:"DC0078F.ORG_ID"}]}));
       this.fields.add("DOC_NO",new Ext.form.NumberField({name:"DOC_NO",id:"DC0078F_DOC_NO",dataIndex:"DOC_NO",fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,style: "text-align:right;",decimalPrecision:2}));
       this.fields.add("DOC_DATE",new Ext.form.DateField({name:"DOC_DATE",id:"DC0078F_DOC_DATE",dataIndex:"DOC_DATE",fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("FROM_BPARTNER_ID",new Ext.form.Hidden({name:"FROM_BPARTNER_ID",id:"DC0078F_FROM_BPARTNER_ID",dataIndex:"FROM_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.FROM_BPARTNER_ID||"BPartner ID",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NOTES",new Ext.form.TextArea({name:"NOTES",id:"DC0078F_NOTES",dataIndex:"NOTES",fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",allowBlank:true,width:200,height:40,insert_allowed:true,update_allowed:true}));
       this.fields.add("DOC_TYPE",new  N21.DataComp.LOV0047({name:"DOC_TYPE",id:"DC0078F_DOC_TYPE",dataIndex:"DOC_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Doc type",allowBlank:false,labelSeparator:":*",width:80,listWidth:98,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("RINV_ID",new Ext.form.Hidden({name:"RINV_ID",id:"DC0078F_RINV_ID",dataIndex:"RINV_ID",fieldLabel: this.resourceBundle.FieldLabel.RINV_ID||"Supplier invoice ID",allowBlank:true,width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("QTY_CHECK",new Ext.ux.form.XCheckbox({name:"QTY_CHECK",id:"DC0078F_QTY_CHECK",dataIndex:"QTY_CHECK",fieldLabel: this.resourceBundle.FieldLabel.QTY_CHECK||"Qty check",allowBlank:true,insert_allowed:false,update_allowed:true}));
       this.fields.add("QTY_CHECK_ON",new Ext.form.DateField({name:"QTY_CHECK_ON",id:"DC0078F_QTY_CHECK_ON",dataIndex:"QTY_CHECK_ON",fieldLabel: this.resourceBundle.FieldLabel.QTY_CHECK_ON||"Qty check on",allowBlank:true,width:100,insert_allowed:false,update_allowed:false,format:Ext.DATE_FORMAT}));
       this.fields.add("QTY_CHECK_BY",new Ext.form.TextField({name:"QTY_CHECK_BY",id:"DC0078F_QTY_CHECK_BY",dataIndex:"QTY_CHECK_BY",fieldLabel: this.resourceBundle.FieldLabel.QTY_CHECK_BY||"Qty check by",allowBlank:true,width:100,insert_allowed:false,update_allowed:false}));
       this.fields.add("QUALITY_CHECK",new Ext.ux.form.XCheckbox({name:"QUALITY_CHECK",id:"DC0078F_QUALITY_CHECK",dataIndex:"QUALITY_CHECK",fieldLabel: this.resourceBundle.FieldLabel.QUALITY_CHECK||"Quality check",allowBlank:true,insert_allowed:true,update_allowed:true}));
       this.fields.add("QUALITY_CHECK_ON",new Ext.form.DateField({name:"QUALITY_CHECK_ON",id:"DC0078F_QUALITY_CHECK_ON",dataIndex:"QUALITY_CHECK_ON",fieldLabel: this.resourceBundle.FieldLabel.QUALITY_CHECK_ON||"Quality check on",allowBlank:true,width:100,insert_allowed:false,update_allowed:false,format:Ext.DATE_FORMAT}));
       this.fields.add("QUALITY_CHECK_BY",new Ext.form.TextField({name:"QUALITY_CHECK_BY",id:"DC0078F_QUALITY_CHECK_BY",dataIndex:"QUALITY_CHECK_BY",fieldLabel: this.resourceBundle.FieldLabel.QUALITY_CHECK_BY||"Quality check by",allowBlank:true,width:100,insert_allowed:false,update_allowed:false}));
       this.fields.add("VALUE_CHECK",new Ext.ux.form.XCheckbox({name:"VALUE_CHECK",id:"DC0078F_VALUE_CHECK",dataIndex:"VALUE_CHECK",fieldLabel: this.resourceBundle.FieldLabel.VALUE_CHECK||"Value check",allowBlank:true,insert_allowed:false,update_allowed:true}));
       this.fields.add("VALUE_CHECK_ON",new Ext.form.DateField({name:"VALUE_CHECK_ON",id:"DC0078F_VALUE_CHECK_ON",dataIndex:"VALUE_CHECK_ON",fieldLabel: this.resourceBundle.FieldLabel.VALUE_CHECK_ON||"Value check on",allowBlank:true,width:100,insert_allowed:false,update_allowed:false,format:Ext.DATE_FORMAT}));
       this.fields.add("VALUE_CHECK_BY",new Ext.form.TextField({name:"VALUE_CHECK_BY",id:"DC0078F_VALUE_CHECK_BY",dataIndex:"VALUE_CHECK_BY",fieldLabel: this.resourceBundle.FieldLabel.VALUE_CHECK_BY||"Value check by",allowBlank:true,width:100,insert_allowed:false,update_allowed:false}));

       this.layoutItems.add("DC0080",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0080 - "+(N21.DataComp.DC0080.prototype.resourceBundle.DcProperty.Title||"Reception products"),  closeAction:"hide",closable:true,layout:"fit", width:650, height:450, items:{xtype:"DC0080",id:"DC0080", parentDcRelation:{name:"DC0078F",relation:[{parent:"ID",child:"MVMNTINDOC_ID"}]}         }} ) ); 
       this.layoutItems.add("ValueCheck",
             { xtype:"fieldset", autoHeight:true,collapsible: false,title:this.resourceBundle.FieldsetTitle.ValueCheck||"ValueCheck",border:true,labelWidth:80,width:"90%"   ,items:[ this.fields.get("VALUE_CHECK"),this.fields.get("VALUE_CHECK_ON"),this.fields.get("VALUE_CHECK_BY")] });
       this.layoutItems.add("QualityCheck",
             { xtype:"fieldset", autoHeight:true,collapsible: false,title:this.resourceBundle.FieldsetTitle.QualityCheck||"QualityCheck",border:true,labelWidth:80,width:"90%"   ,items:[ this.fields.get("QUALITY_CHECK"),this.fields.get("QUALITY_CHECK_ON"),this.fields.get("QUALITY_CHECK_BY")] });
       this.layoutItems.add("QuantityCheck",
             { xtype:"fieldset", autoHeight:true,collapsible: false,title:this.resourceBundle.FieldsetTitle.QuantityCheck||"QuantityCheck",border:true,labelWidth:80,width:"90%"   ,items:[ this.fields.get("QTY_CHECK"),this.fields.get("QTY_CHECK_ON"),this.fields.get("QTY_CHECK_BY")] });
       this.layoutItems.add("C2",
             { layout:"form",width:300,labelAlign:"left",labelWidth:100, items:[ this.fields.get("ORG_ID"),this.fields.get("ORGINV_ID"),this.layoutItems.get("QuantityCheck"),this.layoutItems.get("QualityCheck"),this.layoutItems.get("ValueCheck")]
 }); 
       this.layoutItems.add("C1",
             { layout:"form",width:350,labelAlign:"right",labelWidth:100, items:[ this.fields.get("CLIENT_CODE"),this.fields.get("ORG_NAME"),this.fields.get("ORGINV_NAME"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("DOC_TYPE"),this.fields.get("NOTES"),this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("FROM_BPARTNER_ID"),this.fields.get("RINV_ID")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0078F"
          ,firstFocusFieldName:"CLIENT_CODE"
          ,childDCs: [{name:"DC0080",relation:[{parent:"ID",child:"MVMNTINDOC_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Items",handler:function() {this.show_window("DC0080");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0078F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0078F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,ORG_NAME:""
              ,ORG_ID:""
              ,ORGINV_ID:""
              ,ORGINV_NAME:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,FROM_BPARTNER_ID:""
              ,NOTES:""
              ,DOC_TYPE:""
              ,RINV_ID:""
              ,QTY_CHECK:""
              ,QTY_CHECK_ON:""
              ,QTY_CHECK_BY:""
              ,QUALITY_CHECK:""
              ,QUALITY_CHECK_ON:""
              ,QUALITY_CHECK_BY:""
              ,VALUE_CHECK:""
              ,VALUE_CHECK_ON:""
              ,VALUE_CHECK_BY:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0078F", N21.DataComp.DC0078F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0078
 * Title: Reception document
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0078 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0078"
          ,masterName:"DC0078G"
          ,detailName:"DC0078F"
          ,mdLayout:"card"
          ,border: false
          ,items: [
              {
                xtype:"panel"
               ,layout:"card"
               ,id:"MDTab"
               ,region:"center"
               ,defaults:{layout:"fit"}
               ,activeItem:1
               ,tabPosition: "bottom"
               ,items: [{
                            xtype: "DC0078G"
                           ,id: "DC0078G"
                           ,height:350
                       },{
                           xtype:"DC0078F"
                          ,id:"DC0078F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

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
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records in CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0078</span>"          )
        }); 

       N21.DataComp.DC0078.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0078", N21.DataComp.DC0078);



