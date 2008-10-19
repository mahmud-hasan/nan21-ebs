/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0002: UOM
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0002 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0002"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0002&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0002"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0002.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0002.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0002", N21.DataComp.LOV0002);


