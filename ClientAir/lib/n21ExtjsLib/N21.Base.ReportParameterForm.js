Ext.ns('N21.Base');

N21.Base.ReportParamForm = Ext.extend(Ext.FormPanel, {
  
   ,initComponent:function() {
     Ext.apply(this, arguments);
     N21.Base.ReportParamForm.superclass.initComponent.apply(this, arguments);
  }
  



});
Ext.reg('N21ReportParamForm', N21.Base.ReportParamForm);