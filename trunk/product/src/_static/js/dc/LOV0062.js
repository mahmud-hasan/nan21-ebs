/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0062: Client acc schema
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0062 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0062"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0062&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"ACCSCHEMA_ID",type:"float"},{name:"NAME",type:"string"}]
              ,baseParams: {p_client_id:"-1"}
             })
          ,dataComponentName:"LOV0062"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0062.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0062.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0062", N21.DataComp.LOV0062);


