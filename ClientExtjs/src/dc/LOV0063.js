/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0063: Acc schema account params 
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0063 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0063"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0063", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
              ,baseParams: {p_is_account:""}
             })
          ,dataComponentName:"LOV0063"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0063.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0063.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0063", N21.DataComp.LOV0063);


