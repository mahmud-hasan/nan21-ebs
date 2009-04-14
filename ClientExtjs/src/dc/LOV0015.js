/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0015: Received invoice doc. types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0015 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0015"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:CFG_BACKENDSERVER_URL+"?_p_form=LOV0015&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0015"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0015.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0015.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0015", N21.DataComp.LOV0015);


