package net.nan21.lib.servlet;

import java.io.IOException;
import java.net.URLEncoder;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import net.nan21.lib.*;
import net.nan21.lib.dc.IReport;
import net.nan21.lib.settings.*;

public class ReportServlet extends HttpServlet {

	static final long serialVersionUID = -1;
	private static Logger logger = Logger.getLogger(ReportServlet.class);
	private Settings settings = null;
	private IAccessManager accessManager = null;

	public void init() {
		StopWatch sw = new StopWatch();
		sw.start();
		if (logger.isInfoEnabled()) {
			logger.info("Initializing ReportServlet.");
		}
		String cfgFilePath = getInitParameter("configFilesPath");
		String rootPath = getServletContext().getRealPath("/");
		
		if (cfgFilePath==null || cfgFilePath.equals("")) {
			cfgFilePath = rootPath+"/WEB-INF/classes";			 
		}


		try {
			SettingsManager.loadSetting(rootPath, cfgFilePath);
			this.settings = Settings.getInstance();
			accessManager = (IAccessManager) Class.forName(
					this.settings.getSecurityManagerClassName()).newInstance();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			sw.stop();
			logger.info("ReportServlet initialized in " + sw.getTime() + " ms");
		}
	}

	// private boolean authAction;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		doGet(request, response);
	}

	public void doGet(HttpServletRequest httpRequest,
			HttpServletResponse response) throws IOException {
		StopWatch sw = new StopWatch();
		sw.start();
		if (logger.isDebugEnabled()) {
			logger.debug(" *** Request: " + httpRequest.getQueryString());
		}
		DbManager dbm = null;
		HttpRequest request = null;
		HttpSession session = null;

		try {

			request = new HttpRequest(httpRequest);
			session = new HttpSession(httpRequest.getSession(true));

			if (!request.isValid()) {
				this.sendError(response, HttpServletResponse.SC_BAD_REQUEST,
						request.getError());
			}
			if (!session.isAuthenticated()
					|| !accessManager.confirmAuthentication()) {

				sendError(response, HttpServletResponse.SC_UNAUTHORIZED,
						"Not Authorized");
				return;

			}

			dbm = DbManagerFactory.getDbManager(session, request);

			accessManager.setDbConn(dbm.getDbConn());

			String sql = "ALTER SESSION SET NLS_DATE_FORMAT='DD.MM.YYYY'";
			dbm.executeStatement(sql);
			doReport(request, response, session, dbm);
			
		} catch (Exception e) {
			e.printStackTrace();
			sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					URLEncoder.encode(e.getMessage(), "UTF-8"));
		} finally {
			logger.debug(" -> Closing DbManager");
			DbManagerFactory.cleanup(session, request, dbm);
			sw.stop();
			logger.info("Report processed in " + sw.getTime() + " ms");
		}
	}

	private void doReport(HttpRequest request, HttpServletResponse response,
			HttpSession session, DbManager dbm) throws Exception {
		IReport r = (IReport) Class.forName(
				"net.nan21.ebs.rep." + request.getReportCode() ).newInstance();
		r.init(request, response, session, dbm);
		r.run();
	}

	private void sendError(HttpServletResponse response, int errorCode,
			String message) throws IOException {
		response.setStatus(errorCode);
		response.getWriter().write(message);
		response.flushBuffer();
	}


}
