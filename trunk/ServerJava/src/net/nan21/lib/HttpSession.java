package net.nan21.lib;

import java.util.HashMap;
import java.util.Map;

import oracle.jdbc.driver.OracleConnection;

 

public class HttpSession {

	public static final String MAP_KEY_AUTH_USER = "user";
	public static final String MAP_KEY_DBCONN = "dbConn";
	
 	private javax.servlet.http.HttpSession session; 
 
 	
	public HttpSession(javax.servlet.http.HttpSession session ) {
		this.session = session;
		
		//development back door
		//this.session.setAttribute(MAP_KEY_AUTH_USER, new SessionUser("AMATHE","en")) ;
		
	}
	
	
    public boolean isAuthenticated() {
    	 
    	if (this.session.getAttribute(MAP_KEY_AUTH_USER) != null ) {
    		return true;
    	} else {
    		return false;
    	}
    	 
    }
    
	public Object getAttribute(String p) {
		return this.session.getAttribute(p);
	}

	public void setAttribute(String paramName, Object paramValue) {  
		this.session.setAttribute(paramName, paramValue); 
	}
 
	public String getUserName() {
		return ((SessionUser)this.session.getAttribute(MAP_KEY_AUTH_USER)).getUserName();
	}  
	  
	public String getLanguage() {
		return ((SessionUser)this.session.getAttribute(MAP_KEY_AUTH_USER)).getLanguage();
	}      

 	public void setLanguage(String v) {
 		((SessionUser)this.session.getAttribute(MAP_KEY_AUTH_USER)).setLanguage(v);
	}


	public OracleConnection getDbConn(String key) {
		if (this.session.getAttribute(MAP_KEY_DBCONN) == null ) {
			return null;
		}
		if (key == null || key.equals("") ) {
			key = "__DEFAULT__";
		}
		Map<String, OracleConnection> dbc = (Map<String, OracleConnection>)this.session.getAttribute(MAP_KEY_DBCONN);
		return dbc.get(key);
	}


	public void addDbConn(OracleConnection dbConn, String key) {
		if (this.session.getAttribute(MAP_KEY_DBCONN) == null ) {
			this.session.setAttribute(MAP_KEY_DBCONN, new HashMap<String, OracleConnection>());
		}
		if (key == null || key.equals("") ) {
			key = "__DEFAULT__";
		}
		Map<String, OracleConnection> dbc = (Map<String, OracleConnection>)this.session.getAttribute(MAP_KEY_DBCONN);
		if (!dbc.containsKey(key)) {
			dbc.put(key, dbConn);	
		}
		
	}  
 
	
	
	public SessionUser getUser() {
		return (SessionUser)this.session.getAttribute(MAP_KEY_AUTH_USER);
	}
}
