/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0034: Project issue priority
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0034 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0034"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0034&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0034"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0034.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0034.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0034", N21.DataComp.LOV0034);


