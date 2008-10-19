/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0029: UI DC fields
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0029 = Ext.extend(N21.Base.Lov, {
     displayField:"FIELD_NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"UI DC fields (LOV0029)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0029"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0029&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"FIELD_NAME",type:"string"},{name:"UIDC_CODE",type:"string"}]
              ,baseParams: {p_uidc_code:""}
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"UIDC_CODE",header:this.resourceBundle.FieldLabel.UIDC_CODE||"UiDc",width:100,dataIndex:'UIDC_CODE',sortable:true}
              ,{id:"FIELD_NAME",header:this.resourceBundle.FieldLabel.FIELD_NAME||"FieldName",width:150,dataIndex:'FIELD_NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0029"
          ,displayField:this.displayField
          ,lovWidth:400
          ,lovHeight:300
        });
       N21.DataComp.LOV0029.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0029.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0029", N21.DataComp.LOV0029);



