/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0070: Parcel event types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0070 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0070"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0070&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0070"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0070.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0070.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0070", N21.DataComp.LOV0070);


