package net.nan21.lib;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.StringReader;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Properties;

//JAXP
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.Source;
import javax.xml.transform.Result;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.sax.SAXResult;

//FOP
import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.MimeConstants;



import javax.servlet.http.HttpServletResponse;
 

import oracle.jdbc.OraclePreparedStatement;


public abstract class AbstractDataControl {

	// constants 
	public static final String FLDPROP_NAME = "NAME";
	public static final String FLDPROP_DATA_TYPE = "DATA_TYPE";
	public static final String FLDPROP_REQUIRED = "REQUIRED";
	public static final String FLDPROP_MAXLENGTH = "MAX_LENGTH";
	public static final String FLDPROP_CASE_RESTRICTION = "CASE_RESTRICTION";
		
	public static final String RECORD_XML_ROOT_TAG = "record";
	public static final String RECORD_JSON_ROOT_TAG = "record";
	
	public static final String RECORDS_XML_ROOT_TAG = "records";
	public static final String RECORDS_JSON_ROOT_TAG = "records";
	public static final String TRANSPORT_TAG = "transport";
	
	
	// global properties
	protected boolean isInitialised =  false;
    protected Map<String, FieldDef> fields = new HashMap<String, FieldDef>();
    protected Properties record = new Properties();
    protected List<Properties> records = new ArrayList<Properties>();
    protected Properties recordsSummary = null;
    protected Properties recordPk = new Properties();
    protected String dataFormatExport = HttpRequest.DATA_FORMAT_HTML;
    protected String dataFormatFetch = HttpRequest.DATA_FORMAT_JSON;   
    protected HttpRequest request;
    protected HttpServletResponse response;
    protected HttpSession session;    
    protected DbManager dbm;  
    protected String[] pkFields = {} ;
    protected String[] summaryFields = {};  
    protected String dcCode = null;
    protected SessionUser user = null;
    protected Properties trl = new Properties();;
    // function specific properties
    protected int queryResultStart = 0;
    protected int queryResultSize = 20;
    
    
    
    
    
    protected String[] queryOrderByColumns = new String[1];
    protected String[] queryOrderBySense = new String[1]; 
    protected String queryOrderBy;
    protected Properties queryParams = new Properties();
    protected StringBuffer queryWhere = new StringBuffer();
     
    protected String DATE_FORMAT_DB = "DD.MM.YYYY";
    protected String DATETIME_FORMAT_DB = "DD.MM.YYYY";
    protected String TIME_FORMAT_DB = "DD.MM.YYYY";
    
    protected String dsAlias = "";
    
