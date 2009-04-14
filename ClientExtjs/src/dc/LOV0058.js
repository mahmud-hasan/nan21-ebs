/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0058: Transport types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0058 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0058"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0058&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0058"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0058.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0058.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0058", N21.DataComp.LOV0058);


