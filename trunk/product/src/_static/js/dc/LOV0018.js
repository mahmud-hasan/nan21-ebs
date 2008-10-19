/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0018: Contract type
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0018 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0018"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0018&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0018"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0018.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0018.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0018", N21.DataComp.LOV0018);


