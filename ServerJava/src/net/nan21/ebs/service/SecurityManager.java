package net.nan21.ebs.service;

import java.sql.SQLException;
import java.util.Properties;
import net.nan21.lib.DbManager;

public class SecurityManager {

	public static boolean authenticateUserFromDb(DbManager dbm, String pUserName, String pUserPswd, String pIp) throws SQLException {
 
			
			String sql = "BEGIN pk_session.do_user_login(:usr, :pswd, :ip); END;";
	        Properties params = new Properties();	        
	        params.setProperty("usr", pUserName);
	        params.setProperty("pswd", pUserPswd);
	        params.setProperty("ip", pIp);
	        dbm.executeStatement(sql, params);	        
	        return true;
	       
	}
	
	public static boolean authenticateUserFromLdap(String pUserName, String pUserPswd) {
		return true;
	}
		
	public static boolean confirmAuthenticatedRequest() {
		return true;
	}
	
}
