/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0067: Org delivery agents
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0067 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0067"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0067", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0067"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0067.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0067.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0067", N21.DataComp.LOV0067);


