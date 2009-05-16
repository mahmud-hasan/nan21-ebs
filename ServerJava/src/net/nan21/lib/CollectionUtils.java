package net.nan21.lib;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

 
public class CollectionUtils {

	
	public static String recordToJson(Map<String, String> record, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException, UnsupportedEncodingException{
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
			if (record.get(columns[i]) != null) {
				out.append( columns[i]+":\"" + URLEncoder.encode((record.get(columns[i])), "UTF-8")+"\"" );
			} else {
				out.append( columns[i]+":\"\"" );
			}
			
		}
		return "{"+out.toString()+"}";
	}
	
	
	public static String recordsToJson(List<Map<String, String>> records, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException, UnsupportedEncodingException{
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
	
	
	
	public static String recordToXml(Map<String, String> record, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}	
		int columnCount = columns.length;
		for (int i=0; i<columnCount; i++) {	
			
			if (columns[i]!= null && !columns[i].equals("")) {
				if (record.get(columns[i]) != null ) {
					out.append( "<"+columns[i]+">" +  record.get(columns[i]) +"</"+columns[i]+">");
				}else {
					out.append( "<"+columns[i]+"></"+columns[i]+">");
				}
			}
		}
		return "<"+AbstractDataControl.RECORD_XML_ROOT_TAG+">"+out.toString()+"</"+AbstractDataControl.RECORD_XML_ROOT_TAG+">";
	}
	
	
	public static String recordsToXml(List<Map<String, String>> records, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException{
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
		return "<"+AbstractDataControl.RECORDS_XML_ROOT_TAG+">"+out.toString()+ "</"+AbstractDataControl.RECORDS_XML_ROOT_TAG+">";
	}	
		
	

	public static String recordToCsv(Map<String, String> record, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException{
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}	
		int columnCount = columns.length;
		for (int i=0; i<columnCount; i++) {	
			out.append( record.get(columns[i]) +"," );
		}
		return out.toString();
	}
	
	public static String recordsToCsv(List<Map<String, String>> records, String[] columnNames, Map<String,FieldDef> fieldDef) throws SQLException {
		return CollectionUtils.recordsToCsv(records, columnNames, fieldDef, true);
	}	
	
	public static String recordsToCsv(List<Map<String, String>> records, String[] columnNames, Map<String,FieldDef> fieldDef, boolean withHeader) throws SQLException {
		StringBuffer out = new StringBuffer();
		String[] columns = null;
		if (columnNames == null) {
			columns = AbstractDataControl.getDSColumns(fieldDef);
		} else {
			columns = columnNames;
		}		
		int recordCount = records.size();
		
		if (withHeader) {
			for (int i=0; i<columns.length; i++) {			
				out.append(columns[i]+"," );			
			}
			out.append("\n");
		}		
		
		for (int i=0; i<recordCount; i++) {			
			out.append(recordToCsv(records.get(i),columns, fieldDef));
			out.append("\n");
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
	  
	 
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	public static String serializeMap(Properties map, String format) throws Exception {
		return serializeMap((Map<String, String>)map, format);
	}
	*/
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
	
	public static String serializeRecord(Map<String, String> record, String format) throws Exception {
		if (format== null || format.equals("")) { return recordToJson(record);}
		else {
			if (format.equals(HttpRequest.DATA_FORMAT_JSON)) { return recordToJson(record);}
			if (format.equals(HttpRequest.DATA_FORMAT_XML)) { return recordToXml(record, AbstractDataControl.RECORD_XML_ROOT_TAG);}
			if (format.equals(HttpRequest.DATA_FORMAT_CSV)) { return recordToJson(record);}
		}
		throw new Exception("cannot serialize record to format "+format ); 
	}
	
	
	public static String recordToJson(Map<String, String> record) throws Exception {
		StringBuffer dataOut = new StringBuffer();
		int x=0;
		Iterator<String> it = record.keySet().iterator();		
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
	
	
	
	public static String recordToXml(Map<String, String> record, String rootTagName) throws Exception {
		StringBuffer s = new StringBuffer();
		Iterator<String> it = record.keySet().iterator();	
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
	
	 
	public static void populateRecordFromRecordSetRow(Map<String,String> record, ResultSet rs, String[] columnNames) throws SQLException {
		if (rs.isBeforeFirst()) {
			rs.next();
		}
		int len = columnNames.length;
		for (int i=0; i<len; i++) {
			if (rs.getString(columnNames[i]) != null ) {
				record.put(columnNames[i], rs.getString(columnNames[i]));
			}			
			//System.out.println(columnNames[i]);
		}
	}
	
	public static <T> Map<String,T> filteredMap(Map<String, T>  sourceMap, String[] filterKeys) {
		Map<String, T> t = new HashMap<String, T>(); 
		for(int x=0; x<filterKeys.length; x++) {
			t.put(filterKeys[x], sourceMap.get(filterKeys[x]));
		}
		return t;
	}
  
}
 