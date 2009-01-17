/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0025: Account
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0025 = Ext.extend(N21.Base.Lov, {
     displayField:"CODE"
    ,queryArraySize:40
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Account (LOV0025)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0025"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0025&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"NAME",type:"string"}]
              ,baseParams: {p_client_id:"-1"}
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Account",width:100,dataIndex:'CODE',sortable:true}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:250,dataIndex:'NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0025"
          ,displayField:this.displayField
          ,lovWidth:450
          ,lovHeight:300
          ,queryFields:[["CODE", this.resourceBundle.FieldLabel.CODE||"Account"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"]]
        });
       N21.DataComp.LOV0025.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0025.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0025", N21.DataComp.LOV0025);



