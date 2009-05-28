package net.nan21.lib.dc;

import java.util.Map;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

 

	public class DcTranslReader extends DefaultHandler {
		
		public static String TAG_DC_PROPERTY = "DcProperty" ;
		public static String TAG_FIELD_LABEL = "FieldLabel" ;
		
		private String itemType = null; 
		private String itemName = null;
		private StringBuffer buffer = null;
		
		
		private Map<String, String> trl;
		
		public DcTranslReader( Map<String, String> trl ) {
			super();
			this.trl = trl;
		}
		
		
		public void startDocument () throws SAXException {
	        //showData ("<?xml version='1.0' encoding='UTF-8'?>");
	    }

	    public void endDocument()  throws SAXException {
	        
	    }
	    
	    public void startElement (String uri, String name, String qName, Attributes atts) throws SAXException {
    		if (qName.equals(TAG_DC_PROPERTY) || qName.equals(TAG_FIELD_LABEL)) {
    			itemType = qName;
        		itemName = atts.getValue("name");
        		buffer = new StringBuffer();	
    		}	    	
	    }
 
	    public void endElement(String namespaceURI, String localName,
	    	     String qualifiedName) {
	    	if (qualifiedName.equals(TAG_DC_PROPERTY) || qualifiedName.equals(TAG_FIELD_LABEL)) {
    			trl.put(itemType+"."+itemName, buffer.toString());         		
    		}	 
	    	buffer = null;
	    }
	    
	    public void characters(char[] text, int start, int length) throws SAXException {
	    	if (buffer != null) {
	            buffer.append(text, start, length); 
	          }	    		    	 
	    }
	}
