/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0061: Means of transport
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0061 = Ext.extend(N21.Base.Combo, {
     displayColumn: "REG_NO"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0061"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0061", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"REG_NO",type:"string"}]
             })
          ,dataComponentName:"LOV0061"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0061.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0061.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0061", N21.DataComp.LOV0061);


