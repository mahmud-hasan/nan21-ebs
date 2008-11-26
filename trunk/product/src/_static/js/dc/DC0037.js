/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0037 DataControl: UI dictionary translations
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0037 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"UIDICT_ID", type:"float" }
         ,{name:"UIDC_CODE", type:"string" }
         ,{name:"MSG_CODE", type:"string" }
         ,{name:"LANGUAGE_CODE", type:"string" }
         ,{name:"TRANSLATION", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
     ,firstFocusFieldName:"TRANSLATION"
    ,recordPk:[ "ID"]
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("UIDICT_ID",{ id:'UIDICT_ID',header:this.resourceBundle.FieldLabel.UIDICT_ID||"Dictionary id",width:100,dataIndex:'UIDICT_ID',insert_allowed:true,update_allowed:false,hidden:true,sortable:true,align:'right',editor:new Ext.form.NumberField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("UIDC_CODE",{ id:'UIDC_CODE',header:this.resourceBundle.FieldLabel.UIDC_CODE||"DataControl",width:100,dataIndex:'UIDC_CODE',insert_allowed:true,update_allowed:false,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("MSG_CODE",{ id:'MSG_CODE',header:this.resourceBundle.FieldLabel.MSG_CODE||"Message Code",width:200,dataIndex:'MSG_CODE',insert_allowed:true,update_allowed:false,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("LANGUAGE_CODE",{ id:'LANGUAGE_CODE',header:this.resourceBundle.FieldLabel.LANGUAGE_CODE||"Language_code",width:100,dataIndex:'LANGUAGE_CODE',insert_allowed:true,update_allowed:false,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("TRANSLATION",{ id:'TRANSLATION',header:this.resourceBundle.FieldLabel.TRANSLATION||"Translation",width:300,dataIndex:'TRANSLATION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columns.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:100,dataIndex:'MODIFIEDON',insert_allowed:false,update_allowed:false,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columns.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:100,dataIndex:'MODIFIEDBY',insert_allowed:false,update_allowed:false,hidden:true,sortable:true});


         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0037_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("UIDICT_ID", new Ext.form.NumberField ({xtype: "numberfield",name:"QRY_UIDICT_ID",id:"DC0037_QRY_UIDICT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.UIDICT_ID||"Dictionary id",style: "text-align:right;"})  );
         this.queryFields.add("UIDC_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_UIDC_CODE",id:"DC0037_QRY_UIDC_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.UIDC_CODE||"DataControl"})  );
         this.queryFields.add("MSG_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_MSG_CODE",id:"DC0037_QRY_MSG_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.MSG_CODE||"Message Code"})  );
         this.queryFields.add("LANGUAGE_CODE", new Ext.form.TextField ({xtype: "textfield",name:"QRY_LANGUAGE_CODE",id:"DC0037_QRY_LANGUAGE_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.LANGUAGE_CODE||"Language_code"})  );
         this.queryFields.add("TRANSLATION", new Ext.form.TextField ({xtype: "textfield",name:"QRY_TRANSLATION",id:"DC0037_QRY_TRANSLATION",width:100,fieldLabel: this.resourceBundle.FieldLabel.TRANSLATION||"Translation"})  );

       this.queryFieldsVisible = [  "UIDICT_ID","UIDC_CODE","MSG_CODE","LANGUAGE_CODE","TRANSLATION" ];
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0037"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0037"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("UIDICT_ID"),this.columns.get("UIDC_CODE"),this.columns.get("MSG_CODE"),this.columns.get("LANGUAGE_CODE"),this.columns.get("TRANSLATION"),this.columns.get("MODIFIEDON"),this.columns.get("MODIFIEDBY")]
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_62"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_64"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_63"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_61"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_143"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0037"
          ,frame:true
          ,queryArraySize:20
        });

       N21.DataComp.DC0037.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0037.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,UIDICT_ID:""
              ,UIDC_CODE:""
              ,MSG_CODE:""
              ,LANGUAGE_CODE:""
              ,TRANSLATION:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0037", N21.DataComp.DC0037);



