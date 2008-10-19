/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0043 DataControl: Menu item translations
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0043 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"MENUITEM_ID", type:"float" }
         ,{name:"LANG", type:"string" }
         ,{name:"TRANSLATION", type:"string" }
    ])
    ,columns: new Ext.util.MixedCollection()
    ,initComponent:function() {
         this.columns.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("MENUITEM_ID",{ id:'MENUITEM_ID',header:this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id",width:100,dataIndex:'MENUITEM_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columns.add("LANG",{ id:'LANG',header:this.resourceBundle.FieldLabel.LANG||"Language",width:100,dataIndex:'LANG',insert_allowed:true,update_allowed:false,sortable:true,editor:new N21.DataComp.LOV0044({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columns.add("TRANSLATION",{ id:'TRANSLATION',header:this.resourceBundle.FieldLabel.TRANSLATION||"Translation",width:250,dataIndex:'TRANSLATION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0043"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0043"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [ this.columns.get("ID"),this.columns.get("MENUITEM_ID"),this.columns.get("LANG"),this.columns.get("TRANSLATION")]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0043_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "hidden",name:"QRY_MENUITEM_ID",id:"DC0043_QRY_MENUITEM_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.MENUITEM_ID||"Menuitem_id"}
               ,{xtype: "LOV0044",name:"QRY_LANG",id:"DC0043_QRY_LANG",width:120,fieldLabel: this.resourceBundle.FieldLabel.LANG||"Language"}
               ,{xtype: "textfield",name:"QRY_TRANSLATION",id:"DC0043_QRY_TRANSLATION",width:120,fieldLabel: this.resourceBundle.FieldLabel.TRANSLATION||"Translation"}
          ]
          ,dataComponentName:"DC0043"
          ,frame:true
          ,queryArraySize:-1
        });

       N21.DataComp.DC0043.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0043.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,MENUITEM_ID:""
              ,LANG:""
              ,TRANSLATION:""});
     }

  });
  Ext.reg("DC0043", N21.DataComp.DC0043);



