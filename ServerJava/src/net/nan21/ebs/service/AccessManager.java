package net.nan21.ebs.service;

import java.sql.CallableStatement;
import java.sql.Connection;
import net.nan21.lib.SessionUser;
import net.nan21.lib.IAccessManager;

public class AccessManager implements IAccessManager{

	private Connection dbConn = null;
	
	public boolean authenticateCredentials(String userName, String userPassword, String userIp) throws Exception {
	    CallableStatement stmt = null;
		String sql = "BEGIN pk_session.do_user_login(?, ?, ?); END;";
        try {
			stmt = dbConn.prepareCall(sql);
			stmt.setString("p_username", userName);
			stmt.setString("p_password", userPassword);
			stmt.setString("p_ip_adress", userIp);
			stmt.execute();
		} finally {
			 if (stmt != null) {
				 stmt.close();
			 }
		}
        return true;	       
	}
	
	public boolean authenticateToken(String token, String userIp) throws Exception {return false;};	
	public boolean confirmAuthentication() throws Exception {return true;}

	public void setDbConn(Connection dbConn) {
		this.dbConn = dbConn;
	}; 
	
	public boolean isDcActionGranted(String dcCode, String actionName, SessionUser sessionUser) {
		return true;
	}
	
}
