/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0001: Currencies
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0001 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0001"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0001&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0001"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0001.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0001.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0001", N21.DataComp.LOV0001);


