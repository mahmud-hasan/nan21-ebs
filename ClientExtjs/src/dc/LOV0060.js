/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0060: Means of transp. types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0060 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0060"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0060", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0060"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0060.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0060.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0060", N21.DataComp.LOV0060);


