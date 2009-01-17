/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0013: Issued invoices
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0013 = Ext.extend(N21.Base.Lov, {
     displayField:"DOC_NO_FULL"
    ,queryArraySize:40
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Issued invoices (LOV0013)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0013"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0013&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"DOC_CURRENCY",type:"string"},{name:"DOC_DATE",type:"date",dateFormat:Ext.DATE_FORMAT},{name:"DOC_NO_FULL",type:"string"},{name:"ID",type:"float"},{name:"RECEIVER_NAME",type:"string"},{name:"TOTAL_AMOUNT",type:"float"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"DOC_NO_FULL",header:this.resourceBundle.FieldLabel.DOC_NO_FULL||"Doc No",width:100,dataIndex:'DOC_NO_FULL',sortable:true}
              ,{id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{id:"RECEIVER_NAME",header:this.resourceBundle.FieldLabel.RECEIVER_NAME||"Receiver",width:150,dataIndex:'RECEIVER_NAME',sortable:true}
              ,{id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right'}
              ,{id:"DOC_CURRENCY",header:this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",width:60,dataIndex:'DOC_CURRENCY',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0013"
          ,displayField:this.displayField
          ,lovWidth:570
          ,lovHeight:350
          ,queryFields:[["DOC_NO_FULL", this.resourceBundle.FieldLabel.DOC_NO_FULL||"Doc No"]]
        });
       N21.DataComp.LOV0013.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0013.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0013", N21.DataComp.LOV0013);



