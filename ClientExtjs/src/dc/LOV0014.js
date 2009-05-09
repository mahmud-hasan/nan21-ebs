/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0014: Product categories
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0014 = Ext.extend(N21.Base.Lov, {
     displayField:"CODE"
    ,queryArraySize:-1
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Product categories (LOV0014)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0014"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0014", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"CODE",type:"string"},{name:"ID",type:"float"},{name:"NAME",type:"string"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"CODE",header:this.resourceBundle.FieldLabel.CODE||"Code",width:100,dataIndex:'CODE',sortable:true}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:200,dataIndex:'NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0014"
          ,displayField:this.displayField
          ,lovWidth:400
          ,lovHeight:300
          ,queryFields:[["CODE", this.resourceBundle.FieldLabel.CODE||"Code"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"]]
        });
       N21.DataComp.LOV0014.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0014.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0014", N21.DataComp.LOV0014);



