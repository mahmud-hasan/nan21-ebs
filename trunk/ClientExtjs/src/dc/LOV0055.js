/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0055: Org inv. stock location
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0055 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0055"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0055", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"}]
              ,baseParams: {p_orginv_id:"-1"}
             })
          ,dataComponentName:"LOV0055"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0055.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0055.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0055", N21.DataComp.LOV0055);


