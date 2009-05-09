/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0107 DataControl: Documents serial no
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0107 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"DOCUMENT_TYPE", type:"string" }
         ,{name:"SERIAL", type:"string" }
         ,{name:"RANGE", type:"string" }
         ,{name:"VALUE", type:"float" }
         ,{name:"IS_ALLOCATED", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:3
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0107"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("DC0107", _n21["DATA_FORMAT_JSON"])
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
,"->","<span class='dcName'>DC0107</span>"          )
          ,dataComponentName:"DC0107"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:100,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("DOCUMENT_TYPE",{ id:'DOCUMENT_TYPE',header:this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type",width:100,dataIndex:'DOCUMENT_TYPE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("SERIAL",{ id:'SERIAL',header:this.resourceBundle.FieldLabel.SERIAL||"Serial",width:100,dataIndex:'SERIAL',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("RANGE",{ id:'RANGE',header:this.resourceBundle.FieldLabel.RANGE||"Range",width:100,dataIndex:'RANGE',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("VALUE",{ id:'VALUE',header:this.resourceBundle.FieldLabel.VALUE||"Value",width:100,dataIndex:'VALUE',insert_allowed:true,update_allowed:true,sortable:true,align:'right'});
         this.columnMap.add("IS_ALLOCATED",{ id:'IS_ALLOCATED',header:this.resourceBundle.FieldLabel.IS_ALLOCATED||"Allocated?",width:50,dataIndex:'IS_ALLOCATED',insert_allowed:true,update_allowed:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0107F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_ID",new Ext.form.Hidden({name:"QRY_CLIENT_ID",id:"DC0107F_QRY_CLIENT_ID",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",allowBlank:true,width:100}));
       this.queryFields.add("CLIENT_CODE",new  N21.DataComp.LOV0008({name:"QRY_CLIENT_CODE",id:"DC0107F_QRY_CLIENT_CODE",fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0107F_QRY_CLIENT_ID"}]}));
       this.queryFields.add("DOCUMENT_TYPE",new Ext.form.ComboBox({name:"QRY_DOCUMENT_TYPE",id:"DC0107F_QRY_DOCUMENT_TYPE",fieldLabel: this.resourceBundle.FieldLabel.DOCUMENT_TYPE||"Doc. type",allowBlank:true,width:100,listWidth:118,selectOnFocus:true,store:['IINV']}));
       this.queryFields.add("SERIAL",new Ext.form.TextField({name:"QRY_SERIAL",id:"DC0107F_QRY_SERIAL",fieldLabel: this.resourceBundle.FieldLabel.SERIAL||"Serial",allowBlank:true,width:100}));
       this.queryFields.add("RANGE",new Ext.form.TextField({name:"QRY_RANGE",id:"DC0107F_QRY_RANGE",fieldLabel: this.resourceBundle.FieldLabel.RANGE||"Range",allowBlank:true,width:100}));
       this.queryFields.add("VALUE",new Ext.form.NumberField({name:"QRY_VALUE",id:"DC0107F_QRY_VALUE",fieldLabel: this.resourceBundle.FieldLabel.VALUE||"Value",allowBlank:true,width:100}));
       this.queryFields.add("IS_ALLOCATED",new Ext.form.ComboBox({name:"QRY_IS_ALLOCATED",id:"DC0107F_QRY_IS_ALLOCATED",fieldLabel: this.resourceBundle.FieldLabel.IS_ALLOCATED||"Allocated?",allowBlank:true,width:50,store:["%","Y","N"],value:"%"}));



       this.queryFieldsVisible = [  "CLIENT_CODE","DOCUMENT_TYPE","SERIAL","RANGE","VALUE","IS_ALLOCATED" ];
       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_SAVE").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0107.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0107.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_ID:""
              ,CLIENT_CODE:""
              ,DOCUMENT_TYPE:""
              ,SERIAL:""
              ,RANGE:""
              ,VALUE:""
              ,IS_ALLOCATED:""});
     }

  });
  Ext.reg("DC0107", N21.DataComp.DC0107);



