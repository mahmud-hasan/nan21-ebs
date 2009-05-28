
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

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function  buildBaseUrlFetch(pDc, pFormat) {
  var baseUrlCfg = {};
  baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_FETCH"];
  baseUrlCfg[_n21["REQUEST_PARAM_FETCH_DATA_FORMAT"]] = pFormat;
  baseUrlCfg[_n21["REQUEST_PARAM_DC"]] = pDc;
  return  buildUrl(baseUrlCfg);
}

function  buildBaseUrlAction(pDc, pActionName) {
  var baseUrlCfg = {};

  baseUrlCfg[_n21["REQUEST_PARAM_DC"]] = pDc;
  baseUrlCfg[_n21["REQUEST_PARAM_ACTION"]] = _n21["REQUEST_PARAM_ACTION_CUSTOM"];
  baseUrlCfg[_n21["REQUEST_PARAM_CUSTOM_ACTION"]] = pActionName;
  return  buildUrl(baseUrlCfg);
}


function buildUrl(o) {
  var url = CFG_BACKENDSERVER_URL+"?";
  var i=0;
  for(var p in o ) {
    url += (i>0)? "&":"";
    url += p+"="+o[p];
    i++;
  }
  //alert(url);
  return url;
}

/**
 *  Decode a string which has been urlencoded
 */
function urldecode ( str ) {
    if (str==undefined || str == null ) {
       return "";
    } else {
      var ret = str;
      try{
        ret = str.replace(/\+/g, "%20");
        ret = decodeURIComponent(ret);
        ret = ret.toString();
        return ret;
      }
      catch(e) {
        alert('urldecode of <'+str+'> failed: '+e.message);
        return str;
      }
    }

}



// *******************************************   built-ins ******************************************************************

NBS_DC = function() {}
NBS_UTL = function() {}


  NBS_UTL.urlDecode = function( str ) {
    if (str==undefined || str == null ) {
       return "";
    } else {
      var ret = str;
      try{
        ret = str.replace(/\+/g, "%20");
        ret = decodeURIComponent(ret);
        ret = ret.toString();
        return ret;
      }
      catch(e) {
        alert('urldecode of <'+str+'> failed: '+e.message);
        return str;
      }
    }

  }




  NBS_DC.clearFields = function( dc, fldNames ) {
     var len = fldNames.length;
      for (var i=0; i<len; i++ ) {
         dc.setFieldValue(fldNames[i],"");
      }
  }


  NBS_DC.clearFieldsExcept = function( dc, fldNames ) {
    var len = dc.fields.keys.length;
    for (var i=0; i<len; i++ ) {
      if (fldNames.indexOf(dc.fields.keys[i]) < 0) {
         try {
           dc.setFieldValue(dc.fields.keys[i],"");
         }catch(e) {
            alert('Cannot clear field <'+dc.fields.keys[i]+'>. Reason: '+e.message);
         }
      }
    }
  }






















