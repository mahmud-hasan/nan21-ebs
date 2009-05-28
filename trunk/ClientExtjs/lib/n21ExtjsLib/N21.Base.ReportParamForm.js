Ext.ns('N21.Base');
                                           

N21.Base.ReportParamForm = Ext.extend(Ext.form.FormPanel, {
     reportCode: null
    ,reportName: null
    ,reportTitle: null
    ,fields: new Ext.util.MixedCollection()
    ,layoutItems: new Ext.util.MixedCollection()

   ,initComponent:function() {

    //  alert('N21.Base.ReportParamForm.initComponent');
     Ext.apply(this,{
           buttons: [{xtype:"button",text:"Run Report",scope:this,handler:function() {this.run_report();}  }]
          ,buttonAlign:"left"

       } || arguments);


     N21.Base.ReportParamForm.superclass.initComponent.apply(this, arguments);
  }


  ,run_report:function() {
      if (this.getForm().isValid()) {
        var fv = this.getForm().getValues();
        var paramQS = Ext.urlEncode(fv);
        var w = window.open(CFG_REPORTSERVER_URL+'?'+_n21["REQUEST_PARAM_REPORT"]+'='+this.reportCode+'&'+_n21["REQUEST_PARAM_ACTION"]+'='+_n21["REQUEST_PARAM_REP_ACTION_RUN"]+'&'+paramQS, this.reportCode, 'width=680,height=500,resizable=yes,menubar=yes,scrolling=yes,scrollbars=yes,adress=yes');
        w.focus();
      }
   }


});
