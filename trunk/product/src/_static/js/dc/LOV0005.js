/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0005: Banks
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0005 = Ext.extend(N21.Base.Combo, {
     displayColumn: "CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0005"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0005&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"}]
             })
          ,dataComponentName:"LOV0005"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0005.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0005.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0005", N21.DataComp.LOV0005);


