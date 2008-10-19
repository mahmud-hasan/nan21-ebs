/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0006: Countries
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0006 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0006"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0006&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0006"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0006.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0006.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0006", N21.DataComp.LOV0006);


