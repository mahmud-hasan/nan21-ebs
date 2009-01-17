/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * DC0072 DataControl: User authentication log
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0072 = Ext.extend(N21.Base.GridEdit, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"USERNAME", type:"string" }
         ,{name:"LOGIN", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"LOGOUT", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"IP_ADRESS", type:"string" }
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
               id:"storeDC0072"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=json&_p_form=DC0072"
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
          ,dataComponentName:"DC0072"
          ,frame:true
          ,queryArraySize:20
        });

         this.columnMap.add("ID",{ id:'ID',header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',insert_allowed:true,update_allowed:true,hidden:true,sortable:true});
         this.columnMap.add("USERNAME",{ id:'USERNAME',header:this.resourceBundle.FieldLabel.USERNAME||"Username",width:100,dataIndex:'USERNAME',insert_allowed:true,update_allowed:true,sortable:true});
         this.columnMap.add("LOGIN",{ id:'LOGIN',header:this.resourceBundle.FieldLabel.LOGIN||"Login",width:100,dataIndex:'LOGIN',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("LOGOUT",{ id:'LOGOUT',header:this.resourceBundle.FieldLabel.LOGOUT||"Logout",width:100,dataIndex:'LOGOUT',insert_allowed:true,update_allowed:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)});
         this.columnMap.add("IP_ADRESS",{ id:'IP_ADRESS',header:this.resourceBundle.FieldLabel.IP_ADRESS||"Ip_adress",width:100,dataIndex:'IP_ADRESS',insert_allowed:true,update_allowed:true,sortable:true});

    this.colModel = new Ext.grid.ColumnModel (this.columnMap.getRange());

         this.queryFields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"QRY_ID",id:"DC0072_QRY_ID",width:100,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"})  );
         this.queryFields.add("USERNAME", new Ext.form.TextField ({xtype: "textfield",name:"QRY_USERNAME",id:"DC0072_QRY_USERNAME",width:80,fieldLabel: this.resourceBundle.FieldLabel.USERNAME||"Username"})  );
         this.queryFields.add("LOGIN", new Ext.form.DateField ({xtype: "datefield",name:"QRY_LOGIN",id:"DC0072_QRY_LOGIN",width:100,fieldLabel: this.resourceBundle.FieldLabel.LOGIN||"Login",format:Ext.DATE_FORMAT})  );
         this.queryFields.add("IP_ADRESS", new Ext.form.TextField ({xtype: "textfield",name:"QRY_IP_ADRESS",id:"DC0072_QRY_IP_ADRESS",width:80,fieldLabel: this.resourceBundle.FieldLabel.IP_ADRESS||"Ip_adress"})  );



       this.queryFieldsVisible = [  "USERNAME","LOGIN","IP_ADRESS" ];
       Ext.getCmp("tlb_NEW").disable();
       Ext.getCmp("tlb_SAVE").disable();
       Ext.getCmp("tlb_DELETE").disable();
       N21.DataComp.DC0072.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0072.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,USERNAME:""
              ,LOGIN:""
              ,LOGOUT:""
              ,IP_ADRESS:""});
     }

  });
  Ext.reg("DC0072", N21.DataComp.DC0072);


