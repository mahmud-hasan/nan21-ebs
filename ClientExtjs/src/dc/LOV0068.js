/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0068: Org parcel warehouse
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0068 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0068"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0068", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0068"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0068.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0068.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0068", N21.DataComp.LOV0068);


