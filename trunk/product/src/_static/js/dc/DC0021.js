/** 
 * Data Component: DC0021G, Title: UI
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0021G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
         ,{name:"NBS_STANDARD", type:"string" }
         ,{name:"USER_BUILD", type:"string" }
         ,{name:"DEPRECATED", type:"string" }
         ,{name:"ID", type:"float" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0021"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0021"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:160,dataIndex:'NAME',sortable:true}
              ,{ id:"NBS_STANDARD",header:this.resourceBundle.FieldLabel.NBS_STANDARD||"Standard",width:50,dataIndex:'NBS_STANDARD',sortable:true}
              ,{ id:"USER_BUILD",header:this.resourceBundle.FieldLabel.USER_BUILD||"User build",width:50,dataIndex:'USER_BUILD',sortable:true}
              ,{ id:"DEPRECATED",header:this.resourceBundle.FieldLabel.DEPRECATED||"Deprecated",width:50,dataIndex:'DEPRECATED',sortable:true}
              ,{ id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
          ]
          ,queryFields: [
                {xtype: "textfield",name:"QRY_CODE",id:"DC0021_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0021_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_NBS_STANDARD",id:"DC0021_QRY_NBS_STANDARD",width:120,fieldLabel: this.resourceBundle.FieldLabel.NBS_STANDARD||"Standard"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_USER_BUILD",id:"DC0021_QRY_USER_BUILD",width:120,fieldLabel: this.resourceBundle.FieldLabel.USER_BUILD||"User build"}
               ,{xtype: "combo",store:["N","Y"],name:"QRY_DEPRECATED",id:"DC0021_QRY_DEPRECATED",width:120,fieldLabel: this.resourceBundle.FieldLabel.DEPRECATED||"Deprecated"}
               ,{xtype: "hidden",name:"QRY_ID",id:"DC0021_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
          ]
          ,dataComponentName:"DC0021G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0021G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0021G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CODE:""
              ,NAME:""
              ,NBS_STANDARD:""
              ,USER_BUILD:""
              ,DEPRECATED:""
              ,ID:""});
     }
  });
  Ext.reg("DC0021G", N21.DataComp.DC0021G);
/** 
 * Data Component: DC0021F, Title: UI
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0021F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0021G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0021F_CODE",dataIndex:"CODE",width:80,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0021F_NAME",dataIndex:"NAME",width:150,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0021F_ID",dataIndex:"ID",width:30,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
                 ,this.fields.get("ID")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0021F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0021F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0021F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,CODE:""
              ,NAME:""
              ,NBS_STANDARD:""
              ,USER_BUILD:""
              ,DEPRECATED:""
              ,ID:""});
     }


  });
  Ext.reg("DC0021F", N21.DataComp.DC0021F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0021
 * Title: UI
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0021 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0021"
          ,masterName:"DC0021G"
          ,detailName:"DC0021F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0021G",id: "DC0021G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0021F",id: "DC0021F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0021.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0021", N21.DataComp.DC0021);



