/** 
 * Data Component: DC0001, Title: INV01
 */ 

  Ext.ns("N21.DataComp");
  N21.DataComp.DC0001 = Ext.extend(N21.Base.GridView, {
     dataRecordMeta:    Ext.data.Record.create([
          {name:"_p_record_status", type:"string"}
         ,{name:"ID", type:"float" }
         ,{name:"DOC_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"DOC_NO_1", type:"string" }
         ,{name:"CLIENT_ID", type:"float" }
         ,{name:"ISSUER_ID", type:"float" }
         ,{name:"ISSUER_NAME", type:"string" }
         ,{name:"ISSUER_REG_NO", type:"string" }
         ,{name:"ISSUER_TAX_NO", type:"string" }
         ,{name:"ISSUER_TAX_NO_TYPE", type:"string" }
         ,{name:"RECEIVER_ID", type:"float" }
         ,{name:"RECEIVER_NAME", type:"string" }
         ,{name:"RECEIVER_REG_NO", type:"string" }
         ,{name:"RECEIVER_TAX_NO", type:"string" }
         ,{name:"RECEIVER_TAX_NO_TYPE", type:"string" }
         ,{name:"PAYBY_ID", type:"float" }
         ,{name:"DOC_TYPE", type:"string" }
         ,{name:"INV_STATUS", type:"string" }
         ,{name:"INV_CURRENCY", type:"string" }
         ,{name:"TRANSTYPE_CODE", type:"string" }
         ,{name:"VAT_RATE", type:"float" }
         ,{name:"DUE_DATE", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"INV_LINE_COUNT", type:"float" }
         ,{name:"REF_INV_ID", type:"float" }
         ,{name:"REF_INV_DOC_NO", type:"string" }
         ,{name:"ORDER_ID", type:"float" }
         ,{name:"TOTAL_NET_AMOUNT", type:"float" }
         ,{name:"TOTAL_TAX_AMOUNT", type:"float" }
         ,{name:"TOTAL_AMOUNT", type:"float" }
         ,{name:"CREATEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"CREATEDBY", type:"string" }
         ,{name:"MODIFIEDON", type:"date",dateFormat:Ext.DATE_FORMAT }
         ,{name:"MODIFIEDBY", type:"string" }
    ])

    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeDC0001"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"index.php?_p_action=fetch&_p_form=DC0001"
              ,remoteSort :true
              ,fields:this.dataRecordMeta
           })
          ,columns: [new Ext.grid.RowNumberer(),
               { id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:200,dataIndex:'ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"DOC_NO_1",header:this.resourceBundle.FieldLabel.DOC_NO_1||"Inv No",width:120,dataIndex:'DOC_NO_1',sortable:true}
              ,{ id:"CLIENT_ID",header:this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",width:200,dataIndex:'CLIENT_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"ISSUER_ID",header:this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",width:200,dataIndex:'ISSUER_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"ISSUER_NAME",header:this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer_name",width:200,dataIndex:'ISSUER_NAME',hidden:true,sortable:true}
              ,{ id:"ISSUER_REG_NO",header:this.resourceBundle.FieldLabel.ISSUER_REG_NO||"Issuer_reg_no",width:200,dataIndex:'ISSUER_REG_NO',hidden:true,sortable:true}
              ,{ id:"ISSUER_TAX_NO",header:this.resourceBundle.FieldLabel.ISSUER_TAX_NO||"Issuer_tax_no",width:200,dataIndex:'ISSUER_TAX_NO',hidden:true,sortable:true}
              ,{ id:"ISSUER_TAX_NO_TYPE",header:this.resourceBundle.FieldLabel.ISSUER_TAX_NO_TYPE||"Issuer_tax_no_type",width:200,dataIndex:'ISSUER_TAX_NO_TYPE',hidden:true,sortable:true}
              ,{ id:"RECEIVER_ID",header:this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",width:200,dataIndex:'RECEIVER_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"RECEIVER_NAME",header:this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver_name",width:200,dataIndex:'RECEIVER_NAME',sortable:true}
              ,{ id:"RECEIVER_REG_NO",header:this.resourceBundle.FieldLabel.RECEIVER_REG_NO||"Receiver_reg_no",width:200,dataIndex:'RECEIVER_REG_NO',hidden:true,sortable:true}
              ,{ id:"RECEIVER_TAX_NO",header:this.resourceBundle.FieldLabel.RECEIVER_TAX_NO||"Receiver_tax_no",width:200,dataIndex:'RECEIVER_TAX_NO',hidden:true,sortable:true}
              ,{ id:"RECEIVER_TAX_NO_TYPE",header:this.resourceBundle.FieldLabel.RECEIVER_TAX_NO_TYPE||"Receiver_tax_no_type",width:200,dataIndex:'RECEIVER_TAX_NO_TYPE',hidden:true,sortable:true}
              ,{ id:"PAYBY_ID",header:this.resourceBundle.FieldLabel.PAYBY_ID||"Payby_id",width:200,dataIndex:'PAYBY_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"DOC_TYPE",header:this.resourceBundle.FieldLabel.DOC_TYPE||"Doc_type",width:100,dataIndex:'DOC_TYPE',sortable:true}
              ,{ id:"INV_STATUS",header:this.resourceBundle.FieldLabel.INV_STATUS||"Inv_status",width:200,dataIndex:'INV_STATUS',hidden:true,sortable:true}
              ,{ id:"INV_CURRENCY",header:this.resourceBundle.FieldLabel.INV_CURRENCY||"Inv_currency",width:80,dataIndex:'INV_CURRENCY',sortable:true}
              ,{ id:"TRANSTYPE_CODE",header:this.resourceBundle.FieldLabel.TRANSTYPE_CODE||"Transtype_code",width:200,dataIndex:'TRANSTYPE_CODE',hidden:true,sortable:true}
              ,{ id:"VAT_RATE",header:this.resourceBundle.FieldLabel.VAT_RATE||"Vat_rate",width:200,dataIndex:'VAT_RATE',hidden:true,sortable:true,align:'right'}
              ,{ id:"DUE_DATE",header:this.resourceBundle.FieldLabel.DUE_DATE||"Due_date",width:200,dataIndex:'DUE_DATE',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"INV_LINE_COUNT",header:this.resourceBundle.FieldLabel.INV_LINE_COUNT||"Inv_line_count",width:200,dataIndex:'INV_LINE_COUNT',hidden:true,sortable:true,align:'right'}
              ,{ id:"REF_INV_ID",header:this.resourceBundle.FieldLabel.REF_INV_ID||"Ref_inv_id",width:200,dataIndex:'REF_INV_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"REF_INV_DOC_NO",header:this.resourceBundle.FieldLabel.REF_INV_DOC_NO||"Ref_inv_doc_no",width:200,dataIndex:'REF_INV_DOC_NO',hidden:true,sortable:true}
              ,{ id:"ORDER_ID",header:this.resourceBundle.FieldLabel.ORDER_ID||"Order_id",width:200,dataIndex:'ORDER_ID',hidden:true,sortable:true,align:'right'}
              ,{ id:"TOTAL_NET_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Total_net_amount",width:100,dataIndex:'TOTAL_NET_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TOTAL_TAX_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Total_tax_amount",width:100,dataIndex:'TOTAL_TAX_AMOUNT',sortable:true,align:'right'}
              ,{ id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total_amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right',decimalPrecision:2}
              ,{ id:"CREATEDON",header:this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",width:200,dataIndex:'CREATEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"CREATEDBY",header:this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy",width:200,dataIndex:'CREATEDBY',hidden:true,sortable:true}
              ,{ id:"MODIFIEDON",header:this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",width:200,dataIndex:'MODIFIEDON',hidden:true,sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{ id:"MODIFIEDBY",header:this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy",width:200,dataIndex:'MODIFIEDBY',hidden:true,sortable:true}
          ]
          ,queryFields: [
                {xtype: "numberfield",name:"QRY_ID",id:"DC0001_QRY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ID||"Id",style: "text-align:right;"}
               ,{xtype: "datefield",name:"QRY_DOC_DATE",id:"DC0001_QRY_DOC_DATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.DOC_DATE||"Doc_date",format:Ext.DATE_FORMAT}
               ,{xtype: "",name:"QRY_DOC_NO_1",id:"DC0001_QRY_DOC_NO_1",width:120,fieldLabel: this.resourceBundle.FieldLabel.DOC_NO_1||"Inv No"}
               ,{xtype: "numberfield",name:"QRY_CLIENT_ID",id:"DC0001_QRY_CLIENT_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.CLIENT_ID||"Client_id",style: "text-align:right;"}
               ,{xtype: "numberfield",name:"QRY_ISSUER_ID",id:"DC0001_QRY_ISSUER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_ISSUER_NAME",id:"DC0001_QRY_ISSUER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer_name"}
               ,{xtype: "textfield",name:"QRY_ISSUER_REG_NO",id:"DC0001_QRY_ISSUER_REG_NO",width:120,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_REG_NO||"Issuer_reg_no"}
               ,{xtype: "textfield",name:"QRY_ISSUER_TAX_NO",id:"DC0001_QRY_ISSUER_TAX_NO",width:120,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_TAX_NO||"Issuer_tax_no"}
               ,{xtype: "textfield",name:"QRY_ISSUER_TAX_NO_TYPE",id:"DC0001_QRY_ISSUER_TAX_NO_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.ISSUER_TAX_NO_TYPE||"Issuer_tax_no_type"}
               ,{xtype: "numberfield",name:"QRY_RECEIVER_ID",id:"DC0001_QRY_RECEIVER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_ID||"Receiver_id",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_RECEIVER_NAME",id:"DC0001_QRY_RECEIVER_NAME",width:120,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver_name"}
               ,{xtype: "textfield",name:"QRY_RECEIVER_REG_NO",id:"DC0001_QRY_RECEIVER_REG_NO",width:120,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_REG_NO||"Receiver_reg_no"}
               ,{xtype: "textfield",name:"QRY_RECEIVER_TAX_NO",id:"DC0001_QRY_RECEIVER_TAX_NO",width:120,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_TAX_NO||"Receiver_tax_no"}
               ,{xtype: "textfield",name:"QRY_RECEIVER_TAX_NO_TYPE",id:"DC0001_QRY_RECEIVER_TAX_NO_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.RECEIVER_TAX_NO_TYPE||"Receiver_tax_no_type"}
               ,{xtype: "numberfield",name:"QRY_PAYBY_ID",id:"DC0001_QRY_PAYBY_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.PAYBY_ID||"Payby_id",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_DOC_TYPE",id:"DC0001_QRY_DOC_TYPE",width:120,fieldLabel: this.resourceBundle.FieldLabel.DOC_TYPE||"Doc_type"}
               ,{xtype: "textfield",name:"QRY_INV_STATUS",id:"DC0001_QRY_INV_STATUS",width:120,fieldLabel: this.resourceBundle.FieldLabel.INV_STATUS||"Inv_status"}
               ,{xtype: "textfield",name:"QRY_INV_CURRENCY",id:"DC0001_QRY_INV_CURRENCY",width:120,fieldLabel: this.resourceBundle.FieldLabel.INV_CURRENCY||"Inv_currency"}
               ,{xtype: "textfield",name:"QRY_TRANSTYPE_CODE",id:"DC0001_QRY_TRANSTYPE_CODE",width:120,fieldLabel: this.resourceBundle.FieldLabel.TRANSTYPE_CODE||"Transtype_code"}
               ,{xtype: "numberfield",name:"QRY_VAT_RATE",id:"DC0001_QRY_VAT_RATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.VAT_RATE||"Vat_rate",style: "text-align:right;"}
               ,{xtype: "datefield",name:"QRY_DUE_DATE",id:"DC0001_QRY_DUE_DATE",width:120,fieldLabel: this.resourceBundle.FieldLabel.DUE_DATE||"Due_date",format:Ext.DATE_FORMAT}
               ,{xtype: "numberfield",name:"QRY_INV_LINE_COUNT",id:"DC0001_QRY_INV_LINE_COUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.INV_LINE_COUNT||"Inv_line_count",style: "text-align:right;"}
               ,{xtype: "numberfield",name:"QRY_REF_INV_ID",id:"DC0001_QRY_REF_INV_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.REF_INV_ID||"Ref_inv_id",style: "text-align:right;"}
               ,{xtype: "textfield",name:"QRY_REF_INV_DOC_NO",id:"DC0001_QRY_REF_INV_DOC_NO",width:120,fieldLabel: this.resourceBundle.FieldLabel.REF_INV_DOC_NO||"Ref_inv_doc_no"}
               ,{xtype: "numberfield",name:"QRY_ORDER_ID",id:"DC0001_QRY_ORDER_ID",width:120,fieldLabel: this.resourceBundle.FieldLabel.ORDER_ID||"Order_id",style: "text-align:right;"}
               ,{xtype: "numberfield",name:"QRY_TOTAL_NET_AMOUNT",id:"DC0001_QRY_TOTAL_NET_AMOUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_NET_AMOUNT||"Total_net_amount",style: "text-align:right;"}
               ,{xtype: "numberfield",name:"QRY_TOTAL_TAX_AMOUNT",id:"DC0001_QRY_TOTAL_TAX_AMOUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_TAX_AMOUNT||"Total_tax_amount",style: "text-align:right;"}
               ,{xtype: "numberfield",name:"QRY_TOTAL_AMOUNT",id:"DC0001_QRY_TOTAL_AMOUNT",width:120,fieldLabel: this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Total_amount",style: "text-align:right;"}
               ,{xtype: "datefield",name:"QRY_CREATEDON",id:"DC0001_QRY_CREATEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDON||"CreatedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_CREATEDBY",id:"DC0001_QRY_CREATEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.CREATEDBY||"CreatedBy"}
               ,{xtype: "datefield",name:"QRY_MODIFIEDON",id:"DC0001_QRY_MODIFIEDON",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDON||"ModifiedOn",format:Ext.DATE_FORMAT}
               ,{xtype: "textfield",name:"QRY_MODIFIEDBY",id:"DC0001_QRY_MODIFIEDBY",width:120,fieldLabel: this.resourceBundle.FieldLabel.MODIFIEDBY||"ModifiedBy"}
          ]
          ,dataComponentName:"DC0001"
          ,viewConfig:{forceFit:true}
          ,queryArraySize:20
          ,toolbarConfig:"STANDARD"
        });

       N21.DataComp.DC0001.superclass.initComponent.apply(this, arguments);
     }

    ,onRender:function() {
       N21.DataComp.DC0001.superclass.onRender.apply(this, arguments);
     }

    ,newDataRecord:function() {
       return new this.dataRecordMeta({_p_record_status:"insert",ID:"",DOC_DATE:"",DOC_NO_1:"",CLIENT_ID:"",ISSUER_ID:"",ISSUER_NAME:"",ISSUER_REG_NO:"",ISSUER_TAX_NO:"",ISSUER_TAX_NO_TYPE:"",RECEIVER_ID:"",RECEIVER_NAME:"",RECEIVER_REG_NO:"",RECEIVER_TAX_NO:"",RECEIVER_TAX_NO_TYPE:"",PAYBY_ID:"",DOC_TYPE:"",INV_STATUS:"",INV_CURRENCY:"",TRANSTYPE_CODE:"",VAT_RATE:"",DUE_DATE:"",INV_LINE_COUNT:"",REF_INV_ID:"",REF_INV_DOC_NO:"",ORDER_ID:"",TOTAL_NET_AMOUNT:"",TOTAL_TAX_AMOUNT:"",TOTAL_AMOUNT:"",CREATEDON:"",CREATEDBY:"",MODIFIEDON:"",MODIFIEDBY:""});
     }

  });
  Ext.reg("DC0001", N21.DataComp.DC0001);



