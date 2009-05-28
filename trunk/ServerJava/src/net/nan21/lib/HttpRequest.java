package net.nan21.lib;

import javax.servlet.http.HttpServletRequest;
 
public class HttpRequest {

	public static final String REQUEST_PARAM_ACTION = "_p_action";
	public static final String REQUEST_PARAM_CUSTOM_ACTION = "_p_custom_action";
	public static final String REQUEST_PARAM_FETCH_DATA_FORMAT = "_p_fetch_format";
	public static final String REQUEST_PARAM_EXPORT_DATA_FORMAT = "_p_export_format";
	public static final String REQUEST_PARAM_DC = "_p_dc";
	public static final String REQUEST_PARAM_REPORT = "_p_report";
	public static final String REQUEST_PARAM_TRANSPORT = "_p_transport";
		
	public static final String REQUEST_PARAM_LOGIN_USR = "_p_usr";
	public static final String REQUEST_PARAM_LOGIN_PSW = "_p_psw";
	public static final String REQUEST_PARAM_LOGIN_SID = "_p_sid";	
	
	public static final String REQUEST_PARAM_FETCH_SORT = "_p_fetch_sort";
	public static final String REQUEST_PARAM_FETCH_SENSE = "_p_fetch_sense";
	public static final String REQUEST_PARAM_FETCH_START = "_p_fetch_start";
	public static final String REQUEST_PARAM_FETCH_SIZE = "_p_fetch_size";		
	
	public static final String REQUEST_PARAM_EXPORT_COL_NAMES    = "_p_export_col_names";
	public static final String REQUEST_PARAM_EXPORT_COL_WIDTHS   = "_p_export_col_widths";
	public static final String REQUEST_PARAM_EXPORT_GROUPBY      = "_p_export_groupby";
	public static final String REQUEST_PARAM_PRINT_LAYOUT        = "_p_print_layout";
	
	//data-control actions  
	public static final String ACTION_FETCH = "fetch";
	public static final String ACTION_FETCH_RECORD = "fetchRecord";
	public static final String ACTION_INSERT = "insert";
	public static final String ACTION_UPDATE = "update";
	public static final String ACTION_DELETE = "delete";
	public static final String ACTION_EXPORT = "export";
	public static final String ACTION_CUSTOM = "custom";
	public static final String ACTION_LOGIN = "login";
	public static final String ACTION_LOGOUT = "logout";
	//public static final String ACTION_RPC = "call_proc";
	public static final String ACTION_INIT_RECORD = "initRecord";

	//report actions
	public static final String REP_ACTION_RUN = "show";
	
	
	
	
	public static final String DATA_FORMAT_HTML = "html";
	public static final String DATA_FORMAT_CSV = "csv";
	public static final String DATA_FORMAT_PDF = "pdf";
	public static final String DATA_FORMAT_XML = "xml";
	public static final String DATA_FORMAT_JSON = "json";
	
	public static final String PRINT_LAYOUT_H = "Landscape";
	public static final String PRINT_LAYOUT_V = "Portrait";
	
  
	
	private String error;
	//private String clientType;
	private HttpServletRequest httpServletRequest;

