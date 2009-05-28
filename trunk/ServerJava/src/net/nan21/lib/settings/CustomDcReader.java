package net.nan21.lib.settings;

import net.nan21.lib.dc.DataControlResolver;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class CustomDcReader extends DefaultHandler{
	
	private Settings settings;
	private String rootPath;
	
	public CustomDcReader(String rootPath) {
		super();
		this.settings = Settings.getInstance();
		this.rootPath = rootPath;
	}
	
	
	public void startDocument () throws SAXException {
    }

    public void endDocument()  throws SAXException {
       
    }
    
    public void startElement (String uri, String name, String qName, Attributes atts) throws SAXException {
        if (qName.equals(Settings.TAG_CUSTOM_DC)) {
        	DataControlResolver dcr = new DataControlResolver(atts.getValue("code"));
        	dcr.setTechnology(atts.getValue("lang"));
        	dcr.setNamespace(getNamespaceFromClassName(atts.getValue("className")));
        	this.settings.getCustDcs().put(atts.getValue("code"), dcr);
        }    	         
    }
    
    private String getNamespaceFromClassName(String fullClassName) {
    	if (fullClassName.lastIndexOf(".")>-1) {
    		return fullClassName.substring(0, fullClassName.lastIndexOf("."));
    	}else {
    		return "";
    	}
    	
    }
    
    public void endElement(String name) throws SAXException {
    }
 
    
}
