/** 
 * Data Component: DC0022G, Title: Menu items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0022G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"MENUBAR_CODE", type:"string" }
         ,{name:"POSITION", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"LINK", type:"string" }
         ,{name:"MENUITEM_ID", type:"float" }
         ,{name:"PARENT_MENU", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"TARGET", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
         ,{name:"ACTIVE", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0022"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0022"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"MENUBAR_CODE",header:this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar_code",width:100,dataIndex:'MENUBAR_CODE',sortable:true}
              ,{ id:"POSITION",header:this.resourceBundle.FieldLabel.POSITION||"Position",width:50,dataIndex:'POSITION',sortable:true,align:'right'}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{ id:"LINK",header:this.resourceBundle.FieldLabel.LINK||"Link",width:80,dataIndex:'LINK',sortable:true}
              ,{ id:"MENUITEM_ID",header:this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",width:100,dataIndex:'MENUITEM_ID',hidden:true,sortable:true}
              ,{ id:"PARENT_MENU",header:this.resourceBundle.FieldLabel.PARENT_MENU||"Parent menu",width:200,dataIndex:'PARENT_MENU',sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',hidden:true,sortable:true}
              ,{ id:"TARGET",header:this.resourceBundle.FieldLabel.TARGET||"Target",width:100,dataIndex:'TARGET',hidden:true,sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
              ,{ id:"ACTIVE",header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0022_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "LOV0021",name:"QRY_MENUBAR_CODE",id:"DC0022_QRY_MENUBAR_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar_code"}
               ,{xtype: "numberfield",name:"QRY_POSITION",id:"DC0022_QRY_POSITION",width:120,fieldLabel: this.resourceBundle.FieldLabel.POSITION||"Position",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0022_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "LOV0020",displayColumn: "CODE",selectOnFocus:true,name:"QRY_LINK",id:"DC0022_QRY_LINK",width:120,fieldLabel: this.resourceBundle.FieldLabel.LINK||"Link"}
               ,{xtype: "hidden",name:"QRY_MENUITEM_ID",id:"DC0022_QRY_MENUITEM_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id"}
               ,{xtype: "LOV0022",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0022_QRY_MENUITEM_ID"}],selectOnFocus:true,name:"QRY_PARENT_MENU",id:"DC0022_QRY_PARENT_MENU",width:120,fieldLabel: this.resourceBundle.FieldLabel.PARENT_MENU||"Parent menu"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0022_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_TARGET",id:"DC0022_QRY_TARGET",width:120,fieldLabel: this.resourceBundle.FieldLabel.TARGET||"Target"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0022_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0022_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0022_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0022_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_ACTIVE",id:"DC0022_QRY_ACTIVE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active"}
          ]
          ,dataComponentName:"DC0022G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0022G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0022G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,MENUBAR_CODE:""
              ,POSITION:""
              ,NAME:""
              ,LINK:""
              ,MENUITEM_ID:""
              ,PARENT_MENU:""
              ,CODE:""
              ,TARGET:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ACTIVE:""});
     }
  });
  Ext.reg("DC0022G", N21.DataComp.DC0022G);
/** 
 * Data Component: DC0022F, Title: Menu items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0022F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0022G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0022F_ID",dataIndex:"ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MENUBAR_CODE", new N21.DataComp.LOV0021({xtype: "LOV0021",selectOnFocus:true,name:"MENUBAR_CODE",id:"DC0022F_MENUBAR_CODE",dataIndex:"MENUBAR_CODE",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar_code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("POSITION", new Ext.form.NumberField ({xtype: "numberfield",name:"POSITION",id:"DC0022F_POSITION",dataIndex:"POSITION",width:60,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.POSITION||"Position",insert_allowed:true,update_allowed:true,decimalPrecision:2,style: "text-align:right;"})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0022F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("LINK", new N21.DataComp.LOV0020({xtype: "LOV0020",displayColumn: "CODE",selectOnFocus:true,name:"LINK",id:"DC0022F_LINK",dataIndex:"LINK",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.LINK||"Link",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MENUITEM_ID", new Ext.form.Hidden ({xtype: "hidden",name:"MENUITEM_ID",id:"DC0022F_MENUITEM_ID",dataIndex:"MENUITEM_ID",width:100,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PARENT_MENU", new N21.DataComp.LOV0022({xtype: "LOV0022",displayColumn: "NAME",fieldMapping: [{column:"ID",field:"DC0022F_MENUITEM_ID"}],selectOnFocus:true,name:"PARENT_MENU",id:"DC0022F_PARENT_MENU",dataIndex:"PARENT_MENU",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PARENT_MENU||"Parent menu",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0022F_CODE",dataIndex:"CODE",width:80,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ACTIVE", new Ext.ux.form.XCheckbox ({xtype: "xcheckbox",name:"ACTIVE",id:"DC0022F_ACTIVE",dataIndex:"ACTIVE",width:50,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("DC0043",
             { xtype:"DC0043",id:"DC0043",width:"100%",height:160, parentDcRelation:{name:"DC0022F",relation:[{parent:"ID",child:"MENUITEM_ID"}]}   });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1, items:[ this.fields.get("ID"),this.fields.get("MENUBAR_CODE"),this.fields.get("POSITION"),this.fields.get("NAME"),this.fields.get("LINK"),this.fields.get("MENUITEM_ID"),this.fields.get("PARENT_MENU"),this.fields.get("CODE"),this.fields.get("ACTIVE"),this.layoutItems.get("DC0043")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0022F"
          ,firstFocusFieldName:"POSITION"
          ,childDCs: [{name:"DC0043",relation:[{parent:"ID",child:"MENUITEM_ID"}],commitChildWithParent:true}]
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0022F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0022F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,MENUBAR_CODE:""
              ,POSITION:""
              ,NAME:""
              ,LINK:""
              ,MENUITEM_ID:""
              ,PARENT_MENU:""
              ,CODE:""
              ,TARGET:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""
              ,ACTIVE:""});
     }


  });
  Ext.reg("DC0022F", N21.DataComp.DC0022F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0022
 * Title: Menu items
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0022 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0022"
          ,masterName:"DC0022G"
          ,detailName:"DC0022F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0022G",id: "DC0022G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0022F",id: "DC0022F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0022.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0022", N21.DataComp.DC0022);