	public HttpRequest(HttpServletRequest r) {
		this.httpServletRequest = r;	
	}

	 
	public boolean isAuthenticationRequest() {
		if (  this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION)!= null && 
			  this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION).equals(ACTION_LOGIN)) {
			return true;
		} else {
			return false;
		}
	}

	public boolean isLogoutRequest() {
		if (  this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION)!= null && 
			  ( this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION).equals(ACTION_LOGOUT)
				||
				(
					this.httpServletRequest.getParameter(HttpRequest.REQUEST_PARAM_CUSTOM_ACTION) != null &&	
					this.httpServletRequest.getParameter(HttpRequest.REQUEST_PARAM_CUSTOM_ACTION).equals(HttpRequest.ACTION_LOGOUT))
				)
			  ) {
			return true;
		} else {
			return false;
		}
	}	
	
	public boolean isReportRequest() {
		if (  this.httpServletRequest.getParameter(REQUEST_PARAM_REPORT)!= null &&
			  this.getNParam(REQUEST_PARAM_ACTION).equals(REP_ACTION_RUN)) {
			return true;
		} else {
			return false;
		}
	}
	
	public boolean isValidReportRequest() {
		if ( this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT)== null 
		   || (
			 this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT).equals(DATA_FORMAT_PDF)	   
			||this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT).equals(DATA_FORMAT_XML) 
		   ) 
		    ) {
			return true;
		} else {
			this.error = "Wrong report call. Invalid output format.";
			return false;
		}
	}	
	
	public boolean isDcRequest() {
		if (  this.httpServletRequest.getParameter(REQUEST_PARAM_DC)!= null ) {
			return true;
		} else {
			return false;
		}
	}
	
	
	public boolean isValid() {
		if (this.isDcRequest()) {
			return this.isValidDcRequest();
		} else if (this.isReportRequest()) {
			return true;
		} else if (this.isAuthenticationRequest()) {
			return this.isValidAuthenticationRequest();
		} else if (this.isLogoutRequest() ){
			return true;
		} else {
			return false;
		}	
	}
	
	
	
	
	public boolean isValidAuthenticationRequest() {
		if ( this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION).equals(ACTION_LOGIN) 
		&& this.httpServletRequest.getParameter(REQUEST_PARAM_LOGIN_USR) != null
		&& this.httpServletRequest.getParameter(REQUEST_PARAM_LOGIN_PSW) != null
		&& this.httpServletRequest.getParameter(REQUEST_PARAM_LOGIN_SID) != null ) {
			return true;
		} else {
			this.error = "Wrong authentication attempt. Provide all fields required for authentication";
			return false;
		}
	}	
	
  
	
	private boolean isValidDcRequest() {
		// Action specified ?
		if (this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION) ==null ) {
			this.error = "Missing parameter: "+REQUEST_PARAM_ACTION;
			return false;
		}else {
			String p = this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION);
			if (!p.equals(ACTION_FETCH) &&
					!p.equals(ACTION_FETCH_RECORD) &&
					!p.equals(ACTION_INSERT) &&
					!p.equals(ACTION_UPDATE) &&
					!p.equals(ACTION_DELETE) &&
					!p.equals(ACTION_EXPORT) &&
					!p.equals(ACTION_CUSTOM) &&
					//!p.equals( ACTION_RPC) &&
					!p.equals(ACTION_INIT_RECORD) &&			
					!p.equals(ACTION_LOGIN)
			) {
				this.error = "Wrong value for parameter: "+REQUEST_PARAM_ACTION;
				return false;
			}
		}

		// DataControl specified?
		if (this.httpServletRequest.getParameter(REQUEST_PARAM_DC) == null  ) {
			this.error = "Missing parameter: "+REQUEST_PARAM_DC;
			return false;
		}

		// Request type: fetch data
		if (this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION).equals(ACTION_FETCH)
		|| this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION).equals(ACTION_FETCH_RECORD)) {
			if (this.httpServletRequest.getParameter(REQUEST_PARAM_FETCH_DATA_FORMAT) == null  ) {
				this.error = "Missing parameter: "+REQUEST_PARAM_FETCH_DATA_FORMAT;
				return false;
			}
			if (!this.httpServletRequest.getParameter(REQUEST_PARAM_FETCH_DATA_FORMAT).equals(DATA_FORMAT_JSON)
				&& !this.httpServletRequest.getParameter(REQUEST_PARAM_FETCH_DATA_FORMAT).equals(DATA_FORMAT_XML) ) {
				this.error = "Wrong value for parameter: "+REQUEST_PARAM_FETCH_DATA_FORMAT;
				return false;
			}
		}

		// Request type: export data
		if (this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION).equals(ACTION_EXPORT) ) {
			if (this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT) == null ) {
				this.error = "Missing parameter: "+REQUEST_PARAM_EXPORT_DATA_FORMAT;
				return false;
			}
			if (!this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT).equals(DATA_FORMAT_CSV)
			&& !this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT).equals(DATA_FORMAT_HTML)
			&& !this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT).equals(DATA_FORMAT_PDF)
			&& !this.httpServletRequest.getParameter(REQUEST_PARAM_EXPORT_DATA_FORMAT).equals(DATA_FORMAT_XML)
			) {
				this.error = "Wrong value for parameter: "+REQUEST_PARAM_EXPORT_DATA_FORMAT;
				return false;
			}
		}

		return true;
	}
			
	public String getAction() {
		return this.httpServletRequest.getParameter(REQUEST_PARAM_ACTION);
	}
	
	public String getDcName() {
		return this.httpServletRequest.getParameter(REQUEST_PARAM_DC);
	}
	
	public String getReportCode() {
		return this.httpServletRequest.getParameter(REQUEST_PARAM_REPORT);
	}
	
	public String getError() {
		return this.error;
	}

	public String toString() {				
		return this.httpServletRequest.toString();
	}

	public String getParam(String paramName) {
		return this.httpServletRequest.getParameter(paramName);
	}
	
	public String getNParam(String paramName) {
		if (this.httpServletRequest.getParameter(paramName) == null) {
			return "";
		} else {
		  return this.httpServletRequest.getParameter(paramName);
		}
	}
	
	
	public String getParameter(String paramName) {
		return this.httpServletRequest.getParameter(paramName);
	}
	
	public String getParamAsYesNo(String paramName) {
		String p = 	this.httpServletRequest.getParameter(paramName);
		if ( p != null ) {
			if (p.equals("on") ||p.equalsIgnoreCase("y") ||p.equalsIgnoreCase("true") ||p.equals("1") ) {
				return "Y";
			}
			else {
				return "N";
			}
		} else return "N";	
	}

	public HttpServletRequest getHttpServletRequest() {
		return httpServletRequest;
	}
		
}
 
