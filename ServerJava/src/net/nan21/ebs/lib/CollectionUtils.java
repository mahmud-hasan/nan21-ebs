package net.nan21.ebs.lib;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
 
public class CollectionUtils {

	
	public static String recordToJson(Properties record, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException, UnsupportedEncodingException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}	
		int columnCount = columns.length;
		for (int i=0; i<columnCount; i++) {	
			out.append( (i>0)?",":""  );
			if (record.getProperty(columns[i]) != null) {
				out.append( columns[i]+":\"" + URLEncoder.encode((record.getProperty(columns[i])), "UTF-8")+"\"" );
			} else {
				out.append( columns[i]+":\"\"" );
			}
			
		}
		return "{"+out.toString()+"}";
	}
	
	
	public static String recordsToJson(List<Properties> records, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException, UnsupportedEncodingException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}		
		int recordCount = records.size();
		for (int i=0; i<recordCount; i++) {
			out.append( (i>0)? ",":"" );
			out.append(recordToJson(records.get(i),columns, fieldDef));
		}			
		return out.toString();
	}	
	
	
	
	public static String recordToXml(Properties record, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}	
		int columnCount = columns.length;
		for (int i=0; i<columnCount; i++) {	
			if (record.getProperty(columns[i]) != null ) {
				out.append( "<"+columns[i]+">" +  record.getProperty(columns[i]) +"</"+columns[i]+">");
			}else {
				out.append( "<"+columns[i]+"></"+columns[i]+">");
			}
			
		}
		return "<record>"+out.toString()+"</record>";
	}
	
	
	public static String recordsToXml(List<Properties> records, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}		
		int recordCount = records.size();
		for (int i=0; i<recordCount; i++) {		
			out.append(recordToXml(records.get(i),columns, fieldDef));
		}			
		return "<records>"+out.toString()+ "</records>";
	}	
		
	

	public static String recordToCsv(Properties record, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}	
		int columnCount = columns.length;
		for (int i=0; i<columnCount; i++) {	
			out.append( record.getProperty(columns[i]) +"," );
		}
		return out.toString();
	}
	
	
	public static String recordsToCsv(List<Properties> records, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException {
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}		
		int recordCount = records.size();
		for (int i=0; i<recordCount; i++) {			
			out.append(recordToCsv(records.get(i),columns, fieldDef));
		}			
		return out.toString();
	}	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	public static String cursorToXml(ResultSet rs, Map<String,FieldDef> fieldDef) throws SQLException {
		StringBuffer dataOut = new StringBuffer();
		int x=0;		
		String columns[] = AbstractDataControl.getDSColumns(fieldDef);
		int columnCount = columns.length;
		while ( rs.next() ){
			dataOut.append( (x>0)?",":"");
			dataOut.append("{");
			for (int i=0; i<columnCount; i++) {								
				  dataOut.append( (i>0)?",":"");
					if (rs.getString(columns[i]) != null ) {
						dataOut.append( "<"+columns[i]+">" +  rs.getString(columns[i]) +"</"+columns[i]+">"  );	
					} else {
						dataOut.append( "<"+columns[i]+"></"+columns[i]+">"  );
					}				  		 
			}
			dataOut.append("}");
			x++;
		}	 
		return dataOut.toString();
	}		
	 
	
	public static String cursorToCsv(ResultSet rs, Map<String,FieldDef> fieldDef) throws SQLException {
		StringBuffer dataOut = new StringBuffer();
		int x=0;		
		String columns[] = AbstractDataControl.getDSColumns(fieldDef);
		int columnCount = columns.length;
		while ( rs.next() ){
			dataOut.append( (x>0)?",":"");
			dataOut.append("{");
			for (int i=0; i<columnCount; i++) {								
				  dataOut.append( (i>0)?",":"");
					if (rs.getString(columns[i]) != null ) {
						dataOut.append( rs.getString(columns[i]) +";"  );	
					} else {
						dataOut.append(";");
					}				  		 
			}
			dataOut.append("}");
			x++;
		}	 
		return dataOut.toString();
	}		
	  
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	public static String serializeMap(Properties map, String format) throws Exception {
		return serializeMap((Map)map, format);
	}
	
	public static String serializeMap(Map<String, Object> map, String format) throws Exception {
		if (format== null || format.equals("")) { return mapToJson(map);}
		else {
			if (format.equals(HttpRequest.DATA_FORMAT_JSON)) { return mapToJson(map);}
			if (format.equals(HttpRequest.DATA_FORMAT_XML)) { return mapToJson(map);}
			if (format.equals(HttpRequest.DATA_FORMAT_CSV)) { return mapToJson(map);}
		}
		throw new Exception("cannot serialize map to format "+format ); 
	}
	
	
	
	
	public static String mapToJson(Map<String, Object> map) throws Exception {
		StringBuffer dataOut = new StringBuffer();
		int x=0;
		Iterator<String> it = map.keySet().iterator();
		String key = null;
		dataOut.append("{");
		while ( it.hasNext() ){
			key = it.next(); 
			dataOut.append( (x>0)?",":"");			
			dataOut.append( key+":\"" + URLEncoder.encode((map.get(key).toString()), "UTF-8")+"\"" );	
		}
		dataOut.append("}");
		x++;
		return dataOut.toString();
	}
	
	public static String serializeRecord(Properties record, String format) throws Exception {
		if (format== null || format.equals("")) { return recordToJson(record);}
		else {
			if (format.equals(HttpRequest.DATA_FORMAT_JSON)) { return recordToJson(record);}
			if (format.equals(HttpRequest.DATA_FORMAT_XML)) { return recordToXml(record, AbstractDataControl.RECORD_XML_ROOT_TAG);}
			if (format.equals(HttpRequest.DATA_FORMAT_CSV)) { return recordToJson(record);}
		}
		throw new Exception("cannot serialize record to format "+format ); 
	}
	
	
	public static String recordToJson(Properties record) throws Exception {
		StringBuffer dataOut = new StringBuffer();
		int x=0;
		Iterator it = record.keySet().iterator();		
		dataOut.append("{");
		while ( it.hasNext() ){
			String key = (String)it.next(); 
			dataOut.append( (x>0)?",":"");			
			dataOut.append( key+":\"" + URLEncoder.encode((record.get(key).toString()), "UTF-8")+"\"" );
			x++;
		}
		dataOut.append("}");
		return dataOut.toString();
	}
	
	
	
	public static String recordToXml(Properties record, String rootTagName) throws Exception {
		StringBuffer s = new StringBuffer();
		Iterator it = record.keySet().iterator();	
		s.append("<"+rootTagName+">");
		while ( it.hasNext() ){
			String key = (String)it.next(); 	
			s.append( "<"+key+">" + record.get(key).toString() +"</"+key+">" );
		}
		s.append("</"+rootTagName+">");
		return s.toString();
	}	
	
	/**
	 * 
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public static String mapToXml(Map<String, Object> map, String rootTagName) throws Exception {
		StringBuffer dataOut = new StringBuffer();
		int x=0;
		Iterator<String> it = map.keySet().iterator();
		String key = null;
		dataOut.append("<"+rootTagName+">");
		while ( it.hasNext() ){
			key = it.next(); 
			dataOut.append( (x>0)?",":"");			
			dataOut.append( "<"+key+">" + map.get(key).toString() +"</"+key+">"  );	
		}
		dataOut.append("<"+rootTagName+">");
		return dataOut.toString();
	}	
	
	
	/**
	 * 
	 * @param arr
	 * @param format
	 * @return
	 * @throws Exception
	 */
	public static String serializeArray(String[] arr, String format)  throws Exception {
		if (format== null || format.equals("")) { return arrayToXml(arr);}
		else {
			if (format.equals(HttpRequest.DATA_FORMAT_JSON)) { return arrayToXml(arr);}
			if (format.equals(HttpRequest.DATA_FORMAT_XML)) { return arrayToXml(arr);}
			if (format.equals(HttpRequest.DATA_FORMAT_CSV)) { return arrayToXml(arr);}
		}
		 throw new Exception("Serialize format "+format+" for array not supported");
	}
	

	public static String arrayToXml(String[] arr) {
		StringBuffer dataOut = new StringBuffer();
		int len = arr.length;
		for (int x=0; x<len; x++ ) {
			dataOut.append("<"+x+">"+arr[x]+"</"+x+">");
		}
		return dataOut.toString();
	} 
	
	 
	public static void populateRecordFromRecordSetRow(Properties record, ResultSet rs, String[] columnNames) throws SQLException {
		if (rs.isBeforeFirst()) {
			rs.next();
		}
		int len = columnNames.length;
		for (int i=0; i<len; i++) {
			if (rs.getString(columnNames[i]) != null ) {
				record.setProperty(columnNames[i], rs.getString(columnNames[i]));
			}			
			System.out.println(columnNames[i]);
		}
	}
	
	
  
}
 