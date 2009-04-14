/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0073 DataControl: Define prod. attribute groups
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0073 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"NAME", type:"string" }
         ,{name:"PRODATTRGRP_ID", type:"float" }
         ,{name:"PRODATTRGRP_NAME", type:"string" }
         ,{name:"DESCRIPTION", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"NAME"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0073"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0073"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:CFG_PATH_ICONS+"/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0073</span>"          )
          ,dataComponentName:"DC0073"
          ,frame:true
          ,queryArraySize:20
          ,childDCs: [{name:"DC0074",relation:[{parent:"ID",child:"PRODATTRGRP_ID"},{parent:"NAME",child:"PRODATTRGRP_NAME"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Attributes in group",handler:function() {this.show_window("DC0074");}}]
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRODATTRGRP_ID",{ id:'PRODATTRGRP_ID',header:this.resourceBundle.FieldLabel.PRODATTRGRP_ID||"Parent group ID",width:40,dataIndex:'PRODATTRGRP_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("PRODATTRGRP_NAME",{ id:'PRODATTRGRP_NAME',header:this.resourceBundle.FieldLabel.PRODATTRGRP_NAME||"Parent group",width:150,dataIndex:'PRODATTRGRP_NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0046({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"PRODATTRGRP_ID"},{column:"NAME",field:"PRODATTRGRP_NAME"}],cls:"x-form-text-in-grid",selectOnFocus:true,cls:"x-form-text-in-grid",valueField:"ID",displayField:"NAME"})});
         this.columnMap.add("DESCRIPTION",{ id:'DESCRIPTION',header:this.resourceBundle.FieldLabel.DESCRIPTION||"Description",width:200,dataIndex:'DESCRIPTION',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextArea({   cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0073F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0073F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("PRODATTRGRP_ID",new Ext.form.Hidden({name:"QRY_PRODATTRGRP_ID",id:"DC0073F_QRY_PRODATTRGRP_ID",fieldLabel: this.resourceBundle.FieldLabel.PRODATTRGRP_ID||"Parent group ID",allowBlank:true,width:100}));
       this.queryFields.add("PRODATTRGRP_NAME",new  N21.DataComp.LOV0046({name:"QRY_PRODATTRGRP_NAME",id:"DC0073F_QRY_PRODATTRGRP_NAME",fieldLabel: this.resourceBundle.FieldLabel.PRODATTRGRP_NAME||"Parent group",allowBlank:true,width:100,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0073F_QRY_PRODATTRGRP_ID"},{column:"NAME",field:"DC0073F_QRY_PRODATTRGRP_NAME"}]}));

       this.layoutItems.add("DC0074",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0074 - "+(N21.DataComp.DC0074.prototype.resourceBundle.DcProperty.Title||"Define prod. attributes"),  closeAction:"hide",closable:true,layout:"fit", width:650, height:400, items:{xtype:"DC0074",id:"DC0074", parentDcRelation:{name:"DC0073",relation:[{parent:"ID",child:"PRODATTRGRP_ID"},{parent:"NAME",child:"PRODATTRGRP_NAME"}]}         }} ) ); 


       this.queryFieldsVisible = [  "NAME","PRODATTRGRP_NAME" ];
       N21.DataComp.DC0073.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0073.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,NAME:""
              ,PRODATTRGRP_ID:""
              ,PRODATTRGRP_NAME:""
              ,DESCRIPTION:""});
     }

  });
  Ext.reg("DC0073", N21.DataComp.DC0073);



