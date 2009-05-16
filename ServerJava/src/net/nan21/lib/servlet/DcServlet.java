package net.nan21.lib.servlet;
 
 
import java.io.IOException;
 
import java.net.URLEncoder;
import java.sql.SQLException;
  
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
 
 
import net.nan21.lib.*;
import net.nan21.lib.settings.*;
 

public class DcServlet extends HttpServlet{

	static final long serialVersionUID = -1;
	private static Logger logger = Logger.getLogger(DcServlet.class); 
		 
	private boolean doPrepareDbSession = true;
	private boolean doLoadUserPreferences = true;
	private boolean useCustomAccessRightCheck = false;
	//private String customAccesRightCheck = "";
	private Settings settings = null;
	private IAccessManager accessManager = null;
	
	public void init(){	
		 StopWatch sw = new StopWatch();
		 sw.start();
		 if (logger.isInfoEnabled()) {
	    	  logger.info("Initializing DcServlet.");
	      }
		 String cfgFilePath = getInitParameter("n21ebsConfigFilesPath");
		 if (cfgFilePath==null || cfgFilePath.equals("")) {
			 cfgFilePath = getServletContext().getRealPath("/");
		 }
		 logger.info("Looking for configuration files in: "+cfgFilePath);
		 logger.info("Loading settings from applicationConfig.xml ... ");
		 SettingsManager.loadSettings(cfgFilePath+"/applicationConfig.xml");
		 logger.info("Loading settings from customDataControls.xml ... ");
		 SettingsManager.loadCustomDc(cfgFilePath+"/customDataControls.xml");		 
		 this.settings = Settings.getInstance();
		 
		 try {
			 this.settings.validate();  
			accessManager = (IAccessManager)Class.forName(this.settings.getSecurityManagerClassName()).newInstance();			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			sw.stop();
			logger.info("DcServlet initialized in "+sw.getTime() + " ms");
		}
	}
	
	
	//private boolean authAction;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws IOException {
		doGet(request, response);
	}
	
	public void doGet (HttpServletRequest httpRequest, HttpServletResponse response) throws IOException {  
		StopWatch sw = new StopWatch();
		sw.start();
		if (logger.isDebugEnabled()) {
			logger.debug(" *** Request: "+httpRequest.getQueryString());
		}
		DbManager dbm = null;
		try {  
			 						
			HttpRequest request = new HttpRequest(httpRequest);
			HttpSession session = new HttpSession(httpRequest.getSession(true));	
 				 	 
			// =============================== validate=============================== 
			if (!session.isAuthenticated() ) {  
			  	if (!request.isAuthenticationRequest() ) {
			  		sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Not Authorized");		  	
			  	} else {
			  		// we'll do the authentication a little bit later ...  
			  		// authAction = true;		
			  	}  	
			  } else {
			  	 //Double check that current request is coming from session owner according to specific rules.
			  	 if (!accessManager.confirmAuthentication()) {
			  		this.sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Not Authorized"); 
			  	 }
			  }  
	 
			  // Is a valid request ?
			  if (!request.isValid()) {
				  this.sendError(response, HttpServletResponse.SC_BAD_REQUEST, request.getError());  	  
			  }		
			
			// =============================== validate===============================
			  
				dbm = new DbManager(this.settings.getDbInstance("").getJndiName());
				accessManager.setDbConn(dbm.getDbConn());
								
				if (request.isAuthenticationRequest() ) {
					
					String pUserName = request.getParam(HttpRequest.REQUEST_PARAM_LOGIN_USR);
					String pUserPswd = request.getParam(HttpRequest.REQUEST_PARAM_LOGIN_PSW);
					
					 
					if (!accessManager.authenticateCredentials( pUserName, pUserPswd, request.getHttpServletRequest().getRemoteAddr())) {
						throw new Exception("AUTH_INVALID_CREDENTIALS");
					}

					SessionUser user =  new SessionUser(pUserName,"en");
			 
					session.setAttribute(HttpSession.MAP_KEY_AUTH_USER, user);
										
					response.setStatus(HttpServletResponse.SC_OK);
					response.setContentType("text/html");
					response.getWriter().print("{ success: true}");
					 
				} else {
				 
					if (this.doPrepareDbSession) {  
						SessionUser sUser = (SessionUser)session.getAttribute(HttpSession.MAP_KEY_AUTH_USER);
						
						String sql = "BEGIN pk_session.setUser('"+sUser.getUserName()+"'); pk_session.setLang('"+sUser.getLanguage()+"'); END;";
						dbm.executeProcedure(sql, null, null);
						
						sql = "ALTER SESSION SET NLS_DATE_FORMAT='DD.MM.YYYY'";
						dbm.executeStatement(sql);
					
					}
					if (this.doLoadUserPreferences ) { }
					this.processRequest(request, response,session,dbm);		 
				}

		}catch (Exception e) {
			e.printStackTrace();
			sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, URLEncoder.encode(e.getMessage(), "UTF-8")); 
		}finally {
			if (dbm != null) {
				try {
					 logger.debug(" -> Closing DbManager");					 			
					dbm.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}		
			}
			sw.stop();
			logger.info("Request processed in "+sw.getTime() + " ms");
		}
		
	}
	
 

	private void processRequest(
			   HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm			
			) throws Exception {
		String dcName = request.getDcName();		
		if ( dcName.startsWith("LOV")) {
			processRequestLov(request, response, session, dbm);
		} else {
			processRequestDc(request, response, session, dbm);
		}
	}
	
 
	private void processRequestDc(
	   HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm
	
	) throws Exception {
 		String action = request.getAction();
		String dcName = request.getDcName();		
		
		if (logger.isInfoEnabled()) {
			logger.info("Processing datacontrol <"+dcName+">, action <"+action+"> ... ");
		}
		
		if ( dcName != null ) {
			IDataControl frm = null;
			try {
								 
				frm = DataControlFactory.getDataControl(dcName);
				 
			    frm.init(request, response, session, dbm);
			 
				if (action.equals(HttpRequest.ACTION_FETCH) ) {
					if (!this.useCustomAccessRightCheck ) {
						//this.checkDCPermission(HttpRequest.ACTION_FETCH, dcName);
					}				
					frm.doQuery();
				}else if(action.equals(HttpRequest.ACTION_INSERT ) ) {
					if (!this.useCustomAccessRightCheck) {
						//this.checkDCPermission(HttpRequest.ACTION_INSERT, dcName);
					}
					frm.doInsert();
				}else if(action.equals(HttpRequest.ACTION_UPDATE)) {
					if (!this.useCustomAccessRightCheck) {
						//this.checkDCPermission(HttpRequest.ACTION_UPDATE, dcName);
					}
					frm.doUpdate();
				}else if(action.equals(HttpRequest.ACTION_FETCH_RECORD) ) {
					frm.fetchRecord();
				}else if(action.equals(HttpRequest.ACTION_DELETE) ) {
					if ( !this.useCustomAccessRightCheck) {
						//this.checkDCPermission( HttpRequest.ACTION_DELETE, dcName);
					}
					frm.doDelete();
				}else if(action.equals(HttpRequest.ACTION_EXPORT ) ) {				
					frm.doExport();
				}else if(action.equals(HttpRequest.ACTION_INIT_RECORD ) ) {
					frm.initNewRecord();
				}else if(action.equals(HttpRequest.ACTION_CUSTOM) ) {
					frm.doCustomAction(( request.getParam("_p_custom_action") != null )?request.getParam("_p_custom_action"):"");
				}
			 
			}catch(ClassNotFoundException e ) {
				sendError(response, HttpServletResponse.SC_NOT_FOUND, "INVALID_DATACONTROL");
			}			
		}
	}

	private void processRequestLov(
	   HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm
	
	) throws Exception {
 		String action = request.getAction();
		String dcName = request.getDcName();		
		 	 		 
		if ( dcName != null ) {
			IDataControlLov frm = null;
			try {
			 frm = (IDataControlLov) Class.forName("net.nan21.ebs.dc."+dcName).newInstance();
			 			
			 frm.init(request, response, session, dbm);
			 
				if (action.equals(HttpRequest.ACTION_FETCH) ) {
					if (!this.useCustomAccessRightCheck ) {
						//this.checkDCPermission(HttpRequest.ACTION_FETCH, dcName);
					}				
					frm.doQuery();
				} 			 
			}catch(ClassNotFoundException e ) {
				sendError(response, HttpServletResponse.SC_NOT_FOUND, "INVALID_DATACONTROL");
			}			
		}
	}
	
	
	private void sendError(HttpServletResponse response, int errorCode, String message) throws IOException {
		response.setStatus(errorCode);
		response.getWriter().write(message);
		response.flushBuffer();
	}
	
	
	
}
