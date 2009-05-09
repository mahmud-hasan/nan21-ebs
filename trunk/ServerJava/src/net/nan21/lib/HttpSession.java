package net.nan21.lib;

 

public class HttpSession {

	public static final String MAP_KEY_AUTH_USER = "user";
 	 
 	private javax.servlet.http.HttpSession session; 
 
	public HttpSession(javax.servlet.http.HttpSession session ) {
		this.session = session;
	}
	
	
    public boolean isAuthenticated() {
    	SessionUser user =  new SessionUser("AMATHE","en");
    	 
		this.session.setAttribute(HttpSession.MAP_KEY_AUTH_USER, user);
    	return true;
    	/*
    	if (this.session.getAttribute(MAP_KEY_AUTH_USER) != null ) {
    		return true;
    	} else {
    		return false;
    	}
    	*/    	
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
 
}
