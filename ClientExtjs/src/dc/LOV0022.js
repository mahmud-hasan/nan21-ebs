/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0022: Menu items
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0022 = Ext.extend(N21.Base.Lov, {
     displayField:"NAME"
    ,queryArraySize:40
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Menu items (LOV0022)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0022"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0022", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"MENUBAR_CODE",type:"string"},{name:"MENUITEM_ID",type:"float"},{name:"NAME",type:"string"},{name:"PARENT_NAME",type:"string"},{name:"POSITION",type:"float"}]
              ,baseParams: {p_parent:"",p_menubar:"%"}
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"MENUBAR_CODE",header:this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar",width:50,dataIndex:'MENUBAR_CODE'}
              ,{id:"POSITION",header:this.resourceBundle.FieldLabel.POSITION||"Position",width:30,dataIndex:'POSITION',align:'right'}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',sortable:true}
              ,{id:"MENUITEM_ID",header:this.resourceBundle.FieldLabel.MENUITEM_ID||"Parent id",width:100,hidden :true,dataIndex:'MENUITEM_ID',align:'right'}
              ,{id:"PARENT_NAME",header:this.resourceBundle.FieldLabel.PARENT_NAME||"Parent",width:150,dataIndex:'PARENT_NAME',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0022"
          ,displayField:this.displayField
          ,lovWidth:500
          ,lovHeight:300
          ,queryFields:[["MENUBAR_CODE", this.resourceBundle.FieldLabel.MENUBAR_CODE||"Menubar"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"]]
        });
       N21.DataComp.LOV0022.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0022.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0022", N21.DataComp.LOV0022);



