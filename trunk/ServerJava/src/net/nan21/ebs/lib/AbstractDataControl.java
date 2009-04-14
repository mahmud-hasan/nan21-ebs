package net.nan21.ebs.lib;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Properties;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbutils.ResultSetHandler;

import oracle.jdbc.OracleCallableStatement;
import oracle.jdbc.OraclePreparedStatement;


public abstract class AbstractDataControl {

	// constants 
	public static final String FLDPROP_NAME = "NAME";
	public static final String FLDPROP_DATA_TYPE = "DATA_TYPE";
	public static final String FLDPROP_REQUIRED = "REQUIRED";
	public static final String FLDPROP_MAXLENGTH = "MAX_LENGTH";
	public static final String FLDPROP_CASE_RESTRICTION = "CASE_RESTRICTION";
		
	public static final String RECORD_XML_ROOT_TAG = "data";
	public static final String RECORD_JSON_ROOT_TAG = "data";
	
	
	// global properties
	protected boolean isInitialised =  false;
    protected Map<String, FieldDef> fields = new HashMap<String, FieldDef>();
    protected Properties record = new Properties();
    protected List<Properties> records = new ArrayList<Properties>();
    protected Properties recordPk = new Properties();
    protected String dataFormatExport = HttpRequest.DATA_FORMAT_HTML;
    protected String dataFormatFetch = HttpRequest.DATA_FORMAT_JSON;   
    protected HttpRequest request;
    protected HttpServletResponse response;
    protected HttpSession session;    
    protected DbManager dbm;  
    protected String[] pkFields = {} ;    
    protected String dcCode = null;
    protected SessionUser user = null;
    
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
		this.records = dbm.executeQueryLimit(sql, this.queryParams, this.queryResultStart, this.queryResultSize);   
	    
