/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0007: Regions
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0007 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0007"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0007", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
              ,baseParams: {p_country_code:"-"}
             })
          ,dataComponentName:"LOV0007"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0007.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0007.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0007", N21.DataComp.LOV0007);


