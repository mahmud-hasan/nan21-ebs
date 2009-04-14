/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0049: Costing method
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0049 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0049"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0049&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0049"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0049.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0049.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0049", N21.DataComp.LOV0049);