		System.out.println("In writeResultDoQuery: dataFormatFetch="+this.dataFormatFetch);
		if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_JSON) ) {
	    	String out = CollectionUtils.recordsToJson(this.records, null, this.fields);
	        write( "{ success : true , totalCount:" + totalCount + ", records : [  " + out + "] } ");
	      }
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_XML) ) {
	    	  String out = CollectionUtils.recordsToXml(this.records, null, this.fields);
	    	  write( "<?xml version='1.0' encoding='UTF-8'?><response><totalCount>"+totalCount+"</totalCount>" + out + "</response>" );
	      }	  
	}	
	
	
	protected void writeResultDoExport(String sql) throws Exception{
		int totalCount = dbm.countQueryResults(sql, this.queryParams);
		this.records = dbm.executeQuery(sql, this.queryParams);
	    String[] columns = null;
	    
	    if (this.request.getParam("_p_disp_cols")!= null && !this.request.getParam("_p_disp_cols").equals("")) {
	      columns = this.request.getParam("_p_disp_cols").split(",");
	    } else {
	      columns = this.fields.keySet().toArray(new String[0]);
	    }
	    String dataOut = "";
	    if (this.getDataFormatExport().equals(HttpRequest.DATA_FORMAT_CSV) ) {
	      dataOut = CollectionUtils.recordsToCsv(this.records, columns, this.fields);
	    } else {
	      dataOut = CollectionUtils.recordsToXml(this.records, columns, this.fields);
	      dataOut = "<records>"+dataOut+"</records>"; 
	      //dataOut = "<queryParams>"+CollectionUtils.serializeMap(this.queryParams,HttpRequest.DATA_FORMAT_XML)+"</queryParams>"+dataOut;
	      dataOut = "<columnDef></columnDef>"+dataOut;
	      //"+this.columnDefForExport(columns,this.fields,true)+this.columnDefForExport(array_diff(array_keys(params), columns),this.fields,false)+"
	      //dataOut = "<staticText>"+this.exportLocalizedStaticText()+"</staticText>"+dataOut;
	      dataOut = "<groupBy></groupBy>"+dataOut; //"+groupBy+"
	      dataOut = "<reportData  title=\""+this.getDcCode()+"\" by=\""+this.user.getUserName()+"\" on=\""+(new Date()).toString()+"\">"+dataOut+"</reportData>";
	    }
	    this.beginExport();
	    this.write(dataOut);
	    this.endExport();	    
	    
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
	
 
	
	
	
	
	private void sendRecord() throws Exception {
		if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_JSON) ) {
	    	String out = CollectionUtils.recordToJson(this.record, null, this.fields);
	    	String params = "";
	    	if (this.request.getParameter("_p_store_recId")!= null) {
	    		params = " ,params:{_p_store_recId:"+this.request.getParameter("_p_store_recId")+"}";
	    	}
	        write( "{ success : true "+params+",data : " + out + "}");
	      }
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_XML) ) {
	    	  String out = CollectionUtils.recordToXml(this.record, null, this.fields);
	    	  String params = "";
		      if (this.request.getParameter("_p_store_recId")!= null) {
		    		params = "<params><_p_store_recId>"+this.request.getParameter("_p_store_recId")+"</_p_store_recId></params>";
		    	}
	    	  write( "<?xml version='1.0' encoding='UTF-8'?><response>"+ params +out +"</response>"  );
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
	
	
	private void __fillRecordFromResultSet(ResultSet rs, Properties record) throws SQLException {
		String columns[] = AbstractDataControl.getDSColumns(this.fields);
		int columnCount = columns.length;
		for (int i=0; i<columnCount; i++) {												  
			if (rs.getString(columns[i]) != null ) {
				this.record.setProperty(columns[i], rs.getString(columns[i]) );	
			}  				  		 
		}

		
	}
	
	private void __fillRecordsFromResultSet(ResultSet rs, List<Properties> records ) throws SQLException {
		String columns[] = AbstractDataControl.getDSColumns(this.fields);
		int columnCount = columns.length;		
		while ( rs.next() ){
			Properties r = new Properties();
			for (int i=0; i<columnCount; i++) {												  
				if (rs.getString(columns[i]) != null ) {
					r.setProperty(columns[i], rs.getString(columns[i]) );	
				}  				  		 
			}
			this.records.add(r);
		}
	}
	
	
	
	
	 protected void prepareQueryContext() {
		  
		  this.queryResultStart = 0;	  
		  this.queryResultSize = 20; //TODO: get a default from application parameter
		  
		  if (this.request.getParam("start")!=null ) {		  		 
				try {
					this.queryResultStart = Integer.parseInt(this.request.getParam("start"));
				}catch (NumberFormatException e) {
					//not a valid number, just use the default 
				}			 
			}
		  if (this.request.getParam("limit")!=null ) {		  		 
				try {
					this.queryResultSize = Integer.parseInt(this.request.getParam("limit"));
				}catch (NumberFormatException e) {
					//not a valid number, just use the default 
				}			 
			}
		  	  
		  // use array for a future multi-sort implementation	  
		  if (this.request.getParam("sort") != null && !this.request.getParam("sort").equals("")) {		 
			 this.queryOrderByColumns[0] = this.request.getParam("sort");
		  }
		  
		  if (this.request.getParam("dir") != null && 
				  ( this.request.getParam("dir").equalsIgnoreCase("ASC") 
				  ||this.request.getParam("dir").equalsIgnoreCase("DESC"))
			 ) {		 
			  this.queryOrderBySense[0] = this.request.getParam("dir");
		  } else {
			  this.queryOrderBySense[0] = "ASC";  
		  }
		  StringBuffer tmp = new StringBuffer();
		  
		  for (int i=0;i<this.queryOrderByColumns.length; i++) {
			  if(this.queryOrderByColumns[i] != null ) {
				  tmp.append((i>0)?",":"");
				  tmp.append(this.queryOrderByColumns[i]+" "+this.queryOrderBySense[i]);  
			  }
			  
		  }
		  tmp.insert(0, (tmp.length()>0)?"order by ":"");
		  this.queryOrderBy = tmp.toString();
		    
		}
	  

	   public void setFieldInitialValues() throws SQLException{  //return;
	     		    
		   this.record.put("_p_record_status", "insert");
		   
	       String sql = "select * from ui_dc_field_initval where uidc_code = :UIDC and active='Y'";

	       OraclePreparedStatement st = (OraclePreparedStatement)dbm.getDbConn().prepareStatement(sql);
	       st.setStringAtName("UIDC", this.dcCode);
		    st.execute();  
		    ResultSet rs =  st.getResultSet();
		    ResultSet rs1 = null;
		    OraclePreparedStatement st1 = null;
	       while ( rs.next() ){
	    	 String fieldName = rs.getString("FIELD_NAME");
	    	 String fieldValueType = rs.getString("VALUE_TYPE");
	    	 
	    	 if (this.record.containsKey(fieldName)) {
	    		if(fieldValueType.equals("VALUE")) {
	    			this.record.setProperty(fieldName, rs.getString("FIELD_VALUE"));
	    		}
	    		if (fieldValueType.equals("SQL")) {
	    			st1 = (OraclePreparedStatement)
	    			 dbm.getDbConn().prepareStatement(rs.getString("FIELD_VALUE"));
	    			Iterator it = this.record.keySet().iterator();
	    			while(it.hasNext()) {
	    				String k = (String)it.next();
	    				st1.setStringAtName(k, this.record.getProperty(k));
	    			}
	    			st1.execute();
	    			rs1 = st1.getResultSet(); 
	    			this.record.setProperty(fieldName, rs1.getString(0));
	    		}
	    		 
	    	 }  
	    	   
	       }
	      // TODO:close rs st, ..    
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

	    }

	  }
	
	
	  private void endExport() {}
	  
	  private void writeRecordResponseData(String dataString) throws Exception{
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_JSON) ) {
	        write( "{ success : true , "+RECORD_JSON_ROOT_TAG+": " + dataString + "  } ");
	      }
	      if (this.dataFormatFetch.equals(HttpRequest.DATA_FORMAT_XML) ) {
	  	    	response.setContentType("application/xml");
	        write( "<" + "?" + "xml version='1.0' encoding='UTF-8'?>" + dataString + "" );
	      }		      
	    }
	  

}