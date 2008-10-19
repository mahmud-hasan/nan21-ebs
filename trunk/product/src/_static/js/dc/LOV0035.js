/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0035: Project component types
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0035 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0035"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0035&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
              ,baseParams: {p_project_id:"-1"}
             })
          ,dataComponentName:"LOV0035"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0035.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0035.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0035", N21.DataComp.LOV0035);


