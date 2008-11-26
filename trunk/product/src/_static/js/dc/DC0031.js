/** 
 * Data Component: DC0031G, Title: Users
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0031G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"LOGIN_CODE", type:"string" }
         ,{name:"ACCOUNT_LOCKED", type:"string" }
         ,{name:"ACCOUNT_EXPIRED", type:"string" }
         ,{name:"DBUSER", type:"string" }
         ,{name:"PERSON_ID", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:1 
    ,recordPk:[ "ID"]
    ,initComponent:function() {
       
         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0031_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("LOGIN_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_LOGIN_CODE",id:"DC0031_QRY_LOGIN_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.LOGIN_CODE||"Login_code"})  );
  
       this.queryFieldsVisible = [  "LOGIN_CODE" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0031"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0031"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"LOGIN_CODE",header:this.resourceBundle.FieldLabel.LOGIN_CODE||"Login_code",width:100,dataIndex:'LOGIN_CODE',sortable:true}
              ,{ id:"ACCOUNT_LOCKED",header:this.resourceBundle.FieldLabel.ACCOUNT_LOCKED||"Account_locked",width:50,dataIndex:'ACCOUNT_LOCKED',sortable:true}
              ,{ id:"ACCOUNT_EXPIRED",header:this.resourceBundle.FieldLabel.ACCOUNT_EXPIRED||"Account_expired",width:50,dataIndex:'ACCOUNT_EXPIRED',sortable:true}
              ,{ id:"DBUSER",header:this.resourceBundle.FieldLabel.DBUSER||"Dbuser",width:100,dataIndex:'DBUSER',sortable:true}
              ,{ id:"PERSON_ID",header:this.resourceBundle.FieldLabel.PERSON_ID||"Person_id",width:100,dataIndex:'PERSON_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,dataComponentName:"DC0031G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0031G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0031G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,LOGIN_CODE:""
              ,ACCOUNT_LOCKED:""
              ,ACCOUNT_EXPIRED:""
              ,DBUSER:""
              ,PERSON_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0031G", N21.DataComp.DC0031G);
/** 
 * Data Component: DC0031F, Title: Users
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0031F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0031G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0031F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("LOGIN_CODE", new Ext.form.TextField ({xtype: "textfield",name:"LOGIN_CODE",id:"DC0031F_LOGIN_CODE",dataIndex:"LOGIN_CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.LOGIN_CODE||"Login_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCOUNT_LOCKED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACCOUNT_LOCKED",id:"DC0031F_ACCOUNT_LOCKED",dataIndex:"ACCOUNT_LOCKED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCOUNT_LOCKED||"Account_locked",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACCOUNT_EXPIRED", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACCOUNT_EXPIRED",id:"DC0031F_ACCOUNT_EXPIRED",dataIndex:"ACCOUNT_EXPIRED",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACCOUNT_EXPIRED||"Account_expired",insert_allowed:true,update_allowed:true})   );
       this.fields.add("DBUSER", new Ext.form.TextField ({xtype: "textfield",name:"DBUSER",id:"DC0031F_DBUSER",dataIndex:"DBUSER",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.DBUSER||"Dbuser",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CREATEDON", new Ext.form.DateField ({xtype: "datefield",name:"CREATEDON",id:"DC0031F_CREATEDON",dataIndex:"CREATEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("CREATEDBY", new Ext.form.TextField ({xtype: "textfield",name:"CREATEDBY",id:"DC0031F_CREATEDBY",dataIndex:"CREATEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",disabled:true})   );
       this.fields.add("MODIFIEDON", new Ext.form.DateField ({xtype: "datefield",name:"MODIFIEDON",id:"DC0031F_MODIFIEDON",dataIndex:"MODIFIEDON",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",disabled:true,format:Ext.DATE_FORMAT})   );
       this.fields.add("MODIFIEDBY", new Ext.form.TextField ({xtype: "textfield",name:"MODIFIEDBY",id:"DC0031F_MODIFIEDBY",dataIndex:"MODIFIEDBY",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",disabled:true})   );

       this.layoutItems.add("DC0068",
             { xtype:"DC0068",id:"DC0068",width:"100%",height:160, parentDcRelation:{name:"DC0031F",relation:[{parent:"ID",child:"USER_ID"}]}   });
       this.layoutItems.add("C2",
             { layout:"form",columnWidth:1, items:[ this.layoutItems.get("DC0068")]}); 
       this.layoutItems.add("Modified",
             { xtype:"fieldset", title:this.resourceBundle.FieldsetTitle.Modified||"Modified",autoHeight:true,collapsible: true,collapsed:true,width:"90%",items:[ this.fields.get("CREATEDON"),this.fields.get("CREATEDBY"),this.fields.get("MODIFIEDON"),this.fields.get("MODIFIEDBY")]});
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("LOGIN_CODE"),this.fields.get("ACCOUNT_LOCKED"),this.fields.get("ACCOUNT_EXPIRED"),this.fields.get("DBUSER"),this.layoutItems.get("Modified")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0031F"
          ,firstFocusFieldName:"LOGIN_CODE"
          ,childDCs: [{name:"DC0068",relation:[{parent:"ID",child:"USER_ID"}],commitChildWithParent:true}]
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0031F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0031F.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,LOGIN_CODE:""
              ,ACCOUNT_LOCKED:""
              ,ACCOUNT_EXPIRED:""
              ,DBUSER:""
              ,PERSON_ID:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0031F", N21.DataComp.DC0031F);

/** 
 * DataControl: Grid with Edit Form
 * Code: DC0031
 * Title: Users
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0031 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0031"
          ,masterName:"DC0031G"
          ,detailName:"DC0031F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0031G",id: "DC0031G",region:"west"  ,split:true,width:"50%",minWidth:0}
             ,{xtype: "DC0031F",id: "DC0031F",region:"center",split:true,autoScroll:true}
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

       N21.DataComp.DC0031.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0031", N21.DataComp.DC0031);



