/** 
 * Data Component: DC0113, Title: Parcel allocate to agent
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0113 = Ext.extend(N21.Base.EditForm, {
     fields: new Ext.util.MixedCollection()
     ,dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"WAREHOUSE_ORG_NAME", type:"string" }
         ,{name:"WAREHOUSE_ORG_ID", type:"float" }
         ,{name:"EVENT_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"AGENT_ORG_ID", type:"float" }
         ,{name:"AGENT_ORG_NAME", type:"string" }
         ,{name:"CODE", type:"string" }
    ])
    ,layoutItems: new Ext.util.MixedCollection()
    ,initComponent:function() {
       
       this.fields.add("_p_record_status",new Ext.form.Hidden({xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"})   );
       this.fields.add("WAREHOUSE_ORG_NAME",new  N21.DataComp.LOV0068({name:"WAREHOUSE_ORG_NAME",id:"DC0113F_WAREHOUSE_ORG_NAME",dataIndex:"WAREHOUSE_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.WAREHOUSE_ORG_NAME||"Warehouse",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0113F_WAREHOUSE_ORG_ID"}]}));
       this.fields.add("WAREHOUSE_ORG_ID",new Ext.form.Hidden({name:"WAREHOUSE_ORG_ID",id:"DC0113F_WAREHOUSE_ORG_ID",dataIndex:"WAREHOUSE_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.WAREHOUSE_ORG_ID||"Warehouse ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("EVENT_DATE",new Ext.form.DateField({name:"EVENT_DATE",id:"DC0113F_EVENT_DATE",dataIndex:"EVENT_DATE",fieldLabel: this.resourceBundle.FieldLabel.EVENT_DATE||"Date",allowBlank:false,labelSeparator:":*",width:100,insert_allowed:true,update_allowed:true,format:Ext.DATE_FORMAT}));
       this.fields.add("AGENT_ORG_ID",new Ext.form.Hidden({name:"AGENT_ORG_ID",id:"DC0113F_AGENT_ORG_ID",dataIndex:"AGENT_ORG_ID",fieldLabel: this.resourceBundle.FieldLabel.AGENT_ORG_ID||"To agent ID",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));
       this.fields.add("AGENT_ORG_NAME",new  N21.DataComp.LOV0067({name:"AGENT_ORG_NAME",id:"DC0113F_AGENT_ORG_NAME",dataIndex:"AGENT_ORG_NAME",fieldLabel: this.resourceBundle.FieldLabel.AGENT_ORG_NAME||"To agent",allowBlank:false,labelSeparator:":*",width:150,listWidth:168,insert_allowed:true,update_allowed:true,selectOnFocus:true,fieldMapping: [{column:"ID",field:"DC0113F_AGENT_ORG_ID"}]}));
       this.fields.add("CODE",new Ext.form.TextField({name:"CODE",id:"DC0113F_CODE",dataIndex:"CODE",fieldLabel: this.resourceBundle.FieldLabel.CODE||"Parcel code",allowBlank:false,labelSeparator:":*",width:150,insert_allowed:true,update_allowed:true}));

       this.layoutItems.add("Allocation",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Allocation||"Allocation",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("EVENT_DATE"),this.fields.get("AGENT_ORG_ID"),this.fields.get("AGENT_ORG_NAME"),this.fields.get("CODE")] });
       this.layoutItems.add("Warehouse",
             { xtype:"fieldset", autoHeight:true,collapsible: true,title:this.resourceBundle.FieldsetTitle.Warehouse||"Warehouse",border:true,labelWidth:80,labelAlign:"left",width:"300"   ,items:[ this.fields.get("WAREHOUSE_ORG_ID"),this.fields.get("WAREHOUSE_ORG_NAME")] });
       this.layoutItems.add("C1",
             { layout:"form",columnWidth:1,labelAlign:"left",labelWidth:100, items:[ this.layoutItems.get("Warehouse"),this.layoutItems.get("Allocation")]
 }); 


       Ext.apply(this, {
           items:[this.fields.get("_p_record_status"),this.layoutItems.get("C1")]
          ,border:false
          ,layout:"column"
          ,defaults:{labelWidth:110}
          ,frame:true
          ,width: "100%"
          ,dataComponentName:"DC0113"
          ,buttons: [{xtype:"button",scope:this,text:"Allocate",handler:function() {this.callProcedure("doAllocate",true,this.doAllocateSuccess);}}]
          ,buttonAlign:"left"
          ,toolbarConfig:"STANDARD"
        });

        
       N21.DataComp.DC0113.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0113.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert"
              ,WAREHOUSE_ORG_NAME:""
              ,WAREHOUSE_ORG_ID:""
              ,EVENT_DATE:""
              ,AGENT_ORG_ID:""
              ,AGENT_ORG_NAME:""
              ,CODE:""});
     }

  ,doAllocateSuccess:function(response) {
    this.setFieldValue("CODE","");
this.getField("CODE").focus();
   }


  });
  Ext.reg("DC0113", N21.DataComp.DC0113);

