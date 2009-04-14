/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0055: Org inv. stock location
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0055 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0055"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0055&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"}]
              ,baseParams: {p_orginv_id:"-1"}
             })
          ,dataComponentName:"LOV0055"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0055.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0055.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0055", N21.DataComp.LOV0055);


