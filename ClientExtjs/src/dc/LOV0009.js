/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0009: Business partners
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0009 = Ext.extend(N21.Base.Lov, {
     displayField:"NAME"
    ,queryArraySize:40
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Business partners (LOV0009)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0009"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0009", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:120,dataIndex:'CODE',sortable:true}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0009"
          ,displayField:this.displayField
          ,lovWidth:400
          ,lovHeight:300
          ,queryFields:[["CODE", this.resourceBundle.FieldLabel.CODE||"Code"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"]]
        });
       N21.DataComp.LOV0009.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0009.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0009", N21.DataComp.LOV0009);



