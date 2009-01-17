/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0007: Regions
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0007 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0007"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0007&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
              ,baseParams: {p_country_code:"-"}
             })
          ,dataComponentName:"LOV0007"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0007.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0007.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0007", N21.DataComp.LOV0007);


