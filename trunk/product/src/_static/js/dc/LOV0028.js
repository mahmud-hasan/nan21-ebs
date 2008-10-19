/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0028: UI DC
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0028 = Ext.extend(N21.Base.Lov, {
     displayField:"CODE"
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"UI DC (LOV0028)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0028"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0028&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0028"
          ,displayField:this.displayField
          ,lovWidth:400
          ,lovHeight:300
        });
       N21.DataComp.LOV0028.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0028.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0028", N21.DataComp.LOV0028);



