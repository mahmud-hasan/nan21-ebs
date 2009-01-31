/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0008 DataControl: Regions
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0008 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"COUNTRY_CODE", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"ACTIVE", type:"string" }
    ])
     ,queryFields: new Ext.util.MixedCollection()
     ,columnMap: new Ext.util.MixedCollection()
     ,queryFieldsVisible: new Array()
     ,queryPanelColCount:2
    ,recordPk:[ "ID"]
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0008"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0008"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
           ,loadMask: true
          ,tbar: new Array(
          new Ext.Toolbar.Button({  id:"tlb_FILTER"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_src.png" ,tooltip:"" ,handler: this.executeQuery ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_SAVE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_commit.png" ,tooltip:"" ,handler: this.commitForm ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_NEW"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_new.png" ,tooltip:"" ,handler: this.createNewRecord ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_DELETE"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/g_rec_del.png" ,tooltip:"" ,handler: this.deleteRecord ,scope :this})
          ,new Ext.Toolbar.Separator()
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportHtml ,scope :this})
          ,new Ext.Toolbar.Button({  id:"tlb_EXP_CSV"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/exp_excel.png" ,tooltip:"Export records to CSV file" ,handler: this.exportCsv ,scope :this})
,"->","<span class='dcName'>DC0008</span>"          )
          ,dataComponentName:"DC0008"
          ,frame:true
          ,queryArraySize:20
          ,childDCs: [{name:"DC0009",relation:[{parent:"COUNTRY_CODE",child:"COUNTRY_CODE"},{parent:"CODE",child:"REGION_CODE"}]}]
          ,buttons: [{xtype:"button",scope:this,text:"Cities",handler:function() {this.show_window("DC0009");}}]
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:false,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("COUNTRY_CODE",{ id:'COUNTRY_CODE',header:this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country",width:120,dataIndex:'COUNTRY_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0006({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CODE",{ id:'CODE',header:this.resourceBundle.FieldLabel.CODE||"Code",width:120,dataIndex:'CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("NAME",{ id:'NAME',header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("ACTIVE",{ id:'ACTIVE',header:this.resourceBundle.FieldLabel.ACTIVE||"Active",width:50,dataIndex:'ACTIVE',insert_allowed:true,update_allowed:true,sortable:true,editor:new Ext.form.ComboBox({ store:["N","Y"],selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

       this.queryFields.add("ID",new Ext.form.Hidden({name:"QRY_ID",id:"DC0008F_QRY_ID",fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",allowBlank:true,width:100}));
       this.queryFields.add("COUNTRY_CODE",new  N21.DataComp.LOV0006({name:"QRY_COUNTRY_CODE",id:"DC0008F_QRY_COUNTRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country",allowBlank:true,width:100,listWidth:118,selectOnFocus:true}));
       this.queryFields.add("CODE",new Ext.form.TextField({name:"QRY_CODE",id:"DC0008F_QRY_CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",allowBlank:true,width:100}));
       this.queryFields.add("NAME",new Ext.form.TextField({name:"QRY_NAME",id:"DC0008F_QRY_NAME",fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",allowBlank:true,width:100}));
       this.queryFields.add("ACTIVE",new Ext.form.ComboBox({name:"QRY_ACTIVE",id:"DC0008F_QRY_ACTIVE",fieldLabel: this.resourceBundle.FieldLabel.ACTIVE||"Active",allowBlank:true,width:40,listWidth:58,selectOnFocus:true,store:["Y","N"]}));

       this.layoutItems.add("DC0009",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0009 - "+(N21.DataComp.DC0009.prototype.resourceBundle.DcProperty.Title||"WINDOW"),  closeAction:"hide",closable:true,layout:"fit", width:600, height:400, items:{xtype:"DC0009",id:"DC0009", parentDcRelation:{name:"DC0008",relation:[{parent:"COUNTRY_CODE",child:"COUNTRY_CODE"},{parent:"CODE",child:"REGION_CODE"}]}         }} ) ); 


       this.queryFieldsVisible = [  "COUNTRY_CODE","CODE","NAME","ACTIVE" ];
       N21.DataComp.DC0008.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0008.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,COUNTRY_CODE:""
              ,CODE:""
              ,NAME:""
              ,ACTIVE:""});
     }

  });
  Ext.reg("DC0008", N21.DataComp.DC0008);



