/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0010: Cities
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0010 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0010"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0010", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
              ,baseParams: {p_country_code:"-1",p_region_code:"-1"}
             })
          ,dataComponentName:"LOV0010"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0010.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0010.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0010", N21.DataComp.LOV0010);


