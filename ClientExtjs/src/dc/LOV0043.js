/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0043: Accounting schema
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0043 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0043"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0043", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
              ,baseParams: {p_client_id:"-1"}
             })
          ,dataComponentName:"LOV0043"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0043.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0043.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0043", N21.DataComp.LOV0043);


