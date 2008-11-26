/** 
 * Data Component: DC0063G, Title: Purchase orders
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0063G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"DOC_NO", type:"string" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"BPARTNER_NAME", type:"string" }
         ,{name:"BPARTNER_CONTACT_ID", type:"float" }
         ,{name:"REF_PORDER_ID", type:"float" }
         ,{name:"TOTAL_AMOUNT", type:"float" }
         ,{name:"CURRENCY", type:"string" }
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
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0063_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0063_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0063_QRY_CLIENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"})  );
         this.queryFields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"QRY_DOC_NO",id:"DC0063_QRY_DOC_NO",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no"})  );
         this.queryFields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0063_QRY_DOC_DATE",width:100,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc date",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("BPARTNER_NAME", new N21.DataComp.LOV0042({xtype: "LOV0042",fieldMapping: [{column:"ID",field:"DC0063_QRY_BPARTNER_ID"}],selectOnFocus:true,name:"QRY_BPARTNER_NAME",id:"DC0063_QRY_BPARTNER_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Supplier"})  );
         this.queryFields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0063_QRY_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Supplier ID"})  );
         this.queryFields.add("BPARTNER_CONTACT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_CONTACT_ID",id:"DC0063_QRY_BPARTNER_CONTACT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id"})  );
         this.queryFields.add("REF_PORDER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_REF_PORDER_ID",id:"DC0063_QRY_REF_PORDER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.REF_PORDER_ID||"Ref_porder_id"})  );
         this.queryFields.add("TOTAL_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_TOTAL_AMOUNT",id:"DC0063_QRY_TOTAL_AMOUNT",width:100,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",style: "text-align:right;"})  );
         this.queryFields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_CURRENCY",id:"DC0063_QRY_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"})  );
  
       this.queryFieldsVisible = [  "CLIENT_CODE","DOC_NO","DOC_DATE","BPARTNER_NAME","TOTAL_AMOUNT","CURRENCY" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0063"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0063"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc no",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Doc date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Supplier ID",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_NAME||"Supplier",width:100,dataIndex:'BPARTNER_NAME',sortable:true}
              ,{ id:"BPARTNER_CONTACT_ID",header:this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id",width:100,dataIndex:'BPARTNER_CONTACT_ID',hidden:true,sortable:true}
              ,{ id:"REF_PORDER_ID",header:this.resourceBundle.FieldLabel.REF_PORDER_ID||"Ref_porder_id",width:100,dataIndex:'REF_PORDER_ID',hidden:true,sortable:true}
              ,{ id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right'}
              ,{ id:"CURRENCY",header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:100,dataIndex:'CURRENCY',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0063G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0063G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0063G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,BPARTNER_CONTACT_ID:""
              ,REF_PORDER_ID:""
              ,TOTAL_AMOUNT:""
              ,CURRENCY:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0063G", N21.DataComp.DC0063G);
/** 
 * Data Component: DC0063F, Title: Purchase orders
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0063F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0063G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0063F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0063F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0063F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_CODE",id:"DC0063F_CLIENT_CODE",dataIndex:"CLIENT_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_NO", new Ext.form.TextField ({xtype: "textfield",name:"DOC_NO",id:"DC0063F_DOC_NO",dataIndex:"DOC_NO",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO||"Doc no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DOC_DATE", new Ext.form.DateField ({xtype: "datefield",name:"DOC_DATE",id:"DC0063F_DOC_DATE",dataIndex:"DOC_DATE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc date",insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("BPARTNER_NAME", new N21.DataComp.LOV0042({xtype: "LOV0042",fieldMapping: [{column:"ID",field:"DC0063F_BPARTNER_ID"}],selectOnFocus:true,name:"BPARTNER_NAME",id:"DC0063F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Supplier",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_ID",id:"DC0063F_BPARTNER_ID",dataIndex:"BPARTNER_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Supplier ID",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_CONTACT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_CONTACT_ID",id:"DC0063F_BPARTNER_CONTACT_ID",dataIndex:"BPARTNER_CONTACT_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_CONTACT_ID||"Bpartner_contact_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TOTAL_AMOUNT", new Ext.form.NumberField ({xtype: "numberfield",name:"TOTAL_AMOUNT",id:"DC0063F_TOTAL_AMOUNT",dataIndex:"TOTAL_AMOUNT",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total amount",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",selectOnFocus:true,name:"CURRENCY",id:"DC0063F_CURRENCY",dataIndex:"CURRENCY",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0063F_CREATEDON",dataIndex:"CREATEDON",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Created on",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0063F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Created by",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0063F_MODIFIEDON",dataIndex:"MODIFIEDON",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0063F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",disabled:true})   );

       this.layoutItems.add("DC0064",
             { xtype:"DC0064",id:"DC0064",width:"100%",height:300, parentDcRelation:{name:"DC0063F",relation:[{parent:"ID",child:"PORDER_ID"}]}   });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("DOC_NO"),this.fields.get("DOC_DATE"),this.fields.get("BPARTNER_NAME"),this.fields.get("BPARTNER_ID"),this.fields.get("BPARTNER_CONTACT_ID"),this.fields.get("TOTAL_AMOUNT"),this.fields.get("CURRENCY"),this.layoutItems.get("DC0064")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0063F"
          ,firstFocusFieldName:"DOC_NO"
          ,childDCs: [{name:"DC0064",relation:[{parent:"ID",child:"PORDER_ID"}]}]
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0063F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0063F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOC_NO:""
              ,DOC_DATE:""
              ,BPARTNER_ID:""
              ,BPARTNER_NAME:""
              ,BPARTNER_CONTACT_ID:""
              ,REF_PORDER_ID:""
              ,TOTAL_AMOUNT:""
              ,CURRENCY:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0063F", N21.DataComp.DC0063F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0063
 * Title: Purchase orders
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0063 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0063"
          ,masterName:"DC0063G"
          ,detailName:"DC0063F"
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
                            xtype: "DC0063G"
                           ,id: "DC0063G"
                           ,height:350
                       },{
                           xtype:"DC0063F"
                          ,id:"DC0063F"
                          ,height:350
                          ,frame:true
                          ,autoScroll:true
                          ,layout:"form"
                       }]
             }

            ]
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
        }); 

       N21.DataComp.DC0063.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0063", N21.DataComp.DC0063);



