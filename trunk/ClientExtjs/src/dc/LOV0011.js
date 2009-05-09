/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0011: Accounting year
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0011 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0011"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0011", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"}]
              ,baseParams: {p_client_id:"-1"}
             })
          ,dataComponentName:"LOV0011"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0011.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0011.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0011", N21.DataComp.LOV0011);


