package net.nan21.ebs.service;

import java.io.IOException;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.nan21.lib.DbManager;

public class ReportServlet extends HttpServlet {

	private final Properties settings = new Properties();
	
	
	public void init(){
		 this.settings.setProperty("DbJndiName", "jdbc/nan21ebs");
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		DbManager dbm = null;
		
		String sourcePath = "D:/work/php/n21eBusinessSuite/Reports/standard";
		String sourceFileName = "D:/work/php/n21eBusinessSuite/Reports/standard/REP0001.jrxml";
		String compilePath = "D:/work/php/n21eBusinessSuite/Reports/standard";
		String jasperClassPath = "D:/workenv/sdk/reporting/iReport/3.0.0/lib/";
		String cachePath = "D:/work/php/n21eBusinessSuite/Reports/standard";
		
		String destFile = "D:/work/php/n21eBusinessSuite/Reports/standard/result.pdf";
		Map params = new HashMap();
		params.put("P_INVOICE_ID", new java.lang.Long(request.getParameter("P_INVOICE_ID")) );
		params.put("SUBREPORT_DIR",sourcePath);
		
	 
		try	{					
			dbm = new DbManager(this.settings.getProperty("DbJndiName"));
			ReportGenerator rg = new ReportGenerator(sourceFileName, compilePath, jasperClassPath, cachePath);
			rg.runReport(destFile, params, ReportGenerator.REPORT_TYPE_PDF, (Connection)dbm.getDbConn());
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		
		
		
	}
	
	
	
	
	/*
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		DbManager dbm = null;
		
		Connection connection;
		ServletOutputStream servletOutputStream = response.getOutputStream();
		InputStream reportStream =	getServletConfig().getServletContext().getResourceAsStream("D:/work/php/n21eBusinessSuite/Reports/standard/REP0001.jasper");
		try	{
			
			dbm = new DbManager(this.settings.getProperty("DbJndiName"));
			
			//Class.forName("oracle.jdbc.driver.OracleDriver");
			//connection = DriverManager.getConnection ("jdbc:oracle:thin:@toshiba2:1521:XE?user=NAN21&password=NAN21");
			connection = (Connection)dbm.getDbConn();
			Map<String, Object> params = new HashMap();
			params.put("P_INVOICE_ID", new java.lang.Long(request.getParameter("P_INVOICE_ID")) );
				
		 
			JasperRunManager.runReportToPdfStream(reportStream, servletOutputStream,params , connection);
			connection.close();					
			response.setContentType("application/pdf");
			servletOutputStream.flush();
			servletOutputStream.close();
		} catch (Exception e) {
			// display stack trace in the browser
			//StringWriter stringWriter = new StringWriter();
			//PrintWriter printWriter = new PrintWriter(stringWriter);
			//e.printStackTrace(printWriter);
			e.printStackTrace();
			//response.setContentType("text/plain");
			//response.getOutputStream().print(stringWriter.toString());
		}
	}
	 * */
	
	
	
}
