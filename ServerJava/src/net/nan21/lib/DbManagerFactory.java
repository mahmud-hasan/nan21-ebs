package net.nan21.lib;

import java.sql.SQLException;

import net.nan21.lib.settings.Settings;

import oracle.jdbc.driver.OracleConnection;

public class DbManagerFactory {

	
	/**
	 * In case of using state-full database connections we need a list of connections, one per user interface tab.
	 * Each tab in user interface acts as a thread inside the same server session and might have its own database state. 
	 * Also a long running transaction initiated in one user interface tab must allow work in others,
	 * thus inside of the user session there are children database sessions which must work independently in the same time. 
	 * Each user interface must know the associated database session, so the request must send its own identification key.      
	 */
	//private Map<String, OracleConnection> dbConnMap;
	
	
	public static DbManager getDbManager(HttpSession session, HttpRequest request) throws Exception{
		DbManager dbm = null;
		if(!Settings.getInstance().isStatefulDbConn()) {
			dbm = new DbManager(Settings.getInstance().getDbInstance("").getJndiName());
		} else {	
			OracleConnection dbConn = session.getDbConn(resolveConnectionKey(null)); 
			if ( dbConn != null ) {
				dbm = new DbManager(dbConn);				
			} else {
				dbm = new DbManager(Settings.getInstance().getDbInstance("").getJndiName());
			}
		}		
		return dbm;
	}
	
	public static String resolveConnectionKey(String connKey) {		
		return (connKey!=null && !connKey.equals(""))?connKey:"__DEFAULT__";
	}
	
	
	public static void cleanup(HttpSession session, HttpRequest request, DbManager dbm ) {
		if(!Settings.getInstance().isStatefulDbConn()) {
			if (dbm != null) {
				try {									 		
					dbm.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}		
			}
		} else {	
			if (dbm != null) {
				try {	
					session.addDbConn(dbm.getDbConn(), resolveConnectionKey(null) );
					dbm.releaseConnection();
				}catch (Exception e) {
					e.printStackTrace();
				}		
			}
		}		
	}
	
	
	
	
	
}
