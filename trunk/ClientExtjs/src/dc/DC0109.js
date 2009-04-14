/** 
 * Data Component: DC0109, Title: Parcel return to warehouse
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0109 = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
     ,dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"EVENT_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"WAREHOUSE_ORG_NAME", type:"string" }
         ,{name:"WAREHOUSE_ORG_ID", type:"float" }
         ,{name:"RETURN_BY_ORG_ID", type:"float" }
         ,{name:"RETURN_BY_ORG_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
         ,{name:"RETURN_REASON_CODE", type:"string" }
         ,{name:"RETURN_REASON", type:"string" }
    ])
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("EVENT_DATE",new Ext.form.DateField({name:"EVENT_DATE",id:"DC0109F_EVENT_DATE",dataIndex:"EVENT_DATE",fieldLabel: this.resourceBundle.FieldLabel.EVENT_DATE||"Date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("WAREHOUSE_ORG_NAME",new  N21.DataComp.LOV0068({name:"WAREHOUSE_ORG_NAME",id:"DC0109F_WAREHOUSE_ORG_NAME",dataIndex:"WAREHOUSE_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.WAREHOUSE_ORG_NAME||"Warehouse",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0109F_WAREHOUSE_ORG_ID"}]}));
       this.fields.add("WAREHOUSE_ORG_ID",new Ext.form.Hidden({name:"WAREHOUSE_ORG_ID",id:"DC0109F_WAREHOUSE_ORG_ID",dataIndex:"WAREHOUSE_ORG_ID",labelSeparator: "",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("RETURN_BY_ORG_ID",new Ext.form.Hidden({name:"RETURN_BY_ORG_ID",id:"DC0109F_RETURN_BY_ORG_ID",dataIndex:"RETURN_BY_ORG_ID",labelSeparator: "",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("RETURN_BY_ORG_NAME",new  N21.DataComp.LOV0067({name:"RETURN_BY_ORG_NAME",id:"DC0109F_RETURN_BY_ORG_NAME",dataIndex:"RETURN_BY_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.RETURN_BY_ORG_NAME||"Returned by agent",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0109F_RETURN_BY_ORG_ID"}]}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0109F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Parcel code",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("RETURN_REASON_CODE",new  N21.DataComp.LOV0065({name:"RETURN_REASON_CODE",id:"DC0109F_RETURN_REASON_CODE",dataIndex:"RETURN_REASON_CODE",fieldLabel: this.resourceBundle.FieldLabel.RETURN_REASON_CODE||"Reason type",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true}));
       this.fields.add("RETURN_REASON",new Ext.form.TextArea({name:"RETURN_REASON",id:"DC0109F_RETURN_REASON",dataIndex:"RETURN_REASON",fieldLabel: this.resourceBundle.FieldLabel.RETURN_REASON||"Notes",allowBlank:true,width:300,height:50,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("Warehouse",
             { xtype:"fieldset", autoHeight:true,collapsible: false,title:this.resourceBundle.FieldsetTitle.Warehouse||"Warehouse",border:true,labelWidth:80,labelAlign:"right",width:"300"   ,items:[ this.fields.get("WAREHOUSE_ORG_ID"),this.fields.get("WAREHOUSE_ORG_NAME")] });
       this.layoutItems.add("Return",
             { xtype:"fieldset", autoHeight:true,collapsible: false,title:this.resourceBundle.FieldsetTitle.Return||"Return",border:true,labelWidth:80,labelAlign:"right",width:"300"   ,items:[ this.fields.get("EVENT_DATE"),this.fields.get("RETURN_BY_ORG_ID"),this.fields.get("RETURN_BY_ORG_NAME"),this.fields.get("CODE")] });
       this.layoutItems.add("Reason",
             { xtype:"fieldset", autoHeight:true,collapsible: false,title:this.resourceBundle.FieldsetTitle.Reason||"Reason",border:true,labelWidth:80,labelAlign:"right",width:"450"   ,items:[ this.fields.get("RETURN_REASON_CODE"),this.fields.get("RETURN_REASON")] });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:120, items:[ this.layoutItems.get("Warehouse"),this.layoutItems.get("Return"),this.layoutItems.get("Reason")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0109"
          ,buttons: [{xtype:"button",scope:this,text:"Process return",handler:function() {this.callProcedure("markRejected",true,this.markRejectedSuccess);}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0109.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0109.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,EVENT_DATE:""
              ,WAREHOUSE_ORG_NAME:""
              ,WAREHOUSE_ORG_ID:""
              ,RETURN_BY_ORG_ID:""
              ,RETURN_BY_ORG_NAME:""
              ,CODE:""
              ,RETURN_REASON_CODE:""
              ,RETURN_REASON:""});
     }

  ,markRejectedSuccess:function(response) {
    this.setFieldValue("CODE","");
this.setFieldValue("RETURN_REASON_CODE","");
this.setFieldValue("RETURN_REASON","");
this.getField("CODE").focus();



   }


  });
  Ext.reg("DC0109", N21.DataComp.DC0109);

