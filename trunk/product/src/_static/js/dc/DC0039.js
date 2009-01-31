/** 
 * Data Component: DC0039G, Title: Product masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0039G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"PRODCATEG_CODE", type:"string" }
         ,{name:"PRODCATEG_ID", type:"float" }
         ,{name:"STORABLE", type:"string" }
         ,{name:"UOM_CODE", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
         ,{name:"PROD_TYPE", type:"string" }
         ,{name:"SUMMARY", type:"string" }
         ,{name:"ATTRGRP_NAME", type:"string" }
         ,{name:"ATTRGRP_ID", type:"float" }
         ,{name:"VOLUME", type:"float" }
         ,{name:"WEIGHT", type:"float" }
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
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0039F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0039F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,style: "text-transform:uppercase;",width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0039F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("PRODCATEG_CODE",new  N21.DataComp.LOV0014({name:"QRY_PRODCATEG_CODE",id:"DC0039F_QRY_PRODCATEG_CODE",fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_CODE||"Product Category",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0039F_QRY_PRODCATEG_ID"}]}));
       this.queryFields.add("PRODCATEG_ID",new Ext.form.Hidden({name:"QRY_PRODCATEG_ID",id:"DC0039F_QRY_PRODCATEG_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",allowBlank:true,width:100}));
       this.queryFields.add("PROD_TYPE",new Ext.form.TextField({name:"QRY_PROD_TYPE",id:"DC0039F_QRY_PROD_TYPE",fieldLabel: this.resourceBundle.FieldLabel.PROD_TYPE||"Prod_type",allowBlank:true,width:100}));
       this.queryFields.add("SUMMARY",new Ext.form.ComboBox({name:"QRY_SUMMARY",id:"DC0039F_QRY_SUMMARY",fieldLabel: this.resourceBundle.FieldLabel.SUMMARY||"Summary",allowBlank:true,width:40,store:["Y","N"]}));
       this.queryFields.add("ATTRGRP_ID",new Ext.form.Hidden({name:"QRY_ATTRGRP_ID",id:"DC0039F_QRY_ATTRGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.ATTRGRP_ID||"Attribute group ID",allowBlank:true,width:100}));
       this.queryFields.add("ATTRGRP_NAME",new  N21.DataComp.LOV0046({name:"QRY_ATTRGRP_NAME",id:"DC0039F_QRY_ATTRGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.ATTRGRP_NAME||"Attribute group",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0039F_QRY_ATTRGRP_ID"},{column:"NAME",field:"DC0039F_QRY_ATTRGRP_NAME"}]}));
  
       this.queryFieldsVisible = [  "CODE","NAME","PRODCATEG_CODE","PROD_TYPE","SUMMARY","ATTRGRP_NAME" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0039"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0039"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:120,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{ id:"PRODCATEG_CODE",header:this.resourceBundle.FieldLabel.PRODCATEG_CODE||"Product Category",width:150,dataIndex:'PRODCATEG_CODE',sortable:true}
              ,{ id:"PRODCATEG_ID",header:this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",width:100,dataIndex:'PRODCATEG_ID',hidden:true,sortable:true}
              ,{ id:"STORABLE",header:this.resourceBundle.FieldLabel.STORABLE||"Storable",width:50,dataIndex:'STORABLE',sortable:true}
              ,{ id:"UOM_CODE",header:this.resourceBundle.FieldLabel.UOM_CODE||"UoM",width:100,dataIndex:'UOM_CODE',hidden:true,sortable:true}
              ,{ id:"DESCRIPTION",header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:100,dataIndex:'DESCRIPTION',hidden:true,sortable:true}
              ,{ id:"PROD_TYPE",header:this.resourceBundle.FieldLabel.PROD_TYPE||"Prod_type",width:100,dataIndex:'PROD_TYPE',hidden:true,sortable:true}
              ,{ id:"SUMMARY",header:this.resourceBundle.FieldLabel.SUMMARY||"Summary",width:50,dataIndex:'SUMMARY',hidden:true,sortable:true}
              ,{ id:"ATTRGRP_NAME",header:this.resourceBundle.FieldLabel.ATTRGRP_NAME||"Attribute group",width:100,dataIndex:'ATTRGRP_NAME',hidden:true,sortable:true}
              ,{ id:"ATTRGRP_ID",header:this.resourceBundle.FieldLabel.ATTRGRP_ID||"Attribute group ID",width:100,dataIndex:'ATTRGRP_ID',hidden:true,sortable:true}
              ,{ id:"VOLUME",header:this.resourceBundle.FieldLabel.VOLUME||"Volume",width:100,dataIndex:'VOLUME',hidden:true,sortable:true,align:'right'}
              ,{ id:"WEIGHT",header:this.resourceBundle.FieldLabel.WEIGHT||"Weight",width:100,dataIndex:'WEIGHT',hidden:true,sortable:true,align:'right'}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0039G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0039G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0039G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,PRODCATEG_CODE:""
              ,PRODCATEG_ID:""
              ,STORABLE:""
              ,UOM_CODE:""
              ,DESCRIPTION:""
              ,PROD_TYPE:""
              ,SUMMARY:""
              ,ATTRGRP_NAME:""
              ,ATTRGRP_ID:""
              ,VOLUME:""
              ,WEIGHT:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0039G", N21.DataComp.DC0039G);
/** 
 * Data Component: DC0039F, Title: Product masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0039F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0039G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0039F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0039F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true,style: "text-transform:uppercase;"}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0039F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:450,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODCATEG_ID",new Ext.form.Hidden({name:"PRODCATEG_ID",id:"DC0039F_PRODCATEG_ID",dataIndex:"PRODCATEG_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_ID||"Prodcateg_id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("PRODCATEG_CODE",new  N21.DataComp.LOV0014({name:"PRODCATEG_CODE",id:"DC0039F_PRODCATEG_CODE",dataIndex:"PRODCATEG_CODE",fieldLabel: this.resourceBundle.FieldLabel.PRODCATEG_CODE||"Product Category",allowBlank:false,labelSeparator:":*",width:200,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0039F_PRODCATEG_ID"}]}));
       this.fields.add("STORABLE",new Ext.ux.form.XCheckbox({name:"STORABLE",id:"DC0039F_STORABLE",dataIndex:"STORABLE",fieldLabel: this.resourceBundle.FieldLabel.STORABLE||"Storable",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("UOM_CODE",new  N21.DataComp.LOV0002({name:"UOM_CODE",id:"DC0039F_UOM_CODE",dataIndex:"UOM_CODE",fieldLabel: this.resourceBundle.FieldLabel.UOM_CODE||"UoM",allowBlank:false,labelSeparator:":*",width:120,listWidth:138,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("DESCRIPTION",new Ext.form.TextArea({name:"DESCRIPTION",id:"DC0039F_DESCRIPTION",dataIndex:"DESCRIPTION",fieldLabel: this.resourceBundle.FieldLabel.DESCRIPTION||"Description",allowBlank:true,width:450,height:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("PROD_TYPE",new Ext.form.TextField({name:"PROD_TYPE",id:"DC0039F_PROD_TYPE",dataIndex:"PROD_TYPE",fieldLabel: this.resourceBundle.FieldLabel.PROD_TYPE||"Prod_type",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("SUMMARY",new Ext.ux.form.XCheckbox({name:"SUMMARY",id:"DC0039F_SUMMARY",dataIndex:"SUMMARY",fieldLabel: this.resourceBundle.FieldLabel.SUMMARY||"Summary",allowBlank:true,width:50,insert_allowed:true,update_allowed:true}));
       this.fields.add("ATTRGRP_NAME",new  N21.DataComp.LOV0046({name:"ATTRGRP_NAME",id:"DC0039F_ATTRGRP_NAME",dataIndex:"ATTRGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.ATTRGRP_NAME||"Attribute group",allowBlank:true,width:150,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0039F_ATTRGRP_ID"},{column:"NAME",field:"DC0039F_ATTRGRP_NAME"}]}));
       this.fields.add("ATTRGRP_ID",new Ext.form.Hidden({name:"ATTRGRP_ID",id:"DC0039F_ATTRGRP_ID",dataIndex:"ATTRGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.ATTRGRP_ID||"Attribute group ID",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("DC0104",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0104 - "+(N21.DataComp.DC0104.prototype.resourceBundle.DcProperty.Title||"Clients using product"),  closeAction:"hide",closable:true,layout:"fit", width:300, height:300, items:{xtype:"DC0104",id:"DC0104", parentDcRelation:{name:"DC0039F",relation:[{parent:"ID",child:"PRODUCT_ID"}]}         }} ) ); 
       this.layoutItems.add("DC0077",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0077 - "+(N21.DataComp.DC0077.prototype.resourceBundle.DcProperty.Title||"Product attributes"),  closeAction:"hide",closable:true,layout:"fit", width:600, height:500, items:{xtype:"DC0077",id:"DC0077", parentDcRelation:{name:"DC0039F",relation:[{parent:"ID",child:"PRODUCT_ID"},{parent:"NAME",child:"PRODUCT_NAME"}]}         }} ) ); 
       this.layoutItems.add("R2C2",
             { layout:"form",width:320, items:[ this.fields.get("PROD_TYPE"),this.fields.get("ATTRGRP_NAME"),this.fields.get("ATTRGRP_ID")]
 }); 
       this.layoutItems.add("R2C1",
             { layout:"form",width:320, items:[ this.fields.get("CODE"),this.fields.get("STORABLE"),this.fields.get("UOM_CODE"),this.fields.get("SUMMARY")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",columnWidth:1, items:[ this.layoutItems.get("R2C1"),this.layoutItems.get("R2C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("NAME"),this.fields.get("PRODCATEG_CODE"),this.fields.get("PRODCATEG_ID"),this.fields.get("DESCRIPTION")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0039F"
          ,firstFocusFieldName:"NAME"
          ,childDCs: [{name:"DC0077",relation:[{parent:"ID",child:"PRODUCT_ID"},{parent:"NAME",child:"PRODUCT_NAME"}]},{name:"DC0104",relation:[{parent:"ID",child:"PRODUCT_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Attributes",handler:function() {this.show_window("DC0077");}}
                    ,{xtype:"button",scope:this,text:"Clients" ,tooltip:"Clients using this product" ,handler:function() {this.show_window("DC0104");}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0039F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0039F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,PRODCATEG_CODE:""
              ,PRODCATEG_ID:""
              ,STORABLE:""
              ,UOM_CODE:""
              ,DESCRIPTION:""
              ,PROD_TYPE:""
              ,SUMMARY:""
              ,ATTRGRP_NAME:""
              ,ATTRGRP_ID:""
              ,VOLUME:""
              ,WEIGHT:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0039F", N21.DataComp.DC0039F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0039
 * Title: Product masterdata
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0039 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0039"
          ,masterName:"DC0039G"
          ,detailName:"DC0039F"
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
                            xtype: "DC0039G"
                           ,id: "DC0039G"
                           ,height:350
                       },{
                           xtype:"DC0039F"
                          ,id:"DC0039F"
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
,"->","<span class='dcName'>DC0039</span>"          )
        }); 

       N21.DataComp.DC0039.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0039", N21.DataComp.DC0039);



