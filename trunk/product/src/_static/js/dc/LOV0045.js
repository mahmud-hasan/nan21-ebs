/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0045: Roles
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0045 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0045"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0045&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"NAME",type:"string"}]
             })
          ,dataComponentName:"LOV0045"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0045.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0045.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0045", N21.DataComp.LOV0045);


