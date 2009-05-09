/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0027: Received invoice
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0027 = Ext.extend(N21.Base.Lov, {
     displayField:"DOC_NO_DATE"
    ,queryArraySize:-1
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Received invoice (LOV0027)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0027"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0027", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"DOC_CURRENCY",type:"string"},{name:"DOC_DATE",type:"date",dateFormat:Ext.DATE_FORMAT},{name:"DOC_NO",type:"string"},{name:"DOC_NO_DATE",type:"string"},{name:"ID",type:"float"},{name:"ISSUER_ID",type:"float"},{name:"ISSUER_NAME",type:"string"},{name:"TOTAL_AMOUNT",type:"float"}]
              ,baseParams: {p_client_id:"",p_issuer_id:""}
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc_no",width:80,dataIndex:'DOC_NO',sortable:true}
              ,{id:"ISSUER_ID",header:this.resourceBundle.FieldLabel.ISSUER_ID||"Issuer_id",width:100,hidden :true,dataIndex:'ISSUER_ID',sortable:true,align:'right'}
              ,{id:"ISSUER_NAME",header:this.resourceBundle.FieldLabel.ISSUER_NAME||"Issuer",width:120,dataIndex:'ISSUER_NAME',sortable:true}
              ,{id:"DOC_NO_DATE",header:this.resourceBundle.FieldLabel.DOC_NO_DATE||"Doc No/Date",width:100,hidden :true,dataIndex:'DOC_NO_DATE',sortable:true}
              ,{id:"TOTAL_AMOUNT",header:this.resourceBundle.FieldLabel.TOTAL_AMOUNT||"Amount",width:100,dataIndex:'TOTAL_AMOUNT',sortable:true,align:'right'}
              ,{id:"DOC_CURRENCY",header:this.resourceBundle.FieldLabel.DOC_CURRENCY||"Currency",width:50,dataIndex:'DOC_CURRENCY',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0027"
          ,displayField:this.displayField
          ,lovWidth:520
          ,lovHeight:300
          ,queryFields:[["DOC_NO", this.resourceBundle.FieldLabel.DOC_NO||"Doc_no"]]
        });
       N21.DataComp.LOV0027.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0027.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0027", N21.DataComp.LOV0027);



