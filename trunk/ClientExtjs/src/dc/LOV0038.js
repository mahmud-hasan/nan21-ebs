/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0038: Communication types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0038 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0038"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0038", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0038"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0038.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0038.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0038", N21.DataComp.LOV0038);


