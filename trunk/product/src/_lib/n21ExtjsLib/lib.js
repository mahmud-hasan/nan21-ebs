
/*
Object.prototype.hasOwnProperty = function(prop) {
  for (var k in this) {
    alert(k);

  }

}
  */

function getWindowInnerHeight() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return myHeight;
}

function getWindowInnerWidth() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return myWidth;
}

function find_window(p_name) {
  return Ext.getCmp(p_name);
}
function show_window(p_name) {
  return Ext.getCmp(p_name).show();
}
function hide_window(p_name) {
  return Ext.getCmp(p_name).hide();
}
function close_window(p_name) {
  return Ext.getCmp(p_name).close();
}

function show_message(p_message, p_type) {
  Ext.Msg.alert(p_type||'Error',p_message );
}


