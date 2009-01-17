/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0076 DataControl: Price lists
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0076 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CLIENT_CODE", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"CURRENCY", type:"string" }
         ,{name:"VALID_FROM", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"VALID_TO", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"COPY_FROM_LIST_IS", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
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
               id:"storeDC0076"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0076"
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
          ,new Ext.Toolbar.Button({  id:"tlb_PRINT"  ,xtype:"button" ,cls:"x-btn-icon" ,icon:"_static/icon/print.png" ,tooltip:"Print list" ,handler: this.exportList ,scope :this})
          )
          ,dataComponentName:"DC0076"
          ,frame:true
          ,queryArraySize:20
          ,childDCs: [{name:"DC0090",relation:[{parent:"ID",child:"PRICELIST_ID"}]}]
          ,buttons: [{xtype:"button",text:"Products price",scope:this,handler:function() {this.show_window("DC0090");}  }]
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CLIENT_CODE",{ id:'CLIENT_CODE',header:this.resourceBundle.FieldLabel.CLIENT_CODE||"Client",width:80,dataIndex:'CLIENT_CODE',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0008({allowBlank: false,callFromGrid:this,fieldMapping: [{column:"ID",field:"CLIENT_ID"},{column:"CODE",field:"CLIENT_CODE"}],cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("CLIENT_ID",{ id:'CLIENT_ID',header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID",width:100,dataIndex:'CLIENT_ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CURRENCY",{ id:'CURRENCY',header:this.resourceBundle.FieldLabel.CURRENCY||"Currency",width:80,dataIndex:'CURRENCY',insert_allowed:true,update_allowed:true,sortable:true,editor:new N21.DataComp.LOV0001({allowBlank: false,callFromGrid:this,cls:"x-form-text-in-grid",selectOnFocus:true,displayColumn:"CODE"})});
         this.columnMap.add("VALID_FROM",{ id:'VALID_FROM',header:this.resourceBundle.FieldLabel.VALID_FROM||"Valid from",width:100,dataIndex:'VALID_FROM',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: false,cls:"x-form-text-in-grid"})});
         this.columnMap.add("VALID_TO",{ id:'VALID_TO',header:this.resourceBundle.FieldLabel.VALID_TO||"Valid to",width:100,dataIndex:'VALID_TO',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT),editor:new Ext.form.DateField({ format:Ext.DATE_FORMAT,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("COPY_FROM_LIST_IS",{ id:'COPY_FROM_LIST_IS',header:this.resourceBundle.FieldLabel.COPY_FROM_LIST_IS||"Copy from ID",width:100,dataIndex:'COPY_FROM_LIST_IS',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,editor:new Ext.form.TextField({selectOnFocus:true,allowBlank: true,cls:"x-form-text-in-grid"})});
         this.columnMap.add("CREATEDON",{ id:'CREATEDON',header:this.resourceBundle.FieldLabel.CREATEDON||"Created on",width:100,dataIndex:'CREATEDON',insert_allowed:true,update_allowed:true,hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("CREATEDBY",{ id:'CREATEDBY',header:this.resourceBundle.FieldLabel.CREATEDBY||"Created by",width:100,dataIndex:'CREATEDBY',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("MODIFIEDON",{ id:'MODIFIEDON',header:this.resourceBundle.FieldLabel.MODIFIEDON||"Modified on",width:100,dataIndex:'MODIFIEDON',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("MODIFIEDBY",{ id:'MODIFIEDBY',header:this.resourceBundle.FieldLabel.MODIFIEDBY||"Modified by",width:100,dataIndex:'MODIFIEDBY',insert_allowed:true,update_allowed:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0076_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("CLIENT_CODE", new N21.DataComp.LOV0008({xtype: "LOV0008",fieldMapping: [{column:"ID",field:"DC0076_QRY_CLIENT_ID"},{column:"CODE",field:"DC0076_QRY_CLIENT_CODE"}],name:"QRY_CLIENT_CODE",id:"DC0076_QRY_CLIENT_CODE",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_CODE||"Client"})  );
         this.queryFields.add("CLIENT_ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_CLIENT_ID",id:"DC0076_QRY_CLIENT_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client ID"})  );
         this.queryFields.add("CURRENCY", new N21.DataComp.LOV0001({xtype: "LOV0001",name:"QRY_CURRENCY",id:"DC0076_QRY_CURRENCY",width:100,fieldLabel: this.resourceBundle.FieldLabel.CURRENCY||"Currency"})  );
         this.queryFields.add("COPY_FROM_LIST_IS", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_COPY_FROM_LIST_IS",id:"DC0076_QRY_COPY_FROM_LIST_IS",width:100,fieldLabel: this.resourceBundle.FieldLabel.COPY_FROM_LIST_IS||"Copy from ID"})  );

       this.layoutItems.add("DC0090",
             new Ext.Window({ xtype:"window", modal:true, title: "DC0090 - "+(N21.DataComp.DC0090.prototype.resourceBundle.DcProperty.Title||"Products"),  closeAction:"hide",closable:true,layout:"fit", width:500, height:500, items:{xtype:"DC0090",id:"DC0090", parentDcRelation:{name:"DC0076",relation:[{parent:"ID",child:"PRICELIST_ID"}]}         }} ) ); 


       this.queryFieldsVisible = [  "CLIENT_CODE","CURRENCY" ];
       N21.DataComp.DC0076.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0076.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CLIENT_CODE:""
              ,CLIENT_ID:""
              ,CURRENCY:""
              ,VALID_FROM:""
              ,VALID_TO:""
              ,COPY_FROM_LIST_IS:""
              ,CREATEDON:""
              ,CREATEDBY:""
              ,MODIFIEDON:""
              ,MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0076", N21.DataComp.DC0076);



