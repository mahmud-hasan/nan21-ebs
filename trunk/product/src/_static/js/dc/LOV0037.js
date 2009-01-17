/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0037: Uom period based
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0037 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0037"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0037&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0037"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0037.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0037.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0037", N21.DataComp.LOV0037);


