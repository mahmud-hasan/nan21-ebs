/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0065: Parcel reject reasons
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0065 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0065"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0065", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0065"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0065.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0065.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0065", N21.DataComp.LOV0065);


