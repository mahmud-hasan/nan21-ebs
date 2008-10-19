/** 
 * Data Component: DC0069G, Title: Contacts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0069G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"BPARTNER_ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"BPARTNER_NAME", type:"string" }
         ,{name:"FIRSTNAME", type:"string" }
         ,{name:"LASTNAME", type:"string" }
         ,{name:"PHONE", type:"string" }
         ,{name:"EMAIL", type:"string" }
         ,{name:"FAX", type:"string" }
         ,{name:"NOTES", type:"string" }
         ,{name:"MOBILE", type:"string" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0069"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0069"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"BPARTNER_ID",header:this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",width:100,dataIndex:'BPARTNER_ID',hidden:true,sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',sortable:true}
              ,{ id:"BPARTNER_NAME",header:this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",width:120,dataIndex:'BPARTNER_NAME',sortable:true}
              ,{ id:"FIRSTNAME",header:this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname",width:100,dataIndex:'FIRSTNAME',hidden:true,sortable:true}
              ,{ id:"LASTNAME",header:this.resourceBundle.FieldLabel.LASTNAME||"Lastname",width:100,dataIndex:'LASTNAME',hidden:true,sortable:true}
              ,{ id:"PHONE",header:this.resourceBundle.FieldLabel.PHONE||"Phone",width:100,dataIndex:'PHONE',sortable:true}
              ,{ id:"EMAIL",header:this.resourceBundle.FieldLabel.EMAIL||"Email",width:100,dataIndex:'EMAIL',sortable:true}
              ,{ id:"FAX",header:this.resourceBundle.FieldLabel.FAX||"Fax",width:100,dataIndex:'FAX',hidden:true,sortable:true}
              ,{ id:"NOTES",header:this.resourceBundle.FieldLabel.NOTES||"Notes",width:100,dataIndex:'NOTES',hidden:true,sortable:true}
              ,{ id:"MOBILE",header:this.resourceBundle.FieldLabel.MOBILE||"Mobile",width:100,dataIndex:'MOBILE',sortable:true}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0069_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_BPARTNER_ID",id:"DC0069_QRY_BPARTNER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id"}
               ,{xtype: "LOV0009",selectOnFocus:true,name:"QRY_BPARTNER_NAME",id:"DC0069_QRY_BPARTNER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner"}
               ,{xtype: "textfield",name:"QRY_FIRSTNAME",id:"DC0069_QRY_FIRSTNAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname"}
               ,{xtype: "textfield",name:"QRY_LASTNAME",id:"DC0069_QRY_LASTNAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.LASTNAME||"Lastname"}
               ,{xtype: "textfield",name:"QRY_PHONE",id:"DC0069_QRY_PHONE",width:120,fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone"}
               ,{xtype: "textfield",name:"QRY_EMAIL",id:"DC0069_QRY_EMAIL",width:120,fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email"}
               ,{xtype: "textfield",name:"QRY_FAX",id:"DC0069_QRY_FAX",width:120,fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax"}
               ,{xtype: "textfield",name:"QRY_MOBILE",id:"DC0069_QRY_MOBILE",width:120,fieldLabel: this.resourceBundle.FieldLabel.MOBILE||"Mobile"}
          ]
          ,dataComponentName:"DC0069G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0069G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0069G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,NAME:""
              ,BPARTNER_NAME:""
              ,FIRSTNAME:""
              ,LASTNAME:""
              ,PHONE:""
              ,EMAIL:""
              ,FAX:""
              ,NOTES:""
              ,MOBILE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }
  });
  Ext.reg("DC0069G", N21.DataComp.DC0069G);
/** 
 * Data Component: DC0069F, Title: Contacts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0069F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0069G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0069F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_ID", new Ext.form.Hidden ({xtype: "hidden",name:"BPARTNER_ID",id:"DC0069F_BPARTNER_ID",dataIndex:"BPARTNER_ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_ID||"Bpartner_id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("BPARTNER_NAME", new N21.DataComp.LOV0009({xtype: "LOV0009",selectOnFocus:true,name:"BPARTNER_NAME",id:"DC0069F_BPARTNER_NAME",dataIndex:"BPARTNER_NAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.BPARTNER_NAME||"Business partner",insert_allowed:true,update_allowed:true})   );
       this.fields.add("FIRSTNAME", new Ext.form.TextField ({xtype: "textfield",name:"FIRSTNAME",id:"DC0069F_FIRSTNAME",dataIndex:"FIRSTNAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.FIRSTNAME||"Firstname",insert_allowed:true,update_allowed:true})   );
       this.fields.add("LASTNAME", new Ext.form.TextField ({xtype: "textfield",name:"LASTNAME",id:"DC0069F_LASTNAME",dataIndex:"LASTNAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.LASTNAME||"Lastname",insert_allowed:true,update_allowed:true})   );
       this.fields.add("PHONE", new Ext.form.TextField ({xtype: "textfield",name:"PHONE",id:"DC0069F_PHONE",dataIndex:"PHONE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.PHONE||"Phone",insert_allowed:true,update_allowed:true})   );
       this.fields.add("EMAIL", new Ext.form.TextField ({xtype: "textfield",name:"EMAIL",id:"DC0069F_EMAIL",dataIndex:"EMAIL",width:200,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.EMAIL||"Email",insert_allowed:true,update_allowed:true})   );
       this.fields.add("FAX", new Ext.form.TextField ({xtype: "textfield",name:"FAX",id:"DC0069F_FAX",dataIndex:"FAX",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.FAX||"Fax",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NOTES", new Ext.form.TextArea ({xtype: "textarea",name:"NOTES",id:"DC0069F_NOTES",dataIndex:"NOTES",width:300,height:60,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.NOTES||"Notes",insert_allowed:true,update_allowed:true})   );
       this.fields.add("MOBILE", new Ext.form.TextField ({xtype: "textfield",name:"MOBILE",id:"DC0069F_MOBILE",dataIndex:"MOBILE",width:120,allowBlank:true,fieldLabel: this.resourceBundle.FieldLabel.MOBILE||"Mobile",insert_allowed:true,update_allowed:true})   );

       this.layoutItems.add("C2",
             { layout:"form",columnWidth:.5,labelAlign:"top", items:[ this.fields.get("NOTES")]}); 
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:.4, items:[ this.fields.get("ID"),this.fields.get("BPARTNER_ID"),this.fields.get("BPARTNER_NAME"),this.fields.get("FIRSTNAME"),this.fields.get("LASTNAME"),this.fields.get("EMAIL"),this.fields.get("PHONE"),this.fields.get("MOBILE"),this.fields.get("FAX")]}); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1"),this.layoutItems.get("C2")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0069F"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0069F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0069F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,BPARTNER_ID:""
              ,NAME:""
              ,BPARTNER_NAME:""
              ,FIRSTNAME:""
              ,LASTNAME:""
              ,PHONE:""
              ,EMAIL:""
              ,FAX:""
              ,NOTES:""
              ,MOBILE:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }


  });
  Ext.reg("DC0069F", N21.DataComp.DC0069F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0069
 * Title: Contacts
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0069 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0069"
          ,masterName:"DC0069G"
          ,detailName:"DC0069F"
          ,mdLayout:"column"
          ,border: false
          ,items: [
              {xtype: "DC0069G",id: "DC0069G",region:"north" ,split:true,height:250,minHeight:0}
             ,{xtype: "DC0069F",id: "DC0069F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0069.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0069", N21.DataComp.DC0069);



