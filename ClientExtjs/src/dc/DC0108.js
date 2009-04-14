/** 
 * Data Component: DC0108, Title: Parcel confirm delivery
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0108 = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
     ,dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"EVENT_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"ORG_ID", type:"float" }
         ,{name:"ORG", type:"string" }
         ,{name:"CODE", type:"string" }
    ])
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("EVENT_DATE",new Ext.form.DateField({name:"EVENT_DATE",id:"DC0108F_EVENT_DATE",dataIndex:"EVENT_DATE",fieldLabel: this.resourceBundle.FieldLabel.EVENT_DATE||"Delivery date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("ORG_ID",new Ext.form.Hidden({name:"ORG_ID",id:"DC0108F_ORG_ID",dataIndex:"ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.ORG_ID||"Delivery agent ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("ORG",new  N21.DataComp.LOV0067({name:"ORG",id:"DC0108F_ORG",dataIndex:"ORG",fieldLabel: this.resourceBundle.FieldLabel.ORG||"Delivery agent",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0108F_ORG_ID"}]}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0108F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Parcel code",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));



       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.fields.get("_p_record_status")
                 ,this.fields.get("EVENT_DATE")
                 ,this.fields.get("ORG_ID")
                 ,this.fields.get("ORG")
                 ,this.fields.get("CODE")
]
          ,border:false
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0108"
          ,buttons: [{xtype:"button",scope:this,text:"Confirm delivery",handler:function() {this.callProcedure("markDelivered",true,this.markDeliveredSuccess);}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0108.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0108.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,EVENT_DATE:""
              ,ORG_ID:""
              ,ORG:""
              ,CODE:""});
     }

  ,markDeliveredSuccess:function(response) {
    this.setFieldValue("CODE","");
this.getField("CODE").focus();
   }


  });
  Ext.reg("DC0108", N21.DataComp.DC0108);

