package net.nan21.lib;

import java.io.File;
import java.io.OutputStream;
import java.io.StringReader;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;

import net.nan21.lib.dc.FieldDef;
import net.nan21.lib.dc.IReport;
import net.nan21.lib.dc.ReportQuery;
import net.nan21.lib.settings.Settings;

import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.MimeConstants;
import org.apache.log4j.Logger;

public abstract class AbstractReport implements IReport{
	
    protected String dataFormat = HttpRequest.DATA_FORMAT_XML;      
    protected HttpRequest request;
    protected HttpServletResponse response;
    protected HttpSession session;    
    protected DbManager dbm;  
	protected boolean isInitialised =  false;
    protected SessionUser user = null;   
    protected String repCode = null;
    
    protected Map<String, FieldDef> paramDef = new HashMap<String, FieldDef>();
    protected Map<String, String> paramVal = new HashMap<String, String>(); 
    protected Map<String, ReportQuery> queries = new HashMap<String, ReportQuery>();
    
    protected String[] queryExecOrder = {};
    
	private static Logger logger = Logger.getLogger(AbstractDataControl.class);
	
	protected StringBuffer result = null;

    public void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    	this.request = request;
		this.response = response;
		this.session = session;
		this.dbm = dbm;
		
		this.user = (SessionUser)this.session.getAttribute(HttpSession.MAP_KEY_AUTH_USER);
		
