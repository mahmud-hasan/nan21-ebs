/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0019: Contracts
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0019 = Ext.extend(N21.Base.Lov, {
     displayField:"DOC_NO_FULL"
    ,queryArraySize:-1
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Contracts (LOV0019)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0019"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0019&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CUSTOMER",type:"string"},{name:"DOC_DATE",type:"date",dateFormat:Ext.DATE_FORMAT},{name:"DOC_NO",type:"string"},{name:"DOC_NO_FULL",type:"string"},{name:"ID",type:"float"},{name:"SUPPLIER",type:"string"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"DOC_NO",header:this.resourceBundle.FieldLabel.DOC_NO||"Doc No",width:100,dataIndex:'DOC_NO',sortable:true}
              ,{id:"DOC_DATE",header:this.resourceBundle.FieldLabel.DOC_DATE||"Date",width:100,dataIndex:'DOC_DATE',sortable:true,renderer:Ext.util.Format.dateRenderer(Ext.DATE_FORMAT)}
              ,{id:"CUSTOMER",header:this.resourceBundle.FieldLabel.CUSTOMER||"Customer",width:100,dataIndex:'CUSTOMER',sortable:true}
              ,{id:"SUPPLIER",header:this.resourceBundle.FieldLabel.SUPPLIER||"Supplier",width:100,dataIndex:'SUPPLIER',sortable:true}
              ,{id:"DOC_NO_FULL",header:this.resourceBundle.FieldLabel.DOC_NO_FULL||"Doc no/date",width:100,hidden :true,dataIndex:'DOC_NO_FULL',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0019"
          ,displayField:this.displayField
          ,lovWidth:400
          ,lovHeight:300
          ,queryFields:[["DOC_NO", this.resourceBundle.FieldLabel.DOC_NO||"Doc No"]]
        });
       N21.DataComp.LOV0019.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0019.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0019", N21.DataComp.LOV0019);



