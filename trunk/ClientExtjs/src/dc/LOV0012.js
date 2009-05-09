/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0012: Payment doc. types(Payable)
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0012 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0012"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0012", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0012"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0012.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0012.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0012", N21.DataComp.LOV0012);


