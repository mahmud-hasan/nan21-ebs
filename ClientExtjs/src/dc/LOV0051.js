/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0051: Organizations
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0051 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0051"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0051&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
              ,baseParams: {p_client_id:""}
             })
          ,dataComponentName:"LOV0051"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0051.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0051.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0051", N21.DataComp.LOV0051);


