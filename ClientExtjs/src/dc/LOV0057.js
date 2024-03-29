/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0057: Price levels
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0057 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0057"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0057", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0057"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0057.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0057.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0057", N21.DataComp.LOV0057);


