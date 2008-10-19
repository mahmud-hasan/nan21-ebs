/**
 * Data Component: DC0002, Title: Currencies
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC9999 = Ext.extend(N21.Base.EditForm, {

     fields: new Ext.util.MixedCollection()
    ,fieldSets: new Ext.util.MixedCollection()

    ,initComponent:function() {


      this.fields.add("_p_record_status",{xtype: "hidden", allowBlank: true, fieldLabel: "record_status", selectOnFocus: false, style: "", name: "_p_record_status"});
      this.fields.add("ID",{xtype: "hidden",dataIndex:"ID",width:200,allowBlank:false,fieldLabel: "Id"});
      this.fields.add("DOC_DATE",{xtype: "datefield",dataIndex:"DOC_DATE",width:100,allowBlank:true,fieldLabel: "Doc_date"});
      this.fields.add("DOC_NO",{xtype: "textfield",dataIndex:"DOC_NO",width:100,allowBlank:false,fieldLabel: "Doc_no"});
      this.fields.add("RECEIVER_ID",{xtype: "hidden",dataIndex:"RECEIVER_ID",width:200,allowBlank:true,fieldLabel: "Receiver_id"});
      this.fields.add("DOC_TYPE",{xtype: "textfield",dataIndex:"DOC_TYPE",width:80,allowBlank:true,fieldLabel: "Doc_type"});
      this.fields.add("INV_CURRENCY",{xtype: "LOV0001",dataIndex:"INV_CURRENCY",width:80,allowBlank:true,fieldLabel: "Inv_currency"});
      this.fields.add("RECEIVER_NAME",{xtype: "textfield",dataIndex:"RECEIVER_NAME",width:200,allowBlank:false,fieldLabel: "Receiver"});
      this.fields.add("DUE_DATE",{xtype: "datefield",dataIndex:"DUE_DATE",width:100,allowBlank:true,fieldLabel: "Due_date"});
      this.fields.add("TOTAL_NET_AMOUNT",{xtype: "numberfield",dataIndex:"TOTAL_NET_AMOUNT",width:120,allowBlank:true,fieldLabel: "Total_net_amount",style: "text-align:right;"});
      this.fields.add("TOTAL_TAX_AMOUNT",{xtype: "numberfield",dataIndex:"TOTAL_TAX_AMOUNT",width:120,allowBlank:true,fieldLabel: "Total_tax_amount",style: "text-align:right;"});
      this.fields.add("TOTAL_AMOUNT",{xtype: "numberfield",dataIndex:"TOTAL_AMOUNT",width:120,allowBlank:true,fieldLabel: "Total_amount",style: "text-align:right;"});




       Ext.apply(this, {
           title: 'dfsdf'
          ,frame:true
          ,border:false
          ,width: "100%"
            ,items: [{
            	 layout:'column'
                ,items:
                  [
                    {
                       columnWidth:.5
                      ,layout: 'form'
                      ,border:false 
                      ,items: [
                               this.fields.get("_p_record_status")
                              ,this.fields.get("ID")

                              ,this.fields.get("RECEIVER_ID")
                              ,this.fields.get("DOC_TYPE")
                              ]
                    }
                      ,
                    {

                      columnWidth:.5
                      ,layout: 'form'
                      ,border:false
                      ,items: [
                               this.fields.get("DUE_DATE")
                              ,this.fields.get("TOTAL_NET_AMOUNT")
                              ,this.fields.get("TOTAL_TAX_AMOUNT")
                              ,this.fields.get("TOTAL_AMOUNT")

                             ]
                    }
                  ]
               }]


          ,dataComponentName:"DC9999"

        }); // eof apply

     /*
     
     



              [
             this.fields.get("_p_record_status")
            ,this.fields.get("ID")
            ,this.fieldSets.get("FSet_Document")
            ,this.fieldSets.get("FSet_Amounts")
            ,this.fields.get("RECEIVER_ID")
            ,this.fields.get("DOC_TYPE")

            ,this.fields.get("DUE_DATE")
            ,this.fields.get("TOTAL_NET_AMOUNT")
            ,this.fields.get("TOTAL_TAX_AMOUNT")
            ,this.fields.get("TOTAL_AMOUNT")
            ]

     */


       N21.DataComp.DC9999.superclass.initComponent.apply(this, arguments);
     } // eof initComponent
    ,onRender:function() {
       N21.DataComp.DC9999.superclass.onRender.apply(this, arguments);
     } // eof onRender
  });
  Ext.reg("DC9999", N21.DataComp.DC9999);



