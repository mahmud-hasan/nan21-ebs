/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0024: Taxes - VAT
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0024 = Ext.extend(N21.Base.Combo, {
     displayColumn: "NAME"
    ,initComponent:function() {
       Ext.apply(this, {
           store: new Ext.data.JsonStore({
               id:"storeLOV0024"
              ,totalProperty:"totalCount"
              ,root:_n21["RECORDS_JSON_ROOT_TAG"]
              ,url:buildBaseUrlFetch("LOV0024", _n21["DATA_FORMAT_JSON"])
              ,remoteSort:true
              ,fields:[{name:"ID",type:"float"},{name:"NAME",type:"string"},{name:"VALUE",type:"float"}]
             })
          ,dataComponentName:"LOV0024"
          ,mode:"local"
          ,forceSelection:true
        });
       N21.DataComp.LOV0024.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0024.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0024", N21.DataComp.LOV0024);


