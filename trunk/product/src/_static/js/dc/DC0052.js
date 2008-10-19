/** 
 * Data Component: DC0052G, Title: Project issue types def.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0052G = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"CODE", type:"string" }
         ,{name:"NAME", type:"string" }
    ])
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.Store({
               id:"storeDC0052"
              ,reader: new Ext.data.XmlReader({totalRecords:"totalCount",record: "record"},this.dataRecordMeta)
              ,url:"frmMain.php?_p_action=fetch&_p_data_format=xml&_p_form=DC0052"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,dataIndex:'ID',hidden:true,sortable:true}
              ,{ id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{ id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:100,dataIndex:'NAME',sortable:true}
          ]
          ,queryFields: [
                {xtype: "hidden",name:"QRY_ID",id:"DC0052_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id"}
               ,{xtype: "textfield",name:"QRY_CODE",id:"DC0052_QRY_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code"}
               ,{xtype: "textfield",name:"QRY_NAME",id:"DC0052_QRY_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name"}
          ]
          ,dataComponentName:"DC0052G"
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });
       N21.DataComp.DC0052G.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.DC0052G.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""});
     }
  });
  Ext.reg("DC0052G", N21.DataComp.DC0052G);
/** 
 * Data Component: DC0052F, Title: Project issue types def.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0052F = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
    ,dataRecordMeta : N21.DataComp.DC0052G.prototype.dataRecordMeta
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("ID", new Ext.form.Hidden ({xtype: "hidden",name:"ID",id:"DC0052F_ID",dataIndex:"ID",width:100,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",insert_allowed:true,update_allowed:true})   );
       this.fields.add("CODE", new Ext.form.TextField ({xtype: "textfield",name:"CODE",id:"DC0052F_CODE",dataIndex:"CODE",width:120,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.CODE||"Code",insert_allowed:true,update_allowed:true})   );
       this.fields.add("NAME", new Ext.form.TextField ({xtype: "textfield",name:"NAME",id:"DC0052F_NAME",dataIndex:"NAME",width:200,allowBlank:false,labelSeparator:":*" ,fieldLabel: this.resourceBundle.FieldLabel.NAME||"Name",insert_allowed:true,update_allowed:true})   );



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("ID")
                 ,this.fields.get("CODE")
                 ,this.fields.get("NAME")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0052F"
          ,firstFocusFieldName:"CODE"
          ,toolbarConfig:"STANDARD"
        });

        

       N21.DataComp.DC0052F.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0052F.superclass.onRender.apply(this, arguments);
     }
    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,ID:""
              ,CODE:""
              ,NAME:""});
     }


  });
  Ext.reg("DC0052F", N21.DataComp.DC0052F);



/** 
 * DataControl: Grid with Edit Form
 * Code: DC0052
 * Title: Project issue types def.
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0052 = Ext.extend(N21.Base.GridEditForm, {

     initComponent:function() {
       Ext.apply(this, {
           autoScroll:false
          ,layout:"border"
          ,dataComponentName:"DC0052"
          ,masterName:"DC0052G"
          ,detailName:"DC0052F"
          ,mdLayout:"row"
          ,border: false
          ,items: [
              {xtype: "DC0052G",id: "DC0052G",region:"west"  ,split:true,width:"60%",minWidth:0}
             ,{xtype: "DC0052F",id: "DC0052F",region:"center",split:true,autoScroll:true}
            ]
        }); 

       N21.DataComp.DC0052.superclass.initComponent.apply(this, arguments);
     } 
  });
  Ext.reg("DC0052", N21.DataComp.DC0052);



