/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0066: Organization attribute def
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0066 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0066"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0066&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0066"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0066.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0066.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0066", N21.DataComp.LOV0066);


