/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0053: Org. inventory
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0053 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0053"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0053&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"}]
              ,baseParams: {p_org_id:"-1"}
             })
          ,dataComponentName:"LOV0053"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0053.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0053.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0053", N21.DataComp.LOV0053);