		// request parameters should have been validated until now, no need to check for nulls
		this.setRepCode(this.request.getParam(HttpRequest.REQUEST_PARAM_REPORT));	 
		if (this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_DATA_FORMAT) != null) {
			this.setDataFormat(this.request.getNParam(HttpRequest.REQUEST_PARAM_EXPORT_DATA_FORMAT));
		}
				
		isInitialised = true;
    }

	public String getDataFormat() {
		return dataFormat;
	}

	public void setDataFormat(String dataFormat) {
		this.dataFormat = dataFormat;
	}

	public String getRepCode() {
		return repCode;
	}

	public void setRepCode(String repCode) {
		this.repCode = repCode;
	}
      
	
	private void preRun() {
		//read parameter values
		Iterator<String> it = this.paramDef.keySet().iterator();
		while(it.hasNext()) {
			String p = it.next();
			this.paramVal.put(p, this.request.getNParam(p)); 
		}
		
	}
	
    private void processQuery(ReportQuery query, String parentQueryName, Map<String, String> parentQueryCurrentRow) throws Exception {
    	
    	//TODO:find a better solution for the param/ parentQueryCurrentRow fields merge for the executeQuery
    	Map <String, String> qParams = new HashMap<String, String>();
    	Iterator<String> pit = this.paramVal.keySet().iterator();
    	while (pit.hasNext()) {
    		String p = pit.next();
    		qParams.put(p, this.paramVal.get(p));
    	}
    	if (parentQueryCurrentRow != null) {
    		pit = parentQueryCurrentRow.keySet().iterator();
        	while (pit.hasNext()) {
        		String p = pit.next();
        		qParams.put(parentQueryName+"#"+p, parentQueryCurrentRow.get(p));
        	}
    	}
    	
    	
    	List<Map<String, String>> res = dbm.executeQuery(query.getSql(), qParams);
    	Iterator<Map<String, String>> it = res.iterator();
    	result.append("<"+query.getName()+"_list>");
    	while(it.hasNext()) {
    		result.append("<"+query.getName()+">");
    		Map<String, String> row = it.next();
    		Iterator<String> rit = row.keySet().iterator();
    		while (rit.hasNext()) {
    			String column = rit.next();
    			result.append("<"+column+">"+row.get(column)+"</"+column+">");
    		}
    		if (query.hasChildQueries()) {
    			for (int i=0; i< query.getChildQueryNames().length ; i++) {
    				processQuery(this.queries.get(query.getChildQueryNames()[i]), query.getName(), row);
    			}
    		}
    		result.append("</"+query.getName()+">");
    	}
    	result.append("</"+query.getName()+"_list>");
    }
    
    
    
	public final void run() throws Exception {		
		preRun();
		result = new StringBuffer();
		SimpleDateFormat sdf = new SimpleDateFormat(this.session.getUser().getJDateFormat());
		result.append("<Report code=\""+this.repCode+"\" user=\""+this.session.getUserName()+"\" date=\""+sdf.format(new Date())+"\">");
		
		// parameters
		Iterator<String> it = this.paramVal.keySet().iterator();
		result.append("<Parameters>");
		while (it.hasNext()) {
			String p= it.next();
			result.append("<"+p+">"+this.paramVal.get(p)+"</"+p+">");
		}
		result.append("</Parameters>");
		
		
		result.append("<Records>");
		int len = this.queryExecOrder.length;
		for(int i=0; i<len; i++) {
			processQuery(this.queries.get(this.queryExecOrder[i]), null , null );
		}
		result.append("</Records>");
		
		
		result.append("</Report>");
		
		
		if (dataFormat.equals(HttpRequest.DATA_FORMAT_XML)) {
			
	    	this.response.setContentType("text/xml");
	    	this.response.setCharacterEncoding("UTF-8");
		    this.response.setHeader("Content-Description", "File Transfer") ;
		    this.response.setHeader("Content-Disposition", "inline; filename=\""+this.repCode+".xml\";") ;
		    this.response.getWriter().print("<?xml version=\"1.0\"?>");
		    this.response.getWriter().print(result.toString());
		    
		} else if (dataFormat.equals(HttpRequest.DATA_FORMAT_HTML)) {
			
	    	this.response.setContentType("text/xml");
	    	this.response.setCharacterEncoding("UTF-8");
		    this.response.setHeader("Content-Description", "File Transfer") ;
		    this.response.setHeader("Content-Disposition", "inline; filename=\""+this.repCode+".xml\";") ;
		    this.response.getWriter().print("<?xml version=\"1.0\"?>");
		   // this.response.getWriter().print("<?xml-stylesheet type=\"text/xsl\" href=\"test.xsl\"?>");
		    this.response.getWriter().print(result.toString());
		    
		} else { // default PDF

	    	//this.response.setContentType("application/octet-stream");
	    	//this.response.setCharacterEncoding("UTF-8");
		    //this.response.setHeader("Content-Description", "File Transfer") ;
		    //this.response.setHeader("Content-Disposition", "inline; filename=\""+this.repCode+".pdf\";") ;
		    //this.response.getWriter().print("<?xml version=\"1.0\"?>");
		    //this.response.getWriter().print(result.toString());
		    try {
		    	  
	            File xsltfile = new File(Settings.getInstance().getPaths().get(Settings.PATH_XSL)+"/dc/"+getRepCode()+".fo");
	            
	            if (logger.isInfoEnabled()) {
	            	logger.info("Creating PDF ...");
	            }

	            FopFactory fopFactory = FopFactory.newInstance();
	            FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
	            OutputStream out = null;
	            out = new java.io.BufferedOutputStream(this.response.getOutputStream());

	            try {

	                Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, foUserAgent, out);

	                // Setup XSLT
	                TransformerFactory factory = TransformerFactory.newInstance();
	                Transformer transformer = factory.newTransformer(new StreamSource(xsltfile));

	                // Set the value of a <param> in the stylesheet
	                transformer.setParameter("versionParam", "2.0");

	                // Setup input for XSLT transformation
	                Source src = new StreamSource(new StringReader(result.toString()));

	                // Resulting SAX events (the generated FO) must be piped through to FOP
	                Result res = new SAXResult(fop.getDefaultHandler());

	                // Start XSLT transformation and FOP processing
	                transformer.transform(src, res);
	            } finally {
	                out.close();
	            }
	             
	        } catch (Exception e) {
	            e.printStackTrace(System.err);	            
	        }
		}

	      
	   
	}
    
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
