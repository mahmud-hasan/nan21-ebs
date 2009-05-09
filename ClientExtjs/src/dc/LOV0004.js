/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0004: UOM types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0004 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0004"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0004", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0004"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0004.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0004.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0004", N21.DataComp.LOV0004);


