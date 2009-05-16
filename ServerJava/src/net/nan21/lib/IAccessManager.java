package net.nan21.lib;

import java.sql.Connection;

public interface IAccessManager {

	public boolean authenticateCredentials(String userName, String userPassword, String userIp) throws Exception;
	public boolean authenticateToken(String token, String userIp) throws Exception;	
	public boolean confirmAuthentication() throws Exception; 
		
	public void setDbConn(Connection dbConn);
	public boolean isDcActionGranted(String dcCode, String actionName, SessionUser sessionUser);
	
	
	
	
}
