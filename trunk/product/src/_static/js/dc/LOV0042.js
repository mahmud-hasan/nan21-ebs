/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0042: BP Suppliers
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0042 = Ext.extend(N21.Base.Lov, {
     displayField:"NAME"
    ,queryArraySize:50
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"BP Suppliers (LOV0042)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0042"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0042&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"ACCT",type:"string"},{name:"CODE",type:"string"},{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
              ,{id:"ACCT",header:this.resourceBundle.FieldLabel.ACCT||"Account",width:100,dataIndex:'ACCT',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0042"
          ,displayField:this.displayField
          ,lovWidth:500
          ,lovHeight:350
          ,queryFields:[["CODE", this.resourceBundle.FieldLabel.CODE||"Code"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"]]
        });
       N21.DataComp.LOV0042.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0042.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0042", N21.DataComp.LOV0042);



