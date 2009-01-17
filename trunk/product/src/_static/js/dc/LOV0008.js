/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0008: Clients
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0008 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0008"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0008&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"}]
             })
          ,dataComponentName:"LOV0008"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0008.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0008.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0008", N21.DataComp.LOV0008);


