/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0016: Delivery agents
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0016 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0016"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0016&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0016"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0016.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0016.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0016", N21.DataComp.LOV0016);


