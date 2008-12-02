/** 
 * Data Component: DC0014G, Title: Business partners
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0014G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
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
         ,{name:"CUSTGROUP_CODE", type:"string" }
         ,{name:"CREDITCLASS_CODE", type:"string" }
         ,{name:"PAYMETHOD_CODE", type:"string" }
         ,{name:"PAYTERMCLASS_CODE", type:"string" }
         ,{name:"MAX_CREDIT_LIMIT", type:"float" }
         ,{name:"MAX_PAYMENT_TERM", type:"float" }
         ,{name:"IS_CUSTOMER", type:"string" }
         ,{name:"IS_VENDOR", type:"string" }
         ,{name:"IS_EMPLOYEE", type:"string" }
         ,{name:"IS_ONETIME", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:4 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0014_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0014_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id"})  );
         this.queryFields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",name:"QRY_CLIENT_CODE",id:"DC0014_QRY_CLIENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"})  );
         this.queryFields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_CODE",id:"DC0014_QRY_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"})  );
         this.queryFields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_NAME",id:"DC0014_QRY_NAME",width:100,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"})  );
         this.queryFields.add("TAX_NUMBER", new Ext.form.TextField ({xtype: "textfield",name:"QRY_TAX_NUMBER",id:"DC0014_QRY_TAX_NUMBER",width:100,fieldLabel: this.resourceBundle.FieldLabel.TAX_NUMBER||"Tax no"})  );
         this.queryFields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0014_QRY_BPARTNER_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id"})  );
         this.queryFields.add("IS_CUSTOMER", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_CUSTOMER",id:"DC0014_QRY_IS_CUSTOMER",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_CUSTOMER||"Customer?"})  );
         this.queryFields.add("IS_VENDOR", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_VENDOR",id:"DC0014_QRY_IS_VENDOR",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_VENDOR||"Vendor?"})  );
         this.queryFields.add("IS_EMPLOYEE", new Ext.form.ComboBox ({xtype: "combo",store:["N","Y"],name:"QRY_IS_EMPLOYEE",id:"DC0014_QRY_IS_EMPLOYEE",width:100,fieldLabel: this.resourceBundle.FieldLabel.IS_EMPLOYEE||"Employee?"})  );
  
       this.queryFieldsVisible = [  "CLIENT_CODE","CODE","NAME","TAX_NUMBER","IS_CUSTOMER","IS_VENDOR","IS_EMPLOYEE" ];
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0014"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0014"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"CLIENT_CODE",header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:80,dataIndex:'CLIENT_CODE',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:100,dataIndex:'CLIENT_ID',hidden:true,sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:180,dataIndex:'NAME',sortable:true}
              ,{ id:"TAX_NUMBER_TYPE",header:this.resourceBundle.FieldLabel.TAX_NUMBER_TYPE||"Tax no type",width:100,dataIndex:'TAX_NUMBER_TYPE',hidden:true,sortable:true}
              ,{ id:"TAX_NUMBER",header:this.resourceBundle.FieldLabel.TAX_NUMBER||"Tax no",width:100,dataIndex:'TAX_NUMBER',hidden:true,sortable:true}
              ,{ id:"COMPANY_REG_NR",header:this.resourceBundle.FieldLabel.COMPANY_REG_NR||"Registration no",width:100,dataIndex:'COMPANY_REG_NR',hidden:true,sortable:true}
              ,{ id:"PHONE",header:this.resourceBundle.FieldLabel.PHONE||"Phone",width:100,dataIndex:'PHONE',hidden:true,sortable:true}
              ,{ id:"EMAIL",header:this.resourceBundle.FieldLabel.EMAIL||"Email",width:100,dataIndex:'EMAIL',hidden:true,sortable:true}
              ,{ id:"FAX",header:this.resourceBundle.FieldLabel.FAX||"Fax",width:100,dataIndex:'FAX',hidden:true,sortable:true}
              ,{ id:"BPARTNER_TYPE",header:this.resourceBundle.FieldLabel.BPARTNER_TYPE||"Type",width:100,dataIndex:'BPARTNER_TYPE',hidden:true,sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"COPIED_FROM_BPARTNER_ID",header:this.resourceBundle.FieldLabel.COPIED_FROM_BPARTNER_ID||"Copied from ID",width:100,dataIndex:'COPIED_FROM_BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"CUSTGROUP_CODE",header:this.resourceBundle.FieldLabel.CUSTGROUP_CODE||"Custgroup_code",width:100,dataIndex:'CUSTGROUP_CODE',hidden:true,sortable:true}
              ,{ id:"CREDITCLASS_CODE",header:this.resourceBundle.FieldLabel.CREDITCLASS_CODE||"Creditclass_code",width:100,dataIndex:'CREDITCLASS_CODE',hidden:true,sortable:true}
              ,{ id:"PAYMETHOD_CODE",header:this.resourceBundle.FieldLabel.PAYMETHOD_CODE||"Paymethod_code",width:100,dataIndex:'PAYMETHOD_CODE',hidden:true,sortable:true}
              ,{ id:"PAYTERMCLASS_CODE",header:this.resourceBundle.FieldLabel.PAYTERMCLASS_CODE||"Paytermclass_code",width:100,dataIndex:'PAYTERMCLASS_CODE',hidden:true,sortable:true}
              ,{ id:"MAX_CREDIT_LIMIT",header:this.resourceBundle.FieldLabel.MAX_CREDIT_LIMIT||"Max_credit_limit",width:100,dataIndex:'MAX_CREDIT_LIMIT',hidden:true,sortable:true,align:'right'}
              ,{ id:"MAX_PAYMENT_TERM",header:this.resourceBundle.FieldLabel.MAX_PAYMENT_TERM||"Max_payment_term",width:100,dataIndex:'MAX_PAYMENT_TERM',hidden:true,sortable:true,align:'right'}
              ,{ id:"IS_CUSTOMER",header:this.resourceBundle.FieldLabel.IS_CUSTOMER||"Customer?",width:50,dataIndex:'IS_CUSTOMER',sortable:true}
              ,{ id:"IS_VENDOR",header:this.resourceBundle.FieldLabel.IS_VENDOR||"Vendor?",width:50,dataIndex:'IS_VENDOR',sortable:true}
              ,{ id:"IS_EMPLOYEE",header:this.resourceBundle.FieldLabel.IS_EMPLOYEE||"Employee?",width:50,dataIndex:'IS_EMPLOYEE',sortable:true}
              ,{ id:"IS_ONETIME",header:this.resourceBundle.FieldLabel.IS_ONETIME||"Is_onetime",width:50,dataIndex:'IS_ONETIME',hidden:true,sortable:true}
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
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
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
              ,MODIFIEDBY:""
              ,CUSTGROUP_CODE:""
              ,CREDITCLASS_CODE:""
              ,PAYMETHOD_CODE:""
              ,PAYTERMCLASS_CODE:""
              ,MAX_CREDIT_LIMIT:""
              ,MAX_PAYMENT_TERM:""
              ,IS_CUSTOMER:""
              ,IS_VENDOR:""
              ,IS_EMPLOYEE:""
              ,IS_ONETIME:""});
     }
  });
  Ext.reg("DC0014G", N21.DataComp.DC0014G);
/** 
 * Data Component: DC0014F, Title: Business partners
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0014F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0014G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0014F_CLIENT_ID"}],selectOnFocus:true,name:"CLIENT_CODE",id:"DC0014F_CLIENT_CODE",dataIndex:"CLIENT_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"CLIENT_ID",id:"DC0014F_CLIENT_ID",dataIndex:"CLIENT_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0014F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0014F_CODE",dataIndex:"CODE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0014F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TAX_NUMBER_TYPE", new Ext.form.TextField ({xtype: "textfield",name:"TAX_NUMBER_TYPE",id:"DC0014F_TAX_NUMBER_TYPE",dataIndex:"TAX_NUMBER_TYPE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TAX_NUMBER_TYPE||"Tax no type",insert_allowed:true,update_allowed:true})   );
       this.fields.add("TAX_NUMBER", new Ext.form.TextField ({xtype: "textfield",name:"TAX_NUMBER",id:"DC0014F_TAX_NUMBER",dataIndex:"TAX_NUMBER",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.TAX_NUMBER||"Tax no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("COMPANY_REG_NR", new Ext.form.TextField ({xtype: "textfield",name:"COMPANY_REG_NR",id:"DC0014F_COMPANY_REG_NR",dataIndex:"COMPANY_REG_NR",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.COMPANY_REG_NR||"Registration no",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PHONE", new Ext.form.TextField ({xtype: "textfield",name:"PHONE",id:"DC0014F_PHONE",dataIndex:"PHONE",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EMAIL", new Ext.form.TextField ({xtype: "textfield",name:"EMAIL",id:"DC0014F_EMAIL",dataIndex:"EMAIL",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email",insert_allowed:true,update_allowed:true})   );
       this.fields.add("FAX", new Ext.form.TextField ({xtype: "textfield",name:"FAX",id:"DC0014F_FAX",dataIndex:"FAX",width:150,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0014F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"Created on",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0014F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"Created by",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0014F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0014F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",disabled:true})   );
       this.fields.add("IS_CUSTOMER", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_CUSTOMER",id:"DC0014F_IS_CUSTOMER",dataIndex:"IS_CUSTOMER",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_CUSTOMER||"Customer?",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_VENDOR", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_VENDOR",id:"DC0014F_IS_VENDOR",dataIndex:"IS_VENDOR",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_VENDOR||"Vendor?",insert_allowed:true,update_allowed:true})   );
       this.fields.add("IS_EMPLOYEE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"IS_EMPLOYEE",id:"DC0014F_IS_EMPLOYEE",dataIndex:"IS_EMPLOYEE",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.IS_EMPLOYEE||"Employee?",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("DC0058",
             new Ext.Window({ xtype:"window", modal:true, title:N21.DataComp.DC0058.prototype.resourceBundle.DcProperty.Title,  closeAction:"hide",closable:true,layout:"fit", width:300, height:300, items:{xtype:"DC0058",id:"DC0058", parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}         }} ) ); 
       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")]});
       this.layoutItems.add("Communication",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Communication||"Communication",autoHeight:true,collapsible: true,width:"90%",items:[ this.fields.get("PHONE"),this.fields.get("EMAIL"),this.fields.get("FAX")]});
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.3, items:[ this.layoutItems.get("Communication"),this.layoutItems.get("Modified")]}); 
       this.layoutItems.add("DC0056",
             { xtype:"DC0056",id:"DC0056",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabCustomerAcct",
             { layout:"form", title:"Customer Account", items:[ this.layoutItems.get("DC0056")] }); 
       this.layoutItems.add("DC0057",
             { xtype:"DC0057",id:"DC0057",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabContactPerson",
             { layout:"form", title:"Contact Person", items:[ this.layoutItems.get("DC0057")] }); 
       this.layoutItems.add("DC0018",
             { xtype:"DC0018",id:"DC0018",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabBankAccount",
             { layout:"form", title:"Bank account", items:[ this.layoutItems.get("DC0018")] }); 
       this.layoutItems.add("DC0015",
             { xtype:"DC0015",id:"DC0015",width:"100%",height:200, parentDcRelation:{name:"DC0014F",relation:[{parent:"ID",child:"BPARTNER_ID"}]}   });
       this.layoutItems.add("TabAdress",
             { layout:"form", title:"Adress", items:[ this.layoutItems.get("DC0015")] }); 
       this.layoutItems.add("Tabs",
             { xtype:"tabpanel", plain:true,layoutOnTabChange :true,activeItem:0,width:"100%", items:[ this.layoutItems.get("TabAdress"),this.layoutItems.get("TabBankAccount"),this.layoutItems.get("TabContactPerson"),this.layoutItems.get("TabCustomerAcct")]}); 
       this.layoutItems.add("C1_2",
             { layout:"form",columnWidth:1, items:[ this.layoutItems.get("Tabs")]}); 
       this.layoutItems.add("C1_1_2",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("TAX_NUMBER_TYPE"),this.fields.get("TAX_NUMBER"),this.fields.get("COMPANY_REG_NR")]}); 
       this.layoutItems.add("C1_1_1",
             { layout:"form",columnWidth:.6, items:[ this.fields.get("ID"),this.fields.get("CLIENT_ID"),this.fields.get("CLIENT_CODE"),this.fields.get("CODE"),this.fields.get("NAME"),this.fields.get("IS_CUSTOMER"),this.fields.get("IS_VENDOR"),this.fields.get("IS_EMPLOYEE")]}); 
       this.layoutItems.add("C1_1",
             { layout:"form",columnWidth:1, items:[ this.layoutItems.get("C1_1_1"),this.layoutItems.get("C1_1_2")]}); 
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.7, items:[ this.layoutItems.get("C1_1"),this.layoutItems.get("C1_2")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0014F"
          ,firstFocusFieldName:"NAME"
          ,childDCs: [{name:"DC0057",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0015",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0018",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0056",relation:[{parent:"ID",child:"BPARTNER_ID"}]},{name:"DC0058",relation:[{parent:"ID",child:"BPARTNER_ID"}]}]
          ,toolbarConfig:"STANDARD"
        });

        this.layoutItems.get("Communication").items[this.layoutItems.get("Communication").items.length] = {xtype:"button",text:"More...",scope:this,handler:function() {this.show_window("DC0058");}  };
       N21.DataComp.DC0014F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0014F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
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
              ,MODIFIEDBY:""
              ,CUSTGROUP_CODE:""
              ,CREDITCLASS_CODE:""
              ,PAYMETHOD_CODE:""
              ,PAYTERMCLASS_CODE:""
              ,MAX_CREDIT_LIMIT:""
              ,MAX_PAYMENT_TERM:""
              ,IS_CUSTOMER:""
              ,IS_VENDOR:""
              ,IS_EMPLOYEE:""
              ,IS_ONETIME:""});
     }


  });
  Ext.reg("DC0014F", N21.DataComp.DC0014F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0014
 * Title: Business partners
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
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
        }); 

       N21.DataComp.DC0014.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0014", N21.DataComp.DC0014);



