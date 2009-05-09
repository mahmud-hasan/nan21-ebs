/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0041: BP Customers
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0041 = Ext.extend(N21.Base.Lov, {
     displayField:"NAME"
    ,queryArraySize:50
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"BP Customers (LOV0041)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0041"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0041", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"},{name:"NAME",type:"string"}]
              ,baseParams: {p_client_id:"-1"}
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0041"
          ,displayField:this.displayField
          ,lovWidth:500
          ,lovHeight:350
          ,queryFields:[["CODE", this.resourceBundle.FieldLabel.CODE||"Code"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"]]
        });
       N21.DataComp.LOV0041.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0041.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0041", N21.DataComp.LOV0041);



