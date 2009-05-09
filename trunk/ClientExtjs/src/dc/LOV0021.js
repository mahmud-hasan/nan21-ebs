/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0021: MenuBars
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0021 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0021"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0021", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0021"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0021.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0021.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0021", N21.DataComp.LOV0021);


