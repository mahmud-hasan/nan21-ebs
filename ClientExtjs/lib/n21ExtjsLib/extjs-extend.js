

Ext.form.TextField.prototype.caseRestriction = 'Mixed'; //Upper, Lower

Ext.form.TextField.prototype.getValue = function() {
   var v = Ext.form.TextField.superclass.getValue.call(this);
   if (!Ext.isEmpty(v)) {
     if (this.caseRestriction == "Upper" ) {
       return v.toUpperCase();
     }else if (this.caseRestriction == "Lower" ) {
       return v.toLowerCase();
     }else
      return v;
   } else
     return v;

}

Ext.data.HttpProxy.prototype.loadResponse = function(o, success, response) {
  delete this.activeRequest;
  if(!success){
      this.fireEvent("loadexception", this, o, response);
      o.request.callback.call(o.request.scope, null, o.request.arg, false);
      return;
  }
  var result;
  try {
      result = o.reader.read(response);
  }catch(e){
      this.fireEvent("loadexception", this, o, response, e);
      o.request.callback.call(o.request.scope, null, o.request.arg, false);
      return;
  }
  //alert('loadResponse before fire event load ');
  this.fireEvent("load", this, o, o.request.arg, result, response);  //nan21
  //alert('loadResponse after fire event load ');
  o.request.callback.call(o.request.scope, result, o.request.arg, true);
 // alert('loadResponse after callback ');

}