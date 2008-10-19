/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0030: Project issue severity
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0030 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0030"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0030&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0030"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0030.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0030.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0030", N21.DataComp.LOV0030);