    protected void init(HttpRequest request, HttpServletResponse response, HttpSession session, DbManager dbm) throws Exception {
    	this.request = request;
		this.response = response;
		this.session = session;
		this.dbm = dbm;
		
		this.user = (SessionUser)this.session.getAttribute(HttpSession.MAP_KEY_AUTH_USER);
		if (this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_DATA_FORMAT) != null) {
		  this.setDataFormatExport(this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_DATA_FORMAT));	
		}		 	
		if (this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_DATA_FORMAT) != null) {
		  this.setDataFormatFetch(this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_DATA_FORMAT));	
		}
		if (this.request.getParam(HttpRequest.REQUEST_PARAM_DC) != null) {
			  this.setDcCode(this.request.getParam(HttpRequest.REQUEST_PARAM_DC));	
			}
		
		// initialize record 
		Iterator<String> it = this.fields.keySet().iterator();		
		while (it.hasNext()) {
			this.record.put(it.next(), "");	 
		}		
		isInitialised = true;
    }
  
  // -------------------- getters / setters ---------------------------------

	public boolean isInitialised() {
		return isInitialised;
	}

	public HttpRequest getRequest() {
		return request;
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public HttpSession getSession() {
		return session;
	}

	public SessionUser getUser() {
		return user;
	}

	public String getDataFormatFetch() {
		return this.dataFormatFetch; 
	}

	public void setDataFormatFetch(String v) throws Exception {
		if (v.equals(HttpRequest.DATA_FORMAT_JSON)
				|| v.equals(HttpRequest.DATA_FORMAT_XML)) {
			this.dataFormatFetch = v;
		} else {
			throw new Exception("INVALID_FETCH_DATA_FORMAT");
		}
	}

	public String getDataFormatExport() {
		return this.dataFormatExport;
	}

	public void setDataFormatExport(String s) {
		this.dataFormatExport = s;
	}

	public String getDcCode() {
		return dcCode;
	}

	public void setDcCode(String dcCode) {
		this.dcCode = dcCode;
	}


  
	// -----------------  write result methods -----------------
	
	
	protected void writeResultDoQuery(String sql) throws Exception{		
		int totalCount = dbm.countQueryResults(sql, this.queryParams);
		if (this.queryResultSize ==-1) {
			this.records = dbm.executeQuery(sql, this.queryParams);
		}else {
			this.records = dbm.executeQueryLimit(sql, this.queryParams, this.queryResultStart, this.queryResultSize);
		}
		   
	    StringBuffer out = new StringBuffer();
		//System.out.println("In writeResultDoQuery: dataFormatFetch="+this.dataFormatFetch);
		if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_JSON) ) {
	    	String dataOut = CollectionUtils.recordsToJson(this.records, null, this.fields);
	    	out.append("success:true");
	    	out.append(",totalCount:"+totalCount);
	    	out.append(","+AbstractDataControl.RECORDS_JSON_ROOT_TAG+":["+dataOut+"]"); //record data
	    	if (this.recordsSummary != null) {
	    		String summaryOut = CollectionUtils.recordToJson(this.recordsSummary, null, CollectionUtils.filteredMap(this.fields, this.summaryFields) );	    	
		    	out.append(",summary:"+summaryOut);	
	    	}	    	
	        write("{" + out.toString() + "}");
	      }
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_XML) ) {
	    	  String dataOut = CollectionUtils.recordsToXml(this.records, null, this.fields);
	    	  write( "<?xml version='1.0' encoding='UTF-8'?><response><totalCount>"+totalCount+"</totalCount>" + dataOut + "</response>" );
	      }	  
	}	
	
	
	
	
	
	private String columnDefToXml(String[] columns) {		
		return columnDefToXml(columns, null);
	}
	
	
	
	private String columnDefToXml(String[] columns, Integer[] columnsWidth) {
		int len = columns.length;
		StringBuffer out = new StringBuffer();
		boolean includeColWidth = false;
		if (columnsWidth!= null && columnsWidth.length == len) {
			includeColWidth = true;
		}
		for(int i=0; i<len; i++) {
			if (columns[i]!=null && !columns[i].equals("")) {
				String trlKey = "FIELD_LABEL."+columns[i];
				String colWidthTag = "<width>-1</width>";
				if (includeColWidth) {
					colWidthTag = "<width>"+columnsWidth[i]+"</width>";
				}
				out.append("<"+columns[i]+"  isColumn=\"Y\"><label>"+((trl.containsKey(trlKey))?trl.get(trlKey):columns[i])+"</label><dataType>"+this.fields.get(columns[i]).getDataType()+"</dataType>"+colWidthTag+"</"+columns[i]+">");
			}			
		}
		return out.toString();
	}
	
	
	protected void writeResultDoExport(String sql) throws Exception{
		
		trl = dbm.getDcTranslations(this.session.getLanguage(), this.getDcCode());
		String printLayout = this.request.getParam(HttpRequest.REQUEST_PARAM_PRINT_LAYOUT); 
		
		if (!(printLayout!=null && (printLayout.equals(HttpRequest.PRINT_LAYOUT_V)  || printLayout.equals(HttpRequest.PRINT_LAYOUT_H) ))) {
			printLayout = HttpRequest.PRINT_LAYOUT_V;
		}		
		
		//int totalCount = dbm.countQueryResults(sql, this.queryParams);
		this.records = dbm.executeQuery(sql, this.queryParams);
	    String[] columns = null;
	    Integer[] cw = null;
	    
	    if (this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_COL_NAMES)!= null && !this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_COL_NAMES).equals("")) {
	      columns = this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_COL_NAMES).split(",");
	    } else {
	      columns = this.fields.keySet().toArray(new String[0]);
	    }

	    if (this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_COL_WIDTHS)!= null && !this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_COL_WIDTHS).equals("")) {
	    	String[] columnWidths = this.request.getParam(HttpRequest.REQUEST_PARAM_EXPORT_COL_WIDTHS).split(",");
	    	cw = new Integer[columnWidths.length];
		    Integer total = new Integer(0);
		    for (int x=0; x<columnWidths.length; x++) {
		    	cw[x] = Integer.parseInt(columnWidths[x]);
		    	total = total + cw[x];
		    }
		    for (int x=0; x<cw.length; x++) {
		    	cw[x] = cw[x]*100 /total;
		    }
	    } 
	    
	    String dataOut = "";
	    
	    //this.setDataFormatExport(HttpRequest.DATA_FORMAT_PDF);
	    
	    if (this.getDataFormatExport().equals(HttpRequest.DATA_FORMAT_CSV) ) {
	      dataOut = CollectionUtils.recordsToCsv(this.records, columns, this.fields);	     
	    } else if (this.getDataFormatExport().equals(HttpRequest.DATA_FORMAT_XML) )  {
	      dataOut = CollectionUtils.recordsToXml(this.records, columns, this.fields);
	    } else if (this.getDataFormatExport().equals(HttpRequest.DATA_FORMAT_PDF) )  {
	      dataOut = CollectionUtils.recordsToXml(this.records, columns, this.fields);
	      //dataOut = "<queryParams>"+CollectionUtils.serializeMap(this.queryParams,HttpRequest.DATA_FORMAT_XML)+"</queryParams>"+dataOut;
	      dataOut = "<columnDef>"+columnDefToXml(columns,cw)+"</columnDef>"+dataOut;	       	      
	      //dataOut = "<staticText>"+this.exportLocalizedStaticText()+"</staticText>"+dataOut;
	      dataOut = "<groupBy></groupBy>"+dataOut; //"+groupBy+"
	     
	      SimpleDateFormat format = new SimpleDateFormat("dd.MM.yyyy");	      
	      dataOut = "<reportData  layout=\""+printLayout+"\" title=\""+this.getDcCode()+"\" by=\""+this.user.getUserName()+"\" on=\""+format.format(new Date())+"\">"+dataOut+"</reportData>";	      
	      	      
	      try {
  
	            // Setup input and output files
	    	  File t = new File(".");
	    	  System.out.println(t.getAbsolutePath());
	    	  
	            File xsltfile = new File("D:/work/php/n21eBusinessSuite/ServerJava/WebContent/to_fo.xsl");
	            //String fileName="tmp.pdf"; 
	            //File pdffile = new File( "D:/work/php/n21eBusinessSuite/ServerJava/WebContent/"+fileName);

	    
	            System.out.println(xsltfile.getAbsolutePath());
	            System.out.println("Transforming...");

	            // configure fopFactory as desired
	            FopFactory fopFactory = FopFactory.newInstance();

	            FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
	            // configure foUserAgent as desired

	            // Setup output
	            OutputStream out = null;
	            // out = new java.io.FileOutputStream(pdffile);
	            //  out = new java.io.BufferedOutputStream(out);
	            out = new java.io.BufferedOutputStream(this.response.getOutputStream());

	            try {
	                // Construct fop with desired output format
	                Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, foUserAgent, out);

	                // Setup XSLT
	                TransformerFactory factory = TransformerFactory.newInstance();
	                Transformer transformer = factory.newTransformer(new StreamSource(xsltfile));

	                // Set the value of a <param> in the stylesheet
	                transformer.setParameter("versionParam", "2.0");

	                // Setup input for XSLT transformation
	                Source src = new StreamSource(new StringReader(dataOut));

	                // Resulting SAX events (the generated FO) must be piped through to FOP
	                Result res = new SAXResult(fop.getDefaultHandler());

	                // Start XSLT transformation and FOP processing
	                transformer.transform(src, res);
	            } finally {
	                out.close();
	            }

	            System.out.println("Success!");
	        } catch (Exception e) {
	            e.printStackTrace(System.err);	            
	        }
	      
	       
	      
	    }else {
	      dataOut = CollectionUtils.recordsToXml(this.records, columns, this.fields);
	      //dataOut = "<records>"+dataOut+"</records>"; 
	      //dataOut = "<queryParams>"+CollectionUtils.serializeMap(this.queryParams,HttpRequest.DATA_FORMAT_XML)+"</queryParams>"+dataOut;
	      dataOut = "<columnDef>"+columnDefToXml(columns)+"</columnDef>"+dataOut;
	       
	      //"+this.columnDefForExport(columns,this.fields,true)+this.columnDefForExport(array_diff(array_keys(params), columns),this.fields,false)+"
	      //dataOut = "<staticText>"+this.exportLocalizedStaticText()+"</staticText>"+dataOut;
	      dataOut = "<groupBy></groupBy>"+dataOut; //"+groupBy+"
	      dataOut = "<reportData layout=\""+printLayout+"\"  title=\""+this.getDcCode()+"\" by=\""+this.user.getUserName()+"\" on=\""+(new Date()).toString()+"\">"+dataOut+"</reportData>";
	    }
	    
	    
	    
	    if (!this.getDataFormatExport().equals(HttpRequest.DATA_FORMAT_PDF) )  {
	    	this.beginExport();
	    	this.write(dataOut);	    
	    	this.endExport();	    
	    }
	}	

	protected void writeResultDoUpdate() throws Exception {
		this.sendRecord();
	}	
	protected void writeResultDoInsert() throws Exception {
		this.sendRecord();
	}	
	
	protected void writeResultFetchRecord() throws Exception {
		this.sendRecord();
	}	
	
	
	
	protected void writeResultDoDelete() throws IOException {		
		if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_JSON) ) {	    	
	        write( "{ success : true } ");
	      }
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_XML) ) {
	    	  write( "<?xml version='1.0' encoding='UTF-8'?><response></response>"   );
	      }	 
	      
	}
	
 	

	protected void writeResultInitNewRecord() throws Exception {		
		this.setFieldInitialValues();
		this.sendRecord();
	}
	
 
	
	
	
	
	protected void sendRecord() throws Exception {
		StringBuffer transport = new StringBuffer();
		String transpStr = "";
		if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_JSON) ) {
	    	String out = CollectionUtils.recordToJson(this.record, null, this.fields);	    	 
	    	String sendback = this.request.getParameter(HttpRequest.REQUEST_PARAM_TRANSPORT);
	    	if (sendback != null) {
	    		String[] tokens = sendback.split(",");
	    		for (int i=0; i<tokens.length; i++) {
	    			String[] tk = tokens[i].split("=");
	    			transport.append((i>0)?",":"");
	    			transport.append(tk[0]+":"+"\""+tk[1]+"\""); 	
	    		}	
	    		transpStr = ","+AbstractDataControl.TRANSPORT_TAG+":{"+transport.toString()+"}";
	    	}
	        write( "{ success:true"+transpStr+","+AbstractDataControl.RECORD_JSON_ROOT_TAG+":" + out + "}");
	      }
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_XML) ) {
	    	  String out = CollectionUtils.recordToXml(this.record, null, this.fields);	
	    	  String sendback = this.request.getParameter(HttpRequest.REQUEST_PARAM_TRANSPORT);
		    	if (sendback != null) {
		    		String[] tokens = sendback.split(",");
		    		for (int i=0; i<tokens.length; i++) {
		    			String[] tk = tokens[i].split("=");
		    			transport.append("<"+tk[0]+">"+tk[1]+"</"+tk[0]+">"); 	
		    		}
		    		transpStr = "<"+AbstractDataControl.TRANSPORT_TAG+">"+transport.toString()+"</"+AbstractDataControl.TRANSPORT_TAG+">";	
		    	}		    	
	    	  write( "<?xml version='1.0' encoding='UTF-8'?><response><success>true</success>"+ transpStr +out +"</response>"  );
	      }	 
	}
	
 
	
	
	
	
	
	// --------------  initialize record/context ------------------
	

	protected void populateRecordFromRequest() {
		Iterator<String> it = this.fields.keySet().iterator();		
		while (it.hasNext()) {
			String key = it.next(); 
			if (this.fields.get(key).getDataType().equals( "BOOLEAN")) {
				this.record.put(key, this.request.getParamAsYesNo(key));
			}else {
				this.record.put(key, applyCaseRestriction(key, this.request.getNParam(key)));
			}			 
		}
	}
	
	
	protected void populateRecordPkFromRequest() throws Exception {		
		for (int i=0; i<this.pkFields.length; i++ ) {
			if (this.request.getParam(this.pkFields[i]) == null || this.request.getParam(this.pkFields[i]).equals("")) {
				  throw new Exception("Missing value from request for primary key field: "+this.pkFields[i]);
			  }	
			this.recordPk.put(this.pkFields[i], applyCaseRestriction(this.pkFields[i], this.request.getParam(this.pkFields[i])));			
		}		 
	}		
	
	protected void populateRecordPkFromRecord() throws Exception {		
		for (int i=0; i<this.pkFields.length; i++ ) {
			if (this.record.getProperty(this.pkFields[i]) == null || this.record.getProperty(this.pkFields[i]).equals("")) {
				  throw new Exception("Missing value from record for primary key field: "+this.pkFields[i]);
			  }	
			this.recordPk.put(this.pkFields[i], applyCaseRestriction(this.pkFields[i], this.record.getProperty(this.pkFields[i])));			
		}		 
	}
	
	
	protected void populateRecordWithClientSpecific() {
		if (this.request.getParam("_p_record_status") != null) {
			this.record.put("_p_record_status", this.request.getParam("_p_record_status"));	
		}
		if (this.request.getParam("_p_store_recId") != null) {
			this.record.put("_p_store_recId", this.request.getParam("_p_store_recId"));	
		}		 
	}
	
	 
	
	 protected void prepareQueryContext() {
		  
		  //this.queryResultStart = 0;	  
		  //this.queryResultSize = 20; //TODO: get a default from application parameter
		  
		  if (this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_START)!=null ) {		  		 
				try {
					this.queryResultStart = Integer.parseInt(this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_START));
				}catch (NumberFormatException e) {
					//not a valid number, just use the default 
				}			 
			}
		  if (this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SIZE)!=null ) {		  		 
				try {
					this.queryResultSize = Integer.parseInt(this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SIZE));
				}catch (NumberFormatException e) {
					//not a valid number, just use the default 
				}			 
			}
		  	  
		  // use array for a future multi-sort implementation	  
		  if (this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SORT) != null && !this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SORT).equals("")) {		 
			 this.queryOrderByColumns[0] = this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SORT);
		  }
		  
		  if (this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SENSE) != null && 
				  ( this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SENSE).equalsIgnoreCase("ASC") 
				  ||this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SENSE).equalsIgnoreCase("DESC"))
			 ) {		 
			  this.queryOrderBySense[0] = this.request.getParam(HttpRequest.REQUEST_PARAM_FETCH_SENSE);
		  } else {
			  this.queryOrderBySense[0] = "ASC";  
		  }
		  StringBuffer tmp = new StringBuffer();
		  
		  for (int i=0;i<this.queryOrderByColumns.length; i++) {
			  if(this.queryOrderByColumns[i] != null ) {
				  tmp.append((i>0)?",":"");
				  //this.dsAlias+
				  tmp.append(this.queryOrderByColumns[i]+" "+this.queryOrderBySense[i]);  
			  }			  
		  }
		  tmp.insert(0, (tmp.length()>0)?"order by ":"");
		  this.queryOrderBy = tmp.toString();		    
		}
	  

	 
	 protected void _doSummaries(String sql) throws SQLException {
		//this.recordsSummary =  new Properties();
		this.recordsSummary = dbm.executeQuery(sql, this.queryParams).get(0);
	 
	 
	 
	 }
	 
	 
	 
	   public void setFieldInitialValues() throws Exception{  //return;
	     		    
		   this.record.put("_p_record_status", "insert");
		   
		   String sql = "select * from ui_dc_field_initval where uidc_code = :UIDC and active='Y'";
		   Properties p = new Properties();
		   p.put("UIDC", this.dcCode);
		   Iterator<Properties> it = dbm.executeQuery(sql, p).iterator();
		   
		   while(it.hasNext()) {
			   Properties fdv = it.next();
			   String fieldName = fdv.getProperty("FIELD_NAME");
			   String fieldValueType = fdv.getProperty("VALUE_TYPE");
			   String fieldValue = fdv.getProperty("FIELD_VALUE");
			   
			   if (this.record.containsKey(fieldName)) {
		    		if(fieldValueType.equals("VALUE")) {
		    			this.record.setProperty(fieldName, fieldValue);
		    		} 
		    		if (fieldValueType.equals("SQL")) {
		    			Properties fv = dbm.executeQuery(fieldValue, this.record).get(0);
		    			if (fv.size()>1) {
		    				throw new Exception("Field default value SQL cannot return more then one column"); 
		    			}		    			
		    			this.record.setProperty(fieldName, (String)fv.values().toArray()[0]  );
		    		}
			   }
			   
			   
		   }
		   	        
	   }
	   
	
	// ----------------------  database abstraction -------------------
	


	  
	  
	  
	 

	
	  
	// --------------------- utility helpers -------------------------------
	
	
		public void write(String s) throws IOException {
			this.response.getWriter().print(s);
		}
	
	private String applyCaseRestriction(String fieldName, String value) {
		if (this.fields.get(fieldName).getCaseRestriction() == null ) {
			return value;
		} else {
			if (this.fields.get(fieldName).getCaseRestriction().equalsIgnoreCase("upper")) {
				return value.toUpperCase();
			}
			if (this.fields.get(fieldName).getCaseRestriction().equalsIgnoreCase("lower")) {
				return value.toLowerCase();
			}
			return value;
		}
	}
	
	
	public static String[] getDSColumns(Map<String, FieldDef> fieldDef) {
		 int fieldCount = fieldDef.size();
		 String[] columns = fieldDef.keySet().toArray(new String[0]);
		 List<String> newColumns = new ArrayList<String>();
		 for(int i=0; i<fieldCount; i++) {
			 if (fieldDef.get(columns[i]).isInDS()) {
				 newColumns.add(columns[i]);				 
			 }
		 }
		 return newColumns.toArray(new String[0]);
	  }  
	
	
	private void beginExport() throws IOException {
	  	
	    if (this.dataFormatExport.equals(HttpRequest.DATA_FORMAT_HTML) ) {
	      
	      this.response.setContentType("text/xml");
	      this.response.setCharacterEncoding("UTF-8");
	      this.response.setHeader("Content-Description", "File Transfer") ;
	      this.response.setHeader("Content-Disposition", "inline; filename=\""+this.dcCode+".html\";") ;
	     
	      
	      this.write("<?xml version=\"1.0\"?>");
	      this.write("<?xml-stylesheet type=\"text/xsl\" href=\"test.xsl\"?>");
	      
	    } else if (this.dataFormatExport.equals(HttpRequest.DATA_FORMAT_XML))  {
	    	
	    	this.response.setContentType("text/xml");
	    	this.response.setCharacterEncoding("UTF-8");
		    this.response.setHeader("Content-Description", "File Transfer") ;
		    this.response.setHeader("Content-Disposition", "inline; filename=\""+this.dcCode+".xml\";") ;
		    this.write("<?xml version=\"1.0\"?>");
	      
	    } else if (this.dataFormatExport.equals(HttpRequest.DATA_FORMAT_CSV) )  {
	    	
	    	this.response.setHeader("Content-Description", "File Transfer") ;
	    	this.response.setContentType("application/vnd.ms-excel");
	    	this.response.setCharacterEncoding("UTF-8");
	    	this.response.setHeader("Content-Disposition", "inline; filename=\""+this.dcCode+".csv\";") ;

	    }else if (this.dataFormatExport.equals(HttpRequest.DATA_FORMAT_PDF) )  {
	    	
	    	this.response.setHeader("Content-Description", "File Transfer") ;
	    	this.response.setContentType("application/octet-stream");
	    	this.response.setCharacterEncoding("UTF-8");
	    	this.response.setHeader("Content-Disposition", "inline; filename=\""+this.dcCode+".pdf\";") ;

	    }

	  }
	
	
	  private void endExport() {}
 

}