
Ext.ns('N21');


N21.DC_View = Ext.extend(Ext.Panel, {

  ,fields: new Ext.util.MixedCollection()
  ,columns:
  ,queryFields:
  ,containers:

    //render view

});



N21.DC_Model = Ext.extend(Ext.util.Observable, {

   // MODEL

  ,recordMeta:null    // definition of a record
  ,record: null       // current record from list
  ,records: null      // record list
  ,recIdx: null   // current record index in record list


  ,queryMeta: null   // definition of the query object
  ,query:null        // current query values to be sent as params on data fetch
  ,queries:null      // in case of saved queries


  ,childDCs:null    //child DC models ?


});




N21.DC_Control = Ext.extend(Ext.util.Observable, {

  // general data-control properties

   dcName: null  // name of the DC instance

  ,view: null   // DC visual presentation layer
  ,model: null  // DC data model


  ,initComponent:function() {
     Ext.apply(this, arguments);
     this.addEvents(
        "before_clear_query"    //Fires before clear the query object.
       ,"before_execute_query"
       ,"execute_query_success"
       ,"execute_query_failure"
    );
     N21.DC_Control.superclass.initComponent.apply(this, arguments);
  } // end initComponent



  ,initEvents: function() {
    N21.DC_Control.superclass.initEvents.call(this);
    //this.on('beforeedit', this.beforeCellEdit,this )
  } // end initEvents



  /*************************************************************************************
   *   public API:
   *************************************************************************************/

  ,enterQuery: function () {}
  ,executeQuery: function () { this._onExecuteQuery(); }
  ,clearQuery:function() { this._clearQuery(); }

  ,createRecord: function () {}
  ,deleteRecord: function () {}
  ,saveRecord: function () {}


  /*************************************************************************************
   *   private implementations
   *************************************************************************************/



  //-----------------
  //  Query
  //-----------------

  ,_onExecuteQuery: function() {
      if(this.fireEvent("before_execute_query", this, this.model.query) !== false){
        this.model.store.baseParams = this.model.query;
        this.model.store.load({callback:this._afterExecuteQuery,scope:this});
      }
   }

  ,_afterExecuteQuery: function(r,options,success) {
     if (success) {
       this.fireEvent("execute_query_success", this );
     } else {
       this.fireEvent("execute_query_failure", this );
     }
   }

  ,_clearQuery: function() {
     if(this.fireEvent("before_clear_query", this, this.model.query) !== false){
       for(v in this.model.query) {
         this.model.query[v] = "";
       }
     }
   }


  //-----------------
  //  New
  //-----------------

  ,_beforeNewRecord: function() {}
  ,_onNewRecord: function() {

  }
  ,_afterNewRecord: function() {}



  //-----------------
  //  Edit
  //-----------------

  ,beforeEditRecord: function() {}
  ,onEditRecord: function() {}
  ,afterEditRecord: function() {}


  //-----------------
  //  Delete
  //-----------------

  ,beforeDeleteRecord: function() {}
  ,onDeleteRecord: function() {}
  ,afterDeleteRecord: function() {}


});






Ext.reg('N21_DataControl', N21.DataControl);