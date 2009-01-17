/* N21 eBusiness Suite
 * Copyright: Nan21 Electronics srl
 * Generated content.
 * LOV0039: Business partner with adress
 */

  Ext.ns("N21.DataComp");
  N21.DataComp.LOV0039 = Ext.extend(N21.Base.Lov, {
     displayField:"NAME"
    ,queryArraySize:40
    ,initComponent:function() {
       Ext.apply(this, {
           lovTitle:"Business partner with adress (LOV0039)"
          ,view: new Ext.grid.GridPanel({
             store: new Ext.data.JsonStore({
               id:"storeLOV0039"
              ,totalProperty:"totalCount"
              ,root:"records"
              ,url:"frmMain.php?_p_form=LOV0039&_p_action=fetch&_p_data_format=json"
              ,remoteSort:true
              ,fields:[{name:"ADRESS",type:"string"},{name:"CITY",type:"string"},{name:"CITY_ID",type:"float"},{name:"COUNTRY_CODE",type:"string"},{name:"ID",type:"float"},{name:"NAME",type:"string"},{name:"REGION_CODE",type:"string"}]
             })
             ,columns: [new Ext.grid.RowNumberer(),
               {id:"ID",header:this.resourceBundle.FieldLabel.ID||"Id",width:100,hidden :true,dataIndex:'ID',sortable:true,align:'right'}
              ,{id:"NAME",header:this.resourceBundle.FieldLabel.NAME||"Name",width:150,dataIndex:'NAME',sortable:true}
              ,{id:"REGION_CODE",header:this.resourceBundle.FieldLabel.REGION_CODE||"Region",width:60,dataIndex:'REGION_CODE',sortable:true}
              ,{id:"CITY",header:this.resourceBundle.FieldLabel.CITY||"City",width:100,dataIndex:'CITY',sortable:true}
              ,{id:"CITY_ID",header:this.resourceBundle.FieldLabel.CITY_ID||"City Id",width:100,hidden :true,dataIndex:'CITY_ID',sortable:true,align:'right'}
              ,{id:"ADRESS",header:this.resourceBundle.FieldLabel.ADRESS||"Adress",width:120,dataIndex:'ADRESS',sortable:true}
              ,{id:"COUNTRY_CODE",header:this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country",width:60,dataIndex:'COUNTRY_CODE',sortable:true}
             ]
           })
          ,dataComponentName:"LOV0039"
          ,displayField:this.displayField
          ,lovWidth:600
          ,lovHeight:350
          ,queryFields:[["CITY", this.resourceBundle.FieldLabel.CITY||"City"],["COUNTRY_CODE", this.resourceBundle.FieldLabel.COUNTRY_CODE||"Country"],["NAME", this.resourceBundle.FieldLabel.NAME||"Name"],["REGION_CODE", this.resourceBundle.FieldLabel.REGION_CODE||"Region"]]
        });
       N21.DataComp.LOV0039.superclass.initComponent.apply(this, arguments);
     }
    ,onRender:function() {
       N21.DataComp.LOV0039.superclass.onRender.apply(this, arguments);
     }
  });
  Ext.reg("LOV0039", N21.DataComp.LOV0039);



