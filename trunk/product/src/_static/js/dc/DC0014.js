/** 
 * Data Component: DC0014G, Title: Business partner master data
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0014G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"TAX_NUMBER_TYPE", type:"string" }
         ,{name:"TAX_NUMBER", type:"string" }
         ,{name:"COMPANY_REG_NR", type:"string" }
         ,{name:"PHONE", type:"string" }
         ,{name:"EMAIL", type:"string" }
         ,{name:"FAX", type:"string" }
         ,{name:"BPARTNER_TYPE", type:"string" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"COPIED_FROM_BPARTNER_ID", type:"float" }
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
       
       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0014F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0014F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0014F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("TAX_NUMBER",new Ext.form.TextField({name:"QRY_TAX_NUMBER",id:"DC0014F_QRY_TAX_NUMBER",fieldLabel: this.resourceBundle.FieldLabel.TAX_NUMBER||"Tax no",allowBlank:true,width:100}));
       this.queryFields.add("BPARTNER_ID",new Ext.form.Hidden({name:"QRY_BPARTNER_ID",id:"DC0014F_QRY_BPARTNER_ID",fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",allowBlank:true,width:100}));
  
       this.queryFieldsVisible = [  "CODE","NAME","TAX_NUMBER" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0014"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0014"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask :true
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:220,dataIndex:'NAME',sortable:true}
              ,{ id:"TAX_NUMBER_TYPE",header:this.resourceBundle.FieldLabel.TAX_NUMBER_TYPE||"Tax no type",width:100,dataIndex:'TAX_NUMBER_TYPE',hidden:true,sortable:true}
              ,{ id:"TAX_NUMBER",header:this.resourceBundle.FieldLabel.TAX_NUMBER||"Tax no",width:100,dataIndex:'TAX_NUMBER',sortable:true}
              ,{ id:"COMPANY_REG_NR",header:this.resourceBundle.FieldLabel.COMPANY_REG_NR||"Registration no",width:100,dataIndex:'COMPANY_REG_NR',hidden:true,sortable:true}
              ,{ id:"PHONE",header:this.resourceBundle.FieldLabel.PHONE||"Phone",width:100,dataIndex:'PHONE',sortable:true}
              ,{ id:"EMAIL",header:this.resourceBundle.FieldLabel.EMAIL||"Email",width:100,dataIndex:'EMAIL',sortable:true}
              ,{ id:"FAX",header:this.resourceBundle.FieldLabel.FAX||"Fax",width:100,dataIndex:'FAX',hidden:true,sortable:true}
              ,{ id:"BPARTNER_TYPE",header:this.resourceBundle.FieldLabel.BPARTNER_TYPE||"Type",width:100,dataIndex:'BPARTNER_TYPE',hidden:true,sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"COPIED_FROM_BPARTNER_ID",header:this.resourceBundle.FieldLabel.COPIED_FROM_BPARTNER_ID||"Copied from ID",width:100,dataIndex:'COPIED_FROM_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0014G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0014G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0014G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,TAX_NUMBER_TYPE:""
              ,TAX_NUMBER:""
              ,COMPANY_REG_NR:""
              ,PHONE:""
              ,EMAIL:""
              ,FAX:""
              ,BPARTNER_TYPE:""
              ,BPARTNER_ID:""
              ,COPIED_FROM_BPARTNER_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0014G", N21.DataComp.DC0014G);
/** 
 * Data Component: DC0014F, Title: Business partner master data
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0014F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0014G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID",new Ext.form.Hidden({name:"ID",id:"DC0014F_ID",dataIndex:"ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0014F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true}));
       this.fields.add("NAME",new Ext.form.TextField({name:"NAME",id:"DC0014F_NAME",dataIndex:"NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:false,labelSeparator:":*",width:300,insert_allowed:true,update_allowed:true}));
       this.fields.add("TAX_NUMBER_TYPE",new Ext.form.TextField({name:"TAX_NUMBER_TYPE",id:"DC0014F_TAX_NUMBER_TYPE",dataIndex:"TAX_NUMBER_TYPE",fieldLabel: this.resourceBundle.FieldLabel.TAX_NUMBER_TYPE||"Tax no type",allowBlank:true,width:80,insert_allowed:true,update_allowed:true}));
       this.fields.add("TAX_NUMBER",new Ext.form.TextField({name:"TAX_NUMBER",id:"DC0014F_TAX_NUMBER",dataIndex:"TAX_NUMBER",fieldLabel: this.resourceBundle.FieldLabel.TAX_NUMBER||"Tax no",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("COMPANY_REG_NR",new Ext.form.TextField({name:"COMPANY_REG_NR",id:"DC0014F_COMPANY_REG_NR",dataIndex:"COMPANY_REG_NR",fieldLabel: this.resourceBundle.FieldLabel.COMPANY_REG_NR||"Registration no",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("PHONE",new Ext.form.TextField({name:"PHONE",id:"DC0014F_PHONE",dataIndex:"PHONE",fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("EMAIL",new Ext.form.TextField({name:"EMAIL",id:"DC0014F_EMAIL",dataIndex:"EMAIL",fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("FAX",new Ext.form.TextField({name:"FAX",id:"DC0014F_FAX",dataIndex:"FAX",fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax",allowBlank:true,width:150,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("DC0058",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0058 - "+(N21.DataComp.DC0058.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:300, height:200, items:{xtype:"DC0058",id:"DC0058", parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}         }} ) ); 
       this.layoutItems.add("DC0100",
             { xtype:"DC0100",id:"DC0100",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabClients",
             { layout:"form" ,autoHeight:true, title:"Clients", items:[ this.layoutItems.get("DC0100")] }); 
       this.layoutItems.add("DC0057",
             { xtype:"DC0057",id:"DC0057",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabContactPerson",
             { layout:"form" ,autoHeight:true, title:"Contact Person", items:[ this.layoutItems.get("DC0057")] }); 
       this.layoutItems.add("DC0018",
             { xtype:"DC0018",id:"DC0018",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabBankAccount",
             { layout:"form" ,autoHeight:true, title:"Bank account", items:[ this.layoutItems.get("DC0018")] }); 
       this.layoutItems.add("DC0015",
             { xtype:"DC0015",id:"DC0015",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabAdress",
             { layout:"form" ,height:200, title:"Adress", items:[ this.layoutItems.get("DC0015")] }); 
       this.layoutItems.add("Tabs",
             { xtype:"tabpanel", plain:true,layoutOnTabChange :true,activeItem:0,width:"100%", items:[ this.layoutItems.get("TabAdress"),this.layoutItems.get("TabBankAccount"),this.layoutItems.get("TabContactPerson"),this.layoutItems.get("TabClients")]}); 
       this.layoutItems.add("R3",
             { layout:"form",width:750,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Tabs")]
 }); 
       this.layoutItems.add("R2C2",
             { layout:"form",columnWidth:.5,labelAlign:"right",labelWidth:100,buttons:[{xtype:"button",scope:this,text:"More...",handler:function() {this.show_window("DC0058");}}], items:[ this.fields.get("PHONE"),this.fields.get("EMAIL"),this.fields.get("FAX")]
 }); 
       this.layoutItems.add("R2C1",
             { layout:"form",columnWidth:.5,labelAlign:"right",labelWidth:100, items:[ this.fields.get("CODE"),this.fields.get("TAX_NUMBER_TYPE"),this.fields.get("TAX_NUMBER"),this.fields.get("COMPANY_REG_NR")]
 }); 
       this.layoutItems.add("R2",
             { layout:"column",width:750,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("R2C1"),this.layoutItems.get("R2C2")]
 }); 
       this.layoutItems.add("R1",
             { layout:"form",width:750,labelAlign:"right",labelWidth:100, items:[ this.fields.get("ID"),this.fields.get("NAME")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("R1"),this.layoutItems.get("R2"),this.layoutItems.get("R3")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0014F"
          ,firstFocusFieldName:"NAME"
          ,childDCs: [{name:"DC0057",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0100",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0015",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0018",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0058",relation:[{parent:"ID",child:"BPARTNER_ID"}]}]
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0014F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0014F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""
              ,TAX_NUMBER_TYPE:""
              ,TAX_NUMBER:""
              ,COMPANY_REG_NR:""
              ,PHONE:""
              ,EMAIL:""
              ,FAX:""
              ,BPARTNER_TYPE:""
              ,BPARTNER_ID:""
              ,COPIED_FROM_BPARTNER_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0014F", N21.DataComp.DC0014F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0014
 * Title: Business partner master data
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0014 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0014"
          ,masterName:"DC0014G"
          ,detailName:"DC0014F"
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
                            xtype: "DC0014G"
                           ,id: "DC0014G"
                           ,height:300
                       },{
                           xtype:"DC0014F"
                          ,id:"DC0014F"
                          ,height:300
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
,"->","<span class='dcName'>DC0014</span>"          )
        }); 

       N21.DataComp.DC0014.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0014", N21.DataComp.DC0014);



