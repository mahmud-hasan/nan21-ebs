/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0065 DataControl: Documents serial no. setup
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0065 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"SERIAL", type:"string" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"DOCUMENT_TYPE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
     ,firstFocusFieldName:"SERIAL"
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0065"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_action=fetch&_p_data_format=json&_p_form=DC0065"
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
,"->","<span class='dcName'>DC0065</span>"          )
          ,dataComponentName:"DC0065"
          ,frame:true
          ,queryArraySize:20
          ,childDCs: [{name:"DC0106",relation:[{parent:"ID",child:"DOCSER_ID"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Range of numbers" ,tooltip:"Define the range of numbers" ,handler:function() {this.show_window("DC0106");}}]
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("SERIAL",{ id:'SERIAL',header:this.resourceBundle.FieldLabel.SERIAL||"Serial",width:100,dataIndex:'SERIAL',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client id",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("DOCUMENT_TYPE",{ id:'DOCUMENT_TYPE',header:this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type",width:100,dataIndex:'DOCUMENT_TYPE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({   store:['IINV'],allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0065F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("SERIAL",new Ext.form.TextField({name:"QRY_SERIAL",id:"DC0065F_QRY_SERIAL",fieldLabel: this.resourceBundle.FieldLabel.SERIAL||"Serial",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0065F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0065F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0065F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client id",allowBlank:true,width:100}));
       this.queryFields.add("DOCUMENT_TYPE",new Ext.form.ComboBox({name:"QRY_DOCUMENT_TYPE",id:"DC0065F_QRY_DOCUMENT_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,store:['IINV']}));

       this.layoutItems.add("DC0106",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0106 - "+(N21.DataComp.DC0106.prototype.resourceBundle.DcProperty.Title||"Number range"),  closeAction:"hide",closable:true,layout:"fit", width:400, height:300, items:{xtype:"DC0106",id:"DC0106", parentDcRelation:{name:"DC0065",relation:[{parent:"ID",child:"DOCSER_ID"}]}         }} ) ); 


       this.queryFieldsVisible = [  "SERIAL","CLIENT_CODE","DOCUMENT_TYPE" ];
       N21.DataComp.DC0065.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0065.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,SERIAL:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,DOCUMENT_TYPE:""});
     }

  });
  Ext.reg("DC0065", N21.DataComp.DC0065);



